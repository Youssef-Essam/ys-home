const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index.esm-DzchPxbc.js","./index.esm2017-BHYo8ZpE.js","./index.esm-DEUZw1Tm.js"])))=>i.map(i=>d[i]);
(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const o of c.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerPolicy&&(c.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?c.credentials="include":n.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(n){if(n.ep)return;n.ep=!0;const c=e(n);fetch(n.href,c)}})();const Z="modulepreload",tt=function(t,a){return new URL(t,a).href},q={},U=function(a,e,s){let n=Promise.resolve();if(e&&e.length>0){let o=function(p){return Promise.all(p.map(y=>Promise.resolve(y).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};const l=document.getElementsByTagName("link"),v=document.querySelector("meta[property=csp-nonce]"),d=v?.nonce||v?.getAttribute("nonce");n=o(e.map(p=>{if(p=tt(p,s),p in q)return;q[p]=!0;const y=p.endsWith(".css"),h=y?'[rel="stylesheet"]':"";if(!!s)for(let I=l.length-1;I>=0;I--){const w=l[I];if(w.href===p&&(!y||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${p}"]${h}`))return;const $=document.createElement("link");if($.rel=y?"stylesheet":Z,y||($.as="script"),$.crossOrigin="",$.href=p,d&&$.setAttribute("nonce",d),document.head.appendChild($),y)return new Promise((I,w)=>{$.addEventListener("load",I),$.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${p}`)))})}))}function c(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return n.then(o=>{for(const l of o||[])l.status==="rejected"&&c(l.reason);return a().catch(c)})},z=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,10);function B(t,a){return(t.createdAt||0)-(a.createdAt||0)}function Y(t){const a=`split:data:${t}`;let e={categories:[],items:[]};try{const o=localStorage.getItem(a);o&&(e=JSON.parse(o))}catch{}const s=new Set,n=()=>{localStorage.setItem(a,JSON.stringify(e)),c()},c=()=>{const o={categories:[...e.categories].sort(B),items:[...e.items].sort(B)};s.forEach(l=>l(o,{pending:!1,fromCache:!1}))};return{mode:"local",subscribe(o){return s.add(o),queueMicrotask(c),()=>s.delete(o)},addCategory(o){const l={id:z(),name:o,createdAt:Date.now()};return e.categories.push(l),n(),l.id},renameCategory(o,l){const v=e.categories.find(d=>d.id===o);v&&(v.name=l),n()},deleteCategory(o){e.categories=e.categories.filter(l=>l.id!==o),e.items=e.items.filter(l=>l.categoryId!==o),n()},addItem(o){e.items.push({...o,id:z(),createdAt:Date.now()}),n()},updateItem(o,l){const v=e.items.find(d=>d.id===o);v&&Object.assign(v,l),n()},deleteItem(o){e.items=e.items.filter(l=>l.id!==o),n()}}}async function et(t,a){const{initializeApp:e}=await U(async()=>{const{initializeApp:f}=await import("./index.esm-DzchPxbc.js");return{initializeApp:f}},__vite__mapDeps([0,1]),import.meta.url),s=await U(()=>import("./index.esm-DEUZw1Tm.js"),__vite__mapDeps([2,1]),import.meta.url),n=e(a),c=s.initializeFirestore(n,{localCache:s.persistentLocalCache({tabManager:s.persistentMultipleTabManager()})}),o=["households",t],l=s.collection(c,...o,"categories"),v=s.collection(c,...o,"items");let d={categories:[],items:[]},p={cats:null,items:null};const y=new Set,h=()=>{if(!p.cats||!p.items)return;const f={pending:p.cats.hasPendingWrites||p.items.hasPendingWrites,fromCache:p.cats.fromCache&&p.items.fromCache};y.forEach(g=>g(d,f))},k=f=>f.docs.map(g=>({id:g.id,...g.data()})).sort(B);let $=!1;const I=()=>{$||($=!0,s.onSnapshot(l,{includeMetadataChanges:!0},f=>{d={...d,categories:k(f)},p.cats=f.metadata,h()}),s.onSnapshot(v,{includeMetadataChanges:!0},f=>{d={...d,items:k(f)},p.items=f.metadata,h()}))},w=f=>f.catch(g=>console.error("Sync error",g));return{mode:"firebase",subscribe(f){return y.add(f),I(),h(),()=>y.delete(f)},addCategory(f){const g=s.doc(l);return w(s.setDoc(g,{name:f,createdAt:Date.now()})),g.id},renameCategory(f,g){w(s.updateDoc(s.doc(l,f),{name:g}))},deleteCategory(f){const g=s.writeBatch(c);g.delete(s.doc(l,f)),d.items.filter(N=>N.categoryId===f).forEach(N=>g.delete(s.doc(v,N.id))),w(g.commit())},addItem(f){w(s.setDoc(s.doc(v),{...f,createdAt:Date.now()}))},updateItem(f,g){w(s.updateDoc(s.doc(v,f),g))},deleteItem(f){w(s.deleteDoc(s.doc(v,f)))}}}const at="٠١٢٣٤٥٦٧٨٩",st="۰۱۲۳۴۵۶۷۸۹";function A(t){let a=String(t??"").trim();return a=a.replace(/[٠-٩]/g,e=>at.indexOf(e)),a=a.replace(/[۰-۹]/g,e=>st.indexOf(e)),a=a.replace(/٫/g,".").replace(/[,\s٬]/g,""),/^\d+(\.\d{0,2})?$|^\.\d{1,2}$/.test(a)?Math.round(parseFloat(a)*100):null}const nt=new Intl.NumberFormat("en-US",{maximumFractionDigits:0}),it=new Intl.NumberFormat("en-US",{minimumFractionDigits:2,maximumFractionDigits:2});function ot(t,a=""){const e=t||0,s=(e%100===0?nt:it).format(e/100);return a?`${s} ${a}`:s}function E(t,a){const e=Object.fromEntries(a.map(n=>[n.id,0]));let s=0;for(const n of t)s+=n.price||0,n.paidBy in e&&(e[n.paidBy]+=n.price||0);return{total:s,paid:e}}function W(t,a){const e=Object.fromEntries(a.map(s=>[s.id,0]));for(const s of t)s.paidBy in e&&(e[s.paidBy]+=s.price||0);return e}function L(t,a,e=[]){const[s,n]=a,{paid:c}=E(t,a),o=W(e,a),l=(c[s.id]-c[n.id])/2,v=Math.round(l-o[n.id]+o[s.id]);return v===0?null:v>0?{from:n,to:s,amount:v}:{from:s,to:n,amount:-v}}const j=window.SPLIT_CONFIG||{},m=j.people?.length===2?j.people:[{id:"youssef",name:"Youssef"},{id:"samar",name:"Samar"}],H=j.currency||"EGP",T=t=>m.find(a=>a.id===t)||{id:t,name:t},b=t=>ot(t,H),i=(t,a=document)=>a.querySelector(t),u=t=>String(t??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a]),r={store:null,data:{categories:[],items:[],payments:[]},status:{pending:!1,fromCache:!0},online:navigator.onLine,view:"cats",catId:null,lastPayer:localStorage.getItem("split:lastPayer")||m[0].id},x="split:household";function ct(){const t="abcdefghjkmnpqrstuvwxyz23456789",a=crypto.getRandomValues(new Uint8Array(24));return Array.from(a,e=>t[e%t.length]).join("")}function rt(t){return`${location.origin}${location.pathname}#join=${t}`}function dt(){const t=location.hash.match(/join=([a-z0-9]{20,})/i);t&&(localStorage.setItem(x,t[1].toLowerCase()),history.replaceState(null,"",location.pathname+location.search))}const lt=i("#app");lt.innerHTML=`
  <header class="top">
    <div class="brand">Youssef &amp; Samar <span>Home</span></div>
    <div id="sync" class="sync"></div>
  </header>
  <div id="banner"></div>
  <main id="view"></main>
  <nav class="tabs" id="tabs">
    <button data-tab="cats">${C("grid")}<span>Categories</span></button>
    <button data-tab="summary">${C("sum")}<span>Summary</span></button>
    <button data-tab="settings">${C("gear")}<span>Settings</span></button>
  </nav>
  <div id="sheet" class="sheet-wrap" hidden></div>
`;i("#tabs").addEventListener("click",t=>{const a=t.target.closest("button[data-tab]");a&&S(a.dataset.tab)});window.addEventListener("online",()=>{r.online=!0,F()});window.addEventListener("offline",()=>{r.online=!1,F()});function C(t){return`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${{grid:'<rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/>',sum:'<path d="M18 4H6l6 8-6 8h12"/>',gear:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',back:'<path d="M15 18l-6-6 6-6"/>',chev:'<path d="M9 18l6-6-6-6"/>',plus:'<path d="M12 5v14M5 12h14"/>'}[t]}</svg>`}function F(){const t=i("#sync");if(!r.store){t.innerHTML="";return}let a,e;r.store.mode==="local"?(a="local",e="This phone only"):r.online?r.status.pending?(a="busy",e="Syncing…"):(a="ok",e="Synced"):(a="off",e=r.status.pending?"Offline · will sync":"Offline"),t.className=`sync ${a}`,t.innerHTML=`<i></i>${e}`}function ut(){i("#banner").innerHTML=r.store?.mode==="local"?`<div class="banner">Local mode: data stays on this phone. Add your Firebase config to <code>config.js</code> to sync with ${u(m[1].name)}.</div>`:""}const P={};let D=null;function S(t,a={}){!r.store&&t!=="setup"&&(t="setup"),r.view=t,a.catId!==void 0&&(r.catId=a.catId);const e=t==="cat"||t==="pay"?"cats":t;document.querySelectorAll("#tabs button").forEach(n=>n.classList.toggle("on",n.dataset.tab===e)),i("#tabs").hidden=t==="setup",D=P[t];const s=i("#view");s.innerHTML=D.html(),D.mount?.(s),D.update?.(s),window.scrollTo(0,0)}function mt(){if(F(),r.view==="cat"&&!r.data.categories.some(t=>t.id===r.catId)&&(!r.status.fromCache||r.data.categories.length))return S("cats");D?.update?.(i("#view"))}P.setup={html:()=>`
    <section class="setup">
      <img class="setup-photo" src="./full.jpg" alt="Youssef and Samar" />
      <h1>Youssef &amp; Samar Home</h1>
      <p class="muted">Our shared home costs, split 50/50. Start the list on one phone, then send the join link to the other.</p>
      <button class="btn primary big" id="create">Start a new shared list</button>
      <div class="or"><span>or</span></div>
      <form id="join" class="stack">
        <label class="lbl" for="code">Join with a code</label>
        <input id="code" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Paste the code from the other phone" />
        <button class="btn">Join</button>
        <p class="err" id="joinErr"></p>
      </form>
    </section>`,mount(t){i("#create",t).onclick=()=>O(ct()),i("#join",t).onsubmit=a=>{a.preventDefault();let e=i("#code",t).value.trim().toLowerCase();const s=e.match(/join=([a-z0-9]+)/);if(s&&(e=s[1]),!/^[a-z0-9]{20,}$/.test(e)){i("#joinErr",t).textContent="That code doesn't look right. Copy it again from Settings on the other phone.";return}O(e)}}};P.cats={html:()=>`
    <section>
      <div class="hero photo" id="hero"></div>
      <button class="card row paycard" id="payCard"></button>
      <h2 class="sec">Categories</h2>
      <div id="catList" class="list"></div>
      <form id="addCat" class="addrow">
        <input id="catName" placeholder="New category, e.g. Kitchen" dir="auto" autocomplete="off" />
        <button class="btn primary icon-btn" aria-label="Add category">${C("plus")}</button>
      </form>
    </section>`,mount(t){i("#addCat",t).onsubmit=a=>{a.preventDefault();const e=i("#catName",t),s=e.value.trim();if(!s)return e.focus();r.store.addCategory(s),e.value=""},i("#payCard",t).onclick=()=>S("pay"),i("#catList",t).onclick=a=>{const e=a.target.closest("[data-cat]");e&&S("cat",{catId:e.dataset.cat})}},update(t){const{categories:a,items:e}=r.data,s=E(e,m);i("#hero",t).innerHTML=`
      <div class="hero-label">Total spent</div>
      <div class="hero-total">${b(s.total)}</div>
      <div class="hero-split">${m.map((o,l)=>`<span class="nw"><span class="dot ${l?"b":"a"}"></span>${u(o.name)} ${b(s.paid[o.id])}</span>`).join("")}</div>`;const n=r.data.payments,c=L(e,m,n);i("#payCard",t).innerHTML=`
      <div class="payicon">⇄</div>
      <div class="grow">
        <div class="title">Payments between us</div>
        <div class="sub">${n.length?`${n.length} payment${n.length===1?"":"s"} · `:"Cash or transfers to settle up · "}${c?`${u(c.from.name)} owes ${b(c.amount)}`:"all even"}</div>
      </div>
      ${C("chev")}`,i("#catList",t).innerHTML=a.length?a.map(o=>{const l=e.filter(d=>d.categoryId===o.id),v=E(l,m);return`
          <button class="card row" data-cat="${o.id}">
            <div class="grow">
              <div class="title" dir="auto">${u(o.name)}</div>
              <div class="sub">${l.length} item${l.length===1?"":"s"}</div>
            </div>
            <div class="amt">${b(v.total)}</div>
            ${C("chev")}
          </button>`}).join(""):'<div class="empty">No categories yet. Add one below, like <b>Furniture</b>, <b>Kitchen</b> or <b>Electronics</b>.</div>'}};P.cat={html:()=>`
    <section>
      <div class="bar">
        <button class="btn ghost icon-btn" id="back" aria-label="Back">${C("back")}</button>
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
          ${V("itPayer",r.lastPayer)}
        </div>
        <p class="err" id="itErr"></p>
        <button class="btn primary">Add</button>
      </form>
    </section>`,mount(t){i("#back",t).onclick=()=>S("cats"),i("#catMenu",t).onclick=()=>bt(r.catId),M(t,"itPayer"),i("#addItem",t).onsubmit=a=>{a.preventDefault();const e=i("#itName",t).value.trim(),s=A(i("#itPrice",t).value),n=_(t,"itPayer"),c=i("#itErr",t);if(!e)return c.textContent="Give the item a name.",i("#itName",t).focus();if(s===null)return c.textContent="Enter a valid price, e.g. 1250 or 99.50",i("#itPrice",t).focus();c.textContent="",r.store.addItem({categoryId:r.catId,name:e,price:s,paidBy:n}),r.lastPayer=n,localStorage.setItem("split:lastPayer",n),i("#itName",t).value="",i("#itPrice",t).value="",i("#itName",t).focus()},i("#itemList",t).onclick=a=>{const e=a.target.closest("[data-item]");e&&ht(e.dataset.item)}},update(t){const a=r.data.categories.find(n=>n.id===r.catId);if(!a)return;i("#catTitle",t).textContent=a.name;const e=r.data.items.filter(n=>n.categoryId===a.id),s=E(e,m);i("#subtotal",t).innerHTML=`
      <div><div class="hero-label">Category total</div><div class="sub-total">${b(s.total)}</div></div>
      <div class="mini">${m.map((n,c)=>`<div><span class="dot ${c?"b":"a"}"></span>${u(n.name)} <b>${b(s.paid[n.id])}</b></div>`).join("")}</div>`,i("#itemList",t).innerHTML=e.length?e.map(pt).join(""):'<div class="empty">No items yet. Add the first one below.</div>'}};function pt(t){const a=m.findIndex(e=>e.id===t.paidBy);return`
    <button class="card row item" data-item="${t.id}">
      <div class="grow"><div class="title" dir="auto">${u(t.name)}</div></div>
      <span class="pill ${a===1?"b":"a"}">${u(T(t.paidBy).name)}</span>
      <div class="amt">${b(t.price)}</div>
    </button>`}function V(t,a){return`<div class="seg" data-seg="${t}" role="radiogroup" aria-label="Paid by">
    ${m.map((e,s)=>`<button type="button" role="radio" data-val="${e.id}" class="${s?"b":"a"} ${e.id===a?"on":""}" aria-checked="${e.id===a}">${u(e.name)}</button>`).join("")}
  </div>`}function M(t,a){const e=t.querySelector(`[data-seg="${a}"]`);e.onclick=s=>{const n=s.target.closest("button[data-val]");n&&e.querySelectorAll("button").forEach(c=>{c.classList.toggle("on",c===n),c.setAttribute("aria-checked",c===n)})}}const _=(t,a)=>t.querySelector(`[data-seg="${a}"] button.on`)?.dataset.val||m[0].id;P.summary={html:()=>`
    <section>
      <h1>Summary</h1>
      <div id="settle"></div>
      <div id="breakdown"></div>
    </section>`,update(t){const{categories:a,items:e}=r.data,s=E(e,m),n=r.data.payments,c=L(e,m,n),o=L(e,m),l=W(n,m),v=Math.round(s.total/2);i("#settle",t).innerHTML=`
      <div class="card settle">
        <div class="hero-label">Grand total</div>
        <div class="hero-total">${b(s.total)}</div>
        <div class="each">Each person's share (50%): <b>${b(v)}</b></div>
        <div class="paid">
          ${m.map((d,p)=>`
            <div class="paid-box ${p?"b":"a"}">
              <div class="who">${u(d.name)} paid</div>
              <div class="v">${b(s.paid[d.id])}</div>
            </div>`).join("")}
        </div>
        ${n.length?`
        <div class="paylines">
          <div class="pl"><span>From purchases</span><b>${o?`${u(o.from.name)} owes ${b(o.amount)}`:"Even"}</b></div>
          ${m.filter(d=>l[d.id]).map(d=>`
          <div class="pl"><span>${u(d.name)} already paid ${u(m.find(p=>p.id!==d.id).name)}</span><b>− ${b(l[d.id])}</b></div>`).join("")}
        </div>`:""}
        <div class="verdict ${c?"":"even"}" id="verdict">
          ${c?`${n.length?"Still to pay: ":""}<b>${u(c.from.name)}</b> should pay <b>${u(c.to.name)}</b><div class="v">${b(c.amount)}</div>`:s.total||n.length?"You're even. Nobody owes anything. 🎉":"Add items to see who owes whom."}
        </div>
      </div>`,i("#breakdown",t).innerHTML=a.length?'<h2 class="sec">By category</h2>'+a.map(d=>{const p=e.filter(h=>h.categoryId===d.id),y=E(p,m);return`
          <details class="card group" open>
            <summary>
              <span class="title grow" dir="auto">${u(d.name)}</span>
              <span class="amt">${b(y.total)}</span>
            </summary>
            <div class="glines">
              ${p.map(h=>`
                <div class="gline">
                  <span class="grow" dir="auto">${u(h.name)}</span>
                  <span class="pill ${m.findIndex(k=>k.id===h.paidBy)===1?"b":"a"}">${u(T(h.paidBy).name)}</span>
                  <span class="amt">${b(h.price)}</span>
                </div>`).join("")||'<div class="gline muted">No items</div>'}
              <div class="gline foot">
                ${m.map((h,k)=>`<span><span class="dot ${k?"b":"a"}"></span>${u(h.name)} ${b(y.paid[h.id])}</span>`).join("")}
              </div>
            </div>
          </details>`}).join(""):"",n.length&&(i("#breakdown",t).innerHTML+=`
        <h2 class="sec">Payments between us</h2>
        <div class="card group"><div class="glines" style="border:0">
          ${n.map(d=>`
            <div class="gline">
              <span class="grow">${K(d)}${d.name?` <span class="muted small" dir="auto">· ${u(d.name)}</span>`:""}</span>
              <span class="amt">${b(d.price)}</span>
            </div>`).join("")}
        </div></div>`)}};const J=t=>m.find(a=>a.id!==t)||m[1],K=t=>`<b class="${m.findIndex(a=>a.id===t.paidBy)===1?"tb":"ta"}">${u(T(t.paidBy).name)}</b> → ${u(J(t.paidBy).name)}`,Q=t=>t?new Date(t).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"}):"";function X(t,a){const[e,s]=m;return`<div class="seg stacked" data-seg="${t}" role="radiogroup" aria-label="Who paid whom">
    <button type="button" role="radio" data-val="${s.id}" class="b ${a===s.id?"on":""}">${u(s.name)} paid ${u(e.name)}</button>
    <button type="button" role="radio" data-val="${e.id}" class="a ${a===e.id?"on":""}">${u(e.name)} paid ${u(s.name)}</button>
  </div>`}P.pay={html:()=>`
    <section>
      <div class="bar">
        <button class="btn ghost icon-btn" id="back" aria-label="Back">${C("back")}</button>
        <h1 class="grow">Payments between us</h1>
      </div>
      <p class="muted small" style="margin:-4px 4px 12px">Money you hand each other directly (cash, InstaPay, transfer). These don't count as spending. They reduce what's owed in the Summary.</p>
      <div class="subtotal" id="payStatus"></div>
      <div id="payList" class="list"></div>
      <form id="addPay" class="card form">
        <div class="lbl">Record a payment</div>
        ${X("pDir","")}
        <div class="two">
          <input id="pAmt" placeholder="Amount" inputmode="decimal" autocomplete="off" />
          <button type="button" class="btn" id="pFill">Full amount owed</button>
        </div>
        <input id="pNote" placeholder="Note (optional), e.g. Cash" dir="auto" autocomplete="off" />
        <p class="err" id="pErr"></p>
        <button class="btn primary">Save payment</button>
      </form>
    </section>`,mount(t){i("#back",t).onclick=()=>S("cats"),M(t,"pDir");const a=L(r.data.items,m,r.data.payments),e=a?a.from.id:m[1].id;t.querySelector(`[data-seg="pDir"] button[data-val="${e}"]`)?.click(),i("#pFill",t).onclick=()=>{const s=L(r.data.items,m,r.data.payments);if(!s){i("#pErr",t).textContent="Nobody owes anything right now.";return}t.querySelector(`[data-seg="pDir"] button[data-val="${s.from.id}"]`).click(),i("#pAmt",t).value=(s.amount/100).toString(),i("#pErr",t).textContent=""},i("#addPay",t).onsubmit=s=>{s.preventDefault();const n=t.querySelector('[data-seg="pDir"] button.on')?.dataset.val,c=A(i("#pAmt",t).value),o=i("#pErr",t);if(!n){o.textContent="Choose who paid whom.";return}if(!c)return o.textContent="Enter the amount, e.g. 5000",i("#pAmt",t).focus();o.textContent="",r.store.addItem({kind:"payment",categoryId:"__payments__",name:i("#pNote",t).value.trim(),price:c,paidBy:n}),i("#pAmt",t).value="",i("#pNote",t).value=""},i("#payList",t).onclick=s=>{const n=s.target.closest("[data-pay]");n&&ft(n.dataset.pay)}},update(t){const a=r.data.payments,e=L(r.data.items,m,a);i("#payStatus",t).innerHTML=`
      <div><div class="hero-label">Still to settle</div>
      <div class="sub-total">${e?b(e.amount):"All even 🎉"}</div></div>
      <div class="mini">${e?`<div><b>${u(e.from.name)}</b> → ${u(e.to.name)}</div>`:""}</div>`,i("#payList",t).innerHTML=a.length?[...a].reverse().map(s=>`
        <button class="card row item" data-pay="${s.id}">
          <div class="grow">
            <div class="title">${K(s)}</div>
            <div class="sub" dir="auto">${u([s.name,Q(s.createdAt)].filter(Boolean).join(" · "))}</div>
          </div>
          <div class="amt">${b(s.price)}</div>
        </button>`).join(""):'<div class="empty">No payments yet. When one of you hands the other money, record it here.</div>'}};function ft(t){const a=r.data.payments.find(e=>e.id===t);a&&R(`
    <form class="form" id="editPay">
      <div class="lbl">Edit payment</div>
      ${X("epDir",a.paidBy)}
      <input id="epAmt" value="${(a.price/100).toString()}" inputmode="decimal" />
      <input id="epNote" value="${u(a.name)}" placeholder="Note (optional)" dir="auto" />
      <p class="err" id="epErr"></p>
      <div class="two">
        <button type="button" class="btn danger" id="del">Delete</button>
        <button class="btn primary">Save</button>
      </div>
    </form>`,(e,s)=>{M(e,"epDir"),i("#del",e).onclick=()=>{confirm("Delete this payment?")&&(r.store.deleteItem(t),s())},i("#editPay",e).onsubmit=n=>{n.preventDefault();const c=A(i("#epAmt",e).value);if(!c){i("#epErr",e).textContent="Enter a valid amount.";return}r.store.updateItem(t,{price:c,name:i("#epNote",e).value.trim(),paidBy:_(e,"epDir")}),s()}})}P.settings={html:()=>{const t=localStorage.getItem(x),a=r.store?.mode==="firebase";return`
    <section>
      <h1>Settings</h1>
      <div class="card form">
        <div class="lbl">Invite ${u(m[1].name)}</div>
        <p class="muted small">${a?"Send this link to the other phone. Opening it joins this same list.":"Syncing is off until Firebase is set up in config.js, so a join link won't share data yet."}</p>
        <div class="codebox" id="codebox">${u(t)}</div>
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
    </section>`},mount(t){const a=localStorage.getItem(x),e=rt(a),s=n=>{i("#copied",t).textContent=n,setTimeout(()=>i("#copied",t).textContent="",2500)};i("#copyLink",t).onclick=async()=>{try{await navigator.clipboard.writeText(e),s("Link copied ✓")}catch{prompt("Copy this link:",e)}},i("#share",t).onclick=async()=>{if(navigator.share)try{await navigator.share({title:"Youssef & Samar Home",text:"Join our shared list:",url:e})}catch{}else i("#copyLink",t).click()},i("#csv",t).onclick=vt,i("#leave",t).onclick=()=>{confirm("Disconnect this phone from the list? You can rejoin with the link.")&&(localStorage.removeItem(x),location.reload())}}};function vt(){const{categories:t,items:a}=r.data,e=d=>`"${String(d).replace(/"/g,'""')}"`,s=[["Category","Item",`Price (${H})`,"Paid by"]];for(const d of t)for(const p of a.filter(y=>y.categoryId===d.id))s.push([d.name,p.name,(p.price/100).toFixed(2),T(p.paidBy).name]);const n=r.data.payments;if(n.length){s.push([],["Payments between us","Note",`Amount (${H})`,"From → To"]);for(const d of n)s.push([Q(d.createdAt),d.name||"",(d.price/100).toFixed(2),`${T(d.paidBy).name} → ${J(d.paidBy).name}`])}const c=E(a,m),o=L(a,m,n);s.push([],["Total","",(c.total/100).toFixed(2),""]),m.forEach(d=>s.push([`${d.name} paid`,"",(c.paid[d.id]/100).toFixed(2),""])),s.push([o?`${o.from.name} still pays ${o.to.name}`:"Even","",o?(o.amount/100).toFixed(2):"0.00",""]);const l="\uFEFF"+s.map(d=>d.map(e).join(",")).join(`\r
`),v=document.createElement("a");v.href=URL.createObjectURL(new Blob([l],{type:"text/csv;charset=utf-8"})),v.download=`youssef-samar-home-${new Date().toISOString().slice(0,10)}.csv`,v.click(),setTimeout(()=>URL.revokeObjectURL(v.href),1e3)}function R(t,a){const e=i("#sheet");e.innerHTML=`<div class="sheet-bg"></div><div class="sheet" role="dialog" aria-modal="true">${t}</div>`,e.hidden=!1;const s=()=>{e.hidden=!0,e.innerHTML=""};i(".sheet-bg",e).onclick=s,a(i(".sheet",e),s),i(".sheet input",e)?.focus()}function ht(t){const a=r.data.items.find(e=>e.id===t);a&&R(`
    <form class="form" id="edit">
      <div class="lbl">Edit item</div>
      <input id="eName" value="${u(a.name)}" dir="auto" />
      <div class="two">
        <input id="ePrice" value="${(a.price/100).toString()}" inputmode="decimal" />
        ${V("ePayer",a.paidBy)}
      </div>
      <label class="lbl" for="eCat">Category</label>
      <select id="eCat">${r.data.categories.map(e=>`<option value="${e.id}" ${e.id===a.categoryId?"selected":""}>${u(e.name)}</option>`).join("")}</select>
      <p class="err" id="eErr"></p>
      <div class="two">
        <button type="button" class="btn danger" id="del">Delete</button>
        <button class="btn primary">Save</button>
      </div>
    </form>`,(e,s)=>{M(e,"ePayer"),i("#del",e).onclick=()=>{confirm(`Delete "${a.name}"?`)&&(r.store.deleteItem(t),s())},i("#edit",e).onsubmit=n=>{n.preventDefault();const c=i("#eName",e).value.trim(),o=A(i("#ePrice",e).value);if(!c||o===null){i("#eErr",e).textContent="Check the name and price.";return}r.store.updateItem(t,{name:c,price:o,paidBy:_(e,"ePayer"),categoryId:i("#eCat",e).value}),s()}})}function bt(t){const a=r.data.categories.find(s=>s.id===t);if(!a)return;const e=r.data.items.filter(s=>s.categoryId===t).length;R(`
    <form class="form" id="editCat">
      <div class="lbl">Rename category</div>
      <input id="cName" value="${u(a.name)}" dir="auto" />
      <div class="two">
        <button type="button" class="btn danger" id="delCat">Delete</button>
        <button class="btn primary">Save</button>
      </div>
    </form>`,(s,n)=>{i("#delCat",s).onclick=()=>{const c=e?`Delete "${a.name}" and its ${e} item${e===1?"":"s"}?`:`Delete "${a.name}"?`;confirm(c)&&(r.store.deleteCategory(t),n(),S("cats"))},i("#editCat",s).onsubmit=c=>{c.preventDefault();const o=i("#cName",s).value.trim();o&&r.store.renameCategory(t,o),n()}})}async function O(t){localStorage.setItem(x,t);try{r.store=j.firebase?await et(t,j.firebase):Y(t)}catch(a){console.error(a),alert("Couldn't start cloud sync. Check the Firebase settings in config.js."),r.store=Y(t)}r.store.subscribe((a,e)=>{r.data={categories:a.categories,items:a.items.filter(s=>s.kind!=="payment"),payments:a.items.filter(s=>s.kind==="payment")},r.status=e,mt()}),ut(),S("cats")}dt();const G=localStorage.getItem(x);G?O(G):S("setup");"serviceWorker"in navigator&&location.protocol!=="file:"&&navigator.serviceWorker.register("./sw.js").catch(()=>{});navigator.storage?.persist?.();
