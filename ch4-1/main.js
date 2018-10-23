var app = new Vue({
    el: '#app',
    data:{
        message: 'Hello！',
        width: 800,
        height: 600,
        order: false,
        budget: 300,
        // 表示件数
        limit: 2,
        // もとになるリスト
        list: [
            { id: 1, name: 'りんご', price: 100 },
            { id: 2, name: 'ばなな', price: 200 },
            { id: 3, name: 'いちご', price: 400 },
            { id: 4, name: 'おれんじ', price: 300 },
            { id: 5, name: 'めろん', price: 500 }
        ],
        lis: [],
        current: '',
        topics: [
            { value: 'vue', name: 'Vue.js' },
            { value: 'jQuery', name: 'jQuery' }
        ]
    },
    computed: {
        halfWidth: function(){
            return this.width / 2
        },
        halfHeight: function(){
            return this.height / 2
        },
        halfPoint: function(){
            return {
                x: this.halfWidth,
                y: this.halfHeight
            }
        },
        computedData: function(){ return Math.random() },
        // budget以下のリストを返す算出プロパティ
        matched: function () {
            return this.list.filter(function (el) {
              return el.price <= this.budget
            }, this)
        },
        // matchedで返ったデータをlimit件返す算出プロパティ
        limited: function () {
            return this.matched.slice(0, this.limit)
        },
        // sortedを新しく追加
        sorted: function() {
            return _.orderBy(this.matched, 'price', this.order ? 'desc' : 'asc')
        },
        // limitedで使用するリストをsortedに変更
        limited: function() {
            return this.sorted.slice(0, this.limit)
        }
    },
    methods: {
        methodsData: function(){ return Math.random() }
    },
    watch: {
        current: function (val) {
            // GitHubのAPIからトピックのリポジトリを検索
            axios.get('https://api.github.com/search/repositories', {
              params: {
                q: 'topic:' + val
              }
            }).then(function (response) {
              this.lis = response.data.items
            }.bind(this))
        }
    }
})