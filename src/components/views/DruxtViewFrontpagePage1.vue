<template>
  <div>
    <!-- Header -->
    <b-row v-if="$scopedSlots.header">
      <b-col>
        <h3 class="text-center">
          <slot name="header" />
        </h3>
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
  name: 'DruxtViewFrontpagePage1',

  computed: {
    wrapper: () => ({
      component: 'b-col',
      props: {
        class: 'mb-3',
        cols: 6,
      },
    }),
  },
}
</script>
