<template>
  <div>
    <div id="nav"></div>
    <ListPullRequest v-if="!isFetching" v-bind:pullRequests="pullRequests" />
  </div>
</template>

<script>
import pullRequestApi from "@/api/pullRequestApi";
import ListPullRequest from "@/components/ListPullRequest";

export default {
  data() {
    return {
      pullRequests: {},
      isFetching: true
    };
  },
  components: {
    ListPullRequest
  },
  created() {
    pullRequestApi.pullRequests("13362728").then(r => {
      this.pullRequests = r.data;
      this.isFetching = false;
      console.log(this.pullRequest);
    });
  }
};
</script>
