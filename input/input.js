var vm = new Vue({
    el: "#app",
    data() {
        return {
            message: "",
            enableRefresh: false,
            checkedNames: ['韩信','萧何'],
            carSelected: "宝马X6",
            computer_select: "default",
            phone_select: "",
            phones: [{
                    name: "iPhone X",
                    id: 1
                },
                {
                    name: "华为P20 Pro",
                    id: 2
                },
                {
                    name: "华为Mate 20",
                    id: 3
                }
            ],
            phoneNum:""
        }
    }
})