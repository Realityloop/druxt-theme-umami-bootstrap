<template>
  <component
    :is="wrapper.component"
    v-if="entities && typeof entities[0] !== 'undefined'"
  >
    <!-- Label: Above -->
    <div v-if="$slots['label-above']">
      <slot name="label-above" />
    </div>

    <!-- Label: Inline -->
    <slot v-if="$slots['label-inline']" name="label-inline" />

    <!-- Items -->
    <component
      class="mr-1"
      :is="component"
      v-for="(entity, key) of entities"
      :key="key"
      v-bind="entity.props || false"
    >
      <b-badge variant="info">{{ entity.text }}</b-badge>
    </component>
  </component>
</template>

<script>
import { DruxtFieldEntityReferenceLabel } from 'druxt-entity'

export default DruxtFieldEntityReferenceLabel
</script>
