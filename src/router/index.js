import Vue from "vue";
import VueRouter from "vue-router";
import Demo from "../views/Demo.vue";
import Notes from "../views/Notes.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Demo",
    component: Demo
  },
  {
    path: "/notes",
    name: "Notes",
    component: Notes
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
