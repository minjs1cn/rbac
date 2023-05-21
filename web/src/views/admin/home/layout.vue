<script setup lang="ts">

</script>

<template>
  <el-container class="container">
    <el-aside width="260px" class="aside">aside</el-aside>
    <el-main>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <slot></slot>
        </el-main>
      </el-container>
    </el-main>
  </el-container>
</template>

<style lang="scss" scoped>
.container {
  background-color: var(--el-bg-color-page);
  height: 100%;
}
.aside {
  background-color: var(--el-bg-color);
}
</style>