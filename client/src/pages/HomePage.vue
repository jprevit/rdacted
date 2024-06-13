<script setup>

</script>

<template>
  <div class="container-fluid d-flex flex-column justify-content-center text-light text-center landing">
    <logo />
    <span class="fs-5 mb-5">The messenger that forgets about you</span>
    <div class="row justify-content-center gap-5 mt-5">
      <button class="w-25 text-light" data-bs-toggle="modal" data-bs-target="#createModal">Create</button>
      <button class="w-25 text-light" data-bs-toggle="modal" data-bs-target="#joinModal">Join</button>
    </div>
  </div>
  <CreateChatModal />
  <JoinChatModal />
</template>

<style scoped lang="scss">
.landing {
  height: 100vh;
}
</style>
