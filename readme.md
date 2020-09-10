# Steps for running in dev mode

```bash
# Install deps
yarn

# Run in dev mode
yarn dev
```

## Troubleshooting

Assuming that this git repo is in the same folder as https://github.com/mopcweb/someExamplePackage.git

If not, please change in ./package.json
```json
...
"@some-pkg/test": "link:path/to/someAnotherPackage/packages/test",
"@some-pkg/tsed": "file:path/to/someAnotherPackage/packages/tsed",
...
```

and in ./nodemon.json
```bash
...
"watch": ["src", "path/to/someExamplePackage/packages"],
...
```

and then run in dev mode
