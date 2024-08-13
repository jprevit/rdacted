<!-- eslint-disable no-console -->
<script setup>
import { ref } from 'vue';
import { chatsService } from '../services/ChatsService.js';
import Pop from '../utils/Pop.js';
import { router } from '../router.js';
import { Modal } from 'bootstrap';
import { Chat } from '../models/Chat.js';

let isLoading = false

const chatFormData = ref({
    joinCode: '',
    name: '',
    alias: '',
    chatId: ''
})



async function createChat() {
    try {
        // console.log('creating', chatFormData.value);
        isLoading = true
        const chatCreated = await chatsService.createChat(chatFormData.value)
        // console.log('creating', chatCreated);
        Modal.getOrCreateInstance('#createModal').hide()
        router.push({ name: 'Chat', params: { chatId: chatCreated.data.id } })
        isLoading = false
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
                            <input v-model="chatFormData.alias" type="text" placeholder="Choose an Alias..."
                                name="alias">
                        </div>
                        <div class="d-flex gap-3 align-items-baseline">
                            <label for="alias">Chat Name</label>
                            <input v-model="chatFormData.name" type="text" placeholder="Choose a Chatroom Name..."
                                name="alias">
                        </div>
                        <div class="d-flex gap-3 align-items-baseline">
                            <label for="alias">Join Code</label>
                            <input v-model="chatFormData.joinCode" type="text" placeholder="Choose a Join Code..."
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