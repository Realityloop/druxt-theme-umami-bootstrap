<template>
  <b-row :style="style" class="pb-3 pt-3 pb-md-5 pt-md-5">
    <b-container>
      <b-row>
        <b-col cols="12" md="6">
          <b-card class="text-white" bg-variant="dark">
            <slot
              name="field_title"
              :options="{ wrapper: { component: 'b-card-title' } }"
            />

            <slot
              name="field_summary"
              :options="{ wrapper: { component: 'b-card-text' } }"
            />

            <b-button :to="this.fields.field_content_link.data.uri.replace('internal:', '')" variant="danger">
              {{ this.fields.field_content_link.data.title }}
            </b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </b-row>
</template>

<script>
import { DruxtEntityMixin } from 'druxt-entity'

export default {
  name: 'DruxtEntityBlockContentBannerBlock',

  mixins: [DruxtEntityMixin],

  data: () => ({
    image: false,
    img: false,
    media: false,
  }),

  created() {
    const query = this.fields.field_media_image.data.data
    this.$store.dispatch('druxtRouter/getEntity', query).then((media) => {
      this.media = media
      const query = media.relationships.field_media_image.data
      this.$store.dispatch('druxtRouter/getEntity', query).then((image) => {
        this.image = image
        this.img = image.attributes.uri.url
      })
    })
  },

  computed: {
    style() {
      if (!this.img) {
        return false
      }

      return {
        backgroundAttachment: 'fixed',
        backgroundImage: `url(${this.img})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        minHeight: '43vw',
      }
    },
  },
}
</script>

<style scoped>
.card.bg-dark {
  background-color: rgba(52, 58, 64, 0.6) !important;
}
</style>
