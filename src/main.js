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

const booksModule = {
  namespaced: true,
  state: () => {
    return [
      {id: 1, title : "Il signore degli Anelli", price: 15},
      {id: 2, title : "La Bibbia", price: 30},
      {id: 3, title : "Steve Jobs", price: 30},
      {id: 4, title : "React Programming", price: 30}
    ]
  },
  getters: {
    getBooks : (state) => {
        return state;
    }
  }
}

const cartModule = {
  namespaced: true,
  state: () => {
    return [];
  },
  getters: {
    getCart(state) {
      return state;
    },
    getTotal(state) {
      let total = 0;

      state.forEach(function(book){
        total += book.price;
      })
      if(total > 10){
        return total - 5
      }

      return total;
    }
  },
  mutations: {
    addBookToCart(state, book){
      state.push(book);
    },
    removeBookFromCart(state, bookId){
      const indexOfBookInStateArray = state.map(item => item.id).indexOf(bookId);
      state.splice(indexOfBookInStateArray, 1);

    }
  }
}

const store = new Vuex.Store({
  modules: {
    user: userModule,
    articles: articlesModule,
    books: booksModule,
    cart: cartModule
  }
})



Vue.config.productionTip = false

new Vue({
  store: store,
  render: h => h(App),
}).$mount('#app')
