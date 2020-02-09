<template>
  <div class="history-tl-container">
    <ul class="tl">
      <li class="tl-item" v-for="event in pullRequest.events" :key="event.date">
        <div class="timestamp">
          {{ new Date(event.date).toLocaleString() }}
        </div>
        <div class="item-detail">
          {{ event.etype.toLowerCase() }} from {{ event.author }}
        </div>
        <div class="item-title" v-if="event.title !== 'NO_TITLE'">
          {{ event.title }}
        </div>
        <div class="item-title" v-else>
          {{ event.description }}
        </div>
      </li>
    </ul>
  </div>
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
  border-left: 0;
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
  left: -10px;
  top: 0px;
  content: " ";
  border: 8px solid rgba(255, 255, 255, 0.74);
  border-radius: 500%;
  background: $primary;
  height: 20px;
  width: 20px;
  transition: all 500ms ease-in-out;
}
</style>
