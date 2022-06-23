<template>
  <b-container>
    <b-row>
      <b-col sm="12" md="12" lg="8">
        <div v-for="category in categories" :key="category.id">

          <NuxtLink :to="`png/`+category.slug" class="text-dark">
            <h1>{{category.name}}</h1>
          </NuxtLink>

          <hr>
          <b-row>
            <b-col v-for="photo in category.photos" :key="photo.id" sm="12" md="6" lg="3" class="mb-2" >

              <NuxtLink :to="photo.slug"><img :src="photo.image_url" :alt="photo.img_title_meta_alt" class="img-thumbnail rounded mx-auto img-test box-shadow shadow png-img"></NuxtLink>

               <!-- <NuxtLink :to="'text/'+photo.language.name"><b-badge pill variant="dark">{{photo.language.name}}</b-badge></NuxtLink> -->
         
            </b-col>
          </b-row>
        </div>
        <div>
          <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img src="~/assets/11.png" alt="Image" class="rounded-0"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body>
                  <h4><b>101+ जबरदस्त प्रेरणादायक सुविचार</b></h4>
                  <b-card-text>
                   खूप माणसांची स्वप्ने या एका विचारामुळे अपूर्ण राहतात तो म्हणजे “लोक काय म्हणतील?”
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>

         


        </div>
      </b-col>
      <hr>
                       
    </b-row>
    </b-row>
  </b-container>
</template>
<script>
export default {
  props: {
    categories :{
      type: Array, 
      required: true,
      default: null
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