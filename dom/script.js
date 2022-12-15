new Vue ({
    el: '#app',
    data: {
        titulo: String,
        titulo: 'Usando Vue JS',
    },
    methods: {
        saudacao: function() {
            console.log(this)
            return this.titulo
        }
    }
})