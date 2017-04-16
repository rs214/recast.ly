var searchYouTube = ({key, query, max = 5}, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    method: 'GET',
    data: {
      part: 'snippet',
      key: key,
      q: query,
      maxResults: max,
      type: 'video',
      videoEmbeddable: 'true'
    },
    success: function (results) { callback(results.items); },
    error: function(error) { console.error(error); }
  });

};

window.searchYouTube = searchYouTube;


// https://www.googleapis.com/youtube/v3/search?part=snippet&&q=trump&&key=AIzaSyBwE9Dduy5HI4qztwJmdEYT-aiW3zDN8yg