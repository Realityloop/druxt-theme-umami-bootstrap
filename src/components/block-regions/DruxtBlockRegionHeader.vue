<template>
  <b-container>
    <!-- Branding -->
    <slot name="umami_branding" />

    <b-navbar-toggle target="nav-collapse" />

    <b-collapse class="ml-auto" id="nav-collapse" is-nav>
      <!-- Main menu -->
      <slot name="umami_main_menu" :options="menuOptions" />
    </b-collapse>
  </b-container>
</template>

<script>
export default {
  name: 'DruxtBlockRegionHeader',

  data: () => ({
    menuOptions: {
      wrapper: {
        component: 'div',
        props: {
          class: 'ml-auto'
        }
      }
    }
  })
}
</script>
