<template>
<div>

<b-container>
 <b-row>
    <b-col sm="12" md="12" lg="8"  >
   <h1>{{photo.name}}</h1>
        <hr>
   <!-- <b-row>
 <b-col sm="12" md="12" lg="8"> -->
      <!-- <h1>{{photo.name}}</h1>
        <hr> -->
   <b-row>
    <b-col v-for="relatedphoto in photo.photos" :key="relatedphoto.id" class="mb-2" sm="12" md="6" lg="3" >
        <NuxtLink :to="'/'+relatedphoto.slug"><img :src="relatedphoto.image_url" :alt="relatedphoto.img_title_meta_alt" class="img-thumbnail rounded mx-auto img-test box-shadow shadow png-img"></NuxtLink>
    </b-col>
   </b-row>
<!-- </b-col>
</b-row> -->
</b-col>
     
  </b-row>
</b-container> 
 
 </div>
</template>
<script>
    export default{
        data () {
          return {
            photo:[],
            related_photo:[]
          }
        },
       
 async mounted(){
   await this.$axios.$get(`/category/${this.$route.params.slug}`).then((res) => {
          // http://127.0.0.1:8000/api/photo/suvichar-marathi-png-text
          // console.log(res.data[0]);
                 this.photo = res.data[0];
           });

          
          // await this.$axios.$get(`/photo/related/${this.$route.params.slug}`).then((res) => {
          // // http://127.0.0.1:8000/api/photo/suvichar-marathi-png-text
          //        console.log("/photo/related");
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