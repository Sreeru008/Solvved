const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const F={p:[["♥","Swipe discovery","Like, pass or shortlist with a smooth card stack.",0],["🎯","Preference matching","Age, career, location, values and deal-breakers.",92],["👀","Parents' picks","See profiles your parents liked, kept separate.",0],["💬","Match chat","Chat opens only after a mutual match.",0],["🔒","Privacy controls","Pause your profile or choose what is visible.",0],["✨","Compatibility score","See why two people fit before you swipe.",86]],
q:[["📋","Detailed profiles","Family background, education, career and horoscope.",0],["★","Shortlist for your child","Like and shortlist; your child sees it all.",0],["💞","Match alerts","Know the moment your child matches, and with whom.",0],["🤝","Parent-to-parent chat","Families talk once a match exists.",0],["🗓","Meeting scheduler","Plan the first family meeting in a tap.",0],["🛡","Verification","Request background checks and verified badges.",0]]};
const P={p:"As a prospect you swipe, set preferences and see which profiles your parents liked or shortlisted.",q:"As a parent you browse detailed profiles, shortlist for your child and see every match they make."};
const A=[["What does Soulvved mean?","Soul plus Wed. Two V shapes join to make a W, and the name reads as solved: finding your match, solved, together."],["How are the two logins connected?","The prospect invites parents with a code or link. Both accounts then share one shortlist, with labels showing who liked what."],["Does one subscription really cover both?","Yes. A single family plan includes the prospect's login and the parents' login."],["Can parents force a match?","No. A match needs the prospect's like. Parent likes act as strong suggestions."],["Is the parent chat safe?","It unlocks only after a mutual match, with reporting, blocking and moderation. Phone numbers stay hidden until both families agree."],["Who sees my data?","Only linked family members and your matches, within the limits you set."]];
function grid(t){const g=$('#grid');g.innerHTML=F[t].map(f=>`<div class="f"><div class="ic">${f[0]}</div><h3>${f[1]}</h3><p>${f[2]}</p>${f[3]?`<div class="bar" style="--p:${f[3]}%"><i></i></div>`:''}</div>`).join('');}
grid('p');$('#panel').textContent=P.p;
$$('.tabs button').forEach(b=>b.onclick=()=>{$$('.tabs button').forEach(x=>x.classList.toggle('on',x==b));const s=$('#s2');s.classList.remove('live');grid(b.dataset.t);void s.offsetWidth;s.classList.add('live')});
$$('.node').forEach(n=>n.onclick=n.onmouseenter=()=>{$$('.node').forEach(x=>x.classList.toggle('on',x==n));const p=$('#panel');p.style.opacity=0;setTimeout(()=>{p.textContent=P[n.dataset.who];p.style.opacity=1},150)});
$('#faq').innerHTML=A.map((a,i)=>`<div class="q${i?'':' open'}"><button aria-expanded="${!i}">${a[0]}</button><div><p>${a[1]}</p></div></div>`).join('');
$$('.q button').forEach(b=>b.onclick=()=>{const q=b.parentNode,o=q.classList.contains('open');$$('.q').forEach(x=>{x.classList.remove('open');x.firstChild.setAttribute('aria-expanded',false)});if(!o){q.classList.add('open');b.setAttribute('aria-expanded',true)}});
const secs=$$('section'),dots=$$('.dots a');
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const i=secs.indexOf(e.target);document.body.dataset.scene=i;dots.forEach((d,j)=>d.classList.toggle('on',i==j));secs.forEach(s=>s.classList.remove('live'));void e.target.offsetWidth;e.target.classList.add('live')}}),{rootMargin:'-45% 0px -45% 0px',threshold:0});
secs.forEach(s=>io.observe(s));
const d=$('#dlg');$$('[data-join]').forEach(b=>b.onclick=()=>{$('#fm').hidden=false;$('#ok').hidden=true;d.showModal()});
$('#cl').onclick=()=>d.close();d.onclick=e=>{if(e.target==d)d.close()};
$('#f').onsubmit=e=>{e.preventDefault();$('#okt').textContent='Welcome, '+e.target.n.value.split(' ')[0]+'!';$('#fm').hidden=true;$('#ok').hidden=false};
const stg=$('.stage');function fit(){stg.style.setProperty('--z',innerWidth<=860?Math.min(1,stg.parentElement.clientWidth/480):1)}
fit();addEventListener('resize',fit);

/* ---- GenZ Mode ---- */
const B=document.body,gzT=$('#gz'),mp=$('#mp');
$$('[data-join]').forEach(b=>b.dataset.g='Be an early member 🚀');
$$('[data-g]').forEach(e=>e._o=e.innerHTML);
function confetti(){const em=['💜','✨','🎉','🔥','💍','🎧','😭','🫶'];for(let i=0;i<26;i++){const s=document.createElement('span');s.className='cf';s.textContent=em[i%em.length];s.style.cssText=`--x:${(Math.random()-.5)*innerWidth}px;--y:${(Math.random()-.3)*innerHeight*.9}px;--r:${Math.random()*720}deg`;B.appendChild(s);setTimeout(()=>s.remove(),1200)}}
function setG(on,burst){B.classList.toggle('genz',on);gzT.checked=on;$$('[data-g]').forEach(e=>e.innerHTML=on?e.dataset.g:e._o);try{localStorage.setItem('gz',on?1:0)}catch(_){}if(on&&burst)confetti();if(!on)stopM()}
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
