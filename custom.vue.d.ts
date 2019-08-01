import {VuetifyObject} from 'vuetify'

declare module 'vue/types/vue' {

  export interface Vue {
    $vuetify: VuetifyObject;
  }
}

