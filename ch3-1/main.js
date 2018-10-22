var app = new Vue({
    el: '#app',
    data:{
        message: 'Hello Vue.js',
    },
    methods: {
        handleClick: function(){
            alert('クリックしたよ！')
        },
        handleInput: function(){
            this.message = event.target.value
        },
        handler: function(comment){
            console.log(comment)
        }
    }
})