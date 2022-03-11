<template>
  <StackLayout class="battle-deck">
    <StackLayout class="battle-deck-header">
      <Label text="Battle deck" textAlignment="center"></Label>
    </StackLayout>
    <StackLayout class="battle-deck-body">
      <FlexboxLayout class="deck-container">
        <StackLayout
          class="card"
          v-for="(card, index) in battleDeck"
          :key="index"
        >
          <StackLayout class="image-container">
            <Image :src="card.iconUrls.medium" stretch="none" />
          </StackLayout>
        </StackLayout>
      </FlexboxLayout>
    </StackLayout>
  </StackLayout>
</template>

<script>
export default {
  props: {
    battleDeck: {
      type: Array,
      required: true,
      default: [],
    },
  },
};
</script>

<style lang="scss" scoped>
.battle-deck {
  background: red;
  .deck-container {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .card {
    .image-container {
      width: 90;
      height: 110;
      Image {
        width: 100%;
        height: auto;
      }
    }
  }
}
</style>