<template lang="pug">
section.main__blog
    .main__blog-container
        .main__blog-titles
            section-title Blog 
            normal-title Get News Feeds
        .main__blog-block 
            .main__blog-main-item
                img(src="@/assets/images/main/main__blog-main-item.png")
                h2.main__blog-date {{new Date().toLocaleString()}}
                p.main__blog-descr Technology is evolving rapidly. New devices and applications.
            .main__blog-item(v-for="item in blogList" :key="item.id")
                img.main__blog-bg(:src="require(`@/assets/images/main/${item.img}`)")
                .main__blog-info
                    h2.main__blog-date {{item.date}}
                    p.main__blog-descr  {{item.descr}}
</template>

<script lang="ts">
import {defineComponent} from "vue"
export default defineComponent({
    data(){
        return {
           blogList: [{
            id:1,
            date: new Date().toLocaleTimeString(),
            descr: "New devices and applications come to the market." ,
            img: "main__blog-bg1.png" 
           },
           {
            id:2,
            date: new Date().toLocaleTimeString(),
            descr: "Every day providing solutions to problems.  ",
            img: "main__blog-bg2.png"
           }] 
        }
    },
    // methods : {
    //     todayDate(){

    //     }
    // }
})
</script>
