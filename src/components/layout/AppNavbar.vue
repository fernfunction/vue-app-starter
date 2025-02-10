<template>
  <div class="flex flex-row w-[100%] max-w-[100%] relative">
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
      class="w-[100%] z-[5]"
    >
      <el-menu-item index="home">
        <img style="width: 40px" :src="LogoUrl" alt="Vue Logo" />
      </el-menu-item>
      <el-menu-item index="about">About</el-menu-item>
    </el-menu>

    <AppLoader
      class="absolute bottom-0 left-0 mb-[-3px] z-[1]"
      v-model:navigating="navigating"
    ></AppLoader>
  </div>
</template>

<script lang="ts" setup>
import LogoUrl from '@/assets/logo.svg'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { ElMenu, ElMenuItem } from 'element-plus'
import AppLoader from './AppLoader.vue'

const router = useRouter()
const activeIndex = ref<string>()
const navigating = ref(false)

const handleSelect = (key: string) => {
  router.push({
    name: key,
  })
}

router.beforeEach((_, __, next) => {
  navigating.value = true
  next()
})

router.afterEach((to) => {
  if (!activeIndex.value) {
    activeIndex.value = to.name?.toString()
  }

  navigating.value = false
})
</script>

<style scoped>
.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}
</style>
