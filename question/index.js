var app = new Vue({
    el: '#app',
    data: {
        question: '',
        answer: 'I cannot give you an answer until you ask a question!'
    },
    created: function () {
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
    },
    watch: {
        question: function (newQuestion, oldQuestion) {
            console.log('newQuestion = ' + newQuestion + ' ,oldQuestion = ' + oldQuestion)
            this.answer = '等待输入停止……'
            this.debouncedGetAnswer()
        }
    },

    methods: {
        getAnswer :function(){
            if (this.question.indexOf('?') === -1) {
                this.answer = '问题需要包含一个问号;-)'
                return
            }
            this.answer = '思考中……'
            var vm = this;
            console.log("question = " + this.question)
            axios.get('https://yesno.wtf/api')
            .then(function (response) {
              vm.answer = _.capitalize(response.data.answer)
            })
            .catch(function (error) {
              vm.answer = '错误！API 无法处理。' + error
            })
        }
    }
});