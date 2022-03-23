<template>
  <div class="container m-auto justify-center mt-8">
    <input
      class="border-2 m-auto rounded-md w-3/4 mb-4 align-middle flex py-4 px-4"
      placeholder="Article Title"
    />
    <input
      class="rounded-md m-auto border-2 w-3/4 mb-4 py-1 align-middle flex px-4"
      placeholder="What's the article about?"
    />
    <textarea
      class="
        rounded-md
        m-auto
        h-40
        border-2
        w-3/4
        mb-4
        py-1
        align-middle
        flex
        px-4
      "
      placeholder="What's your article (in Markdown)"
    />
    <input
      class="rounded-md m-auto border-2 w-3/4 mb-4 py-1 align-middle flex px-4"
      placeholder="Enter Tags"
    />
    <div class="flex justify-end w-3/4 m-auto">
      <button class="bg-green-600 px-5 py-2 rounded-lg text-white">
        Publish Article
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConduitPostFields",
};
</script>

<style>
</style>