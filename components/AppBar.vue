<template>
  <v-app-bar
    app
    color="primary"
    clipped-left
    class="white--text"
  >
    <v-app-bar-nav-icon @click="setShowNav(!showNav)" v-if="showNavIcon" class="white--text"/>
    <Logo v-if="showLogo"></Logo>
    <v-spacer></v-spacer>
    <JumpTo v-if="isHydrated && showJumpTo" :jumps="jumps"></JumpTo>
    <v-spacer></v-spacer>


    <div class="left">
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
    </div>
  </v-app-bar>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import Logo from './AnimatedLogo.vue';
  import SelectIcon from '../assets/icons/AppBar/selectIcon.svg';
  import JumpTo from './JumpTo.vue';
  import {namespace} from 'vuex-class';

  const jumpTo = namespace('ToolBar/JumpTo');
  const navDrawer = namespace('NavDrawer');

  @Component({
    components: {
      Logo: Logo,
      SelectIcon: SelectIcon,
      JumpTo
    }
  })
  export default class AppBar extends Vue {
    private $auth;
    private $vuetify;

    right = true;
    title = 'Dungeon Tools';
    isHydrated = false;

    @navDrawer.Getter('show') showNav;
    @navDrawer.Mutation('setShow') setShowNav;
    @jumpTo.Getter('show') showJumpTo;
    @jumpTo.Getter('jumps') jumps;
    @jumpTo.Mutation('setShow') setJumpTo;

    get showNavIcon() {
      return this.isHydrated && this.$vuetify && this.$vuetify.breakpoint && this.$vuetify.breakpoint.smAndDown
    }

    get showLogo() {
      return this.isHydrated && this.$vuetify && this.$vuetify.breakpoint && this.$vuetify.breakpoint.smAndUp
    }

    async mounted() {
      this.isHydrated = true;
      await this.$auth.setUserToken('OK');
      await this.$auth.fetchUser();
    }
  }
</script>

<style lang="sass" scoped>
  .left
    margin-left: 16px
</style>
