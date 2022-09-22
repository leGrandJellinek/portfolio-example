<template lang="pug">
nav.header__nav 
    a.logo
        img(src="@/assets/images/logo.svg")
    ul.header__nav-menu
        li(v-for="link in getMenuList" :key="link.id")
            a.header__nav-link(href="#!") {{link.title}}
</template>

<script lang="ts">
import {mapGetters} from "vuex"
export default {
    computed: {
        ...mapGetters(["getMenuList"])
    }
}
</script>
