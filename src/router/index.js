import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Service from "../views/Service.vue";
import ServiceItem from "../views/ServiceItemPage.vue";
import Resource from "../views/Resource.vue";
import ResourceCovid from "../views/ResourceCovid.vue"
import ResourceCovidContent from "../views/ResourceCovidContent.vue";
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
        path: "/service/*",
        name: "ServiceItem",
        component: ServiceItem
    },
    {
        path: "/resource",
        name: "Resource",
        component: Resource
    },
    {
        path: "/resource/covid19",
        name: "ResourceCovid",
        component: ResourceCovid
    },
    {
        path: "/resource/covid19/*",
        name: "ResourceCovidContent",
        component: ResourceCovidContent
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