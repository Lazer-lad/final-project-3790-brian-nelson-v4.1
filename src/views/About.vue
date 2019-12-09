<template>
  <v-app>
   

    <v-parallax src="https://wallpapercave.com/wp/wp400097.jpg"><v-row
      align="center"
      justify="center"
    >
       
      <v-col class="text-center" cols="12">
        <h1 class="display-1 font-weight-thin mb-4">Star Wars Ships</h1>
        <div v-if="this.$store.state.user.name"><h4 class="subheading">Welcome {{ this.$store.state.user.name }}</h4><v-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
          </v-avatar></div>
      </v-col>
    </v-row></v-parallax>

    <v-container>
      <v-row>
        <v-col cols="3" v-for="ship in starships" :key="ship.model">
          <v-card>
            <v-img height="200px" :src="ship.image"> </v-img>

            <v-card-title>
              <p class="text-no-wrap" v-highlight>{{ ship.name }}</p>
            </v-card-title>

            <v-card-subtitle>
              <div>{{ ship.model }}</div>
            </v-card-subtitle>
            <v-card-text>{{ ship.manufacturer }}</v-card-text>

            <v-card-actions>
              <v-btn
                class="mx-2"
                fab
                dark
                medium
                color="light blue"
                @click="addFave()"
              >
                <v-icon dark>mdi-plus</v-icon>
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
      favArray: []

      // myImage: require('C:/Users/ladof/Desktop/finalprojectv1/finalv4/public/falcon.png')
    };
  },
  methods: {
    addFave: function() {
      console.log(this.starships);
    }
  },

  mixins: [aboutMixin]
};
</script>
