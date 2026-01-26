<template>
    <div>
        <h1>Danh sách bài viết</h1>
        <div v-for="(post, index) in posts" :key="index" :class="{'highlighted':post.title.length>20}"
            :style="{backgroundColor: post.backgroundColor, color: post.textColor}" class="post">
        <h3 class="text-success" >{{ post.title }}</h3>
           <h4 class="text-danger" >{{ post.author }}</h4>
<p>{{ post.content }}</p>
    </div>
    </div>
    </template>
    <script setup>
import { defineProps } from 'vue';
defineProps({
    posts: {
        type: Array,
        required: true,
    }
})
</script>