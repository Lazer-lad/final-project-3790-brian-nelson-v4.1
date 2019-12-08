

<template>
  <v-app>
    <v-card v-if="this.$store.state.user.name"  max-width="344" outlined>
            <v-card-title v-highlight>Welcome {{ this.$store.state.user.name }} <v-spacer></v-spacer><v-avatar color="indigo">
      <v-icon dark>mdi-account-circle</v-icon>
    </v-avatar></v-card-title>
          </v-card>






  <v-container>
    <v-row>
      <v-col cols="3" v-for="ship in starships" :key="ship.model">
        <v-card>
         <v-img
         height="200px"
         :src="ship.image"
         >
          </v-img>

          <v-card-title>
            <p class="text-no-wrap" v-highlight >{{ ship.name }}</p>
          </v-card-title>

          <v-card-subtitle>
            <div>{{ ship.model }}</div>
          </v-card-subtitle>
          <v-card-text>{{ ship.manufacturer }}</v-card-text>

         <v-card-actions>
            <v-btn class="mx-2" fab dark medium color="light blue"
               
                @click="addFave()">
              <v-icon dark>mdi-minus</v-icon>
            </v-btn>
         </v-card-actions>
        </v-card>
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
      showing: true,
      favArray: [],
      
      // myImage: require('C:/Users/ladof/Desktop/finalprojectv1/finalv4/public/falcon.png')
    };
  },
methods: {
 addFave: function(){
   alert('this working')
 }
},


  mixins: [aboutMixin]
};
</script>

