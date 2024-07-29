<script setup>
// @ts-ignore
import anonicon from '../assets/img/AnonIcon.svg';
import { User } from '../models/User.js';
import { usersService } from '../services/UsersService.js';
import Pop from '../utils/Pop.js';


defineProps(
    { user: { type: User } }
)

async function joinChat() {
    try {
        await usersService.createUser()
    }
    catch (error) {
        Pop.error(error);
    }
}
</script>


<template>
    <div class="col-2 align-items-center">
        <div class="row justify-content-center">
            <img :src="anonicon" alt="anon icon" title="anonymous icon">
        </div>
        <div class="row justify-content-center text-center">
            <span v-if="user" class="fs-6">{{ user?.alias }}</span>
            <button v-else class="text-light" data-bs-toggle="modal" data-bs-target="#joinModal">Join</button>
        </div>
    </div>

    <JoinChatModal />
</template>


<style lang="scss" scoped>
img {
    width: 100px;
    aspect-ratio: 1/1;
}

button {
    height: 2em;
    max-width: 10em;
}
</style>