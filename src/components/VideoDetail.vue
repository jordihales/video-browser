<template>
  <div class="container">
    <div
      v-if="video"
      class="grid grid-cols-1 mb-6 max-w-screen-xl mx-auto h-xxxx_large"
    >
      <div class="rounded overflow-hidden shadow-lg">
        <iframe
          class="w-full h-xxx_large"
          :src="videoUrl"
        />
        <div class="px-6 py-4 h-64">
          <div class="font-bold text-xl mb-2">{{ video.snippet.title }}</div>
          <p class="text-gray-700 text-base">
            {{ video.snippet.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoDetail",
  props: ["video"],
  computed: {
    videoUrl() {
      const { videoId } = this.video.id;
      return `https://www.youtube.com/embed/${{ videoId }}`;
    }
  }
};
</script>

<style scoped>
</style>
