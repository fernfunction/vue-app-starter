<script setup lang="ts">
import AppView from '@/components/layout/AppView.vue'
import { ElCard } from 'element-plus'
</script>

<template>
  <AppView class="flex flex-col gap-2 p-3">
    <el-card style="max-width: 480px">
      <template #header>Yummy Homeburger</template>
      <img
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        style="width: 100%"
      />
    </el-card>
  </AppView>
</template>
