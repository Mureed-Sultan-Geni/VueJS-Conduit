<template>
  <ConduitSettingFields />
  <ConduitFooter />
</template>

<script>
import ConduitSettingFields from "@/components/ConduitSetting/ConduitSettingFields.vue";
import ConduitFooter from "@/components/ConduitHome/ConduitFooter.vue";

export default {
  name: "ConduitSetting",
  components: {
    ConduitSettingFields,
    ConduitFooter,
  },
};
</script>

<style>
</style>