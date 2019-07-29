<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-navigation-drawer
    app
    fixed
    :clipped="true"
    v-model="show"
    :expand-on-hover="$vuetify.breakpoint.mdAndUp"

  >
    <v-list
      nav
      dense
    >
      <v-list-item-group color="primary">
        <v-list-item v-for="item in items" link router :to="item.to" :key="item.to">
          <v-list-item-icon>
            <Component :is="item.icon" height="39" width="39"/>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link router to="/monsters">
          <v-list-item-icon>
            <v-tooltip right open-delay="5000">
              <template v-slot:activator="{ on }">
                <MonstersIcon height="39" width="39" v-on="on"/>
              </template>
              <span>Not a monster</span>
            </v-tooltip>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Monsters</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator";

  import CharactersIcon from '../assets/icons/navDrawer/charactersIcon.svg';
  import GameRulesIcon from '../assets/icons/navDrawer/gameRules.svg';
  import AncestriesIcon from '../assets/icons/navDrawer/ancestries.svg';
  import ClassesIcon from '../assets/icons/navDrawer/classes.svg';
  import SpellsIcon from '../assets/icons/navDrawer/spells.svg';
  import SkillsIcon from '../assets/icons/navDrawer/skills.svg';
  import FeatsIcon from '../assets/icons/navDrawer/feats.svg';
  import EquipmentIcon from '../assets/icons/navDrawer/equipment.svg';
  import MonstersIcon from '../assets/icons/navDrawer/monsters.svg';

  @Component({
    components: {MonstersIcon},
    computed: {}
  })
  export default class NavDrawer extends Vue {
    items = [
      {title: 'My Characters', icon: CharactersIcon, to: '/myCharacters'},
      {title: 'Game Rules', icon: GameRulesIcon, to: '/gameRules'},
      {title: 'Ancestries', icon: AncestriesIcon, to: '/ancestries'},
      {title: 'Classes', icon: ClassesIcon, to: '/classes'},
      {title: 'Spells', icon: SpellsIcon, to: '/spells'},
      {title: 'Skills', icon: SkillsIcon, to: '/skills'},
      {title: 'Feats', icon: FeatsIcon, to: '/feats'},
      {title: 'Equipment', icon: EquipmentIcon, to: '/equipment'},
    ];

    @Prop() mini!: boolean;

    get show(): boolean {
      return this.$store.getters['NavDrawer/show'] || this.$vuetify.breakpoint.mdAndUp;
    }

    set show(value) {
      this.$store.commit(`NavDrawer/setShow`, value);
    }
  }
</script>
