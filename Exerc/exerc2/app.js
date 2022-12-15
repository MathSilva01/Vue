new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta() {
            alert('Alertando')
        },
        alterarValor(event) {
            this.valor = event.target.value
        }
    }
})