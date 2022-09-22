<template lang="pug">
main.main
    Services
    Portfolio
    Clients
    Testimonials
</template>

<script lang="ts">

import Services from "@/components/Main/Services.vue"
import Portfolio from "@/components/Main/Portfolio.vue"
import Clients from "@/components/Main/Clients.vue"
import Testimonials from "@/components/Main/Testimonials.vue"

export default {
    components: {
        Services,
        Portfolio,
        Clients,
        Testimonials
    }
}
</script>
