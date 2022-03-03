
var app = new Vue({
    el: "#search",
    data:{
        query: "",
        musicList: []       
    },
    methods:{
        searchMusic: function(){
            axios.get("https://autumnfish.cn/search?keywords=" + this.query)
            .then(function(response){
                console.log(response);
            }, function(err){})
        }

    }
})