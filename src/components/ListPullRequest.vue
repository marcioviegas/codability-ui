<template>
  <div class="history-tl-container">
    <template v-for="pullRequest in pullRequests">
      <div v-bind:key="pullRequest.id">
        <router-link
          :to="{
            name: 'PullRequest',
            params: { pullRequestId: pullRequest.id }
          }"
          >{{ pullRequest.id }} - {{ pullRequest.title }}</router-link
        >
      </div>
    </template>
  </div> </template
>:to="{ name: 'user', params: { userId: 123 }}"

<script>
export default {
  props: {
    pullRequests: {
      type: Array,
      required: true
    }
  },
  created() {
    console.log(this.pullRequest);
  }
};
</script>
