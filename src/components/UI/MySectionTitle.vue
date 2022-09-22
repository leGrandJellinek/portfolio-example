<template lang="pug">
h3.section-title
    slot
</template>

<script lang="ts">
export default {
    name: 'section-title'
}
</script>

<style lang="sass" scoped>
.section-title
    font-weight: 400
    text-transform: capitalize
    padding-bottom: 10px
    font-size: 18px
    line-height: 24px
    color: #8643DC
    position: relative
    &::before
        content: ""
        position: absolute
        bottom: 0
        height: 2px
        width: 50px
        background: #8643DC

</style>