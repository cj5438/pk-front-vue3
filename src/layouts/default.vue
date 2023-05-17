<template>
  <div class="fixed top-0 w-full z-50" :class="{ 'bg-black bg-opacity-30 shadow-lg': y > 0 }">
    <Container>
      <img src="/512x512.png" class="w-14 h-full" alt="toimc logo" />
      <Menu></Menu>
    </Container>
  </div>
  <router-view></router-view>
  <div class="h-[4000px]"></div>
  <div>footer</div>
</template>

<script setup lang="ts">
const { y } = useWindowScroll()
</script>

<style scoped></style>
