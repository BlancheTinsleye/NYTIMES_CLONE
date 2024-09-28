const t=document.getElementById("SCIENCE"),e=document.getElementById("WORLD"),a=async()=>{try{let t=await fetch("https://api.nytimes.com/svc/topstories/v2/science.json?api-key=bSoOkIDZ5I4Hu65w2Ikvg9ugGBgBCpQp");return await t.json()}catch(t){return alert("An error occured",t),[]}},s=e=>{t.innerHTML="";let a=0;(e.results||[]).forEach(e=>{let s=document.createElement("div"),i=document.createElement("div");s.setAttribute("class","article1"),i.setAttribute("class","article2");let n="";if(e.multimedia&&e.multimedia.length>0){let t=e.multimedia.find(t=>"image"===t.type);t&&(n=`
          <img class="images" src="${t.url}" alt="${t.caption||"news Image"}">
        `)}a%2==0?(s.innerHTML=`
      <h2 id="scie_cont">S C I E N C E</h2>
        <div class="news_cont1">
          <div class = "left">${n}</div>
          <div class = "info_cont1">
            <h3>${e?.title}</h3>
            <p><span>SECTION:</span> ${e?.section}</p>
            <p><span>ABSTRACT:</span> ${e?.abstract}</p>
            <p id="dates"><span>DATE CREATED:</span> ${e?.created_date}</p>
            <p id="dates"><span>PUBLISHED:</span> ${e?.published_date}</p>
          </div>
        </div>
      `,t.appendChild(s)):(i.innerHTML=`
      <h2 id="world_cont">W O R L D</h2>
        <div class="news_cont2">
          <div class = "right">${n}</div>
          <div class = "info_cont2">
          <h3>${e?.title}</h3>
            <p><span>SECTION:</span> ${e?.section}</p>
            <p><span>ABSTRACT:</span> ${e?.abstract}</p>
            <p id="dates"><span>DATE CREATED:</span> ${e?.created_date}</p>
            <p id="dates"><span>PUBLISHED:</span> ${e?.published_date}</p>
          </div>
        </div>
      `,t.appendChild(i)),a+=1})};(async()=>{s(await a())})();const i=async()=>{try{let t=await fetch("https://api.nytimes.com/svc/topstories/v2/science.json?api-key=bSoOkIDZ5I4Hu65w2Ikvg9ugGBgBCpQp");return await t.json()}catch(t){return alert("An error occured",t),[]}},n=t=>{e.innerHTML="";let a=0;(t.results||[]).forEach(t=>{let s=document.createElement("div"),i=document.createElement("div");s.setAttribute("class","article1"),i.setAttribute("class","article2");let n="";if(t.multimedia&&t.multimedia.length>0){let e=t.multimedia.find(t=>"image"===t.type);e&&(n=`
                <img class="images" src="${e.url}" alt="${e.caption||"news Image"}">
            `)}a%2==0?(s.innerHTML=`
                <div class="news_cont1">
                <div class = "left">${n}</div>
                <div class = "info_cont1">
                <h3>${t?.title}</h3>
                <p><span>SECTION:</span> ${t?.section}</p>
                <p><span>ABSTRACT:</span> ${t?.abstract}</p>
                <p id="dates"><span>DATE CREATED:</span> ${t?.created_date}</p>
                <p id="dates"><span>PUBLISHED:</span> ${t?.published_date}</p>
                </div>
            </div>
            `,e.appendChild(s)):(i.innerHTML=`
                <div class="news_cont2">
                <div class = "right">${n}</div>
                <div class = "info_cont2">
                <h3>${t?.title}</h3>
                    <p><span>SECTION:</span> ${t?.section}</p>
                    <p><span>ABSTRACT:</span> ${t?.abstract}</p>
                    <p id="dates"><span>DATE CREATED:</span> ${t?.created_date}</p>
                    <p id="dates"><span>PUBLISHED:</span> ${t?.published_date}</p>
                </div>
                </div>
            `,e.appendChild(i)),a+=1})};(async()=>{n(await i())})();
//# sourceMappingURL=index.e07eb204.js.map
