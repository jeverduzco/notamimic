<template>
  <v-app>
    <v-content>
      <nuxt/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'

  @Component({})
  export default class root extends Vue {
    isHydrated = false;

    mounted() {
      this.isHydrated = true
    }
  }
</script>

<style>
  html {
    overflow-y: visible;
  }
</style>
