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
          <transition name="slide" appear>
            <v-card class="mx-auto" max-width="400" outlined>
              <v-card-title>Form</v-card-title>
              <v-container>
                <v-form @submit.prevent="onSubmit" ref="form">
                  <v-text-field
                    v-model="name"
                    :counter="15"
                    :rules="userInputRules"
                    label="Username"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="email"
                    autocomplete="email"
                    label="E-mail"
                    required
                    :rules="emailInputRules"
                  ></v-text-field>

                  <v-btn class="mr-4" @click="onSubmit">submit</v-btn>
                  <!-- <v-btn @click="clear">clear</v-btn> -->
                </v-form>
              </v-container>
            </v-card></transition
          >
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

      emailInputRules: [
        v =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid"
      ],

      userInputRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 15) || "Name must be less than 15 characters",
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
        this.$router.push("welcome");
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
.slide-enter {
}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
}
.slide-leave {
}

.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
}
@keyframes slide-in {
  from {
    transform: translateY(-400px);
  }
  to {
    tranform: translateY(0);
  }
}
@keyframes slide-out {
  from {
    tranform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
