
<template>
<div>
<v-dialog v-model="dialogs" persistent max-width="600px">
      
      
      <v-card class="mx-auto"  outlined>
            <v-card-title>{{ dialog }}</v-card-title>
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

                
                <!-- <v-btn @click="clear">clear</v-btn> -->
              </v-form>
            </v-container>
          
      
      
      
      <v-card-actions>
          <v-btn color="black" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="onSubmit"  >submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
<h1>{{ userAge }}</h1> 
    </div>
    </template>
    
    <script>
    /* eslint-disable no-console */
    
import { eventBus } from '../main';

    export default {
  name: "App",



  data: () => ({
    userAge:'',
    test:'',
     
      name: "",
      email: "",
      password: "",
  }),
  methods: {

onSubmit() {
this.dialog = false

      return this.$store.dispatch("userLoggedIn", {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      
    },
    created() {
        eventBus.$on('dialogWasEdited', (age) => {
this.dialogs = age;

        });
    }
  },

  
}

  </script>