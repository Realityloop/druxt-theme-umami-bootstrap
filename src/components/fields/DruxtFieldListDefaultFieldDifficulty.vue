<template>
  <component :is="wrapper.component" v-bind="wrapper.props">
    <b-badge pill :variant="variant">{{ items[0] }}</b-badge>
  </component>
</template>

<script>
import { DruxtFieldMixin } from 'druxt-entity'

export default {
  name: 'DruxtFieldListDefaultFieldDifficulty',

  mixins: [DruxtFieldMixin],

  computed: {
    variant() {
      switch (this.items[0]) {
        case 'easy':
          return 'success'
        case 'medium':
          return 'warning'
        case 'hard':
          return 'danger'
      }
      return false
    },
  },
}
</script>
