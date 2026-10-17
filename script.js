const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const F={p:[["♥","Swipe discovery","Like, pass or shortlist with a smooth card stack.",0],["🎯","Preference matching","Age, career, location, values and deal-breakers.",92],["👀","Parents' picks","See profiles your parents liked, kept separate.",0],["💬","Match chat","Chat opens only after a mutual match.",0],["🔒","Privacy controls","Pause your profile or choose what is visible.",0],["✨","Compatibility score","See why two people fit before you swipe.",86]],
q:[["📋","Detailed profiles","Family background, education, career and horoscope.",0],["★","Shortlist for your child","Like and shortlist; your child sees it all.",0],["💞","Match alerts","Know the moment your child matches, and with whom.",0],["🤝","Parent-to-parent chat","Families talk once a match exists.",0],["🗓","Meeting scheduler","Plan the first family meeting in a tap.",0],["🛡","Verification","Request background checks and verified badges.",0]]};
const P={p:"As a prospect you swipe, set preferences and see which profiles your parents liked or shortlisted.",q:"As a parent you browse detailed profiles, shortlist for your child and see every match they make."};
const A=[["What does Soulvved mean?","Soul plus Wed. Two V shapes join to make a W, and the name reads as solved: finding your match, solved, together."],["How are the two logins connected?","The prospect invites parents with a code or link. Both accounts then share one shortlist, with labels showing who liked what."],["Does one subscription really cover both?","Yes. A single family plan includes the prospect's login and the parents' login."],["Can parents force a match?","No. A match needs the prospect's like. Parent likes act as strong suggestions."],["Is the parent chat safe?","It unlocks only after a mutual match, with reporting, blocking and moderation. Phone numbers stay hidden until both families agree."],["Who sees my data?","Only linked family members and your matches, within the limits you set."]];
function grid(t){const g=$('#grid');g.innerHTML=F[t].map(f=>`<div class="f"><div class="ic">${f[0]}</div><h3>${f[1]}</h3><p>${f[2]}</p>${f[3]?`<div class="bar" style="--p:${f[3]}%"><i></i></div>`:''}</div>`).join('');}
grid('p');$('#panel').textContent=P.p;
$$('.tabs button').forEach(b=>b.onclick=()=>{$$('.tabs button').forEach(x=>x.classList.toggle('on',x==b));const s=$('#s2');s.classList.remove('live');grid(b.dataset.t);void s.offsetWidth;s.classList.add('live')});
$$('.node').forEach(n=>n.onclick=n.onmouseenter=()=>{$$('.node').forEach(x=>x.classList.toggle('on',x==n));const p=$('#panel');p.style.opacity=0;setTimeout(()=>{p.textContent=P[n.dataset.who];p.style.opacity=1},150)});
const FH=A.map((a,i)=>`<div class="q${i?'':' open'}"><button aria-expanded="${!i}">${a[0]}</button><div><p>${a[1]}</p></div></div>`).join('');$('#faq').innerHTML=FH;$('#faq2').innerHTML=FH;
$$('.q button').forEach(b=>b.onclick=()=>{const q=b.parentNode,o=q.classList.contains('open');$$('.q').forEach(x=>{x.classList.remove('open');x.firstChild.setAttribute('aria-expanded',false)});if(!o){q.classList.add('open');b.setAttribute('aria-expanded',true)}});
const secs=$$('#gm section'),dots=$$('#gd a');
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const i=secs.indexOf(e.target);document.body.dataset.scene=i;dots.forEach((d,j)=>d.classList.toggle('on',i==j));secs.forEach(s=>s.classList.remove('live'));void e.target.offsetWidth;e.target.classList.add('live')}}),{rootMargin:'-45% 0px -45% 0px',threshold:0});
secs.forEach(s=>io.observe(s));
const d=$('#dlg');$$('[data-join]').forEach(b=>b.onclick=()=>{$('#fm').hidden=false;$('#ok').hidden=true;d.showModal()});
$('#cl').onclick=()=>d.close();d.onclick=e=>{if(e.target==d)d.close()};
$('#f').onsubmit=e=>{e.preventDefault();$('#okt').textContent='Welcome, '+e.target.n.value.split(' ')[0]+'!';$('#fm').hidden=true;$('#ok').hidden=false};
const stg=$('.stage');function fit(){const w=stg.parentElement.clientWidth;if(!w)return;stg.style.setProperty('--z',innerWidth<=860?Math.min(1,w/480):1)}
fit();addEventListener('resize',fit);

/* ---- GenZ Mode ---- */
const B=document.body,gzT=$('#gz'),mp=$('#mp');
$$('[data-join]').forEach(b=>b.dataset.g='Be an early member 🚀');
$$('[data-g]').forEach(e=>e._o=e.innerHTML);
function confetti(){const em=['💜','✨','🎉','🔥','💍','🎧','😭','🫶'];for(let i=0;i<26;i++){const s=document.createElement('span');s.className='cf';s.textContent=em[i%em.length];s.style.cssText=`--x:${(Math.random()-.5)*innerWidth}px;--y:${(Math.random()-.3)*innerHeight*.9}px;--r:${Math.random()*720}deg`;B.appendChild(s);setTimeout(()=>s.remove(),1200)}}
function setG(on,burst){B.classList.toggle('genz',on);gzT.checked=on;if(on)fit();$$('[data-g]').forEach(e=>e.innerHTML=on?e.dataset.g:e._o);try{localStorage.setItem('gz',on?1:0)}catch(_){}if(on&&burst)confetti();if(!on)stopM()}
gzT.onchange=()=>setG(gzT.checked,true);
try{if(localStorage.getItem('gz')=='1')setG(true)}catch(_){}
let lt=0;addEventListener('pointermove',e=>{if(!B.classList.contains('genz')||Date.now()-lt<70)return;lt=Date.now();const s=document.createElement('span');s.className='sp';s.textContent=['✨','💜','⭐'][Math.random()*3|0];s.style.left=e.clientX+'px';s.style.top=e.clientY+'px';B.appendChild(s);setTimeout(()=>s.remove(),800)});
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
const IC={heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21.2l7.8-7.7 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',target:'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',eye:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',chat:'<path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7A8.4 8.4 0 0 1 4 11.5a8.5 8.5 0 0 1 8.5-8.5H13a8.5 8.5 0 0 1 8 8z"/>',lock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',star:'<path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/>',file:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8"/>',mark:'<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>',bell:'<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/>',users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'};
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
function goStep(i){want=i;if(i===cur)return;const first=cur<0;cur=i;chs.classList.add('hide');spin.classList.remove('spin');void spin.offsetWidth;spin.classList.add('spin');clearTimeout(tmr);tmr=setTimeout(()=>show(want),first?60:720)}
phone.onclick=()=>goStep((cur+1)%3);phone.onkeydown=e=>{if(e.key=='Enter'||e.key==' '){e.preventDefault();goStep((cur+1)%3)}};
pst.addEventListener('pointermove',e=>{const r=pst.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;ptilt.style.transform=`rotateY(${(x*30).toFixed(1)}deg) rotateX(${(-y*18).toFixed(1)}deg)`});
pst.addEventListener('pointerleave',()=>ptilt.style.transform='');
/* sizing so the 3D pieces fit every screen */
function fitN(){const m=innerWidth<=860,sw=scene.clientWidth;if(sw){const ws=Math.min(1,sw/470);scene.style.setProperty('--ws',ws.toFixed(3));scene.style.height=Math.round(540*ws+34)+'px'}
 const pw=pst.clientWidth,ph=pst.clientHeight;if(pw){const ps=Math.max(.36,Math.min(1,(ph-(m?58:150))/580,pw/(m?300:340)));pst.style.setProperty('--ps',ps.toFixed(3))}}
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
