<template>
  <v-container fluid fill-height>
    <v-layout column align-center>
      <v-flex xs1 md2></v-flex>
      <div>
        <Wanted></Wanted>
      </div>
      <v-flex text-center>
        <p class="title">Adventurers wanted!</p>
        <v-btn color="primary" @click="login">
          RISE TO THE CALL
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import Wanted from "../../assets/icons/myCharacters/emptyState.svg";

  @Component({
    components: {
      Wanted
    }
  })
  export default class MyCharacters extends Vue {
    $auth;

    login() {
      this.$auth.loginWith('google')
    }
  }
</script>

<style type="sass" scoped>

</style>

