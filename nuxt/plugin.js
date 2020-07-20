import Vue from 'vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { Components as DruxtComponents } from 'druxt-theme-umami-bootstrap'

import {
  BBadge,
  BButton,
  BCollapse,
  BFormGroup,
  BImg,
  BLink,
  BreadcrumbPlugin,
  CardPlugin,
  FormPlugin,
  FormInputPlugin,
  FormTextareaPlugin,
  InputGroupPlugin,
  LayoutPlugin,
  ListGroupPlugin,
  ModalPlugin,
  NavbarPlugin
} from 'bootstrap-vue'

const BootstrapVueComponents = {
  BBadge,
  BButton,
  BCollapse,
  BFormGroup,
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
Vue.use(FormTextareaPlugin)
Vue.use(InputGroupPlugin)
Vue.use(LayoutPlugin)
Vue.use(ListGroupPlugin)
Vue.use(ModalPlugin)
Vue.use(NavbarPlugin)
