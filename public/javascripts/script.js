// let nextPageToken = ''
// fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=ESPN=AIzaSyDnAkfLdBv_E0Ki3U8ExDQWSGT_UhS2Kac&key=AIzaSyDnAkfLdBv_E0Ki3U8ExDQWSGT_UhS2Kac&pageToken='+nextPageToken)
// .then((result)=>{
//   return result.json()
// }).then((data)=>{
//   console.log(data);
//   let videos = data.items
//   nextPageToken = data.nextPageToken
//   let videoContainer = document.querySelector('.youtube-container')
//   for(video of videos){
//     videoContainer.innerHTML += `
//       <img src ='${video.snippet.thumbnails.high.url}'>
//     `
//   }
// })

// const mainMenu = document.querySelector('.mainMenu');
// const closeMenu = document.querySelector('.closeMenu');
// const openMenu = document.querySelector('.openMenu');
// const menu_items = document.querySelectorAll('nav .mainMenu li a');


// openMenu.addEventListener('click',show);
// closeMenu.addEventListener('click',close);

// // close menu when you click on a menu item 
// menu_items.forEach(item => {
//     item.addEventListener('click',function(){
//         close();
//     })
// })

// function show(){
//     mainMenu.style.display = 'flex';
//     mainMenu.style.top = '0';
// }
// function close(){
//     mainMenu.style.top = '-100%';
// };