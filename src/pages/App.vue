<template>
  <Page actionBarHidden="true">
    <GlobalDrawer>
      <template slot="content">
        <Label class="drawer-header" text="Drawer" />
        <Label class="drawer-item" text="Home" @tap="goHomePage" />
        <Label class="drawer-item" text="Cards" @tap="goCardsPage" />
        <Label class="drawer-item" text="Player" @tap="goPlayersPage" />
      </template>
      <template slot="frame">
        <!--default page-->
        <Home />
      </template>
    </GlobalDrawer>
  </Page>
</template>

<script >
import { mapActions } from "vuex";
import Home from "./Home.vue";
export default {
  components: {
    Home,
  },
  data() {
    return {
      msg: "Hello World!",
      loading: false,
    };
  },
  methods: {
    ...mapActions(["getCards"]),
    goCardsPage() {
      this.$drawer.close();
      this.$navigator.navigate("/cards", {
        clearHistory: true,
        frame: this.$drawer.getFrame(),
      });
    },
    goPlayersPage() {
      this.$drawer.close();
      this.$navigator.navigate("/players", {
        clearHistory: true,
        frame: this.$drawer.getFrame(),
      });
    },
    goHomePage() {
      this.$drawer.close();
      this.$navigator.navigate("/", {
        clearHistory: true,
        frame: this.$drawer.getFrame(),
      });
    },
    greet() {
      console.log("greet");
    },
  },
  updated() {
    this.loading = true;
    $refs.drawer.nativeView.closeDrawer();
  },
  mounted() {
    this.getCards();
  },
};
</script>

<style lang="scss">
.drawer-header {
  padding: 50 16 16 16;
  margin-bottom: 16;
  background-color: #a253ba;
  color: #eeeeee;
  font-size: 24;
}

.drawer-item {
  padding: 8 16;
  color: #333333;
  font-size: 16;
  background: white;
  border: none;
  border-width: 0;
}
</style>


