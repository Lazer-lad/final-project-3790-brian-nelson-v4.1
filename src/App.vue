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
            <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
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
      
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Legal first name*" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Email*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Password*" type="password" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  multiple
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
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
