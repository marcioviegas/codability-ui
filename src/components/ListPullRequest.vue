<template>
  <div class="">
    <template v-for="pullRequest in pullRequests">
      <router-link
        v-bind:key="pullRequest.id"
        :to="{ name: 'PullRequest', params: { pullRequestId: pullRequest.id } }"
      >
        <PullRequest
          v-bind:key="pullRequest.id"
          v-bind:pullRequest="pullRequest"
      /></router-link>
    </template>
  </div>
</template>

<script>
import PullRequest from "@/components/PullRequest";
export default {
  components: {
    PullRequest
  },
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
