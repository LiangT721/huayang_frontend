import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        language: true,
        slogen: {
            slogen: {
                eng: "Lorem ipsum dolor sit amet consectetur",
                chi: "大标语"
            },
            sub_slogen: {
                eng: "Small Business Accounting services",
                chi: "小标语"
            }
        },
        story: {
            title: {
                eng: "The #1 Small Business Accounting Services Firm",
                chi: "#NO1 服务"
            },
            content: {
                eng: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam numquam aliquid necessitatibus doloremque architecto. Nisi quasi tempora voluptates sequi. Quis expedita reprehenderit veniam numquam quo consequuntur eos itaque ipsum libero rem sunt cupiditate eum iusto mollitia voluptatem optio vitae porro cum fuga, quia animi nostrum aliquam a eaque! Pariatur, assumenda delectus optio vel, fugiat hic quam at tempora accusamus quibusdam nesciunt possimus, sit magni asperiores perspiciatis?",
                chi: "首页故事首页故事首页故事首页故事首页故事首页故事首页故事首页故事首页故事首页故事首页故事首页故事首页故事首页故事首页故事首页故事首页故事首页故事首页故事首页故事首页故事首页故事首页故事首页故事首页故事首页故事首页故事首页故事首页故事首页故事首页故事首页故事首页故事首页故事首页故事首页故事首页故事首页故事首页故事首页故事首页故事首页故事首页故事首页故事首页故事首页故事首页故事首页故事首页故事首页故事首页故事首页故事首页故事首页故事首页故事首页故事"
            }
        },
        homepage_description: {
            title: {
                eng: "Accountants you can trust",
                chi: "你值得信赖"
            },
            content: {
                eng: "We put our clients at the centre of everything we do and our systems and processes are designed to help us look after you throughout your business journey. We advise ambitious and dynamic businesses, social enterprises, not for profit organisations, private individuals and families on all aspects of business, tax and growth. We will be with you every step of the way, making your life easier and offering great advice to help you achieve your dreams",
                chi: "首页简介首页简介首页简介首页简介首页简介首页简介首页简介首页简介首页简介首页简介首页简介首页简介首页简介首页简介首页简介首页简介首页简介首页简介首页简介首页简介首页简介首页简介首页简介首页简介首页简介首页简介首页简介首页简介首页简介首页简介首页简介首页简介首页简介首页简介首页简介首页简介首页简介首页简介首页简介首页简介首页简介首页简介首页简介首页简介"
            }
        },
        homepage_project: {
            project1: {
                eng: "project1",
                chi: "服务1"
            },
            project2: {
                eng: "project2",
                chi: "服务2"
            },
            project3: {
                eng: "project3",
                chi: "服务3"
            },
            project4: {
                eng: "project4",
                chi: "服务4"
            },
        }
    },
    mutations: {
        language_toggle: (state, data) => {
            state.language = data
        }
    },
    actions: {},
    modules: {},
    getters: {
        lan: state => {
            return state.language;
        }
    }
});