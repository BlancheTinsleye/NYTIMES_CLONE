const e=document.getElementById("SCIENCE"),t=async()=>{try{let e=await fetch("topstories_science.json");return await e.json()}catch(e){return alert("An error occured",e),[]}},a=t=>{e.innerHTML="";let a=0;(t.results||[]).forEach(t=>{let s=document.createElement("div"),i=document.createElement("div");s.setAttribute("class","article1"),i.setAttribute("class","article2");let n="";if(t.multimedia&&t.multimedia.length>0){let e=t.multimedia.find(e=>"image"===e.type);e&&(n=`
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
      `,e.appendChild(i)),a+=1})};(async()=>{a(await t())})();
//# sourceMappingURL=index.3774a665.js.map
