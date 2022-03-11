<template>
  <Page>
    <ActionBar title="Player" color="white" icon="">
      <GridLayout width="100%" columns="auto, *">
        <Label text="MENU" @tap="$drawer.toggle()" col="0" />
        <Label class="title" text="Player" col="1" /> </GridLayout
    ></ActionBar>
    <StackLayout class="player">
      <FlexboxLayout class="container">
        <SearchBar
          hint="Enter tag player without #"
          v-model="playerTag"
          @submit="onSubmit(playerTag)"
        />
      </FlexboxLayout>
      <FlexboxLayout v-if="player.status === 'loading'" class="message">
        <ActivityIndicator :busy="true" />
      </FlexboxLayout>
      <PlayerInfo
        v-else-if="player.status === 'success'"
        :player="player.data"
      />
      <FlexboxLayout
        v-else-if="player.status === 'error'"
        textAligment
        class="message"
      >
        <Label :text="player.error"></Label>
      </FlexboxLayout>
    </StackLayout>
  </Page>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import PlayerInfo from "../components/PlayerInfo.vue";
export default {
  components: {
    PlayerInfo,
  },
  data() {
    return {
      playerTag: "Q9UQCP20",
      loading: false,
    };
  },
  computed: {
    ...mapGetters(["player"]),
  },
  methods: {
    ...mapActions(["getPlayer"]),
    goBack() {
      this.$navigator.navigate("/", { clearHistory: true });
    },
    onBusyChanged() {
      setTimeout(() => {
        this.loading = true;
      }, 3000);
      this.loading = true;
    },
    onSubmit(tag) {
      this.loading = true;
      this.getPlayer(tag);
      this.loading = false;
      console.log(this.player.currentDeck);
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.message {
  width: 100%;
  height: 70%;
  justify-content: center;
  align-items: center;
  font-size: 18;
  margin-bottom: 20;

}
.player {
  width: 100%;
  height: 100%;
}
.container {
  justify-content: center;
  align-items: center;
}
.player-tag {
  width: 100%;
}
.title {
  text-align: left;
  padding-left: 16;
}
</style>