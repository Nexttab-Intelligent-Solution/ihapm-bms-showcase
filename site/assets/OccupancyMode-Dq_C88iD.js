var A=Object.defineProperty;var P=(n,t,o)=>t in n?A(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o;var i=(n,t,o)=>P(n,typeof t!="symbol"?t+"":t,o);import{O as _,C as m,V as O,B as b,a as T,g as D,b as R,A as M,d as S,f as E,R as F,S as G,i as z}from"./commandPalette-DgXmodMZ.js";import{O as u,n as w}from"./colorScales-CToAt8ZN.js";const y="#ff45c8",h=[0,4],I=30,d=6,U=-24;class k{constructor(){i(this,"descriptor",_);i(this,"ctx",null);i(this,"roomOccs",[]);i(this,"gauges",[]);i(this,"dots",null);i(this,"dotTexture",null);i(this,"positions");i(this,"scratch",new m);i(this,"tmp",new O)}enter(t){this.ctx=t,t.setLegend({title:"Occupancy",unit:"ppl",domain:h,scale:u,accent:y});let o=0;this.roomOccs=t.rooms.map((r,c)=>{var p;const g=[];for(let l=0;l<d;l++){const v=f(c*31+l)*Math.PI*2,C=.6+f(c*17+l*7)*1.4;g.push(new O(Math.cos(v)*C,.6+f(c+l)*1.6,Math.sin(v)*C))}const x={room:r,device:((p=r.sensors.find(l=>l.channel==="occupancy"))==null?void 0:p.deviceId)??null,base:o,offsets:g,count:0};return o+=d,x}),this.positions=new Float32Array(o*3);const s=new b;s.setAttribute("position",new T(this.positions,3)),s.setDrawRange(0,0);const e=D();this.dotTexture=e;const a=new R({size:1.1,map:e,color:new m(y),transparent:!0,opacity:.95,blending:M,depthWrite:!1,sizeAttenuation:!0});this.dots=new S(s,a),this.dots.frustumCulled=!1,t.overlay.add(this.dots),this.buildGauges(t),t.registerUpdate(()=>this.placeDots())}onData(t){for(const o of this.roomOccs){const s=o.device?t.value(o.device)??0:0;o.count=Math.max(0,Math.min(d,Math.round(s))),o.device?(u.sample(w(s,h[0],h[1]),this.scratch),o.room.setTint(this.scratch,s>.4?.5:.12)):o.room.setTint(null)}for(const o of this.gauges){let s=0;for(const a of this.roomOccs)a.device&&a.room.floorId===o.floor.id&&(s+=t.value(a.device)??0);const e=w(s,0,I);o.material.uniforms.uFill.value=e,u.sample(e,o.material.uniforms.uColor.value)}}placeDots(){if(!this.dots)return;let t=0;for(const o of this.roomOccs){o.room.worldCenter(this.tmp);for(let s=0;s<o.count;s++){const e=o.offsets[s];this.positions[t*3]=this.tmp.x+e.x,this.positions[t*3+1]=this.tmp.y+e.y,this.positions[t*3+2]=this.tmp.z+e.z,t++}}this.dots.geometry.setDrawRange(0,t),this.dots.geometry.attributes.position.needsUpdate=!0;for(const o of this.gauges)o.mesh.position.y=o.floor.group.position.y+1.5}buildGauges(t){for(const o of t.floors){const s=B(),e=new E(new F(1.6,2.2,48),s);e.position.set(U,o.baseElevation+1.5,0),t.overlay.add(e),this.gauges.push({floor:o,mesh:e,material:s})}}exit(){var t,o,s,e,a;for(const r of this.roomOccs)r.room.setTint(null);(t=this.dots)==null||t.geometry.dispose(),(s=(o=this.dots)==null?void 0:o.material)==null||s.dispose(),(e=this.dotTexture)==null||e.dispose(),this.dotTexture=null;for(const r of this.gauges)r.mesh.geometry.dispose(),r.material.dispose();this.dots=null,this.gauges=[],this.roomOccs=[],(a=this.ctx)==null||a.setLegend(null),this.ctx=null}}function B(){return new G({transparent:!0,depthWrite:!1,side:z,blending:M,uniforms:{uFill:{value:0},uColor:{value:new m("#ff45c8")}},vertexShader:`
      varying vec2 vPos;
      void main() {
        vPos = position.xy;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform float uFill;
      uniform vec3 uColor;
      varying vec2 vPos;
      void main() {
        // fraction around the ring, clockwise from the top (12 o'clock)
        float ang = atan(vPos.x, vPos.y) / (2.0 * 3.14159265);
        float frac = ang < 0.0 ? ang + 1.0 : ang;
        float on = step(frac, uFill);
        float glow = mix(0.08, 0.9, on);
        gl_FragColor = vec4(uColor * glow, glow);
      }
    `})}function f(n){const t=Math.sin(n*127.1)*43758.5453;return t-Math.floor(t)}export{k as OccupancyMode};
