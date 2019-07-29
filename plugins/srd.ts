import Vue from 'vue'
import srdData from '../assets/srd/srd.json';
import FlexSearch from 'flexsearch/dist/flexsearch.min';

// @ts-ignore
const index = new FlexSearch({
  doc: {
    id: 'title',
    field: [
      'title',
      'content:title',
      'content:text',
    ]
  }
});

index.add(srdData);
Vue.prototype.$pathfinder = {
  srd: {
    index,
    data: srdData
  }
};

export default async function ({app}) {
}
