<template>
  <div v-if="!isFetching">
    <PullRequest v-bind:pullRequest="pullRequest" />
    <Timeline v-bind:pullRequest="pullRequest" />
  </div>
</template>

<script>
import pullRequestApi from "@/api/pullRequestApi";
import Timeline from "@/components/Timeline";
import PullRequest from "@/components/PullRequest";
export default {
  data() {
    return {
      pullRequest: {},
      isFetching: true
    };
  },
  components: {
    PullRequest,
    Timeline
  },
  created() {
    pullRequestApi
      .pullRequest("13362728", this.$route.params.pullRequestId)
      .then(r => {
        this.pullRequest = r.data;
        this.isFetching = false;
        console.log(this.pullRequest);
      });
  }
};
</script>
