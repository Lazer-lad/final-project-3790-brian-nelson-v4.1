

<template>
  <v-app>
    <v-card v-if="this.$store.state.user.name"  max-width="344" outlined>
            <v-card-title>Welcome {{ this.$store.state.user.name }} <v-spacer></v-spacer><v-avatar color="indigo">
      <v-icon dark>mdi-account-circle</v-icon>
    </v-avatar></v-card-title>
          </v-card>






  <v-container>
    <v-row>
      <v-col cols="3" v-for="ship in starships" :key="ship.model">
        <v-card>
          <v-img
            class="white--text align-end"
            height="200px"
            :src="myImage"
          >
            <v-card-title>{{ ship.name }}</v-card-title>
          </v-img>

          <v-card-title>
            <p class="text-no-wrap">{{ ship.name }}</p>
          </v-card-title>

          <v-card-subtitle>
            <div>{{ ship.model }}</div>
          </v-card-subtitle>
          <v-card-text>{{ ship.manufacturer }}</v-card-text>

          <v-card-action>
            <v-btn class="mx-2" fab dark medium color="light blue"
               
                @click="showing = false">
              <v-icon dark>mdi-minus</v-icon>
            </v-btn>
          </v-card-action>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  </v-app>
</template>

<script>
import { aboutMixin } from "./aboutmixintest";

export default {
  data() {
    return {
      showing: false,
      // myImage: require('C:/Users/ladof/Desktop/finalprojectv1/finalv4/public/falcon.png')
    };
  },
  mixins: [aboutMixin]
};
</script>

