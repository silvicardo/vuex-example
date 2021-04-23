<template>
    <div>
        <h2>Lista Libri</h2>
        <ul>
            <li v-for="book in libri" :key="book.id">
                Titolo{{book.title}}, prezzo: {{book.price}}
                <span v-if="isBookInCart(book.id)">è nel tuo carrello</span>
                <button v-if="!isBookInCart(book.id)" @click="addToCart(book)">Aggiungi al carrello</button>
            </li>  
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    computed : {
        ...mapGetters({
            libri: "books/getBooks",
            carrello: "cart/getCart"
        })
    },
    methods: {
        ...mapMutations({
            addToCart: "cart/addBookToCart"
        }),
        isBookInCart(id){
            
            const booksInCartWithId = this.carrello.filter(function(book){
                return id === book.id
            });
            return booksInCartWithId.length === 1
        }
    }

}
</script>

<style>

</style>