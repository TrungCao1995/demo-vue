import Vue from "vue";
import Vuex from "vuex";
import axios from "./axios-auth";
import globalAxios from "axios";
import router from "./routes";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userId: null,
    idToken: null,
    userDetail: null
  },
  mutations: {
    setUserAuth(state, dataAuth) {
      state.userId = dataAuth.userId;
      state.idToken = dataAuth.idToken;
    },
    setUserDetail(state, userDetail) {
      state.userDetail = userDetail;
    },
    clearAuth(state) {
      state.userId = null;
      state.idToken = null;
    }
  },
  actions: {
    storeUser({ commit }, userData) {
      globalAxios
        .post("/user.json", userData)
        .then(res => console.log(res))
        .catch(error => console.log(error));
    },
    signup({ commit, dispatch }, userData) {
      axios
        .post("accounts:signUp?key=AIzaSyAqhAB0qN2fRaDa_ublVua4tEvZf7dNTQk", {
          email: userData.email,
          password: userData.password,
          returnSecureToken: true
        })
        .then(res => {
          userData.userId = res.data.localId;
          dispatch("storeUser", userData);
          console.log("sign up susscess", res);
          if (confirm("Sign in success. Login now!")) {
            router.push("/signin");
          }
        })
        .catch(error => {
          console.log(error);
          alert("Sign up fail!");
        });
    },
    signin({ commit, dispatch }, dataAuth) {
      axios
        .post(
          "accounts:signInWithPassword?key=AIzaSyAqhAB0qN2fRaDa_ublVua4tEvZf7dNTQk",
          {
            email: dataAuth.email,
            password: dataAuth.password,
            returnSecureToken: true
          }
        )
        .then(res => {
          console.log("sign in success: ", res);
          commit("setUserAuth", {
            userId: res.data.localId,
            idToken: res.data.idToken
          });
          dispatch('autoSignout', res.data.expiresIn);

          //store token in local
          const now = new Date()
          const expiredDate = new Date(now.getTime() + res.data.expiresIn * 1000)
          localStorage.setItem('userId', res.data.localId)
          localStorage.setItem('token', res.data.idToken)
          localStorage.setItem('expiredDate', expiredDate)

          router.push("/");
        })
        .catch(error => {
          console.log("sign in error: ", error);
          alert("Sign in fail");
        });
    },
    autoSignin({commit}) {
        const token = localStorage.getItem('token')
        if (!token) {
            return
        }

        const expiredDate = localStorage.getItem('expiredDate')
        const now = new Date()
        if (expiredDate <= now) {
            return
        }

        const userId = localStorage.getItem('userId')
        commit("setUserAuth", {
            userId: userId,
            idToken: token
          });
    },
    signout({ commit }) {
      commit("clearAuth");
      localStorage.removeItem('userId')
      localStorage.removeItem('token')
      localStorage.removeItem('expiredDate')
      router.push("/signin");
    },
    autoSignout({ commit, dispatch }, expiredTime) {
      setTimeout(() => {
        dispatch("signout");
      }, expiredTime * 1000);
    },
    getUserLoginInfo({ commit, state }) {
      if (!state.idToken) {
        return;
      }
      globalAxios
        .get("/user.json?auth=" + state.idToken)
        .then(res => {
          const data = res.data;
          for (let key in data) {
            if (data[key].userId == state.userId) {
              commit("setUserDetail", data[key]);
              console.log("user info in loop:", data[key]);
              break;
            }
          }
          console.log("User detail: ", state.userDetail);
        })
        .catch(error => console.log(error));
    }
  },
  getters: {
    userDetail(state) {
      return state.userDetail;
    },
    isAuthenticated(state) {
      return state.idToken !== null;
    }
  }
});
