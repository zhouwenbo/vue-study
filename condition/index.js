Vue.component("app-sidebar", {
    props: ["student"],
    template: "<li>{{student.name}}</li>"
})


var app = new Vue({
    el: "#app",
    data: {
        seen: false,
        students: [{
                name: "zhouwenbo",
                age: 12
            },
            {
                name: "zhouzixin",
                age: 23
            },
            {
                name: "xiejinrong",
                age: 22
            },
            {
                name: "zhouqin**",
                age: 11
            }
        ],
        message: 'Hello Vue.js!',
        counter: 0
    },
    created: function () {
        console.log('student[0] name = ' + this.students[0].name)
    },
    methods: {
        reverse: function () {
            this.message = "keep change"
        },
        addCount: function (event) {
            this.counter++
            if (event) {
                //alert(event.target.tagName)
            }
        }
    },
    computed: {
        desc: function () {
            return this.message + ' ,ta是个好人';
        },
        now: function () {
            return Date.now()
        }
    }
});

app.seen = true