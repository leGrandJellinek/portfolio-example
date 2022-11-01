<template lang="pug">
section.main__contact
    .main__contact-container
        section-title Contact Me
        .main__contact-info 
            normal-title.main__contact-title Let me know if you want to talk  about a potential collaboration. I'm available for freelance work.
            .main__contact-mail 
                a(href="mailto:infoname@mail.com") infoname@mail.com
        .main__contact-block 
            input.main__contact-input(
            v-model="name" 
            placeholder="What's your name?")
            input.main__contact-input(
            v-model="mail" 
            placeholder="Your email")
            input.main__contact-input(
            v-model="comment" 
            placeholder="Tell me about your project")
        .main__contact-send 
            purple-btn Get a Quote
            .main__contact-icons                
                button.main__contact-btn
                    img(src="@/assets/icons/pr.svg")
                button.main__contact-btn
                    img(src="@/assets/icons/contact-arrow.svg")
</template>

<script lang="ts">
import {defineComponent} from "vue"
export default defineComponent({
    data(){
        return {
            name: "" as string,
            mail: "" as string,
            comment: "" as string
        }
    }
})
</script>