<template>
  <v-app>
    <div id="app">
      <div id="nav">
        <v-toolbar dense color="dark blue">
          <v-app-bar-nav-icon
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>

          <v-toolbar-title>Spaceships</v-toolbar-title>
          <v-spacer></v-spacer>
          
          <v-toolbar-items dense color="black" class="mb-n4">
            <div>
              <router-link to="/"
                ><v-btn text color="black" >Home</v-btn></router-link
              >
            </div>
            <router-link to="/about"><v-btn text>About</v-btn><v-icon>mdi-info</v-icon></router-link>
            <v-btn v-on="on" text >Login<v-icon>mdi-login</v-icon></v-btn>
          </v-toolbar-items>

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-toolbar>
        <router-view />

<v-dialog v-model="dialog" persistent max-width="600px">
  <template v-slot:activator="{ on }">
        <v-btn color="primary" dark >Open Dialog</v-btn>
      </template>
      <v-card class="mx-auto" max-width="400" outlined>
            <v-card-title>Form</v-card-title>
            <v-container>
              <v-form @submit.prevent="onSubmit">
                <v-text-field
                  v-model="name"
                  :counter="10"
                  label="Name"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="email"
                  label="E-mail"
                  required
                ></v-text-field>

                
                <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" @click="onSubmit">Submit</v-btn>
        </v-card-actions>
                <!-- <v-btn @click="clear">clear</v-btn> -->
              </v-form>
            </v-container>
          </v-card>
</v-dialog>

        <v-navigation-drawer v-model="drawer" absolute>
          <v-list nav dense>
            <v-list-item-group
              v-model="group"
              active-class="deep-purple--text text--accent-4"
            >
              <v-list-item>
                <router-link to="/about"
                  ><v-list-item-title>About</v-list-item-title></router-link
                >
              </v-list-item>

              <v-list-item>
                <v-list-item-title>Bar</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>Fizz</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>Buzz</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
      </div>
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
    drawer: false,
    group: null,
     dialog: false,
  }),
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
