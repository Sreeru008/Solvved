const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const F={p:[["♥","Swipe discovery","Like, pass or shortlist with a smooth card stack.",0],["🎯","Preference matching","Age, career, location, values and deal-breakers.",92],["👀","Parents' picks","See profiles your parents liked, kept separate.",0],["💬","Match chat","Chat opens only after a mutual match.",0],["🔒","Privacy controls","Pause your profile or choose what is visible.",0],["✨","Compatibility score","See why two people fit before you swipe.",86]],
q:[["📋","Detailed profiles","Family background, education, career and horoscope.",0],["★","Shortlist for your child","Like and shortlist; your child sees it all.",0],["💞","Match alerts","Know the moment your child matches, and with whom.",0],["🤝","Parent-to-parent chat","Families talk once a match exists.",0],["🗓","Meeting scheduler","Plan the first family meeting in a tap.",0],["🛡","Verification","Request background checks and verified badges.",0]]};
const P={p:"As a prospect you swipe, set preferences and see which profiles your parents liked or shortlisted.",q:"As a parent you browse detailed profiles, shortlist for your child and see every match they make."};
const A=[["What does Soulvved mean?","Soul plus Wed. Two V shapes join to make a W, and the name reads as solved: finding your match, solved, together."],["How are the two logins connected?","The prospect invites parents with a code or link. Both accounts then share one shortlist, with labels showing who liked what."],["Does one subscription really cover both?","Yes. A single family plan includes the prospect's login and the parents' login."],["Can parents force a match?","No. A match needs the prospect's like. Parent likes act as strong suggestions."],["Is the parent chat safe?","It unlocks only after a mutual match, with reporting, blocking and moderation. Phone numbers stay hidden until both families agree."],["Who sees my data?","Only linked family members and your matches, within the limits you set."]];
const FH=A.map((a,i)=>`<div class="q${i?'':' open'}"><button aria-expanded="${!i}">${a[0]}</button><div><p>${a[1]}</p></div></div>`).join('');$('#faq').innerHTML=FH;$('#faq2').innerHTML=FH;
$$('.q button').forEach(b=>b.onclick=()=>{const q=b.parentNode,o=q.classList.contains('open');$$('.q').forEach(x=>{x.classList.remove('open');x.firstChild.setAttribute('aria-expanded',false)});if(!o){q.classList.add('open');b.setAttribute('aria-expanded',true)}});
const secs=$$('#gm section'),dots=$$('#gd a');
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const i=secs.indexOf(e.target);document.body.dataset.scene=i;dots.forEach((d,j)=>d.classList.toggle('on',i==j));secs.forEach(s=>s.classList.remove('live'));void e.target.offsetWidth;e.target.classList.add('live')}}),{rootMargin:'-45% 0px -45% 0px',threshold:0});
secs.forEach(s=>io.observe(s));
const d=$('#dlg');$$('[data-join]').forEach(b=>b.onclick=()=>{$('#fm').hidden=false;$('#ok').hidden=true;d.showModal()});
$('#cl').onclick=()=>d.close();d.onclick=e=>{if(e.target==d)d.close()};
$('#f').onsubmit=e=>{e.preventDefault();$('#okt').textContent='Welcome, '+e.target.n.value.split(' ')[0]+'!';$('#fm').hidden=true;$('#ok').hidden=false};
const stg=$('.stage');function fit(){const w=stg.parentElement.clientWidth;if(!w)return;stg.style.setProperty('--z',innerWidth<=1100?Math.min(1,w/480):1)}
fit();addEventListener('resize',fit);


/* ---- GenZ loading screen: 12 languages, fast; the page is ready behind it. Max 5 s. ---- */
const gLoad=$('#gload');let gRun=false;
function gReady(){const a=$('#gz-pa'),b=$('#gz-pb');return !!(a&&b&&((a.classList.contains('gl')&&b.classList.contains('gl'))||a.classList.contains('fail')||b.classList.contains('fail')))}
function gEnd(){if(!gRun||gLoad.classList.contains('out'))return;gLoad.classList.add('out');setTimeout(()=>{B.classList.remove('gzl-on');document.documentElement.classList.remove('gzl');gLoad.classList.remove('run');gRun=false},600)}
function startLoader(){if(gRun||!gLoad)return;gRun=true;B.classList.add('gzl-on');document.documentElement.classList.add('gzl');gLoad.classList.remove('out','run');void gLoad.offsetWidth;gLoad.classList.add('run');
 /* the 6 words are a pure CSS (compositor) sequence, 0.6s each = 3.6s, so main-thread work behind it cannot make them stutter */
 const T0=performance.now(),MIN=3600,CAP=5500;
 const chk=()=>{const t=performance.now()-T0;if(t>=MIN&&(gReady()||t>=CAP))gEnd();else setTimeout(chk,60)};setTimeout(chk,MIN);
 setTimeout(gEnd,6000)}
/* ---- GenZ Mode ---- */
const B=document.body,gzT=$('#gz'),mp=$('#mp');
$$('[data-join]').forEach(b=>b.dataset.g='Be an early member');
$$('[data-g]').forEach(e=>e._o=e.innerHTML);
function confetti(){const em=['✦','◆','●','✦'];for(let i=0;i<26;i++){const s=document.createElement('span');s.className='cf';s.textContent=em[i%em.length];s.style.color=['#9c8cff','#ffffff','#4b34c9','#ff6bd6'][i%4];s.style.fontSize=(14+Math.random()*16)+'px';s.style.cssText=`--x:${(Math.random()-.5)*innerWidth}px;--y:${(Math.random()-.3)*innerHeight*.9}px;--r:${Math.random()*720}deg`;B.appendChild(s);setTimeout(()=>s.remove(),1200)}}
function setG(on,burst){B.classList.toggle('genz',on);gzT.checked=on;if(on)fit();$$('[data-g]').forEach(e=>e.innerHTML=on?e.dataset.g:e._o);try{localStorage.setItem('gz',on?1:0)}catch(_){}if(on&&burst)confetti();if(!on)stopM()}
gzT.onchange=()=>{if(gzT.checked)startLoader();setG(gzT.checked,true)};
try{if(localStorage.getItem('gz')=='1'){setG(true);startLoader()}else document.documentElement.classList.remove('gzl')}catch(_){}
let lt=0;addEventListener('pointermove',e=>{if(!B.classList.contains('genz')||Date.now()-lt<70)return;lt=Date.now();const s=document.createElement('span');s.className='sp';s.textContent=['✦','◆','·'][Math.random()*3|0];s.style.color=['#9c8cff','#fff','#6c5ce7'][Math.random()*3|0];s.style.left=e.clientX+'px';s.style.top=e.clientY+'px';B.appendChild(s);setTimeout(()=>s.remove(),800)});
/* floating music player: tiny synthesized lofi loops (no audio files needed) */
const TR=[['lofi mom-approved beats',[0,3,5,7,10],420,196],['wedding bells (lofi remix)',[0,4,7,9,12],340,220],['main character energy',[0,2,7,9,14],260,174]];
let ac,tm,st=0,tk=0;
function note(f,t,v){const o=ac.createOscillator(),g=ac.createGain();o.type='triangle';o.frequency.value=f;g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.001,t+.5);o.connect(g);g.connect(ac.destination);o.start(t);o.stop(t+.5)}
function beat(){const[,sc,,root]=TR[tk],t=ac.currentTime;note(root*2**(sc[Math.random()*sc.length|0]/12),t,.07);if(st++%4==0)note(root/2,t,.12)}
function play(){ac=ac||new(window.AudioContext||window.webkitAudioContext)();ac.resume();clearInterval(tm);tm=setInterval(beat,TR[tk][2]);mp.classList.add('on');$('#pp').textContent='⏸'}
function stopM(){clearInterval(tm);mp.classList.remove('on');$('#pp').textContent='▶'}
$('#pp').onclick=()=>mp.classList.contains('on')?stopM():play();
$('#nx').onclick=()=>{tk=(tk+1)%TR.length;$('#tn').textContent=TR[tk][0];if(mp.classList.contains('on'))play()};

/* ---- Dark Mode (kept when GenZ Mode is toggled, restored when it is left) ---- */
const dkT=$('#dk');
function setD(on){B.classList.toggle('dark',on);dkT.checked=on;try{localStorage.setItem('dk',on?1:0)}catch(_){}}
dkT.onchange=()=>setD(dkT.checked);
try{if(localStorage.getItem('dk')=='1')setD(true)}catch(_){}

/* =====================================================================
   v2 Light / Dark page (identical behaviour in both themes)
   ===================================================================== */
const IC={spark:'<path d="M12 3l1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2z"/>',pad:'<path d="M6 11h4M8 9v4"/><path d="M15 12h.01M18 10h.01"/><path d="M17.3 5H6.7a4 4 0 0 0-4 3.6C2.6 9.4 2 14.5 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.4-1.4A2 2 0 0 1 9.8 16h4.4a2 2 0 0 1 1.4.6L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.5-.6-6.6-.7-7.4A4 4 0 0 0 17.3 5z"/>',film:'<rect x="2" y="2" width="20" height="20" rx="2"/><path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5"/>',bolt:'<path d="M13 2L3 14h9l-1 8 10-12h-9z"/>',check:'<circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-6"/>',flag:'<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"/>',clip:'<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>',heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21.2l7.8-7.7 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',target:'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',eye:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',chat:'<path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7A8.4 8.4 0 0 1 4 11.5a8.5 8.5 0 0 1 8.5-8.5H13a8.5 8.5 0 0 1 8 8z"/>',lock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',star:'<path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/>',file:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8"/>',mark:'<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>',bell:'<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/>',users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'};
const ico=n=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IC[n]}</svg>`;
$$('[data-ic]').forEach(e=>e.innerHTML=ico(e.dataset.ic));
const touch=matchMedia('(hover:none)').matches;
if(touch)$('.n-copy+.n-scene .n-hint').textContent='Tap ✕ ★ ♥ to try the cards';
const FP=[['heart','Swipe discovery','Like, pass or shortlist with a smooth card stack.','Cards adapt to your preferences, so every swipe is worth your time.'],['target','Preference matching','Age, career, location, values and deal-breakers.','Set it once. Suggestions improve as you refine what matters.'],['eye',"Parents' picks",'See the profiles your parents liked and shortlisted.','Kept in their own tab and clearly labelled, never pushed on you.'],['chat','Match chat','Chat opens only after a mutual match.','Moderated, with report and block built in.'],['lock','Privacy controls','Pause your profile or choose what is visible.','You decide who sees what, and when.'],['star','Compatibility score','See why two people fit before you swipe.','A breakdown across values, lifestyle and goals.']];
const FQ=[['file','Detailed profiles','Family background, education, career and horoscope.','Everything a family looks at, in one structured view.'],['mark','Shortlist for your child','Like and shortlist; your child sees it all.','Every pick is labelled, so nothing feels hidden.'],['bell','Match alerts','Know the moment your child matches, and with whom.','An instant notification with the matched profile.'],['users','Parent-to-parent chat','Families talk once a match exists.','Private and moderated, unlocked only after a match.'],['cal','Meeting scheduler','Plan the first family meeting in a tap.','Propose times and confirm in one place.'],['shield','Verification','Request background checks and verified badges.','Added trust before the families meet.']];
$('#gp').innerHTML=FP.map((f,i)=>`<div class="rv" style="--i:${i%3}"><div class="n-flip" tabindex="0"><div class="n-fi"><div class="n-ff"><span class="n-no">0${i+1}</span><div class="n-ti">${ico(f[0])}</div><h3>${f[1]}</h3><em>↻ ${touch?'tap':'hover'} to flip</em></div><div class="n-fb"><h3>${f[1]}</h3><p>${f[2]}</p><small>${f[3]}</small></div></div></div></div>`).join('');
$('#gq').innerHTML=FQ.map((f,i)=>`<div class="rv" style="--i:${i%3}"><div class="n-tc" data-tilt><span class="n-no">0${i+1}</span><div class="n-ti">${ico(f[0])}</div><h3>${f[1]}</h3><p>${f[2]}</p><div class="n-more"><p>${f[3]}</p></div></div></div>`).join('');
if(touch){$$('.n-flip').forEach(f=>f.onclick=()=>f.classList.toggle('flip'));$$('.n-tc').forEach(c=>c.onclick=()=>c.classList.toggle('open'))}
/* 3D tilt + glare on hover */
$$('[data-tilt]').forEach(el=>{el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;el.style.setProperty('--rx',((.5-y)*12).toFixed(2)+'deg');el.style.setProperty('--ry',((x-.5)*14).toFixed(2)+'deg');el.style.setProperty('--mx',(x*100).toFixed(1)+'%');el.style.setProperty('--my',(y*100).toFixed(1)+'%')});el.addEventListener('pointerleave',()=>{el.style.setProperty('--rx','0deg');el.style.setProperty('--ry','0deg')})});
$$('.n-role').forEach(r=>{const set=v=>$('#roles').dataset.hover=v;r.addEventListener('pointerenter',()=>set(r.dataset.who));r.addEventListener('pointerleave',()=>set(''))});
/* hero: interactive 3D card deck */
const scene=$('#scene'),world=$('#world'),cards=$$('#deck .n-pc');let order=[...cards],busy=false,auto=0,hov=false;
const place=()=>order.forEach((c,i)=>c.dataset.pos=i);
function burst(){for(let i=0;i<7;i++){const h=document.createElement('span');h.className='n-hb';h.textContent='♥';h.style.cssText=`--x:${((Math.random()-.5)*170).toFixed(0)}px;--d:${(Math.random()*.25).toFixed(2)}s;--s:${(.8+Math.random()).toFixed(2)}`;world.appendChild(h);setTimeout(()=>h.remove(),1400)}}
function swipe(dir){if(busy)return;busy=true;const top=order[0];top.classList.add('fly-'+dir);if(dir!='l')burst();setTimeout(()=>{order.push(order.shift());top.classList.add('nt');top.classList.remove('fly-'+dir);place();void top.offsetWidth;top.classList.remove('nt');busy=false},480)}
$$('.n-acts button').forEach(b=>b.onclick=()=>swipe(b.dataset.a));
scene.addEventListener('pointerenter',()=>hov=true);
scene.addEventListener('pointermove',e=>{const r=scene.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;world.style.transform=`rotateY(${(x*28).toFixed(1)}deg) rotateX(${(-y*20).toFixed(1)}deg)`});
scene.addEventListener('pointerleave',()=>{hov=false;world.style.transform=''});
setInterval(()=>{if(hov||document.hidden||B.classList.contains('genz')||!$('#n1').classList.contains('live'))return;swipe(['r','l','u','r'][auto++%4])},3600);
/* phone story: 360° turn + new screen at every scroll step */
const phone=$('#phone'),spin=$('#pspin'),ptilt=$('#ptilt'),pst=$('#pstage'),SC=$$('#phone .n-scr'),stp=$$('#steps i'),chs=$('#chips');
for(let z=-8;z<=8;z+=1.6){const e=document.createElement('i');e.className='n-edge';e.style.transform=`translateZ(${z.toFixed(1)}px)`;phone.appendChild(e)}
const CH=[[['✓','92% compatible'],['★','Preferences matched'],['♥','Swipe to like']],[['♥','Liked by Mom'],['★','Shortlisted by Dad'],['✓','One shared list']],[['♥',"It's a match"],['✦','Parents notified'],['✓','Chat unlocked']]];
const paint=i=>chs.innerHTML=CH[i].map((c,k)=>`<div class="n-chip pc${k+1}" style="--k:${k}"><i>${c[0]}</i>${c[1]}</div>`).join('');
let cur=-1,want=0,tmr;paint(0);
function show(i){SC.forEach((s,k)=>s.classList.toggle('on',k==i));stp.forEach((s,k)=>s.classList.toggle('on',k==i));paint(i);chs.classList.remove('hide')}
function goStep(i){want=i;if(window.P3D)P3D.pending=i;if(i===cur)return;const first=cur<0;cur=i;chs.classList.add('hide');
 if(window.P3D&&P3D.ready){clearTimeout(tmr);SC.forEach((s,k)=>s.classList.toggle('on',k==i));stp.forEach((s,k)=>s.classList.toggle('on',k==i));P3D.go(i,first,()=>show(want));return}spin.classList.remove('spin');void spin.offsetWidth;spin.classList.add('spin');clearTimeout(tmr);tmr=setTimeout(()=>show(want),first?60:720)}
phone.onclick=()=>goStep((cur+1)%3);window.addEventListener('load',()=>{if(window.P3D)P3D.onTap=()=>goStep((cur+1)%3)});phone.onkeydown=e=>{if(e.key=='Enter'||e.key==' '){e.preventDefault();goStep((cur+1)%3)}};
pst.addEventListener('pointermove',e=>{const r=pst.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;ptilt.style.transform=`rotateY(${(x*30).toFixed(1)}deg) rotateX(${(-y*18).toFixed(1)}deg)`});
pst.addEventListener('pointerleave',()=>ptilt.style.transform='');
/* sizing so the 3D pieces fit every screen */
function fitN(){const m=innerWidth<=860,sw=scene.clientWidth;if(sw){const ws=Math.min(1,sw/470);scene.style.setProperty('--ws',ws.toFixed(3));scene.style.height=Math.round(540*ws+34)+'px'}
 const pw=pst.clientWidth,ph=pst.clientHeight;if(pw){const ps=Math.max(.36,Math.min(1,(ph-(m?58:150))/580,pw/(m?300:340)));pst.style.setProperty('--ps',ps.toFixed(3))}
 if(window.P3D&&P3D.resize)P3D.resize()}
fitN();addEventListener('resize',fitN);
/* scroll reveal, scenes, dots, progress */
const rio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');rio.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -6% 0px'});
$$('#nm .rv').forEach(el=>rio.observe(el));
const nsecs=$$('#nm section'),nd=$$('#nd a');
const nio=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const i=nsecs.indexOf(e.target);B.dataset.scene=i;nd.forEach((d,j)=>d.classList.toggle('on',i==j));nsecs.forEach(s=>s.classList.toggle('live',s==e.target));if(e.target.dataset.step!==undefined)goStep(+e.target.dataset.step);fitN()}),{rootMargin:innerWidth<=860?'-72% 0px -22% 0px':'-45% 0px -45% 0px',threshold:0});
nsecs.forEach(s=>nio.observe(s));
const pr=$('#progi');addEventListener('scroll',()=>{pr.style.transform=`scaleX(${Math.min(1,scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight)).toFixed(4)})`},{passive:true});
/* moving spotlight: follows the pointer on desktop, drifts with scroll on touch screens */
const spot=$('#spot'),coarse=matchMedia('(pointer:coarse)').matches;let sx=innerWidth/2,sy=innerHeight/3,tx=sx,ty=sy,raf=0;
function glide(){sx+=(tx-sx)*.08;sy+=(ty-sy)*.08;spot.style.transform=`translate(${sx.toFixed(1)}px,${sy.toFixed(1)}px)`;raf=Math.abs(tx-sx)+Math.abs(ty-sy)>.5?requestAnimationFrame(glide):0}
function aim(x,y){tx=x;ty=y;if(!raf)raf=requestAnimationFrame(glide)}
addEventListener('pointermove',e=>{if(!coarse&&!B.classList.contains('genz'))aim(e.clientX,e.clientY)});
function driftAim(){const f=scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight);aim(innerWidth*(.5+.38*Math.sin(f*Math.PI*6)),innerHeight*(.2+.6*((f*5)%1)))}
if(coarse){addEventListener('scroll',driftAim,{passive:true});driftAim()}else aim(innerWidth*.7,innerHeight*.35);

/* =====================================================================
   GenZ v2: scroll-linked story, draggable meme stickers, hover features
   ===================================================================== */
const cl=(x,a=0,b=1)=>Math.min(b,Math.max(a,x));
const GP=[['heart','Swipe discovery','Like, pass or shortlist with a smooth card stack. thumb workout.'],['target','Preference matching','Age, career, city, values, deal-breakers. set it once, no cap.'],['eye',"Parents' picks",'See who your parents liked and shortlisted. own tab, zero pressure.'],['chat','Match chat','Chat opens only after a mutual match. no random DMs.'],['lock','Privacy controls','Pause your profile or pick who sees what. your app, your rules.'],['spark','Compatibility score','See why two people fit before you swipe. receipts included.']];
const GQ=[['clip','Detailed profiles','Family, education, career and horoscope. all in one place.'],['mark','Shortlist for your child','Like and shortlist. your kid sees it all, clearly labelled.'],['bell','Match alerts','Know the second your kid matches, and with whom.'],['users','Parent-to-parent chat','Families talk once a match exists. moderated and safe.'],['cal','Meeting scheduler','Plan the first family meet in one tap. chai included.'],['shield','Verification','Background checks and verified badges. trust, but verify.']];
const ROT=[-.9,.8,-.7,1,-.8,.7];
/* meme stickers: drag them around, tap to pop. Optional real memes: drop memes/meme-1.gif ... meme-10.gif in the memes folder. */
function burstAt(x,y,list){list.forEach((em,i)=>{const s=document.createElement('span');s.className='cf';s.textContent=em;s.style.color=['#9c8cff','#fff','#4b34c9','#ff6bd6'][i%4];const a=(i/list.length)*Math.PI*2+Math.random();s.style.cssText=`left:${x}px;top:${y}px;--x:${Math.cos(a)*(90+Math.random()*60)}px;--y:${Math.sin(a)*(90+Math.random()*60)}px;--r:${Math.random()*540}deg`;B.appendChild(s);setTimeout(()=>s.remove(),1200)})}
$$('.gz-st').forEach(st=>{
 let sx=0,sy=0,dx=0,dy=0,mv=0,on=false;
 st.addEventListener('pointerdown',e=>{on=true;mv=0;sx=e.clientX-dx;sy=e.clientY-dy;st.setPointerCapture(e.pointerId);st.classList.add('drag')});
 st.addEventListener('pointermove',e=>{if(!on)return;const nx=e.clientX-sx,ny=e.clientY-sy;mv=Math.max(mv,Math.hypot(nx-dx,ny-dy));dx=nx;dy=ny;st.style.setProperty('--dx',dx+'px');st.style.setProperty('--dy',dy+'px')});
 const end=e=>{if(!on)return;on=false;st.classList.remove('drag');if(mv<6){st.classList.remove('pop');void st.offsetWidth;st.classList.add('pop');const r=st.getBoundingClientRect();burstAt(r.left+r.width/2,r.top+r.height/2,['✦','◆','●','✦','◆','●'])}};
 st.addEventListener('pointerup',end);st.addEventListener('pointercancel',end);
 const ex=['gif','png','webp'];let k=0;const im=new Image();im.className='gz-img';im.alt='';
 const nx=()=>{if(k<ex.length)im.src=`memes/meme-${st.dataset.m}.${ex[k++]}`};
 im.onload=()=>{st.prepend(im);st.querySelector('i').style.display='none'};im.onerror=nx;nx();
});

/* ===== GenZ v6: interactive type, pinned scroll-linked sections ===== */
const CN=n=>String(n).padStart(2,'0');
$('#gfs').innerHTML=GP.map((f,i)=>`<article class="hz-c" tabindex="0"><em>${CN(i+1)}</em><span class="e">${ico(f[0])}</span><h3 class="gx">${f[1]}</h3><p>${f[2]}</p></article>`).join('');
$('#gls').innerHTML=GQ.map((f,i)=>`<li class="kr-r" tabindex="0" data-i="${i}"><b>${CN(i+1)}</b><div><h3 class="gx">${f[1]}</h3><p>${f[2]}</p></div></li>`).join('');
$('#krv').innerHTML=GQ.map((f,i)=>`<div class="kr-i" data-i="${i}">${ico(f[0])}</div>`).join('');
/* every .gx heading is split into letters: hover = jerk + ripple, scroll-in = rise */
function gSplit(el){if(el._s)return;el._s=1;const t=el.textContent;el.setAttribute('aria-label',t);el.textContent='';let i=0;const ws=t.split(' ');ws.forEach((w,wi)=>{const wd=document.createElement('span');wd.className='wd';wd.setAttribute('aria-hidden','true');[...w].forEach(c=>{const s=document.createElement('span');s.className='ch';s.textContent=c;s.style.setProperty('--i',i++);wd.appendChild(s)});el.appendChild(wd);if(wi<ws.length-1)el.appendChild(document.createTextNode(' '))})}
$$('#gm .gx').forEach(gSplit);
const jerk=(c,k)=>{if(!c||c._j)return;c._j=1;const r=n=>((Math.random()-.5)*n*k).toFixed(1);c.style.setProperty('--jx',r(.5)+'em');c.style.setProperty('--jy',r(.6)+'em');c.style.setProperty('--jr',r(60)+'deg');c.classList.add('j');setTimeout(()=>{c.classList.remove('j');c._j=0},420)};
document.addEventListener('pointerover',e=>{if(!B.classList.contains('genz'))return;const c=e.target.closest&&e.target.closest('.gx .ch');if(!c)return;jerk(c,1);jerk(c.previousElementSibling,.45);jerk(c.nextElementSibling,.45)});
const gxIO=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');gxIO.unobserve(e.target)}}),{threshold:.2});
$$('#gm .pin .gx').forEach(e=>gxIO.observe(e));
/* tilt + cursor glow on the horizontal deck cards */
$$('.hz-c').forEach(c=>{c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;c.style.setProperty('--rx',((.5-y)*12).toFixed(2)+'deg');c.style.setProperty('--ry',((x-.5)*12).toFixed(2)+'deg');c.style.setProperty('--mx',(x*100).toFixed(1)+'%');c.style.setProperty('--my',(y*100).toFixed(1)+'%')});c.addEventListener('pointerleave',()=>{c.style.setProperty('--rx','0deg');c.style.setProperty('--ry','0deg')})});
/* pinned sections: one shared scroll-progress engine */
const pins=$$('#gm .pin'),hzT=$('#gfs'),krs=$$('.kr-r'),kri=$$('.kr-i'),krP=$('#g7');let kh=-1;
function krSet(a){if(krSet.a===a)return;krSet.a=a;krs.forEach((r,i)=>r.classList.toggle('on',i===a));kri.forEach((r,i)=>r.classList.toggle('on',i===a))}
function pinFit(){hzT.parentElement.style.setProperty('--sx',Math.max(0,hzT.scrollWidth-innerWidth).toFixed(0)+'px')}
function pinUpdate(){let mv=false;pins.forEach(p=>{const r=p.getBoundingClientRect();if(r.bottom<-80||r.top>innerHeight+80)return;const sp=p.offsetHeight-innerHeight,T=cl(-r.top/sp);if(p._c==null)p._c=T;p._c+=(T-p._c)*.12;if(Math.abs(T-p._c)<.0005)p._c=T;else mv=true;const P=p._c;p.style.setProperty('--p',P.toFixed(4));if(p===krP)krSet(kh>=0?kh:cl(Math.floor(P*6),0,5))});return mv}
krs.forEach(r=>r.addEventListener('pointerenter',()=>{kh=+r.dataset.i;krSet(kh)}));
$('#gls').addEventListener('pointerleave',()=>{kh=-1;gsKick()});
krSet(0);pinFit();
/* scroll story engine */
const gsEl=$('#gs'),gsc=$$('.gs-sc'),gbar=$$('.gs-bars i'),gcur=$('#gcur'),gmq=$('#gcur .mq');
const GL=['','scene 02 ✦ the fam ✦ ','scene 03 ✦ it\'s a match ✦ '];let gRaf=0,gLab=-1;
function gsFit(){const a=$('.gs-sc.on .gs-artw')||$('.gs-artw');if(!a||!a.clientWidth||!a.clientHeight)return;gsEl.style.setProperty('--gz',Math.min(1,a.clientWidth/480,a.clientHeight/480).toFixed(3))}
let gT=0,gC=null;
let hT=0,hC=0;const hero0=$('#s0');
function gsUpdate(){gRaf=0;if(!B.classList.contains('genz'))return;let mv=pinUpdate();
 hT=cl(scrollY/innerHeight);hC+=(hT-hC)*.14;if(Math.abs(hT-hC)<.002)hC=hT;else mv=true;hero0.style.setProperty('--hp',hC.toFixed(3));
 const span=gsEl.offsetHeight-innerHeight;if(span<=0)return;
 gT=cl(-gsEl.getBoundingClientRect().top/span);if(gC==null)gC=gT;gC+=(gT-gC)*.12;if(Math.abs(gT-gC)<.0005)gC=gT;else mv=true;
 const P=gC,w=.075,b=[1/3,2/3],act=P<b[0]?0:P<b[1]?1:2;
 let c=-1,lab=0;for(let k=0;k<2;k++)if(Math.abs(P-b[k])<w){c=(P-(b[k]-w))/(2*w);lab=k+1}
 gcur.classList.toggle('on',c>=0);
 if(c>=0){gcur.style.setProperty('--c',c.toFixed(4));if(gLab!==lab){gLab=lab;gmq.innerHTML=Array(10).join('<span>'+GL[lab]+'</span>')}}
 gsc.forEach((s,i)=>{const st=i?b[i-1]+w:0,en=i<2?b[i]-w:1;s.style.setProperty('--p',cl((P-st)/(en-st)).toFixed(4));s.classList.toggle('on',i===act)});
 gbar.forEach((el,k)=>el.style.setProperty('--f',cl(P*3-k).toFixed(3)));if(mv)gsKick()}
const gsKick=()=>{if(!gRaf)gRaf=requestAnimationFrame(gsUpdate)};
addEventListener('scroll',()=>{window.__gzScroll=performance.now();gsKick()},{passive:true});
addEventListener('resize',()=>{gsFit();pinFit();gsKick()});
new MutationObserver(()=>{if(B.classList.contains('genz')){gsFit();pinFit();gsKick()}}).observe(B,{attributes:true,attributeFilter:['class']});
gsFit();gsKick();

/* GenZ: inertial wheel scrolling + eased anchor jumps (touch keeps its native momentum) */
let sT=null,sRaf=0;
const sMax=()=>document.documentElement.scrollHeight-innerHeight;
function sTick(){sRaf=0;if(sT==null)return;const d=sT-scrollY;if(Math.abs(d)<.6){scrollTo({top:sT,behavior:'instant'});sT=null;return}scrollTo({top:scrollY+d*.11,behavior:'instant'});sRaf=requestAnimationFrame(sTick)}
const sGo=y=>{sT=cl(y,0,sMax());if(!sRaf)sRaf=requestAnimationFrame(sTick)};
addEventListener('wheel',e=>{if(!B.classList.contains('genz')||touch||e.ctrlKey||e.defaultPrevented)return;if(e.target.closest&&e.target.closest('dialog,input,textarea,select'))return;const d=$('#dlg');if(d&&d.open)return;e.preventDefault();sGo((sT==null?scrollY:sT)+e.deltaY*(e.deltaMode===1?34:e.deltaMode===2?innerHeight:1))},{passive:false});
document.addEventListener('click',e=>{if(!B.classList.contains('genz'))return;const a=e.target.closest&&e.target.closest('a[href^="#"]');if(!a||a.getAttribute('href').length<2)return;const t=$(a.getAttribute('href'));if(!t)return;e.preventDefault();sGo(t.getBoundingClientRect().top+scrollY)});
addEventListener('keydown',e=>{if(sT!=null&&['ArrowDown','ArrowUp','PageDown','PageUp','Home','End',' '].includes(e.key))sT=null});
addEventListener('pointerdown',()=>{sT=null});

/* GenZ hero: two real 3D phones with live screens; tap either one for a 360 spin */
addEventListener('load',()=>{[window.GA,window.GB].forEach(g=>{if(g)g.onTap=()=>{const pr=g.progress();if(pr>=0&&pr<1)return;g.go(0,false)}})});

/* keep pinned stages clear of the (variable height) nav on every screen size */
const navEl=$('nav');const setNH=()=>document.documentElement.style.setProperty('--nh',(navEl?navEl.offsetHeight:70)+'px');
setNH();addEventListener('resize',setNH);addEventListener('load',setNH);new MutationObserver(setNH).observe(B,{attributes:true,attributeFilter:['class']});
