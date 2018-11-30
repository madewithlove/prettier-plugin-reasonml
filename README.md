<p align="center">
  &nbsp;&nbsp;<img alt="Prettier"
  src="https://cdn.rawgit.com/prettier/prettier-logo/master/images/prettier-icon-light.svg">&nbsp;&nbsp;
  &nbsp;&nbsp;<img alt="Elm"
  height="210"
  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Elm_logo.svg/1024px-Elm_logo.svg.png">&nbsp;&nbsp;
</p>

# Prettier ReasonML plugin

Wrapper plugin adding `refmt` support to Prettier. This brings `*.re` files support to Prettier and allow you to format those files like you would the rest of your codebase, while also inheriting the configured Prettier options. This follows the same model as the [Elm plugin](https://github.com/gicentre/prettier-plugin-elm) in that the code to format is passed directly to `refmt` and isn't transformed into an AST, the goal of this package is to simply integrate refmt more smoothly into your workflow if you already use Prettier.

## Installation

```bash
npm install prettier prettier-plugin-reasonml -g # or
yarn global add prettier prettier-plugin-reasonml
```

## Usage

All you need to do is use Prettier on ReasonML files like you would any other files:

```bash
prettier src/**/*.re --write --print-width 120
```

VSCode plugin support is currently [blocked by this issue](https://github.com/prettier/prettier-vscode/issues/395).

## Credits

This is largly inspired by [prettier-plugin-elm](https://github.com/gicentre/prettier-plugin-elm) so props to them.
