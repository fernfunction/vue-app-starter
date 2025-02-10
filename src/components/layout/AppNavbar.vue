<template>
  <div class="flex flex-row w-[100%] max-w-[100%]">
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
      class="w-[100%]"
    >
      <el-menu-item index="home">
        <img style="width: 40px" :src="LogoUrl" alt="Vue Logo" />
      </el-menu-item>
      <el-menu-item index="about">About</el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import LogoUrl from '@/assets/logo.svg'

import { ElMenu, ElMenuItem } from 'element-plus'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const activeIndex = ref<string>()

const handleSelect = (key: string) => {
  router.push({
    name: key,
  })
}

// Initial set
router.afterEach((to) => {
  if (!activeIndex.value) {
    activeIndex.value = to.name?.toString()
  }
})
</script>

<style scoped>
.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}
</style>
