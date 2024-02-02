"use strict";(self.webpackChunktypescript_style_guide_website=self.webpackChunktypescript_style_guide_website||[]).push([[404],{1552:(e,t,n)=>{n.d(t,{c:()=>a});n(1504);var i=n(3088);const s={tableOfContentsInline:"tableOfContentsInline_prmo"};var r=n(7624);function a(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,r.jsx)("div",{className:s.tableOfContentsInline,children:(0,r.jsx)(i.c,{toc:t,minHeadingLevel:n,maxHeadingLevel:a,className:"table-of-contents",linkClassName:null})})}},3088:(e,t,n)=>{n.d(t,{c:()=>m});var i=n(1504),s=n(1824);function r(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const i=n.slice(2,e.level);e.parentIndex=Math.max(...i),n[e.level]=t}));const i=[];return t.forEach((e=>{const{parentIndex:n,...s}=e;n>=0?t[n].children.push(s):i.push(s)})),i}function a(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return t.flatMap((e=>{const t=a({toc:e.children,minHeadingLevel:n,maxHeadingLevel:i});return function(e){return e.level>=n&&e.level<=i}(e)?[{...e,children:t}]:t}))}function l(e){const t=e.getBoundingClientRect();return t.top===t.bottom?l(e.parentNode):t}function o(e,t){let{anchorTopOffset:n}=t;const i=e.find((e=>l(e).top>=n));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function c(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:t}}=(0,s.y)();return(0,i.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function h(e){const t=(0,i.useRef)(void 0),n=c();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:s,minHeadingLevel:r,maxHeadingLevel:a}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const i=[];for(let s=t;s<=n;s+=1)i.push(`h${s}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:r,maxHeadingLevel:a}),c=o(l,{anchorTopOffset:n.current}),h=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(s),e.classList.add(s),t.current=e):e.classList.remove(s)}(e,e===h)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}var p=n(867),u=n(7624);function d(e){let{toc:t,className:n,linkClassName:i,isChild:s}=e;return t.length?(0,u.jsx)("ul",{className:s?void 0:n,children:t.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(p.c,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(d,{isChild:!0,toc:e.children,className:n,linkClassName:i})]},e.id)))}):null}const g=i.memo(d);function m(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:p,...d}=e;const m=(0,s.y)(),v=c??m.tableOfContents.minHeadingLevel,f=p??m.tableOfContents.maxHeadingLevel,w=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return(0,i.useMemo)((()=>a({toc:r(t),minHeadingLevel:n,maxHeadingLevel:s})),[t,n,s])}({toc:t,minHeadingLevel:v,maxHeadingLevel:f});return h((0,i.useMemo)((()=>{if(l&&o)return{linkClassName:l,linkActiveClassName:o,minHeadingLevel:v,maxHeadingLevel:f}}),[l,o,v,f])),(0,u.jsx)(g,{toc:w,className:n,linkClassName:l,...d})}},4552:(e,t,n)=>{n.d(t,{I:()=>l,M:()=>a});var i=n(1504);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}},4352:(e,t,n)=>{n.d(t,{c:()=>c});var i=n(1504);function s(e){return"string"==typeof e&&"%"===e[e.length-1]&&function(e){const t=parseFloat(e);return!isNaN(t)&&isFinite(t)}(e.substring(0,e.length-1))}function r(e,t,n){0===t&&!n&&(null==e?void 0:e.style)&&(null==e?void 0:e.children.length)>0&&(e.style.display="none")}const a={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"};function l(e,t){return[e.static,0===t&&e.staticHeightZero,"number"==typeof t&&t>0?e.staticHeightSpecific:null,"auto"===t&&e.staticHeightAuto].filter((e=>e)).join(" ")}const o=["animateOpacity","animationStateClasses","applyInlineTransitions","children","className","contentClassName","contentRef","delay","duration","easing","height","onHeightAnimationEnd","onHeightAnimationStart","style","disableDisplayNone"],c=i.forwardRef(((e,t)=>{const{animateOpacity:n=!1,animationStateClasses:c={},applyInlineTransitions:h=!0,children:p,className:u="",contentClassName:d,delay:g=0,disableDisplayNone:m=!1,duration:v=500,easing:f="ease",height:w,onHeightAnimationEnd:E,onHeightAnimationStart:y,style:A,contentRef:L}=e,x=Object.assign({},e);o.forEach((e=>{delete x[e]}));const b=(0,i.useRef)(w),M=(0,i.useRef)(null),P=(0,i.useRef)(),H=(0,i.useRef)(),O=(0,i.useRef)(Object.assign(Object.assign({},a),c)),C="undefined"!=typeof window,T=(0,i.useRef)(!(!C||!window.matchMedia)&&window.matchMedia("(prefers-reduced-motion)").matches),S=T.current?0:g,N=T.current?0:v;let Y=w,k="visible";"number"==typeof w?(Y=w<0?0:w,k="hidden"):s(Y)&&(Y="0%"===w?0:w,k="hidden");const[X,I]=(0,i.useState)(Y),[z,$]=(0,i.useState)(k),[R,j]=(0,i.useState)(!1),[W,D]=(0,i.useState)(l(O.current,w));(0,i.useEffect)((()=>{r(M.current,X,m)}),[]),(0,i.useEffect)((()=>{if(w!==b.current&&M.current){!function(e,t){0===t&&(null==e?void 0:e.style)&&(e.style.display="")}(M.current,b.current),M.current.style.overflow="hidden";const e=M.current.offsetHeight;M.current.style.overflow="";const t=N+S;let n,i,a,o="hidden";const c="auto"===b.current;"number"==typeof w?(n=w<0?0:w,i=n):s(w)?(n="0%"===w?0:w,i=n):(n=e,i="auto",o=void 0),c&&(i=n,n=e);const h=[O.current.animating,("auto"===b.current||w<b.current)&&O.current.animatingUp,("auto"===w||w>b.current)&&O.current.animatingDown,0===i&&O.current.animatingToHeightZero,"auto"===i&&O.current.animatingToHeightAuto,"number"==typeof i&&i>0?O.current.animatingToHeightSpecific:null].filter((e=>e)).join(" "),p=l(O.current,i);I(n),$("hidden"),j(!c),D(h),clearTimeout(H.current),clearTimeout(P.current),c?(a=!0,H.current=setTimeout((()=>{I(i),$(o),j(a),null==y||y(i)}),50),P.current=setTimeout((()=>{j(!1),D(p),r(M.current,i,m),null==E||E(i)}),t)):(null==y||y(n),H.current=setTimeout((()=>{I(i),$(o),j(!1),D(p),"auto"!==w&&r(M.current,n,m),null==E||E(n)}),t))}return b.current=w,()=>{clearTimeout(H.current),clearTimeout(P.current)}}),[w]);const _=Object.assign(Object.assign({},A),{height:X,overflow:z||(null==A?void 0:A.overflow)});R&&h&&(_.transition=`height ${N}ms ${f} ${S}ms`,(null==A?void 0:A.transition)&&(_.transition=`${A.transition}, ${_.transition}`),_.WebkitTransition=_.transition);const F={};n&&(F.transition=`opacity ${N}ms ${f} ${S}ms`,F.WebkitTransition=F.transition,0===X&&(F.opacity=0));const q=void 0!==x["aria-hidden"]?x["aria-hidden"]:0===w;return i.createElement("div",Object.assign({},x,{"aria-hidden":q,className:`${W} ${u}`,style:_,ref:t}),i.createElement("div",{className:d,style:F,ref:e=>{M.current=e,L&&(L.current=e)}},p))}))},7088:(e,t,n)=>{n.d(t,{c:()=>c});var i=n(1504);"function"==typeof SuppressedError&&SuppressedError;const s=(e,t,n,i)=>{e.style.transition=`${t} ${n}ms ${i}`},r=(e,t,n)=>Math.min(Math.max(e,t),n);class a{constructor(e,t){this.glareAngle=0,this.glareOpacity=0,this.calculateGlareSize=e=>{const{width:t,height:n}=e,i=Math.sqrt(Math.pow(t,2)+Math.pow(n,2));return{width:i,height:i}},this.setSize=e=>{const t=this.calculateGlareSize(e);this.glareEl.style.width=`${t.width}px`,this.glareEl.style.height=`${t.height}px`},this.update=(e,t,n,i)=>{this.updateAngle(e,t.glareReverse),this.updateOpacity(e,t,n,i)},this.updateAngle=(e,t)=>{const{xPercentage:n,yPercentage:i}=e,s=180/Math.PI,r=n?Math.atan2(i,-n)*s:0;this.glareAngle=r-(t?180:0)},this.updateOpacity=(e,t,n,i)=>{const{xPercentage:s,yPercentage:a}=e,{glarePosition:l,glareReverse:o,glareMaxOpacity:c}=t,h=n?-1:1,p=i?-1:1,u=o?-1:1;let d=0;switch(l){case"top":d=-s*h*u;break;case"right":d=a*p*u;break;case"bottom":case void 0:d=s*h*u;break;case"left":d=-a*p*u;break;case"all":d=Math.hypot(s,a)}const g=r(d,0,100);this.glareOpacity=g*c/100},this.render=e=>{const{glareColor:t}=e;this.glareEl.style.transform=`rotate(${this.glareAngle}deg) translate(-50%, -50%)`,this.glareEl.style.opacity=this.glareOpacity.toString(),this.glareEl.style.background=`linear-gradient(0deg, rgba(255,255,255,0) 0%, ${t} 100%)`},this.glareWrapperEl=document.createElement("div"),this.glareEl=document.createElement("div"),this.glareWrapperEl.appendChild(this.glareEl),this.glareWrapperEl.className="glare-wrapper",this.glareEl.className="glare";const n={position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden",borderRadius:t,WebkitMaskImage:"-webkit-radial-gradient(white, black)",pointerEvents:"none"},i=this.calculateGlareSize(e),s={position:"absolute",top:"50%",left:"50%",transformOrigin:"0% 0%",pointerEvents:"none",width:`${i.width}px`,height:`${i.height}px`};Object.assign(this.glareWrapperEl.style,n),Object.assign(this.glareEl.style,s)}}class l{constructor(){this.glareAngle=0,this.glareOpacity=0,this.tiltAngleX=0,this.tiltAngleY=0,this.tiltAngleXPercentage=0,this.tiltAngleYPercentage=0,this.update=(e,t)=>{this.updateTilt(e,t),this.updateTiltManualInput(e,t),this.updateTiltReverse(t),this.updateTiltLimits(t)},this.updateTilt=(e,t)=>{const{xPercentage:n,yPercentage:i}=e,{tiltMaxAngleX:s,tiltMaxAngleY:r}=t;this.tiltAngleX=n*s/100,this.tiltAngleY=i*r/100*-1},this.updateTiltManualInput=(e,t)=>{const{tiltAngleXManual:n,tiltAngleYManual:i,tiltMaxAngleX:s,tiltMaxAngleY:r}=t;(null!==n||null!==i)&&(this.tiltAngleX=null!==n?n:0,this.tiltAngleY=null!==i?i:0,e.xPercentage=100*this.tiltAngleX/s,e.yPercentage=100*this.tiltAngleY/r)},this.updateTiltReverse=e=>{const t=e.tiltReverse?-1:1;this.tiltAngleX=t*this.tiltAngleX,this.tiltAngleY=t*this.tiltAngleY},this.updateTiltLimits=e=>{const{tiltAxis:t}=e;this.tiltAngleX=r(this.tiltAngleX,-90,90),this.tiltAngleY=r(this.tiltAngleY,-90,90),t&&(this.tiltAngleX="x"===t?this.tiltAngleX:0,this.tiltAngleY="y"===t?this.tiltAngleY:0)},this.updateTiltAnglesPercentage=e=>{const{tiltMaxAngleX:t,tiltMaxAngleY:n}=e;this.tiltAngleXPercentage=this.tiltAngleX/t*100,this.tiltAngleYPercentage=this.tiltAngleY/n*100},this.render=e=>{e.style.transform+=`rotateX(${this.tiltAngleX}deg) rotateY(${this.tiltAngleY}deg) `}}}const o=Object.assign(Object.assign({scale:1,perspective:1e3,flipVertically:!1,flipHorizontally:!1,reset:!0,transitionEasing:"cubic-bezier(.03,.98,.52,.99)",transitionSpeed:400,trackOnWindow:!1,gyroscope:!1},{tiltEnable:!0,tiltReverse:!1,tiltAngleXInitial:0,tiltAngleYInitial:0,tiltMaxAngleX:20,tiltMaxAngleY:20,tiltAxis:void 0,tiltAngleXManual:null,tiltAngleYManual:null}),{glareEnable:!1,glareMaxOpacity:.7,glareColor:"#ffffff",glarePosition:"bottom",glareReverse:!1,glareBorderRadius:"0"});class c extends i.PureComponent{constructor(){super(...arguments),this.wrapperEl={node:null,size:{width:0,height:0,left:0,top:0},clientPosition:{x:null,y:null,xPercentage:0,yPercentage:0},updateAnimationId:null,scale:1},this.tilt=null,this.glare=null,this.addDeviceOrientationEventListener=()=>function(e,t,n,i){return new(n||(n=Promise))((function(s,r){function a(e){try{o(i.next(e))}catch(e){r(e)}}function l(e){try{o(i.throw(e))}catch(e){r(e)}}function o(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}o((i=i.apply(e,t||[])).next())}))}(this,void 0,void 0,(function*(){if(!window.DeviceOrientationEvent)return;const e=DeviceOrientationEvent.requestPermission;"function"==typeof e?"granted"===(yield e())&&window.addEventListener("deviceorientation",this.onMove):window.addEventListener("deviceorientation",this.onMove)})),this.setSize=()=>{this.setWrapperElSize(),this.glare&&this.glare.setSize(this.wrapperEl.size)},this.mainLoop=e=>{null!==this.wrapperEl.updateAnimationId&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.processInput(e),this.update(e.type),this.wrapperEl.updateAnimationId=requestAnimationFrame(this.renderFrame)},this.onEnter=e=>{const{onEnter:t}=this.props;this.setSize(),this.wrapperEl.node.style.willChange="transform",this.setTransitions(),t&&t(e.type)},this.onMove=e=>{this.mainLoop(e),this.emitOnMove(e)},this.onLeave=e=>{const{onLeave:t}=this.props;if(this.setTransitions(),t&&t(e.type),this.props.reset){const e=new CustomEvent("autoreset");this.onMove(e)}},this.processInput=e=>{const{scale:t}=this.props;switch(e.type){case"mousemove":this.wrapperEl.clientPosition.x=e.pageX,this.wrapperEl.clientPosition.y=e.pageY,this.wrapperEl.scale=t;break;case"touchmove":this.wrapperEl.clientPosition.x=e.touches[0].pageX,this.wrapperEl.clientPosition.y=e.touches[0].pageY,this.wrapperEl.scale=t;break;case"deviceorientation":this.processInputDeviceOrientation(e),this.wrapperEl.scale=t;break;case"autoreset":const{tiltAngleXInitial:n,tiltAngleYInitial:i,tiltMaxAngleX:s,tiltMaxAngleY:a}=this.props,l=i/a*100;this.wrapperEl.clientPosition.xPercentage=r(n/s*100,-100,100),this.wrapperEl.clientPosition.yPercentage=r(l,-100,100),this.wrapperEl.scale=1}},this.processInputDeviceOrientation=e=>{if(!e.gamma||!e.beta||!this.props.gyroscope)return;const{tiltMaxAngleX:t,tiltMaxAngleY:n}=this.props,i=e.gamma;this.wrapperEl.clientPosition.xPercentage=e.beta/t*100,this.wrapperEl.clientPosition.yPercentage=i/n*100,this.wrapperEl.clientPosition.xPercentage=r(this.wrapperEl.clientPosition.xPercentage,-100,100),this.wrapperEl.clientPosition.yPercentage=r(this.wrapperEl.clientPosition.yPercentage,-100,100)},this.update=e=>{const{tiltEnable:t,flipVertically:n,flipHorizontally:i}=this.props;"autoreset"!==e&&"deviceorientation"!==e&&"propChange"!==e&&this.updateClientInput(),t&&this.tilt.update(this.wrapperEl.clientPosition,this.props),this.updateFlip(),this.tilt.updateTiltAnglesPercentage(this.props),this.glare&&this.glare.update(this.wrapperEl.clientPosition,this.props,n,i)},this.updateClientInput=()=>{const{trackOnWindow:e}=this.props;let t,n;if(e){const{x:e,y:i}=this.wrapperEl.clientPosition;t=i/window.innerHeight*200-100,n=e/window.innerWidth*200-100}else{const{size:{width:e,height:i,left:s,top:r},clientPosition:{x:a,y:l}}=this.wrapperEl;t=(l-r)/i*200-100,n=(a-s)/e*200-100}this.wrapperEl.clientPosition.xPercentage=r(t,-100,100),this.wrapperEl.clientPosition.yPercentage=r(n,-100,100)},this.updateFlip=()=>{const{flipVertically:e,flipHorizontally:t}=this.props;e&&(this.tilt.tiltAngleX+=180,this.tilt.tiltAngleY*=-1),t&&(this.tilt.tiltAngleY+=180)},this.renderFrame=()=>{this.resetWrapperElTransform(),this.renderPerspective(),this.tilt.render(this.wrapperEl.node),this.renderScale(),this.glare&&this.glare.render(this.props)}}componentDidMount(){if(this.tilt=new l,this.initGlare(),this.addEventListeners(),"undefined"==typeof CustomEvent)return;const e=new CustomEvent("autoreset");this.mainLoop(e);const t=new CustomEvent("initial");this.emitOnMove(t)}componentWillUnmount(){null!==this.wrapperEl.updateAnimationId&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.removeEventListeners()}componentDidUpdate(){const e=new CustomEvent("propChange");this.mainLoop(e),this.emitOnMove(e)}addEventListeners(){const{trackOnWindow:e,gyroscope:t}=this.props;window.addEventListener("resize",this.setSize),e&&(window.addEventListener("mouseenter",this.onEnter),window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseout",this.onLeave),window.addEventListener("touchstart",this.onEnter),window.addEventListener("touchmove",this.onMove),window.addEventListener("touchend",this.onLeave)),t&&this.addDeviceOrientationEventListener()}removeEventListeners(){const{trackOnWindow:e,gyroscope:t}=this.props;window.removeEventListener("resize",this.setSize),e&&(window.removeEventListener("mouseenter",this.onEnter),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseout",this.onLeave),window.removeEventListener("touchstart",this.onEnter),window.removeEventListener("touchmove",this.onMove),window.removeEventListener("touchend",this.onLeave)),t&&window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",this.onMove)}setWrapperElSize(){const e=this.wrapperEl.node.getBoundingClientRect();this.wrapperEl.size.width=this.wrapperEl.node.offsetWidth,this.wrapperEl.size.height=this.wrapperEl.node.offsetHeight,this.wrapperEl.size.left=e.left+window.scrollX,this.wrapperEl.size.top=e.top+window.scrollY}initGlare(){const{glareEnable:e,glareBorderRadius:t}=this.props;e&&(this.glare=new a(this.wrapperEl.size,t),this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))}emitOnMove(e){const{onMove:t}=this.props;if(!t)return;let n=0,i=0;this.glare&&(n=this.glare.glareAngle,i=this.glare.glareOpacity),t({tiltAngleX:this.tilt.tiltAngleX,tiltAngleY:this.tilt.tiltAngleY,tiltAngleXPercentage:this.tilt.tiltAngleXPercentage,tiltAngleYPercentage:this.tilt.tiltAngleYPercentage,glareAngle:n,glareOpacity:i,eventType:e.type})}resetWrapperElTransform(){this.wrapperEl.node.style.transform=""}renderPerspective(){const{perspective:e}=this.props;this.wrapperEl.node.style.transform+=`perspective(${e}px) `}renderScale(){const{scale:e}=this.wrapperEl;this.wrapperEl.node.style.transform+=`scale3d(${e},${e},${e})`}setTransitions(){const{transitionSpeed:e,transitionEasing:t}=this.props;s(this.wrapperEl.node,"all",e,t),this.glare&&s(this.glare.glareEl,"opacity",e,t)}render(){const{children:e,className:t,style:n}=this.props;return i.createElement("div",{ref:e=>this.wrapperEl.node=e,onMouseEnter:this.onEnter,onMouseMove:this.onMove,onMouseLeave:this.onLeave,onTouchStart:this.onEnter,onTouchMove:this.onMove,onTouchEnd:this.onLeave,className:t,style:n},e)}}c.defaultProps=o}}]);