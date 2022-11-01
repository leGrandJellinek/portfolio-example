<template lang="pug">
section.main__testimonials
    .main__testimonials-container
        section-title Testimonials
        normal-title.main__testimonials-title What People Says
        .main__testimonials-block
            .main__testimonials-info
                img(src="@/assets/images/main/people_say.png")
                p.main__testimonials-text Quote testimonials demonstrate support for your product or feature from a user who has experience with it. This can be significantly more effective than traditional advertising methods as most consumers will trust.
            .main__testimonials-people
                .main__testimonials-people
                    img(src="@/assets/images/main/main_people.png")
                    .main__testimonials-name Michal John
                    .main__testimonials-job CEO of MZP
                    .main__testimonials-dots 
                        .main__testimonials-dot(
                        v-for="(dot,index) in dots" 
                        :key="dot.id"
                        :class="{active: dot.active}"
                        @click="dotActive(index)")
            img.main__testimonials-human(src="@/assets/images/main/people_first.png")
            img.main__testimonials-human(src="@/assets/images/main/people_second.png")
            img.main__testimonials-human(src="@/assets/images/main/people_third.png")
            img.main__testimonials-human(src="@/assets/images/main/people_fourth.png")
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {dot} from "@/types/types"
export default defineComponent({
    data(){
        return {
            dots: [
                {
                    id:1,
                    active: true,
                },
                {
                    id:2,
                    active:false,
                },
                {
                    id:3,
                    active:false,
                },
                {
                    id:4,
                    active:false,
                },
                {
                    id:5,
                    active:false,
                },
                {
                    id:6,
                    active:false,
                },
            ] as dot[]
        }
    },
    methods: {
        dotActive(index:number):void{
            this.dots.forEach((el:dot):void => {
                el.active = false
            })
            this.dots[index].active = true
        }
    }
})
</script>
