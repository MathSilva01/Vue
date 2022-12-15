new Vue ({
    el: '#app',
    data: {
         contador: 0,
         contador5: 0,
         x: 0,
         y: 0,
    },
    methods: {
        somar(e) {
            console.log(e)
            this.contador ++
        },
        atualizarXY(event) {
            console.log(event)
            this.x = event.clientX
            this.y = event.clientY
        },
        somar5(passo, ev) {
            console.log(passo, ev)
            this.contador5 += passo
        },
        exibirAlerta(event) {
            alert('Estou alertando')
        }
    }
})
