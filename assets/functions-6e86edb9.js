import{c as r}from"./constants-4ca6f893.js";function s(a,t){return a.map(({preview:e,original:l,description:n})=>t(e,l,n)).join("")}const c=(a,t,e)=>`
      <li class="gallery__item">
        <a class="gallery__link" href="${t}">
            <img class="gallery__image" src="${a}" alt="${e}" />
        </a>
      </li>
      `;function i({seconds:a}){localStorage.setItem(r.PLAYER_TIME_KEY,a)}function g(){return localStorage.getItem(r.PLAYER_TIME_KEY)}export{g as a,s as c,c as g,i as t};
//# sourceMappingURL=functions-6e86edb9.js.map
