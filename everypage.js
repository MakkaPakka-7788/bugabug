(function(){
var homeTarget='https://makkapakka-7788.github.io/makkapakka/extra-games.html';
function updateHomeLinks(){
document.querySelectorAll('a').forEach(function(a){
var label=(a.textContent||'').trim().toLowerCase();
if(label==='back to home page'||label==='back to homepage'||label==='home page'||label==='back home'){
a.href=homeTarget;
a.target='_self';
}
});
}
function addRetroFont(){
if(document.getElementById('bugabug-retro-global'))return;
var style=document.createElement('style');
style.id='bugabug-retro-global';
style.textContent="@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');body{font-family:'Press Start 2P',monospace!important}body>a,body>button,body>p,body>h1,body>h2,body>h3,body>label{font-family:'Press Start 2P',monospace!important}";
(document.head||document.documentElement).appendChild(style);
}
function init(){addRetroFont();updateHomeLinks();}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
var observer=new MutationObserver(function(){updateHomeLinks();});
observer.observe(document.documentElement,{childList:true,subtree:true});
})();