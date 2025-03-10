(function(){"use strict";var e={1413:function(e,t,n){var o=n(5130),l=n(6768);const i={class:"mainpanel"},r={class:"playlist"};function s(e,t,n,o,s,a){const u=(0,l.g2)("MainPanel"),d=(0,l.g2)("PlayList");return(0,l.uX)(),(0,l.CE)("div",{class:"app-container",onClick:t[0]||(t[0]=(...e)=>a.getwidth&&a.getwidth(...e))},[(0,l.Lk)("div",i,[(0,l.bF)(u)]),(0,l.Lk)("div",r,[(0,l.bF)(d)])])}var a=n(4232);const u={class:"container"},d=["src"],c={class:"player-panel"},g=["src"],m={class:"progress"},h={class:"now-time"},p={class:"total-time"},v={class:"ctrl-panel"};function f(e,t,n,o,i,r){return(0,l.uX)(),(0,l.CE)("div",u,[(0,l.Lk)("audio",{id:"nowplay",onLoadedmetadata:t[0]||(t[0]=e=>r.duration()),onTimeupdate:t[1]||(t[1]=e=>r.progbar()),onEnded:t[2]||(t[2]=e=>r.chnext())},[(0,l.Lk)("source",{id:"mp3src",src:i.audiourl,type:"audio/mpeg"},null,8,d)],32),(0,l.Lk)("div",c,[(0,l.Lk)("img",{src:i.imgurl},null,8,g),t[16]||(t[16]=(0,l.Lk)("br",null,null,-1)),(0,l.Lk)("div",m,[(0,l.Lk)("span",h,(0,a.v_)(i.now_m)+":"+(0,a.v_)(i.now_s),1),(0,l.Lk)("div",{onClick:t[4]||(t[4]=e=>r.jump(e)),class:"progress-container",id:"progressContainer"},[t[10]||(t[10]=(0,l.Lk)("div",{class:"progress-bar",id:"progressBar"},null,-1)),(0,l.Lk)("div",{onMousedown:t[3]||(t[3]=e=>r.drag(e)),class:"progress-handle",id:"progressHandle",draggable:"false"},null,32)]),(0,l.Lk)("span",p,(0,a.v_)(i.duration_m)+":"+(0,a.v_)(i.duration_s),1)]),(0,l.Lk)("h3",null,(0,a.v_)(i.title),1),t[17]||(t[17]=(0,l.Lk)("br",null,null,-1)),(0,l.Lk)("div",v,[(0,l.Lk)("button",{class:"palybtn",onClick:t[5]||(t[5]=e=>r.play())},t[11]||(t[11]=[(0,l.Lk)("span",null,[(0,l.Lk)("svg",{fill:"#F4EFE9",xmlns:"http://www.w3.org/2000/svg",viewBox:"-10 0 384 512"},[(0,l.Lk)("path",{d:"M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"})])],-1)])),(0,l.Lk)("button",{class:"pausebtn",onClick:t[6]||(t[6]=e=>r.pause())},t[12]||(t[12]=[(0,l.Lk)("span",null,[(0,l.Lk)("svg",{fill:"#F4EFE9",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 40 320 512"},[(0,l.Lk)("path",{d:"M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"})])],-1)])),(0,l.Lk)("button",{class:"prebtn",onClick:t[7]||(t[7]=e=>r.chpre())},t[13]||(t[13]=[(0,l.Lk)("span",null,[(0,l.Lk)("svg",{fill:"#F4EFE9",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 40 320 512"},[(0,l.Lk)("path",{d:"M267.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29l0-320c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160L64 241 64 96c0-17.7-14.3-32-32-32S0 78.3 0 96L0 416c0 17.7 14.3 32 32 32s32-14.3 32-32l0-145 11.5 9.6 192 160z"})])],-1)])),(0,l.Lk)("button",{class:"nextbtn",onClick:t[8]||(t[8]=e=>r.chnext())},t[14]||(t[14]=[(0,l.Lk)("span",null,[(0,l.Lk)("svg",{fill:"#F4EFE9",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 40 320 512"},[(0,l.Lk)("path",{d:"M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416L0 96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241l0-145c0-17.7 14.3-32 32-32s32 14.3 32 32l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-145-11.5 9.6-192 160z"})])],-1)])),(0,l.Lk)("input",{class:"volume",type:"range",onInput:t[9]||(t[9]=e=>r.volume(e.target.value)),value:"50"},null,32),t[15]||(t[15]=(0,l.Lk)("svg",{class:"volume-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512"},[(0,l.Lk)("path",{d:"M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"})],-1))])])])}var w=n(595);const y=(0,w.A)();var L={data(){return{index:0,title:"Mipha's Theme (The Legend of Zelda: Breath of the Wild OST)",imgurl:"img/Mipha's Theme.jpg",audiourl:"audio/miphas-theme-the-legend-of-zelda-breath-of-the-wild-ost.mp3",now_m:"00",now_s:"00",duration_m:"00",duration_s:"00",time_flag:"",isDragging:!1}},created(){y.off("changeSong"),y.on("changeSong",(e=>{this.index=e.index,this.imgurl=e.imgurl,this.audiourl=e.audiourl,this.title=e.title,this.now_m="00",this.now_s="00",document.getElementById("progressBar").style.width="0%",document.getElementById("progressHandle").style.left="0%",clearInterval(this.time_flag),document.getElementById("nowplay").load(),this.play()})),y.off("endidx"),y.on("endidx",(e=>{this.index=e-1}))},methods:{play(){let e=document.getElementById("nowplay");e.play(),this.updateTime()},pause(){let e=document.getElementById("nowplay");e.pause(),clearInterval(this.time_flag)},gettime(){let e=document.getElementById("nowplay");console.log(e.currentTime)},chpre(){0!=this.index&&(this.index--,y.emit("nextSong",this.index))},chnext(){this.index++,y.emit("nextSong",this.index)},volume(e){console.log(e);let t=e/100;document.getElementById("nowplay").volume=t/2},updateTime(){let e=this;this.time_flag=setInterval((function(){let t=document.getElementById("nowplay"),n=Math.floor(t.currentTime/60);e.now_m=n<10?"0"+n:n;let o=Math.floor(t.currentTime%60);e.now_s=o<10?"0"+o:o,console.log("setInterval on...")}),500)},progbar(){let e=document.getElementById("nowplay"),t=document.getElementById("progressBar"),n=document.getElementById("progressHandle"),o=e.currentTime/e.duration*100;isNaN(o)||this.isDragging||(t.style.width=o+"%",n.style.left=o+"%")},jump(e){if(this.isDragging)return;let t=document.getElementById("nowplay"),n=document.getElementById("progressContainer"),o=n.getBoundingClientRect(),l=e.clientX-o.left,i=l/o.width,r=t.duration*i;t.currentTime=r;let s=Math.floor(t.currentTime/60);this.now_m=s<10?"0"+s:s;let a=Math.floor(t.currentTime%60);this.now_s=a<10?"0"+a:a},duration(){let e=document.getElementById("nowplay"),t=Math.floor(e.duration/60);this.duration_m=t<10?"0"+t:t;let n=Math.floor(e.duration%60);this.duration_s=n<10?"0"+n:n},drag(e){e.preventDefault(),this.isDragging=!0,document.addEventListener("mousemove",this.onDrag),document.addEventListener("mouseup",this.onStopDrag),console.log("按下滑鼠")},onDrag(e){let t=document.getElementById("nowplay"),n=document.getElementById("progressContainer"),o=n.getBoundingClientRect(),l=Math.max(e.clientX-o.left,0);l=Math.min(l,o.width);let i=l/o.width*100;document.getElementById("progressBar").style.width=i+"%",document.getElementById("progressHandle").style.left=i+"%",t.currentTime=t.duration*i/100,console.log(t.duration*i),console.log(i)},onStopDrag(){console.log("放開滑鼠"),this.isDragging=!1,document.removeEventListener("mousemove",this.onDrag),document.removeEventListener("mouseup",this.onStopDrag)}}},k=n(1241);const b=(0,k.A)(L,[["render",f],["__scopeId","data-v-35891aa6"]]);var x=b;const E={class:"container"},_={class:"playlist"},B=["onClick"];function I(e,t,n,o,i,r){return(0,l.uX)(),(0,l.CE)("div",E,[(0,l.Lk)("ul",_,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(i.list,((e,t)=>((0,l.uX)(),(0,l.CE)("li",{onClick:n=>r.selsong(t,e.imgurl,e.audiourl,e.title),key:t,class:(0,a.C4)({hover:i.hoverIdx===t})},(0,a.v_)(e.title),11,B)))),128))])])}var C={data(){return{hoverIdx:0,list:[{imgurl:"Mipha's Theme.jpg",audiourl:"miphas-theme-the-legend-of-zelda-breath-of-the-wild-ost.mp3",title:"Mipha's Theme (The Legend of Zelda: Breath of the Wild OST)"},{imgurl:"01-through-the-arbor.jpg",audiourl:"01-through-the-arbor.mp3",title:"01 Through the Arbor 走過綠意- 凱文柯恩"},{imgurl:"01-through-the-arbor.jpg",audiourl:"sundial-dreams.mp3",title:"02 Sundial Dreams 日晷之夢- 凱文柯恩"},{imgurl:"chibli.jpg",audiourl:"chibli-witches.mp3",title:"能看見海的街道 (源於《魔女宅急便》)"},{imgurl:"chibli.jpg",audiourl:"chibli-dodoro.mp3",title:"鄰家的龍貓 (鋼琴曲) (源於《龍貓》)"},{imgurl:"chibli.jpg",audiourl:"chibli-aircity.mp3",title:"伴隨著你 (鋼琴曲) (源於《天空之城》)"}]}},created(){y.off("nextSong"),y.on("nextSong",(e=>{if(void 0==this.list[e])return void y.emit("endidx",e);this.hoverIdx=e;let t=this.list[e].imgurl,n=this.list[e].audiourl,o=this.list[e].title;this.selsong(e,t,n,o)}))},methods:{selsong(e,t,n,o){this.hoverIdx=e;let l="img/"+t,i="audio/"+n;y.emit("changeSong",{index:e,imgurl:l,audiourl:i,title:o})}}};const M=(0,k.A)(C,[["render",I],["__scopeId","data-v-6bb77088"]]);var T=M,S={data(){return{}},components:{MainPanel:x,PlayList:T},methods:{getwidth(){}}};const j=(0,k.A)(S,[["render",s],["__scopeId","data-v-4675a0fe"]]);var D=j;(0,o.Ef)(D).mount("#app")}},t={};function n(o){var l=t[o];if(void 0!==l)return l.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,l,i){if(!o){var r=1/0;for(d=0;d<e.length;d++){o=e[d][0],l=e[d][1],i=e[d][2];for(var s=!0,a=0;a<o.length;a++)(!1&i||r>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[a])}))?o.splice(a--,1):(s=!1,i<r&&(r=i));if(s){e.splice(d--,1);var u=l();void 0!==u&&(t=u)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[o,l,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var l,i,r=o[0],s=o[1],a=o[2],u=0;if(r.some((function(t){return 0!==e[t]}))){for(l in s)n.o(s,l)&&(n.m[l]=s[l]);if(a)var d=a(n)}for(t&&t(o);u<r.length;u++)i=r[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},o=self["webpackChunkrwd_music"]=self["webpackChunkrwd_music"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(1413)}));o=n.O(o)})();
//# sourceMappingURL=app.10a6f102.js.map