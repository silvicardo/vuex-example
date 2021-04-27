<template>
<div>
    <h2>Il mio carrello</h2>
    <ul>
        <li v-for="cartItem in ilMioCarrello" :key="cartItem.id" >
            Titolo: {{cartItem.title}}, prezzo: {{cartItem.price}}
            <button v-if="isBookInCart(cartItem.id)" @click="removeItemById(cartItem.id)">Rimuovi dal carrello</button>
        </li>
    </ul>
    <h4>Totale da pagare: {{totalToPay}}</h4>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            ilMioCarrello: "cart/getCart",
            totalToPay : "cart/getTotal"
        })
    },
    methods: {
        ...mapMutations({
            removeItemById: "cart/removeBookFromCart"
        }),
         isBookInCart(id){
            const booksInCartWithId = this.ilMioCarrello.filter(function(book){
                return id === book.id
            });
            return booksInCartWithId.length === 1
        }
    }
}
</script>

<style>

</style>