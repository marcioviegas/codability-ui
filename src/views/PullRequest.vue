<template>
  <div>
    <div id="nav"></div>
    <Timeline v-if="!isFetching" v-bind:pullRequest="pullRequest" />
  </div>
</template>

<script>
import pullRequestApi from "@/api/pullRequestApi";
import Timeline from "@/components/Timeline";
export default {
  data() {
    return {
      pullRequest: {},
      isFetching: true
    };
  },
  components: {
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
