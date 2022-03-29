var app = new Vue({
    el: "#player",
    data:{
        query: "",
        musicList: [],
        musicUrl: "",   
        musicCover: "",
        musicName: "",
        artistName: "",
    },
    methods:{
        searchMusic: function(){
            var that = this;
            axios.get("https://autumnfish.cn/search?keywords=" + this.query)
            .then(function(response){
                that.musicList = response.data.result.songs;
            }, function(err){})
        },
        playMusic: function(musicId){
            console.log(musicId);
            var that = this;
            axios.get("https://autumnfish.cn/song/url?id=" + musicId)
            .then(function(response){
                that.musicUrl = response.data.data[0].url;
            }, function(err){})

            // 歌曲詳情獲取
            axios.get("https://autumnfish.cn/song/detail?ids=" + musicId)
            .then(function(response){
                // console.log(response);
                that.musicCover = response.data.songs[0].al.picUrl;
                that.musicName = response.data.songs[0].name;
                that.artistName = response.data.songs[0].ar[0].name;
            },function(err){})
        }

    }
})
