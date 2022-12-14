<template>
  <i class="r-icon" :style="style">
    <slot/>
  </i>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import type {CSSProperties} from 'vue'
import {iconProps} from './icon'

defineOptions({
    name: 'RIcon'
})

const props = defineProps(iconProps)
const style = computed<CSSProperties>(() => {
    const {size, color} = props;
    if (!size && !color) return {}
    return {
        fontSize: size ? size + 'px' : undefined,
        color,
    }
})

</script>

<style lang="less" scoped>

</style>
