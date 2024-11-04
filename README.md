# vite-css-prefixer
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

A Vite plugin for prefixing CSS selectors using PostCSS.

## Installation

Install the plugin via npm or yarn:

```bash
npm install vite-css-prefixer --save-dev
# or
yarn add vite-css-prefixer --dev
```

## Usage

To use the `vite-css-prefixer`, you need to configure it in your `vite.config.js` file:

```javascript
import viteCssPrefixer from 'vite-css-prefixer';

export default {
  plugins: [
    viteCssPrefixer({
      prefix: 'custom-prefix-', // Change the prefix
      minify: true, // Enable minification
    }),
  ],
};
```

## Options

| Name    | Description                                           |
|---------|-------------------------------------------------------|
| `prefix` (string) | Prefix value to be used for CSS selectors.     |
| `minify` (boolean) | Whether to minify the CSS output. Defaults to `false`. |
| `map` (boolean) | Whether to generate a sourcemap. Defaults to `false`. |

### Example Usage

In your `vite.config.js`, you can configure the plugin as follows:

```javascript
import { defineConfig } from 'vite'
import viteCssPrefixer from 'vite-css-prefixer'

export default defineConfig({
  plugins: [
    viteCssPrefixer({
      prefix: 'myPrefix__', // Custom prefix
      minify: true, // Enable minification
      map: true // Enable sourcemap generation
    })
  ]
})
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.