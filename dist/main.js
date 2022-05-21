(()=>{"use strict";var e={735:(e,n,t)=>{t.d(n,{Z:()=>s});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([e.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""]);const s=a},28:(e,n,t)=>{t.d(n,{Z:()=>s});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([e.id,"/* || General styles */\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nh1,\ntable {\n  text-align: center;\n}\n\nmain {\n  flex-direction: column;\n  align-items: center;\n}\n\n.flex {\n  display: flex;\n}\n\n/* || Form */\n#bookFormSection {\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nform {\n  width: 25%;\n  display: flex;\n  flex-direction: column;\n}\n\nlabel {\n  font-weight: bold;\n}\n\ninput {\n  margin: 0.25rem 0;\n}\n\ninput:invalid {\n  background-color: #ff000050;\n}\n\ninput:valid {\n  background-color: #00800050;\n}\n\n/* || Table */\ntable,\nth,\ntd {\n  width: 90%;\n  table-layout: fixed;\n}\n\nth,\ntd {\n  padding: 0.5rem 1rem;\n}\n\n.bookOptionsCell {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.hidden {\n  display: none;\n}",""]);const s=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);o&&a[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),n.push(c))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var i={},a=[],s=0;s<e.length;s++){var l=e[s],d=o.base?l[0]+o.base:l[0],c=i[d]||0,u="".concat(d," ").concat(c);i[d]=c+1;var m=t(u),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==m)n[m].references++,n[m].updater(h);else{var g=r(h,o);o.byIndex=s,n.splice(s,0,{identifier:u,updater:g,references:1})}a.push(u)}return a}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=t(i[a]);n[s].references--}for(var l=o(e,r),d=0;d<i.length;d++){var c=t(i[d]);0===n[c].references&&(n[c].updater(),n.splice(c,1))}i=l}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,exports:{}};return e[o](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),i=t(569),a=t.n(i),s=t(565),l=t.n(s),d=t(216),c=t.n(d),u=t(589),m=t.n(u),h=t(735),g={};g.styleTagTransform=m(),g.setAttributes=l(),g.insert=a().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=c(),n()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;var f=t(28),p={};p.styleTagTransform=m(),p.setAttributes=l(),p.insert=a().bind(null,"head"),p.domAPI=r(),p.insertStyleElement=c(),n()(f.Z,p),f.Z&&f.Z.locals&&f.Z.locals;var b,y=new Uint8Array(16);function k(){if(!b&&!(b="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return b(y)}const v=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,B=function(e){return"string"==typeof e&&v.test(e)};for(var S=[],E=0;E<256;++E)S.push((E+256).toString(16).substr(1));const I=function(e,n,t){var o=(e=e||{}).random||(e.rng||k)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,n){t=t||0;for(var r=0;r<16;++r)n[t+r]=o[r];return n}return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=(S[e[n+0]]+S[e[n+1]]+S[e[n+2]]+S[e[n+3]]+"-"+S[e[n+4]]+S[e[n+5]]+"-"+S[e[n+6]]+S[e[n+7]]+"-"+S[e[n+8]]+S[e[n+9]]+"-"+S[e[n+10]]+S[e[n+11]]+S[e[n+12]]+S[e[n+13]]+S[e[n+14]]+S[e[n+15]]).toLowerCase();if(!B(t))throw TypeError("Stringified UUID is invalid");return t}(o)};class w{constructor(e,n,t,o){this.id=I(),this.title=e,this.author=n,this.pages=t,this.status=o}getID(){return this.id}setID(e){e&&(this.id=e)}getTitle(){return this.title}setTitle(e){e.toString().length>0&&(this.title=e)}getAuthor(){return this.author}setAuthor(e){e.toString().length>0&&(this.author=e)}getPages(){return this.pages}setPages(e){e&&(this.pages=e)}getStatus(){return this.status}setStatus(e){this.status=e}}class x{static renderBook(e){const n=document.getElementById("libraryTable").insertRow(-1);n.id=e.getID(),n.innerHTML=`\n      <td class="bookTitleCell">${e.getTitle()}</td>\n      <td class="bookAuthorCell">${e.getAuthor()}</td>\n      <td class="bookPagesCell">${e.getPages()}</td>\n      <td class="bookStatusCell">\n        ${e.getStatus()?"Read":"Not Read"}\n      </td>\n      <td class="bookOptionsCell">\n        <button class="toggleStatusButton">Toggle Status</button>\n        <button class="editBookButton">Edit</button>\n        <button class="deleteBookButton">Delete</button>\n      </td>`}static deleteBook(e){e.remove()}static updateBook(e){const n=document.getElementById(e.getID());n.querySelector(".bookTitleCell").innerHTML=`${e.getTitle()}`,n.querySelector(".bookAuthorCell").innerHTML=`${e.getAuthor()}`,n.querySelector(".bookPagesCell").innerHTML=`${e.getPages()}`,n.querySelector(".bookStatusCell").innerHTML=e.getStatus()?"Read":"Not Read"}static toggleStatus(e,n){document.getElementById(n).querySelector(".bookStatusCell").innerHTML=e.getStatus()?"Read":"Not Read"}static renderForm(e){document.getElementById("formHeader").innerText=e?"Edit Book":"Add Book",document.querySelector("main").classList.add("hidden"),document.getElementById("bookFormSection").classList.remove("hidden"),document.getElementById("bookTitle").required=!0,document.getElementById("bookAuthor").required=!0,document.getElementById("bookPages").required=!0,e&&(document.getElementById("bookTitle").value=e.getTitle(),document.getElementById("bookAuthor").value=e.getAuthor(),document.getElementById("bookPages").value=e.getPages(),document.getElementById(e.getStatus()?"bookStatusTrue":"bookStatusFalse").checked=!0,document.getElementById("bookDataID").value=e.getID(),document.getElementById("bookSubmit").disabled=!1)}static clearForm(){document.getElementById("bookTitle").required=!1,document.getElementById("bookAuthor").required=!1,document.getElementById("bookPages").required=!1,document.querySelector("main").classList.remove("hidden"),document.getElementById("bookFormSection").classList.add("hidden"),document.getElementById("bookForm").reset(),document.getElementById("bookSubmit").disabled=!0}}class C{constructor(){this.allBooks=[new w("The Hobbit","J.R.R. Tolkien",295,!1)]}getAllBooks(){return this.allBooks}setAllBooks(e){e&&(this.allBooks=e)}addBook(e){e&&this.allBooks.push(e)}deleteBook(e){this.allBooks=this.allBooks.filter((n=>n.id!==e))}findBook(e){return this.allBooks.find((n=>n.id===e))}}class A{static storeData(e){window.localStorage.setItem("library",JSON.stringify(e))}static checkData(){return localStorage.getItem("library")?this.restoreData():new C}static restoreData(){const e=JSON.parse(window.localStorage.getItem("library")),n=new C;return n.setAllBooks([]),e.allBooks.forEach((e=>{const t=new w(e.title,e.author,e.pages,e.status);t.setID(e.id),n.addBook(t)})),n}}const T=A.checkData();(class{static loadApp(){this.loadTable(),this.formListeners()}static loadTable(){T.getAllBooks().forEach((e=>{x.renderBook(e),this.loadBookListeners(e)}))}static formListeners(){this.showAddForm(),this.formInputListener(),this.submitForm(),this.cancelForm()}static showAddForm(){document.getElementById("addBook").addEventListener("click",(()=>{x.renderForm()}))}static formInputListener(){const e=document.querySelectorAll('input[type="text"], input[type="number"]');e.forEach((n=>{n.addEventListener("input",(()=>{const n=[];e.forEach((e=>{n.push(e.checkValidity())})),document.getElementById("bookSubmit").disabled=!n.every((e=>e))}))}))}static submitForm(){document.getElementById("bookSubmit").addEventListener("click",(()=>{const e=document.getElementById("bookTitle").value,n=document.getElementById("bookAuthor").value,t=document.getElementById("bookPages").value,o=document.querySelector('input[name="bookStatus"]:checked').value,r=document.getElementById("bookDataID").value;if("Add Book"===document.getElementById("formHeader").innerText){T.addBook(new w(e,n,t,o));const r=T.getAllBooks()[T.getAllBooks().length-1];x.renderBook(r),this.loadBookListeners(r)}else{const i=T.findBook(r);i.setTitle(e),i.setAuthor(n),i.setPages(t),i.setStatus(o),x.updateBook(i)}x.clearForm(),A.storeData(T)}))}static cancelForm(){document.getElementById("bookCancel").addEventListener("click",(()=>{x.clearForm()}))}static loadBookListeners(e){const n=e.getID(),t=document.getElementById(n);this.toggleStatus(e,n,t),this.deleteBook(n,t),this.editBook(e,t)}static toggleStatus(e,n,t){t.querySelector(".toggleStatusButton").addEventListener("click",(()=>{T.findBook(n).setStatus(!T.findBook(n).getStatus()),x.toggleStatus(e,n),A.storeData(T)}))}static deleteBook(e,n){n.querySelector(".deleteBookButton").addEventListener("click",(()=>{T.deleteBook(e),x.deleteBook(n),A.storeData(T)}))}static editBook(e,n){n.querySelector(".editBookButton").addEventListener("click",(()=>{x.renderForm(e)}))}}).loadApp()})()})();