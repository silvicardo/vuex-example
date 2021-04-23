import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex)

const userModule = {
  namespaced: true,
  state: () => {
      return {
      name : "Riccardo",
      surname: "Silvi",
    }
  },
  mutations: {
    setName(state, newName){
        state.name = newName;
    },
    setSurname(state, newSurname){
      state.surname = newSurname;
    }
  },
  getters: {
    getName : (state) => {
      return state.name;
    },
    getSurname: (state) => {
      return state.surname;
    },
    getFullName: (state) => {
      return state.name + " " + state.surname
    },
    getUserDescription: (state, getters) => {
      //return "Ciao mi chiamo " + state.name + " " + state.surname
      return "Ciao mi chiamo " + getters.getFullName
    }
  }
}

const articlesModule = {
  namespaced: true,
  state: () => {
      return [
        {id : 1, subject: "general", title: "Ciao mi presento"},
        {id : 2, subject : "programming", title: "Ciao cosa faccio"},
        {id : 3, subject: "programming", title: "Scrivo pure in vue"}
      ]
  },
  getters: {
    getArticles: (state) => {
      return state;
    },
    getProgrammingArticles: (state) => {
      return state.filter(articles =>{
        return articles.subject == "programming"
      })
    }
  }
}

const store = new Vuex.Store({
  modules: {
    user: userModule,
    articles: articlesModule
  }
})

Vue.config.productionTip = false

new Vue({
  store: store,
  render: h => h(App),
}).$mount('#app')
