import Vue from "vue";
import Router from "vue-router";

const Flexbox = resolve => require(["@/components/Flexbox"], resolve);
const CssGrid = resolve => require(["@/components/CssGrid"], resolve);

Vue.use(Router);

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: "/",
      name: "Flexbox",
      meta: { title: "Flexbox" },
      component: Flexbox
    },
    {
      path: "/CssGrid",
      name: "CssGrid",
      meta: { title: "CssGrid" },
      component: CssGrid
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
