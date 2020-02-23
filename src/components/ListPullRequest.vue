<template>
  <div class="container">
    <table class="table is-bordered is-striped is-hoverable is-fullwidth">
      <thead>
        <th>Created</th>
        <th>Author</th>
        <th>Status</th>
        <th>Pull Request</th>
      </thead>
      <tbody>
        <template v-for="pullRequest in pullRequests">
          <PullRequest
            v-bind:key="pullRequest.id"
            v-bind:pullRequest="pullRequest"
          />
        </template>
      </tbody>
    </table>
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
