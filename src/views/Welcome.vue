<template>
  <v-card class="mx-auto" max-width="344" outlined>
    <v-list-item>
      <v-list-item-avatar color="grey"
        ><v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img
      ></v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline"
          >Welcome {{ this.$store.state.user.name }}
        </v-list-item-title>
        <v-list-item-subtitle>Thank you for signing in</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>
