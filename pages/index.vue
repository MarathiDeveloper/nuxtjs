<template>
  <div>
       
       <Main :categories="allcategories"/>
       
 </div>
</template>
<script>
export default {
 data() {
    return {
      allcategories:[]
    }
  },
async mounted() {
     await this.$axios.$get('/category/all').then((res) => {
     // Categories-Photos-Languages
       this.allcategories = res;
    });
  }
}
</script>
