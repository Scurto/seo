/**
 * Created by YUstymenko on 22.07.2016.
 */
/**
 * Created by scurto on 17.01.2016.
 */
$(document).ready(function() {

    $('#submitBtn').click(function() {
        var youtubeChannelId = $('#channelId').val();
        console.log(youtubeChannelId);

        $.get("https://www.googleapis.com/youtube/v3/search", {
            part: "snippet",
            //forUsername: channelName,
            channelId: youtubeChannelId,
            maxResults: 50,
            order: "date",
            key: 'AIzaSyD4uG1sdLHryZMwVDnUQBXXIdvGhAtGquA'}, function(data) {
            var finalText = "";
            var myText = "";
            var a = 0;
            $.each(data.items, function(i, item) {

                if (item.id.videoId != undefined) {
                    var linkTitle = item.snippet.title;
                    var  linkHref = item.id.videoId;

                    var fullLink = "https://www.youtube.com/watch?v=" + linkHref;

                    myText = myText + " ar[" + a++ + "] = { url: '" + fullLink + "', img: \"youtube\", type: \"video\", title:'" + linkTitle + "', source: \"www.youtube.com\" };";

                    finalText = finalText + " " + item.snippet.title + " -> " + item.id.videoId;
                    $('#youtubeResult').val(myText);
                }
            })
        });
    });

});

