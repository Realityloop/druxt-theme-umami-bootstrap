import Vue from 'vue'

import { Components } from 'druxt-theme-umami-bootstrap'

Vue.use({
  install: function (Vue) {
    if (Vue._druxt_umami_bootstrap_installed) return
    Vue._druxt_umami_bootstrap_installed = true

    // Register components.
    for (const component in Components) {
      Vue.component(component, Components[component])
    }
  }
})
