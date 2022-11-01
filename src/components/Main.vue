<template lang="pug">
main.main
    Services
    Portfolio
    Clients
    Testimonials
    Blog
    Contact
</template>

<script lang="ts">

import Services from "@/components/Main/Services.vue"
import Portfolio from "@/components/Main/Portfolio.vue"
import Clients from "@/components/Main/Clients.vue"
import Testimonials from "@/components/Main/Testimonials.vue"
import Blog from "@/components/Main/Blog.vue"
import Contact from "@/components/Main/Contact.vue"
import {defineComponent} from "vue"
export default defineComponent({
    components: {
        Services,
        Portfolio,
        Clients,
        Testimonials,
        Blog,
        Contact
    }
})
</script>
