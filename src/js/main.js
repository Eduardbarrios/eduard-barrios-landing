const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCQ3DYh41qxaGPwtjrPA9JMQ&part=snippet%2Cid&order=date&maxResults=5'
const content = null || document.getElementById('content')
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a45ea57000msh9724b14383965fap15eb0bjsnfe0f2e597926',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
}

async function fetchData(urlApi){
 const response = await fetch(urlApi, options);
 const data = await response.json();
 return data
}

(async()=>{
 try{
   const videos = await fetchData(API);
   let view = `
   ${videos.items.map(video =>`
    <a href = "https://www.youtube.com/watch?v=${video.id.videoId}ab_channel=${video.snippet.chanelTitle}">
    <div class = "video">
    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}">
    <h3>${video.snippet.title}</h3>
    </div>
    </a>
   `).slice(0,2).join('')}
   `;
   content.innerHTML= view;

 }catch(error){
console.error(error);
 }
})();