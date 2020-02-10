<template>
  <li class="tl-item">
    <div class="timestamp">
      {{ new Date(discussion.date).toLocaleString() }}
      {{ discussion.author }}
    </div>
    <div class="item-description">
      {{ firstNote.description }}
    </div>
    <ul class="notes tl">
      <li v-for="note in restNotes" v-bind:key="note.date" class="tl-item">
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
  },
  data() {
    return {
      firstNote: this.discussion.notes[0],
      restNotes: this.discussion.notes.filter((i, index) => {
        return index === 1;
      })
    };
  }
};
</script>

<style lang="scss">
.notes {
  margin-top: 15px;
  margin-left: 10px;
}
</style>
