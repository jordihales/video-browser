<template>
  <li class="list-group-item media" @click="onVideoSelect">
    <img class="mr-3" :src="thumbnailUrl" />
    <div class="media-body mt-0 mb-1">
      {{ video.snippet.title }}
    </div>
  </li>
</template>

<script>
export default {
  name: 'VideoListItem',
  props: ['video'],
  computed: {
    thumbnailUrl() {
      return this.video.snippet.thumbnails.default.url
    }
  },
  methods: {
    onVideoSelect() {
      this.$emit('videoSelect', this.video)
    }
  }
}
</script>

<style scoped>
li {
  display: flex;
  cursor: pointer;
  transition: 0.25s ease;
}

li:hover {
  background-color: #eee;
}
</style>
