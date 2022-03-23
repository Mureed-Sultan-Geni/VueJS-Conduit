<template>
  <div class="container mx-auto flex justify-between mt-5">
    <div class="box w-3/4">
      <div class="border-b-2 border-green-500">
        <button
          class="
            text-gray-500
            pb-2
            border-b-2
            mr-5
            hover:text-green-600 hover:border-green-500
          "
          @click="activeTab = 'YourFeeds'"
        >
          Your Feeds
        </button>
        <button
          class="
            text-gray-500
            pb-2
            border-b-2
            hover:text-green-600 hover:border-green-500
          "
          @click="activeTab = 'GlobalFeeds'"
        >
          Global Feeds
        </button>
      </div>
      <ConduitYourFeeds v-if="activeTab === 'YourFeeds'" />
      <ConduitGlobalFeeds v-if="activeTab === 'GlobalFeeds'" />
    </div>
    <div class="">
      <h5>Popular Tags</h5>
      <ul>
        <li><a href="#">Welcome</a></li>
        <li><a href="#">Implementation</a></li>
        <li><a href="#">CodeBaseShow</a></li>
        <li><a href="#">Introduction</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConduitHomeFeeds",
  components: {
    ConduitYourFeeds,
    ConduitGlobalFeeds,
  },
  data() {
    return {
      activeTab: "GlobalFeeds",
    };
  },
};
import ConduitYourFeeds from "./ConduitHomeFeeds/ConduitYourFeeds.vue";
import ConduitGlobalFeeds from "./ConduitHomeFeeds/ConduitGlobalFeeds.vue";
</script>

<style>
</style>