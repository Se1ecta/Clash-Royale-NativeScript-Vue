<template>
  <Page>
    <ActionBar title="Players" color="white" icon="">
      <GridLayout width="100%" columns="auto, *">
        <Label text="MENU" @tap="$drawer.toggle()" col="0" />
        <Label class="title" text="Players" col="1" /> </GridLayout
    ></ActionBar>
    <StackLayout>
      <FlexboxLayout class="container">
        <TextField hint="enter tag player without #" class="player-tag" />
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
  },
  mounted() {
    this.getPlayer("Q9UQCP20");
  },
};
</script>

<style lang="scss" scoped>
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