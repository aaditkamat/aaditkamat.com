# Aadit's Personal Website

[![CodeFactor](https://www.codefactor.io/repository/github/aaditkamat/aaditkamat.com/badge)](https://www.codefactor.io/repository/github/aaditkamat/aaditkamat.com)
[![Code Scanning](https://github.com/aaditkamat/aaditkamat.com/actions/workflows/codeql.yml/badge.svg)](https://github.com/aaditkamat/aaditkamat.com/actions/workflows/codeql.yml)
[![GitHub Pages Deployment](https://github.com/aaditkamat/aaditkamat.com/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/aaditkamat/aaditkamat.com/actions/workflows/pages/pages-build-deployment)

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
