import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/pages/HelloWorld";
import MyProfile from "@/components/pages/MyProfile";
import MyBoard from "@/components/pages/MyBoard";
import MyPost from "@/components/pages/MyPost";
import MyDemo from "@/components/pages/MyDemo";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/vuetiful-demo/",
      name: "main",
      component: HelloWorld,
    },
    {
      path: "/vuetiful-demo/profile",
      name: "profile",
      component: MyProfile,
    },
    {
      path: "/vuetiful-demo/post",
      name: "post",
      component: MyPost,
    },
    {
      path: "/vuetiful-demo/board",
      name: "board",
      component: MyBoard,
    },
    {
      path: "/vuetiful-demo/demo",
      name: "demo",
      component: MyDemo,
    },
  ],
});
