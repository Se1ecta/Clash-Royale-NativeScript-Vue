<template>
  <StackLayout class="battle-deck">
    <StackLayout class="battle-deck-header">
      <Label
        text="Battle deck"
        textAlignment="center"
        fontSize="18"
        color="black"
      ></Label>
    </StackLayout>
    <StackLayout class="battle-deck-body">
      <FlexboxLayout class="deck-container">
        <StackLayout
          class="card"
          v-for="(card, index) in battleDeck"
          :key="index"
        >
          <StackLayout class="image-container">
            <Image
              loadMode
              :src="card.iconUrls.medium"
              stretch="none"
            />
          </StackLayout>
        </StackLayout>
      </FlexboxLayout>
    </StackLayout>
  </StackLayout>
</template>

<script>
import imageSource from "image-source";
export default {
  props: {
    battleDeck: {
      type: Array,
      required: true,
    },
  },
  methods: {
    imageLoaded(args) {
      var img = args.object;
      var bc = img.bindingContext;
      console.log(args);

      if (bc.Loaded) {
        img.imageSource = bc.ImageSource;
      } else {
        imageSource.fromUrl(bc.ImageURL).then(function (iSource) {
          img.imageSource = iSource;
          bc.set("ImageSource", iSource);
          bc.set("Loaded", true);
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.battle-deck {
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