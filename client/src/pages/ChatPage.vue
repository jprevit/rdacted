<!-- eslint-disable no-console -->
<script setup>
import { computed, onMounted, ref } from 'vue';
import { AppState } from '../AppState.js';
import Pop from '../utils/Pop.js';
import { chatsService } from '../services/ChatsService.js';
import { useRoute } from 'vue-router';
import { messagesService } from '../services/MessagesService.js';

const user = computed(() => AppState.activeUser)
const chat = computed(() => AppState.activeChat)
const route = useRoute()
const messages = computed(() => AppState.messages)

async function getChat() {
    try {
        await chatsService.getChatById(route.params.chatId)
    }
    catch (error) {
        Pop.error(error);
    }
}

async function getMessages() {
    try {
        await messagesService.getMessages(route.params.chatId)
    }
    catch (error) {
        Pop.error(error);
    }
}

async function sendMessage() {
    try {
        await messagesService.sendMessage(route.params.chatId, messageData.value)
        messageData.value.content = ''
    }
    catch (error) {
        Pop.error(error);
    }
}

const messageData = ref({
    content: '',
    alias: user.value.alias,
    creatorId: user.value.id
})

onMounted(() => {
    getChat()
    getMessages()
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
                <button class="m-2 text-light" @click="getMessages()"><i class="mdi mdi-refresh"></i></button>
            </section>
        </header>

        <section class="row px-2 m-1 text-light">
            <div class="col-12 d-flex flex-column textbox chatlog justify-content-end">
                <div v-for="message in messages" :key="message.id"
                    :class="user.id == message.creatorId ? 'text-end' : 'text-start'">
                    <p class="fs-6 mb-0">{{ message.alias }}</p>
                    <p class="fs-5 message rounded-pill d-inline-block px-3">{{ message.content }}</p>
                </div>
            </div>
        </section>

        <section class="row px-1 mt-3 m-1 text-light align-items-center">
            <UserIcon :user="user" />
            <form v-if="user" @submit.prevent="sendMessage()" class="col-10 ">
                <div class="row justify-content-between align-items-center">
                    <input v-model="messageData.content" class="textbox col text-light" rows="5"></input>
                    <button type="submit" class="text-light"><i class="mdi mdi-send"></i></button>
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

.message {
    background-color: #505b47;
}

input {
    border: #A2B990;
    height: 6vh;
}

button {
    width: 10vh;
}
</style>