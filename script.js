
var t=1;
var maxNo=40;
// function real(){
//     for(var i=6,j=33,k=60;i<28,j<55,k<83;i=i+3,j=j+3,k=k+3){
//         document.getElementsByTagName("div")[j].style.animationDelay=""+j+t+"ms";
//         document.getElementsByTagName("div")[k].style.animationDelay=""+k+t+"ms";
//         document.getElementsByTagName("div")[i].style.animationDelay=""+i+t+"ms";
//     }
// }
// localStorage.clear();
let haveIt = [];
function generateUniqueRandom(maxNr) {
    //Generate random number
    let random = (Math.random() * maxNr).toFixed();

    //Coerce to number by boxing
    random = Number(random);

    if(!haveIt.includes(random)) {
        haveIt.push(random);
        return random;
    } else {
        if(haveIt.length < maxNr) {
          //Recursively generate number
         return  generateUniqueRandom(maxNr);
        } else {
          console.log('No more numbers available.')
          return false;
        }
    }
}

function local(){
    var k=1;
    var local=0
    for(var i=0;i<50;i++){
        console.log(document.getElementsByTagName("div")[i].innerHTML=='Jump in');
        if((document.getElementsByTagName("div")[i].innerHTML=='Jump in')){
            local=parseInt(localStorage.getItem("last"+k+""));
            if(localStorage.getItem("last"+k+"")==null){
                document.getElementsByTagName("div")[i-3].style.display="none";
            }
            else{
            document.getElementsByTagName("div")[i+1].innerText=data[local].singer;
            document.getElementsByTagName("div")[i].innerText=data[local].name;    
            document.getElementsByTagName("div")[i-2].style.backgroundImage='url('+data[local].image+')';
            document.getElementsByTagName("div")[i-3].setAttribute("id",local);
            k++;
        }
    }
}
}

function recommend(){
    var k=1;
    var local=0
    for(var i=50;i<100;i++){
        if((document.getElementsByTagName("div")[i].innerHTML=='Recommended')){
            local=generateUniqueRandom(maxNo);
            document.getElementsByTagName("div")[i+1].innerText=data[local].singer;
            document.getElementsByTagName("div")[i].innerText=data[local].name;    
            document.getElementsByTagName("div")[i-2].style.backgroundImage='url('+data[local].image+')';
            document.getElementsByTagName("div")[i-3].setAttribute("id",local);
            k++;
        }
    }
}

console.log(localStorage.getItem("last1")=="0");
        function localcheck(){
            if(localStorage.getItem("last1")==null){
                console.log("last null")
            
        document.getElementById("last-played").style.display="none";
    }
    else{
        local();
    }
}
function egg(){
    setTimeout(function(){ 
        document.getElementById("greeting").innerHTML="🥚 Music";
    }, 1500);
    document.getElementById("greeting").innerHTML="🐣 Music";
}

function setid(){
    console.log("setting id");
    var newid=0;
    for(var i=0;i<334;i++){
    if(document.getElementsByTagName("div")[i].innerText=='Song Name'){
        document.getElementsByTagName("div")[i-3].setAttribute("id",parseInt(newid));    
        newid++;
    }
    }
}
function menu(){
    console.log("menu() called")
    document.getElementById("menu-bar").classList.toggle("menuShow");
}
function removemenu(){
    document.getElementById("menu-bar").classList.remove("menuShow");
}
function updatename(){
    var username=" "+document.getElementById("username").value;
    document.getElementById("greeting").innerText="Welcome";
    document.getElementById("greeting").innerText+=username+",";
    localStorage.setItem("username",username);
}
function getname(){
    if(localStorage.getItem("username")!=null){
    document.getElementById("greeting").innerText="Welcome back";
    var username=localStorage.getItem("username");
    document.getElementById("greeting").innerText+=username+",";
}
}
function real(){
    console.log(document.getElementsByTagName("div").length);
    getname();
    setid();
    localcheck();
    recommend();
    for(var k=1;k<=8;k++){
    console.log(localStorage.getItem("last"+k+""));
    }
    var index=0;
    for(var i=0,j=2;i<334;i++,j=j+2){
        document.getElementsByTagName("div")[i].style.animationDelay=""+j+t+"ms";
        // t=t-0.1;
        if((document.getElementsByTagName("div")[i].innerText=='Song Name')&&(index<41)){
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
var audio=document.getElementsByTagName("audio")[0];
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
var idNow=1;
var currentname="Song";
var currentinfo="Info";
var currentimage="https://i.scdn.co/image/ab67616d0000b273459d675aa0b6f3b211357370";
function now_play(id){
    console.log(id);
    document.title=data[id].name+' - '+data[id].singer;
    if(once==0){
        document.getElementById("music-panel").classList.toggle("visible");
        document.getElementById("page").classList.toggle("padding");
        once++;
    }
    // document.getElementById("seek-audio").max=document.getElementById("player").duration;
    currentname=data[id].name;
    currentinfo=data[id].singer;
    currentimage=data[id].image;
    medias();
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
    localStorage.setItem("last"+idNow+"",id); 
    idNow++;
}
function updateVar(){
    currentname=document.getElementById("current").innerHTML;
    currentinfo=document.getElementById("current-singer").innerHTML;
    console.log("currentinfo");
}

// if ('mediaSession' in navigator) {
//     // currentimage=document.getElementById("now-image").innerHTML;
// //     audio.currentTime = details.seekTime;
//     updateVar();
//     navigator.mediaSession.metadata = new MediaMetadata({
//     title: currentname,
//     artist: currentinfo,
//     artwork: [
// //         { src: currentimage, sizes: '96x96',   type: 'image/png' },
// //         { src: currentimage, sizes: '128x128', type: 'image/png' },
// //         { src: currentimage, sizes: '192x192', type: 'image/png' },
// //         { src: currentimage, sizes: '256x256', type: 'image/png' },
// //         { src: currentimage, sizes: '384x384', type: 'image/png' },
//         { src: currentimage, sizes: '512x512', type: 'image/png' },
//     ]
//     });

//     navigator.mediaSession.setActionHandler('play', function() {audio.play();});
//     navigator.mediaSession.setActionHandler('pause', function() {audio.pause();});
//     navigator.mediaSession.setActionHandler('seekbackward', function() {seekbackward();});
//     navigator.mediaSession.setActionHandler('seekforward', function() {seekforward();});
//     navigator.mediaSession.setActionHandler('previoustrack', function() {});
//     navigator.mediaSession.setActionHandler('nexttrack', function() {});

// }
function show(){
    document.getElementById("full-player").classList.toggle("visible");
    document.getElementById("full-black").classList.toggle("visible");
    // if(document.getElementById("full-player").classList.contains("visible")){
    //     document.documentElement.requestFullscreen();
    // }
    // else{
    //     document.exitFullscreen();
    // }
}
console.log(test());
function test(){
    return document.getElementById("current").innerHTML;
}
function medias(){
    const audio=document.getElementsByTagName("audio")[0];
    console.log("called");
    if ('mediaSession' in navigator) {
        const events=["durationchange","timechange"];
        for(const event in events)
        audio.addEventListener(event,updatemediasessionstate);
        navigator.mediaSession.metadata = new MediaMetadata({
          title: currentname,
          artist: currentinfo,
          artwork: [
            { src: currentimage, sizes: '96x96',   type: 'image/png' },
            { src: currentimage, sizes: '128x128', type: 'image/png' },
            { src: currentimage, sizes: '192x192', type: 'image/png' },
            { src: currentimage, sizes: '256x256', type: 'image/png' },
            { src: currentimage, sizes: '384x384', type: 'image/png' },
            { src: currentimage, sizes: '512x512', type: 'image/png' },
          ]
          
        });
        
        function  updatemediasessionstate(){
            navigator.mediaSession.setPositionState({
          duration: audio.duration,
          position: audio.currentTime,
        });
    }
        navigator.mediaSession.setActionHandler('play', function() { audio.play();/* Code excerpted. */ });
        navigator.mediaSession.setActionHandler('pause', function() { audio.pause();/* Code excerpted. */ });
        navigator.mediaSession.setActionHandler('stop', function() { /* Code excerpted. */ });
        navigator.mediaSession.setActionHandler('seekbackward', function() { seekbackward();/* Code excerpted. */ });
        navigator.mediaSession.setActionHandler('seekforward', function() { seekforward();/* Code excerpted. */ });
        // navigator.mediaSession.setActionHandler('seekto', function() { /* Code excerpted. */ });
        // navigator.mediaSession.setActionHandler('previoustrack', function() { /* Code excerpted. */ });
        // navigator.mediaSession.setActionHandler('nexttrack', function() { /* Code excerpted. */ });
        // navigator.mediaSession.setActionHandler('skipad', function() { /* Code excerpted. */ });
      }
      
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
    if(((idNow+1)!=7)||((idNow+1)!=15)||((idNow+1)!=23)){
        now_play(idNow+1);
    }

}