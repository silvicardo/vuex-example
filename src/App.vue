<template>
  <div id="app">
    <PersonaggioSwapi />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <BooksList/>
    <Cart />
    
  </div>
</template>

<script>
import BooksList from './components/BooksList.vue'
import Cart from './components/Cart.vue'
import HelloWorld from './components/HelloWorld.vue'
import PersonaggioSwapi from './components/StarWarsCharacter.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    BooksList,
    Cart,
    PersonaggioSwapi
  }
}
 </script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
