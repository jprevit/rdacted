<!-- eslint-disable no-console -->
<script setup>
import { computed, onMounted, ref } from 'vue';
import { AppState } from '../AppState.js';
import Pop from '../utils/Pop.js';
import { chatsService } from '../services/ChatsService.js';
import { useRoute } from 'vue-router';
import { messagesService } from '../services/MessagesService.js';
import { usersService } from '../services/UsersService.js';

const user = computed(() => AppState.activeUser)
const chat = computed(() => AppState.activeChat)
const route = useRoute()
const messages = computed(() => AppState.messages)
const chatUsers = computed(() => AppState.chatUsers)

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

async function getUsers() {
    try {
        await usersService.getUsersByChatId(chat.value.id)
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
    getUsers()
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
            <div class="col-1 d-flex flex-column userlist">
                <p class="fs-6 text-center mb-0">User List</p>
                <button class="m-2 text-light" @click="getMessages()"><i class="mdi mdi-refresh"></i></button>
                <hr>
                <p v-for="user in chatUsers" :key="user.id">{{ user.alias }}</p>
            </div>
            <div class="col d-flex flex-column textbox chatlog justify-content-end">
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
                    <input v-model="messageData.content" class="textbox col text-light">
                    <button type="submit" class="text-light"><i class="mdi mdi-send"></i></button>
                </div>
            </form>
        </section>

    </section>
</template>


<style lang="scss" scoped>
.userlist {
    background-color: #A2B990;
    margin-right: 2em;
}

.textbox {
    background-color: #A2B990;
    border: none;
    height: 6vh;
}

.chatlog {
    height: 50vh;
}

.message {
    background-color: #505b47;
}

button {
    width: 10vh;
}
</style>