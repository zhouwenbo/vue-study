//注意，这个是有顺鑫的，先注册component,再实例化Vue对象
Vue.component("button-counter", {
    data() {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">你点击了{{count}}次</button>'
})

Vue.component("blog-post", {
    data() {
        return {

        }
    },
    props: ['title'],
    template: '<h3>{{title}}</h3>'
})

Vue.component('blog-post2', {
    props: ['post'],
    template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <div v-html="post.content"></div>
      <button v-on:click="$emit('enlarge-text', 0.1)">增加</button>
    </div>
   `
})

var vm = new Vue({
    el: "#app",
    data: {
        posts: [{
                id: 2,
                title: '我的 Vue 旅程',
                content: '在预先注册好一个 prop 属性之后，就可以将数据作为自定义属性传递给这个 prop 属性，如下所示：'
            },
            {
                id: 3,
                title: '用 Vue 写博客',
                content: '一个组件可以有很多 prop'
            },
            {
                id: 4,
                title: 'Vue 如此有趣',
                content: '并且默认情况下'
            },
            {
                id: 5,
                title: '学好Vue 很好',
                content: '任何类型的值都可以传递给 prop'
            },
        ],
        postFontSize: 1
    },

    methods: {
        onEnlargeText: function (enlargeAmount) {
            this.postFontSize += enlargeAmount
        }
    }
})