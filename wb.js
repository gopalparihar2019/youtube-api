//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=thor&key=[YOUR_API_KEY]
const api_key = "AIzaSyDRXtobCFvSrX1mOEKlHMisvXAJInjL1ss"

let search = async () => {
    try{
    let query = document.getElementById("query").value;
    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api_key}`;
    let res = await fetch(url);

    let data = await res.json();
    append(data.items);
    console.log(data);
    } catch(err){
        console.log(err);
    }
};

let append =(data)=>{
    let container =document.getElementById("results");
    console.log(data);
    data.forEach(({id:{videoId}, snippet:{title}}) => {
        let div = document.createElement("div");
      let iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        iframe.allow = "fullscreen";
        let h3 = document.createElement('h3');
        h3.innerText =title;

        div.append(iframe, h3);

        let video = {
            title,
            videoId,
        }
        div.onclick = ( ) => {
            playvideo(video);
        }
        container.append(div);

    });
}

let playvideo = (video) =>{
    window.location.href = "video.html";
    localStorage.setItem("video" ,JSON.stringify(video))
 }
// 
{/* <iframe width="560" height="315" 
src="https://www.youtube.com/embed/2Smr92PnLkM"
 title="YouTube video player" 
 frameborder="0" 
 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
 allowfullscreen></iframe> */}