import { createStore } from 'vuex'

export default createStore({
  state: {
    menuList: [
      {
        id:1,
        title:"About"
      },
      {
        id:2,
        title:"Services" 
      },
      {
        id:3,
        title:"Works"  
      },
      {
        id:4,
        title:"Blog" 
      },
    ],
    servicesList: [
      {
        id:1,
        title:"UX Research",
        icon: "telephone.svg",
        text: "New demos are continually added and buying a single license for Mak gives you access to all of what's shown below, plus everything that will be added in the future."
      },
      {
        id:2,
        title:"Brand Design",
        icon: "brand.svg",
        text: "New demos are continually added and buying a single license for Mak gives you access to all ofwhat's shown below, plus everything that will be added in the future."
      },
      {
        id:3,
        title:"Web Development",
        icon: "web.svg",
        text: "New demos are continually added and buying a single license for Mak gives you access to all of what's shown below, plus everything that will be added in the future."
      },
    ],
    clientsList: [
      {
        id:1,
        icon:"Slack.svg",
        name: "Slack",
        color: "#FFF7FA",
        borderColor: "1px solid #FFE7F0"
      },
      {
        id:2,
        icon:"Medium.svg",
        name: "Medium",
        color: "#EDFFF5",
        borderColor: "1px solid #CAFFE1"
      },
      {
        id:3,
        icon:"Microsoft.svg",
        name: "Microsoft",
        color: "#F5FCFF",
        borderColor: "1px solid #DDF5FF"
      },
      {
        id:4,
        icon:"Zeplin.svg",
        name: "Zeplin",
        color: "#FFFBF2",
        borderColor: "1px solid #FFEEC9"
      },
      {
        id:5,
        icon:"Shopify.svg",
        name: "Shopify",
        color: "#F4FFED",
        borderColor: "1px solid #DBFFC4"
      },
    ],
    footerSocial: [
      {
        id:1,
        icon:"dribbble.svg"
      },
      {
        id:2,
        icon:"instagram.svg"
      },
      {
        id:3,
        icon:"in.svg"
      }
    ]
  },
  getters: {
    getMenuList(state): Array<object>{
      return state.menuList
    },
    getServicesList(state): Object[]{
      return state.servicesList
    },
    getClientList(state): Object[]{
      return state.clientsList
    },
    getFooterSocial(state): Object[]{
      return state.footerSocial
    }
  },
  mutations: {

  },
  actions: {
    
  },
  modules: {

  }
})
