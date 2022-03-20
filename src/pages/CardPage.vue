<template>
  <Page>
    <ActionBar title="Cards" color="white" icon="">
      <GridLayout width="100%" columns="auto, *">
        <Label text="MENU" @tap="$drawer.toggle()" col="0" />
        <Label class="title" text="Cards" col="1" /> </GridLayout
    ></ActionBar>

    <StackLayout class="cards-container">
      <FlexboxLayout v-if="cards.status === 'loading'" class="status">
        <ActivityIndicator :busy="true" />
      </FlexboxLayout>
      <FlexboxLayout v-if="cards.status === 'error'">
        <Label :text="cards.error"></Label>
        <Label>error</Label>
      </FlexboxLayout>
      <CollectionView
        :items="items"
        colWidth="100%"
        rowHeight="120"
        padding="0 5"
        @loadMoreItems="limit += 10"
      >
        <v-template>
          <Card :card="item" />
        </v-template>
      </CollectionView>
      <!-- <ScrollView
        height="100%"
        v-else-if="cards.status === 'success'"
        ref="scrollView"
        @scroll="onScrolled($event)"
      >
        <StackLayout padding="0 5">
          <StackLayout v-cloak>
            <Card v-for="card in items" :key="card.id" :card="card" />
          </StackLayout>
        </StackLayout>
      </ScrollView> -->
    </StackLayout>
  </Page>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Card from "../components/Card.vue";
import { ObservableArray } from "data/observable-array";

export default {
  components: {
    Card,
  },
  data() {
    return {
      loading: false,
      scrollOffset: 0,
      limit: 10,
    };
  },
  computed: {
    ...mapGetters(["cards"]),
    items() {
      const result = [];
      if (this.limit >= this.cards.data.length) {
        this.limit = this.cards.data.length;
      }
      for (var i = 0; i < this.limit; i++) {
        result.push(this.cards.data[i]);
      }
      return result;
    },
  },
  methods: {
    ...mapActions(["getCards"]),
    goBack() {
      this.$navigator.navigate("/", { clearHistory: true });
    },
    onScrolled(args) {
      console.log(`scrollX: ${args.scrollX}`);
      console.log(`scrollY: ${args.scrollY}`);
    },

    gridViewItemLoading(args) {
      console.log("item loading " + args.index.toString());
    },


  },
  beforeMount() {
    this.getCards(this.limit);
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.title {
  text-align: left;
  padding-left: 16;
}
.status {
  width: 100%;
  height: 70%;
  justify-content: center;
  align-items: center;
  font-size: 18;
  margin-bottom: 20;
}

[v-cloak] {
  display: none;
}
</style>