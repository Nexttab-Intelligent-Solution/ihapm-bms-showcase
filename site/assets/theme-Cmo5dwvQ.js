const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/PublicReservationLedger-DPjdAxlt.js","assets/pairing-BoGVzUge.js","assets/DefaultMode-BMVAm_rA.js","assets/ElectricityMode-CYNmmIy5.js","assets/colorScales-B7w8SkgK.js","assets/EnvironmentMode-DQ_O8-ik.js","assets/OccupancyMode-DdC56PQy.js"])))=>i.map(i=>d[i]);
var Ru=Object.defineProperty;var Cu=(i,e,t)=>e in i?Ru(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var T=(i,e,t)=>Cu(i,typeof e!="symbol"?e+"":e,t);import{S as br,r as Pu,j as Sl,k as Iu,m as Du,o as Lu,p as Nu,q as Uu,a as _h,s as Fu,t as Se,u as Le,x as pt,y as Yi,z as mt,A as et,B as Ou,C as Bu,D as Va,E as Ms,F as ku,H as zu,G as Vu,J as Hu,R as Gu,K as Wu,M as Xu,N as xh,O as yh,P as qu,l as Yu,f as $u,I as Ku,L as Zu,_ as ts,h as ju}from"./pairing-BoGVzUge.js";const Dr={custom:"custom"};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ha="170",Li={ROTATE:0,DOLLY:1,PAN:2},Pi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Qu=0,Ml=1,Ju=2,Sh=1,ed=2,_n=3,bn=0,Ft=1,$t=2,Sn=0,Ni=1,Tn=2,El=3,bl=4,td=5,jn=100,nd=101,id=102,sd=103,rd=104,od=200,ad=201,ld=202,cd=203,Xo=204,qo=205,hd=206,ud=207,dd=208,fd=209,pd=210,md=211,gd=212,vd=213,_d=214,Yo=0,$o=1,Ko=2,Bi=3,Zo=4,jo=5,Qo=6,Jo=7,Mh=0,xd=1,yd=2,kn=0,Eh=1,bh=2,Th=3,Ga=4,Sd=5,wh=6,Ah=7,Rh=300,ki=301,zi=302,ea=303,ta=304,Vr=306,na=1e3,Jn=1001,ia=1002,Ht=1003,Md=1004,Ns=1005,ln=1006,$r=1007,ei=1008,wn=1009,Ch=1010,Ph=1011,Es=1012,Wa=1013,ti=1014,cn=1015,Mn=1016,Xa=1017,qa=1018,Vi=1020,Ih=35902,Dh=1021,Lh=1022,nn=1023,Nh=1024,Uh=1025,Ui=1026,Hi=1027,Ya=1028,$a=1029,Fh=1030,Ka=1031,Za=1033,Tr=33776,wr=33777,Ar=33778,Rr=33779,sa=35840,ra=35841,oa=35842,aa=35843,la=36196,ca=37492,ha=37496,ua=37808,da=37809,fa=37810,pa=37811,ma=37812,ga=37813,va=37814,_a=37815,xa=37816,ya=37817,Sa=37818,Ma=37819,Ea=37820,ba=37821,Cr=36492,Ta=36494,wa=36495,Oh=36283,Aa=36284,Ra=36285,Ca=36286,Ed=3200,bd=3201,Td=0,wd=1,Bn="",Xt="srgb",$i="srgb-linear",Hr="linear",nt="srgb",li=7680,Tl=519,Ad=512,Rd=513,Cd=514,Bh=515,Pd=516,Id=517,Dd=518,Ld=519,wl=35044,Lr=35048,Al="300 es",yn=2e3,Nr=2001;class si{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Rl=1234567;const Fi=Math.PI/180,bs=180/Math.PI;function ri(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]).toLowerCase()}function St(i,e,t){return Math.max(e,Math.min(t,i))}function ja(i,e){return(i%e+e)%e}function Nd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Ud(i,e,t){return i!==e?(t-i)/(e-i):0}function ms(i,e,t){return(1-t)*i+t*e}function Fd(i,e,t,n){return ms(i,e,1-Math.exp(-t*n))}function Od(i,e=1){return e-Math.abs(ja(i,e*2)-e)}function Bd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function kd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function zd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Vd(i,e){return i+Math.random()*(e-i)}function Hd(i){return i*(.5-Math.random())}function Gd(i){i!==void 0&&(Rl=i);let e=Rl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Wd(i){return i*Fi}function Xd(i){return i*bs}function qd(i){return(i&i-1)===0&&i!==0}function Yd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function $d(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Kd(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ai(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function It(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ht={DEG2RAD:Fi,RAD2DEG:bs,generateUUID:ri,clamp:St,euclideanModulo:ja,mapLinear:Nd,inverseLerp:Ud,lerp:ms,damp:Fd,pingpong:Od,smoothstep:Bd,smootherstep:kd,randInt:zd,randFloat:Vd,randFloatSpread:Hd,seededRandom:Gd,degToRad:Wd,radToDeg:Xd,isPowerOfTwo:qd,ceilPowerOfTwo:Yd,floorPowerOfTwo:$d,setQuaternionFromProperEuler:Kd,normalize:It,denormalize:Ai};class ne{constructor(e=0,t=0){ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,n,s,r,o,a,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],v=s[0],m=s[3],f=s[6],A=s[1],E=s[4],S=s[7],B=s[2],I=s[5],P=s[8];return r[0]=o*v+a*A+l*B,r[3]=o*m+a*E+l*I,r[6]=o*f+a*S+l*P,r[1]=c*v+h*A+u*B,r[4]=c*m+h*E+u*I,r[7]=c*f+h*S+u*P,r[2]=d*v+p*A+g*B,r[5]=d*m+p*E+g*I,r[8]=d*f+p*S+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,g=t*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(s*c-h*n)*v,e[2]=(a*n-s*o)*v,e[3]=d*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Kr.makeScale(e,t)),this}rotate(e){return this.premultiply(Kr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Kr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Kr=new We;function kh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ur(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zd(){const i=Ur("canvas");return i.style.display="block",i}const Cl={};function fs(i){i in Cl||(Cl[i]=!0,console.warn(i))}function jd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Qd(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Jd(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ke={enabled:!0,workingColorSpace:$i,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===nt&&(i.r=En(i.r),i.g=En(i.g),i.b=En(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===nt&&(i.r=Oi(i.r),i.g=Oi(i.g),i.b=Oi(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Bn?Hr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function En(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Oi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Pl=[.64,.33,.3,.6,.15,.06],Il=[.2126,.7152,.0722],Dl=[.3127,.329],Ll=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nl=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ke.define({[$i]:{primaries:Pl,whitePoint:Dl,transfer:Hr,toXYZ:Ll,fromXYZ:Nl,luminanceCoefficients:Il,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:Pl,whitePoint:Dl,transfer:nt,toXYZ:Ll,fromXYZ:Nl,luminanceCoefficients:Il,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}});let ci;class ef{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ci===void 0&&(ci=Ur("canvas")),ci.width=e.width,ci.height=e.height;const n=ci.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ci}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ur("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=En(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(En(t[n]/255)*255):t[n]=En(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tf=0;class zh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=ri(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Zr(s[o].image)):r.push(Zr(s[o]))}else r=Zr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Zr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ef.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nf=0;class Ct extends si{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,n=Jn,s=Jn,r=ln,o=ei,a=nn,l=wn,c=Ct.DEFAULT_ANISOTROPY,h=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=ri(),this.name="",this.source=new zh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case na:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case ia:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case na:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case ia:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=Rh;Ct.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,n=0,s=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,S=(p+1)/2,B=(f+1)/2,I=(h+d)/4,P=(u+v)/4,U=(g+m)/4;return E>S&&E>B?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=I/n,r=P/n):S>B?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=I/s,r=U/s):B<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(B),n=P/r,s=U/r),this.set(n,s,r,t),this}let A=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(u-v)/A,this.z=(d-h)/A,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sf extends si{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ct(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new zh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rn extends sf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Vh extends Ct{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rf extends Ct{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ni{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==d||c!==p||h!==g){let m=1-a;const f=l*d+c*p+h*g+u*v,A=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){const B=Math.sqrt(E),I=Math.atan2(B,f*A);m=Math.sin(m*I)/B,a=Math.sin(a*I)/B}const S=a*A;if(l=l*m+d*S,c=c*m+p*S,h=h*m+g*S,u=u*m+v*S,m===1-a){const B=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=B,c*=B,h*=B,u*=B}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-a*p,e[t+2]=c*g+h*p+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ul.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ul.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jr.copy(this).projectOnVector(e),this.sub(jr)}reflect(e){return this.sub(jr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jr=new R,Ul=new ni;class Ot{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Qt):Qt.fromBufferAttribute(r,o),Qt.applyMatrix4(e.matrixWorld),this.expandByPoint(Qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Us.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Us.copy(n.boundingBox)),Us.applyMatrix4(e.matrixWorld),this.union(Us)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qt),Qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ns),Fs.subVectors(this.max,ns),hi.subVectors(e.a,ns),ui.subVectors(e.b,ns),di.subVectors(e.c,ns),Pn.subVectors(ui,hi),In.subVectors(di,ui),Hn.subVectors(hi,di);let t=[0,-Pn.z,Pn.y,0,-In.z,In.y,0,-Hn.z,Hn.y,Pn.z,0,-Pn.x,In.z,0,-In.x,Hn.z,0,-Hn.x,-Pn.y,Pn.x,0,-In.y,In.x,0,-Hn.y,Hn.x,0];return!Qr(t,hi,ui,di,Fs)||(t=[1,0,0,0,1,0,0,0,1],!Qr(t,hi,ui,di,Fs))?!1:(Os.crossVectors(Pn,In),t=[Os.x,Os.y,Os.z],Qr(t,hi,ui,di,Fs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fn=[new R,new R,new R,new R,new R,new R,new R,new R],Qt=new R,Us=new Ot,hi=new R,ui=new R,di=new R,Pn=new R,In=new R,Hn=new R,ns=new R,Fs=new R,Os=new R,Gn=new R;function Qr(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Gn.fromArray(i,r);const a=s.x*Math.abs(Gn.x)+s.y*Math.abs(Gn.y)+s.z*Math.abs(Gn.z),l=e.dot(Gn),c=t.dot(Gn),h=n.dot(Gn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const of=new Ot,is=new R,Jr=new R;class oi{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):of.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;is.subVectors(e,this.center);const t=is.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(is,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(is.copy(e.center).add(Jr)),this.expandByPoint(is.copy(e.center).sub(Jr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pn=new R,eo=new R,Bs=new R,Dn=new R,to=new R,ks=new R,no=new R;class Ps{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pn.copy(this.origin).addScaledVector(this.direction,t),pn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){eo.copy(e).add(t).multiplyScalar(.5),Bs.copy(t).sub(e).normalize(),Dn.copy(this.origin).sub(eo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Bs),a=Dn.dot(this.direction),l=-Dn.dot(Bs),c=Dn.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(eo).addScaledVector(Bs,d),p}intersectSphere(e,t){pn.subVectors(e.center,this.origin);const n=pn.dot(this.direction),s=pn.dot(pn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,pn)!==null}intersectTriangle(e,t,n,s,r){to.subVectors(t,e),ks.subVectors(n,e),no.crossVectors(to,ks);let o=this.direction.dot(no),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Dn.subVectors(this.origin,e);const l=a*this.direction.dot(ks.crossVectors(Dn,ks));if(l<0)return null;const c=a*this.direction.dot(to.cross(Dn));if(c<0||l+c>o)return null;const h=-a*Dn.dot(no);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,t,n,s,r,o,a,l,c,h,u,d,p,g,v,m){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,d,p,g,v,m)}set(e,t,n,s,r,o,a,l,c,h,u,d,p,g,v,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/fi.setFromMatrixColumn(e,0).length(),r=1/fi.setFromMatrixColumn(e,1).length(),o=1/fi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,p=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,g=c*h,v=c*u;t[0]=d+v*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,g=c*h,v=c*u;t[0]=d-v*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,p=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=v-d*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-v*u}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(af,e,lf)}lookAt(e,t,n){const s=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),Ln.crossVectors(n,kt),Ln.lengthSq()===0&&(Math.abs(n.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),Ln.crossVectors(n,kt)),Ln.normalize(),zs.crossVectors(kt,Ln),s[0]=Ln.x,s[4]=zs.x,s[8]=kt.x,s[1]=Ln.y,s[5]=zs.y,s[9]=kt.y,s[2]=Ln.z,s[6]=zs.z,s[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],v=n[6],m=n[10],f=n[14],A=n[3],E=n[7],S=n[11],B=n[15],I=s[0],P=s[4],U=s[8],M=s[12],x=s[1],C=s[5],W=s[9],O=s[13],H=s[2],J=s[6],X=s[10],ie=s[14],G=s[3],le=s[7],ve=s[11],Te=s[15];return r[0]=o*I+a*x+l*H+c*G,r[4]=o*P+a*C+l*J+c*le,r[8]=o*U+a*W+l*X+c*ve,r[12]=o*M+a*O+l*ie+c*Te,r[1]=h*I+u*x+d*H+p*G,r[5]=h*P+u*C+d*J+p*le,r[9]=h*U+u*W+d*X+p*ve,r[13]=h*M+u*O+d*ie+p*Te,r[2]=g*I+v*x+m*H+f*G,r[6]=g*P+v*C+m*J+f*le,r[10]=g*U+v*W+m*X+f*ve,r[14]=g*M+v*O+m*ie+f*Te,r[3]=A*I+E*x+S*H+B*G,r[7]=A*P+E*C+S*J+B*le,r[11]=A*U+E*W+S*X+B*ve,r[15]=A*M+E*O+S*ie+B*Te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],v=e[7],m=e[11],f=e[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*p-n*l*p)+v*(+t*l*p-t*c*d+r*o*d-s*o*p+s*c*h-r*l*h)+m*(+t*c*u-t*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+f*(-s*a*h-t*l*u+t*a*d+s*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],v=e[13],m=e[14],f=e[15],A=u*m*c-v*d*c+v*l*p-a*m*p-u*l*f+a*d*f,E=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,S=h*v*c-g*u*c+g*a*p-o*v*p-h*a*f+o*u*f,B=g*u*l-h*v*l-g*a*d+o*v*d+h*a*m-o*u*m,I=t*A+n*E+s*S+r*B;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/I;return e[0]=A*P,e[1]=(v*d*r-u*m*r-v*s*p+n*m*p+u*s*f-n*d*f)*P,e[2]=(a*m*r-v*l*r+v*s*c-n*m*c-a*s*f+n*l*f)*P,e[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*p-n*l*p)*P,e[4]=E*P,e[5]=(h*m*r-g*d*r+g*s*p-t*m*p-h*s*f+t*d*f)*P,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*f-t*l*f)*P,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*p+t*l*p)*P,e[8]=S*P,e[9]=(g*u*r-h*v*r-g*n*p+t*v*p+h*n*f-t*u*f)*P,e[10]=(o*v*r-g*a*r+g*n*c-t*v*c-o*n*f+t*a*f)*P,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*p-t*a*p)*P,e[12]=B*P,e[13]=(h*v*s-g*u*s+g*n*d-t*v*d-h*n*m+t*u*m)*P,e[14]=(g*a*s-o*v*s-g*n*l+t*v*l+o*n*m-t*a*m)*P,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*d+t*a*d)*P,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,g=r*u,v=o*h,m=o*u,f=a*u,A=l*c,E=l*h,S=l*u,B=n.x,I=n.y,P=n.z;return s[0]=(1-(v+f))*B,s[1]=(p+S)*B,s[2]=(g-E)*B,s[3]=0,s[4]=(p-S)*I,s[5]=(1-(d+f))*I,s[6]=(m+A)*I,s[7]=0,s[8]=(g+E)*P,s[9]=(m-A)*P,s[10]=(1-(d+v))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=fi.set(s[0],s[1],s[2]).length();const o=fi.set(s[4],s[5],s[6]).length(),a=fi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Jt.copy(this);const c=1/r,h=1/o,u=1/a;return Jt.elements[0]*=c,Jt.elements[1]*=c,Jt.elements[2]*=c,Jt.elements[4]*=h,Jt.elements[5]*=h,Jt.elements[6]*=h,Jt.elements[8]*=u,Jt.elements[9]*=u,Jt.elements[10]*=u,t.setFromRotationMatrix(Jt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=yn){const l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s);let p,g;if(a===yn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Nr)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=yn){const l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(o-r),d=(t+e)*c,p=(n+s)*h;let g,v;if(a===yn)g=(o+r)*u,v=-2*u;else if(a===Nr)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const fi=new R,Jt=new st,af=new R(0,0,0),lf=new R(1,1,1),Ln=new R,zs=new R,kt=new R,Fl=new st,Ol=new ni;class An{constructor(e=0,t=0,n=0,s=An.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-St(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(St(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(St(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Fl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ol.setFromEuler(this),this.setFromQuaternion(Ol,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}An.DEFAULT_ORDER="XYZ";class Qa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cf=0;const Bl=new R,pi=new ni,mn=new st,Vs=new R,ss=new R,hf=new R,uf=new ni,kl=new R(1,0,0),zl=new R(0,1,0),Vl=new R(0,0,1),Hl={type:"added"},df={type:"removed"},mi={type:"childadded",child:null},io={type:"childremoved",child:null};class Pt extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();const e=new R,t=new An,n=new ni,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new st},normalMatrix:{value:new We}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pi.setFromAxisAngle(e,t),this.quaternion.multiply(pi),this}rotateOnWorldAxis(e,t){return pi.setFromAxisAngle(e,t),this.quaternion.premultiply(pi),this}rotateX(e){return this.rotateOnAxis(kl,e)}rotateY(e){return this.rotateOnAxis(zl,e)}rotateZ(e){return this.rotateOnAxis(Vl,e)}translateOnAxis(e,t){return Bl.copy(e).applyQuaternion(this.quaternion),this.position.add(Bl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kl,e)}translateY(e){return this.translateOnAxis(zl,e)}translateZ(e){return this.translateOnAxis(Vl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Vs.copy(e):Vs.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(ss,Vs,this.up):mn.lookAt(Vs,ss,this.up),this.quaternion.setFromRotationMatrix(mn),s&&(mn.extractRotation(s.matrixWorld),pi.setFromRotationMatrix(mn),this.quaternion.premultiply(pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hl),mi.child=e,this.dispatchEvent(mi),mi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(df),io.child=e,this.dispatchEvent(io),io.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hl),mi.child=e,this.dispatchEvent(mi),mi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,e,hf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,uf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Pt.DEFAULT_UP=new R(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const en=new R,gn=new R,so=new R,vn=new R,gi=new R,vi=new R,Gl=new R,ro=new R,oo=new R,ao=new R,lo=new ut,co=new ut,ho=new ut;class Kt{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),en.subVectors(e,t),s.cross(en);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){en.subVectors(s,t),gn.subVectors(n,t),so.subVectors(e,t);const o=en.dot(en),a=en.dot(gn),l=en.dot(so),c=gn.dot(gn),h=gn.dot(so),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vn.x),l.addScaledVector(o,vn.y),l.addScaledVector(a,vn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return lo.setScalar(0),co.setScalar(0),ho.setScalar(0),lo.fromBufferAttribute(e,t),co.fromBufferAttribute(e,n),ho.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(lo,r.x),o.addScaledVector(co,r.y),o.addScaledVector(ho,r.z),o}static isFrontFacing(e,t,n,s){return en.subVectors(n,t),gn.subVectors(e,t),en.cross(gn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return en.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),en.cross(gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Kt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;gi.subVectors(s,n),vi.subVectors(r,n),ro.subVectors(e,n);const l=gi.dot(ro),c=vi.dot(ro);if(l<=0&&c<=0)return t.copy(n);oo.subVectors(e,s);const h=gi.dot(oo),u=vi.dot(oo);if(h>=0&&u<=h)return t.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(gi,o);ao.subVectors(e,r);const p=gi.dot(ao),g=vi.dot(ao);if(g>=0&&p<=g)return t.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(vi,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Gl.subVectors(r,s),a=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(Gl,a);const f=1/(m+v+d);return o=v*f,a=d*f,t.copy(n).addScaledVector(gi,o).addScaledVector(vi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Hh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},Hs={h:0,s:0,l:0};function uo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ke.workingColorSpace){if(e=ja(e,1),t=St(t,0,1),n=St(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=uo(o,r,e+1/3),this.g=uo(o,r,e),this.b=uo(o,r,e-1/3)}return Ke.toWorkingColorSpace(this,s),this}setStyle(e,t=Xt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){const n=Hh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=En(e.r),this.g=En(e.g),this.b=En(e.b),this}copyLinearToSRGB(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return Ke.fromWorkingColorSpace(Rt.copy(this),e),Math.round(St(Rt.r*255,0,255))*65536+Math.round(St(Rt.g*255,0,255))*256+Math.round(St(Rt.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Rt.copy(this),t);const n=Rt.r,s=Rt.g,r=Rt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=Xt){Ke.fromWorkingColorSpace(Rt.copy(this),e);const t=Rt.r,n=Rt.g,s=Rt.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Nn),this.setHSL(Nn.h+e,Nn.s+t,Nn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Nn),e.getHSL(Hs);const n=ms(Nn.h,Hs.h,t),s=ms(Nn.s,Hs.s,t),r=ms(Nn.l,Hs.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rt=new ze;ze.NAMES=Hh;let ff=0;class Ki extends si{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=ri(),this.name="",this.blending=Ni,this.side=bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xo,this.blendDst=qo,this.blendEquation=jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=li,this.stencilZFail=li,this.stencilZPass=li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(n.blending=this.blending),this.side!==bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xo&&(n.blendSrc=this.blendSrc),this.blendDst!==qo&&(n.blendDst=this.blendDst),this.blendEquation!==jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Bi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Gr extends Ki{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Mh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dt=new R,Gs=new ne;class bt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=wl,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Gs.fromBufferAttribute(this,t),Gs.applyMatrix3(e),this.setXY(t,Gs.x,Gs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ai(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),s=It(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),s=It(s,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wl&&(e.usage=this.usage),e}}class Gh extends bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Wh extends bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class vt extends bt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let pf=0;const Wt=new st,fo=new Pt,_i=new R,zt=new Ot,rs=new Ot,yt=new R;class Tt extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kh(e)?Wh:Gh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wt.makeRotationFromQuaternion(e),this.applyMatrix4(Wt),this}rotateX(e){return Wt.makeRotationX(e),this.applyMatrix4(Wt),this}rotateY(e){return Wt.makeRotationY(e),this.applyMatrix4(Wt),this}rotateZ(e){return Wt.makeRotationZ(e),this.applyMatrix4(Wt),this}translate(e,t,n){return Wt.makeTranslation(e,t,n),this.applyMatrix4(Wt),this}scale(e,t,n){return Wt.makeScale(e,t,n),this.applyMatrix4(Wt),this}lookAt(e){return fo.lookAt(e),fo.updateMatrix(),this.applyMatrix4(fo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_i).negate(),this.translate(_i.x,_i.y,_i.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new vt(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ot);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];zt.setFromBufferAttribute(r),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,zt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,zt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(zt.min),this.boundingBox.expandByPoint(zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(zt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];rs.setFromBufferAttribute(a),this.morphTargetsRelative?(yt.addVectors(zt.min,rs.min),zt.expandByPoint(yt),yt.addVectors(zt.max,rs.max),zt.expandByPoint(yt)):(zt.expandByPoint(rs.min),zt.expandByPoint(rs.max))}zt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)yt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(yt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)yt.fromBufferAttribute(a,c),l&&(_i.fromBufferAttribute(e,c),yt.add(_i)),s=Math.max(s,n.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<n.count;U++)a[U]=new R,l[U]=new R;const c=new R,h=new R,u=new R,d=new ne,p=new ne,g=new ne,v=new R,m=new R;function f(U,M,x){c.fromBufferAttribute(n,U),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,x),d.fromBufferAttribute(r,U),p.fromBufferAttribute(r,M),g.fromBufferAttribute(r,x),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(C),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(C),a[U].add(v),a[M].add(v),a[x].add(v),l[U].add(m),l[M].add(m),l[x].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let U=0,M=A.length;U<M;++U){const x=A[U],C=x.start,W=x.count;for(let O=C,H=C+W;O<H;O+=3)f(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const E=new R,S=new R,B=new R,I=new R;function P(U){B.fromBufferAttribute(s,U),I.copy(B);const M=a[U];E.copy(M),E.sub(B.multiplyScalar(B.dot(M))).normalize(),S.crossVectors(I,M);const C=S.dot(l[U])<0?-1:1;o.setXYZW(U,E.x,E.y,E.z,C)}for(let U=0,M=A.length;U<M;++U){const x=A[U],C=x.start,W=x.count;for(let O=C,H=C+W;O<H;O+=3)P(e.getX(O+0)),P(e.getX(O+1)),P(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,u=new R;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new bt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wl=new st,Wn=new Ps,Ws=new oi,Xl=new R,Xs=new R,qs=new R,Ys=new R,po=new R,$s=new R,ql=new R,Ks=new R;class Et extends Pt{constructor(e=new Tt,t=new Gr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){$s.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(po.fromBufferAttribute(u,e),o?$s.addScaledVector(po,h):$s.addScaledVector(po.sub(t),h))}t.add($s)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(r),Wn.copy(e.ray).recast(e.near),!(Ws.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(Ws,Xl)===null||Wn.origin.distanceToSquared(Xl)>(e.far-e.near)**2))&&(Wl.copy(r).invert(),Wn.copy(e.ray).applyMatrix4(Wl),!(n.boundingBox!==null&&Wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Wn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=o[m.materialIndex],A=Math.max(m.start,p.start),E=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=A,B=E;S<B;S+=3){const I=a.getX(S),P=a.getX(S+1),U=a.getX(S+2);s=Zs(this,f,e,n,c,h,u,I,P,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const A=a.getX(m),E=a.getX(m+1),S=a.getX(m+2);s=Zs(this,o,e,n,c,h,u,A,E,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=o[m.materialIndex],A=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=A,B=E;S<B;S+=3){const I=S,P=S+1,U=S+2;s=Zs(this,f,e,n,c,h,u,I,P,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const A=m,E=m+1,S=m+2;s=Zs(this,o,e,n,c,h,u,A,E,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function mf(i,e,t,n,s,r,o,a){let l;if(e.side===Ft?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===bn,a),l===null)return null;Ks.copy(a),Ks.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ks);return c<t.near||c>t.far?null:{distance:c,point:Ks.clone(),object:i}}function Zs(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Xs),i.getVertexPosition(l,qs),i.getVertexPosition(c,Ys);const h=mf(i,e,t,n,Xs,qs,Ys,ql);if(h){const u=new R;Kt.getBarycoord(ql,Xs,qs,Ys,u),s&&(h.uv=Kt.getInterpolatedAttribute(s,a,l,c,u,new ne)),r&&(h.uv1=Kt.getInterpolatedAttribute(r,a,l,c,u,new ne)),o&&(h.normal=Kt.getInterpolatedAttribute(o,a,l,c,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new R,materialIndex:0};Kt.getNormal(Xs,qs,Ys,d.normal),h.face=d,h.barycoord=u}return h}class Is extends Tt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new vt(c,3)),this.setAttribute("normal",new vt(h,3)),this.setAttribute("uv",new vt(u,2));function g(v,m,f,A,E,S,B,I,P,U,M){const x=S/P,C=B/U,W=S/2,O=B/2,H=I/2,J=P+1,X=U+1;let ie=0,G=0;const le=new R;for(let ve=0;ve<X;ve++){const Te=ve*C-O;for(let Be=0;Be<J;Be++){const Ze=Be*x-W;le[v]=Ze*A,le[m]=Te*E,le[f]=H,c.push(le.x,le.y,le.z),le[v]=0,le[m]=0,le[f]=I>0?1:-1,h.push(le.x,le.y,le.z),u.push(Be/P),u.push(1-ve/U),ie+=1}}for(let ve=0;ve<U;ve++)for(let Te=0;Te<P;Te++){const Be=d+Te+J*ve,Ze=d+Te+J*(ve+1),K=d+(Te+1)+J*(ve+1),ee=d+(Te+1)+J*ve;l.push(Be,Ze,ee),l.push(Ze,K,ee),G+=6}a.addGroup(p,G,M),p+=G,d+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Is(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Dt(i){const e={};for(let t=0;t<i.length;t++){const n=Gi(i[t]);for(const s in n)e[s]=n[s]}return e}function gf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Xh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const Ts={clone:Gi,merge:Dt};var vf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_f=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gt extends Ki{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vf,this.fragmentShader=_f,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gi(e.uniforms),this.uniformsGroups=gf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class qh extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=yn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Un=new R,Yl=new ne,$l=new ne;class qt extends qh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(Fi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Un.x,Un.y).multiplyScalar(-e/Un.z),Un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Un.x,Un.y).multiplyScalar(-e/Un.z)}getViewSize(e,t){return this.getViewBounds(e,Yl,$l),t.subVectors($l,Yl)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Fi*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xi=-90,yi=1;class xf extends Pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new qt(xi,yi,e,t);s.layers=this.layers,this.add(s);const r=new qt(xi,yi,e,t);r.layers=this.layers,this.add(r);const o=new qt(xi,yi,e,t);o.layers=this.layers,this.add(o);const a=new qt(xi,yi,e,t);a.layers=this.layers,this.add(a);const l=new qt(xi,yi,e,t);l.layers=this.layers,this.add(l);const c=new qt(xi,yi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Yh extends Ct{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:ki,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yf extends rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Yh(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ln}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Is(5,5,5),r=new gt({name:"CubemapFromEquirect",uniforms:Gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ft,blending:Sn});r.uniforms.tEquirect.value=t;const o=new Et(s,r),a=t.minFilter;return t.minFilter===ei&&(t.minFilter=ln),new xf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const mo=new R,Sf=new R,Mf=new We;class On{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=mo.subVectors(n,t).cross(Sf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(mo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Mf.getNormalMatrix(e),s=this.coplanarPoint(mo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xn=new oi,js=new R;class $h{constructor(e=new On,t=new On,n=new On,s=new On,r=new On,o=new On){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yn){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],v=s[10],m=s[11],f=s[12],A=s[13],E=s[14],S=s[15];if(n[0].setComponents(l-r,d-c,m-p,S-f).normalize(),n[1].setComponents(l+r,d+c,m+p,S+f).normalize(),n[2].setComponents(l+o,d+h,m+g,S+A).normalize(),n[3].setComponents(l-o,d-h,m-g,S-A).normalize(),n[4].setComponents(l-a,d-u,m-v,S-E).normalize(),t===yn)n[5].setComponents(l+a,d+u,m+v,S+E).normalize();else if(t===Nr)n[5].setComponents(a,u,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xn)}intersectsSprite(e){return Xn.center.set(0,0,0),Xn.radius=.7071067811865476,Xn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(js.x=s.normal.x>0?e.max.x:e.min.x,js.y=s.normal.y>0?e.max.y:e.min.y,js.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(js)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kh(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Ef(i){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],v=u[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const v=u[p];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Wr extends Tt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,p=[],g=[],v=[],m=[];for(let f=0;f<h;f++){const A=f*d-o;for(let E=0;E<c;E++){const S=E*u-r;g.push(S,-A,0),v.push(0,0,1),m.push(E/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let A=0;A<a;A++){const E=A+c*f,S=A+c*(f+1),B=A+1+c*(f+1),I=A+1+c*f;p.push(E,S,I),p.push(S,B,I)}this.setIndex(p),this.setAttribute("position",new vt(g,3)),this.setAttribute("normal",new vt(v,3)),this.setAttribute("uv",new vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wr(e.width,e.height,e.widthSegments,e.heightSegments)}}var bf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Af=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,If=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Df=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Lf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ff=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Of=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,zf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Yf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$f=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Kf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Zf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ep="gl_FragColor = linearToOutputTexel( gl_FragColor );",tp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,np=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ip=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,op=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ap=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,up=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_p=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Mp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ep=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ap=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ip=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Lp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Np=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Up=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Op=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,zp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Hp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Yp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$p=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Jp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,em=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,im=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,om=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,am=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,lm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,um=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_m=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Mm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Em=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Pm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Im=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Dm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Um=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Om=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Bm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,km=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Hm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Wm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Xm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ym=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$m=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Km=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Qm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ng=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:bf,alphahash_pars_fragment:Tf,alphamap_fragment:wf,alphamap_pars_fragment:Af,alphatest_fragment:Rf,alphatest_pars_fragment:Cf,aomap_fragment:Pf,aomap_pars_fragment:If,batching_pars_vertex:Df,batching_vertex:Lf,begin_vertex:Nf,beginnormal_vertex:Uf,bsdfs:Ff,iridescence_fragment:Of,bumpmap_pars_fragment:Bf,clipping_planes_fragment:kf,clipping_planes_pars_fragment:zf,clipping_planes_pars_vertex:Vf,clipping_planes_vertex:Hf,color_fragment:Gf,color_pars_fragment:Wf,color_pars_vertex:Xf,color_vertex:qf,common:Yf,cube_uv_reflection_fragment:$f,defaultnormal_vertex:Kf,displacementmap_pars_vertex:Zf,displacementmap_vertex:jf,emissivemap_fragment:Qf,emissivemap_pars_fragment:Jf,colorspace_fragment:ep,colorspace_pars_fragment:tp,envmap_fragment:np,envmap_common_pars_fragment:ip,envmap_pars_fragment:sp,envmap_pars_vertex:rp,envmap_physical_pars_fragment:gp,envmap_vertex:op,fog_vertex:ap,fog_pars_vertex:lp,fog_fragment:cp,fog_pars_fragment:hp,gradientmap_pars_fragment:up,lightmap_pars_fragment:dp,lights_lambert_fragment:fp,lights_lambert_pars_fragment:pp,lights_pars_begin:mp,lights_toon_fragment:vp,lights_toon_pars_fragment:_p,lights_phong_fragment:xp,lights_phong_pars_fragment:yp,lights_physical_fragment:Sp,lights_physical_pars_fragment:Mp,lights_fragment_begin:Ep,lights_fragment_maps:bp,lights_fragment_end:Tp,logdepthbuf_fragment:wp,logdepthbuf_pars_fragment:Ap,logdepthbuf_pars_vertex:Rp,logdepthbuf_vertex:Cp,map_fragment:Pp,map_pars_fragment:Ip,map_particle_fragment:Dp,map_particle_pars_fragment:Lp,metalnessmap_fragment:Np,metalnessmap_pars_fragment:Up,morphinstance_vertex:Fp,morphcolor_vertex:Op,morphnormal_vertex:Bp,morphtarget_pars_vertex:kp,morphtarget_vertex:zp,normal_fragment_begin:Vp,normal_fragment_maps:Hp,normal_pars_fragment:Gp,normal_pars_vertex:Wp,normal_vertex:Xp,normalmap_pars_fragment:qp,clearcoat_normal_fragment_begin:Yp,clearcoat_normal_fragment_maps:$p,clearcoat_pars_fragment:Kp,iridescence_pars_fragment:Zp,opaque_fragment:jp,packing:Qp,premultiplied_alpha_fragment:Jp,project_vertex:em,dithering_fragment:tm,dithering_pars_fragment:nm,roughnessmap_fragment:im,roughnessmap_pars_fragment:sm,shadowmap_pars_fragment:rm,shadowmap_pars_vertex:om,shadowmap_vertex:am,shadowmask_pars_fragment:lm,skinbase_vertex:cm,skinning_pars_vertex:hm,skinning_vertex:um,skinnormal_vertex:dm,specularmap_fragment:fm,specularmap_pars_fragment:pm,tonemapping_fragment:mm,tonemapping_pars_fragment:gm,transmission_fragment:vm,transmission_pars_fragment:_m,uv_pars_fragment:xm,uv_pars_vertex:ym,uv_vertex:Sm,worldpos_vertex:Mm,background_vert:Em,background_frag:bm,backgroundCube_vert:Tm,backgroundCube_frag:wm,cube_vert:Am,cube_frag:Rm,depth_vert:Cm,depth_frag:Pm,distanceRGBA_vert:Im,distanceRGBA_frag:Dm,equirect_vert:Lm,equirect_frag:Nm,linedashed_vert:Um,linedashed_frag:Fm,meshbasic_vert:Om,meshbasic_frag:Bm,meshlambert_vert:km,meshlambert_frag:zm,meshmatcap_vert:Vm,meshmatcap_frag:Hm,meshnormal_vert:Gm,meshnormal_frag:Wm,meshphong_vert:Xm,meshphong_frag:qm,meshphysical_vert:Ym,meshphysical_frag:$m,meshtoon_vert:Km,meshtoon_frag:Zm,points_vert:jm,points_frag:Qm,shadow_vert:Jm,shadow_frag:eg,sprite_vert:tg,sprite_frag:ng},fe={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},an={basic:{uniforms:Dt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Dt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ze(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Dt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Dt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Dt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new ze(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Dt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Dt([fe.points,fe.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Dt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Dt([fe.common,fe.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Dt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Dt([fe.sprite,fe.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Dt([fe.common,fe.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Dt([fe.lights,fe.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};an.physical={uniforms:Dt([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Qs={r:0,b:0,g:0},qn=new An,ig=new st;function sg(i,e,t,n,s,r,o){const a=new ze(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(A){let E=A.isScene===!0?A.background:null;return E&&E.isTexture&&(E=(A.backgroundBlurriness>0?t:e).get(E)),E}function v(A){let E=!1;const S=g(A);S===null?f(a,l):S&&S.isColor&&(f(S,1),E=!0);const B=i.xr.getEnvironmentBlendMode();B==="additive"?n.buffers.color.setClear(0,0,0,1,o):B==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(A,E){const S=g(E);S&&(S.isCubeTexture||S.mapping===Vr)?(h===void 0&&(h=new Et(new Is(1,1,1),new gt({name:"BackgroundCubeMaterial",uniforms:Gi(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(B,I,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),qn.copy(E.backgroundRotation),qn.x*=-1,qn.y*=-1,qn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ig.makeRotationFromEuler(qn)),h.material.toneMapped=Ke.getTransfer(S.colorSpace)!==nt,(u!==S||d!==S.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=S,d=S.version,p=i.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Et(new Wr(2,2),new gt({name:"BackgroundMaterial",uniforms:Gi(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(S.colorSpace)!==nt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,p=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function f(A,E){A.getRGB(Qs,Xh(i)),n.buffers.color.setClear(Qs.r,Qs.g,Qs.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(A,E=1){a.set(A),l=E,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,f(a,l)},render:v,addToRenderList:m}}function rg(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(x,C,W,O,H){let J=!1;const X=u(O,W,C);r!==X&&(r=X,c(r.object)),J=p(x,O,W,H),J&&g(x,O,W,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,S(x,C,W,O),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,C,W){const O=W.wireframe===!0;let H=n[x.id];H===void 0&&(H={},n[x.id]=H);let J=H[C.id];J===void 0&&(J={},H[C.id]=J);let X=J[O];return X===void 0&&(X=d(l()),J[O]=X),X}function d(x){const C=[],W=[],O=[];for(let H=0;H<t;H++)C[H]=0,W[H]=0,O[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:W,attributeDivisors:O,object:x,attributes:{},index:null}}function p(x,C,W,O){const H=r.attributes,J=C.attributes;let X=0;const ie=W.getAttributes();for(const G in ie)if(ie[G].location>=0){const ve=H[G];let Te=J[G];if(Te===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(Te=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(Te=x.instanceColor)),ve===void 0||ve.attribute!==Te||Te&&ve.data!==Te.data)return!0;X++}return r.attributesNum!==X||r.index!==O}function g(x,C,W,O){const H={},J=C.attributes;let X=0;const ie=W.getAttributes();for(const G in ie)if(ie[G].location>=0){let ve=J[G];ve===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(ve=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(ve=x.instanceColor));const Te={};Te.attribute=ve,ve&&ve.data&&(Te.data=ve.data),H[G]=Te,X++}r.attributes=H,r.attributesNum=X,r.index=O}function v(){const x=r.newAttributes;for(let C=0,W=x.length;C<W;C++)x[C]=0}function m(x){f(x,0)}function f(x,C){const W=r.newAttributes,O=r.enabledAttributes,H=r.attributeDivisors;W[x]=1,O[x]===0&&(i.enableVertexAttribArray(x),O[x]=1),H[x]!==C&&(i.vertexAttribDivisor(x,C),H[x]=C)}function A(){const x=r.newAttributes,C=r.enabledAttributes;for(let W=0,O=C.length;W<O;W++)C[W]!==x[W]&&(i.disableVertexAttribArray(W),C[W]=0)}function E(x,C,W,O,H,J,X){X===!0?i.vertexAttribIPointer(x,C,W,H,J):i.vertexAttribPointer(x,C,W,O,H,J)}function S(x,C,W,O){v();const H=O.attributes,J=W.getAttributes(),X=C.defaultAttributeValues;for(const ie in J){const G=J[ie];if(G.location>=0){let le=H[ie];if(le===void 0&&(ie==="instanceMatrix"&&x.instanceMatrix&&(le=x.instanceMatrix),ie==="instanceColor"&&x.instanceColor&&(le=x.instanceColor)),le!==void 0){const ve=le.normalized,Te=le.itemSize,Be=e.get(le);if(Be===void 0)continue;const Ze=Be.buffer,K=Be.type,ee=Be.bytesPerElement,Me=K===i.INT||K===i.UNSIGNED_INT||le.gpuType===Wa;if(le.isInterleavedBufferAttribute){const ce=le.data,Ne=ce.stride,ke=le.offset;if(ce.isInstancedInterleavedBuffer){for(let Oe=0;Oe<G.locationSize;Oe++)f(G.location+Oe,ce.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Oe=0;Oe<G.locationSize;Oe++)m(G.location+Oe);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let Oe=0;Oe<G.locationSize;Oe++)E(G.location+Oe,Te/G.locationSize,K,ve,Ne*ee,(ke+Te/G.locationSize*Oe)*ee,Me)}else{if(le.isInstancedBufferAttribute){for(let ce=0;ce<G.locationSize;ce++)f(G.location+ce,le.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ce=0;ce<G.locationSize;ce++)m(G.location+ce);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let ce=0;ce<G.locationSize;ce++)E(G.location+ce,Te/G.locationSize,K,ve,Te*ee,Te/G.locationSize*ce*ee,Me)}}else if(X!==void 0){const ve=X[ie];if(ve!==void 0)switch(ve.length){case 2:i.vertexAttrib2fv(G.location,ve);break;case 3:i.vertexAttrib3fv(G.location,ve);break;case 4:i.vertexAttrib4fv(G.location,ve);break;default:i.vertexAttrib1fv(G.location,ve)}}}}A()}function B(){U();for(const x in n){const C=n[x];for(const W in C){const O=C[W];for(const H in O)h(O[H].object),delete O[H];delete C[W]}delete n[x]}}function I(x){if(n[x.id]===void 0)return;const C=n[x.id];for(const W in C){const O=C[W];for(const H in O)h(O[H].object),delete O[H];delete C[W]}delete n[x.id]}function P(x){for(const C in n){const W=n[C];if(W[x.id]===void 0)continue;const O=W[x.id];for(const H in O)h(O[H].object),delete O[H];delete W[x.id]}}function U(){M(),o=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:M,dispose:B,releaseStatesOfGeometry:I,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:A}}function og(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ag(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==nn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const U=P===Mn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==wn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==cn&&!U)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),B=g>0,I=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:A,maxVaryings:E,maxFragmentUniforms:S,vertexTextures:B,maxSamples:I}}function lg(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new On,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const A=r?0:n,E=A*4;let S=f.clippingState||null;l.value=S,S=h(g,d,E,p);for(let B=0;B!==E;++B)S[B]=t[B];f.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const f=p+v*4,A=d.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,S=p;E!==v;++E,S+=4)o.copy(u[E]).applyMatrix4(A,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function cg(i){let e=new WeakMap;function t(o,a){return a===ea?o.mapping=ki:a===ta&&(o.mapping=zi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ea||a===ta)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new yf(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Zh extends qh{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ii=4,Kl=[.125,.215,.35,.446,.526,.582],Qn=20,go=new Zh,Zl=new ze;let vo=null,_o=0,xo=0,yo=!1;const Zn=(1+Math.sqrt(5))/2,Si=1/Zn,jl=[new R(-Zn,Si,0),new R(Zn,Si,0),new R(-Si,0,Zn),new R(Si,0,Zn),new R(0,Zn,-Si),new R(0,Zn,Si),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class Ql{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){vo=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel(),yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ec(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vo,_o,xo),this._renderer.xr.enabled=yo,e.scissorTest=!1,Js(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ki||e.mapping===zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vo=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel(),yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:Mn,format:nn,colorSpace:$i,depthBuffer:!1},s=Jl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hg(r)),this._blurMaterial=ug(r,e,t)}return s}_compileMaterial(e){const t=new Et(this._lodPlanes[0],e);this._renderer.compile(t,go)}_sceneToCubeUV(e,t,n,s){const a=new qt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Zl),h.toneMapping=kn,h.autoClear=!1;const p=new Gr({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),g=new Et(new Is,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Zl),v=!0);for(let f=0;f<6;f++){const A=f%3;A===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):A===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const E=this._cubeSize;Js(s,A*E,f>2?E:0,E,E),h.setRenderTarget(s),v&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ki||e.mapping===zi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=tc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ec());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Et(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Js(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,go)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=jl[(s-r-1)%jl.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Et(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Qn-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Qn;m>Qn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qn}`);const f=[];let A=0;for(let P=0;P<Qn;++P){const U=P/v,M=Math.exp(-U*U/2);f.push(M),P===0?A+=M:P<m&&(A+=2*M)}for(let P=0;P<f.length;P++)f[P]=f[P]/A;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-n;const S=this._sizeLods[s],B=3*S*(s>E-Ii?s-E+Ii:0),I=4*(this._cubeSize-S);Js(t,B,I,3*S,2*S),l.setRenderTarget(t),l.render(u,go)}}function hg(i){const e=[],t=[],n=[];let s=i;const r=i-Ii+1+Kl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Ii?l=Kl[o-i+Ii-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,m=2,f=1,A=new Float32Array(v*g*p),E=new Float32Array(m*g*p),S=new Float32Array(f*g*p);for(let I=0;I<p;I++){const P=I%3*2/3-1,U=I>2?0:-1,M=[P,U,0,P+2/3,U,0,P+2/3,U+1,0,P,U,0,P+2/3,U+1,0,P,U+1,0];A.set(M,v*g*I),E.set(d,m*g*I);const x=[I,I,I,I,I,I];S.set(x,f*g*I)}const B=new Tt;B.setAttribute("position",new bt(A,v)),B.setAttribute("uv",new bt(E,m)),B.setAttribute("faceIndex",new bt(S,f)),e.push(B),s>Ii&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Jl(i,e,t){const n=new rn(i,e,t);return n.texture.mapping=Vr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Js(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function ug(i,e,t){const n=new Float32Array(Qn),s=new R(0,1,0);return new gt({name:"SphericalGaussianBlur",defines:{n:Qn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function ec(){return new gt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function tc(){return new gt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Ja(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dg(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ea||l===ta,h=l===ki||l===zi;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Ql(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new Ql(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function fg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&fs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function pg(i,e,t,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,f=v.length;m<f;m++)e.remove(v[m])}d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const v=p[g];for(let m=0,f=v.length;m<f;m++)e.update(v[m],i.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let v=0;if(p!==null){const A=p.array;v=p.version;for(let E=0,S=A.length;E<S;E+=3){const B=A[E+0],I=A[E+1],P=A[E+2];d.push(B,I,I,P,P,B)}}else if(g!==void 0){const A=g.array;v=g.version;for(let E=0,S=A.length/3-1;E<S;E+=3){const B=E+0,I=E+1,P=E+2;d.push(B,I,I,P,P,B)}}else return;const m=new(kh(d)?Wh:Gh)(d,1);m.version=v;const f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function mg(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*o),t.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),t.update(p,n,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function u(d,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,v,0,g);let f=0;for(let A=0;A<g;A++)f+=p[A]*v[A];t.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function gg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function vg(i,e,t){const n=new WeakMap,s=new ut;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let M=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let E=0;p===!0&&(E=1),g===!0&&(E=2),v===!0&&(E=3);let S=a.attributes.position.count*E,B=1;S>e.maxTextureSize&&(B=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const I=new Float32Array(S*B*4*u),P=new Vh(I,S,B,u);P.type=cn,P.needsUpdate=!0;const U=E*4;for(let x=0;x<u;x++){const C=m[x],W=f[x],O=A[x],H=S*B*4*x;for(let J=0;J<C.count;J++){const X=J*U;p===!0&&(s.fromBufferAttribute(C,J),I[H+X+0]=s.x,I[H+X+1]=s.y,I[H+X+2]=s.z,I[H+X+3]=0),g===!0&&(s.fromBufferAttribute(W,J),I[H+X+4]=s.x,I[H+X+5]=s.y,I[H+X+6]=s.z,I[H+X+7]=0),v===!0&&(s.fromBufferAttribute(O,J),I[H+X+8]=s.x,I[H+X+9]=s.y,I[H+X+10]=s.z,I[H+X+11]=O.itemSize===4?s.w:1)}}d={count:u,texture:P,size:new ne(S,B)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];const g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function _g(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class jh extends Ct{constructor(e,t,n,s,r,o,a,l,c,h=Ui){if(h!==Ui&&h!==Hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ui&&(n=ti),n===void 0&&h===Hi&&(n=Vi),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ht,this.minFilter=l!==void 0?l:Ht,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Qh=new Ct,nc=new jh(1,1),Jh=new Vh,eu=new rf,tu=new Yh,ic=[],sc=[],rc=new Float32Array(16),oc=new Float32Array(9),ac=new Float32Array(4);function Zi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=ic[s];if(r===void 0&&(r=new Float32Array(s),ic[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function _t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Xr(i,e){let t=sc[e];t===void 0&&(t=new Int32Array(e),sc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function xg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function yg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2fv(this.addr,e),xt(t,e)}}function Sg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;i.uniform3fv(this.addr,e),xt(t,e)}}function Mg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4fv(this.addr,e),xt(t,e)}}function Eg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,n))return;ac.set(n),i.uniformMatrix2fv(this.addr,!1,ac),xt(t,n)}}function bg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,n))return;oc.set(n),i.uniformMatrix3fv(this.addr,!1,oc),xt(t,n)}}function Tg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,n))return;rc.set(n),i.uniformMatrix4fv(this.addr,!1,rc),xt(t,n)}}function wg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ag(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2iv(this.addr,e),xt(t,e)}}function Rg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3iv(this.addr,e),xt(t,e)}}function Cg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4iv(this.addr,e),xt(t,e)}}function Pg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ig(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2uiv(this.addr,e),xt(t,e)}}function Dg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3uiv(this.addr,e),xt(t,e)}}function Lg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4uiv(this.addr,e),xt(t,e)}}function Ng(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(nc.compareFunction=Bh,r=nc):r=Qh,t.setTexture2D(e||r,s)}function Ug(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||eu,s)}function Fg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||tu,s)}function Og(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Jh,s)}function Bg(i){switch(i){case 5126:return xg;case 35664:return yg;case 35665:return Sg;case 35666:return Mg;case 35674:return Eg;case 35675:return bg;case 35676:return Tg;case 5124:case 35670:return wg;case 35667:case 35671:return Ag;case 35668:case 35672:return Rg;case 35669:case 35673:return Cg;case 5125:return Pg;case 36294:return Ig;case 36295:return Dg;case 36296:return Lg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ng;case 35679:case 36299:case 36307:return Ug;case 35680:case 36300:case 36308:case 36293:return Fg;case 36289:case 36303:case 36311:case 36292:return Og}}function kg(i,e){i.uniform1fv(this.addr,e)}function zg(i,e){const t=Zi(e,this.size,2);i.uniform2fv(this.addr,t)}function Vg(i,e){const t=Zi(e,this.size,3);i.uniform3fv(this.addr,t)}function Hg(i,e){const t=Zi(e,this.size,4);i.uniform4fv(this.addr,t)}function Gg(i,e){const t=Zi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Wg(i,e){const t=Zi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Xg(i,e){const t=Zi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function qg(i,e){i.uniform1iv(this.addr,e)}function Yg(i,e){i.uniform2iv(this.addr,e)}function $g(i,e){i.uniform3iv(this.addr,e)}function Kg(i,e){i.uniform4iv(this.addr,e)}function Zg(i,e){i.uniform1uiv(this.addr,e)}function jg(i,e){i.uniform2uiv(this.addr,e)}function Qg(i,e){i.uniform3uiv(this.addr,e)}function Jg(i,e){i.uniform4uiv(this.addr,e)}function ev(i,e,t){const n=this.cache,s=e.length,r=Xr(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),xt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Qh,r[o])}function tv(i,e,t){const n=this.cache,s=e.length,r=Xr(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),xt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||eu,r[o])}function nv(i,e,t){const n=this.cache,s=e.length,r=Xr(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),xt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||tu,r[o])}function iv(i,e,t){const n=this.cache,s=e.length,r=Xr(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),xt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Jh,r[o])}function sv(i){switch(i){case 5126:return kg;case 35664:return zg;case 35665:return Vg;case 35666:return Hg;case 35674:return Gg;case 35675:return Wg;case 35676:return Xg;case 5124:case 35670:return qg;case 35667:case 35671:return Yg;case 35668:case 35672:return $g;case 35669:case 35673:return Kg;case 5125:return Zg;case 36294:return jg;case 36295:return Qg;case 36296:return Jg;case 35678:case 36198:case 36298:case 36306:case 35682:return ev;case 35679:case 36299:case 36307:return tv;case 35680:case 36300:case 36308:case 36293:return nv;case 36289:case 36303:case 36311:case 36292:return iv}}class rv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Bg(t.type)}}class ov{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sv(t.type)}}class av{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const So=/(\w+)(\])?(\[|\.)?/g;function lc(i,e){i.seq.push(e),i.map[e.id]=e}function lv(i,e,t){const n=i.name,s=n.length;for(So.lastIndex=0;;){const r=So.exec(n),o=So.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){lc(t,c===void 0?new rv(a,i,e):new ov(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new av(a),lc(t,u)),t=u}}}class Pr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);lv(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function cc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const cv=37297;let hv=0;function uv(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const hc=new We;function dv(i){Ke._getMatrix(hc,Ke.workingColorSpace,i);const e=`mat3( ${hc.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(i)){case Hr:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function uc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+uv(i.getShaderSource(e),o)}else return s}function fv(i,e){const t=dv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function pv(i,e){let t;switch(e){case Eh:t="Linear";break;case bh:t="Reinhard";break;case Th:t="Cineon";break;case Ga:t="ACESFilmic";break;case wh:t="AgX";break;case Ah:t="Neutral";break;case Sd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const er=new R;function mv(){Ke.getLuminanceCoefficients(er);const i=er.x.toFixed(4),e=er.y.toFixed(4),t=er.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ps).join(`
`)}function vv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function _v(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ps(i){return i!==""}function dc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pa(i){return i.replace(xv,Sv)}const yv=new Map;function Sv(i,e){let t=Xe[e];if(t===void 0){const n=yv.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Pa(t)}const Mv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pc(i){return i.replace(Mv,Ev)}function Ev(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function bv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Sh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ed?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===_n&&(e="SHADOWMAP_TYPE_VSM"),e}function Tv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ki:case zi:e="ENVMAP_TYPE_CUBE";break;case Vr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case zi:e="ENVMAP_MODE_REFRACTION";break}return e}function Av(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Mh:e="ENVMAP_BLENDING_MULTIPLY";break;case xd:e="ENVMAP_BLENDING_MIX";break;case yd:e="ENVMAP_BLENDING_ADD";break}return e}function Rv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Cv(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=bv(t),c=Tv(t),h=wv(t),u=Av(t),d=Rv(t),p=gv(t),g=vv(r),v=s.createProgram();let m,f,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ps).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ps).join(`
`),f.length>0&&(f+=`
`)):(m=[mc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ps).join(`
`),f=[mc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==kn?"#define TONE_MAPPING":"",t.toneMapping!==kn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==kn?pv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,fv("linearToOutputTexel",t.outputColorSpace),mv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ps).join(`
`)),o=Pa(o),o=dc(o,t),o=fc(o,t),a=Pa(a),a=dc(a,t),a=fc(a,t),o=pc(o),a=pc(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Al?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Al?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=A+m+o,S=A+f+a,B=cc(s,s.VERTEX_SHADER,E),I=cc(s,s.FRAGMENT_SHADER,S);s.attachShader(v,B),s.attachShader(v,I),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function P(C){if(i.debug.checkShaderErrors){const W=s.getProgramInfoLog(v).trim(),O=s.getShaderInfoLog(B).trim(),H=s.getShaderInfoLog(I).trim();let J=!0,X=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,B,I);else{const ie=uc(s,B,"vertex"),G=uc(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+W+`
`+ie+`
`+G)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(O===""||H==="")&&(X=!1);X&&(C.diagnostics={runnable:J,programLog:W,vertexShader:{log:O,prefix:m},fragmentShader:{log:H,prefix:f}})}s.deleteShader(B),s.deleteShader(I),U=new Pr(s,v),M=_v(s,v)}let U;this.getUniforms=function(){return U===void 0&&P(this),U};let M;this.getAttributes=function(){return M===void 0&&P(this),M};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(v,cv)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=B,this.fragmentShader=I,this}let Pv=0;class Iv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Dv(e),t.set(e,n)),n}}class Dv{constructor(e){this.id=Pv++,this.code=e,this.usedTimes=0}}function Lv(i,e,t,n,s,r,o){const a=new Qa,l=new Iv,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,x,C,W,O){const H=W.fog,J=O.geometry,X=M.isMeshStandardMaterial?W.environment:null,ie=(M.isMeshStandardMaterial?t:e).get(M.envMap||X),G=ie&&ie.mapping===Vr?ie.image.height:null,le=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const ve=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Te=ve!==void 0?ve.length:0;let Be=0;J.morphAttributes.position!==void 0&&(Be=1),J.morphAttributes.normal!==void 0&&(Be=2),J.morphAttributes.color!==void 0&&(Be=3);let Ze,K,ee,Me;if(le){const tt=an[le];Ze=tt.vertexShader,K=tt.fragmentShader}else Ze=M.vertexShader,K=M.fragmentShader,l.update(M),ee=l.getVertexShaderID(M),Me=l.getFragmentShaderID(M);const ce=i.getRenderTarget(),Ne=i.state.buffers.depth.getReversed(),ke=O.isInstancedMesh===!0,Oe=O.isBatchedMesh===!0,Ye=!!M.map,Z=!!M.matcap,re=!!ie,w=!!M.aoMap,Re=!!M.lightMap,te=!!M.bumpMap,_e=!!M.normalMap,oe=!!M.displacementMap,Ee=!!M.emissiveMap,ue=!!M.metalnessMap,b=!!M.roughnessMap,_=M.anisotropy>0,F=M.clearcoat>0,$=M.dispersion>0,Q=M.iridescence>0,Y=M.sheen>0,we=M.transmission>0,de=_&&!!M.anisotropyMap,xe=F&&!!M.clearcoatMap,qe=F&&!!M.clearcoatNormalMap,se=F&&!!M.clearcoatRoughnessMap,be=Q&&!!M.iridescenceMap,Ue=Q&&!!M.iridescenceThicknessMap,Fe=Y&&!!M.sheenColorMap,Ae=Y&&!!M.sheenRoughnessMap,$e=!!M.specularMap,q=!!M.specularColorMap,pe=!!M.specularIntensityMap,D=we&&!!M.transmissionMap,he=we&&!!M.thicknessMap,V=!!M.gradientMap,j=!!M.alphaMap,me=M.alphaTest>0,ge=!!M.alphaHash,He=!!M.extensions;let ot=kn;M.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(ot=i.toneMapping);const wt={shaderID:le,shaderType:M.type,shaderName:M.name,vertexShader:Ze,fragmentShader:K,defines:M.defines,customVertexShaderID:ee,customFragmentShaderID:Me,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Oe,batchingColor:Oe&&O._colorsTexture!==null,instancing:ke,instancingColor:ke&&O.instanceColor!==null,instancingMorph:ke&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ce===null?i.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:$i,alphaToCoverage:!!M.alphaToCoverage,map:Ye,matcap:Z,envMap:re,envMapMode:re&&ie.mapping,envMapCubeUVHeight:G,aoMap:w,lightMap:Re,bumpMap:te,normalMap:_e,displacementMap:d&&oe,emissiveMap:Ee,normalMapObjectSpace:_e&&M.normalMapType===wd,normalMapTangentSpace:_e&&M.normalMapType===Td,metalnessMap:ue,roughnessMap:b,anisotropy:_,anisotropyMap:de,clearcoat:F,clearcoatMap:xe,clearcoatNormalMap:qe,clearcoatRoughnessMap:se,dispersion:$,iridescence:Q,iridescenceMap:be,iridescenceThicknessMap:Ue,sheen:Y,sheenColorMap:Fe,sheenRoughnessMap:Ae,specularMap:$e,specularColorMap:q,specularIntensityMap:pe,transmission:we,transmissionMap:D,thicknessMap:he,gradientMap:V,opaque:M.transparent===!1&&M.blending===Ni&&M.alphaToCoverage===!1,alphaMap:j,alphaTest:me,alphaHash:ge,combine:M.combine,mapUv:Ye&&v(M.map.channel),aoMapUv:w&&v(M.aoMap.channel),lightMapUv:Re&&v(M.lightMap.channel),bumpMapUv:te&&v(M.bumpMap.channel),normalMapUv:_e&&v(M.normalMap.channel),displacementMapUv:oe&&v(M.displacementMap.channel),emissiveMapUv:Ee&&v(M.emissiveMap.channel),metalnessMapUv:ue&&v(M.metalnessMap.channel),roughnessMapUv:b&&v(M.roughnessMap.channel),anisotropyMapUv:de&&v(M.anisotropyMap.channel),clearcoatMapUv:xe&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:qe&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&v(M.sheenRoughnessMap.channel),specularMapUv:$e&&v(M.specularMap.channel),specularColorMapUv:q&&v(M.specularColorMap.channel),specularIntensityMapUv:pe&&v(M.specularIntensityMap.channel),transmissionMapUv:D&&v(M.transmissionMap.channel),thicknessMapUv:he&&v(M.thicknessMap.channel),alphaMapUv:j&&v(M.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(_e||_),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!J.attributes.uv&&(Ye||j),fog:!!H,useFog:M.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ne,skinning:O.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Be,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:ot,decodeVideoTexture:Ye&&M.map.isVideoTexture===!0&&Ke.getTransfer(M.map.colorSpace)===nt,decodeVideoTextureEmissive:Ee&&M.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(M.emissiveMap.colorSpace)===nt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===$t,flipSided:M.side===Ft,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:He&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&M.extensions.multiDraw===!0||Oe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return wt.vertexUv1s=c.has(1),wt.vertexUv2s=c.has(2),wt.vertexUv3s=c.has(3),c.clear(),wt}function f(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const C in M.defines)x.push(C),x.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(A(x,M),E(x,M),x.push(i.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function A(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function E(M,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),M.push(a.mask)}function S(M){const x=g[M.type];let C;if(x){const W=an[x];C=Ts.clone(W.uniforms)}else C=M.uniforms;return C}function B(M,x){let C;for(let W=0,O=h.length;W<O;W++){const H=h[W];if(H.cacheKey===x){C=H,++C.usedTimes;break}}return C===void 0&&(C=new Cv(i,x,M,r),h.push(C)),C}function I(M){if(--M.usedTimes===0){const x=h.indexOf(M);h[x]=h[h.length-1],h.pop(),M.destroy()}}function P(M){l.remove(M)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:B,releaseProgram:I,releaseShaderCache:P,programs:h,dispose:U}}function Nv(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Uv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function gc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function vc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,p,g,v,m){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=v,f.group=m),e++,f}function a(u,d,p,g,v,m){const f=o(u,d,p,g,v,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(u,d,p,g,v,m){const f=o(u,d,p,g,v,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||Uv),n.length>1&&n.sort(d||gc),s.length>1&&s.sort(d||gc)}function h(){for(let u=e,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Fv(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new vc,i.set(n,[o])):s>=r.length?(o=new vc,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ov(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new ze};break;case"SpotLight":t={position:new R,direction:new R,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function Bv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let kv=0;function zv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Vv(i){const e=new Ov,t=Bv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const s=new R,r=new st,o=new st;function a(c){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,A=0,E=0,S=0,B=0,I=0,P=0;c.sort(zv);for(let M=0,x=c.length;M<x;M++){const C=c[M],W=C.color,O=C.intensity,H=C.distance,J=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=W.r*O,u+=W.g*O,d+=W.b*O;else if(C.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(C.sh.coefficients[X],O);P++}else if(C.isDirectionalLight){const X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const ie=C.shadow,G=t.get(C);G.shadowIntensity=ie.intensity,G.shadowBias=ie.bias,G.shadowNormalBias=ie.normalBias,G.shadowRadius=ie.radius,G.shadowMapSize=ie.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=J,n.directionalShadowMatrix[p]=C.shadow.matrix,A++}n.directional[p]=X,p++}else if(C.isSpotLight){const X=e.get(C);X.position.setFromMatrixPosition(C.matrixWorld),X.color.copy(W).multiplyScalar(O),X.distance=H,X.coneCos=Math.cos(C.angle),X.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),X.decay=C.decay,n.spot[v]=X;const ie=C.shadow;if(C.map&&(n.spotLightMap[B]=C.map,B++,ie.updateMatrices(C),C.castShadow&&I++),n.spotLightMatrix[v]=ie.matrix,C.castShadow){const G=t.get(C);G.shadowIntensity=ie.intensity,G.shadowBias=ie.bias,G.shadowNormalBias=ie.normalBias,G.shadowRadius=ie.radius,G.shadowMapSize=ie.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=J,S++}v++}else if(C.isRectAreaLight){const X=e.get(C);X.color.copy(W).multiplyScalar(O),X.halfWidth.set(C.width*.5,0,0),X.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=X,m++}else if(C.isPointLight){const X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),X.distance=C.distance,X.decay=C.decay,C.castShadow){const ie=C.shadow,G=t.get(C);G.shadowIntensity=ie.intensity,G.shadowBias=ie.bias,G.shadowNormalBias=ie.normalBias,G.shadowRadius=ie.radius,G.shadowMapSize=ie.mapSize,G.shadowCameraNear=ie.camera.near,G.shadowCameraFar=ie.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=J,n.pointShadowMatrix[g]=C.shadow.matrix,E++}n.point[g]=X,g++}else if(C.isHemisphereLight){const X=e.get(C);X.skyColor.copy(C.color).multiplyScalar(O),X.groundColor.copy(C.groundColor).multiplyScalar(O),n.hemi[f]=X,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const U=n.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==v||U.rectAreaLength!==m||U.hemiLength!==f||U.numDirectionalShadows!==A||U.numPointShadows!==E||U.numSpotShadows!==S||U.numSpotMaps!==B||U.numLightProbes!==P)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=S+B-I,n.spotLightMap.length=B,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=P,U.directionalLength=p,U.pointLength=g,U.spotLength=v,U.rectAreaLength=m,U.hemiLength=f,U.numDirectionalShadows=A,U.numPointShadows=E,U.numSpotShadows=S,U.numSpotMaps=B,U.numLightProbes=P,n.version=kv++)}function l(c,h){let u=0,d=0,p=0,g=0,v=0;const m=h.matrixWorldInverse;for(let f=0,A=c.length;f<A;f++){const E=c[f];if(E.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),u++}else if(E.isSpotLight){const S=n.spot[p];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const S=n.hemi[v];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function _c(i){const e=new Vv(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Hv(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new _c(i),e.set(s,[a])):r>=o.length?(a=new _c(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Gv extends Ki{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ed,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wv extends Ki{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Xv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Yv(i,e,t){let n=new $h;const s=new ne,r=new ne,o=new ut,a=new Gv({depthPacking:bd}),l=new Wv,c={},h=t.maxTextureSize,u={[bn]:Ft,[Ft]:bn,[$t]:$t},d=new gt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:Xv,fragmentShader:qv}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Tt;g.setAttribute("position",new bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Et(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sh;let f=this.type;this.render=function(I,P,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;const M=i.getRenderTarget(),x=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Sn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const O=f!==_n&&this.type===_n,H=f===_n&&this.type!==_n;for(let J=0,X=I.length;J<X;J++){const ie=I[J],G=ie.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const le=G.getFrameExtents();if(s.multiply(le),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/le.x),s.x=r.x*le.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/le.y),s.y=r.y*le.y,G.mapSize.y=r.y)),G.map===null||O===!0||H===!0){const Te=this.type!==_n?{minFilter:Ht,magFilter:Ht}:{};G.map!==null&&G.map.dispose(),G.map=new rn(s.x,s.y,Te),G.map.texture.name=ie.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const ve=G.getViewportCount();for(let Te=0;Te<ve;Te++){const Be=G.getViewport(Te);o.set(r.x*Be.x,r.y*Be.y,r.x*Be.z,r.y*Be.w),W.viewport(o),G.updateMatrices(ie,Te),n=G.getFrustum(),S(P,U,G.camera,ie,this.type)}G.isPointLightShadow!==!0&&this.type===_n&&A(G,U),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(M,x,C)};function A(I,P){const U=e.update(v);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,p.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new rn(s.x,s.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(P,null,U,d,v,null),p.uniforms.shadow_pass.value=I.mapPass.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(P,null,U,p,v,null)}function E(I,P,U,M){let x=null;const C=U.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(C!==void 0)x=C;else if(x=U.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const W=x.uuid,O=P.uuid;let H=c[W];H===void 0&&(H={},c[W]=H);let J=H[O];J===void 0&&(J=x.clone(),H[O]=J,P.addEventListener("dispose",B)),x=J}if(x.visible=P.visible,x.wireframe=P.wireframe,M===_n?x.side=P.shadowSide!==null?P.shadowSide:P.side:x.side=P.shadowSide!==null?P.shadowSide:u[P.side],x.alphaMap=P.alphaMap,x.alphaTest=P.alphaTest,x.map=P.map,x.clipShadows=P.clipShadows,x.clippingPlanes=P.clippingPlanes,x.clipIntersection=P.clipIntersection,x.displacementMap=P.displacementMap,x.displacementScale=P.displacementScale,x.displacementBias=P.displacementBias,x.wireframeLinewidth=P.wireframeLinewidth,x.linewidth=P.linewidth,U.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const W=i.properties.get(x);W.light=U}return x}function S(I,P,U,M,x){if(I.visible===!1)return;if(I.layers.test(P.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&x===_n)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,I.matrixWorld);const O=e.update(I),H=I.material;if(Array.isArray(H)){const J=O.groups;for(let X=0,ie=J.length;X<ie;X++){const G=J[X],le=H[G.materialIndex];if(le&&le.visible){const ve=E(I,le,M,x);I.onBeforeShadow(i,I,P,U,O,ve,G),i.renderBufferDirect(U,null,O,ve,I,G),I.onAfterShadow(i,I,P,U,O,ve,G)}}}else if(H.visible){const J=E(I,H,M,x);I.onBeforeShadow(i,I,P,U,O,J,null),i.renderBufferDirect(U,null,O,J,I,null),I.onAfterShadow(i,I,P,U,O,J,null)}}const W=I.children;for(let O=0,H=W.length;O<H;O++)S(W[O],P,U,M,x)}function B(I){I.target.removeEventListener("dispose",B);for(const U in c){const M=c[U],x=I.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}const $v={[Yo]:$o,[Ko]:Qo,[Zo]:Jo,[Bi]:jo,[$o]:Yo,[Qo]:Ko,[Jo]:Zo,[jo]:Bi};function Kv(i,e){function t(){let D=!1;const he=new ut;let V=null;const j=new ut(0,0,0,0);return{setMask:function(me){V!==me&&!D&&(i.colorMask(me,me,me,me),V=me)},setLocked:function(me){D=me},setClear:function(me,ge,He,ot,wt){wt===!0&&(me*=ot,ge*=ot,He*=ot),he.set(me,ge,He,ot),j.equals(he)===!1&&(i.clearColor(me,ge,He,ot),j.copy(he))},reset:function(){D=!1,V=null,j.set(-1,0,0,0)}}}function n(){let D=!1,he=!1,V=null,j=null,me=null;return{setReversed:function(ge){if(he!==ge){const He=e.get("EXT_clip_control");he?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT);const ot=me;me=null,this.setClear(ot)}he=ge},getReversed:function(){return he},setTest:function(ge){ge?ce(i.DEPTH_TEST):Ne(i.DEPTH_TEST)},setMask:function(ge){V!==ge&&!D&&(i.depthMask(ge),V=ge)},setFunc:function(ge){if(he&&(ge=$v[ge]),j!==ge){switch(ge){case Yo:i.depthFunc(i.NEVER);break;case $o:i.depthFunc(i.ALWAYS);break;case Ko:i.depthFunc(i.LESS);break;case Bi:i.depthFunc(i.LEQUAL);break;case Zo:i.depthFunc(i.EQUAL);break;case jo:i.depthFunc(i.GEQUAL);break;case Qo:i.depthFunc(i.GREATER);break;case Jo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=ge}},setLocked:function(ge){D=ge},setClear:function(ge){me!==ge&&(he&&(ge=1-ge),i.clearDepth(ge),me=ge)},reset:function(){D=!1,V=null,j=null,me=null,he=!1}}}function s(){let D=!1,he=null,V=null,j=null,me=null,ge=null,He=null,ot=null,wt=null;return{setTest:function(tt){D||(tt?ce(i.STENCIL_TEST):Ne(i.STENCIL_TEST))},setMask:function(tt){he!==tt&&!D&&(i.stencilMask(tt),he=tt)},setFunc:function(tt,Zt,un){(V!==tt||j!==Zt||me!==un)&&(i.stencilFunc(tt,Zt,un),V=tt,j=Zt,me=un)},setOp:function(tt,Zt,un){(ge!==tt||He!==Zt||ot!==un)&&(i.stencilOp(tt,Zt,un),ge=tt,He=Zt,ot=un)},setLocked:function(tt){D=tt},setClear:function(tt){wt!==tt&&(i.clearStencil(tt),wt=tt)},reset:function(){D=!1,he=null,V=null,j=null,me=null,ge=null,He=null,ot=null,wt=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,A=null,E=null,S=null,B=null,I=null,P=new ze(0,0,0),U=0,M=!1,x=null,C=null,W=null,O=null,H=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ie=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(G)[1]),X=ie>=1):G.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),X=ie>=2);let le=null,ve={};const Te=i.getParameter(i.SCISSOR_BOX),Be=i.getParameter(i.VIEWPORT),Ze=new ut().fromArray(Te),K=new ut().fromArray(Be);function ee(D,he,V,j){const me=new Uint8Array(4),ge=i.createTexture();i.bindTexture(D,ge),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let He=0;He<V;He++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(he+He,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return ge}const Me={};Me[i.TEXTURE_2D]=ee(i.TEXTURE_2D,i.TEXTURE_2D,1),Me[i.TEXTURE_CUBE_MAP]=ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[i.TEXTURE_2D_ARRAY]=ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Me[i.TEXTURE_3D]=ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ce(i.DEPTH_TEST),o.setFunc(Bi),te(!1),_e(Ml),ce(i.CULL_FACE),w(Sn);function ce(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Ne(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function ke(D,he){return u[D]!==he?(i.bindFramebuffer(D,he),u[D]=he,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=he),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=he),!0):!1}function Oe(D,he){let V=p,j=!1;if(D){V=d.get(he),V===void 0&&(V=[],d.set(he,V));const me=D.textures;if(V.length!==me.length||V[0]!==i.COLOR_ATTACHMENT0){for(let ge=0,He=me.length;ge<He;ge++)V[ge]=i.COLOR_ATTACHMENT0+ge;V.length=me.length,j=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,j=!0);j&&i.drawBuffers(V)}function Ye(D){return g!==D?(i.useProgram(D),g=D,!0):!1}const Z={[jn]:i.FUNC_ADD,[nd]:i.FUNC_SUBTRACT,[id]:i.FUNC_REVERSE_SUBTRACT};Z[sd]=i.MIN,Z[rd]=i.MAX;const re={[od]:i.ZERO,[ad]:i.ONE,[ld]:i.SRC_COLOR,[Xo]:i.SRC_ALPHA,[pd]:i.SRC_ALPHA_SATURATE,[dd]:i.DST_COLOR,[hd]:i.DST_ALPHA,[cd]:i.ONE_MINUS_SRC_COLOR,[qo]:i.ONE_MINUS_SRC_ALPHA,[fd]:i.ONE_MINUS_DST_COLOR,[ud]:i.ONE_MINUS_DST_ALPHA,[md]:i.CONSTANT_COLOR,[gd]:i.ONE_MINUS_CONSTANT_COLOR,[vd]:i.CONSTANT_ALPHA,[_d]:i.ONE_MINUS_CONSTANT_ALPHA};function w(D,he,V,j,me,ge,He,ot,wt,tt){if(D===Sn){v===!0&&(Ne(i.BLEND),v=!1);return}if(v===!1&&(ce(i.BLEND),v=!0),D!==td){if(D!==m||tt!==M){if((f!==jn||S!==jn)&&(i.blendEquation(i.FUNC_ADD),f=jn,S=jn),tt)switch(D){case Ni:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tn:i.blendFunc(i.ONE,i.ONE);break;case El:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ni:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case El:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}A=null,E=null,B=null,I=null,P.set(0,0,0),U=0,m=D,M=tt}return}me=me||he,ge=ge||V,He=He||j,(he!==f||me!==S)&&(i.blendEquationSeparate(Z[he],Z[me]),f=he,S=me),(V!==A||j!==E||ge!==B||He!==I)&&(i.blendFuncSeparate(re[V],re[j],re[ge],re[He]),A=V,E=j,B=ge,I=He),(ot.equals(P)===!1||wt!==U)&&(i.blendColor(ot.r,ot.g,ot.b,wt),P.copy(ot),U=wt),m=D,M=!1}function Re(D,he){D.side===$t?Ne(i.CULL_FACE):ce(i.CULL_FACE);let V=D.side===Ft;he&&(V=!V),te(V),D.blending===Ni&&D.transparent===!1?w(Sn):w(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const j=D.stencilWrite;a.setTest(j),j&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ee(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ce(i.SAMPLE_ALPHA_TO_COVERAGE):Ne(i.SAMPLE_ALPHA_TO_COVERAGE)}function te(D){x!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),x=D)}function _e(D){D!==Qu?(ce(i.CULL_FACE),D!==C&&(D===Ml?i.cullFace(i.BACK):D===Ju?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ne(i.CULL_FACE),C=D}function oe(D){D!==W&&(X&&i.lineWidth(D),W=D)}function Ee(D,he,V){D?(ce(i.POLYGON_OFFSET_FILL),(O!==he||H!==V)&&(i.polygonOffset(he,V),O=he,H=V)):Ne(i.POLYGON_OFFSET_FILL)}function ue(D){D?ce(i.SCISSOR_TEST):Ne(i.SCISSOR_TEST)}function b(D){D===void 0&&(D=i.TEXTURE0+J-1),le!==D&&(i.activeTexture(D),le=D)}function _(D,he,V){V===void 0&&(le===null?V=i.TEXTURE0+J-1:V=le);let j=ve[V];j===void 0&&(j={type:void 0,texture:void 0},ve[V]=j),(j.type!==D||j.texture!==he)&&(le!==V&&(i.activeTexture(V),le=V),i.bindTexture(D,he||Me[D]),j.type=D,j.texture=he)}function F(){const D=ve[le];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function qe(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ue(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Fe(D){Ze.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Ze.copy(D))}function Ae(D){K.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),K.copy(D))}function $e(D,he){let V=c.get(he);V===void 0&&(V=new WeakMap,c.set(he,V));let j=V.get(D);j===void 0&&(j=i.getUniformBlockIndex(he,D.name),V.set(D,j))}function q(D,he){const j=c.get(he).get(D);l.get(he)!==j&&(i.uniformBlockBinding(he,j,D.__bindingPointIndex),l.set(he,j))}function pe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},le=null,ve={},u={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,A=null,E=null,S=null,B=null,I=null,P=new ze(0,0,0),U=0,M=!1,x=null,C=null,W=null,O=null,H=null,Ze.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ce,disable:Ne,bindFramebuffer:ke,drawBuffers:Oe,useProgram:Ye,setBlending:w,setMaterial:Re,setFlipSided:te,setCullFace:_e,setLineWidth:oe,setPolygonOffset:Ee,setScissorTest:ue,activeTexture:b,bindTexture:_,unbindTexture:F,compressedTexImage2D:$,compressedTexImage3D:Q,texImage2D:be,texImage3D:Ue,updateUBOMapping:$e,uniformBlockBinding:q,texStorage2D:qe,texStorage3D:se,texSubImage2D:Y,texSubImage3D:we,compressedTexSubImage2D:de,compressedTexSubImage3D:xe,scissor:Fe,viewport:Ae,reset:pe}}function xc(i,e,t,n){const s=Zv(n);switch(t){case Dh:return i*e;case Nh:return i*e;case Uh:return i*e*2;case Ya:return i*e/s.components*s.byteLength;case $a:return i*e/s.components*s.byteLength;case Fh:return i*e*2/s.components*s.byteLength;case Ka:return i*e*2/s.components*s.byteLength;case Lh:return i*e*3/s.components*s.byteLength;case nn:return i*e*4/s.components*s.byteLength;case Za:return i*e*4/s.components*s.byteLength;case Tr:case wr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ar:case Rr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ra:case aa:return Math.max(i,16)*Math.max(e,8)/4;case sa:case oa:return Math.max(i,8)*Math.max(e,8)/2;case la:case ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ha:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case da:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case fa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case pa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ma:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ga:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case va:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case _a:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case xa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ya:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Sa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ma:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ea:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ba:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Cr:case Ta:case wa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Oh:case Aa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ra:case Ca:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Zv(i){switch(i){case wn:case Ch:return{byteLength:1,components:1};case Es:case Ph:case Mn:return{byteLength:2,components:1};case Xa:case qa:return{byteLength:2,components:4};case ti:case Wa:case cn:return{byteLength:4,components:1};case Ih:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function jv(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ne,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,_){return p?new OffscreenCanvas(b,_):Ur("canvas")}function v(b,_,F){let $=1;const Q=ue(b);if((Q.width>F||Q.height>F)&&($=F/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Y=Math.floor($*Q.width),we=Math.floor($*Q.height);u===void 0&&(u=g(Y,we));const de=_?g(Y,we):u;return de.width=Y,de.height=we,de.getContext("2d").drawImage(b,0,0,Y,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Y+"x"+we+")."),de}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),b;return b}function m(b){return b.generateMipmaps}function f(b){i.generateMipmap(b)}function A(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(b,_,F,$,Q=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Y=_;if(_===i.RED&&(F===i.FLOAT&&(Y=i.R32F),F===i.HALF_FLOAT&&(Y=i.R16F),F===i.UNSIGNED_BYTE&&(Y=i.R8)),_===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.R8UI),F===i.UNSIGNED_SHORT&&(Y=i.R16UI),F===i.UNSIGNED_INT&&(Y=i.R32UI),F===i.BYTE&&(Y=i.R8I),F===i.SHORT&&(Y=i.R16I),F===i.INT&&(Y=i.R32I)),_===i.RG&&(F===i.FLOAT&&(Y=i.RG32F),F===i.HALF_FLOAT&&(Y=i.RG16F),F===i.UNSIGNED_BYTE&&(Y=i.RG8)),_===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RG8UI),F===i.UNSIGNED_SHORT&&(Y=i.RG16UI),F===i.UNSIGNED_INT&&(Y=i.RG32UI),F===i.BYTE&&(Y=i.RG8I),F===i.SHORT&&(Y=i.RG16I),F===i.INT&&(Y=i.RG32I)),_===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),F===i.UNSIGNED_INT&&(Y=i.RGB32UI),F===i.BYTE&&(Y=i.RGB8I),F===i.SHORT&&(Y=i.RGB16I),F===i.INT&&(Y=i.RGB32I)),_===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),F===i.UNSIGNED_INT&&(Y=i.RGBA32UI),F===i.BYTE&&(Y=i.RGBA8I),F===i.SHORT&&(Y=i.RGBA16I),F===i.INT&&(Y=i.RGBA32I)),_===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),_===i.RGBA){const we=Q?Hr:Ke.getTransfer($);F===i.FLOAT&&(Y=i.RGBA32F),F===i.HALF_FLOAT&&(Y=i.RGBA16F),F===i.UNSIGNED_BYTE&&(Y=we===nt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function S(b,_){let F;return b?_===null||_===ti||_===Vi?F=i.DEPTH24_STENCIL8:_===cn?F=i.DEPTH32F_STENCIL8:_===Es&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ti||_===Vi?F=i.DEPTH_COMPONENT24:_===cn?F=i.DEPTH_COMPONENT32F:_===Es&&(F=i.DEPTH_COMPONENT16),F}function B(b,_){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Ht&&b.minFilter!==ln?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function I(b){const _=b.target;_.removeEventListener("dispose",I),U(_),_.isVideoTexture&&h.delete(_)}function P(b){const _=b.target;_.removeEventListener("dispose",P),x(_)}function U(b){const _=n.get(b);if(_.__webglInit===void 0)return;const F=b.source,$=d.get(F);if($){const Q=$[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(b),Object.keys($).length===0&&d.delete(F)}n.remove(b)}function M(b){const _=n.get(b);i.deleteTexture(_.__webglTexture);const F=b.source,$=d.get(F);delete $[_.__cacheKey],o.memory.textures--}function x(b){const _=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(_.__webglFramebuffer[$]))for(let Q=0;Q<_.__webglFramebuffer[$].length;Q++)i.deleteFramebuffer(_.__webglFramebuffer[$][Q]);else i.deleteFramebuffer(_.__webglFramebuffer[$]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[$])}else{if(Array.isArray(_.__webglFramebuffer))for(let $=0;$<_.__webglFramebuffer.length;$++)i.deleteFramebuffer(_.__webglFramebuffer[$]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let $=0;$<_.__webglColorRenderbuffer.length;$++)_.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[$]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=b.textures;for(let $=0,Q=F.length;$<Q;$++){const Y=n.get(F[$]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(F[$])}n.remove(b)}let C=0;function W(){C=0}function O(){const b=C;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),C+=1,b}function H(b){const _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function J(b,_){const F=n.get(b);if(b.isVideoTexture&&oe(b),b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){const $=b.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(F,b,_);return}}t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+_)}function X(b,_){const F=n.get(b);if(b.version>0&&F.__version!==b.version){K(F,b,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+_)}function ie(b,_){const F=n.get(b);if(b.version>0&&F.__version!==b.version){K(F,b,_);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+_)}function G(b,_){const F=n.get(b);if(b.version>0&&F.__version!==b.version){ee(F,b,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+_)}const le={[na]:i.REPEAT,[Jn]:i.CLAMP_TO_EDGE,[ia]:i.MIRRORED_REPEAT},ve={[Ht]:i.NEAREST,[Md]:i.NEAREST_MIPMAP_NEAREST,[Ns]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[$r]:i.LINEAR_MIPMAP_NEAREST,[ei]:i.LINEAR_MIPMAP_LINEAR},Te={[Ad]:i.NEVER,[Ld]:i.ALWAYS,[Rd]:i.LESS,[Bh]:i.LEQUAL,[Cd]:i.EQUAL,[Dd]:i.GEQUAL,[Pd]:i.GREATER,[Id]:i.NOTEQUAL};function Be(b,_){if(_.type===cn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===ln||_.magFilter===$r||_.magFilter===Ns||_.magFilter===ei||_.minFilter===ln||_.minFilter===$r||_.minFilter===Ns||_.minFilter===ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,le[_.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,le[_.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,le[_.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,ve[_.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,ve[_.minFilter]),_.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,Te[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ht||_.minFilter!==Ns&&_.minFilter!==ei||_.type===cn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Ze(b,_){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",I));const $=_.source;let Q=d.get($);Q===void 0&&(Q={},d.set($,Q));const Y=H(_);if(Y!==b.__cacheKey){Q[Y]===void 0&&(Q[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),Q[Y].usedTimes++;const we=Q[b.__cacheKey];we!==void 0&&(Q[b.__cacheKey].usedTimes--,we.usedTimes===0&&M(_)),b.__cacheKey=Y,b.__webglTexture=Q[Y].texture}return F}function K(b,_,F){let $=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&($=i.TEXTURE_3D);const Q=Ze(b,_),Y=_.source;t.bindTexture($,b.__webglTexture,i.TEXTURE0+F);const we=n.get(Y);if(Y.version!==we.__version||Q===!0){t.activeTexture(i.TEXTURE0+F);const de=Ke.getPrimaries(Ke.workingColorSpace),xe=_.colorSpace===Bn?null:Ke.getPrimaries(_.colorSpace),qe=_.colorSpace===Bn||de===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let se=v(_.image,!1,s.maxTextureSize);se=Ee(_,se);const be=r.convert(_.format,_.colorSpace),Ue=r.convert(_.type);let Fe=E(_.internalFormat,be,Ue,_.colorSpace,_.isVideoTexture);Be($,_);let Ae;const $e=_.mipmaps,q=_.isVideoTexture!==!0,pe=we.__version===void 0||Q===!0,D=Y.dataReady,he=B(_,se);if(_.isDepthTexture)Fe=S(_.format===Hi,_.type),pe&&(q?t.texStorage2D(i.TEXTURE_2D,1,Fe,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,Fe,se.width,se.height,0,be,Ue,null));else if(_.isDataTexture)if($e.length>0){q&&pe&&t.texStorage2D(i.TEXTURE_2D,he,Fe,$e[0].width,$e[0].height);for(let V=0,j=$e.length;V<j;V++)Ae=$e[V],q?D&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,Ae.width,Ae.height,be,Ue,Ae.data):t.texImage2D(i.TEXTURE_2D,V,Fe,Ae.width,Ae.height,0,be,Ue,Ae.data);_.generateMipmaps=!1}else q?(pe&&t.texStorage2D(i.TEXTURE_2D,he,Fe,se.width,se.height),D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,se.width,se.height,be,Ue,se.data)):t.texImage2D(i.TEXTURE_2D,0,Fe,se.width,se.height,0,be,Ue,se.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){q&&pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,Fe,$e[0].width,$e[0].height,se.depth);for(let V=0,j=$e.length;V<j;V++)if(Ae=$e[V],_.format!==nn)if(be!==null)if(q){if(D)if(_.layerUpdates.size>0){const me=xc(Ae.width,Ae.height,_.format,_.type);for(const ge of _.layerUpdates){const He=Ae.data.subarray(ge*me/Ae.data.BYTES_PER_ELEMENT,(ge+1)*me/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,ge,Ae.width,Ae.height,1,be,He)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,Ae.width,Ae.height,se.depth,be,Ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,Fe,Ae.width,Ae.height,se.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,Ae.width,Ae.height,se.depth,be,Ue,Ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,V,Fe,Ae.width,Ae.height,se.depth,0,be,Ue,Ae.data)}else{q&&pe&&t.texStorage2D(i.TEXTURE_2D,he,Fe,$e[0].width,$e[0].height);for(let V=0,j=$e.length;V<j;V++)Ae=$e[V],_.format!==nn?be!==null?q?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,Ae.width,Ae.height,be,Ae.data):t.compressedTexImage2D(i.TEXTURE_2D,V,Fe,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?D&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,Ae.width,Ae.height,be,Ue,Ae.data):t.texImage2D(i.TEXTURE_2D,V,Fe,Ae.width,Ae.height,0,be,Ue,Ae.data)}else if(_.isDataArrayTexture)if(q){if(pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,Fe,se.width,se.height,se.depth),D)if(_.layerUpdates.size>0){const V=xc(se.width,se.height,_.format,_.type);for(const j of _.layerUpdates){const me=se.data.subarray(j*V/se.data.BYTES_PER_ELEMENT,(j+1)*V/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,se.width,se.height,1,be,Ue,me)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,be,Ue,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Fe,se.width,se.height,se.depth,0,be,Ue,se.data);else if(_.isData3DTexture)q?(pe&&t.texStorage3D(i.TEXTURE_3D,he,Fe,se.width,se.height,se.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,be,Ue,se.data)):t.texImage3D(i.TEXTURE_3D,0,Fe,se.width,se.height,se.depth,0,be,Ue,se.data);else if(_.isFramebufferTexture){if(pe)if(q)t.texStorage2D(i.TEXTURE_2D,he,Fe,se.width,se.height);else{let V=se.width,j=se.height;for(let me=0;me<he;me++)t.texImage2D(i.TEXTURE_2D,me,Fe,V,j,0,be,Ue,null),V>>=1,j>>=1}}else if($e.length>0){if(q&&pe){const V=ue($e[0]);t.texStorage2D(i.TEXTURE_2D,he,Fe,V.width,V.height)}for(let V=0,j=$e.length;V<j;V++)Ae=$e[V],q?D&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,be,Ue,Ae):t.texImage2D(i.TEXTURE_2D,V,Fe,be,Ue,Ae);_.generateMipmaps=!1}else if(q){if(pe){const V=ue(se);t.texStorage2D(i.TEXTURE_2D,he,Fe,V.width,V.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,be,Ue,se)}else t.texImage2D(i.TEXTURE_2D,0,Fe,be,Ue,se);m(_)&&f($),we.__version=Y.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function ee(b,_,F){if(_.image.length!==6)return;const $=Ze(b,_),Q=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+F);const Y=n.get(Q);if(Q.version!==Y.__version||$===!0){t.activeTexture(i.TEXTURE0+F);const we=Ke.getPrimaries(Ke.workingColorSpace),de=_.colorSpace===Bn?null:Ke.getPrimaries(_.colorSpace),xe=_.colorSpace===Bn||we===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const qe=_.isCompressedTexture||_.image[0].isCompressedTexture,se=_.image[0]&&_.image[0].isDataTexture,be=[];for(let j=0;j<6;j++)!qe&&!se?be[j]=v(_.image[j],!0,s.maxCubemapSize):be[j]=se?_.image[j].image:_.image[j],be[j]=Ee(_,be[j]);const Ue=be[0],Fe=r.convert(_.format,_.colorSpace),Ae=r.convert(_.type),$e=E(_.internalFormat,Fe,Ae,_.colorSpace),q=_.isVideoTexture!==!0,pe=Y.__version===void 0||$===!0,D=Q.dataReady;let he=B(_,Ue);Be(i.TEXTURE_CUBE_MAP,_);let V;if(qe){q&&pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,he,$e,Ue.width,Ue.height);for(let j=0;j<6;j++){V=be[j].mipmaps;for(let me=0;me<V.length;me++){const ge=V[me];_.format!==nn?Fe!==null?q?D&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,me,0,0,ge.width,ge.height,Fe,ge.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,me,$e,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,me,0,0,ge.width,ge.height,Fe,Ae,ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,me,$e,ge.width,ge.height,0,Fe,Ae,ge.data)}}}else{if(V=_.mipmaps,q&&pe){V.length>0&&he++;const j=ue(be[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,he,$e,j.width,j.height)}for(let j=0;j<6;j++)if(se){q?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,be[j].width,be[j].height,Fe,Ae,be[j].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,$e,be[j].width,be[j].height,0,Fe,Ae,be[j].data);for(let me=0;me<V.length;me++){const He=V[me].image[j].image;q?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,me+1,0,0,He.width,He.height,Fe,Ae,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,me+1,$e,He.width,He.height,0,Fe,Ae,He.data)}}else{q?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Fe,Ae,be[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,$e,Fe,Ae,be[j]);for(let me=0;me<V.length;me++){const ge=V[me];q?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,me+1,0,0,Fe,Ae,ge.image[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,me+1,$e,Fe,Ae,ge.image[j])}}}m(_)&&f(i.TEXTURE_CUBE_MAP),Y.__version=Q.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Me(b,_,F,$,Q,Y){const we=r.convert(F.format,F.colorSpace),de=r.convert(F.type),xe=E(F.internalFormat,we,de,F.colorSpace),qe=n.get(_),se=n.get(F);if(se.__renderTarget=_,!qe.__hasExternalTextures){const be=Math.max(1,_.width>>Y),Ue=Math.max(1,_.height>>Y);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,Y,xe,be,Ue,_.depth,0,we,de,null):t.texImage2D(Q,Y,xe,be,Ue,0,we,de,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),_e(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,Q,se.__webglTexture,0,te(_)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,Q,se.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(b,_,F){if(i.bindRenderbuffer(i.RENDERBUFFER,b),_.depthBuffer){const $=_.depthTexture,Q=$&&$.isDepthTexture?$.type:null,Y=S(_.stencilBuffer,Q),we=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=te(_);_e(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,Y,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,Y,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Y,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,we,i.RENDERBUFFER,b)}else{const $=_.textures;for(let Q=0;Q<$.length;Q++){const Y=$[Q],we=r.convert(Y.format,Y.colorSpace),de=r.convert(Y.type),xe=E(Y.internalFormat,we,de,Y.colorSpace),qe=te(_);F&&_e(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qe,xe,_.width,_.height):_e(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qe,xe,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,xe,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ne(b,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(_.depthTexture);$.__renderTarget=_,(!$.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),J(_.depthTexture,0);const Q=$.__webglTexture,Y=te(_);if(_.depthTexture.format===Ui)_e(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(_.depthTexture.format===Hi)_e(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ke(b){const _=n.get(b),F=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){const $=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),$){const Q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,$.removeEventListener("dispose",Q)};$.addEventListener("dispose",Q),_.__depthDisposeCallback=Q}_.__boundDepthTexture=$}if(b.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ne(_.__webglFramebuffer,b)}else if(F){_.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[$]),_.__webglDepthbuffer[$]===void 0)_.__webglDepthbuffer[$]=i.createRenderbuffer(),ce(_.__webglDepthbuffer[$],b,!1);else{const Q=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),ce(_.__webglDepthbuffer,b,!1);else{const $=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,Q)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(b,_,F){const $=n.get(b);_!==void 0&&Me($.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&ke(b)}function Ye(b){const _=b.texture,F=n.get(b),$=n.get(_);b.addEventListener("dispose",P);const Q=b.textures,Y=b.isWebGLCubeRenderTarget===!0,we=Q.length>1;if(we||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=_.version,o.memory.textures++),Y){F.__webglFramebuffer=[];for(let de=0;de<6;de++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[de]=[];for(let xe=0;xe<_.mipmaps.length;xe++)F.__webglFramebuffer[de][xe]=i.createFramebuffer()}else F.__webglFramebuffer[de]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let de=0;de<_.mipmaps.length;de++)F.__webglFramebuffer[de]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(we)for(let de=0,xe=Q.length;de<xe;de++){const qe=n.get(Q[de]);qe.__webglTexture===void 0&&(qe.__webglTexture=i.createTexture(),o.memory.textures++)}if(b.samples>0&&_e(b)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let de=0;de<Q.length;de++){const xe=Q[de];F.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[de]);const qe=r.convert(xe.format,xe.colorSpace),se=r.convert(xe.type),be=E(xe.internalFormat,qe,se,xe.colorSpace,b.isXRRenderTarget===!0),Ue=te(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue,be,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,F.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),ce(F.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Be(i.TEXTURE_CUBE_MAP,_);for(let de=0;de<6;de++)if(_.mipmaps&&_.mipmaps.length>0)for(let xe=0;xe<_.mipmaps.length;xe++)Me(F.__webglFramebuffer[de][xe],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,xe);else Me(F.__webglFramebuffer[de],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(_)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let de=0,xe=Q.length;de<xe;de++){const qe=Q[de],se=n.get(qe);t.bindTexture(i.TEXTURE_2D,se.__webglTexture),Be(i.TEXTURE_2D,qe),Me(F.__webglFramebuffer,b,qe,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,0),m(qe)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(de=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,$.__webglTexture),Be(de,_),_.mipmaps&&_.mipmaps.length>0)for(let xe=0;xe<_.mipmaps.length;xe++)Me(F.__webglFramebuffer[xe],b,_,i.COLOR_ATTACHMENT0,de,xe);else Me(F.__webglFramebuffer,b,_,i.COLOR_ATTACHMENT0,de,0);m(_)&&f(de),t.unbindTexture()}b.depthBuffer&&ke(b)}function Z(b){const _=b.textures;for(let F=0,$=_.length;F<$;F++){const Q=_[F];if(m(Q)){const Y=A(b),we=n.get(Q).__webglTexture;t.bindTexture(Y,we),f(Y),t.unbindTexture()}}}const re=[],w=[];function Re(b){if(b.samples>0){if(_e(b)===!1){const _=b.textures,F=b.width,$=b.height;let Q=i.COLOR_BUFFER_BIT;const Y=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=n.get(b),de=_.length>1;if(de)for(let xe=0;xe<_.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let xe=0;xe<_.length;xe++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),de){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,we.__webglColorRenderbuffer[xe]);const qe=n.get(_[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qe,0)}i.blitFramebuffer(0,0,F,$,0,0,F,$,Q,i.NEAREST),l===!0&&(re.length=0,w.length=0,re.push(i.COLOR_ATTACHMENT0+xe),b.depthBuffer&&b.resolveDepthBuffer===!1&&(re.push(Y),w.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,w)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,re))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let xe=0;xe<_.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,we.__webglColorRenderbuffer[xe]);const qe=n.get(_[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,qe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const _=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function te(b){return Math.min(s.maxSamples,b.samples)}function _e(b){const _=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function oe(b){const _=o.render.frame;h.get(b)!==_&&(h.set(b,_),b.update())}function Ee(b,_){const F=b.colorSpace,$=b.format,Q=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||F!==$i&&F!==Bn&&(Ke.getTransfer(F)===nt?($!==nn||Q!==wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}function ue(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=W,this.setTexture2D=J,this.setTexture2DArray=X,this.setTexture3D=ie,this.setTextureCube=G,this.rebindTextures=Oe,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=_e}function Qv(i,e){function t(n,s=Bn){let r;const o=Ke.getTransfer(s);if(n===wn)return i.UNSIGNED_BYTE;if(n===Xa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===qa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ih)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ch)return i.BYTE;if(n===Ph)return i.SHORT;if(n===Es)return i.UNSIGNED_SHORT;if(n===Wa)return i.INT;if(n===ti)return i.UNSIGNED_INT;if(n===cn)return i.FLOAT;if(n===Mn)return i.HALF_FLOAT;if(n===Dh)return i.ALPHA;if(n===Lh)return i.RGB;if(n===nn)return i.RGBA;if(n===Nh)return i.LUMINANCE;if(n===Uh)return i.LUMINANCE_ALPHA;if(n===Ui)return i.DEPTH_COMPONENT;if(n===Hi)return i.DEPTH_STENCIL;if(n===Ya)return i.RED;if(n===$a)return i.RED_INTEGER;if(n===Fh)return i.RG;if(n===Ka)return i.RG_INTEGER;if(n===Za)return i.RGBA_INTEGER;if(n===Tr||n===wr||n===Ar||n===Rr)if(o===nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Tr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Tr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Rr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===sa||n===ra||n===oa||n===aa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===sa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ra)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===oa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===aa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===la||n===ca||n===ha)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===la||n===ca)return o===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ha)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ua||n===da||n===fa||n===pa||n===ma||n===ga||n===va||n===_a||n===xa||n===ya||n===Sa||n===Ma||n===Ea||n===ba)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ua)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===da)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fa)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===pa)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ma)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ga)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===va)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_a)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xa)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ya)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Sa)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ma)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ea)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ba)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Cr||n===Ta||n===wa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Cr)return o===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ta)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Oh||n===Aa||n===Ra||n===Ca)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Cr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Aa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ra)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ca)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Jv extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class sn extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const e_={type:"move"};class Mo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(e_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new sn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const t_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,n_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class i_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Ct,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new gt({vertexShader:t_,fragmentShader:n_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Et(new Wr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class s_ extends si{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const v=new i_,m=t.getContextAttributes();let f=null,A=null;const E=[],S=[],B=new ne;let I=null;const P=new qt;P.viewport=new ut;const U=new qt;U.viewport=new ut;const M=[P,U],x=new Jv;let C=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ee=E[K];return ee===void 0&&(ee=new Mo,E[K]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(K){let ee=E[K];return ee===void 0&&(ee=new Mo,E[K]=ee),ee.getGripSpace()},this.getHand=function(K){let ee=E[K];return ee===void 0&&(ee=new Mo,E[K]=ee),ee.getHandSpace()};function O(K){const ee=S.indexOf(K.inputSource);if(ee===-1)return;const Me=E[ee];Me!==void 0&&(Me.update(K.inputSource,K.frame,c||o),Me.dispatchEvent({type:K.type,data:K.inputSource}))}function H(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",J);for(let K=0;K<E.length;K++){const ee=S[K];ee!==null&&(S[K]=null,E[K].disconnect(ee))}C=null,W=null,v.reset(),e.setRenderTarget(f),p=null,d=null,u=null,s=null,A=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(B.width,B.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",H),s.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(B),s.renderState.layers===void 0){const ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new rn(p.framebufferWidth,p.framebufferHeight,{format:nn,type:wn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,Me=null,ce=null;m.depth&&(ce=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=m.stencil?Hi:Ui,Me=m.stencil?Vi:ti);const Ne={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Ne),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),A=new rn(d.textureWidth,d.textureHeight,{format:nn,type:wn,depthTexture:new jh(d.textureWidth,d.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ze.setContext(s),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function J(K){for(let ee=0;ee<K.removed.length;ee++){const Me=K.removed[ee],ce=S.indexOf(Me);ce>=0&&(S[ce]=null,E[ce].disconnect(Me))}for(let ee=0;ee<K.added.length;ee++){const Me=K.added[ee];let ce=S.indexOf(Me);if(ce===-1){for(let ke=0;ke<E.length;ke++)if(ke>=S.length){S.push(Me),ce=ke;break}else if(S[ke]===null){S[ke]=Me,ce=ke;break}if(ce===-1)break}const Ne=E[ce];Ne&&Ne.connect(Me)}}const X=new R,ie=new R;function G(K,ee,Me){X.setFromMatrixPosition(ee.matrixWorld),ie.setFromMatrixPosition(Me.matrixWorld);const ce=X.distanceTo(ie),Ne=ee.projectionMatrix.elements,ke=Me.projectionMatrix.elements,Oe=Ne[14]/(Ne[10]-1),Ye=Ne[14]/(Ne[10]+1),Z=(Ne[9]+1)/Ne[5],re=(Ne[9]-1)/Ne[5],w=(Ne[8]-1)/Ne[0],Re=(ke[8]+1)/ke[0],te=Oe*w,_e=Oe*Re,oe=ce/(-w+Re),Ee=oe*-w;if(ee.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ee),K.translateZ(oe),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ne[10]===-1)K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const ue=Oe+oe,b=Ye+oe,_=te-Ee,F=_e+(ce-Ee),$=Z*Ye/b*ue,Q=re*Ye/b*ue;K.projectionMatrix.makePerspective(_,F,$,Q,ue,b),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function le(K,ee){ee===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ee.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ee=K.near,Me=K.far;v.texture!==null&&(v.depthNear>0&&(ee=v.depthNear),v.depthFar>0&&(Me=v.depthFar)),x.near=U.near=P.near=ee,x.far=U.far=P.far=Me,(C!==x.near||W!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),C=x.near,W=x.far),P.layers.mask=K.layers.mask|2,U.layers.mask=K.layers.mask|4,x.layers.mask=P.layers.mask|U.layers.mask;const ce=K.parent,Ne=x.cameras;le(x,ce);for(let ke=0;ke<Ne.length;ke++)le(Ne[ke],ce);Ne.length===2?G(x,P,U):x.projectionMatrix.copy(P.projectionMatrix),ve(K,x,ce)};function ve(K,ee,Me){Me===null?K.matrix.copy(ee.matrixWorld):(K.matrix.copy(Me.matrixWorld),K.matrix.invert(),K.matrix.multiply(ee.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=bs*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let Te=null;function Be(K,ee){if(h=ee.getViewerPose(c||o),g=ee,h!==null){const Me=h.views;p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));let ce=!1;Me.length!==x.cameras.length&&(x.cameras.length=0,ce=!0);for(let ke=0;ke<Me.length;ke++){const Oe=Me[ke];let Ye=null;if(p!==null)Ye=p.getViewport(Oe);else{const re=u.getViewSubImage(d,Oe);Ye=re.viewport,ke===0&&(e.setRenderTargetTextures(A,re.colorTexture,d.ignoreDepthValues?void 0:re.depthStencilTexture),e.setRenderTarget(A))}let Z=M[ke];Z===void 0&&(Z=new qt,Z.layers.enable(ke),Z.viewport=new ut,M[ke]=Z),Z.matrix.fromArray(Oe.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(Oe.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),ke===0&&(x.matrix.copy(Z.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ce===!0&&x.cameras.push(Z)}const Ne=s.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){const ke=u.getDepthInformation(Me[0]);ke&&ke.isValid&&ke.texture&&v.init(e,ke,s.renderState)}}for(let Me=0;Me<E.length;Me++){const ce=S[Me],Ne=E[Me];ce!==null&&Ne!==void 0&&Ne.update(ce,ee,c||o)}Te&&Te(K,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}const Ze=new Kh;Ze.setAnimationLoop(Be),this.setAnimationLoop=function(K){Te=K},this.dispose=function(){}}}const Yn=new An,r_=new st;function o_(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Xh(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,A,E,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,A,E):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ft&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ft&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const A=e.get(f),E=A.envMap,S=A.envMapRotation;E&&(m.envMap.value=E,Yn.copy(S),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),m.envMapRotation.value.setFromMatrix4(r_.makeRotationFromEuler(Yn)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,A,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*A,m.scale.value=E*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,A){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ft&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const A=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function a_(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,E){const S=E.program;n.uniformBlockBinding(A,S)}function c(A,E){let S=s[A.id];S===void 0&&(g(A),S=h(A),s[A.id]=S,A.addEventListener("dispose",m));const B=E.program;n.updateUBOMapping(A,B);const I=e.render.frame;r[A.id]!==I&&(d(A),r[A.id]=I)}function h(A){const E=u();A.__bindingPointIndex=E;const S=i.createBuffer(),B=A.__size,I=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,B,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,S),S}function u(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const E=s[A.id],S=A.uniforms,B=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let I=0,P=S.length;I<P;I++){const U=Array.isArray(S[I])?S[I]:[S[I]];for(let M=0,x=U.length;M<x;M++){const C=U[M];if(p(C,I,M,B)===!0){const W=C.__offset,O=Array.isArray(C.value)?C.value:[C.value];let H=0;for(let J=0;J<O.length;J++){const X=O[J],ie=v(X);typeof X=="number"||typeof X=="boolean"?(C.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,W+H,C.__data)):X.isMatrix3?(C.__data[0]=X.elements[0],C.__data[1]=X.elements[1],C.__data[2]=X.elements[2],C.__data[3]=0,C.__data[4]=X.elements[3],C.__data[5]=X.elements[4],C.__data[6]=X.elements[5],C.__data[7]=0,C.__data[8]=X.elements[6],C.__data[9]=X.elements[7],C.__data[10]=X.elements[8],C.__data[11]=0):(X.toArray(C.__data,H),H+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(A,E,S,B){const I=A.value,P=E+"_"+S;if(B[P]===void 0)return typeof I=="number"||typeof I=="boolean"?B[P]=I:B[P]=I.clone(),!0;{const U=B[P];if(typeof I=="number"||typeof I=="boolean"){if(U!==I)return B[P]=I,!0}else if(U.equals(I)===!1)return U.copy(I),!0}return!1}function g(A){const E=A.uniforms;let S=0;const B=16;for(let P=0,U=E.length;P<U;P++){const M=Array.isArray(E[P])?E[P]:[E[P]];for(let x=0,C=M.length;x<C;x++){const W=M[x],O=Array.isArray(W.value)?W.value:[W.value];for(let H=0,J=O.length;H<J;H++){const X=O[H],ie=v(X),G=S%B,le=G%ie.boundary,ve=G+le;S+=le,ve!==0&&B-ve<ie.storage&&(S+=B-ve),W.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=S,S+=ie.storage}}}const I=S%B;return I>0&&(S+=B-I),A.__size=S,A.__cache={},this}function v(A){const E={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(E.boundary=4,E.storage=4):A.isVector2?(E.boundary=8,E.storage=8):A.isVector3||A.isColor?(E.boundary=16,E.storage=12):A.isVector4?(E.boundary=16,E.storage=16):A.isMatrix3?(E.boundary=48,E.storage=48):A.isMatrix4?(E.boundary=64,E.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),E}function m(A){const E=A.target;E.removeEventListener("dispose",m);const S=o.indexOf(E.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function f(){for(const A in s)i.deleteBuffer(s[A]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class l_{constructor(e={}){const{canvas:t=Zd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,f=null;const A=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xt,this.toneMapping=kn,this.toneMappingExposure=1;const S=this;let B=!1,I=0,P=0,U=null,M=-1,x=null;const C=new ut,W=new ut;let O=null;const H=new ze(0);let J=0,X=t.width,ie=t.height,G=1,le=null,ve=null;const Te=new ut(0,0,X,ie),Be=new ut(0,0,X,ie);let Ze=!1;const K=new $h;let ee=!1,Me=!1;const ce=new st,Ne=new st,ke=new R,Oe=new ut,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Z=!1;function re(){return U===null?G:1}let w=n;function Re(y,L){return t.getContext(y,L)}try{const y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ha}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",ge,!1),w===null){const L="webgl2";if(w=Re(L,y),w===null)throw Re(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let te,_e,oe,Ee,ue,b,_,F,$,Q,Y,we,de,xe,qe,se,be,Ue,Fe,Ae,$e,q,pe,D;function he(){te=new fg(w),te.init(),q=new Qv(w,te),_e=new ag(w,te,e,q),oe=new Kv(w,te),_e.reverseDepthBuffer&&d&&oe.buffers.depth.setReversed(!0),Ee=new gg(w),ue=new Nv,b=new jv(w,te,oe,ue,_e,q,Ee),_=new cg(S),F=new dg(S),$=new Ef(w),pe=new rg(w,$),Q=new pg(w,$,Ee,pe),Y=new _g(w,Q,$,Ee),Fe=new vg(w,_e,b),se=new lg(ue),we=new Lv(S,_,F,te,_e,pe,se),de=new o_(S,ue),xe=new Fv,qe=new Hv(te),Ue=new sg(S,_,F,oe,Y,p,l),be=new Yv(S,Y,_e),D=new a_(w,Ee,_e,oe),Ae=new og(w,te,Ee),$e=new mg(w,te,Ee),Ee.programs=we.programs,S.capabilities=_e,S.extensions=te,S.properties=ue,S.renderLists=xe,S.shadowMap=be,S.state=oe,S.info=Ee}he();const V=new s_(S,w);this.xr=V,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const y=te.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=te.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(y){y!==void 0&&(G=y,this.setSize(X,ie,!1))},this.getSize=function(y){return y.set(X,ie)},this.setSize=function(y,L,k=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=y,ie=L,t.width=Math.floor(y*G),t.height=Math.floor(L*G),k===!0&&(t.style.width=y+"px",t.style.height=L+"px"),this.setViewport(0,0,y,L)},this.getDrawingBufferSize=function(y){return y.set(X*G,ie*G).floor()},this.setDrawingBufferSize=function(y,L,k){X=y,ie=L,G=k,t.width=Math.floor(y*k),t.height=Math.floor(L*k),this.setViewport(0,0,y,L)},this.getCurrentViewport=function(y){return y.copy(C)},this.getViewport=function(y){return y.copy(Te)},this.setViewport=function(y,L,k,z){y.isVector4?Te.set(y.x,y.y,y.z,y.w):Te.set(y,L,k,z),oe.viewport(C.copy(Te).multiplyScalar(G).round())},this.getScissor=function(y){return y.copy(Be)},this.setScissor=function(y,L,k,z){y.isVector4?Be.set(y.x,y.y,y.z,y.w):Be.set(y,L,k,z),oe.scissor(W.copy(Be).multiplyScalar(G).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(y){oe.setScissorTest(Ze=y)},this.setOpaqueSort=function(y){le=y},this.setTransparentSort=function(y){ve=y},this.getClearColor=function(y){return y.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(y=!0,L=!0,k=!0){let z=0;if(y){let N=!1;if(U!==null){const ae=U.texture.format;N=ae===Za||ae===Ka||ae===$a}if(N){const ae=U.texture.type,ye=ae===wn||ae===ti||ae===Es||ae===Vi||ae===Xa||ae===qa,Ce=Ue.getClearColor(),Pe=Ue.getClearAlpha(),Ve=Ce.r,Ge=Ce.g,Ie=Ce.b;ye?(g[0]=Ve,g[1]=Ge,g[2]=Ie,g[3]=Pe,w.clearBufferuiv(w.COLOR,0,g)):(v[0]=Ve,v[1]=Ge,v[2]=Ie,v[3]=Pe,w.clearBufferiv(w.COLOR,0,v))}else z|=w.COLOR_BUFFER_BIT}L&&(z|=w.DEPTH_BUFFER_BIT),k&&(z|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),xe.dispose(),qe.dispose(),ue.dispose(),_.dispose(),F.dispose(),Y.dispose(),pe.dispose(),D.dispose(),we.dispose(),V.dispose(),V.removeEventListener("sessionstart",fl),V.removeEventListener("sessionend",pl),Vn.stop()};function j(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const y=Ee.autoReset,L=be.enabled,k=be.autoUpdate,z=be.needsUpdate,N=be.type;he(),Ee.autoReset=y,be.enabled=L,be.autoUpdate=k,be.needsUpdate=z,be.type=N}function ge(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function He(y){const L=y.target;L.removeEventListener("dispose",He),ot(L)}function ot(y){wt(y),ue.remove(y)}function wt(y){const L=ue.get(y).programs;L!==void 0&&(L.forEach(function(k){we.releaseProgram(k)}),y.isShaderMaterial&&we.releaseShaderCache(y))}this.renderBufferDirect=function(y,L,k,z,N,ae){L===null&&(L=Ye);const ye=N.isMesh&&N.matrixWorld.determinant()<0,Ce=Tu(y,L,k,z,N);oe.setMaterial(z,ye);let Pe=k.index,Ve=1;if(z.wireframe===!0){if(Pe=Q.getWireframeAttribute(k),Pe===void 0)return;Ve=2}const Ge=k.drawRange,Ie=k.attributes.position;let je=Ge.start*Ve,rt=(Ge.start+Ge.count)*Ve;ae!==null&&(je=Math.max(je,ae.start*Ve),rt=Math.min(rt,(ae.start+ae.count)*Ve)),Pe!==null?(je=Math.max(je,0),rt=Math.min(rt,Pe.count)):Ie!=null&&(je=Math.max(je,0),rt=Math.min(rt,Ie.count));const at=rt-je;if(at<0||at===1/0)return;pe.setup(N,z,Ce,k,Pe);let Nt,Qe=Ae;if(Pe!==null&&(Nt=$.get(Pe),Qe=$e,Qe.setIndex(Nt)),N.isMesh)z.wireframe===!0?(oe.setLineWidth(z.wireframeLinewidth*re()),Qe.setMode(w.LINES)):Qe.setMode(w.TRIANGLES);else if(N.isLine){let De=z.linewidth;De===void 0&&(De=1),oe.setLineWidth(De*re()),N.isLineSegments?Qe.setMode(w.LINES):N.isLineLoop?Qe.setMode(w.LINE_LOOP):Qe.setMode(w.LINE_STRIP)}else N.isPoints?Qe.setMode(w.POINTS):N.isSprite&&Qe.setMode(w.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Qe.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))Qe.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const De=N._multiDrawStarts,dn=N._multiDrawCounts,Je=N._multiDrawCount,jt=Pe?$.get(Pe).bytesPerElement:1,ai=ue.get(z).currentProgram.getUniforms();for(let Bt=0;Bt<Je;Bt++)ai.setValue(w,"_gl_DrawID",Bt),Qe.render(De[Bt]/jt,dn[Bt])}else if(N.isInstancedMesh)Qe.renderInstances(je,at,N.count);else if(k.isInstancedBufferGeometry){const De=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,dn=Math.min(k.instanceCount,De);Qe.renderInstances(je,at,dn)}else Qe.render(je,at)};function tt(y,L,k){y.transparent===!0&&y.side===$t&&y.forceSinglePass===!1?(y.side=Ft,y.needsUpdate=!0,Ls(y,L,k),y.side=bn,y.needsUpdate=!0,Ls(y,L,k),y.side=$t):Ls(y,L,k)}this.compile=function(y,L,k=null){k===null&&(k=y),f=qe.get(k),f.init(L),E.push(f),k.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),y!==k&&y.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();const z=new Set;return y.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ae=N.material;if(ae)if(Array.isArray(ae))for(let ye=0;ye<ae.length;ye++){const Ce=ae[ye];tt(Ce,k,N),z.add(Ce)}else tt(ae,k,N),z.add(ae)}),E.pop(),f=null,z},this.compileAsync=function(y,L,k=null){const z=this.compile(y,L,k);return new Promise(N=>{function ae(){if(z.forEach(function(ye){ue.get(ye).currentProgram.isReady()&&z.delete(ye)}),z.size===0){N(y);return}setTimeout(ae,10)}te.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Zt=null;function un(y){Zt&&Zt(y)}function fl(){Vn.stop()}function pl(){Vn.start()}const Vn=new Kh;Vn.setAnimationLoop(un),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(y){Zt=y,V.setAnimationLoop(y),y===null?Vn.stop():Vn.start()},V.addEventListener("sessionstart",fl),V.addEventListener("sessionend",pl),this.render=function(y,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(L),L=V.getCamera()),y.isScene===!0&&y.onBeforeRender(S,y,L,U),f=qe.get(y,E.length),f.init(L),E.push(f),Ne.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),K.setFromProjectionMatrix(Ne),Me=this.localClippingEnabled,ee=se.init(this.clippingPlanes,Me),m=xe.get(y,A.length),m.init(),A.push(m),V.enabled===!0&&V.isPresenting===!0){const ae=S.xr.getDepthSensingMesh();ae!==null&&Yr(ae,L,-1/0,S.sortObjects)}Yr(y,L,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(le,ve),Z=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Z&&Ue.addToRenderList(m,y),this.info.render.frame++,ee===!0&&se.beginShadows();const k=f.state.shadowsArray;be.render(k,y,L),ee===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,N=m.transmissive;if(f.setupLights(),L.isArrayCamera){const ae=L.cameras;if(N.length>0)for(let ye=0,Ce=ae.length;ye<Ce;ye++){const Pe=ae[ye];gl(z,N,y,Pe)}Z&&Ue.render(y);for(let ye=0,Ce=ae.length;ye<Ce;ye++){const Pe=ae[ye];ml(m,y,Pe,Pe.viewport)}}else N.length>0&&gl(z,N,y,L),Z&&Ue.render(y),ml(m,y,L);U!==null&&(b.updateMultisampleRenderTarget(U),b.updateRenderTargetMipmap(U)),y.isScene===!0&&y.onAfterRender(S,y,L),pe.resetDefaultState(),M=-1,x=null,E.pop(),E.length>0?(f=E[E.length-1],ee===!0&&se.setGlobalState(S.clippingPlanes,f.state.camera)):f=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function Yr(y,L,k,z){if(y.visible===!1)return;if(y.layers.test(L.layers)){if(y.isGroup)k=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(L);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||K.intersectsSprite(y)){z&&Oe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ne);const ye=Y.update(y),Ce=y.material;Ce.visible&&m.push(y,ye,Ce,k,Oe.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||K.intersectsObject(y))){const ye=Y.update(y),Ce=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Oe.copy(y.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Oe.copy(ye.boundingSphere.center)),Oe.applyMatrix4(y.matrixWorld).applyMatrix4(Ne)),Array.isArray(Ce)){const Pe=ye.groups;for(let Ve=0,Ge=Pe.length;Ve<Ge;Ve++){const Ie=Pe[Ve],je=Ce[Ie.materialIndex];je&&je.visible&&m.push(y,ye,je,k,Oe.z,Ie)}}else Ce.visible&&m.push(y,ye,Ce,k,Oe.z,null)}}const ae=y.children;for(let ye=0,Ce=ae.length;ye<Ce;ye++)Yr(ae[ye],L,k,z)}function ml(y,L,k,z){const N=y.opaque,ae=y.transmissive,ye=y.transparent;f.setupLightsView(k),ee===!0&&se.setGlobalState(S.clippingPlanes,k),z&&oe.viewport(C.copy(z)),N.length>0&&Ds(N,L,k),ae.length>0&&Ds(ae,L,k),ye.length>0&&Ds(ye,L,k),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function gl(y,L,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[z.id]===void 0&&(f.state.transmissionRenderTarget[z.id]=new rn(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?Mn:wn,minFilter:ei,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const ae=f.state.transmissionRenderTarget[z.id],ye=z.viewport||C;ae.setSize(ye.z,ye.w);const Ce=S.getRenderTarget();S.setRenderTarget(ae),S.getClearColor(H),J=S.getClearAlpha(),J<1&&S.setClearColor(16777215,.5),S.clear(),Z&&Ue.render(k);const Pe=S.toneMapping;S.toneMapping=kn;const Ve=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),f.setupLightsView(z),ee===!0&&se.setGlobalState(S.clippingPlanes,z),Ds(y,k,z),b.updateMultisampleRenderTarget(ae),b.updateRenderTargetMipmap(ae),te.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Ie=0,je=L.length;Ie<je;Ie++){const rt=L[Ie],at=rt.object,Nt=rt.geometry,Qe=rt.material,De=rt.group;if(Qe.side===$t&&at.layers.test(z.layers)){const dn=Qe.side;Qe.side=Ft,Qe.needsUpdate=!0,vl(at,k,z,Nt,Qe,De),Qe.side=dn,Qe.needsUpdate=!0,Ge=!0}}Ge===!0&&(b.updateMultisampleRenderTarget(ae),b.updateRenderTargetMipmap(ae))}S.setRenderTarget(Ce),S.setClearColor(H,J),Ve!==void 0&&(z.viewport=Ve),S.toneMapping=Pe}function Ds(y,L,k){const z=L.isScene===!0?L.overrideMaterial:null;for(let N=0,ae=y.length;N<ae;N++){const ye=y[N],Ce=ye.object,Pe=ye.geometry,Ve=z===null?ye.material:z,Ge=ye.group;Ce.layers.test(k.layers)&&vl(Ce,L,k,Pe,Ve,Ge)}}function vl(y,L,k,z,N,ae){y.onBeforeRender(S,L,k,z,N,ae),y.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),N.onBeforeRender(S,L,k,z,y,ae),N.transparent===!0&&N.side===$t&&N.forceSinglePass===!1?(N.side=Ft,N.needsUpdate=!0,S.renderBufferDirect(k,L,z,N,y,ae),N.side=bn,N.needsUpdate=!0,S.renderBufferDirect(k,L,z,N,y,ae),N.side=$t):S.renderBufferDirect(k,L,z,N,y,ae),y.onAfterRender(S,L,k,z,N,ae)}function Ls(y,L,k){L.isScene!==!0&&(L=Ye);const z=ue.get(y),N=f.state.lights,ae=f.state.shadowsArray,ye=N.state.version,Ce=we.getParameters(y,N.state,ae,L,k),Pe=we.getProgramCacheKey(Ce);let Ve=z.programs;z.environment=y.isMeshStandardMaterial?L.environment:null,z.fog=L.fog,z.envMap=(y.isMeshStandardMaterial?F:_).get(y.envMap||z.environment),z.envMapRotation=z.environment!==null&&y.envMap===null?L.environmentRotation:y.envMapRotation,Ve===void 0&&(y.addEventListener("dispose",He),Ve=new Map,z.programs=Ve);let Ge=Ve.get(Pe);if(Ge!==void 0){if(z.currentProgram===Ge&&z.lightsStateVersion===ye)return xl(y,Ce),Ge}else Ce.uniforms=we.getUniforms(y),y.onBeforeCompile(Ce,S),Ge=we.acquireProgram(Ce,Pe),Ve.set(Pe,Ge),z.uniforms=Ce.uniforms;const Ie=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ie.clippingPlanes=se.uniform),xl(y,Ce),z.needsLights=Au(y),z.lightsStateVersion=ye,z.needsLights&&(Ie.ambientLightColor.value=N.state.ambient,Ie.lightProbe.value=N.state.probe,Ie.directionalLights.value=N.state.directional,Ie.directionalLightShadows.value=N.state.directionalShadow,Ie.spotLights.value=N.state.spot,Ie.spotLightShadows.value=N.state.spotShadow,Ie.rectAreaLights.value=N.state.rectArea,Ie.ltc_1.value=N.state.rectAreaLTC1,Ie.ltc_2.value=N.state.rectAreaLTC2,Ie.pointLights.value=N.state.point,Ie.pointLightShadows.value=N.state.pointShadow,Ie.hemisphereLights.value=N.state.hemi,Ie.directionalShadowMap.value=N.state.directionalShadowMap,Ie.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ie.spotShadowMap.value=N.state.spotShadowMap,Ie.spotLightMatrix.value=N.state.spotLightMatrix,Ie.spotLightMap.value=N.state.spotLightMap,Ie.pointShadowMap.value=N.state.pointShadowMap,Ie.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=Ge,z.uniformsList=null,Ge}function _l(y){if(y.uniformsList===null){const L=y.currentProgram.getUniforms();y.uniformsList=Pr.seqWithValue(L.seq,y.uniforms)}return y.uniformsList}function xl(y,L){const k=ue.get(y);k.outputColorSpace=L.outputColorSpace,k.batching=L.batching,k.batchingColor=L.batchingColor,k.instancing=L.instancing,k.instancingColor=L.instancingColor,k.instancingMorph=L.instancingMorph,k.skinning=L.skinning,k.morphTargets=L.morphTargets,k.morphNormals=L.morphNormals,k.morphColors=L.morphColors,k.morphTargetsCount=L.morphTargetsCount,k.numClippingPlanes=L.numClippingPlanes,k.numIntersection=L.numClipIntersection,k.vertexAlphas=L.vertexAlphas,k.vertexTangents=L.vertexTangents,k.toneMapping=L.toneMapping}function Tu(y,L,k,z,N){L.isScene!==!0&&(L=Ye),b.resetTextureUnits();const ae=L.fog,ye=z.isMeshStandardMaterial?L.environment:null,Ce=U===null?S.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:$i,Pe=(z.isMeshStandardMaterial?F:_).get(z.envMap||ye),Ve=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ge=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ie=!!k.morphAttributes.position,je=!!k.morphAttributes.normal,rt=!!k.morphAttributes.color;let at=kn;z.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(at=S.toneMapping);const Nt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Qe=Nt!==void 0?Nt.length:0,De=ue.get(z),dn=f.state.lights;if(ee===!0&&(Me===!0||y!==x)){const Gt=y===x&&z.id===M;se.setState(z,y,Gt)}let Je=!1;z.version===De.__version?(De.needsLights&&De.lightsStateVersion!==dn.state.version||De.outputColorSpace!==Ce||N.isBatchedMesh&&De.batching===!1||!N.isBatchedMesh&&De.batching===!0||N.isBatchedMesh&&De.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&De.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&De.instancing===!1||!N.isInstancedMesh&&De.instancing===!0||N.isSkinnedMesh&&De.skinning===!1||!N.isSkinnedMesh&&De.skinning===!0||N.isInstancedMesh&&De.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&De.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&De.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&De.instancingMorph===!1&&N.morphTexture!==null||De.envMap!==Pe||z.fog===!0&&De.fog!==ae||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==se.numPlanes||De.numIntersection!==se.numIntersection)||De.vertexAlphas!==Ve||De.vertexTangents!==Ge||De.morphTargets!==Ie||De.morphNormals!==je||De.morphColors!==rt||De.toneMapping!==at||De.morphTargetsCount!==Qe)&&(Je=!0):(Je=!0,De.__version=z.version);let jt=De.currentProgram;Je===!0&&(jt=Ls(z,L,N));let ai=!1,Bt=!1,Ji=!1;const lt=jt.getUniforms(),on=De.uniforms;if(oe.useProgram(jt.program)&&(ai=!0,Bt=!0,Ji=!0),z.id!==M&&(M=z.id,Bt=!0),ai||x!==y){oe.buffers.depth.getReversed()?(ce.copy(y.projectionMatrix),Qd(ce),Jd(ce),lt.setValue(w,"projectionMatrix",ce)):lt.setValue(w,"projectionMatrix",y.projectionMatrix),lt.setValue(w,"viewMatrix",y.matrixWorldInverse);const Rn=lt.map.cameraPosition;Rn!==void 0&&Rn.setValue(w,ke.setFromMatrixPosition(y.matrixWorld)),_e.logarithmicDepthBuffer&&lt.setValue(w,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&lt.setValue(w,"isOrthographic",y.isOrthographicCamera===!0),x!==y&&(x=y,Bt=!0,Ji=!0)}if(N.isSkinnedMesh){lt.setOptional(w,N,"bindMatrix"),lt.setOptional(w,N,"bindMatrixInverse");const Gt=N.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),lt.setValue(w,"boneTexture",Gt.boneTexture,b))}N.isBatchedMesh&&(lt.setOptional(w,N,"batchingTexture"),lt.setValue(w,"batchingTexture",N._matricesTexture,b),lt.setOptional(w,N,"batchingIdTexture"),lt.setValue(w,"batchingIdTexture",N._indirectTexture,b),lt.setOptional(w,N,"batchingColorTexture"),N._colorsTexture!==null&&lt.setValue(w,"batchingColorTexture",N._colorsTexture,b));const es=k.morphAttributes;if((es.position!==void 0||es.normal!==void 0||es.color!==void 0)&&Fe.update(N,k,jt),(Bt||De.receiveShadow!==N.receiveShadow)&&(De.receiveShadow=N.receiveShadow,lt.setValue(w,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(on.envMap.value=Pe,on.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&L.environment!==null&&(on.envMapIntensity.value=L.environmentIntensity),Bt&&(lt.setValue(w,"toneMappingExposure",S.toneMappingExposure),De.needsLights&&wu(on,Ji),ae&&z.fog===!0&&de.refreshFogUniforms(on,ae),de.refreshMaterialUniforms(on,z,G,ie,f.state.transmissionRenderTarget[y.id]),Pr.upload(w,_l(De),on,b)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Pr.upload(w,_l(De),on,b),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&lt.setValue(w,"center",N.center),lt.setValue(w,"modelViewMatrix",N.modelViewMatrix),lt.setValue(w,"normalMatrix",N.normalMatrix),lt.setValue(w,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Gt=z.uniformsGroups;for(let Rn=0,Cn=Gt.length;Rn<Cn;Rn++){const yl=Gt[Rn];D.update(yl,jt),D.bind(yl,jt)}}return jt}function wu(y,L){y.ambientLightColor.needsUpdate=L,y.lightProbe.needsUpdate=L,y.directionalLights.needsUpdate=L,y.directionalLightShadows.needsUpdate=L,y.pointLights.needsUpdate=L,y.pointLightShadows.needsUpdate=L,y.spotLights.needsUpdate=L,y.spotLightShadows.needsUpdate=L,y.rectAreaLights.needsUpdate=L,y.hemisphereLights.needsUpdate=L}function Au(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(y,L,k){ue.get(y.texture).__webglTexture=L,ue.get(y.depthTexture).__webglTexture=k;const z=ue.get(y);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=k===void 0,z.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,L){const k=ue.get(y);k.__webglFramebuffer=L,k.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(y,L=0,k=0){U=y,I=L,P=k;let z=!0,N=null,ae=!1,ye=!1;if(y){const Pe=ue.get(y);if(Pe.__useDefaultFramebuffer!==void 0)oe.bindFramebuffer(w.FRAMEBUFFER,null),z=!1;else if(Pe.__webglFramebuffer===void 0)b.setupRenderTarget(y);else if(Pe.__hasExternalTextures)b.rebindTextures(y,ue.get(y.texture).__webglTexture,ue.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ie=y.depthTexture;if(Pe.__boundDepthTexture!==Ie){if(Ie!==null&&ue.has(Ie)&&(y.width!==Ie.image.width||y.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(y)}}const Ve=y.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(ye=!0);const Ge=ue.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ge[L])?N=Ge[L][k]:N=Ge[L],ae=!0):y.samples>0&&b.useMultisampledRTT(y)===!1?N=ue.get(y).__webglMultisampledFramebuffer:Array.isArray(Ge)?N=Ge[k]:N=Ge,C.copy(y.viewport),W.copy(y.scissor),O=y.scissorTest}else C.copy(Te).multiplyScalar(G).floor(),W.copy(Be).multiplyScalar(G).floor(),O=Ze;if(oe.bindFramebuffer(w.FRAMEBUFFER,N)&&z&&oe.drawBuffers(y,N),oe.viewport(C),oe.scissor(W),oe.setScissorTest(O),ae){const Pe=ue.get(y.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+L,Pe.__webglTexture,k)}else if(ye){const Pe=ue.get(y.texture),Ve=L||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,Pe.__webglTexture,k||0,Ve)}M=-1},this.readRenderTargetPixels=function(y,L,k,z,N,ae,ye){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=ue.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ye!==void 0&&(Ce=Ce[ye]),Ce){oe.bindFramebuffer(w.FRAMEBUFFER,Ce);try{const Pe=y.texture,Ve=Pe.format,Ge=Pe.type;if(!_e.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_e.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=y.width-z&&k>=0&&k<=y.height-N&&w.readPixels(L,k,z,N,q.convert(Ve),q.convert(Ge),ae)}finally{const Pe=U!==null?ue.get(U).__webglFramebuffer:null;oe.bindFramebuffer(w.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(y,L,k,z,N,ae,ye){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=ue.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ye!==void 0&&(Ce=Ce[ye]),Ce){const Pe=y.texture,Ve=Pe.format,Ge=Pe.type;if(!_e.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_e.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=y.width-z&&k>=0&&k<=y.height-N){oe.bindFramebuffer(w.FRAMEBUFFER,Ce);const Ie=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Ie),w.bufferData(w.PIXEL_PACK_BUFFER,ae.byteLength,w.STREAM_READ),w.readPixels(L,k,z,N,q.convert(Ve),q.convert(Ge),0);const je=U!==null?ue.get(U).__webglFramebuffer:null;oe.bindFramebuffer(w.FRAMEBUFFER,je);const rt=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await jd(w,rt,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Ie),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,ae),w.deleteBuffer(Ie),w.deleteSync(rt),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,L=null,k=0){y.isTexture!==!0&&(fs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,y=arguments[1]);const z=Math.pow(2,-k),N=Math.floor(y.image.width*z),ae=Math.floor(y.image.height*z),ye=L!==null?L.x:0,Ce=L!==null?L.y:0;b.setTexture2D(y,0),w.copyTexSubImage2D(w.TEXTURE_2D,k,0,0,ye,Ce,N,ae),oe.unbindTexture()},this.copyTextureToTexture=function(y,L,k=null,z=null,N=0){y.isTexture!==!0&&(fs("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,y=arguments[1],L=arguments[2],N=arguments[3]||0,k=null);let ae,ye,Ce,Pe,Ve,Ge,Ie,je,rt;const at=y.isCompressedTexture?y.mipmaps[N]:y.image;k!==null?(ae=k.max.x-k.min.x,ye=k.max.y-k.min.y,Ce=k.isBox3?k.max.z-k.min.z:1,Pe=k.min.x,Ve=k.min.y,Ge=k.isBox3?k.min.z:0):(ae=at.width,ye=at.height,Ce=at.depth||1,Pe=0,Ve=0,Ge=0),z!==null?(Ie=z.x,je=z.y,rt=z.z):(Ie=0,je=0,rt=0);const Nt=q.convert(L.format),Qe=q.convert(L.type);let De;L.isData3DTexture?(b.setTexture3D(L,0),De=w.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(b.setTexture2DArray(L,0),De=w.TEXTURE_2D_ARRAY):(b.setTexture2D(L,0),De=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,L.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,L.unpackAlignment);const dn=w.getParameter(w.UNPACK_ROW_LENGTH),Je=w.getParameter(w.UNPACK_IMAGE_HEIGHT),jt=w.getParameter(w.UNPACK_SKIP_PIXELS),ai=w.getParameter(w.UNPACK_SKIP_ROWS),Bt=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,at.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,at.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Pe),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ve),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Ge);const Ji=y.isDataArrayTexture||y.isData3DTexture,lt=L.isDataArrayTexture||L.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){const on=ue.get(y),es=ue.get(L),Gt=ue.get(on.__renderTarget),Rn=ue.get(es.__renderTarget);oe.bindFramebuffer(w.READ_FRAMEBUFFER,Gt.__webglFramebuffer),oe.bindFramebuffer(w.DRAW_FRAMEBUFFER,Rn.__webglFramebuffer);for(let Cn=0;Cn<Ce;Cn++)Ji&&w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,ue.get(y).__webglTexture,N,Ge+Cn),y.isDepthTexture?(lt&&w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,ue.get(L).__webglTexture,N,rt+Cn),w.blitFramebuffer(Pe,Ve,ae,ye,Ie,je,ae,ye,w.DEPTH_BUFFER_BIT,w.NEAREST)):lt?w.copyTexSubImage3D(De,N,Ie,je,rt+Cn,Pe,Ve,ae,ye):w.copyTexSubImage2D(De,N,Ie,je,rt+Cn,Pe,Ve,ae,ye);oe.bindFramebuffer(w.READ_FRAMEBUFFER,null),oe.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else lt?y.isDataTexture||y.isData3DTexture?w.texSubImage3D(De,N,Ie,je,rt,ae,ye,Ce,Nt,Qe,at.data):L.isCompressedArrayTexture?w.compressedTexSubImage3D(De,N,Ie,je,rt,ae,ye,Ce,Nt,at.data):w.texSubImage3D(De,N,Ie,je,rt,ae,ye,Ce,Nt,Qe,at):y.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,N,Ie,je,ae,ye,Nt,Qe,at.data):y.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,N,Ie,je,at.width,at.height,Nt,at.data):w.texSubImage2D(w.TEXTURE_2D,N,Ie,je,ae,ye,Nt,Qe,at);w.pixelStorei(w.UNPACK_ROW_LENGTH,dn),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Je),w.pixelStorei(w.UNPACK_SKIP_PIXELS,jt),w.pixelStorei(w.UNPACK_SKIP_ROWS,ai),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Bt),N===0&&L.generateMipmaps&&w.generateMipmap(De),oe.unbindTexture()},this.copyTextureToTexture3D=function(y,L,k=null,z=null,N=0){return y.isTexture!==!0&&(fs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,z=arguments[1]||null,y=arguments[2],L=arguments[3],N=arguments[4]||0),fs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,L,k,z,N)},this.initRenderTarget=function(y){ue.get(y).__webglFramebuffer===void 0&&b.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?b.setTextureCube(y,0):y.isData3DTexture?b.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?b.setTexture2DArray(y,0):b.setTexture2D(y,0),oe.unbindTexture()},this.resetState=function(){I=0,P=0,U=null,oe.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}class el{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ze(e),this.density=t}clone(){return new el(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class c_ extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class h_ extends Ct{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Ht,h=Ht,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xn extends bt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Mi=new st,yc=new st,tr=[],Sc=new Ot,u_=new st,os=new Et,as=new oi;class d_ extends Et{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,u_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ot),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mi),Sc.copy(e.boundingBox).applyMatrix4(Mi),this.boundingBox.union(Sc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new oi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mi),as.copy(e.boundingSphere).applyMatrix4(Mi),this.boundingSphere.union(as)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(os.geometry=this.geometry,os.material=this.material,os.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),as.copy(this.boundingSphere),as.applyMatrix4(n),e.ray.intersectsSphere(as)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Mi),yc.multiplyMatrices(n,Mi),os.matrixWorld=yc,os.raycast(e,tr);for(let o=0,a=tr.length;o<a;o++){const l=tr[o];l.instanceId=r,l.object=this,t.push(l)}tr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new xn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new h_(new Float32Array(s*this.count),s,this.count,Ya,cn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class tl extends Ki{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Fr=new R,Or=new R,Mc=new st,ls=new Ps,nr=new oi,Eo=new R,Ec=new R;class f_ extends Pt{constructor(e=new Tt,t=new tl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Fr.fromBufferAttribute(t,s-1),Or.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Fr.distanceTo(Or);e.setAttribute("lineDistance",new vt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere),nr.applyMatrix4(s),nr.radius+=r,e.ray.intersectsSphere(nr)===!1)return;Mc.copy(s).invert(),ls.copy(e.ray).applyMatrix4(Mc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const f=h.getX(v),A=h.getX(v+1),E=ir(this,e,ls,l,f,A);E&&t.push(E)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(p),f=ir(this,e,ls,l,v,m);f&&t.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const f=ir(this,e,ls,l,v,v+1);f&&t.push(f)}if(this.isLineLoop){const v=ir(this,e,ls,l,g-1,p);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ir(i,e,t,n,s,r){const o=i.geometry.attributes.position;if(Fr.fromBufferAttribute(o,s),Or.fromBufferAttribute(o,r),t.distanceSqToSegment(Fr,Or,Eo,Ec)>n)return;Eo.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Eo);if(!(l<e.near||l>e.far))return{distance:l,point:Ec.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const bc=new R,Tc=new R;class gs extends f_{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)bc.fromBufferAttribute(t,s),Tc.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+bc.distanceTo(Tc);e.setAttribute("lineDistance",new vt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class nl extends Ki{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const wc=new st,Ia=new Ps,sr=new oi,rr=new R;class nu extends Pt{constructor(e=new Tt,t=new nl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere),sr.applyMatrix4(s),sr.radius+=r,e.ray.intersectsSphere(sr)===!1)return;wc.copy(s).invert(),Ia.copy(e.ray).applyMatrix4(wc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,v=p;g<v;g++){const m=c.getX(g);rr.fromBufferAttribute(u,m),Ac(rr,m,l,s,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,v=p;g<v;g++)rr.fromBufferAttribute(u,g),Ac(rr,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ac(i,e,t,n,s,r,o){const a=Ia.distanceSqToPoint(i);if(a<t){const l=new R;Ia.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class p_ extends Ct{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class hn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ne:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new R,s=[],r=[],o=[],a=new R,l=new st;for(let p=0;p<=e;p++){const g=p/e;s[p]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(St(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(St(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class il extends hn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ne){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class m_ extends il{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function sl(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,p*=h,s(o,a,d,p)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const or=new R,bo=new sl,To=new sl,wo=new sl;class g_ extends hn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new R){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(or.subVectors(s[0],s[1]).add(s[0]),c=or);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(or.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=or),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),bo.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,v,m),To.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,v,m),wo.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(bo.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),To.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),wo.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(bo.calc(l),To.calc(l),wo.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new R().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Rc(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function v_(i,e){const t=1-i;return t*t*e}function __(i,e){return 2*(1-i)*i*e}function x_(i,e){return i*i*e}function vs(i,e,t,n){return v_(i,e)+__(i,t)+x_(i,n)}function y_(i,e){const t=1-i;return t*t*t*e}function S_(i,e){const t=1-i;return 3*t*t*i*e}function M_(i,e){return 3*(1-i)*i*i*e}function E_(i,e){return i*i*i*e}function _s(i,e,t,n,s){return y_(i,e)+S_(i,t)+M_(i,n)+E_(i,s)}class iu extends hn{constructor(e=new ne,t=new ne,n=new ne,s=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ne){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(_s(e,s.x,r.x,o.x,a.x),_s(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class b_ extends hn{constructor(e=new R,t=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new R){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(_s(e,s.x,r.x,o.x,a.x),_s(e,s.y,r.y,o.y,a.y),_s(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class su extends hn{constructor(e=new ne,t=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ne){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class T_ extends hn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ru extends hn{constructor(e=new ne,t=new ne,n=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ne){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(vs(e,s.x,r.x,o.x),vs(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class w_ extends hn{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(vs(e,s.x,r.x,o.x),vs(e,s.y,r.y,o.y),vs(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ou extends hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ne){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Rc(a,l.x,c.x,h.x,u.x),Rc(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new ne().fromArray(s))}return this}}var Da=Object.freeze({__proto__:null,ArcCurve:m_,CatmullRomCurve3:g_,CubicBezierCurve:iu,CubicBezierCurve3:b_,EllipseCurve:il,LineCurve:su,LineCurve3:T_,QuadraticBezierCurve:ru,QuadraticBezierCurve3:w_,SplineCurve:ou});class A_ extends hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Da[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Da[s.type]().fromJSON(s))}return this}}class Cc extends A_{constructor(e){super(),this.type="Path",this.currentPoint=new ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new su(this.currentPoint.clone(),new ne(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new ru(this.currentPoint.clone(),new ne(e,t),new ne(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new iu(this.currentPoint.clone(),new ne(e,t),new ne(n,s),new ne(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new ou(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){const c=new il(e,t,n,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}const ar=new R,lr=new R,Ao=new R,cr=new Kt;class Pc extends Tt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Fi*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:v,b:m,c:f}=cr;if(v.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),cr.getNormal(Ao),u[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let A=0;A<3;A++){const E=(A+1)%3,S=u[A],B=u[E],I=cr[h[A]],P=cr[h[E]],U=`${S}_${B}`,M=`${B}_${S}`;M in d&&d[M]?(Ao.dot(d[M].normal)<=r&&(p.push(I.x,I.y,I.z),p.push(P.x,P.y,P.z)),d[M]=null):U in d||(d[U]={index0:c[A],index1:c[E],normal:Ao.clone()})}}for(const g in d)if(d[g]){const{index0:v,index1:m}=d[g];ar.fromBufferAttribute(a,v),lr.fromBufferAttribute(a,m),p.push(ar.x,ar.y,ar.z),p.push(lr.x,lr.y,lr.z)}this.setAttribute("position",new vt(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class au extends Cc{constructor(e){super(e),this.uuid=ri(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Cc().fromJSON(s))}return this}}const R_={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=lu(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,p;if(n&&(r=L_(i,e,r,t)),i.length>80*t){a=c=i[0],l=h=i[1];for(let g=t;g<s;g+=t)u=i[g],d=i[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-a,h-l),p=p!==0?32767/p:0}return ws(r,o,t,a,l,p,0),o}};function lu(i,e,t,n,s){let r,o;if(s===W_(i,e,t,n)>0)for(r=e;r<t;r+=n)o=Ic(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=Ic(r,i[r],i[r+1],o);return o&&qr(o,o.next)&&(Rs(o),o=o.next),o}function ii(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(qr(t,t.next)||ct(t.prev,t,t.next)===0)){if(Rs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ws(i,e,t,n,s,r,o){if(!i)return;!o&&r&&B_(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?P_(i,n,s,r):C_(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Rs(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=I_(ii(i),e,t),ws(i,e,t,n,s,r,2)):o===2&&D_(i,e,t,n,s,r):ws(ii(i),e,t,n,s,r,1);break}}}function C_(i){const e=i.prev,t=i,n=i.next;if(ct(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&Di(s,a,r,l,o,c,g.x,g.y)&&ct(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function P_(i,e,t,n){const s=i.prev,r=i,o=i.next;if(ct(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,p=a<l?a<c?a:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,v=a>l?a>c?a:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,f=La(p,g,e,t,n),A=La(v,m,e,t,n);let E=i.prevZ,S=i.nextZ;for(;E&&E.z>=f&&S&&S.z<=A;){if(E.x>=p&&E.x<=v&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&Di(a,h,l,u,c,d,E.x,E.y)&&ct(E.prev,E,E.next)>=0||(E=E.prevZ,S.x>=p&&S.x<=v&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&Di(a,h,l,u,c,d,S.x,S.y)&&ct(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;E&&E.z>=f;){if(E.x>=p&&E.x<=v&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&Di(a,h,l,u,c,d,E.x,E.y)&&ct(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;S&&S.z<=A;){if(S.x>=p&&S.x<=v&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&Di(a,h,l,u,c,d,S.x,S.y)&&ct(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function I_(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!qr(s,r)&&cu(s,n,n.next,r)&&As(s,r)&&As(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Rs(n),Rs(n.next),n=i=r),n=n.next}while(n!==i);return ii(n)}function D_(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&V_(o,a)){let l=hu(o,a);o=ii(o,o.next),l=ii(l,l.next),ws(o,e,t,n,s,r,0),ws(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function L_(i,e,t,n){const s=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=lu(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(z_(c));for(s.sort(N_),r=0;r<s.length;r++)t=U_(s[r],t);return t}function N_(i,e){return i.x-e.x}function U_(i,e){const t=F_(i,e);if(!t)return e;const n=hu(t,i);return ii(n,n.next),ii(t,t.next)}function F_(i,e){let t=e,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Di(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),As(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&O_(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function O_(i,e){return ct(i.prev,i,e.prev)<0&&ct(e.next,i,i.next)<0}function B_(i,e,t,n){let s=i;do s.z===0&&(s.z=La(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,k_(s)}function k_(i){let e,t,n,s,r,o,a,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function La(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function z_(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Di(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function V_(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!H_(i,e)&&(As(i,e)&&As(e,i)&&G_(i,e)&&(ct(i.prev,i,e.prev)||ct(i,e.prev,e))||qr(i,e)&&ct(i.prev,i,i.next)>0&&ct(e.prev,e,e.next)>0)}function ct(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function qr(i,e){return i.x===e.x&&i.y===e.y}function cu(i,e,t,n){const s=ur(ct(i,e,t)),r=ur(ct(i,e,n)),o=ur(ct(t,n,i)),a=ur(ct(t,n,e));return!!(s!==r&&o!==a||s===0&&hr(i,t,e)||r===0&&hr(i,n,e)||o===0&&hr(t,i,n)||a===0&&hr(t,e,n))}function hr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ur(i){return i>0?1:i<0?-1:0}function H_(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&cu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function As(i,e){return ct(i.prev,i,i.next)<0?ct(i,e,i.next)>=0&&ct(i,i.prev,e)>=0:ct(i,e,i.prev)<0||ct(i,i.next,e)<0}function G_(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function hu(i,e){const t=new Na(i.i,i.x,i.y),n=new Na(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Ic(i,e,t,n){const s=new Na(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Rs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Na(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function W_(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class xs{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return xs.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Dc(e),Lc(n,e);let o=e.length;t.forEach(Dc);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Lc(n,t[l]);const a=R_.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Dc(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Lc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class rl extends Tt{constructor(e=new au([new ne(.5,.5),new ne(-.5,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new vt(s,3)),this.setAttribute("uv",new vt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,A=t.UVGenerator!==void 0?t.UVGenerator:X_;let E,S=!1,B,I,P,U;f&&(E=f.getSpacedPoints(h),S=!0,d=!1,B=f.computeFrenetFrames(h,!1),I=new R,P=new R,U=new R),d||(m=0,p=0,g=0,v=0);const M=a.extractPoints(c);let x=M.shape;const C=M.holes;if(!xs.isClockWise(x)){x=x.reverse();for(let Z=0,re=C.length;Z<re;Z++){const w=C[Z];xs.isClockWise(w)&&(C[Z]=w.reverse())}}const O=xs.triangulateShape(x,C),H=x;for(let Z=0,re=C.length;Z<re;Z++){const w=C[Z];x=x.concat(w)}function J(Z,re,w){return re||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(re,w)}const X=x.length,ie=O.length;function G(Z,re,w){let Re,te,_e;const oe=Z.x-re.x,Ee=Z.y-re.y,ue=w.x-Z.x,b=w.y-Z.y,_=oe*oe+Ee*Ee,F=oe*b-Ee*ue;if(Math.abs(F)>Number.EPSILON){const $=Math.sqrt(_),Q=Math.sqrt(ue*ue+b*b),Y=re.x-Ee/$,we=re.y+oe/$,de=w.x-b/Q,xe=w.y+ue/Q,qe=((de-Y)*b-(xe-we)*ue)/(oe*b-Ee*ue);Re=Y+oe*qe-Z.x,te=we+Ee*qe-Z.y;const se=Re*Re+te*te;if(se<=2)return new ne(Re,te);_e=Math.sqrt(se/2)}else{let $=!1;oe>Number.EPSILON?ue>Number.EPSILON&&($=!0):oe<-Number.EPSILON?ue<-Number.EPSILON&&($=!0):Math.sign(Ee)===Math.sign(b)&&($=!0),$?(Re=-Ee,te=oe,_e=Math.sqrt(_)):(Re=oe,te=Ee,_e=Math.sqrt(_/2))}return new ne(Re/_e,te/_e)}const le=[];for(let Z=0,re=H.length,w=re-1,Re=Z+1;Z<re;Z++,w++,Re++)w===re&&(w=0),Re===re&&(Re=0),le[Z]=G(H[Z],H[w],H[Re]);const ve=[];let Te,Be=le.concat();for(let Z=0,re=C.length;Z<re;Z++){const w=C[Z];Te=[];for(let Re=0,te=w.length,_e=te-1,oe=Re+1;Re<te;Re++,_e++,oe++)_e===te&&(_e=0),oe===te&&(oe=0),Te[Re]=G(w[Re],w[_e],w[oe]);ve.push(Te),Be=Be.concat(Te)}for(let Z=0;Z<m;Z++){const re=Z/m,w=p*Math.cos(re*Math.PI/2),Re=g*Math.sin(re*Math.PI/2)+v;for(let te=0,_e=H.length;te<_e;te++){const oe=J(H[te],le[te],Re);ce(oe.x,oe.y,-w)}for(let te=0,_e=C.length;te<_e;te++){const oe=C[te];Te=ve[te];for(let Ee=0,ue=oe.length;Ee<ue;Ee++){const b=J(oe[Ee],Te[Ee],Re);ce(b.x,b.y,-w)}}}const Ze=g+v;for(let Z=0;Z<X;Z++){const re=d?J(x[Z],Be[Z],Ze):x[Z];S?(P.copy(B.normals[0]).multiplyScalar(re.x),I.copy(B.binormals[0]).multiplyScalar(re.y),U.copy(E[0]).add(P).add(I),ce(U.x,U.y,U.z)):ce(re.x,re.y,0)}for(let Z=1;Z<=h;Z++)for(let re=0;re<X;re++){const w=d?J(x[re],Be[re],Ze):x[re];S?(P.copy(B.normals[Z]).multiplyScalar(w.x),I.copy(B.binormals[Z]).multiplyScalar(w.y),U.copy(E[Z]).add(P).add(I),ce(U.x,U.y,U.z)):ce(w.x,w.y,u/h*Z)}for(let Z=m-1;Z>=0;Z--){const re=Z/m,w=p*Math.cos(re*Math.PI/2),Re=g*Math.sin(re*Math.PI/2)+v;for(let te=0,_e=H.length;te<_e;te++){const oe=J(H[te],le[te],Re);ce(oe.x,oe.y,u+w)}for(let te=0,_e=C.length;te<_e;te++){const oe=C[te];Te=ve[te];for(let Ee=0,ue=oe.length;Ee<ue;Ee++){const b=J(oe[Ee],Te[Ee],Re);S?ce(b.x,b.y+E[h-1].y,E[h-1].x+w):ce(b.x,b.y,u+w)}}}K(),ee();function K(){const Z=s.length/3;if(d){let re=0,w=X*re;for(let Re=0;Re<ie;Re++){const te=O[Re];Ne(te[2]+w,te[1]+w,te[0]+w)}re=h+m*2,w=X*re;for(let Re=0;Re<ie;Re++){const te=O[Re];Ne(te[0]+w,te[1]+w,te[2]+w)}}else{for(let re=0;re<ie;re++){const w=O[re];Ne(w[2],w[1],w[0])}for(let re=0;re<ie;re++){const w=O[re];Ne(w[0]+X*h,w[1]+X*h,w[2]+X*h)}}n.addGroup(Z,s.length/3-Z,0)}function ee(){const Z=s.length/3;let re=0;Me(H,re),re+=H.length;for(let w=0,Re=C.length;w<Re;w++){const te=C[w];Me(te,re),re+=te.length}n.addGroup(Z,s.length/3-Z,1)}function Me(Z,re){let w=Z.length;for(;--w>=0;){const Re=w;let te=w-1;te<0&&(te=Z.length-1);for(let _e=0,oe=h+m*2;_e<oe;_e++){const Ee=X*_e,ue=X*(_e+1),b=re+Re+Ee,_=re+te+Ee,F=re+te+ue,$=re+Re+ue;ke(b,_,F,$)}}}function ce(Z,re,w){l.push(Z),l.push(re),l.push(w)}function Ne(Z,re,w){Oe(Z),Oe(re),Oe(w);const Re=s.length/3,te=A.generateTopUV(n,s,Re-3,Re-2,Re-1);Ye(te[0]),Ye(te[1]),Ye(te[2])}function ke(Z,re,w,Re){Oe(Z),Oe(re),Oe(Re),Oe(re),Oe(w),Oe(Re);const te=s.length/3,_e=A.generateSideWallUV(n,s,te-6,te-3,te-2,te-1);Ye(_e[0]),Ye(_e[1]),Ye(_e[3]),Ye(_e[1]),Ye(_e[2]),Ye(_e[3])}function Oe(Z){s.push(l[Z*3+0]),s.push(l[Z*3+1]),s.push(l[Z*3+2])}function Ye(Z){r.push(Z.x),r.push(Z.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return q_(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Da[s.type]().fromJSON(s)),new rl(n,e.options)}}const X_={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new ne(r,o),new ne(a,l),new ne(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],p=e[s*3+1],g=e[s*3+2],v=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ne(o,1-l),new ne(c,1-u),new ne(d,1-g),new ne(v,1-f)]:[new ne(a,1-l),new ne(h,1-u),new ne(p,1-g),new ne(m,1-f)]}};function q_(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ol extends Tt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let u=e;const d=(t-e)/s,p=new R,g=new ne;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const f=r+m/n*o;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let v=0;v<s;v++){const m=v*(n+1);for(let f=0;f<n;f++){const A=f+m,E=A,S=A+n+1,B=A+n+2,I=A+1;a.push(E,S,I),a.push(S,B,I)}}this.setIndex(a),this.setAttribute("position",new vt(l,3)),this.setAttribute("normal",new vt(c,3)),this.setAttribute("uv",new vt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ol(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Y_ extends gt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class uu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Nc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Nc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Nc(){return performance.now()}class ji{constructor(e){this.value=e}clone(){return new ji(this.value.clone===void 0?this.value:this.value.clone())}}const Uc=new st;class $_{constructor(e,t,n=0,s=1/0){this.ray=new Ps(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Qa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Uc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Uc),this}intersectObject(e,t=!0,n=[]){return Ua(e,this,n,t),n.sort(Fc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ua(e[s],this,n,t);return n.sort(Fc),n}}function Fc(i,e){return i.distance-e.distance}function Ua(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Ua(r[o],e,t,!0)}}class tn{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(St(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class K_ extends gs{constructor(e=10,t=16,n=8,s=64,r=4473924,o=8947848){r=new ze(r),o=new ze(o);const a=[],l=[];if(t>1)for(let u=0;u<t;u++){const d=u/t*(Math.PI*2),p=Math.sin(d)*e,g=Math.cos(d)*e;a.push(0,0,0),a.push(p,0,g);const v=u&1?r:o;l.push(v.r,v.g,v.b),l.push(v.r,v.g,v.b)}for(let u=0;u<n;u++){const d=u&1?r:o,p=e-e/n*u;for(let g=0;g<s;g++){let v=g/s*(Math.PI*2),m=Math.sin(v)*p,f=Math.cos(v)*p;a.push(m,0,f),l.push(d.r,d.g,d.b),v=(g+1)/s*(Math.PI*2),m=Math.sin(v)*p,f=Math.cos(v)*p,a.push(m,0,f),l.push(d.r,d.g,d.b)}}const c=new Tt;c.setAttribute("position",new vt(a,3)),c.setAttribute("color",new vt(l,3));const h=new tl({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Z_ extends si{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ha}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ha);class j_{constructor(e){T(this,"floorIds");T(this,"floorById",new Map);T(this,"roomById",new Map);this.building=e,this.floorIds=e.floors.map(t=>t.id);for(const t of e.floors){this.floorById.set(t.id,t);for(const n of t.zones)for(const s of n.rooms)this.roomById.set(s.id,{room:s,zone:n,floor:t})}}floor(e){return this.floorById.get(e)}room(e){return this.roomById.get(e)}roomsMatching(e){const t=[];for(const n of this.building.floors)if(!(e.floorId&&n.id!==e.floorId)){for(const s of n.zones)if(!(e.zoneFunction&&s.function!==e.zoneFunction))for(const r of s.rooms){const o=this.roomById.get(r.id);o&&t.push(o)}}return t}info(e){if(e.type==="room"){const t=this.roomById.get(e.id);if(t)return{ref:{...e},type:"room",name:t.room.name,floorId:t.floor.id,floorName:t.floor.name,zoneName:t.zone.name,zoneFunction:t.zone.function,sensors:Oc(t.room.sensors)}}if(e.type==="floor"){const t=this.floorById.get(e.id);if(t){const n=t.zones.flatMap(s=>s.rooms.flatMap(r=>r.sensors));return{ref:{...e},type:"floor",name:t.name,floorId:t.id,floorName:t.name,sensors:Oc(n)}}}return e.type==="building"?{ref:{...e},type:"building",name:this.building.name,sensors:[]}:{ref:{...e},type:e.type,name:e.id,sensors:[]}}}function Oc(i){return i.map(e=>({...e}))}const Bc={type:"change"},al={type:"start"},du={type:"end"},dr=new Ps,kc=new On,Q_=Math.cos(70*ht.DEG2RAD),ft=new R,Ut=2*Math.PI,it={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ro=1e-6;class J_ extends Z_{constructor(e,t=null){super(e,t),this.state=it.NONE,this.enabled=!0,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Li.ROTATE,MIDDLE:Li.DOLLY,RIGHT:Li.PAN},this.touches={ONE:Pi.ROTATE,TWO:Pi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new ni,this._lastTargetPosition=new R,this._quat=new ni().setFromUnitVectors(e.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new tn,this._sphericalDelta=new tn,this._scale=1,this._panOffset=new R,this._rotateStart=new ne,this._rotateEnd=new ne,this._rotateDelta=new ne,this._panStart=new ne,this._panEnd=new ne,this._panDelta=new ne,this._dollyStart=new ne,this._dollyEnd=new ne,this._dollyDelta=new ne,this._dollyDirection=new R,this._mouse=new ne,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=t0.bind(this),this._onPointerDown=e0.bind(this),this._onPointerUp=n0.bind(this),this._onContextMenu=c0.bind(this),this._onMouseWheel=r0.bind(this),this._onKeyDown=o0.bind(this),this._onTouchStart=a0.bind(this),this._onTouchMove=l0.bind(this),this._onMouseDown=i0.bind(this),this._onMouseMove=s0.bind(this),this._interceptControlDown=h0.bind(this),this._interceptControlUp=u0.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Bc),this.update(),this.state=it.NONE}update(e=null){const t=this.object.position;ft.copy(t).sub(this.target),ft.applyQuaternion(this._quat),this._spherical.setFromVector3(ft),this.autoRotate&&this.state===it.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ut:n>Math.PI&&(n-=Ut),s<-Math.PI?s+=Ut:s>Math.PI&&(s-=Ut),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(ft.setFromSpherical(this._spherical),ft.applyQuaternion(this._quatInverse),t.copy(this.target).add(ft),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=ft.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new R(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new R(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=ft.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(dr.origin.copy(this.object.position),dr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(dr.direction))<Q_?this.object.lookAt(this.target):(kc.setFromNormalAndCoplanarPoint(this.object.up,this.target),dr.intersectPlane(kc,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ro||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ro||this._lastTargetPosition.distanceToSquared(this.target)>Ro?(this.dispatchEvent(Bc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ut/60*this.autoRotateSpeed*e:Ut/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){ft.setFromMatrixColumn(t,0),ft.multiplyScalar(-e),this._panOffset.add(ft)}_panUp(e,t){this.screenSpacePanning===!0?ft.setFromMatrixColumn(t,1):(ft.setFromMatrixColumn(t,0),ft.crossVectors(this.object.up,ft)),ft.multiplyScalar(e),this._panOffset.add(ft)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ft.copy(s).sub(this.target);let r=ft.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ut*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ut*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Ut*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Ut*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Ut*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Ut*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ut*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ut*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ne,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function e0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function t0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function n0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(du),this.state=it.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function i0(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Li.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=it.DOLLY;break;case Li.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=it.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=it.ROTATE}break;case Li.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=it.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=it.PAN}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(al)}function s0(i){switch(this.state){case it.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case it.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case it.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function r0(i){this.enabled===!1||this.enableZoom===!1||this.state!==it.NONE||(i.preventDefault(),this.dispatchEvent(al),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(du))}function o0(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function a0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Pi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=it.TOUCH_ROTATE;break;case Pi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=it.TOUCH_PAN;break;default:this.state=it.NONE}break;case 2:switch(this.touches.TWO){case Pi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=it.TOUCH_DOLLY_PAN;break;case Pi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=it.TOUCH_DOLLY_ROTATE;break;default:this.state=it.NONE}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(al)}function l0(i){switch(this._trackPointer(i),this.state){case it.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case it.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case it.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case it.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=it.NONE}}function c0(i){this.enabled!==!1&&i.preventDefault()}function h0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function u0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const fu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Qi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const d0=new Zh(-1,1,1,-1,0,1);class f0 extends Tt{constructor(){super(),this.setAttribute("position",new vt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new vt([0,2,0,0,2,0],2))}}const p0=new f0;class ll{constructor(e){this._mesh=new Et(p0,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,d0)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Fa extends Qi{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof gt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ts.clone(e.uniforms),this.material=new gt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ll(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class zc extends Qi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class m0 extends Qi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class g0{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new ne);this._width=n.width,this._height=n.height,t=new rn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Mn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Fa(fu),this.copyPass.material.blending=Sn,this.clock=new uu}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}zc!==void 0&&(o instanceof zc?n=!0:o instanceof m0&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class v0 extends Qi{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ze}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const _0={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class x0 extends Qi{constructor(){super();const e=_0;this.uniforms=Ts.clone(e.uniforms),this.material=new Y_({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ll(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ke.getTransfer(this._outputColorSpace)===nt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Eh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===bh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Th?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ga?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===wh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ah&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const y0={uniforms:{tDiffuse:{value:null},uTime:{value:0},uResolution:{value:new ne(1,1)}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform vec2 uResolution;
    varying vec2 vUv;
    void main() {
      vec4 color = texture2D(tDiffuse, vUv);
      float scan = 0.97 + 0.03 * sin(vUv.y * uResolution.y * 1.2 + uTime * 1.5);
      float dist = distance(vUv, vec2(0.5));
      float vignette = 1.0 - smoothstep(0.35, 0.85, dist);
      color.rgb *= scan * mix(0.72, 1.0, vignette);
      gl_FragColor = color;
    }
  `},S0={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ze(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Wi extends Qi{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ne(e.x,e.y):new ne(256,256),this.clearColor=new ze(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new rn(r,o,{type:Mn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new rn(r,o,{type:Mn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new rn(r,o,{type:Mn});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}const a=S0;this.highPassUniforms=Ts.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new gt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ne(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=fu;this.copyUniforms=Ts.clone(h.uniforms),this.blendMaterial=new gt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Tn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ze,this.oldClearAlpha=1,this.basic=new Gr,this.fsQuad=new ll(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ne(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Wi.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Wi.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new gt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ne(.5,.5)},direction:{value:new ne(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new gt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Wi.BlurDirectionX=new ne(1,0);Wi.BlurDirectionY=new ne(0,1);class M0 extends Wi{constructor(e,t,n,s,r){super(e.clone().multiplyScalar(t),n,s,r),this.resolutionScale=t}setSize(e,t){super.setSize(Math.max(1,Math.round(e*this.resolutionScale)),Math.max(1,Math.round(t*this.resolutionScale)))}get brightBufferSize(){return{width:this.renderTargetBright.width,height:this.renderTargetBright.height}}}const E0={uniforms:{tDiffuse:{value:null},uPaper:{value:new ze("#eef3f6")},uTexel:{value:new ne(1/1920,1/1080)},uInkDepth:{value:.34},uWashDepth:{value:.8},uInkGain:{value:7},uWashGain:{value:1.1}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform vec3 uPaper;
    uniform vec2 uTexel;
    uniform float uInkDepth;
    uniform float uWashDepth;
    uniform float uInkGain;
    uniform float uWashGain;
    varying vec2 vUv;
    float luma(vec3 c) { return dot(c, vec3(0.2126, 0.7152, 0.0722)); }
    vec3 hueOf(vec3 c) {
      float peak = max(max(c.r, c.g), c.b);
      return peak > 0.001 ? c / peak : vec3(0.0);
    }
    void main() {
      vec3 c = texture2D(tDiffuse, vUv).rgb;
      vec3 sum = vec3(0.0);
      for (int y = -1; y <= 1; y++) {
        for (int x = -1; x <= 1; x++) {
          sum += texture2D(tDiffuse, vUv + vec2(float(x), float(y)) * uTexel * 2.5).rgb;
        }
      }
      vec3 mean = sum / 9.0;
      float detail = max(luma(c) - luma(mean), 0.0);
      float inkCoverage = clamp(detail * uInkGain, 0.0, 1.0);
      float washCoverage = clamp(luma(mean) * uWashGain, 0.0, 0.7);
      vec3 wash = mix(uPaper, hueOf(mean) * uWashDepth, washCoverage);
      vec3 ink = hueOf(c) * uInkDepth;
      gl_FragColor = vec4(mix(wash, ink, inkCoverage), 1.0);
    }
  `},Vc="#02040a",Co=.0025,Po={high:{bloom:.5,overlay:!0,dpr:2,holoGain:1},medium:{bloom:.32,overlay:!1,dpr:1.5,holoGain:1},low:{bloom:0,overlay:!1,dpr:1,holoGain:6}},Hc=["high","medium","low"],b0=26,T0=90,w0=1e3/60,A0=1e3/30,R0=1e3/30,C0=100,Gc=1,Wc=1500,P0=.5;class I0{constructor(e,t="high"){T(this,"scene",new c_);T(this,"camera");T(this,"controls");T(this,"renderer");T(this,"holoLuminance",new ji(1));T(this,"composer",null);T(this,"overlayPass",null);T(this,"bloomPass",null);T(this,"inkPass",null);T(this,"theme","dark");T(this,"updates",new Set);T(this,"clock",new uu);T(this,"frameIntervals",[]);T(this,"cpuFrameTimes",[]);T(this,"gpuFrameTimes",[]);T(this,"drawingBufferSize",new ne);T(this,"gpuTimer",null);T(this,"quality","high");T(this,"qualityInitialized",!1);T(this,"cadenceGate",new L0);T(this,"autoQuality",!0);T(this,"frameAccum",0);T(this,"frameCount",0);T(this,"burstUntil",performance.now()+Wc);T(this,"activityProbe",null);T(this,"requestedFogDensity",Co);T(this,"onQuality",null);T(this,"resizeObserver",null);T(this,"intersectionObserver",null);T(this,"containerVisible",!0);T(this,"disposed",!1);T(this,"onResize",()=>{var n,s;if(this.disposed)return;const[e,t]=this.dims();this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),(n=this.composer)==null||n.setSize(e,t),(s=this.overlayPass)==null||s.uniforms.uResolution.value.set(e,t),this.syncInkTexel(e,t),this.requestRenderBurst()});T(this,"onInteraction",()=>{this.requestRenderBurst()});T(this,"onVisibilityChange",()=>{document.hidden||this.resetFrameClock()});this.container=e;const[n,s]=this.dims();this.renderer=new l_({antialias:!0,powerPreference:"high-performance"}),this.renderer.info.autoReset=!1,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,Po[t].dpr)),this.renderer.setSize(n,s),this.renderer.toneMapping=Ga,this.initializeGpuTimer(),e.appendChild(this.renderer.domElement),this.scene.background=new ze(Vc),this.scene.fog=new el(Vc,Co),this.camera=new qt(50,n/s,.1,2e3),this.controls=new J_(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.maxPolarAngle=Math.PI/2-.02,this.controls.minDistance=8,this.controls.maxDistance=160,this.controls.addEventListener("start",this.onInteraction),this.renderer.domElement.addEventListener("pointerdown",this.onInteraction,{passive:!0}),this.renderer.domElement.addEventListener("wheel",this.onInteraction,{passive:!0}),window.addEventListener("resize",this.onResize),typeof ResizeObserver<"u"&&(this.resizeObserver=new ResizeObserver(this.onResize),this.resizeObserver.observe(e)),typeof IntersectionObserver<"u"&&(this.intersectionObserver=new IntersectionObserver(r=>{var a;const o=((a=r[0])==null?void 0:a.isIntersecting)??!0;o&&!this.containerVisible&&this.resetFrameClock(),this.containerVisible=o}),this.intersectionObserver.observe(e)),document.addEventListener("visibilitychange",this.onVisibilityChange),this.setQuality(t,!0),this.onResize()}setFogDensity(e){this.disposed||(this.requestedFogDensity=e??Co,this.applyFogDensity())}getQuality(){return this.quality}getPerformanceStats(){var a,l;this.pollGpuTimers();const e=Do(this.frameIntervals),t=Do(this.cpuFrameTimes),n=Do(this.gpuFrameTimes),s=this.renderer.info.render,r=this.isBursting(performance.now())?"burst":"idle",o=(a=this.bloomPass)==null?void 0:a.brightBufferSize;return this.renderer.getDrawingBufferSize(this.drawingBufferSize),{quality:this.quality,renderCadence:r,targetFps:D0(this.quality,r),fps:e.average>0?1e3/e.average:0,frameMs:t.average,p95FrameMs:t.p95,frameIntervalMs:e.average,p95FrameIntervalMs:e.p95,gpuFrameMs:n.count?n.average:null,p95GpuFrameMs:n.count?n.p95:null,gpuTimingSupported:this.gpuTimer!==null,drawCalls:s.calls,triangles:s.triangles,points:s.points,lines:s.lines,geometries:this.renderer.info.memory.geometries,textures:this.renderer.info.memory.textures,drawingBufferWidth:this.drawingBufferSize.x,drawingBufferHeight:this.drawingBufferSize.y,pixelRatio:this.renderer.getPixelRatio(),holoLuminanceGain:this.holoLuminance.value,postProcessing:this.composer!==null,bloomResolutionScale:((l=this.bloomPass)==null?void 0:l.resolutionScale)??null,bloomBufferWidth:(o==null?void 0:o.width)??0,bloomBufferHeight:(o==null?void 0:o.height)??0}}onQualityChange(e){this.disposed||(this.onQuality=e)}requestRenderBurst(e=Wc){this.disposed||(this.burstUntil=Math.max(this.burstUntil,performance.now()+Math.max(0,e)),this.resetCadenceGate())}setActivityProbe(e){this.disposed||(this.activityProbe=e,e!=null&&e()&&this.requestRenderBurst())}setQuality(e,t=!1){var s,r;if(this.disposed)return;if(this.qualityInitialized&&this.quality===e){t||(this.autoQuality=!1),this.requestRenderBurst(),(s=this.onQuality)==null||s.call(this,e,this.autoQuality);return}this.quality=e,this.qualityInitialized=!0,t||(this.autoQuality=!1);const n=Po[e];this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,n.dpr)),this.holoLuminance.value=n.holoGain,e==="low"&&this.theme==="dark"?this.disposeComposer():(this.ensureComposer(),this.applyTierToComposer()),this.resetCadenceGate(),this.requestRenderBurst(),this.applyFogDensity(),this.onResize(),(r=this.onQuality)==null||r.call(this,e,this.autoQuality)}get domElement(){return this.renderer.domElement}getHoloLuminanceUniform(){return this.holoLuminance}setTheme(e){this.disposed||this.theme===e||(this.theme=e,this.quality==="low"&&e==="dark"?this.disposeComposer():(this.ensureComposer(),this.applyTierToComposer(),this.onResize()),this.requestRenderBurst())}getTheme(){return this.theme}applyTierToComposer(){const e=Po[this.quality];this.composer.setPixelRatio(this.renderer.getPixelRatio()),this.bloomPass.enabled=e.bloom>0,this.bloomPass.strength=e.bloom,this.overlayPass.enabled=e.overlay,this.inkPass.enabled=this.theme==="light";const[t,n]=this.dims();this.syncInkTexel(t,n)}syncInkTexel(e,t){if(!this.inkPass)return;const n=this.renderer.getPixelRatio();this.inkPass.uniforms.uTexel.value.set(1/Math.max(1,e*n),1/Math.max(1,t*n))}registerUpdate(e){return this.disposed?()=>{}:(this.updates.add(e),()=>this.updates.delete(e))}start(){this.disposed||this.renderer.setAnimationLoop(e=>{if(!this.shouldRender())return;const t=this.isBursting(e)?"burst":"idle";this.cadenceGate.shouldRender(e,this.quality,t)&&this.tick()})}stop(){this.disposed||(this.renderer.setAnimationLoop(null),this.resetCadenceGate())}renderOnce(){this.disposed||this.tick(!0)}dispose(){var e,t;this.disposed||(this.stop(),this.disposed=!0,window.removeEventListener("resize",this.onResize),(e=this.resizeObserver)==null||e.disconnect(),this.resizeObserver=null,(t=this.intersectionObserver)==null||t.disconnect(),this.intersectionObserver=null,document.removeEventListener("visibilitychange",this.onVisibilityChange),this.controls.removeEventListener("start",this.onInteraction),this.renderer.domElement.removeEventListener("pointerdown",this.onInteraction),this.renderer.domElement.removeEventListener("wheel",this.onInteraction),this.clock.stop(),this.updates.clear(),this.controls.dispose(),this.disposeComposer(),this.disposeGpuTimer(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.onQuality=null,this.frameAccum=0,this.frameCount=0,this.frameIntervals=[],this.cpuFrameTimes=[],this.gpuFrameTimes=[],this.activityProbe=null)}tick(e=!1){var o;if(this.disposed||!e&&!this.shouldRender())return;const t=performance.now(),n=this.clock.getDelta(),s=this.clock.elapsedTime;for(const a of this.updates)a(n,s);this.controls.update(n),this.renderer.info.reset(),this.beginGpuTimer(),(o=this.overlayPass)!=null&&o.enabled&&(this.overlayPass.uniforms.uTime.value=s),this.composer?this.composer.render():(this.renderer.setRenderTarget(null),this.renderer.render(this.scene,this.camera)),this.endGpuTimer(),this.pollGpuTimers();const r=performance.now()-t;this.monitorFrame(r),this.recordFrameMetrics(n,r)}monitorFrame(e){if(!this.autoQuality||this.quality==="low"||(this.frameAccum+=e,++this.frameCount<T0))return;const t=this.frameAccum/this.frameCount;if(this.frameAccum=0,this.frameCount=0,t>b0){const n=Hc[Hc.indexOf(this.quality)+1];n&&this.setQuality(n,!0)}}dims(){return[this.container.clientWidth||window.innerWidth,this.container.clientHeight||window.innerHeight]}shouldRender(){return!document.hidden&&this.containerVisible}resetFrameClock(){this.disposed||(this.clock.stop(),this.clock.start(),this.resetCadenceGate(),this.requestRenderBurst())}resetCadenceGate(){this.cadenceGate.reset()}isBursting(e){var t;return e<this.burstUntil||(((t=this.activityProbe)==null?void 0:t.call(this))??!1)}ensureComposer(){if(this.composer)return;const[e,t]=this.dims(),n=new g0(this.renderer);n.setPixelRatio(this.renderer.getPixelRatio()),n.addPass(new v0(this.scene,this.camera));const s=new M0(new ne(e,t),P0,.5,.45,.2);n.addPass(s);const r=new Fa(y0);n.addPass(r),n.addPass(new x0);const o=new Fa(E0);o.enabled=this.theme==="light",n.addPass(o),this.composer=n,this.bloomPass=s,this.overlayPass=r,this.inkPass=o}disposeComposer(){if(this.composer){for(const e of this.composer.passes)e.dispose();this.composer.passes.length=0,this.composer.dispose(),this.composer=null,this.bloomPass=null,this.overlayPass=null,this.inkPass=null}}applyFogDensity(){this.scene.fog.density=this.quality==="high"?this.requestedFogDensity:0}initializeGpuTimer(){const e=this.renderer.getContext();if(!(e instanceof WebGL2RenderingContext))return;const t=e.getExtension("EXT_disjoint_timer_query_webgl2");t&&(this.gpuTimer={gl:e,extension:t,active:null,pending:[]})}beginGpuTimer(){const e=this.gpuTimer;if(!e||e.active||e.pending.length>=4)return;const t=e.gl.createQuery();if(t)try{e.gl.beginQuery(e.extension.TIME_ELAPSED_EXT,t),e.active=t}catch{e.gl.deleteQuery(t),this.disposeGpuTimer()}}endGpuTimer(){const e=this.gpuTimer;if(e!=null&&e.active)try{e.gl.endQuery(e.extension.TIME_ELAPSED_EXT),e.pending.push(e.active),e.active=null}catch{this.disposeGpuTimer()}}pollGpuTimers(){const e=this.gpuTimer;if(!(!e||e.active)){if(e.gl.getParameter(e.extension.GPU_DISJOINT_EXT)){for(const t of e.pending.splice(0))e.gl.deleteQuery(t);return}for(;e.pending.length;){const t=e.pending[0];if(!e.gl.getQueryParameter(t,e.gl.QUERY_RESULT_AVAILABLE))break;const n=e.gl.getQueryParameter(t,e.gl.QUERY_RESULT);e.pending.shift(),e.gl.deleteQuery(t);const s=n/1e6;Number.isFinite(s)&&s>=0&&s<1e3&&Io(this.gpuFrameTimes,s)}}}disposeGpuTimer(){const e=this.gpuTimer;if(e){if(e.active){try{e.gl.endQuery(e.extension.TIME_ELAPSED_EXT)}catch{}e.gl.deleteQuery(e.active)}for(const t of e.pending)e.gl.deleteQuery(t);this.gpuTimer=null}}recordFrameMetrics(e,t){const n=e*1e3;Number.isFinite(n)&&n>0&&n<1e3&&Io(this.frameIntervals,n),Number.isFinite(t)&&t>=0&&t<1e3&&Io(this.cpuFrameTimes,t)}}function pu(i,e){return e==="idle"?C0:i==="high"?w0:i==="medium"?A0:R0}function D0(i,e){return Math.round(1e3/pu(i,e))}class L0{constructor(){T(this,"nextFrameAt",Number.NEGATIVE_INFINITY);T(this,"cadence",null);T(this,"lastTime",Number.NEGATIVE_INFINITY)}reset(){this.nextFrameAt=Number.NEGATIVE_INFINITY,this.cadence=null,this.lastTime=Number.NEGATIVE_INFINITY}shouldRender(e,t,n){if(!Number.isFinite(e))return!0;if((this.cadence!==n||e<this.lastTime)&&(this.cadence=n,this.nextFrameAt=e),this.lastTime=e,e+Gc<this.nextFrameAt)return!1;const s=pu(t,n),r=e+Gc-this.nextFrameAt;return this.nextFrameAt+=(Math.floor(Math.max(0,r)/s)+1)*s,!0}}function Io(i,e){i.push(e),i.length>240&&i.shift()}function Do(i){if(!i.length)return{average:0,p95:0,count:0};const e=i.reduce((n,s)=>n+s,0)/i.length,t=[...i].sort((n,s)=>n-s);return{average:e,p95:t[Math.min(t.length-1,Math.floor(t.length*.95))],count:i.length}}const ys=new ze("#36e6ff");function cl(i=ys,e=new ji(1)){return new gt({transparent:!0,depthWrite:!1,blending:Tn,side:$t,uniforms:{uColor:{value:i.clone()},uBase:{value:.015},uFresnelPower:{value:2.6},uIntensity:{value:.35},uOpacity:{value:1},uLodVisible:{value:1},uTint:{value:i.clone()},uTintStrength:{value:0},uSunDir:{value:new R(0,1,0)},uSunStrength:{value:0},uLuminance:e},vertexShader:`
      uniform vec3 uColor;
      uniform float uBase;
      uniform float uIntensity;
      uniform float uLodVisible;
      uniform vec3 uTint;
      uniform float uTintStrength;
      varying vec3 vNormal;
      varying vec3 vViewDir;
      varying vec3 vHoloColor;
      varying float vHoloBase;
      varying float vHoloIntensity;
      varying vec3 vHoloTint;
      varying float vHoloTintStrength;
      varying float vHoloOpacity;
      varying float vHoloLodVisible;
      attribute vec3 instanceHoloColor;
      attribute float instanceHoloBase;
      attribute float instanceHoloIntensity;
      attribute vec3 instanceHoloTint;
      attribute float instanceHoloTintStrength;
      attribute float instanceHoloOpacity;
      attribute float instanceHoloLodVisible;
      void main() {
        mat4 transform = mat4(1.0);
        #ifdef USE_INSTANCING
          transform = instanceMatrix;
          vHoloColor = instanceHoloColor;
          vHoloBase = instanceHoloBase;
          vHoloIntensity = instanceHoloIntensity;
          vHoloTint = instanceHoloTint;
          vHoloTintStrength = instanceHoloTintStrength;
          vHoloOpacity = instanceHoloOpacity;
          vHoloLodVisible = instanceHoloLodVisible;
        #else
          vHoloColor = uColor;
          vHoloBase = uBase;
          vHoloIntensity = uIntensity;
          vHoloTint = uTint;
          vHoloTintStrength = uTintStrength;
          vHoloOpacity = 1.0;
          vHoloLodVisible = uLodVisible;
        #endif
        vec4 worldPos = modelMatrix * transform * vec4(position, 1.0);
        vNormal = normalize(mat3(modelMatrix * transform) * normal);
        vViewDir = normalize(cameraPosition - worldPos.xyz);
        gl_Position = projectionMatrix * viewMatrix * worldPos;
        // Collapse hidden triangles to one offscreen point. Domain geometry
        // remains raycastable so a summary-view click can reveal the room.
        if (vHoloLodVisible < 0.5) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 uColor;
      uniform float uBase;
      uniform float uFresnelPower;
      uniform float uIntensity;
      uniform float uOpacity;
      uniform vec3 uTint;
      uniform float uTintStrength;
      uniform vec3 uSunDir;
      uniform float uSunStrength;
      uniform float uLuminance;
      varying vec3 vNormal;
      varying vec3 vViewDir;
      varying vec3 vHoloColor;
      varying float vHoloBase;
      varying float vHoloIntensity;
      varying vec3 vHoloTint;
      varying float vHoloTintStrength;
      varying float vHoloOpacity;
      varying float vHoloLodVisible;
      void main() {
        if (vHoloLodVisible < 0.5) discard;
        float fresnel = pow(1.0 - abs(dot(normalize(vNormal), normalize(vViewDir))), uFresnelPower);
        // data tint lifts the fill glow so a hot room reads as a solid volume,
        // not just an edge; kept low so 100+ stacked volumes don't bloom out.
        float glow = vHoloBase + fresnel * vHoloIntensity + vHoloTintStrength * 0.22;
        // sun-facing faces catch extra glow (environment mode)
        glow += uSunStrength * max(0.0, dot(normalize(vNormal), normalize(uSunDir)));
        vec3 col = mix(vHoloColor, vHoloTint, vHoloTintStrength);
        gl_FragColor = vec4(col * glow * uLuminance, glow) * uOpacity * vHoloOpacity;
      }
    `})}function N0(i,e=ys,t=new ji(1)){return new gt({transparent:!0,depthWrite:!1,blending:Tn,uniforms:{uColor:{value:e.clone()},uOpacity:{value:1},uScaleY:{value:1},uBaseY:{value:i},uLuminance:t},vertexShader:`
      uniform float uScaleY;
      uniform float uBaseY;
      attribute float edgeOpacity;
      attribute float edgeScalable;
      varying float vOpacity;
      void main() {
        vec3 localPosition = position;
        float scaledY = uBaseY + (position.y - uBaseY) * uScaleY;
        localPosition.y = mix(position.y, scaledY, edgeScalable);
        vec4 worldPos = modelMatrix * vec4(localPosition, 1.0);
        vOpacity = edgeOpacity;
        gl_Position = projectionMatrix * viewMatrix * worldPos;
      }
    `,fragmentShader:`
      uniform vec3 uColor;
      uniform float uOpacity;
      uniform float uLuminance;
      varying float vOpacity;
      void main() {
        gl_FragColor = vec4(uColor * uLuminance, uOpacity * vOpacity);
      }
    `})}function Lt(i){i.updateMatrix(),i.matrixAutoUpdate=!1}const Cs=.18,U0=.18,F0=.45,Xc=30;function O0(i,e=new ji(1)){const t=new sn;t.name=`building:${i.id}`;const n=new Map,s=new Map;for(const l of i.floors){const c=k0(l,i.id,s,e);t.add(c),n.set(l.id,c)}const o=new Ot().setFromObject(t).getCenter(new R);t.position.set(-o.x,0,-o.z),Lt(t);const a=new sn;return a.name="buildingRoot",a.userData.entityRef={type:"building",id:i.id},a.add(t),Lt(a),{root:a,floorGroups:n}}class B0{constructor(e,t,n,s){this.mesh=e,this.instanceId=t,this.anchor=n,this.attributes=s}getColor(){return new ze(this.attributes.color.getX(this.instanceId),this.attributes.color.getY(this.instanceId),this.attributes.color.getZ(this.instanceId))}setColor(e){this.attributes.color.setXYZ(this.instanceId,e.r,e.g,e.b),this.attributes.color.needsUpdate=!0}getIntensity(){return this.attributes.intensity.getX(this.instanceId)}setIntensity(e){this.setScalar(this.attributes.intensity,e)}getBase(){return this.attributes.base.getX(this.instanceId)}setBase(e){this.setScalar(this.attributes.base,e)}getOpacity(){return this.attributes.opacity.getX(this.instanceId)}setOpacity(e){this.setScalar(this.attributes.opacity,e)}setTint(e,t=e?.8:0){this.setScalar(this.attributes.tintStrength,e?t:0),e&&(this.attributes.tint.setXYZ(this.instanceId,e.r,e.g,e.b),this.attributes.tint.needsUpdate=!0)}setScaleY(e){this.anchor.scale.y=e,this.anchor.updateMatrix(),this.mesh.setMatrixAt(this.instanceId,this.anchor.matrix),this.mesh.instanceMatrix.needsUpdate=!0}getLodVisible(){return this.attributes.lodVisible.getX(this.instanceId)>.5}setLodVisible(e){this.setScalar(this.attributes.lodVisible,e?1:0)}setScalar(e,t){e.setX(this.instanceId,t),e.needsUpdate=!0}}class mu{constructor(e,t){this.edge=e,this.roomId=t}getOpacity(){const e=this.edge.ranges.get(this.roomId);return e?this.edge.opacity.getX(e.start):0}setOpacity(e){const t=this.edge.ranges.get(this.roomId);if(t){for(let n=t.start;n<t.start+t.count;n++)this.edge.opacity.setX(n,e);this.edge.opacity.needsUpdate=!0}}setScaleY(e){this.edge.lines.material.uniforms.uScaleY.value=e}setVisible(e){this.edge.lines.visible=e}}function k0(i,e,t,n){const s=new sn;s.name=`floor:${i.id}`,s.position.y=i.elevation,s.userData.entityRef={type:"floor",id:i.id,buildingId:e},s.userData.baseElevation=i.elevation;const r=qc(i.outline,Cs),o=new Et(r,cl(void 0,n));o.userData.entityRef=s.userData.entityRef,Lt(o),s.add(o);const a=new Map;for(const h of i.zones)for(const u of h.rooms){const d=Math.max(.5,i.height-F0),[p,g]=u.footprint[0],v=u.footprint.map(([E,S])=>[E-p,S-g]),m=`${d}|${W0(v)}`;let f=t.get(m);if(!f){const E=qc(q0(v,U0),d);E.computeBoundingBox(),f={volume:E,edges:new Pc(E,Xc)},t.set(m,f)}const A=a.get(m)??[];A.push({room:u,originX:p,originY:g,cached:f,lodEligible:h.function==="guest"}),a.set(m,A)}const l=[...a.values()].flat(),c=H0(new Pc(r,Xc),l,n);Lt(c.lines),s.add(c.lines);for(const h of a.values())h.length===1?z0(s,h[0],e,c,n):V0(s,h,e,c,n);return s}function z0(i,e,t,n,s){const r=new Et(e.cached.volume,cl(void 0,s));r.position.set(e.originX,Cs,-e.originY),r.userData.entityRef=Oa(e.room.id,t),r.userData.roomLodEligible=e.lodEligible,r.userData.roomEdges=n.lines,r.userData.roomEdgeVisual=new mu(n,e.room.id),Lt(r),i.add(r)}function V0(i,e,t,n,s){const r=e[0].cached.volume.clone(),o=G0(r,e.length),a=new d_(r,cl(void 0,s),e.length);a.name=`instancedRooms:${e.length}`,a.userData.instanceRoomRefs=e.map(l=>Oa(l.room.id,t)),a.frustumCulled=!0,Lt(a),i.add(a);for(let l=0;l<e.length;l++){const c=e[l],h=new Pt;h.name=`room:${c.room.id}`,h.position.set(c.originX,Cs,-c.originY),h.userData.entityRef=Oa(c.room.id,t),h.userData.roomLodEligible=c.lodEligible,h.userData.roomLocalBounds=c.cached.volume.boundingBox.clone(),h.userData.roomVisual=new B0(a,l,h,o),h.userData.roomEdges=n.lines,h.userData.roomEdgeVisual=new mu(n,c.room.id),Lt(h),a.setMatrixAt(l,h.matrix),i.add(h)}a.instanceMatrix.needsUpdate=!0,a.computeBoundingSphere()}function H0(i,e,t){const n=i.attributes.position,s=e.reduce((g,v)=>g+v.cached.edges.attributes.position.count,0),r=n.count+s,o=new Float32Array(r*3),a=new Float32Array(r),l=new Float32Array(r),c=new Map;let h=0;for(let g=0;g<n.count;g++,h++)o[h*3]=n.getX(g),o[h*3+1]=n.getY(g),o[h*3+2]=n.getZ(g),a[h]=.55;for(const g of e){const v=g.cached.edges.attributes.position,m=h;for(let f=0;f<v.count;f++,h++)o[h*3]=v.getX(f)+g.originX,o[h*3+1]=v.getY(f)+Cs,o[h*3+2]=v.getZ(f)-g.originY,a[h]=.28,l[h]=1;c.set(g.room.id,{start:m,count:v.count})}const u=new Tt;u.setAttribute("position",new bt(o,3));const d=new bt(a,1);d.setUsage(Lr),u.setAttribute("edgeOpacity",d),u.setAttribute("edgeScalable",new bt(l,1));const p=new gs(u,N0(Cs,void 0,t));return p.name=`batchedFloorEdges:${e.length}`,{lines:p,opacity:d,ranges:c}}function G0(i,e){const t=new xn(new Float32Array(e*3),3),n=new xn(new Float32Array(e),1),s=new xn(new Float32Array(e),1),r=new xn(new Float32Array(e*3),3),o=new xn(new Float32Array(e),1),a=new xn(new Float32Array(e),1),l=new xn(new Float32Array(e),1),c=new ze("#36e6ff");for(let h=0;h<e;h++)t.setXYZ(h,c.r,c.g,c.b),n.setX(h,.015),s.setX(h,.35),r.setXYZ(h,c.r,c.g,c.b),o.setX(h,0),a.setX(h,1),l.setX(h,1);return i.setAttribute("instanceHoloColor",t),i.setAttribute("instanceHoloBase",n),i.setAttribute("instanceHoloIntensity",s),i.setAttribute("instanceHoloTint",r),i.setAttribute("instanceHoloTintStrength",o),i.setAttribute("instanceHoloOpacity",a),i.setAttribute("instanceHoloLodVisible",l),{color:t,base:n,intensity:s,tint:r,tintStrength:o,opacity:a,lodVisible:l}}function Oa(i,e){return{type:"room",id:i,buildingId:e}}function W0(i){return i.map(([e,t])=>`${e},${t}`).join(";")}function X0(i){const e=new au;e.moveTo(i[0][0],i[0][1]);for(let t=1;t<i.length;t++)e.lineTo(i[t][0],i[t][1]);return e.closePath(),e}function qc(i,e){const t=new rl(X0(i),{depth:e,bevelEnabled:!1});return t.rotateX(-Math.PI/2),t}function q0(i,e){let t=0,n=0;for(const[s,r]of i)t+=s,n+=r;return t/=i.length,n/=i.length,i.map(([s,r])=>{const o=s-t,a=r-n,l=Math.hypot(o,a)||1,c=Math.min(e,l*.4);return[s-o/l*c,r-a/l*c]})}class Y0{constructor(e){T(this,"group",new sn);T(this,"spinners",[]);this.group.name="pedestal",Lt(this.group);const t=[{inner:.985,outer:1,arc:Math.PI*2,speed:0,opacity:.3},{inner:1.1,outer:1.115,arc:Math.PI*1.4,speed:.25,opacity:.22},{inner:1.24,outer:1.25,arc:Math.PI*.5,speed:-.4,opacity:.2}];for(const r of t){const o=new ol(e*r.inner,e*r.outer,160,1,0,r.arc),a=new Gr({color:ys,transparent:!0,opacity:r.opacity,side:$t,blending:Tn,depthWrite:!1}),l=new Et(o,a);l.rotation.x=-Math.PI/2,l.position.y=.03,r.speed===0&&Lt(l),this.group.add(l),this.spinners.push({mesh:l,speed:r.speed,baseOpacity:r.opacity})}const n=new K_(e*.95,12,5,128,ys,ys),s=n.material;s.transparent=!0,s.opacity=.06,s.blending=Tn,s.depthWrite=!1,n.position.y=.01,Lt(n),this.group.add(n)}update(e,t){for(const n of this.spinners)n.mesh.rotation.z+=n.speed*e,n.mesh.material.opacity=n.baseOpacity*(.75+.25*Math.sin(t*1.6+n.speed*10))}}function gu(i=64){const e=document.createElement("canvas");e.width=e.height=i;const t=e.getContext("2d"),n=t.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.4,"rgba(255,255,255,0.5)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,i,i);const s=new p_(e);return s.needsUpdate=!0,s}const Yc=-9999;class $0{constructor(e,t){T(this,"group",new sn);T(this,"rooms",[]);T(this,"points");T(this,"positions");T(this,"tmp",new R);T(this,"dirty",!0);T(this,"transformRevision",-1);T(this,"offControlChange");this.sceneIndex=e,this.controls=t,this.group.name="controlLayer",Lt(this.group);for(const o of t.list()){if(!o.kinds.includes("light"))continue;const a=e.room(o.roomId);if(!a)continue;const l=a.localBounds,c=l.getCenter(new R);this.rooms.push({roomId:o.roomId,mesh:a.mesh,localTop:new R(c.x,l.max.y*.85,c.z)})}this.positions=new Float32Array(this.rooms.length*3).fill(Yc);const n=new Tt,s=new bt(this.positions,3);s.setUsage(Lr),n.setAttribute("position",s);const r=new nl({size:2.6,map:gu(),color:new ze("#ffd9a0"),transparent:!0,opacity:.85,blending:Tn,depthWrite:!1,sizeAttenuation:!0});this.points=new nu(n,r),this.points.frustumCulled=!1,Lt(this.points),this.group.add(this.points),this.offControlChange=t.onChange(()=>{this.dirty=!0})}update(){var n;const e=this.transformRevision!==this.sceneIndex.transformRevision;if(!this.dirty&&!e)return;const t=this.points.geometry.attributes.position;for(let s=0;s<this.rooms.length;s++){const r=this.rooms[s];(n=this.controls.get(r.roomId))!=null&&n.state.light?(r.mesh.localToWorld(this.tmp.copy(r.localTop)),this.positions[s*3]=this.tmp.x,this.positions[s*3+1]=this.tmp.y,this.positions[s*3+2]=this.tmp.z):this.positions[s*3+1]=Yc}t.needsUpdate=!0,this.dirty=!1,this.transformRevision=this.sceneIndex.transformRevision}dispose(){this.offControlChange()}}const $c=-9999,K0=new ze("#ffb020"),Z0=new ze("#ff2b3b");class j0{constructor(e,t){T(this,"group",new sn);T(this,"rooms",[]);T(this,"points");T(this,"positions");T(this,"colors");T(this,"tmp",new R);T(this,"transformRevision",-1);T(this,"alarmRevision",-1);T(this,"hasCritical",!1);this.sceneIndex=e,this.alarms=t,this.group.name="alarmLayer",Lt(this.group);for(const a of e.rooms){const l=a.localBounds,c=l.getCenter(new R);this.rooms.push({roomId:a.id,mesh:a.mesh,localTop:new R(c.x,l.max.y*1.15,c.z)})}this.positions=new Float32Array(this.rooms.length*3).fill($c),this.colors=new Float32Array(this.rooms.length*3);const n=new Tt,s=new bt(this.positions,3),r=new bt(this.colors,3);s.setUsage(Lr),r.setUsage(Lr),n.setAttribute("position",s),n.setAttribute("color",r);const o=new nl({size:5,map:gu(),vertexColors:!0,transparent:!0,opacity:.9,blending:Tn,depthWrite:!1,sizeAttenuation:!0});this.points=new nu(n,o),this.points.frustumCulled=!1,Lt(this.points),this.group.add(this.points)}update(e){const t=this.transformRevision!==this.sceneIndex.transformRevision,n=this.alarmRevision!==this.alarms.revision;if(!t&&!n){this.pulse(e);return}const s=this.alarms.alarmingRooms(),r=this.points.geometry.attributes.position,o=this.points.geometry.attributes.color;let a=!1;for(let l=0;l<this.rooms.length;l++){const c=this.rooms[l],h=s.get(c.roomId);if(!h){this.positions[l*3+1]=$c;continue}c.mesh.localToWorld(this.tmp.copy(c.localTop)),this.positions[l*3]=this.tmp.x,this.positions[l*3+1]=this.tmp.y,this.positions[l*3+2]=this.tmp.z;const u=h==="critical"?Z0:K0;this.colors[l*3]=u.r,this.colors[l*3+1]=u.g,this.colors[l*3+2]=u.b,h==="critical"&&(a=!0)}r.needsUpdate=!0,o.needsUpdate=!0,this.transformRevision=this.sceneIndex.transformRevision,this.alarmRevision=this.alarms.revision,this.hasCritical=a,this.pulse(e)}pulse(e){const t=this.hasCritical?7:3.5;this.points.material.opacity=.45+.45*Math.abs(Math.sin(e*t))}}const Q0={easeInOutCubic:i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2};class J0{constructor(){T(this,"active",new Set);T(this,"now",performance.now())}get hasActive(){return this.active.size>0}run(e,t,n=Q0.easeInOutCubic){let s;const r=new Promise(a=>s=a),o={start:this.now,duration:e,easing:n,onUpdate:t,resolve:s};return this.active.add(o),{done:r,cancel:()=>{this.active.delete(o)&&s("cancelled")}}}update(e){this.now=e;for(const t of this.active){const n=Math.min(1,(e-t.start)/t.duration);t.onUpdate(t.easing(n)),n>=1&&(this.active.delete(t),t.resolve("completed"))}}cancelAll(){for(const e of this.active)this.active.delete(e),e.resolve("cancelled")}}const ex={orbit:{azimuthDeg:35,elevationDeg:22},front:{azimuthDeg:0,elevationDeg:10},top:{azimuthDeg:0,elevationDeg:85},isometric:{azimuthDeg:45,elevationDeg:32}},tx=1e4,Kc=1200;class nx{constructor(e,t,n){T(this,"currentFlight",null);T(this,"autoRotateWanted",!1);T(this,"resumeTimer");T(this,"savedPose",null);T(this,"savedMinDistance",0);T(this,"disposed",!1);T(this,"onControlsStart",()=>{this.disposed||(this.interruptFlight(),this.autoRotateWanted&&(this.controls.autoRotate=!1,this.clearResumeTimer(),this.resumeTimer=window.setTimeout(()=>{this.resumeTimer=void 0,!this.disposed&&this.autoRotateWanted&&(this.controls.autoRotate=!0)},tx)))});this.camera=e,this.controls=t,this.tween=n,this.controls.addEventListener("start",this.onControlsStart)}get autoRotate(){return this.autoRotateWanted}setAutoRotate(e,t=.6){this.disposed||(this.autoRotateWanted=e,this.controls.autoRotate=e,this.controls.autoRotateSpeed=t,this.clearResumeTimer())}setView(e,t){const n=ex[e];return this.orbitTo(n.azimuthDeg,n.elevationDeg,t)}async orbitTo(e,t,n={}){if(this.disposed)return"superseded";this.interruptFlight();const s=this.controls.target.clone(),r=new tn().setFromVector3(this.camera.position.clone().sub(s)),o=new tn(n.radius??r.radius,ht.degToRad(90-t),ht.degToRad(e)),a=ht.euclideanModulo(o.theta-r.theta+Math.PI,Math.PI*2)-Math.PI,l=this.autoRotateWanted;this.controls.autoRotate=!1;const c=new tn,h=this.tween.run(n.durationMs??Kc,d=>{c.set(ht.lerp(r.radius,o.radius,d),ht.lerp(r.phi,o.phi,d),r.theta+a*d),c.makeSafe(),this.camera.position.setFromSpherical(c).add(s),this.camera.lookAt(s)});this.currentFlight=h;const u=await h.done;return this.currentFlight===h&&(this.currentFlight=null),u==="completed"&&l&&(this.controls.autoRotate=!0),u==="completed"?"completed":"superseded"}orbitSpherical(){const e=new tn().setFromVector3(this.camera.position.clone().sub(this.controls.target));return{radius:e.radius,azimuthDeg:ht.radToDeg(e.theta),elevationDeg:90-ht.radToDeg(e.phi)}}async flyTo(e,t,n,s,r={}){if(this.disposed)return"superseded";this.interruptFlight();const o=this.controls.target.clone(),a=new tn().setFromVector3(this.camera.position.clone().sub(o)),l=new tn(s,ht.degToRad(90-n),ht.degToRad(t)),c=ht.euclideanModulo(l.theta-a.theta+Math.PI,Math.PI*2)-Math.PI,h=this.autoRotateWanted;this.controls.autoRotate=!1;const u=new R,d=new tn,p=this.tween.run(r.durationMs??Kc,v=>{u.lerpVectors(o,e,v),d.set(ht.lerp(a.radius,l.radius,v),ht.lerp(a.phi,l.phi,v),a.theta+c*v),d.makeSafe(),this.controls.target.copy(u),this.camera.position.setFromSpherical(d).add(u),this.camera.lookAt(u)});this.currentFlight=p;const g=await p.done;return this.currentFlight===p&&(this.currentFlight=null),g==="completed"&&h&&(this.controls.autoRotate=!0),g==="completed"?"completed":"superseded"}zoomToBox(e,t={}){const n=e.getCenter(new R),s=.5*e.getSize(new R).length(),r=ht.degToRad(this.camera.fov),o=s/Math.sin(r/2)*1.3,a=this.orbitSpherical().azimuthDeg;return this.flyTo(n,a,26,Math.max(o,this.controls.minDistance+1),t)}get roomFocused(){return this.savedPose!==null}enterRoom(e,t={}){if(this.disposed)return Promise.resolve("superseded");this.savedPose||(this.savedPose={target:this.controls.target.clone(),position:this.camera.position.clone()},this.savedMinDistance=this.controls.minDistance);const n=e.getCenter(new R),s=e.getSize(new R),r=Math.max(2,Math.max(s.x,s.z)*.5+1.5);this.controls.minDistance=Math.min(this.savedMinDistance,r*.5);const o=this.orbitSpherical().azimuthDeg;return this.flyTo(n,o,4,r,{durationMs:t.durationMs??1900})}exitRoom(e={}){if(this.disposed)return Promise.resolve("superseded");if(!this.savedPose)return Promise.resolve("completed");const t=this.savedPose;this.savedPose=null,this.controls.minDistance=this.savedMinDistance,this.savedMinDistance=0;const n=new tn().setFromVector3(t.position.clone().sub(t.target));return this.flyTo(t.target,ht.radToDeg(n.theta),90-ht.radToDeg(n.phi),n.radius,{durationMs:e.durationMs??1500})}abandonRoomFocus(){this.savedPose&&(this.savedPose=null,this.controls.minDistance=this.savedMinDistance,this.savedMinDistance=0)}dispose(){this.disposed||(this.disposed=!0,this.controls.removeEventListener("start",this.onControlsStart),this.clearResumeTimer(),this.interruptFlight(),this.controls.autoRotate=!1,this.controls.enabled=!1,this.abandonRoomFocus(),this.autoRotateWanted=!1)}clearResumeTimer(){window.clearTimeout(this.resumeTimer),this.resumeTimer=void 0}interruptFlight(){var e;(e=this.currentFlight)==null||e.cancel(),this.currentFlight=null}}class ix{constructor(e){T(this,"modes",new Map);T(this,"active",null);T(this,"activeId",null);T(this,"updateDisposers",[]);T(this,"queue",Promise.resolve());T(this,"disposed",!1);T(this,"rooms");T(this,"floors");this.deps=e,this.rooms=e.sceneIndex.rooms.map(t=>this.buildModeRoom(t)),this.floors=e.sceneIndex.floors.map(t=>this.buildModeFloor(t)),e.timeline.setSink(t=>{var n,s;return(s=(n=this.active)==null?void 0:n.onData)==null?void 0:s.call(n,t)})}register(e){this.modes.set(e.descriptor.id,{descriptor:Lo(e.descriptor),instance:e})}registerLazy(e,t){this.modes.set(e.id,{descriptor:Lo(e),loader:t})}list(){return[...this.modes.values()].map(e=>Lo(e.descriptor))}getActiveId(){return this.activeId}getActiveMode(){return this.active??void 0}setMode(e){if(this.disposed)return Promise.reject(new Error("ModeManager has been disposed."));if(!this.modes.has(e))return Promise.reject(new Error(`Unknown mode '${e}'`));const t=this.queue.then(()=>this.switchTo(e));return this.queue=t.catch(()=>{}),t}async dispose(){if(this.disposed)return;this.disposed=!0,this.deps.timeline.setSink(()=>{}),await this.queue.catch(()=>{});const e=this.active;this.active=null,this.activeId=null;for(const t of this.updateDisposers)t();this.updateDisposers=[],this.deps.overlay.clear(),this.deps.emitLegend(null),this.setSun(null),this.deps.setFog(null),await(e==null?void 0:e.exit())}async switchTo(e){if(this.disposed||this.activeId===e)return;const t=this.modes.get(e);if(!t)throw new Error(`Unknown mode '${e}'`);const n=await this.resolveMode(t);if(this.disposed||this.activeId===e)return;this.active&&await this.active.exit();for(const r of this.updateDisposers)r();this.updateDisposers=[],this.deps.overlay.clear(),this.deps.emitLegend(null),this.setSun(null),this.deps.setFog(null),this.active=n,this.activeId=e;const s={building:this.deps.building,overlay:this.deps.overlay,cameraDirector:this.deps.cameraDirector,rooms:this.rooms,floors:this.floors,registerUpdate:r=>{this.disposed||this.updateDisposers.push(this.deps.registerSceneUpdate(r))},getTransformRevision:()=>this.deps.sceneIndex.transformRevision,setLegend:r=>this.deps.emitLegend(r),setFog:r=>this.deps.setFog(r),setSun:(r,o=1)=>this.setSun(r,o)};if(await n.enter(s),this.disposed){await n.exit(),this.active===n&&(this.active=null,this.activeId=null);return}this.deps.timeline.refresh()}resolveMode(e){return e.instance?Promise.resolve(e.instance):e.loading?e.loading:e.loader?(e.loading=e.loader().then(t=>{if(t.descriptor.id!==e.descriptor.id)throw new Error(`Mode loader for '${e.descriptor.id}' returned '${t.descriptor.id}'.`);return e.instance=t,t}).catch(t=>{throw e.loading=void 0,t}),e.loading):Promise.reject(new Error(`Mode '${e.descriptor.id}' has no loader.`))}setSun(e,t=0){for(const n of this.deps.sceneIndex.holoMaterials())n.uniforms.uSunStrength.value=e?t:0,e&&n.uniforms.uSunDir.value.copy(e).normalize()}buildModeRoom(e){const t=this.deps.buildingIndex.info({type:"room",id:e.id}),n=e.localBounds.getCenter(new R);return{id:e.id,ref:{type:"room",id:e.id},floorId:e.floorId,zoneFunction:t.zoneFunction??"guest",name:t.name,sensors:t.sensors,worldCenter:(s=new R)=>e.mesh.localToWorld(s.copy(n)),setTint:(s,r=s?.8:0)=>{e.visual.setTint(s,r)}}}buildModeFloor(e){const t=new Ot().setFromObject(e.group);return{id:e.id,index:e.index,baseElevation:e.baseElevation,group:e.group,center:t.getCenter(new R),size:t.getSize(new R)}}}function Lo(i){return{...i,channels:[...i.channels]}}class sx{constructor(e,t){T(this,"floors");T(this,"floorById",new Map);T(this,"roomById",new Map);T(this,"transformRevision_",0);T(this,"roomLod","rooms");T(this,"roomLodExceptions",new Set);this.buildingRoot=t,this.floors=[...e.entries()].map(([n,s])=>this.buildFloor(n,s)).sort((n,s)=>n.baseElevation-s.baseElevation).map((n,s)=>({...n,index:s}));for(const n of this.floors)this.floorById.set(n.id,n),this.indexRooms(n)}get rooms(){return[...this.roomById.values()]}get transformRevision(){return this.transformRevision_}markTransformsChanged(){this.transformRevision_+=1}setLowDetail(e){var t;for(const n of this.roomById.values())(t=n.edgeVisual)==null||t.setVisible(!e);for(const n of this.holoMaterials()){const s=e?bn:$t;n.side!==s&&(n.side=s,n.needsUpdate=!0)}}setRoomLod(e){e!==this.roomLod&&(this.roomLod=e,this.applyRoomLod())}getRoomLod(){return this.roomLod}setRoomLodExceptions(e){const t=new Set(e);ax(t,this.roomLodExceptions)||(this.roomLodExceptions=t,this.applyRoomLod())}getRoomLodStats(){let e=0,t=0;for(const n of this.roomById.values())n.lodEligible&&(e+=1,n.visual.getLodVisible()||(t+=1));return{mode:this.roomLod,eligibleRooms:e,hiddenRooms:t}}getTransformStats(){let e=0,t=0;return this.buildingRoot.traverse(n=>{e+=1,n.matrixAutoUpdate||(t+=1)}),{total:e,frozen:t,dynamic:e-t}}holoMaterials(){const e=[];for(const t of this.floors)for(const n of t.ghosts)n.holo&&e.push(n.holo);return e}floor(e){return this.floorById.get(e)}room(e){return this.roomById.get(e)}boxOf(e){if(e==="building")return new Ot().setFromObject(this.buildingRoot);if(e.type==="floor"){const t=this.floorById.get(e.id);if(t)return new Ot().setFromObject(t.group)}if(e.type==="room"){const t=this.roomById.get(e.id);if(t)return t.mesh.updateWorldMatrix(!0,!1),t.localBounds.clone().applyMatrix4(t.mesh.matrixWorld)}return new Ot().setFromObject(this.buildingRoot)}buildFloor(e,t){const n=t.userData.baseElevation??t.position.y,s=[];return t.traverse(r=>{r instanceof Et&&r.material instanceof gt?s.push({holo:r.material,baseOpacity:1}):r instanceof gs&&r.material instanceof tl?s.push({line:r.material,baseOpacity:r.material.opacity}):r instanceof gs&&r.material instanceof gt&&s.push({opacityShader:r.material,baseOpacity:1})}),{id:e,group:t,index:0,baseElevation:n,ghosts:s}}indexRooms(e){const t=new Map,n=new Map;e.group.traverse(s=>{const r=s.userData.entityRef;if((r==null?void 0:r.type)!=="room")return;const o=s.userData.roomVisual,a=s.userData.roomLocalBounds;if(o&&a)t.set(r.id,{id:r.id,floorId:e.id,mesh:s,localBounds:a,visual:o,lodEligible:!!s.userData.roomLodEligible,edges:s.userData.roomEdges,edgeVisual:s.userData.roomEdgeVisual});else if(s instanceof Et){const l=s.geometry;l.boundingBox||l.computeBoundingBox(),t.set(r.id,{id:r.id,floorId:e.id,mesh:s,localBounds:l.boundingBox.clone(),visual:ox(s),lodEligible:!!s.userData.roomLodEligible,edges:s.userData.roomEdges,edgeVisual:s.userData.roomEdgeVisual})}else s instanceof gs&&n.set(r.id,s)});for(const[s,r]of t){const o=n.get(s);o&&(r.edges=o,r.edgeVisual=rx(o)),this.roomById.set(s,r)}}applyRoomLod(){for(const e of this.roomById.values()){const t=this.roomLod==="rooms"||!e.lodEligible||this.roomLodExceptions.has(e.id);e.visual.setLodVisible(t)}}}function rx(i){const e=i.material;return{getOpacity:()=>e.opacity,setOpacity:t=>{e.opacity=t},setScaleY:t=>{i.scale.y=t,i.matrixAutoUpdate||i.updateMatrix()},setVisible:t=>{i.visible=t}}}function ox(i){const e=i.material;return{getColor:()=>e.uniforms.uColor.value.clone(),setColor:t=>e.uniforms.uColor.value.copy(t),getIntensity:()=>e.uniforms.uIntensity.value,setIntensity:t=>{e.uniforms.uIntensity.value=t},getBase:()=>e.uniforms.uBase.value,setBase:t=>{e.uniforms.uBase.value=t},getOpacity:()=>e.uniforms.uOpacity.value,setOpacity:t=>{e.uniforms.uOpacity.value=t},setTint:(t,n=t?.8:0)=>{e.uniforms.uTintStrength.value=t?n:0,t&&e.uniforms.uTint.value.copy(t)},setScaleY:t=>{i.scale.y=t,i.matrixAutoUpdate||i.updateMatrix()},getLodVisible:()=>e.uniforms.uLodVisible.value>.5,setLodVisible:t=>{e.uniforms.uLodVisible.value=t?1:0}}}function ax(i,e){if(i.size!==e.size)return!1;for(const t of i)if(!e.has(t))return!1;return!0}const cs={outcome:"noop"},Zc=5,jc=.07,lx={"2d":.02,"2.5d":.3},fr=1e3;class cx{constructor(e,t,n,s){T(this,"state",{kind:"ASSEMBLED"});T(this,"inFlight",null);T(this,"viewChanged",null);T(this,"disposed",!1);T(this,"renderQuality","high");T(this,"floors");T(this,"rooms");T(this,"floorPosY");T(this,"floorOpacity");T(this,"roomScaleY");T(this,"H");T(this,"footprintDiag");T(this,"R0");this.sceneIndex=e,this.cameraDirector=t,this.tween=n,this.floors=e.floors,this.rooms=e.rooms,this.floorPosY=this.floors.map(o=>o.baseElevation),this.floorOpacity=this.floors.map(()=>1),this.roomScaleY=this.rooms.map(()=>1);const r=new Ot().setFromObject(s).getSize(new R);this.H=r.y,this.footprintDiag=Math.hypot(r.x,r.z),this.R0=this.footprintDiag*1.5}setViewChangedListener(e){this.viewChanged=e}getView(){return{...this.state}}setRenderQuality(e){this.renderQuality=e;for(let t=0;t<this.floors.length;t++)this.applyVisibility(this.floors[t],this.floorOpacity[t])}explode(e,t=fr){return this.state.kind==="ISOLATED"||this.state.kind==="FLATTENED"||this.state.kind==="EXPLODED"&&this.state.factor===e?Promise.resolve(cs):this.run({kind:"EXPLODED",factor:e},t)}isolate(e,t=fr){return this.state.kind==="ISOLATED"&&this.state.floorId===e?Promise.resolve(cs):this.run({kind:"ISOLATED",floorId:e},t)}flatten(e,t,n=fr){return this.state.kind==="FLATTENED"&&this.state.floorId===e&&this.state.style===t?Promise.resolve(cs):this.run({kind:"FLATTENED",floorId:e,style:t},n)}reassemble(e=fr){return this.state.kind==="ASSEMBLED"?Promise.resolve(cs):this.run({kind:"ASSEMBLED"},e)}dispose(){var e;this.disposed||(this.disposed=!0,(e=this.inFlight)==null||e.supersede(),this.inFlight=null,this.viewChanged=null)}run(e,t){var u,d;if(this.disposed)return Promise.resolve({outcome:"superseded"});(u=this.inFlight)==null||u.supersede();const n={posY:[...this.floorPosY],opacity:[...this.floorOpacity],scale:[...this.roomScaleY]},s=this.computeTargets(e);this.state=e,(d=this.viewChanged)==null||d.call(this,this.getView());let r=!1,o;const a=new Promise(p=>o=p),l=this.tween.run(t,p=>this.applyLerp(n,s,p)),c={supersede:()=>{}},h=p=>{r||(r=!0,this.inFlight===c&&(this.inFlight=null),o({outcome:p}))};return c.supersede=()=>{l.cancel(),h("superseded")},this.inFlight=c,l.done.then(p=>{p==="completed"&&h("completed")}),this.cameraDirector.flyTo(new R(0,s.camera.targetY,0),this.cameraDirector.orbitSpherical().azimuthDeg,s.camera.elevationDeg,s.camera.radius,{durationMs:t}),a}computeTargets(e){const t=this.floors.map(r=>r.baseElevation),n=this.floors.map(()=>1),s=this.rooms.map(()=>1);switch(e.kind){case"ASSEMBLED":break;case"EXPLODED":for(let r=0;r<this.floors.length;r++)t[r]=this.floors[r].baseElevation+r*Zc*e.factor;break;case"ISOLATED":this.ghostOthers(e.floorId,n);break;case"FLATTENED":this.ghostOthers(e.floorId,n);for(let r=0;r<this.rooms.length;r++)this.rooms[r].floorId===e.floorId&&(s[r]=lx[e.style]);break}return{posY:t,opacity:n,scale:s,camera:this.framingFor(e)}}ghostOthers(e,t){for(let n=0;n<this.floors.length;n++)this.floors[n].id!==e&&(t[n]=jc)}framingFor(e){const t=this.floors.length;switch(e.kind){case"ASSEMBLED":return{targetY:this.H*.45,elevationDeg:22,radius:this.R0};case"EXPLODED":return{targetY:(this.floors[t-1].baseElevation+(t-1)*Zc*e.factor)*.5+this.H*.1,elevationDeg:18,radius:this.R0*(1+.5*e.factor)};case"ISOLATED":{const n=this.sceneIndex.floor(e.floorId);return{targetY:n?n.baseElevation+2:this.H*.45,elevationDeg:30,radius:this.footprintDiag*1.35}}case"FLATTENED":{const n=this.sceneIndex.floor(e.floorId);return{targetY:n?n.baseElevation:0,elevationDeg:88,radius:this.footprintDiag*1.25}}}}applyLerp(e,t,n){var s;for(let r=0;r<this.floors.length;r++){const o=ht.lerp(e.posY[r],t.posY[r],n);this.floorPosY[r]=o,this.floors[r].group.position.y=o;const a=ht.lerp(e.opacity[r],t.opacity[r],n);this.floorOpacity[r]=a,this.applyOpacity(this.floors[r],a)}for(let r=0;r<this.rooms.length;r++){const o=ht.lerp(e.scale[r],t.scale[r],n);this.roomScaleY[r]=o,this.rooms[r].visual.setScaleY(o),(s=this.rooms[r].edgeVisual)==null||s.setScaleY(o)}this.sceneIndex.markTransformsChanged()}applyOpacity(e,t){this.applyVisibility(e,t);for(const n of e.ghosts)n.holo?n.holo.uniforms.uOpacity.value=t:n.line?n.line.opacity=n.baseOpacity*t:n.opacityShader&&(n.opacityShader.uniforms.uOpacity.value=t)}applyVisibility(e,t){e.group.visible=!(this.renderQuality==="low"&&t<=jc)}}const hx=new ze("#ff9a3c"),ux=1.6,dx=.06,fx=.9;class px{constructor(e){T(this,"selected",null);T(this,"restore",null);this.sceneIndex=e}get current(){return this.selected?{...this.selected}:null}select(e){var l,c;this.clearHighlight();const t=this.sceneIndex.room(e.id);if(!t)return!1;const n=t.visual,s=n.getColor(),r=n.getIntensity(),o=n.getBase(),a=(l=t.edgeVisual)==null?void 0:l.getOpacity();return n.setColor(hx),n.setIntensity(ux),n.setBase(dx),(c=t.edgeVisual)==null||c.setOpacity(fx),this.restore=()=>{var h;n.setColor(s),n.setIntensity(r),n.setBase(o),a!==void 0&&((h=t.edgeVisual)==null||h.setOpacity(a))},this.selected={...e},!0}clear(){const e=this.selected!==null;return this.clearHighlight(),this.selected=null,e}clearHighlight(){var e;(e=this.restore)==null||e.call(this),this.restore=null}}const mx=25;class gx{constructor(e,t,n,s){T(this,"raycaster",new $_);T(this,"downX",0);T(this,"downY",0);T(this,"onPick");T(this,"disposed",!1);T(this,"onDown",e=>{this.disposed||(this.downX=e.clientX,this.downY=e.clientY)});T(this,"onUp",e=>{var s;if(this.disposed)return;const t=e.clientX-this.downX,n=e.clientY-this.downY;t*t+n*n>mx||(s=this.onPick)==null||s.call(this,this.pickAtNdc(this.ndcFor(e.clientX,e.clientY)))});this.camera=e,this.dom=t,this.root=n,this.onPick=s,this.dom.addEventListener("pointerdown",this.onDown),this.dom.addEventListener("pointerup",this.onUp)}dispose(){this.disposed||(this.disposed=!0,this.dom.removeEventListener("pointerdown",this.onDown),this.dom.removeEventListener("pointerup",this.onUp),this.onPick=null)}pickAtNdc(e){if(this.disposed)return null;this.raycaster.setFromCamera(e,this.camera);for(const t of this.raycaster.intersectObject(this.root,!0)){const n=vx(t.object,t.instanceId);if(n)return n}return null}ndcFor(e,t){const n=this.dom.getBoundingClientRect();return new ne((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1)}}function vx(i,e){if(e!==void 0){const n=i.userData.instanceRoomRefs,s=n==null?void 0:n[e];if((s==null?void 0:s.type)==="room")return{...s}}let t=i;for(;t;){const n=t.userData.entityRef;if(n&&n.type==="room")return n;t=t.parent}return null}function zn(i,e){const t=e.map(s=>({...s})),n=new Map(t.map(s=>[s.deviceId,s]));return{time:i,readings:t,value:s=>{var r;return(r=n.get(s))==null?void 0:r.value},reading:s=>{const r=n.get(s);return r?{...r}:void 0}}}class _x{constructor(e){T(this,"frames");T(this,"head",0);T(this,"count",0);const t=Number.isFinite(e)?Math.max(0,Math.floor(e)):0;this.frames=new Array(t)}push(e){if(this.frames.length===0)return;const t=(this.head+this.count)%this.frames.length;this.frames[t]=e,this.count<this.frames.length?this.count+=1:this.head=(this.head+1)%this.frames.length}get size(){return this.count}span(){return this.count===0?null:{from:this.frameAt(0).time,to:this.frameAt(this.count-1).time}}nearest(e){if(this.count===0)return null;let t=0,n=this.count-1;for(;t<n;){const o=t+n>>1;this.frameAt(o).time<e?t=o+1:n=o}const s=this.frameAt(t),r=t>0?this.frameAt(t-1):void 0;return r&&Math.abs(r.time-e)<=Math.abs(s.time-e)?r:s}frameAt(e){return this.frames[(this.head+e)%this.frames.length]}}const xx=3e4;class yx{constructor(e=[],t={}){T(this,"definitions",new Map);T(this,"latest",new Map);T(this,"rejectedUpdates",0);T(this,"lastFrameAt",null);T(this,"now");T(this,"defaultStaleAfterMs");this.now=t.now??Date.now,this.defaultStaleAfterMs=Qc(t.staleAfterMs,xx);for(const n of e)this.definitions.set(n.deviceId,{channel:n.channel,unit:n.unit,staleAfterMs:Qc(n.staleAfterMs,this.defaultStaleAfterMs)})}ingest(e,t=this.now()){for(const n of e.readings)this.accept(n,e.time,t);return this.lastFrameAt=this.lastFrameAt===null?e.time:Math.max(this.lastFrameAt,e.time),this.snapshot(e.time,t)}snapshot(e=this.lastFrameAt??this.now(),t=this.now()){const n=[...this.latest.values()].map(s=>{const r=this.definitions.get(s.deviceId),o=(r==null?void 0:r.staleAfterMs)??this.defaultStaleAfterMs,a=s.receivedAt??t,l=t-a>o?"stale":s.quality??"good";return{...s,quality:l}});return zn(e,n)}hasReadings(){return this.latest.size>0}diagnostics(e=this.now()){let t=0,n=0;for(const o of this.latest.values()){const a=this.definitions.get(o.deviceId),l=(a==null?void 0:a.staleAfterMs)??this.defaultStaleAfterMs,c=o.receivedAt??e,h=e-c>l?"stale":o.quality??"good";h==="stale"?t+=1:(h==="bad"||h==="uncertain"||h==="unknown")&&(n+=1)}const s=this.definitions.size;let r=this.latest.size;if(s>0){r=0;for(const o of this.definitions.keys())this.latest.has(o)&&(r+=1)}return{expectedPoints:s,presentPoints:r,missingPoints:Math.max(0,s-r),stalePoints:t,badPoints:n,rejectedUpdates:this.rejectedUpdates,lastFrameAt:this.lastFrameAt}}accept(e,t,n){if(!Number.isFinite(e.value)){this.rejectedUpdates+=1;return}const s=this.definitions.get(e.deviceId);if(s&&s.channel!==e.channel){this.rejectedUpdates+=1;return}const r=Jc(e.observedAt,t),o=Jc(e.receivedAt,n),a=this.latest.get(e.deviceId);if(a&&Sx(e,r,a)){this.rejectedUpdates+=1;return}const l=Mx(e.quality);this.latest.set(e.deviceId,{...e,unit:(s==null?void 0:s.unit)===e.unit||!s?e.unit:s.unit,observedAt:r,receivedAt:o,quality:s&&s.unit!==e.unit?"bad":l})}}function Sx(i,e,t){return(i.sourceId??"")===(t.sourceId??"")&&i.sequence!==void 0&&t.sequence!==void 0&&i.sequence<=t.sequence?!0:e<(t.observedAt??Number.NEGATIVE_INFINITY)}function Mx(i){return i??"good"}function Qc(i,e){return i!==void 0&&Number.isFinite(i)&&i>0?i:e}function Jc(i,e){return i!==void 0&&Number.isFinite(i)?i:e}const Ex=6e4,bx=1440,Tx=6e4,pr=["temperature","humidity","lux","power","occupancy"],mr=250,wx=1e-6,Ax=250;class Rx{constructor(e,t=Date.now()){T(this,"mode","live");T(this,"playbackSpeed",1);T(this,"buffer",new _x(bx));T(this,"simTime");T(this,"lastLiveFrameTime",null);T(this,"lastRealMs",performance.now());T(this,"lastSampleRealMs",Number.NEGATIVE_INFINITY);T(this,"lastBufferedSim",null);T(this,"scrubTime",0);T(this,"sink",null);T(this,"frameListeners",new Set);T(this,"liveFrameListeners",new Set);T(this,"onChange",null);T(this,"snapshotPort");T(this,"historyPort");T(this,"pushProvider",null);T(this,"asyncProvider",null);T(this,"offPushFrame",null);T(this,"sourceStatusPort",null);T(this,"offSourceStatus",null);T(this,"sourceStatusListeners",new Set);T(this,"lastPublishedSourceStatus","");T(this,"lastSourceStatusCheckAt",Number.NEGATIVE_INFINITY);T(this,"telemetryStore",null);T(this,"now");T(this,"performanceSamples",[]);T(this,"pullInFlight",!1);T(this,"liveGeneration",0);T(this,"requestSerial",0);T(this,"disposed",!1);var r;const n=Px(e),s=typeof t=="number"?{startTime:t}:t;this.snapshotPort=n.snapshot,this.historyPort=n.history,this.now=s.now??Date.now,this.simTime=s.startTime??this.now(),this.sourceStatusPort=n.status??null,this.offSourceStatus=((r=n.status)==null?void 0:r.onStatus(()=>this.publishSourceStatus(!0)))??null,n.stream?(this.pushProvider=n.stream,this.telemetryStore=new yx(s.points,{staleAfterMs:s.staleAfterMs,now:this.now}),this.offPushFrame=n.stream.onFrame(o=>this.receiveLiveFrame(o)),n.stream.connect()):n.asyncSnapshot&&(this.asyncProvider=n.asyncSnapshot)}setSink(e){this.sink=e}addFrameListener(e){return this.frameListeners.add(e),()=>this.frameListeners.delete(e)}addLiveFrameListener(e){return this.liveFrameListeners.add(e),()=>this.liveFrameListeners.delete(e)}deliver(e){var t;(t=this.sink)==null||t.call(this,e);for(const n of this.frameListeners)n(e)}setChangeListener(e){this.onChange=e}getState(){return{mode:this.mode,time:this.currentTime(),playbackSpeed:this.playbackSpeed}}getSourceStatus(){var r,o,a;const e=((r=this.sourceStatusPort)==null?void 0:r.status())??{sourceId:this.pushProvider?"live-telemetry":"simulation",kind:this.pushProvider?"custom":"simulation",state:this.pushProvider?(o=this.telemetryStore)!=null&&o.hasReadings()?"live":"connecting":"live",label:this.pushProvider?"Live telemetry":"Simulated data",lastMessageAt:null,stalePoints:0},t=(a=this.telemetryStore)==null?void 0:a.diagnostics(this.now());if(!t||e.state!=="live")return{...e};const n=t.missingPoints+t.stalePoints+t.badPoints,s=n===0?e.state:t.expectedPoints>0&&n>=t.expectedPoints?"stale":"degraded";return{...e,state:s,stalePoints:n,message:n>0?`${n} telemetry point${n===1?"":"s"} unavailable or stale.`:e.message}}onSourceStatus(e){return this.sourceStatusListeners.add(e),()=>this.sourceStatusListeners.delete(e)}getPerformanceStats(){var c,h;const e=performance.now();this.trimPerformanceSamples(e);const t=this.performanceSamples,n=t.length>1?Math.max(1e3,e-t[0].at):1e3,s=t.filter(u=>u.source!=="push").length,r=t.filter(u=>u.source==="worker").length,o=t.filter(u=>u.source==="push").length,a=t.reduce((u,d)=>u+d.readings,0),l=t.filter(u=>u.source!=="push");return{pullFrames:s,workerFrames:r,pushFrames:o,samplingMode:this.pushProvider?"push":((c=this.asyncProvider)==null?void 0:c.executionMode())??"main",sampleInFlight:this.pullInFlight,samplesPerSecond:t.length*1e3/n,readingsPerSecond:a*1e3/n,averageSampleMs:l.length?l.reduce((u,d)=>u+d.sampleMs,0)/l.length:0,lastFrameReadings:((h=t.at(-1))==null?void 0:h.readings)??0}}currentTime(){return this.mode==="scrub"?this.scrubTime:this.simTime}setPlaybackSpeed(e){this.playbackSpeed=e,this.emit()}setTimeRange(e){this.liveGeneration+=1,e==="live"?(this.mode="live",this.lastRealMs=performance.now(),this.lastSampleRealMs=Number.NEGATIVE_INFINITY):(this.mode="scrub",this.scrubTime=Cx(e.to)),this.emit()}tick(e=performance.now()){if(this.mode==="live"){if(this.pushProvider){this.publishSourceStatus();return}const t=Math.min(Math.max(0,e-this.lastRealMs),Ax);if(this.lastRealMs=e,this.simTime+=t/1e3*Ex*this.playbackSpeed,e-this.lastSampleRealMs<mr-wx||this.asyncProvider&&this.pullInFlight)return;this.advanceSampleDeadline(e);const n=performance.now();if(this.asyncProvider)this.sampleLiveAsync(this.asyncProvider,this.simTime,n);else{const s=this.snapshotPort.sample(pr,this.simTime);this.acceptLivePullFrame(s,"pull",performance.now()-n)}}}emit(){var t;const e=this.frameAt(this.currentTime());this.deliver(e),(t=this.onChange)==null||t.call(this,this.getState(),e)}frameAt(e){var n;const t=this.buffer.span();if(this.mode==="scrub"&&t&&e>=t.from&&e<=t.to){const s=this.buffer.nearest(e);if(s)return s}return this.pushProvider&&((n=this.telemetryStore)!=null&&n.hasReadings())?this.telemetryStore.snapshot(e,this.now()):this.snapshotPort.sample(pr,e)}refresh(){this.emit()}currentFrame(){return this.frameAt(this.currentTime())}history(e,t=48,n){const s=this.currentTime(),r=s-e*36e5,o=Math.max(6e4,(s-r)/t);return this.historyPort.query(pr,{from:r,to:s},o,n)}bufferSpan(){return this.buffer.span()}dispose(){var e,t;this.disposed=!0,this.liveGeneration+=1,(e=this.offPushFrame)==null||e.call(this),this.offPushFrame=null,(t=this.offSourceStatus)==null||t.call(this),this.offSourceStatus=null,this.pushProvider=null,this.asyncProvider=null,this.pullInFlight=!1,this.performanceSamples=[],this.frameListeners.clear(),this.liveFrameListeners.clear(),this.sourceStatusListeners.clear(),this.sink=null,this.onChange=null}receiveLiveFrame(e){var r,o;const t=((r=this.telemetryStore)==null?void 0:r.ingest(e,this.now()))??e;this.recordPerformanceSample(t,"push",0);const n=this.lastLiveFrameTime===null?t.time:Math.max(this.lastLiveFrameTime,t.time);this.lastLiveFrameTime=n,this.simTime=n;const s=t.time===n?t:zn(n,t.readings);if(this.bufferFrame(s),this.publishSourceStatus(!0),this.mode==="live"){this.deliver(s);for(const a of this.liveFrameListeners)a(s);(o=this.onChange)==null||o.call(this,this.getState(),s)}}sampleLiveAsync(e,t,n){const s=this.liveGeneration,r=++this.requestSerial;this.pullInFlight=!0,e.sampleAsync(pr,t).then(o=>{if(this.disposed||s!==this.liveGeneration||this.mode!=="live")return;const a=e.executionMode()==="worker"?"worker":"pull";this.acceptLivePullFrame(o,a,performance.now()-n)}).catch(()=>{this.lastSampleRealMs=Number.NEGATIVE_INFINITY}).finally(()=>{r===this.requestSerial&&(this.pullInFlight=!1)})}acceptLivePullFrame(e,t,n){this.recordPerformanceSample(e,t,n),this.bufferFrame(e),this.deliver(e);for(const s of this.liveFrameListeners)s(e)}advanceSampleDeadline(e){if(!Number.isFinite(this.lastSampleRealMs)){this.lastSampleRealMs=e;return}this.lastSampleRealMs+=mr,e-this.lastSampleRealMs>mr*2&&(this.lastSampleRealMs=e)}bufferFrame(e){this.lastBufferedSim!==null&&e.time-this.lastBufferedSim<Tx||(this.buffer.push(e),this.lastBufferedSim=e.time)}recordPerformanceSample(e,t,n){const s=performance.now();this.performanceSamples.push({at:s,readings:e.readings.length,sampleMs:n,source:t}),this.trimPerformanceSamples(s)}trimPerformanceSamples(e){var n;const t=e-5e3;for(;((n=this.performanceSamples[0])==null?void 0:n.at)<t;)this.performanceSamples.shift()}publishSourceStatus(e=!1){const t=this.now();if(!e&&t-this.lastSourceStatusCheckAt<mr)return;this.lastSourceStatusCheckAt=t;const n=this.getSourceStatus(),s=JSON.stringify(n);if(s!==this.lastPublishedSourceStatus){this.lastPublishedSourceStatus=s;for(const r of this.sourceStatusListeners)r({...n})}}}function Cx(i){return typeof i=="number"?i:i instanceof Date?i.getTime():new Date(i).getTime()}function Px(i){if("snapshot"in i&&"history"in i)return i;const e=typeof i.connect=="function"&&typeof i.dispose=="function"&&typeof i.onFrame=="function"?{connect:()=>i.connect(),dispose:()=>i.dispose(),onFrame:n=>i.onFrame(n)}:void 0,t=typeof i.sampleAsync=="function"?{sampleAsync:(n,s)=>i.sampleAsync(n,s),executionMode:()=>{var n,s;return((n=i.executionMode)==null?void 0:n.call(i))??((s=i.getExecutionMode)==null?void 0:s.call(i))??"main"}}:void 0;return{snapshot:i,history:i,stream:e,asyncSnapshot:t,status:typeof i.status=="function"&&typeof i.onStatus=="function"?{status:()=>i.status(),onStatus:n=>i.onStatus(n)}:void 0}}const Xi=[18,28];function hl(i){switch(i){case"guest":return["light","hvac","blind"];case"lobby":case"amenity":return["light","hvac"];case"corridor":return["light"];case"plant":return[]}}function vu(i){return{light:hl(i).includes("light"),hvacSetpoint:24,blind:0}}class Ix{constructor(e){T(this,"entries",new Map);T(this,"listeners",new Set);T(this,"batchListeners",new Set);T(this,"batchDepth",0);T(this,"pendingChanges",[]);for(const t of e.floors)for(const n of t.zones){const s=hl(n.function);if(s.length!==0)for(const r of n.rooms)this.entries.set(r.id,{roomId:r.id,kinds:s,state:vu(n.function)})}}onChange(e){return this.listeners.add(e),()=>this.listeners.delete(e)}onBatch(e){return this.batchListeners.add(e),()=>this.batchListeners.delete(e)}batch(e){this.batchDepth+=1;try{return e()}finally{if(this.batchDepth-=1,this.batchDepth===0&&this.pendingChanges.length>0){const t=this.pendingChanges.splice(0);this.emitBatch(t)}}}has(e){return this.entries.has(e)}get(e){const t=this.entries.get(e);return t?$n(t):void 0}list(){return[...this.entries.values()].map($n)}supports(e,t){var n;return((n=this.entries.get(e))==null?void 0:n.kinds.includes(t))??!1}set(e,t,n,s="local"){const r=this.entries.get(e),o=No(r,t);if(t==="light"?r.state.light=!!n:t==="hvac"?r.state.hvacSetpoint=eh(Number(n),Xi[0],Xi[1]):r.state.blind=eh(Number(n),0,1),No(r,t)===o)return $n(r);const a=No(r,t),l={roomId:e,kind:t,value:a,origin:s};for(const c of this.listeners)c($n(r),{...l});return this.batchDepth>0?this.pendingChanges.push(l):this.emitBatch([l]),$n(r)}emitBatch(e){if(e.length===0)return;const n=[...new Set(e.map(s=>s.roomId))].map(s=>this.entries.get(s)).filter(s=>s!==void 0).map($n);for(const s of this.batchListeners)s({entries:n.map($n),changes:e.map(r=>({...r}))})}}function $n(i){return{roomId:i.roomId,kinds:[...i.kinds],state:{...i.state}}}function eh(i,e,t){return i<e?e:i>t?t:i}function No(i,e){return e==="light"?i.state.light:e==="hvac"?i.state.hvacSetpoint:i.state.blind}class Dx{constructor(e,t,n=Date.now){T(this,"listeners",new Set);T(this,"sequence",0);T(this,"pending",new Set);T(this,"offState");T(this,"disposed",!1);this.controls=e,this.port=t,this.now=n,this.offState=t.onState(s=>this.reconcile(s))}onProgress(e){return this.listeners.add(e),()=>this.listeners.delete(e)}async execute(e,t){const n=this.requireEntry(e.roomId,e.kind);if(Ei(n,e.kind)===e.value)return{entry:n,changed:!1,result:{commandId:this.nextCommandId(),roomId:e.roomId,kind:e.kind,value:e.value,outcome:"confirmed",confirmedAt:this.now()}};const s=this.command(e);this.emit(s,"pending");const r=await this.port.execute(s,t);let o=this.controls.get(e.roomId),a=!1;return r.outcome==="confirmed"&&(o=this.controls.set(e.roomId,e.kind,r.value,"remote"),a=Ei(n,e.kind)!==Ei(o,e.kind)),this.emit(s,r.outcome,r),{entry:o,changed:a,result:{...r}}}async executeBatch(e,t){const n=[];for(const l of e){const c=this.requireEntry(l.roomId,l.kind);if(Ei(c,l.kind)===l.value){n.push({request:l,before:c,result:{commandId:this.nextCommandId(),roomId:l.roomId,kind:l.kind,value:l.value,outcome:"confirmed",confirmedAt:this.now()}});continue}const h=this.command(l);n.push({request:l,before:c,command:h}),this.emit(h,"pending")}const s=n.filter(l=>l.command!==void 0),r=await Lx(s,8,async l=>this.port.execute(l.command,t));for(let l=0;l<s.length;l+=1)s[l].result=r[l];const o=[];this.controls.batch(()=>{for(const l of n){const c=l.result;let h=this.controls.get(l.request.roomId),u=!1;c.outcome==="confirmed"&&(h=this.controls.set(l.request.roomId,l.request.kind,c.value,"remote"),u=Ei(l.before,l.request.kind)!==Ei(h,l.request.kind)),o.push({entry:h,changed:u,result:{...c}}),l.command&&this.emit(l.command,c.outcome,c)}});const a=[...new Set(o.filter(l=>l.changed).map(l=>l.entry.roomId))];return{results:o,changedRoomIds:a,changed:o.filter(l=>l.changed).length,rejected:o.filter(l=>l.result.outcome!=="confirmed").length}}pendingCount(){return this.pending.size}dispose(){this.disposed||(this.disposed=!0,this.offState(),this.listeners.clear())}reconcile(e){this.disposed||!this.controls.supports(e.roomId,e.kind)||this.controls.set(e.roomId,e.kind,e.value,"remote")}command(e){return{commandId:this.nextCommandId(),roomId:e.roomId,kind:e.kind,value:e.value,requestedAt:this.now(),actor:e.actor,reason:e.reason,force:e.force,expiresAt:e.expiresAt}}requireEntry(e,t){const n=this.controls.get(e);if(!n||!n.kinds.includes(t))throw new Error(`Room '${e}' has no ${t} control.`);return n}nextCommandId(){return`actuation-${this.now()}-${++this.sequence}`}emit(e,t,n){const s={commandId:e.commandId,roomId:e.roomId,kind:e.kind,value:e.value,state:t,code:n==null?void 0:n.code,message:n==null?void 0:n.message};t==="pending"?this.pending.add(e.commandId):this.pending.delete(e.commandId);for(const r of this.listeners)r({...s})}}async function Lx(i,e,t){const n=new Array(i.length);let s=0;const r=async()=>{for(;s<i.length;){const o=s++;n[o]=await t(i[o])}};return await Promise.all(Array.from({length:Math.min(e,i.length)},()=>r())),n}function Ei(i,e){return e==="light"?i.state.light:e==="hvac"?i.state.hvacSetpoint:i.state.blind}const DS=[{id:"guest-light-trim",label:"Guest light trim",hint:"Turn off guest-room lighting; public and corridor lights stay on."},{id:"hvac-eco",label:"HVAC eco +2°",hint:"Raise HVAC targets to 26°C where lower."},{id:"solar-shade",label:"Solar shade",hint:"Close guest-room blinds to reduce daytime cooling load."},{id:"restore-comfort",label:"Restore comfort",hint:"Return controllable rooms to their default light, HVAC, and blind settings."}];class Nx{constructor(e,t){T(this,"rooms",[]);var n;this.controls=t;for(const s of e.floors)for(const r of s.zones)for(const o of r.rooms)this.rooms.push({roomId:o.id,roomName:o.name,floorId:s.id,floorName:s.name,zoneId:r.id,zoneName:r.name,zoneFunction:r.function,powerDeviceId:(n=o.sensors.find(a=>a.channel==="power"))==null?void 0:n.deviceId})}summary(e,t){const n=new Map,s=new Map,r=[];let o=0,a=0,l=0;for(const h of this.scopedRooms(t)){if(!h.powerDeviceId)continue;const u=n.get(h.floorId)??{floorId:h.floorId,name:h.floorName,totalKw:0,meteredRooms:0,availableMeters:0,unavailableMeters:0};u.meteredRooms+=1,n.set(h.floorId,u);const d=s.get(h.zoneId)??{zoneId:h.zoneId,name:h.zoneName,function:h.zoneFunction,totalKw:0,availableMeters:0,unavailableMeters:0};s.set(h.zoneId,d);const p=e.reading(h.powerDeviceId);if(!p||p.quality!==void 0&&p.quality!=="good"){l+=1,u.unavailableMeters+=1,d.unavailableMeters+=1;continue}const g=gr(p.value);o+=g,a+=1,u.availableMeters+=1,u.totalKw+=g,d.availableMeters+=1,d.totalKw+=g,r.push({roomId:h.roomId,roomName:h.roomName,floorId:h.floorId,floorName:h.floorName,zoneName:h.zoneName,kw:g})}const c=this.scopedControls(t);return{time:e.time,totalKw:gr(o),availableMeters:a,unavailableMeters:l,controllableRooms:c.length,activeLights:c.filter(h=>h.kinds.includes("light")&&h.state.light).length,byFloor:[...n.values()].map(h=>({...h,totalKw:gr(h.totalKw)})).sort((h,u)=>h.floorId.localeCompare(u.floorId)),byZone:[...s.values()].map(h=>({...h,totalKw:gr(h.totalKw)})).sort((h,u)=>u.totalKw-h.totalKw),topLoads:r.sort((h,u)=>u.kw-h.kw).slice(0,6)}}plan(e,t){const n=[],s=(r,o,a)=>{!r.kinds.includes(o)||Ux(r,o,a)||n.push({roomId:r.roomId,kind:o,value:a,actor:"operator",reason:`Power action: ${e}`})};for(const r of this.scopedControls(t)){const o=this.roomById(r.roomId);if(o)switch(e){case"guest-light-trim":o.zoneFunction==="guest"&&s(r,"light",!1);break;case"hvac-eco":o.zoneFunction!=="corridor"&&o.zoneFunction!=="plant"&&s(r,"hvac",Math.max(r.state.hvacSetpoint,26));break;case"solar-shade":o.zoneFunction==="guest"&&s(r,"blind",1);break;case"restore-comfort":{const a=vu(o.zoneFunction);s(r,"light",a.light),s(r,"hvac",a.hvacSetpoint),s(r,"blind",a.blind);break}}}return{action:e,floorId:t,changes:n}}scopedRooms(e){return e?this.rooms.filter(t=>t.floorId===e):this.rooms}scopedControls(e){return this.controls.list().filter(t=>{var n;return!e||((n=this.roomById(t.roomId))==null?void 0:n.floorId)===e})}roomById(e){return this.rooms.find(t=>t.roomId===e)}}function Ux(i,e,t){return e==="light"?i.state.light===!!t:e==="hvac"?i.state.hvacSetpoint===Number(t):i.state.blind===Number(t)}function gr(i){return Math.round(i*100)/100}const _u=[{id:"temp-high",channel:"temperature",op:">",threshold:29,severity:"warning",label:"High temperature"},{id:"power-spike",channel:"power",op:">",threshold:5,severity:"critical",label:"Power spike"},{id:"crowding",channel:"occupancy",op:">",threshold:3,severity:"warning",label:"High occupancy"}],th=.08;class Fx{constructor(e,t=_u){T(this,"rules",new Map);T(this,"active",new Map);T(this,"devices",[]);for(const n of e.floors)for(const s of n.zones)for(const r of s.rooms)for(const o of r.sensors)this.devices.push({deviceId:o.deviceId,channel:o.channel,unit:o.unit,roomId:r.id,roomName:r.name,zoneFn:s.function});for(const n of t)this.rules.set(n.id,{...n})}setRule(e){this.rules.set(e.id,{...e})}clearRule(e){const t=this.rules.delete(e),n=[];for(const s of[...this.active.values()])s.ruleId===e&&(this.active.delete(s.key),n.push({...s}));return{removed:t,cleared:n}}replaceRules(e){const t=new Map(e.map(s=>[s.id,{...s}])),n=[];for(const s of[...this.active.values()])t.has(s.ruleId)||(this.active.delete(s.key),n.push({...s}));return this.rules=t,n}listRules(){return[...this.rules.values()].map(e=>({...e}))}activeAlarms(){return[...this.active.values()].map(e=>({...e}))}alarmingRooms(){const e=new Map;for(const t of this.active.values())(t.severity==="critical"||!e.has(t.roomId))&&e.set(t.roomId,t.severity);return e}evaluate(e){const t=[],n=[],s=new Set;for(const r of this.rules.values())for(const o of this.devices){if(o.channel!==r.channel||r.zoneFunction&&o.zoneFn!==r.zoneFunction)continue;const a=`${r.id}|${o.roomId}`,l=this.active.get(a),c=e.reading(o.deviceId),h=c==null?void 0:c.value;if(h==null||(c==null?void 0:c.quality)==="bad"||(c==null?void 0:c.quality)==="uncertain"||(c==null?void 0:c.quality)==="stale"||(c==null?void 0:c.quality)==="unknown"){l&&s.add(a);continue}const u=l?r.threshold*(r.op===">"?1-th:1+th):r.threshold;if(!(r.op===">"?h>u:h<u))continue;if(s.add(a),l){l.value=h;continue}const p={key:a,ruleId:r.id,roomId:o.roomId,roomName:o.roomName,channel:o.channel,value:h,threshold:r.threshold,severity:r.severity,label:r.label,unit:o.unit,since:e.time};this.active.set(a,p),t.push({...p})}for(const[r,o]of[...this.active])s.has(r)||(this.active.delete(r),n.push({...o}));return{raised:t,cleared:n}}reconcile(e){const t=new Map(e.map(r=>[r.key,{...r}])),n=[],s=[];for(const r of t.values())this.active.has(r.key)||n.push({...r});for(const r of this.active.values())t.has(r.key)||s.push({...r});return this.active=t,{raised:n,cleared:s}}}class Ox{constructor(e){T(this,"evaluator");T(this,"onRaiseCb",null);T(this,"onClearCb",null);T(this,"onBatchCb",null);T(this,"ruleListeners",new Set);T(this,"revision_",0);this.evaluator=new Fx(e)}onAlarm(e,t,n){this.onRaiseCb=e,this.onClearCb=t,this.onBatchCb=n??null}onRulesChanged(e){return this.ruleListeners.add(e),()=>this.ruleListeners.delete(e)}setRule(e){this.evaluator.setRule(e),this.emitRules()}clearRule(e){const t=this.evaluator.clearRule(e);return this.applyTransitions({raised:[],cleared:t.cleared}),t.removed&&this.emitRules(),t.removed}listRules(){return this.evaluator.listRules()}activeAlarms(){return this.evaluator.activeAlarms()}get revision(){return this.revision_}alarmingRooms(){return this.evaluator.alarmingRooms()}evaluate(e){this.applyTransitions(this.evaluator.evaluate(e))}reconcileSnapshot(e){this.applyTransitions(this.evaluator.reconcile(e))}applyTransitions(e){var t,n,s;for(const r of e.raised)this.revision_+=1,(t=this.onRaiseCb)==null||t.call(this,{...r});for(const r of e.cleared)this.revision_+=1,(n=this.onClearCb)==null||n.call(this,{...r});(e.raised.length>0||e.cleared.length>0)&&((s=this.onBatchCb)==null||s.call(this,{raised:e.raised.map(r=>({...r})),cleared:e.cleared.map(r=>({...r}))}))}emitRules(){const e=this.listRules();for(const t of this.ruleListeners)t(e)}}const Bx=1440*60*1e3,Uo=30*Bx,nh={none:0,supervisor:1,emergency:2};class Ri extends Error{constructor(e,t,n){super(t),this.code=e,this.hint=n,this.name="IncidentServiceError"}}class kx{constructor(e,t=Date.now){T(this,"incidents",new Map);T(this,"unresolvedByAlarm",new Map);T(this,"coverage",new Map);T(this,"listeners",new Set);T(this,"incidentSequence",0);T(this,"activitySequence",0);T(this,"noteSequence",0);T(this,"evidenceSequence",0);T(this,"roomLocations",new Map);this.now=t,this.initializeRoomLocations(e);for(const n of e.floors)for(const s of n.zones){if(s.function==="guest")continue;const r=`CAM-${n.id}-${s.id}`;this.coverage.set(r,{cameraId:r,floorId:n.id,floorName:n.name,zoneId:s.id,zoneName:s.name,zoneFunction:s.function,provider:"synthetic-showcase",status:"online",privacy:"shared-area-only"})}}onChanged(e){return this.listeners.add(e),()=>this.listeners.delete(e)}ingestAlarmBatch(e,t){const n=new Set;for(const r of e){const o=this.unresolvedByAlarm.get(r.key),a=o?this.incidents.get(o):void 0;if(a&&a.status!=="resolved"){if(a.source.state==="cleared"){const c=this.now();a.source.state="active",a.source.value=r.value,a.source.lastChangedAt=c,a.updatedAt=c,a.timeline.push(this.activity("source-raised",c,"BMS","Alarm source raised again.")),n.add(a.id)}continue}const l=this.createFromAlarm(r);this.incidents.set(l.id,l),this.unresolvedByAlarm.set(r.key,l.id),n.add(l.id)}for(const r of t){const o=this.unresolvedByAlarm.get(r.key),a=o?this.incidents.get(o):void 0;if(!a||a.status==="resolved"||a.source.state==="cleared")continue;const l=this.now();a.source.state="cleared",a.source.value=r.value,a.source.lastChangedAt=l,a.updatedAt=l,a.timeline.push(this.activity("source-cleared",l,"BMS","Alarm source returned within its rule threshold.")),n.add(a.id)}if(n.size===0)return null;const s={reason:"alarm-sync",changedIds:[...n]};return this.emit(s),s}list(e={}){return this.purgeExpired(),[...this.incidents.values()].filter(t=>zx(t,e)).sort(Vx).map(Ir)}get(e){this.purgeExpired();const t=this.incidents.get(e);return t?Ir(t):null}summary(e={}){const t=this.list({status:"unresolved",...e});return{unresolved:t.length,unacknowledged:t.filter(n=>n.status==="open").length,critical:t.filter(n=>n.severity==="critical").length,assigned:t.filter(n=>n.assignee!==null).length}}listCameraCoverage(e){return[...this.coverage.values()].filter(t=>e===void 0||t.floorId===e).sort((t,n)=>t.floorId.localeCompare(n.floorId)||t.zoneName.localeCompare(n.zoneName)).map(t=>({...t}))}acknowledge(e,t){const n=this.requireIncident(e);if(n.status!=="open")return vr(n);const s=this.now();return n.status="acknowledged",n.acknowledgedAt=s,n.acknowledgedBy=t,n.updatedAt=s,n.timeline.push(this.activity("acknowledged",s,t,"Incident acknowledged.")),this.complete("acknowledged",n)}assign(e,t,n){const s=this.requireIncident(e);if(s.status==="resolved"||s.assignee===t)return vr(s);const r=this.now();return s.assignee=t,s.updatedAt=r,s.timeline.push(this.activity("assigned",r,n,`Assigned to ${t}.`)),this.complete("assigned",s)}escalate(e,t,n,s){const r=this.requireIncident(e);if(r.status==="resolved"||nh[t]<=nh[r.escalation])return vr(r);const o=this.now();return r.escalation=t,r.updatedAt=o,r.timeline.push(this.activity("escalated",o,n,`${Hx(t)}: ${s}`)),this.complete("escalated",r)}addNote(e,t,n){const s=this.requireIncident(e),r=this.now(),o={id:this.nextId("NOTE",++this.noteSequence),author:t,text:n,createdAt:r};return s.notes.push(o),s.updatedAt=r,s.timeline.push(this.activity("note-added",r,t,n)),this.complete("note-added",s)}captureCameraEvidence(e,t,n,s){const r=this.requireIncident(e),o=this.coverage.get(t);if(!o)throw new Ri("UNKNOWN_CAMERA",`No camera coverage '${t}' is authored.`,"Call listCameraCoverage for privacy-safe shared-area cameras.");if(o.floorId!==r.floorId)throw new Ri("CAMERA_SCOPE_MISMATCH",`${o.zoneName} is not on ${r.floorName}.`,"Evidence must come from a shared or plant area on the incident floor.");const a=this.now(),l=this.nextId("EVID",++this.evidenceSequence),c={id:l,cameraId:t,floorId:o.floorId,zoneId:o.zoneId,zoneName:o.zoneName,capturedAt:a,capturedBy:n,note:s,mediaType:"synthetic-snapshot",snapshotToken:`${t}:${a}:${l}`,retentionPolicy:"showcase-30-days",retainUntil:a+Uo};return r.evidence.push(c),r.updatedAt=a,r.timeline.push(this.activity("camera-evidence-captured",a,n,`Captured privacy-safe evidence from ${o.zoneName}.`)),this.complete("camera-evidence-captured",r)}resolve(e,t,n){const s=this.requireIncident(e);if(s.status==="resolved")return vr(s);if(s.source.state==="active")throw new Ri("SOURCE_ACTIVE","The originating alarm is still active.","Correct the condition or wait for the BMS to clear it before resolving the incident.");const r=this.now();return s.status="resolved",s.resolvedAt=r,s.resolvedBy=t,s.resolution=n,s.updatedAt=r,s.retainUntil=r+Uo,s.timeline.push(this.activity("resolved",r,t,n)),this.unresolvedByAlarm.delete(s.source.alarmKey),this.complete("resolved",s)}createFromAlarm(e){const t=this.now(),n=this.findAlarmLocation(e),s={id:this.nextId("INC",++this.incidentSequence),title:e.label,severity:e.severity,status:"open",source:{kind:"alarm",alarmKey:e.key,ruleId:e.ruleId,channel:e.channel,value:e.value,threshold:e.threshold,unit:e.unit,state:"active",alarmSince:e.since,lastChangedAt:t},roomId:e.roomId,roomName:e.roomName,floorId:n.floorId,floorName:n.floorName,zoneId:n.zoneId,zoneName:n.zoneName,zoneFunction:n.zoneFunction,assignee:null,acknowledgedAt:null,acknowledgedBy:null,escalation:"none",createdAt:t,updatedAt:t,resolvedAt:null,resolvedBy:null,resolution:null,retentionPolicy:"showcase-30-days",retainUntil:t+Uo,notes:[],evidence:[],timeline:[]};return s.timeline.push(this.activity("created",t,"BMS",`Created from ${e.label} in ${e.roomName}.`)),s}findAlarmLocation(e){const t=this.roomLocations.get(e.roomId);if(!t)throw new Ri("UNKNOWN_ENTITY",`Alarm room '${e.roomId}' is not in the building.`);return t}requireIncident(e){const t=this.incidents.get(e);if(!t)throw new Ri("UNKNOWN_INCIDENT",`No incident '${e}' exists.`,"Call listIncidents to discover current incident ids.");return t}complete(e,t){return this.emit({reason:e,changedIds:[t.id]}),{outcome:"completed",incident:Ir(t)}}activity(e,t,n,s){return{id:this.nextId("EVT",++this.activitySequence),type:e,at:t,actor:n,detail:s}}nextId(e,t){return`${e}-${String(t).padStart(4,"0")}`}emit(e){const t={reason:e.reason,changedIds:[...e.changedIds]};for(const n of this.listeners)n(t)}purgeExpired(){const e=this.now();for(const[t,n]of this.incidents)n.status!=="resolved"||n.retainUntil>e||this.incidents.delete(t)}initializeRoomLocations(e){for(const t of e.floors)for(const n of t.zones)for(const s of n.rooms)this.roomLocations.set(s.id,{floorId:t.id,floorName:t.name,zoneId:n.id,zoneName:n.name,zoneFunction:n.function})}}function zx(i,e){return!(e.status==="unresolved"&&i.status==="resolved"||e.status&&e.status!=="unresolved"&&i.status!==e.status||e.severity&&i.severity!==e.severity||e.floorId&&i.floorId!==e.floorId||e.roomId&&i.roomId!==e.roomId||e.sourceAlarmKey&&i.source.alarmKey!==e.sourceAlarmKey)}function Vx(i,e){const t=+(i.status==="resolved")-+(e.status==="resolved");if(t!==0)return t;const n=+(e.severity==="critical")-+(i.severity==="critical");return n!==0?n:e.updatedAt-i.updatedAt||i.id.localeCompare(e.id)}function vr(i){return{outcome:"noop",incident:Ir(i)}}function Ir(i){return{...i,source:{...i.source},notes:i.notes.map(e=>({...e})),evidence:i.evidence.map(e=>({...e})),timeline:i.timeline.map(e=>({...e}))}}function Hx(i){return i==="emergency"?"Emergency escalation":"Supervisor escalation"}const ih=1440*60*1e3,Gx=365,Wx="Out of service (front desk)";class Mt extends Error{constructor(e,t,n){super(t),this.code=e,this.hint=n,this.name="FrontDeskServiceError"}}class Xx{constructor(e,t={}){T(this,"rooms",new Map);T(this,"reservations",new Map);T(this,"listeners",new Set);T(this,"sequence",0);T(this,"now");T(this,"inventory");T(this,"blockedRooms",new Set);this.now=t.now??Date.now,this.inventory=t.reservations??new br(e,{now:this.now});let n=0;for(const s of e.floors)for(const r of s.zones)if(r.function==="guest")for(const o of r.rooms){const a=Kx(o.name,n);this.rooms.set(o.id,{roomId:o.id,roomName:o.name,floorId:s.id,floorName:s.name,type:a,capacity:a==="suite"?4:2,readiness:"inspected"}),n+=1}t.seed!==!1&&this.seedShowcase(),this.blockedRooms=this.currentlyBlocked(),this.inventory.onChange(()=>this.syncBlockedRooms())}onChanged(e){return this.listeners.add(e),()=>this.listeners.delete(e)}searchAvailability(e){return this.assertQuery(e),[...this.rooms.values()].map(t=>this.availabilityFor(t,e)).sort(Yx)}snapshot(e=rh(this.now()),t=e+ih){this.assertQuery({arrivalAt:e,departureAt:t,guests:1});const n=this.searchAvailability({arrivalAt:e,departureAt:t,guests:1}),s=[...this.reservations.values()].sort($x).map(Br),r=s.filter(c=>c.status==="reserved"&&sh(c.arrivalAt,e,t)),o=s.filter(c=>c.status==="checked-in"&&sh(c.departureAt,e,t)),a=s.filter(c=>c.status==="checked-in"),l=s.filter(c=>Zx(c)&&jx(e,t,c.arrivalAt,c.departureAt));return{asOf:this.now(),range:{from:e,to:t},inventory:{total:n.length,available:n.filter(c=>c.available).length,ready:n.filter(c=>c.available&&c.readyForCheckIn).length,reserved:l.filter(c=>c.status==="reserved").length,inHouse:a.length,dirty:n.filter(c=>c.readiness==="dirty").length,outOfService:n.filter(c=>c.readiness==="out-of-service").length},rooms:n,arrivals:r,departures:o,inHouse:a,unassigned:r.filter(c=>c.roomId===null),reservations:s}}getReservation(e){const t=this.reservations.get(e);return t?Br(t):null}createReservation(e){var o;this.assertGuest(e.guestName,e.guests),this.assertQuery(e);const t=e.roomId?this.requireRoom(e.roomId):void 0;t&&this.assertAvailable(t,e);const n=this.now(),s=++this.sequence;t&&this.allocate(us(s),t,e);const r={id:us(s),confirmationCode:`HOLO-${String(s).padStart(4,"0")}`,guestName:e.guestName.trim(),guests:e.guests,arrivalAt:e.arrivalAt,departureAt:e.departureAt,roomId:(t==null?void 0:t.roomId)??null,status:"reserved",notes:((o=e.notes)==null?void 0:o.trim())||void 0,source:"operator",createdAt:n,updatedAt:n,checkedInAt:null,checkedOutAt:null};return this.reservations.set(r.id,r),this.emit("reservation-created",[r.id],t?[t.roomId]:[]),bi(r)}importReservation(e){var o;const t=this.reservations.get(e.id);if(t)return hs(t);this.assertGuest(e.guestName,e.guests),this.assertQuery(e);const n=e.roomId?this.rooms.get(e.roomId)??null:null,s=this.now(),r={id:e.id,confirmationCode:e.confirmationCode,guestName:e.guestName.trim(),guests:e.guests,arrivalAt:e.arrivalAt,departureAt:e.departureAt,roomId:(n==null?void 0:n.roomId)??null,status:"reserved",notes:((o=e.notes)==null?void 0:o.trim())||void 0,source:e.source,createdAt:e.createdAt??s,updatedAt:s,checkedInAt:null,checkedOutAt:null};return this.reservations.set(r.id,r),this.emit("reservation-created",[r.id],n?[n.roomId]:[]),bi(r)}assignRoom(e,t){const n=this.requireReservation(e);if(this.assertReserved(n,"assign a room"),n.roomId===t)return hs(n);const s=this.requireRoom(t);this.assertAvailable(s,n,n.id);const r=n.roomId;return this.relocate(n,s),n.roomId=t,n.updatedAt=this.now(),this.emit("room-assigned",[n.id],[r,t].filter(o=>o!==null)),bi(n)}checkIn(e,t){const n=this.requireReservation(e);if(n.status==="checked-in")return hs(n);this.assertReserved(n,"check in");const s=t??n.roomId;if(!s)throw new Mt("ROOM_REQUIRED",`${n.guestName} does not have an assigned room.`,"Assign one of the available rooms before checking the guest in.");const r=this.requireRoom(s);this.assertAvailable(r,n,n.id);const o=this.readinessOf(r);if(o!=="inspected")throw new Mt("ROOM_NOT_READY",`${r.roomName} is ${Qx(o)} and cannot be checked into.`,"Housekeeping must mark the room inspected before check-in.");const a=n.roomId;this.relocate(n,r);const l=this.now();return n.roomId=r.roomId,n.status="checked-in",n.checkedInAt=l,n.updatedAt=l,this.emit("guest-checked-in",[n.id],[a,r.roomId].filter((c,h,u)=>c!==null&&u.indexOf(c)===h)),bi(n)}checkOut(e){const t=this.requireReservation(e);if(t.status==="checked-out")return hs(t);if(t.status!=="checked-in")throw new Mt("INVALID_TRANSITION",`${t.guestName} is ${t.status.replace("-"," ")} and cannot be checked out.`,"Only an in-house stay can be checked out.");const n=this.now();t.status="checked-out",t.checkedOutAt=n,t.updatedAt=n,this.release(t.id);const s=t.roomId?this.rooms.get(t.roomId):void 0;return s&&(s.readiness="dirty"),this.emit("guest-checked-out",[t.id],s?[s.roomId]:[]),bi(t)}cancelReservation(e){const t=this.requireReservation(e);if(t.status==="cancelled")return hs(t);if(t.status!=="reserved")throw new Mt("INVALID_TRANSITION",`${t.guestName} is ${t.status.replace("-"," ")} and cannot be cancelled.`,"Check out an in-house stay instead.");return t.status="cancelled",t.updatedAt=this.now(),this.release(t.id),this.emit("reservation-cancelled",[t.id],t.roomId?[t.roomId]:[]),bi(t)}setRoomReadiness(e,t){const n=this.requireRoom(e),s=this.readinessOf(n);if(s===t)return{outcome:"noop",room:this.view(n)};if([...this.reservations.values()].some(o=>o.status==="checked-in"&&o.roomId===e))throw new Mt("ROOM_OCCUPIED",`${n.roomName} is occupied; its housekeeping state cannot be changed.`,"Check the guest out before changing room readiness.");return t==="out-of-service"?this.closeRoom(n):(n.readiness=t,s==="out-of-service"?this.reopenRoom(n):this.emit("room-readiness-changed",[],[e])),{outcome:"completed",room:this.view(n)}}availabilityFor(e,t,n){if(t.guests>e.capacity)return this.availability(e,!1,"capacity",null);const s=[...this.reservations.values()].find(u=>u.id!==n&&u.roomId===e.roomId&&u.status==="checked-in");if(s)return this.availability(e,!1,"in-house",s.id);const r=this.inventory.getState(),o=this.engineRoomId(e.roomId),a=Fo(t),l=this.now();if(Pu(r,o,a,l,{reservationId:n}))return this.availability(e,!0,"available",null);if(r.blocks.some(u=>u.roomId===o&&Sl(u.range,a)))return this.availability(e,!1,"out-of-service",null);const h=r.allocations.find(u=>u.roomId===o&&Sl(u.range,a)&&Iu(r,u,l)&&!(u.kind==="reservation"&&u.reservationId===n));return h?this.availability(e,!1,"reserved",qx(h)):this.availability(e,!1,"out-of-service",null)}engineRoomId(e){return`${this.inventory.buildingId}:${e}`}readinessOf(e){return this.isBlockedToday(e.roomId)?"out-of-service":e.readiness}isBlockedToday(e){const t=Ss(this.now()),n=this.engineRoomId(e);return this.inventory.getState().blocks.some(s=>s.roomId===n&&s.range.arrival<=t&&t<s.range.departure)}view(e){return{...e,readiness:this.readinessOf(e)}}availability(e,t,n,s){const r=this.view(e);return{...r,available:t,readyForCheckIn:t&&r.readiness==="inspected",reason:n,conflictingReservationId:s}}seedRoom(e,t,n){const s=this.requireRoom(t),r=this.engineRoomId(t),o=Fo(n),a=this.inventory.getState().allocations.filter(l=>l.kind==="reservation"&&l.reservationId===e);if(a.some(l=>l.roomId===r&&l.range.arrival===o.arrival&&l.range.departure===o.departure))return t;a.length&&this.release(e);try{return this.allocate(e,s,n),t}catch(l){if(l instanceof Mt)return null;throw l}}allocate(e,t,n){const s=this.inventory.apply((r,o,a)=>{const l=Du(r,e,this.engineRoomId(t.roomId),Fo(n),o,a);return{state:l.state,result:l.outcome}});s!=="reserved"&&this.throwUnavailable(t,s==="empty-range"?"has no night to sell":"is already reserved for that stay")}relocate(e,t){if(e.roomId===t.roomId)return;if(e.roomId===null){this.allocate(e.id,t,e);return}const n=this.engineRoomId(e.roomId),s=this.engineRoomId(t.roomId),r=this.inventory.apply((o,a)=>{const l=Lu(o,e.id,n,s,a);return{state:l.state,result:l.outcome}});if(r==="unknown-reservation"){this.allocate(e.id,t,e);return}r!=="moved"&&this.throwUnavailable(t,"is already reserved for that stay")}release(e){this.inventory.apply(t=>({state:Nu(t,e),result:void 0}))}closeRoom(e){const t=Ss(this.now());this.inventory.apply((n,s,r)=>{const o=Uu(n,{roomId:this.engineRoomId(e.roomId),range:{arrival:t,departure:_h(t,Gx)},reason:Wx},r,s);return{state:o.state,result:o.block}})}reopenRoom(e){const t=Ss(this.now()),n=this.engineRoomId(e.roomId);this.inventory.apply(s=>{let r=s;for(const o of s.blocks)o.roomId===n&&o.range.arrival<=t&&t<o.range.departure&&(r=Fu(r,o.id));return{state:r,result:void 0}})}currentlyBlocked(){return new Set([...this.rooms.keys()].filter(e=>this.isBlockedToday(e)))}syncBlockedRooms(){const e=this.currentlyBlocked(),t=[...this.rooms.keys()].filter(n=>e.has(n)!==this.blockedRooms.has(n));this.blockedRooms=e,t.length&&this.emit("room-readiness-changed",[],t)}throwUnavailable(e,t){throw new Mt("ROOM_UNAVAILABLE",`${e.roomName} ${t}.`,"Search availability again or choose another room.")}assertAvailable(e,t,n){const s=this.availabilityFor(e,t,n);if(s.available)return;const r=s.reason==="capacity"?`only accommodates ${e.capacity} guest${e.capacity===1?"":"s"}`:s.reason==="out-of-service"?"is out of service":`is already ${s.reason} for that stay`;throw new Mt("ROOM_UNAVAILABLE",`${e.roomName} ${r}.`,"Search availability again or choose another room.")}assertQuery(e){if(!Number.isFinite(e.arrivalAt)||!Number.isFinite(e.departureAt)||e.arrivalAt>=e.departureAt)throw new Mt("INVALID_STAY_RANGE","Departure must be after arrival.","Choose a valid arrival and departure date.");if(!Number.isInteger(e.guests)||e.guests<1||e.guests>6)throw new Mt("INVALID_PARTY_SIZE","Guest count must be between 1 and 6.")}assertGuest(e,t){if(!e.trim())throw new Mt("GUEST_REQUIRED","Guest name is required.");if(e.trim().length>120)throw new Mt("GUEST_NAME_TOO_LONG","Guest name is too long.");if(!Number.isInteger(t)||t<1||t>6)throw new Mt("INVALID_PARTY_SIZE","Guest count must be between 1 and 6.")}assertReserved(e,t){if(e.status!=="reserved")throw new Mt("INVALID_TRANSITION",`${e.guestName} is ${e.status.replace("-"," ")} and cannot ${t}.`,"Refresh the front desk queue to see the current stay status.")}requireRoom(e){const t=this.rooms.get(e);if(!t)throw new Mt("UNKNOWN_GUEST_ROOM",`No guest room '${e}' exists.`,"Search room availability to discover guest-room ids.");return t}requireReservation(e){const t=this.reservations.get(e);if(!t)throw new Mt("UNKNOWN_RESERVATION",`No reservation '${e}' exists.`,"Read the front desk snapshot to discover current reservation ids.");return t}emit(e,t,n){const s={reason:e,reservationIds:[...t],roomIds:[...new Set(n)]};for(const r of this.listeners)r(s)}seedShowcase(){const e=[...this.rooms.values()];if(e.length<5)return;const t=rh(this.now()),n=(a,l)=>t+a*ih+l*60*60*1e3,s=e.find((a,l)=>l>4&&a.capacity>=3)??e[4],r=[{guestName:"Maya Chen",guests:2,arrivalAt:n(-1,15),departureAt:n(1,11),roomId:e[0].roomId,status:"checked-in"},{guestName:"Arun Patel",guests:1,arrivalAt:n(-2,15),departureAt:n(0,11),roomId:e[1].roomId,status:"checked-in"},{guestName:"Noah Williams",guests:2,arrivalAt:n(0,15),departureAt:n(2,11),roomId:e[2].roomId,status:"reserved"},{guestName:"Sofia Rossi",guests:1,arrivalAt:n(0,17),departureAt:n(1,11),roomId:e[3].roomId,status:"reserved"},{guestName:"Lina Rahman",guests:2,arrivalAt:n(0,16),departureAt:n(2,11),roomId:null,status:"reserved"},{guestName:"Diego Silva",guests:Math.min(3,s.capacity),arrivalAt:n(1,15),departureAt:n(4,11),roomId:s.roomId,status:"reserved"}];e[3].readiness="dirty";const o=e[e.length-1];this.isBlockedToday(o.roomId)||this.closeRoom(o);for(const a of r){const l=n(-4,9)+this.sequence,c=++this.sequence,h=a.roomId?this.seedRoom(us(c),a.roomId,a):null;a.status==="checked-in"&&h===null||this.reservations.set(us(c),{id:us(c),confirmationCode:`HOLO-${String(c).padStart(4,"0")}`,guestName:a.guestName,guests:a.guests,arrivalAt:a.arrivalAt,departureAt:a.departureAt,roomId:h,status:a.status,source:"seeded-showcase",createdAt:l,updatedAt:l,checkedInAt:a.status==="checked-in"?a.arrivalAt:null,checkedOutAt:null})}}}function qx(i){return(i.kind==="hold"?i.holdId:i.reservationId)??null}function Ss(i){return new Date(i).toISOString().slice(0,10)}function Fo(i){const e=Ss(i.arrivalAt),t=Ss(i.departureAt);return{arrival:e,departure:t>e?t:_h(e,1)}}function bi(i){return{outcome:"completed",reservation:Br(i)}}function hs(i){return{outcome:"noop",reservation:Br(i)}}function Br(i){return{...i}}function Yx(i,e){return i.available!==e.available?i.available?-1:1:i.readyForCheckIn!==e.readyForCheckIn?i.readyForCheckIn?-1:1:i.floorId.localeCompare(e.floorId)||i.roomName.localeCompare(e.roomName,void 0,{numeric:!0})}function $x(i,e){return i.arrivalAt-e.arrivalAt||i.guestName.localeCompare(e.guestName)}function Kx(i,e){var s;const t=Number((s=i.match(/\d+/))==null?void 0:s[0]),n=Number.isFinite(t)?t%100:e+1;return n===1||n===18?"suite":"standard"}function Zx(i){return i.status==="reserved"||i.status==="checked-in"}function jx(i,e,t,n){return i<n&&t<e}function sh(i,e,t){return i>=e&&i<t}function Qx(i){return i.replaceAll("-"," ")}function us(i){return`RES-${String(i).padStart(4,"0")}`}function rh(i){const e=new Date(i);return Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate())}const oh=[{id:"morning",label:"Morning",hint:"lights up · blinds open · cool"},{id:"day",label:"Day",hint:"guest rooms dark · public lit"},{id:"evening",label:"Evening",hint:"warm · guest blinds drawn"},{id:"night",label:"Night",hint:"guest floors dark · corridors only"},{id:"away",label:"Away / Eco",hint:"everything off · setback"}];function Jx(i,e){switch(i){case"morning":return{light:!0,blind:0,hvac:23};case"day":return{light:e!=="guest",blind:0,hvac:24};case"evening":return{light:!0,blind:e==="guest"?1:0,hvac:24};case"night":return{light:e==="corridor",blind:1,hvac:25};case"away":return{light:!1,blind:1,hvac:26};default:return{}}}function ey(i,e){const t=[];for(const n of e.floors)for(const s of n.zones){const r=hl(s.function);if(r.length===0)continue;const o=Jx(i,s.function);for(const a of s.rooms)r.includes("light")&&o.light!==void 0&&t.push({roomId:a.id,kind:"light",value:o.light}),r.includes("blind")&&o.blind!==void 0&&t.push({roomId:a.id,kind:"blind",value:o.blind}),r.includes("hvac")&&o.hvac!==void 0&&t.push({roomId:a.id,kind:"hvac",value:o.hvac})}return t}const ty=[{hour:6,scene:"morning"},{hour:10,scene:"day"},{hour:18,scene:"evening"},{hour:22,scene:"night"}];class ny{constructor(e,t,n){T(this,"lastScheduledSolarTime",null);this.building=e,this.controls=t,this.lon=n}list(){return oh.map(e=>({...e}))}has(e){return oh.some(t=>t.id===e)}plan(e){return ey(e,this.building).flatMap(n=>{if(!this.controls.supports(n.roomId,n.kind))return[];const s=this.controls.get(n.roomId);return!s||iy(s,n.kind)===n.value?[]:[{...n,actor:"scene",reason:`Scene: ${e}`}]})}tickSchedule(e,t){const n=e+this.lon/15*36e5;if(this.lastScheduledSolarTime===null){this.lastScheduledSolarTime=n;return}if(n<=this.lastScheduledSolarTime){this.lastScheduledSolarTime=n;return}const s=Math.floor(this.lastScheduledSolarTime/Oo),r=Math.floor(n/Oo);for(let o=s;o<=r;o+=1)for(const a of ty){const l=o*Oo+a.hour*36e5;l>this.lastScheduledSolarTime&&l<=n&&t(a.scene)}this.lastScheduledSolarTime=n}}const Oo=24*36e5;function iy(i,e){return e==="light"?i.state.light:e==="hvac"?i.state.hvacSetpoint:i.state.blind}const ah=[{name:"reassemble",args:{durationMs:1200},hold:400},{name:"setMode",args:{mode:"default"},hold:2600},{name:"orbitTo",args:{azimuthDeg:210,elevationDeg:26},hold:900},{name:"setMode",args:{mode:"electricity"},hold:3200},{name:"explode",args:{factor:1},hold:2800},{name:"setMode",args:{mode:"environment"},hold:2800},{name:"reassemble",args:{},hold:400},{name:"setMode",args:{mode:"occupancy"},hold:2400},{name:"isolateFloor",args:{floorId:"F4"},hold:2600},{name:"enterRoom",args:{roomId:"F4-R03"},hold:3600},{name:"exitRoom",args:{},hold:1400},{name:"setMode",args:{mode:"default"},hold:400},{name:"reassemble",args:{},hold:2600}];class sy{constructor(e){T(this,"running",!1);T(this,"timer");T(this,"step",0);T(this,"onChange",null);this.ui=e}isRunning(){return this.running}onTourChanged(e){this.onChange=e}start(){var e;this.running||(this.running=!0,this.step=0,(e=this.onChange)==null||e.call(this,!0),this.advance())}stop(){var e;this.running&&(this.running=!1,window.clearTimeout(this.timer),(e=this.onChange)==null||e.call(this,!1))}async advance(){if(!this.running)return;const e=ah[this.step%ah.length];this.step++;try{await this.ui.call(e.name,e.args)}catch{}this.running&&(this.timer=window.setTimeout(()=>void this.advance(),e.hold))}}const ry={m4a:'audio/mp4; codecs="mp4a.40.2"',mp3:"audio/mpeg"},Ba={flyIn:Vt(new URL("/ihapm-bms-showcase/assets/focus-enter-DmfjVe1D.m4a",import.meta.url).href,new URL("/ihapm-bms-showcase/assets/focus-enter-DIA_go13.mp3",import.meta.url).href,.34),flyOut:Vt(new URL("/ihapm-bms-showcase/assets/focus-exit-DqiFFTZC.m4a",import.meta.url).href,new URL("/ihapm-bms-showcase/assets/focus-exit-DjOA12b1.mp3",import.meta.url).href,.32),select:Vt(new URL("/ihapm-bms-showcase/assets/select-B543GKaw.m4a",import.meta.url).href,new URL("/ihapm-bms-showcase/assets/select-CToahrgi.mp3",import.meta.url).href,.27),mode:Vt(new URL("/ihapm-bms-showcase/assets/mode-C2rENLtz.m4a",import.meta.url).href,new URL("/ihapm-bms-showcase/assets/mode-CXbf-XgL.mp3",import.meta.url).href,.28),layoutOpen:Vt(new URL("/ihapm-bms-showcase/assets/layout-open-Ct1j7s4G.m4a",import.meta.url).href,new URL("/ihapm-bms-showcase/assets/layout-open-BXo9I-Yk.mp3",import.meta.url).href,.36),layoutClose:Vt(new URL("/ihapm-bms-showcase/assets/layout-close-CagHjQ-2.m4a",import.meta.url).href,new URL("/ihapm-bms-showcase/assets/layout-close-DInvVtbh.mp3",import.meta.url).href,.36),floorUp:Vt(new URL("/ihapm-bms-showcase/assets/floor-up-DuqQn7rQ.m4a",import.meta.url).href,new URL("/ihapm-bms-showcase/assets/floor-up-DsI3f8JF.mp3",import.meta.url).href,.31),floorDown:Vt(new URL("/ihapm-bms-showcase/assets/floor-down-BzGprmnc.m4a",import.meta.url).href,new URL("/ihapm-bms-showcase/assets/floor-down-DtHlpKiE.mp3",import.meta.url).href,.31),floorPlan:Vt(new URL("/ihapm-bms-showcase/assets/floor-plan-D9vQF-L9.m4a",import.meta.url).href,new URL("/ihapm-bms-showcase/assets/floor-plan-eXJTCBtD.mp3",import.meta.url).href,.3),control:Vt(new URL("/ihapm-bms-showcase/assets/control-DhiVAWs5.m4a",import.meta.url).href,new URL("/ihapm-bms-showcase/assets/control-5wBki-bf.mp3",import.meta.url).href,.32),reject:Vt(new URL("/ihapm-bms-showcase/assets/reject-Cmfk3VUx.m4a",import.meta.url).href,new URL("/ihapm-bms-showcase/assets/reject-xgIfTSfo.mp3",import.meta.url).href,.3),alarm:Vt(new URL("/ihapm-bms-showcase/assets/alarm-MqnDFowN.m4a",import.meta.url).href,new URL("/ihapm-bms-showcase/assets/alarm-03kd9HOP.mp3",import.meta.url).href,.35),alarmCritical:Vt(new URL("/ihapm-bms-showcase/assets/alarm-critical-OXEyzpei.m4a",import.meta.url).href,new URL("/ihapm-bms-showcase/assets/alarm-critical-Dkf3aeSm.mp3",import.meta.url).href,.39)},lh=Object.freeze(Object.keys(Ba));function oy(i){const e=n=>i(ry[n])!=="",t=[];return e("m4a")&&t.push("m4a"),(e("mp3")||t.length>0)&&t.push("mp3"),t.length===0&&t.push("mp3","m4a"),t}function Vt(i,e,t){return{m4a:i,mp3:e,gain:t}}const Bo=1e-4,ay=4,ly=700,cy={flyIn:.22,flyOut:.2,select:.09,mode:.12,layoutOpen:.18,layoutClose:.18,floorUp:.12,floorDown:.12,floorPlan:.14,control:.075,reject:.16,alarm:.6,alarmCritical:.45};class hy{constructor(){T(this,"ctx",null);T(this,"master",null);T(this,"spaceInput",null);T(this,"noiseTexture",null);T(this,"lastCueAt",new Map);T(this,"selectionTimer",null);T(this,"roomExitTimer",null);T(this,"lastView",{kind:"ASSEMBLED"});T(this,"lastFloorNumber",1);T(this,"enabled",!0);T(this,"volume",.5);T(this,"subscriptions",[]);T(this,"transientNodes",new Set);T(this,"buffers",new Map);T(this,"activeSamples",new Set);T(this,"assetAbort",null);T(this,"preferredFormats",[]);T(this,"prefetchedPack",null);T(this,"activation",null);T(this,"pendingCue",null);T(this,"loadState","idle");T(this,"format",null);T(this,"playedCues",0);T(this,"lastPlayedCue",null);T(this,"disposed",!1)}getState(){return{enabled:this.enabled,volume:this.volume}}getDiagnostics(){var e;return{contextState:((e=this.ctx)==null?void 0:e.state)??"unavailable",loadState:this.loadState,format:this.format,loadedCues:this.buffers.size,activeVoices:this.activeSamples.size,playedCues:this.playedCues,lastCue:this.lastPlayedCue}}setAudio(e){if(e.enabled!==void 0&&(this.enabled=e.enabled),e.volume!==void 0&&(this.volume=Math.max(0,Math.min(1,e.volume))),this.master&&this.ctx){const t=this.ctx.currentTime;this.master.gain.cancelScheduledValues(t),this.master.gain.setTargetAtTime(this.enabled?this.volume:0,t,.025)}return this.enabled?this.prepareSoundPack():(this.pendingCue=null,this.stopActiveSamples()),this.getState()}attach(e){this.disposed||(this.detach(),this.prepareSoundPack(),this.subscriptions.push(e.on("roomFocusChanged",({roomId:t})=>{t?(this.cancelSelection(),this.cancelRoomExit(),this.play("flyIn")):this.queueRoomExit()})),this.subscriptions.push(e.on("selectionChanged",({ref:t})=>{(t==null?void 0:t.type)==="room"?this.queueSelection():this.cancelSelection()})),this.subscriptions.push(e.on("modeChanged",()=>this.play("mode"))),this.subscriptions.push(e.on("viewChanged",({view:t})=>this.playViewChange(t))),this.subscriptions.push(e.on("controlsChanged",()=>this.play("control"))),this.subscriptions.push(e.on("commandRejected",()=>this.play("reject"))),this.subscriptions.push(e.on("alarmsChanged",({raised:t})=>{t.length!==0&&this.play(t.some(n=>n.severity==="critical")?"alarmCritical":"alarm")})))}dispose(){var t,n,s;if(this.disposed)return;this.disposed=!0,this.detach(),this.cancelSelection(),this.cancelRoomExit(),this.pendingCue=null,(t=this.assetAbort)==null||t.abort(),this.assetAbort=null,this.stopActiveSamples(),this.lastCueAt.clear(),this.releaseTransient([...this.transientNodes]),this.buffers.clear(),(n=this.master)==null||n.disconnect(),(s=this.spaceInput)==null||s.disconnect();const e=this.ctx;this.master=null,this.spaceInput=null,this.noiseTexture=null,this.ctx=null,this.loadState="disposed",e&&e.state!=="closed"&&e.close().catch(()=>{})}async unlock(){if(this.disposed||(this.prepareSoundPack(),this.ensureContext(),!this.ctx))return!0;try{return this.ctx.state==="suspended"&&await this.ctx.resume(),this.ctx.state!=="running"?!1:(this.activateSoundPack(),!0)}catch{return!1}}ensureContext(){if(this.ctx||typeof window>"u")return;const e=window.AudioContext??window.webkitAudioContext;if(!e)return;const t=new e,n=t.createGain();n.gain.setValueAtTime(this.enabled?this.volume:0,t.currentTime);const s=t.createDynamicsCompressor();s.threshold.setValueAtTime(-20,t.currentTime),s.knee.setValueAtTime(18,t.currentTime),s.ratio.setValueAtTime(8,t.currentTime),s.attack.setValueAtTime(.004,t.currentTime),s.release.setValueAtTime(.16,t.currentTime),n.connect(s).connect(t.destination);const r=t.createDelay(.32);r.delayTime.setValueAtTime(.105,t.currentTime);const o=t.createGain();o.gain.setValueAtTime(.2,t.currentTime);const a=t.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(1800,t.currentTime);const l=t.createGain();l.gain.setValueAtTime(.16,t.currentTime),r.connect(o).connect(r),r.connect(a).connect(l).connect(n),this.ctx=t,this.master=n,this.spaceInput=r}play(e,t=4){if(!this.enabled)return;if(!this.ctx){this.queuePending(e,t);return}const n=this.ctx.currentTime,s=this.lastCueAt.get(e);if(!(s!==void 0&&n-s<cy[e])){if(this.lastCueAt.set(e,n),this.ctx.state!=="running"){this.queuePending(e,t);return}if(!this.playSample(e,t,n)){if(this.loadState!=="fallback"&&this.loadState!=="disposed"){this.queuePending(e,t),this.activateSoundPack();return}this.playProcedural(e,t,n)}}}playProcedural(e,t,n){switch(e){case"flyIn":this.transition(n,"in");break;case"flyOut":this.transition(n,"out");break;case"select":this.selection(n);break;case"mode":this.modeChange(n);break;case"layoutOpen":this.layout(n,!0);break;case"layoutClose":this.layout(n,!1);break;case"floorUp":this.floorIndex(n,t,"up");break;case"floorDown":this.floorIndex(n,t,"down");break;case"floorPlan":this.floorPlan(n,t);break;case"control":this.confirmation(n);break;case"reject":this.rejection(n);break;case"alarm":this.clinicalAlert(n,!1);break;case"alarmCritical":this.clinicalAlert(n,!0);break}}prepareSoundPack(){if(this.disposed||this.prefetchedPack||typeof document>"u"||typeof fetch>"u")return;const e=document.createElement("audio");this.preferredFormats=oy(t=>e.canPlayType(t)),this.assetAbort=new AbortController,this.loadState="prefetching",this.prefetchedPack=this.fetchFirstAvailablePack(this.preferredFormats,this.assetAbort.signal).catch(()=>null)}async activateSoundPack(){if(this.disposed||this.loadState==="ready"||this.loadState==="fallback"){this.drainPendingCue();return}return this.activation?this.activation:(this.prepareSoundPack(),this.activation=this.decodeSoundPack(),this.activation)}async decodeSoundPack(){var s;if(!this.ctx||this.ctx.state==="closed")return;this.loadState="decoding";const e=new Set,t=await this.prefetchedPack,n=[t];for(const r of this.preferredFormats)if((t==null?void 0:t.format)!==r)try{n.push(await this.fetchPack(r,(s=this.assetAbort)==null?void 0:s.signal))}catch{n.push(null)}for(const r of n)if(!(!r||e.has(r.format)||this.disposed)){e.add(r.format);try{const o=await Promise.all(lh.map(async a=>{const l=r.bytes.get(a);if(!l)throw new Error(`Missing ${a} from ${r.format} sound pack.`);const c=await this.ctx.decodeAudioData(l.slice(0));return[a,c]}));if(this.disposed)return;this.buffers=new Map(o),this.format=r.format,this.loadState="ready",this.drainPendingCue();return}catch{}}this.disposed||(this.loadState="fallback",this.drainPendingCue())}async fetchFirstAvailablePack(e,t){let n;for(const s of e)try{return await this.fetchPack(s,t)}catch(r){if(t!=null&&t.aborted)throw r;n=r}throw n??new Error("No supported cinematic audio format.")}async fetchPack(e,t){const n=await Promise.all(lh.map(async s=>{const r=await fetch(Ba[s][e],{signal:t});if(!r.ok)throw new Error(`Unable to load ${s}.${e}: HTTP ${r.status}`);return[s,await r.arrayBuffer()]}));return{format:e,bytes:new Map(n)}}playSample(e,t,n){const s=this.ctx,r=this.buffers.get(e);if(!s||!r||!this.master)return!1;for(;this.activeSamples.size>=ay;){const c=this.activeSamples.values().next().value;if(!c)break;this.activeSamples.delete(c);try{c.stop()}catch{}}const o=s.createBufferSource(),a=s.createGain(),l=this.cueBus(.015);return o.buffer=r,o.loop=!1,o.playbackRate.setValueAtTime(this.floorPlaybackRate(e,t),n),a.gain.setValueAtTime(Ba[e].gain,n),o.connect(a).connect(l.input),this.activeSamples.add(o),this.playedCues+=1,this.lastPlayedCue=e,o.addEventListener("ended",()=>this.activeSamples.delete(o),{once:!0}),this.trackTransient(o,[o,a,...l.nodes]),o.start(n),!0}floorPlaybackRate(e,t){return e!=="floorUp"&&e!=="floorDown"&&e!=="floorPlan"?1:.95+Math.max(1,Math.min(12,t))*.009}queuePending(e,t){this.pendingCue={cue:e,floorIndex:t,requestedAt:typeof performance>"u"?Date.now():performance.now()}}drainPendingCue(){const e=this.pendingCue;if(this.pendingCue=null,!e||!this.enabled||!this.ctx||this.ctx.state!=="running"||(typeof performance>"u"?Date.now():performance.now())-e.requestedAt>ly)return;const n=this.ctx.currentTime;this.playSample(e.cue,e.floorIndex,n)||this.playProcedural(e.cue,e.floorIndex,n)}stopActiveSamples(){for(const e of this.activeSamples)try{e.stop()}catch{}this.activeSamples.clear()}air(e,t,n,s,r,o=1.2){const a=this.ctx,l=a.createBufferSource();l.buffer=this.getNoiseTexture();const c=a.createBiquadFilter();c.type="bandpass",c.Q.setValueAtTime(o,e),c.frequency.setValueAtTime(s,e),c.frequency.exponentialRampToValueAtTime(r,e+t);const h=this.envelope(e,t,n,Math.min(.04,t*.2)),u=this.cueBus(.13);l.connect(c).connect(h).connect(u.input),this.trackTransient(l,[l,c,h,...u.nodes]),l.start(e),l.stop(e+t+.04)}tone(e,t,n,s,r,o){const l=this.ctx.createBiquadFilter();l.type="bandpass",l.Q.setValueAtTime(.85,e),l.frequency.setValueAtTime(Math.max(180,o*.65),e),l.frequency.exponentialRampToValueAtTime(o,e+s);const c=this.envelope(e,s,r,Math.min(.018,s*.18)),h=this.cueBus(.11);l.connect(c).connect(h.input);const u=this.partial(e,t,n,s,"sine",1,1,0,l),d=this.partial(e,t,n,s,"triangle",2.01,.19,7,l);this.trackTransient(d.source,[l,c,...h.nodes,...u.nodes,...d.nodes])}resonance(e,t,n,s,r,o){const l=this.ctx.createBiquadFilter();l.type="lowpass",l.Q.setValueAtTime(.72,e),l.frequency.setValueAtTime(Math.max(260,o*.42),e),l.frequency.exponentialRampToValueAtTime(o,e+s);const c=this.envelope(e,s,r,Math.min(.045,s*.22)),h=this.cueBus(.085);l.connect(c).connect(h.input);const u=this.partial(e,t,n,s,"sine",1,.74,-4,l),d=this.partial(e,t,n,s,"sine",1.004,.27,5,l),p=this.partial(e,t,n,s,"triangle",1.5,.12,-3,l);this.trackTransient(p.source,[l,c,...h.nodes,...u.nodes,...d.nodes,...p.nodes])}partial(e,t,n,s,r,o,a,l,c){const h=this.ctx,u=h.createOscillator();u.type=r,u.frequency.setValueAtTime(t*o,e),u.frequency.exponentialRampToValueAtTime(n*o,e+s),u.detune.setValueAtTime(l,e);const d=h.createGain();return d.gain.setValueAtTime(a,e),u.connect(d).connect(c),u.start(e),u.stop(e+s+.05),{source:u,nodes:[u,d]}}envelope(e,t,n,s){const o=this.ctx.createGain(),a=e+Math.max(.004,Math.min(s,t*.32)),l=Math.max(a+.004,e+t*.58);return o.gain.setValueAtTime(Bo,e),o.gain.exponentialRampToValueAtTime(n,a),o.gain.exponentialRampToValueAtTime(Math.max(Bo,n*.58),l),o.gain.exponentialRampToValueAtTime(Bo,e+t),o}cueBus(e){const t=this.ctx,n=t.createGain(),s=[n];if(n.gain.setValueAtTime(1,t.currentTime),n.connect(this.master),this.spaceInput){const r=t.createGain();s.push(r),r.gain.setValueAtTime(e,t.currentTime),n.connect(r).connect(this.spaceInput)}return{input:n,nodes:s}}trackTransient(e,t){for(const n of t)this.transientNodes.add(n);e.addEventListener("ended",()=>this.releaseTransient(t),{once:!0})}releaseTransient(e){for(const t of e){try{t.disconnect()}catch{}this.transientNodes.delete(t)}}getNoiseTexture(){if(this.noiseTexture)return this.noiseTexture;const e=this.ctx,t=e.createBuffer(1,Math.ceil(e.sampleRate*1.2),e.sampleRate),n=t.getChannelData(0);let s=1597463007,r=0;for(let o=0;o<n.length;o++){s^=s<<13,s^=s>>>17,s^=s<<5;const a=(s>>>0)/4294967295*2-1;r=r*.985+a*.015,n[o]=a*.42+r*.58}return this.noiseTexture=t,t}transition(e,t){t==="in"?(this.air(e,.56,.024,360,2900,.78),this.resonance(e,118,176,.54,.052,820),this.resonance(e+.075,260,420,.42,.029,1550),this.tone(e+.31,620,760,.18,.015,2200)):(this.resonance(e,180,120,.48,.046,760),this.resonance(e+.055,410,268,.35,.025,1350),this.air(e+.07,.42,.018,2500,380,.82))}selection(e){this.air(e,.16,.011,740,1750,1.4),this.resonance(e,320,445,.22,.027,1120),this.tone(e+.07,505,570,.14,.011,1650)}modeChange(e){this.tone(e,280,420,.18,.046,1500),this.tone(e+.095,420,630,.22,.052,2200)}layout(e,t){const n=t?74:132,s=t?132:76;this.air(e,.68,.02,t?280:2600,t?2450:360,.75),this.resonance(e,n,s,.68,.048,520),this.resonance(e+.12,t?190:350,t?338:205,.45,.024,1240),this.tone(e+.36,t?470:690,t?660:430,.22,.012,2050)}floorIndex(e,t,n){const s=150*Math.pow(2,(Math.max(1,Math.min(12,t))-1)/15),r=n==="up"?s*.72:s*1.5,o=n==="up"?s:s*.72;this.air(e,.24,.012,n==="up"?460:1450,n==="up"?1450:460,1.05),this.resonance(e,r,o,.29,.032,880),this.resonance(e+.105,n==="up"?s*1.28:s*1.5,n==="up"?s*1.5:s*1.28,.2,.018,1420)}floorPlan(e,t){const n=150*Math.pow(2,(Math.max(1,Math.min(12,t))-1)/15);this.air(e,.34,.014,1900,600,.88),this.resonance(e,n*1.5,n,.34,.03,980),this.tone(e+.14,n*2.1,n*1.82,.19,.013,1550)}confirmation(e){this.air(e,.075,.018,1200,3300,3.1),this.tone(e,600,860,.11,.04,2400)}rejection(e){this.air(e,.3,.024,900,300,1.8),this.tone(e,210,150,.14,.06,560),this.tone(e+.17,180,126,.16,.048,480)}clinicalAlert(e,t){const n=t?[430,610,455]:[520,660],s=t?.155:.2;this.air(e,t?.55:.4,t?.04:.028,780,2300,1.6),n.forEach((r,o)=>{const a=o%2===0?r:r*.9;this.tone(e+o*s,a,r*1.08,s*.82,t?.065:.05,t?2050:1750)})}playViewChange(e){this.cancelRoomExit();const t=this.lastView;switch(this.lastView=e,e.kind){case"ASSEMBLED":t.kind!=="ASSEMBLED"&&this.play("layoutClose");break;case"EXPLODED":this.play(e.factor<(t.kind==="EXPLODED"?t.factor:0)?"layoutClose":"layoutOpen");break;case"ISOLATED":{const n=this.floorNumber(e.floorId);this.play(n<this.lastFloorNumber?"floorDown":"floorUp",n),this.lastFloorNumber=n;break}case"FLATTENED":{const n=this.floorNumber(e.floorId);this.play("floorPlan",n),this.lastFloorNumber=n;break}}}floorNumber(e){const t=/\d+$/.exec(e);return t?Number.parseInt(t[0],10):4}queueSelection(){this.cancelSelection(),this.selectionTimer=setTimeout(()=>{this.selectionTimer=null,this.play("select")},32)}cancelSelection(){this.selectionTimer!==null&&(clearTimeout(this.selectionTimer),this.selectionTimer=null)}queueRoomExit(){this.cancelRoomExit(),this.roomExitTimer=setTimeout(()=>{this.roomExitTimer=null,this.play("flyOut")},44)}cancelRoomExit(){this.roomExitTimer!==null&&(clearTimeout(this.roomExitTimer),this.roomExitTimer=null)}detach(){for(const e of this.subscriptions.splice(0))e()}}const uy=5e3;function kr(i){return structuredClone(i)}class dy{constructor(e=uy){T(this,"records",[]);T(this,"start",0);if(this.capacity=e,!Number.isSafeInteger(e)||e<1)throw new Error("CommandLog capacity must be a positive safe integer.")}get length(){return this.records.length}record(e,t){const n={ts:Date.now(),name:e,args:kr(t)};if(this.records.length<this.capacity){this.records.push(n);return}this.records[this.start]=n,this.start=(this.start+1)%this.capacity}entries(){return(this.start===0?this.records:[...this.records.slice(this.start),...this.records.slice(0,this.start)]).map(t=>({ts:t.ts,name:t.name,args:kr(t.args)}))}toJSON(){return JSON.stringify(this.entries(),null,2)}}const ko=Se({type:pt(["building","floor","zone","room","sensor"]),id:Le(),buildingId:Le().optional()});class ch extends Error{constructor(e,t,n){super(t),this.code=e,this.hint=n,this.name="CommandRejection"}}const fy=pt(["orbit","front","top","isometric"]),py=pt(["guest-light-trim","hvac-eco","solar-shade","restore-comfort"]),my=Yi([mt(-1),mt(1)]),gy=pt(["open","acknowledged","resolved"]),vy=pt(["supervisor","emergency"]),Kn=Le().trim().min(1).max(100),_r=Le().trim().min(1).max(1e3),_y=Se({status:Yi([gy,mt("unresolved")]).optional(),severity:pt(["warning","critical"]).optional(),floorId:Le().optional(),roomId:Le().optional(),sourceAlarmKey:Le().optional()}),qi=Yi([et().finite(),Ou(),Bu({offset:!0,local:!0})]),xy=Yi([mt("live"),Se({from:qi,to:qi}).superRefine((i,e)=>{Yt(i.from)>Yt(i.to)&&e.addIssue({code:Dr.custom,path:["from"],message:"Must be on or before to."})})]),yy=Se({range:xy}),Sy=Va("kind",[Se({roomId:Le(),kind:mt("light"),value:Ms()}),Se({roomId:Le(),kind:mt("hvac"),value:et().finite().min(Xi[0]).max(Xi[1])}),Se({roomId:Le(),kind:mt("blind"),value:et().finite().min(0).max(1)})]),zo=Se({floorId:Le().optional(),zoneFunction:pt(["guest","lobby","corridor","plant","amenity"]).optional()}).refine(i=>i.floorId!==void 0||i.zoneFunction!==void 0,{message:"Select at least one of floorId or zoneFunction."}),Vo=Se({force:mt(!0),reason:Le().trim().min(1).max(200),expiresAt:et().finite().optional()}),My=Va("kind",[Se({selector:zo,kind:mt("light"),value:Ms(),override:Vo.optional()}),Se({selector:zo,kind:mt("hvac"),value:et().finite().min(Xi[0]).max(Xi[1]),override:Vo.optional()}),Se({selector:zo,kind:mt("blind"),value:et().finite().min(0).max(1),override:Vo.optional()})]),hh=Se({arrivalAt:qi,departureAt:qi,guests:et().int().min(1).max(6)}).superRefine((i,e)=>{Yt(i.arrivalAt)>=Yt(i.departureAt)&&e.addIssue({code:Dr.custom,path:["departureAt"],message:"Must be after arrivalAt."})}),Ey=Se({from:qi.optional(),to:qi.optional()}).superRefine((i,e)=>{i.from===void 0!=(i.to===void 0)?e.addIssue({code:Dr.custom,message:"Provide both from and to, or omit both for today."}):i.from!==void 0&&i.to!==void 0&&Yt(i.from)>=Yt(i.to)&&e.addIssue({code:Dr.custom,path:["to"],message:"Must be after from."})}),xr=Le().trim().min(1),by=Le().trim().min(1).max(120),Ty=Le().trim().max(500),wy=pt(["dirty","clean","inspected","out-of-service"]),uh={durationMs:et().positive().max(2e4).optional(),radius:et().positive().optional()},Ti={durationMs:et().positive().max(2e4).optional()};class Ay{constructor(e){T(this,"log",new dy);T(this,"emitter");T(this,"commands",new Map);T(this,"commandListeners",new Set);T(this,"offControlChange",null);T(this,"offIncidentChange",null);T(this,"offFrontDeskChange",null);T(this,"offReservationsChange",null);T(this,"offSourceStatus",null);T(this,"offActuationProgress",null);T(this,"disposed",!1);T(this,"focusedRoom",null);T(this,"focusRestore",null);T(this,"focusVersion",0);this.deps=e,this.emitter=e.emitter,this.offControlChange=this.deps.controls.onBatch(t=>{for(const n of t.entries)this.emitter.emit("controlChanged",{entry:n});this.emitter.emit("controlsChanged",t)}),this.offIncidentChange=this.deps.incidents.onChanged(t=>{this.emitter.emit("incidentsChanged",t)}),this.offFrontDeskChange=this.deps.frontDesk.onChanged(t=>{this.emitter.emit("frontDeskChanged",t)}),this.offReservationsChange=this.deps.reservations.onChange(()=>{this.emitter.emit("availabilityChanged",{at:Date.now()})}),this.deps.alarms.onAlarm(t=>this.emitter.emit("alarmRaised",{alarm:t}),t=>this.emitter.emit("alarmCleared",{alarm:t}),t=>{this.deps.incidents.ingestAlarmBatch(t.raised,t.cleared),this.emitter.emit("alarmsChanged",t)}),this.deps.viewStateMachine.setViewChangedListener(t=>{var n,s;this.emitter.emit("viewChanged",{view:t}),(s=(n=this.deps.modeManager.getActiveMode())==null?void 0:n.onViewChanged)==null||s.call(n,t)}),this.deps.timeline.setChangeListener(t=>{this.emitter.emit("dataUpdated",{time:t.time,timeMode:t.mode,playbackSpeed:t.playbackSpeed})}),this.offSourceStatus=this.deps.timeline.onSourceStatus(t=>{this.emitter.emit("sourceStatusChanged",{status:t})}),this.offActuationProgress=this.deps.actuation.onProgress(t=>{this.emitter.emit("actuationChanged",t)}),this.define("setMode","Switch the visualization mode (see listModes for available ids).",Se({mode:Le()}),({mode:t})=>{if(!this.deps.modeManager.list().some(r=>r.id===t))throw this.reject("setMode","UNKNOWN_MODE",`No mode '${t}'.`,`Available: ${this.deps.modeManager.list().map(r=>r.id).join(", ")}`);const s=this.deps.modeManager.getActiveId();return this.deps.modeManager.setMode(t).then(()=>{s!==t&&this.emitter.emit("modeChanged",{mode:t})})}),this.define("setAutoRotate","Enable or disable the idle showroom rotation of the building.",Se({on:Ms(),speed:et().positive().max(10).optional()}),({on:t,speed:n})=>{this.deps.cameraDirector.setAutoRotate(t,n),this.emitter.emit("autoRotateChanged",{on:t,speed:n})}),this.define("orbitTo","Fly the camera to an orbit position around the building. Azimuth 0 faces north; elevation is degrees above the horizon.",Se({azimuthDeg:et().min(-360).max(360),elevationDeg:et().min(0).max(89),...uh}),async t=>{this.leaveRoomForNavigation();const n=await this.deps.cameraDirector.orbitTo(t.azimuthDeg,t.elevationDeg,{durationMs:t.durationMs,radius:t.radius});return n==="completed"&&this.emitter.emit("cameraSettled",{command:"orbitTo"}),{outcome:n}}),this.define("setView","Fly the camera to a named preset view.",Se({view:fy,...uh}),async t=>{this.leaveRoomForNavigation();const n=await this.deps.cameraDirector.setView(t.view,{durationMs:t.durationMs,radius:t.radius});return n==="completed"&&this.emitter.emit("cameraSettled",{command:"setView"}),{outcome:n}}),this.define("zoomTo","Cinematic flight framing an entity (or the whole building).",Se({target:Yi([mt("building"),ko]),...Ti}),t=>{t.target!=="building"&&this.assertEntity(t.target,"zoomTo"),this.leaveRoomForNavigation();const n=this.deps.sceneIndex.boxOf(t.target);return this.deps.cameraDirector.zoomToBox(n,{durationMs:t.durationMs}).then(s=>(s==="completed"&&this.emitter.emit("cameraSettled",{command:"zoomTo"}),{outcome:s}))}),this.define("explode","Separate the floors vertically (0 = assembled … 1 = fully exploded).",Se({factor:et().min(0).max(1),...Ti}),({factor:t,durationMs:n})=>(this.leaveRoomForNavigation(),this.deps.viewStateMachine.explode(t,n))),this.define("isolateFloor","Focus a single floor; all other floors fade to ghost wireframe.",Se({floorId:Le(),...Ti}),({floorId:t,durationMs:n})=>(this.assertFloor(t,"isolateFloor"),this.leaveRoomForNavigation(),this.deps.viewStateMachine.isolate(t,n))),this.define("flattenFloor","Isolate a floor and squash its rooms into a 2D/2.5D floor plan (auto-isolates first).",Se({floorId:Le(),style:pt(["2d","2.5d"]),...Ti}),({floorId:t,style:n,durationMs:s})=>(this.assertFloor(t,"flattenFloor"),this.leaveRoomForNavigation(),this.deps.viewStateMachine.flatten(t,n,s))),this.define("sliceFloor","Move the isolated (or flattened) floor focus one level up or down; preserves flatten style when active.",Se({direction:my,...Ti}),async({direction:t,durationMs:n})=>{const s=this.deps.buildingIndex.floorIds,r=this.floorSliceAnchor(),o=r?s.indexOf(r)+t:t>0?0:s.length-1,a=s[o];if(!a)return{outcome:"noop",floorId:r??null};this.leaveRoomForNavigation();const l=this.deps.viewStateMachine.getView();return{...l.kind==="FLATTENED"?await this.deps.viewStateMachine.flatten(a,l.style,n):await this.deps.viewStateMachine.isolate(a,n),floorId:a}}),this.define("reassemble","Return every floor to the assembled building and restore the orbit camera.",Se({...Ti}),({durationMs:t})=>(this.leaveRoomForNavigation(),this.deps.viewStateMachine.reassemble(t))),this.define("select","Select a room and highlight it; the highlight survives view transitions.",Se({ref:ko}),({ref:t})=>{this.assertRoom(t,"select");const n=this.deps.selectionService.select(t);return this.emitter.emit("selectionChanged",{ref:t,info:this.deps.buildingIndex.info(t)}),{changed:n}}),this.define("clearSelection","Drop the current selection and its highlight.",Se({}),()=>{const t=this.deps.selectionService.clear();return this.emitter.emit("selectionChanged",{ref:null,info:null}),{changed:t}}),this.define("inspect","Return an entity’s identity and sensor bindings from the domain model.",Se({ref:ko}),({ref:t})=>(this.assertEntity(t,"inspect"),this.deps.buildingIndex.info(t))),this.define("getView","Return the current decomposition view state (PLAN §4.7).",Se({}),()=>this.deps.viewStateMachine.getView()),this.define("setTimeRange","Follow live data ('live') or scrub to a past instant (freezes on the range's `to` edge).",yy,({range:t})=>(this.deps.timeline.setTimeRange(t),{timeMode:this.deps.timeline.getState().mode})),this.define("setPlaybackSpeed","Multiplier on how fast simulated time advances in live mode.",Se({x:et().positive().max(1e3)}),({x:t})=>(this.deps.timeline.setPlaybackSpeed(t),{playbackSpeed:t})),this.define("setQuality","Pin the render quality tier (high/medium/low); disables auto-downgrade (PLAN §5.1).",Se({tier:pt(["high","medium","low"])}),({tier:t})=>(this.deps.quality.setQuality(t),{quality:t})),this.define("setTheme","Switch between the dark holographic theme and a light theme (chrome tokens flip; the scene renders as ink on paper).",Se({theme:pt(["dark","light"])}),({theme:t})=>{const n=this.deps.theme.setTheme(t);return this.emitter.emit("themeChanged",{theme:n}),{theme:n}}),this.define("enterRoom","Cinematic fly-through into a room; selects it and drops to an interior view.",Se({roomId:Le(),durationMs:et().positive().max(2e4).optional()}),({roomId:t,durationMs:n})=>{var a,l;this.assertRoom({type:"room",id:t},"enterRoom");const s=++this.focusVersion;this.deps.selectionService.select({type:"room",id:t}),this.emitter.emit("selectionChanged",{ref:{type:"room",id:t},info:this.deps.buildingIndex.info({type:"room",id:t})}),this.focusedRoom=t,this.emitter.emit("roomFocusChanged",{roomId:t}),(a=this.focusRestore)==null||a.call(this);const r=(l=this.deps.sceneIndex.room(t))==null?void 0:l.visual;if(r){const c=r.getOpacity();this.focusRestore=()=>{r.setOpacity(c)},r.setOpacity(.18)}const o=this.deps.sceneIndex.boxOf({type:"room",id:t});return this.deps.cameraDirector.enterRoom(o,{durationMs:n}).then(c=>(c==="superseded"&&s===this.focusVersion&&this.focusedRoom===t&&this.clearRoomFocus(),{outcome:c}))}),this.define("exitRoom","Fly back out of a room to the orbit view (no-op if not focused).",Se({durationMs:et().positive().max(2e4).optional()}),async({durationMs:t})=>this.focusedRoom?(++this.focusVersion,this.clearRoomFocus({abandonCamera:!1}),{outcome:await this.deps.cameraDirector.exitRoom({durationMs:t})}):{outcome:"noop"}),this.define("setControl","Command a room actuator: light (on/off), hvac (setpoint °C), or blind (0 open…1 closed).",Sy,({roomId:t,kind:n,value:s})=>{if(!this.deps.controls.supports(t,n))throw this.reject("setControl","UNKNOWN_ENTITY",`Room '${t}' has no ${n} control.`,"Call getControls to see controllable rooms and their kinds.");return this.deps.actuation.execute({roomId:t,kind:n,value:s,actor:"operator"}).then(r=>(r.changed&&this.deps.timeline.refresh(),{state:r.entry.state,changed:r.changed,outcome:r.result.outcome,commandId:r.result.commandId,code:r.result.code,message:r.result.message}))}),this.define("setControls","Batch-command one actuator across rooms selected by floor and/or zone function. Optional force override metadata is logged for server authorization.",My,({selector:t,kind:n,value:s,override:r})=>{t.floorId&&this.assertFloor(t.floorId,"setControls");const o=[],a=[];for(const l of this.deps.buildingIndex.roomsMatching(t)){const{id:c}=l.room;if(!this.deps.controls.supports(c,n))continue;o.push(c);const h=this.deps.controls.get(c);Iy(h,n)!==s&&a.push({roomId:c,kind:n,value:s,actor:"operator",reason:r==null?void 0:r.reason,force:r==null?void 0:r.force,expiresAt:r==null?void 0:r.expiresAt})}return this.deps.actuation.executeBatch(a).then(l=>(l.changed>0&&this.deps.timeline.refresh(),{selector:{...t},kind:n,value:s,override:r,roomIds:o,changedRoomIds:l.changedRoomIds,changed:l.changed,rejected:l.rejected,results:l.results.map(({result:c})=>({...c}))}))}),this.define("getControls","Read actuator state for one room, or every controllable room when roomId is omitted.",Se({roomId:Le().optional()}),({roomId:t})=>t?this.deps.controls.get(t)??null:this.deps.controls.list()),this.define("getPowerSummary","Summarize good-quality live kW by floor and zone, with unavailable meters and highest-draw rooms.",Se({floorId:Le().optional()}),({floorId:t})=>(t&&this.assertFloor(t,"getPowerSummary"),this.deps.power.summary(this.deps.timeline.currentFrame(),t))),this.define("getOperationsSnapshot","Read one coherent manager snapshot: scoped room sensors/controls, global alarms, and scoped power.",Se({floorId:Le().optional()}),({floorId:t})=>{t&&this.assertFloor(t,"getOperationsSnapshot");const n=this.deps.timeline.currentFrame(),s=this.deps.buildingIndex.roomsMatching({floorId:t}).map(r=>({roomId:r.room.id,roomName:r.room.name,floorId:r.floor.id,floorName:r.floor.name,zoneId:r.zone.id,zoneName:r.zone.name,zoneFunction:r.zone.function,readings:r.room.sensors.map(o=>dh(n,o)),controls:this.deps.controls.get(r.room.id)??null}));return{time:n.time,rooms:s,activeAlarms:this.deps.alarms.activeAlarms(),incidents:this.deps.incidents.summary({floorId:t}),power:this.deps.power.summary(n,t)}}),this.define("applyPowerAction","Apply a scoped confirmed power-management action: guest light trim, HVAC eco, solar shade, or restore comfort.",Se({action:py,floorId:Le().optional()}),({action:t,floorId:n})=>{n&&this.assertFloor(n,"applyPowerAction");const s=this.deps.power.plan(t,n);return this.deps.actuation.executeBatch(s.changes).then(r=>(r.changed>0&&this.deps.timeline.refresh(),{action:t,floorId:n,changedControls:r.changed,changedRooms:r.changedRoomIds,rejectedControls:r.rejected}))}),this.define("getFrontDeskSnapshot","Read today’s front-desk inventory and queues, or scope them to an explicit period.",Ey,({from:t,to:n})=>t===void 0||n===void 0?this.deps.frontDesk.snapshot():this.deps.frontDesk.snapshot(Yt(t),Yt(n))),this.define("searchRoomAvailability","Find guest rooms available for an arrival/departure period and party size, including readiness and conflict reasons.",hh,t=>this.deps.frontDesk.searchAvailability({arrivalAt:Yt(t.arrivalAt),departureAt:Yt(t.departureAt),guests:t.guests})),this.define("createReservation","Create a guest reservation, optionally assigning an available room immediately.",hh.safeExtend({guestName:by,roomId:Le().optional(),notes:Ty.optional()}),t=>this.runFrontDeskMutation("createReservation",()=>this.deps.frontDesk.createReservation({guestName:t.guestName,guests:t.guests,arrivalAt:Yt(t.arrivalAt),departureAt:Yt(t.departureAt),roomId:t.roomId,notes:t.notes}))),this.define("assignReservationRoom","Assign or move a reserved stay to an available guest room.",Se({reservationId:xr,roomId:Le()}),({reservationId:t,roomId:n})=>this.runFrontDeskMutation("assignReservationRoom",()=>this.deps.frontDesk.assignRoom(t,n))),this.define("checkInGuest","Check in a reserved guest to their inspected assigned room, or assign an available room as part of check-in.",Se({reservationId:xr,roomId:Le().optional()}),({reservationId:t,roomId:n})=>this.runFrontDeskMutation("checkInGuest",()=>this.deps.frontDesk.checkIn(t,n))),this.define("checkOutGuest","Check out an in-house guest and mark the vacated room dirty for housekeeping.",Se({reservationId:xr}),({reservationId:t})=>this.runFrontDeskMutation("checkOutGuest",()=>this.deps.frontDesk.checkOut(t))),this.define("cancelReservation","Cancel a reserved stay; an in-house stay must be checked out instead.",Se({reservationId:xr}),({reservationId:t})=>this.runFrontDeskMutation("cancelReservation",()=>this.deps.frontDesk.cancelReservation(t))),this.define("setRoomReadiness","Update housekeeping readiness for an unoccupied guest room: dirty, clean, inspected, or out of service.",Se({roomId:Le(),readiness:wy}),({roomId:t,readiness:n})=>this.runFrontDeskMutation("setRoomReadiness",()=>this.deps.frontDesk.setRoomReadiness(t,n))),this.define("searchAvailability","Find room types with rooms free for every night of a stay (local dates, departure day is not a night), optionally scoped to a building or room type.",ku,t=>this.deps.reservations.searchAvailability(t)),this.define("createHold","Hold specific rooms of a room type for a stay under an idempotency key and TTL; a retry with the same key returns the existing hold.",zu,t=>this.deps.reservations.createHold(t)),this.define("confirmHold","Convert a live hold into a reservation on the same rooms; expired, unknown, or blocked holds are reported in the outcome.",Vu,({holdId:t,reservationId:n})=>this.deps.reservations.confirmHold(t,n)),this.define("blockRoom","Close a room for a date range (repair, deep clean) and list the holds and reservations it affects; nothing is moved automatically.",Hu,async t=>{const{block:n,affected:s}=await this.deps.reservations.blockRoom(t);return{outcome:"completed",block:n,affected:s}}),this.define("reopenRoom","Release a room block so the room is sellable again for those dates.",Gu,({blockId:t})=>this.deps.reservations.reopenRoom(t)),this.define("getAvailabilityCalendar","Tape-chart rows for a building: one row per room, one cell per night with free, hold, reservation, blocked, or unsellable status.",Wu,({buildingId:t,from:n,nights:s})=>this.deps.reservations.getAvailabilityCalendar(t,n,s)),this.define("readRoom","Current sensor readings for a room at the displayed instant (channel, unit, value).",Se({roomId:Le()}),({roomId:t})=>{this.assertRoom({type:"room",id:t},"readRoom");const n=this.deps.timeline.currentFrame();return this.deps.buildingIndex.info({type:"room",id:t}).sensors.map(s=>dh(n,s))}),this.define("queryRoom","History series (default 24 h) for each of a room’s sensors — for trends.",Se({roomId:Le(),hours:et().positive().max(168).optional()}),({roomId:t,hours:n=24})=>{this.assertRoom({type:"room",id:t},"queryRoom");const s=this.deps.buildingIndex.info({type:"room",id:t}).sensors;return this.deps.timeline.history(n).then(r=>s.map(o=>({channel:o.channel,unit:o.unit,points:r.map(a=>Ry(a,o.deviceId))})))}),this.define("listAlarms","Return the alarms currently firing and the configured alarm rules.",Se({}),()=>({active:this.deps.alarms.activeAlarms(),rules:this.deps.alarms.listRules()})),this.define("setAlarmRule","Add or replace an alarm rule (threshold on a sensor channel).",Se({id:Le(),channel:pt(["temperature","humidity","lux","power","occupancy"]),op:pt([">","<"]),threshold:et().finite(),severity:pt(["warning","critical"]),label:Le(),zoneFunction:pt(["guest","lobby","corridor","plant","amenity"]).optional()}),t=>(this.deps.alarms.setRule(t),{ruleId:t.id})),this.define("clearAlarmRule","Remove an alarm rule and clear any alarms it raised.",Se({id:Le()}),({id:t})=>({removed:this.deps.alarms.clearRule(t)})),this.define("listIncidents","List retained operational incidents, optionally filtered by status, severity, floor, room, or source alarm key.",_y,t=>(t.floorId&&this.assertFloor(t.floorId,"listIncidents"),t.roomId&&this.assertRoom({type:"room",id:t.roomId},"listIncidents"),this.deps.incidents.list(t))),this.define("getIncident","Read one incident with its acknowledgement, assignment, escalation, notes, evidence, and audit timeline.",Se({incidentId:Le()}),({incidentId:t})=>{const n=this.deps.incidents.get(t);if(!n)throw this.reject("getIncident","UNKNOWN_INCIDENT",`No incident '${t}' exists.`,"Call listIncidents to discover current incident ids.");return n}),this.define("listCameraCoverage","List privacy-safe shared-area camera coverage. Resident/guest zones are always excluded.",Se({floorId:Le().optional()}),({floorId:t})=>(t&&this.assertFloor(t,"listCameraCoverage"),this.deps.incidents.listCameraCoverage(t))),this.define("acknowledgeIncident","Acknowledge an open incident and record the operator in its audit timeline.",Se({incidentId:Le(),actor:Kn}),({incidentId:t,actor:n})=>this.runIncidentMutation("acknowledgeIncident",()=>this.deps.incidents.acknowledge(t,n))),this.define("assignIncident","Assign an unresolved incident to an operating team or named responder.",Se({incidentId:Le(),assignee:Kn,actor:Kn}),({incidentId:t,assignee:n,actor:s})=>this.runIncidentMutation("assignIncident",()=>this.deps.incidents.assign(t,n,s))),this.define("escalateIncident","Raise an unresolved incident to supervisor or emergency level with a required reason.",Se({incidentId:Le(),level:vy,actor:Kn,reason:_r}),t=>this.runIncidentMutation("escalateIncident",()=>this.deps.incidents.escalate(t.incidentId,t.level,t.actor,t.reason))),this.define("addIncidentNote","Append an attributed note to an incident audit timeline.",Se({incidentId:Le(),author:Kn,text:_r}),({incidentId:t,author:n,text:s})=>this.runIncidentMutation("addIncidentNote",()=>this.deps.incidents.addNote(t,n,s))),this.define("captureIncidentCameraEvidence","Capture a synthetic showcase snapshot from a privacy-safe camera on the incident floor and attach it to the audit record.",Se({incidentId:Le(),cameraId:Le(),actor:Kn,note:_r.optional()}),t=>this.runIncidentMutation("captureIncidentCameraEvidence",()=>this.deps.incidents.captureCameraEvidence(t.incidentId,t.cameraId,t.actor,t.note))),this.define("resolveIncident","Resolve an incident after its source alarm clears, recording the operator and resolution.",Se({incidentId:Le(),actor:Kn,resolution:_r}),({incidentId:t,actor:n,resolution:s})=>this.runIncidentMutation("resolveIncident",()=>this.deps.incidents.resolve(t,n,s))),this.define("setAudio","Toggle audio cues and/or set the cue volume (0–1).",Se({enabled:Ms().optional(),volume:et().min(0).max(1).optional()}),t=>{const n=this.deps.audio.setAudio(t);return this.emitter.emit("audioChanged",n),n}),this.define("listScenes","List the available lighting/HVAC scenes.",Se({}),()=>this.deps.scenes.list()),this.define("applyScene","Apply a named scene — a batch of actuator changes (see listScenes).",Se({scene:Le()}),({scene:t})=>{if(!this.deps.scenes.has(t))throw this.reject("applyScene","UNKNOWN_SCENE",`No scene '${t}'.`,`Available: ${this.deps.scenes.list().map(n=>n.id).join(", ")}`);return this.deps.actuation.executeBatch(this.deps.scenes.plan(t)).then(n=>(n.changed>0&&this.deps.timeline.refresh(),{scene:t,changed:n.changed,rejected:n.rejected,results:n.results.map(({result:s})=>({...s}))}))}),this.define("startTour","Begin the choreographed attract-loop tour (any user input stops it).",Se({}),()=>(this.deps.tour.start(),{running:this.deps.tour.isRunning()})),this.define("stopTour","Stop the attract-loop tour.",Se({}),()=>(this.deps.tour.stop(),{running:this.deps.tour.isRunning()}))}setMode(e){return this.call("setMode",{mode:e})}getMode(){return this.deps.modeManager.getActiveId()??"none"}listModes(){return this.deps.modeManager.list()}setAutoRotate(e,t){return this.call("setAutoRotate",{on:e,speed:t})}orbitTo(e,t,n={}){return this.call("orbitTo",{azimuthDeg:e,elevationDeg:t,...n})}setView(e,t={}){return this.call("setView",{view:e,...t})}zoomTo(e,t={}){return this.call("zoomTo",{target:e,...t})}explode(e,t={}){return this.call("explode",{factor:e,...t})}isolateFloor(e,t={}){return this.call("isolateFloor",{floorId:e,...t})}flattenFloor(e,t,n={}){return this.call("flattenFloor",{floorId:e,style:t,...n})}sliceFloor(e,t={}){return this.call("sliceFloor",{direction:e,...t})}reassemble(e={}){return this.call("reassemble",{...e})}select(e){return this.call("select",e)}clearSelection(){return this.call("clearSelection",{})}inspect(e){return this.runCommand("inspect",{ref:e})}getView(){return this.runCommand("getView",{})}setTimeRange(e){return this.call("setTimeRange",{range:e})}setPlaybackSpeed(e){return this.call("setPlaybackSpeed",{x:e})}setQuality(e){return this.call("setQuality",{tier:e})}setTheme(e){return this.call("setTheme",{theme:e})}enterRoom(e,t={}){return this.call("enterRoom",{roomId:e,...t})}exitRoom(e={}){return this.call("exitRoom",e)}setControl(e,t,n){return this.call("setControl",{roomId:e,kind:t,value:n})}setControls(e,t,n,s={}){return this.call("setControls",{selector:e,kind:t,value:n,...s})}getControls(e){return this.runCommand("getControls",{roomId:e})}getPowerSummary(e){return this.runCommand("getPowerSummary",{floorId:e})}getOperationsSnapshot(e){return this.runCommand("getOperationsSnapshot",{floorId:e})}applyPowerAction(e,t){return this.call("applyPowerAction",{action:e,floorId:t})}getFrontDeskSnapshot(e=void 0){return this.runCommand("getFrontDeskSnapshot",e??{})}searchRoomAvailability(e,t,n){return this.runCommand("searchRoomAvailability",{arrivalAt:e,departureAt:t,guests:n})}createReservation(e){return this.call("createReservation",e)}assignReservationRoom(e,t){return this.call("assignReservationRoom",{reservationId:e,roomId:t})}checkInGuest(e,t){return this.call("checkInGuest",{reservationId:e,roomId:t})}checkOutGuest(e){return this.call("checkOutGuest",{reservationId:e})}cancelReservation(e){return this.call("cancelReservation",{reservationId:e})}setRoomReadiness(e,t){return this.call("setRoomReadiness",{roomId:e,readiness:t})}readRoom(e){return this.runCommand("readRoom",{roomId:e})}queryRoom(e,t){return this.runCommand("queryRoom",{roomId:e,hours:t})}listAlarms(){return this.runCommand("listAlarms",{})}setAlarmRule(e){return this.call("setAlarmRule",e)}clearAlarmRule(e){return this.call("clearAlarmRule",{id:e})}listIncidents(e={}){return this.runCommand("listIncidents",e)}getIncident(e){return this.runCommand("getIncident",{incidentId:e})}listCameraCoverage(e){return this.runCommand("listCameraCoverage",{floorId:e})}acknowledgeIncident(e,t){return this.call("acknowledgeIncident",{incidentId:e,actor:t})}assignIncident(e,t,n){return this.call("assignIncident",{incidentId:e,assignee:t,actor:n})}escalateIncident(e,t,n,s){return this.call("escalateIncident",{incidentId:e,level:t,actor:n,reason:s})}addIncidentNote(e,t,n){return this.call("addIncidentNote",{incidentId:e,author:t,text:n})}captureIncidentCameraEvidence(e,t,n,s){return this.call("captureIncidentCameraEvidence",{incidentId:e,cameraId:t,actor:n,note:s})}resolveIncident(e,t,n){return this.call("resolveIncident",{incidentId:e,actor:t,resolution:n})}setAudio(e){return this.call("setAudio",e)}applyScene(e){return this.call("applyScene",{scene:e})}listScenes(){return this.runCommand("listScenes",{})}startTour(){return this.call("startTour",{})}stopTour(){return this.call("stopTour",{})}dispose(){var e,t,n,s,r,o;this.disposed||(this.disposed=!0,++this.focusVersion,this.commandListeners.clear(),(e=this.offControlChange)==null||e.call(this),this.offControlChange=null,(t=this.offIncidentChange)==null||t.call(this),this.offIncidentChange=null,(n=this.offFrontDeskChange)==null||n.call(this),this.offFrontDeskChange=null,(s=this.offReservationsChange)==null||s.call(this),this.offReservationsChange=null,(r=this.offSourceStatus)==null||r.call(this),this.offSourceStatus=null,(o=this.offActuationProgress)==null||o.call(this),this.offActuationProgress=null,this.deps.alarms.onAlarm(wi,wi),this.deps.viewStateMachine.setViewChangedListener(wi),this.deps.timeline.setChangeListener(wi),this.clearRoomFocus())}getState(){const e=this.deps.timeline.getState();return{mode:this.getMode(),autoRotate:this.deps.cameraDirector.autoRotate,view:this.deps.viewStateMachine.getView(),selection:this.deps.selectionService.current,commandCount:this.log.length,time:e.time,timeMode:e.mode,playbackSpeed:e.playbackSpeed,quality:this.deps.quality.getQuality(),theme:this.deps.theme.getTheme(),focusedRoom:this.focusedRoom,activeAlarms:this.deps.alarms.activeAlarms().length,openIncidents:this.deps.incidents.summary().unresolved,audio:this.deps.audio.getState(),touring:this.deps.tour.isRunning(),dataSource:this.deps.timeline.getSourceStatus(),pendingActuations:this.deps.actuation.pendingCount()}}describe(){return[...this.commands.entries()].map(([e,t])=>({name:e,description:t.description,params:Cy(t.schema)}))}getCommandLog(){return this.log.entries()}on(e,t){return this.disposed?wi:this.emitter.on(e,t)}async call(e,t={}){return this.runCommand(e,t)}onCommand(e){return this.disposed?wi:(this.commandListeners.add(e),()=>this.commandListeners.delete(e))}runCommand(e,t){if(this.disposed)throw new ch("DISPOSED","The interface controller has been disposed.");const n=this.commands.get(e);if(!n)throw this.reject(e,"UNKNOWN_COMMAND",`No command '${e}'.`,`Available: ${[...this.commands.keys()].join(", ")}`);const s=n.schema.safeParse(this.normalizeArgs(e,t));if(!s.success){const a=s.error.issues.map(l=>`${l.path.join(".")||"(args)"}: ${l.message}`).join("; ");throw this.reject(e,"INVALID_ARGS",`Invalid arguments for ${e} — ${a}`,"Call ui.describe() for command schemas.")}const r=kr(s.data),o=n.run(s.data);this.log.record(e,r);for(const a of this.commandListeners)a(e,kr(r));return o}normalizeArgs(e,t){return e!=="setTimeRange"?t:t==="live"||Py(t)?{range:t}:t}define(e,t,n,s){this.commands.set(e,{description:t,schema:n,run:s})}assertFloor(e,t){if(!this.deps.buildingIndex.floor(e))throw this.reject(t,"UNKNOWN_ENTITY",`No floor '${e}' in the building.`,`Valid floors: ${this.deps.buildingIndex.floorIds.join(", ")}`)}floorSliceAnchor(){var n,s;const e=this.deps.viewStateMachine.getView();if(e.kind==="ISOLATED"||e.kind==="FLATTENED")return e.floorId;if(this.focusedRoom)return(n=this.deps.buildingIndex.room(this.focusedRoom))==null?void 0:n.floor.id;const t=this.deps.selectionService.current;if((t==null?void 0:t.type)==="floor")return t.id;if((t==null?void 0:t.type)==="room")return(s=this.deps.buildingIndex.room(t.id))==null?void 0:s.floor.id}leaveRoomForNavigation(){++this.focusVersion,this.clearRoomFocus()}clearRoomFocus(e={}){var n;const t=this.focusedRoom!==null;return t&&(this.focusedRoom=null,this.emitter.emit("roomFocusChanged",{roomId:null})),(n=this.focusRestore)==null||n.call(this),this.focusRestore=null,e.abandonCamera!==!1&&this.deps.cameraDirector.abandonRoomFocus(),t}assertRoom(e,t){if(e.type!=="room"||!this.deps.buildingIndex.room(e.id))throw this.reject(t,"UNKNOWN_ENTITY",`No room '${e.id}' in the building.`,`Valid floors: ${this.deps.buildingIndex.floorIds.join(", ")}`)}assertEntity(e,t){if(!(e.type==="building"||e.type==="room"&&!!this.deps.buildingIndex.room(e.id)||e.type==="floor"&&!!this.deps.buildingIndex.floor(e.id)))throw this.reject(t,"UNKNOWN_ENTITY",`No ${e.type} '${e.id}' in the building.`,`Valid floors: ${this.deps.buildingIndex.floorIds.join(", ")}`)}runIncidentMutation(e,t){try{return t()}catch(n){throw n instanceof Ri?this.reject(e,n.code,n.message,n.hint):n}}runFrontDeskMutation(e,t){try{return t()}catch(n){throw n instanceof Mt?this.reject(e,n.code,n.message,n.hint):n}}reject(e,t,n,s){const r=new ch(t,n,s);return this.emitter.emit("commandRejected",{command:e,error:{code:t,message:n,hint:s}}),r}}function dh(i,e){const t=i.reading(e.deviceId);return{channel:e.channel,unit:e.unit,value:(t==null?void 0:t.value)??null,quality:(t==null?void 0:t.quality)??(t?"good":"unknown"),observedAt:(t==null?void 0:t.observedAt)??null,receivedAt:(t==null?void 0:t.receivedAt)??null}}function Ry(i,e){const t=i.reading(e);return!t||t.quality!==void 0&&t.quality!=="good"?null:t.value}function Cy(i){try{return Xu(i)}catch{return}}function Yt(i){return typeof i=="number"?i:Date.parse(i)}function Py(i){if(!i||typeof i!="object"||Array.isArray(i))return!1;const e=i;return!Object.hasOwn(e,"range")&&(Object.hasOwn(e,"from")||Object.hasOwn(e,"to"))}function Iy(i,e){return e==="light"?i.state.light:e==="hvac"?i.state.hvacSetpoint:i.state.blind}function wi(){}class Dy{constructor(){T(this,"handlers",new Map)}on(e,t){let n=this.handlers.get(e);return n||(n=new Set,this.handlers.set(e,n)),n.add(t),()=>n.delete(t)}emit(e,t){var n;(n=this.handlers.get(e))==null||n.forEach(s=>s(t))}clear(){this.handlers.clear()}}function xu(i){return i.map(e=>({name:e.name,description:e.description,input_schema:Ly(e.params)?e.params:{type:"object",properties:{}}}))}function Ly(i){return typeof i=="object"&&i!==null}async function Ny(i,e,t={}){var s;const n=[];for(let r=0;r<e.length;r++){const o=e[r];try{await i.call(o.name,o.args)}catch(a){n.push({name:o.name,message:a instanceof Error?a.message:String(a)})}(s=t.onStep)==null||s.call(t,o,r)}return{steps:e.length,rejected:n}}const fh=Date.UTC(2026,6,17,5,0,0),ph=[{name:"setAutoRotate",args:{on:!1}},{name:"setTimeRange",args:{from:fh,to:fh}},{name:"setMode",args:{mode:"electricity"}},{name:"orbitTo",args:{azimuthDeg:120,elevationDeg:35,durationMs:1}},{name:"explode",args:{factor:1,durationMs:1}},{name:"setMode",args:{mode:"environment"}},{name:"isolateFloor",args:{floorId:"F4",durationMs:1}},{name:"setMode",args:{mode:"occupancy"}},{name:"flattenFloor",args:{floorId:"F4",style:"2d",durationMs:1}},{name:"reassemble",args:{durationMs:1}},{name:"select",args:{ref:{type:"room",id:"F4-R03"}}}];class ul{constructor(e,t,n=!1){T(this,"disposed",!1);T(this,"onMessage");this.ui=e,this.socket=t,this.closeSocketOnDispose=n,this.onMessage=s=>void this.handle(s.data),t.onmessage=this.onMessage}static connect(e,t){return new ul(e,new WebSocket(t),!0)}dispose(){var e,t;this.disposed||(this.disposed=!0,this.socket.onmessage===this.onMessage&&(this.socket.onmessage=null),this.closeSocketOnDispose&&((t=(e=this.socket).close)==null||t.call(e)))}async handle(e){if(this.disposed)return;let t;try{t=JSON.parse(e)}catch{return this.send({error:{code:"BAD_JSON",message:"payload was not valid JSON"}})}if(t.name==="__list_tools")return this.send({id:t.id,result:xu(this.ui.describe())});try{const n=await this.ui.call(t.name,t.args??{});this.send({id:t.id,result:n??null})}catch(n){const s=n;this.send({id:t.id,error:{code:s.code??"ERROR",message:s.message??String(n),hint:s.hint}})}}send(e){this.disposed||this.socket.send(JSON.stringify(e))}}const Uy=new Set(["inspect","getView","getControls","getPowerSummary","getOperationsSnapshot","readRoom","queryRoom","listAlarms","listIncidents","getIncident","listCameraCoverage","getFrontDeskSnapshot","searchRoomAvailability","searchAvailability","getAvailabilityCalendar","listScenes"]),Fy=new Set(["setTheme"]),Oy=new Set(["createHold","confirmHold","blockRoom","reopenRoom"]);class By{constructor(e,t="holo-bms",n=r=>new BroadcastChannel(r),s={}){T(this,"ch");T(this,"applying",!1);T(this,"off");T(this,"source",zy());T(this,"peers",new Set);T(this,"leader",!0);T(this,"leadershipListeners",new Set);T(this,"localOnly");this.ui=e,this.localOnly=new Set([...Fy,...s.localOnly??[]]),this.ch=n(t),this.ch.onmessage=r=>this.receive(r.data),this.off=e.onCommand((r,o)=>{this.applying||Uy.has(r)||this.localOnly.has(r)||this.ch.postMessage({type:"command",source:this.source,name:r,args:o})}),this.ch.postMessage({type:"hello",source:this.source})}isLeader(){return this.leader}onLeadershipChange(e){return this.leadershipListeners.add(e),e(this.leader),()=>this.leadershipListeners.delete(e)}dispose(){this.ch.postMessage({type:"goodbye",source:this.source}),this.off(),this.leadershipListeners.clear(),this.ch.close()}receive(e){if(!(!ky(e)||e.source===this.source))switch(e.type){case"hello":this.addPeer(e.source),this.ch.postMessage({type:"present",source:this.source});return;case"present":this.addPeer(e.source);return;case"goodbye":this.peers.delete(e.source)&&this.updateLeadership();return;case"command":this.applying=!0;let t;try{t=this.ui.call(e.name,e.args)}finally{this.applying=!1}t.catch(()=>{})}}addPeer(e){this.peers.has(e)||(this.peers.add(e),this.updateLeadership())}updateLeadership(){const e=this.source===[...this.peers,this.source].sort()[0];if(e!==this.leader){this.leader=e;for(const t of this.leadershipListeners)t(e)}}}function ky(i){if(!i||typeof i!="object")return!1;const e=i;return typeof e.source!="string"||typeof e.type!="string"?!1:e.type==="command"?typeof e.name=="string":e.type==="hello"||e.type==="present"||e.type==="goodbye"}function zy(){var e,t;return((t=(e=globalThis.crypto)==null?void 0:e.randomUUID)==null?void 0:t.call(e))??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}function Vy(i){return typeof i.onFrame=="function"}function Hy(i){return typeof i.sampleAsync=="function"}const Gy={temperature:{unit:"°C",domain:[18,34],label:"Temperature"},humidity:{unit:"%RH",domain:[30,90],label:"Humidity"},lux:{unit:"lx",domain:[0,1e3],label:"Illuminance"},power:{unit:"kW",domain:[0,6],label:"Power"},occupancy:{unit:"ppl",domain:[0,4],label:"Occupancy"}};function yu(i){return[...new Set(i)].map(e=>{const t=Gy[e];return{channel:e,unit:t.unit,domain:[...t.domain],label:t.label}})}const Wy=36e5;class Xy{constructor(e,t){T(this,"sensors",[]);T(this,"lon");this.controls=t,this.lon=e.location.lon;for(const n of e.floors)for(const s of n.zones)for(const r of s.rooms)for(const o of r.sensors)this.sensors.push({deviceId:o.deviceId,channel:o.channel,unit:o.unit,roomId:r.id,zoneFn:s.function,seed:eS(o.deviceId)})}capabilities(){return yu(this.sensors.map(e=>e.channel))}sample(e,t){const n=new Set(e),s=[];for(const r of this.sensors)n.has(r.channel)&&s.push({deviceId:r.deviceId,channel:r.channel,unit:r.unit,value:tS(this.valueFor(r,t))});return zn(t,s)}async query(e,t,n=6e4,s){const r=[];for(let o=t.from;o<=t.to;o+=n)qy(s),r.push(this.sample(e,o));return r}solarHour(e){return((e/Wy%24+this.lon/15)%24+24)%24}valueFor(e,t){var o;const n=this.solarHour(t),s=.5+.5*Math.sin(t/6e5+e.seed),r=(o=this.controls)==null?void 0:o.call(this,e.roomId);switch(e.channel){case"temperature":{const a=(r==null?void 0:r.blind)??0,l=zr(n)*Ky(e.zoneFn)*(1-a*.75),c=yr(n)-Yy(e.zoneFn)+l+(s-.5)*1.2;return r?c*.4+r.hvacSetpoint*.6:c}case"humidity":return ka(78-(yr(n)-24)*3+(s-.5)*6,30,95);case"lux":{const a=zr(n)*$y(e.zoneFn)*(.85+.3*s),l=r?1-.85*r.blind:1,c=r!=null&&r.light?120:0;return Math.max(0,a*l+c)}case"occupancy":return Su(e.zoneFn,n,e.seed);case"power":{const a=Zy(e.zoneFn,n,yr(n),e.seed,s);return r?Qy(a,r,e.zoneFn,n,yr(n)):a}}}}function qy(i){if(i!=null&&i.aborted)throw i.reason??new DOMException("History query was cancelled.","AbortError")}function yr(i){return 28+5*Math.sin(2*Math.PI*(i-9)/24)}function zr(i){return i<=6||i>=18?0:Math.sin(Math.PI*(i-6)/12)}function Yy(i){switch(i){case"guest":return 4;case"lobby":case"amenity":return 5;case"corridor":return 2;case"plant":return-2}}function $y(i){switch(i){case"amenity":return 900;case"lobby":return 700;case"guest":return 500;case"corridor":return 300;case"plant":return 150}}function Ky(i){switch(i){case"guest":return 1.4;case"lobby":return 1;case"amenity":return .9;case"corridor":return .35;case"plant":return .2}}function Su(i,e,t){const n=.5+.5*Math.sin(t*12.9898);switch(i){case"guest":{const s=e<8||e>=22?1:e>=18?.6:.15;return n>.45?Sr(s*(1+n)):0}case"lobby":return Sr(ds(e,10,6)*4+ds(e,18,4)*2);case"amenity":return Sr(ds(e,8,3)*2+ds(e,19,4)*3);case"corridor":return Sr(ds(e,9,8)*1.5);case"plant":return 0}}function Zy(i,e,t,n,s){const r=Math.max(0,t-24)*jy(i),o=Su(i,e,n);switch(i){case"guest":return Ci(.15+r+o*.25+s*.1);case"lobby":return Ci(1.2+r+o*.15+s*.3);case"amenity":return Ci(.8+r+o*.3+s*.4);case"corridor":return Ci(.3+r*.3+s*.05);case"plant":return Ci(2.5+r*1.5+zr(e)*.5+s*.6)}}function jy(i){switch(i){case"guest":return .08;case"lobby":case"amenity":return .15;case"corridor":return .04;case"plant":return .4}}function Qy(i,e,t,n,s){let r=i;if(e.light||(r*=1-Jy(t)),t==="guest"||t==="lobby"||t==="amenity"){const o=ka((s-24)/10,0,1.2),a=e.hvacSetpoint-24;r*=ka(1-a*.055*o,.72,1.3)}return t==="guest"&&(r*=1-zr(n)*e.blind*.14),Ci(Math.max(.03,r))}function Jy(i){switch(i){case"guest":return .32;case"lobby":return .25;case"amenity":return .28;case"corridor":return .22;case"plant":return 0}}function ds(i,e,t){const n=(i-e)/t;return Math.exp(-.5*n*n)}function eS(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return(e>>>0)%1e3/1e3}function ka(i,e,t){return i<e?e:i>t?t:i}const tS=i=>Math.round(i*100)/100,Sr=i=>Math.round(i*10)/10,Ci=i=>Math.round(i*100)/100;class nS{constructor(e,t,n,s=_u){T(this,"fallback");T(this,"worker",null);T(this,"nextRequestId",1);T(this,"pending",new Map);T(this,"alarmSnapshots",new WeakMap);T(this,"alarmRulesRevision",0);T(this,"disposed",!1);T(this,"onWorkerMessage",e=>{const t=e.data,n=this.pending.get(t.requestId);if(!n)return;if(this.pending.delete(t.requestId),t.type==="error"){n.resolve(this.fallback.sample(n.channels,n.time)),this.disableWorker();return}const s=zn(t.time,t.readings);if(t.alarmRulesRevision===this.alarmRulesRevision){const r=t.activeAlarms.map(o=>({...o}));this.alarmSnapshots.set(s,r)}n.resolve(s)});T(this,"onWorkerError",()=>{this.disableWorker()});if(this.fallback=new Xy(e,t),!(typeof Worker>"u"))try{const r=new Worker(new URL("/ihapm-bms-showcase/assets/mockTelemetry.worker--MrDRGic.js",import.meta.url),{type:"module",name:"ihapm-telemetry"});this.worker=r,r.addEventListener("message",this.onWorkerMessage),r.addEventListener("error",this.onWorkerError),this.post({type:"init",building:e,controls:n.map(({roomId:o,state:a})=>({roomId:o,state:a})),alarmRules:s.map(o=>({...o}))})}catch{this.worker=null}}capabilities(){return this.fallback.capabilities()}sample(e,t){return this.fallback.sample(e,t)}query(e,t,n,s){return this.fallback.query(e,t,n,s)}sampleAsync(e,t){return!this.worker||this.disposed?Promise.resolve(this.fallback.sample(e,t)):new Promise(n=>{const s=this.nextRequestId++;this.pending.set(s,{channels:[...e],time:t,resolve:n});try{this.post({type:"sample",requestId:s,channels:[...e],time:t,alarmRulesRevision:this.alarmRulesRevision})}catch{const r=this.pending.get(s);this.pending.delete(s),this.disableWorker(),n(this.fallback.sample((r==null?void 0:r.channels)??e,(r==null?void 0:r.time)??t))}})}getExecutionMode(){return this.worker?"worker":"main"}executionMode(){return this.getExecutionMode()}updateControl(e){!this.worker||this.disposed||this.post({type:"control",roomId:e.roomId,state:{...e.state}})}setAlarmRules(e){!this.worker||this.disposed||(this.alarmRulesRevision+=1,this.post({type:"alarmRules",rules:e.map(t=>({...t}))}))}takeAlarmSnapshot(e){const t=this.alarmSnapshots.get(e);return t?(this.alarmSnapshots.delete(e),t.map(n=>({...n}))):null}dispose(){this.disposed||(this.disposed=!0,this.disableWorker())}post(e){var t;(t=this.worker)==null||t.postMessage(e)}disableWorker(){const e=this.worker;this.worker=null,e&&(e.removeEventListener("message",this.onWorkerMessage),e.removeEventListener("error",this.onWorkerError),e.terminate());for(const t of this.pending.values())t.resolve(this.fallback.sample(t.channels,t.time));this.pending.clear()}}const iS=Se({deviceId:Le(),channel:xh,unit:Le(),value:et().finite(),observedAt:et().finite().optional(),receivedAt:et().finite().optional(),quality:pt(["good","uncertain","bad","stale","unknown"]).optional(),sourceId:Le().optional(),sequence:et().finite().optional()}),sS=Se({time:et().finite(),readings:yh(iS)}),rS=Se({channel:xh,unit:Le(),domain:qu([et().finite(),et().finite()]),label:Le()}),oS=Se({sourceId:Le(),kind:pt(["simulation","replay","websocket","mqtt","custom"]),state:pt(["idle","connecting","live","degraded","stale","offline","error"]),label:Le(),lastMessageAt:et().finite().nullable(),stalePoints:et().int().nonnegative(),message:Le().optional()}),aS=Va("type",[Se({type:mt("hello"),protocol:mt(1),capabilities:yh(rS)}),Se({type:mt("frame"),frame:sS}),Se({type:mt("status"),status:oS}),Se({type:mt("control"),id:Le(),roomId:Le(),kind:pt(["light","hvac","blind"]),value:Yi([Ms(),et().finite()]),accepted:mt(!0)}),Se({type:mt("error"),code:Le(),message:Le(),id:Le().optional()})]);class Mu{constructor(e){T(this,"value");T(this,"listeners",new Set);this.value=Go(e)}status(){return Go(this.value)}onStatus(e){return this.listeners.add(e),()=>this.listeners.delete(e)}update(e){const t={...this.value,...e};if(!lS(this.value,t)){this.value=t;for(const n of this.listeners)n(Go(t))}}dispose(){this.listeners.clear()}}function Ho(i){if(typeof i!="object"||i===null)return!1;const e=i;return typeof e.status=="function"&&typeof e.onStatus=="function"}function lS(i,e){return i.sourceId===e.sourceId&&i.kind===e.kind&&i.state===e.state&&i.label===e.label&&i.lastMessageAt===e.lastMessageAt&&i.stalePoints===e.stalePoints&&i.message===e.message}function Go(i){return{...i}}class cS{constructor(e,t,n={}){T(this,"socketFactory");T(this,"reconnectMs");T(this,"maxCachedFrames");T(this,"socket",null);T(this,"reconnectTimer");T(this,"disposed",!1);T(this,"connected",!1);T(this,"capabilitiesValue");T(this,"frames",[]);T(this,"frameListeners",new Set);T(this,"actuatorStateListeners",new Set);T(this,"pendingActuations",new Map);T(this,"controlTimeoutMs");T(this,"sourceStatus");this.url=e,this.capabilitiesValue=yu(t.floors.flatMap(s=>s.zones.flatMap(r=>r.rooms.flatMap(o=>o.sensors.map(a=>a.channel))))),this.socketFactory=n.webSocketFactory??(s=>new WebSocket(s)),this.reconnectMs=n.reconnectMs??1500,this.maxCachedFrames=Math.max(2,n.maxCachedFrames??1440),this.controlTimeoutMs=Math.max(250,n.controlTimeoutMs??5e3),this.sourceStatus=new Mu({sourceId:e,kind:"websocket",state:"idle",label:"Realtime BMS",lastMessageAt:null,stalePoints:0})}capabilities(){return this.capabilitiesValue.map(e=>({...e,domain:[...e.domain]}))}connect(){if(this.disposed||this.socket)return;this.sourceStatus.update({state:"connecting",message:"Connecting to realtime BMS."});let e;try{e=this.socketFactory(this.url)}catch{this.sourceStatus.update({state:"error",message:"Could not open the realtime BMS socket."}),this.scheduleReconnect();return}this.socket=e,e.onopen=()=>{this.socket!==e||this.disposed||(this.connected=!0,this.sourceStatus.update({state:"connecting",message:"Socket connected; waiting for telemetry."}),this.sendNow({type:"hello",protocol:1}),this.sendNow({type:"subscribe"}))},e.onmessage=t=>this.receive(e,t.data),e.onerror=()=>{this.sourceStatus.update({state:"error",message:"Realtime BMS socket error."})},e.onclose=()=>{this.socket===e&&(this.socket=null,this.connected=!1,this.finishAllPending("offline","BMS_DISCONNECTED","Realtime BMS disconnected before confirmation."),this.sourceStatus.update({state:"offline",message:"Realtime BMS disconnected."}),this.scheduleReconnect())}}dispose(){if(this.disposed)return;this.disposed=!0,globalThis.clearTimeout(this.reconnectTimer),this.reconnectTimer=void 0;const e=this.socket;this.socket=null,this.connected=!1,e&&(e.onopen=null,e.onmessage=null,e.onerror=null,e.onclose=null,e.close()),this.frameListeners.clear(),this.actuatorStateListeners.clear(),this.finishAllPending("offline","BMS_DISPOSED","Realtime BMS connection was closed."),this.sourceStatus.update({state:"idle",message:"Realtime BMS connection closed."}),this.sourceStatus.dispose()}onFrame(e){return this.frameListeners.add(e),()=>this.frameListeners.delete(e)}onState(e){return this.actuatorStateListeners.add(e),()=>this.actuatorStateListeners.delete(e)}execute(e,t){return this.disposed||!this.connected||!this.socket||t!=null&&t.aborted?Promise.resolve(Fn(e,"offline","BMS_OFFLINE","Realtime BMS is not connected.")):this.pendingActuations.has(e.commandId)?Promise.resolve(Fn(e,"rejected","DUPLICATE_COMMAND_ID",`Actuation command '${e.commandId}' is already pending.`)):new Promise(n=>{const s=globalThis.setTimeout(()=>{this.finishPending(e.commandId,Fn(e,"timeout","BMS_TIMEOUT","Realtime BMS did not confirm the command in time."))},this.controlTimeoutMs),r={command:{...e},resolve:n,timeout:s,signal:t};t&&(r.abort=()=>this.finishPending(e.commandId,Fn(e,"timeout","COMMAND_ABORTED","The actuation request was cancelled.")),t.addEventListener("abort",r.abort,{once:!0})),this.pendingActuations.set(e.commandId,r),this.sendNow({type:"control",id:e.commandId,roomId:e.roomId,kind:e.kind,value:e.value,actor:e.actor,reason:e.reason,force:e.force,expiresAt:e.expiresAt})||this.finishPending(e.commandId,Fn(e,"offline","BMS_SEND_FAILED","Could not send the command to the realtime BMS."))})}status(){return this.sourceStatus.status()}onStatus(e){return this.sourceStatus.onStatus(e)}sample(e,t){const n=hS(this.frames,t);return n?mh(n,e,t):zn(t,[])}query(e,t,n=6e4,s){if(s!=null&&s.aborted)return Promise.reject(s.reason??new DOMException("History query was cancelled.","AbortError"));const r=Math.max(1,n),o=new Map;for(const l of this.frames){if(l.time<t.from||l.time>t.to)continue;const c=Math.floor((l.time-t.from)/r),h=o.get(c);(!h||l.time>h.time)&&o.set(c,l)}const a=[...o.values()].sort((l,c)=>l.time-c.time).map(l=>mh(l,e,l.time));return Promise.resolve(a)}receive(e,t){if(this.socket!==e||this.disposed||typeof t!="string")return;let n;try{n=JSON.parse(t)}catch{return}const s=aS.safeParse(n);if(s.success)switch(s.data.type){case"hello":this.capabilitiesValue=s.data.capabilities.map(r=>({...r,domain:[...r.domain]})),this.sourceStatus.update({state:"connecting",lastMessageAt:Date.now(),message:"Capabilities received; waiting for telemetry."});return;case"frame":{const r=zn(s.data.frame.time,s.data.frame.readings.map(o=>({...o})));this.frames.push(r),this.frames.length>this.maxCachedFrames&&this.frames.splice(0,this.frames.length-this.maxCachedFrames),this.sourceStatus.update({state:"live",lastMessageAt:Date.now(),message:void 0});for(const o of this.frameListeners)o(uS(r));return}case"status":this.sourceStatus.update({...s.data.status});return;case"control":{const r={roomId:s.data.roomId,kind:s.data.kind,value:s.data.value,observedAt:Date.now(),commandId:s.data.id},o=this.pendingActuations.get(s.data.id);if(o){o.command.roomId!==s.data.roomId||o.command.kind!==s.data.kind?this.finishPending(s.data.id,Fn(o.command,"rejected","ACK_MISMATCH","Realtime BMS acknowledgement did not match the requested actuator.")):this.finishPending(s.data.id,{commandId:s.data.id,roomId:s.data.roomId,kind:s.data.kind,value:s.data.value,outcome:"confirmed",confirmedAt:Date.now()});return}for(const a of this.actuatorStateListeners)a({...r});return}case"error":{const r=s.data.id?this.pendingActuations.get(s.data.id):void 0;r&&this.finishPending(s.data.id,Fn(r.command,"rejected",s.data.code,s.data.message));return}}}sendNow(e){if(!this.socket||!this.connected)return!1;try{return this.socket.send(JSON.stringify(e)),!0}catch{return!1}}scheduleReconnect(){this.disposed||this.reconnectMs<=0||this.reconnectTimer!==void 0||(this.reconnectTimer=globalThis.setTimeout(()=>{this.reconnectTimer=void 0,this.connect()},this.reconnectMs))}finishPending(e,t){const n=this.pendingActuations.get(e);n&&(this.pendingActuations.delete(e),globalThis.clearTimeout(n.timeout),n.signal&&n.abort&&n.signal.removeEventListener("abort",n.abort),n.resolve({...t}))}finishAllPending(e,t,n){for(const s of[...this.pendingActuations.values()])this.finishPending(s.command.commandId,Fn(s.command,e,t,n))}}function Fn(i,e,t,n){return{commandId:i.commandId,roomId:i.roomId,kind:i.kind,value:i.value,outcome:e,confirmedAt:e==="confirmed"?Date.now():void 0,code:t,message:n}}function hS(i,e){let t,n=1/0;for(const s of i){const r=Math.abs(s.time-e);r<n&&(t=s,n=r)}return t}function mh(i,e,t){const n=new Set(e);return zn(t,i.readings.filter(s=>n.has(s.channel)).map(s=>({...s})))}function uS(i){return zn(i.time,i.readings.map(e=>({...e})))}function dS(i){return za(i,"updateControl")}function fS(i){return za(i,"setAlarmRules")&&za(i,"takeAlarmSnapshot")}function za(i,e){return typeof i=="object"&&i!==null&&typeof i[e]=="function"}const pS={id:"default",name:"Hologram",description:"Idle showroom hologram — slow rotation, ambient particles, no data overlay.",accent:"#36e6ff",channels:[]},mS={id:"electricity",name:"Electricity",description:"Live power draw — rooms tinted by kW, per-floor bars, pulsing risers.",accent:"#aef049",channels:["power"]},gS={id:"environment",name:"Environment",description:"Heat, humidity & sunlight — temperature tint, humidity fog, sun from real geo + time.",accent:"#ffb020",channels:["temperature","humidity","lux"]},vS={id:"occupancy",name:"Occupancy",description:"Live room occupancy — headcount tint, occupant dots, per-floor ring gauges.",accent:"#ff45c8",channels:["occupancy"]};class _S{constructor(){T(this,"disposed",!1)}execute(e,t){const n=this.disposed||(t==null?void 0:t.aborted);return Promise.resolve({commandId:e.commandId,roomId:e.roomId,kind:e.kind,value:e.value,outcome:n?"offline":"confirmed",confirmedAt:n?void 0:Date.now(),code:n?"LOCAL_ACTUATION_UNAVAILABLE":void 0,message:n?"The local simulation actuator is unavailable.":void 0})}onState(e){return()=>{}}dispose(){this.disposed=!0}}class xS{execute(e){return Promise.resolve({commandId:e.commandId,roomId:e.roomId,kind:e.kind,value:e.value,outcome:"offline",code:"ACTUATION_NOT_CONFIGURED",message:"No authoritative actuator adapter is configured for this data source."})}onState(e){return()=>{}}dispose(){}}function Wo(i){if(typeof i!="object"||i===null)return!1;const e=i;return typeof e.execute=="function"&&typeof e.onState=="function"&&typeof e.dispose=="function"}const yS=(i,e)=>{i?e.select({ref:i}):e.clearSelection()};function LS(i,e,t={}){const n=SS(Yu(e)),s=new j_(n),r=new Ix(n),o=new Nx(n,r),a=t.sharedReservations&&!t.reservations?typeof t.sharedReservations=="object"?t.sharedReservations:{}:null,l=a!=null&&a.pairingCode?$u(a.pairingCode,{brokerUrl:a.brokerUrl}):null,c=q=>{const pe=ju(q,{channel:a==null?void 0:a.channel});return l==null||l.attach(pe,q),pe},h=a?c(a.inventoryKey??Ku):null,u=t.reservations??new br(n,h?{store:h}:{}),d=new Xx(n,{reservations:u instanceof br?u:void 0}),p=new ny(n,r,n.location.lon),g=new I0(i,t.initialQuality??"high"),v=[];if(a&&h&&u instanceof br){const q=u,pe=c(a.ledgerKey??Zu);let D=()=>{};ts(async()=>{const{PublicReservationLedger:he,toFrontDeskReservation:V}=await import("./PublicReservationLedger-DPjdAxlt.js");return{PublicReservationLedger:he,toFrontDeskReservation:V}},__vite__mapDeps([0,1])).then(({PublicReservationLedger:he,toFrontDeskReservation:V})=>{if(Fe)return;const j=new he(pe),me=()=>{for(const He of j.list()){const ot=V(He,q.buildingId);if(ot)try{d.importReservation(ot)}catch{}}};me();const ge=j.onChange(me);D=()=>{ge(),j.dispose()}}),v.push(h.onRemote(he=>{he===null&&window.location.reload()})),v.push(()=>{D(),q.dispose(),h.dispose(),pe.dispose()})}const m=new Set,f=q=>{const pe=g.registerUpdate(q);return v.push(pe),pe},{root:A,floorGroups:E}=O0(n,g.getHoloLuminanceUniform());g.scene.add(A);const S=new Ot().setFromObject(A).getSize(new R),B=Math.hypot(S.x,S.z)/2+3,I=new Y0(B);g.scene.add(I.group),f((q,pe)=>I.update(q,pe));const P=new J0;f(()=>P.update(performance.now())),g.setActivityProbe(()=>P.hasActive||g.controls.autoRotate),g.controls.target.set(0,S.y*.45,0);const U=new tn(B*2.7,ht.degToRad(68),ht.degToRad(35));g.camera.position.setFromSpherical(U).add(g.controls.target),g.camera.lookAt(g.controls.target);const M=new nx(g.camera,g.controls,P),x=new sn;x.name="modeOverlay",Lt(x),g.scene.add(x);const C=new Dy;if(t.telemetry&&(t.provider||t.realtimeUrl))throw new Error("Configure HoloOptions.telemetry, provider, or realtimeUrl—not more than one.");const W=t.telemetry?null:t.provider??(t.realtimeUrl?new cS(t.realtimeUrl,n):new nS(n,q=>{var pe;return(pe=r.get(q))==null?void 0:pe.state},r.list())),O=t.telemetry??{snapshot:W,history:W,stream:W&&Vy(W)?W:void 0,asyncSnapshot:W&&Hy(W)?W:void 0,status:Ho(W)?W:void 0},H=W??O.snapshot,J=O.status??(Ho(O.stream)?O.stream:void 0)??(Ho(O.snapshot)?O.snapshot:void 0),X=!t.sourceStatus&&!J?new Mu({sourceId:t.provider||t.telemetry?"custom-provider":"seeded-simulation",kind:t.provider||t.telemetry?"custom":"simulation",state:"live",label:t.provider||t.telemetry?"Custom provider":"Seeded simulation",lastMessageAt:Date.now(),stalePoints:0}):null,ie=t.sourceStatus??J??X,G=n.floors.flatMap(q=>q.zones.flatMap(pe=>pe.rooms.flatMap(D=>D.sensors.map(he=>({...he}))))),le=new Rx({...O,status:ie,asyncSnapshot:O.stream?void 0:O.asyncSnapshot},{points:G});X&&v.push(()=>X.dispose());const ve=Wo(W)?W:Wo(O.stream)?O.stream:Wo(O.snapshot)?O.snapshot:null,Te=ie.status().kind==="simulation"||ie.status().kind==="replay",Be=!t.actuation&&!ve?Te?new _S:new xS:null,Ze=t.actuation??ve??Be,K=new Dx(r,Ze);if(v.push(()=>K.dispose()),Be&&v.push(()=>Be.dispose()),f(()=>le.tick()),O.stream)v.push(()=>O.stream.dispose());else if(dS(H)){v.push(r.onChange(pe=>H.updateControl(pe)));const q=H;typeof q.dispose=="function"&&v.push(()=>{var pe;return(pe=q.dispose)==null?void 0:pe.call(q)})}const ee=new sx(E,A),Me=new cx(ee,M,P,A);ee.setLowDetail(g.getQuality()==="low"),Me.setRenderQuality(g.getQuality());const ce=Math.hypot(S.x,S.z),Ne=ce*1.05,ke=ce*1.25;f(()=>{const pe=ee.getRoomLod()==="summary"?Ne:ke,D=g.camera.position.distanceTo(g.controls.target),he=g.getQuality()==="low"&&Me.getView().kind==="ASSEMBLED"&&D>pe;ee.setRoomLod(he?"summary":"rooms")});const Oe=new px(ee),Ye=new $0(ee,r);g.scene.add(Ye.group),f(()=>Ye.update()),v.push(()=>Ye.dispose());const Z=new Ox(n),re=new kx(n);fS(H)?(H.setAlarmRules(Z.listRules()),v.push(Z.onRulesChanged(q=>H.setAlarmRules(q))),v.push(le.addFrameListener(q=>{const pe=H.takeAlarmSnapshot(q);pe?Z.reconcileSnapshot(pe):Z.evaluate(q)}))):v.push(le.addFrameListener(q=>Z.evaluate(q)));const w=new j0(ee,Z);g.scene.add(w.group),f((q,pe)=>w.update(pe));let Re=t.initialTheme??"dark";const te=q=>(Re=q,typeof document<"u"&&(document.documentElement.dataset.theme=q),g.setTheme(q),q);te(Re);const _e=new hy,oe=new ix({building:n,buildingIndex:s,sceneIndex:ee,overlay:x,cameraDirector:M,timeline:le,registerSceneUpdate:f,emitLegend:q=>C.emit("legendChanged",{spec:q}),setFog:q=>g.setFogDensity(q)});oe.registerLazy(pS,async()=>{const{DefaultMode:q}=await ts(async()=>{const{DefaultMode:pe}=await import("./DefaultMode-BMVAm_rA.js");return{DefaultMode:pe}},__vite__mapDeps([2,1]));return new q}),oe.registerLazy(mS,async()=>{const{ElectricityMode:q}=await ts(async()=>{const{ElectricityMode:pe}=await import("./ElectricityMode-CYNmmIy5.js");return{ElectricityMode:pe}},__vite__mapDeps([3,4,1]));return new q}),oe.registerLazy(gS,async()=>{const{EnvironmentMode:q}=await ts(async()=>{const{EnvironmentMode:pe}=await import("./EnvironmentMode-DQ_O8-ik.js");return{EnvironmentMode:pe}},__vite__mapDeps([5,4,1]));return new q}),oe.registerLazy(vS,async()=>{const{OccupancyMode:q}=await ts(async()=>{const{OccupancyMode:pe}=await import("./OccupancyMode-DdC56PQy.js");return{OccupancyMode:pe}},__vite__mapDeps([6,4,1]));return new q});let Ee=null;const ue=new Ay({modeManager:oe,cameraDirector:M,viewStateMachine:Me,selectionService:Oe,sceneIndex:ee,buildingIndex:s,timeline:le,quality:{setQuality:q=>g.setQuality(q),getQuality:()=>g.getQuality()},audio:_e,theme:{setTheme:te,getTheme:()=>Re},tour:{start:()=>Ee==null?void 0:Ee.start(),stop:()=>Ee==null?void 0:Ee.stop(),isRunning:()=>(Ee==null?void 0:Ee.isRunning())??!1},controls:r,actuation:K,power:o,alarms:Z,incidents:re,frontDesk:d,reservations:u,scenes:p,emitter:C});g.onQualityChange((q,pe)=>{ee.setLowDetail(q==="low"),q!=="low"&&ee.setRoomLod("rooms"),Me.setRenderQuality(q),C.emit("qualityChanged",{tier:q,auto:pe})});let b=null,_=null;const F=()=>{ee.setRoomLodExceptions([b,_].filter(q=>q!==null))};v.push(ue.on("selectionChanged",({ref:q})=>{b=(q==null?void 0:q.type)==="room"?q.id:null,F()})),v.push(ue.on("roomFocusChanged",({roomId:q})=>{_=q,F()}));const $=["modeChanged","viewChanged","selectionChanged","controlsChanged","roomFocusChanged","alarmsChanged","incidentsChanged","tourChanged"];for(const q of $)v.push(ue.on(q,()=>g.requestRenderBurst()));const Q=t.multiScreenChannel?new By(ue,t.multiScreenChannel,void 0,{localOnly:a?Oy:[]}):null;if(t.autoScenes){let q=()=>{};const pe=D=>{q(),q=D?le.addLiveFrameListener(he=>p.tickSchedule(he.time,V=>void ue.applyScene(V))):()=>{}};Q?v.push(Q.onLeadershipChange(pe)):pe(!0),v.push(()=>q())}_e.attach(ue);let Y=!1;const we=()=>{Y||_e.getDiagnostics().contextState==="running"||(Y=!0,_e.unlock().then(()=>{Y=!1},()=>{Y=!1}))};window.addEventListener("pointerdown",we),window.addEventListener("keydown",we),v.push(()=>{window.removeEventListener("pointerdown",we),window.removeEventListener("keydown",we)}),Ee=new sy(ue),Ee.onTourChanged(q=>C.emit("tourChanged",{running:q}));const de=["pointerdown","keydown","wheel"];let xe;const qe=()=>{g.requestRenderBurst(),Ee!=null&&Ee.isRunning()&&ue.stopTour(),t.idleTourMs&&t.idleTourMs>0&&(window.clearTimeout(xe),xe=window.setTimeout(()=>void ue.startTour(),t.idleTourMs))};for(const q of de)window.addEventListener(q,qe,{passive:!0});v.push(()=>{window.clearTimeout(xe);for(const q of de)window.removeEventListener(q,qe)}),t.idleTourMs&&t.idleTourMs>0&&(xe=window.setTimeout(()=>void ue.startTour(),t.idleTourMs));const se=t.onRoomPick??yS,be=new gx(g.camera,g.domElement,A,q=>se(q,ue)),Ue=ES(ue);let Fe=!1;return{ui:ue,building:n,start:()=>{Fe||(g.start(),ue.setMode(t.initialMode??"default"))},registerDisposer:q=>{if(Fe)return q(),()=>{};m.add(q);let pe=!0;return()=>{pe&&(pe=!1,m.delete(q))}},dispose:async()=>{if(Fe)return;Fe=!0,g.stop();for(const pe of m)pe();m.clear(),Ee==null||Ee.stop(),Ue.dispose(),Q==null||Q.dispose(),be.dispose(),le.dispose();for(const pe of v.splice(0))pe();Me.dispose(),await oe.dispose(),_e.dispose(),ue.dispose(),M.dispose(),P.cancelAll(),MS(g.scene),g.scene.clear(),g.dispose(),C.clear();const q=window;q.ui===ue&&delete q.ui,q.agent===Ue.agent&&delete q.agent},reservationsRelay:(l==null?void 0:l.handle)??null}}function SS(i){const e=new Set,t=n=>{if(!(!n||typeof n!="object"||e.has(n))){e.add(n);for(const s of Object.values(n))t(s);Object.freeze(n)}};return t(i),i}function MS(i){const e=new Set,t=new Set;i.traverse(n=>{const s=n;s.geometry&&e.add(s.geometry);const r=s.material;Array.isArray(r)?r.forEach(o=>t.add(o)):r&&t.add(r)});for(const n of e)n.dispose();for(const n of t)n.dispose()}function ES(i,e){const t=new Set,n=a=>{const l=ul.connect(i,a);return t.add(l),l},s={toolDefinitions:()=>xu(i.describe()),replay:(a=ph)=>Ny(i,a),DEMO_SCENARIO:ph,connect:n};window.ui=i,window.agent=s;let r;const o=new URLSearchParams(location.search).get("remote");return o&&n(o),{agent:s,holo:r,dispose:()=>{for(const a of t)a.dispose();t.clear()}}}const Eu=12;function NS(i,e,t){const n=AS(),s=bS(i,e),r=document.createElement("div");r.className="cmdk",r.hidden=!0,r.innerHTML=`
    <div class="cmdk-box" role="dialog" aria-modal="true" aria-label="Search rooms, floors and actions">
      <div class="cmdk-head"><input class="cmdk-input" type="text" role="combobox" aria-label="Search rooms, floors and actions"
        aria-autocomplete="list" aria-controls="cmdk-results" aria-expanded="true" placeholder="Search a room, floor, mode or action…" />
        <button class="cmdk-close" type="button" aria-label="Close search">×</button></div>
      <ul class="cmdk-list" id="cmdk-results" role="listbox" aria-label="Search results"></ul>
      <div class="cmdk-status" role="status"></div>
      <div class="cmdk-help">↑ ↓ Choose · Enter Open · Esc Close</div>
    </div>`,document.body.appendChild(r);const o=r.querySelector(".cmdk-input"),a=r.querySelector(".cmdk-list"),l=r.querySelector(".cmdk-close"),c=r.querySelector(".cmdk-status");let h=[],u=0,d=null,p=!1;const g=()=>{r.hidden&&(d=document.activeElement instanceof HTMLElement?document.activeElement:null,r.hidden=!1,t==null||t.setAttribute("aria-expanded","true"),o.value="",m(),o.focus())},v=()=>{r.hidden||(r.hidden=!0,t==null||t.setAttribute("aria-expanded","false"),d!=null&&d.isConnected&&d.focus({preventScroll:!0}))},m=()=>{h=TS(o.value,s).slice(0,Eu),u=0,a.innerHTML=h.map((M,x)=>`<li id="cmdk-result-${x}" role="option" aria-selected="${x===u}" class="${x===u?"on":""}">${gh(M.label)}${M.hint?`<span>${gh(M.hint)}</span>`:""}</li>`).join(""),c.textContent=h.length?"":"No matching rooms or actions. Try a room number or floor ID.",h.length?o.setAttribute("aria-activedescendant","cmdk-result-0"):o.removeAttribute("aria-activedescendant")},f=M=>{var x;h.length!==0&&(u=(u+M+h.length)%h.length,[...a.children].forEach((C,W)=>{C.classList.toggle("on",W===u),C.setAttribute("aria-selected",String(W===u))}),o.setAttribute("aria-activedescendant",`cmdk-result-${u}`),(x=a.children[u])==null||x.scrollIntoView({block:"nearest"}))},A=()=>{const M=h[u];M&&(v(),Promise.resolve().then(()=>M.run()).catch(x=>{p||(g(),c.textContent=x instanceof Error?x.message:"The action could not be completed. Try again.")}))},E=()=>m(),S=M=>{const x=M.target.closest("li");x&&(u=[...a.children].indexOf(x),A())},B=M=>{M.key==="ArrowDown"?(M.preventDefault(),f(1)):M.key==="ArrowUp"?(M.preventDefault(),f(-1)):M.key==="Enter"&&(M.preventDefault(),A())},I=M=>{M.target===r&&v()},P=M=>{M.key==="Escape"&&(M.preventDefault(),M.stopPropagation(),v()),M.key==="Tab"&&(M.preventDefault(),(document.activeElement===o?l:o).focus())},U=M=>{(M.ctrlKey||M.metaKey)&&M.key.toLowerCase()==="k"&&(M.preventDefault(),r.hidden?g():v())};return o.addEventListener("input",E),a.addEventListener("click",S),o.addEventListener("keydown",B),r.addEventListener("click",I),r.addEventListener("keydown",P),l.addEventListener("click",v),t==null||t.addEventListener("click",g),t==null||t.setAttribute("aria-expanded","false"),window.addEventListener("keydown",U),()=>{p||(p=!0,v(),o.removeEventListener("input",E),a.removeEventListener("click",S),o.removeEventListener("keydown",B),r.removeEventListener("click",I),r.removeEventListener("keydown",P),l.removeEventListener("click",v),t==null||t.removeEventListener("click",g),t==null||t.removeAttribute("aria-expanded"),window.removeEventListener("keydown",U),r.remove(),n())}}function bS(i,e){const t=[];for(const n of i.listModes())t.push({label:`Mode · ${n.name}`,hint:n.id,run:()=>i.setMode(n.id)});for(const n of i.listScenes())t.push({label:`Scene · ${n.label}`,hint:n.hint,run:()=>i.applyScene(n.id)});for(const n of["orbit","front","top","isometric"])t.push({label:`View · ${n}`,run:()=>i.setView(n)});t.push({label:"Reassemble building",run:()=>i.reassemble()},{label:"Explode floors",run:()=>i.explode(1)},{label:"Fly out of room",run:()=>i.exitRoom()},{label:"Start attract tour",run:()=>i.startTour()},{label:"Stop attract tour",run:()=>i.stopTour()},{label:"Toggle audio cues",run:()=>i.setAudio({enabled:!i.getState().audio.enabled})},{label:"Quality · high",run:()=>i.setQuality("high")},{label:"Quality · medium",run:()=>i.setQuality("medium")},{label:"Quality · low",run:()=>i.setQuality("low")},{label:"Theme · light",hint:"chrome only; the scene stays dark",run:()=>i.setTheme("light")},{label:"Theme · dark",hint:"holographic default",run:()=>i.setTheme("dark")},{label:"Live data",run:()=>i.setTimeRange("live")});for(const n of e.floors){t.push({label:`Floor · ${n.name}`,hint:`${n.id} · live view`,run:()=>i.isolateFloor(n.id)},{label:`Floor plan · ${n.name}`,hint:`${n.id} · 2D`,run:()=>i.flattenFloor(n.id,"2d")});for(const s of n.zones)for(const r of s.rooms)t.push({label:r.name,hint:`${r.id} · ${n.name}`,run:()=>i.enterRoom(r.id)})}return t}function TS(i,e){return i.trim()?e.map(t=>({e:t,s:wS(i,`${t.label} ${t.hint??""}`)})).filter(t=>t.s>=0).sort((t,n)=>n.s-t.s).map(t=>t.e):e.slice(0,Eu)}function wS(i,e){const t=i.toLowerCase().replace(/\s+/g,""),n=e.toLowerCase();let s=0,r=0,o=0;for(const a of t){const l=n.indexOf(a,s);if(l===-1)return-1;o=l===s?o+1:0,r+=2+o*2-Math.min(l-s,8)*.1,s=l+1}return r}function gh(i){return i.replace(/[&<>]/g,e=>e==="&"?"&amp;":e==="<"?"&lt;":"&gt;")}let Mr=null,Er=0;function AS(){let i=document.getElementById("cmdk-styles");i||(i=document.createElement("style"),i.id="cmdk-styles",i.textContent=`
    .cmdk { position: fixed; inset: 0; z-index: 100; display: flex; justify-content: center;
      align-items: flex-start; padding-top: 14vh; background: var(--scrim, rgba(2, 6, 12, 0.5));
      backdrop-filter: blur(2px); font-family: system-ui, 'Segoe UI', sans-serif; }
    .cmdk[hidden] { display: none; }
    .cmdk-box { width: min(560px, 92vw); background: color-mix(in srgb, var(--surface, #06121b) 97%, transparent);
      border: 1px solid color-mix(in srgb, var(--cyan, #36e6ff) 40%, transparent);
      box-shadow: 0 20px 60px color-mix(in srgb, var(--shadow, #000) 60%, transparent); }
    .cmdk-head { display: flex; border-bottom: 1px solid color-mix(in srgb, var(--cyan, #36e6ff) 20%, transparent); }
    .cmdk-close { flex: 0 0 44px; min-height: 44px; background: transparent; border: none; color: var(--text, #bfe6f0); font-size: 24px; cursor: pointer; }
    .cmdk-input { width: 100%; box-sizing: border-box; padding: 15px 18px; background: transparent;
      border: none; min-width: 0; color: var(--head, #eafcff);
      font-size: 15px; outline: none; letter-spacing: 0.02em; }
    .cmdk-input::placeholder { color: var(--muted, #4a6b78); }
    .cmdk-list { list-style: none; margin: 0; padding: 6px; max-height: 46vh; overflow-y: auto; }
    .cmdk-list li { display: flex; justify-content: space-between; align-items: baseline; gap: 12px;
      padding: 9px 12px; color: var(--text, #bfe6f0); font-size: 13.5px; cursor: pointer; }
    .cmdk-list li span { color: var(--muted, #5f8494); font-size: 11px; font-family: ui-monospace, Consolas, monospace; }
    .cmdk-list li.on { background: color-mix(in srgb, var(--cyan, #36e6ff) 14%, transparent); color: var(--head, #eafcff); }
    .cmdk-status { padding: 12px 18px; color: var(--text, #bfe6f0); font-size: 13px; }
    .cmdk-status:empty { display: none; }
    .cmdk-help { padding: 10px 18px; color: var(--muted, #8eaeb9); font-size: 12px; }
    .cmdk-close:focus-visible { outline: 2px solid var(--cyan, #36e6ff); outline-offset: -3px; }
    @media (pointer: coarse) { .cmdk-list li { min-height: 44px; box-sizing: border-box; align-items: center; } }
    `,document.head.appendChild(i),Mr=i),Er+=1;let e=!1;return()=>{e||(e=!0,Er=Math.max(0,Er-1),Er===0&&Mr&&(Mr.remove(),Mr=null))}}const bu="ihapm.theme";function vh(i){return i==="dark"||i==="light"}function US(i=CS()){var t;const e=new URLSearchParams(i.search??"").get("theme");if(vh(e))return e;try{const n=(t=i.storage)==null?void 0:t.getItem(bu);if(vh(n))return n}catch{}return"dark"}function RS(i,e=dl()){try{e==null||e.setItem(bu,i)}catch{}}function FS(i,e=dl()){return i.on("themeChanged",({theme:t})=>RS(t,e))}function dl(){try{return typeof localStorage>"u"?null:localStorage}catch{return null}}function CS(){return{search:typeof location>"u"?"":location.search,storage:dl()}}export{Tn as A,Tt as B,ze as C,pS as D,mS as E,ys as H,Gr as M,vS as O,DS as P,ol as R,gt as S,R as V,bt as a,FS as b,LS as c,nl as d,nu as e,Lt as f,Is as g,Et as h,gu as i,gS as j,Lr as k,$t as l,NS as m,US as r};
