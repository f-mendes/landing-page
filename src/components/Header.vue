<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
});

</script>

<template>
  <nav class="bg-primary border-gray-200 dark:bg-gray-900">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="../assets/logo.svg" class="h-20 w-20" alt="PHP Life logo" />
      </a>
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button type="button" class="text-white bg-secondary hover:bg-indigo-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-4 text-center">
          Inscreva-se Agora
        </button>
      </div>

    </div>
  </nav>
</template>

<style scoped>

</style>