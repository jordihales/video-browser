<template>
  <div class="max-w-screen-xl mx-auto">
    <div class="container">
      <Header></Header>
      <SearchBar @termChange="onTermChange"></SearchBar>
      <div class="row">
        <VideoDetail :video="selectedVideo"></VideoDetail>
        <VideoList
          @videoSelect="onVideoSelect"
          :videos="videos"
        ></VideoList>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import Header from "./components/Header";
const API_KEY = "AIzaSyC7T-tnrlFMpvVxXTRrMmPWyHWTMtf3pz0";

export default {
  name: "App",
  components: {
    Header,
    SearchBar,
    VideoList,
    VideoDetail
  },

  data() {
    return { videos: [], selectedVideo: null };
  },

  methods: {
    onVideoSelect(video) {
      this.selectedVideo = video;
    },
    onTermChange(searchTerm) {
      axios
        .get("https://www.googleapis.com/youtube/v3/search", {
          params: {
            key: API_KEY,
            type: "video",
            part: "snippet",
            q: searchTerm
          }
        })
        .then(response => {
          this.videos = response.data.items;
        });
    }
  }
};
</script>

<style lang="scss">
@import "styles/index.scss";
</style>
