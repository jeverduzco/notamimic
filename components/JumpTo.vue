<template>
  <v-select class="select" append-icon="" label="Jump to..." :items="jumps"
            v-on:change="onSelectJump" item-text="label" item-value="to" v-model="selectedJumpTo">
    <SelectIcon slot="append"/>
  </v-select>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator'
  import SelectIcon from '../assets/icons/AppBar/selectIcon.svg';

  @Component({
    components: {
      SelectIcon: SelectIcon
    }
  })
  export default class JumpTo extends Vue {
    selectedJumpTo = '';
    @Prop() jumps;

    onSelectJump(value) {
      this.$vuetify.goTo(value);
    }

    onScroll({target}) {
      let elements = target.querySelectorAll('.scroll-element');
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

      for (let i = 0; i < elements.length; i++) {
        if (elements[i].offsetTop >= scrollTop) {
          this.selectedJumpTo = this.jumps[i];
          break;
        }
      }
    }

    async mounted() {
      document.addEventListener('scroll', this.onScroll);
    }

    beforeDestroy() {
      document.removeEventListener('scroll', this.onScroll);
    }
  }
</script>

<style lang="sass">
  .select
    flex-grow: 1
    max-width: 50%

    & .v-input__slot
      margin: 0

    & div, label.v-label, input
      color: #fff

    & .v-select__selection
      text-overflow: ellipsis
      overflow: hidden
      white-space: nowrap
      display: block

    & .v-select__selections
      overflow: hidden

    & .v-label--active, .v-text-field__details
      display: none

    & div::before, div::after
      border: 0.03em solid #fff !important
</style>
