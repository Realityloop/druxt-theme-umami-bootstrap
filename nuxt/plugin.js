import Vue from 'vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { Components as DruxtComponents } from 'druxt-theme-umami-bootstrap'

import {
  BButton,
  BCollapse,
  BImg,
  BLink,
  BreadcrumbPlugin,
  CardPlugin,
  FormPlugin,
  FormInputPlugin,
  InputGroupPlugin,
  LayoutPlugin,
  ModalPlugin,
  NavbarPlugin
} from 'bootstrap-vue'

const BootstrapVueComponents = {
  BButton,
  BCollapse,
  BImg,
  BLink
}

const Components = { ...DruxtComponents, ...BootstrapVueComponents }

Vue.use({
  install: function (Vue) {
    if (Vue._druxt_theme_umami_bootstrap_installed) return
    Vue._druxt_theme_umami_bootstrap_installed = true

    // Register components.
    for (const component in Components) {
      Vue.component(component, Components[component])
    }
  }
})

Vue.use(BreadcrumbPlugin)
Vue.use(CardPlugin)
Vue.use(FormPlugin)
Vue.use(FormInputPlugin)
Vue.use(InputGroupPlugin)
Vue.use(LayoutPlugin)
Vue.use(ModalPlugin)
Vue.use(NavbarPlugin)
