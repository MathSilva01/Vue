new Vue({
    el: '#app',
    data: {
        jogando: false,
        vidaJogador: 100,
        vidaMonstro: 100,
    }, 
    computed: {
        resultado(){
            return this.vidaJogador <= 0 || this.vidaMonstro <= 0
        }
    },

    methods: {
        comecarJogar(){
            this.jogando = true
            this.vidaJogador = 100
            this.vidaMonstro = 100
        },
        ataque(forte){
            this.dano('vidaMonstro',5, 10, forte),
            this.dano('vidaJogador',8, 12, false)
        },
        dano(atr, min, max ,forte, source, target, cls){
            const especial = forte ? 5 : 0
            const golpe = this.random(min + especial, max + especial)
            this[atr] = Math.max(this[atr] - golpe, 0)
        },
        random(min, max){
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        },
        curar() {
            const cura = this.random(10, 14)
            this.vidaJogador = Math.min(this.vidaJogador + cura,100)
            this.dano('vidaJogador',8, 12, false)
        },

    },

    watch: {
        resultado(value){
            if (value) return this.jogando = false
        }
    }
})