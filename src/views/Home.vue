<template>
  <div class="home">
    
<v-row><v-col><v-btn v-on:click="say()"> {{i}}  Next Page</v-btn><v-btn v-on:click="previousPage()"> {{i}}  Previous Page</v-btn></v-col></v-row>

    <v-row>
      <v-col cols="3" v-for="name in info" :key="name">
    <v-card
    
    class="mx-auto"
    max-width="400"
    tile
  >
  
  <v-card-title>
  {{ name.name }}
 
</v-card-title>



    </v-card>
      </v-col>
    </v-row>


   <v-pagination
              v-model="name"
              class="my-4"
              :length="i"
            ></v-pagination>

      
   </div>
   

</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios';


export default {
  data () {
    return {
      info: null,
      i: 1,
      
      
     
      
      page1: 'https://swapi.co/api/people/?page=1',
      
      page3: 'https://swapi.co/api/people/?page=2',
      page4: 'https://swapi.co/api/people/?page=2',
    }
  },
  methods: {
say: function(){

this.i++
axios
    
      .get('https://swapi.co/api/people/?page='+ this.i)
    
      .then(response => (this.info = response.data.results))

},

previousPage: function(){
  this.i--

axios
    
      .get('https://swapi.co/api/people/?page='+ this.i)
    
      .then(response => (this.info = response.data.results))

}

  },
  mounted () {
    axios
    
      .get('https://swapi.co/api/people/?page='+ this.i)
    
      .then(response => (this.info = response.data.results))
    
  },
  name: 'home',
  components: {
    //HelloWorld
  }

}

</script>
