# Contribute to Stride engine

Welcome to the engine contributing documentation!

These pages provide information about how to contribute to the engine as well as resources related to how Stride works and its architecture.

## How to contribute

1. **Find something you would like to work on.** If you are just getting started with Stride, issues marked with ['good first issue'](https://github.com/stride3d/stride/labels/good%20first%20issue) can be a good entry point.

2. **Notify other users.** Leave a message on the appropriate issue or create one if none exists.

    > [!WARNING]
    > This step is important to **ensure no one else is working on that same issue** and **allow other contributors and users to chime in**, so that your changes are properly architectured and fit well with the rest of the project.

3. **Push your changes to a specific branch in your fork.**

4. **Submit a pull request and address reviews.** Other contributors and users may require you to make changes to make sure everything is working correctly and to ensure consistency.

    > [!NOTE]
    > After creating that pull request and if it's your first time contributing a [CLA assistant](https://cla-assistant.io/) will ask you to sign the [.NET Foundation Contribution License Agreement](https://dotnetfoundation.org/docs/default-source/default-document-library/contribution-license-agreement.pdf?sfvrsn=40626e42_3).

### Paid work 💵

We also have funded [Open Collective Projects](https://opencollective.com/stride3d/projects/) in case **you want to earn a little extra**. These are either bug bounties, requests for new features or other tasks that are deemed important enough. **We can also create a new project for you** in case you are working on something large that the community would like to see.

For more information, visit [Paid work](bug-bounties.md).

## Coding style

Please use and follow the coding style outlined in **the `.editorconfig` file** in the root of the repository ([link](https://github.com/stride3d/stride/blob/master/.editorconfig)). Your IDE of choice should be able to use it in order to automatically enforce its rules.

## Architecture documentation

We store architecture documentation in the main engine repository under `docs/`. They are **automatically copied** when building the documentation website to the [🏗️ Architecture](architecture/index.md) section for easier viewing.
