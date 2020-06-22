<template>
  <div>
    <!-- Header -->
    <b-row v-if="$scopedSlots.header">
      <b-col>
        <slot name="header" />
      </b-col>
    </b-row>

    <!-- Results. -->
    <b-row>
      <slot v-bind="{ wrapper }" />
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'DruxtViewRecipesPage1',

  computed: {
    wrapper: () => ({
      component: 'b-col',
      props: {
        class: 'mb-3',
        cols: 6,
        lg: 3,
      },
    }),
  },
}
</script>
