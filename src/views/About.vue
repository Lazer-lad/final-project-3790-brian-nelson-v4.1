<template>
  <v-app>
    <transition name="fade" appear><v-parallax src="https://wallpapercave.com/wp/wp400097.jpg"
      ><v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-thin mb-4">Star Wars Ships</h1>
          <div v-if="this.$store.state.user.name">
            <h4 class="subheading">
              Welcome {{ this.$store.state.user.name }}
            </h4>
            <v-avatar>
              <v-img
                src="https://randomuser.me/api/portraits/men/78.jpg"
              ></v-img>
            </v-avatar>
          </div>
        </v-col> </v-row
    ></v-parallax></transition>

<v-menu offset-y>
        <template v-slot:activator="{ on }">
<v-btn
                v-on="on"
                fab
                dark
                medium
                right
                bottom
                fixed
                color="light blue"><v-icon dark>mdi-star</v-icon></v-btn>
    
    
         
        </template>
        <v-list>
          <v-subheader>FAVORITES</v-subheader>
          <v-list-item
          v-for="(ship, u) in favArray"
          :key="ship.name" 
            
          >
          <v-list-item-avatar>
            <v-img :src="ship.image"></v-img>
          </v-list-item-avatar>
            <v-list-item-title>{{ship.name}}</v-list-item-title>
          <v-btn icon @click="minusFave(u)">  <v-icon dark>mdi-close-circle</v-icon></v-btn> 
          </v-list-item>
          
        
        
        </v-list>
      </v-menu>
    <v-snackbar
        v-model="snackbar"
        :timeout= 2000
      >
        {{ test }}
        <v-btn
          color="blue"
          text
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </v-snackbar>

    <v-container>

        
      
      <v-text-field
        v-model="filterShips"
        clearable
        flat
        solo-inverted
        hide-details
        label="Search"
      ></v-text-field>

      <v-row>
        <v-col cols="3" v-for="(ship, i) in starships" :key="ship.name">
          <transition name="fade" appear><v-card>
            <v-img height="200px" :src="ship.image"> </v-img>

            <v-card-title>
              <p class="text-no-wrap" v-highlight>{{ ship.name }} {{i}}</p>
            </v-card-title>

            <v-card-subtitle>
              <div>{{ ship.model }}</div>
              {{ starships.name }}
            </v-card-subtitle>
            <v-card-text>{{ ship.manufacturer }}</v-card-text>

            
              <v-btn
                class="mx-2"
                fab
                dark
                medium
                color="light blue"
                @click="addFave(i)"
              >
                <v-icon dark>mdi-plus</v-icon>
              </v-btn>
            
          </v-card></transition>
        </v-col>
      </v-row>
      
      
   
    </v-container>
    
  </v-app>
</template>

<script>
/* eslint-disable no-console */
import { aboutMixin } from "./aboutmixintest";

export default {
  data() {
    return {
      snackbar: false,
      showing: true,
      favArray: [],
      test:'',
      
      filterShips: " "

      // myImage: require('C:/Users/ladof/Desktop/finalprojectv1/finalv4/public/falcon.png')
    };
  },
  methods: {
    addFave: function(x) {
      
      console.log(this.starships)
      console.log(this.favArray.length)
      if (this.favArray.length < 6){
      this.favArray.push(this.starships[x])
      this.test = "added " + this.starships[x].name + " to favorites"
      this.snackbar = true
      console.log(this.favArray)
      }else{
        this.test = "Favorites is full"
        this.snackbar = true
      }
    },

minusFave: function(z) {
      
      console.log(this.starships)
      console.log(this.favArray.length)
      this.favArray.splice(z, 1)
      
      console.log(this.favArray)
      
    }



  },

  computed: {
    filterStarhips() {
      return this.favArray.filter(element => {
        return element.match(this.filterShips);
      });
    }
  },

  mixins: [aboutMixin]
};
</script>
<style>
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 4s;
}
.fade-leave {
}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}
</style>
