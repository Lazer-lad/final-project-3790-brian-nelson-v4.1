<template>
  <div class="home">
    <v-app>
   <v-row>
      <v-col cols="3" v-for="(name, key) in storeSwapiArray.flat().length" :key="name">
        <v-card  class="mx-auto" max-width="400" tile>
          <v-card-title >
             {{ storeSwapiArray[name][2] }} {{ key }}
            
        </v-card-title>
        </v-card>
      </v-col>
   </v-row>
    
<v-row>
<v-btn v-on:click="previousPage()">get the info from next page</v-btn>
<v-btn v-on:click="nextPage()">get the next page</v-btn>
</v-row>
<div>
{{ storeSwapiArray.flat().name}}
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
      console.log(this.storeSwapiArray.flat()[name])
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
        axios.get("https://swapi.co/api/people/?page="+i)//THIS IS NOT ADDING THINGS INTO THE ARRAY IN ORDER
  .then((response ) => { this.info = response.data
    // do something with Google res
this.storeSwapiArray.push(this.info.results)
    
  })

    // if (this.newInfo != null){
    // this.storeSwapiArray.push(this.newInfo)
    
    // }
}

 this.storeSwapiArray.flat()

   
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
