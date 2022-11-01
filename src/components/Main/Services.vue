<template lang="pug">
section.main__services
    .main__services-container
        section-title services
        normal-title.main__services-title What  actually I love to do
        .main__services-block
            ServicesItem(
            v-for="item in getServicesList" 
            :key="item.id"
            :item="item")
</template>

<script lang="ts">

import {mapGetters} from "vuex"
import ServicesItem from "@/components/Main/ServicesItem.vue";
import {defineComponent} from "vue"

export default defineComponent({
    components:{
        ServicesItem,
    },
    computed: {
        ...mapGetters(["getServicesList"])
    }
})
</script>