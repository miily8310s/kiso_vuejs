// var myComponent ={
//     template: '<p>MyComponent</p>'
// }
Vue.component('comp-child',{
    template: '<p>{{ val }}</p>',
    props: ['val']
})
Vue.component('list-child',{
    template: '<li>{{ name }} HP. {{ hp }}</li>',
    props: ['name','hp']
})
Vue.component('event-child',{
    template: '<button v-on:click="handleClick">イベント発火</button>',
    methods: {
        handleClick: function(){
            this.$emit('childs-event')
        }
    }
})
Vue.component('slot-child',{
    template: '<li>{{ name }} HP. {{ hp }}</li>',
    props: ['name','hp']
})
Vue.component('my-component', {
    template: '<div class="my-component">\
    <p>名前.{{ name }} HP.{{ hp }}</p>\
    <p>名前 <input v-model="localName"></p>\
    <p>HP <input size="5" v-model.number="localHp"></p>\
    </div>',
    props: {
      name: String,
      hp: Number
    },
    computed: {
      // 算出プロパティのセッター＆ゲッターを使ってv-modelを使用
      localName: {
        get: function () {
          return this.name
        },
        set: function (val) {
          this.$emit('update:name', val)
        }
      },
      localHp: {
        get: function () {
          return this.hp
        },
        set: function (val) {
          this.$emit('update:hp', val)
        }
      }
    }
  })
var app = new Vue({
    el: '#app',
    // components: {
    //     'my-component': myComponent
    // },
    data:{
        message: 'Hello！',
        width: 800,
        price: 19800,
        list: [
            {id: 1,name: 'スライム',hp: 100},
            {id: 2,name: 'ゴブリン',hp: 200},
            {id: 3,name: 'ドラゴン',hp: 500}
        ],
        name: 'スライム',
        hp: 100
    },
    methods: {
        parentsMethod: function(){
            alert('イベントをキャッチ！')
        }
    },
    filters: {
        localeNum: function(val){
            return val.toLocaleString()
        },
        round: function(val){
            return Math.round(val * 100) / 100
        },
        radian: function(val){
            return val * Math.PI / 180
        }
    }
})