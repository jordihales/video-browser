<template>
  <li
    class=""
    @click="onVideoSelect"
  >
    <div class="rounded overflow-hidden shadow-lg">
      <img
        class="w-full h-48 object-cover"
        :src="thumbnailUrl"
      />
      <div class="px-6 py-4 h-48">
        <div class="font-extrabold text-lg mb-2">{{ video.snippet.title }}</div>
        <p class="text-gray-700 text-base">
          {{ video.snippet.description }}
        </p>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "VideoListItem",
  props: ["video"],
  computed: {
    thumbnailUrl() {
      return this.video.snippet.thumbnails.high.url;
    }
  },
  methods: {
    onVideoSelect() {
      this.$emit("videoSelect", this.video);
    }
  }
};
</script>

<style scoped>
</style>
