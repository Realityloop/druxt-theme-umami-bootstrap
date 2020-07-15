<template>
  <article>
    <b-row>
      <b-col>
        <slot name="field_recipe_category" />
        <slot name="field_tags" />
        <slot name="field_summary" />
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="6">
        <slot name="field_media_image" />
      </b-col>
      <b-col>
        <b-row>
          <b-col cols="12" lg="6">
            <slot name="field_preparation_time" />
          </b-col>
          <b-col cols="12" lg="6">
            <slot name="field_cooking_time" />
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" lg="6">
            <slot name="field_number_of_servings" />
          </b-col>
          <b-col cols="12" lg="6">
            <slot name="field_difficulty" />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="4">
        <slot name="field_ingredients" />
      </b-col>
      <b-col>
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
