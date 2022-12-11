<template>
    <div class="message">
      <div class="flex" :class="sender ? 'flex-row-reverse' : ''">
        <Avatar class="mt-1" src="" />
        <div class="text w-3/4" :class="sender ? 'bg-green-800' : 'bg-gray-700'">
          <slot />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Avatar from './Avatar.vue'
  export default {
    components: { Avatar },
    props: {
      name: { type: String, default: '' }
    }
  }
  </script>
  