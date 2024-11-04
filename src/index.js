import { createRequire } from 'module'
import postcss from 'postcss'
import cssnano from 'cssnano'
const require = createRequire(import.meta.url)
const postcssPrefixer = require('postcss-prefixer')

export default function viteCssPrefixer (options = {}) {
  const {
    prefix = 'prfx__',
    minify = false,
    map = false,
    ignore = [],
    files = [],
    debug = false // Nueva opción para activar o desactivar logs de depuración
  } = options

  // Función auxiliar para logs de depuración
  const log = (message, color = '\x1b[36m') => {
    if (debug) {
      console.log(`${color}[vite-css-prefixer] ${message}\x1b[0m`)
    }
  }

  return {
    name: 'vite-css-prefixer',
    async transform (code, id) {
      // Verifica si se debe procesar este archivo
      const shouldProcess = files.length === 0 || files.some(file => id.endsWith(file))

      if (!id.endsWith('.css')) {
        return null
      }
      if (id.includes('node_modules')) {
        return null
      }
      log(`Processing file: ${id}`, '\x1b[34m') // Color azul

      if (!shouldProcess) {
        log(`Skipping file not in the specified files list: ${id}`, '\x1b[33m') // Color amarillo
        return null
      }

      log(`Applying prefix: "${prefix}" to file: ${id}`, '\x1b[32m') // Color verde

      // Procesa CSS con postcss y el plugin de prefijos
      const result = await postcss([
        postcssPrefixer({
          prefix,
          ignore: [/^prfx__/, ...ignore]
        })
      ]).process(code, { from: id, to: id })

      log(`Prefix applied successfully to file: ${id}`, '\x1b[32m') // Color verde

      // Si minify es true, comprime el CSS
      if (minify) {
        log(`Minifying CSS for file: ${id}`, '\x1b[35m') // Color magenta
        const minified = await postcss([cssnano]).process(result.css, { from: id, to: id })

        log(`Minification complete for file: ${id}`, '\x1b[35m') // Color magenta
        return {
          code: minified.css,
          map: map ? minified.map : null
        }
      }

      log(`Returning processed CSS for file: ${id}`, '\x1b[36m') // Color cian
      return {
        code: result.css,
        map: map ? result.map : null
      }
    }
  }
}
