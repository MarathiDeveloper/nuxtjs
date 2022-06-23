export const state = () => ({
     
     languages:[],
     categories:[]
})

export const getters = {

	allLanguages(state){
		return state.languages
	},
	allcategories(state){
		return state.categories
	}
	
}

export const actions = {

 async getLanguages({commit}){

     // const languages = await this.$axios.$get('/lang/all')
     //  this.commit('addLanguages',languages)
     //  return languages


    await this.$axios.$get('/lang/all').then((res) => {
      this.commit('addLanguages',res.data)
      return res.data
    });

    },

 async getCategories({commit}){

      // const categories = await this.$axios.$get('/category/all')
      // this.commit('addCategories',categories)
      // return categories

   await this.$axios.$get('/category/all').then((res) => {
      this.commit('addCategories',res[0])
      return res[0]
    });


    },
}

export const mutations = {

		addLanguages(state,languages){
			state.languages.push({...languages})
		},

		addCategories(state,categories){
			state.categories.push({...categories})
		},
}

