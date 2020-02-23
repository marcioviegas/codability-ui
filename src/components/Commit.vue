<template>
  <li class="tl-item commit">
    <div class="timestamp">
      {{ new Date(commit.date).toLocaleString() }}
      {{ commit.author }}
    </div>
    <div class="item-description">
      {{ commit.description }}
    </div>
    <div class="">
      {{ commit.distanceFromOlderEvent }}
    </div>
  </li>
</template>

<script>
export default {
  props: {
    commit: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss"></style>
