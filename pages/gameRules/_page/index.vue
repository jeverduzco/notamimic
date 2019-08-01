<template>
  <v-container fill-height id="scroll-container">
    <v-layout column>
      <v-flex xs1 class="rule-title title scroll-element" text-center :id="pageData.title.replace(/\s+/g, '')">
        {{pageData.title}}
      </v-flex>
      <template v-for="(content, index) in pageData.content">
        <v-flex :ref="index" xs1 :key="`${content.title}-title`" :id="content.title.replace(/\s+/g, '')">
          <div class="rule-title subtitle-2 scroll-element">{{content.title}}</div>

          <p v-html="$md.render(content.text)"></p>
        </v-flex>
      </template>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import {namespace} from 'vuex-class'

  const jumpTo = namespace('ToolBar/JumpTo');
  @Component({
    components: {}
  })
  export default class RulePage extends Vue {
    $pathfinder;
    $route;

    @jumpTo.Mutation('setShow') setShowJumpTo;
    @jumpTo.Mutation('setJumps') setJumps;

    get pageData() {
      return this.$pathfinder.srd.data.find(d => d.title === this.$route.params.page);
    }

    async mounted() {
      const {title, content} = this.pageData;
      this.setShowJumpTo(true);
      this.setJumps([title, ...content.map(c => c.title)].map(j => ({label: j, to: `#${j.replace(/\s+/g, '')}`})));
    }

    beforeDestroy() {
      this.setShowJumpTo(false);
    }
  }
</script>

<style lang="sass" scoped>
  $darken: #7f0000
  .rule-title
    color: $darken

  .subtitle-2
    text-align: center
    border: solid $darken
    border-width: 1px 0
    margin-bottom: 10px
</style>

