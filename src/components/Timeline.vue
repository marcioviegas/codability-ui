<template>
  <div class="container history-tl-container">
    <ul class="tl">
      <template v-for="event in pullRequest.events">
        <Commit
          v-if="event.type === 0"
          v-bind:commit="event"
          v-bind:key="event.date"
        />
        <Discussion v-else v-bind:discussion="event" v-bind:key="event.date" />
      </template>
    </ul>
  </div>
</template>

<script>
import Commit from "@/components/Commit.vue";
import Discussion from "@/components/Discussion.vue";
export default {
  props: {
    pullRequest: {
      type: Object,
      required: true
    }
  },
  components: {
    Commit,
    Discussion
  },
  created() {
    console.log(this.pullRequest);
  }
};
</script>

<style lang="scss">
$primary: #00d1b2;

.history-tl-container ul.tl {
  padding: 0;
}
.history-tl-container ul.tl li {
  list-style: none;
  border-left: 1px dashed $primary;
  padding: 0 0 30px 20px;
  position: relative;
}
.history-tl-container ul.tl li:last-child {
  padding-bottom: 0;
  margin-bottom: 0;
}
ul.tl li .item-detail {
  color: rgba(0, 0, 0, 0.5);
  font-size: 12px;
}
ul.tl li .timestamp {
  color: #8d8d8d;
  font-size: 12px;
}
.history-tl-container ul.tl li::before {
  position: absolute;
  left: -5px;
  top: 0px;
  content: " ";
  border-radius: 500%;
  background: $primary;
  height: 10px;
  width: 10px;
  transition: all 500ms ease-in-out;
}
</style>
