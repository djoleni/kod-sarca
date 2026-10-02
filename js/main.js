var M=[["Klasik Šarac",680,"Juneći burger 150g, domaći burger sos, luk, ajsberg, čedar"],
["Blagi Marko",740,"Juneći burger 150g, domaći roštilj sos, karamelizovani luk, slanina, čedar, ajsberg"],
["Ognjeni Marko",740,"Juneći burger 150g, domaći ljuti roštilj sos, karamelizovani luk, slanina, čedar, ajsberg"],
["Pistakio di Marko",860,"Juneći burger 150g, domaći pistać sos, rukola, mocarela"],
["Bleu de Šarac",840,"Juneći burger 150g, džem od šljiva, rukola, gorgonzola"],
["Uskok",560,"Pileći burger 150g, domaći majonez-senf-med sos, ajsberg, gauda"]];
var X=[["Dabl burger","+330","+150 grama mesa i još sira"],["Pomfrit uz burger","+120",""],["Kolutići luka uz burger","+200",""],["Pomfrit","200",""],["Kolutići luka","300",""]];
var IM=['klasik','blagi','ognjeni','pistakio','bleu','uskok'];
var IM=['klasik','blagi','ognjeni','pistakio','bleu','uskok','dabl','pomfrit','kolutici'],XI=[6,7,8,7,8];
function SRC(n){return 'assets/img/m-'+n+'.webp'}
function it(n,p,d,i){return '<div class="it"'+(i>=0?' data-i="'+i+'" tabindex="0" role="button" aria-expanded="false"':'')+'><div class="r"><h3>'+n+'</h3><span class="pr">'+p+'<small>din</small></span></div>'+(d?'<p>'+d+'</p>':'')+(i>=0?'<div class="ic"><div><img src="'+SRC(IM[i])+'" alt="" loading="lazy"></div></div>':'')+'</div>'}
document.getElementById('mgrid').innerHTML=M.map((m,i)=>it(m[0],m[1],m[2],i)).join('')+'<h3 class="sub">Dodaci i prilozi</h3>'+X.map((m,k)=>it(m[0],m[1],m[2],XI[k])).join('');
var mv=document.getElementById('mview');mv.innerHTML=IM.map(n=>'<img src="'+SRC(n)+'" alt="">').join('');
var pi=[].slice.call(mv.children),pit=[].slice.call(document.querySelectorAll('.it[data-i]')),mob=matchMedia('(max-width:860px)');
function act(k){pit.forEach((e,j)=>{e.classList.toggle('on',j==k);e.setAttribute('aria-expanded',j==k)});pi.forEach((e,j)=>e.classList.toggle('on',k>=0&&j==+pit[k].dataset.i))}
pit.forEach((e,k)=>{e.addEventListener('mouseenter',()=>{if(!mob.matches)act(k)});e.addEventListener('focus',()=>{if(!mob.matches)act(k)});
 var go=()=>{if(mob.matches&&e.classList.contains('on'))act(-1);else{act(k);if(mob.matches)setTimeout(()=>e.scrollIntoView({block:'nearest',behavior:'smooth'}),420)}};
 e.addEventListener('click',go);e.addEventListener('keydown',ev=>{if(ev.key=='Enter'||ev.key==' '){ev.preventDefault();go()}})});act(0);
var RM=matchMedia('(prefers-reduced-motion:reduce)').matches;
var io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;var t=e.target;t.classList.add('in');io.unobserve(t);
 if(t.dataset.n){var n=+t.dataset.n,s=performance.now();(function f(now){var k=Math.min((now-s)/1300,1);t.textContent=Math.round(n*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(f)})(s)}}),{threshold:.15});
document.querySelectorAll('.rv,.gal img,[data-n]').forEach(e=>{if(!e.dataset.n)e.classList.add('rv');io.observe(e)});
var pg=document.querySelector('.prog'),bg=document.getElementById('bg'),hero=document.querySelector('.hero'),sy=0,tx=0,ty=0,cx0=0,cy0=0,vis=true;
addEventListener('scroll',()=>{sy=scrollY;pg.style.transform='scaleX('+(sy/(document.documentElement.scrollHeight-innerHeight||1))+')'},{passive:true});
hero.addEventListener('pointermove',e=>{var r=hero.getBoundingClientRect();tx=(e.clientX-r.left)/r.width-.5;ty=(e.clientY-r.top)/r.height-.5});
var cv=document.getElementById('em'),cx=cv.getContext('2d'),P=[],W,H;
function rs(){W=cv.width=cv.offsetWidth;H=cv.height=cv.offsetHeight}rs();addEventListener('resize',rs);
var sp=document.createElement('canvas');sp.width=sp.height=32;var g=sp.getContext('2d'),gr=g.createRadialGradient(16,16,0,16,16,16);gr.addColorStop(0,'rgba(255,190,100,1)');gr.addColorStop(.3,'rgba(255,120,40,.65)');gr.addColorStop(1,'rgba(255,100,20,0)');g.fillStyle=gr;g.fillRect(0,0,32,32);
function np(y){return{x:Math.random()*W,y:y==null?H+10:y,r:Math.random()*2.2+1,v:Math.random()*.8+.35,s:Math.random()*6,a:Math.random()*.7+.3}}
for(var k=0;k<(innerWidth<700?18:34);k++)P.push(np(Math.random()*H));
new IntersectionObserver(e=>vis=e[0].isIntersecting).observe(hero);
(function fr(){if(vis&&!RM&&!document.hidden){cx0+=(tx-cx0)*.08;cy0+=(ty-cy0)*.08;
 bg.style.transform='perspective(1200px) rotateY('+(cx0*9).toFixed(2)+'deg) rotateX('+(-cy0*7).toFixed(2)+'deg) translate3d(0,'+(-sy*.1).toFixed(1)+'px,0)';
 cx.clearRect(0,0,W,H);P.forEach(p=>{p.y-=p.v;p.s+=.02;p.x+=Math.sin(p.s)*.5;if(p.y<-10)Object.assign(p,np());cx.globalAlpha=p.a*Math.min(1,p.y/H*1.4);cx.drawImage(sp,p.x,p.y,p.r*7,p.r*7)})}
 requestAnimationFrame(fr)})();
/* hours */
var D=["Nedelja","Ponedeljak","Utorak","Sreda","Četvrtak","Petak","Subota"];
var now=new Date(new Date().toLocaleString('en-US',{timeZone:'Europe/Belgrade'})),td=now.getDay();
document.getElementById('hrs').innerHTML=[1,2,3,4,5,6,0].map(function(d){return '<tr class="'+(d==0?'cl ':'')+(d==td?'today':'')+'"><td>'+D[d]+'</td><td>'+(d==0?'Zatvoreno':'12:00–00:00')+'</td></tr>'}).join('');
var st=document.getElementById('st'),o=td!=0&&now.getHours()>=12;
st.textContent=o?'Otvoreno sada':'Trenutno zatvoreno';st.className='st'+(o?' open':'');
/* latin <-> cyrillic */
var L={a:'а',b:'б',v:'в',g:'г',d:'д',đ:'ђ',e:'е',ž:'ж',z:'з',i:'и',j:'ј',k:'к',l:'л',m:'м',n:'н',o:'о',p:'п',r:'р',s:'с',t:'т',ć:'ћ',u:'у',f:'ф',h:'х',c:'ц',č:'ч',š:'ш',q:'к',w:'в',x:'кс',y:'ј'};
var G={nj:'њ',lj:'љ',dž:'џ'};
function cyr(s){s=s.replace(/stress/gi,function(m){return m.slice(0,5)+m.slice(6)});var o='',i=0,lo=s.toLowerCase();while(i<s.length){var c=s[i],lc=lo[i],t=lo.substr(i,2);
if(G[t]){var r=G[t];o+=(c!==lc&&s[i+1]===lo[i+1]?r.toUpperCase():c!==lc?r.toUpperCase():r);i+=2;continue}
if(L[lc]){o+=(c!==lc?(L[lc].toUpperCase()):L[lc])}else o+=c;i++}return o}
var nodes=[];(function(){var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);while(w.nextNode()){var n=w.currentNode;
if(!n.nodeValue.trim()||n.parentNode.closest('[data-keep],script,style'))continue;nodes.push([n,n.nodeValue])}})();
var alts=[].slice.call(document.querySelectorAll('img[alt]')).map(function(i){return [i,i.alt]});
function setM(m){nodes.forEach(function(p){p[0].nodeValue=m=='cir'?cyr(p[1]):p[1]});
alts.forEach(function(p){p[0].alt=m=='cir'?cyr(p[1]):p[1]});
document.documentElement.lang=m=='cir'?'sr-Cyrl':'sr-Latn';
[].forEach.call(document.querySelectorAll('.lang button'),function(b){b.setAttribute('aria-pressed',b.dataset.m==m)});
try{localStorage.setItem('ks-m',m)}catch(e){}}
[].forEach.call(document.querySelectorAll('.lang button'),function(b){b.onclick=function(){setM(b.dataset.m)}});
var sv='lat';try{sv=localStorage.getItem('ks-m')||'lat'}catch(e){}if(sv=='cir')setM('cir');

/* mobile nav */
(function(){var h=document.querySelector('header'),b=h.querySelector('.nb'),pn=document.getElementById('panel'),de=document.documentElement,mq=matchMedia('(max-width:1080px)');
function lock(e){if(!pn.contains(e.target))e.preventDefault()}
function set(o){h.classList.toggle('open',o);de.classList.toggle('nav-open',o);b.setAttribute('aria-expanded',o);pn.inert=mq.matches&&!o;
document[o?'addEventListener':'removeEventListener']('touchmove',lock,{passive:false});document[o?'addEventListener':'removeEventListener']('wheel',lock,{passive:false})}
b.addEventListener('click',function(){set(!h.classList.contains('open'))});
pn.addEventListener('click',function(e){if(e.target.closest('nav a,.btn.sm'))set(false)});
addEventListener('keydown',function(e){if(e.key=='Escape'&&h.classList.contains('open')){set(false);b.focus()}});
mq.addEventListener('change',function(){set(false)});set(false)})();

/* anchor linkovi bez # u URL-u */
(function(){var cl=function(){history.replaceState(null,'',location.pathname+location.search)};
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href^="#"]');if(!a||e.defaultPrevented||e.button||e.metaKey||e.ctrlKey||e.shiftKey)return;
var id=a.getAttribute('href').slice(1),t=id&&id!='top'?document.getElementById(id):null;if(id&&id!='top'&&!t)return;
e.preventDefault();var rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
if(t)t.scrollIntoView({behavior:rm?'auto':'smooth',block:'start'});else scrollTo({top:0,behavior:rm?'auto':'smooth'});cl()});
if(location.hash){var t=document.getElementById(location.hash.slice(1));cl();if(t)setTimeout(function(){t.scrollIntoView({block:'start'})},60)}})();
