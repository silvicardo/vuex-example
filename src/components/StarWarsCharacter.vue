<template>
    <div>
        <p>PERSONAGGIO SWAPI</p>
        <div v-if="isLoading">sto caricando</div>
        <div v-if="apiError">{{apiError}}</div>
        <div v-if="character">
            <p>{{character.name}}</p>
        </div>
        <button @click="getCharacter(10)">carica personaggio con id 10</button>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: "swapiChar",
    computed: {
        ...mapGetters({
            isLoading: "swapiCharacter/getIsFetching",
            apiError : "swapiCharacter/getApiError",
            character: "swapiCharacter/getCharacter"
        })
    },
    mounted(){
        this.getCharacter( 1);
    },
    methods: {
        ...mapActions({
            getCharacter: "swapiCharacter/fetchCharacter"
        }),
    }
}
</script>