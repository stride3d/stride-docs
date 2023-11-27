# Troubleshooting and FAQ

## Known Issues

1. **Sponsor Page - Widget Incompatibility with dark theme:** Widgets on the Sponsor Page currently do not support the dark theme. As a workaround, we can either fetch data from https://opencollective.com/stride3d/members/all.json and render it before deployment or make it dynamic. Both options would give us more control over the content and design, and allow for better compatibility with the dark theme in the future.
1. **Search Page - Lack of pagination:** At present, the Search Page does not have pagination, which limits the maximum number of search results displayed to 100. To resolve this issue, we can implement a pager in JavaScript. This would enable users to navigate through multiple pages of search results, providing a more comprehensive view of the available content. 

## Common Issues and Solutions

Any issue should be added to Stride Website [GitHub issues](https://github.com/stride3d/stride-website/issues) so it can be tracked and elaborated by the community.

## Frequently Asked Questions

**Q:** I just want to fix a typo in a post. Do I need to follow your installation steps?

**A:** *No, you can fix the typo directly on the GitHub website. However, you will still need to fork the repo, make your update on the main branch or a new branch, and then create a pull request. You can follow this guide for [minor updates](content.md#small-updates).*