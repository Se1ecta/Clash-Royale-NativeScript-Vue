<template>
  <Page @loaded="onPageLoaded">
    <ActionBar title="Home" color="white" icon="">
      <GridLayout width="100%" columns="auto, *">
        <Label text="MENU" @tap="$drawer.toggle()" col="0" />
        <Label class="title" text="Home" col="1" /> </GridLayout
    ></ActionBar>

    <FlexboxLayout class="main">
      <Label text="Welcome my friend!" fontSize="36" color="white"></Label>
    </FlexboxLayout>
  </Page>
</template>

<script>
export default {
  methods: {
    onPageLoaded(args) {
      console.log("Page Loaded!");
      const page = args.object;
      console.log("Page reference from loaded event: ", page);
    },
  },
};
</script>

<style lang="scss" scoped>
ActionBar {
  background-color: #a253ba;
  color: #ffffff;
}
.main {
  justify-content: center;
  align-items: center;
  background-image: url("~/assets/images/bg2.jpg");
  background-repeat: no-repeat;
  background-color: #ffffff;
  background-size: cover;
}
.title {
  text-align: left;
  padding-left: 16;
}

.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}
</style>