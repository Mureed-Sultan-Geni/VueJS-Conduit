<template>
  <div class="box flex pt-7 border-t-2">
    <div class="box w-12 h-12 mr-5">
      <img
        src="../../../assets/Images/GeromeImage.png"
        class="rounded-full w-full h-full"
        alt="DemoAvatar"
      />
    </div>
    <div class="">
      <p class="flex text-green-600">Gerome</p>
      <p class="flex text-gray-400">Wed Nov 24 2021</p>
    </div>
  </div>
  <div class="mt-5 mb-8">
    <h1 class="text-2xl text-black font-semibold">{{ titleItems }}</h1>
    <p class="text-slate-400">{{ titleDescription }}</p>
    <p>
      <button class="mr-5 mt-5">Read More...</button>
      <span class="border-2 px-3 py-1 rounded-full text-green-500">{{
        titleTag1
      }}</span>
      <span
        v-if="show"
        class="border-2 px-3 py-1 rounded-full text-green-500 ml-2"
        >{{ titleTag2 }}</span
      >
    </p>
  </div>
</template>

<script>
export default {
  name: "GlobalFeedsItems",
  props: {
    titleItems: String,
    titleDescription: String,
    titleTag1: String,
    titleTag2: String,
  },
  data() {
    return {
      show: this.check(),
    };
  },
  methods: {
    check: function () {
      if (this.titleTag2 === "not") {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>

<style>
</style>