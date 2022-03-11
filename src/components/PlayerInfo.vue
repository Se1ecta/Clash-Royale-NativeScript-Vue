<template>
  <ScrollView height="100%">
    <StackLayout>
      <MainInfo :mainInfo="mainInfo" />
      <BattleDeck :battleDeck="player.currentDeck" />
    </StackLayout>
  </ScrollView>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
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
    ...mapGetters(["palyer"]),
    mainInfo() {
      return {
        name: this.player.name,
        tag: this.player.tag,
        expLevel: this.player.expLevel,
        trophies: this.player.trophies,
      };
    },
  },
  methods: {

  },

};
</script>

<style lang="scss" scoped>
</style>