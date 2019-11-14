<template>
  <div class="home">
    
    {{ info.name }}
    

   </div>
   

</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios';


export default {
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('https://swapi.co/api/people/1')
      .then(response => (this.info = response.data))
  },
  name: 'home',
  components: {
    //HelloWorld
  }
}

</script>
