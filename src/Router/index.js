import { createWebHashHistory, createRouter } from "vue-router";

import ConduitHome from "../Pages/ConduitHome.vue";
import ConduitNewPost from "../Pages/ConduitNewPost.vue";
import ConduitSetting from "../Pages/ConduitSetting.vue";

const routes = [
  {
    name: "ConduitHome",
    path: "/ConduitHome",
    component: ConduitHome,
  },
  {
    name: "ConduitNewPost",
    path: "/ConduitNewPost",
    component: ConduitNewPost,
  },
  {
    name: "ConduitSetting",
    path: "/ConduitSetting",
    component: ConduitSetting,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
