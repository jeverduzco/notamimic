<template>
  <Logo ref="logo" width="38"></Logo>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import Logo from '../assets/icons/login/theEye.svg';
  import {random} from 'lodash';

  @Component({
    components: {Logo}
  })
  export default class comp extends Vue {
    private irisRange = 30;
    private iris;

    moveIrisRandomly() {
      this.iris.style.setProperty('--position', `${random(-1 * this.irisRange, this.irisRange)}px`)
    }

    mounted() {
      this.iris = this.$refs.logo.$el.querySelector('[class$="iris"]');

      setInterval(this.moveIrisRandomly, 15 * 1000)
    }
  }
</script>

<style lang="sass">
  [class$="iris"]
    transition: 1s
    transform: translateX(var(--position))

    [class$="eyelid"]
      animation-duration: 30s
      animation-name: blink
      animation-iteration-count: infinite
      animation-delay: 30s

    @keyframes blink
      0%
        transform: scale(1) translate(0, 0)
      1%
        transform: scaleY(1.7) scaleX(1.1) translate(-5%, -2%)
      2%
        transform: scale(1) translate(0, 0)
      100%
        transform: scale(1) translate(0, 0)
    :root
      --position: 0px
</style>
