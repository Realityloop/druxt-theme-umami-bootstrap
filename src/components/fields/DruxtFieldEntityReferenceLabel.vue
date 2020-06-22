<template>
  <component
    :is="wrapper.component"
    v-if="entities && typeof entities[0] !== 'undefined'"
    v-bind="wrapper.props"
  >
    <!-- Label: Above -->
    <div v-if="$slots['label-above']">
      <slot #label-above />
    </div>

    <!-- Label: Inline -->
    <slot
      v-if="$slots['label-inline']"
      #label-inline
    />

    <!-- Items -->
    <component
      :is="component"
      v-for="(entity, key) of entities"
      :key="key"
      class="mr-1"
      v-bind="entity.props || false"
    >
      <b-badge pill>
        {{ entity.text }}
      </b-badge>
    </component>
  </component>
</template>

<script>
import { DruxtFieldEntityReferenceLabel } from 'druxt-entity'

export default DruxtFieldEntityReferenceLabel
</script>
