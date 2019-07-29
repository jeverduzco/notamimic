<template>
  <v-list>
    <template v-for="(item, index) in $pathfinder.srd.data">
      <v-list-item link router :to="`/gameRules/${item.title}`" :key="item.title">
        <v-list-item-content>
          <v-list-item-title v-html="item.title" class="rule-title subtitle-2 "></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider v-if="index < $pathfinder.srd.data.length - 1" :key="`${item.title}-divider`"></v-divider>
    </template>

  </v-list>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  @Component({
    components: {}
  })
  export default class GameRules extends Vue {
  }
</script>

<style lang="sass" scoped>
  .rule-title
    text-align: center
</style>

