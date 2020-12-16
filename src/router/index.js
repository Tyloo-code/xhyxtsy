import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        redirect: "/login"
    },
    {
        path: "/login",
        name: "login",
        meta: "Login",
        component: () => import("@/views/Login.vue")
    },
    {
        path: "/home",
        name: "home",
        meta: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "about",
        meta: "About",
        component: () => import("@/views/About.vue")
    },
   
    {
      path: "/about0",
      component: () => import("@/views/About/About0.vue")
    },
    {
      path: "/about1",
      component: () => import("@/views/About/About1.vue")
    },
    {
      path: "/about2",
      component: () => import("@/views/About/About2.vue")
    },
    {
      path: "/about3",
      component: () => import("@/views/About/About3.vue")
    },
    {
        path: "/company",
        name: "company",
        meta: "Company",
        component: () => import("@/views/Company1.vue")
    },
    {
        path: "/fleet",
        name: "fleet",
        meta: "Fleet",
        component: () => import("@/views/Fleet.vue")
    },
    {
        path: "/car",
        name: "car",
        meta: "Car",
        component: () => import("@/views/Car.vue")
    },
    {
      path: "/car0",
      component: () => import("@/views/Car/Car0/Car0.vue")
    },
    {
      path: "/car1",
      component: () => import("@/views/Car/Car1/Car1.vue")
    },
    {
      path: "/car2",
      component: () => import("@/views/Car/Car2/Car2.vue")
    },
    {
      path: "/car3",
      component: () => import("@/views/Car/Car3/Car3.vue")
    },
    {
      path: "/car4",
      component: () => import("@/views/Car/Car4/Car4.vue")
    },
    {
      path: "/setting0",
      component: () => import("@/views/Setting/Setting0/Setting0.vue")
    },
    {
      path: "/setting1",
      component: () => import("@/views/Setting/Setting1/Setting1.vue")
    },
    {
      path: "/setting2",
      component: () => import("@/views/Setting/Setting2/Setting2.vue")
    },
    {
      path: "/setting3",
      component: () => import("@/views/Setting/Setting3/Setting3.vue")
    },
    {
      path: "/setting4",
      component: () => import("@/views/Setting/Setting4/Setting4.vue")
    },
    {
        path: "/transport",
        name: "transport",
        meta: "Transport",
        component: () => import("@/views/Transport.vue")
    },
    {
        path: "/user",
        name: "user",
        meta: "User",
        component: () => import("@/views/User.vue")
    },
    {
        path: "/uploads",
        name: "Uploads",
        meta: "Uploads",
        component: () => import("@/views/Uploads.vue")
    },
    {
        path: "/setting",
        name: "setting",
        meta: "Setting",
        component: () => import("@/views/Setting.vue")
    },
    
];

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes
});

export default router;