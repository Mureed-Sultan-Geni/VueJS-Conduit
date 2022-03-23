<template>
  <ConduitHeader />
  <ConduitPostFields />
  <ConduitFooter />
</template>

<script>
import ConduitHeader from "@/components/ConduitHome/ConduitHeader.vue";
import ConduitPostFields from "../components/ConduitNewPost/ConduitPostFields.vue";
import ConduitFooter from "@/components/ConduitHome/ConduitFooter.vue";

export default {
  name: "ConduitNewPost",
  components: {
    ConduitHeader,
    ConduitPostFields,
    ConduitFooter,
  },
};
</script>

<style>
</style>