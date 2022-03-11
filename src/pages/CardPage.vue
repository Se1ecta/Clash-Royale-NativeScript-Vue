<template>
  <Page @loaded="onPageLoaded">
    <ActionBar title="Cards" color="white" icon="">
      <GridLayout width="100%" columns="auto, *">
        <Label text="MENU" @tap="$drawer.toggle()" col="0" />
        <Label class="title" text="Cards" col="1" /> </GridLayout
    ></ActionBar>

    <ScrollView height="100%" orientation="vertical">
      <StackLayout padding="0 5">
        <StackLayout v-if="loading">
          <Label>Loading...</Label>
        </StackLayout>
        <StackLayout v-else>
          <Card v-for="card in cards.data" :key="card.id" :card="card" />
        </StackLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Card from "../components/Card.vue";
export default {
  components: {
    Card,
  },
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    ...mapGetters(["cards"]),
  },
  methods: {
    ...mapActions(["getCards"]),
    goBack() {
      this.$navigator.navigate("/", { clearHistory: true });
    },
    onPageLoaded(args) {
      console.log("Page Loaded!");
      const page = args.object;
      console.log("Page reference from loaded event: ", page);
    },
  },
  methods: {},
  created() {
    this.loading = true;

    // this.getCards;

    this.loading = false;
    console.log("greet");
  },
  updated() {},
};
</script>

<style lang="scss" scoped>
.title {
  text-align: left;
  padding-left: 16;
}

[v-cloak] {
  display: none;
}
</style>