<template>
  <Page>
    <ActionBar title="Cards" icon=""> </ActionBar>
    <ActivityIndicator :busy="true" />
    <ScrollView
      height="100%"
      orientation="vertical"
      v-if="cards.status = 'success'"
    >
      <StackLayout padding="0 5">
        <Card v-for="card in cards.data" :key="card.id" :card="card" />
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
      loading: false
    };
  },
  computed: {
    ...mapGetters(["cards"]),
  },
  methods: {
    ...mapActions(["getCards"]),
    
  },
  methods:{
    setlLoading(){
      this.loading = this.cards.status === 'loading'
    }
  },
  mounted() {
    this.getCards;
  },
};
</script>

<style lang="scss" scoped>
</style>