import { resolve } from 'path'

import * as Components from './components'
export { Components }

export * from './components'

export default function (moduleOptions = {}) {
  // Use root level Druxt options.
  if (typeof this.options === 'undefined' || !this.options.druxt) {
    throw new TypeError('Druxt settings missing.')
  }
  const options = this.options.druxt

  // Add bootstrap-vue module.
  this.addModule('bootstrap-vue/nuxt')

  // Add plugin.
  this.addPlugin({
    src: resolve(__dirname, '../nuxt/plugin.js'),
    fileName: 'druxt-theme-umami-bootstrap.js',
    options
  })
}
