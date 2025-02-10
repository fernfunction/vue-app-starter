<template>
  <div class="p-3 flex flex-col">
    <div :class="$attrs.class" class="grow-1">
      <slot />
    </div>
  </div>
</template>
