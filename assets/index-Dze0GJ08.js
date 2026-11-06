const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index.esm-DzchPxbc.js","./index.esm2017-BHYo8ZpE.js","./index.esm-DEUZw1Tm.js"])))=>i.map(i=>d[i]);
(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();const J="modulepreload",W=function(t,a){return new URL(t,a).href},O={},B=function(a,e,s){let i=Promise.resolve();if(e&&e.length>0){let o=function(p){return Promise.all(p.map(b=>Promise.resolve(b).then(w=>({status:"fulfilled",value:w}),w=>({status:"rejected",reason:w}))))};const l=document.getElementsByTagName("link"),u=document.querySelector("meta[property=csp-nonce]"),m=u?.nonce||u?.getAttribute("nonce");i=o(e.map(p=>{if(p=W(p,s),p in O)return;O[p]=!0;const b=p.endsWith(".css"),w=b?'[rel="stylesheet"]':"";if(!!s)for(let S=l.length-1;S>=0;S--){const $=l[S];if($.href===p&&(!b||$.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${p}"]${w}`))return;const y=document.createElement("link");if(y.rel=b?"stylesheet":J,b||(y.as="script"),y.crossOrigin="",y.href=p,m&&y.setAttribute("nonce",m),document.head.appendChild(y),b)return new Promise((S,$)=>{y.addEventListener("load",S),y.addEventListener("error",()=>$(new Error(`Unable to preload CSS for ${p}`)))})}))}function n(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&n(l.reason);return a().catch(n)})},H=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,10);function T(t,a){return(t.createdAt||0)-(a.createdAt||0)}function F(t){const a=`split:data:${t}`;let e={categories:[],items:[]};try{const o=localStorage.getItem(a);o&&(e=JSON.parse(o))}catch{}const s=new Set,i=()=>{localStorage.setItem(a,JSON.stringify(e)),n()},n=()=>{const o={categories:[...e.categories].sort(T),items:[...e.items].sort(T)};s.forEach(l=>l(o,{pending:!1,fromCache:!1}))};return{mode:"local",subscribe(o){return s.add(o),queueMicrotask(n),()=>s.delete(o)},addCategory(o){const l={id:H(),name:o,createdAt:Date.now()};return e.categories.push(l),i(),l.id},renameCategory(o,l){const u=e.categories.find(m=>m.id===o);u&&(u.name=l),i()},deleteCategory(o){e.categories=e.categories.filter(l=>l.id!==o),e.items=e.items.filter(l=>l.categoryId!==o),i()},addItem(o){e.items.push({...o,id:H(),createdAt:Date.now()}),i()},updateItem(o,l){const u=e.items.find(m=>m.id===o);u&&Object.assign(u,l),i()},deleteItem(o){e.items=e.items.filter(l=>l.id!==o),i()}}}async function K(t,a){const{initializeApp:e}=await B(async()=>{const{initializeApp:d}=await import("./index.esm-DzchPxbc.js");return{initializeApp:d}},__vite__mapDeps([0,1]),import.meta.url),s=await B(()=>import("./index.esm-DEUZw1Tm.js"),__vite__mapDeps([2,1]),import.meta.url),i=e(a),n=s.initializeFirestore(i,{localCache:s.persistentLocalCache({tabManager:s.persistentMultipleTabManager()})}),o=["households",t],l=s.collection(n,...o,"categories"),u=s.collection(n,...o,"items");let m={categories:[],items:[]},p={cats:null,items:null};const b=new Set,w=()=>{if(!p.cats||!p.items)return;const d={pending:p.cats.hasPendingWrites||p.items.hasPendingWrites,fromCache:p.cats.fromCache&&p.items.fromCache};b.forEach(v=>v(m,d))},x=d=>d.docs.map(v=>({id:v.id,...v.data()})).sort(T);let y=!1;const S=()=>{y||(y=!0,s.onSnapshot(l,{includeMetadataChanges:!0},d=>{m={...m,categories:x(d)},p.cats=d.metadata,w()}),s.onSnapshot(u,{includeMetadataChanges:!0},d=>{m={...m,items:x(d)},p.items=d.metadata,w()}))},$=d=>d.catch(v=>console.error("Sync error",v));return{mode:"firebase",subscribe(d){return b.add(d),S(),w(),()=>b.delete(d)},addCategory(d){const v=s.doc(l);return $(s.setDoc(v,{name:d,createdAt:Date.now()})),v.id},renameCategory(d,v){$(s.updateDoc(s.doc(l,d),{name:v}))},deleteCategory(d){const v=s.writeBatch(n);v.delete(s.doc(l,d)),m.items.filter(M=>M.categoryId===d).forEach(M=>v.delete(s.doc(u,M.id))),$(v.commit())},addItem(d){$(s.setDoc(s.doc(u),{...d,createdAt:Date.now()}))},updateItem(d,v){$(s.updateDoc(s.doc(u,d),v))},deleteItem(d){$(s.deleteDoc(s.doc(u,d)))}}}const Q="٠١٢٣٤٥٦٧٨٩",X="۰۱۲۳۴۵۶۷۸۹";function _(t){let a=String(t??"").trim();return a=a.replace(/[٠-٩]/g,e=>Q.indexOf(e)),a=a.replace(/[۰-۹]/g,e=>X.indexOf(e)),a=a.replace(/٫/g,".").replace(/[,\s٬]/g,""),/^\d+(\.\d{0,2})?$|^\.\d{1,2}$/.test(a)?Math.round(parseFloat(a)*100):null}const Z=new Intl.NumberFormat("en-US",{maximumFractionDigits:0}),tt=new Intl.NumberFormat("en-US",{minimumFractionDigits:2,maximumFractionDigits:2});function et(t,a=""){const e=t||0,s=(e%100===0?Z:tt).format(e/100);return a?`${s} ${a}`:s}function C(t,a){const e=Object.fromEntries(a.map(i=>[i.id,0]));let s=0;for(const i of t)s+=i.price||0,i.paidBy in e&&(e[i.paidBy]+=i.price||0);return{total:s,paid:e}}function q(t,a){const[e,s]=a,{paid:i}=C(t,a),n=i[e.id]-i[s.id],o=Math.round(Math.abs(n)/2);return o===0?null:n>0?{from:s,to:e,amount:o}:{from:e,to:s,amount:o}}const j=window.SPLIT_CONFIG||{},f=j.people?.length===2?j.people:[{id:"youssef",name:"Youssef"},{id:"samar",name:"Samar"}],U=j.currency||"EGP",N=t=>f.find(a=>a.id===t)||{id:t,name:t},g=t=>et(t,U),c=(t,a=document)=>a.querySelector(t),h=t=>String(t??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a]),r={store:null,data:{categories:[],items:[]},status:{pending:!1,fromCache:!0},online:navigator.onLine,view:"cats",catId:null,lastPayer:localStorage.getItem("split:lastPayer")||f[0].id},k="split:household";function at(){const t="abcdefghjkmnpqrstuvwxyz23456789",a=crypto.getRandomValues(new Uint8Array(24));return Array.from(a,e=>t[e%t.length]).join("")}function st(t){return`${location.origin}${location.pathname}#join=${t}`}function it(){const t=location.hash.match(/join=([a-z0-9]{20,})/i);t&&(localStorage.setItem(k,t[1].toLowerCase()),history.replaceState(null,"",location.pathname+location.search))}const nt=c("#app");nt.innerHTML=`
  <header class="top">
    <div class="brand">Youssef &amp; Samar <span>Home</span></div>
    <div id="sync" class="sync"></div>
  </header>
  <div id="banner"></div>
  <main id="view"></main>
  <nav class="tabs" id="tabs">
    <button data-tab="cats">${L("grid")}<span>Categories</span></button>
    <button data-tab="summary">${L("sum")}<span>Summary</span></button>
    <button data-tab="settings">${L("gear")}<span>Settings</span></button>
  </nav>
  <div id="sheet" class="sheet-wrap" hidden></div>
`;c("#tabs").addEventListener("click",t=>{const a=t.target.closest("button[data-tab]");a&&I(a.dataset.tab)});window.addEventListener("online",()=>{r.online=!0,A()});window.addEventListener("offline",()=>{r.online=!1,A()});function L(t){return`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${{grid:'<rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/>',sum:'<path d="M18 4H6l6 8-6 8h12"/>',gear:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',back:'<path d="M15 18l-6-6 6-6"/>',chev:'<path d="M9 18l6-6-6-6"/>',plus:'<path d="M12 5v14M5 12h14"/>'}[t]}</svg>`}function A(){const t=c("#sync");if(!r.store){t.innerHTML="";return}let a,e;r.store.mode==="local"?(a="local",e="This phone only"):r.online?r.status.pending?(a="busy",e="Syncing…"):(a="ok",e="Synced"):(a="off",e=r.status.pending?"Offline · will sync":"Offline"),t.className=`sync ${a}`,t.innerHTML=`<i></i>${e}`}function ot(){c("#banner").innerHTML=r.store?.mode==="local"?`<div class="banner">Local mode: data stays on this phone. Add your Firebase config to <code>config.js</code> to sync with ${h(f[1].name)}.</div>`:""}const E={};let P=null;function I(t,a={}){!r.store&&t!=="setup"&&(t="setup"),r.view=t,a.catId!==void 0&&(r.catId=a.catId);const e=t==="cat"?"cats":t;document.querySelectorAll("#tabs button").forEach(i=>i.classList.toggle("on",i.dataset.tab===e)),c("#tabs").hidden=t==="setup",P=E[t];const s=c("#view");s.innerHTML=P.html(),P.mount?.(s),P.update?.(s),window.scrollTo(0,0)}function ct(){if(A(),r.view==="cat"&&!r.data.categories.some(t=>t.id===r.catId)&&(!r.status.fromCache||r.data.categories.length))return I("cats");P?.update?.(c("#view"))}E.setup={html:()=>`
    <section class="setup">
      <h1>Shared costs, split 50/50</h1>
      <p class="muted">Start a shared list on one phone, then send the join link to the other.</p>
      <button class="btn primary big" id="create">Start a new shared list</button>
      <div class="or"><span>or</span></div>
      <form id="join" class="stack">
        <label class="lbl" for="code">Join with a code</label>
        <input id="code" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Paste the code from the other phone" />
        <button class="btn">Join</button>
        <p class="err" id="joinErr"></p>
      </form>
    </section>`,mount(t){c("#create",t).onclick=()=>D(at()),c("#join",t).onsubmit=a=>{a.preventDefault();let e=c("#code",t).value.trim().toLowerCase();const s=e.match(/join=([a-z0-9]+)/);if(s&&(e=s[1]),!/^[a-z0-9]{20,}$/.test(e)){c("#joinErr",t).textContent="That code doesn't look right. Copy it again from Settings on the other phone.";return}D(e)}}};E.cats={html:()=>`
    <section>
      <div class="hero" id="hero"></div>
      <h2 class="sec">Categories</h2>
      <div id="catList" class="list"></div>
      <form id="addCat" class="addrow">
        <input id="catName" placeholder="New category, e.g. Kitchen" dir="auto" autocomplete="off" />
        <button class="btn primary icon-btn" aria-label="Add category">${L("plus")}</button>
      </form>
    </section>`,mount(t){c("#addCat",t).onsubmit=a=>{a.preventDefault();const e=c("#catName",t),s=e.value.trim();if(!s)return e.focus();r.store.addCategory(s),e.value=""},c("#catList",t).onclick=a=>{const e=a.target.closest("[data-cat]");e&&I("cat",{catId:e.dataset.cat})}},update(t){const{categories:a,items:e}=r.data,s=C(e,f);c("#hero",t).innerHTML=`
      <div class="hero-label">Total spent</div>
      <div class="hero-total">${g(s.total)}</div>
      <div class="hero-split">${f.map((i,n)=>`<span class="nw"><span class="dot ${n?"b":"a"}"></span>${h(i.name)} ${g(s.paid[i.id])}</span>`).join("")}</div>`,c("#catList",t).innerHTML=a.length?a.map(i=>{const n=e.filter(l=>l.categoryId===i.id),o=C(n,f);return`
          <button class="card row" data-cat="${i.id}">
            <div class="grow">
              <div class="title" dir="auto">${h(i.name)}</div>
              <div class="sub">${n.length} item${n.length===1?"":"s"}</div>
            </div>
            <div class="amt">${g(o.total)}</div>
            ${L("chev")}
          </button>`}).join(""):'<div class="empty">No categories yet. Add one below, like <b>Furniture</b>, <b>Kitchen</b> or <b>Electronics</b>.</div>'}};E.cat={html:()=>`
    <section>
      <div class="bar">
        <button class="btn ghost icon-btn" id="back" aria-label="Back">${L("back")}</button>
        <h1 id="catTitle" class="grow" dir="auto"></h1>
        <button class="btn ghost small" id="catMenu">Edit</button>
      </div>
      <div class="subtotal" id="subtotal"></div>
      <div id="itemList" class="list"></div>
      <form id="addItem" class="card form">
        <div class="lbl">Add item</div>
        <input id="itName" placeholder="Item, e.g. Fridge" dir="auto" autocomplete="off" />
        <div class="two">
          <input id="itPrice" placeholder="Price" inputmode="decimal" autocomplete="off" />
          ${z("itPayer",r.lastPayer)}
        </div>
        <p class="err" id="itErr"></p>
        <button class="btn primary">Add</button>
      </form>
    </section>`,mount(t){c("#back",t).onclick=()=>I("cats"),c("#catMenu",t).onclick=()=>ut(r.catId),G(t,"itPayer"),c("#addItem",t).onsubmit=a=>{a.preventDefault();const e=c("#itName",t).value.trim(),s=_(c("#itPrice",t).value),i=V(t,"itPayer"),n=c("#itErr",t);if(!e)return n.textContent="Give the item a name.",c("#itName",t).focus();if(s===null)return n.textContent="Enter a valid price, e.g. 1250 or 99.50",c("#itPrice",t).focus();n.textContent="",r.store.addItem({categoryId:r.catId,name:e,price:s,paidBy:i}),r.lastPayer=i,localStorage.setItem("split:lastPayer",i),c("#itName",t).value="",c("#itPrice",t).value="",c("#itName",t).focus()},c("#itemList",t).onclick=a=>{const e=a.target.closest("[data-item]");e&&dt(e.dataset.item)}},update(t){const a=r.data.categories.find(i=>i.id===r.catId);if(!a)return;c("#catTitle",t).textContent=a.name;const e=r.data.items.filter(i=>i.categoryId===a.id),s=C(e,f);c("#subtotal",t).innerHTML=`
      <div><div class="hero-label">Category total</div><div class="sub-total">${g(s.total)}</div></div>
      <div class="mini">${f.map((i,n)=>`<div><span class="dot ${n?"b":"a"}"></span>${h(i.name)} <b>${g(s.paid[i.id])}</b></div>`).join("")}</div>`,c("#itemList",t).innerHTML=e.length?e.map(rt).join(""):'<div class="empty">No items yet. Add the first one below.</div>'}};function rt(t){const a=f.findIndex(e=>e.id===t.paidBy);return`
    <button class="card row item" data-item="${t.id}">
      <div class="grow"><div class="title" dir="auto">${h(t.name)}</div></div>
      <span class="pill ${a===1?"b":"a"}">${h(N(t.paidBy).name)}</span>
      <div class="amt">${g(t.price)}</div>
    </button>`}function z(t,a){return`<div class="seg" data-seg="${t}" role="radiogroup" aria-label="Paid by">
    ${f.map((e,s)=>`<button type="button" role="radio" data-val="${e.id}" class="${s?"b":"a"} ${e.id===a?"on":""}" aria-checked="${e.id===a}">${h(e.name)}</button>`).join("")}
  </div>`}function G(t,a){const e=t.querySelector(`[data-seg="${a}"]`);e.onclick=s=>{const i=s.target.closest("button[data-val]");i&&e.querySelectorAll("button").forEach(n=>{n.classList.toggle("on",n===i),n.setAttribute("aria-checked",n===i)})}}const V=(t,a)=>t.querySelector(`[data-seg="${a}"] button.on`)?.dataset.val||f[0].id;E.summary={html:()=>`
    <section>
      <h1>Summary</h1>
      <div id="settle"></div>
      <div id="breakdown"></div>
    </section>`,update(t){const{categories:a,items:e}=r.data,s=C(e,f),i=q(e,f),n=Math.round(s.total/2);c("#settle",t).innerHTML=`
      <div class="card settle">
        <div class="hero-label">Grand total</div>
        <div class="hero-total">${g(s.total)}</div>
        <div class="each">Each person's share (50%): <b>${g(n)}</b></div>
        <div class="paid">
          ${f.map((o,l)=>`
            <div class="paid-box ${l?"b":"a"}">
              <div class="who">${h(o.name)} paid</div>
              <div class="v">${g(s.paid[o.id])}</div>
            </div>`).join("")}
        </div>
        <div class="verdict ${i?"":"even"}" id="verdict">
          ${i?`<b>${h(i.from.name)}</b> should pay <b>${h(i.to.name)}</b><div class="v">${g(i.amount)}</div>`:s.total?"You're even. Nobody owes anything.":"Add items to see who owes whom."}
        </div>
      </div>`,c("#breakdown",t).innerHTML=a.length?'<h2 class="sec">By category</h2>'+a.map(o=>{const l=e.filter(m=>m.categoryId===o.id),u=C(l,f);return`
          <details class="card group" open>
            <summary>
              <span class="title grow" dir="auto">${h(o.name)}</span>
              <span class="amt">${g(u.total)}</span>
            </summary>
            <div class="glines">
              ${l.map(m=>`
                <div class="gline">
                  <span class="grow" dir="auto">${h(m.name)}</span>
                  <span class="pill ${f.findIndex(p=>p.id===m.paidBy)===1?"b":"a"}">${h(N(m.paidBy).name)}</span>
                  <span class="amt">${g(m.price)}</span>
                </div>`).join("")||'<div class="gline muted">No items</div>'}
              <div class="gline foot">
                ${f.map((m,p)=>`<span><span class="dot ${p?"b":"a"}"></span>${h(m.name)} ${g(u.paid[m.id])}</span>`).join("")}
              </div>
            </div>
          </details>`}).join(""):""}};E.settings={html:()=>{const t=localStorage.getItem(k),a=r.store?.mode==="firebase";return`
    <section>
      <h1>Settings</h1>
      <div class="card form">
        <div class="lbl">Invite ${h(f[1].name)}</div>
        <p class="muted small">${a?"Send this link to the other phone. Opening it joins this same list.":"Syncing is off until Firebase is set up in config.js, so a join link won't share data yet."}</p>
        <div class="codebox" id="codebox">${h(t)}</div>
        <div class="two">
          <button class="btn" id="copyLink">Copy join link</button>
          <button class="btn" id="share">Share…</button>
        </div>
        <p class="ok-msg" id="copied"></p>
      </div>
      <div class="card form">
        <div class="lbl">Backup</div>
        <button class="btn" id="csv">Export to Excel (CSV)</button>
      </div>
      <div class="card form">
        <div class="lbl">This phone</div>
        <p class="muted small">Leaving only disconnects this phone. The list stays saved and the other phone keeps it.</p>
        <button class="btn danger" id="leave">Leave this list</button>
      </div>
      <p class="muted small center">Youssef &amp; Samar Home · ${a?"Cloud sync on":"Local mode"}</p>
    </section>`},mount(t){const a=localStorage.getItem(k),e=st(a),s=i=>{c("#copied",t).textContent=i,setTimeout(()=>c("#copied",t).textContent="",2500)};c("#copyLink",t).onclick=async()=>{try{await navigator.clipboard.writeText(e),s("Link copied ✓")}catch{prompt("Copy this link:",e)}},c("#share",t).onclick=async()=>{if(navigator.share)try{await navigator.share({title:"Youssef & Samar Home",text:"Join our shared list:",url:e})}catch{}else c("#copyLink",t).click()},c("#csv",t).onclick=lt,c("#leave",t).onclick=()=>{confirm("Disconnect this phone from the list? You can rejoin with the link.")&&(localStorage.removeItem(k),location.reload())}}};function lt(){const{categories:t,items:a}=r.data,e=u=>`"${String(u).replace(/"/g,'""')}"`,s=[["Category","Item",`Price (${U})`,"Paid by"]];for(const u of t)for(const m of a.filter(p=>p.categoryId===u.id))s.push([u.name,m.name,(m.price/100).toFixed(2),N(m.paidBy).name]);const i=C(a,f),n=q(a,f);s.push([],["Total","",(i.total/100).toFixed(2),""]),f.forEach(u=>s.push([`${u.name} paid`,"",(i.paid[u.id]/100).toFixed(2),""])),s.push([n?`${n.from.name} pays ${n.to.name}`:"Even","",n?(n.amount/100).toFixed(2):"0.00",""]);const o="\uFEFF"+s.map(u=>u.map(e).join(",")).join(`\r
`),l=document.createElement("a");l.href=URL.createObjectURL(new Blob([o],{type:"text/csv;charset=utf-8"})),l.download=`youssef-samar-home-${new Date().toISOString().slice(0,10)}.csv`,l.click(),setTimeout(()=>URL.revokeObjectURL(l.href),1e3)}function Y(t,a){const e=c("#sheet");e.innerHTML=`<div class="sheet-bg"></div><div class="sheet" role="dialog" aria-modal="true">${t}</div>`,e.hidden=!1;const s=()=>{e.hidden=!0,e.innerHTML=""};c(".sheet-bg",e).onclick=s,a(c(".sheet",e),s),c(".sheet input",e)?.focus()}function dt(t){const a=r.data.items.find(e=>e.id===t);a&&Y(`
    <form class="form" id="edit">
      <div class="lbl">Edit item</div>
      <input id="eName" value="${h(a.name)}" dir="auto" />
      <div class="two">
        <input id="ePrice" value="${(a.price/100).toString()}" inputmode="decimal" />
        ${z("ePayer",a.paidBy)}
      </div>
      <label class="lbl" for="eCat">Category</label>
      <select id="eCat">${r.data.categories.map(e=>`<option value="${e.id}" ${e.id===a.categoryId?"selected":""}>${h(e.name)}</option>`).join("")}</select>
      <p class="err" id="eErr"></p>
      <div class="two">
        <button type="button" class="btn danger" id="del">Delete</button>
        <button class="btn primary">Save</button>
      </div>
    </form>`,(e,s)=>{G(e,"ePayer"),c("#del",e).onclick=()=>{confirm(`Delete "${a.name}"?`)&&(r.store.deleteItem(t),s())},c("#edit",e).onsubmit=i=>{i.preventDefault();const n=c("#eName",e).value.trim(),o=_(c("#ePrice",e).value);if(!n||o===null){c("#eErr",e).textContent="Check the name and price.";return}r.store.updateItem(t,{name:n,price:o,paidBy:V(e,"ePayer"),categoryId:c("#eCat",e).value}),s()}})}function ut(t){const a=r.data.categories.find(s=>s.id===t);if(!a)return;const e=r.data.items.filter(s=>s.categoryId===t).length;Y(`
    <form class="form" id="editCat">
      <div class="lbl">Rename category</div>
      <input id="cName" value="${h(a.name)}" dir="auto" />
      <div class="two">
        <button type="button" class="btn danger" id="delCat">Delete</button>
        <button class="btn primary">Save</button>
      </div>
    </form>`,(s,i)=>{c("#delCat",s).onclick=()=>{const n=e?`Delete "${a.name}" and its ${e} item${e===1?"":"s"}?`:`Delete "${a.name}"?`;confirm(n)&&(r.store.deleteCategory(t),i(),I("cats"))},c("#editCat",s).onsubmit=n=>{n.preventDefault();const o=c("#cName",s).value.trim();o&&r.store.renameCategory(t,o),i()}})}async function D(t){localStorage.setItem(k,t);try{r.store=j.firebase?await K(t,j.firebase):F(t)}catch(a){console.error(a),alert("Couldn't start cloud sync. Check the Firebase settings in config.js."),r.store=F(t)}r.store.subscribe((a,e)=>{r.data=a,r.status=e,ct()}),ot(),I("cats")}it();const R=localStorage.getItem(k);R?D(R):I("setup");"serviceWorker"in navigator&&location.protocol!=="file:"&&navigator.serviceWorker.register("./sw.js").catch(()=>{});navigator.storage?.persist?.();
