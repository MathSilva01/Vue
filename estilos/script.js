new Vue ({
    el: '#app',
    data: {
        aplicarC1: false,
        classesCSS: 'c1'
    },

    computed:{
        estilo1() {
            return {
                c1: this.aplicarC1,
                c2: !this.aplicarC1
            }
        }
    },

    watch:{

    },

    methods: {
    }
})