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
            <router-link to="/form"><v-btn v-on="on" text >Login<v-icon>mdi-login</v-icon></v-btn></router-link>
            <v-btn text @click.stop="dialog = true">Open Dialog</v-btn>
          </v-toolbar-items>

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-toolbar>
        <router-view />

        <!-- NAV DRAWER -->

<v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
      >
        <v-list-item v-if="this.$store.state.user.name">
          
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/78.jpg" ></v-img>
          </v-list-item-avatar>
  
          <v-list-item-content>
            <v-list-item-title>{{ this.$store.state.user.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
  
        <v-divider></v-divider>
  
        <v-list dense>
  
          <v-list-item>
            <v-list-item-icon>
              <v-icon></v-icon>
            </v-list-item-icon>
  
            <v-list-item-content>
              <v-list-item-title><router-link to="/"
                ><v-btn text color="black" >Home</v-btn></router-link
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon></v-icon>
            </v-list-item-icon>
  
            <v-list-item-content>
              <v-list-item-title>
                <router-link to="/about"><v-btn text>About</v-btn><v-icon>mdi-info</v-icon></router-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>


          <v-list-item>
            <v-list-item-icon>
              <v-icon></v-icon>
            </v-list-item-icon>
  
            <v-list-item-content>
              <v-list-item-title>
                <router-link to="/form"><v-btn v-on="on" text >Login<v-icon>mdi-login</v-icon></v-btn></router-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>



        </v-list>
      </v-navigation-drawer>

<v-dialog v-model="dialog" persistent max-width="600px">
      
      
      <v-card class="mx-auto"  outlined>
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

                <v-btn class="mr-4" @click="onSubmit">submit</v-btn>
                <!-- <v-btn @click="clear">clear</v-btn> -->
              </v-form>
            </v-container>
          
      
      
      
      <v-card-actions>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
        
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
      name: "",
      email: "",
      password: "",
  }),
  methods: {

onSubmit() {
      return this.$store.dispatch("userLoggedIn", {
        name: this.name,
        email: this.email,
        password: this.password
      });
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
