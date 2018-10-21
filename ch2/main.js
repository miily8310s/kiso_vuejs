var app = new Vue({
    el: '#app',
    data:{
        message:{
          value: 'Hello Vue.js'
        },
        list:['りんご','ばなな','いちご'],
        num: 1,
        count: 0,
        isChild: true,
        isActive: true,
        textColor: 'red',
        bgColor: 'lightgray',
        radius: 50,
        ok: true
    },
    methods: {
        increment: function(){
            this.count += 1
        }
    }
})