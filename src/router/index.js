import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Service from "../views/Service.vue";
import Resource from "../views/Resource.vue";
import Contact from "../views/Contact.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        component: About
    },
    {
        path: "/service",
        name: "Service",
        component: Service
    },
    {
        path: "/resource",
        name: "Resource",
        component: Resource
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact
    },
];

const router = new VueRouter({
    routes
});

export default router;