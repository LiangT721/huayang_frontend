import Vue from "vue";
import Vuex from "vuex";
import cookies from "vue-cookies";

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
                eng: "Today's business environment in Canada requires Chartered Professional Accountants to help you cope with tax burdens and financial planning options that are becoming increasingly complex.At Yang Gao. CPA P.C Ltd, we provide bookkeeping, accounting, tax and advisory services to clients in the Saskatchewan and Alberta area. We offer specialized services to accommodate all personal and business accounting needs. Our goal is to help our clients meet regulatory obligations, minimize risks, create clarity and reduce tax burdens.",
                chi: "在今天的加拿大商业环境中，需要注册会计师协助您和您的生意应对日益复杂的税务要求和整体的财务计划。在华杨会计师事务所，我们将为萨斯喀彻温和阿尔伯塔的客户提供记账、审计、财务、税务服务，移民解除条件服务以及财税相关的咨询服务。我们将会为您量身定制专属的个人和商业会计服务计划。我们的目标是帮助我们的客户在合规的范围内最大限度的降低风险，合理的减少税务负担。"
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
                eng: "At Yang Gao. CPA P.C Ltd, we provide bookkeeping, accounting, tax and advisory services to clients in the Saskatchewan and Alberta area. We offer specialized services to accommodate all personal and business accounting needs. Our goal is to help our clients meet regulatory obligations, minimize risks, create clarity and reduce tax burdens.",
                chi: "华杨会计师事务所业务范围涉及个人业务，企业业务和企业家移民解除条件。我们将会为您量身定制专属的个人和商业会计服务计划。我们的目标是帮助我们的客户在合规的范围内最大限度的降低风险，合理的减少税务负担。"
            }
        },
        service_project: {
            project1: {
                title: {
                    eng: "Personal tax services",
                    chi: "个人业务"
                },
                description: {
                    eng: "International student tax return, personal/family tax return, overseas asset declaration, self-employment tax return, non-tax resident tax return.",
                    chi: "留学生纳税申报，个人/家庭纳税申报，海外资产申报，自雇纳税申报，非税务居民纳税申报。"
                }

            },
            project2: {
                title: {
                    eng: "Enterprise services",
                    chi: "企业业务"
                },
                description: {
                    eng: "Company registration, application for GST number, provincial taxation, statements, annual audit, financial system establishment and bookkeeping, payroll, taxation, consulting, financial partners",
                    chi: "成立公司，申请GST号，省税，报表，年度审计，财务系统建立及记账，工资核算，税务，咨询，财务合作伙伴。"
                }

            },
            project3: {
                title: {
                    eng: "Help immigrant entrepreneurs from SINP Entrepreneur Category",
                    chi: "移民解除条件"
                },
                description: {
                    eng: "When new immigrant entrepreneurs first come to Saskatoon, they need to adapt to the new environment, and start a new business. They often feel confused and don't know where to start. We have provided a full range of services for hundreds of new Chinese immigrant entrepreneurs. From the initial business plan to the company registration, to the final business implementation and operation, we will use professional knowledge to escort you at every step and let you complete it smoothly: start a business and continue to operate. At the same time, we have also accumulated a wealth of business resources in the local area. We can not only match you with other entrepreneurs, but also recommend professionals in other fields to help you and your business operate smoothly in the local area. We can be the strong partner for you to meet the criteria of SINP Entrepreneur program.",
                    chi: "新移民初登萨斯卡通，适应新的环境，开启新的生意，常常会感到好无头绪，不知道从何开始。我们已经为数百个华人新移民企业家提供全方位的服务，从最初的商业计划到公司成立，再到最终的商业落实经营，每一步我们都将用专业知识为您护航，让您顺利完成创业，并且持续经营。同时，我们在当地也已积累了丰富的商业资源，既能够为您与其他企业家牵线搭桥，也能够为您推荐其他领域的专业人士帮助您和您的生意在当地顺利经营，为解除移民条件提供强有力的保障。"
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
        language: true

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
            if (cookies.get("lan")) {
                const isTrueSet = (cookies.get('lan').toLowerCase() === 'true');
                return isTrueSet
            } else {
                return state.language;
            }
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