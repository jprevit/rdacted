<script setup>
import rdacted from '../assets/img/rdacted.svg'
</script>


<template>
    <div class="row justify-content-center">
        <img :src="rdacted" alt="redacted logo" title="redacted logo" class="img-fluid maxwidth80">
    </div>
</template>


<style lang="scss" scoped>
span {
    font-family: "Libre Barcode 128 Text", system-ui;
    font-weight: 400;
    font-style: normal;
    font-size: 64px;
}

.maxwidth80 {
    max-width: 80%;
    justify-self: center;
}
</style>