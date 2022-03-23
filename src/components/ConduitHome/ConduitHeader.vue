<template>
  <div class="container flex justify-between mx-auto mt-3">
    <div class="headerLogo">
      <p class="text-green-600 font-bold text-xl">Conduit Copy</p>
    </div>
    <div class="headerNav">
      <ul class="flex">
        <li class="mx-3 text-slate-400 hover:text-black">
          <router-link to="/ConduitHome">Home</router-link>
        </li>
        <li class="mx-3 text-slate-400 hover:text-black">
          <router-link to="/ConduitNewPost">NewPost</router-link>
        </li>
        <li class="mx-3 text-slate-400 hover:text-black">
          <router-link to="/ConduitSetting">Setting</router-link>
        </li>
        <li class="mx-3 text-slate-400 hover:text-black">
          <a href="#">Sign in</a>
        </li>
        <li class="mx-3 text-slate-400 hover:text-black">
          <a href="#">Sign Up</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "ConduitHeader",
};
</script>

<style>
</style>