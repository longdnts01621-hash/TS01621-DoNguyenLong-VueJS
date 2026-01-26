<template>
    <div>  
    <h1>Tạo bài viết</h1>
    <input v-model="title" placeholder="Tiêu đề bài viết" />
    <input v-model="author" placeholder="Tác giả" />
    <input v-model="content" placeholder="Nội dung bài viết" />
    <button @click="createPost">Tạo bài viết</button>
    </div>
    </template>
    <script setup>
    import { ref } from 'vue';
    const emit = defineEmits(['postCreated']);
    const title = ref('');
    const author = ref('');
    const content = ref('');
    function createPost() {
    if(title.value && author.value && content.value) {
    const post = {
    title: title.value,
    author: author.value,
    content: content.value
    }
    emit('postCreated', post);
    title.value = '';
    author.value = '';
    content.value = '';
    }}
   </script>