<template>
  <tr>
    <td class="date">
      {{ new Date(pullRequest.date).toLocaleString() }} <br />
      {{ pullRequest.distanceFromToday }} ago
    </td>
    <td>{{ pullRequest.author }}</td>
    <td>
      <span class="tag is-info">
        {{ pullRequest.status }}
      </span>
    </td>
    <td>
      {{ pullRequest.title }}
    </td>
    <td>
      <router-link
        v-bind:key="pullRequest.id"
        :to="{
          name: 'PullRequest',
          params: { pullRequestId: pullRequest.id }
        }"
        ><span>Info</span>
      </router-link>
    </td>
  </tr>
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

<style lang="scss">
.date {
  text-align: center;
  width: 200px;
}
</style>
