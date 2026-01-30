<template>
  <div class="container">
    <h2>Bài 1: Xếp loại học sinh</h2>

    <input
      type="number"
      step="0.25"
      v-model.number="dtb"
      placeholder="Nhập điểm trung bình"
    />
        <p v-if="dtb < 0"> Vui lòng nhập từ 0-10</p>

    <p v-else-if="dtb < 5">Xếp loại: Yếu</p>
    <p v-else-if="dtb < 6.5">Xếp loại: Trung bình</p>
    <p v-else-if="dtb < 8">Xếp loại: Khá</p>
    <p v-else-if="dtb < 9">Xếp loại: Giỏi</p>
    <p v-else-if="dtb>10"> Vui lòng nhập từ 0-10</p>
    <p v-else>Xếp loại: Xuất sắc</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const dtb = ref(0)
</script>
