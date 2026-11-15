# `@fjordcleanup/trash-proto`

Protocol definitions for the application.

## Install with NPM

The package is published to the
[GitHub npm registry](https://github.com/fjordcleanup/trash-proto/pkgs/npm/trash-proto).

Configure the `@fjordcleanup` scope to use it, by adding this line to the
project's `.npmrc`:

```
@fjordcleanup:registry=https://npm.pkg.github.com
```

The GitHub npm registry requires authentication, even for public packages.
Locally, log in with a
[personal access token (classic)](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-with-a-personal-access-token)
that has the `read:packages` scope:

```bash
npm login --scope=@fjordcleanup --auth-type=legacy --registry=https://npm.pkg.github.com
```

Then install the package:

```bash
npm i --save-exact @fjordcleanup/trash-proto
```

In GitHub Actions, configure `actions/setup-node` to authenticate with the
workflow's `GITHUB_TOKEN`:

```yaml
permissions:
  packages: read

steps:
  - uses: actions/setup-node@v5
    with:
      registry-url: https://npm.pkg.github.com
      scope: "@fjordcleanup"

  - run: npm ci
    env:
      NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
