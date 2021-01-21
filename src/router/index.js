import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import MyProfile from "@/components/pages/MyProfile";
import MyBoard from "@/components/pages/MyBoard";
import BoardDetail from "@/components/pages/BoardDetail";
import MyPost from "@/components/pages/MyPost";
import MyDemo from "@/components/pages/MyDemo";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "main",
      component: HelloWorld,
    },
    {
      path: "/profile",
      name: "profile",
      component: MyProfile,
    },
    {
      path: "/post",
      name: "post",
      component: MyPost,
    },
    {
      path: "/board",
      name: "board",
      component: MyBoard,
    },
    {
      path: "/board/:id",
      name: "boardDetail",
      component: BoardDetail,
    },
    {
      path: "/demo",
      name: "demo",
      component: MyDemo,
    },
  ],
});
