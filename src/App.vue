<template>
  <div id="app" class="antialiased h-full">
    <component :is="this.$route.meta.layout || 'div'">
      <router-view />
    </component>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>
