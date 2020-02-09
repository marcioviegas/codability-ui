<template>
  <div>
    <div id="nav"></div>
    <div>{{ pullRequest }}</div>
  </div>
</template>

<script>
import pullRequestApi from "@/api/pullRequestApi";
export default {
  data() {
    return {
      pullRequest: {}
    };
  },
  created() {
    pullRequestApi.pullRequest("13362728", "83").then(r => {
      console.log(r);
      this.pullRequest = r.data;
    });
  }
};
</script>
