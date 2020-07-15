<template>
  <b-row>
    <b-container class="mb-3 mt-3 mb-md-5 mt-md-5">
      <b-row>
        <slot v-bind="{ wrapper }" />

        <b-col id="druxt" class="mb-3">
          <b-card
            border-variant="light"
            :class="{ 'h-100': true, shadow: hover }"
            title="Druxt.js"
            sub-title="The Drupal powered Nuxt framework"
            @click="onClick"
            @mouseover="hover = true"
            @mouseleave="hover = false"
          >
            <b-row>
              <b-col class="m-auto" cols="8">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 400 400"
                  xml:space="preserve"
                >
                  <g transform="translate(0 50)">
                    <path
                      class="st0"
                      d="M227.9,83.5l-13.7,24.1l-46.8-82.4L23.7,278.2H121c0,13.3,10.6,24.1,23.7,24.1h-121c-8.5,0-16.3-4.6-20.5-12.1
                      c-4.2-7.5-4.2-16.6,0-24.1L146.9,13.1C151.1,5.6,159,1,167.4,1c8.5,0,16.3,4.6,20.5,12.1L227.9,83.5z"
                    />
                    <path
                      class="st1"
                      d="M331.7,266.1l-90.1-158.6l-13.7-24.1l-13.7,24.1l-90,158.6c-4.2,7.5-4.2,16.6,0,24.1
                      c4.2,7.5,12.1,12.1,20.5,12.1h166.4c8.5,0,16.3-4.6,20.5-12S335.9,273.6,331.7,266.1L331.7,266.1z M144.7,278.2l83.2-146.5
                      l83.2,146.5H144.7L144.7,278.2z"
                    />
                    <path
                      class="st2"
                      d="M396,290.2c-4.2,7.5-12.1,12.1-20.5,12.1h-64.4c13.1,0,23.7-10.8,23.7-24.1h40.7L260.1,75l-18.5,32.6
                      l-13.7-24.1l11.7-20.5c4.2-7.5,12.1-12.1,20.5-12.1c8.5,0,16.3,4.6,20.5,12.1L396,266.1C400.3,273.6,400.3,282.8,396,290.2z"
                    />
                  </g>
                </svg>
              </b-col>
            </b-row>

            <b-card-text class="my-4">
              Druxt.js provides a minimal config, drop-in solution for Drupal
              JSON:API powered Nuxt.js frontends.
            </b-card-text>

            <b-button
              class="w-100"
              :href="url"
              :variant="hover ? 'success' : 'primary'"
            >
              Druxt.js website <b-icon-arrow-right />
            </b-button>
          </b-card>
        </b-col>
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
    hover: false,
    url: 'https://www.druxtjs.com',
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

  methods: {
    onClick() {
      window.open(this.url)
    },
  },
}
</script>

<style scoped>
#druxt {
  cursor: pointer;
}

.st0 {
  fill: #3498db;
}

.st1 {
  fill: #2f495e;
}

.st2 {
  fill: #108775;
}
</style>
