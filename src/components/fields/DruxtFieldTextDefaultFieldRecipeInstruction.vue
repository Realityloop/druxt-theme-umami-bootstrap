<template>
  <component :is="wrapper.component" v-bind="wrapper.props">
    <h3 v-if="$slots['label-above']">{{ schema.label.text }}</h3>

    <b-list-group v-if="list">
      <b-list-group-item button v-for="(item, key) of list" :key="key">
        {{ item }}
      </b-list-group-item>
    </b-list-group>

    <span v-else v-html="items[0].processed" />
  </component>
</template>

<script>
import { parseFragment } from 'parse5'
import { DruxtFieldMixin } from 'druxt-entity'

export default {
  name: 'DruxtFieldTextDefaultFieldRecipeInstruction',

  mixins: [DruxtFieldMixin],

  computed: {
    list() {
      const fragment = parseFragment(this.items[0].processed)
      if (fragment.childNodes[0].tagName !== 'ol') {
        return false
      }

      return fragment.childNodes[0].childNodes
        .map((item) =>
          item.tagName === 'li' ? item.childNodes[0].value : null
        )
        .filter((item) => item)
    },
  },
}
</script>
