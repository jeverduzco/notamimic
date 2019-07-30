<template>
  <v-app-bar
    app
    color="primary"
    clipped-left
    class="white--text"
  >
    <v-app-bar-nav-icon @click="setJumpTo(!showNav)" v-if="showNavIcon" class="white--text"/>
    <Logo width="38"/>

    <div class="middle">
      <v-select :v-if="showJumpTo" class="select" append-icon="" label="Jump to...">
        <SelectIcon slot="append" />
      </v-select>
    </div>

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
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import Logo from '../assets/icons/login/theEye.svg';
  import SelectIcon from '../assets/icons/AppBar/selectIcon.svg';
  import {namespace} from 'vuex-class';

  const jumpTo = namespace('ToolBar/JumpTo');
  const navDrawer = namespace('NavDrawer');

  @Component({
    components: {
      Logo: Logo,
      SelectIcon: SelectIcon
    }
  })
  export default class AppBar extends Vue {
    private $auth;
    private $vuetify;

    right = true;
    title = 'Dungeon Tools';
    isHydrated = false;

    @navDrawer.Getter('show') showNav;
    @jumpTo.Getter('show') showJumpTo;
    @jumpTo.Mutation('setShow') setJumpTo;

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

<style lang="sass">
  .middle
    flex-grow: 1
    & .select
      width: 100px
      margin: 0 auto
      padding-top: 25px
      & div, label
        color: #fff

      & div::before
        border: 0!important
</style>
