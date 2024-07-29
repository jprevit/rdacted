<script setup>
import { computed } from 'vue';
import { AppState } from '../AppState.js';

const user = computed(() => AppState.activeUser)
</script>


<template>
    <section class="container-fluid text-light">
        <header class="my-2">
            <section class="row ps-3">
                <RouterLink to="/">
                    <Logo class="col-2" />
                </RouterLink>
            </section>
        </header>
        <section class="row px-2 m-1 text-light">
            <div class="col-12 d-flex flex-column textbox chatlog justify-content-end">Chatlog goes here</div>
        </section>
        <section class="row px-1 mt-3 m-1 text-light justify-content-between align-items-center">
            <UserIcon :user="user" />
            <textarea class="col-8 textbox text-light" rows="5"></textarea>
            <button class="col-2 text-light"><i class="mdi mdi-send"></i></button>
        </section>
    </section>
</template>


<style lang="scss" scoped>
.textbox {
    background-color: #A2B990;
}

.chatlog {
    height: 50vh;
}
</style>