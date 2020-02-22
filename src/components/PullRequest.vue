<template>
  <div class="container">
    <div>
      <h1>{{ pullRequest.title }}</h1>
      <p class="timestamp">
        {{ new Date(pullRequest.date).toLocaleString() }}
      </p>
      <p class="author">
        {{ pullRequest.author }}
      </p>
      <p class="status">
        {{ pullRequest.status }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pullRequest: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss"></style>
