<template>
  <nav class="w-full bg-black px-3 py-4 flex justify-center items-center">
    <div class="w-full h-full flex justify-between items-center">
      <h1 class="text-white"><strong>My</strong> Chat Bot App</h1>
      <div class="flex items-center gap-2">
        <v-btn size="small" class="text-gray-400 hover:text-white">Sign Out</v-btn>
        <v-btn size="small" variant="outlined"  class="bg-green-500 hover:bg-green-600">Sign in</v-btn>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "nav",
};
</script>

<style>
</style>