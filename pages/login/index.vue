<template>
  <v-layout column align-center class="main" fill-height>
    <v-flex d-flex xs5 md7 align-center>
      <Eye class="eye"/>
    </v-flex>
    <v-flex xs7 md5>
      <v-layout fill-height d-flex>
        <v-card
          elevation="9"
          raised
          outlined
          class="card"
        >
          <v-layout fill-height column>
            <v-flex d-flex class="headline" justify-center justify-self-start xs2>
              <span class="header">Sign In</span>
            </v-flex>
            <v-flex>
              <v-layout fill-height align-center column>
                <v-btn large color="#fff" class="login-button subtitle-2" @click="loginToGoogle">
                  <GoogleIcon class="icon"/>
                  Sign in with Google
                </v-btn>
                <v-btn large color="#fff" class="login-button subtitle-2" @click="loginToFacebook">
                  <FacebookIcon class="icon"/>
                  Sign in with Facebook
                </v-btn>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-card>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import Eye from "~/assets/icons/login/theEye.svg";
  import GoogleIcon from "~/assets/icons/login/google.svg";
  import FacebookIcon from "~/assets/icons/login/facebook.svg";

  @Component({
    layout: 'login',
    middleware: 'loggedIn',
    components: {
      Eye,
      GoogleIcon,
      FacebookIcon
    }
  })
  export default class Login extends Vue {
    $auth;

    loginToGoogle() {
      this.$auth.loginWith('google')
    }

    loginToFacebook() {
      this.$auth.loginWith('facebook')
    }
  }
</script>

<style lang="sass" scoped>
  $primary: #b71c1c
  .eye
    width: 50vw
    height: 50vw
    max-height: 350px
    min-height: 176px
    min-width: 176px

  .main
    background-color: $primary

  .card
    width: 100vw
    height: 100%
    border-radius: 15px 15px 0 0

  .header
    color: $primary
    border-bottom: solid 1px $primary
    margin-top: 20px
    padding: 0 34px
    max-height: 35px

  .login-button
    color: $primary
    margin-top: 20px
    width: 206px

  .icon
    margin-left: -4px
    margin-right: 8px
</style>

