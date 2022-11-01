<template lang="pug">
button.purple-btn
    a(href="#!")   
        slot
</template>

<script lang="ts">
import {defineComponent} from "vue"
export default defineComponent({
    name: "purple-btn"
})
</script>

<style lang="sass" scoped>
.purple-btn 
    padding: 16px 49px
    background: #8643DC
    border-radius: 100px
    & a 
        font-size: 24px
        line-height: 32px
        color: #FFFFFF
</style>