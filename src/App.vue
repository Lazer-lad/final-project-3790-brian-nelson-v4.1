<template>
<v-app>
<div id="app">
    <div id="nav">
      
<v-toolbar dense color="light green">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
  <v-toolbar-title>Spaceships</v-toolbar-title>
  <v-spacer></v-spacer>
  <v-toolbar-items color="black">
          <v-btn text color="black"><router-link to="/"><div class="nav-bar">Home</div></router-link></v-btn>
          <v-btn text><router-link to="/about"><div class="nav-bar">About</div></router-link></v-btn>
          <v-btn text><router-link to="/form"><div class="nav-bar">Form</div></router-link></v-btn>
        </v-toolbar-items>

        
  
       
  
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-toolbar>
      

      
      
      
    </div>
    <HelloWorld/>
    <router-view/>
  </div>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';


export default {
  name: "App",

  components: {
    //HelloWorld,
    
  },

  data: () => ({
   
  })
};
</script>

<style>
.nav {
  background-color: aquamarine;
}

.v-application a {
    color: white;
    
    text-decoration: none;
}
.nav-bar{
  color: white;
}

</style>
