<template lang="pug">
header.header
    .header__container
        .header__left
            Navbar
            .header__content
                .header__content-info
                    p.header__content-text Hello,
                    h1.header__content-name Adam Zakob
                    p.header__content-job   a freelance UX Designer
                    purple-btn Let’s Talk
        .header__right
            img(src="@/assets/images/header/header__img.png")
            img.header__right-dgroup(src="@/assets/images/header/header__dots-group.png")
</template>

<script lang="ts">

import Navbar from "@/components/Navbar.vue"
import {defineComponent} from "vue"
export default defineComponent({
    components: {
        Navbar,
    }
})
</script>