<template>
  <div>
    <v-app>
      <v-card v-if="this.$store.state.user.name" max-width="344" outlined>
            <v-card-title>Welcome {{ this.$store.state.user.name }} <v-spacer></v-spacer><v-avatar color="indigo">
      <v-icon dark>mdi-account-circle</v-icon>
    </v-avatar></v-card-title>
          </v-card>
      <v-row>

        
      
        
      
        <v-col>
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

                <v-btn class="mr-4" @click="onSubmit">submit</v-btn>
                <!-- <v-btn @click="clear">clear</v-btn> -->
              </v-form>
            </v-container>
          </v-card>
          <v-btn @click="clicked">is this working</v-btn>
          <div v-if="this.$store.state.user.name"></div>
        </v-col>
      </v-row>
    </v-app>
  </div>
</template>

<script>
/* eslint-disable no-console */

export default {
  data() {
    return {
      name: "",
      email: "",
      password: ""
    };
  },
  // DIRECTIVE STUFF
  directives: {
    customOn: {
      bind(el, binding) {
        el.onclick = function() {
          binding.value();
        };
      }
    }
  },
  methods: {
    clicked() {
      console.log(this.$store.state.user);
      console.log();
      alert("what is goign on");
    },

    onSubmit() {
      return this.$store.dispatch("userLoggedIn", {
        name: this.name,
        email: this.email,
        password: this.password
      });
    }
  },
  computed: {}
};
</script>
