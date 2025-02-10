<script setup lang="ts">
import AppView from '@/components/layout/AppView.vue'
import { ElCard } from 'element-plus'
</script>

<template>
  <AppView class="flex flex-row gap-2 p-3 flex-wrap">
    <el-card style="width: 480px" shadow="always">We</el-card>
    <el-card style="width: 480px" shadow="hover">Are</el-card>
    <el-card style="width: 480px" shadow="never">About</el-card>
  </AppView>
</template>
