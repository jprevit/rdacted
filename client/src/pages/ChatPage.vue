<script setup>
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js';
import Pop from '../utils/Pop.js';
import { chatsService } from '../services/ChatsService.js';
import { useRoute } from 'vue-router';

const user = computed(() => AppState.activeUser)
const chat = computed(() => AppState.activeChat)
const route = useRoute()

async function getChat() {
    try {
        await chatsService.getChatById(route.params.chatId)
    }
    catch (error) {
        Pop.error(error);
    }
}

onMounted(() => {
    getChat()
})
</script>


<template>
    <section class="container-fluid text-light">

        <header class="my-2">
            <section class="row ps-3">
                <RouterLink to="/" class="col-2">
                    <Logo />
                </RouterLink>
                <p class="fs-1 col mb-0">{{ chat?.name }}</p>
            </section>
        </header>

        <section class="row px-2 m-1 text-light">
            <div class="col-12 d-flex flex-column textbox chatlog justify-content-end">Chatlog goes here</div>
        </section>

        <section class="row px-1 mt-3 m-1 text-light align-items-center">
            <UserIcon :user="user" />
            <form v-if="user" @submit="sendMessage()" class="col-10 ">
                <div class="row justify-content-between align-items-center">
                    <textarea class="textbox col text-light" rows="5"></textarea>
                    <button class="text-light"><i class="mdi mdi-send"></i></button>
                </div>
            </form>
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

button {
    width: 10vh;
}
</style>