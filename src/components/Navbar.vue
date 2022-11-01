<template lang="pug">
nav.header__nav 
    a.logo
        img(src="@/assets/images/logo.svg")
    ul.header__nav-menu
        li(v-for="link in getMenuList" :key="link.id")
            a.header__nav-link(href="#!") {{link.title}}
</template>

<script lang="ts">
import {mapGetters} from "vuex";
import {defineComponent} from "vue"
export default defineComponent({
    computed: {
        ...mapGetters(["getMenuList"])
    }
})

</script>
