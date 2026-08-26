import gdscript from './highlight/gdscript.js'
import sdsl from './highlight/sdsl.js'

const app = {
    languageDropdownCreated: false,
    readerVersionKey: 'stride-docs-version',
    iconLinks: [
        {
            icon: 'github',
            href: 'https://github.com/stride3d/stride',
            title: 'GitHub'
        },
        {
            icon: 'discord',
            href: 'https://discord.gg/f6aerfE',
            title: 'Discord'
        },
        {
            icon: 'twitter',
            href: 'https://twitter.com/stridedotnet',
            title: 'Twitter'
        }
    ],
    waitForNavbarAndAddLanguageNavigation: function () {
        // Select the target node to observe for changes
        const targetNode = document.getElementById("navbar");

        // If the target node is not found, display an error and exit
        if (!targetNode) {
            console.log('Navbar element not found');
            return;
        }

        // Callback function to execute when the desired element is injected
        const callback = async (mutationsList, observer) => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    const navElement = document.querySelector('.navbar-nav');
                    if (navElement) {

                        // Call your function to add the language navigation
                        try {
                            await this.addLanguageNavigation();
                            console.log('Language navigation added successfully');
                        } catch (err) {
                            console.log('Failed to add language navigation:', err);
                        }

                        // Disconnect the observer once the element is found
                        observer.disconnect();

                        return;
                    }
                }
            }
        };

        // Create an observer instance with the callback function
        const observer = new MutationObserver(callback);

        // Options for the observer (which mutations to observe)
        const config = { childList: true, subtree: true };

        // Start observing the target node for configured mutations
        observer.observe(targetNode, config);
    },
    createLanguageLink: function (language) {

        const languageLink = document.createElement('a');
        languageLink.classList.add('dropdown-item');
        languageLink.href = language.Href;
        languageLink.textContent = language.Name;
        languageLink.role = 'button';
        languageLink.setAttribute('data-language', language.Code);
        return languageLink;

    },
    createLanguageItem: function (language, pattern) {

        const languageItem = document.createElement('li');
        const languageLink = this.createLanguageLink(language);
        languageItem.appendChild(languageLink);

        languageLink.addEventListener('click', (event) => {
            event.preventDefault();
            const lang = "/" + event.target.getAttribute('data-language') + "/";
            window.location.href = window.location.href.replace(pattern, lang);
        });

        return languageItem;
    },
    createLanguageDropdown: function (languages, pattern) {

        const languageDropdown = document.createElement('li');
        languageDropdown.classList.add('nav-item', 'dropdown');

        const languageDropdownLink = document.createElement('a');
        languageDropdownLink.classList.add('nav-link', 'dropdown-toggle');
        languageDropdownLink.href = '#';
        languageDropdownLink.role = 'button';
        languageDropdownLink.setAttribute('data-bs-toggle', 'dropdown');
        languageDropdownLink.setAttribute('aria-expanded', 'false');
        languageDropdownLink.textContent = '🌐';

        const dropdownMenu = document.createElement('ul');
        dropdownMenu.classList.add('dropdown-menu');

        languages.forEach(language => {
            const languageItem = this.createLanguageItem(language, pattern);
            dropdownMenu.appendChild(languageItem);
        });

        languageDropdown.appendChild(languageDropdownLink);
        languageDropdown.appendChild(dropdownMenu);

        return languageDropdown;
    },
    addLanguageNavigation: async function () {

        if (this.languageDropdownCreated) return;

        const navElement = document.querySelector('.navbar-nav');

        if (!navElement) {
            console.log('Navbar not found');
            return;
        }

        // Build the dynamic URL for languages.json
        const currentURL = new URL(window.location.href);
        const urlSegments = currentURL.pathname.split('/');
        const baseURL = `${currentURL.origin}/${urlSegments[1]}/${urlSegments[2]}/languages.json`;

        // Fetching the JSON from the URL
        let languages;

        try {
            const response = await fetch(baseURL);

            if (!response.ok) {
                console.error('Failed to fetch languages.json');

                return;
            }

            languages = await response.json();

        } catch (error) {

            console.error(`Error fetching languages: ${error}`);

            return;
        }

        const enabledLanguages = languages.filter(language => language.Enabled);

        if (enabledLanguages.length === 1) return;

        const languageCodes = enabledLanguages.map(language => language.Code).join('|');
        const pattern = new RegExp(`\\/(?:${languageCodes})\\/`, 'i');

        const languageDropdown = this.createLanguageDropdown(enabledLanguages, pattern);
        navElement.appendChild(languageDropdown);
        this.languageDropdownCreated = true;
    },
    addVersionNavigation: function () {

        const version = document.getElementById("toc");
        const selectHtml = `
        <select id="stride-current-version" class="form-select mb-2 form-select-sm" aria-label="Default select for verion">
            <option selected>Latest</option>
        </select>`;

        version.insertAdjacentHTML("afterbegin", selectHtml);
    },
    loadVersions: function () {

        fetch('/versions.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error loading versions.json: ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                const selectElement = document.getElementById("stride-current-version");
                selectElement.innerHTML = '';

                data.docs.forEach(doc => {
                    const option = document.createElement('option');
                    option.value = doc.url;
                    option.textContent = doc.url === data.latest ? `${doc.name} (latest)` : doc.name;
                    selectElement.appendChild(option);
                });

                const urlSplits = window.location.pathname.split('/');
                let urlVersion = urlSplits[1];
                if (urlVersion === 'latest') {
                    urlVersion = data.latest;
                }

                selectElement.value = urlVersion;
                selectElement.dispatchEvent(new Event('change'));
                this.redirectToCurrentDocVersion();
            }).catch(error => {
                console.log('Error loading or processing versions.json:', error);
            });
    },
    redirectToCurrentDocVersion: function () {

        const selectElement = document.getElementById('stride-current-version');

        selectElement.addEventListener('change', () => {
            const hostVersion = window.location.host;
            const pathVersion = window.location.pathname;
            const targetVersion = selectElement.value;

            // Generate page URL in other version
            let newAddress = '//' + hostVersion + '/' + targetVersion + '/' + pathVersion.substring(pathVersion.indexOf('/', 1) + 1);

            // Check if address exists
            fetch(newAddress, { method: 'HEAD' })
                .then(response => {
                    if (!response.ok) {
                        // It didn't work, let's just go to the top page of the section (i.e. manual, api, release notes, etc.)
                        newAddress = '//' + hostVersion + '/' + targetVersion + '/' + pathVersion.split('/')[2];
                        if (pathVersion.split('/').length >= 4) {
                            newAddress += '/' + pathVersion.split('/')[3];
                        }
                    }
                })
                .catch(error => {
                    console.log('Error checking URL:', error);
                })
                .finally(() => {
                    // Go to page
                    window.location.href = newAddress;
                });
        });
    },
    // Unversioned pages (/en/..., see versions.json) are shared by all versions: their links to the versioned documentation
    // (/latest/... in the navbar, /en/manual/... in search results) go to the version the reader comes from, given as ?v=
    // by the redirects of web.config and remembered while browsing these pages. Without it, they go to latest.
    keepReaderVersion: async function () {
        const url = new URL(window.location.href);
        const requestedVersion = url.searchParams.get('v');
        if (requestedVersion !== null) {
            // The address of an unversioned page has no version, i.e. when shared
            url.searchParams.delete('v');
            history.replaceState(history.state, '', url);
        }
        let version = requestedVersion;
        try {
            version ??= sessionStorage.getItem(this.readerVersionKey);
        } catch {
            // Storage can be unavailable (i.e. some private modes)
        }
        if (!version) return;

        let versions;
        try {
            versions = await (await fetch('/versions.json')).json();
        } catch (error) {
            console.log('Error loading versions.json:', error);
            return;
        }
        // Only a hosted version: latest, or an old link to a version that isn't (i.e. /2.0/ReleaseNotes/), go to latest
        const isHosted = (versions.docs || []).some(doc => doc.url === version);
        if (requestedVersion !== null) {
            try {
                if (isHosted) {
                    sessionStorage.setItem(this.readerVersionKey, version);
                } else {
                    sessionStorage.removeItem(this.readerVersionKey);
                }
            } catch {
                // Storage can be unavailable (i.e. some private modes)
            }
        }
        if (!isHosted) return;
        const unversioned = versions.unversioned || [];

        const versionedHref = href => {
            const url = new URL(href, window.location.href);
            const match = url.origin === window.location.origin && url.pathname.match(/^\/(latest\/)?([a-z]{2})\/(.*)$/);
            if (!match) return null;
            const section = match[3].split('/')[0];
            if (!match[1] && (!section || unversioned.includes(section))) return null;
            return `/${version}/${match[2]}/${match[3]}${url.search}${url.hash}`;
        };
        const updateLink = event => {
            const link = event.target.closest && event.target.closest('a[href]');
            const href = link && versionedHref(link.href);
            if (href) link.href = href;
        };
        document.addEventListener('click', updateLink, true);
        document.addEventListener('auxclick', updateLink, true);
    },
    start: function () {

        // i.e. /en/contributors/index.html, as opposed to /4.4/en/manual/index.html
        const isUnversioned = /^[a-z]{2}$/.test(window.location.pathname.split('/')[1]);
        if (isUnversioned) {
            // These pages have no version, and only exist in English
            this.keepReaderVersion();
            return;
        }

        this.waitForNavbarAndAddLanguageNavigation();

        // Pages without a table of contents have nowhere to put the version selector,
        // and throwing here would stop docfx from rendering the rest of the page (i.e. the navbar)
        if (document.getElementById("toc")) {
            this.addVersionNavigation();
            this.loadVersions();
        }
    },
    configureHljs: function (hljs) {
        hljs.registerLanguage('gdscript', gdscript);
        hljs.registerLanguage('sdsl', sdsl);
    }
};

app.start = app.start.bind(app);

export default app;
