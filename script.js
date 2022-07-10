
var t=1;
var maxNo=44;

document.addEventListener("DOMContentLoaded", () => {
    welcome();
  });
window.onload = function() {
    welcome();
};
// window.onbeforeunload = function() {
//     show();
// };
if(history.scrollRestoration){
history.scrollRestoration="manual";}
else{window.onbeforeunload=function(){
    scrollTo(0,0);
};
}
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
    for(var i=0;i<100;i++){
        //important
        //console.log(document.getElementsByTagName("div")[i].innerHTML=='Jump in');
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
    for(var i=50;i<150;i++){
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

//important
//console.log(localStorage.getItem("last1")=="0");
        function localcheck(){
            if(localStorage.getItem("last1")==null){
                //important
                //console.log("last null")
            
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
    //important
    //console.log("setting id");
    var newid=0;
    for(var i=0;i<379;i++){
    if(document.getElementsByTagName("div")[i].innerText=='Song Name'){
        document.getElementsByTagName("div")[i-3].setAttribute("id",parseInt(newid));    
        newid++;
    }
    }
}
function menu(){
    //important
    //console.log("menu() called");
    // document.getElementsByClassName("menu-bar").style.display="flex";
    // document.getElementById("menu-bar").style.display="flex";
    document.getElementById("setting-icon").style.transform="rotate(60deg)";
    document.getElementsByTagName("body")[0].classList.add("disable-scroll");
    document.getElementById("menu-bar").style.display="flex";
    document.getElementById("menu-bar").classList.toggle("menuShow");
    document.getElementById("menudark").classList.toggle("menu-dark-back");
        // let text;
        // let person = prompt("What should we call you?\n(Just to improve user experience)", "");
        // if (person == null || person == "") {
            
        // } else {
        //     var username=" "+person;
        //     document.getElementById("greeting").innerText="Welcome";
        //     document.getElementById("greeting").innerText+=username+",";
        //     localStorage.setItem("username",person);
        // }
}

function updatename(){
    removemenu();
    var username=" "+document.getElementById("username").value;
    document.getElementById("greeting").innerText="Welcome";
    document.getElementById("greeting").innerText+=username+",";
    localStorage.setItem("username",username);
    
}

function sendMail(){
    var songs=document.getElementsByTagName("input")[3].value;
    window.location.href='mailto:hardik.20.a@gmail.com?subject=Medley Playlist'+"&body=Songs/Artist/Playlist: "+songs;
}

function nextgallery(){
    if(window.innerHeight > window.innerWidth){
        //important
    //console.log("port");
        var i=4;
        setInterval(function () 
        {
                if(i==7){
                    i=4;
                }
                document.getElementById("gallery-img").style.backgroundImage="url(images/"+i+".webp)";
                i++;
            
        }, 4200);
    }
    else{
        //important
    //console.log("landscape");
        var i=1;
        setInterval(function () 
        {
                if(i==4){
                    i=1;
                }
                document.getElementById("gallery-img").style.backgroundImage="url(images/"+i+".webp)";
                i++;
            
        }, 4000);
    }
}

function getname(){
    if(localStorage.getItem("username")!=null){
    document.getElementById("greeting").innerText="Welcome back";
    var username=localStorage.getItem("username");
    document.getElementById("greeting").innerText+=" "+username+",";
}
}

function nextsong(){
    console.log("next");
    if(currentID>43){
        now_play(currentID);
    }
    else{
        currentID++;
        now_play(currentID);
    }
}

function prevsong(){
    console.log("prev");
    if(currentID<1){
        now_play(currentID);
    }
    else{
        currentID--;
        now_play(currentID);
    }
}

function removemenu(){
    document.getElementsByTagName("body")[0].classList.remove("disable-scroll");
    document.getElementById("setting-icon").style.transform="rotate(0deg)";
    document.getElementById("menu-bar").classList.remove("menuShow");    
    document.getElementById("menudark").classList.remove("menu-dark-back");    
}

function welcome(){
    if(localStorage.getItem("welcome")=="disable"){
        //important
        //console.log("function welcome true");
        welcomedone=1;
        document.getElementById("explore-arrow").style.display="none";
        document.getElementById("welcome").style.zIndex="-100";
        document.getElementById("welcome").style.display="none";
        document.getElementById("welcome2").style.zIndex="-100";
        document.getElementById("welcome2").style.display="none";
        updatedstatus();
    }
    else{
        document.getElementById("page").style.display="none";
        document.getElementById("back-black").classList.remove("black-back-start");
        document.getElementById("welcome2").style.display="none";
        document.getElementById("music-panel").style.display="none";
        document.getElementById("music-panel").style.opacity="0";
        document.getElementById("menu-bar").style.display="flex";
        document.getElementById("suggest-id").style.display="none";
        document.getElementById("full-player").style.display="none";
        document.getElementById("title-logo").style.display="none";
        document.getElementsByTagName("body")[0].classList.add("disable-scroll");
    }
    real();
}
function reset(){
    document.getElementById("reset").innerHTML="Done!";
    localStorage.clear();
    setInterval(function () 
    {
        window.location.reload();
    }, 1000);
}
function real(){
    if(welcomedone==1){
    //important
    //console.log(document.getElementsByTagName("div").length);
    //important
    //console.log("in loop");
    document.getElementById("page").style.display="flex";
    document.getElementsByTagName("body")[0].classList.remove("disable-scroll");
    // welcome();
    getname();
    setid();
    localcheck();
    recommend();
    for(var k=1;k<=8;k++){
    //important
    //console.log(localStorage.getItem("last"+k+""));
    }
    var index=0;
    for(var i=0,j=2;i<379;i++,j=j+2){
        document.getElementsByTagName("div")[i].style.animationDelay=""+j+t+"ms";
        // t=t-0
        .1;
        if((document.getElementsByTagName("div")[i].innerText=='Song Name')&&(index<45)){
            document.getElementsByTagName("div")[i+1].innerText=data[index].singer;
            document.getElementsByTagName("div")[i].innerText=data[index].name;    
            document.getElementsByTagName("div")[i-2].style.backgroundImage='url('+data[index].image+')';
        // console.log(document.getElementsByTagName("div")[i].innerText=='Song Name');
            index++;
        }
    }
    
    
    document.getElementById("back-black").classList.remove("black-back-start");
    document.getElementById("music-panel").style.display="flex";
    document.getElementById("title-logo").style.display="flex";
    document.getElementById("suggest-id").style.display="flex";
}
else{
    //important
    //console.log("not in loop");
}
// updatedstatus();
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
var currentID=0;
var idNow=1;
var currentname="Song";
var currentinfo="Info";
var currentimage="https://i.scdn.co/image/ab67616d0000b273459d675aa0b6f3b211357370";
function now_play(id){
    //important
    //console.log(id);
    document.title="Medley";
    if(once==0){
        document.getElementById("music-panel").style.opacity="1";
        document.getElementById("music-panel").classList.toggle("visible");
        document.getElementById("suggestion-box").classList.add("padding");
        once++;
    }
    // document.getElementById("seek-audio").max=document.getElementById("player").duration;
    currentname=data[id].name;
    currentinfo=data[id].singer;
    currentimage=data[id].image;
    medias();
    document.getElementById("player").classList.add("playing");
    document.getElementById("current").innerText=data[id].name;
    document.getElementById("current-singer").innerText=data[id].singer;
    document.getElementById("now-image").style.backgroundImage='url('+data[id].image+')';
    document.getElementById("full-current").innerText=data[id].name;
    document.getElementById("full-current-singer").innerText=data[id].singer;
    document.getElementById("player-back").style.backgroundImage='url('+data[id].image+')';
    document.getElementById("full-now-image").style.backgroundImage='url('+data[id].image+')';
    document.getElementById("title").style.backgroundImage='url('+data[id].image+')';
    document.getElementById("full-now-cover").style.backgroundImage='url('+data[id].image+')';
    document.getElementsByTagName("audio")[0].setAttribute("src",data[id].link);
    document.getElementsByTagName("audio")[0].play();
    localStorage.setItem("last"+idNow+"",id); 
    idNow++;
    currentID=id;
}
function updateVar(){
    currentname=document.getElementById("current").innerHTML;
    currentinfo=document.getElementById("current-singer").innerHTML;
    //important
    //console.log("currentinfo");
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
var welcomedone=0;
function pageLeft(){
    document.getElementById("welcome2").style.display="flex";
    document.getElementById("welcome").classList.add("move-left");
    nextgallery();
    welcomedone=1;
    real();
}

function pageLeft2(){
    document.getElementById("welcome2").classList.add("move-left2");
    real();
    localStorage.setItem("welcome","disable");
    document.getElementsByTagName("body")[0].classList.remove("disable-scroll");
    updatedstatus();
    
}
function updatedstatus(){
    var updated=localStorage.getItem("updatestatus");
    console.log("in updated");
    if(updated==null){
        alert("Medley has been updated to v1.3\n\nChange log:\n• Added next/prev buttons in full screen player\n• Position of +10s/-10s seek has been changed\n• Added autoplay next song after current song ends\n• Completely redesigned Settings UI\n• Updated UI colors of full screen player\n• Added next/prev option to notification panel\n• Performance and stability improvements\n\nEnjoy the new update! ✨");
        localStorage.setItem("updatestatus",1);
    }   
}

function show(){
    // document.body.requestFullscreen();
    document.getElementById("full-player").style.display="flex";
    document.getElementById("full-player").classList.toggle("visible");
    document.getElementById("full-black").classList.toggle("visible");
    // if(document.getElementById("full-player").classList.contains("visible")){
    //     document.documentElement.requestFullscreen();
    // }
    // else{
    //     document.exitFullscreen();
    // }
}
function medias(){
    const audio=document.getElementsByTagName("audio")[0];
    //important
    //console.log("called");
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
        navigator.mediaSession.setActionHandler('play', function() { audio.play(); });
        navigator.mediaSession.setActionHandler('pause', function() { audio.pause(); });
        navigator.mediaSession.setActionHandler('stop', function() {  });
        navigator.mediaSession.setActionHandler('seekbackward', function() { seekbackward(); });
        navigator.mediaSession.setActionHandler('seekforward', function() { seekforward(); });
        // navigator.mediaSession.setActionHandler('seekto', function() {  });
        navigator.mediaSession.setActionHandler('previoustrack', function() { prevsong(); });
        navigator.mediaSession.setActionHandler('nexttrack', function() { nextsong(); });
        // navigator.mediaSession.setActionHandler('skipad', function() {  });
      }
      
}

setInterval(function () 
{
    var audio=document.getElementsByTagName("audio")[0];
    if((audio.currentTime+1>=audio.duration)&&(audio.duration > 0 && !audio.paused)){
        console.log("about to end");
        setTimeout(nextsong(), 1000);
    }
    console.log((audio.duration > 0 && !audio.paused))
    console.log(audio.duration);
    console.log(document.getElementById("player").classList.contains("playing"));
    console.log(audio.currentTime);

}, 1000);

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
        //important
    //console.log("loop off");
    }
    else{
    document.getElementsByTagName("audio")[0].setAttribute("loop","loop");
    //important
    //console.log("loop on");
    }
    document.getElementById("loop-song-id").classList.toggle("loop-on");
}
function songmute(){
    document.getElementById("mute-song-id").classList.toggle("loop-on");
    if(document.getElementById("mute-song-id").classList.contains("loop-on")){
        document.getElementsByTagName("audio")[0].muted = true;
        //important
    //console.log("mute on");
    }
    else{
    document.getElementsByTagName("audio")[0].muted = false;
    //important
    //console.log("mute off");
    }
}
function next(){
    if(((idNow+1)!=7)||((idNow+1)!=15)||((idNow+1)!=23)){
        now_play(idNow+1);
    }

}
