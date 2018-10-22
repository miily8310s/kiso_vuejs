var scroll = new SmoothScroll()
var app = new Vue({
    el: '#app',
    data:{
        message: 'Hello！',
        message1: 'Mac',
        val: true,
        val1: [],
        num: 50,
        scrollY: 0,
        timer: null
    },
    created: function(){
        window.addEventListener('scroll',this.handleScroll)
    },
    beforeDestroy: function(){
        window.removeEventListener('scroll',this.handleScroll)
    },
    methods: {
        handleScroll: function(){
            if(this.timer === null){
                this.timer = setTimeout(function(){
                    this.scrollY = window.scrollY
                    clearTimeout(this.timer)
                    this.timer = null
                }.bind(this),200)
            }
        },
        scrollTop: function () {
            scroll.animateScroll(0)
        }
    }
})