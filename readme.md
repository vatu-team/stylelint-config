# Vatu Stylelint Config

Use it as is or as a foundation for your own config.

## Installation

```bash
npm install @vatu/stylelint-config --save-dev
```

## Usage

Set your `stylelint` config to:

```json
{
  "extends": "@vatu/stylelint-config"
}
```

### Extending the config

Add a `"rules"` key to your config, then add your overrides and additions there.

For example, to change the `max-line-length` rule to use 80 characters:

```json
{
  "extends": "@vatu/stylelint-config",
  "rules": {
    "max-line-length": 80
  }
}
```

## [Changelog](changelog.md)

## [License](license.md)

Copyright (c) 2022 Vatu Ltd.

## Contact

Vatu - [info@vatu.dev](info@vatu.dev)
