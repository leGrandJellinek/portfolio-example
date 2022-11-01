<template lang="pug">
h2.title
    slot
</template>

<script lang="ts">
import {defineComponent} from "vue"
export default defineComponent({
    name: "normal-title"
})
</script>

<style lang="sass" scoped>
.title
    font-size: 36px
    line-height: 48px
    color: #25202F
    font-weight: 700
</style>