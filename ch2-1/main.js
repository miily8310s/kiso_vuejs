var app = new Vue({
    el: '#app',
    data:{
        name: 'キマイラ',
        // list:[
        //     {id: 1,name: 'スライム',hp: 100},
        //     {id: 2,name: 'ゴブリン',hp: 200},
        //     {id: 3,name: 'ドラゴン',hp: 500}
        // ]
        list: [],
        text: 'Vue'
    },
    created: function () {
        axios.get('list.json').then(function (response) {
          // 取得完了したらlistリストに代入
          this.list = response.data
        }.bind(this)).catch(function (e) {
          console.error(e)
        })
    },
    methods: {
        doAdd:function(){
            var max = this.list.reduce(function(a,b){
                return a.id > b.id ? a.id : b.id
            },0)
            this.list.push({
                id: max + 1,
                name: this.name,
                hp: 500
            })
        },
        doRemove: function(index){
            this.list.splice(index,1)
        },
        doAttack: function(index){
            this.list[index].hp -= 10
        }
    }
})