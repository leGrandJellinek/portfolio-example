<template lang="pug">
.main__services-item
    .main__services-info
        .main__services-icon
            img(:src="require(`@/assets/icons/${item.icon}`)")
        h2.main__services-descr {{item.title}}
    p.main__services-text {{item.text}}
</template>

<script lang="ts">
export default {
    props:{
        item:Object
    }
}
</script>
