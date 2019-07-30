<template>
  <v-container fluid fill-height>
    <v-layout column>
      <v-flex class="rule-title title" text-center xs12>
        {{pageData.title}}
      </v-flex>
      <template v-for="content in pageData.content">
        <v-flex class="rule-title subtitle-2" text-center xs12>
          {{content.title}}
        </v-flex>
        <v-flex v-html="$md.render(content.text)">

        </v-flex>
      </template>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import {
    State,
    Getter,
    Action,
    Mutation,
    namespace
  } from 'vuex-class'

  const jumpTo = namespace('ToolBar/JumpTo');
  @Component({
    components: {}
  })
  export default class RulePage extends Vue {
    $pathfinder;
    $route;

    @jumpTo.Mutation('setShow') setShowJumpTo;

    get pageData() {
      return this.$pathfinder.srd.data.find(d => d.title === this.$route.params.page);
    }

    mounted() {
      this.setShowJumpTo(true);
    }

    beforeDestroy() {
      this.setShowJumpTo(false);
    }
  }
</script>

<style lang="sass" scoped>
  .rule-title
    color: #7f0000

</style>

