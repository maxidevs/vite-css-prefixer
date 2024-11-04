# vite-css-prefixer

[![License: ISC](https://img.shields.io/badge/License-ISC-green.svg)](https://opensource.org/licenses/ISC) A Vite plugin for automatically prefixing CSS classes and optionally minifying the output CSS using PostCSS.

## Installation

Install the plugin via npm or yarn:
```bash 
  npm install vite-css-prefixer --save-dev # or yarn add vite-css-prefixer --dev
```

## Usage

To use `vite-css-prefixer`, configure it in your `vite.config.js` file as follows:
```javascript
import { defineConfig } from 'vite'
import viteCssPrefixer from 'vite-css-prefixer'

export default defineConfig({
  plugins: [
    viteCssPrefixer({
      prefix: 'custom__', // Custom prefix to apply
      minify: true, // Enable CSS minification
      map: true, // Generate source map
      files: ['index.css'], // Specify files to be processed (optional)
      debug: true // Enable debug logs for detailed processing information
    })
  ]
})
```
## Options

Here are all the available options for configuring `vite-css-prefixer`:
| Option   | Type    | Default      | Description                                                                                                                         |
|----------|---------|--------------|-------------------------------------------------------------------------------------------------------------------------------------|
| `prefix` | `string`| `'prfx__'`   | Prefix to apply to all CSS selectors.                                                                                              |
| `minify` | `boolean`| `false`     | Whether to minify the CSS output.                                                                                                  |
| `map`    | `boolean`| `false`     | Whether to generate a source map.                                                                                                  |
| `ignore` | `array`  | `[]`        | List of selectors or regex patterns to ignore when prefixing.                                                                       |
| `files`  | `array`  | `[]`        | List of specific files to be processed. If empty, all CSS files will be processed.                                                  |
| `debug`  | `boolean`| `false`     | Enable debug mode to print detailed logs in the console, including color-coded messages to help you trace processing flow and detect issues more easily. |

### Example Configuration
```javascript
import { defineConfig } from 'vite'
import viteCssPrefixer from 'vite-css-prefixer'

export default defineConfig({
  plugins: [
    viteCssPrefixer({
      prefix: 'myPrefix__', // Custom prefix to apply to all selectors
      minify: true, // Enables CSS minification to reduce file size
      map: true, // Generates source maps for easier debugging
      files: ['index.css', 'styles/main.css'], // Only process specified files
      debug: true // Logs detailed processing information to the console
    })
  ]
})
```
With `debug: true`, you'll see messages like:
-   Processing files
-   Skipping files not in the specified list
-   Applying prefix
-   Minifying CSS

### Color-Coded Logs in Debug Mode
When `debug` mode is enabled, the logs will display color-coded messages in the console for easier readability:

-   **Processing file** - Blue
-   **Skipping file** - Yellow
-   **Applying prefix** - Green
-   **Minifying CSS** - Magenta
-   **Returning processed CSS** - Cyan

These colors are applied via ANSI escape codes for terminals that support them.

## Example Vite React Project Setup

  Here’s a complete setup example with Vite and React:
  

- Run <code>composer install</code>
  
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import viteCssPrefixer from 'vite-css-prefixer'

export default defineConfig({
  plugins: [
    react(),
    viteCssPrefixer({
      prefix: 'bs-',
      minify: true,
      map: true,
      files: ['index.css'],
      debug: true
    })
  ]
})
```
 
## License
This project is licensed under the ISC License. See the [LICENSE](https://opensource.org/licenses/ISC) file for details.