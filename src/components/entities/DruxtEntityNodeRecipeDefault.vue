<template>
  <article>
    <b-row class="mb-4">
      <b-col sm="4">
        <slot name="field_recipe_category" />
      </b-col>
      <b-col>
        <slot name="field_tags" />
      </b-col>
    </b-row>
    <b-row class="mb-3">
      <b-col>
        <slot name="field_summary" />
      </b-col>
    </b-row>
    <b-row class="mb-3">
      <b-col lg="6">
        <slot name="field_media_image" />
      </b-col>
      <b-col class="my-4">
        <b-row>
          <b-col cols="12" sm="6" class="text-center">
            <slot name="field_preparation_time" />
          </b-col>
          <b-col cols="12" sm="6" class="text-center">
            <slot name="field_cooking_time" />
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" sm="6" class="text-center">
            <slot name="field_number_of_servings" />
          </b-col>
          <b-col cols="12" sm="6" class="text-center">
            <slot name="field_difficulty" />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row class="my-3">
      <b-col md="4" class="mb-3">
        <slot name="field_ingredients" />
      </b-col>
      <b-col class="mb-3">
        <slot name="field_recipe_instruction" />
      </b-col>
    </b-row>
  </article>
</template>

<script>
import { DruxtEntityMixin } from 'druxt-entity'

export default {
  name: 'DruxtEntityNodeRecipeDefault',

  mixins: [DruxtEntityMixin],
}
</script>
