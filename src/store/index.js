import Vue from 'vue'
import Vuex from 'vuex'
// import ordinary from './modules/ordinary'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    // states: 'turn-on',
    serverTime:null,
    userInfo: {
      // phone: '未登录',
      phoneOrder: '',
      phone: '未登录', //下单时使用
      token:''
    //   token: '3h99j9sr3nremglsiemtanosv3'
      // token:"5be3ed66_6073_2532_e33be0460f2930ab"
    },
    cityList: [], //所有城市列表
    localtionCity: '',
    cityData: {
      putong: {
        current: "北京",
        openCity: [],
        kilometer: 0,
        moveOutAddress: {
          localtion: {
            name: ""
          },
          detailAddress: "",
          phone: ""
        },
        moveInAddress: {
          localtion: {
            name: ""
          },
          detailAddress: "",
          phone: ""
        }
      },
      rishi: {
        current: "北京",
        openCity: [],
        kilometer: 0,
        moveOutAddress: {
          localtion: {
            name: ""
          },
          detailAddress: "",
          phone: ""
        },
        moveInAddress: {
          localtion: {
            name: ""
          },
          detailAddress: "",
          phone: "",
        }
      },
      qiye: {
        current: "北京",
        openCity: [],
        kilometer: 0,
        moveOutAddress: {
          localtion: {
            name: ""
          },
          detailAddress: "",
          phone: ""
        },
        moveInAddress: {
          localtion: {
            name: ""
          },
          detailAddress: "",
          phone: ""
        }
      },
      changtu: {
        outCity: "北京",
        inCity: "请选择",
        openCity: [], //出发城市
        allCity: [], //目的地城市
        kilometer: 0,
        moveOutAddress: {
          localtion: {
            name: ""
          },
          detailAddress: "",
          phone: ""
        },
        moveInAddress: {
          localtion: {
            name: ""
          },
          detailAddress: "",
          phone: ""
        }
      }
    }
  },
  mutations: {
    setServerTime(state, st){
        state.serverTime = st
    },
    // setTransition(state, states) {
    //   state.states = states
    // },
    setLocaltionCity(state, city) {
      state.localtionCity = city
    },

    setCityData(state, str) {
      console.log(typeof str)
      state.cityData = JSON.parse(str)
    },

    setUser(state, obj) {
      let msg = Object.assign(state.userInfo, obj);
      state.userInfo = msg;
    },


  }
})
