let nextPageToken = ''
fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=ESPN=AIzaSyDnAkfLdBv_E0Ki3U8ExDQWSGT_UhS2Kac&key=AIzaSyDnAkfLdBv_E0Ki3U8ExDQWSGT_UhS2Kac&pageToken='+nextPageToken)
.then((result)=>{
  return result.json()
}).then((data)=>{
  console.log(data);
  let videos = data.items
  nextPageToken = data.nextPageToken
  let videoContainer = document.querySelector('.youtube-container')
  for(video of videos){
    videoContainer.innerHTML += `
      <img src ='${video.snippet.thumbnails.high.url}'>
    `
  }
})