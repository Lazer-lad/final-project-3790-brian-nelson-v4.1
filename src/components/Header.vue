<template>
  <div id="app">
    <div id="nav">
      <v-app-bar
      dense
      
       
      color="dark blue">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>SWAPI API</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-toolbar-items dense color="black">
          <div>
            <router-link to="/"><v-btn text>Home</v-btn></router-link>
          </div>
          <router-link to="/about"
            ><v-btn text>About</v-btn><v-icon>mdi-info</v-icon></router-link
          >
          <router-link to="/form"
            ><v-btn v-on="on" text
              >Login<v-icon>mdi-login</v-icon></v-btn
            ></router-link
          >
          <v-btn text @click="editAge">Open Dialog</v-btn>
        </v-toolbar-items>
      </v-app-bar>
      <router-view />

      <!-- NAV DRAWER -->

      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list-item v-if="this.$store.state.user.name">
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{
              this.$store.state.user.name
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
          <v-list-item>
            <v-list-item-icon>
              <v-icon></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title
                ><router-link to="/"
                  ><v-btn text>Home</v-btn></router-link
                ></v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>
                <router-link to="/about"
                  ><v-btn text>About</v-btn
                  ><v-icon>mdi-info</v-icon></router-link
                >
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>
                <router-link to="/form"
                  ><v-btn v-on="on" text
                    >Login<v-icon>mdi-login</v-icon></v-btn
                  ></router-link
                >
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */
import { eventBus } from "../main";
//import HelloWorld from './components/HelloWorld';

export default {
  name: "App",

  components: {
    //HelloWorld,
  },

  data: () => ({
    dialog: true,
    drawer: false,
    group: null,
    test: "this"
  }),
  methods: {
    editAge() {
      eventBus.$emit("dialogWasEdited", this.test);
    }
  },

  watch: {
    group() {
      this.drawer = false;
    }
  }
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
.nav-bar {
  color: white;
}

*.v-btn:not(.v-btn--round).v-size--default {
  height: 48px;
  min-width: 64px;
  padding: 0 16px;
}
</style>
