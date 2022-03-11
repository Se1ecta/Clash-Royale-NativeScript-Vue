<template>
  <Page >
    <ActionBar title="Home" color="white" icon="">
      <GridLayout width="100%" columns="auto, *">
        <Label
          text="MENU"
           @tap="$drawer.toggle()"
          col="0"
        />
        <Label class="title" text="Home" col="1" /> </GridLayout
    ></ActionBar>
    <GridLayout rows="*" columns="auto,*">
      <Label text="Home"></Label>
    </GridLayout>
  </Page>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
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