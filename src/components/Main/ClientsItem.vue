<template lang="pug">
.main__clients-item(:style="{background: item.color, border: item.borderColor}")
    img(:src="require(`@/assets/icons/${item.icon}`)")
    h2.main__clients-name {{item.name}}
</template>

<script lang="ts">
import {defineComponent} from "vue"
export default defineComponent({
    props: {
        item: Object
    }
})
</script>