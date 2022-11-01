<template lang="pug">
footer.footer
    .footer__container
        .footer__block
            p.footer__block-title   Let’s be Friends
            .footer__block-social
                .footer__block-icon(v-for="icon in getFooterSocial" :key="icon.id")
                    a(href="#!")
                        img(:src="require(`@/assets/icons/${icon.icon}`)")
</template>

<script lang="ts">

import {mapGetters} from "vuex"
import {defineComponent} from "vue"
export default defineComponent({
    computed: {
        ...mapGetters(["getFooterSocial"])
    }
})
</script>