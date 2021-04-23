<template>
  <div class="hello">
    <h1>{{userDescription}}</h1>
    <p>{{userName}}</p>
    <p>{{userSurname}}</p>
    <button @click="changeNameToDavide">Cambia nome in : Davide</button>
    <button @click="changeSurnameToPatruno">Cambia cognome in : Patruno</button>
    <ul>
      <li v-for="article in programmingArticles" :key="article.id">{{article.title}}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters , mapMutations} from 'vuex'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    ...mapGetters({
      userDescription: 'user/getUserDescription',
      userName: "user/getName",
      userSurname: "user/getSurname",
      programmingArticles: "articles/getProgrammingArticles"
    })
  },
  methods: {
    ...mapMutations({
      changeName: 'user/setName',
      changeSurname: "user/setSurname"
    }),
    changeNameToDavide(){
      this.changeName("Davide")
    },
    changeSurnameToPatruno(){
      this.changeSurname("Patruno")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
