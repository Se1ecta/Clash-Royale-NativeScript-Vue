<template>
  <StackLayout orientation="horizontal" class="header">
    <StackLayout class="header-left">
      <StackLayout class="name-wrapper">
        <Label :text="mainInfo.name" class="name"></Label>
        <Label :text="mainInfo.tag" class="tag"></Label>
      </StackLayout>
      <StackLayout orientation="horizontal">
        <StackLayout orientation="horizontal" marginRight="5">
          <Label text="Level: "></Label>
          <Label :text="mainInfo.expLevel"></Label>
        </StackLayout>
        <StackLayout orientation="horizontal">
          <Label text="Trophies: ">"</Label>
          <Label :text="mainInfo.trophies"></Label>
        </StackLayout>
      </StackLayout>
    </StackLayout>
    <StackLayout class="header-rigth"> </StackLayout>
  </StackLayout>
</template>

<script>
export default {
  props: {
    mainInfo: {
      type: Object,
      required: true,
      default: {},
    },
  },
};
</script>
<style lang="scss" scoped>
.header {
  background: rgb(45, 126, 219);
  padding: 20 5;
  &-left {
  }
  .name-wrapper {
    .name {
      font-size: 18;
      color: white;
    }
    .tag {
      font-size: 12;
      opacity: 0.3;
    }
  }
}
</style>