> Guess you're a contributor now!
>
> **This is the most important file for you to read as a contributor.** If written well, this file will explain *everything* you need to know in order to successfully contribute to the project. If a project *does not* have this file, you should ask for guidelines by opening an issue.

# Contributing

Thanks for your interest in contributing! Contributions are always welcome and appreciated. If you're looking to make your first contribution or improve this project, please follow the steps outlined below
> **This note is very important:**
> Before making any contribution or changes, please check the list of issues to see if it is already assigned to someone. If it is not, then start a discussion or make a request to be assigned to the issue by leaving a comment on the issue.

## Issue Tracking

We use [GitHub Issues](https://github.com/ThierryRakotomanana/kanban-js/issues) to track all tasks related to this project.

## Build the project locally

In order to contribute to a project on GitHub, you must first get a copy of the project running locally on your computer. This process is sometimes called a "build process", and every project's process will have different requirements. Some requirements are due to the project being hosted on GitHub, some are due to the programming language used, some are due to the project's dependencies.

There are two steps to building this project:

1. [Fork the repository](#fork-the-repository)
2. [Clone your fork](#clone-your-fork)

### Fork the repository

A *fork* is a copy of a repository. Forking a repository lets you to make changes to your copy without affecting any of the original code.

Click **Fork** (in the top-right corner of the page) to copy this repository to your GitHub account.

### Clone your fork

A *clone* is a downloaded version of a repository. Cloning our fork lets you download a copy of the repository to your computer.

1. Use `git` to clone your fork

```shell
git clone https://github.com/YOUR-USERNAME/kanban-js.git
```

where `YOUR-USERNAME` is your GitHub username. Here you're copying the contents of the Kanban JS repository on GitHub to your computer.

2. Create a branch for your modifications.

Change to the repository directory on your computer (if you are not already there):

```shell
cd "Kanban-js"
```

Now create a branch using the `git switch` command:

```shell
git switch -c your-new-branch-name
```

For example:

```shell
git switch -c aza-manao-copie-coller-loatra-fa-tsss
```

3. Make your changes and commit them.

In the project directory makes your change and save them after execute the command `git status`, you'll see there are changes.

Add those changes to the branch you just created using the `git add` command:

```shell
git add .
```

Now commit those changes using the `git commit` command:

```shell
git commit -m "fix issue #TAG_ISSUE : description of change"
```

4. Push to the main branch of your fork.

Push your changes using the command `git push`:

```shell
git push origin -u <add-your-branch-name>
```

replacing `<add-your-branch-name>` with the name of the branch you created earlier.

<details>
<summary> <strong>If you get any errors while pushing, click here:</strong> </summary>

* ### Authentication Error

     <pre>remote: Support for password authentication was removed on August 13, 2021. Please use a personal access token instead.
  remote: Please see https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/ for more information.
  fatal: Authentication failed for 'https://github.com/<your-username>/first-contributions.git/'</pre>  
   Go to [GitHub's tutorial](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) on generating and configuring an SSH key to your account.

</details>

### Open a Pull Request

Open a pull request and describe your modifications.
Go to your Github account and navigate to your repository forked. Noticed you see a green button named Pull Request, click on it and send. After describes the change you made.

Community contributions are highly appreciated, so thanks for your contribution.

1. Find the [New Pull Request](https://github.com/ThierryRakotomanana/Kanban-js/compare/) button
2. Select the option to **compare across forks**
3. Select **your username** in the `head fork` option
4. Select **your username** in the `base` option<sup>*</sup>
5. Click **Create Pull Request**

###### <sup>*</sup> This is a weird requirement. In the real-world, most projects will expect you to open a Pull Request against the `master` or `main` base branch. Can you guess why it's needed here?

## License

By contributing, you agree that your contributions will be licensed under its MIT license.
