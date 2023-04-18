let {createApp} = Vue

createApp({
    data() {
        return {
            message:"ciao Vue",
            miaClasse:"text-center text-danger",
            classe:"mb-2 text-center ",
            message2:"mi chiamo Gabriele",
            image: "https://picsum.photos/id/237/200/300",
            lunghezzaStringa:'',
            lunghezzaStringa2:''
        }
    },
    methods: {
        calcolaLunghezza() {
            this.lunghezzaStringa = this.message.length
            this.lunghezzaStringa2 = this.message2.length
        }
    }
}).mount('#app')