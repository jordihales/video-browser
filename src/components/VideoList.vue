<template>
  <div class="container">
    <ul class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <VideoListItem
        v-for="video in videos"
        :key="video.etag"
        :video="video"
        @videoSelect="onVideoSelect"
      >
      </VideoListItem>
    </ul>
  </div>
</template>


<script>
import VideoListItem from "./VideoListItem";

export default {
  name: "VideoList",
  components: {
    VideoListItem
  },
  props: ["videos"],
  methods: {
    onVideoSelect(video) {
      this.$emit("videoSelect", video);
    }
  }
};
</script>

<style></style>
