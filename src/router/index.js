import Vue from "vue";
import Router from "vue-router";


import login from "@/components/login/login";
import home from "@/components/home/home";
import demo01 from "@/components/demo01/demo01";
import demo02 from "@/components/demo02/demo02";
import demo03 from "@/components/demo03/demo03";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/login",
      name: "login",
      component: login
    },
    {
      path: "/home",
      name: "home",
      component: home
    },
    {
      path: "/demo01",
      name: "demo01",
      component: demo01
    },
    {
      path: "/demo02",
      name: "demo02",
      component: demo02
    },
    {
      path: "/demo03",
      name: "demo03",
      component: demo03
    },
  ]
});
