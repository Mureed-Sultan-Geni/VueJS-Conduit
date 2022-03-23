<template>
  <GlobalFeedsItem
    titleItems="Create a New implementation"
    titleDescription="Join the community by creating a new implementiation"
    titleTag1="Implementation"
    titleTag2="not"
  />
  <GlobalFeedsItem
    titleItems="Explore Implementations"
    titleDescription="Discover the implementations create by the Real World Community"
    titleTag1="CodeBaseShow"
    titleTag2="CodeBaseShow"
  />
  <GlobalFeedsItem
    titleItems="Welcome to RealWorld project"
    titleDescription="Examplary full stack medium.com clone powered by React, Angular, Node, Django and many more "
    titleTag1="CodeBaseShow"
    titleTag2="CodeBaseShow"
  />
</template>

<script>
export default {
  name: "ConduitGlobalFeeds",
  components: {
    GlobalFeedsItem,
  },
};
import GlobalFeedsItem from "./GlobalFeedsItem.vue";
</script>

<style>
</style>