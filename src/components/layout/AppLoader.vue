<template>
  <ElProgress :percentage="currentPercentage" :class="{ visible: visible }"></ElProgress>
</template>

<script setup lang="ts">
import { useIntervalFn } from '@vueuse/core'
import { ElProgress } from 'element-plus'
import { ref, watch } from 'vue'

const navigating = defineModel<boolean>('navigating', {
  required: true,
})

const currentPercentage = ref(50)
const visible = ref(false)
const lowRandom = 5
const highRandom = 10
const randomInterval = ref(1000)

const progressInterval = useIntervalFn(
  () => {
    currentPercentage.value += getRandomProgress()
    randomInterval.value = getRandomInterval()
  },
  randomInterval,
  {
    immediate: false,
  },
)

/**
 * Returns a random number of milliseconds between the low and high values.
 * @param lowMs
 * @param highMs
 */
function getRandomInterval(lowMs = 100, highMs = 1000) {
  return Math.floor(Math.random() * (highMs - lowMs + 1) + lowMs)
}

/**
 * Returns a random number of progress between the `lowRandom` and `highRandom` values.
 */
function getRandomProgress() {
  return Math.floor(Math.random() * (highRandom - lowRandom + 1) + lowRandom)
}

watch(
  navigating,
  () => {
    if (navigating.value) {
      if (!progressInterval.isActive) {
        progressInterval.resume()
      }

      if (!visible.value) {
        visible.value = true
      }
    } else {
      if (progressInterval.isActive) {
        progressInterval.pause()
      }

      if (visible.value) {
        visible.value = false
      }
    }
  },
  {
    immediate: true,
  },
)
</script>

<style lang="scss">
.el-progress {
  opacity: 0;

  &.visible {
    opacity: 1;
  }

  &--line {
    max-width: 100%;
    width: 100%;
  }

  &__text {
    display: none;
  }

  &-bar {
    &__outer,
    &__inner {
      border-radius: 0;
    }
  }
}
</style>
