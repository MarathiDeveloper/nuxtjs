<template>
<div>
             
<b-container>
 <b-row>
    <b-col sm="12" md="12" lg="8"  >
   <h1><b class="text-capitalize text-muted">{{photo.img_name}}</b> png text 1</h1>
        <hr>
   <b-row>
      <b-col sm="12" md="12" lg="12" class="mb-2">
         <img v-if="photo.image_url" :src="photo.image_url" :alt="photo.img_title_meta_alt" class="img-thumbnail rounded mx-auto img-test <!-- box-shadow shadow --> png-img">
      </b-col>
     <b-col sm="12" md="12" lg="12" class="mb-2">

        <!-- <span v-if="photo.image_url" class="btn bg-success text-white" style="margin-left: 120px;" @click="downloadImage(photo.image_url)" >Download</span> -->

        <!-- <a href="http://localhost:8000/uploads/words/maj-dada.png" download="text.png">Download</a> -->
     </b-col>
    <b-col sm="12" md="12" lg="8">
      <h1>Related png text</h1>
        <hr>
   <b-row>
    <b-col v-for="relatedphoto in related_photo" :key="relatedphoto.id" class="mb-2" sm="12" md="6" lg="6" >
        <NuxtLink :to="relatedphoto.slug"><img :src="relatedphoto.image_url" :alt="relatedphoto.img_title_meta_alt" class="img-thumbnail rounded mx-auto img-test box-shadow shadow png-img"></NuxtLink>
       
    </b-col>
   </b-row>
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
            photo:[],
            related_photo:[]
          }
        },
       
        async created(){
          // this.categories = (await this.$axios.get('/category/all')).data
          // const categories = await this.$axios.$get('/category/all')
         console.log("update");
         console.log(this.$route.params.id);

         await this.$axios.$get(`/photo/${this.$route.params.id}`).then((res) => {
         	// http://127.0.0.1:8000/api/photo/suvichar-marathi-png-text
                 this.photo = res.data;
           });

          
          await this.$axios.$get(`/photo/related/${this.$route.params.id}`).then((res) => {
          // http://127.0.0.1:8000/api/photo/suvichar-marathi-png-text
                 this.related_photo = res.data;
           });
        },
        methods: {
         downloadImage(ImgUrl){

            // console.log(this.photo.img_file)

            // downloadjs(ImgUrl, this.photo.img_file)

            fetch(ImgUrl, {
                    mode : 'no-cors',
             })
                .then(response => response.blob())
                .then(blob => {

                  

     })
    
          }
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