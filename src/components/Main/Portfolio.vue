<template lang="pug">
section.main__portfolio
    .main__portfolio-container
        section-title Portfolio
        .main__portfolio-info
            normal-title.main__portfolio-title All Creative Projects
            a.main__portfolio-more(href="#!")
                span Explore More
                img(src="@/assets/icons/arrow.svg")
        .main__portfolio-block
            .main__portfolio-item
                img(src="@/assets/images/main/main__portfolio-work-first.png")
            .main__portfolio-item
                img(src="@/assets/images/main/main__portfolio-work-second.png")
</template>

<script lang="ts">
import {defineComponent} from "vue"
export default defineComponent({

})
</script>