<template>
  <b-row>
    <b-col class="text-center" cols="12">
      <h2>Recipe collections</h2>
    </b-col>

    <b-col class="p-2" md="3" v-for="result of results" :key="result.id">
      <b-link
        class="font-weight-bold text-white"
        component="strong"
        nuxt
        :to="result.attributes.path.alias"
      >
        {{ result.attributes.name }}
      </b-link>
    </b-col>
  </b-row>
</template>

<script>
import { DruxtViewsViewMixin } from 'druxt-views'

export default {
  name: 'DruxtViewRecipeCollectionsBlock',

  mixins: [DruxtViewsViewMixin],
}
</script>
