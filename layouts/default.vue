<template>
  <v-app>
    <NavDrawer/>
    <v-app-bar
      app
      color="primary"
      clipped-left
      class="white--text"
    >
      <v-app-bar-nav-icon @click="navClick" v-if="showNavIcon" class="white--text"/>
      <Logo width="40"/>

      <v-spacer></v-spacer>

      <v-btn
        v-if="!$auth.loggedIn"
        link router to="/login"
        class="white--text"
        :color="this.$vuetify.theme.themes.light.primary.lighten1">
        Login
      </v-btn>
      <v-avatar size="42" v-else>
        <img
          :src="$auth.user.picture"
          :alt="$auth.user.email"
        >
      </v-avatar>
    </v-app-bar>
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
  import {mapGetters} from 'vuex';
  import Logo from '../assets/icons/login/theEye.svg';

  @Component({
    components: {
      NavDrawer: () => import("~/components/NavDrawer.vue"),
      Logo: Logo,
    },
    computed: {
      ...mapGetters({
        showNav: 'NavDrawer/show'
      })
    }
  })
  export default class root extends Vue {
    private showNav!: boolean;
    private $auth;
    private $vuetify;

    right = true;
    title = 'Dungeon Tools';
    isHydrated = false;

    navClick() {
      const {commit, state} = this.$store;
      commit(`NavDrawer/setShow`, !this.showNav);
    }

    get showNavIcon() {
      return this.isHydrated && this.$vuetify && this.$vuetify.breakpoint && this.$vuetify.breakpoint.xsOnly
    }

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
