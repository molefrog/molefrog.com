// See http://brunch.io for documentation.
module.exports = {
  files: {
    javascripts: {joinTo: 'app.js'},
    stylesheets: {joinTo: 'app.css'},
    templates: {joinTo: 'app.js'}
  },

  plugins: {
    pug: {
      pugRuntime: false,
      locals: {
        isProduction: process.env.NODE_ENV === 'production'
      }
    },
    babel: {
      presets: ['es2015']
    },
    postcss: {
      processors: [require('autoprefixer')]
    },
    sass: {
      options: {
        includePaths: ['node_modules/sanitize.css/']
      }
    }
  }
}
