const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ElectricityMode-BPtN2dOX.js","assets/colorScales-CCp75tOV.js","assets/EnvironmentMode-G8xoH20j.js","assets/OccupancyMode-DEeq8iDu.js"])))=>i.map(i=>d[i]);
var ff=Object.defineProperty;var pf=(n,e,t)=>e in n?ff(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var P=(n,e,t)=>pf(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const mf="demo-hotel",gf="IHAPM Demo Hotel",vf={lat:13.7563,lon:100.5018,northAngleDeg:0},_f=JSON.parse('[{"id":"F1","name":"Level 1 · Lobby","elevation":0,"height":5,"outline":[[0,0],[40,0],[40,20],[0,20]],"zones":[{"id":"F1-Z-LOBBY","name":"Lobby","function":"lobby","rooms":[{"id":"F1-LOBBY","name":"Grand Lobby","footprint":[[0,0],[26,0],[26,20],[0,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F1-LOBBY-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F1-LOBBY-occupancy"},{"channel":"lux","unit":"lx","deviceId":"dev-F1-LOBBY-lux"}]},{"id":"F1-RECEP","name":"Reception","footprint":[[26,0],[34,0],[34,8],[26,8]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F1-RECEP-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F1-RECEP-occupancy"}]}]},{"id":"F1-Z-AMEN","name":"Amenities","function":"amenity","rooms":[{"id":"F1-CAFE","name":"Café","footprint":[[26,12],[40,12],[40,20],[26,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F1-CAFE-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F1-CAFE-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F1-CAFE-power"}]}]},{"id":"F1-Z-BOH","name":"Back of house","function":"plant","rooms":[{"id":"F1-BOH","name":"Back of House","footprint":[[34,0],[40,0],[40,8],[34,8]],"sensors":[{"channel":"power","unit":"kW","deviceId":"dev-F1-BOH-power"}]}]},{"id":"F1-Z-CORR","name":"Corridor","function":"corridor","rooms":[{"id":"F1-CORR","name":"Service corridor","footprint":[[26,8],[40,8],[40,12],[26,12]],"sensors":[]}]}]},{"id":"F2","name":"Level 2 · Amenities","elevation":5,"height":4.5,"outline":[[0,0],[40,0],[40,20],[0,20]],"zones":[{"id":"F2-Z-AMEN","name":"Amenities","function":"amenity","rooms":[{"id":"F2-REST","name":"Restaurant","footprint":[[0,0],[18,0],[18,20],[0,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F2-REST-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F2-REST-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F2-REST-power"}]},{"id":"F2-GYM","name":"Gym","footprint":[[18,0],[30,0],[30,9],[18,9]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F2-GYM-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F2-GYM-occupancy"}]},{"id":"F2-MTGA","name":"Meeting Room A","footprint":[[30,0],[40,0],[40,9],[30,9]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F2-MTGA-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F2-MTGA-occupancy"}]},{"id":"F2-SPA","name":"Spa","footprint":[[18,11],[30,11],[30,20],[18,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F2-SPA-temperature"},{"channel":"humidity","unit":"pctRH","deviceId":"dev-F2-SPA-humidity"}]},{"id":"F2-MTGB","name":"Meeting Room B","footprint":[[30,11],[40,11],[40,20],[30,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F2-MTGB-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F2-MTGB-occupancy"}]}]},{"id":"F2-Z-CORR","name":"Corridor","function":"corridor","rooms":[{"id":"F2-CORR","name":"Corridor L2","footprint":[[18,9],[40,9],[40,11],[18,11]],"sensors":[]}]}]},{"id":"F3","name":"Level 3 · Guest","elevation":9.5,"height":3.5,"outline":[[0,0],[40,0],[40,20],[0,20]],"zones":[{"id":"F3-Z-GUEST","name":"Guest rooms","function":"guest","rooms":[{"id":"F3-R01","name":"Room 301","footprint":[[0,0],[4,0],[4,8.5],[0,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R01-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R01-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R01-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R01-lux"}]},{"id":"F3-R02","name":"Room 302","footprint":[[4,0],[8,0],[8,8.5],[4,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R02-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R02-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R02-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R02-lux"}]},{"id":"F3-R03","name":"Room 303","footprint":[[8,0],[12,0],[12,8.5],[8,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R03-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R03-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R03-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R03-lux"}]},{"id":"F3-R04","name":"Room 304","footprint":[[12,0],[16,0],[16,8.5],[12,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R04-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R04-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R04-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R04-lux"}]},{"id":"F3-R05","name":"Room 305","footprint":[[16,0],[20,0],[20,8.5],[16,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R05-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R05-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R05-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R05-lux"}]},{"id":"F3-R06","name":"Room 306","footprint":[[20,0],[24,0],[24,8.5],[20,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R06-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R06-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R06-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R06-lux"}]},{"id":"F3-R07","name":"Room 307","footprint":[[24,0],[28,0],[28,8.5],[24,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R07-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R07-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R07-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R07-lux"}]},{"id":"F3-R08","name":"Room 308","footprint":[[28,0],[32,0],[32,8.5],[28,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R08-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R08-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R08-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R08-lux"}]},{"id":"F3-R09","name":"Room 309","footprint":[[32,0],[36,0],[36,8.5],[32,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R09-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R09-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R09-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R09-lux"}]},{"id":"F3-R10","name":"Room 310","footprint":[[36,0],[40,0],[40,8.5],[36,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R10-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R10-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R10-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R10-lux"}]},{"id":"F3-R11","name":"Room 311","footprint":[[0,11.5],[4,11.5],[4,20],[0,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R11-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R11-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R11-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R11-lux"}]},{"id":"F3-R12","name":"Room 312","footprint":[[4,11.5],[8,11.5],[8,20],[4,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R12-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R12-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R12-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R12-lux"}]},{"id":"F3-R13","name":"Room 313","footprint":[[8,11.5],[12,11.5],[12,20],[8,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R13-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R13-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R13-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R13-lux"}]},{"id":"F3-R14","name":"Room 314","footprint":[[12,11.5],[16,11.5],[16,20],[12,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R14-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R14-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R14-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R14-lux"}]},{"id":"F3-R15","name":"Room 315","footprint":[[24,11.5],[28,11.5],[28,20],[24,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R15-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R15-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R15-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R15-lux"}]},{"id":"F3-R16","name":"Room 316","footprint":[[28,11.5],[32,11.5],[32,20],[28,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R16-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R16-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R16-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R16-lux"}]},{"id":"F3-R17","name":"Room 317","footprint":[[32,11.5],[36,11.5],[36,20],[32,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R17-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R17-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R17-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R17-lux"}]},{"id":"F3-R18","name":"Room 318","footprint":[[36,11.5],[40,11.5],[40,20],[36,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R18-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R18-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R18-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R18-lux"}]}]},{"id":"F3-Z-CORR","name":"Corridor","function":"corridor","rooms":[{"id":"F3-CORR","name":"Corridor L3","footprint":[[0,8.5],[40,8.5],[40,11.5],[0,11.5]],"sensors":[{"channel":"occupancy","unit":"people","deviceId":"dev-F3-CORR-occupancy"}]}]},{"id":"F3-Z-CORE","name":"Service core","function":"plant","rooms":[{"id":"F3-CORE","name":"Core L3 (lifts & stairs)","footprint":[[16,11.5],[24,11.5],[24,20],[16,20]],"sensors":[]}]}]},{"id":"F4","name":"Level 4 · Guest","elevation":13,"height":3.5,"outline":[[0,0],[40,0],[40,20],[0,20]],"zones":[{"id":"F4-Z-GUEST","name":"Guest rooms","function":"guest","rooms":[{"id":"F4-R01","name":"Room 401","footprint":[[0,0],[4,0],[4,8.5],[0,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R01-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R01-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R01-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R01-lux"}]},{"id":"F4-R02","name":"Room 402","footprint":[[4,0],[8,0],[8,8.5],[4,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R02-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R02-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R02-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R02-lux"}]},{"id":"F4-R03","name":"Room 403","footprint":[[8,0],[12,0],[12,8.5],[8,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R03-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R03-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R03-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R03-lux"}]},{"id":"F4-R04","name":"Room 404","footprint":[[12,0],[16,0],[16,8.5],[12,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R04-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R04-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R04-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R04-lux"}]},{"id":"F4-R05","name":"Room 405","footprint":[[16,0],[20,0],[20,8.5],[16,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R05-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R05-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R05-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R05-lux"}]},{"id":"F4-R06","name":"Room 406","footprint":[[20,0],[24,0],[24,8.5],[20,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R06-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R06-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R06-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R06-lux"}]},{"id":"F4-R07","name":"Room 407","footprint":[[24,0],[28,0],[28,8.5],[24,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R07-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R07-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R07-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R07-lux"}]},{"id":"F4-R08","name":"Room 408","footprint":[[28,0],[32,0],[32,8.5],[28,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R08-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R08-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R08-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R08-lux"}]},{"id":"F4-R09","name":"Room 409","footprint":[[32,0],[36,0],[36,8.5],[32,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R09-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R09-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R09-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R09-lux"}]},{"id":"F4-R10","name":"Room 410","footprint":[[36,0],[40,0],[40,8.5],[36,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R10-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R10-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R10-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R10-lux"}]},{"id":"F4-R11","name":"Room 411","footprint":[[0,11.5],[4,11.5],[4,20],[0,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R11-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R11-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R11-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R11-lux"}]},{"id":"F4-R12","name":"Room 412","footprint":[[4,11.5],[8,11.5],[8,20],[4,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R12-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R12-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R12-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R12-lux"}]},{"id":"F4-R13","name":"Room 413","footprint":[[8,11.5],[12,11.5],[12,20],[8,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R13-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R13-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R13-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R13-lux"}]},{"id":"F4-R14","name":"Room 414","footprint":[[12,11.5],[16,11.5],[16,20],[12,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R14-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R14-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R14-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R14-lux"}]},{"id":"F4-R15","name":"Room 415","footprint":[[24,11.5],[28,11.5],[28,20],[24,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R15-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R15-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R15-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R15-lux"}]},{"id":"F4-R16","name":"Room 416","footprint":[[28,11.5],[32,11.5],[32,20],[28,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R16-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R16-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R16-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R16-lux"}]},{"id":"F4-R17","name":"Room 417","footprint":[[32,11.5],[36,11.5],[36,20],[32,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R17-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R17-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R17-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R17-lux"}]},{"id":"F4-R18","name":"Room 418","footprint":[[36,11.5],[40,11.5],[40,20],[36,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R18-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R18-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R18-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R18-lux"}]}]},{"id":"F4-Z-CORR","name":"Corridor","function":"corridor","rooms":[{"id":"F4-CORR","name":"Corridor L4","footprint":[[0,8.5],[40,8.5],[40,11.5],[0,11.5]],"sensors":[{"channel":"occupancy","unit":"people","deviceId":"dev-F4-CORR-occupancy"}]}]},{"id":"F4-Z-CORE","name":"Service core","function":"plant","rooms":[{"id":"F4-CORE","name":"Core L4 (lifts & stairs)","footprint":[[16,11.5],[24,11.5],[24,20],[16,20]],"sensors":[]}]}]},{"id":"F5","name":"Level 5 · Guest","elevation":16.5,"height":3.5,"outline":[[0,0],[40,0],[40,20],[0,20]],"zones":[{"id":"F5-Z-GUEST","name":"Guest rooms","function":"guest","rooms":[{"id":"F5-R01","name":"Room 501","footprint":[[0,0],[4,0],[4,8.5],[0,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R01-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R01-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R01-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R01-lux"}]},{"id":"F5-R02","name":"Room 502","footprint":[[4,0],[8,0],[8,8.5],[4,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R02-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R02-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R02-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R02-lux"}]},{"id":"F5-R03","name":"Room 503","footprint":[[8,0],[12,0],[12,8.5],[8,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R03-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R03-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R03-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R03-lux"}]},{"id":"F5-R04","name":"Room 504","footprint":[[12,0],[16,0],[16,8.5],[12,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R04-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R04-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R04-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R04-lux"}]},{"id":"F5-R05","name":"Room 505","footprint":[[16,0],[20,0],[20,8.5],[16,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R05-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R05-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R05-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R05-lux"}]},{"id":"F5-R06","name":"Room 506","footprint":[[20,0],[24,0],[24,8.5],[20,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R06-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R06-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R06-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R06-lux"}]},{"id":"F5-R07","name":"Room 507","footprint":[[24,0],[28,0],[28,8.5],[24,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R07-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R07-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R07-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R07-lux"}]},{"id":"F5-R08","name":"Room 508","footprint":[[28,0],[32,0],[32,8.5],[28,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R08-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R08-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R08-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R08-lux"}]},{"id":"F5-R09","name":"Room 509","footprint":[[32,0],[36,0],[36,8.5],[32,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R09-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R09-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R09-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R09-lux"}]},{"id":"F5-R10","name":"Room 510","footprint":[[36,0],[40,0],[40,8.5],[36,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R10-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R10-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R10-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R10-lux"}]},{"id":"F5-R11","name":"Room 511","footprint":[[0,11.5],[4,11.5],[4,20],[0,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R11-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R11-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R11-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R11-lux"}]},{"id":"F5-R12","name":"Room 512","footprint":[[4,11.5],[8,11.5],[8,20],[4,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R12-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R12-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R12-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R12-lux"}]},{"id":"F5-R13","name":"Room 513","footprint":[[8,11.5],[12,11.5],[12,20],[8,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R13-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R13-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R13-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R13-lux"}]},{"id":"F5-R14","name":"Room 514","footprint":[[12,11.5],[16,11.5],[16,20],[12,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R14-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R14-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R14-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R14-lux"}]},{"id":"F5-R15","name":"Room 515","footprint":[[24,11.5],[28,11.5],[28,20],[24,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R15-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R15-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R15-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R15-lux"}]},{"id":"F5-R16","name":"Room 516","footprint":[[28,11.5],[32,11.5],[32,20],[28,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R16-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R16-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R16-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R16-lux"}]},{"id":"F5-R17","name":"Room 517","footprint":[[32,11.5],[36,11.5],[36,20],[32,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R17-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R17-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R17-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R17-lux"}]},{"id":"F5-R18","name":"Room 518","footprint":[[36,11.5],[40,11.5],[40,20],[36,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R18-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R18-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R18-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R18-lux"}]}]},{"id":"F5-Z-CORR","name":"Corridor","function":"corridor","rooms":[{"id":"F5-CORR","name":"Corridor L5","footprint":[[0,8.5],[40,8.5],[40,11.5],[0,11.5]],"sensors":[{"channel":"occupancy","unit":"people","deviceId":"dev-F5-CORR-occupancy"}]}]},{"id":"F5-Z-CORE","name":"Service core","function":"plant","rooms":[{"id":"F5-CORE","name":"Core L5 (lifts & stairs)","footprint":[[16,11.5],[24,11.5],[24,20],[16,20]],"sensors":[]}]}]},{"id":"F6","name":"Level 6 · Guest","elevation":20,"height":3.5,"outline":[[0,0],[40,0],[40,20],[0,20]],"zones":[{"id":"F6-Z-GUEST","name":"Guest rooms","function":"guest","rooms":[{"id":"F6-R01","name":"Room 601","footprint":[[0,0],[4,0],[4,8.5],[0,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R01-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R01-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R01-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R01-lux"}]},{"id":"F6-R02","name":"Room 602","footprint":[[4,0],[8,0],[8,8.5],[4,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R02-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R02-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R02-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R02-lux"}]},{"id":"F6-R03","name":"Room 603","footprint":[[8,0],[12,0],[12,8.5],[8,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R03-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R03-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R03-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R03-lux"}]},{"id":"F6-R04","name":"Room 604","footprint":[[12,0],[16,0],[16,8.5],[12,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R04-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R04-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R04-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R04-lux"}]},{"id":"F6-R05","name":"Room 605","footprint":[[16,0],[20,0],[20,8.5],[16,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R05-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R05-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R05-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R05-lux"}]},{"id":"F6-R06","name":"Room 606","footprint":[[20,0],[24,0],[24,8.5],[20,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R06-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R06-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R06-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R06-lux"}]},{"id":"F6-R07","name":"Room 607","footprint":[[24,0],[28,0],[28,8.5],[24,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R07-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R07-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R07-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R07-lux"}]},{"id":"F6-R08","name":"Room 608","footprint":[[28,0],[32,0],[32,8.5],[28,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R08-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R08-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R08-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R08-lux"}]},{"id":"F6-R09","name":"Room 609","footprint":[[32,0],[36,0],[36,8.5],[32,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R09-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R09-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R09-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R09-lux"}]},{"id":"F6-R10","name":"Room 610","footprint":[[36,0],[40,0],[40,8.5],[36,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R10-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R10-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R10-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R10-lux"}]},{"id":"F6-R11","name":"Room 611","footprint":[[0,11.5],[4,11.5],[4,20],[0,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R11-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R11-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R11-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R11-lux"}]},{"id":"F6-R12","name":"Room 612","footprint":[[4,11.5],[8,11.5],[8,20],[4,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R12-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R12-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R12-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R12-lux"}]},{"id":"F6-R13","name":"Room 613","footprint":[[8,11.5],[12,11.5],[12,20],[8,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R13-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R13-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R13-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R13-lux"}]},{"id":"F6-R14","name":"Room 614","footprint":[[12,11.5],[16,11.5],[16,20],[12,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R14-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R14-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R14-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R14-lux"}]},{"id":"F6-R15","name":"Room 615","footprint":[[24,11.5],[28,11.5],[28,20],[24,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R15-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R15-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R15-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R15-lux"}]},{"id":"F6-R16","name":"Room 616","footprint":[[28,11.5],[32,11.5],[32,20],[28,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R16-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R16-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R16-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R16-lux"}]},{"id":"F6-R17","name":"Room 617","footprint":[[32,11.5],[36,11.5],[36,20],[32,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R17-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R17-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R17-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R17-lux"}]},{"id":"F6-R18","name":"Room 618","footprint":[[36,11.5],[40,11.5],[40,20],[36,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R18-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R18-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R18-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R18-lux"}]}]},{"id":"F6-Z-CORR","name":"Corridor","function":"corridor","rooms":[{"id":"F6-CORR","name":"Corridor L6","footprint":[[0,8.5],[40,8.5],[40,11.5],[0,11.5]],"sensors":[{"channel":"occupancy","unit":"people","deviceId":"dev-F6-CORR-occupancy"}]}]},{"id":"F6-Z-CORE","name":"Service core","function":"plant","rooms":[{"id":"F6-CORE","name":"Core L6 (lifts & stairs)","footprint":[[16,11.5],[24,11.5],[24,20],[16,20]],"sensors":[]}]}]},{"id":"F7","name":"Level 7 · Guest","elevation":23.5,"height":3.5,"outline":[[0,0],[40,0],[40,20],[0,20]],"zones":[{"id":"F7-Z-GUEST","name":"Guest rooms","function":"guest","rooms":[{"id":"F7-R01","name":"Room 701","footprint":[[0,0],[4,0],[4,8.5],[0,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R01-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R01-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R01-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R01-lux"}]},{"id":"F7-R02","name":"Room 702","footprint":[[4,0],[8,0],[8,8.5],[4,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R02-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R02-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R02-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R02-lux"}]},{"id":"F7-R03","name":"Room 703","footprint":[[8,0],[12,0],[12,8.5],[8,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R03-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R03-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R03-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R03-lux"}]},{"id":"F7-R04","name":"Room 704","footprint":[[12,0],[16,0],[16,8.5],[12,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R04-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R04-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R04-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R04-lux"}]},{"id":"F7-R05","name":"Room 705","footprint":[[16,0],[20,0],[20,8.5],[16,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R05-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R05-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R05-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R05-lux"}]},{"id":"F7-R06","name":"Room 706","footprint":[[20,0],[24,0],[24,8.5],[20,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R06-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R06-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R06-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R06-lux"}]},{"id":"F7-R07","name":"Room 707","footprint":[[24,0],[28,0],[28,8.5],[24,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R07-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R07-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R07-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R07-lux"}]},{"id":"F7-R08","name":"Room 708","footprint":[[28,0],[32,0],[32,8.5],[28,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R08-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R08-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R08-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R08-lux"}]},{"id":"F7-R09","name":"Room 709","footprint":[[32,0],[36,0],[36,8.5],[32,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R09-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R09-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R09-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R09-lux"}]},{"id":"F7-R10","name":"Room 710","footprint":[[36,0],[40,0],[40,8.5],[36,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R10-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R10-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R10-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R10-lux"}]},{"id":"F7-R11","name":"Room 711","footprint":[[0,11.5],[4,11.5],[4,20],[0,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R11-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R11-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R11-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R11-lux"}]},{"id":"F7-R12","name":"Room 712","footprint":[[4,11.5],[8,11.5],[8,20],[4,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R12-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R12-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R12-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R12-lux"}]},{"id":"F7-R13","name":"Room 713","footprint":[[8,11.5],[12,11.5],[12,20],[8,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R13-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R13-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R13-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R13-lux"}]},{"id":"F7-R14","name":"Room 714","footprint":[[12,11.5],[16,11.5],[16,20],[12,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R14-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R14-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R14-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R14-lux"}]},{"id":"F7-R15","name":"Room 715","footprint":[[24,11.5],[28,11.5],[28,20],[24,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R15-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R15-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R15-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R15-lux"}]},{"id":"F7-R16","name":"Room 716","footprint":[[28,11.5],[32,11.5],[32,20],[28,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R16-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R16-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R16-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R16-lux"}]},{"id":"F7-R17","name":"Room 717","footprint":[[32,11.5],[36,11.5],[36,20],[32,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R17-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R17-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R17-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R17-lux"}]},{"id":"F7-R18","name":"Room 718","footprint":[[36,11.5],[40,11.5],[40,20],[36,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R18-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R18-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R18-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R18-lux"}]}]},{"id":"F7-Z-CORR","name":"Corridor","function":"corridor","rooms":[{"id":"F7-CORR","name":"Corridor L7","footprint":[[0,8.5],[40,8.5],[40,11.5],[0,11.5]],"sensors":[{"channel":"occupancy","unit":"people","deviceId":"dev-F7-CORR-occupancy"}]}]},{"id":"F7-Z-CORE","name":"Service core","function":"plant","rooms":[{"id":"F7-CORE","name":"Core L7 (lifts & stairs)","footprint":[[16,11.5],[24,11.5],[24,20],[16,20]],"sensors":[]}]}]},{"id":"F8","name":"Level 8 · Plant & Roof","elevation":27,"height":4,"outline":[[0,0],[40,0],[40,20],[0,20]],"zones":[{"id":"F8-Z-PLANT","name":"Plant","function":"plant","rooms":[{"id":"F8-PLANT","name":"Plant Room","footprint":[[0,0],[20,0],[20,20],[0,20]],"sensors":[{"channel":"power","unit":"kW","deviceId":"dev-F8-PLANT-power"},{"channel":"temperature","unit":"degC","deviceId":"dev-F8-PLANT-temperature"}]},{"id":"F8-LIFT","name":"Lift Machine Room","footprint":[[20,0],[28,0],[28,20],[20,20]],"sensors":[{"channel":"power","unit":"kW","deviceId":"dev-F8-LIFT-power"}]}]},{"id":"F8-Z-ROOF","name":"Roof","function":"amenity","rooms":[{"id":"F8-TERR","name":"Roof Terrace","footprint":[[28,0],[40,0],[40,20],[28,20]],"sensors":[{"channel":"lux","unit":"lx","deviceId":"dev-F8-TERR-lux"},{"channel":"occupancy","unit":"people","deviceId":"dev-F8-TERR-occupancy"}]}]}]}]'),VT={id:mf,name:gf,location:vf,floors:_f},xf="modulepreload",yf=function(n){return"/ihapm-bms-showcase/"+n},Zc={},Zr=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){let o=function(l){return Promise.all(l.map(u=>Promise.resolve(u).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=o(t.map(l=>{if(l=yf(l),l in Zc)return;Zc[l]=!0;const u=l.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":xf,u||(d.as="script"),d.crossOrigin="",d.href=l,c&&d.setAttribute("nonce",c),document.head.appendChild(d),u)return new Promise((f,g)=>{d.addEventListener("load",f),d.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rc="170",Hi={ROTATE:0,DOLLY:1,PAN:2},zi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Sf=0,$c=1,Mf=2,lh=1,bf=2,Tn=3,Fn=0,Wt=1,tn=2,Cn=0,Gi=1,Dn=2,Yc=3,qc=4,Ef=5,si=100,wf=101,Tf=102,Rf=103,Af=104,Cf=200,If=201,Pf=202,Ff=203,ca=204,la=205,Df=206,Lf=207,Nf=208,Uf=209,Of=210,zf=211,kf=212,Bf=213,Vf=214,ua=0,ha=1,da=2,Yi=3,fa=4,pa=5,ma=6,ga=7,uh=0,Hf=1,Gf=2,Zn=0,hh=1,dh=2,fh=3,sc=4,Wf=5,ph=6,mh=7,gh=300,qi=301,ji=302,va=303,_a=304,to=306,xa=1e3,ai=1001,ya=1002,jt=1003,Xf=1004,$r=1005,gn=1006,po=1007,ci=1008,Ln=1009,vh=1010,_h=1011,Cr=1012,oc=1013,li=1014,vn=1015,In=1016,ac=1017,cc=1018,Ji=1020,xh=35902,yh=1021,Sh=1022,hn=1023,Mh=1024,bh=1025,Wi=1026,Ki=1027,lc=1028,uc=1029,Eh=1030,hc=1031,dc=1033,Us=33776,Os=33777,zs=33778,ks=33779,Sa=35840,Ma=35841,ba=35842,Ea=35843,wa=36196,Ta=37492,Ra=37496,Aa=37808,Ca=37809,Ia=37810,Pa=37811,Fa=37812,Da=37813,La=37814,Na=37815,Ua=37816,Oa=37817,za=37818,ka=37819,Ba=37820,Va=37821,Bs=36492,Ha=36494,Ga=36495,wh=36283,Wa=36284,Xa=36285,Za=36286,Zf=3200,$f=3201,Yf=0,qf=1,Xn="",Qt="srgb",ir="srgb-linear",no="linear",it="srgb",xi=7680,jc=519,jf=512,Jf=513,Kf=514,Th=515,Qf=516,ep=517,tp=518,np=519,Jc=35044,Hs=35048,Kc="300 es",An=2e3,Gs=2001;class pi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Qc=1234567;const Xi=Math.PI/180,Ir=180/Math.PI;function mi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]).toLowerCase()}function Rt(n,e,t){return Math.max(e,Math.min(t,n))}function fc(n,e){return(n%e+e)%e}function ip(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function rp(n,e,t){return n!==e?(t-n)/(e-n):0}function br(n,e,t){return(1-t)*n+t*e}function sp(n,e,t,i){return br(n,e,1-Math.exp(-t*i))}function op(n,e=1){return e-Math.abs(fc(n,e*2)-e)}function ap(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function cp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function lp(n,e){return n+Math.floor(Math.random()*(e-n+1))}function up(n,e){return n+Math.random()*(e-n)}function hp(n){return n*(.5-Math.random())}function dp(n){n!==void 0&&(Qc=n);let e=Qc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function fp(n){return n*Xi}function pp(n){return n*Ir}function mp(n){return(n&n-1)===0&&n!==0}function gp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function vp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function _p(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),d=o((e-i)/2),f=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,c*h,c*d,a*l);break;case"YZY":n.set(c*d,a*u,c*h,a*l);break;case"ZXZ":n.set(c*h,c*d,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*f,a*l);break;case"YXY":n.set(c*f,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ui(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ot(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const _t={DEG2RAD:Xi,RAD2DEG:Ir,generateUUID:mi,clamp:Rt,euclideanModulo:fc,mapLinear:ip,inverseLerp:rp,lerp:br,damp:sp,pingpong:op,smoothstep:ap,smootherstep:cp,randInt:lp,randFloat:up,randFloatSpread:hp,seededRandom:dp,degToRad:fp,radToDeg:pp,isPowerOfTwo:mp,ceilPowerOfTwo:gp,floorPowerOfTwo:vp,setQuaternionFromProperEuler:_p,normalize:Ot,denormalize:Ui};class ie{constructor(e=0,t=0){ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,i,r,s,o,a,c,l){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],f=i[5],g=i[8],v=r[0],m=r[3],p=r[6],w=r[1],M=r[4],x=r[7],O=r[2],R=r[5],A=r[8];return s[0]=o*v+a*w+c*O,s[3]=o*m+a*M+c*R,s[6]=o*p+a*x+c*A,s[1]=l*v+u*w+h*O,s[4]=l*m+u*M+h*R,s[7]=l*p+u*x+h*A,s[2]=d*v+f*w+g*O,s[5]=d*m+f*M+g*R,s[8]=d*p+f*x+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*s,f=l*s-o*c,g=t*h+i*d+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(r*l-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(u*t-r*c)*v,e[5]=(r*s-a*t)*v,e[6]=f*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(mo.makeScale(e,t)),this}rotate(e){return this.premultiply(mo.makeRotation(-e)),this}translate(e,t){return this.premultiply(mo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mo=new Ge;function Rh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ws(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function xp(){const n=Ws("canvas");return n.style.display="block",n}const el={};function yr(n){n in el||(el[n]=!0,console.warn(n))}function yp(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Sp(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Mp(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const je={enabled:!0,workingColorSpace:ir,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===it&&(n.r=Pn(n.r),n.g=Pn(n.g),n.b=Pn(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===it&&(n.r=Zi(n.r),n.g=Zi(n.g),n.b=Zi(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Xn?no:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Pn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Zi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const tl=[.64,.33,.3,.6,.15,.06],nl=[.2126,.7152,.0722],il=[.3127,.329],rl=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sl=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);je.define({[ir]:{primaries:tl,whitePoint:il,transfer:no,toXYZ:rl,fromXYZ:sl,luminanceCoefficients:nl,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:tl,whitePoint:il,transfer:it,toXYZ:rl,fromXYZ:sl,luminanceCoefficients:nl,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}});let yi;class bp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{yi===void 0&&(yi=Ws("canvas")),yi.width=e.width,yi.height=e.height;const i=yi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=yi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ws("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Pn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Pn(t[i]/255)*255):t[i]=Pn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ep=0;class Ah{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=mi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(go(r[o].image)):s.push(go(r[o]))}else s=go(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function go(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?bp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wp=0;class Nt extends pi{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,i=ai,r=ai,s=gn,o=ci,a=hn,c=Ln,l=Nt.DEFAULT_ANISOTROPY,u=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=mi(),this.name="",this.source=new Ah(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xa:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case ya:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xa:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case ya:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=gh;Nt.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,i=0,r=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,x=(f+1)/2,O=(p+1)/2,R=(u+d)/4,A=(h+v)/4,F=(g+m)/4;return M>x&&M>O?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=R/i,s=A/i):x>O?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=R/r,s=F/r):O<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(O),i=A/s,r=F/s),this.set(i,r,s,t),this}let w=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(h-v)/w,this.z=(d-u)/w,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tp extends pi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Nt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ah(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fn extends Tp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ch extends Nt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Rp extends Nt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ui{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3];const d=s[o+0],f=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(h!==v||c!==d||l!==f||u!==g){let m=1-a;const p=c*d+l*f+u*g+h*v,w=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const O=Math.sqrt(M),R=Math.atan2(O,p*w);m=Math.sin(m*R)/O,a=Math.sin(a*R)/O}const x=a*w;if(c=c*m+d*x,l=l*m+f*x,u=u*m+g*x,h=h*m+v*x,m===1-a){const O=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=O,l*=O,u*=O,h*=O}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-a*f,e[t+2]=l*g+u*f+a*d-c*h,e[t+3]=u*g-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),h=a(s/2),d=c(i/2),f=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(i>a&&i>h){const f=2*Math.sqrt(1+i-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-i-h);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-i-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,i=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ol.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ol.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+c*l+o*h-a*u,this.y=i+c*u+a*l-s*h,this.z=r+c*h+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return vo.copy(this).projectOnVector(e),this.sub(vo)}reflect(e){return this.sub(vo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vo=new C,ol=new ui;class Xt{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(an.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(an.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=an.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,an):an.fromBufferAttribute(s,o),an.applyMatrix4(e.matrixWorld),this.expandByPoint(an);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Yr.copy(i.boundingBox)),Yr.applyMatrix4(e.matrixWorld),this.union(Yr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,an),an.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hr),qr.subVectors(this.max,hr),Si.subVectors(e.a,hr),Mi.subVectors(e.b,hr),bi.subVectors(e.c,hr),zn.subVectors(Mi,Si),kn.subVectors(bi,Mi),Jn.subVectors(Si,bi);let t=[0,-zn.z,zn.y,0,-kn.z,kn.y,0,-Jn.z,Jn.y,zn.z,0,-zn.x,kn.z,0,-kn.x,Jn.z,0,-Jn.x,-zn.y,zn.x,0,-kn.y,kn.x,0,-Jn.y,Jn.x,0];return!_o(t,Si,Mi,bi,qr)||(t=[1,0,0,0,1,0,0,0,1],!_o(t,Si,Mi,bi,qr))?!1:(jr.crossVectors(zn,kn),t=[jr.x,jr.y,jr.z],_o(t,Si,Mi,bi,qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,an).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(an).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Sn=[new C,new C,new C,new C,new C,new C,new C,new C],an=new C,Yr=new Xt,Si=new C,Mi=new C,bi=new C,zn=new C,kn=new C,Jn=new C,hr=new C,qr=new C,jr=new C,Kn=new C;function _o(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Kn.fromArray(n,s);const a=r.x*Math.abs(Kn.x)+r.y*Math.abs(Kn.y)+r.z*Math.abs(Kn.z),c=e.dot(Kn),l=t.dot(Kn),u=i.dot(Kn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Ap=new Xt,dr=new C,xo=new C;class gi{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ap.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;dr.subVectors(e,this.center);const t=dr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(dr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(dr.copy(e.center).add(xo)),this.expandByPoint(dr.copy(e.center).sub(xo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mn=new C,yo=new C,Jr=new C,Bn=new C,So=new C,Kr=new C,Mo=new C;class Br{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mn.copy(this.origin).addScaledVector(this.direction,t),Mn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){yo.copy(e).add(t).multiplyScalar(.5),Jr.copy(t).sub(e).normalize(),Bn.copy(this.origin).sub(yo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Jr),a=Bn.dot(this.direction),c=-Bn.dot(Jr),l=Bn.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*c-a,d=o*a-c,g=s*u,h>=0)if(d>=-g)if(d<=g){const v=1/u;h*=v,d*=v,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(yo).addScaledVector(Jr,d),f}intersectSphere(e,t){Mn.subVectors(e.center,this.origin);const i=Mn.dot(this.direction),r=Mn.dot(Mn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Mn)!==null}intersectTriangle(e,t,i,r,s){So.subVectors(t,e),Kr.subVectors(i,e),Mo.crossVectors(So,Kr);let o=this.direction.dot(Mo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bn.subVectors(this.origin,e);const c=a*this.direction.dot(Kr.crossVectors(Bn,Kr));if(c<0)return null;const l=a*this.direction.dot(So.cross(Bn));if(l<0||c+l>o)return null;const u=-a*Bn.dot(Mo);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,i,r,s,o,a,c,l,u,h,d,f,g,v,m){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,h,d,f,g,v,m)}set(e,t,i,r,s,o,a,c,l,u,h,d,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ei.setFromMatrixColumn(e,0).length(),s=1/Ei.setFromMatrixColumn(e,1).length(),o=1/Ei.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,f=o*h,g=a*u,v=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-v*l,t[9]=-a*c,t[2]=v-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,g=l*u,v=l*h;t[0]=d+v*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=v+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,g=l*u,v=l*h;t[0]=d-v*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=v-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,f=o*h,g=a*u,v=a*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+v,t[1]=c*h,t[5]=v*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=v-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-v*h}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+v,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cp,e,Ip)}lookAt(e,t,i){const r=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),Vn.crossVectors(i,Yt),Vn.lengthSq()===0&&(Math.abs(i.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),Vn.crossVectors(i,Yt)),Vn.normalize(),Qr.crossVectors(Yt,Vn),r[0]=Vn.x,r[4]=Qr.x,r[8]=Yt.x,r[1]=Vn.y,r[5]=Qr.y,r[9]=Yt.y,r[2]=Vn.z,r[6]=Qr.z,r[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],w=i[3],M=i[7],x=i[11],O=i[15],R=r[0],A=r[4],F=r[8],b=r[12],S=r[1],I=r[5],j=r[9],V=r[13],W=r[2],J=r[6],G=r[10],re=r[14],H=r[3],ne=r[7],ce=r[11],Se=r[15];return s[0]=o*R+a*S+c*W+l*H,s[4]=o*A+a*I+c*J+l*ne,s[8]=o*F+a*j+c*G+l*ce,s[12]=o*b+a*V+c*re+l*Se,s[1]=u*R+h*S+d*W+f*H,s[5]=u*A+h*I+d*J+f*ne,s[9]=u*F+h*j+d*G+f*ce,s[13]=u*b+h*V+d*re+f*Se,s[2]=g*R+v*S+m*W+p*H,s[6]=g*A+v*I+m*J+p*ne,s[10]=g*F+v*j+m*G+p*ce,s[14]=g*b+v*V+m*re+p*Se,s[3]=w*R+M*S+x*W+O*H,s[7]=w*A+M*I+x*J+O*ne,s[11]=w*F+M*j+x*G+O*ce,s[15]=w*b+M*V+x*re+O*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+s*c*h-r*l*h-s*a*d+i*l*d+r*a*f-i*c*f)+v*(+t*c*f-t*l*d+s*o*d-r*o*f+r*l*u-s*c*u)+m*(+t*l*h-t*a*f-s*o*h+i*o*f+s*a*u-i*l*u)+p*(-r*a*u-t*c*h+t*a*d+r*o*h-i*o*d+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],w=h*m*l-v*d*l+v*c*f-a*m*f-h*c*p+a*d*p,M=g*d*l-u*m*l-g*c*f+o*m*f+u*c*p-o*d*p,x=u*v*l-g*h*l+g*a*f-o*v*f-u*a*p+o*h*p,O=g*h*c-u*v*c-g*a*d+o*v*d+u*a*m-o*h*m,R=t*w+i*M+r*x+s*O;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=w*A,e[1]=(v*d*s-h*m*s-v*r*f+i*m*f+h*r*p-i*d*p)*A,e[2]=(a*m*s-v*c*s+v*r*l-i*m*l-a*r*p+i*c*p)*A,e[3]=(h*c*s-a*d*s-h*r*l+i*d*l+a*r*f-i*c*f)*A,e[4]=M*A,e[5]=(u*m*s-g*d*s+g*r*f-t*m*f-u*r*p+t*d*p)*A,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*p-t*c*p)*A,e[7]=(o*d*s-u*c*s+u*r*l-t*d*l-o*r*f+t*c*f)*A,e[8]=x*A,e[9]=(g*h*s-u*v*s-g*i*f+t*v*f+u*i*p-t*h*p)*A,e[10]=(o*v*s-g*a*s+g*i*l-t*v*l-o*i*p+t*a*p)*A,e[11]=(u*a*s-o*h*s-u*i*l+t*h*l+o*i*f-t*a*f)*A,e[12]=O*A,e[13]=(u*v*r-g*h*r+g*i*d-t*v*d-u*i*m+t*h*m)*A,e[14]=(g*a*r-o*v*r-g*i*c+t*v*c+o*i*m-t*a*m)*A,e[15]=(o*h*r-u*a*r+u*i*c-t*h*c-o*i*d+t*a*d)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,d=s*l,f=s*u,g=s*h,v=o*u,m=o*h,p=a*h,w=c*l,M=c*u,x=c*h,O=i.x,R=i.y,A=i.z;return r[0]=(1-(v+p))*O,r[1]=(f+x)*O,r[2]=(g-M)*O,r[3]=0,r[4]=(f-x)*R,r[5]=(1-(d+p))*R,r[6]=(m+w)*R,r[7]=0,r[8]=(g+M)*A,r[9]=(m-w)*A,r[10]=(1-(d+v))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ei.set(r[0],r[1],r[2]).length();const o=Ei.set(r[4],r[5],r[6]).length(),a=Ei.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],cn.copy(this);const l=1/s,u=1/o,h=1/a;return cn.elements[0]*=l,cn.elements[1]*=l,cn.elements[2]*=l,cn.elements[4]*=u,cn.elements[5]*=u,cn.elements[6]*=u,cn.elements[8]*=h,cn.elements[9]*=h,cn.elements[10]*=h,t.setFromRotationMatrix(cn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=An){const c=this.elements,l=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let f,g;if(a===An)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Gs)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=An){const c=this.elements,l=1/(t-e),u=1/(i-r),h=1/(o-s),d=(t+e)*l,f=(i+r)*u;let g,v;if(a===An)g=(o+s)*h,v=-2*h;else if(a===Gs)g=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ei=new C,cn=new ot,Cp=new C(0,0,0),Ip=new C(1,1,1),Vn=new C,Qr=new C,Yt=new C,al=new ot,cl=new ui;class Nn{constructor(e=0,t=0,i=0,r=Nn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return al.makeRotationFromQuaternion(e),this.setFromRotationMatrix(al,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cl.setFromEuler(this),this.setFromQuaternion(cl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nn.DEFAULT_ORDER="XYZ";class pc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Pp=0;const ll=new C,wi=new ui,bn=new ot,es=new C,fr=new C,Fp=new C,Dp=new ui,ul=new C(1,0,0),hl=new C(0,1,0),dl=new C(0,0,1),fl={type:"added"},Lp={type:"removed"},Ti={type:"childadded",child:null},bo={type:"childremoved",child:null};class Ut extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new C,t=new Nn,i=new ui,r=new C(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ot},normalMatrix:{value:new Ge}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.multiply(wi),this}rotateOnWorldAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.premultiply(wi),this}rotateX(e){return this.rotateOnAxis(ul,e)}rotateY(e){return this.rotateOnAxis(hl,e)}rotateZ(e){return this.rotateOnAxis(dl,e)}translateOnAxis(e,t){return ll.copy(e).applyQuaternion(this.quaternion),this.position.add(ll.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ul,e)}translateY(e){return this.translateOnAxis(hl,e)}translateZ(e){return this.translateOnAxis(dl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?es.copy(e):es.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(fr,es,this.up):bn.lookAt(es,fr,this.up),this.quaternion.setFromRotationMatrix(bn),r&&(bn.extractRotation(r.matrixWorld),wi.setFromRotationMatrix(bn),this.quaternion.premultiply(wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fl),Ti.child=e,this.dispatchEvent(Ti),Ti.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lp),bo.child=e,this.dispatchEvent(bo),bo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fl),Ti.child=e,this.dispatchEvent(Ti),Ti.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,e,Fp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,Dp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ut.DEFAULT_UP=new C(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new C,En=new C,Eo=new C,wn=new C,Ri=new C,Ai=new C,pl=new C,wo=new C,To=new C,Ro=new C,Ao=new xt,Co=new xt,Io=new xt;class nn{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ln.subVectors(e,t),r.cross(ln);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ln.subVectors(r,t),En.subVectors(i,t),Eo.subVectors(e,t);const o=ln.dot(ln),a=ln.dot(En),c=ln.dot(Eo),l=En.dot(En),u=En.dot(Eo),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,g=(o*u-a*c)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,wn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,wn.x),c.addScaledVector(o,wn.y),c.addScaledVector(a,wn.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return Ao.setScalar(0),Co.setScalar(0),Io.setScalar(0),Ao.fromBufferAttribute(e,t),Co.fromBufferAttribute(e,i),Io.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ao,s.x),o.addScaledVector(Co,s.y),o.addScaledVector(Io,s.z),o}static isFrontFacing(e,t,i,r){return ln.subVectors(i,t),En.subVectors(e,t),ln.cross(En).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),En.subVectors(this.a,this.b),ln.cross(En).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return nn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return nn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Ri.subVectors(r,i),Ai.subVectors(s,i),wo.subVectors(e,i);const c=Ri.dot(wo),l=Ai.dot(wo);if(c<=0&&l<=0)return t.copy(i);To.subVectors(e,r);const u=Ri.dot(To),h=Ai.dot(To);if(u>=0&&h<=u)return t.copy(r);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Ri,o);Ro.subVectors(e,s);const f=Ri.dot(Ro),g=Ai.dot(Ro);if(g>=0&&f<=g)return t.copy(s);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Ai,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return pl.subVectors(s,r),a=(h-u)/(h-u+(f-g)),t.copy(r).addScaledVector(pl,a);const p=1/(m+v+d);return o=v*p,a=d*p,t.copy(i).addScaledVector(Ri,o).addScaledVector(Ai,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ih={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},ts={h:0,s:0,l:0};function Po(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=je.workingColorSpace){return this.r=e,this.g=t,this.b=i,je.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=je.workingColorSpace){if(e=fc(e,1),t=Rt(t,0,1),i=Rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Po(o,s,e+1/3),this.g=Po(o,s,e),this.b=Po(o,s,e-1/3)}return je.toWorkingColorSpace(this,r),this}setStyle(e,t=Qt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const i=Ih[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pn(e.r),this.g=Pn(e.g),this.b=Pn(e.b),this}copyLinearToSRGB(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return je.fromWorkingColorSpace(Lt.copy(this),e),Math.round(Rt(Lt.r*255,0,255))*65536+Math.round(Rt(Lt.g*255,0,255))*256+Math.round(Rt(Lt.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(Lt.copy(this),t);const i=Lt.r,r=Lt.g,s=Lt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Qt){je.fromWorkingColorSpace(Lt.copy(this),e);const t=Lt.r,i=Lt.g,r=Lt.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Hn),this.setHSL(Hn.h+e,Hn.s+t,Hn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Hn),e.getHSL(ts);const i=br(Hn.h,ts.h,t),r=br(Hn.s,ts.s,t),s=br(Hn.l,ts.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new ke;ke.NAMES=Ih;let Np=0;class rr extends pi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=mi(),this.name="",this.blending=Gi,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ca,this.blendDst=la,this.blendEquation=si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xi,this.stencilZFail=xi,this.stencilZPass=xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Gi&&(i.blending=this.blending),this.side!==Fn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ca&&(i.blendSrc=this.blendSrc),this.blendDst!==la&&(i.blendDst=this.blendDst),this.blendEquation!==si&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Yi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==xi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==xi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class io extends rr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=uh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new C,ns=new ie;class It{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Jc,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ns.fromBufferAttribute(this,t),ns.applyMatrix3(e),this.setXY(t,ns.x,ns.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ui(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ui(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ui(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ui(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ui(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),r=Ot(r,this.array),s=Ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jc&&(e.usage=this.usage),e}}class Ph extends It{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Fh extends It{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class bt extends It{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Up=0;const Kt=new ot,Fo=new Ut,Ci=new C,qt=new Xt,pr=new Xt,Tt=new C;class Pt extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rh(e)?Fh:Ph)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,i){return Kt.makeTranslation(e,t,i),this.applyMatrix4(Kt),this}scale(e,t,i){return Kt.makeScale(e,t,i),this.applyMatrix4(Kt),this}lookAt(e){return Fo.lookAt(e),Fo.updateMatrix(),this.applyMatrix4(Fo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new bt(i,3))}else{for(let i=0,r=t.count;i<r;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];qt.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const i=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];pr.setFromBufferAttribute(a),this.morphTargetsRelative?(Tt.addVectors(qt.min,pr.min),qt.expandByPoint(Tt),Tt.addVectors(qt.max,pr.max),qt.expandByPoint(Tt)):(qt.expandByPoint(pr.min),qt.expandByPoint(pr.max))}qt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Tt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Tt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Tt.fromBufferAttribute(a,l),c&&(Ci.fromBufferAttribute(e,l),Tt.add(Ci)),r=Math.max(r,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new It(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let F=0;F<i.count;F++)a[F]=new C,c[F]=new C;const l=new C,u=new C,h=new C,d=new ie,f=new ie,g=new ie,v=new C,m=new C;function p(F,b,S){l.fromBufferAttribute(i,F),u.fromBufferAttribute(i,b),h.fromBufferAttribute(i,S),d.fromBufferAttribute(s,F),f.fromBufferAttribute(s,b),g.fromBufferAttribute(s,S),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(I),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(I),a[F].add(v),a[b].add(v),a[S].add(v),c[F].add(m),c[b].add(m),c[S].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let F=0,b=w.length;F<b;++F){const S=w[F],I=S.start,j=S.count;for(let V=I,W=I+j;V<W;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const M=new C,x=new C,O=new C,R=new C;function A(F){O.fromBufferAttribute(r,F),R.copy(O);const b=a[F];M.copy(b),M.sub(O.multiplyScalar(O.dot(b))).normalize(),x.crossVectors(R,b);const I=x.dot(c[F])<0?-1:1;o.setXYZW(F,M.x,M.y,M.z,I)}for(let F=0,b=w.length;F<b;++F){const S=w[F],I=S.start,j=S.count;for(let V=I,W=I+j;V<W;V+=3)A(e.getX(V+0)),A(e.getX(V+1)),A(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new It(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const r=new C,s=new C,o=new C,a=new C,c=new C,l=new C,u=new C,h=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new It(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pt,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ml=new ot,Qn=new Br,is=new gi,gl=new C,rs=new C,ss=new C,os=new C,Do=new C,as=new C,vl=new C,cs=new C;class Ct extends Ut{constructor(e=new Pt,t=new io){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){as.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(Do.fromBufferAttribute(h,e),o?as.addScaledVector(Do,u):as.addScaledVector(Do.sub(t),u))}t.add(as)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),is.copy(i.boundingSphere),is.applyMatrix4(s),Qn.copy(e.ray).recast(e.near),!(is.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(is,gl)===null||Qn.origin.distanceToSquared(gl)>(e.far-e.near)**2))&&(ml.copy(s).invert(),Qn.copy(e.ray).applyMatrix4(ml),!(i.boundingBox!==null&&Qn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Qn)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],w=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=w,O=M;x<O;x+=3){const R=a.getX(x),A=a.getX(x+1),F=a.getX(x+2);r=ls(this,p,e,i,l,u,h,R,A,F),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const w=a.getX(m),M=a.getX(m+1),x=a.getX(m+2);r=ls(this,o,e,i,l,u,h,w,M,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],w=Math.max(m.start,f.start),M=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=w,O=M;x<O;x+=3){const R=x,A=x+1,F=x+2;r=ls(this,p,e,i,l,u,h,R,A,F),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const w=m,M=m+1,x=m+2;r=ls(this,o,e,i,l,u,h,w,M,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Op(n,e,t,i,r,s,o,a){let c;if(e.side===Wt?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Fn,a),c===null)return null;cs.copy(a),cs.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(cs);return l<t.near||l>t.far?null:{distance:l,point:cs.clone(),object:n}}function ls(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,rs),n.getVertexPosition(c,ss),n.getVertexPosition(l,os);const u=Op(n,e,t,i,rs,ss,os,vl);if(u){const h=new C;nn.getBarycoord(vl,rs,ss,os,h),r&&(u.uv=nn.getInterpolatedAttribute(r,a,c,l,h,new ie)),s&&(u.uv1=nn.getInterpolatedAttribute(s,a,c,l,h,new ie)),o&&(u.normal=nn.getInterpolatedAttribute(o,a,c,l,h,new C),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new C,materialIndex:0};nn.getNormal(rs,ss,os,d.normal),u.face=d,u.barycoord=h}return u}class Vr extends Pt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new bt(l,3)),this.setAttribute("normal",new bt(u,3)),this.setAttribute("uv",new bt(h,2));function g(v,m,p,w,M,x,O,R,A,F,b){const S=x/A,I=O/F,j=x/2,V=O/2,W=R/2,J=A+1,G=F+1;let re=0,H=0;const ne=new C;for(let ce=0;ce<G;ce++){const Se=ce*I-V;for(let Oe=0;Oe<J;Oe++){const Je=Oe*S-j;ne[v]=Je*w,ne[m]=Se*M,ne[p]=W,l.push(ne.x,ne.y,ne.z),ne[v]=0,ne[m]=0,ne[p]=R>0?1:-1,u.push(ne.x,ne.y,ne.z),h.push(Oe/A),h.push(1-ce/F),re+=1}}for(let ce=0;ce<F;ce++)for(let Se=0;Se<A;Se++){const Oe=d+Se+J*ce,Je=d+Se+J*(ce+1),Y=d+(Se+1)+J*(ce+1),se=d+(Se+1)+J*ce;c.push(Oe,Je,se),c.push(Je,Y,se),H+=6}a.addGroup(f,H,b),f+=H,d+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function kt(n){const e={};for(let t=0;t<n.length;t++){const i=Qi(n[t]);for(const r in i)e[r]=i[r]}return e}function zp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Dh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const Pr={clone:Qi,merge:kt};var kp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mt extends rr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kp,this.fragmentShader=Bp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qi(e.uniforms),this.uniformsGroups=zp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Lh extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=An}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gn=new C,_l=new ie,xl=new ie;class en extends Lh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ir*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ir*2*Math.atan(Math.tan(Xi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z)}getViewSize(e,t){return this.getViewBounds(e,_l,xl),t.subVectors(xl,_l)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xi*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ii=-90,Pi=1;class Vp extends Ut{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new en(Ii,Pi,e,t);r.layers=this.layers,this.add(r);const s=new en(Ii,Pi,e,t);s.layers=this.layers,this.add(s);const o=new en(Ii,Pi,e,t);o.layers=this.layers,this.add(o);const a=new en(Ii,Pi,e,t);a.layers=this.layers,this.add(a);const c=new en(Ii,Pi,e,t);c.layers=this.layers,this.add(c);const l=new en(Ii,Pi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===An)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Gs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Nh extends Nt{constructor(e,t,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:qi,super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hp extends fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Nh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:gn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Vr(5,5,5),s=new Mt({name:"CubemapFromEquirect",uniforms:Qi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Wt,blending:Cn});s.uniforms.tEquirect.value=t;const o=new Ct(r,s),a=t.minFilter;return t.minFilter===ci&&(t.minFilter=gn),new Vp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Lo=new C,Gp=new C,Wp=new Ge;class Wn{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Lo.subVectors(i,t).cross(Gp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Lo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Wp.getNormalMatrix(e),r=this.coplanarPoint(Lo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ei=new gi,us=new C;class Uh{constructor(e=new Wn,t=new Wn,i=new Wn,r=new Wn,s=new Wn,o=new Wn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=An){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],h=r[6],d=r[7],f=r[8],g=r[9],v=r[10],m=r[11],p=r[12],w=r[13],M=r[14],x=r[15];if(i[0].setComponents(c-s,d-l,m-f,x-p).normalize(),i[1].setComponents(c+s,d+l,m+f,x+p).normalize(),i[2].setComponents(c+o,d+u,m+g,x+w).normalize(),i[3].setComponents(c-o,d-u,m-g,x-w).normalize(),i[4].setComponents(c-a,d-h,m-v,x-M).normalize(),t===An)i[5].setComponents(c+a,d+h,m+v,x+M).normalize();else if(t===Gs)i[5].setComponents(a,h,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(e){return ei.center.set(0,0,0),ei.radius=.7071067811865476,ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(us.x=r.normal.x>0?e.max.x:e.min.x,us.y=r.normal.y>0?e.max.y:e.min.y,us.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(us)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Oh(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Xp(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],v=h[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,h[d]=v)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const v=h[f];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}class ro extends Pt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,h=e/a,d=t/c,f=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const w=p*d-o;for(let M=0;M<l;M++){const x=M*h-s;g.push(x,-w,0),v.push(0,0,1),m.push(M/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<a;w++){const M=w+l*p,x=w+l*(p+1),O=w+1+l*(p+1),R=w+1+l*p;f.push(M,x,R),f.push(x,O,R)}this.setIndex(f),this.setAttribute("position",new bt(g,3)),this.setAttribute("normal",new bt(v,3)),this.setAttribute("uv",new bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ro(e.width,e.height,e.widthSegments,e.heightSegments)}}var Zp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$p=`#ifdef USE_ALPHAHASH
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
#endif`,Yp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kp=`#ifdef USE_AOMAP
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
#endif`,Qp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,em=`#ifdef USE_BATCHING
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
#endif`,tm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,im=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sm=`#ifdef USE_IRIDESCENCE
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
#endif`,om=`#ifdef USE_BUMPMAP
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
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,mm=`#define PI 3.141592653589793
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
} // validated`,gm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vm=`vec3 transformedNormal = objectNormal;
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
#endif`,_m=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ym=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mm="gl_FragColor = linearToOutputTexel( gl_FragColor );",bm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Em=`#ifdef USE_ENVMAP
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
#endif`,wm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tm=`#ifdef USE_ENVMAP
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
#endif`,Rm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Am=`#ifdef USE_ENVMAP
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
#endif`,Cm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Im=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dm=`#ifdef USE_GRADIENTMAP
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
}`,Lm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Om=`uniform bool receiveShadow;
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
#endif`,zm=`#ifdef USE_ENVMAP
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
#endif`,km=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gm=`PhysicalMaterial material;
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
#endif`,Wm=`struct PhysicalMaterial {
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
}`,Xm=`
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
#endif`,Zm=`#if defined( RE_IndirectDiffuse )
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
#endif`,$m=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ym=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Km=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tg=`#if defined( USE_POINTS_UV )
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
#endif`,ng=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ig=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,og=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ag=`#ifdef USE_MORPHTARGETS
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
#endif`,cg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ug=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pg=`#ifdef USE_NORMALMAP
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
#endif`,mg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_g=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Eg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ag=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ig=`float getShadowMask() {
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
}`,Pg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fg=`#ifdef USE_SKINNING
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
#endif`,Dg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lg=`#ifdef USE_SKINNING
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
#endif`,Ng=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ug=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Og=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kg=`#ifdef USE_TRANSMISSION
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
#endif`,Bg=`#ifdef USE_TRANSMISSION
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
#endif`,Vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zg=`uniform sampler2D t2D;
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
}`,$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jg=`#include <common>
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
}`,Kg=`#if DEPTH_PACKING == 3200
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
}`,Qg=`#define DISTANCE
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
}`,ev=`#define DISTANCE
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
}`,tv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iv=`uniform float scale;
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
}`,rv=`uniform vec3 diffuse;
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
}`,sv=`#include <common>
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
}`,ov=`uniform vec3 diffuse;
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
}`,av=`#define LAMBERT
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
}`,cv=`#define LAMBERT
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
}`,lv=`#define MATCAP
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
}`,uv=`#define MATCAP
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
}`,hv=`#define NORMAL
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
}`,dv=`#define NORMAL
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
}`,fv=`#define PHONG
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
}`,pv=`#define PHONG
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
}`,mv=`#define STANDARD
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
}`,gv=`#define STANDARD
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
}`,vv=`#define TOON
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
}`,_v=`#define TOON
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
}`,xv=`uniform float size;
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
}`,yv=`uniform vec3 diffuse;
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
}`,Sv=`#include <common>
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
}`,Mv=`uniform vec3 color;
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
}`,bv=`uniform float rotation;
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
}`,Ev=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Zp,alphahash_pars_fragment:$p,alphamap_fragment:Yp,alphamap_pars_fragment:qp,alphatest_fragment:jp,alphatest_pars_fragment:Jp,aomap_fragment:Kp,aomap_pars_fragment:Qp,batching_pars_vertex:em,batching_vertex:tm,begin_vertex:nm,beginnormal_vertex:im,bsdfs:rm,iridescence_fragment:sm,bumpmap_pars_fragment:om,clipping_planes_fragment:am,clipping_planes_pars_fragment:cm,clipping_planes_pars_vertex:lm,clipping_planes_vertex:um,color_fragment:hm,color_pars_fragment:dm,color_pars_vertex:fm,color_vertex:pm,common:mm,cube_uv_reflection_fragment:gm,defaultnormal_vertex:vm,displacementmap_pars_vertex:_m,displacementmap_vertex:xm,emissivemap_fragment:ym,emissivemap_pars_fragment:Sm,colorspace_fragment:Mm,colorspace_pars_fragment:bm,envmap_fragment:Em,envmap_common_pars_fragment:wm,envmap_pars_fragment:Tm,envmap_pars_vertex:Rm,envmap_physical_pars_fragment:zm,envmap_vertex:Am,fog_vertex:Cm,fog_pars_vertex:Im,fog_fragment:Pm,fog_pars_fragment:Fm,gradientmap_pars_fragment:Dm,lightmap_pars_fragment:Lm,lights_lambert_fragment:Nm,lights_lambert_pars_fragment:Um,lights_pars_begin:Om,lights_toon_fragment:km,lights_toon_pars_fragment:Bm,lights_phong_fragment:Vm,lights_phong_pars_fragment:Hm,lights_physical_fragment:Gm,lights_physical_pars_fragment:Wm,lights_fragment_begin:Xm,lights_fragment_maps:Zm,lights_fragment_end:$m,logdepthbuf_fragment:Ym,logdepthbuf_pars_fragment:qm,logdepthbuf_pars_vertex:jm,logdepthbuf_vertex:Jm,map_fragment:Km,map_pars_fragment:Qm,map_particle_fragment:eg,map_particle_pars_fragment:tg,metalnessmap_fragment:ng,metalnessmap_pars_fragment:ig,morphinstance_vertex:rg,morphcolor_vertex:sg,morphnormal_vertex:og,morphtarget_pars_vertex:ag,morphtarget_vertex:cg,normal_fragment_begin:lg,normal_fragment_maps:ug,normal_pars_fragment:hg,normal_pars_vertex:dg,normal_vertex:fg,normalmap_pars_fragment:pg,clearcoat_normal_fragment_begin:mg,clearcoat_normal_fragment_maps:gg,clearcoat_pars_fragment:vg,iridescence_pars_fragment:_g,opaque_fragment:xg,packing:yg,premultiplied_alpha_fragment:Sg,project_vertex:Mg,dithering_fragment:bg,dithering_pars_fragment:Eg,roughnessmap_fragment:wg,roughnessmap_pars_fragment:Tg,shadowmap_pars_fragment:Rg,shadowmap_pars_vertex:Ag,shadowmap_vertex:Cg,shadowmask_pars_fragment:Ig,skinbase_vertex:Pg,skinning_pars_vertex:Fg,skinning_vertex:Dg,skinnormal_vertex:Lg,specularmap_fragment:Ng,specularmap_pars_fragment:Ug,tonemapping_fragment:Og,tonemapping_pars_fragment:zg,transmission_fragment:kg,transmission_pars_fragment:Bg,uv_pars_fragment:Vg,uv_pars_vertex:Hg,uv_vertex:Gg,worldpos_vertex:Wg,background_vert:Xg,background_frag:Zg,backgroundCube_vert:$g,backgroundCube_frag:Yg,cube_vert:qg,cube_frag:jg,depth_vert:Jg,depth_frag:Kg,distanceRGBA_vert:Qg,distanceRGBA_frag:ev,equirect_vert:tv,equirect_frag:nv,linedashed_vert:iv,linedashed_frag:rv,meshbasic_vert:sv,meshbasic_frag:ov,meshlambert_vert:av,meshlambert_frag:cv,meshmatcap_vert:lv,meshmatcap_frag:uv,meshnormal_vert:hv,meshnormal_frag:dv,meshphong_vert:fv,meshphong_frag:pv,meshphysical_vert:mv,meshphysical_frag:gv,meshtoon_vert:vv,meshtoon_frag:_v,points_vert:xv,points_frag:yv,shadow_vert:Sv,shadow_frag:Mv,sprite_vert:bv,sprite_frag:Ev},de={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},mn={basic:{uniforms:kt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:kt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new ke(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:kt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:kt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:kt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new ke(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:kt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:kt([de.points,de.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:kt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:kt([de.common,de.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:kt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:kt([de.sprite,de.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:kt([de.common,de.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:kt([de.lights,de.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};mn.physical={uniforms:kt([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const hs={r:0,b:0,g:0},ti=new Nn,wv=new ot;function Tv(n,e,t,i,r,s,o){const a=new ke(0);let c=s===!0?0:1,l,u,h=null,d=0,f=null;function g(w){let M=w.isScene===!0?w.background:null;return M&&M.isTexture&&(M=(w.backgroundBlurriness>0?t:e).get(M)),M}function v(w){let M=!1;const x=g(w);x===null?p(a,c):x&&x.isColor&&(p(x,1),M=!0);const O=n.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(w,M){const x=g(M);x&&(x.isCubeTexture||x.mapping===to)?(u===void 0&&(u=new Ct(new Vr(1,1,1),new Mt({name:"BackgroundCubeMaterial",uniforms:Qi(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(O,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ti.copy(M.backgroundRotation),ti.x*=-1,ti.y*=-1,ti.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(wv.makeRotationFromEuler(ti)),u.material.toneMapped=je.getTransfer(x.colorSpace)!==it,(h!==x||d!==x.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,f=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Ct(new ro(2,2),new Mt({name:"BackgroundMaterial",uniforms:Qi(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=je.getTransfer(x.colorSpace)!==it,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,f=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function p(w,M){w.getRGB(hs,Dh(n)),i.buffers.color.setClear(hs.r,hs.g,hs.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(w,M=1){a.set(w),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,p(a,c)},render:v,addToRenderList:m}}function Rv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(S,I,j,V,W){let J=!1;const G=h(V,j,I);s!==G&&(s=G,l(s.object)),J=f(S,V,j,W),J&&g(S,V,j,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,x(S,I,j,V),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return n.createVertexArray()}function l(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function h(S,I,j){const V=j.wireframe===!0;let W=i[S.id];W===void 0&&(W={},i[S.id]=W);let J=W[I.id];J===void 0&&(J={},W[I.id]=J);let G=J[V];return G===void 0&&(G=d(c()),J[V]=G),G}function d(S){const I=[],j=[],V=[];for(let W=0;W<t;W++)I[W]=0,j[W]=0,V[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:j,attributeDivisors:V,object:S,attributes:{},index:null}}function f(S,I,j,V){const W=s.attributes,J=I.attributes;let G=0;const re=j.getAttributes();for(const H in re)if(re[H].location>=0){const ce=W[H];let Se=J[H];if(Se===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(Se=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(Se=S.instanceColor)),ce===void 0||ce.attribute!==Se||Se&&ce.data!==Se.data)return!0;G++}return s.attributesNum!==G||s.index!==V}function g(S,I,j,V){const W={},J=I.attributes;let G=0;const re=j.getAttributes();for(const H in re)if(re[H].location>=0){let ce=J[H];ce===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(ce=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(ce=S.instanceColor));const Se={};Se.attribute=ce,ce&&ce.data&&(Se.data=ce.data),W[H]=Se,G++}s.attributes=W,s.attributesNum=G,s.index=V}function v(){const S=s.newAttributes;for(let I=0,j=S.length;I<j;I++)S[I]=0}function m(S){p(S,0)}function p(S,I){const j=s.newAttributes,V=s.enabledAttributes,W=s.attributeDivisors;j[S]=1,V[S]===0&&(n.enableVertexAttribArray(S),V[S]=1),W[S]!==I&&(n.vertexAttribDivisor(S,I),W[S]=I)}function w(){const S=s.newAttributes,I=s.enabledAttributes;for(let j=0,V=I.length;j<V;j++)I[j]!==S[j]&&(n.disableVertexAttribArray(j),I[j]=0)}function M(S,I,j,V,W,J,G){G===!0?n.vertexAttribIPointer(S,I,j,W,J):n.vertexAttribPointer(S,I,j,V,W,J)}function x(S,I,j,V){v();const W=V.attributes,J=j.getAttributes(),G=I.defaultAttributeValues;for(const re in J){const H=J[re];if(H.location>=0){let ne=W[re];if(ne===void 0&&(re==="instanceMatrix"&&S.instanceMatrix&&(ne=S.instanceMatrix),re==="instanceColor"&&S.instanceColor&&(ne=S.instanceColor)),ne!==void 0){const ce=ne.normalized,Se=ne.itemSize,Oe=e.get(ne);if(Oe===void 0)continue;const Je=Oe.buffer,Y=Oe.type,se=Oe.bytesPerElement,xe=Y===n.INT||Y===n.UNSIGNED_INT||ne.gpuType===oc;if(ne.isInterleavedBufferAttribute){const ue=ne.data,Ce=ue.stride,Ue=ne.offset;if(ue.isInstancedInterleavedBuffer){for(let Le=0;Le<H.locationSize;Le++)p(H.location+Le,ue.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Le=0;Le<H.locationSize;Le++)m(H.location+Le);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let Le=0;Le<H.locationSize;Le++)M(H.location+Le,Se/H.locationSize,Y,ce,Ce*se,(Ue+Se/H.locationSize*Le)*se,xe)}else{if(ne.isInstancedBufferAttribute){for(let ue=0;ue<H.locationSize;ue++)p(H.location+ue,ne.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ue=0;ue<H.locationSize;ue++)m(H.location+ue);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let ue=0;ue<H.locationSize;ue++)M(H.location+ue,Se/H.locationSize,Y,ce,Se*se,Se/H.locationSize*ue*se,xe)}}else if(G!==void 0){const ce=G[re];if(ce!==void 0)switch(ce.length){case 2:n.vertexAttrib2fv(H.location,ce);break;case 3:n.vertexAttrib3fv(H.location,ce);break;case 4:n.vertexAttrib4fv(H.location,ce);break;default:n.vertexAttrib1fv(H.location,ce)}}}}w()}function O(){F();for(const S in i){const I=i[S];for(const j in I){const V=I[j];for(const W in V)u(V[W].object),delete V[W];delete I[j]}delete i[S]}}function R(S){if(i[S.id]===void 0)return;const I=i[S.id];for(const j in I){const V=I[j];for(const W in V)u(V[W].object),delete V[W];delete I[j]}delete i[S.id]}function A(S){for(const I in i){const j=i[I];if(j[S.id]===void 0)continue;const V=j[S.id];for(const W in V)u(V[W].object),delete V[W];delete j[S.id]}}function F(){b(),o=!0,s!==r&&(s=r,l(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:F,resetDefaultState:b,dispose:O,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:w}}function Av(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),t.update(u,i,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,i,1)}function c(l,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*d[v];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Cv(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==hn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const F=A===In&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ln&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==vn&&!F)}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),O=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:O,maxSamples:R}}function Iv(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Wn,a=new Ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||r;return r=d,i=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const w=s?0:i,M=w*4;let x=p.clippingState||null;c.value=x,x=u(g,d,M,f);for(let O=0;O!==M;++O)x[O]=t[O];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=f+v*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,x=f;M!==v;++M,x+=4)o.copy(h[M]).applyMatrix4(w,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Pv(n){let e=new WeakMap;function t(o,a){return a===va?o.mapping=qi:a===_a&&(o.mapping=ji),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===va||a===_a)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Hp(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class zh extends Lh{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ki=4,yl=[.125,.215,.35,.446,.526,.582],oi=20,No=new zh,Sl=new ke;let Uo=null,Oo=0,zo=0,ko=!1;const ri=(1+Math.sqrt(5))/2,Fi=1/ri,Ml=[new C(-ri,Fi,0),new C(ri,Fi,0),new C(-Fi,0,ri),new C(Fi,0,ri),new C(0,ri,-Fi),new C(0,ri,Fi),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class bl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Uo=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),zo=this._renderer.getActiveMipmapLevel(),ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Uo,Oo,zo),this._renderer.xr.enabled=ko,e.scissorTest=!1,ds(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qi||e.mapping===ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uo=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),zo=this._renderer.getActiveMipmapLevel(),ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:In,format:hn,colorSpace:ir,depthBuffer:!1},r=El(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=El(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fv(s)),this._blurMaterial=Dv(s,e,t)}return r}_compileMaterial(e){const t=new Ct(this._lodPlanes[0],e);this._renderer.compile(t,No)}_sceneToCubeUV(e,t,i,r){const a=new en(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Sl),u.toneMapping=Zn,u.autoClear=!1;const f=new io({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),g=new Ct(new Vr,f);let v=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(Sl),v=!0);for(let p=0;p<6;p++){const w=p%3;w===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):w===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const M=this._cubeSize;ds(r,w*M,p>2?M:0,M,M),u.setRenderTarget(r),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===qi||e.mapping===ji;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wl());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ct(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;ds(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,No)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ml[(r-s-1)%Ml.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ct(this._lodPlanes[r],l),d=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*oi-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):oi;m>oi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${oi}`);const p=[];let w=0;for(let A=0;A<oi;++A){const F=A/v,b=Math.exp(-F*F/2);p.push(b),A===0?w+=b:A<m&&(w+=2*b)}for(let A=0;A<p.length;A++)p[A]=p[A]/w;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-i;const x=this._sizeLods[r],O=3*x*(r>M-ki?r-M+ki:0),R=4*(this._cubeSize-x);ds(t,O,R,3*x,2*x),c.setRenderTarget(t),c.render(h,No)}}function Fv(n){const e=[],t=[],i=[];let r=n;const s=n-ki+1+yl.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>n-ki?c=yl[o-n+ki-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,v=3,m=2,p=1,w=new Float32Array(v*g*f),M=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let R=0;R<f;R++){const A=R%3*2/3-1,F=R>2?0:-1,b=[A,F,0,A+2/3,F,0,A+2/3,F+1,0,A,F,0,A+2/3,F+1,0,A,F+1,0];w.set(b,v*g*R),M.set(d,m*g*R);const S=[R,R,R,R,R,R];x.set(S,p*g*R)}const O=new Pt;O.setAttribute("position",new It(w,v)),O.setAttribute("uv",new It(M,m)),O.setAttribute("faceIndex",new It(x,p)),e.push(O),r>ki&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function El(n,e,t){const i=new fn(n,e,t);return i.texture.mapping=to,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ds(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Dv(n,e,t){const i=new Float32Array(oi),r=new C(0,1,0);return new Mt({name:"SphericalGaussianBlur",defines:{n:oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:mc(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function wl(){return new Mt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mc(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Tl(){return new Mt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function mc(){return`

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
	`}function Lv(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===va||c===_a,u=c===qi||c===ji;if(l||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new bl(n)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new bl(n)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Nv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&yr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Uv(n,e,t,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}d.removeEventListener("dispose",o),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],n.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,g=h.attributes.position;let v=0;if(f!==null){const w=f.array;v=f.version;for(let M=0,x=w.length;M<x;M+=3){const O=w[M+0],R=w[M+1],A=w[M+2];d.push(O,R,R,A,A,O)}}else if(g!==void 0){const w=g.array;v=g.version;for(let M=0,x=w.length/3-1;M<x;M+=3){const O=M+0,R=M+1,A=M+2;d.push(O,R,R,A,A,O)}}else return;const m=new(Rh(d)?Fh:Ph)(d,1);m.version=v;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Ov(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,f){n.drawElements(i,f,s,d*o),t.update(f,i,1)}function l(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,s,d*o,g),t.update(f,i,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function h(d,f,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,v,0,g);let p=0;for(let w=0;w<g;w++)p+=f[w]*v[w];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function zv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function kv(n,e,t){const i=new WeakMap,r=new xt;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let b=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let M=0;f===!0&&(M=1),g===!0&&(M=2),v===!0&&(M=3);let x=a.attributes.position.count*M,O=1;x>e.maxTextureSize&&(O=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const R=new Float32Array(x*O*4*h),A=new Ch(R,x,O,h);A.type=vn,A.needsUpdate=!0;const F=M*4;for(let S=0;S<h;S++){const I=m[S],j=p[S],V=w[S],W=x*O*4*S;for(let J=0;J<I.count;J++){const G=J*F;f===!0&&(r.fromBufferAttribute(I,J),R[W+G+0]=r.x,R[W+G+1]=r.y,R[W+G+2]=r.z,R[W+G+3]=0),g===!0&&(r.fromBufferAttribute(j,J),R[W+G+4]=r.x,R[W+G+5]=r.y,R[W+G+6]=r.z,R[W+G+7]=0),v===!0&&(r.fromBufferAttribute(V,J),R[W+G+8]=r.x,R[W+G+9]=r.y,R[W+G+10]=r.z,R[W+G+11]=V.itemSize===4?r.w:1)}}d={count:h,texture:A,size:new ie(x,O)},i.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];const g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function Bv(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return h}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}class kh extends Nt{constructor(e,t,i,r,s,o,a,c,l,u=Wi){if(u!==Wi&&u!==Ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Wi&&(i=li),i===void 0&&u===Ki&&(i=Ji),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:jt,this.minFilter=c!==void 0?c:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Bh=new Nt,Rl=new kh(1,1),Vh=new Ch,Hh=new Rp,Gh=new Nh,Al=[],Cl=[],Il=new Float32Array(16),Pl=new Float32Array(9),Fl=new Float32Array(4);function sr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Al[r];if(s===void 0&&(s=new Float32Array(r),Al[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Et(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function so(n,e){let t=Cl[e];t===void 0&&(t=new Int32Array(e),Cl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Vv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Hv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2fv(this.addr,e),wt(t,e)}}function Gv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;n.uniform3fv(this.addr,e),wt(t,e)}}function Wv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4fv(this.addr,e),wt(t,e)}}function Xv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,i))return;Fl.set(i),n.uniformMatrix2fv(this.addr,!1,Fl),wt(t,i)}}function Zv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,i))return;Pl.set(i),n.uniformMatrix3fv(this.addr,!1,Pl),wt(t,i)}}function $v(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,i))return;Il.set(i),n.uniformMatrix4fv(this.addr,!1,Il),wt(t,i)}}function Yv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function qv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2iv(this.addr,e),wt(t,e)}}function jv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3iv(this.addr,e),wt(t,e)}}function Jv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4iv(this.addr,e),wt(t,e)}}function Kv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Qv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2uiv(this.addr,e),wt(t,e)}}function e_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3uiv(this.addr,e),wt(t,e)}}function t_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4uiv(this.addr,e),wt(t,e)}}function n_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Rl.compareFunction=Th,s=Rl):s=Bh,t.setTexture2D(e||s,r)}function i_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Hh,r)}function r_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Gh,r)}function s_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Vh,r)}function o_(n){switch(n){case 5126:return Vv;case 35664:return Hv;case 35665:return Gv;case 35666:return Wv;case 35674:return Xv;case 35675:return Zv;case 35676:return $v;case 5124:case 35670:return Yv;case 35667:case 35671:return qv;case 35668:case 35672:return jv;case 35669:case 35673:return Jv;case 5125:return Kv;case 36294:return Qv;case 36295:return e_;case 36296:return t_;case 35678:case 36198:case 36298:case 36306:case 35682:return n_;case 35679:case 36299:case 36307:return i_;case 35680:case 36300:case 36308:case 36293:return r_;case 36289:case 36303:case 36311:case 36292:return s_}}function a_(n,e){n.uniform1fv(this.addr,e)}function c_(n,e){const t=sr(e,this.size,2);n.uniform2fv(this.addr,t)}function l_(n,e){const t=sr(e,this.size,3);n.uniform3fv(this.addr,t)}function u_(n,e){const t=sr(e,this.size,4);n.uniform4fv(this.addr,t)}function h_(n,e){const t=sr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function d_(n,e){const t=sr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function f_(n,e){const t=sr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function p_(n,e){n.uniform1iv(this.addr,e)}function m_(n,e){n.uniform2iv(this.addr,e)}function g_(n,e){n.uniform3iv(this.addr,e)}function v_(n,e){n.uniform4iv(this.addr,e)}function __(n,e){n.uniform1uiv(this.addr,e)}function x_(n,e){n.uniform2uiv(this.addr,e)}function y_(n,e){n.uniform3uiv(this.addr,e)}function S_(n,e){n.uniform4uiv(this.addr,e)}function M_(n,e,t){const i=this.cache,r=e.length,s=so(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Bh,s[o])}function b_(n,e,t){const i=this.cache,r=e.length,s=so(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Hh,s[o])}function E_(n,e,t){const i=this.cache,r=e.length,s=so(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Gh,s[o])}function w_(n,e,t){const i=this.cache,r=e.length,s=so(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Vh,s[o])}function T_(n){switch(n){case 5126:return a_;case 35664:return c_;case 35665:return l_;case 35666:return u_;case 35674:return h_;case 35675:return d_;case 35676:return f_;case 5124:case 35670:return p_;case 35667:case 35671:return m_;case 35668:case 35672:return g_;case 35669:case 35673:return v_;case 5125:return __;case 36294:return x_;case 36295:return y_;case 36296:return S_;case 35678:case 36198:case 36298:case 36306:case 35682:return M_;case 35679:case 36299:case 36307:return b_;case 35680:case 36300:case 36308:case 36293:return E_;case 36289:case 36303:case 36311:case 36292:return w_}}class R_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=o_(t.type)}}class A_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=T_(t.type)}}class C_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Bo=/(\w+)(\])?(\[|\.)?/g;function Dl(n,e){n.seq.push(e),n.map[e.id]=e}function I_(n,e,t){const i=n.name,r=i.length;for(Bo.lastIndex=0;;){const s=Bo.exec(i),o=Bo.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Dl(t,l===void 0?new R_(a,n,e):new A_(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new C_(a),Dl(t,h)),t=h}}}class Vs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);I_(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Ll(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const P_=37297;let F_=0;function D_(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Nl=new Ge;function L_(n){je._getMatrix(Nl,je.workingColorSpace,n);const e=`mat3( ${Nl.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(n)){case no:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ul(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+D_(n.getShaderSource(e),o)}else return r}function N_(n,e){const t=L_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function U_(n,e){let t;switch(e){case hh:t="Linear";break;case dh:t="Reinhard";break;case fh:t="Cineon";break;case sc:t="ACESFilmic";break;case ph:t="AgX";break;case mh:t="Neutral";break;case Wf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const fs=new C;function O_(){je.getLuminanceCoefficients(fs);const n=fs.x.toFixed(4),e=fs.y.toFixed(4),t=fs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function z_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sr).join(`
`)}function k_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function B_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Sr(n){return n!==""}function Ol(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const V_=/^[ \t]*#include +<([\w\d./]+)>/gm;function $a(n){return n.replace(V_,G_)}const H_=new Map;function G_(n,e){let t=Xe[e];if(t===void 0){const i=H_.get(e);if(i!==void 0)t=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return $a(t)}const W_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kl(n){return n.replace(W_,X_)}function X_(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Bl(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Z_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===lh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===bf?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Tn&&(e="SHADOWMAP_TYPE_VSM"),e}function $_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case qi:case ji:e="ENVMAP_TYPE_CUBE";break;case to:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Y_(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ji:e="ENVMAP_MODE_REFRACTION";break}return e}function q_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case uh:e="ENVMAP_BLENDING_MULTIPLY";break;case Hf:e="ENVMAP_BLENDING_MIX";break;case Gf:e="ENVMAP_BLENDING_ADD";break}return e}function j_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function J_(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Z_(t),l=$_(t),u=Y_(t),h=q_(t),d=j_(t),f=z_(t),g=k_(s),v=r.createProgram();let m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Sr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Sr).join(`
`),p.length>0&&(p+=`
`)):(m=[Bl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sr).join(`
`),p=[Bl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zn?"#define TONE_MAPPING":"",t.toneMapping!==Zn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Zn?U_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,N_("linearToOutputTexel",t.outputColorSpace),O_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sr).join(`
`)),o=$a(o),o=Ol(o,t),o=zl(o,t),a=$a(a),a=Ol(a,t),a=zl(a,t),o=kl(o),a=kl(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=w+m+o,x=w+p+a,O=Ll(r,r.VERTEX_SHADER,M),R=Ll(r,r.FRAGMENT_SHADER,x);r.attachShader(v,O),r.attachShader(v,R),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function A(I){if(n.debug.checkShaderErrors){const j=r.getProgramInfoLog(v).trim(),V=r.getShaderInfoLog(O).trim(),W=r.getShaderInfoLog(R).trim();let J=!0,G=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,O,R);else{const re=Ul(r,O,"vertex"),H=Ul(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+j+`
`+re+`
`+H)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(V===""||W==="")&&(G=!1);G&&(I.diagnostics={runnable:J,programLog:j,vertexShader:{log:V,prefix:m},fragmentShader:{log:W,prefix:p}})}r.deleteShader(O),r.deleteShader(R),F=new Vs(r,v),b=B_(r,v)}let F;this.getUniforms=function(){return F===void 0&&A(this),F};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(v,P_)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=F_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=O,this.fragmentShader=R,this}let K_=0;class Q_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new e0(e),t.set(e,i)),i}}class e0{constructor(e){this.id=K_++,this.code=e,this.usedTimes=0}}function t0(n,e,t,i,r,s,o){const a=new pc,c=new Q_,l=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,S,I,j,V){const W=j.fog,J=V.geometry,G=b.isMeshStandardMaterial?j.environment:null,re=(b.isMeshStandardMaterial?t:e).get(b.envMap||G),H=re&&re.mapping===to?re.image.height:null,ne=g[b.type];b.precision!==null&&(f=r.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const ce=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Se=ce!==void 0?ce.length:0;let Oe=0;J.morphAttributes.position!==void 0&&(Oe=1),J.morphAttributes.normal!==void 0&&(Oe=2),J.morphAttributes.color!==void 0&&(Oe=3);let Je,Y,se,xe;if(ne){const nt=mn[ne];Je=nt.vertexShader,Y=nt.fragmentShader}else Je=b.vertexShader,Y=b.fragmentShader,c.update(b),se=c.getVertexShaderID(b),xe=c.getFragmentShaderID(b);const ue=n.getRenderTarget(),Ce=n.state.buffers.depth.getReversed(),Ue=V.isInstancedMesh===!0,Le=V.isBatchedMesh===!0,Ye=!!b.map,K=!!b.matcap,oe=!!re,T=!!b.aoMap,we=!!b.lightMap,U=!!b.bumpMap,ee=!!b.normalMap,he=!!b.displacementMap,De=!!b.emissiveMap,_e=!!b.metalnessMap,E=!!b.roughnessMap,_=b.anisotropy>0,z=b.clearcoat>0,$=b.dispersion>0,te=b.iridescence>0,q=b.sheen>0,Ee=b.transmission>0,fe=_&&!!b.anisotropyMap,ye=z&&!!b.clearcoatMap,$e=z&&!!b.clearcoatNormalMap,ae=z&&!!b.clearcoatRoughnessMap,Me=te&&!!b.iridescenceMap,Ne=te&&!!b.iridescenceThicknessMap,ze=q&&!!b.sheenColorMap,be=q&&!!b.sheenRoughnessMap,qe=!!b.specularMap,We=!!b.specularColorMap,at=!!b.specularIntensityMap,D=Ee&&!!b.transmissionMap,pe=Ee&&!!b.thicknessMap,X=!!b.gradientMap,Q=!!b.alphaMap,ve=b.alphaTest>0,me=!!b.alphaHash,Ve=!!b.extensions;let vt=Zn;b.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(vt=n.toneMapping);const Ft={shaderID:ne,shaderType:b.type,shaderName:b.name,vertexShader:Je,fragmentShader:Y,defines:b.defines,customVertexShaderID:se,customFragmentShaderID:xe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Le,batchingColor:Le&&V._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&V.instanceColor!==null,instancingMorph:Ue&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ue===null?n.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:ir,alphaToCoverage:!!b.alphaToCoverage,map:Ye,matcap:K,envMap:oe,envMapMode:oe&&re.mapping,envMapCubeUVHeight:H,aoMap:T,lightMap:we,bumpMap:U,normalMap:ee,displacementMap:d&&he,emissiveMap:De,normalMapObjectSpace:ee&&b.normalMapType===qf,normalMapTangentSpace:ee&&b.normalMapType===Yf,metalnessMap:_e,roughnessMap:E,anisotropy:_,anisotropyMap:fe,clearcoat:z,clearcoatMap:ye,clearcoatNormalMap:$e,clearcoatRoughnessMap:ae,dispersion:$,iridescence:te,iridescenceMap:Me,iridescenceThicknessMap:Ne,sheen:q,sheenColorMap:ze,sheenRoughnessMap:be,specularMap:qe,specularColorMap:We,specularIntensityMap:at,transmission:Ee,transmissionMap:D,thicknessMap:pe,gradientMap:X,opaque:b.transparent===!1&&b.blending===Gi&&b.alphaToCoverage===!1,alphaMap:Q,alphaTest:ve,alphaHash:me,combine:b.combine,mapUv:Ye&&v(b.map.channel),aoMapUv:T&&v(b.aoMap.channel),lightMapUv:we&&v(b.lightMap.channel),bumpMapUv:U&&v(b.bumpMap.channel),normalMapUv:ee&&v(b.normalMap.channel),displacementMapUv:he&&v(b.displacementMap.channel),emissiveMapUv:De&&v(b.emissiveMap.channel),metalnessMapUv:_e&&v(b.metalnessMap.channel),roughnessMapUv:E&&v(b.roughnessMap.channel),anisotropyMapUv:fe&&v(b.anisotropyMap.channel),clearcoatMapUv:ye&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:$e&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:be&&v(b.sheenRoughnessMap.channel),specularMapUv:qe&&v(b.specularMap.channel),specularColorMapUv:We&&v(b.specularColorMap.channel),specularIntensityMapUv:at&&v(b.specularIntensityMap.channel),transmissionMapUv:D&&v(b.transmissionMap.channel),thicknessMapUv:pe&&v(b.thicknessMap.channel),alphaMapUv:Q&&v(b.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(ee||_),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!J.attributes.uv&&(Ye||Q),fog:!!W,useFog:b.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ce,skinning:V.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Oe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:vt,decodeVideoTexture:Ye&&b.map.isVideoTexture===!0&&je.getTransfer(b.map.colorSpace)===it,decodeVideoTextureEmissive:De&&b.emissiveMap.isVideoTexture===!0&&je.getTransfer(b.emissiveMap.colorSpace)===it,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===tn,flipSided:b.side===Wt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ve&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&b.extensions.multiDraw===!0||Le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ft.vertexUv1s=l.has(1),Ft.vertexUv2s=l.has(2),Ft.vertexUv3s=l.has(3),l.clear(),Ft}function p(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const I in b.defines)S.push(I),S.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(w(S,b),M(S,b),S.push(n.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function w(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function M(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),b.push(a.mask)}function x(b){const S=g[b.type];let I;if(S){const j=mn[S];I=Pr.clone(j.uniforms)}else I=b.uniforms;return I}function O(b,S){let I;for(let j=0,V=u.length;j<V;j++){const W=u[j];if(W.cacheKey===S){I=W,++I.usedTimes;break}}return I===void 0&&(I=new J_(n,S,b,s),u.push(I)),I}function R(b){if(--b.usedTimes===0){const S=u.indexOf(b);u[S]=u[u.length-1],u.pop(),b.destroy()}}function A(b){c.remove(b)}function F(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:O,releaseProgram:R,releaseShaderCache:A,programs:u,dispose:F}}function n0(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function i0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Vl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Hl(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,d,f,g,v,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=v,p.group=m),e++,p}function a(h,d,f,g,v,m){const p=o(h,d,f,g,v,m);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):t.push(p)}function c(h,d,f,g,v,m){const p=o(h,d,f,g,v,m);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||i0),i.length>1&&i.sort(d||Vl),r.length>1&&r.sort(d||Vl)}function u(){for(let h=e,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function r0(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Hl,n.set(i,[o])):r>=s.length?(o=new Hl,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function s0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new ke};break;case"SpotLight":t={position:new C,direction:new C,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new C,halfWidth:new C,halfHeight:new C};break}return n[e.id]=t,t}}}function o0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let a0=0;function c0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function l0(n){const e=new s0,t=o0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new C);const r=new C,s=new ot,o=new ot;function a(l){let u=0,h=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,w=0,M=0,x=0,O=0,R=0,A=0;l.sort(c0);for(let b=0,S=l.length;b<S;b++){const I=l[b],j=I.color,V=I.intensity,W=I.distance,J=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=j.r*V,h+=j.g*V,d+=j.b*V;else if(I.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(I.sh.coefficients[G],V);A++}else if(I.isDirectionalLight){const G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const re=I.shadow,H=t.get(I);H.shadowIntensity=re.intensity,H.shadowBias=re.bias,H.shadowNormalBias=re.normalBias,H.shadowRadius=re.radius,H.shadowMapSize=re.mapSize,i.directionalShadow[f]=H,i.directionalShadowMap[f]=J,i.directionalShadowMatrix[f]=I.shadow.matrix,w++}i.directional[f]=G,f++}else if(I.isSpotLight){const G=e.get(I);G.position.setFromMatrixPosition(I.matrixWorld),G.color.copy(j).multiplyScalar(V),G.distance=W,G.coneCos=Math.cos(I.angle),G.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),G.decay=I.decay,i.spot[v]=G;const re=I.shadow;if(I.map&&(i.spotLightMap[O]=I.map,O++,re.updateMatrices(I),I.castShadow&&R++),i.spotLightMatrix[v]=re.matrix,I.castShadow){const H=t.get(I);H.shadowIntensity=re.intensity,H.shadowBias=re.bias,H.shadowNormalBias=re.normalBias,H.shadowRadius=re.radius,H.shadowMapSize=re.mapSize,i.spotShadow[v]=H,i.spotShadowMap[v]=J,x++}v++}else if(I.isRectAreaLight){const G=e.get(I);G.color.copy(j).multiplyScalar(V),G.halfWidth.set(I.width*.5,0,0),G.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=G,m++}else if(I.isPointLight){const G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),G.distance=I.distance,G.decay=I.decay,I.castShadow){const re=I.shadow,H=t.get(I);H.shadowIntensity=re.intensity,H.shadowBias=re.bias,H.shadowNormalBias=re.normalBias,H.shadowRadius=re.radius,H.shadowMapSize=re.mapSize,H.shadowCameraNear=re.camera.near,H.shadowCameraFar=re.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=J,i.pointShadowMatrix[g]=I.shadow.matrix,M++}i.point[g]=G,g++}else if(I.isHemisphereLight){const G=e.get(I);G.skyColor.copy(I.color).multiplyScalar(V),G.groundColor.copy(I.groundColor).multiplyScalar(V),i.hemi[p]=G,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const F=i.hash;(F.directionalLength!==f||F.pointLength!==g||F.spotLength!==v||F.rectAreaLength!==m||F.hemiLength!==p||F.numDirectionalShadows!==w||F.numPointShadows!==M||F.numSpotShadows!==x||F.numSpotMaps!==O||F.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=x+O-R,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=A,F.directionalLength=f,F.pointLength=g,F.spotLength=v,F.rectAreaLength=m,F.hemiLength=p,F.numDirectionalShadows=w,F.numPointShadows=M,F.numSpotShadows=x,F.numSpotMaps=O,F.numLightProbes=A,i.version=a0++)}function c(l,u){let h=0,d=0,f=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,w=l.length;p<w;p++){const M=l[p];if(M.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),h++}else if(M.isSpotLight){const x=i.spot[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:i}}function Gl(n){const e=new l0(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function u0(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Gl(n),e.set(r,[a])):s>=o.length?(a=new Gl(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class h0 extends rr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Zf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class d0 extends rr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const f0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p0=`uniform sampler2D shadow_pass;
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
}`;function m0(n,e,t){let i=new Uh;const r=new ie,s=new ie,o=new xt,a=new h0({depthPacking:$f}),c=new d0,l={},u=t.maxTextureSize,h={[Fn]:Wt,[Wt]:Fn,[tn]:tn},d=new Mt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:f0,fragmentShader:p0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Pt;g.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ct(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lh;let p=this.type;this.render=function(R,A,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const b=n.getRenderTarget(),S=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),j=n.state;j.setBlending(Cn),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const V=p!==Tn&&this.type===Tn,W=p===Tn&&this.type!==Tn;for(let J=0,G=R.length;J<G;J++){const re=R[J],H=re.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const ne=H.getFrameExtents();if(r.multiply(ne),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ne.x),r.x=s.x*ne.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ne.y),r.y=s.y*ne.y,H.mapSize.y=s.y)),H.map===null||V===!0||W===!0){const Se=this.type!==Tn?{minFilter:jt,magFilter:jt}:{};H.map!==null&&H.map.dispose(),H.map=new fn(r.x,r.y,Se),H.map.texture.name=re.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const ce=H.getViewportCount();for(let Se=0;Se<ce;Se++){const Oe=H.getViewport(Se);o.set(s.x*Oe.x,s.y*Oe.y,s.x*Oe.z,s.y*Oe.w),j.viewport(o),H.updateMatrices(re,Se),i=H.getFrustum(),x(A,F,H.camera,re,this.type)}H.isPointLightShadow!==!0&&this.type===Tn&&w(H,F),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(b,S,I)};function w(R,A){const F=e.update(v);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new fn(r.x,r.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(A,null,F,d,v,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(A,null,F,f,v,null)}function M(R,A,F,b){let S=null;const I=F.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(I!==void 0)S=I;else if(S=F.isPointLight===!0?c:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const j=S.uuid,V=A.uuid;let W=l[j];W===void 0&&(W={},l[j]=W);let J=W[V];J===void 0&&(J=S.clone(),W[V]=J,A.addEventListener("dispose",O)),S=J}if(S.visible=A.visible,S.wireframe=A.wireframe,b===Tn?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:h[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,F.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const j=n.properties.get(S);j.light=F}return S}function x(R,A,F,b,S){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===Tn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,R.matrixWorld);const V=e.update(R),W=R.material;if(Array.isArray(W)){const J=V.groups;for(let G=0,re=J.length;G<re;G++){const H=J[G],ne=W[H.materialIndex];if(ne&&ne.visible){const ce=M(R,ne,b,S);R.onBeforeShadow(n,R,A,F,V,ce,H),n.renderBufferDirect(F,null,V,ce,R,H),R.onAfterShadow(n,R,A,F,V,ce,H)}}}else if(W.visible){const J=M(R,W,b,S);R.onBeforeShadow(n,R,A,F,V,J,null),n.renderBufferDirect(F,null,V,J,R,null),R.onAfterShadow(n,R,A,F,V,J,null)}}const j=R.children;for(let V=0,W=j.length;V<W;V++)x(j[V],A,F,b,S)}function O(R){R.target.removeEventListener("dispose",O);for(const F in l){const b=l[F],S=R.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const g0={[ua]:ha,[da]:ma,[fa]:ga,[Yi]:pa,[ha]:ua,[ma]:da,[ga]:fa,[pa]:Yi};function v0(n,e){function t(){let D=!1;const pe=new xt;let X=null;const Q=new xt(0,0,0,0);return{setMask:function(ve){X!==ve&&!D&&(n.colorMask(ve,ve,ve,ve),X=ve)},setLocked:function(ve){D=ve},setClear:function(ve,me,Ve,vt,Ft){Ft===!0&&(ve*=vt,me*=vt,Ve*=vt),pe.set(ve,me,Ve,vt),Q.equals(pe)===!1&&(n.clearColor(ve,me,Ve,vt),Q.copy(pe))},reset:function(){D=!1,X=null,Q.set(-1,0,0,0)}}}function i(){let D=!1,pe=!1,X=null,Q=null,ve=null;return{setReversed:function(me){if(pe!==me){const Ve=e.get("EXT_clip_control");pe?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT);const vt=ve;ve=null,this.setClear(vt)}pe=me},getReversed:function(){return pe},setTest:function(me){me?ue(n.DEPTH_TEST):Ce(n.DEPTH_TEST)},setMask:function(me){X!==me&&!D&&(n.depthMask(me),X=me)},setFunc:function(me){if(pe&&(me=g0[me]),Q!==me){switch(me){case ua:n.depthFunc(n.NEVER);break;case ha:n.depthFunc(n.ALWAYS);break;case da:n.depthFunc(n.LESS);break;case Yi:n.depthFunc(n.LEQUAL);break;case fa:n.depthFunc(n.EQUAL);break;case pa:n.depthFunc(n.GEQUAL);break;case ma:n.depthFunc(n.GREATER);break;case ga:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Q=me}},setLocked:function(me){D=me},setClear:function(me){ve!==me&&(pe&&(me=1-me),n.clearDepth(me),ve=me)},reset:function(){D=!1,X=null,Q=null,ve=null,pe=!1}}}function r(){let D=!1,pe=null,X=null,Q=null,ve=null,me=null,Ve=null,vt=null,Ft=null;return{setTest:function(nt){D||(nt?ue(n.STENCIL_TEST):Ce(n.STENCIL_TEST))},setMask:function(nt){pe!==nt&&!D&&(n.stencilMask(nt),pe=nt)},setFunc:function(nt,sn,xn){(X!==nt||Q!==sn||ve!==xn)&&(n.stencilFunc(nt,sn,xn),X=nt,Q=sn,ve=xn)},setOp:function(nt,sn,xn){(me!==nt||Ve!==sn||vt!==xn)&&(n.stencilOp(nt,sn,xn),me=nt,Ve=sn,vt=xn)},setLocked:function(nt){D=nt},setClear:function(nt){Ft!==nt&&(n.clearStencil(nt),Ft=nt)},reset:function(){D=!1,pe=null,X=null,Q=null,ve=null,me=null,Ve=null,vt=null,Ft=null}}}const s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,w=null,M=null,x=null,O=null,R=null,A=new ke(0,0,0),F=0,b=!1,S=null,I=null,j=null,V=null,W=null;const J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,re=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(H)[1]),G=re>=1):H.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),G=re>=2);let ne=null,ce={};const Se=n.getParameter(n.SCISSOR_BOX),Oe=n.getParameter(n.VIEWPORT),Je=new xt().fromArray(Se),Y=new xt().fromArray(Oe);function se(D,pe,X,Q){const ve=new Uint8Array(4),me=n.createTexture();n.bindTexture(D,me),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ve=0;Ve<X;Ve++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(pe,0,n.RGBA,1,1,Q,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(pe+Ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return me}const xe={};xe[n.TEXTURE_2D]=se(n.TEXTURE_2D,n.TEXTURE_2D,1),xe[n.TEXTURE_CUBE_MAP]=se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[n.TEXTURE_2D_ARRAY]=se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),xe[n.TEXTURE_3D]=se(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ue(n.DEPTH_TEST),o.setFunc(Yi),U(!1),ee($c),ue(n.CULL_FACE),T(Cn);function ue(D){u[D]!==!0&&(n.enable(D),u[D]=!0)}function Ce(D){u[D]!==!1&&(n.disable(D),u[D]=!1)}function Ue(D,pe){return h[D]!==pe?(n.bindFramebuffer(D,pe),h[D]=pe,D===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=pe),D===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=pe),!0):!1}function Le(D,pe){let X=f,Q=!1;if(D){X=d.get(pe),X===void 0&&(X=[],d.set(pe,X));const ve=D.textures;if(X.length!==ve.length||X[0]!==n.COLOR_ATTACHMENT0){for(let me=0,Ve=ve.length;me<Ve;me++)X[me]=n.COLOR_ATTACHMENT0+me;X.length=ve.length,Q=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,Q=!0);Q&&n.drawBuffers(X)}function Ye(D){return g!==D?(n.useProgram(D),g=D,!0):!1}const K={[si]:n.FUNC_ADD,[wf]:n.FUNC_SUBTRACT,[Tf]:n.FUNC_REVERSE_SUBTRACT};K[Rf]=n.MIN,K[Af]=n.MAX;const oe={[Cf]:n.ZERO,[If]:n.ONE,[Pf]:n.SRC_COLOR,[ca]:n.SRC_ALPHA,[Of]:n.SRC_ALPHA_SATURATE,[Nf]:n.DST_COLOR,[Df]:n.DST_ALPHA,[Ff]:n.ONE_MINUS_SRC_COLOR,[la]:n.ONE_MINUS_SRC_ALPHA,[Uf]:n.ONE_MINUS_DST_COLOR,[Lf]:n.ONE_MINUS_DST_ALPHA,[zf]:n.CONSTANT_COLOR,[kf]:n.ONE_MINUS_CONSTANT_COLOR,[Bf]:n.CONSTANT_ALPHA,[Vf]:n.ONE_MINUS_CONSTANT_ALPHA};function T(D,pe,X,Q,ve,me,Ve,vt,Ft,nt){if(D===Cn){v===!0&&(Ce(n.BLEND),v=!1);return}if(v===!1&&(ue(n.BLEND),v=!0),D!==Ef){if(D!==m||nt!==b){if((p!==si||x!==si)&&(n.blendEquation(n.FUNC_ADD),p=si,x=si),nt)switch(D){case Gi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Dn:n.blendFunc(n.ONE,n.ONE);break;case Yc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Gi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Dn:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Yc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}w=null,M=null,O=null,R=null,A.set(0,0,0),F=0,m=D,b=nt}return}ve=ve||pe,me=me||X,Ve=Ve||Q,(pe!==p||ve!==x)&&(n.blendEquationSeparate(K[pe],K[ve]),p=pe,x=ve),(X!==w||Q!==M||me!==O||Ve!==R)&&(n.blendFuncSeparate(oe[X],oe[Q],oe[me],oe[Ve]),w=X,M=Q,O=me,R=Ve),(vt.equals(A)===!1||Ft!==F)&&(n.blendColor(vt.r,vt.g,vt.b,Ft),A.copy(vt),F=Ft),m=D,b=!1}function we(D,pe){D.side===tn?Ce(n.CULL_FACE):ue(n.CULL_FACE);let X=D.side===Wt;pe&&(X=!X),U(X),D.blending===Gi&&D.transparent===!1?T(Cn):T(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);const Q=D.stencilWrite;a.setTest(Q),Q&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),De(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ue(n.SAMPLE_ALPHA_TO_COVERAGE):Ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function U(D){S!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),S=D)}function ee(D){D!==Sf?(ue(n.CULL_FACE),D!==I&&(D===$c?n.cullFace(n.BACK):D===Mf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ce(n.CULL_FACE),I=D}function he(D){D!==j&&(G&&n.lineWidth(D),j=D)}function De(D,pe,X){D?(ue(n.POLYGON_OFFSET_FILL),(V!==pe||W!==X)&&(n.polygonOffset(pe,X),V=pe,W=X)):Ce(n.POLYGON_OFFSET_FILL)}function _e(D){D?ue(n.SCISSOR_TEST):Ce(n.SCISSOR_TEST)}function E(D){D===void 0&&(D=n.TEXTURE0+J-1),ne!==D&&(n.activeTexture(D),ne=D)}function _(D,pe,X){X===void 0&&(ne===null?X=n.TEXTURE0+J-1:X=ne);let Q=ce[X];Q===void 0&&(Q={type:void 0,texture:void 0},ce[X]=Q),(Q.type!==D||Q.texture!==pe)&&(ne!==X&&(n.activeTexture(X),ne=X),n.bindTexture(D,pe||xe[D]),Q.type=D,Q.texture=pe)}function z(){const D=ce[ne];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function $(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $e(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ne(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ze(D){Je.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Je.copy(D))}function be(D){Y.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),Y.copy(D))}function qe(D,pe){let X=l.get(pe);X===void 0&&(X=new WeakMap,l.set(pe,X));let Q=X.get(D);Q===void 0&&(Q=n.getUniformBlockIndex(pe,D.name),X.set(D,Q))}function We(D,pe){const Q=l.get(pe).get(D);c.get(pe)!==Q&&(n.uniformBlockBinding(pe,Q,D.__bindingPointIndex),c.set(pe,Q))}function at(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ne=null,ce={},h={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,w=null,M=null,x=null,O=null,R=null,A=new ke(0,0,0),F=0,b=!1,S=null,I=null,j=null,V=null,W=null,Je.set(0,0,n.canvas.width,n.canvas.height),Y.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ue,disable:Ce,bindFramebuffer:Ue,drawBuffers:Le,useProgram:Ye,setBlending:T,setMaterial:we,setFlipSided:U,setCullFace:ee,setLineWidth:he,setPolygonOffset:De,setScissorTest:_e,activeTexture:E,bindTexture:_,unbindTexture:z,compressedTexImage2D:$,compressedTexImage3D:te,texImage2D:Me,texImage3D:Ne,updateUBOMapping:qe,uniformBlockBinding:We,texStorage2D:$e,texStorage3D:ae,texSubImage2D:q,texSubImage3D:Ee,compressedTexSubImage2D:fe,compressedTexSubImage3D:ye,scissor:ze,viewport:be,reset:at}}function Wl(n,e,t,i){const r=_0(i);switch(t){case yh:return n*e;case Mh:return n*e;case bh:return n*e*2;case lc:return n*e/r.components*r.byteLength;case uc:return n*e/r.components*r.byteLength;case Eh:return n*e*2/r.components*r.byteLength;case hc:return n*e*2/r.components*r.byteLength;case Sh:return n*e*3/r.components*r.byteLength;case hn:return n*e*4/r.components*r.byteLength;case dc:return n*e*4/r.components*r.byteLength;case Us:case Os:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case zs:case ks:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ma:case Ea:return Math.max(n,16)*Math.max(e,8)/4;case Sa:case ba:return Math.max(n,8)*Math.max(e,8)/2;case wa:case Ta:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ra:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Aa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ca:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ia:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Pa:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Fa:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Da:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case La:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Na:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ua:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Oa:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case za:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ka:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ba:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Va:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Bs:case Ha:case Ga:return Math.ceil(n/4)*Math.ceil(e/4)*16;case wh:case Wa:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Xa:case Za:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _0(n){switch(n){case Ln:case vh:return{byteLength:1,components:1};case Cr:case _h:case In:return{byteLength:2,components:1};case ac:case cc:return{byteLength:2,components:4};case li:case oc:case vn:return{byteLength:4,components:1};case xh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function x0(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ie,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,_){return f?new OffscreenCanvas(E,_):Ws("canvas")}function v(E,_,z){let $=1;const te=_e(E);if((te.width>z||te.height>z)&&($=z/Math.max(te.width,te.height)),$<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const q=Math.floor($*te.width),Ee=Math.floor($*te.height);h===void 0&&(h=g(q,Ee));const fe=_?g(q,Ee):h;return fe.width=q,fe.height=Ee,fe.getContext("2d").drawImage(E,0,0,q,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+q+"x"+Ee+")."),fe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){n.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(E,_,z,$,te=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let q=_;if(_===n.RED&&(z===n.FLOAT&&(q=n.R32F),z===n.HALF_FLOAT&&(q=n.R16F),z===n.UNSIGNED_BYTE&&(q=n.R8)),_===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(q=n.R8UI),z===n.UNSIGNED_SHORT&&(q=n.R16UI),z===n.UNSIGNED_INT&&(q=n.R32UI),z===n.BYTE&&(q=n.R8I),z===n.SHORT&&(q=n.R16I),z===n.INT&&(q=n.R32I)),_===n.RG&&(z===n.FLOAT&&(q=n.RG32F),z===n.HALF_FLOAT&&(q=n.RG16F),z===n.UNSIGNED_BYTE&&(q=n.RG8)),_===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(q=n.RG8UI),z===n.UNSIGNED_SHORT&&(q=n.RG16UI),z===n.UNSIGNED_INT&&(q=n.RG32UI),z===n.BYTE&&(q=n.RG8I),z===n.SHORT&&(q=n.RG16I),z===n.INT&&(q=n.RG32I)),_===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(q=n.RGB8UI),z===n.UNSIGNED_SHORT&&(q=n.RGB16UI),z===n.UNSIGNED_INT&&(q=n.RGB32UI),z===n.BYTE&&(q=n.RGB8I),z===n.SHORT&&(q=n.RGB16I),z===n.INT&&(q=n.RGB32I)),_===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),z===n.UNSIGNED_INT&&(q=n.RGBA32UI),z===n.BYTE&&(q=n.RGBA8I),z===n.SHORT&&(q=n.RGBA16I),z===n.INT&&(q=n.RGBA32I)),_===n.RGB&&z===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),_===n.RGBA){const Ee=te?no:je.getTransfer($);z===n.FLOAT&&(q=n.RGBA32F),z===n.HALF_FLOAT&&(q=n.RGBA16F),z===n.UNSIGNED_BYTE&&(q=Ee===it?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function x(E,_){let z;return E?_===null||_===li||_===Ji?z=n.DEPTH24_STENCIL8:_===vn?z=n.DEPTH32F_STENCIL8:_===Cr&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===li||_===Ji?z=n.DEPTH_COMPONENT24:_===vn?z=n.DEPTH_COMPONENT32F:_===Cr&&(z=n.DEPTH_COMPONENT16),z}function O(E,_){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==jt&&E.minFilter!==gn?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function R(E){const _=E.target;_.removeEventListener("dispose",R),F(_),_.isVideoTexture&&u.delete(_)}function A(E){const _=E.target;_.removeEventListener("dispose",A),S(_)}function F(E){const _=i.get(E);if(_.__webglInit===void 0)return;const z=E.source,$=d.get(z);if($){const te=$[_.__cacheKey];te.usedTimes--,te.usedTimes===0&&b(E),Object.keys($).length===0&&d.delete(z)}i.remove(E)}function b(E){const _=i.get(E);n.deleteTexture(_.__webglTexture);const z=E.source,$=d.get(z);delete $[_.__cacheKey],o.memory.textures--}function S(E){const _=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(_.__webglFramebuffer[$]))for(let te=0;te<_.__webglFramebuffer[$].length;te++)n.deleteFramebuffer(_.__webglFramebuffer[$][te]);else n.deleteFramebuffer(_.__webglFramebuffer[$]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[$])}else{if(Array.isArray(_.__webglFramebuffer))for(let $=0;$<_.__webglFramebuffer.length;$++)n.deleteFramebuffer(_.__webglFramebuffer[$]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let $=0;$<_.__webglColorRenderbuffer.length;$++)_.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[$]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const z=E.textures;for(let $=0,te=z.length;$<te;$++){const q=i.get(z[$]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(z[$])}i.remove(E)}let I=0;function j(){I=0}function V(){const E=I;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),I+=1,E}function W(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function J(E,_){const z=i.get(E);if(E.isVideoTexture&&he(E),E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){const $=E.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(z,E,_);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+_)}function G(E,_){const z=i.get(E);if(E.version>0&&z.__version!==E.version){Y(z,E,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+_)}function re(E,_){const z=i.get(E);if(E.version>0&&z.__version!==E.version){Y(z,E,_);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+_)}function H(E,_){const z=i.get(E);if(E.version>0&&z.__version!==E.version){se(z,E,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+_)}const ne={[xa]:n.REPEAT,[ai]:n.CLAMP_TO_EDGE,[ya]:n.MIRRORED_REPEAT},ce={[jt]:n.NEAREST,[Xf]:n.NEAREST_MIPMAP_NEAREST,[$r]:n.NEAREST_MIPMAP_LINEAR,[gn]:n.LINEAR,[po]:n.LINEAR_MIPMAP_NEAREST,[ci]:n.LINEAR_MIPMAP_LINEAR},Se={[jf]:n.NEVER,[np]:n.ALWAYS,[Jf]:n.LESS,[Th]:n.LEQUAL,[Kf]:n.EQUAL,[tp]:n.GEQUAL,[Qf]:n.GREATER,[ep]:n.NOTEQUAL};function Oe(E,_){if(_.type===vn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===gn||_.magFilter===po||_.magFilter===$r||_.magFilter===ci||_.minFilter===gn||_.minFilter===po||_.minFilter===$r||_.minFilter===ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,ne[_.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,ne[_.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,ne[_.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,ce[_.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,ce[_.minFilter]),_.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Se[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===jt||_.minFilter!==$r&&_.minFilter!==ci||_.type===vn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Je(E,_){let z=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",R));const $=_.source;let te=d.get($);te===void 0&&(te={},d.set($,te));const q=W(_);if(q!==E.__cacheKey){te[q]===void 0&&(te[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),te[q].usedTimes++;const Ee=te[E.__cacheKey];Ee!==void 0&&(te[E.__cacheKey].usedTimes--,Ee.usedTimes===0&&b(_)),E.__cacheKey=q,E.__webglTexture=te[q].texture}return z}function Y(E,_,z){let $=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&($=n.TEXTURE_3D);const te=Je(E,_),q=_.source;t.bindTexture($,E.__webglTexture,n.TEXTURE0+z);const Ee=i.get(q);if(q.version!==Ee.__version||te===!0){t.activeTexture(n.TEXTURE0+z);const fe=je.getPrimaries(je.workingColorSpace),ye=_.colorSpace===Xn?null:je.getPrimaries(_.colorSpace),$e=_.colorSpace===Xn||fe===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let ae=v(_.image,!1,r.maxTextureSize);ae=De(_,ae);const Me=s.convert(_.format,_.colorSpace),Ne=s.convert(_.type);let ze=M(_.internalFormat,Me,Ne,_.colorSpace,_.isVideoTexture);Oe($,_);let be;const qe=_.mipmaps,We=_.isVideoTexture!==!0,at=Ee.__version===void 0||te===!0,D=q.dataReady,pe=O(_,ae);if(_.isDepthTexture)ze=x(_.format===Ki,_.type),at&&(We?t.texStorage2D(n.TEXTURE_2D,1,ze,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,ze,ae.width,ae.height,0,Me,Ne,null));else if(_.isDataTexture)if(qe.length>0){We&&at&&t.texStorage2D(n.TEXTURE_2D,pe,ze,qe[0].width,qe[0].height);for(let X=0,Q=qe.length;X<Q;X++)be=qe[X],We?D&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,be.width,be.height,Me,Ne,be.data):t.texImage2D(n.TEXTURE_2D,X,ze,be.width,be.height,0,Me,Ne,be.data);_.generateMipmaps=!1}else We?(at&&t.texStorage2D(n.TEXTURE_2D,pe,ze,ae.width,ae.height),D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae.width,ae.height,Me,Ne,ae.data)):t.texImage2D(n.TEXTURE_2D,0,ze,ae.width,ae.height,0,Me,Ne,ae.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){We&&at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,ze,qe[0].width,qe[0].height,ae.depth);for(let X=0,Q=qe.length;X<Q;X++)if(be=qe[X],_.format!==hn)if(Me!==null)if(We){if(D)if(_.layerUpdates.size>0){const ve=Wl(be.width,be.height,_.format,_.type);for(const me of _.layerUpdates){const Ve=be.data.subarray(me*ve/be.data.BYTES_PER_ELEMENT,(me+1)*ve/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,me,be.width,be.height,1,Me,Ve)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,be.width,be.height,ae.depth,Me,be.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,ze,be.width,be.height,ae.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?D&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,be.width,be.height,ae.depth,Me,Ne,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,X,ze,be.width,be.height,ae.depth,0,Me,Ne,be.data)}else{We&&at&&t.texStorage2D(n.TEXTURE_2D,pe,ze,qe[0].width,qe[0].height);for(let X=0,Q=qe.length;X<Q;X++)be=qe[X],_.format!==hn?Me!==null?We?D&&t.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,be.width,be.height,Me,be.data):t.compressedTexImage2D(n.TEXTURE_2D,X,ze,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?D&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,be.width,be.height,Me,Ne,be.data):t.texImage2D(n.TEXTURE_2D,X,ze,be.width,be.height,0,Me,Ne,be.data)}else if(_.isDataArrayTexture)if(We){if(at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,ze,ae.width,ae.height,ae.depth),D)if(_.layerUpdates.size>0){const X=Wl(ae.width,ae.height,_.format,_.type);for(const Q of _.layerUpdates){const ve=ae.data.subarray(Q*X/ae.data.BYTES_PER_ELEMENT,(Q+1)*X/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Q,ae.width,ae.height,1,Me,Ne,ve)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Me,Ne,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ze,ae.width,ae.height,ae.depth,0,Me,Ne,ae.data);else if(_.isData3DTexture)We?(at&&t.texStorage3D(n.TEXTURE_3D,pe,ze,ae.width,ae.height,ae.depth),D&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Me,Ne,ae.data)):t.texImage3D(n.TEXTURE_3D,0,ze,ae.width,ae.height,ae.depth,0,Me,Ne,ae.data);else if(_.isFramebufferTexture){if(at)if(We)t.texStorage2D(n.TEXTURE_2D,pe,ze,ae.width,ae.height);else{let X=ae.width,Q=ae.height;for(let ve=0;ve<pe;ve++)t.texImage2D(n.TEXTURE_2D,ve,ze,X,Q,0,Me,Ne,null),X>>=1,Q>>=1}}else if(qe.length>0){if(We&&at){const X=_e(qe[0]);t.texStorage2D(n.TEXTURE_2D,pe,ze,X.width,X.height)}for(let X=0,Q=qe.length;X<Q;X++)be=qe[X],We?D&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,Me,Ne,be):t.texImage2D(n.TEXTURE_2D,X,ze,Me,Ne,be);_.generateMipmaps=!1}else if(We){if(at){const X=_e(ae);t.texStorage2D(n.TEXTURE_2D,pe,ze,X.width,X.height)}D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me,Ne,ae)}else t.texImage2D(n.TEXTURE_2D,0,ze,Me,Ne,ae);m(_)&&p($),Ee.__version=q.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function se(E,_,z){if(_.image.length!==6)return;const $=Je(E,_),te=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+z);const q=i.get(te);if(te.version!==q.__version||$===!0){t.activeTexture(n.TEXTURE0+z);const Ee=je.getPrimaries(je.workingColorSpace),fe=_.colorSpace===Xn?null:je.getPrimaries(_.colorSpace),ye=_.colorSpace===Xn||Ee===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const $e=_.isCompressedTexture||_.image[0].isCompressedTexture,ae=_.image[0]&&_.image[0].isDataTexture,Me=[];for(let Q=0;Q<6;Q++)!$e&&!ae?Me[Q]=v(_.image[Q],!0,r.maxCubemapSize):Me[Q]=ae?_.image[Q].image:_.image[Q],Me[Q]=De(_,Me[Q]);const Ne=Me[0],ze=s.convert(_.format,_.colorSpace),be=s.convert(_.type),qe=M(_.internalFormat,ze,be,_.colorSpace),We=_.isVideoTexture!==!0,at=q.__version===void 0||$===!0,D=te.dataReady;let pe=O(_,Ne);Oe(n.TEXTURE_CUBE_MAP,_);let X;if($e){We&&at&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,qe,Ne.width,Ne.height);for(let Q=0;Q<6;Q++){X=Me[Q].mipmaps;for(let ve=0;ve<X.length;ve++){const me=X[ve];_.format!==hn?ze!==null?We?D&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve,0,0,me.width,me.height,ze,me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve,qe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve,0,0,me.width,me.height,ze,be,me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve,qe,me.width,me.height,0,ze,be,me.data)}}}else{if(X=_.mipmaps,We&&at){X.length>0&&pe++;const Q=_e(Me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,qe,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ae){We?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Me[Q].width,Me[Q].height,ze,be,Me[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,qe,Me[Q].width,Me[Q].height,0,ze,be,Me[Q].data);for(let ve=0;ve<X.length;ve++){const Ve=X[ve].image[Q].image;We?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve+1,0,0,Ve.width,Ve.height,ze,be,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve+1,qe,Ve.width,Ve.height,0,ze,be,Ve.data)}}else{We?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ze,be,Me[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,qe,ze,be,Me[Q]);for(let ve=0;ve<X.length;ve++){const me=X[ve];We?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve+1,0,0,ze,be,me.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve+1,qe,ze,be,me.image[Q])}}}m(_)&&p(n.TEXTURE_CUBE_MAP),q.__version=te.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function xe(E,_,z,$,te,q){const Ee=s.convert(z.format,z.colorSpace),fe=s.convert(z.type),ye=M(z.internalFormat,Ee,fe,z.colorSpace),$e=i.get(_),ae=i.get(z);if(ae.__renderTarget=_,!$e.__hasExternalTextures){const Me=Math.max(1,_.width>>q),Ne=Math.max(1,_.height>>q);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,q,ye,Me,Ne,_.depth,0,Ee,fe,null):t.texImage2D(te,q,ye,Me,Ne,0,Ee,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),ee(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,te,ae.__webglTexture,0,U(_)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,te,ae.__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ue(E,_,z){if(n.bindRenderbuffer(n.RENDERBUFFER,E),_.depthBuffer){const $=_.depthTexture,te=$&&$.isDepthTexture?$.type:null,q=x(_.stencilBuffer,te),Ee=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=U(_);ee(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,q,_.width,_.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,q,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,q,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ee,n.RENDERBUFFER,E)}else{const $=_.textures;for(let te=0;te<$.length;te++){const q=$[te],Ee=s.convert(q.format,q.colorSpace),fe=s.convert(q.type),ye=M(q.internalFormat,Ee,fe,q.colorSpace),$e=U(_);z&&ee(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,$e,ye,_.width,_.height):ee(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$e,ye,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ye,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ce(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(_.depthTexture);$.__renderTarget=_,(!$.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),J(_.depthTexture,0);const te=$.__webglTexture,q=U(_);if(_.depthTexture.format===Wi)ee(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0);else if(_.depthTexture.format===Ki)ee(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Ue(E){const _=i.get(E),z=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const $=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),$){const te=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,$.removeEventListener("dispose",te)};$.addEventListener("dispose",te),_.__depthDisposeCallback=te}_.__boundDepthTexture=$}if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Ce(_.__webglFramebuffer,E)}else if(z){_.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[$]),_.__webglDepthbuffer[$]===void 0)_.__webglDepthbuffer[$]=n.createRenderbuffer(),ue(_.__webglDepthbuffer[$],E,!1);else{const te=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,q)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),ue(_.__webglDepthbuffer,E,!1);else{const $=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,te)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(E,_,z){const $=i.get(E);_!==void 0&&xe($.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Ue(E)}function Ye(E){const _=E.texture,z=i.get(E),$=i.get(_);E.addEventListener("dispose",A);const te=E.textures,q=E.isWebGLCubeRenderTarget===!0,Ee=te.length>1;if(Ee||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=_.version,o.memory.textures++),q){z.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[fe]=[];for(let ye=0;ye<_.mipmaps.length;ye++)z.__webglFramebuffer[fe][ye]=n.createFramebuffer()}else z.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let fe=0;fe<_.mipmaps.length;fe++)z.__webglFramebuffer[fe]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(Ee)for(let fe=0,ye=te.length;fe<ye;fe++){const $e=i.get(te[fe]);$e.__webglTexture===void 0&&($e.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&ee(E)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let fe=0;fe<te.length;fe++){const ye=te[fe];z.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[fe]);const $e=s.convert(ye.format,ye.colorSpace),ae=s.convert(ye.type),Me=M(ye.internalFormat,$e,ae,ye.colorSpace,E.isXRRenderTarget===!0),Ne=U(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,Me,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,z.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),ue(z.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),Oe(n.TEXTURE_CUBE_MAP,_);for(let fe=0;fe<6;fe++)if(_.mipmaps&&_.mipmaps.length>0)for(let ye=0;ye<_.mipmaps.length;ye++)xe(z.__webglFramebuffer[fe][ye],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ye);else xe(z.__webglFramebuffer[fe],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(_)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let fe=0,ye=te.length;fe<ye;fe++){const $e=te[fe],ae=i.get($e);t.bindTexture(n.TEXTURE_2D,ae.__webglTexture),Oe(n.TEXTURE_2D,$e),xe(z.__webglFramebuffer,E,$e,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),m($e)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(fe=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,$.__webglTexture),Oe(fe,_),_.mipmaps&&_.mipmaps.length>0)for(let ye=0;ye<_.mipmaps.length;ye++)xe(z.__webglFramebuffer[ye],E,_,n.COLOR_ATTACHMENT0,fe,ye);else xe(z.__webglFramebuffer,E,_,n.COLOR_ATTACHMENT0,fe,0);m(_)&&p(fe),t.unbindTexture()}E.depthBuffer&&Ue(E)}function K(E){const _=E.textures;for(let z=0,$=_.length;z<$;z++){const te=_[z];if(m(te)){const q=w(E),Ee=i.get(te).__webglTexture;t.bindTexture(q,Ee),p(q),t.unbindTexture()}}}const oe=[],T=[];function we(E){if(E.samples>0){if(ee(E)===!1){const _=E.textures,z=E.width,$=E.height;let te=n.COLOR_BUFFER_BIT;const q=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=i.get(E),fe=_.length>1;if(fe)for(let ye=0;ye<_.length;ye++)t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let ye=0;ye<_.length;ye++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[ye]);const $e=i.get(_[ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,$e,0)}n.blitFramebuffer(0,0,z,$,0,0,z,$,te,n.NEAREST),c===!0&&(oe.length=0,T.length=0,oe.push(n.COLOR_ATTACHMENT0+ye),E.depthBuffer&&E.resolveDepthBuffer===!1&&(oe.push(q),T.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,T)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,oe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let ye=0;ye<_.length;ye++){t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[ye]);const $e=i.get(_[ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,$e,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const _=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function U(E){return Math.min(r.maxSamples,E.samples)}function ee(E){const _=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function he(E){const _=o.render.frame;u.get(E)!==_&&(u.set(E,_),E.update())}function De(E,_){const z=E.colorSpace,$=E.format,te=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||z!==ir&&z!==Xn&&(je.getTransfer(z)===it?($!==hn||te!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),_}function _e(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=j,this.setTexture2D=J,this.setTexture2DArray=G,this.setTexture3D=re,this.setTextureCube=H,this.rebindTextures=Le,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=ee}function y0(n,e){function t(i,r=Xn){let s;const o=je.getTransfer(r);if(i===Ln)return n.UNSIGNED_BYTE;if(i===ac)return n.UNSIGNED_SHORT_4_4_4_4;if(i===cc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===xh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===vh)return n.BYTE;if(i===_h)return n.SHORT;if(i===Cr)return n.UNSIGNED_SHORT;if(i===oc)return n.INT;if(i===li)return n.UNSIGNED_INT;if(i===vn)return n.FLOAT;if(i===In)return n.HALF_FLOAT;if(i===yh)return n.ALPHA;if(i===Sh)return n.RGB;if(i===hn)return n.RGBA;if(i===Mh)return n.LUMINANCE;if(i===bh)return n.LUMINANCE_ALPHA;if(i===Wi)return n.DEPTH_COMPONENT;if(i===Ki)return n.DEPTH_STENCIL;if(i===lc)return n.RED;if(i===uc)return n.RED_INTEGER;if(i===Eh)return n.RG;if(i===hc)return n.RG_INTEGER;if(i===dc)return n.RGBA_INTEGER;if(i===Us||i===Os||i===zs||i===ks)if(o===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Us)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Os)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===zs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ks)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Us)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Os)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===zs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ks)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Sa||i===Ma||i===ba||i===Ea)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Sa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ma)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ba)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ea)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===wa||i===Ta||i===Ra)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===wa||i===Ta)return o===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ra)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Aa||i===Ca||i===Ia||i===Pa||i===Fa||i===Da||i===La||i===Na||i===Ua||i===Oa||i===za||i===ka||i===Ba||i===Va)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Aa)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ca)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ia)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pa)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fa)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Da)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===La)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Na)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ua)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Oa)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===za)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ka)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ba)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Va)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Bs||i===Ha||i===Ga)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Bs)return o===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ha)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ga)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===wh||i===Wa||i===Xa||i===Za)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Bs)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Wa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Za)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ji?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class S0 extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class dn extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const M0={type:"move"};class Vo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(M0)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new dn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const b0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E0=`
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

}`;class w0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Nt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Mt({vertexShader:b0,fragmentShader:E0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ct(new ro(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class T0 extends pi{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const v=new w0,m=t.getContextAttributes();let p=null,w=null;const M=[],x=[],O=new ie;let R=null;const A=new en;A.viewport=new xt;const F=new en;F.viewport=new xt;const b=[A,F],S=new S0;let I=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let se=M[Y];return se===void 0&&(se=new Vo,M[Y]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Y){let se=M[Y];return se===void 0&&(se=new Vo,M[Y]=se),se.getGripSpace()},this.getHand=function(Y){let se=M[Y];return se===void 0&&(se=new Vo,M[Y]=se),se.getHandSpace()};function V(Y){const se=x.indexOf(Y.inputSource);if(se===-1)return;const xe=M[se];xe!==void 0&&(xe.update(Y.inputSource,Y.frame,l||o),xe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",J);for(let Y=0;Y<M.length;Y++){const se=x[Y];se!==null&&(x[Y]=null,M[Y].disconnect(se))}I=null,j=null,v.reset(),e.setRenderTarget(p),f=null,d=null,h=null,r=null,w=null,Je.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",W),r.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(O),r.renderState.layers===void 0){const se={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new fn(f.framebufferWidth,f.framebufferHeight,{format:hn,type:Ln,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let se=null,xe=null,ue=null;m.depth&&(ue=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=m.stencil?Ki:Wi,xe=m.stencil?Ji:li);const Ce={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(Ce),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new fn(d.textureWidth,d.textureHeight,{format:hn,type:Ln,depthTexture:new kh(d.textureWidth,d.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),Je.setContext(r),Je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function J(Y){for(let se=0;se<Y.removed.length;se++){const xe=Y.removed[se],ue=x.indexOf(xe);ue>=0&&(x[ue]=null,M[ue].disconnect(xe))}for(let se=0;se<Y.added.length;se++){const xe=Y.added[se];let ue=x.indexOf(xe);if(ue===-1){for(let Ue=0;Ue<M.length;Ue++)if(Ue>=x.length){x.push(xe),ue=Ue;break}else if(x[Ue]===null){x[Ue]=xe,ue=Ue;break}if(ue===-1)break}const Ce=M[ue];Ce&&Ce.connect(xe)}}const G=new C,re=new C;function H(Y,se,xe){G.setFromMatrixPosition(se.matrixWorld),re.setFromMatrixPosition(xe.matrixWorld);const ue=G.distanceTo(re),Ce=se.projectionMatrix.elements,Ue=xe.projectionMatrix.elements,Le=Ce[14]/(Ce[10]-1),Ye=Ce[14]/(Ce[10]+1),K=(Ce[9]+1)/Ce[5],oe=(Ce[9]-1)/Ce[5],T=(Ce[8]-1)/Ce[0],we=(Ue[8]+1)/Ue[0],U=Le*T,ee=Le*we,he=ue/(-T+we),De=he*-T;if(se.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(De),Y.translateZ(he),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ce[10]===-1)Y.projectionMatrix.copy(se.projectionMatrix),Y.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const _e=Le+he,E=Ye+he,_=U-De,z=ee+(ue-De),$=K*Ye/E*_e,te=oe*Ye/E*_e;Y.projectionMatrix.makePerspective(_,z,$,te,_e,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ne(Y,se){se===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(se.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let se=Y.near,xe=Y.far;v.texture!==null&&(v.depthNear>0&&(se=v.depthNear),v.depthFar>0&&(xe=v.depthFar)),S.near=F.near=A.near=se,S.far=F.far=A.far=xe,(I!==S.near||j!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),I=S.near,j=S.far),A.layers.mask=Y.layers.mask|2,F.layers.mask=Y.layers.mask|4,S.layers.mask=A.layers.mask|F.layers.mask;const ue=Y.parent,Ce=S.cameras;ne(S,ue);for(let Ue=0;Ue<Ce.length;Ue++)ne(Ce[Ue],ue);Ce.length===2?H(S,A,F):S.projectionMatrix.copy(A.projectionMatrix),ce(Y,S,ue)};function ce(Y,se,xe){xe===null?Y.matrix.copy(se.matrixWorld):(Y.matrix.copy(xe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(se.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(se.projectionMatrix),Y.projectionMatrixInverse.copy(se.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ir*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let Se=null;function Oe(Y,se){if(u=se.getViewerPose(l||o),g=se,u!==null){const xe=u.views;f!==null&&(e.setRenderTargetFramebuffer(w,f.framebuffer),e.setRenderTarget(w));let ue=!1;xe.length!==S.cameras.length&&(S.cameras.length=0,ue=!0);for(let Ue=0;Ue<xe.length;Ue++){const Le=xe[Ue];let Ye=null;if(f!==null)Ye=f.getViewport(Le);else{const oe=h.getViewSubImage(d,Le);Ye=oe.viewport,Ue===0&&(e.setRenderTargetTextures(w,oe.colorTexture,d.ignoreDepthValues?void 0:oe.depthStencilTexture),e.setRenderTarget(w))}let K=b[Ue];K===void 0&&(K=new en,K.layers.enable(Ue),K.viewport=new xt,b[Ue]=K),K.matrix.fromArray(Le.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(Le.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),Ue===0&&(S.matrix.copy(K.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ue===!0&&S.cameras.push(K)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const Ue=h.getDepthInformation(xe[0]);Ue&&Ue.isValid&&Ue.texture&&v.init(e,Ue,r.renderState)}}for(let xe=0;xe<M.length;xe++){const ue=x[xe],Ce=M[xe];ue!==null&&Ce!==void 0&&Ce.update(ue,se,l||o)}Se&&Se(Y,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),g=null}const Je=new Oh;Je.setAnimationLoop(Oe),this.setAnimationLoop=function(Y){Se=Y},this.dispose=function(){}}}const ni=new Nn,R0=new ot;function A0(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Dh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,w,M,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,w,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Wt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Wt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=e.get(p),M=w.envMap,x=w.envMapRotation;M&&(m.envMap.value=M,ni.copy(x),ni.x*=-1,ni.y*=-1,ni.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),m.envMapRotation.value.setFromMatrix4(R0.makeRotationFromEuler(ni)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,w,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Wt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function C0(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,M){const x=M.program;i.uniformBlockBinding(w,x)}function l(w,M){let x=r[w.id];x===void 0&&(g(w),x=u(w),r[w.id]=x,w.addEventListener("dispose",m));const O=M.program;i.updateUBOMapping(w,O);const R=e.render.frame;s[w.id]!==R&&(d(w),s[w.id]=R)}function u(w){const M=h();w.__bindingPointIndex=M;const x=n.createBuffer(),O=w.__size,R=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,O,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,x),x}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const M=r[w.id],x=w.uniforms,O=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let R=0,A=x.length;R<A;R++){const F=Array.isArray(x[R])?x[R]:[x[R]];for(let b=0,S=F.length;b<S;b++){const I=F[b];if(f(I,R,b,O)===!0){const j=I.__offset,V=Array.isArray(I.value)?I.value:[I.value];let W=0;for(let J=0;J<V.length;J++){const G=V[J],re=v(G);typeof G=="number"||typeof G=="boolean"?(I.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,j+W,I.__data)):G.isMatrix3?(I.__data[0]=G.elements[0],I.__data[1]=G.elements[1],I.__data[2]=G.elements[2],I.__data[3]=0,I.__data[4]=G.elements[3],I.__data[5]=G.elements[4],I.__data[6]=G.elements[5],I.__data[7]=0,I.__data[8]=G.elements[6],I.__data[9]=G.elements[7],I.__data[10]=G.elements[8],I.__data[11]=0):(G.toArray(I.__data,W),W+=re.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,j,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(w,M,x,O){const R=w.value,A=M+"_"+x;if(O[A]===void 0)return typeof R=="number"||typeof R=="boolean"?O[A]=R:O[A]=R.clone(),!0;{const F=O[A];if(typeof R=="number"||typeof R=="boolean"){if(F!==R)return O[A]=R,!0}else if(F.equals(R)===!1)return F.copy(R),!0}return!1}function g(w){const M=w.uniforms;let x=0;const O=16;for(let A=0,F=M.length;A<F;A++){const b=Array.isArray(M[A])?M[A]:[M[A]];for(let S=0,I=b.length;S<I;S++){const j=b[S],V=Array.isArray(j.value)?j.value:[j.value];for(let W=0,J=V.length;W<J;W++){const G=V[W],re=v(G),H=x%O,ne=H%re.boundary,ce=H+ne;x+=ne,ce!==0&&O-ce<re.storage&&(x+=O-ce),j.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=x,x+=re.storage}}}const R=x%O;return R>0&&(x+=O-R),w.__size=x,w.__cache={},this}function v(w){const M={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(M.boundary=4,M.storage=4):w.isVector2?(M.boundary=8,M.storage=8):w.isVector3||w.isColor?(M.boundary=16,M.storage=12):w.isVector4?(M.boundary=16,M.storage=16):w.isMatrix3?(M.boundary=48,M.storage=48):w.isMatrix4?(M.boundary=64,M.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),M}function m(w){const M=w.target;M.removeEventListener("dispose",m);const x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function p(){for(const w in r)n.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}class I0{constructor(e={}){const{canvas:t=xp(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const w=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qt,this.toneMapping=Zn,this.toneMappingExposure=1;const x=this;let O=!1,R=0,A=0,F=null,b=-1,S=null;const I=new xt,j=new xt;let V=null;const W=new ke(0);let J=0,G=t.width,re=t.height,H=1,ne=null,ce=null;const Se=new xt(0,0,G,re),Oe=new xt(0,0,G,re);let Je=!1;const Y=new Uh;let se=!1,xe=!1;const ue=new ot,Ce=new ot,Ue=new C,Le=new xt,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let K=!1;function oe(){return F===null?H:1}let T=i;function we(y,L){return t.getContext(y,L)}try{const y={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${rc}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",me,!1),T===null){const L="webgl2";if(T=we(L,y),T===null)throw we(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let U,ee,he,De,_e,E,_,z,$,te,q,Ee,fe,ye,$e,ae,Me,Ne,ze,be,qe,We,at,D;function pe(){U=new Nv(T),U.init(),We=new y0(T,U),ee=new Cv(T,U,e,We),he=new v0(T,U),ee.reverseDepthBuffer&&d&&he.buffers.depth.setReversed(!0),De=new zv(T),_e=new n0,E=new x0(T,U,he,_e,ee,We,De),_=new Pv(x),z=new Lv(x),$=new Xp(T),at=new Rv(T,$),te=new Uv(T,$,De,at),q=new Bv(T,te,$,De),ze=new kv(T,ee,E),ae=new Iv(_e),Ee=new t0(x,_,z,U,ee,at,ae),fe=new A0(x,_e),ye=new r0,$e=new u0(U),Ne=new Tv(x,_,z,he,q,f,c),Me=new m0(x,q,ee),D=new C0(T,De,ee,he),be=new Av(T,U,De),qe=new Ov(T,U,De),De.programs=Ee.programs,x.capabilities=ee,x.extensions=U,x.properties=_e,x.renderLists=ye,x.shadowMap=Me,x.state=he,x.info=De}pe();const X=new T0(x,T);this.xr=X,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const y=U.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=U.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(y){y!==void 0&&(H=y,this.setSize(G,re,!1))},this.getSize=function(y){return y.set(G,re)},this.setSize=function(y,L,k=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=y,re=L,t.width=Math.floor(y*H),t.height=Math.floor(L*H),k===!0&&(t.style.width=y+"px",t.style.height=L+"px"),this.setViewport(0,0,y,L)},this.getDrawingBufferSize=function(y){return y.set(G*H,re*H).floor()},this.setDrawingBufferSize=function(y,L,k){G=y,re=L,H=k,t.width=Math.floor(y*k),t.height=Math.floor(L*k),this.setViewport(0,0,y,L)},this.getCurrentViewport=function(y){return y.copy(I)},this.getViewport=function(y){return y.copy(Se)},this.setViewport=function(y,L,k,B){y.isVector4?Se.set(y.x,y.y,y.z,y.w):Se.set(y,L,k,B),he.viewport(I.copy(Se).multiplyScalar(H).round())},this.getScissor=function(y){return y.copy(Oe)},this.setScissor=function(y,L,k,B){y.isVector4?Oe.set(y.x,y.y,y.z,y.w):Oe.set(y,L,k,B),he.scissor(j.copy(Oe).multiplyScalar(H).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(y){he.setScissorTest(Je=y)},this.setOpaqueSort=function(y){ne=y},this.setTransparentSort=function(y){ce=y},this.getClearColor=function(y){return y.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(y=!0,L=!0,k=!0){let B=0;if(y){let N=!1;if(F!==null){const le=F.texture.format;N=le===dc||le===hc||le===uc}if(N){const le=F.texture.type,ge=le===Ln||le===li||le===Cr||le===Ji||le===ac||le===cc,Te=Ne.getClearColor(),Re=Ne.getClearAlpha(),Be=Te.r,He=Te.g,Ae=Te.b;ge?(g[0]=Be,g[1]=He,g[2]=Ae,g[3]=Re,T.clearBufferuiv(T.COLOR,0,g)):(v[0]=Be,v[1]=He,v[2]=Ae,v[3]=Re,T.clearBufferiv(T.COLOR,0,v))}else B|=T.COLOR_BUFFER_BIT}L&&(B|=T.DEPTH_BUFFER_BIT),k&&(B|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",me,!1),ye.dispose(),$e.dispose(),_e.dispose(),_.dispose(),z.dispose(),q.dispose(),at.dispose(),D.dispose(),Ee.dispose(),X.dispose(),X.removeEventListener("sessionstart",zc),X.removeEventListener("sessionend",kc),jn.stop()};function Q(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const y=De.autoReset,L=Me.enabled,k=Me.autoUpdate,B=Me.needsUpdate,N=Me.type;pe(),De.autoReset=y,Me.enabled=L,Me.autoUpdate=k,Me.needsUpdate=B,Me.type=N}function me(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ve(y){const L=y.target;L.removeEventListener("dispose",Ve),vt(L)}function vt(y){Ft(y),_e.remove(y)}function Ft(y){const L=_e.get(y).programs;L!==void 0&&(L.forEach(function(k){Ee.releaseProgram(k)}),y.isShaderMaterial&&Ee.releaseShaderCache(y))}this.renderBufferDirect=function(y,L,k,B,N,le){L===null&&(L=Ye);const ge=N.isMesh&&N.matrixWorld.determinant()<0,Te=uf(y,L,k,B,N);he.setMaterial(B,ge);let Re=k.index,Be=1;if(B.wireframe===!0){if(Re=te.getWireframeAttribute(k),Re===void 0)return;Be=2}const He=k.drawRange,Ae=k.attributes.position;let Ke=He.start*Be,ct=(He.start+He.count)*Be;le!==null&&(Ke=Math.max(Ke,le.start*Be),ct=Math.min(ct,(le.start+le.count)*Be)),Re!==null?(Ke=Math.max(Ke,0),ct=Math.min(ct,Re.count)):Ae!=null&&(Ke=Math.max(Ke,0),ct=Math.min(ct,Ae.count));const ut=ct-Ke;if(ut<0||ut===1/0)return;at.setup(N,B,Te,k,Re);let Vt,et=be;if(Re!==null&&(Vt=$.get(Re),et=qe,et.setIndex(Vt)),N.isMesh)B.wireframe===!0?(he.setLineWidth(B.wireframeLinewidth*oe()),et.setMode(T.LINES)):et.setMode(T.TRIANGLES);else if(N.isLine){let Pe=B.linewidth;Pe===void 0&&(Pe=1),he.setLineWidth(Pe*oe()),N.isLineSegments?et.setMode(T.LINES):N.isLineLoop?et.setMode(T.LINE_LOOP):et.setMode(T.LINE_STRIP)}else N.isPoints?et.setMode(T.POINTS):N.isSprite&&et.setMode(T.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)et.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(U.get("WEBGL_multi_draw"))et.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Pe=N._multiDrawStarts,yn=N._multiDrawCounts,tt=N._multiDrawCount,on=Re?$.get(Re).bytesPerElement:1,_i=_e.get(B).currentProgram.getUniforms();for(let $t=0;$t<tt;$t++)_i.setValue(T,"_gl_DrawID",$t),et.render(Pe[$t]/on,yn[$t])}else if(N.isInstancedMesh)et.renderInstances(Ke,ut,N.count);else if(k.isInstancedBufferGeometry){const Pe=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,yn=Math.min(k.instanceCount,Pe);et.renderInstances(Ke,ut,yn)}else et.render(Ke,ut)};function nt(y,L,k){y.transparent===!0&&y.side===tn&&y.forceSinglePass===!1?(y.side=Wt,y.needsUpdate=!0,Xr(y,L,k),y.side=Fn,y.needsUpdate=!0,Xr(y,L,k),y.side=tn):Xr(y,L,k)}this.compile=function(y,L,k=null){k===null&&(k=y),p=$e.get(k),p.init(L),M.push(p),k.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),y!==k&&y.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const B=new Set;return y.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const le=N.material;if(le)if(Array.isArray(le))for(let ge=0;ge<le.length;ge++){const Te=le[ge];nt(Te,k,N),B.add(Te)}else nt(le,k,N),B.add(le)}),M.pop(),p=null,B},this.compileAsync=function(y,L,k=null){const B=this.compile(y,L,k);return new Promise(N=>{function le(){if(B.forEach(function(ge){_e.get(ge).currentProgram.isReady()&&B.delete(ge)}),B.size===0){N(y);return}setTimeout(le,10)}U.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let sn=null;function xn(y){sn&&sn(y)}function zc(){jn.stop()}function kc(){jn.start()}const jn=new Oh;jn.setAnimationLoop(xn),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(y){sn=y,X.setAnimationLoop(y),y===null?jn.stop():jn.start()},X.addEventListener("sessionstart",zc),X.addEventListener("sessionend",kc),this.render=function(y,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(L),L=X.getCamera()),y.isScene===!0&&y.onBeforeRender(x,y,L,F),p=$e.get(y,M.length),p.init(L),M.push(p),Ce.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Y.setFromProjectionMatrix(Ce),xe=this.localClippingEnabled,se=ae.init(this.clippingPlanes,xe),m=ye.get(y,w.length),m.init(),w.push(m),X.enabled===!0&&X.isPresenting===!0){const le=x.xr.getDepthSensingMesh();le!==null&&fo(le,L,-1/0,x.sortObjects)}fo(y,L,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ne,ce),K=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,K&&Ne.addToRenderList(m,y),this.info.render.frame++,se===!0&&ae.beginShadows();const k=p.state.shadowsArray;Me.render(k,y,L),se===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=m.opaque,N=m.transmissive;if(p.setupLights(),L.isArrayCamera){const le=L.cameras;if(N.length>0)for(let ge=0,Te=le.length;ge<Te;ge++){const Re=le[ge];Vc(B,N,y,Re)}K&&Ne.render(y);for(let ge=0,Te=le.length;ge<Te;ge++){const Re=le[ge];Bc(m,y,Re,Re.viewport)}}else N.length>0&&Vc(B,N,y,L),K&&Ne.render(y),Bc(m,y,L);F!==null&&(E.updateMultisampleRenderTarget(F),E.updateRenderTargetMipmap(F)),y.isScene===!0&&y.onAfterRender(x,y,L),at.resetDefaultState(),b=-1,S=null,M.pop(),M.length>0?(p=M[M.length-1],se===!0&&ae.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function fo(y,L,k,B){if(y.visible===!1)return;if(y.layers.test(L.layers)){if(y.isGroup)k=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(L);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Y.intersectsSprite(y)){B&&Le.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ce);const ge=q.update(y),Te=y.material;Te.visible&&m.push(y,ge,Te,k,Le.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Y.intersectsObject(y))){const ge=q.update(y),Te=y.material;if(B&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Le.copy(y.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Le.copy(ge.boundingSphere.center)),Le.applyMatrix4(y.matrixWorld).applyMatrix4(Ce)),Array.isArray(Te)){const Re=ge.groups;for(let Be=0,He=Re.length;Be<He;Be++){const Ae=Re[Be],Ke=Te[Ae.materialIndex];Ke&&Ke.visible&&m.push(y,ge,Ke,k,Le.z,Ae)}}else Te.visible&&m.push(y,ge,Te,k,Le.z,null)}}const le=y.children;for(let ge=0,Te=le.length;ge<Te;ge++)fo(le[ge],L,k,B)}function Bc(y,L,k,B){const N=y.opaque,le=y.transmissive,ge=y.transparent;p.setupLightsView(k),se===!0&&ae.setGlobalState(x.clippingPlanes,k),B&&he.viewport(I.copy(B)),N.length>0&&Wr(N,L,k),le.length>0&&Wr(le,L,k),ge.length>0&&Wr(ge,L,k),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Vc(y,L,k,B){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[B.id]===void 0&&(p.state.transmissionRenderTarget[B.id]=new fn(1,1,{generateMipmaps:!0,type:U.has("EXT_color_buffer_half_float")||U.has("EXT_color_buffer_float")?In:Ln,minFilter:ci,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));const le=p.state.transmissionRenderTarget[B.id],ge=B.viewport||I;le.setSize(ge.z,ge.w);const Te=x.getRenderTarget();x.setRenderTarget(le),x.getClearColor(W),J=x.getClearAlpha(),J<1&&x.setClearColor(16777215,.5),x.clear(),K&&Ne.render(k);const Re=x.toneMapping;x.toneMapping=Zn;const Be=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),p.setupLightsView(B),se===!0&&ae.setGlobalState(x.clippingPlanes,B),Wr(y,k,B),E.updateMultisampleRenderTarget(le),E.updateRenderTargetMipmap(le),U.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Ae=0,Ke=L.length;Ae<Ke;Ae++){const ct=L[Ae],ut=ct.object,Vt=ct.geometry,et=ct.material,Pe=ct.group;if(et.side===tn&&ut.layers.test(B.layers)){const yn=et.side;et.side=Wt,et.needsUpdate=!0,Hc(ut,k,B,Vt,et,Pe),et.side=yn,et.needsUpdate=!0,He=!0}}He===!0&&(E.updateMultisampleRenderTarget(le),E.updateRenderTargetMipmap(le))}x.setRenderTarget(Te),x.setClearColor(W,J),Be!==void 0&&(B.viewport=Be),x.toneMapping=Re}function Wr(y,L,k){const B=L.isScene===!0?L.overrideMaterial:null;for(let N=0,le=y.length;N<le;N++){const ge=y[N],Te=ge.object,Re=ge.geometry,Be=B===null?ge.material:B,He=ge.group;Te.layers.test(k.layers)&&Hc(Te,L,k,Re,Be,He)}}function Hc(y,L,k,B,N,le){y.onBeforeRender(x,L,k,B,N,le),y.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),N.onBeforeRender(x,L,k,B,y,le),N.transparent===!0&&N.side===tn&&N.forceSinglePass===!1?(N.side=Wt,N.needsUpdate=!0,x.renderBufferDirect(k,L,B,N,y,le),N.side=Fn,N.needsUpdate=!0,x.renderBufferDirect(k,L,B,N,y,le),N.side=tn):x.renderBufferDirect(k,L,B,N,y,le),y.onAfterRender(x,L,k,B,N,le)}function Xr(y,L,k){L.isScene!==!0&&(L=Ye);const B=_e.get(y),N=p.state.lights,le=p.state.shadowsArray,ge=N.state.version,Te=Ee.getParameters(y,N.state,le,L,k),Re=Ee.getProgramCacheKey(Te);let Be=B.programs;B.environment=y.isMeshStandardMaterial?L.environment:null,B.fog=L.fog,B.envMap=(y.isMeshStandardMaterial?z:_).get(y.envMap||B.environment),B.envMapRotation=B.environment!==null&&y.envMap===null?L.environmentRotation:y.envMapRotation,Be===void 0&&(y.addEventListener("dispose",Ve),Be=new Map,B.programs=Be);let He=Be.get(Re);if(He!==void 0){if(B.currentProgram===He&&B.lightsStateVersion===ge)return Wc(y,Te),He}else Te.uniforms=Ee.getUniforms(y),y.onBeforeCompile(Te,x),He=Ee.acquireProgram(Te,Re),Be.set(Re,He),B.uniforms=Te.uniforms;const Ae=B.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ae.clippingPlanes=ae.uniform),Wc(y,Te),B.needsLights=df(y),B.lightsStateVersion=ge,B.needsLights&&(Ae.ambientLightColor.value=N.state.ambient,Ae.lightProbe.value=N.state.probe,Ae.directionalLights.value=N.state.directional,Ae.directionalLightShadows.value=N.state.directionalShadow,Ae.spotLights.value=N.state.spot,Ae.spotLightShadows.value=N.state.spotShadow,Ae.rectAreaLights.value=N.state.rectArea,Ae.ltc_1.value=N.state.rectAreaLTC1,Ae.ltc_2.value=N.state.rectAreaLTC2,Ae.pointLights.value=N.state.point,Ae.pointLightShadows.value=N.state.pointShadow,Ae.hemisphereLights.value=N.state.hemi,Ae.directionalShadowMap.value=N.state.directionalShadowMap,Ae.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ae.spotShadowMap.value=N.state.spotShadowMap,Ae.spotLightMatrix.value=N.state.spotLightMatrix,Ae.spotLightMap.value=N.state.spotLightMap,Ae.pointShadowMap.value=N.state.pointShadowMap,Ae.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=He,B.uniformsList=null,He}function Gc(y){if(y.uniformsList===null){const L=y.currentProgram.getUniforms();y.uniformsList=Vs.seqWithValue(L.seq,y.uniforms)}return y.uniformsList}function Wc(y,L){const k=_e.get(y);k.outputColorSpace=L.outputColorSpace,k.batching=L.batching,k.batchingColor=L.batchingColor,k.instancing=L.instancing,k.instancingColor=L.instancingColor,k.instancingMorph=L.instancingMorph,k.skinning=L.skinning,k.morphTargets=L.morphTargets,k.morphNormals=L.morphNormals,k.morphColors=L.morphColors,k.morphTargetsCount=L.morphTargetsCount,k.numClippingPlanes=L.numClippingPlanes,k.numIntersection=L.numClipIntersection,k.vertexAlphas=L.vertexAlphas,k.vertexTangents=L.vertexTangents,k.toneMapping=L.toneMapping}function uf(y,L,k,B,N){L.isScene!==!0&&(L=Ye),E.resetTextureUnits();const le=L.fog,ge=B.isMeshStandardMaterial?L.environment:null,Te=F===null?x.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ir,Re=(B.isMeshStandardMaterial?z:_).get(B.envMap||ge),Be=B.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,He=!!k.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ae=!!k.morphAttributes.position,Ke=!!k.morphAttributes.normal,ct=!!k.morphAttributes.color;let ut=Zn;B.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(ut=x.toneMapping);const Vt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,et=Vt!==void 0?Vt.length:0,Pe=_e.get(B),yn=p.state.lights;if(se===!0&&(xe===!0||y!==S)){const Jt=y===S&&B.id===b;ae.setState(B,y,Jt)}let tt=!1;B.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==yn.state.version||Pe.outputColorSpace!==Te||N.isBatchedMesh&&Pe.batching===!1||!N.isBatchedMesh&&Pe.batching===!0||N.isBatchedMesh&&Pe.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Pe.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Pe.instancing===!1||!N.isInstancedMesh&&Pe.instancing===!0||N.isSkinnedMesh&&Pe.skinning===!1||!N.isSkinnedMesh&&Pe.skinning===!0||N.isInstancedMesh&&Pe.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Pe.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Pe.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Pe.instancingMorph===!1&&N.morphTexture!==null||Pe.envMap!==Re||B.fog===!0&&Pe.fog!==le||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==ae.numPlanes||Pe.numIntersection!==ae.numIntersection)||Pe.vertexAlphas!==Be||Pe.vertexTangents!==He||Pe.morphTargets!==Ae||Pe.morphNormals!==Ke||Pe.morphColors!==ct||Pe.toneMapping!==ut||Pe.morphTargetsCount!==et)&&(tt=!0):(tt=!0,Pe.__version=B.version);let on=Pe.currentProgram;tt===!0&&(on=Xr(B,L,N));let _i=!1,$t=!1,lr=!1;const ht=on.getUniforms(),pn=Pe.uniforms;if(he.useProgram(on.program)&&(_i=!0,$t=!0,lr=!0),B.id!==b&&(b=B.id,$t=!0),_i||S!==y){he.buffers.depth.getReversed()?(ue.copy(y.projectionMatrix),Sp(ue),Mp(ue),ht.setValue(T,"projectionMatrix",ue)):ht.setValue(T,"projectionMatrix",y.projectionMatrix),ht.setValue(T,"viewMatrix",y.matrixWorldInverse);const Un=ht.map.cameraPosition;Un!==void 0&&Un.setValue(T,Ue.setFromMatrixPosition(y.matrixWorld)),ee.logarithmicDepthBuffer&&ht.setValue(T,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ht.setValue(T,"isOrthographic",y.isOrthographicCamera===!0),S!==y&&(S=y,$t=!0,lr=!0)}if(N.isSkinnedMesh){ht.setOptional(T,N,"bindMatrix"),ht.setOptional(T,N,"bindMatrixInverse");const Jt=N.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),ht.setValue(T,"boneTexture",Jt.boneTexture,E))}N.isBatchedMesh&&(ht.setOptional(T,N,"batchingTexture"),ht.setValue(T,"batchingTexture",N._matricesTexture,E),ht.setOptional(T,N,"batchingIdTexture"),ht.setValue(T,"batchingIdTexture",N._indirectTexture,E),ht.setOptional(T,N,"batchingColorTexture"),N._colorsTexture!==null&&ht.setValue(T,"batchingColorTexture",N._colorsTexture,E));const ur=k.morphAttributes;if((ur.position!==void 0||ur.normal!==void 0||ur.color!==void 0)&&ze.update(N,k,on),($t||Pe.receiveShadow!==N.receiveShadow)&&(Pe.receiveShadow=N.receiveShadow,ht.setValue(T,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(pn.envMap.value=Re,pn.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&L.environment!==null&&(pn.envMapIntensity.value=L.environmentIntensity),$t&&(ht.setValue(T,"toneMappingExposure",x.toneMappingExposure),Pe.needsLights&&hf(pn,lr),le&&B.fog===!0&&fe.refreshFogUniforms(pn,le),fe.refreshMaterialUniforms(pn,B,H,re,p.state.transmissionRenderTarget[y.id]),Vs.upload(T,Gc(Pe),pn,E)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Vs.upload(T,Gc(Pe),pn,E),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ht.setValue(T,"center",N.center),ht.setValue(T,"modelViewMatrix",N.modelViewMatrix),ht.setValue(T,"normalMatrix",N.normalMatrix),ht.setValue(T,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Jt=B.uniformsGroups;for(let Un=0,On=Jt.length;Un<On;Un++){const Xc=Jt[Un];D.update(Xc,on),D.bind(Xc,on)}}return on}function hf(y,L){y.ambientLightColor.needsUpdate=L,y.lightProbe.needsUpdate=L,y.directionalLights.needsUpdate=L,y.directionalLightShadows.needsUpdate=L,y.pointLights.needsUpdate=L,y.pointLightShadows.needsUpdate=L,y.spotLights.needsUpdate=L,y.spotLightShadows.needsUpdate=L,y.rectAreaLights.needsUpdate=L,y.hemisphereLights.needsUpdate=L}function df(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(y,L,k){_e.get(y.texture).__webglTexture=L,_e.get(y.depthTexture).__webglTexture=k;const B=_e.get(y);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=k===void 0,B.__autoAllocateDepthBuffer||U.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,L){const k=_e.get(y);k.__webglFramebuffer=L,k.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(y,L=0,k=0){F=y,R=L,A=k;let B=!0,N=null,le=!1,ge=!1;if(y){const Re=_e.get(y);if(Re.__useDefaultFramebuffer!==void 0)he.bindFramebuffer(T.FRAMEBUFFER,null),B=!1;else if(Re.__webglFramebuffer===void 0)E.setupRenderTarget(y);else if(Re.__hasExternalTextures)E.rebindTextures(y,_e.get(y.texture).__webglTexture,_e.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ae=y.depthTexture;if(Re.__boundDepthTexture!==Ae){if(Ae!==null&&_e.has(Ae)&&(y.width!==Ae.image.width||y.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(y)}}const Be=y.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(ge=!0);const He=_e.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(He[L])?N=He[L][k]:N=He[L],le=!0):y.samples>0&&E.useMultisampledRTT(y)===!1?N=_e.get(y).__webglMultisampledFramebuffer:Array.isArray(He)?N=He[k]:N=He,I.copy(y.viewport),j.copy(y.scissor),V=y.scissorTest}else I.copy(Se).multiplyScalar(H).floor(),j.copy(Oe).multiplyScalar(H).floor(),V=Je;if(he.bindFramebuffer(T.FRAMEBUFFER,N)&&B&&he.drawBuffers(y,N),he.viewport(I),he.scissor(j),he.setScissorTest(V),le){const Re=_e.get(y.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+L,Re.__webglTexture,k)}else if(ge){const Re=_e.get(y.texture),Be=L||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,Re.__webglTexture,k||0,Be)}b=-1},this.readRenderTargetPixels=function(y,L,k,B,N,le,ge){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=_e.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ge!==void 0&&(Te=Te[ge]),Te){he.bindFramebuffer(T.FRAMEBUFFER,Te);try{const Re=y.texture,Be=Re.format,He=Re.type;if(!ee.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=y.width-B&&k>=0&&k<=y.height-N&&T.readPixels(L,k,B,N,We.convert(Be),We.convert(He),le)}finally{const Re=F!==null?_e.get(F).__webglFramebuffer:null;he.bindFramebuffer(T.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(y,L,k,B,N,le,ge){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=_e.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ge!==void 0&&(Te=Te[ge]),Te){const Re=y.texture,Be=Re.format,He=Re.type;if(!ee.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=y.width-B&&k>=0&&k<=y.height-N){he.bindFramebuffer(T.FRAMEBUFFER,Te);const Ae=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Ae),T.bufferData(T.PIXEL_PACK_BUFFER,le.byteLength,T.STREAM_READ),T.readPixels(L,k,B,N,We.convert(Be),We.convert(He),0);const Ke=F!==null?_e.get(F).__webglFramebuffer:null;he.bindFramebuffer(T.FRAMEBUFFER,Ke);const ct=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await yp(T,ct,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Ae),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,le),T.deleteBuffer(Ae),T.deleteSync(ct),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,L=null,k=0){y.isTexture!==!0&&(yr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,y=arguments[1]);const B=Math.pow(2,-k),N=Math.floor(y.image.width*B),le=Math.floor(y.image.height*B),ge=L!==null?L.x:0,Te=L!==null?L.y:0;E.setTexture2D(y,0),T.copyTexSubImage2D(T.TEXTURE_2D,k,0,0,ge,Te,N,le),he.unbindTexture()},this.copyTextureToTexture=function(y,L,k=null,B=null,N=0){y.isTexture!==!0&&(yr("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,y=arguments[1],L=arguments[2],N=arguments[3]||0,k=null);let le,ge,Te,Re,Be,He,Ae,Ke,ct;const ut=y.isCompressedTexture?y.mipmaps[N]:y.image;k!==null?(le=k.max.x-k.min.x,ge=k.max.y-k.min.y,Te=k.isBox3?k.max.z-k.min.z:1,Re=k.min.x,Be=k.min.y,He=k.isBox3?k.min.z:0):(le=ut.width,ge=ut.height,Te=ut.depth||1,Re=0,Be=0,He=0),B!==null?(Ae=B.x,Ke=B.y,ct=B.z):(Ae=0,Ke=0,ct=0);const Vt=We.convert(L.format),et=We.convert(L.type);let Pe;L.isData3DTexture?(E.setTexture3D(L,0),Pe=T.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(E.setTexture2DArray(L,0),Pe=T.TEXTURE_2D_ARRAY):(E.setTexture2D(L,0),Pe=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,L.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,L.unpackAlignment);const yn=T.getParameter(T.UNPACK_ROW_LENGTH),tt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),on=T.getParameter(T.UNPACK_SKIP_PIXELS),_i=T.getParameter(T.UNPACK_SKIP_ROWS),$t=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,ut.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ut.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Re),T.pixelStorei(T.UNPACK_SKIP_ROWS,Be),T.pixelStorei(T.UNPACK_SKIP_IMAGES,He);const lr=y.isDataArrayTexture||y.isData3DTexture,ht=L.isDataArrayTexture||L.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){const pn=_e.get(y),ur=_e.get(L),Jt=_e.get(pn.__renderTarget),Un=_e.get(ur.__renderTarget);he.bindFramebuffer(T.READ_FRAMEBUFFER,Jt.__webglFramebuffer),he.bindFramebuffer(T.DRAW_FRAMEBUFFER,Un.__webglFramebuffer);for(let On=0;On<Te;On++)lr&&T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,_e.get(y).__webglTexture,N,He+On),y.isDepthTexture?(ht&&T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,_e.get(L).__webglTexture,N,ct+On),T.blitFramebuffer(Re,Be,le,ge,Ae,Ke,le,ge,T.DEPTH_BUFFER_BIT,T.NEAREST)):ht?T.copyTexSubImage3D(Pe,N,Ae,Ke,ct+On,Re,Be,le,ge):T.copyTexSubImage2D(Pe,N,Ae,Ke,ct+On,Re,Be,le,ge);he.bindFramebuffer(T.READ_FRAMEBUFFER,null),he.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else ht?y.isDataTexture||y.isData3DTexture?T.texSubImage3D(Pe,N,Ae,Ke,ct,le,ge,Te,Vt,et,ut.data):L.isCompressedArrayTexture?T.compressedTexSubImage3D(Pe,N,Ae,Ke,ct,le,ge,Te,Vt,ut.data):T.texSubImage3D(Pe,N,Ae,Ke,ct,le,ge,Te,Vt,et,ut):y.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,N,Ae,Ke,le,ge,Vt,et,ut.data):y.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,N,Ae,Ke,ut.width,ut.height,Vt,ut.data):T.texSubImage2D(T.TEXTURE_2D,N,Ae,Ke,le,ge,Vt,et,ut);T.pixelStorei(T.UNPACK_ROW_LENGTH,yn),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,tt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,on),T.pixelStorei(T.UNPACK_SKIP_ROWS,_i),T.pixelStorei(T.UNPACK_SKIP_IMAGES,$t),N===0&&L.generateMipmaps&&T.generateMipmap(Pe),he.unbindTexture()},this.copyTextureToTexture3D=function(y,L,k=null,B=null,N=0){return y.isTexture!==!0&&(yr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,B=arguments[1]||null,y=arguments[2],L=arguments[3],N=arguments[4]||0),yr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,L,k,B,N)},this.initRenderTarget=function(y){_e.get(y).__webglFramebuffer===void 0&&E.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?E.setTextureCube(y,0):y.isData3DTexture?E.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?E.setTexture2DArray(y,0):E.setTexture2D(y,0),he.unbindTexture()},this.resetState=function(){R=0,A=0,F=null,he.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}class gc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ke(e),this.density=t}clone(){return new gc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class P0 extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class F0 extends Nt{constructor(e=null,t=1,i=1,r,s,o,a,c,l=jt,u=jt,h,d){super(null,o,a,c,l,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rn extends It{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Di=new ot,Xl=new ot,ps=[],Zl=new Xt,D0=new ot,mr=new Ct,gr=new gi;class L0 extends Ct{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Rn(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,D0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Xt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Di),Zl.copy(e.boundingBox).applyMatrix4(Di),this.boundingBox.union(Zl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new gi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Di),gr.copy(e.boundingSphere).applyMatrix4(Di),this.boundingSphere.union(gr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(mr.geometry=this.geometry,mr.material=this.material,mr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gr.copy(this.boundingSphere),gr.applyMatrix4(i),e.ray.intersectsSphere(gr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Di),Xl.multiplyMatrices(i,Di),mr.matrixWorld=Xl,mr.raycast(e,ps);for(let o=0,a=ps.length;o<a;o++){const c=ps[o];c.instanceId=s,c.object=this,t.push(c)}ps.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Rn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new F0(new Float32Array(r*this.count),r,this.count,lc,vn));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=r*e;s[c]=a,s.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class vc extends rr{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Xs=new C,Zs=new C,$l=new ot,vr=new Br,ms=new gi,Ho=new C,Yl=new C;class N0 extends Ut{constructor(e=new Pt,t=new vc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Xs.fromBufferAttribute(t,r-1),Zs.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Xs.distanceTo(Zs);e.setAttribute("lineDistance",new bt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ms.copy(i.boundingSphere),ms.applyMatrix4(r),ms.radius+=s,e.ray.intersectsSphere(ms)===!1)return;$l.copy(r).invert(),vr.copy(e.ray).applyMatrix4($l);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=l){const p=u.getX(v),w=u.getX(v+1),M=gs(this,e,vr,c,p,w);M&&t.push(M)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(f),p=gs(this,e,vr,c,v,m);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=l){const p=gs(this,e,vr,c,v,v+1);p&&t.push(p)}if(this.isLineLoop){const v=gs(this,e,vr,c,g-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function gs(n,e,t,i,r,s){const o=n.geometry.attributes.position;if(Xs.fromBufferAttribute(o,r),Zs.fromBufferAttribute(o,s),t.distanceSqToSegment(Xs,Zs,Ho,Yl)>i)return;Ho.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Ho);if(!(c<e.near||c>e.far))return{distance:c,point:Yl.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}const ql=new C,jl=new C;class Er extends N0{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)ql.fromBufferAttribute(t,r),jl.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+ql.distanceTo(jl);e.setAttribute("lineDistance",new bt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _c extends rr{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Jl=new ot,Ya=new Br,vs=new gi,_s=new C;class Wh extends Ut{constructor(e=new Pt,t=new _c){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vs.copy(i.boundingSphere),vs.applyMatrix4(r),vs.radius+=s,e.ray.intersectsSphere(vs)===!1)return;Jl.copy(r).invert(),Ya.copy(e.ray).applyMatrix4(Jl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,h=i.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,v=f;g<v;g++){const m=l.getX(g);_s.fromBufferAttribute(h,m),Kl(_s,m,c,r,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,v=f;g<v;g++)_s.fromBufferAttribute(h,g),Kl(_s,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Kl(n,e,t,i,r,s,o){const a=Ya.distanceSqToPoint(n);if(a<t){const c=new C;Ya.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class U0 extends Nt{constructor(e,t,i,r,s,o,a,c,l){super(e,t,i,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _n{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=i[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===o)return r/(s-1);const u=i[r],d=i[r+1]-u,f=(o-u)/d;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new ie:new C);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new C,r=[],s=[],o=[],a=new C,c=new ot;for(let f=0;f<=e;f++){const g=f/e;r[f]=this.getTangentAt(g,new C)}s[0]=new C,o[0]=new C;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Rt(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(Rt(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],f*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class xc extends _n{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ie){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class O0 extends xc{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function yc(){let n=0,e=0,t=0,i=0;function r(s,o,a,c){n=s,e=a,t=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,h){let d=(o-s)/l-(a-s)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,r(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const xs=new C,Go=new yc,Wo=new yc,Xo=new yc;class z0 extends _n{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new C){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:(xs.subVectors(r[0],r[1]).add(r[0]),l=xs);const h=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(xs.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=xs),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),f),v=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Go.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,v,m),Wo.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,v,m),Xo.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(Go.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),Wo.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),Xo.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return i.set(Go.calc(c),Wo.calc(c),Xo.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new C().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ql(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,c=n*a;return(2*t-2*i+s+o)*c+(-3*t+3*i-2*s-o)*a+s*n+t}function k0(n,e){const t=1-n;return t*t*e}function B0(n,e){return 2*(1-n)*n*e}function V0(n,e){return n*n*e}function wr(n,e,t,i){return k0(n,e)+B0(n,t)+V0(n,i)}function H0(n,e){const t=1-n;return t*t*t*e}function G0(n,e){const t=1-n;return 3*t*t*n*e}function W0(n,e){return 3*(1-n)*n*n*e}function X0(n,e){return n*n*n*e}function Tr(n,e,t,i,r){return H0(n,e)+G0(n,t)+W0(n,i)+X0(n,r)}class Xh extends _n{constructor(e=new ie,t=new ie,i=new ie,r=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ie){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Tr(e,r.x,s.x,o.x,a.x),Tr(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Z0 extends _n{constructor(e=new C,t=new C,i=new C,r=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new C){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Tr(e,r.x,s.x,o.x,a.x),Tr(e,r.y,s.y,o.y,a.y),Tr(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Zh extends _n{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $0 extends _n{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $h extends _n{constructor(e=new ie,t=new ie,i=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ie){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(wr(e,r.x,s.x,o.x),wr(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Y0 extends _n{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(wr(e,r.x,s.x,o.x),wr(e,r.y,s.y,o.y),wr(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yh extends _n{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(Ql(a,c.x,l.x,u.x,h.x),Ql(a,c.y,l.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new ie().fromArray(r))}return this}}var qa=Object.freeze({__proto__:null,ArcCurve:O0,CatmullRomCurve3:z0,CubicBezierCurve:Xh,CubicBezierCurve3:Z0,EllipseCurve:xc,LineCurve:Zh,LineCurve3:$0,QuadraticBezierCurve:$h,QuadraticBezierCurve3:Y0,SplineCurve:Yh});class q0 extends _n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qa[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new qa[r.type]().fromJSON(r))}return this}}class eu extends q0{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Zh(this.currentPoint.clone(),new ie(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new $h(this.currentPoint.clone(),new ie(e,t),new ie(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new Xh(this.currentPoint.clone(),new ie(e,t),new ie(i,r),new ie(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Yh(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,r,s,o,a,c),this}absellipse(e,t,i,r,s,o,a,c){const l=new xc(e,t,i,r,s,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}const ys=new C,Ss=new C,Zo=new C,Ms=new nn;class tu extends Pt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(Xi*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:v,b:m,c:p}=Ms;if(v.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),Ms.getNormal(Zo),h[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,h[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,h[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let w=0;w<3;w++){const M=(w+1)%3,x=h[w],O=h[M],R=Ms[u[w]],A=Ms[u[M]],F=`${x}_${O}`,b=`${O}_${x}`;b in d&&d[b]?(Zo.dot(d[b].normal)<=s&&(f.push(R.x,R.y,R.z),f.push(A.x,A.y,A.z)),d[b]=null):F in d||(d[F]={index0:l[w],index1:l[M],normal:Zo.clone()})}}for(const g in d)if(d[g]){const{index0:v,index1:m}=d[g];ys.fromBufferAttribute(a,v),Ss.fromBufferAttribute(a,m),f.push(ys.x,ys.y,ys.z),f.push(Ss.x,Ss.y,Ss.z)}this.setAttribute("position",new bt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class qh extends eu{constructor(e){super(e),this.uuid=mi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new eu().fromJSON(r))}return this}}const j0={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=jh(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l,u,h,d,f;if(i&&(s=tx(n,e,s,t)),n.length>80*t){a=l=n[0],c=u=n[1];for(let g=t;g<r;g+=t)h=n[g],d=n[g+1],h<a&&(a=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);f=Math.max(l-a,u-c),f=f!==0?32767/f:0}return Fr(s,o,t,a,c,f,0),o}};function jh(n,e,t,i,r){let s,o;if(r===dx(n,e,t,i)>0)for(s=e;s<t;s+=i)o=nu(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=nu(s,n[s],n[s+1],o);return o&&oo(o,o.next)&&(Lr(o),o=o.next),o}function hi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(oo(t,t.next)||pt(t.prev,t,t.next)===0)){if(Lr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Fr(n,e,t,i,r,s,o){if(!n)return;!o&&s&&ox(n,i,r,s);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,s?K0(n,i,r,s):J0(n)){e.push(c.i/t|0),e.push(n.i/t|0),e.push(l.i/t|0),Lr(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=Q0(hi(n),e,t),Fr(n,e,t,i,r,s,2)):o===2&&ex(n,e,t,i,r,s):Fr(hi(n),e,t,i,r,s,1);break}}}function J0(n){const e=n.prev,t=n,i=n.next;if(pt(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,c=t.y,l=i.y,u=r<s?r<o?r:o:s<o?s:o,h=a<c?a<l?a:l:c<l?c:l,d=r>s?r>o?r:o:s>o?s:o,f=a>c?a>l?a:l:c>l?c:l;let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&Bi(r,a,s,c,o,l,g.x,g.y)&&pt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function K0(n,e,t,i){const r=n.prev,s=n,o=n.next;if(pt(r,s,o)>=0)return!1;const a=r.x,c=s.x,l=o.x,u=r.y,h=s.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=u<h?u<d?u:d:h<d?h:d,v=a>c?a>l?a:l:c>l?c:l,m=u>h?u>d?u:d:h>d?h:d,p=ja(f,g,e,t,i),w=ja(v,m,e,t,i);let M=n.prevZ,x=n.nextZ;for(;M&&M.z>=p&&x&&x.z<=w;){if(M.x>=f&&M.x<=v&&M.y>=g&&M.y<=m&&M!==r&&M!==o&&Bi(a,u,c,h,l,d,M.x,M.y)&&pt(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&Bi(a,u,c,h,l,d,x.x,x.y)&&pt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=v&&M.y>=g&&M.y<=m&&M!==r&&M!==o&&Bi(a,u,c,h,l,d,M.x,M.y)&&pt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=w;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&Bi(a,u,c,h,l,d,x.x,x.y)&&pt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Q0(n,e,t){let i=n;do{const r=i.prev,s=i.next.next;!oo(r,s)&&Jh(r,i,i.next,s)&&Dr(r,s)&&Dr(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),Lr(i),Lr(i.next),i=n=s),i=i.next}while(i!==n);return hi(i)}function ex(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&lx(o,a)){let c=Kh(o,a);o=hi(o,o.next),c=hi(c,c.next),Fr(o,e,t,i,r,s,0),Fr(c,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function tx(n,e,t,i){const r=[];let s,o,a,c,l;for(s=0,o=e.length;s<o;s++)a=e[s]*i,c=s<o-1?e[s+1]*i:n.length,l=jh(n,a,c,i,!1),l===l.next&&(l.steiner=!0),r.push(cx(l));for(r.sort(nx),s=0;s<r.length;s++)t=ix(r[s],t);return t}function nx(n,e){return n.x-e.x}function ix(n,e){const t=rx(n,e);if(!t)return e;const i=Kh(t,n);return hi(i,i.next),hi(t,t.next)}function rx(n,e){let t=e,i=-1/0,r;const s=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>i&&(i=d,r=t.x<t.next.x?t:t.next,d===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,c=r.x,l=r.y;let u=1/0,h;t=r;do s>=t.x&&t.x>=c&&s!==t.x&&Bi(o<l?s:i,o,c,l,o<l?i:s,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(s-t.x),Dr(t,n)&&(h<u||h===u&&(t.x>r.x||t.x===r.x&&sx(r,t)))&&(r=t,u=h)),t=t.next;while(t!==a);return r}function sx(n,e){return pt(n.prev,n,e.prev)<0&&pt(e.next,n,n.next)<0}function ox(n,e,t,i){let r=n;do r.z===0&&(r.z=ja(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,ax(r)}function ax(n){let e,t,i,r,s,o,a,c,l=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<l&&(a++,i=i.nextZ,!!i);e++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,c--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,l*=2}while(o>1);return n}function ja(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function cx(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Bi(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function lx(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!ux(n,e)&&(Dr(n,e)&&Dr(e,n)&&hx(n,e)&&(pt(n.prev,n,e.prev)||pt(n,e.prev,e))||oo(n,e)&&pt(n.prev,n,n.next)>0&&pt(e.prev,e,e.next)>0)}function pt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function oo(n,e){return n.x===e.x&&n.y===e.y}function Jh(n,e,t,i){const r=Es(pt(n,e,t)),s=Es(pt(n,e,i)),o=Es(pt(t,i,n)),a=Es(pt(t,i,e));return!!(r!==s&&o!==a||r===0&&bs(n,t,e)||s===0&&bs(n,i,e)||o===0&&bs(t,n,i)||a===0&&bs(t,e,i))}function bs(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Es(n){return n>0?1:n<0?-1:0}function ux(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Jh(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Dr(n,e){return pt(n.prev,n,n.next)<0?pt(n,e,n.next)>=0&&pt(n,n.prev,e)>=0:pt(n,e,n.prev)<0||pt(n,n.next,e)<0}function hx(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Kh(n,e){const t=new Ja(n.i,n.x,n.y),i=new Ja(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function nu(n,e,t,i){const r=new Ja(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Lr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ja(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function dx(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class Rr{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Rr.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];iu(e),ru(i,e);let o=e.length;t.forEach(iu);for(let c=0;c<t.length;c++)r.push(o),o+=t[c].length,ru(i,t[c]);const a=j0.triangulate(i,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function iu(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function ru(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Sc extends Pt{constructor(e=new qh([new ie(.5,.5),new ie(-.5,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new bt(r,3)),this.setAttribute("uv",new bt(s,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:fx;let M,x=!1,O,R,A,F;p&&(M=p.getSpacedPoints(u),x=!0,d=!1,O=p.computeFrenetFrames(u,!1),R=new C,A=new C,F=new C),d||(m=0,f=0,g=0,v=0);const b=a.extractPoints(l);let S=b.shape;const I=b.holes;if(!Rr.isClockWise(S)){S=S.reverse();for(let K=0,oe=I.length;K<oe;K++){const T=I[K];Rr.isClockWise(T)&&(I[K]=T.reverse())}}const V=Rr.triangulateShape(S,I),W=S;for(let K=0,oe=I.length;K<oe;K++){const T=I[K];S=S.concat(T)}function J(K,oe,T){return oe||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(oe,T)}const G=S.length,re=V.length;function H(K,oe,T){let we,U,ee;const he=K.x-oe.x,De=K.y-oe.y,_e=T.x-K.x,E=T.y-K.y,_=he*he+De*De,z=he*E-De*_e;if(Math.abs(z)>Number.EPSILON){const $=Math.sqrt(_),te=Math.sqrt(_e*_e+E*E),q=oe.x-De/$,Ee=oe.y+he/$,fe=T.x-E/te,ye=T.y+_e/te,$e=((fe-q)*E-(ye-Ee)*_e)/(he*E-De*_e);we=q+he*$e-K.x,U=Ee+De*$e-K.y;const ae=we*we+U*U;if(ae<=2)return new ie(we,U);ee=Math.sqrt(ae/2)}else{let $=!1;he>Number.EPSILON?_e>Number.EPSILON&&($=!0):he<-Number.EPSILON?_e<-Number.EPSILON&&($=!0):Math.sign(De)===Math.sign(E)&&($=!0),$?(we=-De,U=he,ee=Math.sqrt(_)):(we=he,U=De,ee=Math.sqrt(_/2))}return new ie(we/ee,U/ee)}const ne=[];for(let K=0,oe=W.length,T=oe-1,we=K+1;K<oe;K++,T++,we++)T===oe&&(T=0),we===oe&&(we=0),ne[K]=H(W[K],W[T],W[we]);const ce=[];let Se,Oe=ne.concat();for(let K=0,oe=I.length;K<oe;K++){const T=I[K];Se=[];for(let we=0,U=T.length,ee=U-1,he=we+1;we<U;we++,ee++,he++)ee===U&&(ee=0),he===U&&(he=0),Se[we]=H(T[we],T[ee],T[he]);ce.push(Se),Oe=Oe.concat(Se)}for(let K=0;K<m;K++){const oe=K/m,T=f*Math.cos(oe*Math.PI/2),we=g*Math.sin(oe*Math.PI/2)+v;for(let U=0,ee=W.length;U<ee;U++){const he=J(W[U],ne[U],we);ue(he.x,he.y,-T)}for(let U=0,ee=I.length;U<ee;U++){const he=I[U];Se=ce[U];for(let De=0,_e=he.length;De<_e;De++){const E=J(he[De],Se[De],we);ue(E.x,E.y,-T)}}}const Je=g+v;for(let K=0;K<G;K++){const oe=d?J(S[K],Oe[K],Je):S[K];x?(A.copy(O.normals[0]).multiplyScalar(oe.x),R.copy(O.binormals[0]).multiplyScalar(oe.y),F.copy(M[0]).add(A).add(R),ue(F.x,F.y,F.z)):ue(oe.x,oe.y,0)}for(let K=1;K<=u;K++)for(let oe=0;oe<G;oe++){const T=d?J(S[oe],Oe[oe],Je):S[oe];x?(A.copy(O.normals[K]).multiplyScalar(T.x),R.copy(O.binormals[K]).multiplyScalar(T.y),F.copy(M[K]).add(A).add(R),ue(F.x,F.y,F.z)):ue(T.x,T.y,h/u*K)}for(let K=m-1;K>=0;K--){const oe=K/m,T=f*Math.cos(oe*Math.PI/2),we=g*Math.sin(oe*Math.PI/2)+v;for(let U=0,ee=W.length;U<ee;U++){const he=J(W[U],ne[U],we);ue(he.x,he.y,h+T)}for(let U=0,ee=I.length;U<ee;U++){const he=I[U];Se=ce[U];for(let De=0,_e=he.length;De<_e;De++){const E=J(he[De],Se[De],we);x?ue(E.x,E.y+M[u-1].y,M[u-1].x+T):ue(E.x,E.y,h+T)}}}Y(),se();function Y(){const K=r.length/3;if(d){let oe=0,T=G*oe;for(let we=0;we<re;we++){const U=V[we];Ce(U[2]+T,U[1]+T,U[0]+T)}oe=u+m*2,T=G*oe;for(let we=0;we<re;we++){const U=V[we];Ce(U[0]+T,U[1]+T,U[2]+T)}}else{for(let oe=0;oe<re;oe++){const T=V[oe];Ce(T[2],T[1],T[0])}for(let oe=0;oe<re;oe++){const T=V[oe];Ce(T[0]+G*u,T[1]+G*u,T[2]+G*u)}}i.addGroup(K,r.length/3-K,0)}function se(){const K=r.length/3;let oe=0;xe(W,oe),oe+=W.length;for(let T=0,we=I.length;T<we;T++){const U=I[T];xe(U,oe),oe+=U.length}i.addGroup(K,r.length/3-K,1)}function xe(K,oe){let T=K.length;for(;--T>=0;){const we=T;let U=T-1;U<0&&(U=K.length-1);for(let ee=0,he=u+m*2;ee<he;ee++){const De=G*ee,_e=G*(ee+1),E=oe+we+De,_=oe+U+De,z=oe+U+_e,$=oe+we+_e;Ue(E,_,z,$)}}}function ue(K,oe,T){c.push(K),c.push(oe),c.push(T)}function Ce(K,oe,T){Le(K),Le(oe),Le(T);const we=r.length/3,U=w.generateTopUV(i,r,we-3,we-2,we-1);Ye(U[0]),Ye(U[1]),Ye(U[2])}function Ue(K,oe,T,we){Le(K),Le(oe),Le(we),Le(oe),Le(T),Le(we);const U=r.length/3,ee=w.generateSideWallUV(i,r,U-6,U-3,U-2,U-1);Ye(ee[0]),Ye(ee[1]),Ye(ee[3]),Ye(ee[1]),Ye(ee[2]),Ye(ee[3])}function Le(K){r.push(c[K*3+0]),r.push(c[K*3+1]),r.push(c[K*3+2])}function Ye(K){s.push(K.x),s.push(K.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return px(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new qa[r.type]().fromJSON(r)),new Sc(i,e.options)}}const fx={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[r*3],u=e[r*3+1];return[new ie(s,o),new ie(a,c),new ie(l,u)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],u=e[i*3+1],h=e[i*3+2],d=e[r*3],f=e[r*3+1],g=e[r*3+2],v=e[s*3],m=e[s*3+1],p=e[s*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new ie(o,1-c),new ie(l,1-h),new ie(d,1-g),new ie(v,1-p)]:[new ie(a,1-c),new ie(u,1-h),new ie(f,1-g),new ie(m,1-p)]}};function px(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Mc extends Pt{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],c=[],l=[],u=[];let h=e;const d=(t-e)/r,f=new C,g=new ie;for(let v=0;v<=r;v++){for(let m=0;m<=i;m++){const p=s+m/i*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let v=0;v<r;v++){const m=v*(i+1);for(let p=0;p<i;p++){const w=p+m,M=w,x=w+i+1,O=w+i+2,R=w+1;a.push(M,x,R),a.push(x,O,R)}}this.setIndex(a),this.setAttribute("position",new bt(c,3)),this.setAttribute("normal",new bt(l,3)),this.setAttribute("uv",new bt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class mx extends Mt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class Qh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=su(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=su();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function su(){return performance.now()}const ou=new ot;class gx{constructor(e,t,i=0,r=1/0){this.ray=new Br(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new pc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ou.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ou),this}intersectObject(e,t=!0,i=[]){return Ka(e,this,i,t),i.sort(au),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Ka(e[r],this,i,t);return i.sort(au),i}}function au(n,e){return n.distance-e.distance}function Ka(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)Ka(s[o],e,t,!0)}}class un{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class vx extends Er{constructor(e=10,t=16,i=8,r=64,s=4473924,o=8947848){s=new ke(s),o=new ke(o);const a=[],c=[];if(t>1)for(let h=0;h<t;h++){const d=h/t*(Math.PI*2),f=Math.sin(d)*e,g=Math.cos(d)*e;a.push(0,0,0),a.push(f,0,g);const v=h&1?s:o;c.push(v.r,v.g,v.b),c.push(v.r,v.g,v.b)}for(let h=0;h<i;h++){const d=h&1?s:o,f=e-e/i*h;for(let g=0;g<r;g++){let v=g/r*(Math.PI*2),m=Math.sin(v)*f,p=Math.cos(v)*f;a.push(m,0,p),c.push(d.r,d.g,d.b),v=(g+1)/r*(Math.PI*2),m=Math.sin(v)*f,p=Math.cos(v)*f,a.push(m,0,p),c.push(d.r,d.g,d.b)}}const l=new Pt;l.setAttribute("position",new bt(a,3)),l.setAttribute("color",new bt(c,3));const u=new vc({vertexColors:!0,toneMapped:!1});super(l,u),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class _x extends pi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rc);var cu;function Z(n,e,t){function i(a,c){if(a._zod||Object.defineProperty(a,"_zod",{value:{def:c,constr:o,traits:new Set},enumerable:!1}),a._zod.traits.has(n))return;a._zod.traits.add(n),e(a,c);const l=o.prototype,u=Object.keys(l);for(let h=0;h<u.length;h++){const d=u[h];d in a||(a[d]=l[d].bind(a))}}const r=(t==null?void 0:t.Parent)??Object;class s extends r{}Object.defineProperty(s,"name",{value:n});function o(a){var c;const l=t!=null&&t.Parent?new s:this;i(l,a),(c=l._zod).deferred??(c.deferred=[]);for(const u of l._zod.deferred)u();return l}return Object.defineProperty(o,"init",{value:i}),Object.defineProperty(o,Symbol.hasInstance,{value:a=>{var c,l;return t!=null&&t.Parent&&a instanceof t.Parent?!0:(l=(c=a==null?void 0:a._zod)==null?void 0:c.traits)==null?void 0:l.has(n)}}),Object.defineProperty(o,"name",{value:n}),o}class $i extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}class ed extends Error{constructor(e){super(`Encountered unidirectional transform during encode: ${e}`),this.name="ZodEncodeError"}}(cu=globalThis).__zod_globalConfig??(cu.__zod_globalConfig={});const bc=globalThis.__zod_globalConfig;function di(n){return bc}function td(n){const e=Object.values(n).filter(i=>typeof i=="number");return Object.entries(n).filter(([i,r])=>e.indexOf(+i)===-1).map(([i,r])=>r)}function Qa(n,e){return typeof e=="bigint"?e.toString():e}function ao(n){return{get value(){{const e=n();return Object.defineProperty(this,"value",{value:e}),e}}}}function Ec(n){return n==null}function wc(n){const e=n.startsWith("^")?1:0,t=n.endsWith("$")?n.length-1:n.length;return n.slice(e,t)}function xx(n,e){const t=n/e,i=Math.round(t),r=Number.EPSILON*Math.max(Math.abs(t),1);return Math.abs(t-i)<r?0:t-i}const lu=Symbol("evaluating");function rt(n,e,t){let i;Object.defineProperty(n,e,{get(){if(i!==lu)return i===void 0&&(i=lu,i=t()),i},set(r){Object.defineProperty(n,e,{value:r})},configurable:!0})}function vi(n,e,t){Object.defineProperty(n,e,{value:t,writable:!0,enumerable:!0,configurable:!0})}function $n(...n){const e={};for(const t of n){const i=Object.getOwnPropertyDescriptors(t);Object.assign(e,i)}return Object.defineProperties({},e)}function uu(n){return JSON.stringify(n)}function yx(n){return n.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"")}const nd="captureStackTrace"in Error?Error.captureStackTrace:(...n)=>{};function Nr(n){return typeof n=="object"&&n!==null&&!Array.isArray(n)}const Sx=ao(()=>{var n;if(bc.jitless||typeof navigator<"u"&&((n=navigator==null?void 0:navigator.userAgent)!=null&&n.includes("Cloudflare")))return!1;try{const e=Function;return new e(""),!0}catch{return!1}});function Ur(n){if(Nr(n)===!1)return!1;const e=n.constructor;if(e===void 0||typeof e!="function")return!0;const t=e.prototype;return!(Nr(t)===!1||Object.prototype.hasOwnProperty.call(t,"isPrototypeOf")===!1)}function id(n){return Ur(n)?{...n}:Array.isArray(n)?[...n]:n instanceof Map?new Map(n):n instanceof Set?new Set(n):n}const Mx=new Set(["string","number","symbol"]);function er(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Yn(n,e,t){const i=new n._zod.constr(e??n._zod.def);return(!e||t!=null&&t.parent)&&(i._zod.parent=n),i}function Ie(n){const e=n;if(!e)return{};if(typeof e=="string")return{error:()=>e};if((e==null?void 0:e.message)!==void 0){if((e==null?void 0:e.error)!==void 0)throw new Error("Cannot specify both `message` and `error` params");e.error=e.message}return delete e.message,typeof e.error=="string"?{...e,error:()=>e.error}:e}function bx(n){return Object.keys(n).filter(e=>n[e]._zod.optin==="optional"&&n[e]._zod.optout==="optional")}const Ex={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-34028234663852886e22,34028234663852886e22],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]};function wx(n,e){const t=n._zod.def,i=t.checks;if(i&&i.length>0)throw new Error(".pick() cannot be used on object schemas containing refinements");const s=$n(n._zod.def,{get shape(){const o={};for(const a in e){if(!(a in t.shape))throw new Error(`Unrecognized key: "${a}"`);e[a]&&(o[a]=t.shape[a])}return vi(this,"shape",o),o},checks:[]});return Yn(n,s)}function Tx(n,e){const t=n._zod.def,i=t.checks;if(i&&i.length>0)throw new Error(".omit() cannot be used on object schemas containing refinements");const s=$n(n._zod.def,{get shape(){const o={...n._zod.def.shape};for(const a in e){if(!(a in t.shape))throw new Error(`Unrecognized key: "${a}"`);e[a]&&delete o[a]}return vi(this,"shape",o),o},checks:[]});return Yn(n,s)}function Rx(n,e){if(!Ur(e))throw new Error("Invalid input to extend: expected a plain object");const t=n._zod.def.checks;if(t&&t.length>0){const s=n._zod.def.shape;for(const o in e)if(Object.getOwnPropertyDescriptor(s,o)!==void 0)throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}const r=$n(n._zod.def,{get shape(){const s={...n._zod.def.shape,...e};return vi(this,"shape",s),s}});return Yn(n,r)}function Ax(n,e){if(!Ur(e))throw new Error("Invalid input to safeExtend: expected a plain object");const t=$n(n._zod.def,{get shape(){const i={...n._zod.def.shape,...e};return vi(this,"shape",i),i}});return Yn(n,t)}function Cx(n,e){var i;if((i=n._zod.def.checks)!=null&&i.length)throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");const t=$n(n._zod.def,{get shape(){const r={...n._zod.def.shape,...e._zod.def.shape};return vi(this,"shape",r),r},get catchall(){return e._zod.def.catchall},checks:e._zod.def.checks??[]});return Yn(n,t)}function Ix(n,e,t){const r=e._zod.def.checks;if(r&&r.length>0)throw new Error(".partial() cannot be used on object schemas containing refinements");const o=$n(e._zod.def,{get shape(){const a=e._zod.def.shape,c={...a};if(t)for(const l in t){if(!(l in a))throw new Error(`Unrecognized key: "${l}"`);t[l]&&(c[l]=n?new n({type:"optional",innerType:a[l]}):a[l])}else for(const l in a)c[l]=n?new n({type:"optional",innerType:a[l]}):a[l];return vi(this,"shape",c),c},checks:[]});return Yn(e,o)}function Px(n,e,t){const i=$n(e._zod.def,{get shape(){const r=e._zod.def.shape,s={...r};if(t)for(const o in t){if(!(o in s))throw new Error(`Unrecognized key: "${o}"`);t[o]&&(s[o]=new n({type:"nonoptional",innerType:r[o]}))}else for(const o in r)s[o]=new n({type:"nonoptional",innerType:r[o]});return vi(this,"shape",s),s}});return Yn(e,i)}function Vi(n,e=0){var t;if(n.aborted===!0)return!0;for(let i=e;i<n.issues.length;i++)if(((t=n.issues[i])==null?void 0:t.continue)!==!0)return!0;return!1}function Fx(n,e=0){var t;if(n.aborted===!0)return!0;for(let i=e;i<n.issues.length;i++)if(((t=n.issues[i])==null?void 0:t.continue)===!1)return!0;return!1}function co(n,e){return e.map(t=>{var i;return(i=t).path??(i.path=[]),t.path.unshift(n),t})}function ws(n){return typeof n=="string"?n:n==null?void 0:n.message}function fi(n,e,t){var c,l,u,h,d,f;const i=n.message?n.message:ws((u=(l=(c=n.inst)==null?void 0:c._zod.def)==null?void 0:l.error)==null?void 0:u.call(l,n))??ws((h=e==null?void 0:e.error)==null?void 0:h.call(e,n))??ws((d=t.customError)==null?void 0:d.call(t,n))??ws((f=t.localeError)==null?void 0:f.call(t,n))??"Invalid input",{inst:r,continue:s,input:o,...a}=n;return a.path??(a.path=[]),a.message=i,e!=null&&e.reportInput&&(a.input=o),a}function Tc(n){return Array.isArray(n)?"array":typeof n=="string"?"string":"unknown"}function Or(...n){const[e,t,i]=n;return typeof e=="string"?{message:e,code:"custom",input:t,inst:i}:{...e}}const rd=(n,e)=>{n.name="$ZodError",Object.defineProperty(n,"_zod",{value:n._zod,enumerable:!1}),Object.defineProperty(n,"issues",{value:e,enumerable:!1}),n.message=JSON.stringify(e,Qa,2),Object.defineProperty(n,"toString",{value:()=>n.message,enumerable:!1})},sd=Z("$ZodError",rd),od=Z("$ZodError",rd,{Parent:Error});function Dx(n,e=t=>t.message){const t={},i=[];for(const r of n.issues)r.path.length>0?(t[r.path[0]]=t[r.path[0]]||[],t[r.path[0]].push(e(r))):i.push(e(r));return{formErrors:i,fieldErrors:t}}function Lx(n,e=t=>t.message){const t={_errors:[]},i=(r,s=[])=>{for(const o of r.issues)if(o.code==="invalid_union"&&o.errors.length)o.errors.map(a=>i({issues:a},[...s,...o.path]));else if(o.code==="invalid_key")i({issues:o.issues},[...s,...o.path]);else if(o.code==="invalid_element")i({issues:o.issues},[...s,...o.path]);else{const a=[...s,...o.path];if(a.length===0)t._errors.push(e(o));else{let c=t,l=0;for(;l<a.length;){const u=a[l];l===a.length-1?(c[u]=c[u]||{_errors:[]},c[u]._errors.push(e(o))):c[u]=c[u]||{_errors:[]},c=c[u],l++}}}};return i(n),t}const Rc=n=>(e,t,i,r)=>{const s=i?{...i,async:!1}:{async:!1},o=e._zod.run({value:t,issues:[]},s);if(o instanceof Promise)throw new $i;if(o.issues.length){const a=new((r==null?void 0:r.Err)??n)(o.issues.map(c=>fi(c,s,di())));throw nd(a,r==null?void 0:r.callee),a}return o.value},Ac=n=>async(e,t,i,r)=>{const s=i?{...i,async:!0}:{async:!0};let o=e._zod.run({value:t,issues:[]},s);if(o instanceof Promise&&(o=await o),o.issues.length){const a=new((r==null?void 0:r.Err)??n)(o.issues.map(c=>fi(c,s,di())));throw nd(a,r==null?void 0:r.callee),a}return o.value},lo=n=>(e,t,i)=>{const r=i?{...i,async:!1}:{async:!1},s=e._zod.run({value:t,issues:[]},r);if(s instanceof Promise)throw new $i;return s.issues.length?{success:!1,error:new(n??sd)(s.issues.map(o=>fi(o,r,di())))}:{success:!0,data:s.value}},Nx=lo(od),uo=n=>async(e,t,i)=>{const r=i?{...i,async:!0}:{async:!0};let s=e._zod.run({value:t,issues:[]},r);return s instanceof Promise&&(s=await s),s.issues.length?{success:!1,error:new n(s.issues.map(o=>fi(o,r,di())))}:{success:!0,data:s.value}},Ux=uo(od),Ox=n=>(e,t,i)=>{const r=i?{...i,direction:"backward"}:{direction:"backward"};return Rc(n)(e,t,r)},zx=n=>(e,t,i)=>Rc(n)(e,t,i),kx=n=>async(e,t,i)=>{const r=i?{...i,direction:"backward"}:{direction:"backward"};return Ac(n)(e,t,r)},Bx=n=>async(e,t,i)=>Ac(n)(e,t,i),Vx=n=>(e,t,i)=>{const r=i?{...i,direction:"backward"}:{direction:"backward"};return lo(n)(e,t,r)},Hx=n=>(e,t,i)=>lo(n)(e,t,i),Gx=n=>async(e,t,i)=>{const r=i?{...i,direction:"backward"}:{direction:"backward"};return uo(n)(e,t,r)},Wx=n=>async(e,t,i)=>uo(n)(e,t,i),Xx=/^[cC][0-9a-z]{6,}$/,Zx=/^[0-9a-z]+$/,$x=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,Yx=/^[0-9a-vA-V]{20}$/,qx=/^[A-Za-z0-9]{27}$/,jx=/^[a-zA-Z0-9_-]{21}$/,Jx=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,Kx=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,hu=n=>n?new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${n}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,Qx=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,ey="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";function ty(){return new RegExp(ey,"u")}const ny=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,iy=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,ry=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,sy=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,oy=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,ad=/^[A-Za-z0-9_-]*$/,ay=/^https?$/,cy=/^\+[1-9]\d{6,14}$/,cd="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",ly=new RegExp(`^${cd}$`);function ld(n){const e="(?:[01]\\d|2[0-3]):[0-5]\\d";return typeof n.precision=="number"?n.precision===-1?`${e}`:n.precision===0?`${e}:[0-5]\\d`:`${e}:[0-5]\\d\\.\\d{${n.precision}}`:`${e}(?::[0-5]\\d(?:\\.\\d+)?)?`}function uy(n){return new RegExp(`^${ld(n)}$`)}function hy(n){const e=ld({precision:n.precision}),t=["Z"];n.local&&t.push(""),n.offset&&t.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");const i=`${e}(?:${t.join("|")})`;return new RegExp(`^${cd}T(?:${i})$`)}const dy=n=>{const e=n?`[\\s\\S]{${(n==null?void 0:n.minimum)??0},${(n==null?void 0:n.maximum)??""}}`:"[\\s\\S]*";return new RegExp(`^${e}$`)},fy=/^-?\d+$/,py=/^-?\d+(?:\.\d+)?$/,my=/^(?:true|false)$/i,gy=/^[^A-Z]*$/,vy=/^[^a-z]*$/,Zt=Z("$ZodCheck",(n,e)=>{var t;n._zod??(n._zod={}),n._zod.def=e,(t=n._zod).onattach??(t.onattach=[])}),ud={number:"number",bigint:"bigint",object:"date"},hd=Z("$ZodCheckLessThan",(n,e)=>{Zt.init(n,e);const t=ud[typeof e.value];n._zod.onattach.push(i=>{const r=i._zod.bag,s=(e.inclusive?r.maximum:r.exclusiveMaximum)??Number.POSITIVE_INFINITY;e.value<s&&(e.inclusive?r.maximum=e.value:r.exclusiveMaximum=e.value)}),n._zod.check=i=>{(e.inclusive?i.value<=e.value:i.value<e.value)||i.issues.push({origin:t,code:"too_big",maximum:typeof e.value=="object"?e.value.getTime():e.value,input:i.value,inclusive:e.inclusive,inst:n,continue:!e.abort})}}),dd=Z("$ZodCheckGreaterThan",(n,e)=>{Zt.init(n,e);const t=ud[typeof e.value];n._zod.onattach.push(i=>{const r=i._zod.bag,s=(e.inclusive?r.minimum:r.exclusiveMinimum)??Number.NEGATIVE_INFINITY;e.value>s&&(e.inclusive?r.minimum=e.value:r.exclusiveMinimum=e.value)}),n._zod.check=i=>{(e.inclusive?i.value>=e.value:i.value>e.value)||i.issues.push({origin:t,code:"too_small",minimum:typeof e.value=="object"?e.value.getTime():e.value,input:i.value,inclusive:e.inclusive,inst:n,continue:!e.abort})}}),_y=Z("$ZodCheckMultipleOf",(n,e)=>{Zt.init(n,e),n._zod.onattach.push(t=>{var i;(i=t._zod.bag).multipleOf??(i.multipleOf=e.value)}),n._zod.check=t=>{if(typeof t.value!=typeof e.value)throw new Error("Cannot mix number and bigint in multiple_of check.");(typeof t.value=="bigint"?t.value%e.value===BigInt(0):xx(t.value,e.value)===0)||t.issues.push({origin:typeof t.value,code:"not_multiple_of",divisor:e.value,input:t.value,inst:n,continue:!e.abort})}}),xy=Z("$ZodCheckNumberFormat",(n,e)=>{var o;Zt.init(n,e),e.format=e.format||"float64";const t=(o=e.format)==null?void 0:o.includes("int"),i=t?"int":"number",[r,s]=Ex[e.format];n._zod.onattach.push(a=>{const c=a._zod.bag;c.format=e.format,c.minimum=r,c.maximum=s,t&&(c.pattern=fy)}),n._zod.check=a=>{const c=a.value;if(t){if(!Number.isInteger(c)){a.issues.push({expected:i,format:e.format,code:"invalid_type",continue:!1,input:c,inst:n});return}if(!Number.isSafeInteger(c)){c>0?a.issues.push({input:c,code:"too_big",maximum:Number.MAX_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:n,origin:i,inclusive:!0,continue:!e.abort}):a.issues.push({input:c,code:"too_small",minimum:Number.MIN_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:n,origin:i,inclusive:!0,continue:!e.abort});return}}c<r&&a.issues.push({origin:"number",input:c,code:"too_small",minimum:r,inclusive:!0,inst:n,continue:!e.abort}),c>s&&a.issues.push({origin:"number",input:c,code:"too_big",maximum:s,inclusive:!0,inst:n,continue:!e.abort})}}),yy=Z("$ZodCheckMaxLength",(n,e)=>{var t;Zt.init(n,e),(t=n._zod.def).when??(t.when=i=>{const r=i.value;return!Ec(r)&&r.length!==void 0}),n._zod.onattach.push(i=>{const r=i._zod.bag.maximum??Number.POSITIVE_INFINITY;e.maximum<r&&(i._zod.bag.maximum=e.maximum)}),n._zod.check=i=>{const r=i.value;if(r.length<=e.maximum)return;const o=Tc(r);i.issues.push({origin:o,code:"too_big",maximum:e.maximum,inclusive:!0,input:r,inst:n,continue:!e.abort})}}),Sy=Z("$ZodCheckMinLength",(n,e)=>{var t;Zt.init(n,e),(t=n._zod.def).when??(t.when=i=>{const r=i.value;return!Ec(r)&&r.length!==void 0}),n._zod.onattach.push(i=>{const r=i._zod.bag.minimum??Number.NEGATIVE_INFINITY;e.minimum>r&&(i._zod.bag.minimum=e.minimum)}),n._zod.check=i=>{const r=i.value;if(r.length>=e.minimum)return;const o=Tc(r);i.issues.push({origin:o,code:"too_small",minimum:e.minimum,inclusive:!0,input:r,inst:n,continue:!e.abort})}}),My=Z("$ZodCheckLengthEquals",(n,e)=>{var t;Zt.init(n,e),(t=n._zod.def).when??(t.when=i=>{const r=i.value;return!Ec(r)&&r.length!==void 0}),n._zod.onattach.push(i=>{const r=i._zod.bag;r.minimum=e.length,r.maximum=e.length,r.length=e.length}),n._zod.check=i=>{const r=i.value,s=r.length;if(s===e.length)return;const o=Tc(r),a=s>e.length;i.issues.push({origin:o,...a?{code:"too_big",maximum:e.length}:{code:"too_small",minimum:e.length},inclusive:!0,exact:!0,input:i.value,inst:n,continue:!e.abort})}}),ho=Z("$ZodCheckStringFormat",(n,e)=>{var t,i;Zt.init(n,e),n._zod.onattach.push(r=>{const s=r._zod.bag;s.format=e.format,e.pattern&&(s.patterns??(s.patterns=new Set),s.patterns.add(e.pattern))}),e.pattern?(t=n._zod).check??(t.check=r=>{e.pattern.lastIndex=0,!e.pattern.test(r.value)&&r.issues.push({origin:"string",code:"invalid_format",format:e.format,input:r.value,...e.pattern?{pattern:e.pattern.toString()}:{},inst:n,continue:!e.abort})}):(i=n._zod).check??(i.check=()=>{})}),by=Z("$ZodCheckRegex",(n,e)=>{ho.init(n,e),n._zod.check=t=>{e.pattern.lastIndex=0,!e.pattern.test(t.value)&&t.issues.push({origin:"string",code:"invalid_format",format:"regex",input:t.value,pattern:e.pattern.toString(),inst:n,continue:!e.abort})}}),Ey=Z("$ZodCheckLowerCase",(n,e)=>{e.pattern??(e.pattern=gy),ho.init(n,e)}),wy=Z("$ZodCheckUpperCase",(n,e)=>{e.pattern??(e.pattern=vy),ho.init(n,e)}),Ty=Z("$ZodCheckIncludes",(n,e)=>{Zt.init(n,e);const t=er(e.includes),i=new RegExp(typeof e.position=="number"?`^.{${e.position}}${t}`:t);e.pattern=i,n._zod.onattach.push(r=>{const s=r._zod.bag;s.patterns??(s.patterns=new Set),s.patterns.add(i)}),n._zod.check=r=>{r.value.includes(e.includes,e.position)||r.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:e.includes,input:r.value,inst:n,continue:!e.abort})}}),Ry=Z("$ZodCheckStartsWith",(n,e)=>{Zt.init(n,e);const t=new RegExp(`^${er(e.prefix)}.*`);e.pattern??(e.pattern=t),n._zod.onattach.push(i=>{const r=i._zod.bag;r.patterns??(r.patterns=new Set),r.patterns.add(t)}),n._zod.check=i=>{i.value.startsWith(e.prefix)||i.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:e.prefix,input:i.value,inst:n,continue:!e.abort})}}),Ay=Z("$ZodCheckEndsWith",(n,e)=>{Zt.init(n,e);const t=new RegExp(`.*${er(e.suffix)}$`);e.pattern??(e.pattern=t),n._zod.onattach.push(i=>{const r=i._zod.bag;r.patterns??(r.patterns=new Set),r.patterns.add(t)}),n._zod.check=i=>{i.value.endsWith(e.suffix)||i.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:e.suffix,input:i.value,inst:n,continue:!e.abort})}}),Cy=Z("$ZodCheckOverwrite",(n,e)=>{Zt.init(n,e),n._zod.check=t=>{t.value=e.tx(t.value)}});class Iy{constructor(e=[]){this.content=[],this.indent=0,this&&(this.args=e)}indented(e){this.indent+=1,e(this),this.indent-=1}write(e){if(typeof e=="function"){e(this,{execution:"sync"}),e(this,{execution:"async"});return}const i=e.split(`
`).filter(o=>o),r=Math.min(...i.map(o=>o.length-o.trimStart().length)),s=i.map(o=>o.slice(r)).map(o=>" ".repeat(this.indent*2)+o);for(const o of s)this.content.push(o)}compile(){const e=Function,t=this==null?void 0:this.args,r=[...((this==null?void 0:this.content)??[""]).map(s=>`  ${s}`)];return new e(...t,r.join(`
`))}}const Py={major:4,minor:4,patch:3},dt=Z("$ZodType",(n,e)=>{var r;var t;n??(n={}),n._zod.def=e,n._zod.bag=n._zod.bag||{},n._zod.version=Py;const i=[...n._zod.def.checks??[]];n._zod.traits.has("$ZodCheck")&&i.unshift(n);for(const s of i)for(const o of s._zod.onattach)o(n);if(i.length===0)(t=n._zod).deferred??(t.deferred=[]),(r=n._zod.deferred)==null||r.push(()=>{n._zod.run=n._zod.parse});else{const s=(a,c,l)=>{let u=Vi(a),h;for(const d of c){if(d._zod.def.when){if(Fx(a)||!d._zod.def.when(a))continue}else if(u)continue;const f=a.issues.length,g=d._zod.check(a);if(g instanceof Promise&&(l==null?void 0:l.async)===!1)throw new $i;if(h||g instanceof Promise)h=(h??Promise.resolve()).then(async()=>{await g,a.issues.length!==f&&(u||(u=Vi(a,f)))});else{if(a.issues.length===f)continue;u||(u=Vi(a,f))}}return h?h.then(()=>a):a},o=(a,c,l)=>{if(Vi(a))return a.aborted=!0,a;const u=s(c,i,l);if(u instanceof Promise){if(l.async===!1)throw new $i;return u.then(h=>n._zod.parse(h,l))}return n._zod.parse(u,l)};n._zod.run=(a,c)=>{if(c.skipChecks)return n._zod.parse(a,c);if(c.direction==="backward"){const u=n._zod.parse({value:a.value,issues:[]},{...c,skipChecks:!0});return u instanceof Promise?u.then(h=>o(h,a,c)):o(u,a,c)}const l=n._zod.parse(a,c);if(l instanceof Promise){if(c.async===!1)throw new $i;return l.then(u=>s(u,i,c))}return s(l,i,c)}}rt(n,"~standard",()=>({validate:s=>{var o;try{const a=Nx(n,s);return a.success?{value:a.data}:{issues:(o=a.error)==null?void 0:o.issues}}catch{return Ux(n,s).then(c=>{var l;return c.success?{value:c.data}:{issues:(l=c.error)==null?void 0:l.issues}})}},vendor:"zod",version:1}))}),Cc=Z("$ZodString",(n,e)=>{var t;dt.init(n,e),n._zod.pattern=[...((t=n==null?void 0:n._zod.bag)==null?void 0:t.patterns)??[]].pop()??dy(n._zod.bag),n._zod.parse=(i,r)=>{if(e.coerce)try{i.value=String(i.value)}catch{}return typeof i.value=="string"||i.issues.push({expected:"string",code:"invalid_type",input:i.value,inst:n}),i}}),ft=Z("$ZodStringFormat",(n,e)=>{ho.init(n,e),Cc.init(n,e)}),Fy=Z("$ZodGUID",(n,e)=>{e.pattern??(e.pattern=Kx),ft.init(n,e)}),Dy=Z("$ZodUUID",(n,e)=>{if(e.version){const i={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[e.version];if(i===void 0)throw new Error(`Invalid UUID version: "${e.version}"`);e.pattern??(e.pattern=hu(i))}else e.pattern??(e.pattern=hu());ft.init(n,e)}),Ly=Z("$ZodEmail",(n,e)=>{e.pattern??(e.pattern=Qx),ft.init(n,e)}),Ny=Z("$ZodURL",(n,e)=>{ft.init(n,e),n._zod.check=t=>{var i;try{const r=t.value.trim();if(!e.normalize&&((i=e.protocol)==null?void 0:i.source)===ay.source&&!/^https?:\/\//i.test(r)){t.issues.push({code:"invalid_format",format:"url",note:"Invalid URL format",input:t.value,inst:n,continue:!e.abort});return}const s=new URL(r);e.hostname&&(e.hostname.lastIndex=0,e.hostname.test(s.hostname)||t.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:e.hostname.source,input:t.value,inst:n,continue:!e.abort})),e.protocol&&(e.protocol.lastIndex=0,e.protocol.test(s.protocol.endsWith(":")?s.protocol.slice(0,-1):s.protocol)||t.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:e.protocol.source,input:t.value,inst:n,continue:!e.abort})),e.normalize?t.value=s.href:t.value=r;return}catch{t.issues.push({code:"invalid_format",format:"url",input:t.value,inst:n,continue:!e.abort})}}}),Uy=Z("$ZodEmoji",(n,e)=>{e.pattern??(e.pattern=ty()),ft.init(n,e)}),Oy=Z("$ZodNanoID",(n,e)=>{e.pattern??(e.pattern=jx),ft.init(n,e)}),zy=Z("$ZodCUID",(n,e)=>{e.pattern??(e.pattern=Xx),ft.init(n,e)}),ky=Z("$ZodCUID2",(n,e)=>{e.pattern??(e.pattern=Zx),ft.init(n,e)}),By=Z("$ZodULID",(n,e)=>{e.pattern??(e.pattern=$x),ft.init(n,e)}),Vy=Z("$ZodXID",(n,e)=>{e.pattern??(e.pattern=Yx),ft.init(n,e)}),Hy=Z("$ZodKSUID",(n,e)=>{e.pattern??(e.pattern=qx),ft.init(n,e)}),Gy=Z("$ZodISODateTime",(n,e)=>{e.pattern??(e.pattern=hy(e)),ft.init(n,e)}),Wy=Z("$ZodISODate",(n,e)=>{e.pattern??(e.pattern=ly),ft.init(n,e)}),Xy=Z("$ZodISOTime",(n,e)=>{e.pattern??(e.pattern=uy(e)),ft.init(n,e)}),Zy=Z("$ZodISODuration",(n,e)=>{e.pattern??(e.pattern=Jx),ft.init(n,e)}),$y=Z("$ZodIPv4",(n,e)=>{e.pattern??(e.pattern=ny),ft.init(n,e),n._zod.bag.format="ipv4"}),Yy=Z("$ZodIPv6",(n,e)=>{e.pattern??(e.pattern=iy),ft.init(n,e),n._zod.bag.format="ipv6",n._zod.check=t=>{try{new URL(`http://[${t.value}]`)}catch{t.issues.push({code:"invalid_format",format:"ipv6",input:t.value,inst:n,continue:!e.abort})}}}),qy=Z("$ZodCIDRv4",(n,e)=>{e.pattern??(e.pattern=ry),ft.init(n,e)}),jy=Z("$ZodCIDRv6",(n,e)=>{e.pattern??(e.pattern=sy),ft.init(n,e),n._zod.check=t=>{const i=t.value.split("/");try{if(i.length!==2)throw new Error;const[r,s]=i;if(!s)throw new Error;const o=Number(s);if(`${o}`!==s)throw new Error;if(o<0||o>128)throw new Error;new URL(`http://[${r}]`)}catch{t.issues.push({code:"invalid_format",format:"cidrv6",input:t.value,inst:n,continue:!e.abort})}}});function fd(n){if(n==="")return!0;if(/\s/.test(n)||n.length%4!==0)return!1;try{return atob(n),!0}catch{return!1}}const Jy=Z("$ZodBase64",(n,e)=>{e.pattern??(e.pattern=oy),ft.init(n,e),n._zod.bag.contentEncoding="base64",n._zod.check=t=>{fd(t.value)||t.issues.push({code:"invalid_format",format:"base64",input:t.value,inst:n,continue:!e.abort})}});function Ky(n){if(!ad.test(n))return!1;const e=n.replace(/[-_]/g,i=>i==="-"?"+":"/"),t=e.padEnd(Math.ceil(e.length/4)*4,"=");return fd(t)}const Qy=Z("$ZodBase64URL",(n,e)=>{e.pattern??(e.pattern=ad),ft.init(n,e),n._zod.bag.contentEncoding="base64url",n._zod.check=t=>{Ky(t.value)||t.issues.push({code:"invalid_format",format:"base64url",input:t.value,inst:n,continue:!e.abort})}}),eS=Z("$ZodE164",(n,e)=>{e.pattern??(e.pattern=cy),ft.init(n,e)});function tS(n,e=null){try{const t=n.split(".");if(t.length!==3)return!1;const[i]=t;if(!i)return!1;const r=JSON.parse(atob(i));return!("typ"in r&&(r==null?void 0:r.typ)!=="JWT"||!r.alg||e&&(!("alg"in r)||r.alg!==e))}catch{return!1}}const nS=Z("$ZodJWT",(n,e)=>{ft.init(n,e),n._zod.check=t=>{tS(t.value,e.alg)||t.issues.push({code:"invalid_format",format:"jwt",input:t.value,inst:n,continue:!e.abort})}}),pd=Z("$ZodNumber",(n,e)=>{dt.init(n,e),n._zod.pattern=n._zod.bag.pattern??py,n._zod.parse=(t,i)=>{if(e.coerce)try{t.value=Number(t.value)}catch{}const r=t.value;if(typeof r=="number"&&!Number.isNaN(r)&&Number.isFinite(r))return t;const s=typeof r=="number"?Number.isNaN(r)?"NaN":Number.isFinite(r)?void 0:"Infinity":void 0;return t.issues.push({expected:"number",code:"invalid_type",input:r,inst:n,...s?{received:s}:{}}),t}}),iS=Z("$ZodNumberFormat",(n,e)=>{xy.init(n,e),pd.init(n,e)}),rS=Z("$ZodBoolean",(n,e)=>{dt.init(n,e),n._zod.pattern=my,n._zod.parse=(t,i)=>{if(e.coerce)try{t.value=!!t.value}catch{}const r=t.value;return typeof r=="boolean"||t.issues.push({expected:"boolean",code:"invalid_type",input:r,inst:n}),t}}),sS=Z("$ZodUnknown",(n,e)=>{dt.init(n,e),n._zod.parse=t=>t}),oS=Z("$ZodNever",(n,e)=>{dt.init(n,e),n._zod.parse=(t,i)=>(t.issues.push({expected:"never",code:"invalid_type",input:t.value,inst:n}),t)});function du(n,e,t){n.issues.length&&e.issues.push(...co(t,n.issues)),e.value[t]=n.value}const aS=Z("$ZodArray",(n,e)=>{dt.init(n,e),n._zod.parse=(t,i)=>{const r=t.value;if(!Array.isArray(r))return t.issues.push({expected:"array",code:"invalid_type",input:r,inst:n}),t;t.value=Array(r.length);const s=[];for(let o=0;o<r.length;o++){const a=r[o],c=e.element._zod.run({value:a,issues:[]},i);c instanceof Promise?s.push(c.then(l=>du(l,t,o))):du(c,t,o)}return s.length?Promise.all(s).then(()=>t):t}});function $s(n,e,t,i,r,s){const o=t in i;if(n.issues.length){if(r&&s&&!o)return;e.issues.push(...co(t,n.issues))}if(!o&&!r){n.issues.length||e.issues.push({code:"invalid_type",expected:"nonoptional",input:void 0,path:[t]});return}n.value===void 0?o&&(e.value[t]=void 0):e.value[t]=n.value}function md(n){var i,r,s,o;const e=Object.keys(n.shape);for(const a of e)if(!((o=(s=(r=(i=n.shape)==null?void 0:i[a])==null?void 0:r._zod)==null?void 0:s.traits)!=null&&o.has("$ZodType")))throw new Error(`Invalid element at key "${a}": expected a Zod schema`);const t=bx(n.shape);return{...n,keys:e,keySet:new Set(e),numKeys:e.length,optionalKeys:new Set(t)}}function gd(n,e,t,i,r,s){const o=[],a=r.keySet,c=r.catchall._zod,l=c.def.type,u=c.optin==="optional",h=c.optout==="optional";for(const d in e){if(d==="__proto__"||a.has(d))continue;if(l==="never"){o.push(d);continue}const f=c.run({value:e[d],issues:[]},i);f instanceof Promise?n.push(f.then(g=>$s(g,t,d,e,u,h))):$s(f,t,d,e,u,h)}return o.length&&t.issues.push({code:"unrecognized_keys",keys:o,input:e,inst:s}),n.length?Promise.all(n).then(()=>t):t}const cS=Z("$ZodObject",(n,e)=>{dt.init(n,e);const t=Object.getOwnPropertyDescriptor(e,"shape");if(!(t!=null&&t.get)){const a=e.shape;Object.defineProperty(e,"shape",{get:()=>{const c={...a};return Object.defineProperty(e,"shape",{value:c}),c}})}const i=ao(()=>md(e));rt(n._zod,"propValues",()=>{const a=e.shape,c={};for(const l in a){const u=a[l]._zod;if(u.values){c[l]??(c[l]=new Set);for(const h of u.values)c[l].add(h)}}return c});const r=Nr,s=e.catchall;let o;n._zod.parse=(a,c)=>{o??(o=i.value);const l=a.value;if(!r(l))return a.issues.push({expected:"object",code:"invalid_type",input:l,inst:n}),a;a.value={};const u=[],h=o.shape;for(const d of o.keys){const f=h[d],g=f._zod.optin==="optional",v=f._zod.optout==="optional",m=f._zod.run({value:l[d],issues:[]},c);m instanceof Promise?u.push(m.then(p=>$s(p,a,d,l,g,v))):$s(m,a,d,l,g,v)}return s?gd(u,l,a,c,i.value,n):u.length?Promise.all(u).then(()=>a):a}}),lS=Z("$ZodObjectJIT",(n,e)=>{cS.init(n,e);const t=n._zod.parse,i=ao(()=>md(e)),r=d=>{var M,x;const f=new Iy(["shape","payload","ctx"]),g=i.value,v=O=>{const R=uu(O);return`shape[${R}]._zod.run({ value: input[${R}], issues: [] }, ctx)`};f.write("const input = payload.value;");const m=Object.create(null);let p=0;for(const O of g.keys)m[O]=`key_${p++}`;f.write("const newResult = {};");for(const O of g.keys){const R=m[O],A=uu(O),F=d[O],b=((M=F==null?void 0:F._zod)==null?void 0:M.optin)==="optional",S=((x=F==null?void 0:F._zod)==null?void 0:x.optout)==="optional";f.write(`const ${R} = ${v(O)};`),b&&S?f.write(`
        if (${R}.issues.length) {
          if (${A} in input) {
            payload.issues = payload.issues.concat(${R}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${A}, ...iss.path] : [${A}]
            })));
          }
        }
        
        if (${R}.value === undefined) {
          if (${A} in input) {
            newResult[${A}] = undefined;
          }
        } else {
          newResult[${A}] = ${R}.value;
        }
        
      `):b?f.write(`
        if (${R}.issues.length) {
          payload.issues = payload.issues.concat(${R}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${A}, ...iss.path] : [${A}]
          })));
        }
        
        if (${R}.value === undefined) {
          if (${A} in input) {
            newResult[${A}] = undefined;
          }
        } else {
          newResult[${A}] = ${R}.value;
        }
        
      `):f.write(`
        const ${R}_present = ${A} in input;
        if (${R}.issues.length) {
          payload.issues = payload.issues.concat(${R}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${A}, ...iss.path] : [${A}]
          })));
        }
        if (!${R}_present && !${R}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${A}]
          });
        }

        if (${R}_present) {
          if (${R}.value === undefined) {
            newResult[${A}] = undefined;
          } else {
            newResult[${A}] = ${R}.value;
          }
        }

      `)}f.write("payload.value = newResult;"),f.write("return payload;");const w=f.compile();return(O,R)=>w(d,O,R)};let s;const o=Nr,a=!bc.jitless,l=a&&Sx.value,u=e.catchall;let h;n._zod.parse=(d,f)=>{h??(h=i.value);const g=d.value;return o(g)?a&&l&&(f==null?void 0:f.async)===!1&&f.jitless!==!0?(s||(s=r(e.shape)),d=s(d,f),u?gd([],g,d,f,h,n):d):t(d,f):(d.issues.push({expected:"object",code:"invalid_type",input:g,inst:n}),d)}});function fu(n,e,t,i){for(const s of n)if(s.issues.length===0)return e.value=s.value,e;const r=n.filter(s=>!Vi(s));return r.length===1?(e.value=r[0].value,r[0]):(e.issues.push({code:"invalid_union",input:e.value,inst:t,errors:n.map(s=>s.issues.map(o=>fi(o,i,di())))}),e)}const vd=Z("$ZodUnion",(n,e)=>{dt.init(n,e),rt(n._zod,"optin",()=>e.options.some(i=>i._zod.optin==="optional")?"optional":void 0),rt(n._zod,"optout",()=>e.options.some(i=>i._zod.optout==="optional")?"optional":void 0),rt(n._zod,"values",()=>{if(e.options.every(i=>i._zod.values))return new Set(e.options.flatMap(i=>Array.from(i._zod.values)))}),rt(n._zod,"pattern",()=>{if(e.options.every(i=>i._zod.pattern)){const i=e.options.map(r=>r._zod.pattern);return new RegExp(`^(${i.map(r=>wc(r.source)).join("|")})$`)}});const t=e.options.length===1?e.options[0]._zod.run:null;n._zod.parse=(i,r)=>{if(t)return t(i,r);let s=!1;const o=[];for(const a of e.options){const c=a._zod.run({value:i.value,issues:[]},r);if(c instanceof Promise)o.push(c),s=!0;else{if(c.issues.length===0)return c;o.push(c)}}return s?Promise.all(o).then(a=>fu(a,i,n,r)):fu(o,i,n,r)}}),uS=Z("$ZodDiscriminatedUnion",(n,e)=>{e.inclusive=!1,vd.init(n,e);const t=n._zod.parse;rt(n._zod,"propValues",()=>{const r={};for(const s of e.options){const o=s._zod.propValues;if(!o||Object.keys(o).length===0)throw new Error(`Invalid discriminated union option at index "${e.options.indexOf(s)}"`);for(const[a,c]of Object.entries(o)){r[a]||(r[a]=new Set);for(const l of c)r[a].add(l)}}return r});const i=ao(()=>{var o;const r=e.options,s=new Map;for(const a of r){const c=(o=a._zod.propValues)==null?void 0:o[e.discriminator];if(!c||c.size===0)throw new Error(`Invalid discriminated union option at index "${e.options.indexOf(a)}"`);for(const l of c){if(s.has(l))throw new Error(`Duplicate discriminator value "${String(l)}"`);s.set(l,a)}}return s});n._zod.parse=(r,s)=>{const o=r.value;if(!Nr(o))return r.issues.push({code:"invalid_type",expected:"object",input:o,inst:n}),r;const a=i.value.get(o==null?void 0:o[e.discriminator]);return a?a._zod.run(r,s):e.unionFallback||s.direction==="backward"?t(r,s):(r.issues.push({code:"invalid_union",errors:[],note:"No matching discriminator",discriminator:e.discriminator,options:Array.from(i.value.keys()),input:o,path:[e.discriminator],inst:n}),r)}}),hS=Z("$ZodIntersection",(n,e)=>{dt.init(n,e),n._zod.parse=(t,i)=>{const r=t.value,s=e.left._zod.run({value:r,issues:[]},i),o=e.right._zod.run({value:r,issues:[]},i);return s instanceof Promise||o instanceof Promise?Promise.all([s,o]).then(([c,l])=>pu(t,c,l)):pu(t,s,o)}});function ec(n,e){if(n===e)return{valid:!0,data:n};if(n instanceof Date&&e instanceof Date&&+n==+e)return{valid:!0,data:n};if(Ur(n)&&Ur(e)){const t=Object.keys(e),i=Object.keys(n).filter(s=>t.indexOf(s)!==-1),r={...n,...e};for(const s of i){const o=ec(n[s],e[s]);if(!o.valid)return{valid:!1,mergeErrorPath:[s,...o.mergeErrorPath]};r[s]=o.data}return{valid:!0,data:r}}if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return{valid:!1,mergeErrorPath:[]};const t=[];for(let i=0;i<n.length;i++){const r=n[i],s=e[i],o=ec(r,s);if(!o.valid)return{valid:!1,mergeErrorPath:[i,...o.mergeErrorPath]};t.push(o.data)}return{valid:!0,data:t}}return{valid:!1,mergeErrorPath:[]}}function pu(n,e,t){const i=new Map;let r;for(const a of e.issues)if(a.code==="unrecognized_keys"){r??(r=a);for(const c of a.keys)i.has(c)||i.set(c,{}),i.get(c).l=!0}else n.issues.push(a);for(const a of t.issues)if(a.code==="unrecognized_keys")for(const c of a.keys)i.has(c)||i.set(c,{}),i.get(c).r=!0;else n.issues.push(a);const s=[...i].filter(([,a])=>a.l&&a.r).map(([a])=>a);if(s.length&&r&&n.issues.push({...r,keys:s}),Vi(n))return n;const o=ec(e.value,t.value);if(!o.valid)throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(o.mergeErrorPath)}`);return n.value=o.data,n}const dS=Z("$ZodTuple",(n,e)=>{dt.init(n,e);const t=e.items;n._zod.parse=(i,r)=>{const s=i.value;if(!Array.isArray(s))return i.issues.push({input:s,inst:n,expected:"tuple",code:"invalid_type"}),i;i.value=[];const o=[],a=mu(t,"optin"),c=mu(t,"optout");if(!e.rest){if(s.length<a)return i.issues.push({code:"too_small",minimum:a,inclusive:!0,input:s,inst:n,origin:"array"}),i;s.length>t.length&&i.issues.push({code:"too_big",maximum:t.length,inclusive:!0,input:s,inst:n,origin:"array"})}const l=new Array(t.length);for(let u=0;u<t.length;u++){const h=t[u]._zod.run({value:s[u],issues:[]},r);h instanceof Promise?o.push(h.then(d=>{l[u]=d})):l[u]=h}if(e.rest){let u=t.length-1;const h=s.slice(t.length);for(const d of h){u++;const f=e.rest._zod.run({value:d,issues:[]},r);f instanceof Promise?o.push(f.then(g=>gu(g,i,u))):gu(f,i,u)}}return o.length?Promise.all(o).then(()=>vu(l,i,t,s,c)):vu(l,i,t,s,c)}});function mu(n,e){for(let t=n.length-1;t>=0;t--)if(n[t]._zod[e]!=="optional")return t+1;return 0}function gu(n,e,t){n.issues.length&&e.issues.push(...co(t,n.issues)),e.value[t]=n.value}function vu(n,e,t,i,r){for(let s=0;s<t.length;s++){const o=n[s],a=s<i.length;if(o.issues.length){if(!a&&s>=r){e.value.length=s;break}e.issues.push(...co(s,o.issues))}e.value[s]=o.value}for(let s=e.value.length-1;s>=i.length&&(t[s]._zod.optout==="optional"&&e.value[s]===void 0);s--)e.value.length=s;return e}const fS=Z("$ZodEnum",(n,e)=>{dt.init(n,e);const t=td(e.entries),i=new Set(t);n._zod.values=i,n._zod.pattern=new RegExp(`^(${t.filter(r=>Mx.has(typeof r)).map(r=>typeof r=="string"?er(r):r.toString()).join("|")})$`),n._zod.parse=(r,s)=>{const o=r.value;return i.has(o)||r.issues.push({code:"invalid_value",values:t,input:o,inst:n}),r}}),pS=Z("$ZodLiteral",(n,e)=>{if(dt.init(n,e),e.values.length===0)throw new Error("Cannot create literal schema with no valid values");const t=new Set(e.values);n._zod.values=t,n._zod.pattern=new RegExp(`^(${e.values.map(i=>typeof i=="string"?er(i):i?er(i.toString()):String(i)).join("|")})$`),n._zod.parse=(i,r)=>{const s=i.value;return t.has(s)||i.issues.push({code:"invalid_value",values:e.values,input:s,inst:n}),i}}),mS=Z("$ZodTransform",(n,e)=>{dt.init(n,e),n._zod.optin="optional",n._zod.parse=(t,i)=>{if(i.direction==="backward")throw new ed(n.constructor.name);const r=e.transform(t.value,t);if(i.async)return(r instanceof Promise?r:Promise.resolve(r)).then(o=>(t.value=o,t.fallback=!0,t));if(r instanceof Promise)throw new $i;return t.value=r,t.fallback=!0,t}});function _u(n,e){return e===void 0&&(n.issues.length||n.fallback)?{issues:[],value:void 0}:n}const _d=Z("$ZodOptional",(n,e)=>{dt.init(n,e),n._zod.optin="optional",n._zod.optout="optional",rt(n._zod,"values",()=>e.innerType._zod.values?new Set([...e.innerType._zod.values,void 0]):void 0),rt(n._zod,"pattern",()=>{const t=e.innerType._zod.pattern;return t?new RegExp(`^(${wc(t.source)})?$`):void 0}),n._zod.parse=(t,i)=>{if(e.innerType._zod.optin==="optional"){const r=t.value,s=e.innerType._zod.run(t,i);return s instanceof Promise?s.then(o=>_u(o,r)):_u(s,r)}return t.value===void 0?t:e.innerType._zod.run(t,i)}}),gS=Z("$ZodExactOptional",(n,e)=>{_d.init(n,e),rt(n._zod,"values",()=>e.innerType._zod.values),rt(n._zod,"pattern",()=>e.innerType._zod.pattern),n._zod.parse=(t,i)=>e.innerType._zod.run(t,i)}),vS=Z("$ZodNullable",(n,e)=>{dt.init(n,e),rt(n._zod,"optin",()=>e.innerType._zod.optin),rt(n._zod,"optout",()=>e.innerType._zod.optout),rt(n._zod,"pattern",()=>{const t=e.innerType._zod.pattern;return t?new RegExp(`^(${wc(t.source)}|null)$`):void 0}),rt(n._zod,"values",()=>e.innerType._zod.values?new Set([...e.innerType._zod.values,null]):void 0),n._zod.parse=(t,i)=>t.value===null?t:e.innerType._zod.run(t,i)}),_S=Z("$ZodDefault",(n,e)=>{dt.init(n,e),n._zod.optin="optional",rt(n._zod,"values",()=>e.innerType._zod.values),n._zod.parse=(t,i)=>{if(i.direction==="backward")return e.innerType._zod.run(t,i);if(t.value===void 0)return t.value=e.defaultValue,t;const r=e.innerType._zod.run(t,i);return r instanceof Promise?r.then(s=>xu(s,e)):xu(r,e)}});function xu(n,e){return n.value===void 0&&(n.value=e.defaultValue),n}const xS=Z("$ZodPrefault",(n,e)=>{dt.init(n,e),n._zod.optin="optional",rt(n._zod,"values",()=>e.innerType._zod.values),n._zod.parse=(t,i)=>(i.direction==="backward"||t.value===void 0&&(t.value=e.defaultValue),e.innerType._zod.run(t,i))}),yS=Z("$ZodNonOptional",(n,e)=>{dt.init(n,e),rt(n._zod,"values",()=>{const t=e.innerType._zod.values;return t?new Set([...t].filter(i=>i!==void 0)):void 0}),n._zod.parse=(t,i)=>{const r=e.innerType._zod.run(t,i);return r instanceof Promise?r.then(s=>yu(s,n)):yu(r,n)}});function yu(n,e){return!n.issues.length&&n.value===void 0&&n.issues.push({code:"invalid_type",expected:"nonoptional",input:n.value,inst:e}),n}const SS=Z("$ZodCatch",(n,e)=>{dt.init(n,e),n._zod.optin="optional",rt(n._zod,"optout",()=>e.innerType._zod.optout),rt(n._zod,"values",()=>e.innerType._zod.values),n._zod.parse=(t,i)=>{if(i.direction==="backward")return e.innerType._zod.run(t,i);const r=e.innerType._zod.run(t,i);return r instanceof Promise?r.then(s=>(t.value=s.value,s.issues.length&&(t.value=e.catchValue({...t,error:{issues:s.issues.map(o=>fi(o,i,di()))},input:t.value}),t.issues=[],t.fallback=!0),t)):(t.value=r.value,r.issues.length&&(t.value=e.catchValue({...t,error:{issues:r.issues.map(s=>fi(s,i,di()))},input:t.value}),t.issues=[],t.fallback=!0),t)}}),MS=Z("$ZodPipe",(n,e)=>{dt.init(n,e),rt(n._zod,"values",()=>e.in._zod.values),rt(n._zod,"optin",()=>e.in._zod.optin),rt(n._zod,"optout",()=>e.out._zod.optout),rt(n._zod,"propValues",()=>e.in._zod.propValues),n._zod.parse=(t,i)=>{if(i.direction==="backward"){const s=e.out._zod.run(t,i);return s instanceof Promise?s.then(o=>Ts(o,e.in,i)):Ts(s,e.in,i)}const r=e.in._zod.run(t,i);return r instanceof Promise?r.then(s=>Ts(s,e.out,i)):Ts(r,e.out,i)}});function Ts(n,e,t){return n.issues.length?(n.aborted=!0,n):e._zod.run({value:n.value,issues:n.issues,fallback:n.fallback},t)}const bS=Z("$ZodReadonly",(n,e)=>{dt.init(n,e),rt(n._zod,"propValues",()=>e.innerType._zod.propValues),rt(n._zod,"values",()=>e.innerType._zod.values),rt(n._zod,"optin",()=>{var t,i;return(i=(t=e.innerType)==null?void 0:t._zod)==null?void 0:i.optin}),rt(n._zod,"optout",()=>{var t,i;return(i=(t=e.innerType)==null?void 0:t._zod)==null?void 0:i.optout}),n._zod.parse=(t,i)=>{if(i.direction==="backward")return e.innerType._zod.run(t,i);const r=e.innerType._zod.run(t,i);return r instanceof Promise?r.then(Su):Su(r)}});function Su(n){return n.value=Object.freeze(n.value),n}const ES=Z("$ZodCustom",(n,e)=>{Zt.init(n,e),dt.init(n,e),n._zod.parse=(t,i)=>t,n._zod.check=t=>{const i=t.value,r=e.fn(i);if(r instanceof Promise)return r.then(s=>Mu(s,t,i,n));Mu(r,t,i,n)}});function Mu(n,e,t,i){if(!n){const r={code:"custom",input:t,inst:i,path:[...i._zod.def.path??[]],continue:!i._zod.def.abort};i._zod.def.params&&(r.params=i._zod.def.params),e.issues.push(Or(r))}}var bu;class wS{constructor(){this._map=new WeakMap,this._idmap=new Map}add(e,...t){const i=t[0];return this._map.set(e,i),i&&typeof i=="object"&&"id"in i&&this._idmap.set(i.id,e),this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(e){const t=this._map.get(e);return t&&typeof t=="object"&&"id"in t&&this._idmap.delete(t.id),this._map.delete(e),this}get(e){const t=e._zod.parent;if(t){const i={...this.get(t)??{}};delete i.id;const r={...i,...this._map.get(e)};return Object.keys(r).length?r:void 0}return this._map.get(e)}has(e){return this._map.has(e)}}function TS(){return new wS}(bu=globalThis).__zod_globalRegistry??(bu.__zod_globalRegistry=TS());const Mr=globalThis.__zod_globalRegistry;function RS(n,e){return new n({type:"string",...Ie(e)})}function AS(n,e){return new n({type:"string",format:"email",check:"string_format",abort:!1,...Ie(e)})}function Eu(n,e){return new n({type:"string",format:"guid",check:"string_format",abort:!1,...Ie(e)})}function CS(n,e){return new n({type:"string",format:"uuid",check:"string_format",abort:!1,...Ie(e)})}function IS(n,e){return new n({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",...Ie(e)})}function PS(n,e){return new n({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",...Ie(e)})}function FS(n,e){return new n({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",...Ie(e)})}function DS(n,e){return new n({type:"string",format:"url",check:"string_format",abort:!1,...Ie(e)})}function LS(n,e){return new n({type:"string",format:"emoji",check:"string_format",abort:!1,...Ie(e)})}function NS(n,e){return new n({type:"string",format:"nanoid",check:"string_format",abort:!1,...Ie(e)})}function US(n,e){return new n({type:"string",format:"cuid",check:"string_format",abort:!1,...Ie(e)})}function OS(n,e){return new n({type:"string",format:"cuid2",check:"string_format",abort:!1,...Ie(e)})}function zS(n,e){return new n({type:"string",format:"ulid",check:"string_format",abort:!1,...Ie(e)})}function kS(n,e){return new n({type:"string",format:"xid",check:"string_format",abort:!1,...Ie(e)})}function BS(n,e){return new n({type:"string",format:"ksuid",check:"string_format",abort:!1,...Ie(e)})}function VS(n,e){return new n({type:"string",format:"ipv4",check:"string_format",abort:!1,...Ie(e)})}function HS(n,e){return new n({type:"string",format:"ipv6",check:"string_format",abort:!1,...Ie(e)})}function GS(n,e){return new n({type:"string",format:"cidrv4",check:"string_format",abort:!1,...Ie(e)})}function WS(n,e){return new n({type:"string",format:"cidrv6",check:"string_format",abort:!1,...Ie(e)})}function XS(n,e){return new n({type:"string",format:"base64",check:"string_format",abort:!1,...Ie(e)})}function ZS(n,e){return new n({type:"string",format:"base64url",check:"string_format",abort:!1,...Ie(e)})}function $S(n,e){return new n({type:"string",format:"e164",check:"string_format",abort:!1,...Ie(e)})}function YS(n,e){return new n({type:"string",format:"jwt",check:"string_format",abort:!1,...Ie(e)})}function qS(n,e){return new n({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,...Ie(e)})}function jS(n,e){return new n({type:"string",format:"date",check:"string_format",...Ie(e)})}function JS(n,e){return new n({type:"string",format:"time",check:"string_format",precision:null,...Ie(e)})}function KS(n,e){return new n({type:"string",format:"duration",check:"string_format",...Ie(e)})}function QS(n,e){return new n({type:"number",checks:[],...Ie(e)})}function eM(n,e){return new n({type:"number",check:"number_format",abort:!1,format:"safeint",...Ie(e)})}function tM(n,e){return new n({type:"boolean",...Ie(e)})}function nM(n){return new n({type:"unknown"})}function iM(n,e){return new n({type:"never",...Ie(e)})}function wu(n,e){return new hd({check:"less_than",...Ie(e),value:n,inclusive:!1})}function $o(n,e){return new hd({check:"less_than",...Ie(e),value:n,inclusive:!0})}function Tu(n,e){return new dd({check:"greater_than",...Ie(e),value:n,inclusive:!1})}function Yo(n,e){return new dd({check:"greater_than",...Ie(e),value:n,inclusive:!0})}function Ru(n,e){return new _y({check:"multiple_of",...Ie(e),value:n})}function xd(n,e){return new yy({check:"max_length",...Ie(e),maximum:n})}function Ys(n,e){return new Sy({check:"min_length",...Ie(e),minimum:n})}function yd(n,e){return new My({check:"length_equals",...Ie(e),length:n})}function rM(n,e){return new by({check:"string_format",format:"regex",...Ie(e),pattern:n})}function sM(n){return new Ey({check:"string_format",format:"lowercase",...Ie(n)})}function oM(n){return new wy({check:"string_format",format:"uppercase",...Ie(n)})}function aM(n,e){return new Ty({check:"string_format",format:"includes",...Ie(e),includes:n})}function cM(n,e){return new Ry({check:"string_format",format:"starts_with",...Ie(e),prefix:n})}function lM(n,e){return new Ay({check:"string_format",format:"ends_with",...Ie(e),suffix:n})}function or(n){return new Cy({check:"overwrite",tx:n})}function uM(n){return or(e=>e.normalize(n))}function hM(){return or(n=>n.trim())}function dM(){return or(n=>n.toLowerCase())}function fM(){return or(n=>n.toUpperCase())}function pM(){return or(n=>yx(n))}function mM(n,e,t){return new n({type:"array",element:e,...Ie(t)})}function gM(n,e,t){return new n({type:"custom",check:"custom",fn:e,...Ie(t)})}function vM(n,e){const t=_M(i=>(i.addIssue=r=>{if(typeof r=="string")i.issues.push(Or(r,i.value,t._zod.def));else{const s=r;s.fatal&&(s.continue=!1),s.code??(s.code="custom"),s.input??(s.input=i.value),s.inst??(s.inst=t),s.continue??(s.continue=!t._zod.def.abort),i.issues.push(Or(s))}},n(i.value,i)),e);return t}function _M(n,e){const t=new Zt({check:"custom",...Ie(e)});return t._zod.check=n,t}function qs(n){let e=(n==null?void 0:n.target)??"draft-2020-12";return e==="draft-4"&&(e="draft-04"),e==="draft-7"&&(e="draft-07"),{processors:n.processors??{},metadataRegistry:(n==null?void 0:n.metadata)??Mr,target:e,unrepresentable:(n==null?void 0:n.unrepresentable)??"throw",override:(n==null?void 0:n.override)??(()=>{}),io:(n==null?void 0:n.io)??"output",counter:0,seen:new Map,cycles:(n==null?void 0:n.cycles)??"ref",reused:(n==null?void 0:n.reused)??"inline",external:(n==null?void 0:n.external)??void 0}}function lt(n,e,t={path:[],schemaPath:[]}){var u,h;var i;const r=n._zod.def,s=e.seen.get(n);if(s)return s.count++,t.schemaPath.includes(n)&&(s.cycle=t.path),s.schema;const o={schema:{},count:1,cycle:void 0,path:t.path};e.seen.set(n,o);const a=(h=(u=n._zod).toJSONSchema)==null?void 0:h.call(u);if(a)o.schema=a;else{const d={...t,schemaPath:[...t.schemaPath,n],path:t.path};if(n._zod.processJSONSchema)n._zod.processJSONSchema(e,o.schema,d);else{const g=o.schema,v=e.processors[r.type];if(!v)throw new Error(`[toJSONSchema]: Non-representable type encountered: ${r.type}`);v(n,e,g,d)}const f=n._zod.parent;f&&(o.ref||(o.ref=f),lt(f,e,d),e.seen.get(f).isParent=!0)}const c=e.metadataRegistry.get(n);return c&&Object.assign(o.schema,c),e.io==="input"&&zt(n)&&(delete o.schema.examples,delete o.schema.default),e.io==="input"&&"_prefault"in o.schema&&((i=o.schema).default??(i.default=o.schema._prefault)),delete o.schema._prefault,e.seen.get(n).schema}function js(n,e){var o,a,c,l;const t=n.seen.get(e);if(!t)throw new Error("Unprocessed schema. This is a bug in Zod.");const i=new Map;for(const u of n.seen.entries()){const h=(o=n.metadataRegistry.get(u[0]))==null?void 0:o.id;if(h){const d=i.get(h);if(d&&d!==u[0])throw new Error(`Duplicate schema id "${h}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);i.set(h,u[0])}}const r=u=>{var v;const h=n.target==="draft-2020-12"?"$defs":"definitions";if(n.external){const m=(v=n.external.registry.get(u[0]))==null?void 0:v.id,p=n.external.uri??(M=>M);if(m)return{ref:p(m)};const w=u[1].defId??u[1].schema.id??`schema${n.counter++}`;return u[1].defId=w,{defId:w,ref:`${p("__shared")}#/${h}/${w}`}}if(u[1]===t)return{ref:"#"};const f=`#/${h}/`,g=u[1].schema.id??`__schema${n.counter++}`;return{defId:g,ref:f+g}},s=u=>{if(u[1].schema.$ref)return;const h=u[1],{ref:d,defId:f}=r(u);h.def={...h.schema},f&&(h.defId=f);const g=h.schema;for(const v in g)delete g[v];g.$ref=d};if(n.cycles==="throw")for(const u of n.seen.entries()){const h=u[1];if(h.cycle)throw new Error(`Cycle detected: #/${(a=h.cycle)==null?void 0:a.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(const u of n.seen.entries()){const h=u[1];if(e===u[0]){s(u);continue}if(n.external){const f=(c=n.external.registry.get(u[0]))==null?void 0:c.id;if(e!==u[0]&&f){s(u);continue}}if((l=n.metadataRegistry.get(u[0]))==null?void 0:l.id){s(u);continue}if(h.cycle){s(u);continue}if(h.count>1&&n.reused==="ref"){s(u);continue}}}function Js(n,e){var a,c,l,u;const t=n.seen.get(e);if(!t)throw new Error("Unprocessed schema. This is a bug in Zod.");const i=h=>{const d=n.seen.get(h);if(d.ref===null)return;const f=d.def??d.schema,g={...f},v=d.ref;if(d.ref=null,v){i(v);const p=n.seen.get(v),w=p.schema;if(w.$ref&&(n.target==="draft-07"||n.target==="draft-04"||n.target==="openapi-3.0")?(f.allOf=f.allOf??[],f.allOf.push(w)):Object.assign(f,w),Object.assign(f,g),h._zod.parent===v)for(const x in f)x==="$ref"||x==="allOf"||x in g||delete f[x];if(w.$ref&&p.def)for(const x in f)x==="$ref"||x==="allOf"||x in p.def&&JSON.stringify(f[x])===JSON.stringify(p.def[x])&&delete f[x]}const m=h._zod.parent;if(m&&m!==v){i(m);const p=n.seen.get(m);if(p!=null&&p.schema.$ref&&(f.$ref=p.schema.$ref,p.def))for(const w in f)w==="$ref"||w==="allOf"||w in p.def&&JSON.stringify(f[w])===JSON.stringify(p.def[w])&&delete f[w]}n.override({zodSchema:h,jsonSchema:f,path:d.path??[]})};for(const h of[...n.seen.entries()].reverse())i(h[0]);const r={};if(n.target==="draft-2020-12"?r.$schema="https://json-schema.org/draft/2020-12/schema":n.target==="draft-07"?r.$schema="http://json-schema.org/draft-07/schema#":n.target==="draft-04"?r.$schema="http://json-schema.org/draft-04/schema#":n.target,(a=n.external)!=null&&a.uri){const h=(c=n.external.registry.get(e))==null?void 0:c.id;if(!h)throw new Error("Schema is missing an `id` property");r.$id=n.external.uri(h)}Object.assign(r,t.def??t.schema);const s=(l=n.metadataRegistry.get(e))==null?void 0:l.id;s!==void 0&&r.id===s&&delete r.id;const o=((u=n.external)==null?void 0:u.defs)??{};for(const h of n.seen.entries()){const d=h[1];d.def&&d.defId&&(d.def.id===d.defId&&delete d.def.id,o[d.defId]=d.def)}n.external||Object.keys(o).length>0&&(n.target==="draft-2020-12"?r.$defs=o:r.definitions=o);try{const h=JSON.parse(JSON.stringify(r));return Object.defineProperty(h,"~standard",{value:{...e["~standard"],jsonSchema:{input:Ks(e,"input",n.processors),output:Ks(e,"output",n.processors)}},enumerable:!1,writable:!1}),h}catch{throw new Error("Error converting schema to JSON.")}}function zt(n,e){const t=e??{seen:new Set};if(t.seen.has(n))return!1;t.seen.add(n);const i=n._zod.def;if(i.type==="transform")return!0;if(i.type==="array")return zt(i.element,t);if(i.type==="set")return zt(i.valueType,t);if(i.type==="lazy")return zt(i.getter(),t);if(i.type==="promise"||i.type==="optional"||i.type==="nonoptional"||i.type==="nullable"||i.type==="readonly"||i.type==="default"||i.type==="prefault")return zt(i.innerType,t);if(i.type==="intersection")return zt(i.left,t)||zt(i.right,t);if(i.type==="record"||i.type==="map")return zt(i.keyType,t)||zt(i.valueType,t);if(i.type==="pipe")return n._zod.traits.has("$ZodCodec")?!0:zt(i.in,t)||zt(i.out,t);if(i.type==="object"){for(const r in i.shape)if(zt(i.shape[r],t))return!0;return!1}if(i.type==="union"){for(const r of i.options)if(zt(r,t))return!0;return!1}if(i.type==="tuple"){for(const r of i.items)if(zt(r,t))return!0;return!!(i.rest&&zt(i.rest,t))}return!1}const xM=(n,e={})=>t=>{const i=qs({...t,processors:e});return lt(n,i),js(i,n),Js(i,n)},Ks=(n,e,t={})=>i=>{const{libraryOptions:r,target:s}=i??{},o=qs({...r??{},target:s,io:e,processors:t});return lt(n,o),js(o,n),Js(o,n)},yM={guid:"uuid",url:"uri",datetime:"date-time",json_string:"json-string",regex:""},Sd=(n,e,t,i)=>{const r=t;r.type="string";const{minimum:s,maximum:o,format:a,patterns:c,contentEncoding:l}=n._zod.bag;if(typeof s=="number"&&(r.minLength=s),typeof o=="number"&&(r.maxLength=o),a&&(r.format=yM[a]??a,r.format===""&&delete r.format,a==="time"&&delete r.format),l&&(r.contentEncoding=l),c&&c.size>0){const u=[...c];u.length===1?r.pattern=u[0].source:u.length>1&&(r.allOf=[...u.map(h=>({...e.target==="draft-07"||e.target==="draft-04"||e.target==="openapi-3.0"?{type:"string"}:{},pattern:h.source}))])}},Md=(n,e,t,i)=>{const r=t,{minimum:s,maximum:o,format:a,multipleOf:c,exclusiveMaximum:l,exclusiveMinimum:u}=n._zod.bag;typeof a=="string"&&a.includes("int")?r.type="integer":r.type="number";const h=typeof u=="number"&&u>=(s??Number.NEGATIVE_INFINITY),d=typeof l=="number"&&l<=(o??Number.POSITIVE_INFINITY),f=e.target==="draft-04"||e.target==="openapi-3.0";h?f?(r.minimum=u,r.exclusiveMinimum=!0):r.exclusiveMinimum=u:typeof s=="number"&&(r.minimum=s),d?f?(r.maximum=l,r.exclusiveMaximum=!0):r.exclusiveMaximum=l:typeof o=="number"&&(r.maximum=o),typeof c=="number"&&(r.multipleOf=c)},bd=(n,e,t,i)=>{t.type="boolean"},SM=(n,e,t,i)=>{if(e.unrepresentable==="throw")throw new Error("BigInt cannot be represented in JSON Schema")},MM=(n,e,t,i)=>{if(e.unrepresentable==="throw")throw new Error("Symbols cannot be represented in JSON Schema")},bM=(n,e,t,i)=>{e.target==="openapi-3.0"?(t.type="string",t.nullable=!0,t.enum=[null]):t.type="null"},EM=(n,e,t,i)=>{if(e.unrepresentable==="throw")throw new Error("Undefined cannot be represented in JSON Schema")},wM=(n,e,t,i)=>{if(e.unrepresentable==="throw")throw new Error("Void cannot be represented in JSON Schema")},Ed=(n,e,t,i)=>{t.not={}},TM=(n,e,t,i)=>{},wd=(n,e,t,i)=>{},RM=(n,e,t,i)=>{if(e.unrepresentable==="throw")throw new Error("Date cannot be represented in JSON Schema")},Td=(n,e,t,i)=>{const r=n._zod.def,s=td(r.entries);s.every(o=>typeof o=="number")&&(t.type="number"),s.every(o=>typeof o=="string")&&(t.type="string"),t.enum=s},Rd=(n,e,t,i)=>{const r=n._zod.def,s=[];for(const o of r.values)if(o===void 0){if(e.unrepresentable==="throw")throw new Error("Literal `undefined` cannot be represented in JSON Schema")}else if(typeof o=="bigint"){if(e.unrepresentable==="throw")throw new Error("BigInt literals cannot be represented in JSON Schema");s.push(Number(o))}else s.push(o);if(s.length!==0)if(s.length===1){const o=s[0];t.type=o===null?"null":typeof o,e.target==="draft-04"||e.target==="openapi-3.0"?t.enum=[o]:t.const=o}else s.every(o=>typeof o=="number")&&(t.type="number"),s.every(o=>typeof o=="string")&&(t.type="string"),s.every(o=>typeof o=="boolean")&&(t.type="boolean"),s.every(o=>o===null)&&(t.type="null"),t.enum=s},AM=(n,e,t,i)=>{if(e.unrepresentable==="throw")throw new Error("NaN cannot be represented in JSON Schema")},CM=(n,e,t,i)=>{const r=t,s=n._zod.pattern;if(!s)throw new Error("Pattern not found in template literal");r.type="string",r.pattern=s.source},IM=(n,e,t,i)=>{const r=t,s={type:"string",format:"binary",contentEncoding:"binary"},{minimum:o,maximum:a,mime:c}=n._zod.bag;o!==void 0&&(s.minLength=o),a!==void 0&&(s.maxLength=a),c?c.length===1?(s.contentMediaType=c[0],Object.assign(r,s)):(Object.assign(r,s),r.anyOf=c.map(l=>({contentMediaType:l}))):Object.assign(r,s)},PM=(n,e,t,i)=>{t.type="boolean"},Ad=(n,e,t,i)=>{if(e.unrepresentable==="throw")throw new Error("Custom types cannot be represented in JSON Schema")},FM=(n,e,t,i)=>{if(e.unrepresentable==="throw")throw new Error("Function types cannot be represented in JSON Schema")},Cd=(n,e,t,i)=>{if(e.unrepresentable==="throw")throw new Error("Transforms cannot be represented in JSON Schema")},DM=(n,e,t,i)=>{if(e.unrepresentable==="throw")throw new Error("Map cannot be represented in JSON Schema")},LM=(n,e,t,i)=>{if(e.unrepresentable==="throw")throw new Error("Set cannot be represented in JSON Schema")},Id=(n,e,t,i)=>{const r=t,s=n._zod.def,{minimum:o,maximum:a}=n._zod.bag;typeof o=="number"&&(r.minItems=o),typeof a=="number"&&(r.maxItems=a),r.type="array",r.items=lt(s.element,e,{...i,path:[...i.path,"items"]})},Pd=(n,e,t,i)=>{var l;const r=t,s=n._zod.def;r.type="object",r.properties={};const o=s.shape;for(const u in o)r.properties[u]=lt(o[u],e,{...i,path:[...i.path,"properties",u]});const a=new Set(Object.keys(o)),c=new Set([...a].filter(u=>{const h=s.shape[u]._zod;return e.io==="input"?h.optin===void 0:h.optout===void 0}));c.size>0&&(r.required=Array.from(c)),((l=s.catchall)==null?void 0:l._zod.def.type)==="never"?r.additionalProperties=!1:s.catchall?s.catchall&&(r.additionalProperties=lt(s.catchall,e,{...i,path:[...i.path,"additionalProperties"]})):e.io==="output"&&(r.additionalProperties=!1)},Fd=(n,e,t,i)=>{const r=n._zod.def,s=r.inclusive===!1,o=r.options.map((a,c)=>lt(a,e,{...i,path:[...i.path,s?"oneOf":"anyOf",c]}));s?t.oneOf=o:t.anyOf=o},Dd=(n,e,t,i)=>{const r=n._zod.def,s=lt(r.left,e,{...i,path:[...i.path,"allOf",0]}),o=lt(r.right,e,{...i,path:[...i.path,"allOf",1]}),a=l=>"allOf"in l&&Object.keys(l).length===1,c=[...a(s)?s.allOf:[s],...a(o)?o.allOf:[o]];t.allOf=c},Ld=(n,e,t,i)=>{const r=t,s=n._zod.def;r.type="array";const o=e.target==="draft-2020-12"?"prefixItems":"items",a=e.target==="draft-2020-12"||e.target==="openapi-3.0"?"items":"additionalItems",c=s.items.map((d,f)=>lt(d,e,{...i,path:[...i.path,o,f]})),l=s.rest?lt(s.rest,e,{...i,path:[...i.path,a,...e.target==="openapi-3.0"?[s.items.length]:[]]}):null;e.target==="draft-2020-12"?(r.prefixItems=c,l&&(r.items=l)):e.target==="openapi-3.0"?(r.items={anyOf:c},l&&r.items.anyOf.push(l),r.minItems=c.length,l||(r.maxItems=c.length)):(r.items=c,l&&(r.additionalItems=l));const{minimum:u,maximum:h}=n._zod.bag;typeof u=="number"&&(r.minItems=u),typeof h=="number"&&(r.maxItems=h)},NM=(n,e,t,i)=>{const r=t,s=n._zod.def;r.type="object";const o=s.keyType,a=o._zod.bag,c=a==null?void 0:a.patterns;if(s.mode==="loose"&&c&&c.size>0){const u=lt(s.valueType,e,{...i,path:[...i.path,"patternProperties","*"]});r.patternProperties={};for(const h of c)r.patternProperties[h.source]=u}else(e.target==="draft-07"||e.target==="draft-2020-12")&&(r.propertyNames=lt(s.keyType,e,{...i,path:[...i.path,"propertyNames"]})),r.additionalProperties=lt(s.valueType,e,{...i,path:[...i.path,"additionalProperties"]});const l=o._zod.values;if(l){const u=[...l].filter(h=>typeof h=="string"||typeof h=="number");u.length>0&&(r.required=u)}},Nd=(n,e,t,i)=>{const r=n._zod.def,s=lt(r.innerType,e,i),o=e.seen.get(n);e.target==="openapi-3.0"?(o.ref=r.innerType,t.nullable=!0):t.anyOf=[s,{type:"null"}]},Ud=(n,e,t,i)=>{const r=n._zod.def;lt(r.innerType,e,i);const s=e.seen.get(n);s.ref=r.innerType},Od=(n,e,t,i)=>{const r=n._zod.def;lt(r.innerType,e,i);const s=e.seen.get(n);s.ref=r.innerType,t.default=JSON.parse(JSON.stringify(r.defaultValue))},zd=(n,e,t,i)=>{const r=n._zod.def;lt(r.innerType,e,i);const s=e.seen.get(n);s.ref=r.innerType,e.io==="input"&&(t._prefault=JSON.parse(JSON.stringify(r.defaultValue)))},kd=(n,e,t,i)=>{const r=n._zod.def;lt(r.innerType,e,i);const s=e.seen.get(n);s.ref=r.innerType;let o;try{o=r.catchValue(void 0)}catch{throw new Error("Dynamic catch values are not supported in JSON Schema")}t.default=o},Bd=(n,e,t,i)=>{const r=n._zod.def,s=r.in._zod.traits.has("$ZodTransform"),o=e.io==="input"?s?r.out:r.in:r.out;lt(o,e,i);const a=e.seen.get(n);a.ref=o},Vd=(n,e,t,i)=>{const r=n._zod.def;lt(r.innerType,e,i);const s=e.seen.get(n);s.ref=r.innerType,t.readOnly=!0},UM=(n,e,t,i)=>{const r=n._zod.def;lt(r.innerType,e,i);const s=e.seen.get(n);s.ref=r.innerType},Ic=(n,e,t,i)=>{const r=n._zod.def;lt(r.innerType,e,i);const s=e.seen.get(n);s.ref=r.innerType},OM=(n,e,t,i)=>{const r=n._zod.innerType;lt(r,e,i);const s=e.seen.get(n);s.ref=r},Au={string:Sd,number:Md,boolean:bd,bigint:SM,symbol:MM,null:bM,undefined:EM,void:wM,never:Ed,any:TM,unknown:wd,date:RM,enum:Td,literal:Rd,nan:AM,template_literal:CM,file:IM,success:PM,custom:Ad,function:FM,transform:Cd,map:DM,set:LM,array:Id,object:Pd,union:Fd,intersection:Dd,tuple:Ld,record:NM,nullable:Nd,nonoptional:Ud,default:Od,prefault:zd,catch:kd,pipe:Bd,readonly:Vd,promise:UM,optional:Ic,lazy:OM};function zM(n,e){if("_idmap"in n){const i=n,r=qs({...e,processors:Au}),s={};for(const c of i._idmap.entries()){const[l,u]=c;lt(u,r)}const o={},a={registry:i,uri:e==null?void 0:e.uri,defs:s};r.external=a;for(const c of i._idmap.entries()){const[l,u]=c;js(r,u),o[l]=Js(r,u)}if(Object.keys(s).length>0){const c=r.target==="draft-2020-12"?"$defs":"definitions";o.__shared={[c]:s}}return{schemas:o}}const t=qs({...e,processors:Au});return lt(n,t),js(t,n),Js(t,n)}const kM=Z("ZodISODateTime",(n,e)=>{Gy.init(n,e),gt.init(n,e)});function Hd(n){return qS(kM,n)}const BM=Z("ZodISODate",(n,e)=>{Wy.init(n,e),gt.init(n,e)});function Gd(n){return jS(BM,n)}const VM=Z("ZodISOTime",(n,e)=>{Xy.init(n,e),gt.init(n,e)});function HM(n){return JS(VM,n)}const GM=Z("ZodISODuration",(n,e)=>{Zy.init(n,e),gt.init(n,e)});function WM(n){return KS(GM,n)}const XM=(n,e)=>{sd.init(n,e),n.name="ZodError",Object.defineProperties(n,{format:{value:t=>Lx(n,t)},flatten:{value:t=>Dx(n,t)},addIssue:{value:t=>{n.issues.push(t),n.message=JSON.stringify(n.issues,Qa,2)}},addIssues:{value:t=>{n.issues.push(...t),n.message=JSON.stringify(n.issues,Qa,2)}},isEmpty:{get(){return n.issues.length===0}}})},rn=Z("ZodError",XM,{Parent:Error}),ZM=Rc(rn),$M=Ac(rn),YM=lo(rn),qM=uo(rn),jM=Ox(rn),JM=zx(rn),KM=kx(rn),QM=Bx(rn),eb=Vx(rn),tb=Hx(rn),nb=Gx(rn),ib=Wx(rn),Cu=new WeakMap;function Hr(n,e,t){const i=Object.getPrototypeOf(n);let r=Cu.get(i);if(r||(r=new Set,Cu.set(i,r)),!r.has(e)){r.add(e);for(const s in t){const o=t[s];Object.defineProperty(i,s,{configurable:!0,enumerable:!1,get(){const a=o.bind(this);return Object.defineProperty(this,s,{configurable:!0,writable:!0,enumerable:!0,value:a}),a},set(a){Object.defineProperty(this,s,{configurable:!0,writable:!0,enumerable:!0,value:a})}})}}}const mt=Z("ZodType",(n,e)=>(dt.init(n,e),Object.assign(n["~standard"],{jsonSchema:{input:Ks(n,"input"),output:Ks(n,"output")}}),n.toJSONSchema=xM(n,{}),n.def=e,n.type=e.type,Object.defineProperty(n,"_def",{value:e}),n.parse=(t,i)=>ZM(n,t,i,{callee:n.parse}),n.safeParse=(t,i)=>YM(n,t,i),n.parseAsync=async(t,i)=>$M(n,t,i,{callee:n.parseAsync}),n.safeParseAsync=async(t,i)=>qM(n,t,i),n.spa=n.safeParseAsync,n.encode=(t,i)=>jM(n,t,i),n.decode=(t,i)=>JM(n,t,i),n.encodeAsync=async(t,i)=>KM(n,t,i),n.decodeAsync=async(t,i)=>QM(n,t,i),n.safeEncode=(t,i)=>eb(n,t,i),n.safeDecode=(t,i)=>tb(n,t,i),n.safeEncodeAsync=async(t,i)=>nb(n,t,i),n.safeDecodeAsync=async(t,i)=>ib(n,t,i),Hr(n,"ZodType",{check(...t){const i=this.def;return this.clone($n(i,{checks:[...i.checks??[],...t.map(r=>typeof r=="function"?{_zod:{check:r,def:{check:"custom"},onattach:[]}}:r)]}),{parent:!0})},with(...t){return this.check(...t)},clone(t,i){return Yn(this,t,i)},brand(){return this},register(t,i){return t.add(this,i),this},refine(t,i){return this.check(jb(t,i))},superRefine(t,i){return this.check(Jb(t,i))},overwrite(t){return this.check(or(t))},optional(){return Du(this)},exactOptional(){return Ob(this)},nullable(){return Lu(this)},nullish(){return Du(Lu(this))},nonoptional(t){return Gb(this,t)},array(){return qn(this)},or(t){return ar([this,t])},and(t){return Pb(this,t)},transform(t){return Nu(this,Nb(t))},default(t){return Bb(this,t)},prefault(t){return Hb(this,t)},catch(t){return Xb(this,t)},pipe(t){return Nu(this,t)},readonly(){return Yb(this)},describe(t){const i=this.clone();return Mr.add(i,{description:t}),i},meta(...t){if(t.length===0)return Mr.get(this);const i=this.clone();return Mr.add(i,t[0]),i},isOptional(){return this.safeParse(void 0).success},isNullable(){return this.safeParse(null).success},apply(t){return t(this)}}),Object.defineProperty(n,"description",{get(){var t;return(t=Mr.get(n))==null?void 0:t.description},configurable:!0}),n)),Wd=Z("_ZodString",(n,e)=>{Cc.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(i,r,s)=>Sd(n,i,r);const t=n._zod.bag;n.format=t.format??null,n.minLength=t.minimum??null,n.maxLength=t.maximum??null,Hr(n,"_ZodString",{regex(...i){return this.check(rM(...i))},includes(...i){return this.check(aM(...i))},startsWith(...i){return this.check(cM(...i))},endsWith(...i){return this.check(lM(...i))},min(...i){return this.check(Ys(...i))},max(...i){return this.check(xd(...i))},length(...i){return this.check(yd(...i))},nonempty(...i){return this.check(Ys(1,...i))},lowercase(i){return this.check(sM(i))},uppercase(i){return this.check(oM(i))},trim(){return this.check(hM())},normalize(...i){return this.check(uM(...i))},toLowerCase(){return this.check(dM())},toUpperCase(){return this.check(fM())},slugify(){return this.check(pM())}})}),rb=Z("ZodString",(n,e)=>{Cc.init(n,e),Wd.init(n,e),n.email=t=>n.check(AS(sb,t)),n.url=t=>n.check(DS(ob,t)),n.jwt=t=>n.check(YS(Sb,t)),n.emoji=t=>n.check(LS(ab,t)),n.guid=t=>n.check(Eu(Iu,t)),n.uuid=t=>n.check(CS(Rs,t)),n.uuidv4=t=>n.check(IS(Rs,t)),n.uuidv6=t=>n.check(PS(Rs,t)),n.uuidv7=t=>n.check(FS(Rs,t)),n.nanoid=t=>n.check(NS(cb,t)),n.guid=t=>n.check(Eu(Iu,t)),n.cuid=t=>n.check(US(lb,t)),n.cuid2=t=>n.check(OS(ub,t)),n.ulid=t=>n.check(zS(hb,t)),n.base64=t=>n.check(XS(_b,t)),n.base64url=t=>n.check(ZS(xb,t)),n.xid=t=>n.check(kS(db,t)),n.ksuid=t=>n.check(BS(fb,t)),n.ipv4=t=>n.check(VS(pb,t)),n.ipv6=t=>n.check(HS(mb,t)),n.cidrv4=t=>n.check(GS(gb,t)),n.cidrv6=t=>n.check(WS(vb,t)),n.e164=t=>n.check($S(yb,t)),n.datetime=t=>n.check(Hd(t)),n.date=t=>n.check(Gd(t)),n.time=t=>n.check(HM(t)),n.duration=t=>n.check(WM(t))});function Ze(n){return RS(rb,n)}const gt=Z("ZodStringFormat",(n,e)=>{ft.init(n,e),Wd.init(n,e)}),sb=Z("ZodEmail",(n,e)=>{Ly.init(n,e),gt.init(n,e)}),Iu=Z("ZodGUID",(n,e)=>{Fy.init(n,e),gt.init(n,e)}),Rs=Z("ZodUUID",(n,e)=>{Dy.init(n,e),gt.init(n,e)}),ob=Z("ZodURL",(n,e)=>{Ny.init(n,e),gt.init(n,e)}),ab=Z("ZodEmoji",(n,e)=>{Uy.init(n,e),gt.init(n,e)}),cb=Z("ZodNanoID",(n,e)=>{Oy.init(n,e),gt.init(n,e)}),lb=Z("ZodCUID",(n,e)=>{zy.init(n,e),gt.init(n,e)}),ub=Z("ZodCUID2",(n,e)=>{ky.init(n,e),gt.init(n,e)}),hb=Z("ZodULID",(n,e)=>{By.init(n,e),gt.init(n,e)}),db=Z("ZodXID",(n,e)=>{Vy.init(n,e),gt.init(n,e)}),fb=Z("ZodKSUID",(n,e)=>{Hy.init(n,e),gt.init(n,e)}),pb=Z("ZodIPv4",(n,e)=>{$y.init(n,e),gt.init(n,e)}),mb=Z("ZodIPv6",(n,e)=>{Yy.init(n,e),gt.init(n,e)}),gb=Z("ZodCIDRv4",(n,e)=>{qy.init(n,e),gt.init(n,e)}),vb=Z("ZodCIDRv6",(n,e)=>{jy.init(n,e),gt.init(n,e)}),_b=Z("ZodBase64",(n,e)=>{Jy.init(n,e),gt.init(n,e)}),xb=Z("ZodBase64URL",(n,e)=>{Qy.init(n,e),gt.init(n,e)}),yb=Z("ZodE164",(n,e)=>{eS.init(n,e),gt.init(n,e)}),Sb=Z("ZodJWT",(n,e)=>{nS.init(n,e),gt.init(n,e)}),Xd=Z("ZodNumber",(n,e)=>{pd.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(i,r,s)=>Md(n,i,r),Hr(n,"ZodNumber",{gt(i,r){return this.check(Tu(i,r))},gte(i,r){return this.check(Yo(i,r))},min(i,r){return this.check(Yo(i,r))},lt(i,r){return this.check(wu(i,r))},lte(i,r){return this.check($o(i,r))},max(i,r){return this.check($o(i,r))},int(i){return this.check(Pu(i))},safe(i){return this.check(Pu(i))},positive(i){return this.check(Tu(0,i))},nonnegative(i){return this.check(Yo(0,i))},negative(i){return this.check(wu(0,i))},nonpositive(i){return this.check($o(0,i))},multipleOf(i,r){return this.check(Ru(i,r))},step(i,r){return this.check(Ru(i,r))},finite(){return this}});const t=n._zod.bag;n.minValue=Math.max(t.minimum??Number.NEGATIVE_INFINITY,t.exclusiveMinimum??Number.NEGATIVE_INFINITY)??null,n.maxValue=Math.min(t.maximum??Number.POSITIVE_INFINITY,t.exclusiveMaximum??Number.POSITIVE_INFINITY)??null,n.isInt=(t.format??"").includes("int")||Number.isSafeInteger(t.multipleOf??.5),n.isFinite=!0,n.format=t.format??null});function Qe(n){return QS(Xd,n)}const Mb=Z("ZodNumberFormat",(n,e)=>{iS.init(n,e),Xd.init(n,e)});function Pu(n){return eM(Mb,n)}const bb=Z("ZodBoolean",(n,e)=>{rS.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>bd(n,t,i)});function zr(n){return tM(bb,n)}const Eb=Z("ZodUnknown",(n,e)=>{sS.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>wd()});function Fu(){return nM(Eb)}const wb=Z("ZodNever",(n,e)=>{oS.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Ed(n,t,i)});function Tb(n){return iM(wb,n)}const Rb=Z("ZodArray",(n,e)=>{aS.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Id(n,t,i,r),n.element=e.element,Hr(n,"ZodArray",{min(t,i){return this.check(Ys(t,i))},nonempty(t){return this.check(Ys(1,t))},max(t,i){return this.check(xd(t,i))},length(t,i){return this.check(yd(t,i))},unwrap(){return this.element}})});function qn(n,e){return mM(Rb,n,e)}const Ab=Z("ZodObject",(n,e)=>{lS.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Pd(n,t,i,r),rt(n,"shape",()=>e.shape),Hr(n,"ZodObject",{keyof(){return Gt(Object.keys(this._zod.def.shape))},catchall(t){return this.clone({...this._zod.def,catchall:t})},passthrough(){return this.clone({...this._zod.def,catchall:Fu()})},loose(){return this.clone({...this._zod.def,catchall:Fu()})},strict(){return this.clone({...this._zod.def,catchall:Tb()})},strip(){return this.clone({...this._zod.def,catchall:void 0})},extend(t){return Rx(this,t)},safeExtend(t){return Ax(this,t)},merge(t){return Cx(this,t)},pick(t){return wx(this,t)},omit(t){return Tx(this,t)},partial(...t){return Ix(Yd,this,t[0])},required(...t){return Px(qd,this,t[0])}})});function Fe(n,e){const t={type:"object",shape:n??{},...Ie(e)};return new Ab(t)}const Zd=Z("ZodUnion",(n,e)=>{vd.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Fd(n,t,i,r),n.options=e.options});function ar(n,e){return new Zd({type:"union",options:n,...Ie(e)})}const Cb=Z("ZodDiscriminatedUnion",(n,e)=>{Zd.init(n,e),uS.init(n,e)});function Pc(n,e,t){return new Cb({type:"union",options:e,discriminator:n,...Ie(t)})}const Ib=Z("ZodIntersection",(n,e)=>{hS.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Dd(n,t,i,r)});function Pb(n,e){return new Ib({type:"intersection",left:n,right:e})}const Fb=Z("ZodTuple",(n,e)=>{dS.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Ld(n,t,i,r),n.rest=t=>n.clone({...n._zod.def,rest:t})});function $d(n,e,t){const i=e instanceof dt,r=i?t:e,s=i?e:null;return new Fb({type:"tuple",items:n,rest:s,...Ie(r)})}const tc=Z("ZodEnum",(n,e)=>{fS.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(i,r,s)=>Td(n,i,r),n.enum=e.entries,n.options=Object.values(e.entries);const t=new Set(Object.keys(e.entries));n.extract=(i,r)=>{const s={};for(const o of i)if(t.has(o))s[o]=e.entries[o];else throw new Error(`Key ${o} not found in enum`);return new tc({...e,checks:[],...Ie(r),entries:s})},n.exclude=(i,r)=>{const s={...e.entries};for(const o of i)if(t.has(o))delete s[o];else throw new Error(`Key ${o} not found in enum`);return new tc({...e,checks:[],...Ie(r),entries:s})}});function Gt(n,e){const t=Array.isArray(n)?Object.fromEntries(n.map(i=>[i,i])):n;return new tc({type:"enum",entries:t,...Ie(e)})}const Db=Z("ZodLiteral",(n,e)=>{pS.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Rd(n,t,i),n.values=new Set(e.values),Object.defineProperty(n,"value",{get(){if(e.values.length>1)throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");return e.values[0]}})});function At(n,e){return new Db({type:"literal",values:Array.isArray(n)?n:[n],...Ie(e)})}const Lb=Z("ZodTransform",(n,e)=>{mS.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Cd(n,t),n._zod.parse=(t,i)=>{if(i.direction==="backward")throw new ed(n.constructor.name);t.addIssue=s=>{if(typeof s=="string")t.issues.push(Or(s,t.value,e));else{const o=s;o.fatal&&(o.continue=!1),o.code??(o.code="custom"),o.input??(o.input=t.value),o.inst??(o.inst=n),t.issues.push(Or(o))}};const r=e.transform(t.value,t);return r instanceof Promise?r.then(s=>(t.value=s,t.fallback=!0,t)):(t.value=r,t.fallback=!0,t)}});function Nb(n){return new Lb({type:"transform",transform:n})}const Yd=Z("ZodOptional",(n,e)=>{_d.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Ic(n,t,i,r),n.unwrap=()=>n._zod.def.innerType});function Du(n){return new Yd({type:"optional",innerType:n})}const Ub=Z("ZodExactOptional",(n,e)=>{gS.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Ic(n,t,i,r),n.unwrap=()=>n._zod.def.innerType});function Ob(n){return new Ub({type:"optional",innerType:n})}const zb=Z("ZodNullable",(n,e)=>{vS.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Nd(n,t,i,r),n.unwrap=()=>n._zod.def.innerType});function Lu(n){return new zb({type:"nullable",innerType:n})}const kb=Z("ZodDefault",(n,e)=>{_S.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Od(n,t,i,r),n.unwrap=()=>n._zod.def.innerType,n.removeDefault=n.unwrap});function Bb(n,e){return new kb({type:"default",innerType:n,get defaultValue(){return typeof e=="function"?e():id(e)}})}const Vb=Z("ZodPrefault",(n,e)=>{xS.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>zd(n,t,i,r),n.unwrap=()=>n._zod.def.innerType});function Hb(n,e){return new Vb({type:"prefault",innerType:n,get defaultValue(){return typeof e=="function"?e():id(e)}})}const qd=Z("ZodNonOptional",(n,e)=>{yS.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Ud(n,t,i,r),n.unwrap=()=>n._zod.def.innerType});function Gb(n,e){return new qd({type:"nonoptional",innerType:n,...Ie(e)})}const Wb=Z("ZodCatch",(n,e)=>{SS.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>kd(n,t,i,r),n.unwrap=()=>n._zod.def.innerType,n.removeCatch=n.unwrap});function Xb(n,e){return new Wb({type:"catch",innerType:n,catchValue:typeof e=="function"?e:()=>e})}const Zb=Z("ZodPipe",(n,e)=>{MS.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Bd(n,t,i,r),n.in=e.in,n.out=e.out});function Nu(n,e){return new Zb({type:"pipe",in:n,out:e})}const $b=Z("ZodReadonly",(n,e)=>{bS.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Vd(n,t,i,r),n.unwrap=()=>n._zod.def.innerType});function Yb(n){return new $b({type:"readonly",innerType:n})}const qb=Z("ZodCustom",(n,e)=>{ES.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Ad(n,t)});function jb(n,e={}){return gM(qb,n,e)}function Jb(n,e){return vM(n,e)}const Kb={custom:"custom"},Qb=$d([Qe(),Qe()]),jd=qn(Qb).min(3),Fc=Gt(["temperature","humidity","lux","power","occupancy"]),eE=Fe({channel:Fc,unit:Ze(),deviceId:Ze()}),tE=Fe({id:Ze(),name:Ze(),footprint:jd,sensors:qn(eE).default([])}),nE=Gt(["guest","lobby","corridor","plant","amenity"]),iE=Fe({id:Ze(),name:Ze(),function:nE,rooms:qn(tE)}),rE=Fe({id:Ze(),name:Ze(),elevation:Qe(),height:Qe().positive(),outline:jd,zones:qn(iE)}),sE=Fe({id:Ze(),name:Ze(),location:Fe({lat:Qe(),lon:Qe(),northAngleDeg:Qe().default(0)}),floors:qn(rE).min(1)});function oE(n){return sE.parse(n)}class aE{constructor(e){P(this,"floorIds");P(this,"floorById",new Map);P(this,"roomById",new Map);this.building=e,this.floorIds=e.floors.map(t=>t.id);for(const t of e.floors){this.floorById.set(t.id,t);for(const i of t.zones)for(const r of i.rooms)this.roomById.set(r.id,{room:r,zone:i,floor:t})}}floor(e){return this.floorById.get(e)}room(e){return this.roomById.get(e)}roomsMatching(e){const t=[];for(const i of this.building.floors)if(!(e.floorId&&i.id!==e.floorId)){for(const r of i.zones)if(!(e.zoneFunction&&r.function!==e.zoneFunction))for(const s of r.rooms){const o=this.roomById.get(s.id);o&&t.push(o)}}return t}info(e){if(e.type==="room"){const t=this.roomById.get(e.id);if(t)return{ref:{...e},type:"room",name:t.room.name,floorId:t.floor.id,floorName:t.floor.name,zoneName:t.zone.name,zoneFunction:t.zone.function,sensors:Uu(t.room.sensors)}}if(e.type==="floor"){const t=this.floorById.get(e.id);if(t){const i=t.zones.flatMap(r=>r.rooms.flatMap(s=>s.sensors));return{ref:{...e},type:"floor",name:t.name,floorId:t.id,floorName:t.name,sensors:Uu(i)}}}return e.type==="building"?{ref:{...e},type:"building",name:this.building.name,sensors:[]}:{ref:{...e},type:e.type,name:e.id,sensors:[]}}}function Uu(n){return n.map(e=>({...e}))}const Ou={type:"change"},Dc={type:"start"},Jd={type:"end"},As=new Br,zu=new Wn,cE=Math.cos(70*_t.DEG2RAD),St=new C,Ht=2*Math.PI,st={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},qo=1e-6;class lE extends _x{constructor(e,t=null){super(e,t),this.state=st.NONE,this.enabled=!0,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hi.ROTATE,MIDDLE:Hi.DOLLY,RIGHT:Hi.PAN},this.touches={ONE:zi.ROTATE,TWO:zi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new ui,this._lastTargetPosition=new C,this._quat=new ui().setFromUnitVectors(e.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new un,this._sphericalDelta=new un,this._scale=1,this._panOffset=new C,this._rotateStart=new ie,this._rotateEnd=new ie,this._rotateDelta=new ie,this._panStart=new ie,this._panEnd=new ie,this._panDelta=new ie,this._dollyStart=new ie,this._dollyEnd=new ie,this._dollyDelta=new ie,this._dollyDirection=new C,this._mouse=new ie,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=hE.bind(this),this._onPointerDown=uE.bind(this),this._onPointerUp=dE.bind(this),this._onContextMenu=xE.bind(this),this._onMouseWheel=mE.bind(this),this._onKeyDown=gE.bind(this),this._onTouchStart=vE.bind(this),this._onTouchMove=_E.bind(this),this._onMouseDown=fE.bind(this),this._onMouseMove=pE.bind(this),this._interceptControlDown=yE.bind(this),this._interceptControlUp=SE.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ou),this.update(),this.state=st.NONE}update(e=null){const t=this.object.position;St.copy(t).sub(this.target),St.applyQuaternion(this._quat),this._spherical.setFromVector3(St),this.autoRotate&&this.state===st.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Ht:i>Math.PI&&(i-=Ht),r<-Math.PI?r+=Ht:r>Math.PI&&(r-=Ht),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(St.setFromSpherical(this._spherical),St.applyQuaternion(this._quatInverse),t.copy(this.target).add(St),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=St.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const a=new C(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new C(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=St.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(As.origin.copy(this.object.position),As.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(As.direction))<cE?this.object.lookAt(this.target):(zu.setFromNormalAndCoplanarPoint(this.object.up,this.target),As.intersectPlane(zu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>qo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>qo||this._lastTargetPosition.distanceToSquared(this.target)>qo?(this.dispatchEvent(Ou),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ht/60*this.autoRotateSpeed*e:Ht/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){St.setFromMatrixColumn(t,0),St.multiplyScalar(-e),this._panOffset.add(St)}_panUp(e,t){this.screenSpacePanning===!0?St.setFromMatrixColumn(t,1):(St.setFromMatrixColumn(t,0),St.crossVectors(this.object.up,St)),St.multiplyScalar(e),this._panOffset.add(St)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;St.copy(r).sub(this.target);let s=St.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ht*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ht*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Ht*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Ht*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Ht*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Ht*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ht*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ht*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ie,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function uE(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function hE(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function dE(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Jd),this.state=st.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function fE(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Hi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=st.DOLLY;break;case Hi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=st.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=st.ROTATE}break;case Hi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=st.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=st.PAN}break;default:this.state=st.NONE}this.state!==st.NONE&&this.dispatchEvent(Dc)}function pE(n){switch(this.state){case st.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case st.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case st.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function mE(n){this.enabled===!1||this.enableZoom===!1||this.state!==st.NONE||(n.preventDefault(),this.dispatchEvent(Dc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Jd))}function gE(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function vE(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case zi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=st.TOUCH_ROTATE;break;case zi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=st.TOUCH_PAN;break;default:this.state=st.NONE}break;case 2:switch(this.touches.TWO){case zi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=st.TOUCH_DOLLY_PAN;break;case zi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=st.TOUCH_DOLLY_ROTATE;break;default:this.state=st.NONE}break;default:this.state=st.NONE}this.state!==st.NONE&&this.dispatchEvent(Dc)}function _E(n){switch(this._trackPointer(n),this.state){case st.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case st.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case st.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case st.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=st.NONE}}function xE(n){this.enabled!==!1&&n.preventDefault()}function yE(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function SE(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Kd={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class cr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const ME=new zh(-1,1,1,-1,0,1);class bE extends Pt{constructor(){super(),this.setAttribute("position",new bt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new bt([0,2,0,0,2,0],2))}}const EE=new bE;class Lc{constructor(e){this._mesh=new Ct(EE,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ME)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Qd extends cr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Mt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Pr.clone(e.uniforms),this.material=new Mt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Lc(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class ku extends cr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class wE extends cr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class TE{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new ie);this._width=i.width,this._height=i.height,t=new fn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:In}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Qd(Kd),this.copyPass.material.blending=Cn,this.clock=new Qh}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ku!==void 0&&(o instanceof ku?i=!0:o instanceof wE&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ie);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class RE extends cr{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ke}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const AE={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class CE extends cr{constructor(){super();const e=AE;this.uniforms=Pr.clone(e.uniforms),this.material=new mx({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Lc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},je.getTransfer(this._outputColorSpace)===it&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===hh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===dh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===fh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===sc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ph?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===mh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const IE={uniforms:{tDiffuse:{value:null},uTime:{value:0},uResolution:{value:new ie(1,1)}},vertexShader:`
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
  `},PE={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ke(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class tr extends cr{constructor(e,t,i,r){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new ie(e.x,e.y):new ie(256,256),this.clearColor=new ke(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new fn(s,o,{type:In}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new fn(s,o,{type:In});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new fn(s,o,{type:In});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),o=Math.round(o/2)}const a=PE;this.highPassUniforms=Pr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Mt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ie(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Kd;this.copyUniforms=Pr.clone(u.uniforms),this.blendMaterial=new Mt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Dn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ke,this.oldClearAlpha=1,this.basic=new io,this.fsQuad=new Lc(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new ie(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=tr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=tr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Mt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ie(.5,.5)},direction:{value:new ie(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Mt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}tr.BlurDirectionX=new ie(1,0);tr.BlurDirectionY=new ie(0,1);class FE extends tr{constructor(e,t,i,r,s){super(e.clone().multiplyScalar(t),i,r,s),this.resolutionScale=t}setSize(e,t){super.setSize(Math.max(1,Math.round(e*this.resolutionScale)),Math.max(1,Math.round(t*this.resolutionScale)))}get brightBufferSize(){return{width:this.renderTargetBright.width,height:this.renderTargetBright.height}}}const Bu="#02040a",jo=.0025,Vu={high:{bloom:.5,overlay:!0,dpr:2},medium:{bloom:.32,overlay:!1,dpr:1.5},low:{bloom:0,overlay:!1,dpr:1}},Hu=["high","medium","low"],DE=26,LE=90,NE=1e3/30,UE=100,Gu=1500,OE=.5;class zE{constructor(e,t="high"){P(this,"scene",new P0);P(this,"camera");P(this,"controls");P(this,"renderer");P(this,"composer",null);P(this,"overlayPass",null);P(this,"bloomPass",null);P(this,"updates",new Set);P(this,"clock",new Qh);P(this,"frameIntervals",[]);P(this,"cpuFrameTimes",[]);P(this,"gpuFrameTimes",[]);P(this,"drawingBufferSize",new ie);P(this,"gpuTimer",null);P(this,"quality","high");P(this,"autoQuality",!0);P(this,"frameAccum",0);P(this,"frameCount",0);P(this,"lastAnimationFrameAt",Number.NEGATIVE_INFINITY);P(this,"burstUntil",performance.now()+Gu);P(this,"activityProbe",null);P(this,"requestedFogDensity",jo);P(this,"onQuality",null);P(this,"resizeObserver",null);P(this,"intersectionObserver",null);P(this,"containerVisible",!0);P(this,"disposed",!1);P(this,"onResize",()=>{var i,r;if(this.disposed)return;const[e,t]=this.dims();this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),(i=this.composer)==null||i.setSize(e,t),(r=this.overlayPass)==null||r.uniforms.uResolution.value.set(e,t),this.requestRenderBurst()});P(this,"onInteraction",()=>{this.requestRenderBurst()});P(this,"onVisibilityChange",()=>{document.hidden||this.resetFrameClock()});this.container=e;const[i,r]=this.dims();this.renderer=new I0({antialias:!0,powerPreference:"high-performance"}),this.renderer.info.autoReset=!1,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,Vu[t].dpr)),this.renderer.setSize(i,r),this.renderer.toneMapping=sc,this.initializeGpuTimer(),e.appendChild(this.renderer.domElement),this.scene.background=new ke(Bu),this.scene.fog=new gc(Bu,jo),this.camera=new en(50,i/r,.1,2e3),this.controls=new lE(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.maxPolarAngle=Math.PI/2-.02,this.controls.minDistance=8,this.controls.maxDistance=160,this.controls.addEventListener("start",this.onInteraction),this.renderer.domElement.addEventListener("pointerdown",this.onInteraction,{passive:!0}),this.renderer.domElement.addEventListener("wheel",this.onInteraction,{passive:!0}),window.addEventListener("resize",this.onResize),typeof ResizeObserver<"u"&&(this.resizeObserver=new ResizeObserver(this.onResize),this.resizeObserver.observe(e)),typeof IntersectionObserver<"u"&&(this.intersectionObserver=new IntersectionObserver(s=>{var a;const o=((a=s[0])==null?void 0:a.isIntersecting)??!0;o&&!this.containerVisible&&this.resetFrameClock(),this.containerVisible=o}),this.intersectionObserver.observe(e)),document.addEventListener("visibilitychange",this.onVisibilityChange),this.setQuality(t,!0),this.onResize()}setFogDensity(e){this.disposed||(this.requestedFogDensity=e??jo,this.applyFogDensity())}getQuality(){return this.quality}getPerformanceStats(){var a,c;this.pollGpuTimers();const e=Ko(this.frameIntervals),t=Ko(this.cpuFrameTimes),i=Ko(this.gpuFrameTimes),r=this.renderer.info.render,s=this.isBursting(performance.now())?"burst":"idle",o=(a=this.bloomPass)==null?void 0:a.brightBufferSize;return this.renderer.getDrawingBufferSize(this.drawingBufferSize),{quality:this.quality,renderCadence:s,targetFps:s==="idle"?10:this.quality==="low"?30:60,fps:e.average>0?1e3/e.average:0,frameMs:t.average,p95FrameMs:t.p95,frameIntervalMs:e.average,p95FrameIntervalMs:e.p95,gpuFrameMs:i.count?i.average:null,p95GpuFrameMs:i.count?i.p95:null,gpuTimingSupported:this.gpuTimer!==null,drawCalls:r.calls,triangles:r.triangles,points:r.points,lines:r.lines,geometries:this.renderer.info.memory.geometries,textures:this.renderer.info.memory.textures,drawingBufferWidth:this.drawingBufferSize.x,drawingBufferHeight:this.drawingBufferSize.y,pixelRatio:this.renderer.getPixelRatio(),postProcessing:this.composer!==null,bloomResolutionScale:((c=this.bloomPass)==null?void 0:c.resolutionScale)??null,bloomBufferWidth:(o==null?void 0:o.width)??0,bloomBufferHeight:(o==null?void 0:o.height)??0}}onQualityChange(e){this.disposed||(this.onQuality=e)}requestRenderBurst(e=Gu){this.disposed||(this.burstUntil=Math.max(this.burstUntil,performance.now()+Math.max(0,e)),this.lastAnimationFrameAt=Number.NEGATIVE_INFINITY)}setActivityProbe(e){this.disposed||(this.activityProbe=e,e!=null&&e()&&this.requestRenderBurst())}setQuality(e,t=!1){var r;if(this.disposed)return;this.quality=e,t||(this.autoQuality=!1);const i=Vu[e];this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,i.dpr)),e==="low"?this.disposeComposer():(this.ensureComposer(),this.composer.setPixelRatio(this.renderer.getPixelRatio()),this.bloomPass.enabled=i.bloom>0,this.bloomPass.strength=i.bloom,this.overlayPass.enabled=i.overlay),this.lastAnimationFrameAt=Number.NEGATIVE_INFINITY,this.requestRenderBurst(),this.applyFogDensity(),this.onResize(),(r=this.onQuality)==null||r.call(this,e,this.autoQuality)}get domElement(){return this.renderer.domElement}registerUpdate(e){return this.disposed?()=>{}:(this.updates.add(e),()=>this.updates.delete(e))}start(){this.disposed||this.renderer.setAnimationLoop(e=>{if(!this.shouldRender())return;const t=this.isBursting(e)?this.quality==="low"?NE:0:UE;e-this.lastAnimationFrameAt<t||(this.lastAnimationFrameAt=e,this.tick())})}stop(){this.disposed||(this.renderer.setAnimationLoop(null),this.lastAnimationFrameAt=Number.NEGATIVE_INFINITY)}renderOnce(){this.disposed||this.tick(!0)}dispose(){var e,t;this.disposed||(this.stop(),this.disposed=!0,window.removeEventListener("resize",this.onResize),(e=this.resizeObserver)==null||e.disconnect(),this.resizeObserver=null,(t=this.intersectionObserver)==null||t.disconnect(),this.intersectionObserver=null,document.removeEventListener("visibilitychange",this.onVisibilityChange),this.controls.removeEventListener("start",this.onInteraction),this.renderer.domElement.removeEventListener("pointerdown",this.onInteraction),this.renderer.domElement.removeEventListener("wheel",this.onInteraction),this.clock.stop(),this.updates.clear(),this.controls.dispose(),this.disposeComposer(),this.disposeGpuTimer(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.onQuality=null,this.frameAccum=0,this.frameCount=0,this.frameIntervals=[],this.cpuFrameTimes=[],this.gpuFrameTimes=[],this.lastAnimationFrameAt=Number.NEGATIVE_INFINITY,this.activityProbe=null)}tick(e=!1){var o;if(this.disposed||!e&&!this.shouldRender())return;const t=performance.now(),i=this.clock.getDelta(),r=this.clock.elapsedTime;for(const a of this.updates)a(i,r);this.controls.update(i),this.renderer.info.reset(),this.beginGpuTimer(),(o=this.overlayPass)!=null&&o.enabled&&(this.overlayPass.uniforms.uTime.value=r),this.composer?this.composer.render():(this.renderer.setRenderTarget(null),this.renderer.render(this.scene,this.camera)),this.endGpuTimer(),this.pollGpuTimers();const s=performance.now()-t;this.monitorFrame(s),this.recordFrameMetrics(i,s)}monitorFrame(e){if(!this.autoQuality||this.quality==="low"||(this.frameAccum+=e,++this.frameCount<LE))return;const t=this.frameAccum/this.frameCount;if(this.frameAccum=0,this.frameCount=0,t>DE){const i=Hu[Hu.indexOf(this.quality)+1];i&&this.setQuality(i,!0)}}dims(){return[this.container.clientWidth||window.innerWidth,this.container.clientHeight||window.innerHeight]}shouldRender(){return!document.hidden&&this.containerVisible}resetFrameClock(){this.disposed||(this.clock.stop(),this.clock.start(),this.lastAnimationFrameAt=Number.NEGATIVE_INFINITY,this.requestRenderBurst())}isBursting(e){var t;return e<this.burstUntil||(((t=this.activityProbe)==null?void 0:t.call(this))??!1)}ensureComposer(){if(this.composer)return;const[e,t]=this.dims(),i=new TE(this.renderer);i.setPixelRatio(this.renderer.getPixelRatio()),i.addPass(new RE(this.scene,this.camera));const r=new FE(new ie(e,t),OE,.5,.45,.2);i.addPass(r);const s=new Qd(IE);i.addPass(s),i.addPass(new CE),this.composer=i,this.bloomPass=r,this.overlayPass=s}disposeComposer(){if(this.composer){for(const e of this.composer.passes)e.dispose();this.composer.passes.length=0,this.composer.dispose(),this.composer=null,this.bloomPass=null,this.overlayPass=null}}applyFogDensity(){this.scene.fog.density=this.quality==="low"?0:this.requestedFogDensity}initializeGpuTimer(){const e=this.renderer.getContext();if(!(e instanceof WebGL2RenderingContext))return;const t=e.getExtension("EXT_disjoint_timer_query_webgl2");t&&(this.gpuTimer={gl:e,extension:t,active:null,pending:[]})}beginGpuTimer(){const e=this.gpuTimer;if(!e||e.active||e.pending.length>=4)return;const t=e.gl.createQuery();if(t)try{e.gl.beginQuery(e.extension.TIME_ELAPSED_EXT,t),e.active=t}catch{e.gl.deleteQuery(t),this.disposeGpuTimer()}}endGpuTimer(){const e=this.gpuTimer;if(e!=null&&e.active)try{e.gl.endQuery(e.extension.TIME_ELAPSED_EXT),e.pending.push(e.active),e.active=null}catch{this.disposeGpuTimer()}}pollGpuTimers(){const e=this.gpuTimer;if(!(!e||e.active)){if(e.gl.getParameter(e.extension.GPU_DISJOINT_EXT)){for(const t of e.pending.splice(0))e.gl.deleteQuery(t);return}for(;e.pending.length;){const t=e.pending[0];if(!e.gl.getQueryParameter(t,e.gl.QUERY_RESULT_AVAILABLE))break;const i=e.gl.getQueryParameter(t,e.gl.QUERY_RESULT);e.pending.shift(),e.gl.deleteQuery(t);const r=i/1e6;Number.isFinite(r)&&r>=0&&r<1e3&&Jo(this.gpuFrameTimes,r)}}}disposeGpuTimer(){const e=this.gpuTimer;if(e){if(e.active){try{e.gl.endQuery(e.extension.TIME_ELAPSED_EXT)}catch{}e.gl.deleteQuery(e.active)}for(const t of e.pending)e.gl.deleteQuery(t);this.gpuTimer=null}}recordFrameMetrics(e,t){const i=e*1e3;Number.isFinite(i)&&i>0&&i<1e3&&Jo(this.frameIntervals,i),Number.isFinite(t)&&t>=0&&t<1e3&&Jo(this.cpuFrameTimes,t)}}function Jo(n,e){n.push(e),n.length>240&&n.shift()}function Ko(n){if(!n.length)return{average:0,p95:0,count:0};const e=n.reduce((i,r)=>i+r,0)/n.length,t=[...n].sort((i,r)=>i-r);return{average:e,p95:t[Math.min(t.length-1,Math.floor(t.length*.95))],count:n.length}}const Ar=new ke("#36e6ff");function Nc(n=Ar){return new Mt({transparent:!0,depthWrite:!1,blending:Dn,side:tn,uniforms:{uColor:{value:n.clone()},uBase:{value:.015},uFresnelPower:{value:2.6},uIntensity:{value:.35},uOpacity:{value:1},uLodVisible:{value:1},uTint:{value:n.clone()},uTintStrength:{value:0},uSunDir:{value:new C(0,1,0)},uSunStrength:{value:0}},vertexShader:`
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
        gl_FragColor = vec4(col * glow, glow) * uOpacity * vHoloOpacity;
      }
    `})}function kE(n,e=Ar){return new Mt({transparent:!0,depthWrite:!1,blending:Dn,uniforms:{uColor:{value:e.clone()},uOpacity:{value:1},uScaleY:{value:1},uBaseY:{value:n}},vertexShader:`
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
      varying float vOpacity;
      void main() {
        gl_FragColor = vec4(uColor, uOpacity * vOpacity);
      }
    `})}function Bt(n){n.updateMatrix(),n.matrixAutoUpdate=!1}const kr=.18,BE=.18,VE=.45,Wu=30;function HE(n){const e=new dn;e.name=`building:${n.id}`;const t=new Map,i=new Map;for(const a of n.floors){const c=WE(a,n.id,i);e.add(c),t.set(a.id,c)}const s=new Xt().setFromObject(e).getCenter(new C);e.position.set(-s.x,0,-s.z),Bt(e);const o=new dn;return o.name="buildingRoot",o.userData.entityRef={type:"building",id:n.id},o.add(e),Bt(o),{root:o,floorGroups:t}}class GE{constructor(e,t,i,r){this.mesh=e,this.instanceId=t,this.anchor=i,this.attributes=r}getColor(){return new ke(this.attributes.color.getX(this.instanceId),this.attributes.color.getY(this.instanceId),this.attributes.color.getZ(this.instanceId))}setColor(e){this.attributes.color.setXYZ(this.instanceId,e.r,e.g,e.b),this.attributes.color.needsUpdate=!0}getIntensity(){return this.attributes.intensity.getX(this.instanceId)}setIntensity(e){this.setScalar(this.attributes.intensity,e)}getBase(){return this.attributes.base.getX(this.instanceId)}setBase(e){this.setScalar(this.attributes.base,e)}getOpacity(){return this.attributes.opacity.getX(this.instanceId)}setOpacity(e){this.setScalar(this.attributes.opacity,e)}setTint(e,t=e?.8:0){this.setScalar(this.attributes.tintStrength,e?t:0),e&&(this.attributes.tint.setXYZ(this.instanceId,e.r,e.g,e.b),this.attributes.tint.needsUpdate=!0)}setScaleY(e){this.anchor.scale.y=e,this.anchor.updateMatrix(),this.mesh.setMatrixAt(this.instanceId,this.anchor.matrix),this.mesh.instanceMatrix.needsUpdate=!0}getLodVisible(){return this.attributes.lodVisible.getX(this.instanceId)>.5}setLodVisible(e){this.setScalar(this.attributes.lodVisible,e?1:0)}setScalar(e,t){e.setX(this.instanceId,t),e.needsUpdate=!0}}class ef{constructor(e,t){this.edge=e,this.roomId=t}getOpacity(){const e=this.edge.ranges.get(this.roomId);return e?this.edge.opacity.getX(e.start):0}setOpacity(e){const t=this.edge.ranges.get(this.roomId);if(t){for(let i=t.start;i<t.start+t.count;i++)this.edge.opacity.setX(i,e);this.edge.opacity.needsUpdate=!0}}setScaleY(e){this.edge.lines.material.uniforms.uScaleY.value=e}setVisible(e){this.edge.lines.visible=e}}function WE(n,e,t){const i=new dn;i.name=`floor:${n.id}`,i.position.y=n.elevation,i.userData.entityRef={type:"floor",id:n.id,buildingId:e},i.userData.baseElevation=n.elevation;const r=Xu(n.outline,kr),s=new Ct(r,Nc());s.userData.entityRef=i.userData.entityRef,Bt(s),i.add(s);const o=new Map;for(const l of n.zones)for(const u of l.rooms){const h=Math.max(.5,n.height-VE),[d,f]=u.footprint[0],g=u.footprint.map(([w,M])=>[w-d,M-f]),v=`${h}|${qE(g)}`;let m=t.get(v);if(!m){const w=Xu(JE(g,BE),h);w.computeBoundingBox(),m={volume:w,edges:new tu(w,Wu)},t.set(v,m)}const p=o.get(v)??[];p.push({room:u,originX:d,originY:f,cached:m,lodEligible:l.function==="guest"}),o.set(v,p)}const a=[...o.values()].flat(),c=$E(new tu(r,Wu),a);Bt(c.lines),i.add(c.lines);for(const l of o.values())l.length===1?XE(i,l[0],e,c):ZE(i,l,e,c);return i}function XE(n,e,t,i){const r=new Ct(e.cached.volume,Nc());r.position.set(e.originX,kr,-e.originY),r.userData.entityRef=nc(e.room.id,t),r.userData.roomLodEligible=e.lodEligible,r.userData.roomEdges=i.lines,r.userData.roomEdgeVisual=new ef(i,e.room.id),Bt(r),n.add(r)}function ZE(n,e,t,i){const r=e[0].cached.volume.clone(),s=YE(r,e.length),o=new L0(r,Nc(),e.length);o.name=`instancedRooms:${e.length}`,o.userData.instanceRoomRefs=e.map(a=>nc(a.room.id,t)),o.frustumCulled=!0,Bt(o),n.add(o);for(let a=0;a<e.length;a++){const c=e[a],l=new Ut;l.name=`room:${c.room.id}`,l.position.set(c.originX,kr,-c.originY),l.userData.entityRef=nc(c.room.id,t),l.userData.roomLodEligible=c.lodEligible,l.userData.roomLocalBounds=c.cached.volume.boundingBox.clone(),l.userData.roomVisual=new GE(o,a,l,s),l.userData.roomEdges=i.lines,l.userData.roomEdgeVisual=new ef(i,c.room.id),Bt(l),o.setMatrixAt(a,l.matrix),n.add(l)}o.instanceMatrix.needsUpdate=!0,o.computeBoundingSphere()}function $E(n,e){const t=n.attributes.position,i=e.reduce((f,g)=>f+g.cached.edges.attributes.position.count,0),r=t.count+i,s=new Float32Array(r*3),o=new Float32Array(r),a=new Float32Array(r),c=new Map;let l=0;for(let f=0;f<t.count;f++,l++)s[l*3]=t.getX(f),s[l*3+1]=t.getY(f),s[l*3+2]=t.getZ(f),o[l]=.55;for(const f of e){const g=f.cached.edges.attributes.position,v=l;for(let m=0;m<g.count;m++,l++)s[l*3]=g.getX(m)+f.originX,s[l*3+1]=g.getY(m)+kr,s[l*3+2]=g.getZ(m)-f.originY,o[l]=.28,a[l]=1;c.set(f.room.id,{start:v,count:g.count})}const u=new Pt;u.setAttribute("position",new It(s,3));const h=new It(o,1);h.setUsage(Hs),u.setAttribute("edgeOpacity",h),u.setAttribute("edgeScalable",new It(a,1));const d=new Er(u,kE(kr));return d.name=`batchedFloorEdges:${e.length}`,{lines:d,opacity:h,ranges:c}}function YE(n,e){const t=new Rn(new Float32Array(e*3),3),i=new Rn(new Float32Array(e),1),r=new Rn(new Float32Array(e),1),s=new Rn(new Float32Array(e*3),3),o=new Rn(new Float32Array(e),1),a=new Rn(new Float32Array(e),1),c=new Rn(new Float32Array(e),1),l=new ke("#36e6ff");for(let u=0;u<e;u++)t.setXYZ(u,l.r,l.g,l.b),i.setX(u,.015),r.setX(u,.35),s.setXYZ(u,l.r,l.g,l.b),o.setX(u,0),a.setX(u,1),c.setX(u,1);return n.setAttribute("instanceHoloColor",t),n.setAttribute("instanceHoloBase",i),n.setAttribute("instanceHoloIntensity",r),n.setAttribute("instanceHoloTint",s),n.setAttribute("instanceHoloTintStrength",o),n.setAttribute("instanceHoloOpacity",a),n.setAttribute("instanceHoloLodVisible",c),{color:t,base:i,intensity:r,tint:s,tintStrength:o,opacity:a,lodVisible:c}}function nc(n,e){return{type:"room",id:n,buildingId:e}}function qE(n){return n.map(([e,t])=>`${e},${t}`).join(";")}function jE(n){const e=new qh;e.moveTo(n[0][0],n[0][1]);for(let t=1;t<n.length;t++)e.lineTo(n[t][0],n[t][1]);return e.closePath(),e}function Xu(n,e){const t=new Sc(jE(n),{depth:e,bevelEnabled:!1});return t.rotateX(-Math.PI/2),t}function JE(n,e){let t=0,i=0;for(const[r,s]of n)t+=r,i+=s;return t/=n.length,i/=n.length,n.map(([r,s])=>{const o=r-t,a=s-i,c=Math.hypot(o,a)||1,l=Math.min(e,c*.4);return[r-o/c*l,s-a/c*l]})}class KE{constructor(e){P(this,"group",new dn);P(this,"spinners",[]);this.group.name="pedestal",Bt(this.group);const t=[{inner:.985,outer:1,arc:Math.PI*2,speed:0,opacity:.3},{inner:1.1,outer:1.115,arc:Math.PI*1.4,speed:.25,opacity:.22},{inner:1.24,outer:1.25,arc:Math.PI*.5,speed:-.4,opacity:.2}];for(const s of t){const o=new Mc(e*s.inner,e*s.outer,160,1,0,s.arc),a=new io({color:Ar,transparent:!0,opacity:s.opacity,side:tn,blending:Dn,depthWrite:!1}),c=new Ct(o,a);c.rotation.x=-Math.PI/2,c.position.y=.03,s.speed===0&&Bt(c),this.group.add(c),this.spinners.push({mesh:c,speed:s.speed,baseOpacity:s.opacity})}const i=new vx(e*.95,12,5,128,Ar,Ar),r=i.material;r.transparent=!0,r.opacity=.06,r.blending=Dn,r.depthWrite=!1,i.position.y=.01,Bt(i),this.group.add(i)}update(e,t){for(const i of this.spinners)i.mesh.rotation.z+=i.speed*e,i.mesh.material.opacity=i.baseOpacity*(.75+.25*Math.sin(t*1.6+i.speed*10))}}function tf(n=64){const e=document.createElement("canvas");e.width=e.height=n;const t=e.getContext("2d"),i=t.createRadialGradient(n/2,n/2,0,n/2,n/2,n/2);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.4,"rgba(255,255,255,0.5)"),i.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=i,t.fillRect(0,0,n,n);const r=new U0(e);return r.needsUpdate=!0,r}const Zu=-9999;class QE{constructor(e,t){P(this,"group",new dn);P(this,"rooms",[]);P(this,"points");P(this,"positions");P(this,"tmp",new C);P(this,"dirty",!0);P(this,"transformRevision",-1);P(this,"offControlChange");this.sceneIndex=e,this.controls=t,this.group.name="controlLayer",Bt(this.group);for(const o of t.list()){if(!o.kinds.includes("light"))continue;const a=e.room(o.roomId);if(!a)continue;const c=a.localBounds,l=c.getCenter(new C);this.rooms.push({roomId:o.roomId,mesh:a.mesh,localTop:new C(l.x,c.max.y*.85,l.z)})}this.positions=new Float32Array(this.rooms.length*3).fill(Zu);const i=new Pt,r=new It(this.positions,3);r.setUsage(Hs),i.setAttribute("position",r);const s=new _c({size:2.6,map:tf(),color:new ke("#ffd9a0"),transparent:!0,opacity:.85,blending:Dn,depthWrite:!1,sizeAttenuation:!0});this.points=new Wh(i,s),this.points.frustumCulled=!1,Bt(this.points),this.group.add(this.points),this.offControlChange=t.onChange(()=>{this.dirty=!0})}update(){var i;const e=this.transformRevision!==this.sceneIndex.transformRevision;if(!this.dirty&&!e)return;const t=this.points.geometry.attributes.position;for(let r=0;r<this.rooms.length;r++){const s=this.rooms[r];(i=this.controls.get(s.roomId))!=null&&i.state.light?(s.mesh.localToWorld(this.tmp.copy(s.localTop)),this.positions[r*3]=this.tmp.x,this.positions[r*3+1]=this.tmp.y,this.positions[r*3+2]=this.tmp.z):this.positions[r*3+1]=Zu}t.needsUpdate=!0,this.dirty=!1,this.transformRevision=this.sceneIndex.transformRevision}dispose(){this.offControlChange()}}const $u=-9999,ew=new ke("#ffb020"),tw=new ke("#ff2b3b");class nw{constructor(e,t){P(this,"group",new dn);P(this,"rooms",[]);P(this,"points");P(this,"positions");P(this,"colors");P(this,"tmp",new C);P(this,"transformRevision",-1);P(this,"alarmRevision",-1);P(this,"hasCritical",!1);this.sceneIndex=e,this.alarms=t,this.group.name="alarmLayer",Bt(this.group);for(const a of e.rooms){const c=a.localBounds,l=c.getCenter(new C);this.rooms.push({roomId:a.id,mesh:a.mesh,localTop:new C(l.x,c.max.y*1.15,l.z)})}this.positions=new Float32Array(this.rooms.length*3).fill($u),this.colors=new Float32Array(this.rooms.length*3);const i=new Pt,r=new It(this.positions,3),s=new It(this.colors,3);r.setUsage(Hs),s.setUsage(Hs),i.setAttribute("position",r),i.setAttribute("color",s);const o=new _c({size:5,map:tf(),vertexColors:!0,transparent:!0,opacity:.9,blending:Dn,depthWrite:!1,sizeAttenuation:!0});this.points=new Wh(i,o),this.points.frustumCulled=!1,Bt(this.points),this.group.add(this.points)}update(e){const t=this.transformRevision!==this.sceneIndex.transformRevision,i=this.alarmRevision!==this.alarms.revision;if(!t&&!i){this.pulse(e);return}const r=this.alarms.alarmingRooms(),s=this.points.geometry.attributes.position,o=this.points.geometry.attributes.color;let a=!1;for(let c=0;c<this.rooms.length;c++){const l=this.rooms[c],u=r.get(l.roomId);if(!u){this.positions[c*3+1]=$u;continue}l.mesh.localToWorld(this.tmp.copy(l.localTop)),this.positions[c*3]=this.tmp.x,this.positions[c*3+1]=this.tmp.y,this.positions[c*3+2]=this.tmp.z;const h=u==="critical"?tw:ew;this.colors[c*3]=h.r,this.colors[c*3+1]=h.g,this.colors[c*3+2]=h.b,u==="critical"&&(a=!0)}s.needsUpdate=!0,o.needsUpdate=!0,this.transformRevision=this.sceneIndex.transformRevision,this.alarmRevision=this.alarms.revision,this.hasCritical=a,this.pulse(e)}pulse(e){const t=this.hasCritical?7:3.5;this.points.material.opacity=.45+.45*Math.abs(Math.sin(e*t))}}const iw={easeInOutCubic:n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2};class rw{constructor(){P(this,"active",new Set);P(this,"now",performance.now())}get hasActive(){return this.active.size>0}run(e,t,i=iw.easeInOutCubic){let r;const s=new Promise(a=>r=a),o={start:this.now,duration:e,easing:i,onUpdate:t,resolve:r};return this.active.add(o),{done:s,cancel:()=>{this.active.delete(o)&&r("cancelled")}}}update(e){this.now=e;for(const t of this.active){const i=Math.min(1,(e-t.start)/t.duration);t.onUpdate(t.easing(i)),i>=1&&(this.active.delete(t),t.resolve("completed"))}}cancelAll(){for(const e of this.active)this.active.delete(e),e.resolve("cancelled")}}const sw={orbit:{azimuthDeg:35,elevationDeg:22},front:{azimuthDeg:0,elevationDeg:10},top:{azimuthDeg:0,elevationDeg:85},isometric:{azimuthDeg:45,elevationDeg:32}},ow=1e4,Yu=1200;class aw{constructor(e,t,i){P(this,"currentFlight",null);P(this,"autoRotateWanted",!1);P(this,"resumeTimer");P(this,"savedPose",null);P(this,"savedMinDistance",0);P(this,"disposed",!1);P(this,"onControlsStart",()=>{this.disposed||(this.interruptFlight(),this.autoRotateWanted&&(this.controls.autoRotate=!1,this.clearResumeTimer(),this.resumeTimer=window.setTimeout(()=>{this.resumeTimer=void 0,!this.disposed&&this.autoRotateWanted&&(this.controls.autoRotate=!0)},ow)))});this.camera=e,this.controls=t,this.tween=i,this.controls.addEventListener("start",this.onControlsStart)}get autoRotate(){return this.autoRotateWanted}setAutoRotate(e,t=.6){this.disposed||(this.autoRotateWanted=e,this.controls.autoRotate=e,this.controls.autoRotateSpeed=t,this.clearResumeTimer())}setView(e,t){const i=sw[e];return this.orbitTo(i.azimuthDeg,i.elevationDeg,t)}async orbitTo(e,t,i={}){if(this.disposed)return"superseded";this.interruptFlight();const r=this.controls.target.clone(),s=new un().setFromVector3(this.camera.position.clone().sub(r)),o=new un(i.radius??s.radius,_t.degToRad(90-t),_t.degToRad(e)),a=_t.euclideanModulo(o.theta-s.theta+Math.PI,Math.PI*2)-Math.PI,c=this.autoRotateWanted;this.controls.autoRotate=!1;const l=new un,u=this.tween.run(i.durationMs??Yu,d=>{l.set(_t.lerp(s.radius,o.radius,d),_t.lerp(s.phi,o.phi,d),s.theta+a*d),l.makeSafe(),this.camera.position.setFromSpherical(l).add(r),this.camera.lookAt(r)});this.currentFlight=u;const h=await u.done;return this.currentFlight===u&&(this.currentFlight=null),h==="completed"&&c&&(this.controls.autoRotate=!0),h==="completed"?"completed":"superseded"}orbitSpherical(){const e=new un().setFromVector3(this.camera.position.clone().sub(this.controls.target));return{radius:e.radius,azimuthDeg:_t.radToDeg(e.theta),elevationDeg:90-_t.radToDeg(e.phi)}}async flyTo(e,t,i,r,s={}){if(this.disposed)return"superseded";this.interruptFlight();const o=this.controls.target.clone(),a=new un().setFromVector3(this.camera.position.clone().sub(o)),c=new un(r,_t.degToRad(90-i),_t.degToRad(t)),l=_t.euclideanModulo(c.theta-a.theta+Math.PI,Math.PI*2)-Math.PI,u=this.autoRotateWanted;this.controls.autoRotate=!1;const h=new C,d=new un,f=this.tween.run(s.durationMs??Yu,v=>{h.lerpVectors(o,e,v),d.set(_t.lerp(a.radius,c.radius,v),_t.lerp(a.phi,c.phi,v),a.theta+l*v),d.makeSafe(),this.controls.target.copy(h),this.camera.position.setFromSpherical(d).add(h),this.camera.lookAt(h)});this.currentFlight=f;const g=await f.done;return this.currentFlight===f&&(this.currentFlight=null),g==="completed"&&u&&(this.controls.autoRotate=!0),g==="completed"?"completed":"superseded"}zoomToBox(e,t={}){const i=e.getCenter(new C),r=.5*e.getSize(new C).length(),s=_t.degToRad(this.camera.fov),o=r/Math.sin(s/2)*1.3,a=this.orbitSpherical().azimuthDeg;return this.flyTo(i,a,26,Math.max(o,this.controls.minDistance+1),t)}get roomFocused(){return this.savedPose!==null}enterRoom(e,t={}){if(this.disposed)return Promise.resolve("superseded");this.savedPose||(this.savedPose={target:this.controls.target.clone(),position:this.camera.position.clone()},this.savedMinDistance=this.controls.minDistance);const i=e.getCenter(new C),r=e.getSize(new C),s=Math.max(2,Math.max(r.x,r.z)*.5+1.5);this.controls.minDistance=Math.min(this.savedMinDistance,s*.5);const o=this.orbitSpherical().azimuthDeg;return this.flyTo(i,o,4,s,{durationMs:t.durationMs??1900})}exitRoom(e={}){if(this.disposed)return Promise.resolve("superseded");if(!this.savedPose)return Promise.resolve("completed");const t=this.savedPose;this.savedPose=null,this.controls.minDistance=this.savedMinDistance,this.savedMinDistance=0;const i=new un().setFromVector3(t.position.clone().sub(t.target));return this.flyTo(t.target,_t.radToDeg(i.theta),90-_t.radToDeg(i.phi),i.radius,{durationMs:e.durationMs??1500})}abandonRoomFocus(){this.savedPose&&(this.savedPose=null,this.controls.minDistance=this.savedMinDistance,this.savedMinDistance=0)}dispose(){this.disposed||(this.disposed=!0,this.controls.removeEventListener("start",this.onControlsStart),this.clearResumeTimer(),this.interruptFlight(),this.controls.autoRotate=!1,this.controls.enabled=!1,this.abandonRoomFocus(),this.autoRotateWanted=!1)}clearResumeTimer(){window.clearTimeout(this.resumeTimer),this.resumeTimer=void 0}interruptFlight(){var e;(e=this.currentFlight)==null||e.cancel(),this.currentFlight=null}}class cw{constructor(e){P(this,"modes",new Map);P(this,"active",null);P(this,"activeId",null);P(this,"updateDisposers",[]);P(this,"queue",Promise.resolve());P(this,"disposed",!1);P(this,"rooms");P(this,"floors");this.deps=e,this.rooms=e.sceneIndex.rooms.map(t=>this.buildModeRoom(t)),this.floors=e.sceneIndex.floors.map(t=>this.buildModeFloor(t)),e.timeline.setSink(t=>{var i,r;return(r=(i=this.active)==null?void 0:i.onData)==null?void 0:r.call(i,t)})}register(e){this.modes.set(e.descriptor.id,{descriptor:Qo(e.descriptor),instance:e})}registerLazy(e,t){this.modes.set(e.id,{descriptor:Qo(e),loader:t})}list(){return[...this.modes.values()].map(e=>Qo(e.descriptor))}getActiveId(){return this.activeId}getActiveMode(){return this.active??void 0}setMode(e){if(this.disposed)return Promise.reject(new Error("ModeManager has been disposed."));if(!this.modes.has(e))return Promise.reject(new Error(`Unknown mode '${e}'`));const t=this.queue.then(()=>this.switchTo(e));return this.queue=t.catch(()=>{}),t}async dispose(){if(this.disposed)return;this.disposed=!0,this.deps.timeline.setSink(()=>{}),await this.queue.catch(()=>{});const e=this.active;this.active=null,this.activeId=null;for(const t of this.updateDisposers)t();this.updateDisposers=[],this.deps.overlay.clear(),this.deps.emitLegend(null),this.setSun(null),this.deps.setFog(null),await(e==null?void 0:e.exit())}async switchTo(e){if(this.disposed||this.activeId===e)return;const t=this.modes.get(e);if(!t)throw new Error(`Unknown mode '${e}'`);const i=await this.resolveMode(t);if(this.disposed||this.activeId===e)return;this.active&&await this.active.exit();for(const s of this.updateDisposers)s();this.updateDisposers=[],this.deps.overlay.clear(),this.deps.emitLegend(null),this.setSun(null),this.deps.setFog(null),this.active=i,this.activeId=e;const r={building:this.deps.building,overlay:this.deps.overlay,cameraDirector:this.deps.cameraDirector,rooms:this.rooms,floors:this.floors,registerUpdate:s=>{this.disposed||this.updateDisposers.push(this.deps.registerSceneUpdate(s))},getTransformRevision:()=>this.deps.sceneIndex.transformRevision,setLegend:s=>this.deps.emitLegend(s),setFog:s=>this.deps.setFog(s),setSun:(s,o=1)=>this.setSun(s,o)};if(await i.enter(r),this.disposed){await i.exit(),this.active===i&&(this.active=null,this.activeId=null);return}this.deps.timeline.refresh()}resolveMode(e){return e.instance?Promise.resolve(e.instance):e.loading?e.loading:e.loader?(e.loading=e.loader().then(t=>{if(t.descriptor.id!==e.descriptor.id)throw new Error(`Mode loader for '${e.descriptor.id}' returned '${t.descriptor.id}'.`);return e.instance=t,t}).catch(t=>{throw e.loading=void 0,t}),e.loading):Promise.reject(new Error(`Mode '${e.descriptor.id}' has no loader.`))}setSun(e,t=0){for(const i of this.deps.sceneIndex.holoMaterials())i.uniforms.uSunStrength.value=e?t:0,e&&i.uniforms.uSunDir.value.copy(e).normalize()}buildModeRoom(e){const t=this.deps.buildingIndex.info({type:"room",id:e.id}),i=e.localBounds.getCenter(new C);return{id:e.id,ref:{type:"room",id:e.id},floorId:e.floorId,zoneFunction:t.zoneFunction??"guest",name:t.name,sensors:t.sensors,worldCenter:(r=new C)=>e.mesh.localToWorld(r.copy(i)),setTint:(r,s=r?.8:0)=>{e.visual.setTint(r,s)}}}buildModeFloor(e){const t=new Xt().setFromObject(e.group);return{id:e.id,index:e.index,baseElevation:e.baseElevation,group:e.group,center:t.getCenter(new C),size:t.getSize(new C)}}}function Qo(n){return{...n,channels:[...n.channels]}}class lw{constructor(e,t){P(this,"floors");P(this,"floorById",new Map);P(this,"roomById",new Map);P(this,"transformRevision_",0);P(this,"roomLod","rooms");P(this,"roomLodExceptions",new Set);this.buildingRoot=t,this.floors=[...e.entries()].map(([i,r])=>this.buildFloor(i,r)).sort((i,r)=>i.baseElevation-r.baseElevation).map((i,r)=>({...i,index:r}));for(const i of this.floors)this.floorById.set(i.id,i),this.indexRooms(i)}get rooms(){return[...this.roomById.values()]}get transformRevision(){return this.transformRevision_}markTransformsChanged(){this.transformRevision_+=1}setLowDetail(e){var t;for(const i of this.roomById.values())(t=i.edgeVisual)==null||t.setVisible(!e);for(const i of this.holoMaterials()){const r=e?Fn:tn;i.side!==r&&(i.side=r,i.needsUpdate=!0)}}setRoomLod(e){e!==this.roomLod&&(this.roomLod=e,this.applyRoomLod())}getRoomLod(){return this.roomLod}setRoomLodExceptions(e){const t=new Set(e);dw(t,this.roomLodExceptions)||(this.roomLodExceptions=t,this.applyRoomLod())}getRoomLodStats(){let e=0,t=0;for(const i of this.roomById.values())i.lodEligible&&(e+=1,i.visual.getLodVisible()||(t+=1));return{mode:this.roomLod,eligibleRooms:e,hiddenRooms:t}}getTransformStats(){let e=0,t=0;return this.buildingRoot.traverse(i=>{e+=1,i.matrixAutoUpdate||(t+=1)}),{total:e,frozen:t,dynamic:e-t}}holoMaterials(){const e=[];for(const t of this.floors)for(const i of t.ghosts)i.holo&&e.push(i.holo);return e}floor(e){return this.floorById.get(e)}room(e){return this.roomById.get(e)}boxOf(e){if(e==="building")return new Xt().setFromObject(this.buildingRoot);if(e.type==="floor"){const t=this.floorById.get(e.id);if(t)return new Xt().setFromObject(t.group)}if(e.type==="room"){const t=this.roomById.get(e.id);if(t)return t.mesh.updateWorldMatrix(!0,!1),t.localBounds.clone().applyMatrix4(t.mesh.matrixWorld)}return new Xt().setFromObject(this.buildingRoot)}buildFloor(e,t){const i=t.userData.baseElevation??t.position.y,r=[];return t.traverse(s=>{s instanceof Ct&&s.material instanceof Mt?r.push({holo:s.material,baseOpacity:1}):s instanceof Er&&s.material instanceof vc?r.push({line:s.material,baseOpacity:s.material.opacity}):s instanceof Er&&s.material instanceof Mt&&r.push({opacityShader:s.material,baseOpacity:1})}),{id:e,group:t,index:0,baseElevation:i,ghosts:r}}indexRooms(e){const t=new Map,i=new Map;e.group.traverse(r=>{const s=r.userData.entityRef;if((s==null?void 0:s.type)!=="room")return;const o=r.userData.roomVisual,a=r.userData.roomLocalBounds;if(o&&a)t.set(s.id,{id:s.id,floorId:e.id,mesh:r,localBounds:a,visual:o,lodEligible:!!r.userData.roomLodEligible,edges:r.userData.roomEdges,edgeVisual:r.userData.roomEdgeVisual});else if(r instanceof Ct){const c=r.geometry;c.boundingBox||c.computeBoundingBox(),t.set(s.id,{id:s.id,floorId:e.id,mesh:r,localBounds:c.boundingBox.clone(),visual:hw(r),lodEligible:!!r.userData.roomLodEligible,edges:r.userData.roomEdges,edgeVisual:r.userData.roomEdgeVisual})}else r instanceof Er&&i.set(s.id,r)});for(const[r,s]of t){const o=i.get(r);o&&(s.edges=o,s.edgeVisual=uw(o)),this.roomById.set(r,s)}}applyRoomLod(){for(const e of this.roomById.values()){const t=this.roomLod==="rooms"||!e.lodEligible||this.roomLodExceptions.has(e.id);e.visual.setLodVisible(t)}}}function uw(n){const e=n.material;return{getOpacity:()=>e.opacity,setOpacity:t=>{e.opacity=t},setScaleY:t=>{n.scale.y=t,n.matrixAutoUpdate||n.updateMatrix()},setVisible:t=>{n.visible=t}}}function hw(n){const e=n.material;return{getColor:()=>e.uniforms.uColor.value.clone(),setColor:t=>e.uniforms.uColor.value.copy(t),getIntensity:()=>e.uniforms.uIntensity.value,setIntensity:t=>{e.uniforms.uIntensity.value=t},getBase:()=>e.uniforms.uBase.value,setBase:t=>{e.uniforms.uBase.value=t},getOpacity:()=>e.uniforms.uOpacity.value,setOpacity:t=>{e.uniforms.uOpacity.value=t},setTint:(t,i=t?.8:0)=>{e.uniforms.uTintStrength.value=t?i:0,t&&e.uniforms.uTint.value.copy(t)},setScaleY:t=>{n.scale.y=t,n.matrixAutoUpdate||n.updateMatrix()},getLodVisible:()=>e.uniforms.uLodVisible.value>.5,setLodVisible:t=>{e.uniforms.uLodVisible.value=t?1:0}}}function dw(n,e){if(n.size!==e.size)return!1;for(const t of n)if(!e.has(t))return!1;return!0}const _r={outcome:"noop"},qu=5,ju=.07,fw={"2d":.02,"2.5d":.3},Cs=1e3;class pw{constructor(e,t,i,r){P(this,"state",{kind:"ASSEMBLED"});P(this,"inFlight",null);P(this,"viewChanged",null);P(this,"disposed",!1);P(this,"renderQuality","high");P(this,"floors");P(this,"rooms");P(this,"floorPosY");P(this,"floorOpacity");P(this,"roomScaleY");P(this,"H");P(this,"footprintDiag");P(this,"R0");this.sceneIndex=e,this.cameraDirector=t,this.tween=i,this.floors=e.floors,this.rooms=e.rooms,this.floorPosY=this.floors.map(o=>o.baseElevation),this.floorOpacity=this.floors.map(()=>1),this.roomScaleY=this.rooms.map(()=>1);const s=new Xt().setFromObject(r).getSize(new C);this.H=s.y,this.footprintDiag=Math.hypot(s.x,s.z),this.R0=this.footprintDiag*1.5}setViewChangedListener(e){this.viewChanged=e}getView(){return{...this.state}}setRenderQuality(e){this.renderQuality=e;for(let t=0;t<this.floors.length;t++)this.applyVisibility(this.floors[t],this.floorOpacity[t])}explode(e,t=Cs){return this.state.kind==="ISOLATED"||this.state.kind==="FLATTENED"||this.state.kind==="EXPLODED"&&this.state.factor===e?Promise.resolve(_r):this.run({kind:"EXPLODED",factor:e},t)}isolate(e,t=Cs){return this.state.kind==="ISOLATED"&&this.state.floorId===e?Promise.resolve(_r):this.run({kind:"ISOLATED",floorId:e},t)}flatten(e,t,i=Cs){return this.state.kind==="FLATTENED"&&this.state.floorId===e&&this.state.style===t?Promise.resolve(_r):this.run({kind:"FLATTENED",floorId:e,style:t},i)}reassemble(e=Cs){return this.state.kind==="ASSEMBLED"?Promise.resolve(_r):this.run({kind:"ASSEMBLED"},e)}dispose(){var e;this.disposed||(this.disposed=!0,(e=this.inFlight)==null||e.supersede(),this.inFlight=null,this.viewChanged=null)}run(e,t){var h,d;if(this.disposed)return Promise.resolve({outcome:"superseded"});(h=this.inFlight)==null||h.supersede();const i={posY:[...this.floorPosY],opacity:[...this.floorOpacity],scale:[...this.roomScaleY]},r=this.computeTargets(e);this.state=e,(d=this.viewChanged)==null||d.call(this,this.getView());let s=!1,o;const a=new Promise(f=>o=f),c=this.tween.run(t,f=>this.applyLerp(i,r,f)),l={supersede:()=>{}},u=f=>{s||(s=!0,this.inFlight===l&&(this.inFlight=null),o({outcome:f}))};return l.supersede=()=>{c.cancel(),u("superseded")},this.inFlight=l,c.done.then(f=>{f==="completed"&&u("completed")}),this.cameraDirector.flyTo(new C(0,r.camera.targetY,0),this.cameraDirector.orbitSpherical().azimuthDeg,r.camera.elevationDeg,r.camera.radius,{durationMs:t}),a}computeTargets(e){const t=this.floors.map(s=>s.baseElevation),i=this.floors.map(()=>1),r=this.rooms.map(()=>1);switch(e.kind){case"ASSEMBLED":break;case"EXPLODED":for(let s=0;s<this.floors.length;s++)t[s]=this.floors[s].baseElevation+s*qu*e.factor;break;case"ISOLATED":this.ghostOthers(e.floorId,i);break;case"FLATTENED":this.ghostOthers(e.floorId,i);for(let s=0;s<this.rooms.length;s++)this.rooms[s].floorId===e.floorId&&(r[s]=fw[e.style]);break}return{posY:t,opacity:i,scale:r,camera:this.framingFor(e)}}ghostOthers(e,t){for(let i=0;i<this.floors.length;i++)this.floors[i].id!==e&&(t[i]=ju)}framingFor(e){const t=this.floors.length;switch(e.kind){case"ASSEMBLED":return{targetY:this.H*.45,elevationDeg:22,radius:this.R0};case"EXPLODED":return{targetY:(this.floors[t-1].baseElevation+(t-1)*qu*e.factor)*.5+this.H*.1,elevationDeg:18,radius:this.R0*(1+.5*e.factor)};case"ISOLATED":{const i=this.sceneIndex.floor(e.floorId);return{targetY:i?i.baseElevation+2:this.H*.45,elevationDeg:30,radius:this.footprintDiag*1.35}}case"FLATTENED":{const i=this.sceneIndex.floor(e.floorId);return{targetY:i?i.baseElevation:0,elevationDeg:88,radius:this.footprintDiag*1.25}}}}applyLerp(e,t,i){var r;for(let s=0;s<this.floors.length;s++){const o=_t.lerp(e.posY[s],t.posY[s],i);this.floorPosY[s]=o,this.floors[s].group.position.y=o;const a=_t.lerp(e.opacity[s],t.opacity[s],i);this.floorOpacity[s]=a,this.applyOpacity(this.floors[s],a)}for(let s=0;s<this.rooms.length;s++){const o=_t.lerp(e.scale[s],t.scale[s],i);this.roomScaleY[s]=o,this.rooms[s].visual.setScaleY(o),(r=this.rooms[s].edgeVisual)==null||r.setScaleY(o)}this.sceneIndex.markTransformsChanged()}applyOpacity(e,t){this.applyVisibility(e,t);for(const i of e.ghosts)i.holo?i.holo.uniforms.uOpacity.value=t:i.line?i.line.opacity=i.baseOpacity*t:i.opacityShader&&(i.opacityShader.uniforms.uOpacity.value=t)}applyVisibility(e,t){e.group.visible=!(this.renderQuality==="low"&&t<=ju)}}const mw=new ke("#ff9a3c"),gw=1.6,vw=.06,_w=.9;class xw{constructor(e){P(this,"selected",null);P(this,"restore",null);this.sceneIndex=e}get current(){return this.selected?{...this.selected}:null}select(e){var c,l;this.clearHighlight();const t=this.sceneIndex.room(e.id);if(!t)return!1;const i=t.visual,r=i.getColor(),s=i.getIntensity(),o=i.getBase(),a=(c=t.edgeVisual)==null?void 0:c.getOpacity();return i.setColor(mw),i.setIntensity(gw),i.setBase(vw),(l=t.edgeVisual)==null||l.setOpacity(_w),this.restore=()=>{var u;i.setColor(r),i.setIntensity(s),i.setBase(o),a!==void 0&&((u=t.edgeVisual)==null||u.setOpacity(a))},this.selected={...e},!0}clear(){const e=this.selected!==null;return this.clearHighlight(),this.selected=null,e}clearHighlight(){var e;(e=this.restore)==null||e.call(this),this.restore=null}}const yw=25;class Sw{constructor(e,t,i,r){P(this,"raycaster",new gx);P(this,"downX",0);P(this,"downY",0);P(this,"onPick");P(this,"disposed",!1);P(this,"onDown",e=>{this.disposed||(this.downX=e.clientX,this.downY=e.clientY)});P(this,"onUp",e=>{var r;if(this.disposed)return;const t=e.clientX-this.downX,i=e.clientY-this.downY;t*t+i*i>yw||(r=this.onPick)==null||r.call(this,this.pickAtNdc(this.ndcFor(e.clientX,e.clientY)))});this.camera=e,this.dom=t,this.root=i,this.onPick=r,this.dom.addEventListener("pointerdown",this.onDown),this.dom.addEventListener("pointerup",this.onUp)}dispose(){this.disposed||(this.disposed=!0,this.dom.removeEventListener("pointerdown",this.onDown),this.dom.removeEventListener("pointerup",this.onUp),this.onPick=null)}pickAtNdc(e){if(this.disposed)return null;this.raycaster.setFromCamera(e,this.camera);for(const t of this.raycaster.intersectObject(this.root,!0)){const i=Mw(t.object,t.instanceId);if(i)return i}return null}ndcFor(e,t){const i=this.dom.getBoundingClientRect();return new ie((e-i.left)/i.width*2-1,-((t-i.top)/i.height)*2+1)}}function Mw(n,e){if(e!==void 0){const i=n.userData.instanceRoomRefs,r=i==null?void 0:i[e];if((r==null?void 0:r.type)==="room")return{...r}}let t=n;for(;t;){const i=t.userData.entityRef;if(i&&i.type==="room")return i;t=t.parent}return null}function nf(n){return typeof n.onFrame=="function"}function bw(n){return typeof n.sampleAsync=="function"}class Ew{constructor(e){P(this,"frames",[]);this.capacity=e}push(e){this.frames.push(e),this.frames.length>this.capacity&&this.frames.shift()}get size(){return this.frames.length}span(){return this.frames.length===0?null:{from:this.frames[0].time,to:this.frames[this.frames.length-1].time}}nearest(e){if(this.frames.length===0)return null;let t=0,i=this.frames.length-1;for(;t<i;){const o=t+i>>1;this.frames[o].time<e?t=o+1:i=o}const r=this.frames[t],s=this.frames[t-1];return s&&Math.abs(s.time-e)<=Math.abs(r.time-e)?s:r}}const ww=6e4,Tw=1440,Rw=6e4,Is=["temperature","humidity","lux","power","occupancy"],ea=250,Aw=250;class Cw{constructor(e,t=Date.now()){P(this,"mode","live");P(this,"playbackSpeed",1);P(this,"buffer",new Ew(Tw));P(this,"simTime");P(this,"lastRealMs",performance.now());P(this,"lastSampleRealMs",Number.NEGATIVE_INFINITY);P(this,"lastBufferedSim",0);P(this,"scrubTime",0);P(this,"sink",null);P(this,"frameListeners",new Set);P(this,"liveFrameListeners",new Set);P(this,"onChange",null);P(this,"pushProvider",null);P(this,"asyncProvider",null);P(this,"offPushFrame",null);P(this,"performanceSamples",[]);P(this,"pullInFlight",!1);P(this,"liveGeneration",0);P(this,"requestSerial",0);P(this,"disposed",!1);this.provider=e,this.simTime=t,nf(e)?(this.pushProvider=e,this.offPushFrame=e.onFrame(i=>this.receiveLiveFrame(i)),e.connect()):bw(e)&&(this.asyncProvider=e)}setSink(e){this.sink=e}addFrameListener(e){return this.frameListeners.add(e),()=>this.frameListeners.delete(e)}addLiveFrameListener(e){return this.liveFrameListeners.add(e),()=>this.liveFrameListeners.delete(e)}deliver(e){var t;(t=this.sink)==null||t.call(this,e);for(const i of this.frameListeners)i(e)}setChangeListener(e){this.onChange=e}getState(){return{mode:this.mode,time:this.currentTime(),playbackSpeed:this.playbackSpeed}}getPerformanceStats(){var l,u;const e=performance.now();this.trimPerformanceSamples(e);const t=this.performanceSamples,i=t.length>1?Math.max(1e3,e-t[0].at):1e3,r=t.filter(h=>h.source!=="push").length,s=t.filter(h=>h.source==="worker").length,o=t.filter(h=>h.source==="push").length,a=t.reduce((h,d)=>h+d.readings,0),c=t.filter(h=>h.source!=="push");return{pullFrames:r,workerFrames:s,pushFrames:o,samplingMode:this.pushProvider?"push":((l=this.asyncProvider)==null?void 0:l.getExecutionMode())??"main",sampleInFlight:this.pullInFlight,samplesPerSecond:t.length*1e3/i,readingsPerSecond:a*1e3/i,averageSampleMs:c.length?c.reduce((h,d)=>h+d.sampleMs,0)/c.length:0,lastFrameReadings:((u=t.at(-1))==null?void 0:u.readings)??0}}currentTime(){return this.mode==="scrub"?this.scrubTime:this.simTime}setPlaybackSpeed(e){this.playbackSpeed=e,this.emit()}setTimeRange(e){this.liveGeneration+=1,e==="live"?(this.mode="live",this.lastRealMs=performance.now(),this.lastSampleRealMs=Number.NEGATIVE_INFINITY):(this.mode="scrub",this.scrubTime=Iw(e.to)),this.emit()}tick(e=performance.now()){if(this.mode==="live"){if(this.pushProvider)return;const t=Math.min(Math.max(0,e-this.lastRealMs),Aw);if(this.lastRealMs=e,this.simTime+=t/1e3*ww*this.playbackSpeed,e-this.lastSampleRealMs<ea||this.asyncProvider&&this.pullInFlight)return;this.advanceSampleDeadline(e);const i=performance.now();if(this.asyncProvider)this.sampleLiveAsync(this.asyncProvider,this.simTime,i);else{const r=this.provider.sample(Is,this.simTime);this.acceptLivePullFrame(r,"pull",performance.now()-i)}}}emit(){var t;const e=this.frameAt(this.currentTime());this.deliver(e),(t=this.onChange)==null||t.call(this,this.getState(),e)}frameAt(e){const t=this.buffer.span();if(this.mode==="scrub"&&t&&e>=t.from&&e<=t.to){const i=this.buffer.nearest(e);if(i)return i}return this.provider.sample(Is,e)}refresh(){this.emit()}currentFrame(){return this.frameAt(this.currentTime())}history(e,t=48){const i=this.currentTime(),r=i-e*36e5,s=Math.max(6e4,(i-r)/t);return this.provider.query(Is,{from:r,to:i},s)}bufferSpan(){return this.buffer.span()}dispose(){var e;this.disposed=!0,this.liveGeneration+=1,(e=this.offPushFrame)==null||e.call(this),this.offPushFrame=null,this.pushProvider=null,this.asyncProvider=null,this.pullInFlight=!1,this.performanceSamples=[],this.frameListeners.clear(),this.liveFrameListeners.clear(),this.sink=null,this.onChange=null}receiveLiveFrame(e){var t;if(this.recordPerformanceSample(e,"push",0),this.simTime=e.time,this.bufferFrame(e),this.mode==="live"){this.deliver(e);for(const i of this.liveFrameListeners)i(e);(t=this.onChange)==null||t.call(this,this.getState(),e)}}sampleLiveAsync(e,t,i){const r=this.liveGeneration,s=++this.requestSerial;this.pullInFlight=!0,e.sampleAsync(Is,t).then(o=>{if(this.disposed||r!==this.liveGeneration||this.mode!=="live")return;const a=e.getExecutionMode()==="worker"?"worker":"pull";this.acceptLivePullFrame(o,a,performance.now()-i)}).catch(()=>{this.lastSampleRealMs=Number.NEGATIVE_INFINITY}).finally(()=>{s===this.requestSerial&&(this.pullInFlight=!1)})}acceptLivePullFrame(e,t,i){this.recordPerformanceSample(e,t,i),this.bufferFrame(e),this.deliver(e);for(const r of this.liveFrameListeners)r(e)}advanceSampleDeadline(e){if(!Number.isFinite(this.lastSampleRealMs)){this.lastSampleRealMs=e;return}this.lastSampleRealMs+=ea,e-this.lastSampleRealMs>ea*2&&(this.lastSampleRealMs=e)}bufferFrame(e){e.time-this.lastBufferedSim<Rw&&this.lastBufferedSim!==0||(this.buffer.push(e),this.lastBufferedSim=e.time)}recordPerformanceSample(e,t,i){const r=performance.now();this.performanceSamples.push({at:r,readings:e.readings.length,sampleMs:i,source:t}),this.trimPerformanceSamples(r)}trimPerformanceSamples(e){var i;const t=e-5e3;for(;((i=this.performanceSamples[0])==null?void 0:i.at)<t;)this.performanceSamples.shift()}}function Iw(n){return typeof n=="number"?n:n instanceof Date?n.getTime():new Date(n).getTime()}const nr=[18,28];function Uc(n){switch(n){case"guest":return["light","hvac","blind"];case"lobby":case"amenity":return["light","hvac"];case"corridor":return["light"];case"plant":return[]}}function rf(n){return{light:Uc(n).includes("light"),hvacSetpoint:24,blind:0}}class Pw{constructor(e){P(this,"entries",new Map);P(this,"listeners",new Set);P(this,"batchListeners",new Set);P(this,"batchDepth",0);P(this,"pendingChanges",[]);for(const t of e.floors)for(const i of t.zones){const r=Uc(i.function);if(r.length!==0)for(const s of i.rooms)this.entries.set(s.id,{roomId:s.id,kinds:r,state:rf(i.function)})}}onChange(e){return this.listeners.add(e),()=>this.listeners.delete(e)}onBatch(e){return this.batchListeners.add(e),()=>this.batchListeners.delete(e)}batch(e){this.batchDepth+=1;try{return e()}finally{if(this.batchDepth-=1,this.batchDepth===0&&this.pendingChanges.length>0){const t=this.pendingChanges.splice(0);this.emitBatch(t)}}}has(e){return this.entries.has(e)}get(e){const t=this.entries.get(e);return t?ii(t):void 0}list(){return[...this.entries.values()].map(ii)}supports(e,t){var i;return((i=this.entries.get(e))==null?void 0:i.kinds.includes(t))??!1}set(e,t,i,r="local"){const s=this.entries.get(e),o=ta(s,t);if(t==="light"?s.state.light=!!i:t==="hvac"?s.state.hvacSetpoint=Ju(Number(i),nr[0],nr[1]):s.state.blind=Ju(Number(i),0,1),ta(s,t)===o)return ii(s);const a=ta(s,t),c={roomId:e,kind:t,value:a,origin:r};for(const l of this.listeners)l(ii(s),{...c});return this.batchDepth>0?this.pendingChanges.push(c):this.emitBatch([c]),ii(s)}emitBatch(e){if(e.length===0)return;const i=[...new Set(e.map(r=>r.roomId))].map(r=>this.entries.get(r)).filter(r=>r!==void 0).map(ii);for(const r of this.batchListeners)r({entries:i.map(ii),changes:e.map(s=>({...s}))})}}function ii(n){return{roomId:n.roomId,kinds:[...n.kinds],state:{...n.state}}}function Ju(n,e,t){return n<e?e:n>t?t:n}function ta(n,e){return e==="light"?n.state.light:e==="hvac"?n.state.hvacSetpoint:n.state.blind}const HT=[{id:"guest-light-trim",label:"Guest light trim",hint:"Turn off guest-room lighting; public and corridor lights stay on."},{id:"hvac-eco",label:"HVAC eco +2°",hint:"Raise HVAC targets to 26°C where lower."},{id:"solar-shade",label:"Solar shade",hint:"Close guest-room blinds to reduce daytime cooling load."},{id:"restore-comfort",label:"Restore comfort",hint:"Return controllable rooms to their default light, HVAC, and blind settings."}];class Fw{constructor(e,t){P(this,"rooms",[]);var i;this.controls=t;for(const r of e.floors)for(const s of r.zones)for(const o of s.rooms)this.rooms.push({roomId:o.id,roomName:o.name,floorId:r.id,floorName:r.name,zoneId:s.id,zoneName:s.name,zoneFunction:s.function,powerDeviceId:(i=o.sensors.find(a=>a.channel==="power"))==null?void 0:i.deviceId})}summary(e,t){const i=new Map,r=new Map,s=[];let o=0;for(const c of this.scopedRooms(t)){if(!c.powerDeviceId)continue;const l=Ps(e.value(c.powerDeviceId)??0);o+=l;const u=i.get(c.floorId)??{floorId:c.floorId,name:c.floorName,totalKw:0,meteredRooms:0};u.totalKw+=l,u.meteredRooms+=1,i.set(c.floorId,u);const h=r.get(c.zoneId)??{zoneId:c.zoneId,name:c.zoneName,function:c.zoneFunction,totalKw:0};h.totalKw+=l,r.set(c.zoneId,h),s.push({roomId:c.roomId,roomName:c.roomName,floorId:c.floorId,floorName:c.floorName,zoneName:c.zoneName,kw:l})}const a=this.scopedControls(t);return{time:e.time,totalKw:Ps(o),controllableRooms:a.length,activeLights:a.filter(c=>c.kinds.includes("light")&&c.state.light).length,byFloor:[...i.values()].map(c=>({...c,totalKw:Ps(c.totalKw)})).sort((c,l)=>c.floorId.localeCompare(l.floorId)),byZone:[...r.values()].map(c=>({...c,totalKw:Ps(c.totalKw)})).sort((c,l)=>l.totalKw-c.totalKw),topLoads:s.sort((c,l)=>l.kw-c.kw).slice(0,6)}}apply(e,t){const i=new Set;let r=0;const s=(o,a,c)=>{!o.kinds.includes(a)||Dw(o,a,c)||(this.controls.set(o.roomId,a,c),i.add(o.roomId),r+=1)};return this.controls.batch(()=>{for(const o of this.scopedControls(t)){const a=this.roomById(o.roomId);if(a)switch(e){case"guest-light-trim":a.zoneFunction==="guest"&&s(o,"light",!1);break;case"hvac-eco":a.zoneFunction!=="corridor"&&a.zoneFunction!=="plant"&&s(o,"hvac",Math.max(o.state.hvacSetpoint,26));break;case"solar-shade":a.zoneFunction==="guest"&&s(o,"blind",1);break;case"restore-comfort":{const c=rf(a.zoneFunction);s(o,"light",c.light),s(o,"hvac",c.hvacSetpoint),s(o,"blind",c.blind);break}}}}),{action:e,floorId:t,changedControls:r,changedRooms:[...i]}}scopedRooms(e){return e?this.rooms.filter(t=>t.floorId===e):this.rooms}scopedControls(e){return this.controls.list().filter(t=>{var i;return!e||((i=this.roomById(t.roomId))==null?void 0:i.floorId)===e})}roomById(e){return this.rooms.find(t=>t.roomId===e)}}function Dw(n,e,t){return e==="light"?n.state.light===!!t:e==="hvac"?n.state.hvacSetpoint===Number(t):n.state.blind===Number(t)}function Ps(n){return Math.round(n*100)/100}const sf=[{id:"temp-high",channel:"temperature",op:">",threshold:29,severity:"warning",label:"High temperature"},{id:"power-spike",channel:"power",op:">",threshold:5,severity:"critical",label:"Power spike"},{id:"crowding",channel:"occupancy",op:">",threshold:3,severity:"warning",label:"High occupancy"}],Ku=.08;class Lw{constructor(e,t=sf){P(this,"rules",new Map);P(this,"active",new Map);P(this,"devices",[]);for(const i of e.floors)for(const r of i.zones)for(const s of r.rooms)for(const o of s.sensors)this.devices.push({deviceId:o.deviceId,channel:o.channel,unit:o.unit,roomId:s.id,roomName:s.name,zoneFn:r.function});for(const i of t)this.rules.set(i.id,{...i})}setRule(e){this.rules.set(e.id,{...e})}clearRule(e){const t=this.rules.delete(e),i=[];for(const r of[...this.active.values()])r.ruleId===e&&(this.active.delete(r.key),i.push({...r}));return{removed:t,cleared:i}}replaceRules(e){const t=new Map(e.map(r=>[r.id,{...r}])),i=[];for(const r of[...this.active.values()])t.has(r.ruleId)||(this.active.delete(r.key),i.push({...r}));return this.rules=t,i}listRules(){return[...this.rules.values()].map(e=>({...e}))}activeAlarms(){return[...this.active.values()].map(e=>({...e}))}alarmingRooms(){const e=new Map;for(const t of this.active.values())(t.severity==="critical"||!e.has(t.roomId))&&e.set(t.roomId,t.severity);return e}evaluate(e){const t=[],i=[],r=new Set;for(const s of this.rules.values())for(const o of this.devices){if(o.channel!==s.channel||s.zoneFunction&&o.zoneFn!==s.zoneFunction)continue;const a=e.value(o.deviceId);if(a==null)continue;const c=`${s.id}|${o.roomId}`,l=this.active.get(c),u=l?s.threshold*(s.op===">"?1-Ku:1+Ku):s.threshold;if(!(s.op===">"?a>u:a<u))continue;if(r.add(c),l){l.value=a;continue}const d={key:c,ruleId:s.id,roomId:o.roomId,roomName:o.roomName,channel:o.channel,value:a,threshold:s.threshold,severity:s.severity,label:s.label,unit:o.unit,since:e.time};this.active.set(c,d),t.push({...d})}for(const[s,o]of[...this.active])r.has(s)||(this.active.delete(s),i.push({...o}));return{raised:t,cleared:i}}reconcile(e){const t=new Map(e.map(s=>[s.key,{...s}])),i=[],r=[];for(const s of t.values())this.active.has(s.key)||i.push({...s});for(const s of this.active.values())t.has(s.key)||r.push({...s});return this.active=t,{raised:i,cleared:r}}}class Nw{constructor(e){P(this,"evaluator");P(this,"onRaiseCb",null);P(this,"onClearCb",null);P(this,"onBatchCb",null);P(this,"ruleListeners",new Set);P(this,"revision_",0);this.evaluator=new Lw(e)}onAlarm(e,t,i){this.onRaiseCb=e,this.onClearCb=t,this.onBatchCb=i??null}onRulesChanged(e){return this.ruleListeners.add(e),()=>this.ruleListeners.delete(e)}setRule(e){this.evaluator.setRule(e),this.emitRules()}clearRule(e){const t=this.evaluator.clearRule(e);return this.applyTransitions({raised:[],cleared:t.cleared}),t.removed&&this.emitRules(),t.removed}listRules(){return this.evaluator.listRules()}activeAlarms(){return this.evaluator.activeAlarms()}get revision(){return this.revision_}alarmingRooms(){return this.evaluator.alarmingRooms()}evaluate(e){this.applyTransitions(this.evaluator.evaluate(e))}reconcileSnapshot(e){this.applyTransitions(this.evaluator.reconcile(e))}applyTransitions(e){var t,i,r;for(const s of e.raised)this.revision_+=1,(t=this.onRaiseCb)==null||t.call(this,{...s});for(const s of e.cleared)this.revision_+=1,(i=this.onClearCb)==null||i.call(this,{...s});(e.raised.length>0||e.cleared.length>0)&&((r=this.onBatchCb)==null||r.call(this,{raised:e.raised.map(s=>({...s})),cleared:e.cleared.map(s=>({...s}))}))}emitRules(){const e=this.listRules();for(const t of this.ruleListeners)t(e)}}const Qu=[{id:"morning",label:"Morning",hint:"lights up · blinds open · cool"},{id:"day",label:"Day",hint:"guest rooms dark · public lit"},{id:"evening",label:"Evening",hint:"warm · guest blinds drawn"},{id:"night",label:"Night",hint:"guest floors dark · corridors only"},{id:"away",label:"Away / Eco",hint:"everything off · setback"}];function Uw(n,e){switch(n){case"morning":return{light:!0,blind:0,hvac:23};case"day":return{light:e!=="guest",blind:0,hvac:24};case"evening":return{light:!0,blind:e==="guest"?1:0,hvac:24};case"night":return{light:e==="corridor",blind:1,hvac:25};case"away":return{light:!1,blind:1,hvac:26};default:return{}}}function Ow(n,e){const t=[];for(const i of e.floors)for(const r of i.zones){const s=Uc(r.function);if(s.length===0)continue;const o=Uw(n,r.function);for(const a of r.rooms)s.includes("light")&&o.light!==void 0&&t.push({roomId:a.id,kind:"light",value:o.light}),s.includes("blind")&&o.blind!==void 0&&t.push({roomId:a.id,kind:"blind",value:o.blind}),s.includes("hvac")&&o.hvac!==void 0&&t.push({roomId:a.id,kind:"hvac",value:o.hvac})}return t}const zw=[{hour:6,scene:"morning"},{hour:10,scene:"day"},{hour:18,scene:"evening"},{hour:22,scene:"night"}];class kw{constructor(e,t,i){P(this,"lastScheduledSolarTime",null);this.building=e,this.controls=t,this.lon=i}list(){return Qu.map(e=>({...e}))}has(e){return Qu.some(t=>t.id===e)}apply(e){const t=Ow(e,this.building);let i=0;return this.controls.batch(()=>{for(const r of t){if(!this.controls.supports(r.roomId,r.kind))continue;const s=this.controls.get(r.roomId);!s||Bw(s,r.kind)===r.value||(this.controls.set(r.roomId,r.kind,r.value),i+=1)}}),i}tickSchedule(e,t){const i=e+this.lon/15*36e5;if(this.lastScheduledSolarTime===null){this.lastScheduledSolarTime=i;return}if(i<=this.lastScheduledSolarTime){this.lastScheduledSolarTime=i;return}const r=Math.floor(this.lastScheduledSolarTime/na),s=Math.floor(i/na);for(let o=r;o<=s;o+=1)for(const a of zw){const c=o*na+a.hour*36e5;c>this.lastScheduledSolarTime&&c<=i&&t(a.scene)}this.lastScheduledSolarTime=i}}const na=24*36e5;function Bw(n,e){return e==="light"?n.state.light:e==="hvac"?n.state.hvacSetpoint:n.state.blind}const eh=[{name:"reassemble",args:{durationMs:1200},hold:400},{name:"setMode",args:{mode:"default"},hold:2600},{name:"orbitTo",args:{azimuthDeg:210,elevationDeg:26},hold:900},{name:"setMode",args:{mode:"electricity"},hold:3200},{name:"explode",args:{factor:1},hold:2800},{name:"setMode",args:{mode:"environment"},hold:2800},{name:"reassemble",args:{},hold:400},{name:"setMode",args:{mode:"occupancy"},hold:2400},{name:"isolateFloor",args:{floorId:"F4"},hold:2600},{name:"enterRoom",args:{roomId:"F4-R03"},hold:3600},{name:"exitRoom",args:{},hold:1400},{name:"setMode",args:{mode:"default"},hold:400},{name:"reassemble",args:{},hold:2600}];class Vw{constructor(e){P(this,"running",!1);P(this,"timer");P(this,"step",0);P(this,"onChange",null);this.ui=e}isRunning(){return this.running}onTourChanged(e){this.onChange=e}start(){var e;this.running||(this.running=!0,this.step=0,(e=this.onChange)==null||e.call(this,!0),this.advance())}stop(){var e;this.running&&(this.running=!1,window.clearTimeout(this.timer),(e=this.onChange)==null||e.call(this,!1))}async advance(){if(!this.running)return;const e=eh[this.step%eh.length];this.step++;try{await this.ui.call(e.name,e.args)}catch{}this.running&&(this.timer=window.setTimeout(()=>void this.advance(),e.hold))}}const ia=1e-4,Hw={flyIn:.22,flyOut:.2,select:.09,mode:.12,layoutOpen:.18,layoutClose:.18,floor:.12,floorPlan:.14,control:.075,reject:.16,alarm:.6,alarmCritical:.45};class Gw{constructor(){P(this,"ctx",null);P(this,"master",null);P(this,"spaceInput",null);P(this,"noiseTexture",null);P(this,"lastCueAt",new Map);P(this,"selectionTimer",null);P(this,"roomExitTimer",null);P(this,"lastView",{kind:"ASSEMBLED"});P(this,"enabled",!0);P(this,"volume",.5);P(this,"subscriptions",[]);P(this,"transientNodes",new Set);P(this,"disposed",!1)}getState(){return{enabled:this.enabled,volume:this.volume}}setAudio(e){if(e.enabled!==void 0&&(this.enabled=e.enabled),e.volume!==void 0&&(this.volume=Math.max(0,Math.min(1,e.volume))),this.master&&this.ctx){const t=this.ctx.currentTime;this.master.gain.cancelScheduledValues(t),this.master.gain.setTargetAtTime(this.enabled?this.volume:0,t,.025)}return this.getState()}attach(e){this.disposed||(this.detach(),this.subscriptions.push(e.on("roomFocusChanged",({roomId:t})=>{t?(this.cancelSelection(),this.cancelRoomExit(),this.play("flyIn")):this.queueRoomExit()})),this.subscriptions.push(e.on("selectionChanged",({ref:t})=>{(t==null?void 0:t.type)==="room"?this.queueSelection():this.cancelSelection()})),this.subscriptions.push(e.on("modeChanged",()=>this.play("mode"))),this.subscriptions.push(e.on("viewChanged",({view:t})=>this.playViewChange(t))),this.subscriptions.push(e.on("controlsChanged",()=>this.play("control"))),this.subscriptions.push(e.on("commandRejected",()=>this.play("reject"))),this.subscriptions.push(e.on("alarmsChanged",({raised:t})=>{t.length!==0&&this.play(t.some(i=>i.severity==="critical")?"alarmCritical":"alarm")})))}dispose(){var t,i;if(this.disposed)return;this.disposed=!0,this.detach(),this.cancelSelection(),this.cancelRoomExit(),this.lastCueAt.clear(),this.releaseTransient([...this.transientNodes]),(t=this.master)==null||t.disconnect(),(i=this.spaceInput)==null||i.disconnect();const e=this.ctx;this.master=null,this.spaceInput=null,this.noiseTexture=null,this.ctx=null,e&&e.state!=="closed"&&e.close().catch(()=>{})}unlock(){var e;this.ensureContext(),((e=this.ctx)==null?void 0:e.state)==="suspended"&&this.ctx.resume()}ensureContext(){if(this.ctx)return;const e=window.AudioContext??window.webkitAudioContext;if(!e)return;const t=new e,i=t.createGain();i.gain.setValueAtTime(this.enabled?this.volume:0,t.currentTime);const r=t.createDynamicsCompressor();r.threshold.setValueAtTime(-20,t.currentTime),r.knee.setValueAtTime(18,t.currentTime),r.ratio.setValueAtTime(8,t.currentTime),r.attack.setValueAtTime(.004,t.currentTime),r.release.setValueAtTime(.16,t.currentTime),i.connect(r).connect(t.destination);const s=t.createDelay(.32);s.delayTime.setValueAtTime(.105,t.currentTime);const o=t.createGain();o.gain.setValueAtTime(.2,t.currentTime);const a=t.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(1800,t.currentTime);const c=t.createGain();c.gain.setValueAtTime(.16,t.currentTime),s.connect(o).connect(s),s.connect(a).connect(c).connect(i),this.ctx=t,this.master=i,this.spaceInput=s}play(e,t=4){if(!this.enabled||(this.ensureContext(),!this.ctx||this.ctx.state!=="running"))return;const i=this.ctx.currentTime,r=this.lastCueAt.get(e);if(!(r!==void 0&&i-r<Hw[e]))switch(this.lastCueAt.set(e,i),e){case"flyIn":this.transition(i,"in");break;case"flyOut":this.transition(i,"out");break;case"select":this.selection(i);break;case"mode":this.modeChange(i);break;case"layoutOpen":this.layout(i,!0);break;case"layoutClose":this.layout(i,!1);break;case"floor":this.floorIndex(i,t);break;case"floorPlan":this.floorPlan(i,t);break;case"control":this.confirmation(i);break;case"reject":this.rejection(i);break;case"alarm":this.clinicalAlert(i,!1);break;case"alarmCritical":this.clinicalAlert(i,!0);break}}air(e,t,i,r,s,o=1.2){const a=this.ctx,c=a.createBufferSource();c.buffer=this.getNoiseTexture();const l=a.createBiquadFilter();l.type="bandpass",l.Q.setValueAtTime(o,e),l.frequency.setValueAtTime(r,e),l.frequency.exponentialRampToValueAtTime(s,e+t);const u=this.envelope(e,t,i,Math.min(.04,t*.2)),h=this.cueBus(.13);c.connect(l).connect(u).connect(h.input),this.trackTransient(c,[c,l,u,...h.nodes]),c.start(e),c.stop(e+t+.04)}tone(e,t,i,r,s,o){const c=this.ctx.createBiquadFilter();c.type="bandpass",c.Q.setValueAtTime(.85,e),c.frequency.setValueAtTime(Math.max(180,o*.65),e),c.frequency.exponentialRampToValueAtTime(o,e+r);const l=this.envelope(e,r,s,Math.min(.018,r*.18)),u=this.cueBus(.11);c.connect(l).connect(u.input);const h=this.partial(e,t,i,r,"sine",1,1,0,c),d=this.partial(e,t,i,r,"triangle",2.01,.19,7,c);this.trackTransient(d.source,[c,l,...u.nodes,...h.nodes,...d.nodes])}resonance(e,t,i,r,s,o){const c=this.ctx.createBiquadFilter();c.type="lowpass",c.Q.setValueAtTime(.72,e),c.frequency.setValueAtTime(Math.max(260,o*.42),e),c.frequency.exponentialRampToValueAtTime(o,e+r);const l=this.envelope(e,r,s,Math.min(.045,r*.22)),u=this.cueBus(.085);c.connect(l).connect(u.input);const h=this.partial(e,t,i,r,"sine",1,.74,-4,c),d=this.partial(e,t,i,r,"sine",1.004,.27,5,c),f=this.partial(e,t,i,r,"triangle",1.5,.12,-3,c);this.trackTransient(f.source,[c,l,...u.nodes,...h.nodes,...d.nodes,...f.nodes])}partial(e,t,i,r,s,o,a,c,l){const u=this.ctx,h=u.createOscillator();h.type=s,h.frequency.setValueAtTime(t*o,e),h.frequency.exponentialRampToValueAtTime(i*o,e+r),h.detune.setValueAtTime(c,e);const d=u.createGain();return d.gain.setValueAtTime(a,e),h.connect(d).connect(l),h.start(e),h.stop(e+r+.05),{source:h,nodes:[h,d]}}envelope(e,t,i,r){const o=this.ctx.createGain(),a=e+Math.max(.004,Math.min(r,t*.32)),c=Math.max(a+.004,e+t*.58);return o.gain.setValueAtTime(ia,e),o.gain.exponentialRampToValueAtTime(i,a),o.gain.exponentialRampToValueAtTime(Math.max(ia,i*.58),c),o.gain.exponentialRampToValueAtTime(ia,e+t),o}cueBus(e){const t=this.ctx,i=t.createGain(),r=[i];if(i.gain.setValueAtTime(1,t.currentTime),i.connect(this.master),this.spaceInput){const s=t.createGain();r.push(s),s.gain.setValueAtTime(e,t.currentTime),i.connect(s).connect(this.spaceInput)}return{input:i,nodes:r}}trackTransient(e,t){for(const i of t)this.transientNodes.add(i);e.addEventListener("ended",()=>this.releaseTransient(t),{once:!0})}releaseTransient(e){for(const t of e){try{t.disconnect()}catch{}this.transientNodes.delete(t)}}getNoiseTexture(){if(this.noiseTexture)return this.noiseTexture;const e=this.ctx,t=e.createBuffer(1,Math.ceil(e.sampleRate*1.2),e.sampleRate),i=t.getChannelData(0);let r=1597463007,s=0;for(let o=0;o<i.length;o++){r^=r<<13,r^=r>>>17,r^=r<<5;const a=(r>>>0)/4294967295*2-1;s=s*.985+a*.015,i[o]=a*.42+s*.58}return this.noiseTexture=t,t}transition(e,t){t==="in"?(this.air(e,.56,.024,360,2900,.78),this.resonance(e,118,176,.54,.052,820),this.resonance(e+.075,260,420,.42,.029,1550),this.tone(e+.31,620,760,.18,.015,2200)):(this.resonance(e,180,120,.48,.046,760),this.resonance(e+.055,410,268,.35,.025,1350),this.air(e+.07,.42,.018,2500,380,.82))}selection(e){this.air(e,.16,.011,740,1750,1.4),this.resonance(e,320,445,.22,.027,1120),this.tone(e+.07,505,570,.14,.011,1650)}modeChange(e){this.tone(e,280,420,.18,.046,1500),this.tone(e+.095,420,630,.22,.052,2200)}layout(e,t){const i=t?74:132,r=t?132:76;this.air(e,.68,.02,t?280:2600,t?2450:360,.75),this.resonance(e,i,r,.68,.048,520),this.resonance(e+.12,t?190:350,t?338:205,.45,.024,1240),this.tone(e+.36,t?470:690,t?660:430,.22,.012,2050)}floorIndex(e,t){const i=150*Math.pow(2,(Math.max(1,Math.min(12,t))-1)/15);this.air(e,.24,.012,460,1450,1.05),this.resonance(e,i*.72,i,.29,.032,880),this.resonance(e+.105,i*1.28,i*1.5,.2,.018,1420)}floorPlan(e,t){const i=150*Math.pow(2,(Math.max(1,Math.min(12,t))-1)/15);this.air(e,.34,.014,1900,600,.88),this.resonance(e,i*1.5,i,.34,.03,980),this.tone(e+.14,i*2.1,i*1.82,.19,.013,1550)}confirmation(e){this.air(e,.075,.018,1200,3300,3.1),this.tone(e,600,860,.11,.04,2400)}rejection(e){this.air(e,.3,.024,900,300,1.8),this.tone(e,210,150,.14,.06,560),this.tone(e+.17,180,126,.16,.048,480)}clinicalAlert(e,t){const i=t?[430,610,455]:[520,660],r=t?.155:.2;this.air(e,t?.55:.4,t?.04:.028,780,2300,1.6),i.forEach((s,o)=>{const a=o%2===0?s:s*.9;this.tone(e+o*r,a,s*1.08,r*.82,t?.065:.05,t?2050:1750)})}playViewChange(e){this.cancelRoomExit();const t=this.lastView;switch(this.lastView=e,e.kind){case"ASSEMBLED":t.kind!=="ASSEMBLED"&&this.play("layoutClose");break;case"EXPLODED":this.play(e.factor<(t.kind==="EXPLODED"?t.factor:0)?"layoutClose":"layoutOpen");break;case"ISOLATED":this.play("floor",this.floorNumber(e.floorId));break;case"FLATTENED":this.play("floorPlan",this.floorNumber(e.floorId));break}}floorNumber(e){const t=/\d+$/.exec(e);return t?Number.parseInt(t[0],10):4}queueSelection(){this.cancelSelection(),this.selectionTimer=setTimeout(()=>{this.selectionTimer=null,this.play("select")},32)}cancelSelection(){this.selectionTimer!==null&&(clearTimeout(this.selectionTimer),this.selectionTimer=null)}queueRoomExit(){this.cancelRoomExit(),this.roomExitTimer=setTimeout(()=>{this.roomExitTimer=null,this.play("flyOut")},44)}cancelRoomExit(){this.roomExitTimer!==null&&(clearTimeout(this.roomExitTimer),this.roomExitTimer=null)}detach(){for(const e of this.subscriptions.splice(0))e()}}const Ww=5e3;function Qs(n){return structuredClone(n)}class Xw{constructor(e=Ww){P(this,"records",[]);P(this,"start",0);if(this.capacity=e,!Number.isSafeInteger(e)||e<1)throw new Error("CommandLog capacity must be a positive safe integer.")}get length(){return this.records.length}record(e,t){const i={ts:Date.now(),name:e,args:Qs(t)};if(this.records.length<this.capacity){this.records.push(i);return}this.records[this.start]=i,this.start=(this.start+1)%this.capacity}entries(){return(this.start===0?this.records:[...this.records.slice(this.start),...this.records.slice(0,this.start)]).map(t=>({ts:t.ts,name:t.name,args:Qs(t.args)}))}toJSON(){return JSON.stringify(this.entries(),null,2)}}const ra=Fe({type:Gt(["building","floor","zone","room","sensor"]),id:Ze(),buildingId:Ze().optional()});class th extends Error{constructor(e,t,i){super(t),this.code=e,this.hint=i,this.name="CommandRejection"}}const Zw=Gt(["orbit","front","top","isometric"]),$w=Gt(["guest-light-trim","hvac-eco","solar-shade","restore-comfort"]),Yw=ar([At(-1),At(1)]),nh=ar([Qe().finite(),Gd(),Hd({offset:!0,local:!0})]),qw=ar([At("live"),Fe({from:nh,to:nh}).superRefine((n,e)=>{rh(n.from)>rh(n.to)&&e.addIssue({code:Kb.custom,path:["from"],message:"Must be on or before to."})})]),jw=Fe({range:qw}),Jw=Pc("kind",[Fe({roomId:Ze(),kind:At("light"),value:zr()}),Fe({roomId:Ze(),kind:At("hvac"),value:Qe().finite().min(nr[0]).max(nr[1])}),Fe({roomId:Ze(),kind:At("blind"),value:Qe().finite().min(0).max(1)})]),sa=Fe({floorId:Ze().optional(),zoneFunction:Gt(["guest","lobby","corridor","plant","amenity"]).optional()}).refine(n=>n.floorId!==void 0||n.zoneFunction!==void 0,{message:"Select at least one of floorId or zoneFunction."}),oa=Fe({force:At(!0),reason:Ze().trim().min(1).max(200),expiresAt:Qe().finite().optional()}),Kw=Pc("kind",[Fe({selector:sa,kind:At("light"),value:zr(),override:oa.optional()}),Fe({selector:sa,kind:At("hvac"),value:Qe().finite().min(nr[0]).max(nr[1]),override:oa.optional()}),Fe({selector:sa,kind:At("blind"),value:Qe().finite().min(0).max(1),override:oa.optional()})]),ih={durationMs:Qe().positive().max(2e4).optional(),radius:Qe().positive().optional()},Li={durationMs:Qe().positive().max(2e4).optional()};class Qw{constructor(e){P(this,"log",new Xw);P(this,"emitter");P(this,"commands",new Map);P(this,"commandListeners",new Set);P(this,"offControlChange",null);P(this,"disposed",!1);P(this,"focusedRoom",null);P(this,"focusRestore",null);P(this,"focusVersion",0);this.deps=e,this.emitter=e.emitter,this.offControlChange=this.deps.controls.onBatch(t=>{for(const i of t.entries)this.emitter.emit("controlChanged",{entry:i});this.emitter.emit("controlsChanged",t)}),this.deps.alarms.onAlarm(t=>this.emitter.emit("alarmRaised",{alarm:t}),t=>this.emitter.emit("alarmCleared",{alarm:t}),t=>this.emitter.emit("alarmsChanged",t)),this.deps.viewStateMachine.setViewChangedListener(t=>{var i,r;this.emitter.emit("viewChanged",{view:t}),(r=(i=this.deps.modeManager.getActiveMode())==null?void 0:i.onViewChanged)==null||r.call(i,t)}),this.deps.timeline.setChangeListener(t=>{this.emitter.emit("dataUpdated",{time:t.time,timeMode:t.mode,playbackSpeed:t.playbackSpeed})}),this.define("setMode","Switch the visualization mode (see listModes for available ids).",Fe({mode:Ze()}),({mode:t})=>{if(!this.deps.modeManager.list().some(s=>s.id===t))throw this.reject("setMode","UNKNOWN_MODE",`No mode '${t}'.`,`Available: ${this.deps.modeManager.list().map(s=>s.id).join(", ")}`);const r=this.deps.modeManager.getActiveId();return this.deps.modeManager.setMode(t).then(()=>{r!==t&&this.emitter.emit("modeChanged",{mode:t})})}),this.define("setAutoRotate","Enable or disable the idle showroom rotation of the building.",Fe({on:zr(),speed:Qe().positive().max(10).optional()}),({on:t,speed:i})=>{this.deps.cameraDirector.setAutoRotate(t,i),this.emitter.emit("autoRotateChanged",{on:t,speed:i})}),this.define("orbitTo","Fly the camera to an orbit position around the building. Azimuth 0 faces north; elevation is degrees above the horizon.",Fe({azimuthDeg:Qe().min(-360).max(360),elevationDeg:Qe().min(0).max(89),...ih}),async t=>{this.leaveRoomForNavigation();const i=await this.deps.cameraDirector.orbitTo(t.azimuthDeg,t.elevationDeg,{durationMs:t.durationMs,radius:t.radius});return i==="completed"&&this.emitter.emit("cameraSettled",{command:"orbitTo"}),{outcome:i}}),this.define("setView","Fly the camera to a named preset view.",Fe({view:Zw,...ih}),async t=>{this.leaveRoomForNavigation();const i=await this.deps.cameraDirector.setView(t.view,{durationMs:t.durationMs,radius:t.radius});return i==="completed"&&this.emitter.emit("cameraSettled",{command:"setView"}),{outcome:i}}),this.define("zoomTo","Cinematic flight framing an entity (or the whole building).",Fe({target:ar([At("building"),ra]),...Li}),t=>{t.target!=="building"&&this.assertEntity(t.target,"zoomTo"),this.leaveRoomForNavigation();const i=this.deps.sceneIndex.boxOf(t.target);return this.deps.cameraDirector.zoomToBox(i,{durationMs:t.durationMs}).then(r=>(r==="completed"&&this.emitter.emit("cameraSettled",{command:"zoomTo"}),{outcome:r}))}),this.define("explode","Separate the floors vertically (0 = assembled … 1 = fully exploded).",Fe({factor:Qe().min(0).max(1),...Li}),({factor:t,durationMs:i})=>(this.leaveRoomForNavigation(),this.deps.viewStateMachine.explode(t,i))),this.define("isolateFloor","Focus a single floor; all other floors fade to ghost wireframe.",Fe({floorId:Ze(),...Li}),({floorId:t,durationMs:i})=>(this.assertFloor(t,"isolateFloor"),this.leaveRoomForNavigation(),this.deps.viewStateMachine.isolate(t,i))),this.define("flattenFloor","Isolate a floor and squash its rooms into a 2D/2.5D floor plan (auto-isolates first).",Fe({floorId:Ze(),style:Gt(["2d","2.5d"]),...Li}),({floorId:t,style:i,durationMs:r})=>(this.assertFloor(t,"flattenFloor"),this.leaveRoomForNavigation(),this.deps.viewStateMachine.flatten(t,i,r))),this.define("sliceFloor","Move the isolated (or flattened) floor focus one level up or down; preserves flatten style when active.",Fe({direction:Yw,...Li}),async({direction:t,durationMs:i})=>{const r=this.deps.buildingIndex.floorIds,s=this.floorSliceAnchor(),o=s?r.indexOf(s)+t:t>0?0:r.length-1,a=r[o];if(!a)return{outcome:"noop",floorId:s??null};this.leaveRoomForNavigation();const c=this.deps.viewStateMachine.getView();return{...c.kind==="FLATTENED"?await this.deps.viewStateMachine.flatten(a,c.style,i):await this.deps.viewStateMachine.isolate(a,i),floorId:a}}),this.define("reassemble","Return every floor to the assembled building and restore the orbit camera.",Fe({...Li}),({durationMs:t})=>(this.leaveRoomForNavigation(),this.deps.viewStateMachine.reassemble(t))),this.define("select","Select a room and highlight it; the highlight survives view transitions.",Fe({ref:ra}),({ref:t})=>{this.assertRoom(t,"select");const i=this.deps.selectionService.select(t);return this.emitter.emit("selectionChanged",{ref:t,info:this.deps.buildingIndex.info(t)}),{changed:i}}),this.define("clearSelection","Drop the current selection and its highlight.",Fe({}),()=>{const t=this.deps.selectionService.clear();return this.emitter.emit("selectionChanged",{ref:null,info:null}),{changed:t}}),this.define("inspect","Return an entity’s identity and sensor bindings from the domain model.",Fe({ref:ra}),({ref:t})=>(this.assertEntity(t,"inspect"),this.deps.buildingIndex.info(t))),this.define("getView","Return the current decomposition view state (PLAN §4.7).",Fe({}),()=>this.deps.viewStateMachine.getView()),this.define("setTimeRange","Follow live data ('live') or scrub to a past instant (freezes on the range's `to` edge).",jw,({range:t})=>(this.deps.timeline.setTimeRange(t),{timeMode:this.deps.timeline.getState().mode})),this.define("setPlaybackSpeed","Multiplier on how fast simulated time advances in live mode.",Fe({x:Qe().positive().max(1e3)}),({x:t})=>(this.deps.timeline.setPlaybackSpeed(t),{playbackSpeed:t})),this.define("setQuality","Pin the render quality tier (high/medium/low); disables auto-downgrade (PLAN §5.1).",Fe({tier:Gt(["high","medium","low"])}),({tier:t})=>(this.deps.quality.setQuality(t),{quality:t})),this.define("enterRoom","Cinematic fly-through into a room; selects it and drops to an interior view.",Fe({roomId:Ze(),durationMs:Qe().positive().max(2e4).optional()}),({roomId:t,durationMs:i})=>{var a,c;this.assertRoom({type:"room",id:t},"enterRoom");const r=++this.focusVersion;this.deps.selectionService.select({type:"room",id:t}),this.emitter.emit("selectionChanged",{ref:{type:"room",id:t},info:this.deps.buildingIndex.info({type:"room",id:t})}),this.focusedRoom=t,this.emitter.emit("roomFocusChanged",{roomId:t}),(a=this.focusRestore)==null||a.call(this);const s=(c=this.deps.sceneIndex.room(t))==null?void 0:c.visual;if(s){const l=s.getOpacity();this.focusRestore=()=>{s.setOpacity(l)},s.setOpacity(.18)}const o=this.deps.sceneIndex.boxOf({type:"room",id:t});return this.deps.cameraDirector.enterRoom(o,{durationMs:i}).then(l=>(l==="superseded"&&r===this.focusVersion&&this.focusedRoom===t&&this.clearRoomFocus(),{outcome:l}))}),this.define("exitRoom","Fly back out of a room to the orbit view (no-op if not focused).",Fe({durationMs:Qe().positive().max(2e4).optional()}),async({durationMs:t})=>this.focusedRoom?(++this.focusVersion,this.clearRoomFocus({abandonCamera:!1}),{outcome:await this.deps.cameraDirector.exitRoom({durationMs:t})}):{outcome:"noop"}),this.define("setControl","Command a room actuator: light (on/off), hvac (setpoint °C), or blind (0 open…1 closed).",Jw,({roomId:t,kind:i,value:r})=>{if(!this.deps.controls.supports(t,i))throw this.reject("setControl","UNKNOWN_ENTITY",`Room '${t}' has no ${i} control.`,"Call getControls to see controllable rooms and their kinds.");const s=this.deps.controls.get(t),o=sh(s,i)!==r,a=this.deps.controls.set(t,i,r).state;return o&&this.deps.timeline.refresh(),{state:a,changed:o}}),this.define("setControls","Batch-command one actuator across rooms selected by floor and/or zone function. Optional force override metadata is logged for server authorization.",Kw,({selector:t,kind:i,value:r,override:s})=>{t.floorId&&this.assertFloor(t.floorId,"setControls");const o=[],a=[];return this.deps.controls.batch(()=>{for(const c of this.deps.buildingIndex.roomsMatching(t)){const{id:l}=c.room;if(!this.deps.controls.supports(l,i))continue;o.push(l);const u=this.deps.controls.get(l);sh(u,i)!==r&&(this.deps.controls.set(l,i,r),a.push(l))}}),a.length>0&&this.deps.timeline.refresh(),{selector:{...t},kind:i,value:r,override:s,roomIds:o,changedRoomIds:a,changed:a.length}}),this.define("getControls","Read actuator state for one room, or every controllable room when roomId is omitted.",Fe({roomId:Ze().optional()}),({roomId:t})=>t?this.deps.controls.get(t)??null:this.deps.controls.list()),this.define("getPowerSummary","Summarize live mock kW by floor and zone, with the highest-draw rooms.",Fe({floorId:Ze().optional()}),({floorId:t})=>(t&&this.assertFloor(t,"getPowerSummary"),this.deps.power.summary(this.deps.timeline.currentFrame(),t))),this.define("getOperationsSnapshot","Read one coherent manager snapshot: scoped room sensors/controls, global alarms, and scoped power.",Fe({floorId:Ze().optional()}),({floorId:t})=>{t&&this.assertFloor(t,"getOperationsSnapshot");const i=this.deps.timeline.currentFrame(),r=this.deps.buildingIndex.roomsMatching({floorId:t}).map(s=>({roomId:s.room.id,roomName:s.room.name,floorId:s.floor.id,floorName:s.floor.name,zoneId:s.zone.id,zoneName:s.zone.name,zoneFunction:s.zone.function,readings:s.room.sensors.map(o=>({channel:o.channel,unit:o.unit,value:i.value(o.deviceId)??null})),controls:this.deps.controls.get(s.room.id)??null}));return{time:i.time,rooms:r,activeAlarms:this.deps.alarms.activeAlarms(),power:this.deps.power.summary(i,t)}}),this.define("applyPowerAction","Apply a scoped mock power-management action: guest light trim, HVAC eco, solar shade, or restore comfort.",Fe({action:$w,floorId:Ze().optional()}),({action:t,floorId:i})=>{i&&this.assertFloor(i,"applyPowerAction");const r=this.deps.power.apply(t,i);return r.changedControls>0&&this.deps.timeline.refresh(),r}),this.define("readRoom","Current sensor readings for a room at the displayed instant (channel, unit, value).",Fe({roomId:Ze()}),({roomId:t})=>{this.assertRoom({type:"room",id:t},"readRoom");const i=this.deps.timeline.currentFrame();return this.deps.buildingIndex.info({type:"room",id:t}).sensors.map(r=>({channel:r.channel,unit:r.unit,value:i.value(r.deviceId)??null}))}),this.define("queryRoom","History series (default 24 h) for each of a room’s sensors — for trends.",Fe({roomId:Ze(),hours:Qe().positive().max(168).optional()}),({roomId:t,hours:i=24})=>{this.assertRoom({type:"room",id:t},"queryRoom");const r=this.deps.timeline.history(i);return this.deps.buildingIndex.info({type:"room",id:t}).sensors.map(s=>({channel:s.channel,unit:s.unit,points:r.map(o=>o.value(s.deviceId)??null)}))}),this.define("listAlarms","Return the alarms currently firing and the configured alarm rules.",Fe({}),()=>({active:this.deps.alarms.activeAlarms(),rules:this.deps.alarms.listRules()})),this.define("setAlarmRule","Add or replace an alarm rule (threshold on a sensor channel).",Fe({id:Ze(),channel:Gt(["temperature","humidity","lux","power","occupancy"]),op:Gt([">","<"]),threshold:Qe().finite(),severity:Gt(["warning","critical"]),label:Ze(),zoneFunction:Gt(["guest","lobby","corridor","plant","amenity"]).optional()}),t=>(this.deps.alarms.setRule(t),{ruleId:t.id})),this.define("clearAlarmRule","Remove an alarm rule and clear any alarms it raised.",Fe({id:Ze()}),({id:t})=>({removed:this.deps.alarms.clearRule(t)})),this.define("setAudio","Toggle audio cues and/or set the cue volume (0–1).",Fe({enabled:zr().optional(),volume:Qe().min(0).max(1).optional()}),t=>{const i=this.deps.audio.setAudio(t);return this.emitter.emit("audioChanged",i),i}),this.define("listScenes","List the available lighting/HVAC scenes.",Fe({}),()=>this.deps.scenes.list()),this.define("applyScene","Apply a named scene — a batch of actuator changes (see listScenes).",Fe({scene:Ze()}),({scene:t})=>{if(!this.deps.scenes.has(t))throw this.reject("applyScene","UNKNOWN_SCENE",`No scene '${t}'.`,`Available: ${this.deps.scenes.list().map(r=>r.id).join(", ")}`);const i=this.deps.scenes.apply(t);return i>0&&this.deps.timeline.refresh(),{scene:t,changed:i}}),this.define("startTour","Begin the choreographed attract-loop tour (any user input stops it).",Fe({}),()=>(this.deps.tour.start(),{running:this.deps.tour.isRunning()})),this.define("stopTour","Stop the attract-loop tour.",Fe({}),()=>(this.deps.tour.stop(),{running:this.deps.tour.isRunning()}))}setMode(e){return this.call("setMode",{mode:e})}getMode(){return this.deps.modeManager.getActiveId()??"none"}listModes(){return this.deps.modeManager.list()}setAutoRotate(e,t){return this.call("setAutoRotate",{on:e,speed:t})}orbitTo(e,t,i={}){return this.call("orbitTo",{azimuthDeg:e,elevationDeg:t,...i})}setView(e,t={}){return this.call("setView",{view:e,...t})}zoomTo(e,t={}){return this.call("zoomTo",{target:e,...t})}explode(e,t={}){return this.call("explode",{factor:e,...t})}isolateFloor(e,t={}){return this.call("isolateFloor",{floorId:e,...t})}flattenFloor(e,t,i={}){return this.call("flattenFloor",{floorId:e,style:t,...i})}sliceFloor(e,t={}){return this.call("sliceFloor",{direction:e,...t})}reassemble(e={}){return this.call("reassemble",{...e})}select(e){return this.call("select",e)}clearSelection(){return this.call("clearSelection",{})}inspect(e){return this.runCommand("inspect",{ref:e})}getView(){return this.runCommand("getView",{})}setTimeRange(e){return this.call("setTimeRange",{range:e})}setPlaybackSpeed(e){return this.call("setPlaybackSpeed",{x:e})}setQuality(e){return this.call("setQuality",{tier:e})}enterRoom(e,t={}){return this.call("enterRoom",{roomId:e,...t})}exitRoom(e={}){return this.call("exitRoom",e)}setControl(e,t,i){return this.call("setControl",{roomId:e,kind:t,value:i})}setControls(e,t,i,r={}){return this.call("setControls",{selector:e,kind:t,value:i,...r})}getControls(e){return this.runCommand("getControls",{roomId:e})}getPowerSummary(e){return this.runCommand("getPowerSummary",{floorId:e})}getOperationsSnapshot(e){return this.runCommand("getOperationsSnapshot",{floorId:e})}applyPowerAction(e,t){return this.call("applyPowerAction",{action:e,floorId:t})}readRoom(e){return this.runCommand("readRoom",{roomId:e})}queryRoom(e,t){return this.runCommand("queryRoom",{roomId:e,hours:t})}listAlarms(){return this.runCommand("listAlarms",{})}setAlarmRule(e){return this.call("setAlarmRule",e)}clearAlarmRule(e){return this.call("clearAlarmRule",{id:e})}setAudio(e){return this.call("setAudio",e)}applyScene(e){return this.call("applyScene",{scene:e})}listScenes(){return this.runCommand("listScenes",{})}startTour(){return this.call("startTour",{})}stopTour(){return this.call("stopTour",{})}dispose(){var e;this.disposed||(this.disposed=!0,++this.focusVersion,this.commandListeners.clear(),(e=this.offControlChange)==null||e.call(this),this.offControlChange=null,this.deps.alarms.onAlarm(Ni,Ni),this.deps.viewStateMachine.setViewChangedListener(Ni),this.deps.timeline.setChangeListener(Ni),this.clearRoomFocus())}getState(){const e=this.deps.timeline.getState();return{mode:this.getMode(),autoRotate:this.deps.cameraDirector.autoRotate,view:this.deps.viewStateMachine.getView(),selection:this.deps.selectionService.current,commandCount:this.log.length,time:e.time,timeMode:e.mode,playbackSpeed:e.playbackSpeed,quality:this.deps.quality.getQuality(),focusedRoom:this.focusedRoom,activeAlarms:this.deps.alarms.activeAlarms().length,audio:this.deps.audio.getState(),touring:this.deps.tour.isRunning()}}describe(){return[...this.commands.entries()].map(([e,t])=>({name:e,description:t.description,params:eT(t.schema)}))}getCommandLog(){return this.log.entries()}on(e,t){return this.disposed?Ni:this.emitter.on(e,t)}async call(e,t={}){return this.runCommand(e,t)}onCommand(e){return this.disposed?Ni:(this.commandListeners.add(e),()=>this.commandListeners.delete(e))}runCommand(e,t){if(this.disposed)throw new th("DISPOSED","The interface controller has been disposed.");const i=this.commands.get(e);if(!i)throw this.reject(e,"UNKNOWN_COMMAND",`No command '${e}'.`,`Available: ${[...this.commands.keys()].join(", ")}`);const r=i.schema.safeParse(this.normalizeArgs(e,t));if(!r.success){const a=r.error.issues.map(c=>`${c.path.join(".")||"(args)"}: ${c.message}`).join("; ");throw this.reject(e,"INVALID_ARGS",`Invalid arguments for ${e} — ${a}`,"Call ui.describe() for command schemas.")}const s=Qs(r.data),o=i.run(r.data);this.log.record(e,s);for(const a of this.commandListeners)a(e,Qs(s));return o}normalizeArgs(e,t){return e!=="setTimeRange"?t:t==="live"||tT(t)?{range:t}:t}define(e,t,i,r){this.commands.set(e,{description:t,schema:i,run:r})}assertFloor(e,t){if(!this.deps.buildingIndex.floor(e))throw this.reject(t,"UNKNOWN_ENTITY",`No floor '${e}' in the building.`,`Valid floors: ${this.deps.buildingIndex.floorIds.join(", ")}`)}floorSliceAnchor(){var i,r;const e=this.deps.viewStateMachine.getView();if(e.kind==="ISOLATED"||e.kind==="FLATTENED")return e.floorId;if(this.focusedRoom)return(i=this.deps.buildingIndex.room(this.focusedRoom))==null?void 0:i.floor.id;const t=this.deps.selectionService.current;if((t==null?void 0:t.type)==="floor")return t.id;if((t==null?void 0:t.type)==="room")return(r=this.deps.buildingIndex.room(t.id))==null?void 0:r.floor.id}leaveRoomForNavigation(){++this.focusVersion,this.clearRoomFocus()}clearRoomFocus(e={}){var i;const t=this.focusedRoom!==null;return t&&(this.focusedRoom=null,this.emitter.emit("roomFocusChanged",{roomId:null})),(i=this.focusRestore)==null||i.call(this),this.focusRestore=null,e.abandonCamera!==!1&&this.deps.cameraDirector.abandonRoomFocus(),t}assertRoom(e,t){if(e.type!=="room"||!this.deps.buildingIndex.room(e.id))throw this.reject(t,"UNKNOWN_ENTITY",`No room '${e.id}' in the building.`,`Valid floors: ${this.deps.buildingIndex.floorIds.join(", ")}`)}assertEntity(e,t){if(!(e.type==="building"||e.type==="room"&&!!this.deps.buildingIndex.room(e.id)||e.type==="floor"&&!!this.deps.buildingIndex.floor(e.id)))throw this.reject(t,"UNKNOWN_ENTITY",`No ${e.type} '${e.id}' in the building.`,`Valid floors: ${this.deps.buildingIndex.floorIds.join(", ")}`)}reject(e,t,i,r){const s=new th(t,i,r);return this.emitter.emit("commandRejected",{command:e,error:{code:t,message:i,hint:r}}),s}}function eT(n){try{return zM(n)}catch{return}}function rh(n){return typeof n=="number"?n:Date.parse(n)}function tT(n){if(!n||typeof n!="object"||Array.isArray(n))return!1;const e=n;return!Object.hasOwn(e,"range")&&(Object.hasOwn(e,"from")||Object.hasOwn(e,"to"))}function sh(n,e){return e==="light"?n.state.light:e==="hvac"?n.state.hvacSetpoint:n.state.blind}function Ni(){}class nT{constructor(){P(this,"handlers",new Map)}on(e,t){let i=this.handlers.get(e);return i||(i=new Set,this.handlers.set(e,i)),i.add(t),()=>i.delete(t)}emit(e,t){var i;(i=this.handlers.get(e))==null||i.forEach(r=>r(t))}clear(){this.handlers.clear()}}function of(n){return n.map(e=>({name:e.name,description:e.description,input_schema:iT(e.params)?e.params:{type:"object",properties:{}}}))}function iT(n){return typeof n=="object"&&n!==null}async function rT(n,e,t={}){var r;const i=[];for(let s=0;s<e.length;s++){const o=e[s];try{await n.call(o.name,o.args)}catch(a){i.push({name:o.name,message:a instanceof Error?a.message:String(a)})}(r=t.onStep)==null||r.call(t,o,s)}return{steps:e.length,rejected:i}}const oh=Date.UTC(2026,6,17,5,0,0),ah=[{name:"setAutoRotate",args:{on:!1}},{name:"setTimeRange",args:{from:oh,to:oh}},{name:"setMode",args:{mode:"electricity"}},{name:"orbitTo",args:{azimuthDeg:120,elevationDeg:35,durationMs:1}},{name:"explode",args:{factor:1,durationMs:1}},{name:"setMode",args:{mode:"environment"}},{name:"isolateFloor",args:{floorId:"F4",durationMs:1}},{name:"setMode",args:{mode:"occupancy"}},{name:"flattenFloor",args:{floorId:"F4",style:"2d",durationMs:1}},{name:"reassemble",args:{durationMs:1}},{name:"select",args:{ref:{type:"room",id:"F4-R03"}}}];class Oc{constructor(e,t,i=!1){P(this,"disposed",!1);P(this,"onMessage");this.ui=e,this.socket=t,this.closeSocketOnDispose=i,this.onMessage=r=>void this.handle(r.data),t.onmessage=this.onMessage}static connect(e,t){return new Oc(e,new WebSocket(t),!0)}dispose(){var e,t;this.disposed||(this.disposed=!0,this.socket.onmessage===this.onMessage&&(this.socket.onmessage=null),this.closeSocketOnDispose&&((t=(e=this.socket).close)==null||t.call(e)))}async handle(e){if(this.disposed)return;let t;try{t=JSON.parse(e)}catch{return this.send({error:{code:"BAD_JSON",message:"payload was not valid JSON"}})}if(t.name==="__list_tools")return this.send({id:t.id,result:of(this.ui.describe())});try{const i=await this.ui.call(t.name,t.args??{});this.send({id:t.id,result:i??null})}catch(i){const r=i;this.send({id:t.id,error:{code:r.code??"ERROR",message:r.message??String(i),hint:r.hint}})}}send(e){this.disposed||this.socket.send(JSON.stringify(e))}}const sT=new Set(["inspect","getView","getControls","getPowerSummary","getOperationsSnapshot","readRoom","queryRoom","listAlarms","listScenes"]);class oT{constructor(e,t="holo-bms",i=r=>new BroadcastChannel(r)){P(this,"ch");P(this,"applying",!1);P(this,"off");P(this,"source",cT());P(this,"peers",new Set);P(this,"leader",!0);P(this,"leadershipListeners",new Set);this.ui=e,this.ch=i(t),this.ch.onmessage=r=>this.receive(r.data),this.off=e.onCommand((r,s)=>{this.applying||sT.has(r)||this.ch.postMessage({type:"command",source:this.source,name:r,args:s})}),this.ch.postMessage({type:"hello",source:this.source})}isLeader(){return this.leader}onLeadershipChange(e){return this.leadershipListeners.add(e),e(this.leader),()=>this.leadershipListeners.delete(e)}dispose(){this.ch.postMessage({type:"goodbye",source:this.source}),this.off(),this.leadershipListeners.clear(),this.ch.close()}receive(e){if(!(!aT(e)||e.source===this.source))switch(e.type){case"hello":this.addPeer(e.source),this.ch.postMessage({type:"present",source:this.source});return;case"present":this.addPeer(e.source);return;case"goodbye":this.peers.delete(e.source)&&this.updateLeadership();return;case"command":this.applying=!0;let t;try{t=this.ui.call(e.name,e.args)}finally{this.applying=!1}t.catch(()=>{})}}addPeer(e){this.peers.has(e)||(this.peers.add(e),this.updateLeadership())}updateLeadership(){const e=this.source===[...this.peers,this.source].sort()[0];if(e!==this.leader){this.leader=e;for(const t of this.leadershipListeners)t(e)}}}function aT(n){if(!n||typeof n!="object")return!1;const e=n;return typeof e.source!="string"||typeof e.type!="string"?!1:e.type==="command"?typeof e.name=="string":e.type==="hello"||e.type==="present"||e.type==="goodbye"}function cT(){var e,t;return((t=(e=globalThis.crypto)==null?void 0:e.randomUUID)==null?void 0:t.call(e))??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}function Gr(n,e){const t=new Map;for(const i of e)t.set(i.deviceId,i.value);return{time:n,readings:e,value:i=>t.get(i)}}const lT=36e5,uT={temperature:{unit:"°C",domain:[18,34],label:"Temperature"},humidity:{unit:"%RH",domain:[30,90],label:"Humidity"},lux:{unit:"lx",domain:[0,1e3],label:"Illuminance"},power:{unit:"kW",domain:[0,6],label:"Power"},occupancy:{unit:"ppl",domain:[0,4],label:"Occupancy"}};class af{constructor(e,t){P(this,"sensors",[]);P(this,"lon");this.controls=t,this.lon=e.location.lon;for(const i of e.floors)for(const r of i.zones)for(const s of r.rooms)for(const o of s.sensors)this.sensors.push({deviceId:o.deviceId,channel:o.channel,unit:o.unit,roomId:s.id,zoneFn:r.function,seed:_T(o.deviceId)})}capabilities(){return[...new Set(this.sensors.map(t=>t.channel))].map(t=>({channel:t,...uT[t]}))}sample(e,t){const i=new Set(e),r=[];for(const s of this.sensors)i.has(s.channel)&&r.push({deviceId:s.deviceId,channel:s.channel,unit:s.unit,value:xT(this.valueFor(s,t))});return Gr(t,r)}query(e,t,i=6e4){const r=[];for(let s=t.from;s<=t.to;s+=i)r.push(this.sample(e,s));return r}solarHour(e){return((e/lT%24+this.lon/15)%24+24)%24}valueFor(e,t){var o;const i=this.solarHour(t),r=.5+.5*Math.sin(t/6e5+e.seed),s=(o=this.controls)==null?void 0:o.call(this,e.roomId);switch(e.channel){case"temperature":{const a=(s==null?void 0:s.blind)??0,c=eo(i)*fT(e.zoneFn)*(1-a*.75),l=Fs(i)-hT(e.zoneFn)+c+(r-.5)*1.2;return s?l*.4+s.hvacSetpoint*.6:l}case"humidity":return ic(78-(Fs(i)-24)*3+(r-.5)*6,30,95);case"lux":{const a=eo(i)*dT(e.zoneFn)*(.85+.3*r),c=s?1-.85*s.blind:1,l=s!=null&&s.light?120:0;return Math.max(0,a*c+l)}case"occupancy":return cf(e.zoneFn,i,e.seed);case"power":{const a=pT(e.zoneFn,i,Fs(i),e.seed,r);return s?gT(a,s,e.zoneFn,i,Fs(i)):a}}}}function Fs(n){return 28+5*Math.sin(2*Math.PI*(n-9)/24)}function eo(n){return n<=6||n>=18?0:Math.sin(Math.PI*(n-6)/12)}function hT(n){switch(n){case"guest":return 4;case"lobby":case"amenity":return 5;case"corridor":return 2;case"plant":return-2}}function dT(n){switch(n){case"amenity":return 900;case"lobby":return 700;case"guest":return 500;case"corridor":return 300;case"plant":return 150}}function fT(n){switch(n){case"guest":return 1.4;case"lobby":return 1;case"amenity":return .9;case"corridor":return .35;case"plant":return .2}}function cf(n,e,t){const i=.5+.5*Math.sin(t*12.9898);switch(n){case"guest":{const r=e<8||e>=22?1:e>=18?.6:.15;return i>.45?Ds(r*(1+i)):0}case"lobby":return Ds(xr(e,10,6)*4+xr(e,18,4)*2);case"amenity":return Ds(xr(e,8,3)*2+xr(e,19,4)*3);case"corridor":return Ds(xr(e,9,8)*1.5);case"plant":return 0}}function pT(n,e,t,i,r){const s=Math.max(0,t-24)*mT(n),o=cf(n,e,i);switch(n){case"guest":return Oi(.15+s+o*.25+r*.1);case"lobby":return Oi(1.2+s+o*.15+r*.3);case"amenity":return Oi(.8+s+o*.3+r*.4);case"corridor":return Oi(.3+s*.3+r*.05);case"plant":return Oi(2.5+s*1.5+eo(e)*.5+r*.6)}}function mT(n){switch(n){case"guest":return .08;case"lobby":case"amenity":return .15;case"corridor":return .04;case"plant":return .4}}function gT(n,e,t,i,r){let s=n;if(e.light||(s*=1-vT(t)),t==="guest"||t==="lobby"||t==="amenity"){const o=ic((r-24)/10,0,1.2),a=e.hvacSetpoint-24;s*=ic(1-a*.055*o,.72,1.3)}return t==="guest"&&(s*=1-eo(i)*e.blind*.14),Oi(Math.max(.03,s))}function vT(n){switch(n){case"guest":return .32;case"lobby":return .25;case"amenity":return .28;case"corridor":return .22;case"plant":return 0}}function xr(n,e,t){const i=(n-e)/t;return Math.exp(-.5*i*i)}function _T(n){let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return(e>>>0)%1e3/1e3}function ic(n,e,t){return n<e?e:n>t?t:n}const xT=n=>Math.round(n*100)/100,Ds=n=>Math.round(n*10)/10,Oi=n=>Math.round(n*100)/100;class aa{constructor(e,t,i,r=sf){P(this,"fallback");P(this,"worker",null);P(this,"nextRequestId",1);P(this,"pending",new Map);P(this,"alarmSnapshots",new WeakMap);P(this,"disposed",!1);P(this,"onWorkerMessage",e=>{const t=e.data,i=this.pending.get(t.requestId);if(!i)return;if(this.pending.delete(t.requestId),t.type==="error"){i.resolve(this.fallback.sample(i.channels,i.time)),this.disableWorker();return}const r=Gr(t.time,t.readings),s=t.activeAlarms.map(o=>({...o}));this.alarmSnapshots.set(r,s),i.resolve(r)});P(this,"onWorkerError",()=>{this.disableWorker()});if(this.fallback=new af(e,t),!(typeof Worker>"u"))try{const s=new Worker(new URL("/ihapm-bms-showcase/assets/mockTelemetry.worker-BAN6ypWA.js",import.meta.url),{type:"module",name:"ihapm-telemetry"});this.worker=s,s.addEventListener("message",this.onWorkerMessage),s.addEventListener("error",this.onWorkerError),this.post({type:"init",building:e,controls:i.map(({roomId:o,state:a})=>({roomId:o,state:a})),alarmRules:r.map(o=>({...o}))})}catch{this.worker=null}}capabilities(){return this.fallback.capabilities()}sample(e,t){return this.fallback.sample(e,t)}query(e,t,i){return this.fallback.query(e,t,i)}sampleAsync(e,t){return!this.worker||this.disposed?Promise.resolve(this.fallback.sample(e,t)):new Promise(i=>{const r=this.nextRequestId++;this.pending.set(r,{channels:[...e],time:t,resolve:i});try{this.post({type:"sample",requestId:r,channels:[...e],time:t})}catch{const s=this.pending.get(r);this.pending.delete(r),this.disableWorker(),i(this.fallback.sample((s==null?void 0:s.channels)??e,(s==null?void 0:s.time)??t))}})}getExecutionMode(){return this.worker?"worker":"main"}updateControl(e){!this.worker||this.disposed||this.post({type:"control",roomId:e.roomId,state:{...e.state}})}setAlarmRules(e){!this.worker||this.disposed||this.post({type:"alarmRules",rules:e.map(t=>({...t}))})}takeAlarmSnapshot(e){const t=this.alarmSnapshots.get(e);return t?(this.alarmSnapshots.delete(e),t.map(i=>({...i}))):null}dispose(){this.disposed||(this.disposed=!0,this.disableWorker())}post(e){var t;(t=this.worker)==null||t.postMessage(e)}disableWorker(){const e=this.worker;this.worker=null,e&&(e.removeEventListener("message",this.onWorkerMessage),e.removeEventListener("error",this.onWorkerError),e.terminate());for(const t of this.pending.values())t.resolve(this.fallback.sample(t.channels,t.time));this.pending.clear()}}const yT=Fe({deviceId:Ze(),channel:Fc,unit:Ze(),value:Qe().finite()}),ST=Fe({time:Qe().finite(),readings:qn(yT)}),MT=Fe({channel:Fc,unit:Ze(),domain:$d([Qe().finite(),Qe().finite()]),label:Ze()}),bT=Pc("type",[Fe({type:At("hello"),protocol:At(1),capabilities:qn(MT)}),Fe({type:At("frame"),frame:ST}),Fe({type:At("control"),id:Ze(),roomId:Ze(),kind:Gt(["light","hvac","blind"]),value:ar([zr(),Qe().finite()]),accepted:At(!0)}),Fe({type:At("error"),code:Ze(),message:Ze(),id:Ze().optional()})]);class ET{constructor(e,t,i={}){P(this,"fallback");P(this,"socketFactory");P(this,"reconnectMs");P(this,"maxCachedFrames");P(this,"socket",null);P(this,"reconnectTimer");P(this,"disposed",!1);P(this,"connected",!1);P(this,"capabilitiesValue");P(this,"frames",[]);P(this,"frameListeners",new Set);P(this,"controlListeners",new Set);P(this,"outbox",[]);P(this,"sequence",0);this.url=e,this.fallback=new af(t),this.capabilitiesValue=this.fallback.capabilities(),this.socketFactory=i.webSocketFactory??(r=>new WebSocket(r)),this.reconnectMs=i.reconnectMs??1500,this.maxCachedFrames=Math.max(2,i.maxCachedFrames??1440)}capabilities(){return this.capabilitiesValue.map(e=>({...e,domain:[...e.domain]}))}connect(){if(this.disposed||this.socket)return;let e;try{e=this.socketFactory(this.url)}catch{this.scheduleReconnect();return}this.socket=e,e.onopen=()=>{if(!(this.socket!==e||this.disposed)){this.connected=!0,this.sendNow({type:"hello",protocol:1}),this.sendNow({type:"subscribe"});for(const t of this.outbox.splice(0))this.sendNow(t)}},e.onmessage=t=>this.receive(e,t.data),e.onerror=()=>{},e.onclose=()=>{this.socket===e&&(this.socket=null,this.connected=!1,this.scheduleReconnect())}}dispose(){if(this.disposed)return;this.disposed=!0,window.clearTimeout(this.reconnectTimer),this.reconnectTimer=void 0;const e=this.socket;this.socket=null,this.connected=!1,e&&(e.onopen=null,e.onmessage=null,e.onerror=null,e.onclose=null,e.close()),this.frameListeners.clear(),this.controlListeners.clear(),this.outbox=[]}onFrame(e){return this.frameListeners.add(e),()=>this.frameListeners.delete(e)}onControl(e){return this.controlListeners.add(e),()=>this.controlListeners.delete(e)}sendControl(e){const t={type:"control",id:`control-${++this.sequence}`,roomId:e.roomId,kind:e.kind,value:e.value};this.connected?this.sendNow(t):this.outbox.push(t)}sample(e,t){const i=wT(this.frames,t);return i?TT(i,e,t):this.fallback.sample(e,t)}query(e,t,i=6e4){const r=[];for(let s=t.from;s<=t.to;s+=i)r.push(this.sample(e,s));return r}receive(e,t){if(this.socket!==e||this.disposed||typeof t!="string")return;let i;try{i=JSON.parse(t)}catch{return}const r=bT.safeParse(i);if(r.success)switch(r.data.type){case"hello":this.capabilitiesValue=r.data.capabilities.map(s=>({...s,domain:[...s.domain]}));return;case"frame":{const s=Gr(r.data.frame.time,r.data.frame.readings.map(o=>({...o})));this.frames.push(s),this.frames.length>this.maxCachedFrames&&this.frames.splice(0,this.frames.length-this.maxCachedFrames);for(const o of this.frameListeners)o(RT(s));return}case"control":{const s={roomId:r.data.roomId,kind:r.data.kind,value:r.data.value};for(const o of this.controlListeners)o({...s});return}case"error":return}}sendNow(e){if(!(!this.socket||!this.connected))try{this.socket.send(JSON.stringify(e))}catch{e.type==="control"&&this.outbox.push(e)}}scheduleReconnect(){this.disposed||this.reconnectMs<=0||this.reconnectTimer!==void 0||(this.reconnectTimer=window.setTimeout(()=>{this.reconnectTimer=void 0,this.connect()},this.reconnectMs))}}function wT(n,e){let t,i=1/0;for(const r of n){const s=Math.abs(r.time-e);s<i&&(t=r,i=s)}return t}function TT(n,e,t){const i=new Set(e);return Gr(t,n.readings.filter(r=>i.has(r.channel)).map(r=>({...r})))}function RT(n){return Gr(n.time,n.readings.map(e=>({...e})))}const AT={id:"default",name:"Hologram",description:"Idle showroom hologram — slow rotation, ambient particles, no data overlay.",accent:"#36e6ff",channels:[]},CT={id:"electricity",name:"Electricity",description:"Live power draw — rooms tinted by kW, per-floor bars, pulsing risers.",accent:"#aef049",channels:["power"]},IT={id:"environment",name:"Environment",description:"Heat, humidity & sunlight — temperature tint, humidity fog, sun from real geo + time.",accent:"#ffb020",channels:["temperature","humidity","lux"]},PT={id:"occupancy",name:"Occupancy",description:"Live room occupancy — headcount tint, occupant dots, per-floor ring gauges.",accent:"#ff45c8",channels:["occupancy"]},FT=(n,e)=>{n?e.select({ref:n}):e.clearSelection()};function GT(n,e,t={}){const i=DT(oE(e)),r=new aE(i),s=new Pw(i),o=new Fw(i,s),a=new kw(i,s,i.location.lon),c=new zE(n,t.initialQuality??"high"),l=[],u=new Set,h=U=>{const ee=c.registerUpdate(U);return l.push(ee),ee},{root:d,floorGroups:f}=HE(i);c.scene.add(d);const g=new Xt().setFromObject(d).getSize(new C),v=Math.hypot(g.x,g.z)/2+3,m=new KE(v);c.scene.add(m.group),h((U,ee)=>m.update(U,ee));const p=new rw;h(()=>p.update(performance.now())),c.setActivityProbe(()=>p.hasActive||c.controls.autoRotate),c.controls.target.set(0,g.y*.45,0);const w=new un(v*2.7,_t.degToRad(68),_t.degToRad(35));c.camera.position.setFromSpherical(w).add(c.controls.target),c.camera.lookAt(c.controls.target);const M=new aw(c.camera,c.controls,p),x=new dn;x.name="modeOverlay",Bt(x),c.scene.add(x);const O=new nT,R=t.provider??(t.realtimeUrl?new ET(t.realtimeUrl,i):new aa(i,U=>{var ee;return(ee=s.get(U))==null?void 0:ee.state},s.list())),A=new Cw(R);h(()=>A.tick()),nf(R)?(l.push(R.onControl(U=>{s.supports(U.roomId,U.kind)&&(s.set(U.roomId,U.kind,U.value,"remote"),A.refresh())})),l.push(s.onChange((U,ee)=>{ee.origin==="local"&&R.sendControl(ee)})),l.push(()=>R.dispose())):R instanceof aa&&(l.push(s.onChange(U=>R.updateControl(U))),l.push(()=>R.dispose()));const F=new lw(f,d),b=new pw(F,M,p,d);F.setLowDetail(c.getQuality()==="low"),b.setRenderQuality(c.getQuality());const S=Math.hypot(g.x,g.z),I=S*1.05,j=S*1.25;h(()=>{const ee=F.getRoomLod()==="summary"?I:j,he=c.camera.position.distanceTo(c.controls.target),De=c.getQuality()==="low"&&b.getView().kind==="ASSEMBLED"&&he>ee;F.setRoomLod(De?"summary":"rooms")});const V=new xw(F),W=new QE(F,s);c.scene.add(W.group),h(()=>W.update()),l.push(()=>W.dispose());const J=new Nw(i);R instanceof aa?(R.setAlarmRules(J.listRules()),l.push(J.onRulesChanged(U=>R.setAlarmRules(U))),l.push(A.addFrameListener(U=>{const ee=R.takeAlarmSnapshot(U);ee?J.reconcileSnapshot(ee):J.evaluate(U)}))):l.push(A.addFrameListener(U=>J.evaluate(U)));const G=new nw(F,J);c.scene.add(G.group),h((U,ee)=>G.update(ee));const re=new Gw,H=new cw({building:i,buildingIndex:r,sceneIndex:F,overlay:x,cameraDirector:M,timeline:A,registerSceneUpdate:h,emitLegend:U=>O.emit("legendChanged",{spec:U}),setFog:U=>c.setFogDensity(U)});H.registerLazy(AT,async()=>{const{DefaultMode:U}=await Zr(async()=>{const{DefaultMode:ee}=await import("./DefaultMode-BEoxu1n4.js");return{DefaultMode:ee}},[]);return new U}),H.registerLazy(CT,async()=>{const{ElectricityMode:U}=await Zr(async()=>{const{ElectricityMode:ee}=await import("./ElectricityMode-BPtN2dOX.js");return{ElectricityMode:ee}},__vite__mapDeps([0,1]));return new U}),H.registerLazy(IT,async()=>{const{EnvironmentMode:U}=await Zr(async()=>{const{EnvironmentMode:ee}=await import("./EnvironmentMode-G8xoH20j.js");return{EnvironmentMode:ee}},__vite__mapDeps([2,1]));return new U}),H.registerLazy(PT,async()=>{const{OccupancyMode:U}=await Zr(async()=>{const{OccupancyMode:ee}=await import("./OccupancyMode-DEeq8iDu.js");return{OccupancyMode:ee}},__vite__mapDeps([3,1]));return new U});let ne=null;const ce=new Qw({modeManager:H,cameraDirector:M,viewStateMachine:b,selectionService:V,sceneIndex:F,buildingIndex:r,timeline:A,quality:{setQuality:U=>c.setQuality(U),getQuality:()=>c.getQuality()},audio:re,tour:{start:()=>ne==null?void 0:ne.start(),stop:()=>ne==null?void 0:ne.stop(),isRunning:()=>(ne==null?void 0:ne.isRunning())??!1},controls:s,power:o,alarms:J,scenes:a,emitter:O});c.onQualityChange((U,ee)=>{F.setLowDetail(U==="low"),U!=="low"&&F.setRoomLod("rooms"),b.setRenderQuality(U),O.emit("qualityChanged",{tier:U,auto:ee})});let Se=null,Oe=null;const Je=()=>{F.setRoomLodExceptions([Se,Oe].filter(U=>U!==null))};l.push(ce.on("selectionChanged",({ref:U})=>{Se=(U==null?void 0:U.type)==="room"?U.id:null,Je()})),l.push(ce.on("roomFocusChanged",({roomId:U})=>{Oe=U,Je()}));const Y=["modeChanged","viewChanged","selectionChanged","controlsChanged","roomFocusChanged","alarmsChanged","tourChanged"];for(const U of Y)l.push(ce.on(U,()=>c.requestRenderBurst()));const se=t.multiScreenChannel?new oT(ce,t.multiScreenChannel):null;if(t.autoScenes){let U=()=>{};const ee=he=>{U(),U=he?A.addLiveFrameListener(De=>a.tickSchedule(De.time,_e=>void ce.applyScene(_e))):()=>{}};se?l.push(se.onLeadershipChange(ee)):ee(!0),l.push(()=>U())}re.attach(ce);const xe=()=>{re.unlock(),window.removeEventListener("pointerdown",xe),window.removeEventListener("keydown",xe)};window.addEventListener("pointerdown",xe),window.addEventListener("keydown",xe),l.push(()=>{window.removeEventListener("pointerdown",xe),window.removeEventListener("keydown",xe)}),ne=new Vw(ce),ne.onTourChanged(U=>O.emit("tourChanged",{running:U}));const ue=["pointerdown","keydown","wheel"];let Ce;const Ue=()=>{c.requestRenderBurst(),ne!=null&&ne.isRunning()&&ce.stopTour(),t.idleTourMs&&t.idleTourMs>0&&(window.clearTimeout(Ce),Ce=window.setTimeout(()=>void ce.startTour(),t.idleTourMs))};for(const U of ue)window.addEventListener(U,Ue,{passive:!0});l.push(()=>{window.clearTimeout(Ce);for(const U of ue)window.removeEventListener(U,Ue)}),t.idleTourMs&&t.idleTourMs>0&&(Ce=window.setTimeout(()=>void ce.startTour(),t.idleTourMs));const Le=t.onRoomPick??FT,Ye=new Sw(c.camera,c.domElement,d,U=>Le(U,ce)),K=NT(ce);let oe=!1;return{ui:ce,building:i,start:()=>{oe||(c.start(),ce.setMode(t.initialMode??"default"))},registerDisposer:U=>{if(oe)return U(),()=>{};u.add(U);let ee=!0;return()=>{ee&&(ee=!1,u.delete(U))}},dispose:async()=>{if(oe)return;oe=!0,c.stop();for(const ee of u)ee();u.clear(),ne==null||ne.stop(),K.dispose(),se==null||se.dispose(),Ye.dispose(),A.dispose();for(const ee of l.splice(0))ee();b.dispose(),await H.dispose(),re.dispose(),ce.dispose(),M.dispose(),p.cancelAll(),LT(c.scene),c.scene.clear(),c.dispose(),O.clear();const U=window;U.ui===ce&&delete U.ui,U.agent===K.agent&&delete U.agent}}}function DT(n){const e=new Set,t=i=>{if(!(!i||typeof i!="object"||e.has(i))){e.add(i);for(const r of Object.values(i))t(r);Object.freeze(i)}};return t(n),n}function LT(n){const e=new Set,t=new Set;n.traverse(i=>{const r=i;r.geometry&&e.add(r.geometry);const s=r.material;Array.isArray(s)?s.forEach(o=>t.add(o)):s&&t.add(s)});for(const i of e)i.dispose();for(const i of t)i.dispose()}function NT(n,e){const t=new Set,i=a=>{const c=Oc.connect(n,a);return t.add(c),c},r={toolDefinitions:()=>of(n.describe()),replay:(a=ah)=>rT(n,a),DEMO_SCENARIO:ah,connect:i};window.ui=n,window.agent=r;let s;const o=new URLSearchParams(location.search).get("remote");return o&&i(o),{agent:r,holo:s,dispose:()=>{for(const a of t)a.dispose();t.clear()}}}const lf=12;function WT(n,e){const t=kT(),i=UT(n,e),r=document.createElement("div");r.className="cmdk",r.hidden=!0,r.innerHTML=`
    <div class="cmdk-box" role="dialog" aria-label="Command palette">
      <input class="cmdk-input" type="text" placeholder="Jump to a room, mode, or action…" />
      <ul class="cmdk-list"></ul>
    </div>`,document.body.appendChild(r);const s=r.querySelector(".cmdk-input"),o=r.querySelector(".cmdk-list");let a=[],c=0;const l=()=>{r.hidden=!1,s.value="",h(),s.focus()},u=()=>{r.hidden=!0},h=()=>{a=OT(s.value,i).slice(0,lf),c=0,o.innerHTML=a.map((M,x)=>`<li class="${x===c?"on":""}">${ch(M.label)}${M.hint?`<span>${ch(M.hint)}</span>`:""}</li>`).join("")},d=M=>{var x;a.length!==0&&(c=(c+M+a.length)%a.length,[...o.children].forEach((O,R)=>O.classList.toggle("on",R===c)),(x=o.children[c])==null||x.scrollIntoView({block:"nearest"}))},f=()=>{const M=a[c];u(),M==null||M.run()},g=()=>h(),v=M=>{const x=M.target.closest("li");x&&(c=[...o.children].indexOf(x),f())},m=M=>{M.key==="ArrowDown"?(M.preventDefault(),d(1)):M.key==="ArrowUp"?(M.preventDefault(),d(-1)):M.key==="Enter"?(M.preventDefault(),f()):M.key==="Escape"&&(M.preventDefault(),u())},p=M=>{M.target===r&&u()},w=M=>{(M.ctrlKey||M.metaKey)&&M.key.toLowerCase()==="k"&&(M.preventDefault(),r.hidden?l():u())};return s.addEventListener("input",g),o.addEventListener("mousedown",v),s.addEventListener("keydown",m),r.addEventListener("mousedown",p),window.addEventListener("keydown",w),()=>{s.removeEventListener("input",g),o.removeEventListener("mousedown",v),s.removeEventListener("keydown",m),r.removeEventListener("mousedown",p),window.removeEventListener("keydown",w),r.remove(),t()}}function UT(n,e){const t=[];for(const i of n.listModes())t.push({label:`Mode · ${i.name}`,hint:i.id,run:()=>void n.setMode(i.id)});for(const i of n.listScenes())t.push({label:`Scene · ${i.label}`,hint:i.hint,run:()=>void n.applyScene(i.id)});for(const i of["orbit","front","top","isometric"])t.push({label:`View · ${i}`,run:()=>void n.setView(i)});t.push({label:"Reassemble building",run:()=>void n.reassemble()},{label:"Explode floors",run:()=>void n.explode(1)},{label:"Fly out of room",run:()=>void n.exitRoom()},{label:"Start attract tour",run:()=>void n.startTour()},{label:"Stop attract tour",run:()=>void n.stopTour()},{label:"Toggle audio cues",run:()=>void n.setAudio({enabled:!n.getState().audio.enabled})},{label:"Quality · high",run:()=>void n.setQuality("high")},{label:"Quality · medium",run:()=>void n.setQuality("medium")},{label:"Quality · low",run:()=>void n.setQuality("low")},{label:"Live data",run:()=>void n.setTimeRange("live")});for(const i of e.floors)for(const r of i.zones)for(const s of r.rooms)t.push({label:s.name,hint:`${s.id} · ${i.name}`,run:()=>void n.enterRoom(s.id)});return t}function OT(n,e){return n.trim()?e.map(t=>({e:t,s:zT(n,`${t.label} ${t.hint??""}`)})).filter(t=>t.s>=0).sort((t,i)=>i.s-t.s).map(t=>t.e):e.slice(0,lf)}function zT(n,e){const t=n.toLowerCase().replace(/\s+/g,""),i=e.toLowerCase();let r=0,s=0,o=0;for(const a of t){const c=i.indexOf(a,r);if(c===-1)return-1;o=c===r?o+1:0,s+=2+o*2-Math.min(c-r,8)*.1,r=c+1}return s}function ch(n){return n.replace(/[&<>]/g,e=>e==="&"?"&amp;":e==="<"?"&lt;":"&gt;")}let Ls=null,Ns=0;function kT(){let n=document.getElementById("cmdk-styles");n||(n=document.createElement("style"),n.id="cmdk-styles",n.textContent=`
    .cmdk { position: fixed; inset: 0; z-index: 100; display: flex; justify-content: center;
      align-items: flex-start; padding-top: 14vh; background: rgba(2, 6, 12, 0.5);
      backdrop-filter: blur(2px); font-family: system-ui, 'Segoe UI', sans-serif; }
    .cmdk[hidden] { display: none; }
    .cmdk-box { width: min(560px, 92vw); background: rgba(6, 18, 27, 0.97);
      border: 1px solid rgba(54, 230, 255, 0.4); box-shadow: 0 20px 60px rgba(0,0,0,0.6); }
    .cmdk-input { width: 100%; box-sizing: border-box; padding: 15px 18px; background: transparent;
      border: none; border-bottom: 1px solid rgba(54, 230, 255, 0.2); color: #eafcff;
      font-size: 15px; outline: none; letter-spacing: 0.02em; }
    .cmdk-input::placeholder { color: #4a6b78; }
    .cmdk-list { list-style: none; margin: 0; padding: 6px; max-height: 46vh; overflow-y: auto; }
    .cmdk-list li { display: flex; justify-content: space-between; align-items: baseline; gap: 12px;
      padding: 9px 12px; color: #bfe6f0; font-size: 13.5px; cursor: pointer; }
    .cmdk-list li span { color: #5f8494; font-size: 11px; font-family: ui-monospace, Consolas, monospace; }
    .cmdk-list li.on { background: rgba(54, 230, 255, 0.14); color: #eafcff; }
    `,document.head.appendChild(n),Ls=n),Ns+=1;let e=!1;return()=>{e||(e=!0,Ns=Math.max(0,Ns-1),Ns===0&&Ls&&(Ls.remove(),Ls=null))}}export{Dn as A,Pt as B,ke as C,AT as D,CT as E,Ar as H,io as M,PT as O,HT as P,Mc as R,Mt as S,C as V,It as a,_c as b,GT as c,Wh as d,Vr as e,Bt as f,Ct as g,tf as h,IT as i,Hs as j,tn as k,WT as m,VT as r};
