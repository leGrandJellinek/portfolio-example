<template lang="pug">
section.main__clients
    .main__clients-container
        section-title Clients
        normal-title.main__clients-title Big Deal With
        .main__clients-block
            ClientsItem(
                v-for="item in getClientList" 
                :key="item.id"
                :item="item"
            )
</template>

<script lang="ts">
import ClientsItem from "@/components/Main/ClientsItem.vue"
import {mapGetters} from "vuex"
import {defineComponent} from "vue"
export default defineComponent({
    components: {
        ClientsItem
    },
    computed: {
        ...mapGetters(["getClientList"])
    }
})
</script>