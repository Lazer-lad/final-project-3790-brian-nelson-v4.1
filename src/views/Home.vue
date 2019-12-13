<template>
  <div class="home">
    <v-app>
      <v-parallax
        src="https://media.vanityfair.com/photos/5ce426151c0b0773cacd1121/16:9/w_2560%2Cc_limit/star-wars-feature-vf-2019-summer-embed-05.jpg"
        ><v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1 class="display-1 font-weight-thin mb-4">
              Star Wars Characters
            </h1>
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
      ></v-parallax>
      <v-container>
        <v-row>
          <v-col cols="3" v-for="obj in storeSwapiArray" :key="obj.name">
            <v-card class="mx-auto" max-width="400" tile>
              <v-card-title>
                {{ obj.name }}
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

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
      newArray: null
    };
  },
  methods: {
    nextPage: function() {
      this.getNext();
    },

    previousPage: function() {
      console.log(this.storeSwapiArray.flat()[name]);
    },

    getNext: function() {
      //AXIOS HANDLED HERE

      for (let i = 1; i < 10; i++) {
        console.log(i);
        axios
          .get("https://swapi.co/api/people/?page=" + i) //THIS IS NOT ADDING THINGS INTO THE ARRAY IN ORDER
          .then(response => {
            this.info = response.data;

            for (let item of response.data.results) {
              this.storeSwapiArray.push(item);
            }
          });
      }
    }
  },

  mounted() {
    this.getNext();
  },

  name: "home",
  components: {
    //HelloWorld
  }
};
</script>
