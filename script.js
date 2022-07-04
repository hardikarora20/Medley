
var t=1;
// function real(){
//     for(var i=6,j=33,k=60;i<28,j<55,k<83;i=i+3,j=j+3,k=k+3){
//         document.getElementsByTagName("div")[j].style.animationDelay=""+j+t+"ms";
//         document.getElementsByTagName("div")[k].style.animationDelay=""+k+t+"ms";
//         document.getElementsByTagName("div")[i].style.animationDelay=""+i+t+"ms";
//     }
// }

function real(){
    var index=0;
    for(var i=0,j=2;i<100;i++,j=j+4){
        document.getElementsByTagName("div")[i].style.animationDelay=""+j+t+"ms";
        // t=t-0.1;
        if((document.getElementsByTagName("div")[i].innerText=='Song Name')&&(index<24)){
            document.getElementsByTagName("div")[i+1].innerText=data[index].singer;
            document.getElementsByTagName("div")[i].innerText=data[index].name;    
            document.getElementsByTagName("div")[i-2].style.backgroundImage='url('+data[index].image+')';
        // console.log(document.getElementsByTagName("div")[i].innerText=='Song Name');
            index++;
        }
    }
}
var intervalId = window.setInterval(function(){

    var myAudio = document.getElementById('player');
    if (myAudio.duration > 0 && !myAudio.paused) {
        // console.log("playing");
        document.getElementById("change-play").innerHTML='<svg class="play" width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.8333 16.3333H20.5V49.6666H28.8333V16.3333Z" fill="black" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M45.5 16.3333H37.1667V49.6666H45.5V16.3333Z" fill="black" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';document.getElementById("change-play-full").innerHTML='<svg width="65" class="full-play" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 14L47.1667 32.75L18 51.5V14Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';   
        document.getElementById("change-play-full").innerHTML='<svg class="full-play" width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.8333 16.3333H20.5V49.6666H28.8333V16.3333Z" fill="black" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M45.5 16.3333H37.1667V49.6666H45.5V16.3333Z" fill="black" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    } else {
        // console.log("not playing");
        document.getElementById("change-play").innerHTML='<svg width="65" class="play" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 14L47.1667 32.75L18 51.5V14Z" fill="black" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';    document.getElementById("change-play-full").innerHTML='<svg class="full-play" width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.8333 16.3333H20.5V49.6666H28.8333V16.3333Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M45.5 16.3333H37.1667V49.6666H45.5V16.3333Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
        document.getElementById("change-play-full").innerHTML='<svg width="65" class="full-play" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 14L47.1667 32.75L18 51.5V14Z" fill="black" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';   
    }
  }, 500);
function play(){
    const audio=document.getElementsByTagName("audio")[0];
    if(document.getElementById("player").classList.contains("playing")){
        audio.pause();
        document.getElementById("change-play").innerHTML='<svg width="65" class="play" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 14L47.1667 32.75L18 51.5V14Z" fill="black" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';   
        document.getElementById("change-play-full").innerHTML='<svg width="65" class="full-play" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 14L47.1667 32.75L18 51.5V14Z" fill="black" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';   
    }
    else{
        audio.play();
        document.getElementById("change-play").innerHTML='<svg class="play" width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.8333 16.3333H20.5V49.6666H28.8333V16.3333Z" fill="black" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M45.5 16.3333H37.1667V49.6666H45.5V16.3333Z" fill="black" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
        document.getElementById("change-play-full").innerHTML='<svg class="full-play" width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.8333 16.3333H20.5V49.6666H28.8333V16.3333Z" fill="black" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M45.5 16.3333H37.1667V49.6666H45.5V16.3333Z" fill="black" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    }
    document.getElementById("player").classList.toggle("playing");
}
var once=0;
var idNow=0;
function now_play(id){
    idNow=id;
    document.title=data[id].name+' - '+data[id].singer;
    if(once==0){
        document.getElementById("music-panel").classList.toggle("visible");
        once++;
    }
    // document.getElementById("seek-audio").max=document.getElementById("player").duration;
    document.getElementById("current").innerText=data[id].name;
    document.getElementById("current-singer").innerText=data[id].singer;
    document.getElementById("now-image").style.backgroundImage='url('+data[id].image+')';
    document.getElementById("full-current").innerText=data[id].name;
    document.getElementById("full-current-singer").innerText=data[id].singer;
    document.getElementById("player-back").style.backgroundImage='url('+data[id].image+')';
    document.getElementById("full-now-image").style.backgroundImage='url('+data[id].image+')';
    document.getElementById("full-now-cover").style.backgroundImage='url('+data[id].image+')';
    document.getElementsByTagName("audio")[0].setAttribute("src",data[id].link);
    document.getElementsByTagName("audio")[0].play();
}

// if ('mediaSession' in navigator) {

//     navigator.mediaSession.metadata = new MediaMetadata({
//     title: 'Never Gonna Give You Up',
//     artist: 'Rick Astley',
//     album: 'Whenever You Need Somebody',
//     artwork: [
//         { src: 'https://dummyimage.com/96x96',   sizes: '96x96',   type: 'image/png' },
//         { src: 'https://dummyimage.com/128x128', sizes: '128x128', type: 'image/png' },
//         { src: 'https://dummyimage.com/192x192', sizes: '192x192', type: 'image/png' },
//         { src: 'https://dummyimage.com/256x256', sizes: '256x256', type: 'image/png' },
//         { src: 'https://dummyimage.com/384x384', sizes: '384x384', type: 'image/png' },
//         { src: 'https://dummyimage.com/512x512', sizes: '512x512', type: 'image/png' },
//     ]
//     });

//     navigator.mediaSession.setActionHandler('play', function() {});
//     navigator.mediaSession.setActionHandler('pause', function() {});
//     navigator.mediaSession.setActionHandler('seekbackward', function() {});
//     navigator.mediaSession.setActionHandler('seekforward', function() {});
//     navigator.mediaSession.setActionHandler('previoustrack', function() {});
//     navigator.mediaSession.setActionHandler('nexttrack', function() {});
// }
function show(){
    document.getElementById("full-player").classList.toggle("visible");
    // if(document.getElementById("full-player").classList.contains("visible")){
    //     document.documentElement.requestFullscreen();
    // }
    // else{
    //     document.exitFullscreen();
    // }
}
var img = document.createElement('img');
img.setAttribute('src', 'examples/octocat.png')

img.addEventListener('load', function() {
    var vibrant = new Vibrant(img);
    var swatches = vibrant.swatches()
    for (var swatch in swatches)
        if (swatches.hasOwnProperty(swatch) && swatches[swatch])
            console.log(swatch, swatches[swatch].getHex())

    /*
     * Results into:
     * Vibrant #7a4426
     * Muted #7b9eae
     * DarkVibrant #348945
     * DarkMuted #141414
     * LightVibrant #f3ccb4
     */
});
        
function seekforward(){
    document.getElementsByTagName("audio")[0].currentTime += 10;
}
function seekbackward(){
    document.getElementsByTagName("audio")[0].currentTime -= 10;
}
// function seeky(){
// // console.log(document.getElementById("seek-audio").getAttribute("value"));
//     document.getElementById("seek-audio").setAttribute("value",document.getElementById('player').currentTime);
    
// }
// function seekNew(){
//     document.getElementById('player').currentTime=document.getElementById("seek-audio").getAttribute("value");
// }


function mDur(){
    document.getElementById('dur-panel').max= document.getElementsByTagName("audio")[0].duration;
    document.getElementById('dur').max= document.getElementsByTagName("audio")[0].duration;
}
function mPlay(){
    document.getElementById('dur-panel').value=document.getElementsByTagName("audio")[0].currentTime;
    document.getElementById('dur').value=document.getElementsByTagName("audio")[0].currentTime;
}
function mSet(){
    document.getElementsByTagName("audio")[0].currentTime=document.getElementById('dur-panel').value;
    document.getElementsByTagName("audio")[0].currentTime=document.getElementById('dur').value;
}

function songloop(){
    if(document.getElementById("loop-song-id").classList.contains("loop-on")){
        document.getElementsByTagName("audio")[0].removeAttribute("loop");
        // document.getElementsByClassName("loop-song-full").style.content="hello";
        console.log("loop off");
    }
    else{
    document.getElementsByTagName("audio")[0].setAttribute("loop","loop");
    console.log("loop on");
    }
    document.getElementById("loop-song-id").classList.toggle("loop-on");
}
function songmute(){
    document.getElementById("mute-song-id").classList.toggle("loop-on");
    if(document.getElementById("mute-song-id").classList.contains("loop-on")){
        document.getElementsByTagName("audio")[0].muted = true;
        console.log("mute on");
    }
    else{
    document.getElementsByTagName("audio")[0].muted = false;
    console.log("mute off");
    }
}
function next(){
    now_play(idNow+1);
}