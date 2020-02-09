<template>
  <div>
    <div id="nav"></div>
    <div v-for="event in pullRequest.events" :key="event">
      <p>{{ event.date }}</p>
      <p>{{ event.etype }}</p>
      <p>{{ event.title }}</p>
      <p>{{ event.description }}</p>
      <br />
    </div>
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
