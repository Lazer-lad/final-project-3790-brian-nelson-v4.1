<template>
  <v-app>
  
 
  <v-row>
      <v-col>
  <v-card
    
    class="mx-auto"
    max-width="400"
    outlined
    >
    <v-card-title>Form</v-card-title>
    <v-container>
        
    <v-form @submit.prevent="onSubmit">
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="10"
      label="Name"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
      
    ></v-text-field>
    
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="E-mail"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <v-select
      v-model="select"
      :items="items"
      :error-messages="selectErrors"
      label="Item"
      required
      @change="$v.select.$touch()"
      @blur="$v.select.$touch()"
    ></v-select>
    <v-checkbox
      v-model="checkbox"
      :error-messages="checkboxErrors"
      label="Do you agree?"
      required
      @change="$v.checkbox.$touch()"
      @blur="$v.checkbox.$touch()"
    ></v-checkbox>

    <v-btn class="mr-4" @click="submit">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>
  
   </v-container>
  </v-card>
  <v-btn v-customOn="clicked">is this working</v-btn>
  </v-col>
  </v-row>
  


  </v-app>
</template>

<script>


export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      
      
    };
  },
// DIRECTIVE STUFF
  directives: {
    customOn: {
      bind (el, binding){
        el.onclick = function(){
          binding.value();
        }

      }
    }
  },
  methods: {
    clicked() {
      alert('this is working')
    },
    onSubmit(){
      const fromData = {
        name: this.name,
        email: this.email,
        password: this.password,
      }
      console.log(formData)
      this.$store.dispatch('userLoggedIn', {
        name: this.name,
        email: this.email,
        password: this.password,
      })

    }
  }
  
};
</script>