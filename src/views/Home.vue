<template>
  <div class="home">
    
    <!-- <v-row>
      <v-col cols="3" v-for="name in newInfo" :key="name">
        <v-card class="mx-auto" max-width="400" tile>
          <v-card-title>
            {{ name.name }}
          </v-card-title>
        </v-card>
      </v-col>
    </v-row> -->
    

<v-btn v-on:click="previousPage()">get the info from next page</v-btn>
<v-btn v-on:click="nextPage()">get the next page</v-btn>
<div>

    <!-- <v-pagination v-model="name" class="my-4" :length="i"></v-pagination> -->
</div>
    
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

      page1: "https://swapi.co/api/people/?page=1",

      page3: "https://swapi.co/api/people/?page=2",
      page4: "https://swapi.co/api/people/?page=2"
    };
  },
  methods: {
    nextPage: function() {
     
      // axios

      //   .get("https://swapi.co/api/people/")

      //   .then(response => (this.info = response.data));

        this.getNext();

        
    
   
    

    },

    previousPage: function() {
      
      // this.nextPage();

      // axios

      //   .get(this.info.next)

      //   .then(response => (this.newInfo = response.data));

        //console.log(this.newInfo.results)
    // this.storeSwapiArray.push(this.newInfo.next)
// console.log(this.storeSwapiArray)
    },

    getNext: function(){
 

 
 
for (let i = 1; i< 10; i++){
  console.log(i)
        axios.get("https://swapi.co/api/people/?page="+i)
  .then((response ) => { this.info = response.data
    // do something with Google res
this.storeSwapiArray.push(this.info.results)
     
  })

    // if (this.newInfo != null){
    // this.storeSwapiArray.push(this.newInfo)
    
    // }
}

   console.log(this.storeSwapiArray)
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
