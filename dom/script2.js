new Vue ({
    el: '#app',
    data: {
        titulo:'Usando VueJS',
        contador: 0,
        contador2: 0,
    },

    computed: {
        
        resultado(){
            console.log('Resultado foi consultado')
            return this.contador >= 5 ?
            'Maior ou igual a 5' : 'Menor que 5'
        },
    },

    watch: {
        contador(primeiro , segundo){
            console.log(primeiro, segundo)
            setTimeout(() => {
                this.contador = 0
            }, 2000)
        }
    },

    methods: {  
        Aumentar() {
            this.contador++
        },
        
        Aumentar2() {
            this.contador2++
        },

        Diminuir() {
            this.contador--
        }
    }
})