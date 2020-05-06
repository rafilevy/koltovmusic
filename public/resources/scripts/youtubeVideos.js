let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player("youtube-player", {
        videoId: "UjxCRoNv1wk",
        events: {
            "onReady": onPlayerReady,
            "onStateChange": onPlayerStateChange
        }
    });
}

function onPlayerReady() {
    player.loadPlaylist({
        listType: "search",
        list: "KolTovMusic"
    })
}
function onPlayerStateChange() {}