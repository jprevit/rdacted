<!-- eslint-disable no-console -->
<script setup>
import { computed, ref } from 'vue';
import { chatsService } from '../services/ChatsService.js';
import Pop from '../utils/Pop.js';
import { router } from '../router.js';
import { Chat } from '../models/Chat.js';
import { AppState } from '../AppState.js';
import { Modal } from 'bootstrap';

let isLoading = false

const chatData = ref({
    joinCode: '',
    name: '',
    alias: ''
})

const chat = computed(() => AppState.activeChat)

async function createChat() {
    try {
        // console.log('creating', chatData.value);
        isLoading = true
        await chatsService.createChat(chatData.value)
        Modal.getOrCreateInstance('#createModal').hide()
        router.push({ name: 'Chat' })
    }
    catch (error) {
        Pop.error(error);
    }
}
</script>


<template>
    <div class="modal fade" id="createModal" tabindex="-1" aria-labelledby="createModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered text-light">
            <div class="modal-content">
                <div class="modal-header" data-bs-theme="dark">
                    <h1 class="modal-title fs-5" id="createModalLabel">Create Chat</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div v-if="!isLoading" class="modal-body">
                    <form @submit.prevent="createChat()" class="d-flex flex-column gap-3 align-items-center">
                        <div class="d-flex gap-3 align-items-baseline">
                            <label for="alias">Alias</label>
                            <input v-model="chatData.alias" type="text" placeholder="Choose an Alias..." name="alias">
                        </div>
                        <div class="d-flex gap-3 align-items-baseline">
                            <label for="alias">Chat Name</label>
                            <input v-model="chatData.name" type="text" placeholder="Choose a Chatroom Name..."
                                name="alias">
                        </div>
                        <div class="d-flex gap-3 align-items-baseline">
                            <label for="alias">Join Code</label>
                            <input v-model="chatData.joinCode" type="text" placeholder="Choose a Join Code..."
                                name="alias">
                        </div>
                        <button type="submit" class="w-50 text-light">Create Chat</button>
                    </form>
                </div>
                <div v-else class="d-flex flex-column justify-content-center align-items-center m-5 gap-3">
                    <div class="spinner-border text-light" role="status">
                    </div>
                    <span class="text-light fs-4">Loading...</span>
                </div>
            </div>
        </div>
    </div>


</template>


<style lang="scss" scoped>
.modal-content {
    background-color: #6C805D;
    border-radius: 0px;
}
</style>