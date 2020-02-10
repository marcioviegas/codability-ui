<template>
  <li class="tl-item">
    <ul class="notes">
      <li
        v-for="note in discussion.notes"
        v-bind:key="note.date"
        class="tl-item"
      >
        <div class="timestamp">
          {{ new Date(note.date).toLocaleString() }}
          {{ note.author }}
        </div>
        <div class="item-description">
          {{ note.description }}
        </div>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    discussion: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss"></style>
