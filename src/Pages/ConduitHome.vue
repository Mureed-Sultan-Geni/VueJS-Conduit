<template>
  <ConduitHeader />
  <ConduitHeaderBanner />
  <ConduitHomeFeeds />
</template>

<script>
import ConduitHeader from "../components/ConduitHome/ConduitHeader.vue";
import ConduitHeaderBanner from "../components/ConduitHome/ConduitHeaderBanner.vue";
import ConduitHomeFeeds from "../components/ConduitHome/ConduitHomeFeeds.vue";
export default {
  name: "ConduitHome",
  components: {
    ConduitHeader,
    ConduitHeaderBanner,
    ConduitHomeFeeds,
  },
};
</script>
