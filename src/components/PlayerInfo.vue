<template>
  <ScrollView height="100%">
    <StackLayout>
      <MainInfo :mainInfo="mainInfo" />
      <BattleDeck :battleDeck="player.currentDeck" />
      <!-- <Chart/> -->
    </StackLayout>
  </ScrollView>
</template>

<script>
import BattleDeck from "./BattleDeck.vue";
import MainInfo from "./MainInfo.vue";
import Chart from "./Chart.vue"
export default {
  components: {
    BattleDeck,
    MainInfo,
    Chart
  },
  data() {
    return {};
  },
  props: {
    player: {
      type: Object,
      required: true,
      default: {},
    },
  },
  computed: {
    mainInfo() {
      return {
        name: this.player.name,
        tag: this.player.tag,
        expLevel: this.player.expLevel,
        trophies: this.player.trophies,
      };
    },
  },
  methods: {},
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
</style>