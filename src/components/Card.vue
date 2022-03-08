<template>
  <StackLayout class="card" orientation="horizontal">
    <StackLayout class="card-image">
      <Image :src="card.iconUrls.medium" stretch="none" />
    </StackLayout>
    <StackLayout class="card-info">
      <StackLayout class="card-title">
        <Label :text="card.name"></Label>
      </StackLayout>
      <StackLayout class="card-maxLevel">
        <StackLayout orientation="horizontal">
          <Label text="Max level: "></Label>
          <Label :text="card.maxLevel"></Label>
        </StackLayout>
      </StackLayout>
    </StackLayout>
  </StackLayout>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    card: {
      type: Object,
      required: true,
      default: {},
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  height: 120;
  background: pink;
  border-radius: 5;
  padding: 5;
  margin: 5;
  -webkit-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.6);
  -moz-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.6);
  box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.6);
  &-title {
    Label {
      font-size: 24;
      margin: 0;
    }
  }
  &-info {
    margin-left: 10;
  }
}
</style>
