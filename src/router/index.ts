import Vue from "vue";
import VueRouter from "vue-router";
import PullRequest from "@/views/PullRequest.vue";
import ListPullRequest from "@/views/ListPullRequest.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "ListPullRequest",
    component: ListPullRequest
  },
  {
    path: "/pullrequests/:pullRequestId",
    name: "PullRequest",
    component: PullRequest
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
