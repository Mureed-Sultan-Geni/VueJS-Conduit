<template>
  <ConduitHeader />
  <div class="container m-auto mt-9">
    <h1 class="text-3xl mb-7 text-center">Your Setting</h1>
    <input
      class="rounded-md m-auto border-2 w-2/4 mb-4 py-1 align-middle flex px-4"
      placeholder="URL of Profile picture"
    />
    <input
      class="rounded-md m-auto border-2 w-2/4 mb-4 py-1 align-middle flex px-4"
      placeholder="Your Name"
    />
    <textarea
      class="
        rounded-md
        m-auto
        border-2
        w-2/4
        mb-4
        py-1
        align-middle
        flex
        px-4
        h-32
      "
      placeholder="Short bio about you"
    />
    <input
      class="rounded-md m-auto border-2 w-2/4 mb-4 py-1 align-middle flex px-4"
      placeholder="Email"
    />
    <input
      class="rounded-md m-auto border-2 w-2/4 mb-4 py-1 align-middle flex px-4"
      placeholder="Password"
    />
    <div class="flex justify-end w-2/4 m-auto">
      <button class="bg-green-600 px-5 py-2 rounded-lg text-white">
        Update Setting
      </button>
    </div>
    <div class="w-2/4 m-auto mt-8 border-t-2 pt-5">
      <button class="px-5 py-2 rounded-md border-red-400 border-2 text-red-600">
        OR Click here to Sign out
      </button>
    </div>
  </div>
</template>

<script>
import ConduitHeader from "../ConduitHome/ConduitHeader.vue";
export default {
  name: "ConduitSettingFields",
  components: {
    ConduitHeader,
  },
};
</script>

<style>
</style>