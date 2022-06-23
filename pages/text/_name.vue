<template>
<div>

<b-container>
 <b-row>
    <b-col sm="12" md="12" lg="8"  >
    <h1>{{photos.name}}</h1>
        <hr>
   <b-row>
    <b-col v-for="photo in photos.photos" :key="photo.id" class="mb-2" sm="12" md="6" lg="4" >
        
        <NuxtLink :to="'/'+photo.slug"><img :src="photo.image_url" :alt="photo.img_title_meta_alt" class="img-thumbnail rounded mx-auto img-test box-shadow shadow png-img"></NuxtLink>

    </b-col>
   </b-row>
</b-col>
                     
  </b-row>
</b-container> 
 
 </div>
</template>
<script>
    export default{
        data () {
          return {
            photos:[],
            related_photo:[]
          }
        },
    
        async mounted(){
          // this.categories = (await this.$axios.get('/category/all')).data
          // const categories = await this.$axios.$get('/category/all')
         await this.$axios.$get(`/lang/photo/${this.$route.params.name}`).then((res) => {
         	// http://127.0.0.1:8000/api/photo/lang/marathi
                 this.photos = res.data;
           });
          // await this.$axios.$get(`/photo/related/${this.$route.params.id}`).then((res) => {
          // // http://127.0.0.1:8000/api/photo/suvichar-marathi-png-text
          //        console.log(res.data);

          //        this.related_photo = res.data;
          //  });
        }
    }
</script>
<style scoped>
  .png-img {
    background-image: url('~assets/png.png');
    border: 1px solid #666;
    text-align: center;
    padding: 10px;
}
</style>