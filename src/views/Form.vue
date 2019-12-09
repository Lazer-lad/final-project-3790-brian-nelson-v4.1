<template>
  <div>
    <v-app>
      <transition name="fade"
        ><v-card v-if="this.$store.state.user.name" max-width="344" outlined>
          <v-card-title>
            Welcome {{ this.$store.state.user.name }}
            <v-spacer></v-spacer>
            <v-avatar color="indigo">
              <v-icon dark>mdi-account-circle</v-icon>
            </v-avatar>
          </v-card-title>
        </v-card></transition
      >
      <v-row>
        <v-col>
          <v-card class="mx-auto" max-width="400" outlined>
            <v-card-title>Form</v-card-title>
            <v-container>
              <v-form @submit.prevent="onSubmit" ref="form">
                <v-text-field
                  v-model="name"
                  :counter="10"
                  :rules="inputRules"
                  label="Username"
                  pattern="^[a-zA-Z0-9_.-]*$"
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

    <v-card transition="slide-x-transition">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" class="ma-2" v-on="on">
          Slide X Transition
        </v-btn>
      </template>
      <title>this card</title>
    </v-card>
  </div>
</template>

<script>
/* eslint-disable no-console */

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      show: true,
      inputRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 10) || "Name must be less than 10 characters",
        v =>
          (v && /[a-zA-z0-9-]+$/.test(v)) ||
          `Only lowercase letters, numbers or hyphens allowed`
      ]
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
      if (this.$refs.form.validate()) {
        this.$router.push("about");
        return this.$store.dispatch("userLoggedIn", {
          name: this.name,
          email: this.email,
          password: this.password
        });
      }
    }
  },
  computed: {}
};
</script>
<style>
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave {
}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}
</style>
