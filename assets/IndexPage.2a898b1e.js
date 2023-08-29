import{Q as V}from"./QPage.a07bdf9c.js";import{c,r as o,w as D,k as J,h as i,_ as p,g as G,L as k,M as b,N as I,O as W,$ as s,d,Z as L,S as y}from"./index.b0031a02.js";import{c as w,h as E,l as O,k as K}from"./QBtn.0360584d.js";import{u as Z,a as T}from"./use-dark.a07ec5f9.js";const x={ratio:[String,Number]};function M(e,a){return c(()=>{const l=Number(e.ratio||(a!==void 0?a.value:void 0));return isNaN(l)!==!0&&l>0?{paddingBottom:`${100/l}%`}:null})}const _=16/9;var $=w({name:"QImg",props:{...x,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:_},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:a,emit:l}){const f=o(e.initialRatio),Q=M(e,f);let t=null,v=!1;const r=[o(null),o(C())],n=o(0),g=o(!1),B=o(!1),q=c(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),P=c(()=>({width:e.width,height:e.height})),H=c(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),U=c(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));D(()=>h(),S);function h(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function C(){return e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null}function S(A){t!==null&&(clearTimeout(t),t=null),B.value=!1,A===null?(g.value=!1,r[n.value^1].value=C()):g.value=!0,r[n.value].value=A}function z({target:A}){v!==!0&&(t!==null&&(clearTimeout(t),t=null),f.value=A.naturalHeight===0?.5:A.naturalWidth/A.naturalHeight,Y(A,1))}function Y(A,m){v===!0||m===1e3||(A.complete===!0?N(A):t=setTimeout(()=>{t=null,Y(A,m+1)},50))}function N(A){v!==!0&&(n.value=n.value^1,r[n.value].value=null,g.value=!1,B.value=!1,l("load",A.currentSrc||A.src))}function j(A){t!==null&&(clearTimeout(t),t=null),g.value=!1,B.value=!0,r[n.value].value=null,r[n.value^1].value=C(),l("error",A)}function X(A){const m=r[A].value,F={key:"img_"+A,class:H.value,style:U.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...m};return n.value===A?(F.class+=" q-img__image--waiting",Object.assign(F,{onLoad:z,onError:j})):F.class+=" q-img__image--loaded",i("div",{class:"q-img__container absolute-full",key:"img"+A},i("img",F))}function R(){return g.value!==!0?i("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},E(a[B.value===!0?"error":"default"])):i("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},a.loading!==void 0?a.loading():e.noSpinner===!0?void 0:[i(O,{color:e.spinnerColor,size:e.spinnerSize})])}return S(h()),J(()=>{v=!0,t!==null&&(clearTimeout(t),t=null)}),()=>{const A=[];return Q.value!==null&&A.push(i("div",{key:"filler",style:Q.value})),B.value!==!0&&(r[0].value!==null&&A.push(X(0)),r[1].value!==null&&A.push(X(1))),A.push(i(p,{name:"q-transition--fade"},R)),i("div",{class:q.value,style:P.value,role:"img","aria-label":e.alt},A)}}}),ee=w({name:"QCard",props:{...Z,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:a}){const{proxy:{$q:l}}=G(),f=T(e,l),Q=c(()=>"q-card"+(f.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>i(e.tag,{class:Q.value},E(a.default))}}),Ae="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAPe0lEQVR4Xu2da48VRReFDyIYlJuEYFQg3AWUGMP//wcYYxSCEi4BlACJigIGQXmzJ+nz1uyp03XpM0Ov7Ke/GDl92Xut/VRVV1f37Lp27drbBRsKoICkArsAWNI3gkaBDQUAmEJAAWEFAFjYPEJHAQCmBlBAWAEAFjaP0FEAgKkBFBBWAICFzSN0FABgagAFhBUAYGHzCB0FAJgaQAFhBQBY2DxCRwEApgZQQFgBABY2j9BRAICpARQQVgCAhc0jdBQAYGoABYQVAGBh8wgdBQCYGkABYQUAWNg8QkcBAKYGUEBYAQAWNo/QUQCAqQEUEFYAgIXNI3QUAGBqAAWEFQBgYfMIHQUAmBpAAWEFAFjYPEJHAQCmBlBAWAEAFjaP0FEAgKkBFBBWAICFzSN0FABgagAFhBUAYGHzCB0FAJgaQAFhBQBY2DxCRwEApgZQQFgBABY2j9BRAICpARQQVgCAhc0jdBQAYGoABYQVAGBh8wgdBQCYGkABYQUAWNg8QkcBAKYGUEBYAQAWNo/QUQCAqQEUEFYAgIXNI3QUAGBqAAWEFQBgYfMIHQUAmBpAAWEFAFjYPEJHAQCmBlBAWAEAFjaP0FEAgKkBFBBWAICFzSN0FABgagAFhBUAYGHzCB0FAJgaQAFhBQBY2DxCRwEApgZQQFgBABY2j9BRAICpARQQVgCAhc0jdBQAYGoABYQVAGBh8wgdBQCYGkABYQUAWNg8QkcBAKYGUEBYAQAWNo/QUQCAqQEUEFYAgIXNI3QUAGBqAAWEFQBgYfMIHQUAmBpAAWEFAFjYPEJHAQCmBlBAWAEAFjaP0FEAgKkBFBBWAICFzSN0FABgagAFhBUAYGHzCB0FAJgaQAFhBQBY2DxCRwEApgZQQFgBABY2j9BRAICpARQQVgCAhc0jdBQAYGoABYQVAGBh8wgdBQCYGkABYQUAWNg8QkcBAKYGUEBYAQAWNo/QUQCAqQEUEFYAgIXNI3QUAGBqAAWEFQBgYfMIHQUAmBpAAWEFAFjYPEJHAQCmBlBAWAEAFjaP0FEAgKkBFBBWQALg/fv3Lz788MOlzH/88cfin3/+2RbZjx07tjzvkydPuq+Rnmc74+0OcJsP/Pjjjxd79uxZi5Zjoe7du3dx+PDhjV1ev369+P3337syS89jJ5jifVcAnQfNFmCD9vjx44t9+/Yt3nvvvS3pvXnzZvH8+fPFgwcP1gbz6dOnF0eOHFle69tvv22S1aA9evToRsx+2454m4LbgZ3H8rfLW6NrjZl5tq7t8uXLS71fvXq1+PHHH5tOfeLEiY0GwAD223bE2xRcxc6zBPjs2bPLVrWUw3///bd4/Pjx4tdffy3tOvq79RinTp3a1Fi0AHzhwoXFgQMHijEYyPfv3+/uKYoXeAc7WPGfO3cu23DlwjEwHj58OFkDgy8d6bQAbDGbZx988EFRMTvvzz//vLaOonjBhh1mB/DFixcXH3300ZYUTETbdu3alW0tbcgzpWW/cuXKlvPWApyD10D9999/s/Fao3Pr1q2NEYT6ZiB88cUXW7SzHG1Ia9vu3bsX77///qZU7fd79+51Q2wjtPPnz29qcFsAzvltDcvbt2+z8dpvP/zww+zsmhXAn3322eLTTz9dimQm25Drl19+2dT6mXknT57c1OJPgWJVj18DsPUA1hMMm8Vh8ab3ULl4W4ptdlWTBOQbL2u4nj59umVEZDp98sknm0CfAsVXX321pfes1dT7bXHcvXt3U4Oai9dq8fbt27OyY1YAf/3118uWuqaF9vesL168WNy8ebNJYBs6nzlzJntMDcA+5rGe1Y8upo4amhLdhp2tYbLed9gMhJ9++ml0qJnes9pxPRp434fr1wCci3lVz5obXVh+cxo5zQZg3/vWtna+JTYzameovUHWe6RDvRLAPuaaYkyBrym4beBubaf0va/dwpRmb03zL7/8cjn0be2F/VxF6lmNnj7mEpAe+Nq6XJvIhRPNBmAvbC2IvjWuKaJBk/SaZv7ff/+9afKsBHDao9qI4fr168XGw8dbKqCdKoSe66T3kS0g+l64pHMaW3pNg8lm/IeJqBqAexrQNF5rML7//vseubblmNkAnPakLcXg70FrAU6PG+6f7R5teKZoapcK65tvvln2JAb/jRs3iib5Fv23337buP/q2dIZWDu+9nmzP67Ua66K7erVq8uf/vrrr42Z2prN34OWdB7OmR431EhaNyWA/e1SrfZ+tvvOnTvdk281+rTsMxuATSQbXtnDfwOqthj8MLYGYLvOpUuXlsPlwciWwpoytEoLv+e+fTDY31OXCtiO8yOdKdc3vWyzHtAArn0K4GOoAdjDN0DUArAHsaZWLD/fSdTcKrVAOGXf2QDcm4QvhprWMS38tOhbAO7t+S3PlqIb08U3RLbvWK/iY66ZdOr1Zey4dBhsjfV33303ehk/V5Heh7Zo2eKvDyhtdOd0HywNsJ8QqSmGtMf2j55aDPb71rbmHmD7/5oeaFWF5x5j5e7FvVZ2vprGbt0A+3hrbj3SRtrfXrUA7Cc8W3RPAa4Z6axbt1XnkwbYQ1RqGX0R+95qCsC1k265YWxLIeWM9HHnoPATR7X3f+suRA9RqeHzwPtGpxfglnkW0yAdNQDwGqqitudJL5UWca7IpwDcAmHLdWql8iuLHj16tFxMMWXJYe31a/bzeZdAWDVXkV6rF+DStX0+Ldep0WJd+0j2wLl1y2nB5sRJi3jVI58WsFr29fFMOXaV8X6SZ8jRIEiXHNY+7lpXgQ3n8Y1Izcq5VXMVAPx/BeQAzsFbeoTh182ugr0FrJZ9dwJgu4Z/xmy6GMDpgv3SkHXd4Nr5PLz2b6UGd2yuAoBFAc7BW/MYJB3+jE2atEDZsu9OAWzXya0RHq5fauh2Ct7SY5jSXAUACwJs97yff/75prdPauBNe6XS8LEFypZ9dxLg3Fs6dv3WSZt1wJxbs1yC167b8o5vy71py74+/ynHrkPLVeeQGELnhmA18PoeuzRsa4HS79vySGbKUsKaYsjp1RJfzTVK++ReC62B189VlF67bAEr3bfmkWOaY7rqrnUCrKTVlN9nD3DuXdvS46JBEL9W1178H9vsaxzpu8jpyiL/uZaeFWDDtXuXjdYandNsp4bPuRflaz+64EcP1kjb466xLX1F0UYZqccvX77c9OZQzwqw4dq9y0ZrPevdb7YAr/rKQ00rnhO9V6DhON/qTlle17OgvjZ+H1d6XGkEUnuNVfvZiMc+g5R+nqbmtdDhfGOx98TmG3o/aqp9kWTKstmeuFuOmSXAufcwcy/KlxJNW83SvqXfc8OmnuV1lpuNDIatdjRRis9+z61Ms38fvilWmgOoucYYvP6TRLkX5ceusd0A9y5/nTLamqJpzbGzA3gVvD2fX9lugHtep/PFsM5e0d9b27ltS79yUrN0saZw0n1yTwd61llvN8C+8ay9reh91bVVx579ZwewX1HUUwg9QtgxLZNYtn/Pu73+HeLSQv7aXPzEVQrqOr6CsSqO3Kx3zQRjbV6l/VomsexcPe/2prc829EAlnIc+31WAPuWbifh7QHY3xuVzPU9zLoK3UPkh8q5oXVpdre2qHyDu66caq/fCrBv6Eprwn2j3jIHU5vDlP1mA3BubfO6iqxWoNYe2M7rH5esKmA/zKxZSlgbt1+8kRuW+9HCOh6F5D4Ot9NfbmwF2DRNe1T7/1VQetjfxbP0Ug3MBmBfhMMnbkoJ+N/tvqb3CxM9AOde07PPrvz5558Lg9m+sXXw4MEtn8ottfy1eXswx0YBXuMpMeTytnyHT8nWxm/72aOf3g/F9QCcu9e2env27NnC/mtLTw8dOrTlq5c7/Sy9RsNZADz2ZciaJNJ9pszq9gBs185N4ozFva5h5qoXGFZ91C93v9pblKu+DNnql+0/ZX12D8B2zdxil7HY5zZ0HmKdBcAenJ4iGI55FwDbtQ0Oe4wy9qX/4TvXvd/A8rqMvUK4SkMPXu+wcGzNdat/7wJgi9F6Ypuh9x+dT+O30ZTdkvSO6lq1aN1/FgBba2hDlnVsNgyq/TaTv56Po/Xv7Ay9sa3oSv8+khWB9bo2VKz95G1JC3sclf4dJ7tG7Tex7b49LVobSrf+aRqbcMz9PaFS3Lnf7UP4vX+ULI3DtK39lloah2lpDXCaj53LhvWtuvTkP+WYWQA8JQGORYHICgBwZPfJXV4BAJa3kAQiKwDAkd0nd3kFAFjeQhKIrAAAR3af3OUVAGB5C0kgsgIAHNl9cpdXAIDlLSSByAoAcGT3yV1eAQCWt5AEIisAwJHdJ3d5BQBY3kISiKwAAEd2n9zlFQBgeQtJILICABzZfXKXVwCA5S0kgcgKAHBk98ldXgEAlreQBCIrAMCR3Sd3eQUAWN5CEoisAABHdp/c5RUAYHkLSSCyAgAc2X1yl1cAgOUtJIHICgBwZPfJXV4BAJa3kAQiKwDAkd0nd3kFAFjeQhKIrAAAR3af3OUVAGB5C0kgsgIAHNl9cpdXAIDlLSSByAoAcGT3yV1eAQCWt5AEIisAwJHdJ3d5BQBY3kISiKwAAEd2n9zlFQBgeQtJILICABzZfXKXVwCA5S0kgcgKAHBk98ldXgEAlreQBCIrAMCR3Sd3eQUAWN5CEoisAABHdp/c5RUAYHkLSSCyAgAc2X1yl1cAgOUtJIHICgBwZPfJXV4BAJa3kAQiKwDAkd0nd3kFAFjeQhKIrAAAR3af3OUVAGB5C0kgsgIAHNl9cpdXAIDlLSSByAoAcGT3yV1eAQCWt5AEIisAwJHdJ3d5BQBY3kISiKwAAEd2n9zlFQBgeQtJILICABzZfXKXVwCA5S0kgcgKAHBk98ldXgEAlreQBCIrAMCR3Sd3eQUAWN5CEoisAABHdp/c5RUAYHkLSSCyAgAc2X1yl1cAgOUtJIHICgBwZPfJXV4BAJa3kAQiKwDAkd0nd3kFAFjeQhKIrAAAR3af3OUVAGB5C0kgsgIAHNl9cpdXAIDlLSSByAoAcGT3yV1eAQCWt5AEIisAwJHdJ3d5BQBY3kISiKwAAEd2n9zlFQBgeQtJILICABzZfXKXVwCA5S0kgcgKAHBk98ldXgEAlreQBCIrAMCR3Sd3eQUAWN5CEoisAABHdp/c5RUAYHkLSSCyAgAc2X1yl1cAgOUtJIHICgBwZPfJXV4BAJa3kAQiKwDAkd0nd3kFAFjeQhKIrAAAR3af3OUVAGB5C0kgsgIAHNl9cpdXAIDlLSSByAoAcGT3yV1eAQCWt5AEIivwP+EUe1fnOSmXAAAAAElFTkSuQmCC";const te={class:"row q-gutter-md"},ae={style:{width:"120px",height:"120px","object-fit":"cover","border-radius":"4px"},class:"overflow-hidden"},le={class:"col"},ie={class:"q-ma-none"},re={class:"row justify-end"},u=k({__name:"ProductCard",props:{id:{default:Math.ceil(Math.random()*100).toString()},title:{default:"Default Product Title"},description:{default:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, deserunt!"}},setup(e){return(a,l)=>(b(),I(ee,{class:"q-pa-md"},{default:W(()=>[s("div",te,[s("div",ae,[d($,{src:L(Ae),alt:"Placeholder image"},null,8,["src"])]),s("div",le,[s("h6",ie,y(a.title),1),s("p",null,y(a.description),1),s("div",re,[d(K,{color:"primary",label:"Add Item"})])])])]),_:1}))}}),ue=k({__name:"IndexPage",setup(e){return(a,l)=>(b(),I(V,{class:"column q-pa-lg q-gutter-md"},{default:W(()=>[d(u,{id:"1"}),d(u,{id:"2"}),d(u,{id:"3"}),d(u,{id:"4"}),d(u,{id:"5"}),d(u,{id:"6"})]),_:1}))}});export{ue as default};
