<template>
  <component :is="wrapper.component" v-bind="wrapper.props">
    <h3 v-if="$slots['label-above']">{{ schema.label.text }}</h3>
    <!-- <span v-html="items[0].processed" /> -->
    <b-list-group>
      <!-- ^ possibly add flush attribute here -->
      <b-list-group-item button v-for="item in items" :key="item.message">
        {{ item.message }}
      </b-list-group-item>
    </b-list-group>
  </component>
</template>

<script>
import { DruxtFieldMixin } from 'druxt-entity'

export default {
  name: 'DruxtFieldTextDefaultFieldRecipeInstruction',

  mixins: [DruxtFieldMixin],

  computed: {},

  data: {
    items: [
      { message: 'Step one.' },
      { message: 'Step two.' },
      { message: 'Step three.' },
      { message: 'Step four.' },
      { message: 'Step five.' },
    ],
  },
}
</script>
