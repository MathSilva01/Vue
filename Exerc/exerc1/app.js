new Vue ({
    el:"#desafio",
    data: {
        nome: 'Matheus',
        idade: '24',
        link:'https://i.pinimg.com/236x/8b/ee/9a/8bee9a0f5485ac940546c6009bfb679e.jpg'
    },
    methods: {
        multi: function(idade){
            return this.idade * 3 
        },
        random: function(){
            return Math.random()
        }
    }
})