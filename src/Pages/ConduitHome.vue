<template>
  <ConduitHeader />
  <ConduitHeaderBanner />
  <ConduitHomeFeeds />
  <ConduitFooter />
</template>

<script>
import ConduitHeader from "../components/ConduitHome/ConduitHeader.vue";
import ConduitHeaderBanner from "../components/ConduitHome/ConduitHeaderBanner.vue";
import ConduitHomeFeeds from "../components/ConduitHome/ConduitHomeFeeds.vue";
import ConduitFooter from "@/components/ConduitHome/ConduitFooter.vue";
export default {
  name: "ConduitHome",
  components: {
    ConduitHeader,
    ConduitHeaderBanner,
    ConduitHomeFeeds,
    ConduitFooter,
  },
};
</script>
