<script setup lang="ts">
const { replace } = useRouter();
const { query } = useRoute()
const { to } = query;

if (to) {
  replace(to as string);
}
</script>

<template>
  <div>loading...</div>
</template>

<style lang="scss" scoped>

</style>