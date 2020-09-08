<template>
  <b-row>
    <b-container class="mb-3 mt-3 mb-md-5 mt-md-5">
      <b-row>
        <slot name="results" v-bind="{ wrapper }" />
      </b-row>
    </b-container>
  </b-row>
</template>

<script>
import { BIconArrowRight } from 'bootstrap-vue'
import { DruxtViewsViewMixin } from 'druxt-views'

export default {
  name: 'DruxtViewPromotedItemsBlock1',

  mixins: [DruxtViewsViewMixin],

  components: { BIconArrowRight },

  data: () => ({
    hover: false
  }),

  computed: {
    wrapper: () => ({
      component: 'b-col',
      props: {
        class: 'mb-3',
        cols: 12,
        md: 6,
      },
    }),
  },
}
</script>
