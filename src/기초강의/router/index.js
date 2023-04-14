import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../views/Home';
import About from "../views/About";
import LifeCycle from '../views/LifeCycle';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/lifecycle',
    name: 'lifecycle',
    component: LifeCycle
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;