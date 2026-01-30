<template>
  <div class="container">
    <h2>Nhập tháng của bạn</h2>

    <input
      type="number"
      step="1"
      v-model.number="dtb"
      placeholder="Nhập tháng"
    />
    <p v-if="dtb>12 || dtb<=0" style="color:red"> Vui lòng nhập tháng từ 1-12!</p>

    <p v-else-if="dtb <=3">Mùa xuân</p>
    <p v-else-if="dtb >=4 && dtb <=6">Mùa hạ</p>
    <p v-else-if=" dtb >=7 && dtb <= 9">Mùa thu</p>
    <p v-else-if="dtb >9 && dtb<13">Mùa đông</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const dtb = ref(1)
</script>
