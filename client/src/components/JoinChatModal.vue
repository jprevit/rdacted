<script setup>
import { ref } from 'vue';
import { chatsService } from '../services/ChatsService.js';
import Pop from '../utils/Pop.js';

const joinData = ref({
    joinCode: '',
    alias: ''
})

async function joinChat() {
    try {
        await chatsService.joinChat(joinData.value)
    }
    catch (error) {
        Pop.error(error);
    }
}
</script>


<template>
    <div class="modal fade" id="joinModal" tabindex="-1" aria-labelledby="joinModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered text-light">
            <div class="modal-content">
                <div class="modal-header" data-bs-theme="dark">
                    <h1 class="modal-title fs-5" id="joinModalLabel">Join Chat</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="joinChat()"
                        class="d-flex flex-column gap-3 align-items-center justify-content-end">
                        <div class="d-flex gap-3 align-items-baseline">
                            <label for="alias">Alias</label>
                            <input v-model="joinData.alias" type="text" placeholder="Choose an Alias..." name="alias">
                        </div>
                        <div class="d-flex gap-3 align-items-baseline">
                            <label for="alias">Code</label>
                            <input v-model="joinData.joinCode" type="text" placeholder="Enter your Join Code..."
                                name="join code">
                        </div>
                        <button type="submit" class="w-50 text-light">Join Chat</button>
                    </form>
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