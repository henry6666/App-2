$(function () {
    $("form").on("submit", function () {
        e.preventDefault();
        //prepare the request
        var request = gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",
            q: encodeURIComponent($('#search').val()).replace( % 20 / g, " +"),
            maxResults: 3,
            order: "viewCount",
            publishedAfter: "2015-01-01T00:00:00Z"
        });
        // execute request
        request.execute(function (response) {
            console.log(response);
        });
    });
});

function init() {
    gapi.client.setApiKey("AIzaSyAdB5QRkjmE2k6DOajKLp-6lRATzykrOYE");
    gapi.client.load("youtube", "v3", function () {
        // yet api is ready
    })
}