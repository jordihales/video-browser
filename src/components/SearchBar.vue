<template>
  <div class="container">
    <div class="pt-12">
      <div class="mt-1 mb-12 relative rounded-lg shadow-md">
        <input
          class="form-input py-4 block w-full pl-6 pr-12 sm:text-md sm:leading-5"
          placeholder="Search"
          @input="onInput"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  methods: {
    onInput(event) {
      this.$emit("termChange", event.target.value);
    }
  }
};
</script>

<style scoped>
</style>
