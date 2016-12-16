new Vue({
    el: '#app',
    data: {
        search: '',
        channels: [],
        control: {
            showChannelList: true,
            selectedChannel: {}
        }
    },
    mounted: function() {
        Promise.resolve(this.parseData())
    },
    methods: {
        parseData: function() {
            var _this = this
            var p1 = new Promise(function(resolve, reject) {
                _this.$http.get('./src/data/channels.json').then((response) => {
                    resolve(response.json())
                }, (response) => {
                    reject(response.data)
                })
            })

            p1.then(function(data) {
                _this.channels = data
            })
        },

        getFeed: function(channel) {
            var _this = this
            var data = []

            // feed('https://www.youtube.com/feeds/videos.xml?channel_id=' + channel.channel_id, function(err, results) {
            //     if (err) throw err
            //
            //     for (var i = 0; i < results.length; i++) {
            //         data.push({
            //             title: results[i].title,
            //             published: moment(results[i].published).format('DD/MM/YYYY'),
            //             link: results[i].link
            //         })
            //     }
            //
            //     return data
            // });
        },

        getAvatar: function getAvatar(channel) {
            return avatar(channel);
        },

        clickChannel: function(channel) {
            var _this = this

            this.control.showChannelList = false
            this.control.selectedChannel = channel
            _this.getFeed(channel)
        },

        openModalVideo: function(url) {
            var _this = this;
            var frame = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + youtube.getVideoId(url) + '" frameborder="0" allowfullscreen></iframe>';
            document.getElementById('video-container').innerHTML = frame;
            $('#modal-video').modal('show');
        },

        closeModalVideo: function() {
            $("#modal-video").on("hidden.bs.modal", function() {
                $(this).find('div#video-container').find('iframe').remove();
            });
        }
    }
})
