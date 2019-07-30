<template>
  <v-app>
    <NavDrawer/>
    <AppBar />
    <v-content>
      <nuxt/>
    </v-content>
    <v-footer
      color="primary"
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import {namespace} from 'vuex-class';

  const jumpTo = namespace('ToolBar/JumpTo');

  @Component({
    components: {
      NavDrawer: () => import('~/components/NavDrawer.vue'),
      AppBar: () => import('~/components/AppBar.vue')
    }
  })
  export default class root extends Vue {
    private $auth;

    right = true;
    title = 'Dungeon Tools';
    isHydrated = false;

    @jumpTo.Getter('show') showJumpTo;

    async mounted() {
      this.isHydrated = true;
      await this.$auth.setUserToken('OK');
      await this.$auth.fetchUser();
    }
  }
</script>

<style>
  html {
    overflow-y: visible;
  }
</style>
