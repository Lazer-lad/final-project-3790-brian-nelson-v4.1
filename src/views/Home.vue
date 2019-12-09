<template>
  <div class="home">
    <v-app>
     
   
   
   <v-parallax src="https://media.vanityfair.com/photos/5ce426151c0b0773cacd1121/16:9/w_2560%2Cc_limit/star-wars-feature-vf-2019-summer-embed-05.jpg"><v-card v-if="this.$store.state.user.name" max-width="344" outlined>
            <v-card-title>Welcome {{ this.$store.state.user.name }} <v-spacer></v-spacer><v-avatar color="indigo">
      <v-icon dark>mdi-account-circle</v-icon>
    </v-avatar></v-card-title>
          </v-card><v-row
      align="center"
      justify="center"
    >
       
      <v-col class="text-center" cols="12">
        <h1 class="display-1 font-weight-thin mb-4">Vuetify.js</h1>
        <h4 class="subheading">Build your application today!</h4>
      </v-col>
    </v-row></v-parallax>
   <v-row>
      <v-col cols="3" v-for="obj in storeSwapiArray" :key="obj.name">
        <v-card  class="mx-auto" max-width="400" tile>
          <v-card-title >
             {{ storeSwapiArray }} 
            
        </v-card-title>
        </v-card>
      </v-col>
   </v-row>
    

<div>


       
    <!-- <v-pagination v-model="name" class="my-4" :length="i"></v-pagination> -->
</div>
    </v-app>
  </div>
  
</template>

<script>
/* eslint-disable no-console */

// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'y
import axios from "axios";

export default {
  data() {
    return {
      info: null,
      newInfo: null,
      i: 1,
      storeSwapiArray: [],
      newArray: null,
       

    };
  },
  methods: {
    nextPage: function() {
     
    

        this.getNext();
    },

    previousPage: function() {
      console.log(this.storeSwapiArray.flat()[name])
    
    },

    getNext: function(){
 

 //AXIOS HANDLED HERE
 
for (let i = 1; i< 10; i++){
  console.log(i)
        axios.get("https://swapi.co/api/people/?page="+i)//THIS IS NOT ADDING THINGS INTO THE ARRAY IN ORDER
  .then((response ) => { this.info = response.data
    

    this.storeSwapiArray.push(this.info.results.obj)
  })

   
}

 

   
    },

   

  },


mounted(){

 this.getNext();
     
     

        

        
    
  
    },




  
  name: "home",
  components: {
    //HelloWorld
  }
};
</script>
