<template>
  <ScrollView height="100%">
    <StackLayout>
      <MainInfo :mainInfo="mainInfo" />
      <BattleDeck :battleDeck="player.currentDeck" />
    </StackLayout>
  </ScrollView>
</template>

<script>
import BattleDeck from "./BattleDeck.vue";
import MainInfo from "./MainInfo.vue";
export default {
  components: {
    BattleDeck,
    MainInfo,
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
    console.log(this.player);
  },
};
</script>

<style lang="scss" scoped>
</style>