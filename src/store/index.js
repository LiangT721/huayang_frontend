import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        slogen: {
            slogen: {
                eng: "Experienced Knowledge You Can Trust",
                chi: "值得信赖的财务管家"
            },
            sub_slogen: {
                eng: "",
                chi: ""
            }
        },
        story: {
            title: {
                eng: "Make the financial part more easier for you and your business journey.",
                chi: "用我们的专业为您的生意保驾护航"
            },
            content: {
                eng: "Our goal: Today's business environment in Canada requires Chartered Professional Accountants to help you cope with tax burdens and financial planning options that are becoming increasingly complex.At Yang Gao. CPA P.C Ltd, we provide bookkeeping, accounting, tax and advisory services to clients in the Saskatchewan and Alberta area. We offer specialized services to accommodate all personal and business accounting needs. Our goal is to help our clients meet regulatory obligations, minimize risks, create clarity and reduce tax burdens.",
                chi: "Our goal: 在今天的加拿大商业环境中，需要注册会计师协助您和您的生意应对日益复杂的税务要求和整体的财务计划。在华杨会计师事务所，我们将为萨斯喀彻温和阿尔伯塔的客户提供记账、审计、财务、税务服务，移民解除条件服务以及财税相关的咨询服务。我们将会为您量身定制专属的个人和商业会计服务计划。我们的目标是帮助我们的客户在合规的范围内最大限度的降低风险，合理的减少税务负担。"
            }
        },
        homepage_description: {
            title: {
                eng: "Help you to achieve your dream",
                chi: "帮助您实现梦想"
            },
            content: {
                eng: "We put our clients at the centre of everything we do, and our systems and processes are designed to help us look after you throughout your business journey. We advise ambitious and dynamic businesses, social enterprises, not for profit organisations, private individuals and families on all aspects of business, tax and growth. No matter which steps you are in, we will be with you, making your life easier and offering great advice to help you achieve your dreams.",
                chi: "我们的系统和流程均以客户为中心，为了帮助客户在生意之旅中顺利前行而创建。我们给多种公司和个人家庭提供了全方位的商业，税务，财务等多方面的建议和意见。不论您或者您的生意属于哪一个阶段，我们都将用专业的知识和诚挚的态度为您提供相应的服务，助您实现梦想。"
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
        },
        servicepage_about: {
            title: {
                eng: "Our Services",
                chi: "我们的服务"
            },
            content: {
                eng: "Michael Gao Inc., a senior certified public accountant (CGA) led the tax, accounting, financial advisory services professional institutions, was established in 2009. Over the years, the company dedicated to every customer to provide professional, timely and comprehensive service, adhere to the quality and integrity of the core values, so that we have established long-term partnership with many customers.",
                chi: "嘉岳会计师事务所由高岳(Michael)注册会计师于2009年在加拿大的BC省成立.多年来，事务所的全体员工全心全意为每一位客户提供专业，及时和全面的服务. 每位同仁坚持质量和诚信的核心价值观，与众多客户建立了长期的伙伴关系.目前，公司的客户群体涵盖了房地产开发、投资控股、进出口贸易、电子商务、生产制造和经销批发、旅游、 酒店和餐饮，零售等领域. 用我们的专业, 助力您的成功 !"
            }
        },
        service_project: {
            project1: {
                title: {
                    eng: "Personal Tax Returns",
                    chi: "个人报税"
                },
                description: {
                    eng: "As a business owner, you file your personal income tax return and pay the same amount of tax as any employed wage earner. Your business income, after deductions, is considered your annual wage, you report it as professional or business income.",
                    chi: "作为自雇人士，你需要使用正确的会计方法来报告您的企业所得税。非税务居民，指的是完全切断与加拿大的居住关系，而且上个税务年度完全没有住在加拿大或者呆在加拿大的时间少于183天的特殊居民。"
                }

            },
            project2: {
                title: {
                    eng: "Corporate Tax Returns",
                    chi: "个人报税"
                },
                description: {
                    eng: "As a business owner, you file your personal income tax return and pay the same amount of tax as any employed wage earner. Your business income, after deductions, is considered your annual wage, you report it as professional or business income.",
                    chi: "作为自雇人士，你需要使用正确的会计方法来报告您的企业所得税。非税务居民，指的是完全切断与加拿大的居住关系，而且上个税务年度完全没有住在加拿大或者呆在加拿大的时间少于183天的特殊居民。"
                }

            },
            project3: {
                title: {
                    eng: "Overseas Assets Reporting",
                    chi: "个人报税"
                },
                description: {
                    eng: "As a business owner, you file your personal income tax return and pay the same amount of tax as any employed wage earner. Your business income, after deductions, is considered your annual wage, you report it as professional or business income.",
                    chi: "作为自雇人士，你需要使用正确的会计方法来报告您的企业所得税。非税务居民，指的是完全切断与加拿大的居住关系，而且上个税务年度完全没有住在加拿大或者呆在加拿大的时间少于183天的特殊居民。"
                }

            },
            project4: {
                title: {
                    eng: "Overseas Company Tax",
                    chi: "个人报税"
                },
                description: {
                    eng: "As a business owner, you file your personal income tax return and pay the same amount of tax as any employed wage earner. Your business income, after deductions, is considered your annual wage, you report it as professional or business income.",
                    chi: "作为自雇人士，你需要使用正确的会计方法来报告您的企业所得税。非税务居民，指的是完全切断与加拿大的居住关系，而且上个税务年度完全没有住在加拿大或者呆在加拿大的时间少于183天的特殊居民。"
                }

            },
        },
        language: true,

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
        },
        device: () => {
            if (window.innerWidth < 768) {
                return "mobile"
            } else if (window.innerWidth < 1280) {
                return "pad"
            } else {
                return "pc"
            }
        }
    }
});