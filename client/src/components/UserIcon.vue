<script setup>
import anonicon from '../assets/img/AnonIcon.svg'
</script>


<template>
    <div class="col-2 align-items-center">
        <div class="row justify-content-center">
            <img :src="anonicon" alt="anon icon" title="anonymous icon">
        </div>
        <div class="row text-center">
            <span class="fs-6">User Name</span>
        </div>
    </div>
</template>


<style lang="scss" scoped>
img {
    width: 100px;
    aspect-ratio: 1/1;
}
</style>