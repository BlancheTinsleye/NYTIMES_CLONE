const t=document.getElementById("WORLD"),e=async()=>{try{let t=await fetch("topstories_world.json");return await t.json()}catch(t){return alert("An error occured",t),[]}},a=e=>{t.innerHTML="";let a=0;(e.results||[]).forEach(e=>{let s=document.createElement("div"),i=document.createElement("div");s.setAttribute("class","article1"),i.setAttribute("class","article2");let n="";if(e.multimedia&&e.multimedia.length>0){let t=e.multimedia.find(t=>"image"===t.type);t&&(n=`
          <img class="images" src="${t.url}" alt="${t.caption||"news Image"}">
        `)}a%2==0?(s.innerHTML=`
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
      `,t.appendChild(i)),a+=1})};(async()=>{a(await e())})();
//# sourceMappingURL=index.1dd7db14.js.map
