<script setup lang="ts">
import AppView from '@/components/layout/AppView.vue'
import { ElCard } from 'element-plus'
</script>

<template>
  <AppView class="flex flex-row gap-2 flex-wrap md:flex-nowrap">
    <el-card class="md:w-3/12" shadow="always">We</el-card>
    <el-card class="md:w-3/12" shadow="hover">Are</el-card>
    <el-card class="md:w-3/12" shadow="never">About</el-card>
    <el-card class="md:w-3/12" shadow="never">Burgers</el-card>
  </AppView>
</template>
