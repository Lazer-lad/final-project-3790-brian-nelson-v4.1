<template>
<div id="app">
    <div id="nav">
<v-toolbar dense>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
  
        <v-toolbar-title>Title</v-toolbar-title>
  
        <v-spacer></v-spacer>
  
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-toolbar>


      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/form">Form</router-link>
    </div>
    <HelloWorld/>
    <router-view/>
  </div>
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
