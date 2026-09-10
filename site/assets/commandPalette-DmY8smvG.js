const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ElectricityMode-CEIV2FgF.js","assets/colorScales-BFZgzI63.js","assets/EnvironmentMode-C7FRhRHh.js","assets/OccupancyMode-DCpgCAeA.js"])))=>i.map(i=>d[i]);
var Yf=Object.defineProperty;var jf=(n,e,t)=>e in n?Yf(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var E=(n,e,t)=>jf(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Kf="demo-hotel",Jf="IHAPM Demo Hotel",Qf={lat:13.7563,lon:100.5018,northAngleDeg:0},ep=JSON.parse('[{"id":"F1","name":"Level 1 · Lobby","elevation":0,"height":5,"outline":[[0,0],[40,0],[40,20],[0,20]],"zones":[{"id":"F1-Z-LOBBY","name":"Lobby","function":"lobby","rooms":[{"id":"F1-LOBBY","name":"Grand Lobby","footprint":[[0,0],[26,0],[26,20],[0,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F1-LOBBY-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F1-LOBBY-occupancy"},{"channel":"lux","unit":"lx","deviceId":"dev-F1-LOBBY-lux"}]},{"id":"F1-RECEP","name":"Reception","footprint":[[26,0],[34,0],[34,8],[26,8]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F1-RECEP-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F1-RECEP-occupancy"}]}]},{"id":"F1-Z-AMEN","name":"Amenities","function":"amenity","rooms":[{"id":"F1-CAFE","name":"Café","footprint":[[26,12],[40,12],[40,20],[26,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F1-CAFE-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F1-CAFE-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F1-CAFE-power"}]}]},{"id":"F1-Z-BOH","name":"Back of house","function":"plant","rooms":[{"id":"F1-BOH","name":"Back of House","footprint":[[34,0],[40,0],[40,8],[34,8]],"sensors":[{"channel":"power","unit":"kW","deviceId":"dev-F1-BOH-power"}]}]},{"id":"F1-Z-CORR","name":"Corridor","function":"corridor","rooms":[{"id":"F1-CORR","name":"Service corridor","footprint":[[26,8],[40,8],[40,12],[26,12]],"sensors":[]}]}]},{"id":"F2","name":"Level 2 · Amenities","elevation":5,"height":4.5,"outline":[[0,0],[40,0],[40,20],[0,20]],"zones":[{"id":"F2-Z-AMEN","name":"Amenities","function":"amenity","rooms":[{"id":"F2-REST","name":"Restaurant","footprint":[[0,0],[18,0],[18,20],[0,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F2-REST-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F2-REST-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F2-REST-power"}]},{"id":"F2-GYM","name":"Gym","footprint":[[18,0],[30,0],[30,9],[18,9]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F2-GYM-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F2-GYM-occupancy"}]},{"id":"F2-MTGA","name":"Meeting Room A","footprint":[[30,0],[40,0],[40,9],[30,9]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F2-MTGA-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F2-MTGA-occupancy"}]},{"id":"F2-SPA","name":"Spa","footprint":[[18,11],[30,11],[30,20],[18,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F2-SPA-temperature"},{"channel":"humidity","unit":"pctRH","deviceId":"dev-F2-SPA-humidity"}]},{"id":"F2-MTGB","name":"Meeting Room B","footprint":[[30,11],[40,11],[40,20],[30,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F2-MTGB-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F2-MTGB-occupancy"}]}]},{"id":"F2-Z-CORR","name":"Corridor","function":"corridor","rooms":[{"id":"F2-CORR","name":"Corridor L2","footprint":[[18,9],[40,9],[40,11],[18,11]],"sensors":[]}]}]},{"id":"F3","name":"Level 3 · Guest","elevation":9.5,"height":3.5,"outline":[[0,0],[40,0],[40,20],[0,20]],"zones":[{"id":"F3-Z-GUEST","name":"Guest rooms","function":"guest","rooms":[{"id":"F3-R01","name":"Room 301","footprint":[[0,0],[4,0],[4,8.5],[0,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R01-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R01-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R01-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R01-lux"}]},{"id":"F3-R02","name":"Room 302","footprint":[[4,0],[8,0],[8,8.5],[4,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R02-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R02-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R02-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R02-lux"}]},{"id":"F3-R03","name":"Room 303","footprint":[[8,0],[12,0],[12,8.5],[8,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R03-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R03-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R03-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R03-lux"}]},{"id":"F3-R04","name":"Room 304","footprint":[[12,0],[16,0],[16,8.5],[12,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R04-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R04-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R04-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R04-lux"}]},{"id":"F3-R05","name":"Room 305","footprint":[[16,0],[20,0],[20,8.5],[16,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R05-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R05-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R05-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R05-lux"}]},{"id":"F3-R06","name":"Room 306","footprint":[[20,0],[24,0],[24,8.5],[20,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R06-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R06-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R06-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R06-lux"}]},{"id":"F3-R07","name":"Room 307","footprint":[[24,0],[28,0],[28,8.5],[24,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R07-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R07-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R07-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R07-lux"}]},{"id":"F3-R08","name":"Room 308","footprint":[[28,0],[32,0],[32,8.5],[28,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R08-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R08-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R08-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R08-lux"}]},{"id":"F3-R09","name":"Room 309","footprint":[[32,0],[36,0],[36,8.5],[32,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R09-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R09-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R09-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R09-lux"}]},{"id":"F3-R10","name":"Room 310","footprint":[[36,0],[40,0],[40,8.5],[36,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R10-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R10-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R10-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R10-lux"}]},{"id":"F3-R11","name":"Room 311","footprint":[[0,11.5],[4,11.5],[4,20],[0,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R11-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R11-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R11-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R11-lux"}]},{"id":"F3-R12","name":"Room 312","footprint":[[4,11.5],[8,11.5],[8,20],[4,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R12-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R12-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R12-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R12-lux"}]},{"id":"F3-R13","name":"Room 313","footprint":[[8,11.5],[12,11.5],[12,20],[8,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R13-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R13-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R13-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R13-lux"}]},{"id":"F3-R14","name":"Room 314","footprint":[[12,11.5],[16,11.5],[16,20],[12,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R14-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R14-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R14-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R14-lux"}]},{"id":"F3-R15","name":"Room 315","footprint":[[24,11.5],[28,11.5],[28,20],[24,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R15-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R15-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R15-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R15-lux"}]},{"id":"F3-R16","name":"Room 316","footprint":[[28,11.5],[32,11.5],[32,20],[28,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R16-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R16-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R16-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R16-lux"}]},{"id":"F3-R17","name":"Room 317","footprint":[[32,11.5],[36,11.5],[36,20],[32,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R17-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R17-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R17-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R17-lux"}]},{"id":"F3-R18","name":"Room 318","footprint":[[36,11.5],[40,11.5],[40,20],[36,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R18-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R18-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R18-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R18-lux"}]}]},{"id":"F3-Z-CORR","name":"Corridor","function":"corridor","rooms":[{"id":"F3-CORR","name":"Corridor L3","footprint":[[0,8.5],[40,8.5],[40,11.5],[0,11.5]],"sensors":[{"channel":"occupancy","unit":"people","deviceId":"dev-F3-CORR-occupancy"}]}]},{"id":"F3-Z-CORE","name":"Service core","function":"plant","rooms":[{"id":"F3-CORE","name":"Core L3 (lifts & stairs)","footprint":[[16,11.5],[24,11.5],[24,20],[16,20]],"sensors":[]}]}]},{"id":"F4","name":"Level 4 · Guest","elevation":13,"height":3.5,"outline":[[0,0],[40,0],[40,20],[0,20]],"zones":[{"id":"F4-Z-GUEST","name":"Guest rooms","function":"guest","rooms":[{"id":"F4-R01","name":"Room 401","footprint":[[0,0],[4,0],[4,8.5],[0,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R01-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R01-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R01-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R01-lux"}]},{"id":"F4-R02","name":"Room 402","footprint":[[4,0],[8,0],[8,8.5],[4,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R02-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R02-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R02-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R02-lux"}]},{"id":"F4-R03","name":"Room 403","footprint":[[8,0],[12,0],[12,8.5],[8,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R03-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R03-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R03-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R03-lux"}]},{"id":"F4-R04","name":"Room 404","footprint":[[12,0],[16,0],[16,8.5],[12,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R04-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R04-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R04-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R04-lux"}]},{"id":"F4-R05","name":"Room 405","footprint":[[16,0],[20,0],[20,8.5],[16,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R05-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R05-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R05-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R05-lux"}]},{"id":"F4-R06","name":"Room 406","footprint":[[20,0],[24,0],[24,8.5],[20,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R06-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R06-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R06-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R06-lux"}]},{"id":"F4-R07","name":"Room 407","footprint":[[24,0],[28,0],[28,8.5],[24,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R07-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R07-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R07-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R07-lux"}]},{"id":"F4-R08","name":"Room 408","footprint":[[28,0],[32,0],[32,8.5],[28,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R08-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R08-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R08-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R08-lux"}]},{"id":"F4-R09","name":"Room 409","footprint":[[32,0],[36,0],[36,8.5],[32,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R09-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R09-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R09-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R09-lux"}]},{"id":"F4-R10","name":"Room 410","footprint":[[36,0],[40,0],[40,8.5],[36,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R10-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R10-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R10-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R10-lux"}]},{"id":"F4-R11","name":"Room 411","footprint":[[0,11.5],[4,11.5],[4,20],[0,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R11-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R11-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R11-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R11-lux"}]},{"id":"F4-R12","name":"Room 412","footprint":[[4,11.5],[8,11.5],[8,20],[4,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R12-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R12-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R12-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R12-lux"}]},{"id":"F4-R13","name":"Room 413","footprint":[[8,11.5],[12,11.5],[12,20],[8,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R13-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R13-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R13-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R13-lux"}]},{"id":"F4-R14","name":"Room 414","footprint":[[12,11.5],[16,11.5],[16,20],[12,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R14-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R14-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R14-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R14-lux"}]},{"id":"F4-R15","name":"Room 415","footprint":[[24,11.5],[28,11.5],[28,20],[24,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R15-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R15-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R15-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R15-lux"}]},{"id":"F4-R16","name":"Room 416","footprint":[[28,11.5],[32,11.5],[32,20],[28,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R16-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R16-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R16-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R16-lux"}]},{"id":"F4-R17","name":"Room 417","footprint":[[32,11.5],[36,11.5],[36,20],[32,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R17-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R17-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R17-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R17-lux"}]},{"id":"F4-R18","name":"Room 418","footprint":[[36,11.5],[40,11.5],[40,20],[36,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R18-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R18-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R18-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R18-lux"}]}]},{"id":"F4-Z-CORR","name":"Corridor","function":"corridor","rooms":[{"id":"F4-CORR","name":"Corridor L4","footprint":[[0,8.5],[40,8.5],[40,11.5],[0,11.5]],"sensors":[{"channel":"occupancy","unit":"people","deviceId":"dev-F4-CORR-occupancy"}]}]},{"id":"F4-Z-CORE","name":"Service core","function":"plant","rooms":[{"id":"F4-CORE","name":"Core L4 (lifts & stairs)","footprint":[[16,11.5],[24,11.5],[24,20],[16,20]],"sensors":[]}]}]},{"id":"F5","name":"Level 5 · Guest","elevation":16.5,"height":3.5,"outline":[[0,0],[40,0],[40,20],[0,20]],"zones":[{"id":"F5-Z-GUEST","name":"Guest rooms","function":"guest","rooms":[{"id":"F5-R01","name":"Room 501","footprint":[[0,0],[4,0],[4,8.5],[0,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R01-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R01-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R01-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R01-lux"}]},{"id":"F5-R02","name":"Room 502","footprint":[[4,0],[8,0],[8,8.5],[4,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R02-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R02-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R02-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R02-lux"}]},{"id":"F5-R03","name":"Room 503","footprint":[[8,0],[12,0],[12,8.5],[8,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R03-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R03-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R03-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R03-lux"}]},{"id":"F5-R04","name":"Room 504","footprint":[[12,0],[16,0],[16,8.5],[12,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R04-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R04-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R04-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R04-lux"}]},{"id":"F5-R05","name":"Room 505","footprint":[[16,0],[20,0],[20,8.5],[16,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R05-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R05-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R05-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R05-lux"}]},{"id":"F5-R06","name":"Room 506","footprint":[[20,0],[24,0],[24,8.5],[20,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R06-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R06-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R06-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R06-lux"}]},{"id":"F5-R07","name":"Room 507","footprint":[[24,0],[28,0],[28,8.5],[24,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R07-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R07-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R07-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R07-lux"}]},{"id":"F5-R08","name":"Room 508","footprint":[[28,0],[32,0],[32,8.5],[28,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R08-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R08-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R08-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R08-lux"}]},{"id":"F5-R09","name":"Room 509","footprint":[[32,0],[36,0],[36,8.5],[32,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R09-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R09-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R09-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R09-lux"}]},{"id":"F5-R10","name":"Room 510","footprint":[[36,0],[40,0],[40,8.5],[36,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R10-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R10-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R10-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R10-lux"}]},{"id":"F5-R11","name":"Room 511","footprint":[[0,11.5],[4,11.5],[4,20],[0,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R11-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R11-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R11-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R11-lux"}]},{"id":"F5-R12","name":"Room 512","footprint":[[4,11.5],[8,11.5],[8,20],[4,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R12-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R12-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R12-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R12-lux"}]},{"id":"F5-R13","name":"Room 513","footprint":[[8,11.5],[12,11.5],[12,20],[8,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R13-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R13-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R13-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R13-lux"}]},{"id":"F5-R14","name":"Room 514","footprint":[[12,11.5],[16,11.5],[16,20],[12,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R14-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R14-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R14-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R14-lux"}]},{"id":"F5-R15","name":"Room 515","footprint":[[24,11.5],[28,11.5],[28,20],[24,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R15-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R15-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R15-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R15-lux"}]},{"id":"F5-R16","name":"Room 516","footprint":[[28,11.5],[32,11.5],[32,20],[28,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R16-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R16-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R16-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R16-lux"}]},{"id":"F5-R17","name":"Room 517","footprint":[[32,11.5],[36,11.5],[36,20],[32,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R17-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R17-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R17-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R17-lux"}]},{"id":"F5-R18","name":"Room 518","footprint":[[36,11.5],[40,11.5],[40,20],[36,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R18-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R18-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R18-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R18-lux"}]}]},{"id":"F5-Z-CORR","name":"Corridor","function":"corridor","rooms":[{"id":"F5-CORR","name":"Corridor L5","footprint":[[0,8.5],[40,8.5],[40,11.5],[0,11.5]],"sensors":[{"channel":"occupancy","unit":"people","deviceId":"dev-F5-CORR-occupancy"}]}]},{"id":"F5-Z-CORE","name":"Service core","function":"plant","rooms":[{"id":"F5-CORE","name":"Core L5 (lifts & stairs)","footprint":[[16,11.5],[24,11.5],[24,20],[16,20]],"sensors":[]}]}]},{"id":"F6","name":"Level 6 · Guest","elevation":20,"height":3.5,"outline":[[0,0],[40,0],[40,20],[0,20]],"zones":[{"id":"F6-Z-GUEST","name":"Guest rooms","function":"guest","rooms":[{"id":"F6-R01","name":"Room 601","footprint":[[0,0],[4,0],[4,8.5],[0,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R01-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R01-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R01-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R01-lux"}]},{"id":"F6-R02","name":"Room 602","footprint":[[4,0],[8,0],[8,8.5],[4,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R02-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R02-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R02-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R02-lux"}]},{"id":"F6-R03","name":"Room 603","footprint":[[8,0],[12,0],[12,8.5],[8,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R03-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R03-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R03-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R03-lux"}]},{"id":"F6-R04","name":"Room 604","footprint":[[12,0],[16,0],[16,8.5],[12,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R04-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R04-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R04-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R04-lux"}]},{"id":"F6-R05","name":"Room 605","footprint":[[16,0],[20,0],[20,8.5],[16,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R05-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R05-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R05-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R05-lux"}]},{"id":"F6-R06","name":"Room 606","footprint":[[20,0],[24,0],[24,8.5],[20,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R06-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R06-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R06-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R06-lux"}]},{"id":"F6-R07","name":"Room 607","footprint":[[24,0],[28,0],[28,8.5],[24,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R07-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R07-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R07-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R07-lux"}]},{"id":"F6-R08","name":"Room 608","footprint":[[28,0],[32,0],[32,8.5],[28,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R08-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R08-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R08-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R08-lux"}]},{"id":"F6-R09","name":"Room 609","footprint":[[32,0],[36,0],[36,8.5],[32,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R09-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R09-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R09-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R09-lux"}]},{"id":"F6-R10","name":"Room 610","footprint":[[36,0],[40,0],[40,8.5],[36,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R10-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R10-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R10-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R10-lux"}]},{"id":"F6-R11","name":"Room 611","footprint":[[0,11.5],[4,11.5],[4,20],[0,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R11-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R11-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R11-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R11-lux"}]},{"id":"F6-R12","name":"Room 612","footprint":[[4,11.5],[8,11.5],[8,20],[4,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R12-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R12-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R12-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R12-lux"}]},{"id":"F6-R13","name":"Room 613","footprint":[[8,11.5],[12,11.5],[12,20],[8,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R13-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R13-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R13-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R13-lux"}]},{"id":"F6-R14","name":"Room 614","footprint":[[12,11.5],[16,11.5],[16,20],[12,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R14-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R14-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R14-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R14-lux"}]},{"id":"F6-R15","name":"Room 615","footprint":[[24,11.5],[28,11.5],[28,20],[24,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R15-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R15-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R15-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R15-lux"}]},{"id":"F6-R16","name":"Room 616","footprint":[[28,11.5],[32,11.5],[32,20],[28,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R16-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R16-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R16-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R16-lux"}]},{"id":"F6-R17","name":"Room 617","footprint":[[32,11.5],[36,11.5],[36,20],[32,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R17-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R17-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R17-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R17-lux"}]},{"id":"F6-R18","name":"Room 618","footprint":[[36,11.5],[40,11.5],[40,20],[36,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R18-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R18-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R18-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R18-lux"}]}]},{"id":"F6-Z-CORR","name":"Corridor","function":"corridor","rooms":[{"id":"F6-CORR","name":"Corridor L6","footprint":[[0,8.5],[40,8.5],[40,11.5],[0,11.5]],"sensors":[{"channel":"occupancy","unit":"people","deviceId":"dev-F6-CORR-occupancy"}]}]},{"id":"F6-Z-CORE","name":"Service core","function":"plant","rooms":[{"id":"F6-CORE","name":"Core L6 (lifts & stairs)","footprint":[[16,11.5],[24,11.5],[24,20],[16,20]],"sensors":[]}]}]},{"id":"F7","name":"Level 7 · Guest","elevation":23.5,"height":3.5,"outline":[[0,0],[40,0],[40,20],[0,20]],"zones":[{"id":"F7-Z-GUEST","name":"Guest rooms","function":"guest","rooms":[{"id":"F7-R01","name":"Room 701","footprint":[[0,0],[4,0],[4,8.5],[0,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R01-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R01-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R01-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R01-lux"}]},{"id":"F7-R02","name":"Room 702","footprint":[[4,0],[8,0],[8,8.5],[4,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R02-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R02-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R02-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R02-lux"}]},{"id":"F7-R03","name":"Room 703","footprint":[[8,0],[12,0],[12,8.5],[8,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R03-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R03-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R03-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R03-lux"}]},{"id":"F7-R04","name":"Room 704","footprint":[[12,0],[16,0],[16,8.5],[12,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R04-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R04-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R04-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R04-lux"}]},{"id":"F7-R05","name":"Room 705","footprint":[[16,0],[20,0],[20,8.5],[16,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R05-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R05-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R05-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R05-lux"}]},{"id":"F7-R06","name":"Room 706","footprint":[[20,0],[24,0],[24,8.5],[20,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R06-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R06-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R06-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R06-lux"}]},{"id":"F7-R07","name":"Room 707","footprint":[[24,0],[28,0],[28,8.5],[24,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R07-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R07-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R07-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R07-lux"}]},{"id":"F7-R08","name":"Room 708","footprint":[[28,0],[32,0],[32,8.5],[28,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R08-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R08-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R08-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R08-lux"}]},{"id":"F7-R09","name":"Room 709","footprint":[[32,0],[36,0],[36,8.5],[32,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R09-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R09-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R09-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R09-lux"}]},{"id":"F7-R10","name":"Room 710","footprint":[[36,0],[40,0],[40,8.5],[36,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R10-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R10-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R10-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R10-lux"}]},{"id":"F7-R11","name":"Room 711","footprint":[[0,11.5],[4,11.5],[4,20],[0,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R11-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R11-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R11-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R11-lux"}]},{"id":"F7-R12","name":"Room 712","footprint":[[4,11.5],[8,11.5],[8,20],[4,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R12-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R12-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R12-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R12-lux"}]},{"id":"F7-R13","name":"Room 713","footprint":[[8,11.5],[12,11.5],[12,20],[8,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R13-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R13-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R13-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R13-lux"}]},{"id":"F7-R14","name":"Room 714","footprint":[[12,11.5],[16,11.5],[16,20],[12,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R14-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R14-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R14-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R14-lux"}]},{"id":"F7-R15","name":"Room 715","footprint":[[24,11.5],[28,11.5],[28,20],[24,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R15-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R15-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R15-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R15-lux"}]},{"id":"F7-R16","name":"Room 716","footprint":[[28,11.5],[32,11.5],[32,20],[28,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R16-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R16-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R16-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R16-lux"}]},{"id":"F7-R17","name":"Room 717","footprint":[[32,11.5],[36,11.5],[36,20],[32,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R17-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R17-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R17-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R17-lux"}]},{"id":"F7-R18","name":"Room 718","footprint":[[36,11.5],[40,11.5],[40,20],[36,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R18-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R18-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R18-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R18-lux"}]}]},{"id":"F7-Z-CORR","name":"Corridor","function":"corridor","rooms":[{"id":"F7-CORR","name":"Corridor L7","footprint":[[0,8.5],[40,8.5],[40,11.5],[0,11.5]],"sensors":[{"channel":"occupancy","unit":"people","deviceId":"dev-F7-CORR-occupancy"}]}]},{"id":"F7-Z-CORE","name":"Service core","function":"plant","rooms":[{"id":"F7-CORE","name":"Core L7 (lifts & stairs)","footprint":[[16,11.5],[24,11.5],[24,20],[16,20]],"sensors":[]}]}]},{"id":"F8","name":"Level 8 · Plant & Roof","elevation":27,"height":4,"outline":[[0,0],[40,0],[40,20],[0,20]],"zones":[{"id":"F8-Z-PLANT","name":"Plant","function":"plant","rooms":[{"id":"F8-PLANT","name":"Plant Room","footprint":[[0,0],[20,0],[20,20],[0,20]],"sensors":[{"channel":"power","unit":"kW","deviceId":"dev-F8-PLANT-power"},{"channel":"temperature","unit":"degC","deviceId":"dev-F8-PLANT-temperature"}]},{"id":"F8-LIFT","name":"Lift Machine Room","footprint":[[20,0],[28,0],[28,20],[20,20]],"sensors":[{"channel":"power","unit":"kW","deviceId":"dev-F8-LIFT-power"}]}]},{"id":"F8-Z-ROOF","name":"Roof","function":"amenity","rooms":[{"id":"F8-TERR","name":"Roof Terrace","footprint":[[28,0],[40,0],[40,20],[28,20]],"sensors":[{"channel":"lux","unit":"lx","deviceId":"dev-F8-TERR-lux"},{"channel":"occupancy","unit":"people","deviceId":"dev-F8-TERR-occupancy"}]}]}]}]'),d1={id:Kf,name:Jf,location:Qf,floors:ep},tp="modulepreload",np=function(n){return"/ihapm-bms-showcase/"+n},vl={},nr=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let o=function(l){return Promise.all(l.map(u=>Promise.resolve(u).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=o(t.map(l=>{if(l=np(l),l in vl)return;vl[l]=!0;const u=l.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":tp,u||(d.as="script"),d.crossOrigin="",d.href=l,c&&d.setAttribute("nonce",c),document.head.appendChild(d),u)return new Promise((f,g)=>{d.addEventListener("load",f),d.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cc="170",Ki={ROTATE:0,DOLLY:1,PAN:2},Zi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ip=0,_l=1,sp=2,Wh=1,rp=2,Cn=3,Nn=0,$t=1,rn=2,Fn=0,Ji=1,Un=2,yl=3,xl=4,op=5,hi=100,ap=101,cp=102,lp=103,up=104,hp=200,dp=201,fp=202,pp=203,Ia=204,Pa=205,mp=206,gp=207,vp=208,_p=209,yp=210,xp=211,Sp=212,Mp=213,bp=214,Fa=0,Da=1,La=2,is=3,Na=4,Ua=5,Oa=6,ka=7,$h=0,wp=1,Ep=2,jn=0,Xh=1,Zh=2,qh=3,Ic=4,Tp=5,Yh=6,jh=7,Kh=300,ss=301,rs=302,za=303,Ba=304,So=306,Va=1e3,fi=1001,Ha=1002,Jt=1003,Rp=1004,ir=1005,yn=1006,Do=1007,pi=1008,On=1009,Jh=1010,Qh=1011,Bs=1012,Pc=1013,mi=1014,xn=1015,Dn=1016,Fc=1017,Dc=1018,os=1020,ed=35902,td=1021,nd=1022,pn=1023,id=1024,sd=1025,Qi=1026,as=1027,Lc=1028,Nc=1029,rd=1030,Uc=1031,Oc=1033,Jr=33776,Qr=33777,eo=33778,to=33779,Ga=35840,Wa=35841,$a=35842,Xa=35843,Za=36196,qa=37492,Ya=37496,ja=37808,Ka=37809,Ja=37810,Qa=37811,ec=37812,tc=37813,nc=37814,ic=37815,sc=37816,rc=37817,oc=37818,ac=37819,cc=37820,lc=37821,no=36492,uc=36494,hc=36495,od=36283,dc=36284,fc=36285,pc=36286,Ap=3200,Cp=3201,Ip=0,Pp=1,Yn="",tn="srgb",fs="srgb-linear",Mo="linear",it="srgb",Ti=7680,Sl=519,Fp=512,Dp=513,Lp=514,ad=515,Np=516,Up=517,Op=518,kp=519,Ml=35044,ro=35048,bl="300 es",Pn=2e3,oo=2001;class xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wl=1234567;const es=Math.PI/180,Vs=180/Math.PI;function Si(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]).toLowerCase()}function Ct(n,e,t){return Math.max(e,Math.min(t,n))}function kc(n,e){return(n%e+e)%e}function zp(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Bp(n,e,t){return n!==e?(t-n)/(e-n):0}function Ls(n,e,t){return(1-t)*n+t*e}function Vp(n,e,t,i){return Ls(n,e,1-Math.exp(-t*i))}function Hp(n,e=1){return e-Math.abs(kc(n,e*2)-e)}function Gp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Wp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function $p(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Xp(n,e){return n+Math.random()*(e-n)}function Zp(n){return n*(.5-Math.random())}function qp(n){n!==void 0&&(wl=n);let e=wl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Yp(n){return n*es}function jp(n){return n*Vs}function Kp(n){return(n&n-1)===0&&n!==0}function Jp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Qp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function em(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),d=o((e-i)/2),f=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,c*h,c*d,a*l);break;case"YZY":n.set(c*d,a*u,c*h,a*l);break;case"ZXZ":n.set(c*h,c*d,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*f,a*l);break;case"YXY":n.set(c*f,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Wi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function kt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const _t={DEG2RAD:es,RAD2DEG:Vs,generateUUID:Si,clamp:Ct,euclideanModulo:kc,mapLinear:zp,inverseLerp:Bp,lerp:Ls,damp:Vp,pingpong:Hp,smoothstep:Gp,smootherstep:Wp,randInt:$p,randFloat:Xp,randFloatSpread:Zp,seededRandom:qp,degToRad:Yp,radToDeg:jp,isPowerOfTwo:Kp,ceilPowerOfTwo:Jp,floorPowerOfTwo:Qp,setQuaternionFromProperEuler:em,normalize:kt,denormalize:Wi};class se{constructor(e=0,t=0){se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,t,i,s,r,o,a,c,l){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],f=i[5],g=i[8],v=s[0],m=s[3],p=s[6],T=s[1],b=s[4],x=s[7],U=s[2],C=s[5],A=s[8];return r[0]=o*v+a*T+c*U,r[3]=o*m+a*b+c*C,r[6]=o*p+a*x+c*A,r[1]=l*v+u*T+h*U,r[4]=l*m+u*b+h*C,r[7]=l*p+u*x+h*A,r[2]=d*v+f*T+g*U,r[5]=d*m+f*b+g*C,r[8]=d*p+f*x+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,g=t*h+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(s*l-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=d*v,e[4]=(u*t-s*c)*v,e[5]=(s*r-a*t)*v,e[6]=f*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Lo.makeScale(e,t)),this}rotate(e){return this.premultiply(Lo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Lo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Lo=new $e;function cd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ao(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function tm(){const n=ao("canvas");return n.style.display="block",n}const El={};function Ps(n){n in El||(El[n]=!0,console.warn(n))}function nm(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function im(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function sm(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ke={enabled:!0,workingColorSpace:fs,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===it&&(n.r=Ln(n.r),n.g=Ln(n.g),n.b=Ln(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===it&&(n.r=ts(n.r),n.g=ts(n.g),n.b=ts(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Yn?Mo:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Ln(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ts(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Tl=[.64,.33,.3,.6,.15,.06],Rl=[.2126,.7152,.0722],Al=[.3127,.329],Cl=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Il=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ke.define({[fs]:{primaries:Tl,whitePoint:Al,transfer:Mo,toXYZ:Cl,fromXYZ:Il,luminanceCoefficients:Rl,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:Tl,whitePoint:Al,transfer:it,toXYZ:Cl,fromXYZ:Il,luminanceCoefficients:Rl,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}});let Ri;class rm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ri===void 0&&(Ri=ao("canvas")),Ri.width=e.width,Ri.height=e.height;const i=Ri.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ri}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ao("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ln(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ln(t[i]/255)*255):t[i]=Ln(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let om=0;class ld{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=Si(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(No(s[o].image)):r.push(No(s[o]))}else r=No(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function No(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?rm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let am=0;class Ut extends xi{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,i=fi,s=fi,r=yn,o=pi,a=pn,c=On,l=Ut.DEFAULT_ANISOTROPY,u=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=Si(),this.name="",this.source=new ld(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Va:e.x=e.x-Math.floor(e.x);break;case fi:e.x=e.x<0?0:1;break;case Ha:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Va:e.y=e.y-Math.floor(e.y);break;case fi:e.y=e.y<0?0:1;break;case Ha:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=Kh;Ut.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,i=0,s=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,x=(f+1)/2,U=(p+1)/2,C=(u+d)/4,A=(h+v)/4,F=(g+m)/4;return b>x&&b>U?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=C/i,r=A/i):x>U?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=C/s,r=F/s):U<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),i=A/r,s=F/r),this.set(i,s,r,t),this}let T=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(h-v)/T,this.z=(d-u)/T,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cm extends xi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Ut(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ld(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gn extends cm{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ud extends Ut{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lm extends Ut{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(h!==v||c!==d||l!==f||u!==g){let m=1-a;const p=c*d+l*f+u*g+h*v,T=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const U=Math.sqrt(b),C=Math.atan2(U,p*T);m=Math.sin(m*C)/U,a=Math.sin(a*C)/U}const x=a*T;if(c=c*m+d*x,l=l*m+f*x,u=u*m+g*x,h=h*m+v*x,m===1-a){const U=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=U,l*=U,u*=U,h*=U}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-a*f,e[t+2]=l*g+u*f+a*d-c*h,e[t+3]=u*g-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),h=a(r/2),d=c(i/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(i>a&&i>h){const f=2*Math.sqrt(1+i-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-i-h);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-i-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+c*l+o*h-a*u,this.y=i+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Uo.copy(this).projectOnVector(e),this.sub(Uo)}reflect(e){return this.sub(Uo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Uo=new I,Pl=new gi;class Xt{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,un):un.fromBufferAttribute(r,o),un.applyMatrix4(e.matrixWorld),this.expandByPoint(un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),sr.copy(i.boundingBox)),sr.applyMatrix4(e.matrixWorld),this.union(sr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,un),un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ss),rr.subVectors(this.max,Ss),Ai.subVectors(e.a,Ss),Ci.subVectors(e.b,Ss),Ii.subVectors(e.c,Ss),Vn.subVectors(Ci,Ai),Hn.subVectors(Ii,Ci),ni.subVectors(Ai,Ii);let t=[0,-Vn.z,Vn.y,0,-Hn.z,Hn.y,0,-ni.z,ni.y,Vn.z,0,-Vn.x,Hn.z,0,-Hn.x,ni.z,0,-ni.x,-Vn.y,Vn.x,0,-Hn.y,Hn.x,0,-ni.y,ni.x,0];return!Oo(t,Ai,Ci,Ii,rr)||(t=[1,0,0,0,1,0,0,0,1],!Oo(t,Ai,Ci,Ii,rr))?!1:(or.crossVectors(Vn,Hn),t=[or.x,or.y,or.z],Oo(t,Ai,Ci,Ii,rr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wn=[new I,new I,new I,new I,new I,new I,new I,new I],un=new I,sr=new Xt,Ai=new I,Ci=new I,Ii=new I,Vn=new I,Hn=new I,ni=new I,Ss=new I,rr=new I,or=new I,ii=new I;function Oo(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ii.fromArray(n,r);const a=s.x*Math.abs(ii.x)+s.y*Math.abs(ii.y)+s.z*Math.abs(ii.z),c=e.dot(ii),l=t.dot(ii),u=i.dot(ii);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const um=new Xt,Ms=new I,ko=new I;class Mi{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):um.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ms.subVectors(e,this.center);const t=Ms.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ms,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ko.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ms.copy(e.center).add(ko)),this.expandByPoint(Ms.copy(e.center).sub(ko))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const En=new I,zo=new I,ar=new I,Gn=new I,Bo=new I,cr=new I,Vo=new I;class Ks{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,En)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=En.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(En.copy(this.origin).addScaledVector(this.direction,t),En.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){zo.copy(e).add(t).multiplyScalar(.5),ar.copy(t).sub(e).normalize(),Gn.copy(this.origin).sub(zo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ar),a=Gn.dot(this.direction),c=-Gn.dot(ar),l=Gn.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const v=1/u;h*=v,d*=v,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(zo).addScaledVector(ar,d),f}intersectSphere(e,t){En.subVectors(e.center,this.origin);const i=En.dot(this.direction),s=En.dot(En)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,En)!==null}intersectTriangle(e,t,i,s,r){Bo.subVectors(t,e),cr.subVectors(i,e),Vo.crossVectors(Bo,cr);let o=this.direction.dot(Vo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gn.subVectors(this.origin,e);const c=a*this.direction.dot(cr.crossVectors(Gn,cr));if(c<0)return null;const l=a*this.direction.dot(Bo.cross(Gn));if(l<0||c+l>o)return null;const u=-a*Gn.dot(Vo);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,i,s,r,o,a,c,l,u,h,d,f,g,v,m){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,u,h,d,f,g,v,m)}set(e,t,i,s,r,o,a,c,l,u,h,d,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Pi.setFromMatrixColumn(e,0).length(),r=1/Pi.setFromMatrixColumn(e,1).length(),o=1/Pi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,g=a*u,v=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-v*l,t[9]=-a*c,t[2]=v-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,g=l*u,v=l*h;t[0]=d+v*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=v+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,g=l*u,v=l*h;t[0]=d-v*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=v-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,f=o*h,g=a*u,v=a*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+v,t[1]=c*h,t[5]=v*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=v-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-v*h}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+v,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hm,e,dm)}lookAt(e,t,i){const s=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),Wn.crossVectors(i,Yt),Wn.lengthSq()===0&&(Math.abs(i.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),Wn.crossVectors(i,Yt)),Wn.normalize(),lr.crossVectors(Yt,Wn),s[0]=Wn.x,s[4]=lr.x,s[8]=Yt.x,s[1]=Wn.y,s[5]=lr.y,s[9]=Yt.y,s[2]=Wn.z,s[6]=lr.z,s[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],T=i[3],b=i[7],x=i[11],U=i[15],C=s[0],A=s[4],F=s[8],M=s[12],y=s[1],P=s[5],q=s[9],B=s[13],H=s[2],ee=s[6],W=s[10],re=s[14],G=s[3],he=s[7],ue=s[11],Se=s[15];return r[0]=o*C+a*y+c*H+l*G,r[4]=o*A+a*P+c*ee+l*he,r[8]=o*F+a*q+c*W+l*ue,r[12]=o*M+a*B+c*re+l*Se,r[1]=u*C+h*y+d*H+f*G,r[5]=u*A+h*P+d*ee+f*he,r[9]=u*F+h*q+d*W+f*ue,r[13]=u*M+h*B+d*re+f*Se,r[2]=g*C+v*y+m*H+p*G,r[6]=g*A+v*P+m*ee+p*he,r[10]=g*F+v*q+m*W+p*ue,r[14]=g*M+v*B+m*re+p*Se,r[3]=T*C+b*y+x*H+U*G,r[7]=T*A+b*P+x*ee+U*he,r[11]=T*F+b*q+x*W+U*ue,r[15]=T*M+b*B+x*re+U*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*c*h-s*l*h-r*a*d+i*l*d+s*a*f-i*c*f)+v*(+t*c*f-t*l*d+r*o*d-s*o*f+s*l*u-r*c*u)+m*(+t*l*h-t*a*f-r*o*h+i*o*f+r*a*u-i*l*u)+p*(-s*a*u-t*c*h+t*a*d+s*o*h-i*o*d+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],T=h*m*l-v*d*l+v*c*f-a*m*f-h*c*p+a*d*p,b=g*d*l-u*m*l-g*c*f+o*m*f+u*c*p-o*d*p,x=u*v*l-g*h*l+g*a*f-o*v*f-u*a*p+o*h*p,U=g*h*c-u*v*c-g*a*d+o*v*d+u*a*m-o*h*m,C=t*T+i*b+s*x+r*U;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=T*A,e[1]=(v*d*r-h*m*r-v*s*f+i*m*f+h*s*p-i*d*p)*A,e[2]=(a*m*r-v*c*r+v*s*l-i*m*l-a*s*p+i*c*p)*A,e[3]=(h*c*r-a*d*r-h*s*l+i*d*l+a*s*f-i*c*f)*A,e[4]=b*A,e[5]=(u*m*r-g*d*r+g*s*f-t*m*f-u*s*p+t*d*p)*A,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*p-t*c*p)*A,e[7]=(o*d*r-u*c*r+u*s*l-t*d*l-o*s*f+t*c*f)*A,e[8]=x*A,e[9]=(g*h*r-u*v*r-g*i*f+t*v*f+u*i*p-t*h*p)*A,e[10]=(o*v*r-g*a*r+g*i*l-t*v*l-o*i*p+t*a*p)*A,e[11]=(u*a*r-o*h*r-u*i*l+t*h*l+o*i*f-t*a*f)*A,e[12]=U*A,e[13]=(u*v*s-g*h*s+g*i*d-t*v*d-u*i*m+t*h*m)*A,e[14]=(g*a*s-o*v*s-g*i*c+t*v*c+o*i*m-t*a*m)*A,e[15]=(o*h*s-u*a*s+u*i*c-t*h*c-o*i*d+t*a*d)*A,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,g=r*h,v=o*u,m=o*h,p=a*h,T=c*l,b=c*u,x=c*h,U=i.x,C=i.y,A=i.z;return s[0]=(1-(v+p))*U,s[1]=(f+x)*U,s[2]=(g-b)*U,s[3]=0,s[4]=(f-x)*C,s[5]=(1-(d+p))*C,s[6]=(m+T)*C,s[7]=0,s[8]=(g+b)*A,s[9]=(m-T)*A,s[10]=(1-(d+v))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Pi.set(s[0],s[1],s[2]).length();const o=Pi.set(s[4],s[5],s[6]).length(),a=Pi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],hn.copy(this);const l=1/r,u=1/o,h=1/a;return hn.elements[0]*=l,hn.elements[1]*=l,hn.elements[2]*=l,hn.elements[4]*=u,hn.elements[5]*=u,hn.elements[6]*=u,hn.elements[8]*=h,hn.elements[9]*=h,hn.elements[10]*=h,t.setFromRotationMatrix(hn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Pn){const c=this.elements,l=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s);let f,g;if(a===Pn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===oo)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Pn){const c=this.elements,l=1/(t-e),u=1/(i-s),h=1/(o-r),d=(t+e)*l,f=(i+s)*u;let g,v;if(a===Pn)g=(o+r)*h,v=-2*h;else if(a===oo)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Pi=new I,hn=new ot,hm=new I(0,0,0),dm=new I(1,1,1),Wn=new I,lr=new I,Yt=new I,Fl=new ot,Dl=new gi;class kn{constructor(e=0,t=0,i=0,s=kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ct(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Fl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dl.setFromEuler(this),this.setFromQuaternion(Dl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kn.DEFAULT_ORDER="XYZ";class zc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fm=0;const Ll=new I,Fi=new gi,Tn=new ot,ur=new I,bs=new I,pm=new I,mm=new gi,Nl=new I(1,0,0),Ul=new I(0,1,0),Ol=new I(0,0,1),kl={type:"added"},gm={type:"removed"},Di={type:"childadded",child:null},Ho={type:"childremoved",child:null};class Ot extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new I,t=new kn,i=new gi,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ot},normalMatrix:{value:new $e}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.premultiply(Fi),this}rotateX(e){return this.rotateOnAxis(Nl,e)}rotateY(e){return this.rotateOnAxis(Ul,e)}rotateZ(e){return this.rotateOnAxis(Ol,e)}translateOnAxis(e,t){return Ll.copy(e).applyQuaternion(this.quaternion),this.position.add(Ll.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nl,e)}translateY(e){return this.translateOnAxis(Ul,e)}translateZ(e){return this.translateOnAxis(Ol,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ur.copy(e):ur.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(bs,ur,this.up):Tn.lookAt(ur,bs,this.up),this.quaternion.setFromRotationMatrix(Tn),s&&(Tn.extractRotation(s.matrixWorld),Fi.setFromRotationMatrix(Tn),this.quaternion.premultiply(Fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kl),Di.child=e,this.dispatchEvent(Di),Di.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gm),Ho.child=e,this.dispatchEvent(Ho),Ho.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kl),Di.child=e,this.dispatchEvent(Di),Di.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,e,pm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,mm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Ot.DEFAULT_UP=new I(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new I,Rn=new I,Go=new I,An=new I,Li=new I,Ni=new I,zl=new I,Wo=new I,$o=new I,Xo=new I,Zo=new xt,qo=new xt,Yo=new xt;class on{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),dn.subVectors(e,t),s.cross(dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){dn.subVectors(s,t),Rn.subVectors(i,t),Go.subVectors(e,t);const o=dn.dot(dn),a=dn.dot(Rn),c=dn.dot(Go),l=Rn.dot(Rn),u=Rn.dot(Go),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,An)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,An.x),c.addScaledVector(o,An.y),c.addScaledVector(a,An.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return Zo.setScalar(0),qo.setScalar(0),Yo.setScalar(0),Zo.fromBufferAttribute(e,t),qo.fromBufferAttribute(e,i),Yo.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Zo,r.x),o.addScaledVector(qo,r.y),o.addScaledVector(Yo,r.z),o}static isFrontFacing(e,t,i,s){return dn.subVectors(i,t),Rn.subVectors(e,t),dn.cross(Rn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),dn.cross(Rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return on.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return on.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Li.subVectors(s,i),Ni.subVectors(r,i),Wo.subVectors(e,i);const c=Li.dot(Wo),l=Ni.dot(Wo);if(c<=0&&l<=0)return t.copy(i);$o.subVectors(e,s);const u=Li.dot($o),h=Ni.dot($o);if(u>=0&&h<=u)return t.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Li,o);Xo.subVectors(e,r);const f=Li.dot(Xo),g=Ni.dot(Xo);if(g>=0&&f<=g)return t.copy(r);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Ni,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return zl.subVectors(r,s),a=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(zl,a);const p=1/(m+v+d);return o=v*p,a=d*p,t.copy(i).addScaledVector(Li,o).addScaledVector(Ni,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const hd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},hr={h:0,s:0,l:0};function jo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ve{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Ke.workingColorSpace){if(e=kc(e,1),t=Ct(t,0,1),i=Ct(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=jo(o,r,e+1/3),this.g=jo(o,r,e),this.b=jo(o,r,e-1/3)}return Ke.toWorkingColorSpace(this,s),this}setStyle(e,t=tn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tn){const i=hd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ln(e.r),this.g=Ln(e.g),this.b=Ln(e.b),this}copyLinearToSRGB(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tn){return Ke.fromWorkingColorSpace(Nt.copy(this),e),Math.round(Ct(Nt.r*255,0,255))*65536+Math.round(Ct(Nt.g*255,0,255))*256+Math.round(Ct(Nt.b*255,0,255))}getHexString(e=tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Nt.copy(this),t);const i=Nt.r,s=Nt.g,r=Nt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=tn){Ke.fromWorkingColorSpace(Nt.copy(this),e);const t=Nt.r,i=Nt.g,s=Nt.b;return e!==tn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL($n),this.setHSL($n.h+e,$n.s+t,$n.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(hr);const i=Ls($n.h,hr.h,t),s=Ls($n.s,hr.s,t),r=Ls($n.l,hr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new Ve;Ve.NAMES=hd;let vm=0;class ps extends xi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=Si(),this.name="",this.blending=Ji,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ia,this.blendDst=Pa,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ti,this.stencilZFail=Ti,this.stencilZPass=Ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(i.blending=this.blending),this.side!==Nn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ia&&(i.blendSrc=this.blendSrc),this.blendDst!==Pa&&(i.blendDst=this.blendDst),this.blendEquation!==hi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==is&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ti&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ti&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ti&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class bo extends ps{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=$h,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new I,dr=new se;class Pt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ml,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)dr.fromBufferAttribute(this,t),dr.applyMatrix3(e),this.setXY(t,dr.x,dr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Wi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=kt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wi(t,this.array)),t}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wi(t,this.array)),t}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wi(t,this.array)),t}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array),s=kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array),s=kt(s,this.array),r=kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ml&&(e.usage=this.usage),e}}class dd extends Pt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class fd extends Pt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Et extends Pt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let _m=0;const en=new ot,Ko=new Ot,Ui=new I,jt=new Xt,ws=new Xt,At=new I;class Ft extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cd(e)?fd:dd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new $e().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,t,i){return en.makeTranslation(e,t,i),this.applyMatrix4(en),this}scale(e,t,i){return en.makeScale(e,t,i),this.applyMatrix4(en),this}lookAt(e){return Ko.lookAt(e),Ko.updateMatrix(),this.applyMatrix4(Ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Et(i,3))}else{for(let i=0,s=t.count;i<s;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];jt.setFromBufferAttribute(r),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ws.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(jt.min,ws.min),jt.expandByPoint(At),At.addVectors(jt.max,ws.max),jt.expandByPoint(At)):(jt.expandByPoint(ws.min),jt.expandByPoint(ws.max))}jt.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)At.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(At));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)At.fromBufferAttribute(a,l),c&&(Ui.fromBufferAttribute(e,l),At.add(Ui)),s=Math.max(s,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let F=0;F<i.count;F++)a[F]=new I,c[F]=new I;const l=new I,u=new I,h=new I,d=new se,f=new se,g=new se,v=new I,m=new I;function p(F,M,y){l.fromBufferAttribute(i,F),u.fromBufferAttribute(i,M),h.fromBufferAttribute(i,y),d.fromBufferAttribute(r,F),f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,y),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(P),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(P),a[F].add(v),a[M].add(v),a[y].add(v),c[F].add(m),c[M].add(m),c[y].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let F=0,M=T.length;F<M;++F){const y=T[F],P=y.start,q=y.count;for(let B=P,H=P+q;B<H;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const b=new I,x=new I,U=new I,C=new I;function A(F){U.fromBufferAttribute(s,F),C.copy(U);const M=a[F];b.copy(M),b.sub(U.multiplyScalar(U.dot(M))).normalize(),x.crossVectors(C,M);const P=x.dot(c[F])<0?-1:1;o.setXYZW(F,b.x,b.y,b.z,P)}for(let F=0,M=T.length;F<M;++F){const y=T[F],P=y.start,q=y.count;for(let B=P,H=P+q;B<H;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,u=new I,h=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new Pt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ft,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bl=new ot,si=new Ks,fr=new Mi,Vl=new I,pr=new I,mr=new I,gr=new I,Jo=new I,vr=new I,Hl=new I,_r=new I;class It extends Ot{constructor(e=new Ft,t=new bo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){vr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(Jo.fromBufferAttribute(h,e),o?vr.addScaledVector(Jo,u):vr.addScaledVector(Jo.sub(t),u))}t.add(vr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fr.copy(i.boundingSphere),fr.applyMatrix4(r),si.copy(e.ray).recast(e.near),!(fr.containsPoint(si.origin)===!1&&(si.intersectSphere(fr,Vl)===null||si.origin.distanceToSquared(Vl)>(e.far-e.near)**2))&&(Bl.copy(r).invert(),si.copy(e.ray).applyMatrix4(Bl),!(i.boundingBox!==null&&si.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,si)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],T=Math.max(m.start,f.start),b=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=T,U=b;x<U;x+=3){const C=a.getX(x),A=a.getX(x+1),F=a.getX(x+2);s=yr(this,p,e,i,l,u,h,C,A,F),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const T=a.getX(m),b=a.getX(m+1),x=a.getX(m+2);s=yr(this,o,e,i,l,u,h,T,b,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],T=Math.max(m.start,f.start),b=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=T,U=b;x<U;x+=3){const C=x,A=x+1,F=x+2;s=yr(this,p,e,i,l,u,h,C,A,F),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const T=m,b=m+1,x=m+2;s=yr(this,o,e,i,l,u,h,T,b,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function ym(n,e,t,i,s,r,o,a){let c;if(e.side===$t?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===Nn,a),c===null)return null;_r.copy(a),_r.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(_r);return l<t.near||l>t.far?null:{distance:l,point:_r.clone(),object:n}}function yr(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,pr),n.getVertexPosition(c,mr),n.getVertexPosition(l,gr);const u=ym(n,e,t,i,pr,mr,gr,Hl);if(u){const h=new I;on.getBarycoord(Hl,pr,mr,gr,h),s&&(u.uv=on.getInterpolatedAttribute(s,a,c,l,h,new se)),r&&(u.uv1=on.getInterpolatedAttribute(r,a,c,l,h,new se)),o&&(u.normal=on.getInterpolatedAttribute(o,a,c,l,h,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new I,materialIndex:0};on.getNormal(pr,mr,gr,d.normal),u.face=d,u.barycoord=h}return u}class Js extends Ft{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Et(l,3)),this.setAttribute("normal",new Et(u,3)),this.setAttribute("uv",new Et(h,2));function g(v,m,p,T,b,x,U,C,A,F,M){const y=x/A,P=U/F,q=x/2,B=U/2,H=C/2,ee=A+1,W=F+1;let re=0,G=0;const he=new I;for(let ue=0;ue<W;ue++){const Se=ue*P-B;for(let Be=0;Be<ee;Be++){const Je=Be*y-q;he[v]=Je*T,he[m]=Se*b,he[p]=H,l.push(he.x,he.y,he.z),he[v]=0,he[m]=0,he[p]=C>0?1:-1,u.push(he.x,he.y,he.z),h.push(Be/A),h.push(1-ue/F),re+=1}}for(let ue=0;ue<F;ue++)for(let Se=0;Se<A;Se++){const Be=d+Se+ee*ue,Je=d+Se+ee*(ue+1),K=d+(Se+1)+ee*(ue+1),ae=d+(Se+1)+ee*ue;c.push(Be,Je,ae),c.push(Je,K,ae),G+=6}a.addGroup(f,G,M),f+=G,d+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Js(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Vt(n){const e={};for(let t=0;t<n.length;t++){const i=cs(n[t]);for(const s in i)e[s]=i[s]}return e}function xm(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function pd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const Hs={clone:cs,merge:Vt};var Sm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wt extends ps{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sm,this.fragmentShader=Mm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cs(e.uniforms),this.uniformsGroups=xm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class md extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=Pn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xn=new I,Gl=new se,Wl=new se;class nn extends md{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(es*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vs*2*Math.atan(Math.tan(es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z)}getViewSize(e,t){return this.getViewBounds(e,Gl,Wl),t.subVectors(Wl,Gl)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(es*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Oi=-90,ki=1;class bm extends Ot{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new nn(Oi,ki,e,t);s.layers=this.layers,this.add(s);const r=new nn(Oi,ki,e,t);r.layers=this.layers,this.add(r);const o=new nn(Oi,ki,e,t);o.layers=this.layers,this.add(o);const a=new nn(Oi,ki,e,t);a.layers=this.layers,this.add(a);const c=new nn(Oi,ki,e,t);c.layers=this.layers,this.add(c);const l=new nn(Oi,ki,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Pn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===oo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class gd extends Ut{constructor(e,t,i,s,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:ss,super(e,t,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wm extends gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new gd(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Js(5,5,5),r=new wt({name:"CubemapFromEquirect",uniforms:cs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$t,blending:Fn});r.uniforms.tEquirect.value=t;const o=new It(s,r),a=t.minFilter;return t.minFilter===pi&&(t.minFilter=yn),new bm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const Qo=new I,Em=new I,Tm=new $e;class qn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Qo.subVectors(i,t).cross(Em.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Qo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Tm.getNormalMatrix(e),s=this.coplanarPoint(Qo).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ri=new Mi,xr=new I;class vd{constructor(e=new qn,t=new qn,i=new qn,s=new qn,r=new qn,o=new qn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Pn){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],T=s[13],b=s[14],x=s[15];if(i[0].setComponents(c-r,d-l,m-f,x-p).normalize(),i[1].setComponents(c+r,d+l,m+f,x+p).normalize(),i[2].setComponents(c+o,d+u,m+g,x+T).normalize(),i[3].setComponents(c-o,d-u,m-g,x-T).normalize(),i[4].setComponents(c-a,d-h,m-v,x-b).normalize(),t===Pn)i[5].setComponents(c+a,d+h,m+v,x+b).normalize();else if(t===oo)i[5].setComponents(a,h,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(e){return ri.center.set(0,0,0),ri.radius=.7071067811865476,ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(xr.x=s.normal.x>0?e.max.x:e.min.x,xr.y=s.normal.y>0?e.max.y:e.min.y,xr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(xr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _d(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Rm(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],v=h[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,h[d]=v)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const v=h[f];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class wo extends Ft{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,h=e/a,d=t/c,f=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const T=p*d-o;for(let b=0;b<l;b++){const x=b*h-r;g.push(x,-T,0),v.push(0,0,1),m.push(b/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<a;T++){const b=T+l*p,x=T+l*(p+1),U=T+1+l*(p+1),C=T+1+l*p;f.push(b,x,C),f.push(x,U,C)}this.setIndex(f),this.setAttribute("position",new Et(g,3)),this.setAttribute("normal",new Et(v,3)),this.setAttribute("uv",new Et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Am=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cm=`#ifdef USE_ALPHAHASH
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
#endif`,Im=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lm=`#ifdef USE_AOMAP
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
#endif`,Nm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Um=`#ifdef USE_BATCHING
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
#endif`,Om=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,km=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vm=`#ifdef USE_IRIDESCENCE
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
#endif`,Hm=`#ifdef USE_BUMPMAP
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
#endif`,Gm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ym=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Km=`#define PI 3.141592653589793
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
} // validated`,Jm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qm=`vec3 transformedNormal = objectNormal;
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
#endif`,eg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ng=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ig=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sg="gl_FragColor = linearToOutputTexel( gl_FragColor );",rg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,og=`#ifdef USE_ENVMAP
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
#endif`,ag=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cg=`#ifdef USE_ENVMAP
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
#endif`,lg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ug=`#ifdef USE_ENVMAP
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
#endif`,hg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mg=`#ifdef USE_GRADIENTMAP
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
}`,gg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_g=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yg=`uniform bool receiveShadow;
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
#endif`,xg=`#ifdef USE_ENVMAP
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
#endif`,Sg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Eg=`PhysicalMaterial material;
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
#endif`,Tg=`struct PhysicalMaterial {
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
}`,Rg=`
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
#endif`,Ag=`#if defined( RE_IndirectDiffuse )
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
#endif`,Cg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ig=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ng=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ug=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Og=`#if defined( USE_POINTS_UV )
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
#endif`,kg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gg=`#ifdef USE_MORPHTARGETS
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
#endif`,Wg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$g=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jg=`#ifdef USE_NORMALMAP
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
#endif`,Kg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ev=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,iv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ov=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,av=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dv=`float getShadowMask() {
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
}`,fv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pv=`#ifdef USE_SKINNING
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
#endif`,mv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gv=`#ifdef USE_SKINNING
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
#endif`,vv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_v=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sv=`#ifdef USE_TRANSMISSION
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
#endif`,Mv=`#ifdef USE_TRANSMISSION
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
#endif`,bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ev=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Av=`uniform sampler2D t2D;
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
}`,Cv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Iv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Pv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dv=`#include <common>
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
}`,Lv=`#if DEPTH_PACKING == 3200
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
}`,Nv=`#define DISTANCE
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
}`,Uv=`#define DISTANCE
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
}`,Ov=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zv=`uniform float scale;
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
}`,Bv=`uniform vec3 diffuse;
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
}`,Vv=`#include <common>
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
}`,Hv=`uniform vec3 diffuse;
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
}`,Gv=`#define LAMBERT
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
}`,Wv=`#define LAMBERT
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
}`,$v=`#define MATCAP
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
}`,Xv=`#define MATCAP
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
}`,Zv=`#define NORMAL
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
}`,qv=`#define NORMAL
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
}`,Yv=`#define PHONG
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
}`,jv=`#define PHONG
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
}`,Kv=`#define STANDARD
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
}`,Jv=`#define STANDARD
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
}`,Qv=`#define TOON
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
}`,e_=`#define TOON
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
}`,t_=`uniform float size;
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
}`,n_=`uniform vec3 diffuse;
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
}`,i_=`#include <common>
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
}`,s_=`uniform vec3 color;
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
}`,r_=`uniform float rotation;
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
}`,o_=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:Am,alphahash_pars_fragment:Cm,alphamap_fragment:Im,alphamap_pars_fragment:Pm,alphatest_fragment:Fm,alphatest_pars_fragment:Dm,aomap_fragment:Lm,aomap_pars_fragment:Nm,batching_pars_vertex:Um,batching_vertex:Om,begin_vertex:km,beginnormal_vertex:zm,bsdfs:Bm,iridescence_fragment:Vm,bumpmap_pars_fragment:Hm,clipping_planes_fragment:Gm,clipping_planes_pars_fragment:Wm,clipping_planes_pars_vertex:$m,clipping_planes_vertex:Xm,color_fragment:Zm,color_pars_fragment:qm,color_pars_vertex:Ym,color_vertex:jm,common:Km,cube_uv_reflection_fragment:Jm,defaultnormal_vertex:Qm,displacementmap_pars_vertex:eg,displacementmap_vertex:tg,emissivemap_fragment:ng,emissivemap_pars_fragment:ig,colorspace_fragment:sg,colorspace_pars_fragment:rg,envmap_fragment:og,envmap_common_pars_fragment:ag,envmap_pars_fragment:cg,envmap_pars_vertex:lg,envmap_physical_pars_fragment:xg,envmap_vertex:ug,fog_vertex:hg,fog_pars_vertex:dg,fog_fragment:fg,fog_pars_fragment:pg,gradientmap_pars_fragment:mg,lightmap_pars_fragment:gg,lights_lambert_fragment:vg,lights_lambert_pars_fragment:_g,lights_pars_begin:yg,lights_toon_fragment:Sg,lights_toon_pars_fragment:Mg,lights_phong_fragment:bg,lights_phong_pars_fragment:wg,lights_physical_fragment:Eg,lights_physical_pars_fragment:Tg,lights_fragment_begin:Rg,lights_fragment_maps:Ag,lights_fragment_end:Cg,logdepthbuf_fragment:Ig,logdepthbuf_pars_fragment:Pg,logdepthbuf_pars_vertex:Fg,logdepthbuf_vertex:Dg,map_fragment:Lg,map_pars_fragment:Ng,map_particle_fragment:Ug,map_particle_pars_fragment:Og,metalnessmap_fragment:kg,metalnessmap_pars_fragment:zg,morphinstance_vertex:Bg,morphcolor_vertex:Vg,morphnormal_vertex:Hg,morphtarget_pars_vertex:Gg,morphtarget_vertex:Wg,normal_fragment_begin:$g,normal_fragment_maps:Xg,normal_pars_fragment:Zg,normal_pars_vertex:qg,normal_vertex:Yg,normalmap_pars_fragment:jg,clearcoat_normal_fragment_begin:Kg,clearcoat_normal_fragment_maps:Jg,clearcoat_pars_fragment:Qg,iridescence_pars_fragment:ev,opaque_fragment:tv,packing:nv,premultiplied_alpha_fragment:iv,project_vertex:sv,dithering_fragment:rv,dithering_pars_fragment:ov,roughnessmap_fragment:av,roughnessmap_pars_fragment:cv,shadowmap_pars_fragment:lv,shadowmap_pars_vertex:uv,shadowmap_vertex:hv,shadowmask_pars_fragment:dv,skinbase_vertex:fv,skinning_pars_vertex:pv,skinning_vertex:mv,skinnormal_vertex:gv,specularmap_fragment:vv,specularmap_pars_fragment:_v,tonemapping_fragment:yv,tonemapping_pars_fragment:xv,transmission_fragment:Sv,transmission_pars_fragment:Mv,uv_pars_fragment:bv,uv_pars_vertex:wv,uv_vertex:Ev,worldpos_vertex:Tv,background_vert:Rv,background_frag:Av,backgroundCube_vert:Cv,backgroundCube_frag:Iv,cube_vert:Pv,cube_frag:Fv,depth_vert:Dv,depth_frag:Lv,distanceRGBA_vert:Nv,distanceRGBA_frag:Uv,equirect_vert:Ov,equirect_frag:kv,linedashed_vert:zv,linedashed_frag:Bv,meshbasic_vert:Vv,meshbasic_frag:Hv,meshlambert_vert:Gv,meshlambert_frag:Wv,meshmatcap_vert:$v,meshmatcap_frag:Xv,meshnormal_vert:Zv,meshnormal_frag:qv,meshphong_vert:Yv,meshphong_frag:jv,meshphysical_vert:Kv,meshphysical_frag:Jv,meshtoon_vert:Qv,meshtoon_frag:e_,points_vert:t_,points_frag:n_,shadow_vert:i_,shadow_frag:s_,sprite_vert:r_,sprite_frag:o_},de={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},_n={basic:{uniforms:Vt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Vt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ve(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Vt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Vt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Vt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Ve(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Vt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Vt([de.points,de.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Vt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Vt([de.common,de.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Vt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Vt([de.sprite,de.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Vt([de.common,de.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Vt([de.lights,de.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};_n.physical={uniforms:Vt([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Sr={r:0,b:0,g:0},oi=new kn,a_=new ot;function c_(n,e,t,i,s,r,o){const a=new Ve(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function g(T){let b=T.isScene===!0?T.background:null;return b&&b.isTexture&&(b=(T.backgroundBlurriness>0?t:e).get(b)),b}function v(T){let b=!1;const x=g(T);x===null?p(a,c):x&&x.isColor&&(p(x,1),b=!0);const U=n.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,b){const x=g(b);x&&(x.isCubeTexture||x.mapping===So)?(u===void 0&&(u=new It(new Js(1,1,1),new wt({name:"BackgroundCubeMaterial",uniforms:cs(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),oi.copy(b.backgroundRotation),oi.x*=-1,oi.y*=-1,oi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(a_.makeRotationFromEuler(oi)),u.material.toneMapped=Ke.getTransfer(x.colorSpace)!==it,(h!==x||d!==x.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,f=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new It(new wo(2,2),new wt({name:"BackgroundMaterial",uniforms:cs(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(x.colorSpace)!==it,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,f=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function p(T,b){T.getRGB(Sr,pd(n)),i.buffers.color.setClear(Sr.r,Sr.g,Sr.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(T,b=1){a.set(T),c=b,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,p(a,c)},render:v,addToRenderList:m}}function l_(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(y,P,q,B,H){let ee=!1;const W=h(B,q,P);r!==W&&(r=W,l(r.object)),ee=f(y,B,q,H),ee&&g(y,B,q,H),H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,x(y,P,q,B),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return n.createVertexArray()}function l(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function h(y,P,q){const B=q.wireframe===!0;let H=i[y.id];H===void 0&&(H={},i[y.id]=H);let ee=H[P.id];ee===void 0&&(ee={},H[P.id]=ee);let W=ee[B];return W===void 0&&(W=d(c()),ee[B]=W),W}function d(y){const P=[],q=[],B=[];for(let H=0;H<t;H++)P[H]=0,q[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:q,attributeDivisors:B,object:y,attributes:{},index:null}}function f(y,P,q,B){const H=r.attributes,ee=P.attributes;let W=0;const re=q.getAttributes();for(const G in re)if(re[G].location>=0){const ue=H[G];let Se=ee[G];if(Se===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(Se=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(Se=y.instanceColor)),ue===void 0||ue.attribute!==Se||Se&&ue.data!==Se.data)return!0;W++}return r.attributesNum!==W||r.index!==B}function g(y,P,q,B){const H={},ee=P.attributes;let W=0;const re=q.getAttributes();for(const G in re)if(re[G].location>=0){let ue=ee[G];ue===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(ue=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(ue=y.instanceColor));const Se={};Se.attribute=ue,ue&&ue.data&&(Se.data=ue.data),H[G]=Se,W++}r.attributes=H,r.attributesNum=W,r.index=B}function v(){const y=r.newAttributes;for(let P=0,q=y.length;P<q;P++)y[P]=0}function m(y){p(y,0)}function p(y,P){const q=r.newAttributes,B=r.enabledAttributes,H=r.attributeDivisors;q[y]=1,B[y]===0&&(n.enableVertexAttribArray(y),B[y]=1),H[y]!==P&&(n.vertexAttribDivisor(y,P),H[y]=P)}function T(){const y=r.newAttributes,P=r.enabledAttributes;for(let q=0,B=P.length;q<B;q++)P[q]!==y[q]&&(n.disableVertexAttribArray(q),P[q]=0)}function b(y,P,q,B,H,ee,W){W===!0?n.vertexAttribIPointer(y,P,q,H,ee):n.vertexAttribPointer(y,P,q,B,H,ee)}function x(y,P,q,B){v();const H=B.attributes,ee=q.getAttributes(),W=P.defaultAttributeValues;for(const re in ee){const G=ee[re];if(G.location>=0){let he=H[re];if(he===void 0&&(re==="instanceMatrix"&&y.instanceMatrix&&(he=y.instanceMatrix),re==="instanceColor"&&y.instanceColor&&(he=y.instanceColor)),he!==void 0){const ue=he.normalized,Se=he.itemSize,Be=e.get(he);if(Be===void 0)continue;const Je=Be.buffer,K=Be.type,ae=Be.bytesPerElement,Ee=K===n.INT||K===n.UNSIGNED_INT||he.gpuType===Pc;if(he.isInterleavedBufferAttribute){const oe=he.data,Le=oe.stride,ke=he.offset;if(oe.isInstancedInterleavedBuffer){for(let Ue=0;Ue<G.locationSize;Ue++)p(G.location+Ue,oe.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ue=0;Ue<G.locationSize;Ue++)m(G.location+Ue);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let Ue=0;Ue<G.locationSize;Ue++)b(G.location+Ue,Se/G.locationSize,K,ue,Le*ae,(ke+Se/G.locationSize*Ue)*ae,Ee)}else{if(he.isInstancedBufferAttribute){for(let oe=0;oe<G.locationSize;oe++)p(G.location+oe,he.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let oe=0;oe<G.locationSize;oe++)m(G.location+oe);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let oe=0;oe<G.locationSize;oe++)b(G.location+oe,Se/G.locationSize,K,ue,Se*ae,Se/G.locationSize*oe*ae,Ee)}}else if(W!==void 0){const ue=W[re];if(ue!==void 0)switch(ue.length){case 2:n.vertexAttrib2fv(G.location,ue);break;case 3:n.vertexAttrib3fv(G.location,ue);break;case 4:n.vertexAttrib4fv(G.location,ue);break;default:n.vertexAttrib1fv(G.location,ue)}}}}T()}function U(){F();for(const y in i){const P=i[y];for(const q in P){const B=P[q];for(const H in B)u(B[H].object),delete B[H];delete P[q]}delete i[y]}}function C(y){if(i[y.id]===void 0)return;const P=i[y.id];for(const q in P){const B=P[q];for(const H in B)u(B[H].object),delete B[H];delete P[q]}delete i[y.id]}function A(y){for(const P in i){const q=i[P];if(q[y.id]===void 0)continue;const B=q[y.id];for(const H in B)u(B[H].object),delete B[H];delete q[y.id]}}function F(){M(),o=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:M,dispose:U,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function u_(n,e,t){let i;function s(l){i=l}function r(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),t.update(u,i,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,i,1)}function c(l,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*d[v];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function h_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==pn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const F=A===Dn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==On&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==xn&&!F)}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:U,maxSamples:C}}function d_(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new qn,a=new $e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const T=r?0:i,b=T*4;let x=p.clippingState||null;c.value=x,x=u(g,d,b,f);for(let U=0;U!==b;++U)x[U]=t[U];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=f+v*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,x=f;b!==v;++b,x+=4)o.copy(h[b]).applyMatrix4(T,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function f_(n){let e=new WeakMap;function t(o,a){return a===za?o.mapping=ss:a===Ba&&(o.mapping=rs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===za||a===Ba)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new wm(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class yd extends md{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const qi=4,$l=[.125,.215,.35,.446,.526,.582],di=20,ea=new yd,Xl=new Ve;let ta=null,na=0,ia=0,sa=!1;const ui=(1+Math.sqrt(5))/2,zi=1/ui,Zl=[new I(-ui,zi,0),new I(ui,zi,0),new I(-zi,0,ui),new I(zi,0,ui),new I(0,ui,-zi),new I(0,ui,zi),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class ql{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){ta=this._renderer.getRenderTarget(),na=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel(),sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ta,na,ia),this._renderer.xr.enabled=sa,e.scissorTest=!1,Mr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ss||e.mapping===rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ta=this._renderer.getRenderTarget(),na=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel(),sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:Dn,format:pn,colorSpace:fs,depthBuffer:!1},s=Yl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yl(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=p_(r)),this._blurMaterial=m_(r,e,t)}return s}_compileMaterial(e){const t=new It(this._lodPlanes[0],e);this._renderer.compile(t,ea)}_sceneToCubeUV(e,t,i,s){const a=new nn(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Xl),u.toneMapping=jn,u.autoClear=!1;const f=new bo({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),g=new It(new Js,f);let v=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(Xl),v=!0);for(let p=0;p<6;p++){const T=p%3;T===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):T===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const b=this._cubeSize;Mr(s,T*b,p>2?b:0,b,b),u.setRenderTarget(s),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ss||e.mapping===rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new It(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Mr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,ea)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Zl[(s-r-1)%Zl.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new It(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*di-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):di;m>di&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${di}`);const p=[];let T=0;for(let A=0;A<di;++A){const F=A/v,M=Math.exp(-F*F/2);p.push(M),A===0?T+=M:A<m&&(T+=2*M)}for(let A=0;A<p.length;A++)p[A]=p[A]/T;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-i;const x=this._sizeLods[s],U=3*x*(s>b-qi?s-b+qi:0),C=4*(this._cubeSize-x);Mr(t,U,C,3*x,2*x),c.setRenderTarget(t),c.render(h,ea)}}function p_(n){const e=[],t=[],i=[];let s=n;const r=n-qi+1+$l.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>n-qi?c=$l[o-n+qi-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,v=3,m=2,p=1,T=new Float32Array(v*g*f),b=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let C=0;C<f;C++){const A=C%3*2/3-1,F=C>2?0:-1,M=[A,F,0,A+2/3,F,0,A+2/3,F+1,0,A,F,0,A+2/3,F+1,0,A,F+1,0];T.set(M,v*g*C),b.set(d,m*g*C);const y=[C,C,C,C,C,C];x.set(y,p*g*C)}const U=new Ft;U.setAttribute("position",new Pt(T,v)),U.setAttribute("uv",new Pt(b,m)),U.setAttribute("faceIndex",new Pt(x,p)),e.push(U),s>qi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Yl(n,e,t){const i=new gn(n,e,t);return i.texture.mapping=So,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Mr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function m_(n,e,t){const i=new Float32Array(di),s=new I(0,1,0);return new wt({name:"SphericalGaussianBlur",defines:{n:di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function jl(){return new wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Kl(){return new wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Bc(){return`

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
	`}function g_(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===za||c===Ba,u=c===ss||c===rs;if(l||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new ql(n)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new ql(n)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function v_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Ps("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function __(n,e,t,i){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],n.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,g=h.attributes.position;let v=0;if(f!==null){const T=f.array;v=f.version;for(let b=0,x=T.length;b<x;b+=3){const U=T[b+0],C=T[b+1],A=T[b+2];d.push(U,C,C,A,A,U)}}else if(g!==void 0){const T=g.array;v=g.version;for(let b=0,x=T.length/3-1;b<x;b+=3){const U=b+0,C=b+1,A=b+2;d.push(U,C,C,A,A,U)}}else return;const m=new(cd(d)?fd:dd)(d,1);m.version=v;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function y_(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){n.drawElements(i,f,r,d*o),t.update(f,i,1)}function l(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,d*o,g),t.update(f,i,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function h(d,f,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,v,0,g);let p=0;for(let T=0;T<g;T++)p+=f[T]*v[T];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function x_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function S_(n,e,t){const i=new WeakMap,s=new xt;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let M=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let b=0;f===!0&&(b=1),g===!0&&(b=2),v===!0&&(b=3);let x=a.attributes.position.count*b,U=1;x>e.maxTextureSize&&(U=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const C=new Float32Array(x*U*4*h),A=new ud(C,x,U,h);A.type=xn,A.needsUpdate=!0;const F=b*4;for(let y=0;y<h;y++){const P=m[y],q=p[y],B=T[y],H=x*U*4*y;for(let ee=0;ee<P.count;ee++){const W=ee*F;f===!0&&(s.fromBufferAttribute(P,ee),C[H+W+0]=s.x,C[H+W+1]=s.y,C[H+W+2]=s.z,C[H+W+3]=0),g===!0&&(s.fromBufferAttribute(q,ee),C[H+W+4]=s.x,C[H+W+5]=s.y,C[H+W+6]=s.z,C[H+W+7]=0),v===!0&&(s.fromBufferAttribute(B,ee),C[H+W+8]=s.x,C[H+W+9]=s.y,C[H+W+10]=s.z,C[H+W+11]=B.itemSize===4?s.w:1)}}d={count:h,texture:A,size:new se(x,U)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];const g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function M_(n,e,t,i){let s=new WeakMap;function r(c){const l=i.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class xd extends Ut{constructor(e,t,i,s,r,o,a,c,l,u=Qi){if(u!==Qi&&u!==as)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Qi&&(i=mi),i===void 0&&u===as&&(i=os),super(null,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Jt,this.minFilter=c!==void 0?c:Jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Sd=new Ut,Jl=new xd(1,1),Md=new ud,bd=new lm,wd=new gd,Ql=[],eu=[],tu=new Float32Array(16),nu=new Float32Array(9),iu=new Float32Array(4);function ms(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Ql[s];if(r===void 0&&(r=new Float32Array(s),Ql[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Tt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Rt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Eo(n,e){let t=eu[e];t===void 0&&(t=new Int32Array(e),eu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function b_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function w_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2fv(this.addr,e),Rt(t,e)}}function E_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;n.uniform3fv(this.addr,e),Rt(t,e)}}function T_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4fv(this.addr,e),Rt(t,e)}}function R_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(Tt(t,i))return;iu.set(i),n.uniformMatrix2fv(this.addr,!1,iu),Rt(t,i)}}function A_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(Tt(t,i))return;nu.set(i),n.uniformMatrix3fv(this.addr,!1,nu),Rt(t,i)}}function C_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(Tt(t,i))return;tu.set(i),n.uniformMatrix4fv(this.addr,!1,tu),Rt(t,i)}}function I_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function P_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2iv(this.addr,e),Rt(t,e)}}function F_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3iv(this.addr,e),Rt(t,e)}}function D_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4iv(this.addr,e),Rt(t,e)}}function L_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function N_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2uiv(this.addr,e),Rt(t,e)}}function U_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3uiv(this.addr,e),Rt(t,e)}}function O_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4uiv(this.addr,e),Rt(t,e)}}function k_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Jl.compareFunction=ad,r=Jl):r=Sd,t.setTexture2D(e||r,s)}function z_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||bd,s)}function B_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||wd,s)}function V_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Md,s)}function H_(n){switch(n){case 5126:return b_;case 35664:return w_;case 35665:return E_;case 35666:return T_;case 35674:return R_;case 35675:return A_;case 35676:return C_;case 5124:case 35670:return I_;case 35667:case 35671:return P_;case 35668:case 35672:return F_;case 35669:case 35673:return D_;case 5125:return L_;case 36294:return N_;case 36295:return U_;case 36296:return O_;case 35678:case 36198:case 36298:case 36306:case 35682:return k_;case 35679:case 36299:case 36307:return z_;case 35680:case 36300:case 36308:case 36293:return B_;case 36289:case 36303:case 36311:case 36292:return V_}}function G_(n,e){n.uniform1fv(this.addr,e)}function W_(n,e){const t=ms(e,this.size,2);n.uniform2fv(this.addr,t)}function $_(n,e){const t=ms(e,this.size,3);n.uniform3fv(this.addr,t)}function X_(n,e){const t=ms(e,this.size,4);n.uniform4fv(this.addr,t)}function Z_(n,e){const t=ms(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function q_(n,e){const t=ms(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Y_(n,e){const t=ms(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function j_(n,e){n.uniform1iv(this.addr,e)}function K_(n,e){n.uniform2iv(this.addr,e)}function J_(n,e){n.uniform3iv(this.addr,e)}function Q_(n,e){n.uniform4iv(this.addr,e)}function e0(n,e){n.uniform1uiv(this.addr,e)}function t0(n,e){n.uniform2uiv(this.addr,e)}function n0(n,e){n.uniform3uiv(this.addr,e)}function i0(n,e){n.uniform4uiv(this.addr,e)}function s0(n,e,t){const i=this.cache,s=e.length,r=Eo(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),Rt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Sd,r[o])}function r0(n,e,t){const i=this.cache,s=e.length,r=Eo(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),Rt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||bd,r[o])}function o0(n,e,t){const i=this.cache,s=e.length,r=Eo(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),Rt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||wd,r[o])}function a0(n,e,t){const i=this.cache,s=e.length,r=Eo(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),Rt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Md,r[o])}function c0(n){switch(n){case 5126:return G_;case 35664:return W_;case 35665:return $_;case 35666:return X_;case 35674:return Z_;case 35675:return q_;case 35676:return Y_;case 5124:case 35670:return j_;case 35667:case 35671:return K_;case 35668:case 35672:return J_;case 35669:case 35673:return Q_;case 5125:return e0;case 36294:return t0;case 36295:return n0;case 36296:return i0;case 35678:case 36198:case 36298:case 36306:case 35682:return s0;case 35679:case 36299:case 36307:return r0;case 35680:case 36300:case 36308:case 36293:return o0;case 36289:case 36303:case 36311:case 36292:return a0}}class l0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=H_(t.type)}}class u0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=c0(t.type)}}class h0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const ra=/(\w+)(\])?(\[|\.)?/g;function su(n,e){n.seq.push(e),n.map[e.id]=e}function d0(n,e,t){const i=n.name,s=i.length;for(ra.lastIndex=0;;){const r=ra.exec(i),o=ra.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){su(t,l===void 0?new l0(a,n,e):new u0(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new h0(a),su(t,h)),t=h}}}class io{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);d0(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function ru(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const f0=37297;let p0=0;function m0(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const ou=new $e;function g0(n){Ke._getMatrix(ou,Ke.workingColorSpace,n);const e=`mat3( ${ou.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(n)){case Mo:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function au(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+m0(n.getShaderSource(e),o)}else return s}function v0(n,e){const t=g0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function _0(n,e){let t;switch(e){case Xh:t="Linear";break;case Zh:t="Reinhard";break;case qh:t="Cineon";break;case Ic:t="ACESFilmic";break;case Yh:t="AgX";break;case jh:t="Neutral";break;case Tp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const br=new I;function y0(){Ke.getLuminanceCoefficients(br);const n=br.x.toFixed(4),e=br.y.toFixed(4),t=br.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function x0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fs).join(`
`)}function S0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function M0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Fs(n){return n!==""}function cu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const b0=/^[ \t]*#include +<([\w\d./]+)>/gm;function mc(n){return n.replace(b0,E0)}const w0=new Map;function E0(n,e){let t=qe[e];if(t===void 0){const i=w0.get(e);if(i!==void 0)t=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return mc(t)}const T0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uu(n){return n.replace(T0,R0)}function R0(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function hu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function A0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Wh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===rp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Cn&&(e="SHADOWMAP_TYPE_VSM"),e}function C0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ss:case rs:e="ENVMAP_TYPE_CUBE";break;case So:e="ENVMAP_TYPE_CUBE_UV";break}return e}function I0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case rs:e="ENVMAP_MODE_REFRACTION";break}return e}function P0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case $h:e="ENVMAP_BLENDING_MULTIPLY";break;case wp:e="ENVMAP_BLENDING_MIX";break;case Ep:e="ENVMAP_BLENDING_ADD";break}return e}function F0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function D0(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=A0(t),l=C0(t),u=I0(t),h=P0(t),d=F0(t),f=x0(t),g=S0(r),v=s.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Fs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Fs).join(`
`),p.length>0&&(p+=`
`)):(m=[hu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),p=[hu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==jn?"#define TONE_MAPPING":"",t.toneMapping!==jn?qe.tonemapping_pars_fragment:"",t.toneMapping!==jn?_0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,v0("linearToOutputTexel",t.outputColorSpace),y0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fs).join(`
`)),o=mc(o),o=cu(o,t),o=lu(o,t),a=mc(a),a=cu(a,t),a=lu(a,t),o=uu(o),a=uu(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=T+m+o,x=T+p+a,U=ru(s,s.VERTEX_SHADER,b),C=ru(s,s.FRAGMENT_SHADER,x);s.attachShader(v,U),s.attachShader(v,C),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(P){if(n.debug.checkShaderErrors){const q=s.getProgramInfoLog(v).trim(),B=s.getShaderInfoLog(U).trim(),H=s.getShaderInfoLog(C).trim();let ee=!0,W=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(ee=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,U,C);else{const re=au(s,U,"vertex"),G=au(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+q+`
`+re+`
`+G)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(B===""||H==="")&&(W=!1);W&&(P.diagnostics={runnable:ee,programLog:q,vertexShader:{log:B,prefix:m},fragmentShader:{log:H,prefix:p}})}s.deleteShader(U),s.deleteShader(C),F=new io(s,v),M=M0(s,v)}let F;this.getUniforms=function(){return F===void 0&&A(this),F};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,f0)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=p0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=U,this.fragmentShader=C,this}let L0=0;class N0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new U0(e),t.set(e,i)),i}}class U0{constructor(e){this.id=L0++,this.code=e,this.usedTimes=0}}function O0(n,e,t,i,s,r,o){const a=new zc,c=new N0,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,y,P,q,B){const H=q.fog,ee=B.geometry,W=M.isMeshStandardMaterial?q.environment:null,re=(M.isMeshStandardMaterial?t:e).get(M.envMap||W),G=re&&re.mapping===So?re.image.height:null,he=g[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const ue=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Se=ue!==void 0?ue.length:0;let Be=0;ee.morphAttributes.position!==void 0&&(Be=1),ee.morphAttributes.normal!==void 0&&(Be=2),ee.morphAttributes.color!==void 0&&(Be=3);let Je,K,ae,Ee;if(he){const nt=_n[he];Je=nt.vertexShader,K=nt.fragmentShader}else Je=M.vertexShader,K=M.fragmentShader,c.update(M),ae=c.getVertexShaderID(M),Ee=c.getFragmentShaderID(M);const oe=n.getRenderTarget(),Le=n.state.buffers.depth.getReversed(),ke=B.isInstancedMesh===!0,Ue=B.isBatchedMesh===!0,Xe=!!M.map,X=!!M.matcap,te=!!re,R=!!M.aoMap,Ae=!!M.lightMap,ie=!!M.bumpMap,Me=!!M.normalMap,ce=!!M.displacementMap,Oe=!!M.emissiveMap,ge=!!M.metalnessMap,w=!!M.roughnessMap,_=M.anisotropy>0,O=M.clearcoat>0,Y=M.dispersion>0,ne=M.iridescence>0,j=M.sheen>0,Te=M.transmission>0,fe=_&&!!M.anisotropyMap,be=O&&!!M.clearcoatMap,J=O&&!!M.clearcoatNormalMap,V=O&&!!M.clearcoatRoughnessMap,ye=ne&&!!M.iridescenceMap,Ne=ne&&!!M.iridescenceThicknessMap,ze=j&&!!M.sheenColorMap,Re=j&&!!M.sheenRoughnessMap,je=!!M.specularMap,Ze=!!M.specularColorMap,at=!!M.specularIntensityMap,D=Te&&!!M.transmissionMap,me=Te&&!!M.thicknessMap,$=!!M.gradientMap,Q=!!M.alphaMap,xe=M.alphaTest>0,ve=!!M.alphaHash,Ge=!!M.extensions;let vt=jn;M.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(vt=n.toneMapping);const Dt={shaderID:he,shaderType:M.type,shaderName:M.name,vertexShader:Je,fragmentShader:K,defines:M.defines,customVertexShaderID:ae,customFragmentShaderID:Ee,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Ue,batchingColor:Ue&&B._colorsTexture!==null,instancing:ke,instancingColor:ke&&B.instanceColor!==null,instancingMorph:ke&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:fs,alphaToCoverage:!!M.alphaToCoverage,map:Xe,matcap:X,envMap:te,envMapMode:te&&re.mapping,envMapCubeUVHeight:G,aoMap:R,lightMap:Ae,bumpMap:ie,normalMap:Me,displacementMap:d&&ce,emissiveMap:Oe,normalMapObjectSpace:Me&&M.normalMapType===Pp,normalMapTangentSpace:Me&&M.normalMapType===Ip,metalnessMap:ge,roughnessMap:w,anisotropy:_,anisotropyMap:fe,clearcoat:O,clearcoatMap:be,clearcoatNormalMap:J,clearcoatRoughnessMap:V,dispersion:Y,iridescence:ne,iridescenceMap:ye,iridescenceThicknessMap:Ne,sheen:j,sheenColorMap:ze,sheenRoughnessMap:Re,specularMap:je,specularColorMap:Ze,specularIntensityMap:at,transmission:Te,transmissionMap:D,thicknessMap:me,gradientMap:$,opaque:M.transparent===!1&&M.blending===Ji&&M.alphaToCoverage===!1,alphaMap:Q,alphaTest:xe,alphaHash:ve,combine:M.combine,mapUv:Xe&&v(M.map.channel),aoMapUv:R&&v(M.aoMap.channel),lightMapUv:Ae&&v(M.lightMap.channel),bumpMapUv:ie&&v(M.bumpMap.channel),normalMapUv:Me&&v(M.normalMap.channel),displacementMapUv:ce&&v(M.displacementMap.channel),emissiveMapUv:Oe&&v(M.emissiveMap.channel),metalnessMapUv:ge&&v(M.metalnessMap.channel),roughnessMapUv:w&&v(M.roughnessMap.channel),anisotropyMapUv:fe&&v(M.anisotropyMap.channel),clearcoatMapUv:be&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:J&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Re&&v(M.sheenRoughnessMap.channel),specularMapUv:je&&v(M.specularMap.channel),specularColorMapUv:Ze&&v(M.specularColorMap.channel),specularIntensityMapUv:at&&v(M.specularIntensityMap.channel),transmissionMapUv:D&&v(M.transmissionMap.channel),thicknessMapUv:me&&v(M.thicknessMap.channel),alphaMapUv:Q&&v(M.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(Me||_),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!ee.attributes.uv&&(Xe||Q),fog:!!H,useFog:M.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Le,skinning:B.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Be,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:vt,decodeVideoTexture:Xe&&M.map.isVideoTexture===!0&&Ke.getTransfer(M.map.colorSpace)===it,decodeVideoTextureEmissive:Oe&&M.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(M.emissiveMap.colorSpace)===it,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===rn,flipSided:M.side===$t,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ge&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&M.extensions.multiDraw===!0||Ue)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Dt.vertexUv1s=l.has(1),Dt.vertexUv2s=l.has(2),Dt.vertexUv3s=l.has(3),l.clear(),Dt}function p(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)y.push(P),y.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(T(y,M),b(y,M),y.push(n.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function T(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function b(M,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),M.push(a.mask)}function x(M){const y=g[M.type];let P;if(y){const q=_n[y];P=Hs.clone(q.uniforms)}else P=M.uniforms;return P}function U(M,y){let P;for(let q=0,B=u.length;q<B;q++){const H=u[q];if(H.cacheKey===y){P=H,++P.usedTimes;break}}return P===void 0&&(P=new D0(n,y,M,r),u.push(P)),P}function C(M){if(--M.usedTimes===0){const y=u.indexOf(M);u[y]=u[u.length-1],u.pop(),M.destroy()}}function A(M){c.remove(M)}function F(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:U,releaseProgram:C,releaseShaderCache:A,programs:u,dispose:F}}function k0(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function z0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function du(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function fu(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,d,f,g,v,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=v,p.group=m),e++,p}function a(h,d,f,g,v,m){const p=o(h,d,f,g,v,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(h,d,f,g,v,m){const p=o(h,d,f,g,v,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||z0),i.length>1&&i.sort(d||du),s.length>1&&s.sort(d||du)}function u(){for(let h=e,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function B0(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new fu,n.set(i,[o])):s>=r.length?(o=new fu,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function V0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ve};break;case"SpotLight":t={position:new I,direction:new I,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function H0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let G0=0;function W0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function $0(n){const e=new V0,t=H0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new I);const s=new I,r=new ot,o=new ot;function a(l){let u=0,h=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,T=0,b=0,x=0,U=0,C=0,A=0;l.sort(W0);for(let M=0,y=l.length;M<y;M++){const P=l[M],q=P.color,B=P.intensity,H=P.distance,ee=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=q.r*B,h+=q.g*B,d+=q.b*B;else if(P.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(P.sh.coefficients[W],B);A++}else if(P.isDirectionalLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const re=P.shadow,G=t.get(P);G.shadowIntensity=re.intensity,G.shadowBias=re.bias,G.shadowNormalBias=re.normalBias,G.shadowRadius=re.radius,G.shadowMapSize=re.mapSize,i.directionalShadow[f]=G,i.directionalShadowMap[f]=ee,i.directionalShadowMatrix[f]=P.shadow.matrix,T++}i.directional[f]=W,f++}else if(P.isSpotLight){const W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(q).multiplyScalar(B),W.distance=H,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,i.spot[v]=W;const re=P.shadow;if(P.map&&(i.spotLightMap[U]=P.map,U++,re.updateMatrices(P),P.castShadow&&C++),i.spotLightMatrix[v]=re.matrix,P.castShadow){const G=t.get(P);G.shadowIntensity=re.intensity,G.shadowBias=re.bias,G.shadowNormalBias=re.normalBias,G.shadowRadius=re.radius,G.shadowMapSize=re.mapSize,i.spotShadow[v]=G,i.spotShadowMap[v]=ee,x++}v++}else if(P.isRectAreaLight){const W=e.get(P);W.color.copy(q).multiplyScalar(B),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=W,m++}else if(P.isPointLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const re=P.shadow,G=t.get(P);G.shadowIntensity=re.intensity,G.shadowBias=re.bias,G.shadowNormalBias=re.normalBias,G.shadowRadius=re.radius,G.shadowMapSize=re.mapSize,G.shadowCameraNear=re.camera.near,G.shadowCameraFar=re.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=ee,i.pointShadowMatrix[g]=P.shadow.matrix,b++}i.point[g]=W,g++}else if(P.isHemisphereLight){const W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(B),W.groundColor.copy(P.groundColor).multiplyScalar(B),i.hemi[p]=W,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const F=i.hash;(F.directionalLength!==f||F.pointLength!==g||F.spotLength!==v||F.rectAreaLength!==m||F.hemiLength!==p||F.numDirectionalShadows!==T||F.numPointShadows!==b||F.numSpotShadows!==x||F.numSpotMaps!==U||F.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=x+U-C,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=A,F.directionalLength=f,F.pointLength=g,F.spotLength=v,F.rectAreaLength=m,F.hemiLength=p,F.numDirectionalShadows=T,F.numPointShadows=b,F.numSpotShadows=x,F.numSpotMaps=U,F.numLightProbes=A,i.version=G0++)}function c(l,u){let h=0,d=0,f=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,T=l.length;p<T;p++){const b=l[p];if(b.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),h++}else if(b.isSpotLight){const x=i.spot[f];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(b.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:i}}function pu(n){const e=new $0(n),t=[],i=[];function s(u){l.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function X0(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new pu(n),e.set(s,[a])):r>=o.length?(a=new pu(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class Z0 extends ps{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ap,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class q0 extends ps{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Y0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,j0=`uniform sampler2D shadow_pass;
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
}`;function K0(n,e,t){let i=new vd;const s=new se,r=new se,o=new xt,a=new Z0({depthPacking:Cp}),c=new q0,l={},u=t.maxTextureSize,h={[Nn]:$t,[$t]:Nn,[rn]:rn},d=new wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:Y0,fragmentShader:j0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ft;g.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new It(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wh;let p=this.type;this.render=function(C,A,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const M=n.getRenderTarget(),y=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),q=n.state;q.setBlending(Fn),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const B=p!==Cn&&this.type===Cn,H=p===Cn&&this.type!==Cn;for(let ee=0,W=C.length;ee<W;ee++){const re=C[ee],G=re.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const he=G.getFrameExtents();if(s.multiply(he),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/he.x),s.x=r.x*he.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/he.y),s.y=r.y*he.y,G.mapSize.y=r.y)),G.map===null||B===!0||H===!0){const Se=this.type!==Cn?{minFilter:Jt,magFilter:Jt}:{};G.map!==null&&G.map.dispose(),G.map=new gn(s.x,s.y,Se),G.map.texture.name=re.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const ue=G.getViewportCount();for(let Se=0;Se<ue;Se++){const Be=G.getViewport(Se);o.set(r.x*Be.x,r.y*Be.y,r.x*Be.z,r.y*Be.w),q.viewport(o),G.updateMatrices(re,Se),i=G.getFrustum(),x(A,F,G.camera,re,this.type)}G.isPointLightShadow!==!0&&this.type===Cn&&T(G,F),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(M,y,P)};function T(C,A){const F=e.update(v);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new gn(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(A,null,F,d,v,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(A,null,F,f,v,null)}function b(C,A,F,M){let y=null;const P=F.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)y=P;else if(y=F.isPointLight===!0?c:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const q=y.uuid,B=A.uuid;let H=l[q];H===void 0&&(H={},l[q]=H);let ee=H[B];ee===void 0&&(ee=y.clone(),H[B]=ee,A.addEventListener("dispose",U)),y=ee}if(y.visible=A.visible,y.wireframe=A.wireframe,M===Cn?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:h[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,F.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const q=n.properties.get(y);q.light=F}return y}function x(C,A,F,M,y){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===Cn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,C.matrixWorld);const B=e.update(C),H=C.material;if(Array.isArray(H)){const ee=B.groups;for(let W=0,re=ee.length;W<re;W++){const G=ee[W],he=H[G.materialIndex];if(he&&he.visible){const ue=b(C,he,M,y);C.onBeforeShadow(n,C,A,F,B,ue,G),n.renderBufferDirect(F,null,B,ue,C,G),C.onAfterShadow(n,C,A,F,B,ue,G)}}}else if(H.visible){const ee=b(C,H,M,y);C.onBeforeShadow(n,C,A,F,B,ee,null),n.renderBufferDirect(F,null,B,ee,C,null),C.onAfterShadow(n,C,A,F,B,ee,null)}}const q=C.children;for(let B=0,H=q.length;B<H;B++)x(q[B],A,F,M,y)}function U(C){C.target.removeEventListener("dispose",U);for(const F in l){const M=l[F],y=C.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const J0={[Fa]:Da,[La]:Oa,[Na]:ka,[is]:Ua,[Da]:Fa,[Oa]:La,[ka]:Na,[Ua]:is};function Q0(n,e){function t(){let D=!1;const me=new xt;let $=null;const Q=new xt(0,0,0,0);return{setMask:function(xe){$!==xe&&!D&&(n.colorMask(xe,xe,xe,xe),$=xe)},setLocked:function(xe){D=xe},setClear:function(xe,ve,Ge,vt,Dt){Dt===!0&&(xe*=vt,ve*=vt,Ge*=vt),me.set(xe,ve,Ge,vt),Q.equals(me)===!1&&(n.clearColor(xe,ve,Ge,vt),Q.copy(me))},reset:function(){D=!1,$=null,Q.set(-1,0,0,0)}}}function i(){let D=!1,me=!1,$=null,Q=null,xe=null;return{setReversed:function(ve){if(me!==ve){const Ge=e.get("EXT_clip_control");me?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT);const vt=xe;xe=null,this.setClear(vt)}me=ve},getReversed:function(){return me},setTest:function(ve){ve?oe(n.DEPTH_TEST):Le(n.DEPTH_TEST)},setMask:function(ve){$!==ve&&!D&&(n.depthMask(ve),$=ve)},setFunc:function(ve){if(me&&(ve=J0[ve]),Q!==ve){switch(ve){case Fa:n.depthFunc(n.NEVER);break;case Da:n.depthFunc(n.ALWAYS);break;case La:n.depthFunc(n.LESS);break;case is:n.depthFunc(n.LEQUAL);break;case Na:n.depthFunc(n.EQUAL);break;case Ua:n.depthFunc(n.GEQUAL);break;case Oa:n.depthFunc(n.GREATER);break;case ka:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Q=ve}},setLocked:function(ve){D=ve},setClear:function(ve){xe!==ve&&(me&&(ve=1-ve),n.clearDepth(ve),xe=ve)},reset:function(){D=!1,$=null,Q=null,xe=null,me=!1}}}function s(){let D=!1,me=null,$=null,Q=null,xe=null,ve=null,Ge=null,vt=null,Dt=null;return{setTest:function(nt){D||(nt?oe(n.STENCIL_TEST):Le(n.STENCIL_TEST))},setMask:function(nt){me!==nt&&!D&&(n.stencilMask(nt),me=nt)},setFunc:function(nt,cn,Mn){($!==nt||Q!==cn||xe!==Mn)&&(n.stencilFunc(nt,cn,Mn),$=nt,Q=cn,xe=Mn)},setOp:function(nt,cn,Mn){(ve!==nt||Ge!==cn||vt!==Mn)&&(n.stencilOp(nt,cn,Mn),ve=nt,Ge=cn,vt=Mn)},setLocked:function(nt){D=nt},setClear:function(nt){Dt!==nt&&(n.clearStencil(nt),Dt=nt)},reset:function(){D=!1,me=null,$=null,Q=null,xe=null,ve=null,Ge=null,vt=null,Dt=null}}}const r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,T=null,b=null,x=null,U=null,C=null,A=new Ve(0,0,0),F=0,M=!1,y=null,P=null,q=null,B=null,H=null;const ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,re=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(G)[1]),W=re>=1):G.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),W=re>=2);let he=null,ue={};const Se=n.getParameter(n.SCISSOR_BOX),Be=n.getParameter(n.VIEWPORT),Je=new xt().fromArray(Se),K=new xt().fromArray(Be);function ae(D,me,$,Q){const xe=new Uint8Array(4),ve=n.createTexture();n.bindTexture(D,ve),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ge=0;Ge<$;Ge++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(me,0,n.RGBA,1,1,Q,0,n.RGBA,n.UNSIGNED_BYTE,xe):n.texImage2D(me+Ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xe);return ve}const Ee={};Ee[n.TEXTURE_2D]=ae(n.TEXTURE_2D,n.TEXTURE_2D,1),Ee[n.TEXTURE_CUBE_MAP]=ae(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[n.TEXTURE_2D_ARRAY]=ae(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ee[n.TEXTURE_3D]=ae(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(n.DEPTH_TEST),o.setFunc(is),ie(!1),Me(_l),oe(n.CULL_FACE),R(Fn);function oe(D){u[D]!==!0&&(n.enable(D),u[D]=!0)}function Le(D){u[D]!==!1&&(n.disable(D),u[D]=!1)}function ke(D,me){return h[D]!==me?(n.bindFramebuffer(D,me),h[D]=me,D===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=me),D===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=me),!0):!1}function Ue(D,me){let $=f,Q=!1;if(D){$=d.get(me),$===void 0&&($=[],d.set(me,$));const xe=D.textures;if($.length!==xe.length||$[0]!==n.COLOR_ATTACHMENT0){for(let ve=0,Ge=xe.length;ve<Ge;ve++)$[ve]=n.COLOR_ATTACHMENT0+ve;$.length=xe.length,Q=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,Q=!0);Q&&n.drawBuffers($)}function Xe(D){return g!==D?(n.useProgram(D),g=D,!0):!1}const X={[hi]:n.FUNC_ADD,[ap]:n.FUNC_SUBTRACT,[cp]:n.FUNC_REVERSE_SUBTRACT};X[lp]=n.MIN,X[up]=n.MAX;const te={[hp]:n.ZERO,[dp]:n.ONE,[fp]:n.SRC_COLOR,[Ia]:n.SRC_ALPHA,[yp]:n.SRC_ALPHA_SATURATE,[vp]:n.DST_COLOR,[mp]:n.DST_ALPHA,[pp]:n.ONE_MINUS_SRC_COLOR,[Pa]:n.ONE_MINUS_SRC_ALPHA,[_p]:n.ONE_MINUS_DST_COLOR,[gp]:n.ONE_MINUS_DST_ALPHA,[xp]:n.CONSTANT_COLOR,[Sp]:n.ONE_MINUS_CONSTANT_COLOR,[Mp]:n.CONSTANT_ALPHA,[bp]:n.ONE_MINUS_CONSTANT_ALPHA};function R(D,me,$,Q,xe,ve,Ge,vt,Dt,nt){if(D===Fn){v===!0&&(Le(n.BLEND),v=!1);return}if(v===!1&&(oe(n.BLEND),v=!0),D!==op){if(D!==m||nt!==M){if((p!==hi||x!==hi)&&(n.blendEquation(n.FUNC_ADD),p=hi,x=hi),nt)switch(D){case Ji:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Un:n.blendFunc(n.ONE,n.ONE);break;case yl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case xl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ji:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Un:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case yl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case xl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}T=null,b=null,U=null,C=null,A.set(0,0,0),F=0,m=D,M=nt}return}xe=xe||me,ve=ve||$,Ge=Ge||Q,(me!==p||xe!==x)&&(n.blendEquationSeparate(X[me],X[xe]),p=me,x=xe),($!==T||Q!==b||ve!==U||Ge!==C)&&(n.blendFuncSeparate(te[$],te[Q],te[ve],te[Ge]),T=$,b=Q,U=ve,C=Ge),(vt.equals(A)===!1||Dt!==F)&&(n.blendColor(vt.r,vt.g,vt.b,Dt),A.copy(vt),F=Dt),m=D,M=!1}function Ae(D,me){D.side===rn?Le(n.CULL_FACE):oe(n.CULL_FACE);let $=D.side===$t;me&&($=!$),ie($),D.blending===Ji&&D.transparent===!1?R(Fn):R(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const Q=D.stencilWrite;a.setTest(Q),Q&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Oe(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):Le(n.SAMPLE_ALPHA_TO_COVERAGE)}function ie(D){y!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),y=D)}function Me(D){D!==ip?(oe(n.CULL_FACE),D!==P&&(D===_l?n.cullFace(n.BACK):D===sp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Le(n.CULL_FACE),P=D}function ce(D){D!==q&&(W&&n.lineWidth(D),q=D)}function Oe(D,me,$){D?(oe(n.POLYGON_OFFSET_FILL),(B!==me||H!==$)&&(n.polygonOffset(me,$),B=me,H=$)):Le(n.POLYGON_OFFSET_FILL)}function ge(D){D?oe(n.SCISSOR_TEST):Le(n.SCISSOR_TEST)}function w(D){D===void 0&&(D=n.TEXTURE0+ee-1),he!==D&&(n.activeTexture(D),he=D)}function _(D,me,$){$===void 0&&(he===null?$=n.TEXTURE0+ee-1:$=he);let Q=ue[$];Q===void 0&&(Q={type:void 0,texture:void 0},ue[$]=Q),(Q.type!==D||Q.texture!==me)&&(he!==$&&(n.activeTexture($),he=$),n.bindTexture(D,me||Ee[D]),Q.type=D,Q.texture=me)}function O(){const D=ue[he];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Y(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function V(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ne(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ze(D){Je.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Je.copy(D))}function Re(D){K.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),K.copy(D))}function je(D,me){let $=l.get(me);$===void 0&&($=new WeakMap,l.set(me,$));let Q=$.get(D);Q===void 0&&(Q=n.getUniformBlockIndex(me,D.name),$.set(D,Q))}function Ze(D,me){const Q=l.get(me).get(D);c.get(me)!==Q&&(n.uniformBlockBinding(me,Q,D.__bindingPointIndex),c.set(me,Q))}function at(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},he=null,ue={},h={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,T=null,b=null,x=null,U=null,C=null,A=new Ve(0,0,0),F=0,M=!1,y=null,P=null,q=null,B=null,H=null,Je.set(0,0,n.canvas.width,n.canvas.height),K.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:oe,disable:Le,bindFramebuffer:ke,drawBuffers:Ue,useProgram:Xe,setBlending:R,setMaterial:Ae,setFlipSided:ie,setCullFace:Me,setLineWidth:ce,setPolygonOffset:Oe,setScissorTest:ge,activeTexture:w,bindTexture:_,unbindTexture:O,compressedTexImage2D:Y,compressedTexImage3D:ne,texImage2D:ye,texImage3D:Ne,updateUBOMapping:je,uniformBlockBinding:Ze,texStorage2D:J,texStorage3D:V,texSubImage2D:j,texSubImage3D:Te,compressedTexSubImage2D:fe,compressedTexSubImage3D:be,scissor:ze,viewport:Re,reset:at}}function mu(n,e,t,i){const s=ey(i);switch(t){case td:return n*e;case id:return n*e;case sd:return n*e*2;case Lc:return n*e/s.components*s.byteLength;case Nc:return n*e/s.components*s.byteLength;case rd:return n*e*2/s.components*s.byteLength;case Uc:return n*e*2/s.components*s.byteLength;case nd:return n*e*3/s.components*s.byteLength;case pn:return n*e*4/s.components*s.byteLength;case Oc:return n*e*4/s.components*s.byteLength;case Jr:case Qr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case eo:case to:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wa:case Xa:return Math.max(n,16)*Math.max(e,8)/4;case Ga:case $a:return Math.max(n,8)*Math.max(e,8)/2;case Za:case qa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ya:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ja:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ka:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ja:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Qa:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ec:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case tc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case nc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ic:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case sc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case rc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case oc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ac:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case cc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case lc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case no:case uc:case hc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case od:case dc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case fc:case pc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ey(n){switch(n){case On:case Jh:return{byteLength:1,components:1};case Bs:case Qh:case Dn:return{byteLength:2,components:1};case Fc:case Dc:return{byteLength:2,components:4};case mi:case Pc:case xn:return{byteLength:4,components:1};case ed:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function ty(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new se,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,_){return f?new OffscreenCanvas(w,_):ao("canvas")}function v(w,_,O){let Y=1;const ne=ge(w);if((ne.width>O||ne.height>O)&&(Y=O/Math.max(ne.width,ne.height)),Y<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const j=Math.floor(Y*ne.width),Te=Math.floor(Y*ne.height);h===void 0&&(h=g(j,Te));const fe=_?g(j,Te):h;return fe.width=j,fe.height=Te,fe.getContext("2d").drawImage(w,0,0,j,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+j+"x"+Te+")."),fe}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){n.generateMipmap(w)}function T(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(w,_,O,Y,ne=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let j=_;if(_===n.RED&&(O===n.FLOAT&&(j=n.R32F),O===n.HALF_FLOAT&&(j=n.R16F),O===n.UNSIGNED_BYTE&&(j=n.R8)),_===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(j=n.R8UI),O===n.UNSIGNED_SHORT&&(j=n.R16UI),O===n.UNSIGNED_INT&&(j=n.R32UI),O===n.BYTE&&(j=n.R8I),O===n.SHORT&&(j=n.R16I),O===n.INT&&(j=n.R32I)),_===n.RG&&(O===n.FLOAT&&(j=n.RG32F),O===n.HALF_FLOAT&&(j=n.RG16F),O===n.UNSIGNED_BYTE&&(j=n.RG8)),_===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(j=n.RG8UI),O===n.UNSIGNED_SHORT&&(j=n.RG16UI),O===n.UNSIGNED_INT&&(j=n.RG32UI),O===n.BYTE&&(j=n.RG8I),O===n.SHORT&&(j=n.RG16I),O===n.INT&&(j=n.RG32I)),_===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(j=n.RGB8UI),O===n.UNSIGNED_SHORT&&(j=n.RGB16UI),O===n.UNSIGNED_INT&&(j=n.RGB32UI),O===n.BYTE&&(j=n.RGB8I),O===n.SHORT&&(j=n.RGB16I),O===n.INT&&(j=n.RGB32I)),_===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),O===n.UNSIGNED_INT&&(j=n.RGBA32UI),O===n.BYTE&&(j=n.RGBA8I),O===n.SHORT&&(j=n.RGBA16I),O===n.INT&&(j=n.RGBA32I)),_===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),_===n.RGBA){const Te=ne?Mo:Ke.getTransfer(Y);O===n.FLOAT&&(j=n.RGBA32F),O===n.HALF_FLOAT&&(j=n.RGBA16F),O===n.UNSIGNED_BYTE&&(j=Te===it?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function x(w,_){let O;return w?_===null||_===mi||_===os?O=n.DEPTH24_STENCIL8:_===xn?O=n.DEPTH32F_STENCIL8:_===Bs&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===mi||_===os?O=n.DEPTH_COMPONENT24:_===xn?O=n.DEPTH_COMPONENT32F:_===Bs&&(O=n.DEPTH_COMPONENT16),O}function U(w,_){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Jt&&w.minFilter!==yn?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function C(w){const _=w.target;_.removeEventListener("dispose",C),F(_),_.isVideoTexture&&u.delete(_)}function A(w){const _=w.target;_.removeEventListener("dispose",A),y(_)}function F(w){const _=i.get(w);if(_.__webglInit===void 0)return;const O=w.source,Y=d.get(O);if(Y){const ne=Y[_.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&M(w),Object.keys(Y).length===0&&d.delete(O)}i.remove(w)}function M(w){const _=i.get(w);n.deleteTexture(_.__webglTexture);const O=w.source,Y=d.get(O);delete Y[_.__cacheKey],o.memory.textures--}function y(w){const _=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let ne=0;ne<_.__webglFramebuffer[Y].length;ne++)n.deleteFramebuffer(_.__webglFramebuffer[Y][ne]);else n.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)n.deleteFramebuffer(_.__webglFramebuffer[Y]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const O=w.textures;for(let Y=0,ne=O.length;Y<ne;Y++){const j=i.get(O[Y]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(O[Y])}i.remove(w)}let P=0;function q(){P=0}function B(){const w=P;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),P+=1,w}function H(w){const _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function ee(w,_){const O=i.get(w);if(w.isVideoTexture&&ce(w),w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){const Y=w.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(O,w,_);return}}t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+_)}function W(w,_){const O=i.get(w);if(w.version>0&&O.__version!==w.version){K(O,w,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+_)}function re(w,_){const O=i.get(w);if(w.version>0&&O.__version!==w.version){K(O,w,_);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+_)}function G(w,_){const O=i.get(w);if(w.version>0&&O.__version!==w.version){ae(O,w,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+_)}const he={[Va]:n.REPEAT,[fi]:n.CLAMP_TO_EDGE,[Ha]:n.MIRRORED_REPEAT},ue={[Jt]:n.NEAREST,[Rp]:n.NEAREST_MIPMAP_NEAREST,[ir]:n.NEAREST_MIPMAP_LINEAR,[yn]:n.LINEAR,[Do]:n.LINEAR_MIPMAP_NEAREST,[pi]:n.LINEAR_MIPMAP_LINEAR},Se={[Fp]:n.NEVER,[kp]:n.ALWAYS,[Dp]:n.LESS,[ad]:n.LEQUAL,[Lp]:n.EQUAL,[Op]:n.GEQUAL,[Np]:n.GREATER,[Up]:n.NOTEQUAL};function Be(w,_){if(_.type===xn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===yn||_.magFilter===Do||_.magFilter===ir||_.magFilter===pi||_.minFilter===yn||_.minFilter===Do||_.minFilter===ir||_.minFilter===pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,he[_.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,he[_.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,he[_.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,ue[_.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,ue[_.minFilter]),_.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,Se[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Jt||_.minFilter!==ir&&_.minFilter!==pi||_.type===xn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Je(w,_){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",C));const Y=_.source;let ne=d.get(Y);ne===void 0&&(ne={},d.set(Y,ne));const j=H(_);if(j!==w.__cacheKey){ne[j]===void 0&&(ne[j]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),ne[j].usedTimes++;const Te=ne[w.__cacheKey];Te!==void 0&&(ne[w.__cacheKey].usedTimes--,Te.usedTimes===0&&M(_)),w.__cacheKey=j,w.__webglTexture=ne[j].texture}return O}function K(w,_,O){let Y=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=n.TEXTURE_3D);const ne=Je(w,_),j=_.source;t.bindTexture(Y,w.__webglTexture,n.TEXTURE0+O);const Te=i.get(j);if(j.version!==Te.__version||ne===!0){t.activeTexture(n.TEXTURE0+O);const fe=Ke.getPrimaries(Ke.workingColorSpace),be=_.colorSpace===Yn?null:Ke.getPrimaries(_.colorSpace),J=_.colorSpace===Yn||fe===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let V=v(_.image,!1,s.maxTextureSize);V=Oe(_,V);const ye=r.convert(_.format,_.colorSpace),Ne=r.convert(_.type);let ze=b(_.internalFormat,ye,Ne,_.colorSpace,_.isVideoTexture);Be(Y,_);let Re;const je=_.mipmaps,Ze=_.isVideoTexture!==!0,at=Te.__version===void 0||ne===!0,D=j.dataReady,me=U(_,V);if(_.isDepthTexture)ze=x(_.format===as,_.type),at&&(Ze?t.texStorage2D(n.TEXTURE_2D,1,ze,V.width,V.height):t.texImage2D(n.TEXTURE_2D,0,ze,V.width,V.height,0,ye,Ne,null));else if(_.isDataTexture)if(je.length>0){Ze&&at&&t.texStorage2D(n.TEXTURE_2D,me,ze,je[0].width,je[0].height);for(let $=0,Q=je.length;$<Q;$++)Re=je[$],Ze?D&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,Re.width,Re.height,ye,Ne,Re.data):t.texImage2D(n.TEXTURE_2D,$,ze,Re.width,Re.height,0,ye,Ne,Re.data);_.generateMipmaps=!1}else Ze?(at&&t.texStorage2D(n.TEXTURE_2D,me,ze,V.width,V.height),D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,V.width,V.height,ye,Ne,V.data)):t.texImage2D(n.TEXTURE_2D,0,ze,V.width,V.height,0,ye,Ne,V.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ze&&at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,ze,je[0].width,je[0].height,V.depth);for(let $=0,Q=je.length;$<Q;$++)if(Re=je[$],_.format!==pn)if(ye!==null)if(Ze){if(D)if(_.layerUpdates.size>0){const xe=mu(Re.width,Re.height,_.format,_.type);for(const ve of _.layerUpdates){const Ge=Re.data.subarray(ve*xe/Re.data.BYTES_PER_ELEMENT,(ve+1)*xe/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,ve,Re.width,Re.height,1,ye,Ge)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,Re.width,Re.height,V.depth,ye,Re.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,ze,Re.width,Re.height,V.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?D&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,Re.width,Re.height,V.depth,ye,Ne,Re.data):t.texImage3D(n.TEXTURE_2D_ARRAY,$,ze,Re.width,Re.height,V.depth,0,ye,Ne,Re.data)}else{Ze&&at&&t.texStorage2D(n.TEXTURE_2D,me,ze,je[0].width,je[0].height);for(let $=0,Q=je.length;$<Q;$++)Re=je[$],_.format!==pn?ye!==null?Ze?D&&t.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,Re.width,Re.height,ye,Re.data):t.compressedTexImage2D(n.TEXTURE_2D,$,ze,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?D&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,Re.width,Re.height,ye,Ne,Re.data):t.texImage2D(n.TEXTURE_2D,$,ze,Re.width,Re.height,0,ye,Ne,Re.data)}else if(_.isDataArrayTexture)if(Ze){if(at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,ze,V.width,V.height,V.depth),D)if(_.layerUpdates.size>0){const $=mu(V.width,V.height,_.format,_.type);for(const Q of _.layerUpdates){const xe=V.data.subarray(Q*$/V.data.BYTES_PER_ELEMENT,(Q+1)*$/V.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Q,V.width,V.height,1,ye,Ne,xe)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,V.width,V.height,V.depth,ye,Ne,V.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ze,V.width,V.height,V.depth,0,ye,Ne,V.data);else if(_.isData3DTexture)Ze?(at&&t.texStorage3D(n.TEXTURE_3D,me,ze,V.width,V.height,V.depth),D&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,V.width,V.height,V.depth,ye,Ne,V.data)):t.texImage3D(n.TEXTURE_3D,0,ze,V.width,V.height,V.depth,0,ye,Ne,V.data);else if(_.isFramebufferTexture){if(at)if(Ze)t.texStorage2D(n.TEXTURE_2D,me,ze,V.width,V.height);else{let $=V.width,Q=V.height;for(let xe=0;xe<me;xe++)t.texImage2D(n.TEXTURE_2D,xe,ze,$,Q,0,ye,Ne,null),$>>=1,Q>>=1}}else if(je.length>0){if(Ze&&at){const $=ge(je[0]);t.texStorage2D(n.TEXTURE_2D,me,ze,$.width,$.height)}for(let $=0,Q=je.length;$<Q;$++)Re=je[$],Ze?D&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,ye,Ne,Re):t.texImage2D(n.TEXTURE_2D,$,ze,ye,Ne,Re);_.generateMipmaps=!1}else if(Ze){if(at){const $=ge(V);t.texStorage2D(n.TEXTURE_2D,me,ze,$.width,$.height)}D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,Ne,V)}else t.texImage2D(n.TEXTURE_2D,0,ze,ye,Ne,V);m(_)&&p(Y),Te.__version=j.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function ae(w,_,O){if(_.image.length!==6)return;const Y=Je(w,_),ne=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+O);const j=i.get(ne);if(ne.version!==j.__version||Y===!0){t.activeTexture(n.TEXTURE0+O);const Te=Ke.getPrimaries(Ke.workingColorSpace),fe=_.colorSpace===Yn?null:Ke.getPrimaries(_.colorSpace),be=_.colorSpace===Yn||Te===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const J=_.isCompressedTexture||_.image[0].isCompressedTexture,V=_.image[0]&&_.image[0].isDataTexture,ye=[];for(let Q=0;Q<6;Q++)!J&&!V?ye[Q]=v(_.image[Q],!0,s.maxCubemapSize):ye[Q]=V?_.image[Q].image:_.image[Q],ye[Q]=Oe(_,ye[Q]);const Ne=ye[0],ze=r.convert(_.format,_.colorSpace),Re=r.convert(_.type),je=b(_.internalFormat,ze,Re,_.colorSpace),Ze=_.isVideoTexture!==!0,at=j.__version===void 0||Y===!0,D=ne.dataReady;let me=U(_,Ne);Be(n.TEXTURE_CUBE_MAP,_);let $;if(J){Ze&&at&&t.texStorage2D(n.TEXTURE_CUBE_MAP,me,je,Ne.width,Ne.height);for(let Q=0;Q<6;Q++){$=ye[Q].mipmaps;for(let xe=0;xe<$.length;xe++){const ve=$[xe];_.format!==pn?ze!==null?Ze?D&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe,0,0,ve.width,ve.height,ze,ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe,je,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe,0,0,ve.width,ve.height,ze,Re,ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe,je,ve.width,ve.height,0,ze,Re,ve.data)}}}else{if($=_.mipmaps,Ze&&at){$.length>0&&me++;const Q=ge(ye[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,me,je,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(V){Ze?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ye[Q].width,ye[Q].height,ze,Re,ye[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,je,ye[Q].width,ye[Q].height,0,ze,Re,ye[Q].data);for(let xe=0;xe<$.length;xe++){const Ge=$[xe].image[Q].image;Ze?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe+1,0,0,Ge.width,Ge.height,ze,Re,Ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe+1,je,Ge.width,Ge.height,0,ze,Re,Ge.data)}}else{Ze?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ze,Re,ye[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,je,ze,Re,ye[Q]);for(let xe=0;xe<$.length;xe++){const ve=$[xe];Ze?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe+1,0,0,ze,Re,ve.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe+1,je,ze,Re,ve.image[Q])}}}m(_)&&p(n.TEXTURE_CUBE_MAP),j.__version=ne.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function Ee(w,_,O,Y,ne,j){const Te=r.convert(O.format,O.colorSpace),fe=r.convert(O.type),be=b(O.internalFormat,Te,fe,O.colorSpace),J=i.get(_),V=i.get(O);if(V.__renderTarget=_,!J.__hasExternalTextures){const ye=Math.max(1,_.width>>j),Ne=Math.max(1,_.height>>j);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,j,be,ye,Ne,_.depth,0,Te,fe,null):t.texImage2D(ne,j,be,ye,Ne,0,Te,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),Me(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,ne,V.__webglTexture,0,ie(_)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,ne,V.__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(w,_,O){if(n.bindRenderbuffer(n.RENDERBUFFER,w),_.depthBuffer){const Y=_.depthTexture,ne=Y&&Y.isDepthTexture?Y.type:null,j=x(_.stencilBuffer,ne),Te=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=ie(_);Me(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,j,_.width,_.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,j,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,j,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Te,n.RENDERBUFFER,w)}else{const Y=_.textures;for(let ne=0;ne<Y.length;ne++){const j=Y[ne],Te=r.convert(j.format,j.colorSpace),fe=r.convert(j.type),be=b(j.internalFormat,Te,fe,j.colorSpace),J=ie(_);O&&Me(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,J,be,_.width,_.height):Me(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,J,be,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,be,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Le(w,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(_.depthTexture);Y.__renderTarget=_,(!Y.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),ee(_.depthTexture,0);const ne=Y.__webglTexture,j=ie(_);if(_.depthTexture.format===Qi)Me(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(_.depthTexture.format===as)Me(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function ke(w){const _=i.get(w),O=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){const Y=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){const ne=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",ne)};Y.addEventListener("dispose",ne),_.__depthDisposeCallback=ne}_.__boundDepthTexture=Y}if(w.depthTexture&&!_.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Le(_.__webglFramebuffer,w)}else if(O){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=n.createRenderbuffer(),oe(_.__webglDepthbuffer[Y],w,!1);else{const ne=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=_.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,j)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),oe(_.__webglDepthbuffer,w,!1);else{const Y=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,ne)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(w,_,O){const Y=i.get(w);_!==void 0&&Ee(Y.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&ke(w)}function Xe(w){const _=w.texture,O=i.get(w),Y=i.get(_);w.addEventListener("dispose",A);const ne=w.textures,j=w.isWebGLCubeRenderTarget===!0,Te=ne.length>1;if(Te||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=_.version,o.memory.textures++),j){O.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[fe]=[];for(let be=0;be<_.mipmaps.length;be++)O.__webglFramebuffer[fe][be]=n.createFramebuffer()}else O.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let fe=0;fe<_.mipmaps.length;fe++)O.__webglFramebuffer[fe]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(Te)for(let fe=0,be=ne.length;fe<be;fe++){const J=i.get(ne[fe]);J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&Me(w)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let fe=0;fe<ne.length;fe++){const be=ne[fe];O.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[fe]);const J=r.convert(be.format,be.colorSpace),V=r.convert(be.type),ye=b(be.internalFormat,J,V,be.colorSpace,w.isXRRenderTarget===!0),Ne=ie(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,ye,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,O.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),oe(O.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Be(n.TEXTURE_CUBE_MAP,_);for(let fe=0;fe<6;fe++)if(_.mipmaps&&_.mipmaps.length>0)for(let be=0;be<_.mipmaps.length;be++)Ee(O.__webglFramebuffer[fe][be],w,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be);else Ee(O.__webglFramebuffer[fe],w,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(_)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let fe=0,be=ne.length;fe<be;fe++){const J=ne[fe],V=i.get(J);t.bindTexture(n.TEXTURE_2D,V.__webglTexture),Be(n.TEXTURE_2D,J),Ee(O.__webglFramebuffer,w,J,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),m(J)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(fe=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,Y.__webglTexture),Be(fe,_),_.mipmaps&&_.mipmaps.length>0)for(let be=0;be<_.mipmaps.length;be++)Ee(O.__webglFramebuffer[be],w,_,n.COLOR_ATTACHMENT0,fe,be);else Ee(O.__webglFramebuffer,w,_,n.COLOR_ATTACHMENT0,fe,0);m(_)&&p(fe),t.unbindTexture()}w.depthBuffer&&ke(w)}function X(w){const _=w.textures;for(let O=0,Y=_.length;O<Y;O++){const ne=_[O];if(m(ne)){const j=T(w),Te=i.get(ne).__webglTexture;t.bindTexture(j,Te),p(j),t.unbindTexture()}}}const te=[],R=[];function Ae(w){if(w.samples>0){if(Me(w)===!1){const _=w.textures,O=w.width,Y=w.height;let ne=n.COLOR_BUFFER_BIT;const j=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(w),fe=_.length>1;if(fe)for(let be=0;be<_.length;be++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let be=0;be<_.length;be++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[be]);const J=i.get(_[be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,J,0)}n.blitFramebuffer(0,0,O,Y,0,0,O,Y,ne,n.NEAREST),c===!0&&(te.length=0,R.length=0,te.push(n.COLOR_ATTACHMENT0+be),w.depthBuffer&&w.resolveDepthBuffer===!1&&(te.push(j),R.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,R)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,te))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let be=0;be<_.length;be++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,Te.__webglColorRenderbuffer[be]);const J=i.get(_[be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,J,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const _=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function ie(w){return Math.min(s.maxSamples,w.samples)}function Me(w){const _=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ce(w){const _=o.render.frame;u.get(w)!==_&&(u.set(w,_),w.update())}function Oe(w,_){const O=w.colorSpace,Y=w.format,ne=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==fs&&O!==Yn&&(Ke.getTransfer(O)===it?(Y!==pn||ne!==On)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),_}function ge(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=q,this.setTexture2D=ee,this.setTexture2DArray=W,this.setTexture3D=re,this.setTextureCube=G,this.rebindTextures=Ue,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Me}function ny(n,e){function t(i,s=Yn){let r;const o=Ke.getTransfer(s);if(i===On)return n.UNSIGNED_BYTE;if(i===Fc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Dc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ed)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Jh)return n.BYTE;if(i===Qh)return n.SHORT;if(i===Bs)return n.UNSIGNED_SHORT;if(i===Pc)return n.INT;if(i===mi)return n.UNSIGNED_INT;if(i===xn)return n.FLOAT;if(i===Dn)return n.HALF_FLOAT;if(i===td)return n.ALPHA;if(i===nd)return n.RGB;if(i===pn)return n.RGBA;if(i===id)return n.LUMINANCE;if(i===sd)return n.LUMINANCE_ALPHA;if(i===Qi)return n.DEPTH_COMPONENT;if(i===as)return n.DEPTH_STENCIL;if(i===Lc)return n.RED;if(i===Nc)return n.RED_INTEGER;if(i===rd)return n.RG;if(i===Uc)return n.RG_INTEGER;if(i===Oc)return n.RGBA_INTEGER;if(i===Jr||i===Qr||i===eo||i===to)if(o===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===eo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===to)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ga||i===Wa||i===$a||i===Xa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ga)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Wa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Za||i===qa||i===Ya)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Za||i===qa)return o===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ya)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ja||i===Ka||i===Ja||i===Qa||i===ec||i===tc||i===nc||i===ic||i===sc||i===rc||i===oc||i===ac||i===cc||i===lc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ja)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ka)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ja)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Qa)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ec)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===tc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===nc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ic)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===sc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===rc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===oc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ac)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===cc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===lc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===no||i===uc||i===hc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===no)return o===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===uc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===hc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===od||i===dc||i===fc||i===pc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===no)return r.COMPRESSED_RED_RGTC1_EXT;if(i===dc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===fc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===pc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===os?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class iy extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class mn extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sy={type:"move"};class oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sy)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new mn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const ry=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oy=`
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

}`;class ay{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Ut,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new wt({vertexShader:ry,fragmentShader:oy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new It(new wo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cy extends xi{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const v=new ay,m=t.getContextAttributes();let p=null,T=null;const b=[],x=[],U=new se;let C=null;const A=new nn;A.viewport=new xt;const F=new nn;F.viewport=new xt;const M=[A,F],y=new iy;let P=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ae=b[K];return ae===void 0&&(ae=new oa,b[K]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(K){let ae=b[K];return ae===void 0&&(ae=new oa,b[K]=ae),ae.getGripSpace()},this.getHand=function(K){let ae=b[K];return ae===void 0&&(ae=new oa,b[K]=ae),ae.getHandSpace()};function B(K){const ae=x.indexOf(K.inputSource);if(ae===-1)return;const Ee=b[ae];Ee!==void 0&&(Ee.update(K.inputSource,K.frame,l||o),Ee.dispatchEvent({type:K.type,data:K.inputSource}))}function H(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",ee);for(let K=0;K<b.length;K++){const ae=x[K];ae!==null&&(x[K]=null,b[K].disconnect(ae))}P=null,q=null,v.reset(),e.setRenderTarget(p),f=null,d=null,h=null,s=null,T=null,Je.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",H),s.addEventListener("inputsourceschange",ee),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(U),s.renderState.layers===void 0){const ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ae),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new gn(f.framebufferWidth,f.framebufferHeight,{format:pn,type:On,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ae=null,Ee=null,oe=null;m.depth&&(oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=m.stencil?as:Qi,Ee=m.stencil?os:mi);const Le={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(Le),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new gn(d.textureWidth,d.textureHeight,{format:pn,type:On,depthTexture:new xd(d.textureWidth,d.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Je.setContext(s),Je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function ee(K){for(let ae=0;ae<K.removed.length;ae++){const Ee=K.removed[ae],oe=x.indexOf(Ee);oe>=0&&(x[oe]=null,b[oe].disconnect(Ee))}for(let ae=0;ae<K.added.length;ae++){const Ee=K.added[ae];let oe=x.indexOf(Ee);if(oe===-1){for(let ke=0;ke<b.length;ke++)if(ke>=x.length){x.push(Ee),oe=ke;break}else if(x[ke]===null){x[ke]=Ee,oe=ke;break}if(oe===-1)break}const Le=b[oe];Le&&Le.connect(Ee)}}const W=new I,re=new I;function G(K,ae,Ee){W.setFromMatrixPosition(ae.matrixWorld),re.setFromMatrixPosition(Ee.matrixWorld);const oe=W.distanceTo(re),Le=ae.projectionMatrix.elements,ke=Ee.projectionMatrix.elements,Ue=Le[14]/(Le[10]-1),Xe=Le[14]/(Le[10]+1),X=(Le[9]+1)/Le[5],te=(Le[9]-1)/Le[5],R=(Le[8]-1)/Le[0],Ae=(ke[8]+1)/ke[0],ie=Ue*R,Me=Ue*Ae,ce=oe/(-R+Ae),Oe=ce*-R;if(ae.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Oe),K.translateZ(ce),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Le[10]===-1)K.projectionMatrix.copy(ae.projectionMatrix),K.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const ge=Ue+ce,w=Xe+ce,_=ie-Oe,O=Me+(oe-Oe),Y=X*Xe/w*ge,ne=te*Xe/w*ge;K.projectionMatrix.makePerspective(_,O,Y,ne,ge,w),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function he(K,ae){ae===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ae.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ae=K.near,Ee=K.far;v.texture!==null&&(v.depthNear>0&&(ae=v.depthNear),v.depthFar>0&&(Ee=v.depthFar)),y.near=F.near=A.near=ae,y.far=F.far=A.far=Ee,(P!==y.near||q!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,q=y.far),A.layers.mask=K.layers.mask|2,F.layers.mask=K.layers.mask|4,y.layers.mask=A.layers.mask|F.layers.mask;const oe=K.parent,Le=y.cameras;he(y,oe);for(let ke=0;ke<Le.length;ke++)he(Le[ke],oe);Le.length===2?G(y,A,F):y.projectionMatrix.copy(A.projectionMatrix),ue(K,y,oe)};function ue(K,ae,Ee){Ee===null?K.matrix.copy(ae.matrixWorld):(K.matrix.copy(Ee.matrixWorld),K.matrix.invert(),K.matrix.multiply(ae.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ae.projectionMatrix),K.projectionMatrixInverse.copy(ae.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Vs*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let Se=null;function Be(K,ae){if(u=ae.getViewerPose(l||o),g=ae,u!==null){const Ee=u.views;f!==null&&(e.setRenderTargetFramebuffer(T,f.framebuffer),e.setRenderTarget(T));let oe=!1;Ee.length!==y.cameras.length&&(y.cameras.length=0,oe=!0);for(let ke=0;ke<Ee.length;ke++){const Ue=Ee[ke];let Xe=null;if(f!==null)Xe=f.getViewport(Ue);else{const te=h.getViewSubImage(d,Ue);Xe=te.viewport,ke===0&&(e.setRenderTargetTextures(T,te.colorTexture,d.ignoreDepthValues?void 0:te.depthStencilTexture),e.setRenderTarget(T))}let X=M[ke];X===void 0&&(X=new nn,X.layers.enable(ke),X.viewport=new xt,M[ke]=X),X.matrix.fromArray(Ue.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(Ue.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),ke===0&&(y.matrix.copy(X.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),oe===!0&&y.cameras.push(X)}const Le=s.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const ke=h.getDepthInformation(Ee[0]);ke&&ke.isValid&&ke.texture&&v.init(e,ke,s.renderState)}}for(let Ee=0;Ee<b.length;Ee++){const oe=x[Ee],Le=b[Ee];oe!==null&&Le!==void 0&&Le.update(oe,ae,l||o)}Se&&Se(K,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),g=null}const Je=new _d;Je.setAnimationLoop(Be),this.setAnimationLoop=function(K){Se=K},this.dispose=function(){}}}const ai=new kn,ly=new ot;function uy(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,pd(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,b,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,T,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===$t&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===$t&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),b=T.envMap,x=T.envMapRotation;b&&(m.envMap.value=b,ai.copy(x),ai.x*=-1,ai.y*=-1,ai.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),m.envMapRotation.value.setFromMatrix4(ly.makeRotationFromEuler(ai)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,T,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$t&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function hy(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,b){const x=b.program;i.uniformBlockBinding(T,x)}function l(T,b){let x=s[T.id];x===void 0&&(g(T),x=u(T),s[T.id]=x,T.addEventListener("dispose",m));const U=b.program;i.updateUBOMapping(T,U);const C=e.render.frame;r[T.id]!==C&&(d(T),r[T.id]=C)}function u(T){const b=h();T.__bindingPointIndex=b;const x=n.createBuffer(),U=T.__size,C=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,U,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,x),x}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const b=s[T.id],x=T.uniforms,U=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let C=0,A=x.length;C<A;C++){const F=Array.isArray(x[C])?x[C]:[x[C]];for(let M=0,y=F.length;M<y;M++){const P=F[M];if(f(P,C,M,U)===!0){const q=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let H=0;for(let ee=0;ee<B.length;ee++){const W=B[ee],re=v(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,q+H,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,H),H+=re.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,q,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(T,b,x,U){const C=T.value,A=b+"_"+x;if(U[A]===void 0)return typeof C=="number"||typeof C=="boolean"?U[A]=C:U[A]=C.clone(),!0;{const F=U[A];if(typeof C=="number"||typeof C=="boolean"){if(F!==C)return U[A]=C,!0}else if(F.equals(C)===!1)return F.copy(C),!0}return!1}function g(T){const b=T.uniforms;let x=0;const U=16;for(let A=0,F=b.length;A<F;A++){const M=Array.isArray(b[A])?b[A]:[b[A]];for(let y=0,P=M.length;y<P;y++){const q=M[y],B=Array.isArray(q.value)?q.value:[q.value];for(let H=0,ee=B.length;H<ee;H++){const W=B[H],re=v(W),G=x%U,he=G%re.boundary,ue=G+he;x+=he,ue!==0&&U-ue<re.storage&&(x+=U-ue),q.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=x,x+=re.storage}}}const C=x%U;return C>0&&(x+=U-C),T.__size=x,T.__cache={},this}function v(T){const b={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(b.boundary=4,b.storage=4):T.isVector2?(b.boundary=8,b.storage=8):T.isVector3||T.isColor?(b.boundary=16,b.storage=12):T.isVector4?(b.boundary=16,b.storage=16):T.isMatrix3?(b.boundary=48,b.storage=48):T.isMatrix4?(b.boundary=64,b.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),b}function m(T){const b=T.target;b.removeEventListener("dispose",m);const x=o.indexOf(b.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(const T in s)n.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class dy{constructor(e={}){const{canvas:t=tm(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const T=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tn,this.toneMapping=jn,this.toneMappingExposure=1;const x=this;let U=!1,C=0,A=0,F=null,M=-1,y=null;const P=new xt,q=new xt;let B=null;const H=new Ve(0);let ee=0,W=t.width,re=t.height,G=1,he=null,ue=null;const Se=new xt(0,0,W,re),Be=new xt(0,0,W,re);let Je=!1;const K=new vd;let ae=!1,Ee=!1;const oe=new ot,Le=new ot,ke=new I,Ue=new xt,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let X=!1;function te(){return F===null?G:1}let R=i;function Ae(S,L){return t.getContext(S,L)}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Cc}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",ve,!1),R===null){const L="webgl2";if(R=Ae(L,S),R===null)throw Ae(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ie,Me,ce,Oe,ge,w,_,O,Y,ne,j,Te,fe,be,J,V,ye,Ne,ze,Re,je,Ze,at,D;function me(){ie=new v_(R),ie.init(),Ze=new ny(R,ie),Me=new h_(R,ie,e,Ze),ce=new Q0(R,ie),Me.reverseDepthBuffer&&d&&ce.buffers.depth.setReversed(!0),Oe=new x_(R),ge=new k0,w=new ty(R,ie,ce,ge,Me,Ze,Oe),_=new f_(x),O=new g_(x),Y=new Rm(R),at=new l_(R,Y),ne=new __(R,Y,Oe,at),j=new M_(R,ne,Y,Oe),ze=new S_(R,Me,w),V=new d_(ge),Te=new O0(x,_,O,ie,Me,at,V),fe=new uy(x,ge),be=new B0,J=new X0(ie),Ne=new c_(x,_,O,ce,j,f,c),ye=new K0(x,j,Me),D=new hy(R,Oe,Me,ce),Re=new u_(R,ie,Oe),je=new y_(R,ie,Oe),Oe.programs=Te.programs,x.capabilities=Me,x.extensions=ie,x.properties=ge,x.renderLists=be,x.shadowMap=ye,x.state=ce,x.info=Oe}me();const $=new cy(x,R);this.xr=$,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const S=ie.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ie.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(S){S!==void 0&&(G=S,this.setSize(W,re,!1))},this.getSize=function(S){return S.set(W,re)},this.setSize=function(S,L,k=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=S,re=L,t.width=Math.floor(S*G),t.height=Math.floor(L*G),k===!0&&(t.style.width=S+"px",t.style.height=L+"px"),this.setViewport(0,0,S,L)},this.getDrawingBufferSize=function(S){return S.set(W*G,re*G).floor()},this.setDrawingBufferSize=function(S,L,k){W=S,re=L,G=k,t.width=Math.floor(S*k),t.height=Math.floor(L*k),this.setViewport(0,0,S,L)},this.getCurrentViewport=function(S){return S.copy(P)},this.getViewport=function(S){return S.copy(Se)},this.setViewport=function(S,L,k,z){S.isVector4?Se.set(S.x,S.y,S.z,S.w):Se.set(S,L,k,z),ce.viewport(P.copy(Se).multiplyScalar(G).round())},this.getScissor=function(S){return S.copy(Be)},this.setScissor=function(S,L,k,z){S.isVector4?Be.set(S.x,S.y,S.z,S.w):Be.set(S,L,k,z),ce.scissor(q.copy(Be).multiplyScalar(G).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(S){ce.setScissorTest(Je=S)},this.setOpaqueSort=function(S){he=S},this.setTransparentSort=function(S){ue=S},this.getClearColor=function(S){return S.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(S=!0,L=!0,k=!0){let z=0;if(S){let N=!1;if(F!==null){const le=F.texture.format;N=le===Oc||le===Uc||le===Nc}if(N){const le=F.texture.type,_e=le===On||le===mi||le===Bs||le===os||le===Fc||le===Dc,Ce=Ne.getClearColor(),Ie=Ne.getClearAlpha(),He=Ce.r,We=Ce.g,Pe=Ce.b;_e?(g[0]=He,g[1]=We,g[2]=Pe,g[3]=Ie,R.clearBufferuiv(R.COLOR,0,g)):(v[0]=He,v[1]=We,v[2]=Pe,v[3]=Ie,R.clearBufferiv(R.COLOR,0,v))}else z|=R.COLOR_BUFFER_BIT}L&&(z|=R.DEPTH_BUFFER_BIT),k&&(z|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),be.dispose(),J.dispose(),ge.dispose(),_.dispose(),O.dispose(),j.dispose(),at.dispose(),D.dispose(),Te.dispose(),$.dispose(),$.removeEventListener("sessionstart",ll),$.removeEventListener("sessionend",ul),ti.stop()};function Q(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const S=Oe.autoReset,L=ye.enabled,k=ye.autoUpdate,z=ye.needsUpdate,N=ye.type;me(),Oe.autoReset=S,ye.enabled=L,ye.autoUpdate=k,ye.needsUpdate=z,ye.type=N}function ve(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ge(S){const L=S.target;L.removeEventListener("dispose",Ge),vt(L)}function vt(S){Dt(S),ge.remove(S)}function Dt(S){const L=ge.get(S).programs;L!==void 0&&(L.forEach(function(k){Te.releaseProgram(k)}),S.isShaderMaterial&&Te.releaseShaderCache(S))}this.renderBufferDirect=function(S,L,k,z,N,le){L===null&&(L=Xe);const _e=N.isMesh&&N.matrixWorld.determinant()<0,Ce=Xf(S,L,k,z,N);ce.setMaterial(z,_e);let Ie=k.index,He=1;if(z.wireframe===!0){if(Ie=ne.getWireframeAttribute(k),Ie===void 0)return;He=2}const We=k.drawRange,Pe=k.attributes.position;let Qe=We.start*He,ct=(We.start+We.count)*He;le!==null&&(Qe=Math.max(Qe,le.start*He),ct=Math.min(ct,(le.start+le.count)*He)),Ie!==null?(Qe=Math.max(Qe,0),ct=Math.min(ct,Ie.count)):Pe!=null&&(Qe=Math.max(Qe,0),ct=Math.min(ct,Pe.count));const ut=ct-Qe;if(ut<0||ut===1/0)return;at.setup(N,z,Ce,k,Ie);let Gt,et=Re;if(Ie!==null&&(Gt=Y.get(Ie),et=je,et.setIndex(Gt)),N.isMesh)z.wireframe===!0?(ce.setLineWidth(z.wireframeLinewidth*te()),et.setMode(R.LINES)):et.setMode(R.TRIANGLES);else if(N.isLine){let De=z.linewidth;De===void 0&&(De=1),ce.setLineWidth(De*te()),N.isLineSegments?et.setMode(R.LINES):N.isLineLoop?et.setMode(R.LINE_LOOP):et.setMode(R.LINE_STRIP)}else N.isPoints?et.setMode(R.POINTS):N.isSprite&&et.setMode(R.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)et.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))et.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const De=N._multiDrawStarts,bn=N._multiDrawCounts,tt=N._multiDrawCount,ln=Ie?Y.get(Ie).bytesPerElement:1,Ei=ge.get(z).currentProgram.getUniforms();for(let qt=0;qt<tt;qt++)Ei.setValue(R,"_gl_DrawID",qt),et.render(De[qt]/ln,bn[qt])}else if(N.isInstancedMesh)et.renderInstances(Qe,ut,N.count);else if(k.isInstancedBufferGeometry){const De=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,bn=Math.min(k.instanceCount,De);et.renderInstances(Qe,ut,bn)}else et.render(Qe,ut)};function nt(S,L,k){S.transparent===!0&&S.side===rn&&S.forceSinglePass===!1?(S.side=$t,S.needsUpdate=!0,tr(S,L,k),S.side=Nn,S.needsUpdate=!0,tr(S,L,k),S.side=rn):tr(S,L,k)}this.compile=function(S,L,k=null){k===null&&(k=S),p=J.get(k),p.init(L),b.push(p),k.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),S!==k&&S.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const z=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const le=N.material;if(le)if(Array.isArray(le))for(let _e=0;_e<le.length;_e++){const Ce=le[_e];nt(Ce,k,N),z.add(Ce)}else nt(le,k,N),z.add(le)}),b.pop(),p=null,z},this.compileAsync=function(S,L,k=null){const z=this.compile(S,L,k);return new Promise(N=>{function le(){if(z.forEach(function(_e){ge.get(_e).currentProgram.isReady()&&z.delete(_e)}),z.size===0){N(S);return}setTimeout(le,10)}ie.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let cn=null;function Mn(S){cn&&cn(S)}function ll(){ti.stop()}function ul(){ti.start()}const ti=new _d;ti.setAnimationLoop(Mn),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(S){cn=S,$.setAnimationLoop(S),S===null?ti.stop():ti.start()},$.addEventListener("sessionstart",ll),$.addEventListener("sessionend",ul),this.render=function(S,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(L),L=$.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,L,F),p=J.get(S,b.length),p.init(L),b.push(p),Le.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),K.setFromProjectionMatrix(Le),Ee=this.localClippingEnabled,ae=V.init(this.clippingPlanes,Ee),m=be.get(S,T.length),m.init(),T.push(m),$.enabled===!0&&$.isPresenting===!0){const le=x.xr.getDepthSensingMesh();le!==null&&Fo(le,L,-1/0,x.sortObjects)}Fo(S,L,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(he,ue),X=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,X&&Ne.addToRenderList(m,S),this.info.render.frame++,ae===!0&&V.beginShadows();const k=p.state.shadowsArray;ye.render(k,S,L),ae===!0&&V.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,N=m.transmissive;if(p.setupLights(),L.isArrayCamera){const le=L.cameras;if(N.length>0)for(let _e=0,Ce=le.length;_e<Ce;_e++){const Ie=le[_e];dl(z,N,S,Ie)}X&&Ne.render(S);for(let _e=0,Ce=le.length;_e<Ce;_e++){const Ie=le[_e];hl(m,S,Ie,Ie.viewport)}}else N.length>0&&dl(z,N,S,L),X&&Ne.render(S),hl(m,S,L);F!==null&&(w.updateMultisampleRenderTarget(F),w.updateRenderTargetMipmap(F)),S.isScene===!0&&S.onAfterRender(x,S,L),at.resetDefaultState(),M=-1,y=null,b.pop(),b.length>0?(p=b[b.length-1],ae===!0&&V.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Fo(S,L,k,z){if(S.visible===!1)return;if(S.layers.test(L.layers)){if(S.isGroup)k=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(L);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||K.intersectsSprite(S)){z&&Ue.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Le);const _e=j.update(S),Ce=S.material;Ce.visible&&m.push(S,_e,Ce,k,Ue.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||K.intersectsObject(S))){const _e=j.update(S),Ce=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ue.copy(S.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Ue.copy(_e.boundingSphere.center)),Ue.applyMatrix4(S.matrixWorld).applyMatrix4(Le)),Array.isArray(Ce)){const Ie=_e.groups;for(let He=0,We=Ie.length;He<We;He++){const Pe=Ie[He],Qe=Ce[Pe.materialIndex];Qe&&Qe.visible&&m.push(S,_e,Qe,k,Ue.z,Pe)}}else Ce.visible&&m.push(S,_e,Ce,k,Ue.z,null)}}const le=S.children;for(let _e=0,Ce=le.length;_e<Ce;_e++)Fo(le[_e],L,k,z)}function hl(S,L,k,z){const N=S.opaque,le=S.transmissive,_e=S.transparent;p.setupLightsView(k),ae===!0&&V.setGlobalState(x.clippingPlanes,k),z&&ce.viewport(P.copy(z)),N.length>0&&er(N,L,k),le.length>0&&er(le,L,k),_e.length>0&&er(_e,L,k),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function dl(S,L,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new gn(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?Dn:On,minFilter:pi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const le=p.state.transmissionRenderTarget[z.id],_e=z.viewport||P;le.setSize(_e.z,_e.w);const Ce=x.getRenderTarget();x.setRenderTarget(le),x.getClearColor(H),ee=x.getClearAlpha(),ee<1&&x.setClearColor(16777215,.5),x.clear(),X&&Ne.render(k);const Ie=x.toneMapping;x.toneMapping=jn;const He=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),ae===!0&&V.setGlobalState(x.clippingPlanes,z),er(S,k,z),w.updateMultisampleRenderTarget(le),w.updateRenderTargetMipmap(le),ie.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let Pe=0,Qe=L.length;Pe<Qe;Pe++){const ct=L[Pe],ut=ct.object,Gt=ct.geometry,et=ct.material,De=ct.group;if(et.side===rn&&ut.layers.test(z.layers)){const bn=et.side;et.side=$t,et.needsUpdate=!0,fl(ut,k,z,Gt,et,De),et.side=bn,et.needsUpdate=!0,We=!0}}We===!0&&(w.updateMultisampleRenderTarget(le),w.updateRenderTargetMipmap(le))}x.setRenderTarget(Ce),x.setClearColor(H,ee),He!==void 0&&(z.viewport=He),x.toneMapping=Ie}function er(S,L,k){const z=L.isScene===!0?L.overrideMaterial:null;for(let N=0,le=S.length;N<le;N++){const _e=S[N],Ce=_e.object,Ie=_e.geometry,He=z===null?_e.material:z,We=_e.group;Ce.layers.test(k.layers)&&fl(Ce,L,k,Ie,He,We)}}function fl(S,L,k,z,N,le){S.onBeforeRender(x,L,k,z,N,le),S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(x,L,k,z,S,le),N.transparent===!0&&N.side===rn&&N.forceSinglePass===!1?(N.side=$t,N.needsUpdate=!0,x.renderBufferDirect(k,L,z,N,S,le),N.side=Nn,N.needsUpdate=!0,x.renderBufferDirect(k,L,z,N,S,le),N.side=rn):x.renderBufferDirect(k,L,z,N,S,le),S.onAfterRender(x,L,k,z,N,le)}function tr(S,L,k){L.isScene!==!0&&(L=Xe);const z=ge.get(S),N=p.state.lights,le=p.state.shadowsArray,_e=N.state.version,Ce=Te.getParameters(S,N.state,le,L,k),Ie=Te.getProgramCacheKey(Ce);let He=z.programs;z.environment=S.isMeshStandardMaterial?L.environment:null,z.fog=L.fog,z.envMap=(S.isMeshStandardMaterial?O:_).get(S.envMap||z.environment),z.envMapRotation=z.environment!==null&&S.envMap===null?L.environmentRotation:S.envMapRotation,He===void 0&&(S.addEventListener("dispose",Ge),He=new Map,z.programs=He);let We=He.get(Ie);if(We!==void 0){if(z.currentProgram===We&&z.lightsStateVersion===_e)return ml(S,Ce),We}else Ce.uniforms=Te.getUniforms(S),S.onBeforeCompile(Ce,x),We=Te.acquireProgram(Ce,Ie),He.set(Ie,We),z.uniforms=Ce.uniforms;const Pe=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Pe.clippingPlanes=V.uniform),ml(S,Ce),z.needsLights=qf(S),z.lightsStateVersion=_e,z.needsLights&&(Pe.ambientLightColor.value=N.state.ambient,Pe.lightProbe.value=N.state.probe,Pe.directionalLights.value=N.state.directional,Pe.directionalLightShadows.value=N.state.directionalShadow,Pe.spotLights.value=N.state.spot,Pe.spotLightShadows.value=N.state.spotShadow,Pe.rectAreaLights.value=N.state.rectArea,Pe.ltc_1.value=N.state.rectAreaLTC1,Pe.ltc_2.value=N.state.rectAreaLTC2,Pe.pointLights.value=N.state.point,Pe.pointLightShadows.value=N.state.pointShadow,Pe.hemisphereLights.value=N.state.hemi,Pe.directionalShadowMap.value=N.state.directionalShadowMap,Pe.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Pe.spotShadowMap.value=N.state.spotShadowMap,Pe.spotLightMatrix.value=N.state.spotLightMatrix,Pe.spotLightMap.value=N.state.spotLightMap,Pe.pointShadowMap.value=N.state.pointShadowMap,Pe.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=We,z.uniformsList=null,We}function pl(S){if(S.uniformsList===null){const L=S.currentProgram.getUniforms();S.uniformsList=io.seqWithValue(L.seq,S.uniforms)}return S.uniformsList}function ml(S,L){const k=ge.get(S);k.outputColorSpace=L.outputColorSpace,k.batching=L.batching,k.batchingColor=L.batchingColor,k.instancing=L.instancing,k.instancingColor=L.instancingColor,k.instancingMorph=L.instancingMorph,k.skinning=L.skinning,k.morphTargets=L.morphTargets,k.morphNormals=L.morphNormals,k.morphColors=L.morphColors,k.morphTargetsCount=L.morphTargetsCount,k.numClippingPlanes=L.numClippingPlanes,k.numIntersection=L.numClipIntersection,k.vertexAlphas=L.vertexAlphas,k.vertexTangents=L.vertexTangents,k.toneMapping=L.toneMapping}function Xf(S,L,k,z,N){L.isScene!==!0&&(L=Xe),w.resetTextureUnits();const le=L.fog,_e=z.isMeshStandardMaterial?L.environment:null,Ce=F===null?x.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:fs,Ie=(z.isMeshStandardMaterial?O:_).get(z.envMap||_e),He=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,We=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Pe=!!k.morphAttributes.position,Qe=!!k.morphAttributes.normal,ct=!!k.morphAttributes.color;let ut=jn;z.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(ut=x.toneMapping);const Gt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,et=Gt!==void 0?Gt.length:0,De=ge.get(z),bn=p.state.lights;if(ae===!0&&(Ee===!0||S!==y)){const Qt=S===y&&z.id===M;V.setState(z,S,Qt)}let tt=!1;z.version===De.__version?(De.needsLights&&De.lightsStateVersion!==bn.state.version||De.outputColorSpace!==Ce||N.isBatchedMesh&&De.batching===!1||!N.isBatchedMesh&&De.batching===!0||N.isBatchedMesh&&De.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&De.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&De.instancing===!1||!N.isInstancedMesh&&De.instancing===!0||N.isSkinnedMesh&&De.skinning===!1||!N.isSkinnedMesh&&De.skinning===!0||N.isInstancedMesh&&De.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&De.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&De.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&De.instancingMorph===!1&&N.morphTexture!==null||De.envMap!==Ie||z.fog===!0&&De.fog!==le||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==V.numPlanes||De.numIntersection!==V.numIntersection)||De.vertexAlphas!==He||De.vertexTangents!==We||De.morphTargets!==Pe||De.morphNormals!==Qe||De.morphColors!==ct||De.toneMapping!==ut||De.morphTargetsCount!==et)&&(tt=!0):(tt=!0,De.__version=z.version);let ln=De.currentProgram;tt===!0&&(ln=tr(z,L,N));let Ei=!1,qt=!1,ys=!1;const ht=ln.getUniforms(),vn=De.uniforms;if(ce.useProgram(ln.program)&&(Ei=!0,qt=!0,ys=!0),z.id!==M&&(M=z.id,qt=!0),Ei||y!==S){ce.buffers.depth.getReversed()?(oe.copy(S.projectionMatrix),im(oe),sm(oe),ht.setValue(R,"projectionMatrix",oe)):ht.setValue(R,"projectionMatrix",S.projectionMatrix),ht.setValue(R,"viewMatrix",S.matrixWorldInverse);const zn=ht.map.cameraPosition;zn!==void 0&&zn.setValue(R,ke.setFromMatrixPosition(S.matrixWorld)),Me.logarithmicDepthBuffer&&ht.setValue(R,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ht.setValue(R,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,qt=!0,ys=!0)}if(N.isSkinnedMesh){ht.setOptional(R,N,"bindMatrix"),ht.setOptional(R,N,"bindMatrixInverse");const Qt=N.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),ht.setValue(R,"boneTexture",Qt.boneTexture,w))}N.isBatchedMesh&&(ht.setOptional(R,N,"batchingTexture"),ht.setValue(R,"batchingTexture",N._matricesTexture,w),ht.setOptional(R,N,"batchingIdTexture"),ht.setValue(R,"batchingIdTexture",N._indirectTexture,w),ht.setOptional(R,N,"batchingColorTexture"),N._colorsTexture!==null&&ht.setValue(R,"batchingColorTexture",N._colorsTexture,w));const xs=k.morphAttributes;if((xs.position!==void 0||xs.normal!==void 0||xs.color!==void 0)&&ze.update(N,k,ln),(qt||De.receiveShadow!==N.receiveShadow)&&(De.receiveShadow=N.receiveShadow,ht.setValue(R,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(vn.envMap.value=Ie,vn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&L.environment!==null&&(vn.envMapIntensity.value=L.environmentIntensity),qt&&(ht.setValue(R,"toneMappingExposure",x.toneMappingExposure),De.needsLights&&Zf(vn,ys),le&&z.fog===!0&&fe.refreshFogUniforms(vn,le),fe.refreshMaterialUniforms(vn,z,G,re,p.state.transmissionRenderTarget[S.id]),io.upload(R,pl(De),vn,w)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(io.upload(R,pl(De),vn,w),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ht.setValue(R,"center",N.center),ht.setValue(R,"modelViewMatrix",N.modelViewMatrix),ht.setValue(R,"normalMatrix",N.normalMatrix),ht.setValue(R,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Qt=z.uniformsGroups;for(let zn=0,Bn=Qt.length;zn<Bn;zn++){const gl=Qt[zn];D.update(gl,ln),D.bind(gl,ln)}}return ln}function Zf(S,L){S.ambientLightColor.needsUpdate=L,S.lightProbe.needsUpdate=L,S.directionalLights.needsUpdate=L,S.directionalLightShadows.needsUpdate=L,S.pointLights.needsUpdate=L,S.pointLightShadows.needsUpdate=L,S.spotLights.needsUpdate=L,S.spotLightShadows.needsUpdate=L,S.rectAreaLights.needsUpdate=L,S.hemisphereLights.needsUpdate=L}function qf(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(S,L,k){ge.get(S.texture).__webglTexture=L,ge.get(S.depthTexture).__webglTexture=k;const z=ge.get(S);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=k===void 0,z.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,L){const k=ge.get(S);k.__webglFramebuffer=L,k.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(S,L=0,k=0){F=S,C=L,A=k;let z=!0,N=null,le=!1,_e=!1;if(S){const Ie=ge.get(S);if(Ie.__useDefaultFramebuffer!==void 0)ce.bindFramebuffer(R.FRAMEBUFFER,null),z=!1;else if(Ie.__webglFramebuffer===void 0)w.setupRenderTarget(S);else if(Ie.__hasExternalTextures)w.rebindTextures(S,ge.get(S.texture).__webglTexture,ge.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Pe=S.depthTexture;if(Ie.__boundDepthTexture!==Pe){if(Pe!==null&&ge.has(Pe)&&(S.width!==Pe.image.width||S.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(S)}}const He=S.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(_e=!0);const We=ge.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(We[L])?N=We[L][k]:N=We[L],le=!0):S.samples>0&&w.useMultisampledRTT(S)===!1?N=ge.get(S).__webglMultisampledFramebuffer:Array.isArray(We)?N=We[k]:N=We,P.copy(S.viewport),q.copy(S.scissor),B=S.scissorTest}else P.copy(Se).multiplyScalar(G).floor(),q.copy(Be).multiplyScalar(G).floor(),B=Je;if(ce.bindFramebuffer(R.FRAMEBUFFER,N)&&z&&ce.drawBuffers(S,N),ce.viewport(P),ce.scissor(q),ce.setScissorTest(B),le){const Ie=ge.get(S.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+L,Ie.__webglTexture,k)}else if(_e){const Ie=ge.get(S.texture),He=L||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ie.__webglTexture,k||0,He)}M=-1},this.readRenderTargetPixels=function(S,L,k,z,N,le,_e){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=ge.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&_e!==void 0&&(Ce=Ce[_e]),Ce){ce.bindFramebuffer(R.FRAMEBUFFER,Ce);try{const Ie=S.texture,He=Ie.format,We=Ie.type;if(!Me.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Me.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=S.width-z&&k>=0&&k<=S.height-N&&R.readPixels(L,k,z,N,Ze.convert(He),Ze.convert(We),le)}finally{const Ie=F!==null?ge.get(F).__webglFramebuffer:null;ce.bindFramebuffer(R.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(S,L,k,z,N,le,_e){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=ge.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&_e!==void 0&&(Ce=Ce[_e]),Ce){const Ie=S.texture,He=Ie.format,We=Ie.type;if(!Me.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Me.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=S.width-z&&k>=0&&k<=S.height-N){ce.bindFramebuffer(R.FRAMEBUFFER,Ce);const Pe=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Pe),R.bufferData(R.PIXEL_PACK_BUFFER,le.byteLength,R.STREAM_READ),R.readPixels(L,k,z,N,Ze.convert(He),Ze.convert(We),0);const Qe=F!==null?ge.get(F).__webglFramebuffer:null;ce.bindFramebuffer(R.FRAMEBUFFER,Qe);const ct=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await nm(R,ct,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Pe),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,le),R.deleteBuffer(Pe),R.deleteSync(ct),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,L=null,k=0){S.isTexture!==!0&&(Ps("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,S=arguments[1]);const z=Math.pow(2,-k),N=Math.floor(S.image.width*z),le=Math.floor(S.image.height*z),_e=L!==null?L.x:0,Ce=L!==null?L.y:0;w.setTexture2D(S,0),R.copyTexSubImage2D(R.TEXTURE_2D,k,0,0,_e,Ce,N,le),ce.unbindTexture()},this.copyTextureToTexture=function(S,L,k=null,z=null,N=0){S.isTexture!==!0&&(Ps("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,S=arguments[1],L=arguments[2],N=arguments[3]||0,k=null);let le,_e,Ce,Ie,He,We,Pe,Qe,ct;const ut=S.isCompressedTexture?S.mipmaps[N]:S.image;k!==null?(le=k.max.x-k.min.x,_e=k.max.y-k.min.y,Ce=k.isBox3?k.max.z-k.min.z:1,Ie=k.min.x,He=k.min.y,We=k.isBox3?k.min.z:0):(le=ut.width,_e=ut.height,Ce=ut.depth||1,Ie=0,He=0,We=0),z!==null?(Pe=z.x,Qe=z.y,ct=z.z):(Pe=0,Qe=0,ct=0);const Gt=Ze.convert(L.format),et=Ze.convert(L.type);let De;L.isData3DTexture?(w.setTexture3D(L,0),De=R.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(w.setTexture2DArray(L,0),De=R.TEXTURE_2D_ARRAY):(w.setTexture2D(L,0),De=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,L.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,L.unpackAlignment);const bn=R.getParameter(R.UNPACK_ROW_LENGTH),tt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),ln=R.getParameter(R.UNPACK_SKIP_PIXELS),Ei=R.getParameter(R.UNPACK_SKIP_ROWS),qt=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,ut.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ut.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ie),R.pixelStorei(R.UNPACK_SKIP_ROWS,He),R.pixelStorei(R.UNPACK_SKIP_IMAGES,We);const ys=S.isDataArrayTexture||S.isData3DTexture,ht=L.isDataArrayTexture||L.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const vn=ge.get(S),xs=ge.get(L),Qt=ge.get(vn.__renderTarget),zn=ge.get(xs.__renderTarget);ce.bindFramebuffer(R.READ_FRAMEBUFFER,Qt.__webglFramebuffer),ce.bindFramebuffer(R.DRAW_FRAMEBUFFER,zn.__webglFramebuffer);for(let Bn=0;Bn<Ce;Bn++)ys&&R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ge.get(S).__webglTexture,N,We+Bn),S.isDepthTexture?(ht&&R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ge.get(L).__webglTexture,N,ct+Bn),R.blitFramebuffer(Ie,He,le,_e,Pe,Qe,le,_e,R.DEPTH_BUFFER_BIT,R.NEAREST)):ht?R.copyTexSubImage3D(De,N,Pe,Qe,ct+Bn,Ie,He,le,_e):R.copyTexSubImage2D(De,N,Pe,Qe,ct+Bn,Ie,He,le,_e);ce.bindFramebuffer(R.READ_FRAMEBUFFER,null),ce.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else ht?S.isDataTexture||S.isData3DTexture?R.texSubImage3D(De,N,Pe,Qe,ct,le,_e,Ce,Gt,et,ut.data):L.isCompressedArrayTexture?R.compressedTexSubImage3D(De,N,Pe,Qe,ct,le,_e,Ce,Gt,ut.data):R.texSubImage3D(De,N,Pe,Qe,ct,le,_e,Ce,Gt,et,ut):S.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,N,Pe,Qe,le,_e,Gt,et,ut.data):S.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,N,Pe,Qe,ut.width,ut.height,Gt,ut.data):R.texSubImage2D(R.TEXTURE_2D,N,Pe,Qe,le,_e,Gt,et,ut);R.pixelStorei(R.UNPACK_ROW_LENGTH,bn),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,tt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ln),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ei),R.pixelStorei(R.UNPACK_SKIP_IMAGES,qt),N===0&&L.generateMipmaps&&R.generateMipmap(De),ce.unbindTexture()},this.copyTextureToTexture3D=function(S,L,k=null,z=null,N=0){return S.isTexture!==!0&&(Ps("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,z=arguments[1]||null,S=arguments[2],L=arguments[3],N=arguments[4]||0),Ps('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,L,k,z,N)},this.initRenderTarget=function(S){ge.get(S).__webglFramebuffer===void 0&&w.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?w.setTextureCube(S,0):S.isData3DTexture?w.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?w.setTexture2DArray(S,0):w.setTexture2D(S,0),ce.unbindTexture()},this.resetState=function(){C=0,A=0,F=null,ce.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}class Vc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ve(e),this.density=t}clone(){return new Vc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class fy extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class py extends Ut{constructor(e=null,t=1,i=1,s,r,o,a,c,l=Jt,u=Jt,h,d){super(null,o,a,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class In extends Pt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Bi=new ot,gu=new ot,wr=[],vu=new Xt,my=new ot,Es=new It,Ts=new Mi;class gy extends It{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new In(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,my)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Xt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Bi),vu.copy(e.boundingBox).applyMatrix4(Bi),this.boundingBox.union(vu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Bi),Ts.copy(e.boundingSphere).applyMatrix4(Bi),this.boundingSphere.union(Ts)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Es.geometry=this.geometry,Es.material=this.material,Es.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ts.copy(this.boundingSphere),Ts.applyMatrix4(i),e.ray.intersectsSphere(Ts)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Bi),gu.multiplyMatrices(i,Bi),Es.matrixWorld=gu,Es.raycast(e,wr);for(let o=0,a=wr.length;o<a;o++){const c=wr[o];c.instanceId=r,c.object=this,t.push(c)}wr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new In(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new py(new Float32Array(s*this.count),s,this.count,Lc,xn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Hc extends ps{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const co=new I,lo=new I,_u=new ot,Rs=new Ks,Er=new Mi,aa=new I,yu=new I;class vy extends Ot{constructor(e=new Ft,t=new Hc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)co.fromBufferAttribute(t,s-1),lo.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=co.distanceTo(lo);e.setAttribute("lineDistance",new Et(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Er.copy(i.boundingSphere),Er.applyMatrix4(s),Er.radius+=r,e.ray.intersectsSphere(Er)===!1)return;_u.copy(s).invert(),Rs.copy(e.ray).applyMatrix4(_u);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=l){const p=u.getX(v),T=u.getX(v+1),b=Tr(this,e,Rs,c,p,T);b&&t.push(b)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(f),p=Tr(this,e,Rs,c,v,m);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=l){const p=Tr(this,e,Rs,c,v,v+1);p&&t.push(p)}if(this.isLineLoop){const v=Tr(this,e,Rs,c,g-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Tr(n,e,t,i,s,r){const o=n.geometry.attributes.position;if(co.fromBufferAttribute(o,s),lo.fromBufferAttribute(o,r),t.distanceSqToSegment(co,lo,aa,yu)>i)return;aa.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(aa);if(!(c<e.near||c>e.far))return{distance:c,point:yu.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const xu=new I,Su=new I;class Ns extends vy{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)xu.fromBufferAttribute(t,s),Su.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+xu.distanceTo(Su);e.setAttribute("lineDistance",new Et(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Gc extends ps{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Mu=new ot,gc=new Ks,Rr=new Mi,Ar=new I;class Ed extends Ot{constructor(e=new Ft,t=new Gc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Rr.copy(i.boundingSphere),Rr.applyMatrix4(s),Rr.radius+=r,e.ray.intersectsSphere(Rr)===!1)return;Mu.copy(s).invert(),gc.copy(e.ray).applyMatrix4(Mu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,h=i.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,v=f;g<v;g++){const m=l.getX(g);Ar.fromBufferAttribute(h,m),bu(Ar,m,c,s,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,v=f;g<v;g++)Ar.fromBufferAttribute(h,g),bu(Ar,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function bu(n,e,t,i,s,r,o){const a=gc.distanceSqToPoint(n);if(a<t){const c=new I;gc.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class _y extends Ut{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Sn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);const u=i[s],d=i[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new se:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new I,s=[],r=[],o=[],a=new I,c=new ot;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ct(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Ct(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Wc extends Sn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new se){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class yy extends Wc{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function $c(){let n=0,e=0,t=0,i=0;function s(r,o,a,c){n=r,e=a,t=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let d=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const Cr=new I,ca=new $c,la=new $c,ua=new $c;class xy extends Sn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new I){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Cr.subVectors(s[0],s[1]).add(s[0]),l=Cr);const h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Cr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Cr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),f),v=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),ca.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,v,m),la.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,v,m),ua.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(ca.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),la.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),ua.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return i.set(ca.calc(c),la.calc(c),ua.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function wu(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+r+o)*c+(-3*t+3*i-2*r-o)*a+r*n+t}function Sy(n,e){const t=1-n;return t*t*e}function My(n,e){return 2*(1-n)*n*e}function by(n,e){return n*n*e}function Us(n,e,t,i){return Sy(n,e)+My(n,t)+by(n,i)}function wy(n,e){const t=1-n;return t*t*t*e}function Ey(n,e){const t=1-n;return 3*t*t*n*e}function Ty(n,e){return 3*(1-n)*n*n*e}function Ry(n,e){return n*n*n*e}function Os(n,e,t,i,s){return wy(n,e)+Ey(n,t)+Ty(n,i)+Ry(n,s)}class Td extends Sn{constructor(e=new se,t=new se,i=new se,s=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new se){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Os(e,s.x,r.x,o.x,a.x),Os(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ay extends Sn{constructor(e=new I,t=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new I){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Os(e,s.x,r.x,o.x,a.x),Os(e,s.y,r.y,o.y,a.y),Os(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Rd extends Sn{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cy extends Sn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ad extends Sn{constructor(e=new se,t=new se,i=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new se){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Us(e,s.x,r.x,o.x),Us(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Iy extends Sn{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Us(e,s.x,r.x,o.x),Us(e,s.y,r.y,o.y),Us(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cd extends Sn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(wu(a,c.x,l.x,u.x,h.x),wu(a,c.y,l.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new se().fromArray(s))}return this}}var vc=Object.freeze({__proto__:null,ArcCurve:yy,CatmullRomCurve3:xy,CubicBezierCurve:Td,CubicBezierCurve3:Ay,EllipseCurve:Wc,LineCurve:Rd,LineCurve3:Cy,QuadraticBezierCurve:Ad,QuadraticBezierCurve3:Iy,SplineCurve:Cd});class Py extends Sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vc[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new vc[s.type]().fromJSON(s))}return this}}class Eu extends Py{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Rd(this.currentPoint.clone(),new se(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new Ad(this.currentPoint.clone(),new se(e,t),new se(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new Td(this.currentPoint.clone(),new se(e,t),new se(i,s),new se(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Cd(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,s,r,o,a,c),this}absellipse(e,t,i,s,r,o,a,c){const l=new Wc(e,t,i,s,r,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}const Ir=new I,Pr=new I,ha=new I,Fr=new on;class Tu extends Ft{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(es*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:v,b:m,c:p}=Fr;if(v.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),Fr.getNormal(ha),h[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,h[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let T=0;T<3;T++){const b=(T+1)%3,x=h[T],U=h[b],C=Fr[u[T]],A=Fr[u[b]],F=`${x}_${U}`,M=`${U}_${x}`;M in d&&d[M]?(ha.dot(d[M].normal)<=r&&(f.push(C.x,C.y,C.z),f.push(A.x,A.y,A.z)),d[M]=null):F in d||(d[F]={index0:l[T],index1:l[b],normal:ha.clone()})}}for(const g in d)if(d[g]){const{index0:v,index1:m}=d[g];Ir.fromBufferAttribute(a,v),Pr.fromBufferAttribute(a,m),f.push(Ir.x,Ir.y,Ir.z),f.push(Pr.x,Pr.y,Pr.z)}this.setAttribute("position",new Et(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Id extends Eu{constructor(e){super(e),this.uuid=Si(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new Eu().fromJSON(s))}return this}}const Fy={triangulate:function(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=Pd(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,h,d,f;if(i&&(r=Oy(n,e,r,t)),n.length>80*t){a=l=n[0],c=u=n[1];for(let g=t;g<s;g+=t)h=n[g],d=n[g+1],h<a&&(a=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);f=Math.max(l-a,u-c),f=f!==0?32767/f:0}return Gs(r,o,t,a,c,f,0),o}};function Pd(n,e,t,i,s){let r,o;if(s===qy(n,e,t,i)>0)for(r=e;r<t;r+=i)o=Ru(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=Ru(r,n[r],n[r+1],o);return o&&To(o,o.next)&&($s(o),o=o.next),o}function vi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(To(t,t.next)||pt(t.prev,t,t.next)===0)){if($s(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Gs(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Hy(n,i,s,r);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,r?Ly(n,i,s,r):Dy(n)){e.push(c.i/t|0),e.push(n.i/t|0),e.push(l.i/t|0),$s(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=Ny(vi(n),e,t),Gs(n,e,t,i,s,r,2)):o===2&&Uy(n,e,t,i,s,r):Gs(vi(n),e,t,i,s,r,1);break}}}function Dy(n){const e=n.prev,t=n,i=n.next;if(pt(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,c=t.y,l=i.y,u=s<r?s<o?s:o:r<o?r:o,h=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&Yi(s,a,r,c,o,l,g.x,g.y)&&pt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ly(n,e,t,i){const s=n.prev,r=n,o=n.next;if(pt(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=u<h?u<d?u:d:h<d?h:d,v=a>c?a>l?a:l:c>l?c:l,m=u>h?u>d?u:d:h>d?h:d,p=_c(f,g,e,t,i),T=_c(v,m,e,t,i);let b=n.prevZ,x=n.nextZ;for(;b&&b.z>=p&&x&&x.z<=T;){if(b.x>=f&&b.x<=v&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&Yi(a,u,c,h,l,d,b.x,b.y)&&pt(b.prev,b,b.next)>=0||(b=b.prevZ,x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Yi(a,u,c,h,l,d,x.x,x.y)&&pt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;b&&b.z>=p;){if(b.x>=f&&b.x<=v&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&Yi(a,u,c,h,l,d,b.x,b.y)&&pt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;x&&x.z<=T;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Yi(a,u,c,h,l,d,x.x,x.y)&&pt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Ny(n,e,t){let i=n;do{const s=i.prev,r=i.next.next;!To(s,r)&&Fd(s,i,i.next,r)&&Ws(s,r)&&Ws(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),$s(i),$s(i.next),i=n=r),i=i.next}while(i!==n);return vi(i)}function Uy(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&$y(o,a)){let c=Dd(o,a);o=vi(o,o.next),c=vi(c,c.next),Gs(o,e,t,i,s,r,0),Gs(c,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Oy(n,e,t,i){const s=[];let r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*i,c=r<o-1?e[r+1]*i:n.length,l=Pd(n,a,c,i,!1),l===l.next&&(l.steiner=!0),s.push(Wy(l));for(s.sort(ky),r=0;r<s.length;r++)t=zy(s[r],t);return t}function ky(n,e){return n.x-e.x}function zy(n,e){const t=By(n,e);if(!t)return e;const i=Dd(t,n);return vi(i,i.next),vi(t,t.next)}function By(n,e){let t=e,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>i&&(i=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0,h;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&Yi(o<l?r:i,o,c,l,o<l?i:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),Ws(t,n)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&Vy(s,t)))&&(s=t,u=h)),t=t.next;while(t!==a);return s}function Vy(n,e){return pt(n.prev,n,e.prev)<0&&pt(e.next,n,n.next)<0}function Hy(n,e,t,i){let s=n;do s.z===0&&(s.z=_c(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Gy(s)}function Gy(n){let e,t,i,s,r,o,a,c,l=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<l&&(a++,i=i.nextZ,!!i);e++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,l*=2}while(o>1);return n}function _c(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Wy(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Yi(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function $y(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Xy(n,e)&&(Ws(n,e)&&Ws(e,n)&&Zy(n,e)&&(pt(n.prev,n,e.prev)||pt(n,e.prev,e))||To(n,e)&&pt(n.prev,n,n.next)>0&&pt(e.prev,e,e.next)>0)}function pt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function To(n,e){return n.x===e.x&&n.y===e.y}function Fd(n,e,t,i){const s=Lr(pt(n,e,t)),r=Lr(pt(n,e,i)),o=Lr(pt(t,i,n)),a=Lr(pt(t,i,e));return!!(s!==r&&o!==a||s===0&&Dr(n,t,e)||r===0&&Dr(n,i,e)||o===0&&Dr(t,n,i)||a===0&&Dr(t,e,i))}function Dr(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Lr(n){return n>0?1:n<0?-1:0}function Xy(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Fd(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ws(n,e){return pt(n.prev,n,n.next)<0?pt(n,e,n.next)>=0&&pt(n,n.prev,e)>=0:pt(n,e,n.prev)<0||pt(n,n.next,e)<0}function Zy(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Dd(n,e){const t=new yc(n.i,n.x,n.y),i=new yc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Ru(n,e,t,i){const s=new yc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function $s(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function yc(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function qy(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class ks{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return ks.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];Au(e),Cu(i,e);let o=e.length;t.forEach(Au);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Cu(i,t[c]);const a=Fy.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Au(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Cu(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Xc extends Ft{constructor(e=new Id([new se(.5,.5),new se(-.5,.5),new se(-.5,-.5),new se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new Et(s,3)),this.setAttribute("uv",new Et(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,T=t.UVGenerator!==void 0?t.UVGenerator:Yy;let b,x=!1,U,C,A,F;p&&(b=p.getSpacedPoints(u),x=!0,d=!1,U=p.computeFrenetFrames(u,!1),C=new I,A=new I,F=new I),d||(m=0,f=0,g=0,v=0);const M=a.extractPoints(l);let y=M.shape;const P=M.holes;if(!ks.isClockWise(y)){y=y.reverse();for(let X=0,te=P.length;X<te;X++){const R=P[X];ks.isClockWise(R)&&(P[X]=R.reverse())}}const B=ks.triangulateShape(y,P),H=y;for(let X=0,te=P.length;X<te;X++){const R=P[X];y=y.concat(R)}function ee(X,te,R){return te||console.error("THREE.ExtrudeGeometry: vec does not exist"),X.clone().addScaledVector(te,R)}const W=y.length,re=B.length;function G(X,te,R){let Ae,ie,Me;const ce=X.x-te.x,Oe=X.y-te.y,ge=R.x-X.x,w=R.y-X.y,_=ce*ce+Oe*Oe,O=ce*w-Oe*ge;if(Math.abs(O)>Number.EPSILON){const Y=Math.sqrt(_),ne=Math.sqrt(ge*ge+w*w),j=te.x-Oe/Y,Te=te.y+ce/Y,fe=R.x-w/ne,be=R.y+ge/ne,J=((fe-j)*w-(be-Te)*ge)/(ce*w-Oe*ge);Ae=j+ce*J-X.x,ie=Te+Oe*J-X.y;const V=Ae*Ae+ie*ie;if(V<=2)return new se(Ae,ie);Me=Math.sqrt(V/2)}else{let Y=!1;ce>Number.EPSILON?ge>Number.EPSILON&&(Y=!0):ce<-Number.EPSILON?ge<-Number.EPSILON&&(Y=!0):Math.sign(Oe)===Math.sign(w)&&(Y=!0),Y?(Ae=-Oe,ie=ce,Me=Math.sqrt(_)):(Ae=ce,ie=Oe,Me=Math.sqrt(_/2))}return new se(Ae/Me,ie/Me)}const he=[];for(let X=0,te=H.length,R=te-1,Ae=X+1;X<te;X++,R++,Ae++)R===te&&(R=0),Ae===te&&(Ae=0),he[X]=G(H[X],H[R],H[Ae]);const ue=[];let Se,Be=he.concat();for(let X=0,te=P.length;X<te;X++){const R=P[X];Se=[];for(let Ae=0,ie=R.length,Me=ie-1,ce=Ae+1;Ae<ie;Ae++,Me++,ce++)Me===ie&&(Me=0),ce===ie&&(ce=0),Se[Ae]=G(R[Ae],R[Me],R[ce]);ue.push(Se),Be=Be.concat(Se)}for(let X=0;X<m;X++){const te=X/m,R=f*Math.cos(te*Math.PI/2),Ae=g*Math.sin(te*Math.PI/2)+v;for(let ie=0,Me=H.length;ie<Me;ie++){const ce=ee(H[ie],he[ie],Ae);oe(ce.x,ce.y,-R)}for(let ie=0,Me=P.length;ie<Me;ie++){const ce=P[ie];Se=ue[ie];for(let Oe=0,ge=ce.length;Oe<ge;Oe++){const w=ee(ce[Oe],Se[Oe],Ae);oe(w.x,w.y,-R)}}}const Je=g+v;for(let X=0;X<W;X++){const te=d?ee(y[X],Be[X],Je):y[X];x?(A.copy(U.normals[0]).multiplyScalar(te.x),C.copy(U.binormals[0]).multiplyScalar(te.y),F.copy(b[0]).add(A).add(C),oe(F.x,F.y,F.z)):oe(te.x,te.y,0)}for(let X=1;X<=u;X++)for(let te=0;te<W;te++){const R=d?ee(y[te],Be[te],Je):y[te];x?(A.copy(U.normals[X]).multiplyScalar(R.x),C.copy(U.binormals[X]).multiplyScalar(R.y),F.copy(b[X]).add(A).add(C),oe(F.x,F.y,F.z)):oe(R.x,R.y,h/u*X)}for(let X=m-1;X>=0;X--){const te=X/m,R=f*Math.cos(te*Math.PI/2),Ae=g*Math.sin(te*Math.PI/2)+v;for(let ie=0,Me=H.length;ie<Me;ie++){const ce=ee(H[ie],he[ie],Ae);oe(ce.x,ce.y,h+R)}for(let ie=0,Me=P.length;ie<Me;ie++){const ce=P[ie];Se=ue[ie];for(let Oe=0,ge=ce.length;Oe<ge;Oe++){const w=ee(ce[Oe],Se[Oe],Ae);x?oe(w.x,w.y+b[u-1].y,b[u-1].x+R):oe(w.x,w.y,h+R)}}}K(),ae();function K(){const X=s.length/3;if(d){let te=0,R=W*te;for(let Ae=0;Ae<re;Ae++){const ie=B[Ae];Le(ie[2]+R,ie[1]+R,ie[0]+R)}te=u+m*2,R=W*te;for(let Ae=0;Ae<re;Ae++){const ie=B[Ae];Le(ie[0]+R,ie[1]+R,ie[2]+R)}}else{for(let te=0;te<re;te++){const R=B[te];Le(R[2],R[1],R[0])}for(let te=0;te<re;te++){const R=B[te];Le(R[0]+W*u,R[1]+W*u,R[2]+W*u)}}i.addGroup(X,s.length/3-X,0)}function ae(){const X=s.length/3;let te=0;Ee(H,te),te+=H.length;for(let R=0,Ae=P.length;R<Ae;R++){const ie=P[R];Ee(ie,te),te+=ie.length}i.addGroup(X,s.length/3-X,1)}function Ee(X,te){let R=X.length;for(;--R>=0;){const Ae=R;let ie=R-1;ie<0&&(ie=X.length-1);for(let Me=0,ce=u+m*2;Me<ce;Me++){const Oe=W*Me,ge=W*(Me+1),w=te+Ae+Oe,_=te+ie+Oe,O=te+ie+ge,Y=te+Ae+ge;ke(w,_,O,Y)}}}function oe(X,te,R){c.push(X),c.push(te),c.push(R)}function Le(X,te,R){Ue(X),Ue(te),Ue(R);const Ae=s.length/3,ie=T.generateTopUV(i,s,Ae-3,Ae-2,Ae-1);Xe(ie[0]),Xe(ie[1]),Xe(ie[2])}function ke(X,te,R,Ae){Ue(X),Ue(te),Ue(Ae),Ue(te),Ue(R),Ue(Ae);const ie=s.length/3,Me=T.generateSideWallUV(i,s,ie-6,ie-3,ie-2,ie-1);Xe(Me[0]),Xe(Me[1]),Xe(Me[3]),Xe(Me[1]),Xe(Me[2]),Xe(Me[3])}function Ue(X){s.push(c[X*3+0]),s.push(c[X*3+1]),s.push(c[X*3+2])}function Xe(X){r.push(X.x),r.push(X.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return jy(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new vc[s.type]().fromJSON(s)),new Xc(i,e.options)}}const Yy={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[s*3],u=e[s*3+1];return[new se(r,o),new se(a,c),new se(l,u)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],u=e[i*3+1],h=e[i*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],v=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new se(o,1-c),new se(l,1-h),new se(d,1-g),new se(v,1-p)]:[new se(a,1-c),new se(u,1-h),new se(f,1-g),new se(m,1-p)]}};function jy(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Zc extends Ft{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let h=e;const d=(t-e)/s,f=new I,g=new se;for(let v=0;v<=s;v++){for(let m=0;m<=i;m++){const p=r+m/i*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let v=0;v<s;v++){const m=v*(i+1);for(let p=0;p<i;p++){const T=p+m,b=T,x=T+i+1,U=T+i+2,C=T+1;a.push(b,x,C),a.push(x,U,C)}}this.setIndex(a),this.setAttribute("position",new Et(c,3)),this.setAttribute("normal",new Et(l,3)),this.setAttribute("uv",new Et(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ky extends wt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class Ld{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Iu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Iu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Iu(){return performance.now()}class gs{constructor(e){this.value=e}clone(){return new gs(this.value.clone===void 0?this.value:this.value.clone())}}const Pu=new ot;class Jy{constructor(e,t,i=0,s=1/0){this.ray=new Ks(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new zc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Pu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pu),this}intersectObject(e,t=!0,i=[]){return xc(e,this,i,t),i.sort(Fu),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)xc(e[s],this,i,t);return i.sort(Fu),i}}function Fu(n,e){return n.distance-e.distance}function xc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)xc(r[o],e,t,!0)}}class fn{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ct(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Qy extends Ns{constructor(e=10,t=16,i=8,s=64,r=4473924,o=8947848){r=new Ve(r),o=new Ve(o);const a=[],c=[];if(t>1)for(let h=0;h<t;h++){const d=h/t*(Math.PI*2),f=Math.sin(d)*e,g=Math.cos(d)*e;a.push(0,0,0),a.push(f,0,g);const v=h&1?r:o;c.push(v.r,v.g,v.b),c.push(v.r,v.g,v.b)}for(let h=0;h<i;h++){const d=h&1?r:o,f=e-e/i*h;for(let g=0;g<s;g++){let v=g/s*(Math.PI*2),m=Math.sin(v)*f,p=Math.cos(v)*f;a.push(m,0,p),c.push(d.r,d.g,d.b),v=(g+1)/s*(Math.PI*2),m=Math.sin(v)*f,p=Math.cos(v)*f,a.push(m,0,p),c.push(d.r,d.g,d.b)}}const l=new Ft;l.setAttribute("position",new Et(a,3)),l.setAttribute("color",new Et(c,3));const u=new Hc({vertexColors:!0,toneMapped:!1});super(l,u),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class ex extends xi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cc);var Du;function Z(n,e,t){function i(a,c){if(a._zod||Object.defineProperty(a,"_zod",{value:{def:c,constr:o,traits:new Set},enumerable:!1}),a._zod.traits.has(n))return;a._zod.traits.add(n),e(a,c);const l=o.prototype,u=Object.keys(l);for(let h=0;h<u.length;h++){const d=u[h];d in a||(a[d]=l[d].bind(a))}}const s=(t==null?void 0:t.Parent)??Object;class r extends s{}Object.defineProperty(r,"name",{value:n});function o(a){var c;const l=t!=null&&t.Parent?new r:this;i(l,a),(c=l._zod).deferred??(c.deferred=[]);for(const u of l._zod.deferred)u();return l}return Object.defineProperty(o,"init",{value:i}),Object.defineProperty(o,Symbol.hasInstance,{value:a=>{var c,l;return t!=null&&t.Parent&&a instanceof t.Parent?!0:(l=(c=a==null?void 0:a._zod)==null?void 0:c.traits)==null?void 0:l.has(n)}}),Object.defineProperty(o,"name",{value:n}),o}class ns extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}class Nd extends Error{constructor(e){super(`Encountered unidirectional transform during encode: ${e}`),this.name="ZodEncodeError"}}(Du=globalThis).__zod_globalConfig??(Du.__zod_globalConfig={});const qc=globalThis.__zod_globalConfig;function _i(n){return qc}function Ud(n){const e=Object.values(n).filter(i=>typeof i=="number");return Object.entries(n).filter(([i,s])=>e.indexOf(+i)===-1).map(([i,s])=>s)}function Sc(n,e){return typeof e=="bigint"?e.toString():e}function Ro(n){return{get value(){{const e=n();return Object.defineProperty(this,"value",{value:e}),e}}}}function Yc(n){return n==null}function jc(n){const e=n.startsWith("^")?1:0,t=n.endsWith("$")?n.length-1:n.length;return n.slice(e,t)}function tx(n,e){const t=n/e,i=Math.round(t),s=Number.EPSILON*Math.max(Math.abs(t),1);return Math.abs(t-i)<s?0:t-i}const Lu=Symbol("evaluating");function st(n,e,t){let i;Object.defineProperty(n,e,{get(){if(i!==Lu)return i===void 0&&(i=Lu,i=t()),i},set(s){Object.defineProperty(n,e,{value:s})},configurable:!0})}function bi(n,e,t){Object.defineProperty(n,e,{value:t,writable:!0,enumerable:!0,configurable:!0})}function Jn(...n){const e={};for(const t of n){const i=Object.getOwnPropertyDescriptors(t);Object.assign(e,i)}return Object.defineProperties({},e)}function Nu(n){return JSON.stringify(n)}function nx(n){return n.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"")}const Od="captureStackTrace"in Error?Error.captureStackTrace:(...n)=>{};function Xs(n){return typeof n=="object"&&n!==null&&!Array.isArray(n)}const ix=Ro(()=>{var n;if(qc.jitless||typeof navigator<"u"&&((n=navigator==null?void 0:navigator.userAgent)!=null&&n.includes("Cloudflare")))return!1;try{const e=Function;return new e(""),!0}catch{return!1}});function Zs(n){if(Xs(n)===!1)return!1;const e=n.constructor;if(e===void 0||typeof e!="function")return!0;const t=e.prototype;return!(Xs(t)===!1||Object.prototype.hasOwnProperty.call(t,"isPrototypeOf")===!1)}function kd(n){return Zs(n)?{...n}:Array.isArray(n)?[...n]:n instanceof Map?new Map(n):n instanceof Set?new Set(n):n}const sx=new Set(["string","number","symbol"]);function ls(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Qn(n,e,t){const i=new n._zod.constr(e??n._zod.def);return(!e||t!=null&&t.parent)&&(i._zod.parent=n),i}function Fe(n){const e=n;if(!e)return{};if(typeof e=="string")return{error:()=>e};if((e==null?void 0:e.message)!==void 0){if((e==null?void 0:e.error)!==void 0)throw new Error("Cannot specify both `message` and `error` params");e.error=e.message}return delete e.message,typeof e.error=="string"?{...e,error:()=>e.error}:e}function rx(n){return Object.keys(n).filter(e=>n[e]._zod.optin==="optional"&&n[e]._zod.optout==="optional")}const ox={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-34028234663852886e22,34028234663852886e22],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]};function ax(n,e){const t=n._zod.def,i=t.checks;if(i&&i.length>0)throw new Error(".pick() cannot be used on object schemas containing refinements");const r=Jn(n._zod.def,{get shape(){const o={};for(const a in e){if(!(a in t.shape))throw new Error(`Unrecognized key: "${a}"`);e[a]&&(o[a]=t.shape[a])}return bi(this,"shape",o),o},checks:[]});return Qn(n,r)}function cx(n,e){const t=n._zod.def,i=t.checks;if(i&&i.length>0)throw new Error(".omit() cannot be used on object schemas containing refinements");const r=Jn(n._zod.def,{get shape(){const o={...n._zod.def.shape};for(const a in e){if(!(a in t.shape))throw new Error(`Unrecognized key: "${a}"`);e[a]&&delete o[a]}return bi(this,"shape",o),o},checks:[]});return Qn(n,r)}function lx(n,e){if(!Zs(e))throw new Error("Invalid input to extend: expected a plain object");const t=n._zod.def.checks;if(t&&t.length>0){const r=n._zod.def.shape;for(const o in e)if(Object.getOwnPropertyDescriptor(r,o)!==void 0)throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}const s=Jn(n._zod.def,{get shape(){const r={...n._zod.def.shape,...e};return bi(this,"shape",r),r}});return Qn(n,s)}function ux(n,e){if(!Zs(e))throw new Error("Invalid input to safeExtend: expected a plain object");const t=Jn(n._zod.def,{get shape(){const i={...n._zod.def.shape,...e};return bi(this,"shape",i),i}});return Qn(n,t)}function hx(n,e){var i;if((i=n._zod.def.checks)!=null&&i.length)throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");const t=Jn(n._zod.def,{get shape(){const s={...n._zod.def.shape,...e._zod.def.shape};return bi(this,"shape",s),s},get catchall(){return e._zod.def.catchall},checks:e._zod.def.checks??[]});return Qn(n,t)}function dx(n,e,t){const s=e._zod.def.checks;if(s&&s.length>0)throw new Error(".partial() cannot be used on object schemas containing refinements");const o=Jn(e._zod.def,{get shape(){const a=e._zod.def.shape,c={...a};if(t)for(const l in t){if(!(l in a))throw new Error(`Unrecognized key: "${l}"`);t[l]&&(c[l]=n?new n({type:"optional",innerType:a[l]}):a[l])}else for(const l in a)c[l]=n?new n({type:"optional",innerType:a[l]}):a[l];return bi(this,"shape",c),c},checks:[]});return Qn(e,o)}function fx(n,e,t){const i=Jn(e._zod.def,{get shape(){const s=e._zod.def.shape,r={...s};if(t)for(const o in t){if(!(o in r))throw new Error(`Unrecognized key: "${o}"`);t[o]&&(r[o]=new n({type:"nonoptional",innerType:s[o]}))}else for(const o in s)r[o]=new n({type:"nonoptional",innerType:s[o]});return bi(this,"shape",r),r}});return Qn(e,i)}function ji(n,e=0){var t;if(n.aborted===!0)return!0;for(let i=e;i<n.issues.length;i++)if(((t=n.issues[i])==null?void 0:t.continue)!==!0)return!0;return!1}function px(n,e=0){var t;if(n.aborted===!0)return!0;for(let i=e;i<n.issues.length;i++)if(((t=n.issues[i])==null?void 0:t.continue)===!1)return!0;return!1}function Ao(n,e){return e.map(t=>{var i;return(i=t).path??(i.path=[]),t.path.unshift(n),t})}function Nr(n){return typeof n=="string"?n:n==null?void 0:n.message}function yi(n,e,t){var c,l,u,h,d,f;const i=n.message?n.message:Nr((u=(l=(c=n.inst)==null?void 0:c._zod.def)==null?void 0:l.error)==null?void 0:u.call(l,n))??Nr((h=e==null?void 0:e.error)==null?void 0:h.call(e,n))??Nr((d=t.customError)==null?void 0:d.call(t,n))??Nr((f=t.localeError)==null?void 0:f.call(t,n))??"Invalid input",{inst:s,continue:r,input:o,...a}=n;return a.path??(a.path=[]),a.message=i,e!=null&&e.reportInput&&(a.input=o),a}function Kc(n){return Array.isArray(n)?"array":typeof n=="string"?"string":"unknown"}function qs(...n){const[e,t,i]=n;return typeof e=="string"?{message:e,code:"custom",input:t,inst:i}:{...e}}const zd=(n,e)=>{n.name="$ZodError",Object.defineProperty(n,"_zod",{value:n._zod,enumerable:!1}),Object.defineProperty(n,"issues",{value:e,enumerable:!1}),n.message=JSON.stringify(e,Sc,2),Object.defineProperty(n,"toString",{value:()=>n.message,enumerable:!1})},Bd=Z("$ZodError",zd),Vd=Z("$ZodError",zd,{Parent:Error});function mx(n,e=t=>t.message){const t={},i=[];for(const s of n.issues)s.path.length>0?(t[s.path[0]]=t[s.path[0]]||[],t[s.path[0]].push(e(s))):i.push(e(s));return{formErrors:i,fieldErrors:t}}function gx(n,e=t=>t.message){const t={_errors:[]},i=(s,r=[])=>{for(const o of s.issues)if(o.code==="invalid_union"&&o.errors.length)o.errors.map(a=>i({issues:a},[...r,...o.path]));else if(o.code==="invalid_key")i({issues:o.issues},[...r,...o.path]);else if(o.code==="invalid_element")i({issues:o.issues},[...r,...o.path]);else{const a=[...r,...o.path];if(a.length===0)t._errors.push(e(o));else{let c=t,l=0;for(;l<a.length;){const u=a[l];l===a.length-1?(c[u]=c[u]||{_errors:[]},c[u]._errors.push(e(o))):c[u]=c[u]||{_errors:[]},c=c[u],l++}}}};return i(n),t}const Jc=n=>(e,t,i,s)=>{const r=i?{...i,async:!1}:{async:!1},o=e._zod.run({value:t,issues:[]},r);if(o instanceof Promise)throw new ns;if(o.issues.length){const a=new((s==null?void 0:s.Err)??n)(o.issues.map(c=>yi(c,r,_i())));throw Od(a,s==null?void 0:s.callee),a}return o.value},Qc=n=>async(e,t,i,s)=>{const r=i?{...i,async:!0}:{async:!0};let o=e._zod.run({value:t,issues:[]},r);if(o instanceof Promise&&(o=await o),o.issues.length){const a=new((s==null?void 0:s.Err)??n)(o.issues.map(c=>yi(c,r,_i())));throw Od(a,s==null?void 0:s.callee),a}return o.value},Co=n=>(e,t,i)=>{const s=i?{...i,async:!1}:{async:!1},r=e._zod.run({value:t,issues:[]},s);if(r instanceof Promise)throw new ns;return r.issues.length?{success:!1,error:new(n??Bd)(r.issues.map(o=>yi(o,s,_i())))}:{success:!0,data:r.value}},vx=Co(Vd),Io=n=>async(e,t,i)=>{const s=i?{...i,async:!0}:{async:!0};let r=e._zod.run({value:t,issues:[]},s);return r instanceof Promise&&(r=await r),r.issues.length?{success:!1,error:new n(r.issues.map(o=>yi(o,s,_i())))}:{success:!0,data:r.value}},_x=Io(Vd),yx=n=>(e,t,i)=>{const s=i?{...i,direction:"backward"}:{direction:"backward"};return Jc(n)(e,t,s)},xx=n=>(e,t,i)=>Jc(n)(e,t,i),Sx=n=>async(e,t,i)=>{const s=i?{...i,direction:"backward"}:{direction:"backward"};return Qc(n)(e,t,s)},Mx=n=>async(e,t,i)=>Qc(n)(e,t,i),bx=n=>(e,t,i)=>{const s=i?{...i,direction:"backward"}:{direction:"backward"};return Co(n)(e,t,s)},wx=n=>(e,t,i)=>Co(n)(e,t,i),Ex=n=>async(e,t,i)=>{const s=i?{...i,direction:"backward"}:{direction:"backward"};return Io(n)(e,t,s)},Tx=n=>async(e,t,i)=>Io(n)(e,t,i),Rx=/^[cC][0-9a-z]{6,}$/,Ax=/^[0-9a-z]+$/,Cx=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,Ix=/^[0-9a-vA-V]{20}$/,Px=/^[A-Za-z0-9]{27}$/,Fx=/^[a-zA-Z0-9_-]{21}$/,Dx=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,Lx=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,Uu=n=>n?new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${n}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,Nx=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,Ux="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";function Ox(){return new RegExp(Ux,"u")}const kx=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,zx=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,Bx=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,Vx=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,Hx=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,Hd=/^[A-Za-z0-9_-]*$/,Gx=/^https?$/,Wx=/^\+[1-9]\d{6,14}$/,Gd="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",$x=new RegExp(`^${Gd}$`);function Wd(n){const e="(?:[01]\\d|2[0-3]):[0-5]\\d";return typeof n.precision=="number"?n.precision===-1?`${e}`:n.precision===0?`${e}:[0-5]\\d`:`${e}:[0-5]\\d\\.\\d{${n.precision}}`:`${e}(?::[0-5]\\d(?:\\.\\d+)?)?`}function Xx(n){return new RegExp(`^${Wd(n)}$`)}function Zx(n){const e=Wd({precision:n.precision}),t=["Z"];n.local&&t.push(""),n.offset&&t.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");const i=`${e}(?:${t.join("|")})`;return new RegExp(`^${Gd}T(?:${i})$`)}const qx=n=>{const e=n?`[\\s\\S]{${(n==null?void 0:n.minimum)??0},${(n==null?void 0:n.maximum)??""}}`:"[\\s\\S]*";return new RegExp(`^${e}$`)},Yx=/^-?\d+$/,jx=/^-?\d+(?:\.\d+)?$/,Kx=/^(?:true|false)$/i,Jx=/^[^A-Z]*$/,Qx=/^[^a-z]*$/,Zt=Z("$ZodCheck",(n,e)=>{var t;n._zod??(n._zod={}),n._zod.def=e,(t=n._zod).onattach??(t.onattach=[])}),$d={number:"number",bigint:"bigint",object:"date"},Xd=Z("$ZodCheckLessThan",(n,e)=>{Zt.init(n,e);const t=$d[typeof e.value];n._zod.onattach.push(i=>{const s=i._zod.bag,r=(e.inclusive?s.maximum:s.exclusiveMaximum)??Number.POSITIVE_INFINITY;e.value<r&&(e.inclusive?s.maximum=e.value:s.exclusiveMaximum=e.value)}),n._zod.check=i=>{(e.inclusive?i.value<=e.value:i.value<e.value)||i.issues.push({origin:t,code:"too_big",maximum:typeof e.value=="object"?e.value.getTime():e.value,input:i.value,inclusive:e.inclusive,inst:n,continue:!e.abort})}}),Zd=Z("$ZodCheckGreaterThan",(n,e)=>{Zt.init(n,e);const t=$d[typeof e.value];n._zod.onattach.push(i=>{const s=i._zod.bag,r=(e.inclusive?s.minimum:s.exclusiveMinimum)??Number.NEGATIVE_INFINITY;e.value>r&&(e.inclusive?s.minimum=e.value:s.exclusiveMinimum=e.value)}),n._zod.check=i=>{(e.inclusive?i.value>=e.value:i.value>e.value)||i.issues.push({origin:t,code:"too_small",minimum:typeof e.value=="object"?e.value.getTime():e.value,input:i.value,inclusive:e.inclusive,inst:n,continue:!e.abort})}}),eS=Z("$ZodCheckMultipleOf",(n,e)=>{Zt.init(n,e),n._zod.onattach.push(t=>{var i;(i=t._zod.bag).multipleOf??(i.multipleOf=e.value)}),n._zod.check=t=>{if(typeof t.value!=typeof e.value)throw new Error("Cannot mix number and bigint in multiple_of check.");(typeof t.value=="bigint"?t.value%e.value===BigInt(0):tx(t.value,e.value)===0)||t.issues.push({origin:typeof t.value,code:"not_multiple_of",divisor:e.value,input:t.value,inst:n,continue:!e.abort})}}),tS=Z("$ZodCheckNumberFormat",(n,e)=>{var o;Zt.init(n,e),e.format=e.format||"float64";const t=(o=e.format)==null?void 0:o.includes("int"),i=t?"int":"number",[s,r]=ox[e.format];n._zod.onattach.push(a=>{const c=a._zod.bag;c.format=e.format,c.minimum=s,c.maximum=r,t&&(c.pattern=Yx)}),n._zod.check=a=>{const c=a.value;if(t){if(!Number.isInteger(c)){a.issues.push({expected:i,format:e.format,code:"invalid_type",continue:!1,input:c,inst:n});return}if(!Number.isSafeInteger(c)){c>0?a.issues.push({input:c,code:"too_big",maximum:Number.MAX_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:n,origin:i,inclusive:!0,continue:!e.abort}):a.issues.push({input:c,code:"too_small",minimum:Number.MIN_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:n,origin:i,inclusive:!0,continue:!e.abort});return}}c<s&&a.issues.push({origin:"number",input:c,code:"too_small",minimum:s,inclusive:!0,inst:n,continue:!e.abort}),c>r&&a.issues.push({origin:"number",input:c,code:"too_big",maximum:r,inclusive:!0,inst:n,continue:!e.abort})}}),nS=Z("$ZodCheckMaxLength",(n,e)=>{var t;Zt.init(n,e),(t=n._zod.def).when??(t.when=i=>{const s=i.value;return!Yc(s)&&s.length!==void 0}),n._zod.onattach.push(i=>{const s=i._zod.bag.maximum??Number.POSITIVE_INFINITY;e.maximum<s&&(i._zod.bag.maximum=e.maximum)}),n._zod.check=i=>{const s=i.value;if(s.length<=e.maximum)return;const o=Kc(s);i.issues.push({origin:o,code:"too_big",maximum:e.maximum,inclusive:!0,input:s,inst:n,continue:!e.abort})}}),iS=Z("$ZodCheckMinLength",(n,e)=>{var t;Zt.init(n,e),(t=n._zod.def).when??(t.when=i=>{const s=i.value;return!Yc(s)&&s.length!==void 0}),n._zod.onattach.push(i=>{const s=i._zod.bag.minimum??Number.NEGATIVE_INFINITY;e.minimum>s&&(i._zod.bag.minimum=e.minimum)}),n._zod.check=i=>{const s=i.value;if(s.length>=e.minimum)return;const o=Kc(s);i.issues.push({origin:o,code:"too_small",minimum:e.minimum,inclusive:!0,input:s,inst:n,continue:!e.abort})}}),sS=Z("$ZodCheckLengthEquals",(n,e)=>{var t;Zt.init(n,e),(t=n._zod.def).when??(t.when=i=>{const s=i.value;return!Yc(s)&&s.length!==void 0}),n._zod.onattach.push(i=>{const s=i._zod.bag;s.minimum=e.length,s.maximum=e.length,s.length=e.length}),n._zod.check=i=>{const s=i.value,r=s.length;if(r===e.length)return;const o=Kc(s),a=r>e.length;i.issues.push({origin:o,...a?{code:"too_big",maximum:e.length}:{code:"too_small",minimum:e.length},inclusive:!0,exact:!0,input:i.value,inst:n,continue:!e.abort})}}),Po=Z("$ZodCheckStringFormat",(n,e)=>{var t,i;Zt.init(n,e),n._zod.onattach.push(s=>{const r=s._zod.bag;r.format=e.format,e.pattern&&(r.patterns??(r.patterns=new Set),r.patterns.add(e.pattern))}),e.pattern?(t=n._zod).check??(t.check=s=>{e.pattern.lastIndex=0,!e.pattern.test(s.value)&&s.issues.push({origin:"string",code:"invalid_format",format:e.format,input:s.value,...e.pattern?{pattern:e.pattern.toString()}:{},inst:n,continue:!e.abort})}):(i=n._zod).check??(i.check=()=>{})}),rS=Z("$ZodCheckRegex",(n,e)=>{Po.init(n,e),n._zod.check=t=>{e.pattern.lastIndex=0,!e.pattern.test(t.value)&&t.issues.push({origin:"string",code:"invalid_format",format:"regex",input:t.value,pattern:e.pattern.toString(),inst:n,continue:!e.abort})}}),oS=Z("$ZodCheckLowerCase",(n,e)=>{e.pattern??(e.pattern=Jx),Po.init(n,e)}),aS=Z("$ZodCheckUpperCase",(n,e)=>{e.pattern??(e.pattern=Qx),Po.init(n,e)}),cS=Z("$ZodCheckIncludes",(n,e)=>{Zt.init(n,e);const t=ls(e.includes),i=new RegExp(typeof e.position=="number"?`^.{${e.position}}${t}`:t);e.pattern=i,n._zod.onattach.push(s=>{const r=s._zod.bag;r.patterns??(r.patterns=new Set),r.patterns.add(i)}),n._zod.check=s=>{s.value.includes(e.includes,e.position)||s.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:e.includes,input:s.value,inst:n,continue:!e.abort})}}),lS=Z("$ZodCheckStartsWith",(n,e)=>{Zt.init(n,e);const t=new RegExp(`^${ls(e.prefix)}.*`);e.pattern??(e.pattern=t),n._zod.onattach.push(i=>{const s=i._zod.bag;s.patterns??(s.patterns=new Set),s.patterns.add(t)}),n._zod.check=i=>{i.value.startsWith(e.prefix)||i.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:e.prefix,input:i.value,inst:n,continue:!e.abort})}}),uS=Z("$ZodCheckEndsWith",(n,e)=>{Zt.init(n,e);const t=new RegExp(`.*${ls(e.suffix)}$`);e.pattern??(e.pattern=t),n._zod.onattach.push(i=>{const s=i._zod.bag;s.patterns??(s.patterns=new Set),s.patterns.add(t)}),n._zod.check=i=>{i.value.endsWith(e.suffix)||i.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:e.suffix,input:i.value,inst:n,continue:!e.abort})}}),hS=Z("$ZodCheckOverwrite",(n,e)=>{Zt.init(n,e),n._zod.check=t=>{t.value=e.tx(t.value)}});class dS{constructor(e=[]){this.content=[],this.indent=0,this&&(this.args=e)}indented(e){this.indent+=1,e(this),this.indent-=1}write(e){if(typeof e=="function"){e(this,{execution:"sync"}),e(this,{execution:"async"});return}const i=e.split(`
`).filter(o=>o),s=Math.min(...i.map(o=>o.length-o.trimStart().length)),r=i.map(o=>o.slice(s)).map(o=>" ".repeat(this.indent*2)+o);for(const o of r)this.content.push(o)}compile(){const e=Function,t=this==null?void 0:this.args,s=[...((this==null?void 0:this.content)??[""]).map(r=>`  ${r}`)];return new e(...t,s.join(`
`))}}const fS={major:4,minor:4,patch:3},dt=Z("$ZodType",(n,e)=>{var s;var t;n??(n={}),n._zod.def=e,n._zod.bag=n._zod.bag||{},n._zod.version=fS;const i=[...n._zod.def.checks??[]];n._zod.traits.has("$ZodCheck")&&i.unshift(n);for(const r of i)for(const o of r._zod.onattach)o(n);if(i.length===0)(t=n._zod).deferred??(t.deferred=[]),(s=n._zod.deferred)==null||s.push(()=>{n._zod.run=n._zod.parse});else{const r=(a,c,l)=>{let u=ji(a),h;for(const d of c){if(d._zod.def.when){if(px(a)||!d._zod.def.when(a))continue}else if(u)continue;const f=a.issues.length,g=d._zod.check(a);if(g instanceof Promise&&(l==null?void 0:l.async)===!1)throw new ns;if(h||g instanceof Promise)h=(h??Promise.resolve()).then(async()=>{await g,a.issues.length!==f&&(u||(u=ji(a,f)))});else{if(a.issues.length===f)continue;u||(u=ji(a,f))}}return h?h.then(()=>a):a},o=(a,c,l)=>{if(ji(a))return a.aborted=!0,a;const u=r(c,i,l);if(u instanceof Promise){if(l.async===!1)throw new ns;return u.then(h=>n._zod.parse(h,l))}return n._zod.parse(u,l)};n._zod.run=(a,c)=>{if(c.skipChecks)return n._zod.parse(a,c);if(c.direction==="backward"){const u=n._zod.parse({value:a.value,issues:[]},{...c,skipChecks:!0});return u instanceof Promise?u.then(h=>o(h,a,c)):o(u,a,c)}const l=n._zod.parse(a,c);if(l instanceof Promise){if(c.async===!1)throw new ns;return l.then(u=>r(u,i,c))}return r(l,i,c)}}st(n,"~standard",()=>({validate:r=>{var o;try{const a=vx(n,r);return a.success?{value:a.data}:{issues:(o=a.error)==null?void 0:o.issues}}catch{return _x(n,r).then(c=>{var l;return c.success?{value:c.data}:{issues:(l=c.error)==null?void 0:l.issues}})}},vendor:"zod",version:1}))}),el=Z("$ZodString",(n,e)=>{var t;dt.init(n,e),n._zod.pattern=[...((t=n==null?void 0:n._zod.bag)==null?void 0:t.patterns)??[]].pop()??qx(n._zod.bag),n._zod.parse=(i,s)=>{if(e.coerce)try{i.value=String(i.value)}catch{}return typeof i.value=="string"||i.issues.push({expected:"string",code:"invalid_type",input:i.value,inst:n}),i}}),ft=Z("$ZodStringFormat",(n,e)=>{Po.init(n,e),el.init(n,e)}),pS=Z("$ZodGUID",(n,e)=>{e.pattern??(e.pattern=Lx),ft.init(n,e)}),mS=Z("$ZodUUID",(n,e)=>{if(e.version){const i={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[e.version];if(i===void 0)throw new Error(`Invalid UUID version: "${e.version}"`);e.pattern??(e.pattern=Uu(i))}else e.pattern??(e.pattern=Uu());ft.init(n,e)}),gS=Z("$ZodEmail",(n,e)=>{e.pattern??(e.pattern=Nx),ft.init(n,e)}),vS=Z("$ZodURL",(n,e)=>{ft.init(n,e),n._zod.check=t=>{var i;try{const s=t.value.trim();if(!e.normalize&&((i=e.protocol)==null?void 0:i.source)===Gx.source&&!/^https?:\/\//i.test(s)){t.issues.push({code:"invalid_format",format:"url",note:"Invalid URL format",input:t.value,inst:n,continue:!e.abort});return}const r=new URL(s);e.hostname&&(e.hostname.lastIndex=0,e.hostname.test(r.hostname)||t.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:e.hostname.source,input:t.value,inst:n,continue:!e.abort})),e.protocol&&(e.protocol.lastIndex=0,e.protocol.test(r.protocol.endsWith(":")?r.protocol.slice(0,-1):r.protocol)||t.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:e.protocol.source,input:t.value,inst:n,continue:!e.abort})),e.normalize?t.value=r.href:t.value=s;return}catch{t.issues.push({code:"invalid_format",format:"url",input:t.value,inst:n,continue:!e.abort})}}}),_S=Z("$ZodEmoji",(n,e)=>{e.pattern??(e.pattern=Ox()),ft.init(n,e)}),yS=Z("$ZodNanoID",(n,e)=>{e.pattern??(e.pattern=Fx),ft.init(n,e)}),xS=Z("$ZodCUID",(n,e)=>{e.pattern??(e.pattern=Rx),ft.init(n,e)}),SS=Z("$ZodCUID2",(n,e)=>{e.pattern??(e.pattern=Ax),ft.init(n,e)}),MS=Z("$ZodULID",(n,e)=>{e.pattern??(e.pattern=Cx),ft.init(n,e)}),bS=Z("$ZodXID",(n,e)=>{e.pattern??(e.pattern=Ix),ft.init(n,e)}),wS=Z("$ZodKSUID",(n,e)=>{e.pattern??(e.pattern=Px),ft.init(n,e)}),ES=Z("$ZodISODateTime",(n,e)=>{e.pattern??(e.pattern=Zx(e)),ft.init(n,e)}),TS=Z("$ZodISODate",(n,e)=>{e.pattern??(e.pattern=$x),ft.init(n,e)}),RS=Z("$ZodISOTime",(n,e)=>{e.pattern??(e.pattern=Xx(e)),ft.init(n,e)}),AS=Z("$ZodISODuration",(n,e)=>{e.pattern??(e.pattern=Dx),ft.init(n,e)}),CS=Z("$ZodIPv4",(n,e)=>{e.pattern??(e.pattern=kx),ft.init(n,e),n._zod.bag.format="ipv4"}),IS=Z("$ZodIPv6",(n,e)=>{e.pattern??(e.pattern=zx),ft.init(n,e),n._zod.bag.format="ipv6",n._zod.check=t=>{try{new URL(`http://[${t.value}]`)}catch{t.issues.push({code:"invalid_format",format:"ipv6",input:t.value,inst:n,continue:!e.abort})}}}),PS=Z("$ZodCIDRv4",(n,e)=>{e.pattern??(e.pattern=Bx),ft.init(n,e)}),FS=Z("$ZodCIDRv6",(n,e)=>{e.pattern??(e.pattern=Vx),ft.init(n,e),n._zod.check=t=>{const i=t.value.split("/");try{if(i.length!==2)throw new Error;const[s,r]=i;if(!r)throw new Error;const o=Number(r);if(`${o}`!==r)throw new Error;if(o<0||o>128)throw new Error;new URL(`http://[${s}]`)}catch{t.issues.push({code:"invalid_format",format:"cidrv6",input:t.value,inst:n,continue:!e.abort})}}});function qd(n){if(n==="")return!0;if(/\s/.test(n)||n.length%4!==0)return!1;try{return atob(n),!0}catch{return!1}}const DS=Z("$ZodBase64",(n,e)=>{e.pattern??(e.pattern=Hx),ft.init(n,e),n._zod.bag.contentEncoding="base64",n._zod.check=t=>{qd(t.value)||t.issues.push({code:"invalid_format",format:"base64",input:t.value,inst:n,continue:!e.abort})}});function LS(n){if(!Hd.test(n))return!1;const e=n.replace(/[-_]/g,i=>i==="-"?"+":"/"),t=e.padEnd(Math.ceil(e.length/4)*4,"=");return qd(t)}const NS=Z("$ZodBase64URL",(n,e)=>{e.pattern??(e.pattern=Hd),ft.init(n,e),n._zod.bag.contentEncoding="base64url",n._zod.check=t=>{LS(t.value)||t.issues.push({code:"invalid_format",format:"base64url",input:t.value,inst:n,continue:!e.abort})}}),US=Z("$ZodE164",(n,e)=>{e.pattern??(e.pattern=Wx),ft.init(n,e)});function OS(n,e=null){try{const t=n.split(".");if(t.length!==3)return!1;const[i]=t;if(!i)return!1;const s=JSON.parse(atob(i));return!("typ"in s&&(s==null?void 0:s.typ)!=="JWT"||!s.alg||e&&(!("alg"in s)||s.alg!==e))}catch{return!1}}const kS=Z("$ZodJWT",(n,e)=>{ft.init(n,e),n._zod.check=t=>{OS(t.value,e.alg)||t.issues.push({code:"invalid_format",format:"jwt",input:t.value,inst:n,continue:!e.abort})}}),Yd=Z("$ZodNumber",(n,e)=>{dt.init(n,e),n._zod.pattern=n._zod.bag.pattern??jx,n._zod.parse=(t,i)=>{if(e.coerce)try{t.value=Number(t.value)}catch{}const s=t.value;if(typeof s=="number"&&!Number.isNaN(s)&&Number.isFinite(s))return t;const r=typeof s=="number"?Number.isNaN(s)?"NaN":Number.isFinite(s)?void 0:"Infinity":void 0;return t.issues.push({expected:"number",code:"invalid_type",input:s,inst:n,...r?{received:r}:{}}),t}}),zS=Z("$ZodNumberFormat",(n,e)=>{tS.init(n,e),Yd.init(n,e)}),BS=Z("$ZodBoolean",(n,e)=>{dt.init(n,e),n._zod.pattern=Kx,n._zod.parse=(t,i)=>{if(e.coerce)try{t.value=!!t.value}catch{}const s=t.value;return typeof s=="boolean"||t.issues.push({expected:"boolean",code:"invalid_type",input:s,inst:n}),t}}),VS=Z("$ZodUnknown",(n,e)=>{dt.init(n,e),n._zod.parse=t=>t}),HS=Z("$ZodNever",(n,e)=>{dt.init(n,e),n._zod.parse=(t,i)=>(t.issues.push({expected:"never",code:"invalid_type",input:t.value,inst:n}),t)});function Ou(n,e,t){n.issues.length&&e.issues.push(...Ao(t,n.issues)),e.value[t]=n.value}const GS=Z("$ZodArray",(n,e)=>{dt.init(n,e),n._zod.parse=(t,i)=>{const s=t.value;if(!Array.isArray(s))return t.issues.push({expected:"array",code:"invalid_type",input:s,inst:n}),t;t.value=Array(s.length);const r=[];for(let o=0;o<s.length;o++){const a=s[o],c=e.element._zod.run({value:a,issues:[]},i);c instanceof Promise?r.push(c.then(l=>Ou(l,t,o))):Ou(c,t,o)}return r.length?Promise.all(r).then(()=>t):t}});function uo(n,e,t,i,s,r){const o=t in i;if(n.issues.length){if(s&&r&&!o)return;e.issues.push(...Ao(t,n.issues))}if(!o&&!s){n.issues.length||e.issues.push({code:"invalid_type",expected:"nonoptional",input:void 0,path:[t]});return}n.value===void 0?o&&(e.value[t]=void 0):e.value[t]=n.value}function jd(n){var i,s,r,o;const e=Object.keys(n.shape);for(const a of e)if(!((o=(r=(s=(i=n.shape)==null?void 0:i[a])==null?void 0:s._zod)==null?void 0:r.traits)!=null&&o.has("$ZodType")))throw new Error(`Invalid element at key "${a}": expected a Zod schema`);const t=rx(n.shape);return{...n,keys:e,keySet:new Set(e),numKeys:e.length,optionalKeys:new Set(t)}}function Kd(n,e,t,i,s,r){const o=[],a=s.keySet,c=s.catchall._zod,l=c.def.type,u=c.optin==="optional",h=c.optout==="optional";for(const d in e){if(d==="__proto__"||a.has(d))continue;if(l==="never"){o.push(d);continue}const f=c.run({value:e[d],issues:[]},i);f instanceof Promise?n.push(f.then(g=>uo(g,t,d,e,u,h))):uo(f,t,d,e,u,h)}return o.length&&t.issues.push({code:"unrecognized_keys",keys:o,input:e,inst:r}),n.length?Promise.all(n).then(()=>t):t}const WS=Z("$ZodObject",(n,e)=>{dt.init(n,e);const t=Object.getOwnPropertyDescriptor(e,"shape");if(!(t!=null&&t.get)){const a=e.shape;Object.defineProperty(e,"shape",{get:()=>{const c={...a};return Object.defineProperty(e,"shape",{value:c}),c}})}const i=Ro(()=>jd(e));st(n._zod,"propValues",()=>{const a=e.shape,c={};for(const l in a){const u=a[l]._zod;if(u.values){c[l]??(c[l]=new Set);for(const h of u.values)c[l].add(h)}}return c});const s=Xs,r=e.catchall;let o;n._zod.parse=(a,c)=>{o??(o=i.value);const l=a.value;if(!s(l))return a.issues.push({expected:"object",code:"invalid_type",input:l,inst:n}),a;a.value={};const u=[],h=o.shape;for(const d of o.keys){const f=h[d],g=f._zod.optin==="optional",v=f._zod.optout==="optional",m=f._zod.run({value:l[d],issues:[]},c);m instanceof Promise?u.push(m.then(p=>uo(p,a,d,l,g,v))):uo(m,a,d,l,g,v)}return r?Kd(u,l,a,c,i.value,n):u.length?Promise.all(u).then(()=>a):a}}),$S=Z("$ZodObjectJIT",(n,e)=>{WS.init(n,e);const t=n._zod.parse,i=Ro(()=>jd(e)),s=d=>{var b,x;const f=new dS(["shape","payload","ctx"]),g=i.value,v=U=>{const C=Nu(U);return`shape[${C}]._zod.run({ value: input[${C}], issues: [] }, ctx)`};f.write("const input = payload.value;");const m=Object.create(null);let p=0;for(const U of g.keys)m[U]=`key_${p++}`;f.write("const newResult = {};");for(const U of g.keys){const C=m[U],A=Nu(U),F=d[U],M=((b=F==null?void 0:F._zod)==null?void 0:b.optin)==="optional",y=((x=F==null?void 0:F._zod)==null?void 0:x.optout)==="optional";f.write(`const ${C} = ${v(U)};`),M&&y?f.write(`
        if (${C}.issues.length) {
          if (${A} in input) {
            payload.issues = payload.issues.concat(${C}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${A}, ...iss.path] : [${A}]
            })));
          }
        }
        
        if (${C}.value === undefined) {
          if (${A} in input) {
            newResult[${A}] = undefined;
          }
        } else {
          newResult[${A}] = ${C}.value;
        }
        
      `):M?f.write(`
        if (${C}.issues.length) {
          payload.issues = payload.issues.concat(${C}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${A}, ...iss.path] : [${A}]
          })));
        }
        
        if (${C}.value === undefined) {
          if (${A} in input) {
            newResult[${A}] = undefined;
          }
        } else {
          newResult[${A}] = ${C}.value;
        }
        
      `):f.write(`
        const ${C}_present = ${A} in input;
        if (${C}.issues.length) {
          payload.issues = payload.issues.concat(${C}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${A}, ...iss.path] : [${A}]
          })));
        }
        if (!${C}_present && !${C}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${A}]
          });
        }

        if (${C}_present) {
          if (${C}.value === undefined) {
            newResult[${A}] = undefined;
          } else {
            newResult[${A}] = ${C}.value;
          }
        }

      `)}f.write("payload.value = newResult;"),f.write("return payload;");const T=f.compile();return(U,C)=>T(d,U,C)};let r;const o=Xs,a=!qc.jitless,l=a&&ix.value,u=e.catchall;let h;n._zod.parse=(d,f)=>{h??(h=i.value);const g=d.value;return o(g)?a&&l&&(f==null?void 0:f.async)===!1&&f.jitless!==!0?(r||(r=s(e.shape)),d=r(d,f),u?Kd([],g,d,f,h,n):d):t(d,f):(d.issues.push({expected:"object",code:"invalid_type",input:g,inst:n}),d)}});function ku(n,e,t,i){for(const r of n)if(r.issues.length===0)return e.value=r.value,e;const s=n.filter(r=>!ji(r));return s.length===1?(e.value=s[0].value,s[0]):(e.issues.push({code:"invalid_union",input:e.value,inst:t,errors:n.map(r=>r.issues.map(o=>yi(o,i,_i())))}),e)}const Jd=Z("$ZodUnion",(n,e)=>{dt.init(n,e),st(n._zod,"optin",()=>e.options.some(i=>i._zod.optin==="optional")?"optional":void 0),st(n._zod,"optout",()=>e.options.some(i=>i._zod.optout==="optional")?"optional":void 0),st(n._zod,"values",()=>{if(e.options.every(i=>i._zod.values))return new Set(e.options.flatMap(i=>Array.from(i._zod.values)))}),st(n._zod,"pattern",()=>{if(e.options.every(i=>i._zod.pattern)){const i=e.options.map(s=>s._zod.pattern);return new RegExp(`^(${i.map(s=>jc(s.source)).join("|")})$`)}});const t=e.options.length===1?e.options[0]._zod.run:null;n._zod.parse=(i,s)=>{if(t)return t(i,s);let r=!1;const o=[];for(const a of e.options){const c=a._zod.run({value:i.value,issues:[]},s);if(c instanceof Promise)o.push(c),r=!0;else{if(c.issues.length===0)return c;o.push(c)}}return r?Promise.all(o).then(a=>ku(a,i,n,s)):ku(o,i,n,s)}}),XS=Z("$ZodDiscriminatedUnion",(n,e)=>{e.inclusive=!1,Jd.init(n,e);const t=n._zod.parse;st(n._zod,"propValues",()=>{const s={};for(const r of e.options){const o=r._zod.propValues;if(!o||Object.keys(o).length===0)throw new Error(`Invalid discriminated union option at index "${e.options.indexOf(r)}"`);for(const[a,c]of Object.entries(o)){s[a]||(s[a]=new Set);for(const l of c)s[a].add(l)}}return s});const i=Ro(()=>{var o;const s=e.options,r=new Map;for(const a of s){const c=(o=a._zod.propValues)==null?void 0:o[e.discriminator];if(!c||c.size===0)throw new Error(`Invalid discriminated union option at index "${e.options.indexOf(a)}"`);for(const l of c){if(r.has(l))throw new Error(`Duplicate discriminator value "${String(l)}"`);r.set(l,a)}}return r});n._zod.parse=(s,r)=>{const o=s.value;if(!Xs(o))return s.issues.push({code:"invalid_type",expected:"object",input:o,inst:n}),s;const a=i.value.get(o==null?void 0:o[e.discriminator]);return a?a._zod.run(s,r):e.unionFallback||r.direction==="backward"?t(s,r):(s.issues.push({code:"invalid_union",errors:[],note:"No matching discriminator",discriminator:e.discriminator,options:Array.from(i.value.keys()),input:o,path:[e.discriminator],inst:n}),s)}}),ZS=Z("$ZodIntersection",(n,e)=>{dt.init(n,e),n._zod.parse=(t,i)=>{const s=t.value,r=e.left._zod.run({value:s,issues:[]},i),o=e.right._zod.run({value:s,issues:[]},i);return r instanceof Promise||o instanceof Promise?Promise.all([r,o]).then(([c,l])=>zu(t,c,l)):zu(t,r,o)}});function Mc(n,e){if(n===e)return{valid:!0,data:n};if(n instanceof Date&&e instanceof Date&&+n==+e)return{valid:!0,data:n};if(Zs(n)&&Zs(e)){const t=Object.keys(e),i=Object.keys(n).filter(r=>t.indexOf(r)!==-1),s={...n,...e};for(const r of i){const o=Mc(n[r],e[r]);if(!o.valid)return{valid:!1,mergeErrorPath:[r,...o.mergeErrorPath]};s[r]=o.data}return{valid:!0,data:s}}if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return{valid:!1,mergeErrorPath:[]};const t=[];for(let i=0;i<n.length;i++){const s=n[i],r=e[i],o=Mc(s,r);if(!o.valid)return{valid:!1,mergeErrorPath:[i,...o.mergeErrorPath]};t.push(o.data)}return{valid:!0,data:t}}return{valid:!1,mergeErrorPath:[]}}function zu(n,e,t){const i=new Map;let s;for(const a of e.issues)if(a.code==="unrecognized_keys"){s??(s=a);for(const c of a.keys)i.has(c)||i.set(c,{}),i.get(c).l=!0}else n.issues.push(a);for(const a of t.issues)if(a.code==="unrecognized_keys")for(const c of a.keys)i.has(c)||i.set(c,{}),i.get(c).r=!0;else n.issues.push(a);const r=[...i].filter(([,a])=>a.l&&a.r).map(([a])=>a);if(r.length&&s&&n.issues.push({...s,keys:r}),ji(n))return n;const o=Mc(e.value,t.value);if(!o.valid)throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(o.mergeErrorPath)}`);return n.value=o.data,n}const qS=Z("$ZodTuple",(n,e)=>{dt.init(n,e);const t=e.items;n._zod.parse=(i,s)=>{const r=i.value;if(!Array.isArray(r))return i.issues.push({input:r,inst:n,expected:"tuple",code:"invalid_type"}),i;i.value=[];const o=[],a=Bu(t,"optin"),c=Bu(t,"optout");if(!e.rest){if(r.length<a)return i.issues.push({code:"too_small",minimum:a,inclusive:!0,input:r,inst:n,origin:"array"}),i;r.length>t.length&&i.issues.push({code:"too_big",maximum:t.length,inclusive:!0,input:r,inst:n,origin:"array"})}const l=new Array(t.length);for(let u=0;u<t.length;u++){const h=t[u]._zod.run({value:r[u],issues:[]},s);h instanceof Promise?o.push(h.then(d=>{l[u]=d})):l[u]=h}if(e.rest){let u=t.length-1;const h=r.slice(t.length);for(const d of h){u++;const f=e.rest._zod.run({value:d,issues:[]},s);f instanceof Promise?o.push(f.then(g=>Vu(g,i,u))):Vu(f,i,u)}}return o.length?Promise.all(o).then(()=>Hu(l,i,t,r,c)):Hu(l,i,t,r,c)}});function Bu(n,e){for(let t=n.length-1;t>=0;t--)if(n[t]._zod[e]!=="optional")return t+1;return 0}function Vu(n,e,t){n.issues.length&&e.issues.push(...Ao(t,n.issues)),e.value[t]=n.value}function Hu(n,e,t,i,s){for(let r=0;r<t.length;r++){const o=n[r],a=r<i.length;if(o.issues.length){if(!a&&r>=s){e.value.length=r;break}e.issues.push(...Ao(r,o.issues))}e.value[r]=o.value}for(let r=e.value.length-1;r>=i.length&&(t[r]._zod.optout==="optional"&&e.value[r]===void 0);r--)e.value.length=r;return e}const YS=Z("$ZodEnum",(n,e)=>{dt.init(n,e);const t=Ud(e.entries),i=new Set(t);n._zod.values=i,n._zod.pattern=new RegExp(`^(${t.filter(s=>sx.has(typeof s)).map(s=>typeof s=="string"?ls(s):s.toString()).join("|")})$`),n._zod.parse=(s,r)=>{const o=s.value;return i.has(o)||s.issues.push({code:"invalid_value",values:t,input:o,inst:n}),s}}),jS=Z("$ZodLiteral",(n,e)=>{if(dt.init(n,e),e.values.length===0)throw new Error("Cannot create literal schema with no valid values");const t=new Set(e.values);n._zod.values=t,n._zod.pattern=new RegExp(`^(${e.values.map(i=>typeof i=="string"?ls(i):i?ls(i.toString()):String(i)).join("|")})$`),n._zod.parse=(i,s)=>{const r=i.value;return t.has(r)||i.issues.push({code:"invalid_value",values:e.values,input:r,inst:n}),i}}),KS=Z("$ZodTransform",(n,e)=>{dt.init(n,e),n._zod.optin="optional",n._zod.parse=(t,i)=>{if(i.direction==="backward")throw new Nd(n.constructor.name);const s=e.transform(t.value,t);if(i.async)return(s instanceof Promise?s:Promise.resolve(s)).then(o=>(t.value=o,t.fallback=!0,t));if(s instanceof Promise)throw new ns;return t.value=s,t.fallback=!0,t}});function Gu(n,e){return e===void 0&&(n.issues.length||n.fallback)?{issues:[],value:void 0}:n}const Qd=Z("$ZodOptional",(n,e)=>{dt.init(n,e),n._zod.optin="optional",n._zod.optout="optional",st(n._zod,"values",()=>e.innerType._zod.values?new Set([...e.innerType._zod.values,void 0]):void 0),st(n._zod,"pattern",()=>{const t=e.innerType._zod.pattern;return t?new RegExp(`^(${jc(t.source)})?$`):void 0}),n._zod.parse=(t,i)=>{if(e.innerType._zod.optin==="optional"){const s=t.value,r=e.innerType._zod.run(t,i);return r instanceof Promise?r.then(o=>Gu(o,s)):Gu(r,s)}return t.value===void 0?t:e.innerType._zod.run(t,i)}}),JS=Z("$ZodExactOptional",(n,e)=>{Qd.init(n,e),st(n._zod,"values",()=>e.innerType._zod.values),st(n._zod,"pattern",()=>e.innerType._zod.pattern),n._zod.parse=(t,i)=>e.innerType._zod.run(t,i)}),QS=Z("$ZodNullable",(n,e)=>{dt.init(n,e),st(n._zod,"optin",()=>e.innerType._zod.optin),st(n._zod,"optout",()=>e.innerType._zod.optout),st(n._zod,"pattern",()=>{const t=e.innerType._zod.pattern;return t?new RegExp(`^(${jc(t.source)}|null)$`):void 0}),st(n._zod,"values",()=>e.innerType._zod.values?new Set([...e.innerType._zod.values,null]):void 0),n._zod.parse=(t,i)=>t.value===null?t:e.innerType._zod.run(t,i)}),eM=Z("$ZodDefault",(n,e)=>{dt.init(n,e),n._zod.optin="optional",st(n._zod,"values",()=>e.innerType._zod.values),n._zod.parse=(t,i)=>{if(i.direction==="backward")return e.innerType._zod.run(t,i);if(t.value===void 0)return t.value=e.defaultValue,t;const s=e.innerType._zod.run(t,i);return s instanceof Promise?s.then(r=>Wu(r,e)):Wu(s,e)}});function Wu(n,e){return n.value===void 0&&(n.value=e.defaultValue),n}const tM=Z("$ZodPrefault",(n,e)=>{dt.init(n,e),n._zod.optin="optional",st(n._zod,"values",()=>e.innerType._zod.values),n._zod.parse=(t,i)=>(i.direction==="backward"||t.value===void 0&&(t.value=e.defaultValue),e.innerType._zod.run(t,i))}),nM=Z("$ZodNonOptional",(n,e)=>{dt.init(n,e),st(n._zod,"values",()=>{const t=e.innerType._zod.values;return t?new Set([...t].filter(i=>i!==void 0)):void 0}),n._zod.parse=(t,i)=>{const s=e.innerType._zod.run(t,i);return s instanceof Promise?s.then(r=>$u(r,n)):$u(s,n)}});function $u(n,e){return!n.issues.length&&n.value===void 0&&n.issues.push({code:"invalid_type",expected:"nonoptional",input:n.value,inst:e}),n}const iM=Z("$ZodCatch",(n,e)=>{dt.init(n,e),n._zod.optin="optional",st(n._zod,"optout",()=>e.innerType._zod.optout),st(n._zod,"values",()=>e.innerType._zod.values),n._zod.parse=(t,i)=>{if(i.direction==="backward")return e.innerType._zod.run(t,i);const s=e.innerType._zod.run(t,i);return s instanceof Promise?s.then(r=>(t.value=r.value,r.issues.length&&(t.value=e.catchValue({...t,error:{issues:r.issues.map(o=>yi(o,i,_i()))},input:t.value}),t.issues=[],t.fallback=!0),t)):(t.value=s.value,s.issues.length&&(t.value=e.catchValue({...t,error:{issues:s.issues.map(r=>yi(r,i,_i()))},input:t.value}),t.issues=[],t.fallback=!0),t)}}),sM=Z("$ZodPipe",(n,e)=>{dt.init(n,e),st(n._zod,"values",()=>e.in._zod.values),st(n._zod,"optin",()=>e.in._zod.optin),st(n._zod,"optout",()=>e.out._zod.optout),st(n._zod,"propValues",()=>e.in._zod.propValues),n._zod.parse=(t,i)=>{if(i.direction==="backward"){const r=e.out._zod.run(t,i);return r instanceof Promise?r.then(o=>Ur(o,e.in,i)):Ur(r,e.in,i)}const s=e.in._zod.run(t,i);return s instanceof Promise?s.then(r=>Ur(r,e.out,i)):Ur(s,e.out,i)}});function Ur(n,e,t){return n.issues.length?(n.aborted=!0,n):e._zod.run({value:n.value,issues:n.issues,fallback:n.fallback},t)}const rM=Z("$ZodReadonly",(n,e)=>{dt.init(n,e),st(n._zod,"propValues",()=>e.innerType._zod.propValues),st(n._zod,"values",()=>e.innerType._zod.values),st(n._zod,"optin",()=>{var t,i;return(i=(t=e.innerType)==null?void 0:t._zod)==null?void 0:i.optin}),st(n._zod,"optout",()=>{var t,i;return(i=(t=e.innerType)==null?void 0:t._zod)==null?void 0:i.optout}),n._zod.parse=(t,i)=>{if(i.direction==="backward")return e.innerType._zod.run(t,i);const s=e.innerType._zod.run(t,i);return s instanceof Promise?s.then(Xu):Xu(s)}});function Xu(n){return n.value=Object.freeze(n.value),n}const oM=Z("$ZodCustom",(n,e)=>{Zt.init(n,e),dt.init(n,e),n._zod.parse=(t,i)=>t,n._zod.check=t=>{const i=t.value,s=e.fn(i);if(s instanceof Promise)return s.then(r=>Zu(r,t,i,n));Zu(s,t,i,n)}});function Zu(n,e,t,i){if(!n){const s={code:"custom",input:t,inst:i,path:[...i._zod.def.path??[]],continue:!i._zod.def.abort};i._zod.def.params&&(s.params=i._zod.def.params),e.issues.push(qs(s))}}var qu;class aM{constructor(){this._map=new WeakMap,this._idmap=new Map}add(e,...t){const i=t[0];return this._map.set(e,i),i&&typeof i=="object"&&"id"in i&&this._idmap.set(i.id,e),this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(e){const t=this._map.get(e);return t&&typeof t=="object"&&"id"in t&&this._idmap.delete(t.id),this._map.delete(e),this}get(e){const t=e._zod.parent;if(t){const i={...this.get(t)??{}};delete i.id;const s={...i,...this._map.get(e)};return Object.keys(s).length?s:void 0}return this._map.get(e)}has(e){return this._map.has(e)}}function cM(){return new aM}(qu=globalThis).__zod_globalRegistry??(qu.__zod_globalRegistry=cM());const Ds=globalThis.__zod_globalRegistry;function lM(n,e){return new n({type:"string",...Fe(e)})}function uM(n,e){return new n({type:"string",format:"email",check:"string_format",abort:!1,...Fe(e)})}function Yu(n,e){return new n({type:"string",format:"guid",check:"string_format",abort:!1,...Fe(e)})}function hM(n,e){return new n({type:"string",format:"uuid",check:"string_format",abort:!1,...Fe(e)})}function dM(n,e){return new n({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",...Fe(e)})}function fM(n,e){return new n({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",...Fe(e)})}function pM(n,e){return new n({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",...Fe(e)})}function mM(n,e){return new n({type:"string",format:"url",check:"string_format",abort:!1,...Fe(e)})}function gM(n,e){return new n({type:"string",format:"emoji",check:"string_format",abort:!1,...Fe(e)})}function vM(n,e){return new n({type:"string",format:"nanoid",check:"string_format",abort:!1,...Fe(e)})}function _M(n,e){return new n({type:"string",format:"cuid",check:"string_format",abort:!1,...Fe(e)})}function yM(n,e){return new n({type:"string",format:"cuid2",check:"string_format",abort:!1,...Fe(e)})}function xM(n,e){return new n({type:"string",format:"ulid",check:"string_format",abort:!1,...Fe(e)})}function SM(n,e){return new n({type:"string",format:"xid",check:"string_format",abort:!1,...Fe(e)})}function MM(n,e){return new n({type:"string",format:"ksuid",check:"string_format",abort:!1,...Fe(e)})}function bM(n,e){return new n({type:"string",format:"ipv4",check:"string_format",abort:!1,...Fe(e)})}function wM(n,e){return new n({type:"string",format:"ipv6",check:"string_format",abort:!1,...Fe(e)})}function EM(n,e){return new n({type:"string",format:"cidrv4",check:"string_format",abort:!1,...Fe(e)})}function TM(n,e){return new n({type:"string",format:"cidrv6",check:"string_format",abort:!1,...Fe(e)})}function RM(n,e){return new n({type:"string",format:"base64",check:"string_format",abort:!1,...Fe(e)})}function AM(n,e){return new n({type:"string",format:"base64url",check:"string_format",abort:!1,...Fe(e)})}function CM(n,e){return new n({type:"string",format:"e164",check:"string_format",abort:!1,...Fe(e)})}function IM(n,e){return new n({type:"string",format:"jwt",check:"string_format",abort:!1,...Fe(e)})}function PM(n,e){return new n({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,...Fe(e)})}function FM(n,e){return new n({type:"string",format:"date",check:"string_format",...Fe(e)})}function DM(n,e){return new n({type:"string",format:"time",check:"string_format",precision:null,...Fe(e)})}function LM(n,e){return new n({type:"string",format:"duration",check:"string_format",...Fe(e)})}function NM(n,e){return new n({type:"number",checks:[],...Fe(e)})}function UM(n,e){return new n({type:"number",check:"number_format",abort:!1,format:"safeint",...Fe(e)})}function OM(n,e){return new n({type:"boolean",...Fe(e)})}function kM(n){return new n({type:"unknown"})}function zM(n,e){return new n({type:"never",...Fe(e)})}function ju(n,e){return new Xd({check:"less_than",...Fe(e),value:n,inclusive:!1})}function da(n,e){return new Xd({check:"less_than",...Fe(e),value:n,inclusive:!0})}function Ku(n,e){return new Zd({check:"greater_than",...Fe(e),value:n,inclusive:!1})}function fa(n,e){return new Zd({check:"greater_than",...Fe(e),value:n,inclusive:!0})}function Ju(n,e){return new eS({check:"multiple_of",...Fe(e),value:n})}function ef(n,e){return new nS({check:"max_length",...Fe(e),maximum:n})}function ho(n,e){return new iS({check:"min_length",...Fe(e),minimum:n})}function tf(n,e){return new sS({check:"length_equals",...Fe(e),length:n})}function BM(n,e){return new rS({check:"string_format",format:"regex",...Fe(e),pattern:n})}function VM(n){return new oS({check:"string_format",format:"lowercase",...Fe(n)})}function HM(n){return new aS({check:"string_format",format:"uppercase",...Fe(n)})}function GM(n,e){return new cS({check:"string_format",format:"includes",...Fe(e),includes:n})}function WM(n,e){return new lS({check:"string_format",format:"starts_with",...Fe(e),prefix:n})}function $M(n,e){return new uS({check:"string_format",format:"ends_with",...Fe(e),suffix:n})}function vs(n){return new hS({check:"overwrite",tx:n})}function XM(n){return vs(e=>e.normalize(n))}function ZM(){return vs(n=>n.trim())}function qM(){return vs(n=>n.toLowerCase())}function YM(){return vs(n=>n.toUpperCase())}function jM(){return vs(n=>nx(n))}function KM(n,e,t){return new n({type:"array",element:e,...Fe(t)})}function JM(n,e,t){return new n({type:"custom",check:"custom",fn:e,...Fe(t)})}function QM(n,e){const t=eb(i=>(i.addIssue=s=>{if(typeof s=="string")i.issues.push(qs(s,i.value,t._zod.def));else{const r=s;r.fatal&&(r.continue=!1),r.code??(r.code="custom"),r.input??(r.input=i.value),r.inst??(r.inst=t),r.continue??(r.continue=!t._zod.def.abort),i.issues.push(qs(r))}},n(i.value,i)),e);return t}function eb(n,e){const t=new Zt({check:"custom",...Fe(e)});return t._zod.check=n,t}function fo(n){let e=(n==null?void 0:n.target)??"draft-2020-12";return e==="draft-4"&&(e="draft-04"),e==="draft-7"&&(e="draft-07"),{processors:n.processors??{},metadataRegistry:(n==null?void 0:n.metadata)??Ds,target:e,unrepresentable:(n==null?void 0:n.unrepresentable)??"throw",override:(n==null?void 0:n.override)??(()=>{}),io:(n==null?void 0:n.io)??"output",counter:0,seen:new Map,cycles:(n==null?void 0:n.cycles)??"ref",reused:(n==null?void 0:n.reused)??"inline",external:(n==null?void 0:n.external)??void 0}}function lt(n,e,t={path:[],schemaPath:[]}){var u,h;var i;const s=n._zod.def,r=e.seen.get(n);if(r)return r.count++,t.schemaPath.includes(n)&&(r.cycle=t.path),r.schema;const o={schema:{},count:1,cycle:void 0,path:t.path};e.seen.set(n,o);const a=(h=(u=n._zod).toJSONSchema)==null?void 0:h.call(u);if(a)o.schema=a;else{const d={...t,schemaPath:[...t.schemaPath,n],path:t.path};if(n._zod.processJSONSchema)n._zod.processJSONSchema(e,o.schema,d);else{const g=o.schema,v=e.processors[s.type];if(!v)throw new Error(`[toJSONSchema]: Non-representable type encountered: ${s.type}`);v(n,e,g,d)}const f=n._zod.parent;f&&(o.ref||(o.ref=f),lt(f,e,d),e.seen.get(f).isParent=!0)}const c=e.metadataRegistry.get(n);return c&&Object.assign(o.schema,c),e.io==="input"&&zt(n)&&(delete o.schema.examples,delete o.schema.default),e.io==="input"&&"_prefault"in o.schema&&((i=o.schema).default??(i.default=o.schema._prefault)),delete o.schema._prefault,e.seen.get(n).schema}function po(n,e){var o,a,c,l;const t=n.seen.get(e);if(!t)throw new Error("Unprocessed schema. This is a bug in Zod.");const i=new Map;for(const u of n.seen.entries()){const h=(o=n.metadataRegistry.get(u[0]))==null?void 0:o.id;if(h){const d=i.get(h);if(d&&d!==u[0])throw new Error(`Duplicate schema id "${h}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);i.set(h,u[0])}}const s=u=>{var v;const h=n.target==="draft-2020-12"?"$defs":"definitions";if(n.external){const m=(v=n.external.registry.get(u[0]))==null?void 0:v.id,p=n.external.uri??(b=>b);if(m)return{ref:p(m)};const T=u[1].defId??u[1].schema.id??`schema${n.counter++}`;return u[1].defId=T,{defId:T,ref:`${p("__shared")}#/${h}/${T}`}}if(u[1]===t)return{ref:"#"};const f=`#/${h}/`,g=u[1].schema.id??`__schema${n.counter++}`;return{defId:g,ref:f+g}},r=u=>{if(u[1].schema.$ref)return;const h=u[1],{ref:d,defId:f}=s(u);h.def={...h.schema},f&&(h.defId=f);const g=h.schema;for(const v in g)delete g[v];g.$ref=d};if(n.cycles==="throw")for(const u of n.seen.entries()){const h=u[1];if(h.cycle)throw new Error(`Cycle detected: #/${(a=h.cycle)==null?void 0:a.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(const u of n.seen.entries()){const h=u[1];if(e===u[0]){r(u);continue}if(n.external){const f=(c=n.external.registry.get(u[0]))==null?void 0:c.id;if(e!==u[0]&&f){r(u);continue}}if((l=n.metadataRegistry.get(u[0]))==null?void 0:l.id){r(u);continue}if(h.cycle){r(u);continue}if(h.count>1&&n.reused==="ref"){r(u);continue}}}function mo(n,e){var a,c,l,u;const t=n.seen.get(e);if(!t)throw new Error("Unprocessed schema. This is a bug in Zod.");const i=h=>{const d=n.seen.get(h);if(d.ref===null)return;const f=d.def??d.schema,g={...f},v=d.ref;if(d.ref=null,v){i(v);const p=n.seen.get(v),T=p.schema;if(T.$ref&&(n.target==="draft-07"||n.target==="draft-04"||n.target==="openapi-3.0")?(f.allOf=f.allOf??[],f.allOf.push(T)):Object.assign(f,T),Object.assign(f,g),h._zod.parent===v)for(const x in f)x==="$ref"||x==="allOf"||x in g||delete f[x];if(T.$ref&&p.def)for(const x in f)x==="$ref"||x==="allOf"||x in p.def&&JSON.stringify(f[x])===JSON.stringify(p.def[x])&&delete f[x]}const m=h._zod.parent;if(m&&m!==v){i(m);const p=n.seen.get(m);if(p!=null&&p.schema.$ref&&(f.$ref=p.schema.$ref,p.def))for(const T in f)T==="$ref"||T==="allOf"||T in p.def&&JSON.stringify(f[T])===JSON.stringify(p.def[T])&&delete f[T]}n.override({zodSchema:h,jsonSchema:f,path:d.path??[]})};for(const h of[...n.seen.entries()].reverse())i(h[0]);const s={};if(n.target==="draft-2020-12"?s.$schema="https://json-schema.org/draft/2020-12/schema":n.target==="draft-07"?s.$schema="http://json-schema.org/draft-07/schema#":n.target==="draft-04"?s.$schema="http://json-schema.org/draft-04/schema#":n.target,(a=n.external)!=null&&a.uri){const h=(c=n.external.registry.get(e))==null?void 0:c.id;if(!h)throw new Error("Schema is missing an `id` property");s.$id=n.external.uri(h)}Object.assign(s,t.def??t.schema);const r=(l=n.metadataRegistry.get(e))==null?void 0:l.id;r!==void 0&&s.id===r&&delete s.id;const o=((u=n.external)==null?void 0:u.defs)??{};for(const h of n.seen.entries()){const d=h[1];d.def&&d.defId&&(d.def.id===d.defId&&delete d.def.id,o[d.defId]=d.def)}n.external||Object.keys(o).length>0&&(n.target==="draft-2020-12"?s.$defs=o:s.definitions=o);try{const h=JSON.parse(JSON.stringify(s));return Object.defineProperty(h,"~standard",{value:{...e["~standard"],jsonSchema:{input:go(e,"input",n.processors),output:go(e,"output",n.processors)}},enumerable:!1,writable:!1}),h}catch{throw new Error("Error converting schema to JSON.")}}function zt(n,e){const t=e??{seen:new Set};if(t.seen.has(n))return!1;t.seen.add(n);const i=n._zod.def;if(i.type==="transform")return!0;if(i.type==="array")return zt(i.element,t);if(i.type==="set")return zt(i.valueType,t);if(i.type==="lazy")return zt(i.getter(),t);if(i.type==="promise"||i.type==="optional"||i.type==="nonoptional"||i.type==="nullable"||i.type==="readonly"||i.type==="default"||i.type==="prefault")return zt(i.innerType,t);if(i.type==="intersection")return zt(i.left,t)||zt(i.right,t);if(i.type==="record"||i.type==="map")return zt(i.keyType,t)||zt(i.valueType,t);if(i.type==="pipe")return n._zod.traits.has("$ZodCodec")?!0:zt(i.in,t)||zt(i.out,t);if(i.type==="object"){for(const s in i.shape)if(zt(i.shape[s],t))return!0;return!1}if(i.type==="union"){for(const s of i.options)if(zt(s,t))return!0;return!1}if(i.type==="tuple"){for(const s of i.items)if(zt(s,t))return!0;return!!(i.rest&&zt(i.rest,t))}return!1}const tb=(n,e={})=>t=>{const i=fo({...t,processors:e});return lt(n,i),po(i,n),mo(i,n)},go=(n,e,t={})=>i=>{const{libraryOptions:s,target:r}=i??{},o=fo({...s??{},target:r,io:e,processors:t});return lt(n,o),po(o,n),mo(o,n)},nb={guid:"uuid",url:"uri",datetime:"date-time",json_string:"json-string",regex:""},nf=(n,e,t,i)=>{const s=t;s.type="string";const{minimum:r,maximum:o,format:a,patterns:c,contentEncoding:l}=n._zod.bag;if(typeof r=="number"&&(s.minLength=r),typeof o=="number"&&(s.maxLength=o),a&&(s.format=nb[a]??a,s.format===""&&delete s.format,a==="time"&&delete s.format),l&&(s.contentEncoding=l),c&&c.size>0){const u=[...c];u.length===1?s.pattern=u[0].source:u.length>1&&(s.allOf=[...u.map(h=>({...e.target==="draft-07"||e.target==="draft-04"||e.target==="openapi-3.0"?{type:"string"}:{},pattern:h.source}))])}},sf=(n,e,t,i)=>{const s=t,{minimum:r,maximum:o,format:a,multipleOf:c,exclusiveMaximum:l,exclusiveMinimum:u}=n._zod.bag;typeof a=="string"&&a.includes("int")?s.type="integer":s.type="number";const h=typeof u=="number"&&u>=(r??Number.NEGATIVE_INFINITY),d=typeof l=="number"&&l<=(o??Number.POSITIVE_INFINITY),f=e.target==="draft-04"||e.target==="openapi-3.0";h?f?(s.minimum=u,s.exclusiveMinimum=!0):s.exclusiveMinimum=u:typeof r=="number"&&(s.minimum=r),d?f?(s.maximum=l,s.exclusiveMaximum=!0):s.exclusiveMaximum=l:typeof o=="number"&&(s.maximum=o),typeof c=="number"&&(s.multipleOf=c)},rf=(n,e,t,i)=>{t.type="boolean"},ib=(n,e,t,i)=>{if(e.unrepresentable==="throw")throw new Error("BigInt cannot be represented in JSON Schema")},sb=(n,e,t,i)=>{if(e.unrepresentable==="throw")throw new Error("Symbols cannot be represented in JSON Schema")},rb=(n,e,t,i)=>{e.target==="openapi-3.0"?(t.type="string",t.nullable=!0,t.enum=[null]):t.type="null"},ob=(n,e,t,i)=>{if(e.unrepresentable==="throw")throw new Error("Undefined cannot be represented in JSON Schema")},ab=(n,e,t,i)=>{if(e.unrepresentable==="throw")throw new Error("Void cannot be represented in JSON Schema")},of=(n,e,t,i)=>{t.not={}},cb=(n,e,t,i)=>{},af=(n,e,t,i)=>{},lb=(n,e,t,i)=>{if(e.unrepresentable==="throw")throw new Error("Date cannot be represented in JSON Schema")},cf=(n,e,t,i)=>{const s=n._zod.def,r=Ud(s.entries);r.every(o=>typeof o=="number")&&(t.type="number"),r.every(o=>typeof o=="string")&&(t.type="string"),t.enum=r},lf=(n,e,t,i)=>{const s=n._zod.def,r=[];for(const o of s.values)if(o===void 0){if(e.unrepresentable==="throw")throw new Error("Literal `undefined` cannot be represented in JSON Schema")}else if(typeof o=="bigint"){if(e.unrepresentable==="throw")throw new Error("BigInt literals cannot be represented in JSON Schema");r.push(Number(o))}else r.push(o);if(r.length!==0)if(r.length===1){const o=r[0];t.type=o===null?"null":typeof o,e.target==="draft-04"||e.target==="openapi-3.0"?t.enum=[o]:t.const=o}else r.every(o=>typeof o=="number")&&(t.type="number"),r.every(o=>typeof o=="string")&&(t.type="string"),r.every(o=>typeof o=="boolean")&&(t.type="boolean"),r.every(o=>o===null)&&(t.type="null"),t.enum=r},ub=(n,e,t,i)=>{if(e.unrepresentable==="throw")throw new Error("NaN cannot be represented in JSON Schema")},hb=(n,e,t,i)=>{const s=t,r=n._zod.pattern;if(!r)throw new Error("Pattern not found in template literal");s.type="string",s.pattern=r.source},db=(n,e,t,i)=>{const s=t,r={type:"string",format:"binary",contentEncoding:"binary"},{minimum:o,maximum:a,mime:c}=n._zod.bag;o!==void 0&&(r.minLength=o),a!==void 0&&(r.maxLength=a),c?c.length===1?(r.contentMediaType=c[0],Object.assign(s,r)):(Object.assign(s,r),s.anyOf=c.map(l=>({contentMediaType:l}))):Object.assign(s,r)},fb=(n,e,t,i)=>{t.type="boolean"},uf=(n,e,t,i)=>{if(e.unrepresentable==="throw")throw new Error("Custom types cannot be represented in JSON Schema")},pb=(n,e,t,i)=>{if(e.unrepresentable==="throw")throw new Error("Function types cannot be represented in JSON Schema")},hf=(n,e,t,i)=>{if(e.unrepresentable==="throw")throw new Error("Transforms cannot be represented in JSON Schema")},mb=(n,e,t,i)=>{if(e.unrepresentable==="throw")throw new Error("Map cannot be represented in JSON Schema")},gb=(n,e,t,i)=>{if(e.unrepresentable==="throw")throw new Error("Set cannot be represented in JSON Schema")},df=(n,e,t,i)=>{const s=t,r=n._zod.def,{minimum:o,maximum:a}=n._zod.bag;typeof o=="number"&&(s.minItems=o),typeof a=="number"&&(s.maxItems=a),s.type="array",s.items=lt(r.element,e,{...i,path:[...i.path,"items"]})},ff=(n,e,t,i)=>{var l;const s=t,r=n._zod.def;s.type="object",s.properties={};const o=r.shape;for(const u in o)s.properties[u]=lt(o[u],e,{...i,path:[...i.path,"properties",u]});const a=new Set(Object.keys(o)),c=new Set([...a].filter(u=>{const h=r.shape[u]._zod;return e.io==="input"?h.optin===void 0:h.optout===void 0}));c.size>0&&(s.required=Array.from(c)),((l=r.catchall)==null?void 0:l._zod.def.type)==="never"?s.additionalProperties=!1:r.catchall?r.catchall&&(s.additionalProperties=lt(r.catchall,e,{...i,path:[...i.path,"additionalProperties"]})):e.io==="output"&&(s.additionalProperties=!1)},pf=(n,e,t,i)=>{const s=n._zod.def,r=s.inclusive===!1,o=s.options.map((a,c)=>lt(a,e,{...i,path:[...i.path,r?"oneOf":"anyOf",c]}));r?t.oneOf=o:t.anyOf=o},mf=(n,e,t,i)=>{const s=n._zod.def,r=lt(s.left,e,{...i,path:[...i.path,"allOf",0]}),o=lt(s.right,e,{...i,path:[...i.path,"allOf",1]}),a=l=>"allOf"in l&&Object.keys(l).length===1,c=[...a(r)?r.allOf:[r],...a(o)?o.allOf:[o]];t.allOf=c},gf=(n,e,t,i)=>{const s=t,r=n._zod.def;s.type="array";const o=e.target==="draft-2020-12"?"prefixItems":"items",a=e.target==="draft-2020-12"||e.target==="openapi-3.0"?"items":"additionalItems",c=r.items.map((d,f)=>lt(d,e,{...i,path:[...i.path,o,f]})),l=r.rest?lt(r.rest,e,{...i,path:[...i.path,a,...e.target==="openapi-3.0"?[r.items.length]:[]]}):null;e.target==="draft-2020-12"?(s.prefixItems=c,l&&(s.items=l)):e.target==="openapi-3.0"?(s.items={anyOf:c},l&&s.items.anyOf.push(l),s.minItems=c.length,l||(s.maxItems=c.length)):(s.items=c,l&&(s.additionalItems=l));const{minimum:u,maximum:h}=n._zod.bag;typeof u=="number"&&(s.minItems=u),typeof h=="number"&&(s.maxItems=h)},vb=(n,e,t,i)=>{const s=t,r=n._zod.def;s.type="object";const o=r.keyType,a=o._zod.bag,c=a==null?void 0:a.patterns;if(r.mode==="loose"&&c&&c.size>0){const u=lt(r.valueType,e,{...i,path:[...i.path,"patternProperties","*"]});s.patternProperties={};for(const h of c)s.patternProperties[h.source]=u}else(e.target==="draft-07"||e.target==="draft-2020-12")&&(s.propertyNames=lt(r.keyType,e,{...i,path:[...i.path,"propertyNames"]})),s.additionalProperties=lt(r.valueType,e,{...i,path:[...i.path,"additionalProperties"]});const l=o._zod.values;if(l){const u=[...l].filter(h=>typeof h=="string"||typeof h=="number");u.length>0&&(s.required=u)}},vf=(n,e,t,i)=>{const s=n._zod.def,r=lt(s.innerType,e,i),o=e.seen.get(n);e.target==="openapi-3.0"?(o.ref=s.innerType,t.nullable=!0):t.anyOf=[r,{type:"null"}]},_f=(n,e,t,i)=>{const s=n._zod.def;lt(s.innerType,e,i);const r=e.seen.get(n);r.ref=s.innerType},yf=(n,e,t,i)=>{const s=n._zod.def;lt(s.innerType,e,i);const r=e.seen.get(n);r.ref=s.innerType,t.default=JSON.parse(JSON.stringify(s.defaultValue))},xf=(n,e,t,i)=>{const s=n._zod.def;lt(s.innerType,e,i);const r=e.seen.get(n);r.ref=s.innerType,e.io==="input"&&(t._prefault=JSON.parse(JSON.stringify(s.defaultValue)))},Sf=(n,e,t,i)=>{const s=n._zod.def;lt(s.innerType,e,i);const r=e.seen.get(n);r.ref=s.innerType;let o;try{o=s.catchValue(void 0)}catch{throw new Error("Dynamic catch values are not supported in JSON Schema")}t.default=o},Mf=(n,e,t,i)=>{const s=n._zod.def,r=s.in._zod.traits.has("$ZodTransform"),o=e.io==="input"?r?s.out:s.in:s.out;lt(o,e,i);const a=e.seen.get(n);a.ref=o},bf=(n,e,t,i)=>{const s=n._zod.def;lt(s.innerType,e,i);const r=e.seen.get(n);r.ref=s.innerType,t.readOnly=!0},_b=(n,e,t,i)=>{const s=n._zod.def;lt(s.innerType,e,i);const r=e.seen.get(n);r.ref=s.innerType},tl=(n,e,t,i)=>{const s=n._zod.def;lt(s.innerType,e,i);const r=e.seen.get(n);r.ref=s.innerType},yb=(n,e,t,i)=>{const s=n._zod.innerType;lt(s,e,i);const r=e.seen.get(n);r.ref=s},Qu={string:nf,number:sf,boolean:rf,bigint:ib,symbol:sb,null:rb,undefined:ob,void:ab,never:of,any:cb,unknown:af,date:lb,enum:cf,literal:lf,nan:ub,template_literal:hb,file:db,success:fb,custom:uf,function:pb,transform:hf,map:mb,set:gb,array:df,object:ff,union:pf,intersection:mf,tuple:gf,record:vb,nullable:vf,nonoptional:_f,default:yf,prefault:xf,catch:Sf,pipe:Mf,readonly:bf,promise:_b,optional:tl,lazy:yb};function xb(n,e){if("_idmap"in n){const i=n,s=fo({...e,processors:Qu}),r={};for(const c of i._idmap.entries()){const[l,u]=c;lt(u,s)}const o={},a={registry:i,uri:e==null?void 0:e.uri,defs:r};s.external=a;for(const c of i._idmap.entries()){const[l,u]=c;po(s,u),o[l]=mo(s,u)}if(Object.keys(r).length>0){const c=s.target==="draft-2020-12"?"$defs":"definitions";o.__shared={[c]:r}}return{schemas:o}}const t=fo({...e,processors:Qu});return lt(n,t),po(t,n),mo(t,n)}const Sb=Z("ZodISODateTime",(n,e)=>{ES.init(n,e),gt.init(n,e)});function wf(n){return PM(Sb,n)}const Mb=Z("ZodISODate",(n,e)=>{TS.init(n,e),gt.init(n,e)});function Ef(n){return FM(Mb,n)}const bb=Z("ZodISOTime",(n,e)=>{RS.init(n,e),gt.init(n,e)});function wb(n){return DM(bb,n)}const Eb=Z("ZodISODuration",(n,e)=>{AS.init(n,e),gt.init(n,e)});function Tb(n){return LM(Eb,n)}const Rb=(n,e)=>{Bd.init(n,e),n.name="ZodError",Object.defineProperties(n,{format:{value:t=>gx(n,t)},flatten:{value:t=>mx(n,t)},addIssue:{value:t=>{n.issues.push(t),n.message=JSON.stringify(n.issues,Sc,2)}},addIssues:{value:t=>{n.issues.push(...t),n.message=JSON.stringify(n.issues,Sc,2)}},isEmpty:{get(){return n.issues.length===0}}})},an=Z("ZodError",Rb,{Parent:Error}),Ab=Jc(an),Cb=Qc(an),Ib=Co(an),Pb=Io(an),Fb=yx(an),Db=xx(an),Lb=Sx(an),Nb=Mx(an),Ub=bx(an),Ob=wx(an),kb=Ex(an),zb=Tx(an),eh=new WeakMap;function Qs(n,e,t){const i=Object.getPrototypeOf(n);let s=eh.get(i);if(s||(s=new Set,eh.set(i,s)),!s.has(e)){s.add(e);for(const r in t){const o=t[r];Object.defineProperty(i,r,{configurable:!0,enumerable:!1,get(){const a=o.bind(this);return Object.defineProperty(this,r,{configurable:!0,writable:!0,enumerable:!0,value:a}),a},set(a){Object.defineProperty(this,r,{configurable:!0,writable:!0,enumerable:!0,value:a})}})}}}const mt=Z("ZodType",(n,e)=>(dt.init(n,e),Object.assign(n["~standard"],{jsonSchema:{input:go(n,"input"),output:go(n,"output")}}),n.toJSONSchema=tb(n,{}),n.def=e,n.type=e.type,Object.defineProperty(n,"_def",{value:e}),n.parse=(t,i)=>Ab(n,t,i,{callee:n.parse}),n.safeParse=(t,i)=>Ib(n,t,i),n.parseAsync=async(t,i)=>Cb(n,t,i,{callee:n.parseAsync}),n.safeParseAsync=async(t,i)=>Pb(n,t,i),n.spa=n.safeParseAsync,n.encode=(t,i)=>Fb(n,t,i),n.decode=(t,i)=>Db(n,t,i),n.encodeAsync=async(t,i)=>Lb(n,t,i),n.decodeAsync=async(t,i)=>Nb(n,t,i),n.safeEncode=(t,i)=>Ub(n,t,i),n.safeDecode=(t,i)=>Ob(n,t,i),n.safeEncodeAsync=async(t,i)=>kb(n,t,i),n.safeDecodeAsync=async(t,i)=>zb(n,t,i),Qs(n,"ZodType",{check(...t){const i=this.def;return this.clone(Jn(i,{checks:[...i.checks??[],...t.map(s=>typeof s=="function"?{_zod:{check:s,def:{check:"custom"},onattach:[]}}:s)]}),{parent:!0})},with(...t){return this.check(...t)},clone(t,i){return Qn(this,t,i)},brand(){return this},register(t,i){return t.add(this,i),this},refine(t,i){return this.check(Fw(t,i))},superRefine(t,i){return this.check(Dw(t,i))},overwrite(t){return this.check(vs(t))},optional(){return sh(this)},exactOptional(){return yw(this)},nullable(){return rh(this)},nullish(){return sh(rh(this))},nonoptional(t){return Ew(this,t)},array(){return ei(this)},or(t){return wi([this,t])},and(t){return fw(this,t)},transform(t){return oh(this,vw(t))},default(t){return Mw(this,t)},prefault(t){return ww(this,t)},catch(t){return Rw(this,t)},pipe(t){return oh(this,t)},readonly(){return Iw(this)},describe(t){const i=this.clone();return Ds.add(i,{description:t}),i},meta(...t){if(t.length===0)return Ds.get(this);const i=this.clone();return Ds.add(i,t[0]),i},isOptional(){return this.safeParse(void 0).success},isNullable(){return this.safeParse(null).success},apply(t){return t(this)}}),Object.defineProperty(n,"description",{get(){var t;return(t=Ds.get(n))==null?void 0:t.description},configurable:!0}),n)),Tf=Z("_ZodString",(n,e)=>{el.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(i,s,r)=>nf(n,i,s);const t=n._zod.bag;n.format=t.format??null,n.minLength=t.minimum??null,n.maxLength=t.maximum??null,Qs(n,"_ZodString",{regex(...i){return this.check(BM(...i))},includes(...i){return this.check(GM(...i))},startsWith(...i){return this.check(WM(...i))},endsWith(...i){return this.check($M(...i))},min(...i){return this.check(ho(...i))},max(...i){return this.check(ef(...i))},length(...i){return this.check(tf(...i))},nonempty(...i){return this.check(ho(1,...i))},lowercase(i){return this.check(VM(i))},uppercase(i){return this.check(HM(i))},trim(){return this.check(ZM())},normalize(...i){return this.check(XM(...i))},toLowerCase(){return this.check(qM())},toUpperCase(){return this.check(YM())},slugify(){return this.check(jM())}})}),Bb=Z("ZodString",(n,e)=>{el.init(n,e),Tf.init(n,e),n.email=t=>n.check(uM(Vb,t)),n.url=t=>n.check(mM(Hb,t)),n.jwt=t=>n.check(IM(iw,t)),n.emoji=t=>n.check(gM(Gb,t)),n.guid=t=>n.check(Yu(th,t)),n.uuid=t=>n.check(hM(Or,t)),n.uuidv4=t=>n.check(dM(Or,t)),n.uuidv6=t=>n.check(fM(Or,t)),n.uuidv7=t=>n.check(pM(Or,t)),n.nanoid=t=>n.check(vM(Wb,t)),n.guid=t=>n.check(Yu(th,t)),n.cuid=t=>n.check(_M($b,t)),n.cuid2=t=>n.check(yM(Xb,t)),n.ulid=t=>n.check(xM(Zb,t)),n.base64=t=>n.check(RM(ew,t)),n.base64url=t=>n.check(AM(tw,t)),n.xid=t=>n.check(SM(qb,t)),n.ksuid=t=>n.check(MM(Yb,t)),n.ipv4=t=>n.check(bM(jb,t)),n.ipv6=t=>n.check(wM(Kb,t)),n.cidrv4=t=>n.check(EM(Jb,t)),n.cidrv6=t=>n.check(TM(Qb,t)),n.e164=t=>n.check(CM(nw,t)),n.datetime=t=>n.check(wf(t)),n.date=t=>n.check(Ef(t)),n.time=t=>n.check(wb(t)),n.duration=t=>n.check(Tb(t))});function we(n){return lM(Bb,n)}const gt=Z("ZodStringFormat",(n,e)=>{ft.init(n,e),Tf.init(n,e)}),Vb=Z("ZodEmail",(n,e)=>{gS.init(n,e),gt.init(n,e)}),th=Z("ZodGUID",(n,e)=>{pS.init(n,e),gt.init(n,e)}),Or=Z("ZodUUID",(n,e)=>{mS.init(n,e),gt.init(n,e)}),Hb=Z("ZodURL",(n,e)=>{vS.init(n,e),gt.init(n,e)}),Gb=Z("ZodEmoji",(n,e)=>{_S.init(n,e),gt.init(n,e)}),Wb=Z("ZodNanoID",(n,e)=>{yS.init(n,e),gt.init(n,e)}),$b=Z("ZodCUID",(n,e)=>{xS.init(n,e),gt.init(n,e)}),Xb=Z("ZodCUID2",(n,e)=>{SS.init(n,e),gt.init(n,e)}),Zb=Z("ZodULID",(n,e)=>{MS.init(n,e),gt.init(n,e)}),qb=Z("ZodXID",(n,e)=>{bS.init(n,e),gt.init(n,e)}),Yb=Z("ZodKSUID",(n,e)=>{wS.init(n,e),gt.init(n,e)}),jb=Z("ZodIPv4",(n,e)=>{CS.init(n,e),gt.init(n,e)}),Kb=Z("ZodIPv6",(n,e)=>{IS.init(n,e),gt.init(n,e)}),Jb=Z("ZodCIDRv4",(n,e)=>{PS.init(n,e),gt.init(n,e)}),Qb=Z("ZodCIDRv6",(n,e)=>{FS.init(n,e),gt.init(n,e)}),ew=Z("ZodBase64",(n,e)=>{DS.init(n,e),gt.init(n,e)}),tw=Z("ZodBase64URL",(n,e)=>{NS.init(n,e),gt.init(n,e)}),nw=Z("ZodE164",(n,e)=>{US.init(n,e),gt.init(n,e)}),iw=Z("ZodJWT",(n,e)=>{kS.init(n,e),gt.init(n,e)}),Rf=Z("ZodNumber",(n,e)=>{Yd.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(i,s,r)=>sf(n,i,s),Qs(n,"ZodNumber",{gt(i,s){return this.check(Ku(i,s))},gte(i,s){return this.check(fa(i,s))},min(i,s){return this.check(fa(i,s))},lt(i,s){return this.check(ju(i,s))},lte(i,s){return this.check(da(i,s))},max(i,s){return this.check(da(i,s))},int(i){return this.check(nh(i))},safe(i){return this.check(nh(i))},positive(i){return this.check(Ku(0,i))},nonnegative(i){return this.check(fa(0,i))},negative(i){return this.check(ju(0,i))},nonpositive(i){return this.check(da(0,i))},multipleOf(i,s){return this.check(Ju(i,s))},step(i,s){return this.check(Ju(i,s))},finite(){return this}});const t=n._zod.bag;n.minValue=Math.max(t.minimum??Number.NEGATIVE_INFINITY,t.exclusiveMinimum??Number.NEGATIVE_INFINITY)??null,n.maxValue=Math.min(t.maximum??Number.POSITIVE_INFINITY,t.exclusiveMaximum??Number.POSITIVE_INFINITY)??null,n.isInt=(t.format??"").includes("int")||Number.isSafeInteger(t.multipleOf??.5),n.isFinite=!0,n.format=t.format??null});function Ye(n){return NM(Rf,n)}const sw=Z("ZodNumberFormat",(n,e)=>{zS.init(n,e),Rf.init(n,e)});function nh(n){return UM(sw,n)}const rw=Z("ZodBoolean",(n,e)=>{BS.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,s)=>rf(n,t,i)});function Ys(n){return OM(rw,n)}const ow=Z("ZodUnknown",(n,e)=>{VS.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,s)=>af()});function ih(){return kM(ow)}const aw=Z("ZodNever",(n,e)=>{HS.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,s)=>of(n,t,i)});function cw(n){return zM(aw,n)}const lw=Z("ZodArray",(n,e)=>{GS.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,s)=>df(n,t,i,s),n.element=e.element,Qs(n,"ZodArray",{min(t,i){return this.check(ho(t,i))},nonempty(t){return this.check(ho(1,t))},max(t,i){return this.check(ef(t,i))},length(t,i){return this.check(tf(t,i))},unwrap(){return this.element}})});function ei(n,e){return KM(lw,n,e)}const uw=Z("ZodObject",(n,e)=>{$S.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,s)=>ff(n,t,i,s),st(n,"shape",()=>e.shape),Qs(n,"ZodObject",{keyof(){return yt(Object.keys(this._zod.def.shape))},catchall(t){return this.clone({...this._zod.def,catchall:t})},passthrough(){return this.clone({...this._zod.def,catchall:ih()})},loose(){return this.clone({...this._zod.def,catchall:ih()})},strict(){return this.clone({...this._zod.def,catchall:cw()})},strip(){return this.clone({...this._zod.def,catchall:void 0})},extend(t){return lx(this,t)},safeExtend(t){return ux(this,t)},merge(t){return hx(this,t)},pick(t){return ax(this,t)},omit(t){return cx(this,t)},partial(...t){return dx(If,this,t[0])},required(...t){return fx(Pf,this,t[0])}})});function pe(n,e){const t={type:"object",shape:n??{},...Fe(e)};return new uw(t)}const Af=Z("ZodUnion",(n,e)=>{Jd.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,s)=>pf(n,t,i,s),n.options=e.options});function wi(n,e){return new Af({type:"union",options:n,...Fe(e)})}const hw=Z("ZodDiscriminatedUnion",(n,e)=>{Af.init(n,e),XS.init(n,e)});function nl(n,e,t){return new hw({type:"union",options:e,discriminator:n,...Fe(t)})}const dw=Z("ZodIntersection",(n,e)=>{ZS.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,s)=>mf(n,t,i,s)});function fw(n,e){return new dw({type:"intersection",left:n,right:e})}const pw=Z("ZodTuple",(n,e)=>{qS.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,s)=>gf(n,t,i,s),n.rest=t=>n.clone({...n._zod.def,rest:t})});function Cf(n,e,t){const i=e instanceof dt,s=i?t:e,r=i?e:null;return new pw({type:"tuple",items:n,rest:r,...Fe(s)})}const bc=Z("ZodEnum",(n,e)=>{YS.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(i,s,r)=>cf(n,i,s),n.enum=e.entries,n.options=Object.values(e.entries);const t=new Set(Object.keys(e.entries));n.extract=(i,s)=>{const r={};for(const o of i)if(t.has(o))r[o]=e.entries[o];else throw new Error(`Key ${o} not found in enum`);return new bc({...e,checks:[],...Fe(s),entries:r})},n.exclude=(i,s)=>{const r={...e.entries};for(const o of i)if(t.has(o))delete r[o];else throw new Error(`Key ${o} not found in enum`);return new bc({...e,checks:[],...Fe(s),entries:r})}});function yt(n,e){const t=Array.isArray(n)?Object.fromEntries(n.map(i=>[i,i])):n;return new bc({type:"enum",entries:t,...Fe(e)})}const mw=Z("ZodLiteral",(n,e)=>{jS.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,s)=>lf(n,t,i),n.values=new Set(e.values),Object.defineProperty(n,"value",{get(){if(e.values.length>1)throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");return e.values[0]}})});function bt(n,e){return new mw({type:"literal",values:Array.isArray(n)?n:[n],...Fe(e)})}const gw=Z("ZodTransform",(n,e)=>{KS.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,s)=>hf(n,t),n._zod.parse=(t,i)=>{if(i.direction==="backward")throw new Nd(n.constructor.name);t.addIssue=r=>{if(typeof r=="string")t.issues.push(qs(r,t.value,e));else{const o=r;o.fatal&&(o.continue=!1),o.code??(o.code="custom"),o.input??(o.input=t.value),o.inst??(o.inst=n),t.issues.push(qs(o))}};const s=e.transform(t.value,t);return s instanceof Promise?s.then(r=>(t.value=r,t.fallback=!0,t)):(t.value=s,t.fallback=!0,t)}});function vw(n){return new gw({type:"transform",transform:n})}const If=Z("ZodOptional",(n,e)=>{Qd.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,s)=>tl(n,t,i,s),n.unwrap=()=>n._zod.def.innerType});function sh(n){return new If({type:"optional",innerType:n})}const _w=Z("ZodExactOptional",(n,e)=>{JS.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,s)=>tl(n,t,i,s),n.unwrap=()=>n._zod.def.innerType});function yw(n){return new _w({type:"optional",innerType:n})}const xw=Z("ZodNullable",(n,e)=>{QS.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,s)=>vf(n,t,i,s),n.unwrap=()=>n._zod.def.innerType});function rh(n){return new xw({type:"nullable",innerType:n})}const Sw=Z("ZodDefault",(n,e)=>{eM.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,s)=>yf(n,t,i,s),n.unwrap=()=>n._zod.def.innerType,n.removeDefault=n.unwrap});function Mw(n,e){return new Sw({type:"default",innerType:n,get defaultValue(){return typeof e=="function"?e():kd(e)}})}const bw=Z("ZodPrefault",(n,e)=>{tM.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,s)=>xf(n,t,i,s),n.unwrap=()=>n._zod.def.innerType});function ww(n,e){return new bw({type:"prefault",innerType:n,get defaultValue(){return typeof e=="function"?e():kd(e)}})}const Pf=Z("ZodNonOptional",(n,e)=>{nM.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,s)=>_f(n,t,i,s),n.unwrap=()=>n._zod.def.innerType});function Ew(n,e){return new Pf({type:"nonoptional",innerType:n,...Fe(e)})}const Tw=Z("ZodCatch",(n,e)=>{iM.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,s)=>Sf(n,t,i,s),n.unwrap=()=>n._zod.def.innerType,n.removeCatch=n.unwrap});function Rw(n,e){return new Tw({type:"catch",innerType:n,catchValue:typeof e=="function"?e:()=>e})}const Aw=Z("ZodPipe",(n,e)=>{sM.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,s)=>Mf(n,t,i,s),n.in=e.in,n.out=e.out});function oh(n,e){return new Aw({type:"pipe",in:n,out:e})}const Cw=Z("ZodReadonly",(n,e)=>{rM.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,s)=>bf(n,t,i,s),n.unwrap=()=>n._zod.def.innerType});function Iw(n){return new Cw({type:"readonly",innerType:n})}const Pw=Z("ZodCustom",(n,e)=>{oM.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,s)=>uf(n,t)});function Fw(n,e={}){return JM(Pw,n,e)}function Dw(n,e){return QM(n,e)}const vo={custom:"custom"},Lw=Cf([Ye(),Ye()]),Ff=ei(Lw).min(3),il=yt(["temperature","humidity","lux","power","occupancy"]),Nw=pe({channel:il,unit:we(),deviceId:we()}),Uw=pe({id:we(),name:we(),footprint:Ff,sensors:ei(Nw).default([])}),Ow=yt(["guest","lobby","corridor","plant","amenity"]),kw=pe({id:we(),name:we(),function:Ow,rooms:ei(Uw)}),zw=pe({id:we(),name:we(),elevation:Ye(),height:Ye().positive(),outline:Ff,zones:ei(kw)}),Bw=pe({id:we(),name:we(),location:pe({lat:Ye(),lon:Ye(),northAngleDeg:Ye().default(0)}),floors:ei(zw).min(1)});function Vw(n){return Bw.parse(n)}class Hw{constructor(e){E(this,"floorIds");E(this,"floorById",new Map);E(this,"roomById",new Map);this.building=e,this.floorIds=e.floors.map(t=>t.id);for(const t of e.floors){this.floorById.set(t.id,t);for(const i of t.zones)for(const s of i.rooms)this.roomById.set(s.id,{room:s,zone:i,floor:t})}}floor(e){return this.floorById.get(e)}room(e){return this.roomById.get(e)}roomsMatching(e){const t=[];for(const i of this.building.floors)if(!(e.floorId&&i.id!==e.floorId)){for(const s of i.zones)if(!(e.zoneFunction&&s.function!==e.zoneFunction))for(const r of s.rooms){const o=this.roomById.get(r.id);o&&t.push(o)}}return t}info(e){if(e.type==="room"){const t=this.roomById.get(e.id);if(t)return{ref:{...e},type:"room",name:t.room.name,floorId:t.floor.id,floorName:t.floor.name,zoneName:t.zone.name,zoneFunction:t.zone.function,sensors:ah(t.room.sensors)}}if(e.type==="floor"){const t=this.floorById.get(e.id);if(t){const i=t.zones.flatMap(s=>s.rooms.flatMap(r=>r.sensors));return{ref:{...e},type:"floor",name:t.name,floorId:t.id,floorName:t.name,sensors:ah(i)}}}return e.type==="building"?{ref:{...e},type:"building",name:this.building.name,sensors:[]}:{ref:{...e},type:e.type,name:e.id,sensors:[]}}}function ah(n){return n.map(e=>({...e}))}const ch={type:"change"},sl={type:"start"},Df={type:"end"},kr=new Ks,lh=new qn,Gw=Math.cos(70*_t.DEG2RAD),Mt=new I,Wt=2*Math.PI,rt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},pa=1e-6;class Ww extends ex{constructor(e,t=null){super(e,t),this.state=rt.NONE,this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ki.ROTATE,MIDDLE:Ki.DOLLY,RIGHT:Ki.PAN},this.touches={ONE:Zi.ROTATE,TWO:Zi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new gi,this._lastTargetPosition=new I,this._quat=new gi().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new fn,this._sphericalDelta=new fn,this._scale=1,this._panOffset=new I,this._rotateStart=new se,this._rotateEnd=new se,this._rotateDelta=new se,this._panStart=new se,this._panEnd=new se,this._panDelta=new se,this._dollyStart=new se,this._dollyEnd=new se,this._dollyDelta=new se,this._dollyDirection=new I,this._mouse=new se,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Xw.bind(this),this._onPointerDown=$w.bind(this),this._onPointerUp=Zw.bind(this),this._onContextMenu=eE.bind(this),this._onMouseWheel=jw.bind(this),this._onKeyDown=Kw.bind(this),this._onTouchStart=Jw.bind(this),this._onTouchMove=Qw.bind(this),this._onMouseDown=qw.bind(this),this._onMouseMove=Yw.bind(this),this._interceptControlDown=tE.bind(this),this._interceptControlUp=nE.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ch),this.update(),this.state=rt.NONE}update(e=null){const t=this.object.position;Mt.copy(t).sub(this.target),Mt.applyQuaternion(this._quat),this._spherical.setFromVector3(Mt),this.autoRotate&&this.state===rt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Wt:i>Math.PI&&(i-=Wt),s<-Math.PI?s+=Wt:s>Math.PI&&(s-=Wt),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Mt.setFromSpherical(this._spherical),Mt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Mt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Mt.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new I(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Mt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(kr.origin.copy(this.object.position),kr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(kr.direction))<Gw?this.object.lookAt(this.target):(lh.setFromNormalAndCoplanarPoint(this.object.up,this.target),kr.intersectPlane(lh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>pa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>pa||this._lastTargetPosition.distanceToSquared(this.target)>pa?(this.dispatchEvent(ch),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Wt/60*this.autoRotateSpeed*e:Wt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Mt.setFromMatrixColumn(t,0),Mt.multiplyScalar(-e),this._panOffset.add(Mt)}_panUp(e,t){this.screenSpacePanning===!0?Mt.setFromMatrixColumn(t,1):(Mt.setFromMatrixColumn(t,0),Mt.crossVectors(this.object.up,Mt)),Mt.multiplyScalar(e),this._panOffset.add(Mt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Mt.copy(s).sub(this.target);let r=Mt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Wt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Wt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Wt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Wt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Wt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Wt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Wt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Wt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new se,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function $w(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Xw(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Zw(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Df),this.state=rt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function qw(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ki.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=rt.DOLLY;break;case Ki.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=rt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=rt.ROTATE}break;case Ki.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=rt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=rt.PAN}break;default:this.state=rt.NONE}this.state!==rt.NONE&&this.dispatchEvent(sl)}function Yw(n){switch(this.state){case rt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case rt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case rt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function jw(n){this.enabled===!1||this.enableZoom===!1||this.state!==rt.NONE||(n.preventDefault(),this.dispatchEvent(sl),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Df))}function Kw(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function Jw(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Zi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=rt.TOUCH_ROTATE;break;case Zi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=rt.TOUCH_PAN;break;default:this.state=rt.NONE}break;case 2:switch(this.touches.TWO){case Zi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=rt.TOUCH_DOLLY_PAN;break;case Zi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=rt.TOUCH_DOLLY_ROTATE;break;default:this.state=rt.NONE}break;default:this.state=rt.NONE}this.state!==rt.NONE&&this.dispatchEvent(sl)}function Qw(n){switch(this._trackPointer(n),this.state){case rt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case rt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case rt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case rt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=rt.NONE}}function eE(n){this.enabled!==!1&&n.preventDefault()}function tE(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function nE(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Lf={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class _s{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const iE=new yd(-1,1,1,-1,0,1);class sE extends Ft{constructor(){super(),this.setAttribute("position",new Et([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Et([0,2,0,0,2,0],2))}}const rE=new sE;class rl{constructor(e){this._mesh=new It(rE,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,iE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Nf extends _s{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof wt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Hs.clone(e.uniforms),this.material=new wt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new rl(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class uh extends _s{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class oE extends _s{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class aE{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new se);this._width=i.width,this._height=i.height,t=new gn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Dn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Nf(Lf),this.copyPass.material.blending=Fn,this.clock=new Ld}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}uh!==void 0&&(o instanceof uh?i=!0:o instanceof oE&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new se);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class cE extends _s{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ve}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const lE={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class uE extends _s{constructor(){super();const e=lE;this.uniforms=Hs.clone(e.uniforms),this.material=new Ky({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new rl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ke.getTransfer(this._outputColorSpace)===it&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Xh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Zh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===qh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ic?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Yh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===jh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const hE={uniforms:{tDiffuse:{value:null},uTime:{value:0},uResolution:{value:new se(1,1)}},vertexShader:`
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
  `},dE={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ve(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class us extends _s{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new se(e.x,e.y):new se(256,256),this.clearColor=new Ve(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new gn(r,o,{type:Dn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new gn(r,o,{type:Dn});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new gn(r,o,{type:Dn});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=dE;this.highPassUniforms=Hs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new wt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new se(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Lf;this.copyUniforms=Hs.clone(u.uniforms),this.blendMaterial=new wt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Un,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ve,this.oldClearAlpha=1,this.basic=new bo,this.fsQuad=new rl(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new se(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=us.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=us.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new wt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new se(.5,.5)},direction:{value:new se(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new wt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}us.BlurDirectionX=new se(1,0);us.BlurDirectionY=new se(0,1);class fE extends us{constructor(e,t,i,s,r){super(e.clone().multiplyScalar(t),i,s,r),this.resolutionScale=t}setSize(e,t){super.setSize(Math.max(1,Math.round(e*this.resolutionScale)),Math.max(1,Math.round(t*this.resolutionScale)))}get brightBufferSize(){return{width:this.renderTargetBright.width,height:this.renderTargetBright.height}}}const hh="#02040a",ma=.0025,dh={high:{bloom:.5,overlay:!0,dpr:2,holoGain:1},medium:{bloom:.32,overlay:!1,dpr:1.5,holoGain:1},low:{bloom:0,overlay:!1,dpr:1,holoGain:6}},fh=["high","medium","low"],pE=26,mE=90,gE=1e3/60,vE=1e3/30,_E=1e3/30,yE=100,ph=1,mh=1500,xE=.5;class SE{constructor(e,t="high"){E(this,"scene",new fy);E(this,"camera");E(this,"controls");E(this,"renderer");E(this,"holoLuminance",new gs(1));E(this,"composer",null);E(this,"overlayPass",null);E(this,"bloomPass",null);E(this,"updates",new Set);E(this,"clock",new Ld);E(this,"frameIntervals",[]);E(this,"cpuFrameTimes",[]);E(this,"gpuFrameTimes",[]);E(this,"drawingBufferSize",new se);E(this,"gpuTimer",null);E(this,"quality","high");E(this,"qualityInitialized",!1);E(this,"cadenceGate",new bE);E(this,"autoQuality",!0);E(this,"frameAccum",0);E(this,"frameCount",0);E(this,"burstUntil",performance.now()+mh);E(this,"activityProbe",null);E(this,"requestedFogDensity",ma);E(this,"onQuality",null);E(this,"resizeObserver",null);E(this,"intersectionObserver",null);E(this,"containerVisible",!0);E(this,"disposed",!1);E(this,"onResize",()=>{var i,s;if(this.disposed)return;const[e,t]=this.dims();this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),(i=this.composer)==null||i.setSize(e,t),(s=this.overlayPass)==null||s.uniforms.uResolution.value.set(e,t),this.requestRenderBurst()});E(this,"onInteraction",()=>{this.requestRenderBurst()});E(this,"onVisibilityChange",()=>{document.hidden||this.resetFrameClock()});this.container=e;const[i,s]=this.dims();this.renderer=new dy({antialias:!0,powerPreference:"high-performance"}),this.renderer.info.autoReset=!1,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,dh[t].dpr)),this.renderer.setSize(i,s),this.renderer.toneMapping=Ic,this.initializeGpuTimer(),e.appendChild(this.renderer.domElement),this.scene.background=new Ve(hh),this.scene.fog=new Vc(hh,ma),this.camera=new nn(50,i/s,.1,2e3),this.controls=new Ww(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.maxPolarAngle=Math.PI/2-.02,this.controls.minDistance=8,this.controls.maxDistance=160,this.controls.addEventListener("start",this.onInteraction),this.renderer.domElement.addEventListener("pointerdown",this.onInteraction,{passive:!0}),this.renderer.domElement.addEventListener("wheel",this.onInteraction,{passive:!0}),window.addEventListener("resize",this.onResize),typeof ResizeObserver<"u"&&(this.resizeObserver=new ResizeObserver(this.onResize),this.resizeObserver.observe(e)),typeof IntersectionObserver<"u"&&(this.intersectionObserver=new IntersectionObserver(r=>{var a;const o=((a=r[0])==null?void 0:a.isIntersecting)??!0;o&&!this.containerVisible&&this.resetFrameClock(),this.containerVisible=o}),this.intersectionObserver.observe(e)),document.addEventListener("visibilitychange",this.onVisibilityChange),this.setQuality(t,!0),this.onResize()}setFogDensity(e){this.disposed||(this.requestedFogDensity=e??ma,this.applyFogDensity())}getQuality(){return this.quality}getPerformanceStats(){var a,c;this.pollGpuTimers();const e=va(this.frameIntervals),t=va(this.cpuFrameTimes),i=va(this.gpuFrameTimes),s=this.renderer.info.render,r=this.isBursting(performance.now())?"burst":"idle",o=(a=this.bloomPass)==null?void 0:a.brightBufferSize;return this.renderer.getDrawingBufferSize(this.drawingBufferSize),{quality:this.quality,renderCadence:r,targetFps:ME(this.quality,r),fps:e.average>0?1e3/e.average:0,frameMs:t.average,p95FrameMs:t.p95,frameIntervalMs:e.average,p95FrameIntervalMs:e.p95,gpuFrameMs:i.count?i.average:null,p95GpuFrameMs:i.count?i.p95:null,gpuTimingSupported:this.gpuTimer!==null,drawCalls:s.calls,triangles:s.triangles,points:s.points,lines:s.lines,geometries:this.renderer.info.memory.geometries,textures:this.renderer.info.memory.textures,drawingBufferWidth:this.drawingBufferSize.x,drawingBufferHeight:this.drawingBufferSize.y,pixelRatio:this.renderer.getPixelRatio(),holoLuminanceGain:this.holoLuminance.value,postProcessing:this.composer!==null,bloomResolutionScale:((c=this.bloomPass)==null?void 0:c.resolutionScale)??null,bloomBufferWidth:(o==null?void 0:o.width)??0,bloomBufferHeight:(o==null?void 0:o.height)??0}}onQualityChange(e){this.disposed||(this.onQuality=e)}requestRenderBurst(e=mh){this.disposed||(this.burstUntil=Math.max(this.burstUntil,performance.now()+Math.max(0,e)),this.resetCadenceGate())}setActivityProbe(e){this.disposed||(this.activityProbe=e,e!=null&&e()&&this.requestRenderBurst())}setQuality(e,t=!1){var s,r;if(this.disposed)return;if(this.qualityInitialized&&this.quality===e){t||(this.autoQuality=!1),this.requestRenderBurst(),(s=this.onQuality)==null||s.call(this,e,this.autoQuality);return}this.quality=e,this.qualityInitialized=!0,t||(this.autoQuality=!1);const i=dh[e];this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,i.dpr)),this.holoLuminance.value=i.holoGain,e==="low"?this.disposeComposer():(this.ensureComposer(),this.composer.setPixelRatio(this.renderer.getPixelRatio()),this.bloomPass.enabled=i.bloom>0,this.bloomPass.strength=i.bloom,this.overlayPass.enabled=i.overlay),this.resetCadenceGate(),this.requestRenderBurst(),this.applyFogDensity(),this.onResize(),(r=this.onQuality)==null||r.call(this,e,this.autoQuality)}get domElement(){return this.renderer.domElement}getHoloLuminanceUniform(){return this.holoLuminance}registerUpdate(e){return this.disposed?()=>{}:(this.updates.add(e),()=>this.updates.delete(e))}start(){this.disposed||this.renderer.setAnimationLoop(e=>{if(!this.shouldRender())return;const t=this.isBursting(e)?"burst":"idle";this.cadenceGate.shouldRender(e,this.quality,t)&&this.tick()})}stop(){this.disposed||(this.renderer.setAnimationLoop(null),this.resetCadenceGate())}renderOnce(){this.disposed||this.tick(!0)}dispose(){var e,t;this.disposed||(this.stop(),this.disposed=!0,window.removeEventListener("resize",this.onResize),(e=this.resizeObserver)==null||e.disconnect(),this.resizeObserver=null,(t=this.intersectionObserver)==null||t.disconnect(),this.intersectionObserver=null,document.removeEventListener("visibilitychange",this.onVisibilityChange),this.controls.removeEventListener("start",this.onInteraction),this.renderer.domElement.removeEventListener("pointerdown",this.onInteraction),this.renderer.domElement.removeEventListener("wheel",this.onInteraction),this.clock.stop(),this.updates.clear(),this.controls.dispose(),this.disposeComposer(),this.disposeGpuTimer(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.onQuality=null,this.frameAccum=0,this.frameCount=0,this.frameIntervals=[],this.cpuFrameTimes=[],this.gpuFrameTimes=[],this.activityProbe=null)}tick(e=!1){var o;if(this.disposed||!e&&!this.shouldRender())return;const t=performance.now(),i=this.clock.getDelta(),s=this.clock.elapsedTime;for(const a of this.updates)a(i,s);this.controls.update(i),this.renderer.info.reset(),this.beginGpuTimer(),(o=this.overlayPass)!=null&&o.enabled&&(this.overlayPass.uniforms.uTime.value=s),this.composer?this.composer.render():(this.renderer.setRenderTarget(null),this.renderer.render(this.scene,this.camera)),this.endGpuTimer(),this.pollGpuTimers();const r=performance.now()-t;this.monitorFrame(r),this.recordFrameMetrics(i,r)}monitorFrame(e){if(!this.autoQuality||this.quality==="low"||(this.frameAccum+=e,++this.frameCount<mE))return;const t=this.frameAccum/this.frameCount;if(this.frameAccum=0,this.frameCount=0,t>pE){const i=fh[fh.indexOf(this.quality)+1];i&&this.setQuality(i,!0)}}dims(){return[this.container.clientWidth||window.innerWidth,this.container.clientHeight||window.innerHeight]}shouldRender(){return!document.hidden&&this.containerVisible}resetFrameClock(){this.disposed||(this.clock.stop(),this.clock.start(),this.resetCadenceGate(),this.requestRenderBurst())}resetCadenceGate(){this.cadenceGate.reset()}isBursting(e){var t;return e<this.burstUntil||(((t=this.activityProbe)==null?void 0:t.call(this))??!1)}ensureComposer(){if(this.composer)return;const[e,t]=this.dims(),i=new aE(this.renderer);i.setPixelRatio(this.renderer.getPixelRatio()),i.addPass(new cE(this.scene,this.camera));const s=new fE(new se(e,t),xE,.5,.45,.2);i.addPass(s);const r=new Nf(hE);i.addPass(r),i.addPass(new uE),this.composer=i,this.bloomPass=s,this.overlayPass=r}disposeComposer(){if(this.composer){for(const e of this.composer.passes)e.dispose();this.composer.passes.length=0,this.composer.dispose(),this.composer=null,this.bloomPass=null,this.overlayPass=null}}applyFogDensity(){this.scene.fog.density=this.quality==="high"?this.requestedFogDensity:0}initializeGpuTimer(){const e=this.renderer.getContext();if(!(e instanceof WebGL2RenderingContext))return;const t=e.getExtension("EXT_disjoint_timer_query_webgl2");t&&(this.gpuTimer={gl:e,extension:t,active:null,pending:[]})}beginGpuTimer(){const e=this.gpuTimer;if(!e||e.active||e.pending.length>=4)return;const t=e.gl.createQuery();if(t)try{e.gl.beginQuery(e.extension.TIME_ELAPSED_EXT,t),e.active=t}catch{e.gl.deleteQuery(t),this.disposeGpuTimer()}}endGpuTimer(){const e=this.gpuTimer;if(e!=null&&e.active)try{e.gl.endQuery(e.extension.TIME_ELAPSED_EXT),e.pending.push(e.active),e.active=null}catch{this.disposeGpuTimer()}}pollGpuTimers(){const e=this.gpuTimer;if(!(!e||e.active)){if(e.gl.getParameter(e.extension.GPU_DISJOINT_EXT)){for(const t of e.pending.splice(0))e.gl.deleteQuery(t);return}for(;e.pending.length;){const t=e.pending[0];if(!e.gl.getQueryParameter(t,e.gl.QUERY_RESULT_AVAILABLE))break;const i=e.gl.getQueryParameter(t,e.gl.QUERY_RESULT);e.pending.shift(),e.gl.deleteQuery(t);const s=i/1e6;Number.isFinite(s)&&s>=0&&s<1e3&&ga(this.gpuFrameTimes,s)}}}disposeGpuTimer(){const e=this.gpuTimer;if(e){if(e.active){try{e.gl.endQuery(e.extension.TIME_ELAPSED_EXT)}catch{}e.gl.deleteQuery(e.active)}for(const t of e.pending)e.gl.deleteQuery(t);this.gpuTimer=null}}recordFrameMetrics(e,t){const i=e*1e3;Number.isFinite(i)&&i>0&&i<1e3&&ga(this.frameIntervals,i),Number.isFinite(t)&&t>=0&&t<1e3&&ga(this.cpuFrameTimes,t)}}function Uf(n,e){return e==="idle"?yE:n==="high"?gE:n==="medium"?vE:_E}function ME(n,e){return Math.round(1e3/Uf(n,e))}class bE{constructor(){E(this,"nextFrameAt",Number.NEGATIVE_INFINITY);E(this,"cadence",null);E(this,"lastTime",Number.NEGATIVE_INFINITY)}reset(){this.nextFrameAt=Number.NEGATIVE_INFINITY,this.cadence=null,this.lastTime=Number.NEGATIVE_INFINITY}shouldRender(e,t,i){if(!Number.isFinite(e))return!0;if((this.cadence!==i||e<this.lastTime)&&(this.cadence=i,this.nextFrameAt=e),this.lastTime=e,e+ph<this.nextFrameAt)return!1;const s=Uf(t,i),r=e+ph-this.nextFrameAt;return this.nextFrameAt+=(Math.floor(Math.max(0,r)/s)+1)*s,!0}}function ga(n,e){n.push(e),n.length>240&&n.shift()}function va(n){if(!n.length)return{average:0,p95:0,count:0};const e=n.reduce((i,s)=>i+s,0)/n.length,t=[...n].sort((i,s)=>i-s);return{average:e,p95:t[Math.min(t.length-1,Math.floor(t.length*.95))],count:n.length}}const zs=new Ve("#36e6ff");function ol(n=zs,e=new gs(1)){return new wt({transparent:!0,depthWrite:!1,blending:Un,side:rn,uniforms:{uColor:{value:n.clone()},uBase:{value:.015},uFresnelPower:{value:2.6},uIntensity:{value:.35},uOpacity:{value:1},uLodVisible:{value:1},uTint:{value:n.clone()},uTintStrength:{value:0},uSunDir:{value:new I(0,1,0)},uSunStrength:{value:0},uLuminance:e},vertexShader:`
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
    `})}function wE(n,e=zs,t=new gs(1)){return new wt({transparent:!0,depthWrite:!1,blending:Un,uniforms:{uColor:{value:e.clone()},uOpacity:{value:1},uScaleY:{value:1},uBaseY:{value:n},uLuminance:t},vertexShader:`
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
    `})}function Ht(n){n.updateMatrix(),n.matrixAutoUpdate=!1}const js=.18,EE=.18,TE=.45,gh=30;function RE(n,e=new gs(1)){const t=new mn;t.name=`building:${n.id}`;const i=new Map,s=new Map;for(const c of n.floors){const l=CE(c,n.id,s,e);t.add(l),i.set(c.id,l)}const o=new Xt().setFromObject(t).getCenter(new I);t.position.set(-o.x,0,-o.z),Ht(t);const a=new mn;return a.name="buildingRoot",a.userData.entityRef={type:"building",id:n.id},a.add(t),Ht(a),{root:a,floorGroups:i}}class AE{constructor(e,t,i,s){this.mesh=e,this.instanceId=t,this.anchor=i,this.attributes=s}getColor(){return new Ve(this.attributes.color.getX(this.instanceId),this.attributes.color.getY(this.instanceId),this.attributes.color.getZ(this.instanceId))}setColor(e){this.attributes.color.setXYZ(this.instanceId,e.r,e.g,e.b),this.attributes.color.needsUpdate=!0}getIntensity(){return this.attributes.intensity.getX(this.instanceId)}setIntensity(e){this.setScalar(this.attributes.intensity,e)}getBase(){return this.attributes.base.getX(this.instanceId)}setBase(e){this.setScalar(this.attributes.base,e)}getOpacity(){return this.attributes.opacity.getX(this.instanceId)}setOpacity(e){this.setScalar(this.attributes.opacity,e)}setTint(e,t=e?.8:0){this.setScalar(this.attributes.tintStrength,e?t:0),e&&(this.attributes.tint.setXYZ(this.instanceId,e.r,e.g,e.b),this.attributes.tint.needsUpdate=!0)}setScaleY(e){this.anchor.scale.y=e,this.anchor.updateMatrix(),this.mesh.setMatrixAt(this.instanceId,this.anchor.matrix),this.mesh.instanceMatrix.needsUpdate=!0}getLodVisible(){return this.attributes.lodVisible.getX(this.instanceId)>.5}setLodVisible(e){this.setScalar(this.attributes.lodVisible,e?1:0)}setScalar(e,t){e.setX(this.instanceId,t),e.needsUpdate=!0}}class Of{constructor(e,t){this.edge=e,this.roomId=t}getOpacity(){const e=this.edge.ranges.get(this.roomId);return e?this.edge.opacity.getX(e.start):0}setOpacity(e){const t=this.edge.ranges.get(this.roomId);if(t){for(let i=t.start;i<t.start+t.count;i++)this.edge.opacity.setX(i,e);this.edge.opacity.needsUpdate=!0}}setScaleY(e){this.edge.lines.material.uniforms.uScaleY.value=e}setVisible(e){this.edge.lines.visible=e}}function CE(n,e,t,i){const s=new mn;s.name=`floor:${n.id}`,s.position.y=n.elevation,s.userData.entityRef={type:"floor",id:n.id,buildingId:e},s.userData.baseElevation=n.elevation;const r=vh(n.outline,js),o=new It(r,ol(void 0,i));o.userData.entityRef=s.userData.entityRef,Ht(o),s.add(o);const a=new Map;for(const u of n.zones)for(const h of u.rooms){const d=Math.max(.5,n.height-TE),[f,g]=h.footprint[0],v=h.footprint.map(([b,x])=>[b-f,x-g]),m=`${d}|${LE(v)}`;let p=t.get(m);if(!p){const b=vh(UE(v,EE),d);b.computeBoundingBox(),p={volume:b,edges:new Tu(b,gh)},t.set(m,p)}const T=a.get(m)??[];T.push({room:h,originX:f,originY:g,cached:p,lodEligible:u.function==="guest"}),a.set(m,T)}const c=[...a.values()].flat(),l=FE(new Tu(r,gh),c,i);Ht(l.lines),s.add(l.lines);for(const u of a.values())u.length===1?IE(s,u[0],e,l,i):PE(s,u,e,l,i);return s}function IE(n,e,t,i,s){const r=new It(e.cached.volume,ol(void 0,s));r.position.set(e.originX,js,-e.originY),r.userData.entityRef=wc(e.room.id,t),r.userData.roomLodEligible=e.lodEligible,r.userData.roomEdges=i.lines,r.userData.roomEdgeVisual=new Of(i,e.room.id),Ht(r),n.add(r)}function PE(n,e,t,i,s){const r=e[0].cached.volume.clone(),o=DE(r,e.length),a=new gy(r,ol(void 0,s),e.length);a.name=`instancedRooms:${e.length}`,a.userData.instanceRoomRefs=e.map(c=>wc(c.room.id,t)),a.frustumCulled=!0,Ht(a),n.add(a);for(let c=0;c<e.length;c++){const l=e[c],u=new Ot;u.name=`room:${l.room.id}`,u.position.set(l.originX,js,-l.originY),u.userData.entityRef=wc(l.room.id,t),u.userData.roomLodEligible=l.lodEligible,u.userData.roomLocalBounds=l.cached.volume.boundingBox.clone(),u.userData.roomVisual=new AE(a,c,u,o),u.userData.roomEdges=i.lines,u.userData.roomEdgeVisual=new Of(i,l.room.id),Ht(u),a.setMatrixAt(c,u.matrix),n.add(u)}a.instanceMatrix.needsUpdate=!0,a.computeBoundingSphere()}function FE(n,e,t){const i=n.attributes.position,s=e.reduce((g,v)=>g+v.cached.edges.attributes.position.count,0),r=i.count+s,o=new Float32Array(r*3),a=new Float32Array(r),c=new Float32Array(r),l=new Map;let u=0;for(let g=0;g<i.count;g++,u++)o[u*3]=i.getX(g),o[u*3+1]=i.getY(g),o[u*3+2]=i.getZ(g),a[u]=.55;for(const g of e){const v=g.cached.edges.attributes.position,m=u;for(let p=0;p<v.count;p++,u++)o[u*3]=v.getX(p)+g.originX,o[u*3+1]=v.getY(p)+js,o[u*3+2]=v.getZ(p)-g.originY,a[u]=.28,c[u]=1;l.set(g.room.id,{start:m,count:v.count})}const h=new Ft;h.setAttribute("position",new Pt(o,3));const d=new Pt(a,1);d.setUsage(ro),h.setAttribute("edgeOpacity",d),h.setAttribute("edgeScalable",new Pt(c,1));const f=new Ns(h,wE(js,void 0,t));return f.name=`batchedFloorEdges:${e.length}`,{lines:f,opacity:d,ranges:l}}function DE(n,e){const t=new In(new Float32Array(e*3),3),i=new In(new Float32Array(e),1),s=new In(new Float32Array(e),1),r=new In(new Float32Array(e*3),3),o=new In(new Float32Array(e),1),a=new In(new Float32Array(e),1),c=new In(new Float32Array(e),1),l=new Ve("#36e6ff");for(let u=0;u<e;u++)t.setXYZ(u,l.r,l.g,l.b),i.setX(u,.015),s.setX(u,.35),r.setXYZ(u,l.r,l.g,l.b),o.setX(u,0),a.setX(u,1),c.setX(u,1);return n.setAttribute("instanceHoloColor",t),n.setAttribute("instanceHoloBase",i),n.setAttribute("instanceHoloIntensity",s),n.setAttribute("instanceHoloTint",r),n.setAttribute("instanceHoloTintStrength",o),n.setAttribute("instanceHoloOpacity",a),n.setAttribute("instanceHoloLodVisible",c),{color:t,base:i,intensity:s,tint:r,tintStrength:o,opacity:a,lodVisible:c}}function wc(n,e){return{type:"room",id:n,buildingId:e}}function LE(n){return n.map(([e,t])=>`${e},${t}`).join(";")}function NE(n){const e=new Id;e.moveTo(n[0][0],n[0][1]);for(let t=1;t<n.length;t++)e.lineTo(n[t][0],n[t][1]);return e.closePath(),e}function vh(n,e){const t=new Xc(NE(n),{depth:e,bevelEnabled:!1});return t.rotateX(-Math.PI/2),t}function UE(n,e){let t=0,i=0;for(const[s,r]of n)t+=s,i+=r;return t/=n.length,i/=n.length,n.map(([s,r])=>{const o=s-t,a=r-i,c=Math.hypot(o,a)||1,l=Math.min(e,c*.4);return[s-o/c*l,r-a/c*l]})}class OE{constructor(e){E(this,"group",new mn);E(this,"spinners",[]);this.group.name="pedestal",Ht(this.group);const t=[{inner:.985,outer:1,arc:Math.PI*2,speed:0,opacity:.3},{inner:1.1,outer:1.115,arc:Math.PI*1.4,speed:.25,opacity:.22},{inner:1.24,outer:1.25,arc:Math.PI*.5,speed:-.4,opacity:.2}];for(const r of t){const o=new Zc(e*r.inner,e*r.outer,160,1,0,r.arc),a=new bo({color:zs,transparent:!0,opacity:r.opacity,side:rn,blending:Un,depthWrite:!1}),c=new It(o,a);c.rotation.x=-Math.PI/2,c.position.y=.03,r.speed===0&&Ht(c),this.group.add(c),this.spinners.push({mesh:c,speed:r.speed,baseOpacity:r.opacity})}const i=new Qy(e*.95,12,5,128,zs,zs),s=i.material;s.transparent=!0,s.opacity=.06,s.blending=Un,s.depthWrite=!1,i.position.y=.01,Ht(i),this.group.add(i)}update(e,t){for(const i of this.spinners)i.mesh.rotation.z+=i.speed*e,i.mesh.material.opacity=i.baseOpacity*(.75+.25*Math.sin(t*1.6+i.speed*10))}}function kf(n=64){const e=document.createElement("canvas");e.width=e.height=n;const t=e.getContext("2d"),i=t.createRadialGradient(n/2,n/2,0,n/2,n/2,n/2);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.4,"rgba(255,255,255,0.5)"),i.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=i,t.fillRect(0,0,n,n);const s=new _y(e);return s.needsUpdate=!0,s}const _h=-9999;class kE{constructor(e,t){E(this,"group",new mn);E(this,"rooms",[]);E(this,"points");E(this,"positions");E(this,"tmp",new I);E(this,"dirty",!0);E(this,"transformRevision",-1);E(this,"offControlChange");this.sceneIndex=e,this.controls=t,this.group.name="controlLayer",Ht(this.group);for(const o of t.list()){if(!o.kinds.includes("light"))continue;const a=e.room(o.roomId);if(!a)continue;const c=a.localBounds,l=c.getCenter(new I);this.rooms.push({roomId:o.roomId,mesh:a.mesh,localTop:new I(l.x,c.max.y*.85,l.z)})}this.positions=new Float32Array(this.rooms.length*3).fill(_h);const i=new Ft,s=new Pt(this.positions,3);s.setUsage(ro),i.setAttribute("position",s);const r=new Gc({size:2.6,map:kf(),color:new Ve("#ffd9a0"),transparent:!0,opacity:.85,blending:Un,depthWrite:!1,sizeAttenuation:!0});this.points=new Ed(i,r),this.points.frustumCulled=!1,Ht(this.points),this.group.add(this.points),this.offControlChange=t.onChange(()=>{this.dirty=!0})}update(){var i;const e=this.transformRevision!==this.sceneIndex.transformRevision;if(!this.dirty&&!e)return;const t=this.points.geometry.attributes.position;for(let s=0;s<this.rooms.length;s++){const r=this.rooms[s];(i=this.controls.get(r.roomId))!=null&&i.state.light?(r.mesh.localToWorld(this.tmp.copy(r.localTop)),this.positions[s*3]=this.tmp.x,this.positions[s*3+1]=this.tmp.y,this.positions[s*3+2]=this.tmp.z):this.positions[s*3+1]=_h}t.needsUpdate=!0,this.dirty=!1,this.transformRevision=this.sceneIndex.transformRevision}dispose(){this.offControlChange()}}const yh=-9999,zE=new Ve("#ffb020"),BE=new Ve("#ff2b3b");class VE{constructor(e,t){E(this,"group",new mn);E(this,"rooms",[]);E(this,"points");E(this,"positions");E(this,"colors");E(this,"tmp",new I);E(this,"transformRevision",-1);E(this,"alarmRevision",-1);E(this,"hasCritical",!1);this.sceneIndex=e,this.alarms=t,this.group.name="alarmLayer",Ht(this.group);for(const a of e.rooms){const c=a.localBounds,l=c.getCenter(new I);this.rooms.push({roomId:a.id,mesh:a.mesh,localTop:new I(l.x,c.max.y*1.15,l.z)})}this.positions=new Float32Array(this.rooms.length*3).fill(yh),this.colors=new Float32Array(this.rooms.length*3);const i=new Ft,s=new Pt(this.positions,3),r=new Pt(this.colors,3);s.setUsage(ro),r.setUsage(ro),i.setAttribute("position",s),i.setAttribute("color",r);const o=new Gc({size:5,map:kf(),vertexColors:!0,transparent:!0,opacity:.9,blending:Un,depthWrite:!1,sizeAttenuation:!0});this.points=new Ed(i,o),this.points.frustumCulled=!1,Ht(this.points),this.group.add(this.points)}update(e){const t=this.transformRevision!==this.sceneIndex.transformRevision,i=this.alarmRevision!==this.alarms.revision;if(!t&&!i){this.pulse(e);return}const s=this.alarms.alarmingRooms(),r=this.points.geometry.attributes.position,o=this.points.geometry.attributes.color;let a=!1;for(let c=0;c<this.rooms.length;c++){const l=this.rooms[c],u=s.get(l.roomId);if(!u){this.positions[c*3+1]=yh;continue}l.mesh.localToWorld(this.tmp.copy(l.localTop)),this.positions[c*3]=this.tmp.x,this.positions[c*3+1]=this.tmp.y,this.positions[c*3+2]=this.tmp.z;const h=u==="critical"?BE:zE;this.colors[c*3]=h.r,this.colors[c*3+1]=h.g,this.colors[c*3+2]=h.b,u==="critical"&&(a=!0)}r.needsUpdate=!0,o.needsUpdate=!0,this.transformRevision=this.sceneIndex.transformRevision,this.alarmRevision=this.alarms.revision,this.hasCritical=a,this.pulse(e)}pulse(e){const t=this.hasCritical?7:3.5;this.points.material.opacity=.45+.45*Math.abs(Math.sin(e*t))}}const HE={easeInOutCubic:n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2};class GE{constructor(){E(this,"active",new Set);E(this,"now",performance.now())}get hasActive(){return this.active.size>0}run(e,t,i=HE.easeInOutCubic){let s;const r=new Promise(a=>s=a),o={start:this.now,duration:e,easing:i,onUpdate:t,resolve:s};return this.active.add(o),{done:r,cancel:()=>{this.active.delete(o)&&s("cancelled")}}}update(e){this.now=e;for(const t of this.active){const i=Math.min(1,(e-t.start)/t.duration);t.onUpdate(t.easing(i)),i>=1&&(this.active.delete(t),t.resolve("completed"))}}cancelAll(){for(const e of this.active)this.active.delete(e),e.resolve("cancelled")}}const WE={orbit:{azimuthDeg:35,elevationDeg:22},front:{azimuthDeg:0,elevationDeg:10},top:{azimuthDeg:0,elevationDeg:85},isometric:{azimuthDeg:45,elevationDeg:32}},$E=1e4,xh=1200;class XE{constructor(e,t,i){E(this,"currentFlight",null);E(this,"autoRotateWanted",!1);E(this,"resumeTimer");E(this,"savedPose",null);E(this,"savedMinDistance",0);E(this,"disposed",!1);E(this,"onControlsStart",()=>{this.disposed||(this.interruptFlight(),this.autoRotateWanted&&(this.controls.autoRotate=!1,this.clearResumeTimer(),this.resumeTimer=window.setTimeout(()=>{this.resumeTimer=void 0,!this.disposed&&this.autoRotateWanted&&(this.controls.autoRotate=!0)},$E)))});this.camera=e,this.controls=t,this.tween=i,this.controls.addEventListener("start",this.onControlsStart)}get autoRotate(){return this.autoRotateWanted}setAutoRotate(e,t=.6){this.disposed||(this.autoRotateWanted=e,this.controls.autoRotate=e,this.controls.autoRotateSpeed=t,this.clearResumeTimer())}setView(e,t){const i=WE[e];return this.orbitTo(i.azimuthDeg,i.elevationDeg,t)}async orbitTo(e,t,i={}){if(this.disposed)return"superseded";this.interruptFlight();const s=this.controls.target.clone(),r=new fn().setFromVector3(this.camera.position.clone().sub(s)),o=new fn(i.radius??r.radius,_t.degToRad(90-t),_t.degToRad(e)),a=_t.euclideanModulo(o.theta-r.theta+Math.PI,Math.PI*2)-Math.PI,c=this.autoRotateWanted;this.controls.autoRotate=!1;const l=new fn,u=this.tween.run(i.durationMs??xh,d=>{l.set(_t.lerp(r.radius,o.radius,d),_t.lerp(r.phi,o.phi,d),r.theta+a*d),l.makeSafe(),this.camera.position.setFromSpherical(l).add(s),this.camera.lookAt(s)});this.currentFlight=u;const h=await u.done;return this.currentFlight===u&&(this.currentFlight=null),h==="completed"&&c&&(this.controls.autoRotate=!0),h==="completed"?"completed":"superseded"}orbitSpherical(){const e=new fn().setFromVector3(this.camera.position.clone().sub(this.controls.target));return{radius:e.radius,azimuthDeg:_t.radToDeg(e.theta),elevationDeg:90-_t.radToDeg(e.phi)}}async flyTo(e,t,i,s,r={}){if(this.disposed)return"superseded";this.interruptFlight();const o=this.controls.target.clone(),a=new fn().setFromVector3(this.camera.position.clone().sub(o)),c=new fn(s,_t.degToRad(90-i),_t.degToRad(t)),l=_t.euclideanModulo(c.theta-a.theta+Math.PI,Math.PI*2)-Math.PI,u=this.autoRotateWanted;this.controls.autoRotate=!1;const h=new I,d=new fn,f=this.tween.run(r.durationMs??xh,v=>{h.lerpVectors(o,e,v),d.set(_t.lerp(a.radius,c.radius,v),_t.lerp(a.phi,c.phi,v),a.theta+l*v),d.makeSafe(),this.controls.target.copy(h),this.camera.position.setFromSpherical(d).add(h),this.camera.lookAt(h)});this.currentFlight=f;const g=await f.done;return this.currentFlight===f&&(this.currentFlight=null),g==="completed"&&u&&(this.controls.autoRotate=!0),g==="completed"?"completed":"superseded"}zoomToBox(e,t={}){const i=e.getCenter(new I),s=.5*e.getSize(new I).length(),r=_t.degToRad(this.camera.fov),o=s/Math.sin(r/2)*1.3,a=this.orbitSpherical().azimuthDeg;return this.flyTo(i,a,26,Math.max(o,this.controls.minDistance+1),t)}get roomFocused(){return this.savedPose!==null}enterRoom(e,t={}){if(this.disposed)return Promise.resolve("superseded");this.savedPose||(this.savedPose={target:this.controls.target.clone(),position:this.camera.position.clone()},this.savedMinDistance=this.controls.minDistance);const i=e.getCenter(new I),s=e.getSize(new I),r=Math.max(2,Math.max(s.x,s.z)*.5+1.5);this.controls.minDistance=Math.min(this.savedMinDistance,r*.5);const o=this.orbitSpherical().azimuthDeg;return this.flyTo(i,o,4,r,{durationMs:t.durationMs??1900})}exitRoom(e={}){if(this.disposed)return Promise.resolve("superseded");if(!this.savedPose)return Promise.resolve("completed");const t=this.savedPose;this.savedPose=null,this.controls.minDistance=this.savedMinDistance,this.savedMinDistance=0;const i=new fn().setFromVector3(t.position.clone().sub(t.target));return this.flyTo(t.target,_t.radToDeg(i.theta),90-_t.radToDeg(i.phi),i.radius,{durationMs:e.durationMs??1500})}abandonRoomFocus(){this.savedPose&&(this.savedPose=null,this.controls.minDistance=this.savedMinDistance,this.savedMinDistance=0)}dispose(){this.disposed||(this.disposed=!0,this.controls.removeEventListener("start",this.onControlsStart),this.clearResumeTimer(),this.interruptFlight(),this.controls.autoRotate=!1,this.controls.enabled=!1,this.abandonRoomFocus(),this.autoRotateWanted=!1)}clearResumeTimer(){window.clearTimeout(this.resumeTimer),this.resumeTimer=void 0}interruptFlight(){var e;(e=this.currentFlight)==null||e.cancel(),this.currentFlight=null}}class ZE{constructor(e){E(this,"modes",new Map);E(this,"active",null);E(this,"activeId",null);E(this,"updateDisposers",[]);E(this,"queue",Promise.resolve());E(this,"disposed",!1);E(this,"rooms");E(this,"floors");this.deps=e,this.rooms=e.sceneIndex.rooms.map(t=>this.buildModeRoom(t)),this.floors=e.sceneIndex.floors.map(t=>this.buildModeFloor(t)),e.timeline.setSink(t=>{var i,s;return(s=(i=this.active)==null?void 0:i.onData)==null?void 0:s.call(i,t)})}register(e){this.modes.set(e.descriptor.id,{descriptor:_a(e.descriptor),instance:e})}registerLazy(e,t){this.modes.set(e.id,{descriptor:_a(e),loader:t})}list(){return[...this.modes.values()].map(e=>_a(e.descriptor))}getActiveId(){return this.activeId}getActiveMode(){return this.active??void 0}setMode(e){if(this.disposed)return Promise.reject(new Error("ModeManager has been disposed."));if(!this.modes.has(e))return Promise.reject(new Error(`Unknown mode '${e}'`));const t=this.queue.then(()=>this.switchTo(e));return this.queue=t.catch(()=>{}),t}async dispose(){if(this.disposed)return;this.disposed=!0,this.deps.timeline.setSink(()=>{}),await this.queue.catch(()=>{});const e=this.active;this.active=null,this.activeId=null;for(const t of this.updateDisposers)t();this.updateDisposers=[],this.deps.overlay.clear(),this.deps.emitLegend(null),this.setSun(null),this.deps.setFog(null),await(e==null?void 0:e.exit())}async switchTo(e){if(this.disposed||this.activeId===e)return;const t=this.modes.get(e);if(!t)throw new Error(`Unknown mode '${e}'`);const i=await this.resolveMode(t);if(this.disposed||this.activeId===e)return;this.active&&await this.active.exit();for(const r of this.updateDisposers)r();this.updateDisposers=[],this.deps.overlay.clear(),this.deps.emitLegend(null),this.setSun(null),this.deps.setFog(null),this.active=i,this.activeId=e;const s={building:this.deps.building,overlay:this.deps.overlay,cameraDirector:this.deps.cameraDirector,rooms:this.rooms,floors:this.floors,registerUpdate:r=>{this.disposed||this.updateDisposers.push(this.deps.registerSceneUpdate(r))},getTransformRevision:()=>this.deps.sceneIndex.transformRevision,setLegend:r=>this.deps.emitLegend(r),setFog:r=>this.deps.setFog(r),setSun:(r,o=1)=>this.setSun(r,o)};if(await i.enter(s),this.disposed){await i.exit(),this.active===i&&(this.active=null,this.activeId=null);return}this.deps.timeline.refresh()}resolveMode(e){return e.instance?Promise.resolve(e.instance):e.loading?e.loading:e.loader?(e.loading=e.loader().then(t=>{if(t.descriptor.id!==e.descriptor.id)throw new Error(`Mode loader for '${e.descriptor.id}' returned '${t.descriptor.id}'.`);return e.instance=t,t}).catch(t=>{throw e.loading=void 0,t}),e.loading):Promise.reject(new Error(`Mode '${e.descriptor.id}' has no loader.`))}setSun(e,t=0){for(const i of this.deps.sceneIndex.holoMaterials())i.uniforms.uSunStrength.value=e?t:0,e&&i.uniforms.uSunDir.value.copy(e).normalize()}buildModeRoom(e){const t=this.deps.buildingIndex.info({type:"room",id:e.id}),i=e.localBounds.getCenter(new I);return{id:e.id,ref:{type:"room",id:e.id},floorId:e.floorId,zoneFunction:t.zoneFunction??"guest",name:t.name,sensors:t.sensors,worldCenter:(s=new I)=>e.mesh.localToWorld(s.copy(i)),setTint:(s,r=s?.8:0)=>{e.visual.setTint(s,r)}}}buildModeFloor(e){const t=new Xt().setFromObject(e.group);return{id:e.id,index:e.index,baseElevation:e.baseElevation,group:e.group,center:t.getCenter(new I),size:t.getSize(new I)}}}function _a(n){return{...n,channels:[...n.channels]}}class qE{constructor(e,t){E(this,"floors");E(this,"floorById",new Map);E(this,"roomById",new Map);E(this,"transformRevision_",0);E(this,"roomLod","rooms");E(this,"roomLodExceptions",new Set);this.buildingRoot=t,this.floors=[...e.entries()].map(([i,s])=>this.buildFloor(i,s)).sort((i,s)=>i.baseElevation-s.baseElevation).map((i,s)=>({...i,index:s}));for(const i of this.floors)this.floorById.set(i.id,i),this.indexRooms(i)}get rooms(){return[...this.roomById.values()]}get transformRevision(){return this.transformRevision_}markTransformsChanged(){this.transformRevision_+=1}setLowDetail(e){var t;for(const i of this.roomById.values())(t=i.edgeVisual)==null||t.setVisible(!e);for(const i of this.holoMaterials()){const s=e?Nn:rn;i.side!==s&&(i.side=s,i.needsUpdate=!0)}}setRoomLod(e){e!==this.roomLod&&(this.roomLod=e,this.applyRoomLod())}getRoomLod(){return this.roomLod}setRoomLodExceptions(e){const t=new Set(e);KE(t,this.roomLodExceptions)||(this.roomLodExceptions=t,this.applyRoomLod())}getRoomLodStats(){let e=0,t=0;for(const i of this.roomById.values())i.lodEligible&&(e+=1,i.visual.getLodVisible()||(t+=1));return{mode:this.roomLod,eligibleRooms:e,hiddenRooms:t}}getTransformStats(){let e=0,t=0;return this.buildingRoot.traverse(i=>{e+=1,i.matrixAutoUpdate||(t+=1)}),{total:e,frozen:t,dynamic:e-t}}holoMaterials(){const e=[];for(const t of this.floors)for(const i of t.ghosts)i.holo&&e.push(i.holo);return e}floor(e){return this.floorById.get(e)}room(e){return this.roomById.get(e)}boxOf(e){if(e==="building")return new Xt().setFromObject(this.buildingRoot);if(e.type==="floor"){const t=this.floorById.get(e.id);if(t)return new Xt().setFromObject(t.group)}if(e.type==="room"){const t=this.roomById.get(e.id);if(t)return t.mesh.updateWorldMatrix(!0,!1),t.localBounds.clone().applyMatrix4(t.mesh.matrixWorld)}return new Xt().setFromObject(this.buildingRoot)}buildFloor(e,t){const i=t.userData.baseElevation??t.position.y,s=[];return t.traverse(r=>{r instanceof It&&r.material instanceof wt?s.push({holo:r.material,baseOpacity:1}):r instanceof Ns&&r.material instanceof Hc?s.push({line:r.material,baseOpacity:r.material.opacity}):r instanceof Ns&&r.material instanceof wt&&s.push({opacityShader:r.material,baseOpacity:1})}),{id:e,group:t,index:0,baseElevation:i,ghosts:s}}indexRooms(e){const t=new Map,i=new Map;e.group.traverse(s=>{const r=s.userData.entityRef;if((r==null?void 0:r.type)!=="room")return;const o=s.userData.roomVisual,a=s.userData.roomLocalBounds;if(o&&a)t.set(r.id,{id:r.id,floorId:e.id,mesh:s,localBounds:a,visual:o,lodEligible:!!s.userData.roomLodEligible,edges:s.userData.roomEdges,edgeVisual:s.userData.roomEdgeVisual});else if(s instanceof It){const c=s.geometry;c.boundingBox||c.computeBoundingBox(),t.set(r.id,{id:r.id,floorId:e.id,mesh:s,localBounds:c.boundingBox.clone(),visual:jE(s),lodEligible:!!s.userData.roomLodEligible,edges:s.userData.roomEdges,edgeVisual:s.userData.roomEdgeVisual})}else s instanceof Ns&&i.set(r.id,s)});for(const[s,r]of t){const o=i.get(s);o&&(r.edges=o,r.edgeVisual=YE(o)),this.roomById.set(s,r)}}applyRoomLod(){for(const e of this.roomById.values()){const t=this.roomLod==="rooms"||!e.lodEligible||this.roomLodExceptions.has(e.id);e.visual.setLodVisible(t)}}}function YE(n){const e=n.material;return{getOpacity:()=>e.opacity,setOpacity:t=>{e.opacity=t},setScaleY:t=>{n.scale.y=t,n.matrixAutoUpdate||n.updateMatrix()},setVisible:t=>{n.visible=t}}}function jE(n){const e=n.material;return{getColor:()=>e.uniforms.uColor.value.clone(),setColor:t=>e.uniforms.uColor.value.copy(t),getIntensity:()=>e.uniforms.uIntensity.value,setIntensity:t=>{e.uniforms.uIntensity.value=t},getBase:()=>e.uniforms.uBase.value,setBase:t=>{e.uniforms.uBase.value=t},getOpacity:()=>e.uniforms.uOpacity.value,setOpacity:t=>{e.uniforms.uOpacity.value=t},setTint:(t,i=t?.8:0)=>{e.uniforms.uTintStrength.value=t?i:0,t&&e.uniforms.uTint.value.copy(t)},setScaleY:t=>{n.scale.y=t,n.matrixAutoUpdate||n.updateMatrix()},getLodVisible:()=>e.uniforms.uLodVisible.value>.5,setLodVisible:t=>{e.uniforms.uLodVisible.value=t?1:0}}}function KE(n,e){if(n.size!==e.size)return!1;for(const t of n)if(!e.has(t))return!1;return!0}const As={outcome:"noop"},Sh=5,Mh=.07,JE={"2d":.02,"2.5d":.3},zr=1e3;class QE{constructor(e,t,i,s){E(this,"state",{kind:"ASSEMBLED"});E(this,"inFlight",null);E(this,"viewChanged",null);E(this,"disposed",!1);E(this,"renderQuality","high");E(this,"floors");E(this,"rooms");E(this,"floorPosY");E(this,"floorOpacity");E(this,"roomScaleY");E(this,"H");E(this,"footprintDiag");E(this,"R0");this.sceneIndex=e,this.cameraDirector=t,this.tween=i,this.floors=e.floors,this.rooms=e.rooms,this.floorPosY=this.floors.map(o=>o.baseElevation),this.floorOpacity=this.floors.map(()=>1),this.roomScaleY=this.rooms.map(()=>1);const r=new Xt().setFromObject(s).getSize(new I);this.H=r.y,this.footprintDiag=Math.hypot(r.x,r.z),this.R0=this.footprintDiag*1.5}setViewChangedListener(e){this.viewChanged=e}getView(){return{...this.state}}setRenderQuality(e){this.renderQuality=e;for(let t=0;t<this.floors.length;t++)this.applyVisibility(this.floors[t],this.floorOpacity[t])}explode(e,t=zr){return this.state.kind==="ISOLATED"||this.state.kind==="FLATTENED"||this.state.kind==="EXPLODED"&&this.state.factor===e?Promise.resolve(As):this.run({kind:"EXPLODED",factor:e},t)}isolate(e,t=zr){return this.state.kind==="ISOLATED"&&this.state.floorId===e?Promise.resolve(As):this.run({kind:"ISOLATED",floorId:e},t)}flatten(e,t,i=zr){return this.state.kind==="FLATTENED"&&this.state.floorId===e&&this.state.style===t?Promise.resolve(As):this.run({kind:"FLATTENED",floorId:e,style:t},i)}reassemble(e=zr){return this.state.kind==="ASSEMBLED"?Promise.resolve(As):this.run({kind:"ASSEMBLED"},e)}dispose(){var e;this.disposed||(this.disposed=!0,(e=this.inFlight)==null||e.supersede(),this.inFlight=null,this.viewChanged=null)}run(e,t){var h,d;if(this.disposed)return Promise.resolve({outcome:"superseded"});(h=this.inFlight)==null||h.supersede();const i={posY:[...this.floorPosY],opacity:[...this.floorOpacity],scale:[...this.roomScaleY]},s=this.computeTargets(e);this.state=e,(d=this.viewChanged)==null||d.call(this,this.getView());let r=!1,o;const a=new Promise(f=>o=f),c=this.tween.run(t,f=>this.applyLerp(i,s,f)),l={supersede:()=>{}},u=f=>{r||(r=!0,this.inFlight===l&&(this.inFlight=null),o({outcome:f}))};return l.supersede=()=>{c.cancel(),u("superseded")},this.inFlight=l,c.done.then(f=>{f==="completed"&&u("completed")}),this.cameraDirector.flyTo(new I(0,s.camera.targetY,0),this.cameraDirector.orbitSpherical().azimuthDeg,s.camera.elevationDeg,s.camera.radius,{durationMs:t}),a}computeTargets(e){const t=this.floors.map(r=>r.baseElevation),i=this.floors.map(()=>1),s=this.rooms.map(()=>1);switch(e.kind){case"ASSEMBLED":break;case"EXPLODED":for(let r=0;r<this.floors.length;r++)t[r]=this.floors[r].baseElevation+r*Sh*e.factor;break;case"ISOLATED":this.ghostOthers(e.floorId,i);break;case"FLATTENED":this.ghostOthers(e.floorId,i);for(let r=0;r<this.rooms.length;r++)this.rooms[r].floorId===e.floorId&&(s[r]=JE[e.style]);break}return{posY:t,opacity:i,scale:s,camera:this.framingFor(e)}}ghostOthers(e,t){for(let i=0;i<this.floors.length;i++)this.floors[i].id!==e&&(t[i]=Mh)}framingFor(e){const t=this.floors.length;switch(e.kind){case"ASSEMBLED":return{targetY:this.H*.45,elevationDeg:22,radius:this.R0};case"EXPLODED":return{targetY:(this.floors[t-1].baseElevation+(t-1)*Sh*e.factor)*.5+this.H*.1,elevationDeg:18,radius:this.R0*(1+.5*e.factor)};case"ISOLATED":{const i=this.sceneIndex.floor(e.floorId);return{targetY:i?i.baseElevation+2:this.H*.45,elevationDeg:30,radius:this.footprintDiag*1.35}}case"FLATTENED":{const i=this.sceneIndex.floor(e.floorId);return{targetY:i?i.baseElevation:0,elevationDeg:88,radius:this.footprintDiag*1.25}}}}applyLerp(e,t,i){var s;for(let r=0;r<this.floors.length;r++){const o=_t.lerp(e.posY[r],t.posY[r],i);this.floorPosY[r]=o,this.floors[r].group.position.y=o;const a=_t.lerp(e.opacity[r],t.opacity[r],i);this.floorOpacity[r]=a,this.applyOpacity(this.floors[r],a)}for(let r=0;r<this.rooms.length;r++){const o=_t.lerp(e.scale[r],t.scale[r],i);this.roomScaleY[r]=o,this.rooms[r].visual.setScaleY(o),(s=this.rooms[r].edgeVisual)==null||s.setScaleY(o)}this.sceneIndex.markTransformsChanged()}applyOpacity(e,t){this.applyVisibility(e,t);for(const i of e.ghosts)i.holo?i.holo.uniforms.uOpacity.value=t:i.line?i.line.opacity=i.baseOpacity*t:i.opacityShader&&(i.opacityShader.uniforms.uOpacity.value=t)}applyVisibility(e,t){e.group.visible=!(this.renderQuality==="low"&&t<=Mh)}}const eT=new Ve("#ff9a3c"),tT=1.6,nT=.06,iT=.9;class sT{constructor(e){E(this,"selected",null);E(this,"restore",null);this.sceneIndex=e}get current(){return this.selected?{...this.selected}:null}select(e){var c,l;this.clearHighlight();const t=this.sceneIndex.room(e.id);if(!t)return!1;const i=t.visual,s=i.getColor(),r=i.getIntensity(),o=i.getBase(),a=(c=t.edgeVisual)==null?void 0:c.getOpacity();return i.setColor(eT),i.setIntensity(tT),i.setBase(nT),(l=t.edgeVisual)==null||l.setOpacity(iT),this.restore=()=>{var u;i.setColor(s),i.setIntensity(r),i.setBase(o),a!==void 0&&((u=t.edgeVisual)==null||u.setOpacity(a))},this.selected={...e},!0}clear(){const e=this.selected!==null;return this.clearHighlight(),this.selected=null,e}clearHighlight(){var e;(e=this.restore)==null||e.call(this),this.restore=null}}const rT=25;class oT{constructor(e,t,i,s){E(this,"raycaster",new Jy);E(this,"downX",0);E(this,"downY",0);E(this,"onPick");E(this,"disposed",!1);E(this,"onDown",e=>{this.disposed||(this.downX=e.clientX,this.downY=e.clientY)});E(this,"onUp",e=>{var s;if(this.disposed)return;const t=e.clientX-this.downX,i=e.clientY-this.downY;t*t+i*i>rT||(s=this.onPick)==null||s.call(this,this.pickAtNdc(this.ndcFor(e.clientX,e.clientY)))});this.camera=e,this.dom=t,this.root=i,this.onPick=s,this.dom.addEventListener("pointerdown",this.onDown),this.dom.addEventListener("pointerup",this.onUp)}dispose(){this.disposed||(this.disposed=!0,this.dom.removeEventListener("pointerdown",this.onDown),this.dom.removeEventListener("pointerup",this.onUp),this.onPick=null)}pickAtNdc(e){if(this.disposed)return null;this.raycaster.setFromCamera(e,this.camera);for(const t of this.raycaster.intersectObject(this.root,!0)){const i=aT(t.object,t.instanceId);if(i)return i}return null}ndcFor(e,t){const i=this.dom.getBoundingClientRect();return new se((e-i.left)/i.width*2-1,-((t-i.top)/i.height)*2+1)}}function aT(n,e){if(e!==void 0){const i=n.userData.instanceRoomRefs,s=i==null?void 0:i[e];if((s==null?void 0:s.type)==="room")return{...s}}let t=n;for(;t;){const i=t.userData.entityRef;if(i&&i.type==="room")return i;t=t.parent}return null}function Kn(n,e){const t=e.map(s=>({...s})),i=new Map(t.map(s=>[s.deviceId,s]));return{time:n,readings:t,value:s=>{var r;return(r=i.get(s))==null?void 0:r.value},reading:s=>{const r=i.get(s);return r?{...r}:void 0}}}class cT{constructor(e){E(this,"frames");E(this,"head",0);E(this,"count",0);const t=Number.isFinite(e)?Math.max(0,Math.floor(e)):0;this.frames=new Array(t)}push(e){if(this.frames.length===0)return;const t=(this.head+this.count)%this.frames.length;this.frames[t]=e,this.count<this.frames.length?this.count+=1:this.head=(this.head+1)%this.frames.length}get size(){return this.count}span(){return this.count===0?null:{from:this.frameAt(0).time,to:this.frameAt(this.count-1).time}}nearest(e){if(this.count===0)return null;let t=0,i=this.count-1;for(;t<i;){const o=t+i>>1;this.frameAt(o).time<e?t=o+1:i=o}const s=this.frameAt(t),r=t>0?this.frameAt(t-1):void 0;return r&&Math.abs(r.time-e)<=Math.abs(s.time-e)?r:s}frameAt(e){return this.frames[(this.head+e)%this.frames.length]}}const lT=3e4;class uT{constructor(e=[],t={}){E(this,"definitions",new Map);E(this,"latest",new Map);E(this,"rejectedUpdates",0);E(this,"lastFrameAt",null);E(this,"now");E(this,"defaultStaleAfterMs");this.now=t.now??Date.now,this.defaultStaleAfterMs=bh(t.staleAfterMs,lT);for(const i of e)this.definitions.set(i.deviceId,{channel:i.channel,unit:i.unit,staleAfterMs:bh(i.staleAfterMs,this.defaultStaleAfterMs)})}ingest(e,t=this.now()){for(const i of e.readings)this.accept(i,e.time,t);return this.lastFrameAt=this.lastFrameAt===null?e.time:Math.max(this.lastFrameAt,e.time),this.snapshot(e.time,t)}snapshot(e=this.lastFrameAt??this.now(),t=this.now()){const i=[...this.latest.values()].map(s=>{const r=this.definitions.get(s.deviceId),o=(r==null?void 0:r.staleAfterMs)??this.defaultStaleAfterMs,a=s.receivedAt??t,c=t-a>o?"stale":s.quality??"good";return{...s,quality:c}});return Kn(e,i)}hasReadings(){return this.latest.size>0}diagnostics(e=this.now()){let t=0,i=0;for(const o of this.latest.values()){const a=this.definitions.get(o.deviceId),c=(a==null?void 0:a.staleAfterMs)??this.defaultStaleAfterMs,l=o.receivedAt??e,u=e-l>c?"stale":o.quality??"good";u==="stale"?t+=1:(u==="bad"||u==="uncertain"||u==="unknown")&&(i+=1)}const s=this.definitions.size;let r=this.latest.size;if(s>0){r=0;for(const o of this.definitions.keys())this.latest.has(o)&&(r+=1)}return{expectedPoints:s,presentPoints:r,missingPoints:Math.max(0,s-r),stalePoints:t,badPoints:i,rejectedUpdates:this.rejectedUpdates,lastFrameAt:this.lastFrameAt}}accept(e,t,i){if(!Number.isFinite(e.value)){this.rejectedUpdates+=1;return}const s=this.definitions.get(e.deviceId);if(s&&s.channel!==e.channel){this.rejectedUpdates+=1;return}const r=wh(e.observedAt,t),o=wh(e.receivedAt,i),a=this.latest.get(e.deviceId);if(a&&hT(e,r,a)){this.rejectedUpdates+=1;return}const c=dT(e.quality);this.latest.set(e.deviceId,{...e,unit:(s==null?void 0:s.unit)===e.unit||!s?e.unit:s.unit,observedAt:r,receivedAt:o,quality:s&&s.unit!==e.unit?"bad":c})}}function hT(n,e,t){return(n.sourceId??"")===(t.sourceId??"")&&n.sequence!==void 0&&t.sequence!==void 0&&n.sequence<=t.sequence?!0:e<(t.observedAt??Number.NEGATIVE_INFINITY)}function dT(n){return n??"good"}function bh(n,e){return n!==void 0&&Number.isFinite(n)&&n>0?n:e}function wh(n,e){return n!==void 0&&Number.isFinite(n)?n:e}const fT=6e4,pT=1440,mT=6e4,Br=["temperature","humidity","lux","power","occupancy"],Vr=250,gT=1e-6,vT=250;class _T{constructor(e,t=Date.now()){E(this,"mode","live");E(this,"playbackSpeed",1);E(this,"buffer",new cT(pT));E(this,"simTime");E(this,"lastLiveFrameTime",null);E(this,"lastRealMs",performance.now());E(this,"lastSampleRealMs",Number.NEGATIVE_INFINITY);E(this,"lastBufferedSim",null);E(this,"scrubTime",0);E(this,"sink",null);E(this,"frameListeners",new Set);E(this,"liveFrameListeners",new Set);E(this,"onChange",null);E(this,"snapshotPort");E(this,"historyPort");E(this,"pushProvider",null);E(this,"asyncProvider",null);E(this,"offPushFrame",null);E(this,"sourceStatusPort",null);E(this,"offSourceStatus",null);E(this,"sourceStatusListeners",new Set);E(this,"lastPublishedSourceStatus","");E(this,"lastSourceStatusCheckAt",Number.NEGATIVE_INFINITY);E(this,"telemetryStore",null);E(this,"now");E(this,"performanceSamples",[]);E(this,"pullInFlight",!1);E(this,"liveGeneration",0);E(this,"requestSerial",0);E(this,"disposed",!1);var r;const i=xT(e),s=typeof t=="number"?{startTime:t}:t;this.snapshotPort=i.snapshot,this.historyPort=i.history,this.now=s.now??Date.now,this.simTime=s.startTime??this.now(),this.sourceStatusPort=i.status??null,this.offSourceStatus=((r=i.status)==null?void 0:r.onStatus(()=>this.publishSourceStatus(!0)))??null,i.stream?(this.pushProvider=i.stream,this.telemetryStore=new uT(s.points,{staleAfterMs:s.staleAfterMs,now:this.now}),this.offPushFrame=i.stream.onFrame(o=>this.receiveLiveFrame(o)),i.stream.connect()):i.asyncSnapshot&&(this.asyncProvider=i.asyncSnapshot)}setSink(e){this.sink=e}addFrameListener(e){return this.frameListeners.add(e),()=>this.frameListeners.delete(e)}addLiveFrameListener(e){return this.liveFrameListeners.add(e),()=>this.liveFrameListeners.delete(e)}deliver(e){var t;(t=this.sink)==null||t.call(this,e);for(const i of this.frameListeners)i(e)}setChangeListener(e){this.onChange=e}getState(){return{mode:this.mode,time:this.currentTime(),playbackSpeed:this.playbackSpeed}}getSourceStatus(){var r,o,a;const e=((r=this.sourceStatusPort)==null?void 0:r.status())??{sourceId:this.pushProvider?"live-telemetry":"simulation",kind:this.pushProvider?"custom":"simulation",state:this.pushProvider?(o=this.telemetryStore)!=null&&o.hasReadings()?"live":"connecting":"live",label:this.pushProvider?"Live telemetry":"Simulated data",lastMessageAt:null,stalePoints:0},t=(a=this.telemetryStore)==null?void 0:a.diagnostics(this.now());if(!t||e.state!=="live")return{...e};const i=t.missingPoints+t.stalePoints+t.badPoints,s=i===0?e.state:t.expectedPoints>0&&i>=t.expectedPoints?"stale":"degraded";return{...e,state:s,stalePoints:i,message:i>0?`${i} telemetry point${i===1?"":"s"} unavailable or stale.`:e.message}}onSourceStatus(e){return this.sourceStatusListeners.add(e),()=>this.sourceStatusListeners.delete(e)}getPerformanceStats(){var l,u;const e=performance.now();this.trimPerformanceSamples(e);const t=this.performanceSamples,i=t.length>1?Math.max(1e3,e-t[0].at):1e3,s=t.filter(h=>h.source!=="push").length,r=t.filter(h=>h.source==="worker").length,o=t.filter(h=>h.source==="push").length,a=t.reduce((h,d)=>h+d.readings,0),c=t.filter(h=>h.source!=="push");return{pullFrames:s,workerFrames:r,pushFrames:o,samplingMode:this.pushProvider?"push":((l=this.asyncProvider)==null?void 0:l.executionMode())??"main",sampleInFlight:this.pullInFlight,samplesPerSecond:t.length*1e3/i,readingsPerSecond:a*1e3/i,averageSampleMs:c.length?c.reduce((h,d)=>h+d.sampleMs,0)/c.length:0,lastFrameReadings:((u=t.at(-1))==null?void 0:u.readings)??0}}currentTime(){return this.mode==="scrub"?this.scrubTime:this.simTime}setPlaybackSpeed(e){this.playbackSpeed=e,this.emit()}setTimeRange(e){this.liveGeneration+=1,e==="live"?(this.mode="live",this.lastRealMs=performance.now(),this.lastSampleRealMs=Number.NEGATIVE_INFINITY):(this.mode="scrub",this.scrubTime=yT(e.to)),this.emit()}tick(e=performance.now()){if(this.mode==="live"){if(this.pushProvider){this.publishSourceStatus();return}const t=Math.min(Math.max(0,e-this.lastRealMs),vT);if(this.lastRealMs=e,this.simTime+=t/1e3*fT*this.playbackSpeed,e-this.lastSampleRealMs<Vr-gT||this.asyncProvider&&this.pullInFlight)return;this.advanceSampleDeadline(e);const i=performance.now();if(this.asyncProvider)this.sampleLiveAsync(this.asyncProvider,this.simTime,i);else{const s=this.snapshotPort.sample(Br,this.simTime);this.acceptLivePullFrame(s,"pull",performance.now()-i)}}}emit(){var t;const e=this.frameAt(this.currentTime());this.deliver(e),(t=this.onChange)==null||t.call(this,this.getState(),e)}frameAt(e){var i;const t=this.buffer.span();if(this.mode==="scrub"&&t&&e>=t.from&&e<=t.to){const s=this.buffer.nearest(e);if(s)return s}return this.pushProvider&&((i=this.telemetryStore)!=null&&i.hasReadings())?this.telemetryStore.snapshot(e,this.now()):this.snapshotPort.sample(Br,e)}refresh(){this.emit()}currentFrame(){return this.frameAt(this.currentTime())}history(e,t=48,i){const s=this.currentTime(),r=s-e*36e5,o=Math.max(6e4,(s-r)/t);return this.historyPort.query(Br,{from:r,to:s},o,i)}bufferSpan(){return this.buffer.span()}dispose(){var e,t;this.disposed=!0,this.liveGeneration+=1,(e=this.offPushFrame)==null||e.call(this),this.offPushFrame=null,(t=this.offSourceStatus)==null||t.call(this),this.offSourceStatus=null,this.pushProvider=null,this.asyncProvider=null,this.pullInFlight=!1,this.performanceSamples=[],this.frameListeners.clear(),this.liveFrameListeners.clear(),this.sourceStatusListeners.clear(),this.sink=null,this.onChange=null}receiveLiveFrame(e){var r,o;const t=((r=this.telemetryStore)==null?void 0:r.ingest(e,this.now()))??e;this.recordPerformanceSample(t,"push",0);const i=this.lastLiveFrameTime===null?t.time:Math.max(this.lastLiveFrameTime,t.time);this.lastLiveFrameTime=i,this.simTime=i;const s=t.time===i?t:Kn(i,t.readings);if(this.bufferFrame(s),this.publishSourceStatus(!0),this.mode==="live"){this.deliver(s);for(const a of this.liveFrameListeners)a(s);(o=this.onChange)==null||o.call(this,this.getState(),s)}}sampleLiveAsync(e,t,i){const s=this.liveGeneration,r=++this.requestSerial;this.pullInFlight=!0,e.sampleAsync(Br,t).then(o=>{if(this.disposed||s!==this.liveGeneration||this.mode!=="live")return;const a=e.executionMode()==="worker"?"worker":"pull";this.acceptLivePullFrame(o,a,performance.now()-i)}).catch(()=>{this.lastSampleRealMs=Number.NEGATIVE_INFINITY}).finally(()=>{r===this.requestSerial&&(this.pullInFlight=!1)})}acceptLivePullFrame(e,t,i){this.recordPerformanceSample(e,t,i),this.bufferFrame(e),this.deliver(e);for(const s of this.liveFrameListeners)s(e)}advanceSampleDeadline(e){if(!Number.isFinite(this.lastSampleRealMs)){this.lastSampleRealMs=e;return}this.lastSampleRealMs+=Vr,e-this.lastSampleRealMs>Vr*2&&(this.lastSampleRealMs=e)}bufferFrame(e){this.lastBufferedSim!==null&&e.time-this.lastBufferedSim<mT||(this.buffer.push(e),this.lastBufferedSim=e.time)}recordPerformanceSample(e,t,i){const s=performance.now();this.performanceSamples.push({at:s,readings:e.readings.length,sampleMs:i,source:t}),this.trimPerformanceSamples(s)}trimPerformanceSamples(e){var i;const t=e-5e3;for(;((i=this.performanceSamples[0])==null?void 0:i.at)<t;)this.performanceSamples.shift()}publishSourceStatus(e=!1){const t=this.now();if(!e&&t-this.lastSourceStatusCheckAt<Vr)return;this.lastSourceStatusCheckAt=t;const i=this.getSourceStatus(),s=JSON.stringify(i);if(s!==this.lastPublishedSourceStatus){this.lastPublishedSourceStatus=s;for(const r of this.sourceStatusListeners)r({...i})}}}function yT(n){return typeof n=="number"?n:n instanceof Date?n.getTime():new Date(n).getTime()}function xT(n){if("snapshot"in n&&"history"in n)return n;const e=typeof n.connect=="function"&&typeof n.dispose=="function"&&typeof n.onFrame=="function"?{connect:()=>n.connect(),dispose:()=>n.dispose(),onFrame:i=>n.onFrame(i)}:void 0,t=typeof n.sampleAsync=="function"?{sampleAsync:(i,s)=>n.sampleAsync(i,s),executionMode:()=>{var i,s;return((i=n.executionMode)==null?void 0:i.call(n))??((s=n.getExecutionMode)==null?void 0:s.call(n))??"main"}}:void 0;return{snapshot:n,history:n,stream:e,asyncSnapshot:t,status:typeof n.status=="function"&&typeof n.onStatus=="function"?{status:()=>n.status(),onStatus:i=>n.onStatus(i)}:void 0}}const hs=[18,28];function al(n){switch(n){case"guest":return["light","hvac","blind"];case"lobby":case"amenity":return["light","hvac"];case"corridor":return["light"];case"plant":return[]}}function zf(n){return{light:al(n).includes("light"),hvacSetpoint:24,blind:0}}class ST{constructor(e){E(this,"entries",new Map);E(this,"listeners",new Set);E(this,"batchListeners",new Set);E(this,"batchDepth",0);E(this,"pendingChanges",[]);for(const t of e.floors)for(const i of t.zones){const s=al(i.function);if(s.length!==0)for(const r of i.rooms)this.entries.set(r.id,{roomId:r.id,kinds:s,state:zf(i.function)})}}onChange(e){return this.listeners.add(e),()=>this.listeners.delete(e)}onBatch(e){return this.batchListeners.add(e),()=>this.batchListeners.delete(e)}batch(e){this.batchDepth+=1;try{return e()}finally{if(this.batchDepth-=1,this.batchDepth===0&&this.pendingChanges.length>0){const t=this.pendingChanges.splice(0);this.emitBatch(t)}}}has(e){return this.entries.has(e)}get(e){const t=this.entries.get(e);return t?ci(t):void 0}list(){return[...this.entries.values()].map(ci)}supports(e,t){var i;return((i=this.entries.get(e))==null?void 0:i.kinds.includes(t))??!1}set(e,t,i,s="local"){const r=this.entries.get(e),o=ya(r,t);if(t==="light"?r.state.light=!!i:t==="hvac"?r.state.hvacSetpoint=Eh(Number(i),hs[0],hs[1]):r.state.blind=Eh(Number(i),0,1),ya(r,t)===o)return ci(r);const a=ya(r,t),c={roomId:e,kind:t,value:a,origin:s};for(const l of this.listeners)l(ci(r),{...c});return this.batchDepth>0?this.pendingChanges.push(c):this.emitBatch([c]),ci(r)}emitBatch(e){if(e.length===0)return;const i=[...new Set(e.map(s=>s.roomId))].map(s=>this.entries.get(s)).filter(s=>s!==void 0).map(ci);for(const s of this.batchListeners)s({entries:i.map(ci),changes:e.map(r=>({...r}))})}}function ci(n){return{roomId:n.roomId,kinds:[...n.kinds],state:{...n.state}}}function Eh(n,e,t){return n<e?e:n>t?t:n}function ya(n,e){return e==="light"?n.state.light:e==="hvac"?n.state.hvacSetpoint:n.state.blind}class MT{constructor(e,t,i=Date.now){E(this,"listeners",new Set);E(this,"sequence",0);E(this,"pending",new Set);E(this,"offState");E(this,"disposed",!1);this.controls=e,this.port=t,this.now=i,this.offState=t.onState(s=>this.reconcile(s))}onProgress(e){return this.listeners.add(e),()=>this.listeners.delete(e)}async execute(e,t){const i=this.requireEntry(e.roomId,e.kind);if(Vi(i,e.kind)===e.value)return{entry:i,changed:!1,result:{commandId:this.nextCommandId(),roomId:e.roomId,kind:e.kind,value:e.value,outcome:"confirmed",confirmedAt:this.now()}};const s=this.command(e);this.emit(s,"pending");const r=await this.port.execute(s,t);let o=this.controls.get(e.roomId),a=!1;return r.outcome==="confirmed"&&(o=this.controls.set(e.roomId,e.kind,r.value,"remote"),a=Vi(i,e.kind)!==Vi(o,e.kind)),this.emit(s,r.outcome,r),{entry:o,changed:a,result:{...r}}}async executeBatch(e,t){const i=[];for(const c of e){const l=this.requireEntry(c.roomId,c.kind);if(Vi(l,c.kind)===c.value){i.push({request:c,before:l,result:{commandId:this.nextCommandId(),roomId:c.roomId,kind:c.kind,value:c.value,outcome:"confirmed",confirmedAt:this.now()}});continue}const u=this.command(c);i.push({request:c,before:l,command:u}),this.emit(u,"pending")}const s=i.filter(c=>c.command!==void 0),r=await bT(s,8,async c=>this.port.execute(c.command,t));for(let c=0;c<s.length;c+=1)s[c].result=r[c];const o=[];this.controls.batch(()=>{for(const c of i){const l=c.result;let u=this.controls.get(c.request.roomId),h=!1;l.outcome==="confirmed"&&(u=this.controls.set(c.request.roomId,c.request.kind,l.value,"remote"),h=Vi(c.before,c.request.kind)!==Vi(u,c.request.kind)),o.push({entry:u,changed:h,result:{...l}}),c.command&&this.emit(c.command,l.outcome,l)}});const a=[...new Set(o.filter(c=>c.changed).map(c=>c.entry.roomId))];return{results:o,changedRoomIds:a,changed:o.filter(c=>c.changed).length,rejected:o.filter(c=>c.result.outcome!=="confirmed").length}}pendingCount(){return this.pending.size}dispose(){this.disposed||(this.disposed=!0,this.offState(),this.listeners.clear())}reconcile(e){this.disposed||!this.controls.supports(e.roomId,e.kind)||this.controls.set(e.roomId,e.kind,e.value,"remote")}command(e){return{commandId:this.nextCommandId(),roomId:e.roomId,kind:e.kind,value:e.value,requestedAt:this.now(),actor:e.actor,reason:e.reason,force:e.force,expiresAt:e.expiresAt}}requireEntry(e,t){const i=this.controls.get(e);if(!i||!i.kinds.includes(t))throw new Error(`Room '${e}' has no ${t} control.`);return i}nextCommandId(){return`actuation-${this.now()}-${++this.sequence}`}emit(e,t,i){const s={commandId:e.commandId,roomId:e.roomId,kind:e.kind,value:e.value,state:t,code:i==null?void 0:i.code,message:i==null?void 0:i.message};t==="pending"?this.pending.add(e.commandId):this.pending.delete(e.commandId);for(const r of this.listeners)r({...s})}}async function bT(n,e,t){const i=new Array(n.length);let s=0;const r=async()=>{for(;s<n.length;){const o=s++;i[o]=await t(n[o])}};return await Promise.all(Array.from({length:Math.min(e,n.length)},()=>r())),i}function Vi(n,e){return e==="light"?n.state.light:e==="hvac"?n.state.hvacSetpoint:n.state.blind}const f1=[{id:"guest-light-trim",label:"Guest light trim",hint:"Turn off guest-room lighting; public and corridor lights stay on."},{id:"hvac-eco",label:"HVAC eco +2°",hint:"Raise HVAC targets to 26°C where lower."},{id:"solar-shade",label:"Solar shade",hint:"Close guest-room blinds to reduce daytime cooling load."},{id:"restore-comfort",label:"Restore comfort",hint:"Return controllable rooms to their default light, HVAC, and blind settings."}];class wT{constructor(e,t){E(this,"rooms",[]);var i;this.controls=t;for(const s of e.floors)for(const r of s.zones)for(const o of r.rooms)this.rooms.push({roomId:o.id,roomName:o.name,floorId:s.id,floorName:s.name,zoneId:r.id,zoneName:r.name,zoneFunction:r.function,powerDeviceId:(i=o.sensors.find(a=>a.channel==="power"))==null?void 0:i.deviceId})}summary(e,t){const i=new Map,s=new Map,r=[];let o=0,a=0,c=0;for(const u of this.scopedRooms(t)){if(!u.powerDeviceId)continue;const h=i.get(u.floorId)??{floorId:u.floorId,name:u.floorName,totalKw:0,meteredRooms:0,availableMeters:0,unavailableMeters:0};h.meteredRooms+=1,i.set(u.floorId,h);const d=s.get(u.zoneId)??{zoneId:u.zoneId,name:u.zoneName,function:u.zoneFunction,totalKw:0,availableMeters:0,unavailableMeters:0};s.set(u.zoneId,d);const f=e.reading(u.powerDeviceId);if(!f||f.quality!==void 0&&f.quality!=="good"){c+=1,h.unavailableMeters+=1,d.unavailableMeters+=1;continue}const g=Hr(f.value);o+=g,a+=1,h.availableMeters+=1,h.totalKw+=g,d.availableMeters+=1,d.totalKw+=g,r.push({roomId:u.roomId,roomName:u.roomName,floorId:u.floorId,floorName:u.floorName,zoneName:u.zoneName,kw:g})}const l=this.scopedControls(t);return{time:e.time,totalKw:Hr(o),availableMeters:a,unavailableMeters:c,controllableRooms:l.length,activeLights:l.filter(u=>u.kinds.includes("light")&&u.state.light).length,byFloor:[...i.values()].map(u=>({...u,totalKw:Hr(u.totalKw)})).sort((u,h)=>u.floorId.localeCompare(h.floorId)),byZone:[...s.values()].map(u=>({...u,totalKw:Hr(u.totalKw)})).sort((u,h)=>h.totalKw-u.totalKw),topLoads:r.sort((u,h)=>h.kw-u.kw).slice(0,6)}}plan(e,t){const i=[],s=(r,o,a)=>{!r.kinds.includes(o)||ET(r,o,a)||i.push({roomId:r.roomId,kind:o,value:a,actor:"operator",reason:`Power action: ${e}`})};for(const r of this.scopedControls(t)){const o=this.roomById(r.roomId);if(o)switch(e){case"guest-light-trim":o.zoneFunction==="guest"&&s(r,"light",!1);break;case"hvac-eco":o.zoneFunction!=="corridor"&&o.zoneFunction!=="plant"&&s(r,"hvac",Math.max(r.state.hvacSetpoint,26));break;case"solar-shade":o.zoneFunction==="guest"&&s(r,"blind",1);break;case"restore-comfort":{const a=zf(o.zoneFunction);s(r,"light",a.light),s(r,"hvac",a.hvacSetpoint),s(r,"blind",a.blind);break}}}return{action:e,floorId:t,changes:i}}scopedRooms(e){return e?this.rooms.filter(t=>t.floorId===e):this.rooms}scopedControls(e){return this.controls.list().filter(t=>{var i;return!e||((i=this.roomById(t.roomId))==null?void 0:i.floorId)===e})}roomById(e){return this.rooms.find(t=>t.roomId===e)}}function ET(n,e,t){return e==="light"?n.state.light===!!t:e==="hvac"?n.state.hvacSetpoint===Number(t):n.state.blind===Number(t)}function Hr(n){return Math.round(n*100)/100}const Bf=[{id:"temp-high",channel:"temperature",op:">",threshold:29,severity:"warning",label:"High temperature"},{id:"power-spike",channel:"power",op:">",threshold:5,severity:"critical",label:"Power spike"},{id:"crowding",channel:"occupancy",op:">",threshold:3,severity:"warning",label:"High occupancy"}],Th=.08;class TT{constructor(e,t=Bf){E(this,"rules",new Map);E(this,"active",new Map);E(this,"devices",[]);for(const i of e.floors)for(const s of i.zones)for(const r of s.rooms)for(const o of r.sensors)this.devices.push({deviceId:o.deviceId,channel:o.channel,unit:o.unit,roomId:r.id,roomName:r.name,zoneFn:s.function});for(const i of t)this.rules.set(i.id,{...i})}setRule(e){this.rules.set(e.id,{...e})}clearRule(e){const t=this.rules.delete(e),i=[];for(const s of[...this.active.values()])s.ruleId===e&&(this.active.delete(s.key),i.push({...s}));return{removed:t,cleared:i}}replaceRules(e){const t=new Map(e.map(s=>[s.id,{...s}])),i=[];for(const s of[...this.active.values()])t.has(s.ruleId)||(this.active.delete(s.key),i.push({...s}));return this.rules=t,i}listRules(){return[...this.rules.values()].map(e=>({...e}))}activeAlarms(){return[...this.active.values()].map(e=>({...e}))}alarmingRooms(){const e=new Map;for(const t of this.active.values())(t.severity==="critical"||!e.has(t.roomId))&&e.set(t.roomId,t.severity);return e}evaluate(e){const t=[],i=[],s=new Set;for(const r of this.rules.values())for(const o of this.devices){if(o.channel!==r.channel||r.zoneFunction&&o.zoneFn!==r.zoneFunction)continue;const a=`${r.id}|${o.roomId}`,c=this.active.get(a),l=e.reading(o.deviceId),u=l==null?void 0:l.value;if(u==null||(l==null?void 0:l.quality)==="bad"||(l==null?void 0:l.quality)==="uncertain"||(l==null?void 0:l.quality)==="stale"||(l==null?void 0:l.quality)==="unknown"){c&&s.add(a);continue}const h=c?r.threshold*(r.op===">"?1-Th:1+Th):r.threshold;if(!(r.op===">"?u>h:u<h))continue;if(s.add(a),c){c.value=u;continue}const f={key:a,ruleId:r.id,roomId:o.roomId,roomName:o.roomName,channel:o.channel,value:u,threshold:r.threshold,severity:r.severity,label:r.label,unit:o.unit,since:e.time};this.active.set(a,f),t.push({...f})}for(const[r,o]of[...this.active])s.has(r)||(this.active.delete(r),i.push({...o}));return{raised:t,cleared:i}}reconcile(e){const t=new Map(e.map(r=>[r.key,{...r}])),i=[],s=[];for(const r of t.values())this.active.has(r.key)||i.push({...r});for(const r of this.active.values())t.has(r.key)||s.push({...r});return this.active=t,{raised:i,cleared:s}}}class RT{constructor(e){E(this,"evaluator");E(this,"onRaiseCb",null);E(this,"onClearCb",null);E(this,"onBatchCb",null);E(this,"ruleListeners",new Set);E(this,"revision_",0);this.evaluator=new TT(e)}onAlarm(e,t,i){this.onRaiseCb=e,this.onClearCb=t,this.onBatchCb=i??null}onRulesChanged(e){return this.ruleListeners.add(e),()=>this.ruleListeners.delete(e)}setRule(e){this.evaluator.setRule(e),this.emitRules()}clearRule(e){const t=this.evaluator.clearRule(e);return this.applyTransitions({raised:[],cleared:t.cleared}),t.removed&&this.emitRules(),t.removed}listRules(){return this.evaluator.listRules()}activeAlarms(){return this.evaluator.activeAlarms()}get revision(){return this.revision_}alarmingRooms(){return this.evaluator.alarmingRooms()}evaluate(e){this.applyTransitions(this.evaluator.evaluate(e))}reconcileSnapshot(e){this.applyTransitions(this.evaluator.reconcile(e))}applyTransitions(e){var t,i,s;for(const r of e.raised)this.revision_+=1,(t=this.onRaiseCb)==null||t.call(this,{...r});for(const r of e.cleared)this.revision_+=1,(i=this.onClearCb)==null||i.call(this,{...r});(e.raised.length>0||e.cleared.length>0)&&((s=this.onBatchCb)==null||s.call(this,{raised:e.raised.map(r=>({...r})),cleared:e.cleared.map(r=>({...r}))}))}emitRules(){const e=this.listRules();for(const t of this.ruleListeners)t(e)}}const AT=1440*60*1e3,xa=30*AT,Rh={none:0,supervisor:1,emergency:2};class $i extends Error{constructor(e,t,i){super(t),this.code=e,this.hint=i,this.name="IncidentServiceError"}}class CT{constructor(e,t=Date.now){E(this,"incidents",new Map);E(this,"unresolvedByAlarm",new Map);E(this,"coverage",new Map);E(this,"listeners",new Set);E(this,"incidentSequence",0);E(this,"activitySequence",0);E(this,"noteSequence",0);E(this,"evidenceSequence",0);E(this,"roomLocations",new Map);this.now=t,this.initializeRoomLocations(e);for(const i of e.floors)for(const s of i.zones){if(s.function==="guest")continue;const r=`CAM-${i.id}-${s.id}`;this.coverage.set(r,{cameraId:r,floorId:i.id,floorName:i.name,zoneId:s.id,zoneName:s.name,zoneFunction:s.function,provider:"synthetic-showcase",status:"online",privacy:"shared-area-only"})}}onChanged(e){return this.listeners.add(e),()=>this.listeners.delete(e)}ingestAlarmBatch(e,t){const i=new Set;for(const r of e){const o=this.unresolvedByAlarm.get(r.key),a=o?this.incidents.get(o):void 0;if(a&&a.status!=="resolved"){if(a.source.state==="cleared"){const l=this.now();a.source.state="active",a.source.value=r.value,a.source.lastChangedAt=l,a.updatedAt=l,a.timeline.push(this.activity("source-raised",l,"BMS","Alarm source raised again.")),i.add(a.id)}continue}const c=this.createFromAlarm(r);this.incidents.set(c.id,c),this.unresolvedByAlarm.set(r.key,c.id),i.add(c.id)}for(const r of t){const o=this.unresolvedByAlarm.get(r.key),a=o?this.incidents.get(o):void 0;if(!a||a.status==="resolved"||a.source.state==="cleared")continue;const c=this.now();a.source.state="cleared",a.source.value=r.value,a.source.lastChangedAt=c,a.updatedAt=c,a.timeline.push(this.activity("source-cleared",c,"BMS","Alarm source returned within its rule threshold.")),i.add(a.id)}if(i.size===0)return null;const s={reason:"alarm-sync",changedIds:[...i]};return this.emit(s),s}list(e={}){return this.purgeExpired(),[...this.incidents.values()].filter(t=>IT(t,e)).sort(PT).map(so)}get(e){this.purgeExpired();const t=this.incidents.get(e);return t?so(t):null}summary(e={}){const t=this.list({status:"unresolved",...e});return{unresolved:t.length,unacknowledged:t.filter(i=>i.status==="open").length,critical:t.filter(i=>i.severity==="critical").length,assigned:t.filter(i=>i.assignee!==null).length}}listCameraCoverage(e){return[...this.coverage.values()].filter(t=>e===void 0||t.floorId===e).sort((t,i)=>t.floorId.localeCompare(i.floorId)||t.zoneName.localeCompare(i.zoneName)).map(t=>({...t}))}acknowledge(e,t){const i=this.requireIncident(e);if(i.status!=="open")return Gr(i);const s=this.now();return i.status="acknowledged",i.acknowledgedAt=s,i.acknowledgedBy=t,i.updatedAt=s,i.timeline.push(this.activity("acknowledged",s,t,"Incident acknowledged.")),this.complete("acknowledged",i)}assign(e,t,i){const s=this.requireIncident(e);if(s.status==="resolved"||s.assignee===t)return Gr(s);const r=this.now();return s.assignee=t,s.updatedAt=r,s.timeline.push(this.activity("assigned",r,i,`Assigned to ${t}.`)),this.complete("assigned",s)}escalate(e,t,i,s){const r=this.requireIncident(e);if(r.status==="resolved"||Rh[t]<=Rh[r.escalation])return Gr(r);const o=this.now();return r.escalation=t,r.updatedAt=o,r.timeline.push(this.activity("escalated",o,i,`${FT(t)}: ${s}`)),this.complete("escalated",r)}addNote(e,t,i){const s=this.requireIncident(e),r=this.now(),o={id:this.nextId("NOTE",++this.noteSequence),author:t,text:i,createdAt:r};return s.notes.push(o),s.updatedAt=r,s.timeline.push(this.activity("note-added",r,t,i)),this.complete("note-added",s)}captureCameraEvidence(e,t,i,s){const r=this.requireIncident(e),o=this.coverage.get(t);if(!o)throw new $i("UNKNOWN_CAMERA",`No camera coverage '${t}' is authored.`,"Call listCameraCoverage for privacy-safe shared-area cameras.");if(o.floorId!==r.floorId)throw new $i("CAMERA_SCOPE_MISMATCH",`${o.zoneName} is not on ${r.floorName}.`,"Evidence must come from a shared or plant area on the incident floor.");const a=this.now(),c=this.nextId("EVID",++this.evidenceSequence),l={id:c,cameraId:t,floorId:o.floorId,zoneId:o.zoneId,zoneName:o.zoneName,capturedAt:a,capturedBy:i,note:s,mediaType:"synthetic-snapshot",snapshotToken:`${t}:${a}:${c}`,retentionPolicy:"showcase-30-days",retainUntil:a+xa};return r.evidence.push(l),r.updatedAt=a,r.timeline.push(this.activity("camera-evidence-captured",a,i,`Captured privacy-safe evidence from ${o.zoneName}.`)),this.complete("camera-evidence-captured",r)}resolve(e,t,i){const s=this.requireIncident(e);if(s.status==="resolved")return Gr(s);if(s.source.state==="active")throw new $i("SOURCE_ACTIVE","The originating alarm is still active.","Correct the condition or wait for the BMS to clear it before resolving the incident.");const r=this.now();return s.status="resolved",s.resolvedAt=r,s.resolvedBy=t,s.resolution=i,s.updatedAt=r,s.retainUntil=r+xa,s.timeline.push(this.activity("resolved",r,t,i)),this.unresolvedByAlarm.delete(s.source.alarmKey),this.complete("resolved",s)}createFromAlarm(e){const t=this.now(),i=this.findAlarmLocation(e),s={id:this.nextId("INC",++this.incidentSequence),title:e.label,severity:e.severity,status:"open",source:{kind:"alarm",alarmKey:e.key,ruleId:e.ruleId,channel:e.channel,value:e.value,threshold:e.threshold,unit:e.unit,state:"active",alarmSince:e.since,lastChangedAt:t},roomId:e.roomId,roomName:e.roomName,floorId:i.floorId,floorName:i.floorName,zoneId:i.zoneId,zoneName:i.zoneName,zoneFunction:i.zoneFunction,assignee:null,acknowledgedAt:null,acknowledgedBy:null,escalation:"none",createdAt:t,updatedAt:t,resolvedAt:null,resolvedBy:null,resolution:null,retentionPolicy:"showcase-30-days",retainUntil:t+xa,notes:[],evidence:[],timeline:[]};return s.timeline.push(this.activity("created",t,"BMS",`Created from ${e.label} in ${e.roomName}.`)),s}findAlarmLocation(e){const t=this.roomLocations.get(e.roomId);if(!t)throw new $i("UNKNOWN_ENTITY",`Alarm room '${e.roomId}' is not in the building.`);return t}requireIncident(e){const t=this.incidents.get(e);if(!t)throw new $i("UNKNOWN_INCIDENT",`No incident '${e}' exists.`,"Call listIncidents to discover current incident ids.");return t}complete(e,t){return this.emit({reason:e,changedIds:[t.id]}),{outcome:"completed",incident:so(t)}}activity(e,t,i,s){return{id:this.nextId("EVT",++this.activitySequence),type:e,at:t,actor:i,detail:s}}nextId(e,t){return`${e}-${String(t).padStart(4,"0")}`}emit(e){const t={reason:e.reason,changedIds:[...e.changedIds]};for(const i of this.listeners)i(t)}purgeExpired(){const e=this.now();for(const[t,i]of this.incidents)i.status!=="resolved"||i.retainUntil>e||this.incidents.delete(t)}initializeRoomLocations(e){for(const t of e.floors)for(const i of t.zones)for(const s of i.rooms)this.roomLocations.set(s.id,{floorId:t.id,floorName:t.name,zoneId:i.id,zoneName:i.name,zoneFunction:i.function})}}function IT(n,e){return!(e.status==="unresolved"&&n.status==="resolved"||e.status&&e.status!=="unresolved"&&n.status!==e.status||e.severity&&n.severity!==e.severity||e.floorId&&n.floorId!==e.floorId||e.roomId&&n.roomId!==e.roomId||e.sourceAlarmKey&&n.source.alarmKey!==e.sourceAlarmKey)}function PT(n,e){const t=+(n.status==="resolved")-+(e.status==="resolved");if(t!==0)return t;const i=+(e.severity==="critical")-+(n.severity==="critical");return i!==0?i:e.updatedAt-n.updatedAt||n.id.localeCompare(e.id)}function Gr(n){return{outcome:"noop",incident:so(n)}}function so(n){return{...n,source:{...n.source},notes:n.notes.map(e=>({...e})),evidence:n.evidence.map(e=>({...e})),timeline:n.timeline.map(e=>({...e}))}}function FT(n){return n==="emergency"?"Emergency escalation":"Supervisor escalation"}const Ah=1440*60*1e3;class Bt extends Error{constructor(e,t,i){super(t),this.code=e,this.hint=i,this.name="FrontDeskServiceError"}}class DT{constructor(e,t={}){E(this,"rooms",new Map);E(this,"reservations",new Map);E(this,"listeners",new Set);E(this,"sequence",0);E(this,"now");this.now=t.now??Date.now;let i=0;for(const s of e.floors)for(const r of s.zones)if(r.function==="guest")for(const o of r.rooms){const a=UT(o.name,i);this.rooms.set(o.id,{roomId:o.id,roomName:o.name,floorId:s.id,floorName:s.name,type:a,capacity:a==="suite"?4:2,readiness:"inspected"}),i+=1}t.seed!==!1&&this.seedShowcase()}onChanged(e){return this.listeners.add(e),()=>this.listeners.delete(e)}searchAvailability(e){return this.assertQuery(e),[...this.rooms.values()].map(t=>this.availabilityFor(t,e)).sort(LT)}snapshot(e=Fh(this.now()),t=e+Ah){this.assertQuery({arrivalAt:e,departureAt:t,guests:1});const i=this.searchAvailability({arrivalAt:e,departureAt:t,guests:1}),s=[...this.reservations.values()].sort(NT).map(_o),r=s.filter(l=>l.status==="reserved"&&Ph(l.arrivalAt,e,t)),o=s.filter(l=>l.status==="checked-in"&&Ph(l.departureAt,e,t)),a=s.filter(l=>l.status==="checked-in"),c=s.filter(l=>Ch(l)&&Ih(e,t,l.arrivalAt,l.departureAt));return{asOf:this.now(),range:{from:e,to:t},inventory:{total:i.length,available:i.filter(l=>l.available).length,ready:i.filter(l=>l.available&&l.readyForCheckIn).length,reserved:c.filter(l=>l.status==="reserved").length,inHouse:a.length,dirty:i.filter(l=>l.readiness==="dirty").length,outOfService:i.filter(l=>l.readiness==="out-of-service").length},rooms:i,arrivals:r,departures:o,inHouse:a,unassigned:r.filter(l=>l.roomId===null),reservations:s}}getReservation(e){const t=this.reservations.get(e);return t?_o(t):null}createReservation(e){var o;this.assertGuest(e.guestName,e.guests),this.assertQuery(e);const t=e.roomId?this.requireRoom(e.roomId):void 0;t&&this.assertAvailable(t,e);const i=this.now(),s=++this.sequence,r={id:Sa(s),confirmationCode:`HOLO-${String(s).padStart(4,"0")}`,guestName:e.guestName.trim(),guests:e.guests,arrivalAt:e.arrivalAt,departureAt:e.departureAt,roomId:(t==null?void 0:t.roomId)??null,status:"reserved",notes:((o=e.notes)==null?void 0:o.trim())||void 0,source:"operator",createdAt:i,updatedAt:i,checkedInAt:null,checkedOutAt:null};return this.reservations.set(r.id,r),this.emit("reservation-created",[r.id],t?[t.roomId]:[]),Cs(r)}assignRoom(e,t){const i=this.requireReservation(e);if(this.assertReserved(i,"assign a room"),i.roomId===t)return $r(i);const s=this.requireRoom(t);this.assertAvailable(s,i,i.id);const r=i.roomId;return i.roomId=t,i.updatedAt=this.now(),this.emit("room-assigned",[i.id],[r,t].filter(o=>o!==null)),Cs(i)}checkIn(e,t){const i=this.requireReservation(e);if(i.status==="checked-in")return $r(i);this.assertReserved(i,"check in");const s=t??i.roomId;if(!s)throw new Bt("ROOM_REQUIRED",`${i.guestName} does not have an assigned room.`,"Assign one of the available rooms before checking the guest in.");const r=this.requireRoom(s);if(this.assertAvailable(r,i,i.id),r.readiness!=="inspected")throw new Bt("ROOM_NOT_READY",`${r.roomName} is ${OT(r.readiness)} and cannot be checked into.`,"Housekeeping must mark the room inspected before check-in.");const o=i.roomId,a=this.now();return i.roomId=r.roomId,i.status="checked-in",i.checkedInAt=a,i.updatedAt=a,this.emit("guest-checked-in",[i.id],[o,r.roomId].filter((c,l,u)=>c!==null&&u.indexOf(c)===l)),Cs(i)}checkOut(e){const t=this.requireReservation(e);if(t.status==="checked-out")return $r(t);if(t.status!=="checked-in")throw new Bt("INVALID_TRANSITION",`${t.guestName} is ${t.status.replace("-"," ")} and cannot be checked out.`,"Only an in-house stay can be checked out.");const i=this.now();t.status="checked-out",t.checkedOutAt=i,t.updatedAt=i;const s=t.roomId?this.rooms.get(t.roomId):void 0;return s&&(s.readiness="dirty"),this.emit("guest-checked-out",[t.id],s?[s.roomId]:[]),Cs(t)}cancelReservation(e){const t=this.requireReservation(e);if(t.status==="cancelled")return $r(t);if(t.status!=="reserved")throw new Bt("INVALID_TRANSITION",`${t.guestName} is ${t.status.replace("-"," ")} and cannot be cancelled.`,"Check out an in-house stay instead.");return t.status="cancelled",t.updatedAt=this.now(),this.emit("reservation-cancelled",[t.id],t.roomId?[t.roomId]:[]),Cs(t)}setRoomReadiness(e,t){const i=this.requireRoom(e);if(i.readiness===t)return{outcome:"noop",room:Ec(i)};if([...this.reservations.values()].some(r=>r.status==="checked-in"&&r.roomId===e))throw new Bt("ROOM_OCCUPIED",`${i.roomName} is occupied; its housekeeping state cannot be changed.`,"Check the guest out before changing room readiness.");return i.readiness=t,this.emit("room-readiness-changed",[],[e]),{outcome:"completed",room:Ec(i)}}availabilityFor(e,t,i){if(t.guests>e.capacity)return Wr(e,!1,"capacity",null);if(e.readiness==="out-of-service")return Wr(e,!1,"out-of-service",null);const s=[...this.reservations.values()].find(r=>r.id!==i&&r.roomId===e.roomId&&Ch(r)&&(r.status==="checked-in"||Ih(t.arrivalAt,t.departureAt,r.arrivalAt,r.departureAt)));return s?Wr(e,!1,s.status==="checked-in"?"in-house":"reserved",s.id):Wr(e,!0,"available",null)}assertAvailable(e,t,i){const s=this.availabilityFor(e,t,i);if(s.available)return;const r=s.reason==="capacity"?`only accommodates ${e.capacity} guest${e.capacity===1?"":"s"}`:s.reason==="out-of-service"?"is out of service":`is already ${s.reason} for that stay`;throw new Bt("ROOM_UNAVAILABLE",`${e.roomName} ${r}.`,"Search availability again or choose another room.")}assertQuery(e){if(!Number.isFinite(e.arrivalAt)||!Number.isFinite(e.departureAt)||e.arrivalAt>=e.departureAt)throw new Bt("INVALID_STAY_RANGE","Departure must be after arrival.","Choose a valid arrival and departure date.");if(!Number.isInteger(e.guests)||e.guests<1||e.guests>6)throw new Bt("INVALID_PARTY_SIZE","Guest count must be between 1 and 6.")}assertGuest(e,t){if(!e.trim())throw new Bt("GUEST_REQUIRED","Guest name is required.");if(e.trim().length>120)throw new Bt("GUEST_NAME_TOO_LONG","Guest name is too long.");if(!Number.isInteger(t)||t<1||t>6)throw new Bt("INVALID_PARTY_SIZE","Guest count must be between 1 and 6.")}assertReserved(e,t){if(e.status!=="reserved")throw new Bt("INVALID_TRANSITION",`${e.guestName} is ${e.status.replace("-"," ")} and cannot ${t}.`,"Refresh the front desk queue to see the current stay status.")}requireRoom(e){const t=this.rooms.get(e);if(!t)throw new Bt("UNKNOWN_GUEST_ROOM",`No guest room '${e}' exists.`,"Search room availability to discover guest-room ids.");return t}requireReservation(e){const t=this.reservations.get(e);if(!t)throw new Bt("UNKNOWN_RESERVATION",`No reservation '${e}' exists.`,"Read the front desk snapshot to discover current reservation ids.");return t}emit(e,t,i){const s={reason:e,reservationIds:[...t],roomIds:[...new Set(i)]};for(const r of this.listeners)r(s)}seedShowcase(){const e=[...this.rooms.values()];if(e.length<5)return;const t=Fh(this.now()),i=(o,a)=>t+o*Ah+a*60*60*1e3,s=e.find((o,a)=>a>4&&o.capacity>=3)??e[4],r=[{guestName:"Maya Chen",guests:2,arrivalAt:i(-1,15),departureAt:i(1,11),roomId:e[0].roomId,status:"checked-in"},{guestName:"Arun Patel",guests:1,arrivalAt:i(-2,15),departureAt:i(0,11),roomId:e[1].roomId,status:"checked-in"},{guestName:"Noah Williams",guests:2,arrivalAt:i(0,15),departureAt:i(2,11),roomId:e[2].roomId,status:"reserved"},{guestName:"Sofia Rossi",guests:1,arrivalAt:i(0,17),departureAt:i(1,11),roomId:e[3].roomId,status:"reserved"},{guestName:"Lina Rahman",guests:2,arrivalAt:i(0,16),departureAt:i(2,11),roomId:null,status:"reserved"},{guestName:"Diego Silva",guests:Math.min(3,s.capacity),arrivalAt:i(1,15),departureAt:i(4,11),roomId:s.roomId,status:"reserved"}];e[3].readiness="dirty",e[e.length-1].readiness="out-of-service";for(const o of r){const a=i(-4,9)+this.sequence,c=++this.sequence;this.reservations.set(Sa(c),{id:Sa(c),confirmationCode:`HOLO-${String(c).padStart(4,"0")}`,guestName:o.guestName,guests:o.guests,arrivalAt:o.arrivalAt,departureAt:o.departureAt,roomId:o.roomId,status:o.status,source:"seeded-showcase",createdAt:a,updatedAt:a,checkedInAt:o.status==="checked-in"?o.arrivalAt:null,checkedOutAt:null})}}}function Wr(n,e,t,i){return{...Ec(n),available:e,readyForCheckIn:e&&n.readiness==="inspected",reason:t,conflictingReservationId:i}}function Cs(n){return{outcome:"completed",reservation:_o(n)}}function $r(n){return{outcome:"noop",reservation:_o(n)}}function _o(n){return{...n}}function Ec(n){return{...n}}function LT(n,e){return n.available!==e.available?n.available?-1:1:n.readyForCheckIn!==e.readyForCheckIn?n.readyForCheckIn?-1:1:n.floorId.localeCompare(e.floorId)||n.roomName.localeCompare(e.roomName,void 0,{numeric:!0})}function NT(n,e){return n.arrivalAt-e.arrivalAt||n.guestName.localeCompare(e.guestName)}function UT(n,e){var s;const t=Number((s=n.match(/\d+/))==null?void 0:s[0]),i=Number.isFinite(t)?t%100:e+1;return i===1||i===18?"suite":"standard"}function Ch(n){return n.status==="reserved"||n.status==="checked-in"}function Ih(n,e,t,i){return n<i&&t<e}function Ph(n,e,t){return n>=e&&n<t}function OT(n){return n.replaceAll("-"," ")}function Sa(n){return`RES-${String(n).padStart(4,"0")}`}function Fh(n){const e=new Date(n);return Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate())}const Dh=[{id:"morning",label:"Morning",hint:"lights up · blinds open · cool"},{id:"day",label:"Day",hint:"guest rooms dark · public lit"},{id:"evening",label:"Evening",hint:"warm · guest blinds drawn"},{id:"night",label:"Night",hint:"guest floors dark · corridors only"},{id:"away",label:"Away / Eco",hint:"everything off · setback"}];function kT(n,e){switch(n){case"morning":return{light:!0,blind:0,hvac:23};case"day":return{light:e!=="guest",blind:0,hvac:24};case"evening":return{light:!0,blind:e==="guest"?1:0,hvac:24};case"night":return{light:e==="corridor",blind:1,hvac:25};case"away":return{light:!1,blind:1,hvac:26};default:return{}}}function zT(n,e){const t=[];for(const i of e.floors)for(const s of i.zones){const r=al(s.function);if(r.length===0)continue;const o=kT(n,s.function);for(const a of s.rooms)r.includes("light")&&o.light!==void 0&&t.push({roomId:a.id,kind:"light",value:o.light}),r.includes("blind")&&o.blind!==void 0&&t.push({roomId:a.id,kind:"blind",value:o.blind}),r.includes("hvac")&&o.hvac!==void 0&&t.push({roomId:a.id,kind:"hvac",value:o.hvac})}return t}const BT=[{hour:6,scene:"morning"},{hour:10,scene:"day"},{hour:18,scene:"evening"},{hour:22,scene:"night"}];class VT{constructor(e,t,i){E(this,"lastScheduledSolarTime",null);this.building=e,this.controls=t,this.lon=i}list(){return Dh.map(e=>({...e}))}has(e){return Dh.some(t=>t.id===e)}plan(e){return zT(e,this.building).flatMap(i=>{if(!this.controls.supports(i.roomId,i.kind))return[];const s=this.controls.get(i.roomId);return!s||HT(s,i.kind)===i.value?[]:[{...i,actor:"scene",reason:`Scene: ${e}`}]})}tickSchedule(e,t){const i=e+this.lon/15*36e5;if(this.lastScheduledSolarTime===null){this.lastScheduledSolarTime=i;return}if(i<=this.lastScheduledSolarTime){this.lastScheduledSolarTime=i;return}const s=Math.floor(this.lastScheduledSolarTime/Ma),r=Math.floor(i/Ma);for(let o=s;o<=r;o+=1)for(const a of BT){const c=o*Ma+a.hour*36e5;c>this.lastScheduledSolarTime&&c<=i&&t(a.scene)}this.lastScheduledSolarTime=i}}const Ma=24*36e5;function HT(n,e){return e==="light"?n.state.light:e==="hvac"?n.state.hvacSetpoint:n.state.blind}const Lh=[{name:"reassemble",args:{durationMs:1200},hold:400},{name:"setMode",args:{mode:"default"},hold:2600},{name:"orbitTo",args:{azimuthDeg:210,elevationDeg:26},hold:900},{name:"setMode",args:{mode:"electricity"},hold:3200},{name:"explode",args:{factor:1},hold:2800},{name:"setMode",args:{mode:"environment"},hold:2800},{name:"reassemble",args:{},hold:400},{name:"setMode",args:{mode:"occupancy"},hold:2400},{name:"isolateFloor",args:{floorId:"F4"},hold:2600},{name:"enterRoom",args:{roomId:"F4-R03"},hold:3600},{name:"exitRoom",args:{},hold:1400},{name:"setMode",args:{mode:"default"},hold:400},{name:"reassemble",args:{},hold:2600}];class GT{constructor(e){E(this,"running",!1);E(this,"timer");E(this,"step",0);E(this,"onChange",null);this.ui=e}isRunning(){return this.running}onTourChanged(e){this.onChange=e}start(){var e;this.running||(this.running=!0,this.step=0,(e=this.onChange)==null||e.call(this,!0),this.advance())}stop(){var e;this.running&&(this.running=!1,window.clearTimeout(this.timer),(e=this.onChange)==null||e.call(this,!1))}async advance(){if(!this.running)return;const e=Lh[this.step%Lh.length];this.step++;try{await this.ui.call(e.name,e.args)}catch{}this.running&&(this.timer=window.setTimeout(()=>void this.advance(),e.hold))}}const WT={m4a:'audio/mp4; codecs="mp4a.40.2"',mp3:"audio/mpeg"},Tc={flyIn:Kt(new URL("/ihapm-bms-showcase/assets/focus-enter-Cyngo792.m4a",import.meta.url).href,new URL("/ihapm-bms-showcase/assets/focus-enter-CHA2knBu.mp3",import.meta.url).href,.34),flyOut:Kt(new URL("/ihapm-bms-showcase/assets/focus-exit-ComaMk49.m4a",import.meta.url).href,new URL("/ihapm-bms-showcase/assets/focus-exit-Cp-7f59g.mp3",import.meta.url).href,.32),select:Kt(new URL("/ihapm-bms-showcase/assets/select-4KXoN5tg.m4a",import.meta.url).href,new URL("/ihapm-bms-showcase/assets/select-DyBx5wkC.mp3",import.meta.url).href,.27),mode:Kt(new URL("/ihapm-bms-showcase/assets/mode-C33DsxmK.m4a",import.meta.url).href,new URL("/ihapm-bms-showcase/assets/mode-BCuJ0IgS.mp3",import.meta.url).href,.28),layoutOpen:Kt(new URL("/ihapm-bms-showcase/assets/layout-open-2YZxsSr2.m4a",import.meta.url).href,new URL("/ihapm-bms-showcase/assets/layout-open-B2S72_F6.mp3",import.meta.url).href,.36),layoutClose:Kt(new URL("/ihapm-bms-showcase/assets/layout-close-GTwBqMFy.m4a",import.meta.url).href,new URL("/ihapm-bms-showcase/assets/layout-close-ByuTsdo6.mp3",import.meta.url).href,.36),floorUp:Kt(new URL("/ihapm-bms-showcase/assets/floor-up-fj_osdh4.m4a",import.meta.url).href,new URL("/ihapm-bms-showcase/assets/floor-up-BByKoVyf.mp3",import.meta.url).href,.31),floorDown:Kt(new URL("/ihapm-bms-showcase/assets/floor-down-BmZqGydi.m4a",import.meta.url).href,new URL("/ihapm-bms-showcase/assets/floor-down-DaN5nPXw.mp3",import.meta.url).href,.31),floorPlan:Kt(new URL("/ihapm-bms-showcase/assets/floor-plan-Bum8n9bk.m4a",import.meta.url).href,new URL("/ihapm-bms-showcase/assets/floor-plan-Ho-znDLY.mp3",import.meta.url).href,.3),control:Kt(new URL("/ihapm-bms-showcase/assets/control-DvP3wdpF.m4a",import.meta.url).href,new URL("/ihapm-bms-showcase/assets/control-C3o8cOa3.mp3",import.meta.url).href,.32),reject:Kt(new URL("/ihapm-bms-showcase/assets/reject-BYbjq7W0.m4a",import.meta.url).href,new URL("/ihapm-bms-showcase/assets/reject-Df9QJbMj.mp3",import.meta.url).href,.3),alarm:Kt(new URL("/ihapm-bms-showcase/assets/alarm-DBpJChZ1.m4a",import.meta.url).href,new URL("/ihapm-bms-showcase/assets/alarm-DCFB2nb4.mp3",import.meta.url).href,.35),alarmCritical:Kt(new URL("/ihapm-bms-showcase/assets/alarm-critical-DuCLymoT.m4a",import.meta.url).href,new URL("/ihapm-bms-showcase/assets/alarm-critical-BG63f8cY.mp3",import.meta.url).href,.39)},Nh=Object.freeze(Object.keys(Tc));function $T(n){const e=i=>n(WT[i])!=="",t=[];return e("m4a")&&t.push("m4a"),(e("mp3")||t.length>0)&&t.push("mp3"),t.length===0&&t.push("mp3","m4a"),t}function Kt(n,e,t){return{m4a:n,mp3:e,gain:t}}const ba=1e-4,XT=4,ZT=700,qT={flyIn:.22,flyOut:.2,select:.09,mode:.12,layoutOpen:.18,layoutClose:.18,floorUp:.12,floorDown:.12,floorPlan:.14,control:.075,reject:.16,alarm:.6,alarmCritical:.45};class YT{constructor(){E(this,"ctx",null);E(this,"master",null);E(this,"spaceInput",null);E(this,"noiseTexture",null);E(this,"lastCueAt",new Map);E(this,"selectionTimer",null);E(this,"roomExitTimer",null);E(this,"lastView",{kind:"ASSEMBLED"});E(this,"lastFloorNumber",1);E(this,"enabled",!0);E(this,"volume",.5);E(this,"subscriptions",[]);E(this,"transientNodes",new Set);E(this,"buffers",new Map);E(this,"activeSamples",new Set);E(this,"assetAbort",null);E(this,"preferredFormats",[]);E(this,"prefetchedPack",null);E(this,"activation",null);E(this,"pendingCue",null);E(this,"loadState","idle");E(this,"format",null);E(this,"playedCues",0);E(this,"lastPlayedCue",null);E(this,"disposed",!1)}getState(){return{enabled:this.enabled,volume:this.volume}}getDiagnostics(){var e;return{contextState:((e=this.ctx)==null?void 0:e.state)??"unavailable",loadState:this.loadState,format:this.format,loadedCues:this.buffers.size,activeVoices:this.activeSamples.size,playedCues:this.playedCues,lastCue:this.lastPlayedCue}}setAudio(e){if(e.enabled!==void 0&&(this.enabled=e.enabled),e.volume!==void 0&&(this.volume=Math.max(0,Math.min(1,e.volume))),this.master&&this.ctx){const t=this.ctx.currentTime;this.master.gain.cancelScheduledValues(t),this.master.gain.setTargetAtTime(this.enabled?this.volume:0,t,.025)}return this.enabled?this.prepareSoundPack():(this.pendingCue=null,this.stopActiveSamples()),this.getState()}attach(e){this.disposed||(this.detach(),this.prepareSoundPack(),this.subscriptions.push(e.on("roomFocusChanged",({roomId:t})=>{t?(this.cancelSelection(),this.cancelRoomExit(),this.play("flyIn")):this.queueRoomExit()})),this.subscriptions.push(e.on("selectionChanged",({ref:t})=>{(t==null?void 0:t.type)==="room"?this.queueSelection():this.cancelSelection()})),this.subscriptions.push(e.on("modeChanged",()=>this.play("mode"))),this.subscriptions.push(e.on("viewChanged",({view:t})=>this.playViewChange(t))),this.subscriptions.push(e.on("controlsChanged",()=>this.play("control"))),this.subscriptions.push(e.on("commandRejected",()=>this.play("reject"))),this.subscriptions.push(e.on("alarmsChanged",({raised:t})=>{t.length!==0&&this.play(t.some(i=>i.severity==="critical")?"alarmCritical":"alarm")})))}dispose(){var t,i,s;if(this.disposed)return;this.disposed=!0,this.detach(),this.cancelSelection(),this.cancelRoomExit(),this.pendingCue=null,(t=this.assetAbort)==null||t.abort(),this.assetAbort=null,this.stopActiveSamples(),this.lastCueAt.clear(),this.releaseTransient([...this.transientNodes]),this.buffers.clear(),(i=this.master)==null||i.disconnect(),(s=this.spaceInput)==null||s.disconnect();const e=this.ctx;this.master=null,this.spaceInput=null,this.noiseTexture=null,this.ctx=null,this.loadState="disposed",e&&e.state!=="closed"&&e.close().catch(()=>{})}async unlock(){if(this.disposed||(this.prepareSoundPack(),this.ensureContext(),!this.ctx))return!0;try{return this.ctx.state==="suspended"&&await this.ctx.resume(),this.ctx.state!=="running"?!1:(this.activateSoundPack(),!0)}catch{return!1}}ensureContext(){if(this.ctx||typeof window>"u")return;const e=window.AudioContext??window.webkitAudioContext;if(!e)return;const t=new e,i=t.createGain();i.gain.setValueAtTime(this.enabled?this.volume:0,t.currentTime);const s=t.createDynamicsCompressor();s.threshold.setValueAtTime(-20,t.currentTime),s.knee.setValueAtTime(18,t.currentTime),s.ratio.setValueAtTime(8,t.currentTime),s.attack.setValueAtTime(.004,t.currentTime),s.release.setValueAtTime(.16,t.currentTime),i.connect(s).connect(t.destination);const r=t.createDelay(.32);r.delayTime.setValueAtTime(.105,t.currentTime);const o=t.createGain();o.gain.setValueAtTime(.2,t.currentTime);const a=t.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(1800,t.currentTime);const c=t.createGain();c.gain.setValueAtTime(.16,t.currentTime),r.connect(o).connect(r),r.connect(a).connect(c).connect(i),this.ctx=t,this.master=i,this.spaceInput=r}play(e,t=4){if(!this.enabled)return;if(!this.ctx){this.queuePending(e,t);return}const i=this.ctx.currentTime,s=this.lastCueAt.get(e);if(!(s!==void 0&&i-s<qT[e])){if(this.lastCueAt.set(e,i),this.ctx.state!=="running"){this.queuePending(e,t);return}if(!this.playSample(e,t,i)){if(this.loadState!=="fallback"&&this.loadState!=="disposed"){this.queuePending(e,t),this.activateSoundPack();return}this.playProcedural(e,t,i)}}}playProcedural(e,t,i){switch(e){case"flyIn":this.transition(i,"in");break;case"flyOut":this.transition(i,"out");break;case"select":this.selection(i);break;case"mode":this.modeChange(i);break;case"layoutOpen":this.layout(i,!0);break;case"layoutClose":this.layout(i,!1);break;case"floorUp":this.floorIndex(i,t,"up");break;case"floorDown":this.floorIndex(i,t,"down");break;case"floorPlan":this.floorPlan(i,t);break;case"control":this.confirmation(i);break;case"reject":this.rejection(i);break;case"alarm":this.clinicalAlert(i,!1);break;case"alarmCritical":this.clinicalAlert(i,!0);break}}prepareSoundPack(){if(this.disposed||this.prefetchedPack||typeof document>"u"||typeof fetch>"u")return;const e=document.createElement("audio");this.preferredFormats=$T(t=>e.canPlayType(t)),this.assetAbort=new AbortController,this.loadState="prefetching",this.prefetchedPack=this.fetchFirstAvailablePack(this.preferredFormats,this.assetAbort.signal).catch(()=>null)}async activateSoundPack(){if(this.disposed||this.loadState==="ready"||this.loadState==="fallback"){this.drainPendingCue();return}return this.activation?this.activation:(this.prepareSoundPack(),this.activation=this.decodeSoundPack(),this.activation)}async decodeSoundPack(){var s;if(!this.ctx||this.ctx.state==="closed")return;this.loadState="decoding";const e=new Set,t=await this.prefetchedPack,i=[t];for(const r of this.preferredFormats)if((t==null?void 0:t.format)!==r)try{i.push(await this.fetchPack(r,(s=this.assetAbort)==null?void 0:s.signal))}catch{i.push(null)}for(const r of i)if(!(!r||e.has(r.format)||this.disposed)){e.add(r.format);try{const o=await Promise.all(Nh.map(async a=>{const c=r.bytes.get(a);if(!c)throw new Error(`Missing ${a} from ${r.format} sound pack.`);const l=await this.ctx.decodeAudioData(c.slice(0));return[a,l]}));if(this.disposed)return;this.buffers=new Map(o),this.format=r.format,this.loadState="ready",this.drainPendingCue();return}catch{}}this.disposed||(this.loadState="fallback",this.drainPendingCue())}async fetchFirstAvailablePack(e,t){let i;for(const s of e)try{return await this.fetchPack(s,t)}catch(r){if(t!=null&&t.aborted)throw r;i=r}throw i??new Error("No supported cinematic audio format.")}async fetchPack(e,t){const i=await Promise.all(Nh.map(async s=>{const r=await fetch(Tc[s][e],{signal:t});if(!r.ok)throw new Error(`Unable to load ${s}.${e}: HTTP ${r.status}`);return[s,await r.arrayBuffer()]}));return{format:e,bytes:new Map(i)}}playSample(e,t,i){const s=this.ctx,r=this.buffers.get(e);if(!s||!r||!this.master)return!1;for(;this.activeSamples.size>=XT;){const l=this.activeSamples.values().next().value;if(!l)break;this.activeSamples.delete(l);try{l.stop()}catch{}}const o=s.createBufferSource(),a=s.createGain(),c=this.cueBus(.015);return o.buffer=r,o.loop=!1,o.playbackRate.setValueAtTime(this.floorPlaybackRate(e,t),i),a.gain.setValueAtTime(Tc[e].gain,i),o.connect(a).connect(c.input),this.activeSamples.add(o),this.playedCues+=1,this.lastPlayedCue=e,o.addEventListener("ended",()=>this.activeSamples.delete(o),{once:!0}),this.trackTransient(o,[o,a,...c.nodes]),o.start(i),!0}floorPlaybackRate(e,t){return e!=="floorUp"&&e!=="floorDown"&&e!=="floorPlan"?1:.95+Math.max(1,Math.min(12,t))*.009}queuePending(e,t){this.pendingCue={cue:e,floorIndex:t,requestedAt:typeof performance>"u"?Date.now():performance.now()}}drainPendingCue(){const e=this.pendingCue;if(this.pendingCue=null,!e||!this.enabled||!this.ctx||this.ctx.state!=="running"||(typeof performance>"u"?Date.now():performance.now())-e.requestedAt>ZT)return;const i=this.ctx.currentTime;this.playSample(e.cue,e.floorIndex,i)||this.playProcedural(e.cue,e.floorIndex,i)}stopActiveSamples(){for(const e of this.activeSamples)try{e.stop()}catch{}this.activeSamples.clear()}air(e,t,i,s,r,o=1.2){const a=this.ctx,c=a.createBufferSource();c.buffer=this.getNoiseTexture();const l=a.createBiquadFilter();l.type="bandpass",l.Q.setValueAtTime(o,e),l.frequency.setValueAtTime(s,e),l.frequency.exponentialRampToValueAtTime(r,e+t);const u=this.envelope(e,t,i,Math.min(.04,t*.2)),h=this.cueBus(.13);c.connect(l).connect(u).connect(h.input),this.trackTransient(c,[c,l,u,...h.nodes]),c.start(e),c.stop(e+t+.04)}tone(e,t,i,s,r,o){const c=this.ctx.createBiquadFilter();c.type="bandpass",c.Q.setValueAtTime(.85,e),c.frequency.setValueAtTime(Math.max(180,o*.65),e),c.frequency.exponentialRampToValueAtTime(o,e+s);const l=this.envelope(e,s,r,Math.min(.018,s*.18)),u=this.cueBus(.11);c.connect(l).connect(u.input);const h=this.partial(e,t,i,s,"sine",1,1,0,c),d=this.partial(e,t,i,s,"triangle",2.01,.19,7,c);this.trackTransient(d.source,[c,l,...u.nodes,...h.nodes,...d.nodes])}resonance(e,t,i,s,r,o){const c=this.ctx.createBiquadFilter();c.type="lowpass",c.Q.setValueAtTime(.72,e),c.frequency.setValueAtTime(Math.max(260,o*.42),e),c.frequency.exponentialRampToValueAtTime(o,e+s);const l=this.envelope(e,s,r,Math.min(.045,s*.22)),u=this.cueBus(.085);c.connect(l).connect(u.input);const h=this.partial(e,t,i,s,"sine",1,.74,-4,c),d=this.partial(e,t,i,s,"sine",1.004,.27,5,c),f=this.partial(e,t,i,s,"triangle",1.5,.12,-3,c);this.trackTransient(f.source,[c,l,...u.nodes,...h.nodes,...d.nodes,...f.nodes])}partial(e,t,i,s,r,o,a,c,l){const u=this.ctx,h=u.createOscillator();h.type=r,h.frequency.setValueAtTime(t*o,e),h.frequency.exponentialRampToValueAtTime(i*o,e+s),h.detune.setValueAtTime(c,e);const d=u.createGain();return d.gain.setValueAtTime(a,e),h.connect(d).connect(l),h.start(e),h.stop(e+s+.05),{source:h,nodes:[h,d]}}envelope(e,t,i,s){const o=this.ctx.createGain(),a=e+Math.max(.004,Math.min(s,t*.32)),c=Math.max(a+.004,e+t*.58);return o.gain.setValueAtTime(ba,e),o.gain.exponentialRampToValueAtTime(i,a),o.gain.exponentialRampToValueAtTime(Math.max(ba,i*.58),c),o.gain.exponentialRampToValueAtTime(ba,e+t),o}cueBus(e){const t=this.ctx,i=t.createGain(),s=[i];if(i.gain.setValueAtTime(1,t.currentTime),i.connect(this.master),this.spaceInput){const r=t.createGain();s.push(r),r.gain.setValueAtTime(e,t.currentTime),i.connect(r).connect(this.spaceInput)}return{input:i,nodes:s}}trackTransient(e,t){for(const i of t)this.transientNodes.add(i);e.addEventListener("ended",()=>this.releaseTransient(t),{once:!0})}releaseTransient(e){for(const t of e){try{t.disconnect()}catch{}this.transientNodes.delete(t)}}getNoiseTexture(){if(this.noiseTexture)return this.noiseTexture;const e=this.ctx,t=e.createBuffer(1,Math.ceil(e.sampleRate*1.2),e.sampleRate),i=t.getChannelData(0);let s=1597463007,r=0;for(let o=0;o<i.length;o++){s^=s<<13,s^=s>>>17,s^=s<<5;const a=(s>>>0)/4294967295*2-1;r=r*.985+a*.015,i[o]=a*.42+r*.58}return this.noiseTexture=t,t}transition(e,t){t==="in"?(this.air(e,.56,.024,360,2900,.78),this.resonance(e,118,176,.54,.052,820),this.resonance(e+.075,260,420,.42,.029,1550),this.tone(e+.31,620,760,.18,.015,2200)):(this.resonance(e,180,120,.48,.046,760),this.resonance(e+.055,410,268,.35,.025,1350),this.air(e+.07,.42,.018,2500,380,.82))}selection(e){this.air(e,.16,.011,740,1750,1.4),this.resonance(e,320,445,.22,.027,1120),this.tone(e+.07,505,570,.14,.011,1650)}modeChange(e){this.tone(e,280,420,.18,.046,1500),this.tone(e+.095,420,630,.22,.052,2200)}layout(e,t){const i=t?74:132,s=t?132:76;this.air(e,.68,.02,t?280:2600,t?2450:360,.75),this.resonance(e,i,s,.68,.048,520),this.resonance(e+.12,t?190:350,t?338:205,.45,.024,1240),this.tone(e+.36,t?470:690,t?660:430,.22,.012,2050)}floorIndex(e,t,i){const s=150*Math.pow(2,(Math.max(1,Math.min(12,t))-1)/15),r=i==="up"?s*.72:s*1.5,o=i==="up"?s:s*.72;this.air(e,.24,.012,i==="up"?460:1450,i==="up"?1450:460,1.05),this.resonance(e,r,o,.29,.032,880),this.resonance(e+.105,i==="up"?s*1.28:s*1.5,i==="up"?s*1.5:s*1.28,.2,.018,1420)}floorPlan(e,t){const i=150*Math.pow(2,(Math.max(1,Math.min(12,t))-1)/15);this.air(e,.34,.014,1900,600,.88),this.resonance(e,i*1.5,i,.34,.03,980),this.tone(e+.14,i*2.1,i*1.82,.19,.013,1550)}confirmation(e){this.air(e,.075,.018,1200,3300,3.1),this.tone(e,600,860,.11,.04,2400)}rejection(e){this.air(e,.3,.024,900,300,1.8),this.tone(e,210,150,.14,.06,560),this.tone(e+.17,180,126,.16,.048,480)}clinicalAlert(e,t){const i=t?[430,610,455]:[520,660],s=t?.155:.2;this.air(e,t?.55:.4,t?.04:.028,780,2300,1.6),i.forEach((r,o)=>{const a=o%2===0?r:r*.9;this.tone(e+o*s,a,r*1.08,s*.82,t?.065:.05,t?2050:1750)})}playViewChange(e){this.cancelRoomExit();const t=this.lastView;switch(this.lastView=e,e.kind){case"ASSEMBLED":t.kind!=="ASSEMBLED"&&this.play("layoutClose");break;case"EXPLODED":this.play(e.factor<(t.kind==="EXPLODED"?t.factor:0)?"layoutClose":"layoutOpen");break;case"ISOLATED":{const i=this.floorNumber(e.floorId);this.play(i<this.lastFloorNumber?"floorDown":"floorUp",i),this.lastFloorNumber=i;break}case"FLATTENED":{const i=this.floorNumber(e.floorId);this.play("floorPlan",i),this.lastFloorNumber=i;break}}}floorNumber(e){const t=/\d+$/.exec(e);return t?Number.parseInt(t[0],10):4}queueSelection(){this.cancelSelection(),this.selectionTimer=setTimeout(()=>{this.selectionTimer=null,this.play("select")},32)}cancelSelection(){this.selectionTimer!==null&&(clearTimeout(this.selectionTimer),this.selectionTimer=null)}queueRoomExit(){this.cancelRoomExit(),this.roomExitTimer=setTimeout(()=>{this.roomExitTimer=null,this.play("flyOut")},44)}cancelRoomExit(){this.roomExitTimer!==null&&(clearTimeout(this.roomExitTimer),this.roomExitTimer=null)}detach(){for(const e of this.subscriptions.splice(0))e()}}const jT=5e3;function yo(n){return structuredClone(n)}class KT{constructor(e=jT){E(this,"records",[]);E(this,"start",0);if(this.capacity=e,!Number.isSafeInteger(e)||e<1)throw new Error("CommandLog capacity must be a positive safe integer.")}get length(){return this.records.length}record(e,t){const i={ts:Date.now(),name:e,args:yo(t)};if(this.records.length<this.capacity){this.records.push(i);return}this.records[this.start]=i,this.start=(this.start+1)%this.capacity}entries(){return(this.start===0?this.records:[...this.records.slice(this.start),...this.records.slice(0,this.start)]).map(t=>({ts:t.ts,name:t.name,args:yo(t.args)}))}toJSON(){return JSON.stringify(this.entries(),null,2)}}const wa=pe({type:yt(["building","floor","zone","room","sensor"]),id:we(),buildingId:we().optional()});class Uh extends Error{constructor(e,t,i){super(t),this.code=e,this.hint=i,this.name="CommandRejection"}}const JT=yt(["orbit","front","top","isometric"]),QT=yt(["guest-light-trim","hvac-eco","solar-shade","restore-comfort"]),eR=wi([bt(-1),bt(1)]),tR=yt(["open","acknowledged","resolved"]),nR=yt(["supervisor","emergency"]),li=we().trim().min(1).max(100),Xr=we().trim().min(1).max(1e3),iR=pe({status:wi([tR,bt("unresolved")]).optional(),severity:yt(["warning","critical"]).optional(),floorId:we().optional(),roomId:we().optional(),sourceAlarmKey:we().optional()}),ds=wi([Ye().finite(),Ef(),wf({offset:!0,local:!0})]),sR=wi([bt("live"),pe({from:ds,to:ds}).superRefine((n,e)=>{sn(n.from)>sn(n.to)&&e.addIssue({code:vo.custom,path:["from"],message:"Must be on or before to."})})]),rR=pe({range:sR}),oR=nl("kind",[pe({roomId:we(),kind:bt("light"),value:Ys()}),pe({roomId:we(),kind:bt("hvac"),value:Ye().finite().min(hs[0]).max(hs[1])}),pe({roomId:we(),kind:bt("blind"),value:Ye().finite().min(0).max(1)})]),Ea=pe({floorId:we().optional(),zoneFunction:yt(["guest","lobby","corridor","plant","amenity"]).optional()}).refine(n=>n.floorId!==void 0||n.zoneFunction!==void 0,{message:"Select at least one of floorId or zoneFunction."}),Ta=pe({force:bt(!0),reason:we().trim().min(1).max(200),expiresAt:Ye().finite().optional()}),aR=nl("kind",[pe({selector:Ea,kind:bt("light"),value:Ys(),override:Ta.optional()}),pe({selector:Ea,kind:bt("hvac"),value:Ye().finite().min(hs[0]).max(hs[1]),override:Ta.optional()}),pe({selector:Ea,kind:bt("blind"),value:Ye().finite().min(0).max(1),override:Ta.optional()})]),Oh=pe({arrivalAt:ds,departureAt:ds,guests:Ye().int().min(1).max(6)}).superRefine((n,e)=>{sn(n.arrivalAt)>=sn(n.departureAt)&&e.addIssue({code:vo.custom,path:["departureAt"],message:"Must be after arrivalAt."})}),cR=pe({from:ds.optional(),to:ds.optional()}).superRefine((n,e)=>{n.from===void 0!=(n.to===void 0)?e.addIssue({code:vo.custom,message:"Provide both from and to, or omit both for today."}):n.from!==void 0&&n.to!==void 0&&sn(n.from)>=sn(n.to)&&e.addIssue({code:vo.custom,path:["to"],message:"Must be after from."})}),Zr=we().trim().min(1),lR=we().trim().min(1).max(120),uR=we().trim().max(500),hR=yt(["dirty","clean","inspected","out-of-service"]),kh={durationMs:Ye().positive().max(2e4).optional(),radius:Ye().positive().optional()},Hi={durationMs:Ye().positive().max(2e4).optional()};class dR{constructor(e){E(this,"log",new KT);E(this,"emitter");E(this,"commands",new Map);E(this,"commandListeners",new Set);E(this,"offControlChange",null);E(this,"offIncidentChange",null);E(this,"offFrontDeskChange",null);E(this,"offSourceStatus",null);E(this,"offActuationProgress",null);E(this,"disposed",!1);E(this,"focusedRoom",null);E(this,"focusRestore",null);E(this,"focusVersion",0);this.deps=e,this.emitter=e.emitter,this.offControlChange=this.deps.controls.onBatch(t=>{for(const i of t.entries)this.emitter.emit("controlChanged",{entry:i});this.emitter.emit("controlsChanged",t)}),this.offIncidentChange=this.deps.incidents.onChanged(t=>{this.emitter.emit("incidentsChanged",t)}),this.offFrontDeskChange=this.deps.frontDesk.onChanged(t=>{this.emitter.emit("frontDeskChanged",t)}),this.deps.alarms.onAlarm(t=>this.emitter.emit("alarmRaised",{alarm:t}),t=>this.emitter.emit("alarmCleared",{alarm:t}),t=>{this.deps.incidents.ingestAlarmBatch(t.raised,t.cleared),this.emitter.emit("alarmsChanged",t)}),this.deps.viewStateMachine.setViewChangedListener(t=>{var i,s;this.emitter.emit("viewChanged",{view:t}),(s=(i=this.deps.modeManager.getActiveMode())==null?void 0:i.onViewChanged)==null||s.call(i,t)}),this.deps.timeline.setChangeListener(t=>{this.emitter.emit("dataUpdated",{time:t.time,timeMode:t.mode,playbackSpeed:t.playbackSpeed})}),this.offSourceStatus=this.deps.timeline.onSourceStatus(t=>{this.emitter.emit("sourceStatusChanged",{status:t})}),this.offActuationProgress=this.deps.actuation.onProgress(t=>{this.emitter.emit("actuationChanged",t)}),this.define("setMode","Switch the visualization mode (see listModes for available ids).",pe({mode:we()}),({mode:t})=>{if(!this.deps.modeManager.list().some(r=>r.id===t))throw this.reject("setMode","UNKNOWN_MODE",`No mode '${t}'.`,`Available: ${this.deps.modeManager.list().map(r=>r.id).join(", ")}`);const s=this.deps.modeManager.getActiveId();return this.deps.modeManager.setMode(t).then(()=>{s!==t&&this.emitter.emit("modeChanged",{mode:t})})}),this.define("setAutoRotate","Enable or disable the idle showroom rotation of the building.",pe({on:Ys(),speed:Ye().positive().max(10).optional()}),({on:t,speed:i})=>{this.deps.cameraDirector.setAutoRotate(t,i),this.emitter.emit("autoRotateChanged",{on:t,speed:i})}),this.define("orbitTo","Fly the camera to an orbit position around the building. Azimuth 0 faces north; elevation is degrees above the horizon.",pe({azimuthDeg:Ye().min(-360).max(360),elevationDeg:Ye().min(0).max(89),...kh}),async t=>{this.leaveRoomForNavigation();const i=await this.deps.cameraDirector.orbitTo(t.azimuthDeg,t.elevationDeg,{durationMs:t.durationMs,radius:t.radius});return i==="completed"&&this.emitter.emit("cameraSettled",{command:"orbitTo"}),{outcome:i}}),this.define("setView","Fly the camera to a named preset view.",pe({view:JT,...kh}),async t=>{this.leaveRoomForNavigation();const i=await this.deps.cameraDirector.setView(t.view,{durationMs:t.durationMs,radius:t.radius});return i==="completed"&&this.emitter.emit("cameraSettled",{command:"setView"}),{outcome:i}}),this.define("zoomTo","Cinematic flight framing an entity (or the whole building).",pe({target:wi([bt("building"),wa]),...Hi}),t=>{t.target!=="building"&&this.assertEntity(t.target,"zoomTo"),this.leaveRoomForNavigation();const i=this.deps.sceneIndex.boxOf(t.target);return this.deps.cameraDirector.zoomToBox(i,{durationMs:t.durationMs}).then(s=>(s==="completed"&&this.emitter.emit("cameraSettled",{command:"zoomTo"}),{outcome:s}))}),this.define("explode","Separate the floors vertically (0 = assembled … 1 = fully exploded).",pe({factor:Ye().min(0).max(1),...Hi}),({factor:t,durationMs:i})=>(this.leaveRoomForNavigation(),this.deps.viewStateMachine.explode(t,i))),this.define("isolateFloor","Focus a single floor; all other floors fade to ghost wireframe.",pe({floorId:we(),...Hi}),({floorId:t,durationMs:i})=>(this.assertFloor(t,"isolateFloor"),this.leaveRoomForNavigation(),this.deps.viewStateMachine.isolate(t,i))),this.define("flattenFloor","Isolate a floor and squash its rooms into a 2D/2.5D floor plan (auto-isolates first).",pe({floorId:we(),style:yt(["2d","2.5d"]),...Hi}),({floorId:t,style:i,durationMs:s})=>(this.assertFloor(t,"flattenFloor"),this.leaveRoomForNavigation(),this.deps.viewStateMachine.flatten(t,i,s))),this.define("sliceFloor","Move the isolated (or flattened) floor focus one level up or down; preserves flatten style when active.",pe({direction:eR,...Hi}),async({direction:t,durationMs:i})=>{const s=this.deps.buildingIndex.floorIds,r=this.floorSliceAnchor(),o=r?s.indexOf(r)+t:t>0?0:s.length-1,a=s[o];if(!a)return{outcome:"noop",floorId:r??null};this.leaveRoomForNavigation();const c=this.deps.viewStateMachine.getView();return{...c.kind==="FLATTENED"?await this.deps.viewStateMachine.flatten(a,c.style,i):await this.deps.viewStateMachine.isolate(a,i),floorId:a}}),this.define("reassemble","Return every floor to the assembled building and restore the orbit camera.",pe({...Hi}),({durationMs:t})=>(this.leaveRoomForNavigation(),this.deps.viewStateMachine.reassemble(t))),this.define("select","Select a room and highlight it; the highlight survives view transitions.",pe({ref:wa}),({ref:t})=>{this.assertRoom(t,"select");const i=this.deps.selectionService.select(t);return this.emitter.emit("selectionChanged",{ref:t,info:this.deps.buildingIndex.info(t)}),{changed:i}}),this.define("clearSelection","Drop the current selection and its highlight.",pe({}),()=>{const t=this.deps.selectionService.clear();return this.emitter.emit("selectionChanged",{ref:null,info:null}),{changed:t}}),this.define("inspect","Return an entity’s identity and sensor bindings from the domain model.",pe({ref:wa}),({ref:t})=>(this.assertEntity(t,"inspect"),this.deps.buildingIndex.info(t))),this.define("getView","Return the current decomposition view state (PLAN §4.7).",pe({}),()=>this.deps.viewStateMachine.getView()),this.define("setTimeRange","Follow live data ('live') or scrub to a past instant (freezes on the range's `to` edge).",rR,({range:t})=>(this.deps.timeline.setTimeRange(t),{timeMode:this.deps.timeline.getState().mode})),this.define("setPlaybackSpeed","Multiplier on how fast simulated time advances in live mode.",pe({x:Ye().positive().max(1e3)}),({x:t})=>(this.deps.timeline.setPlaybackSpeed(t),{playbackSpeed:t})),this.define("setQuality","Pin the render quality tier (high/medium/low); disables auto-downgrade (PLAN §5.1).",pe({tier:yt(["high","medium","low"])}),({tier:t})=>(this.deps.quality.setQuality(t),{quality:t})),this.define("enterRoom","Cinematic fly-through into a room; selects it and drops to an interior view.",pe({roomId:we(),durationMs:Ye().positive().max(2e4).optional()}),({roomId:t,durationMs:i})=>{var a,c;this.assertRoom({type:"room",id:t},"enterRoom");const s=++this.focusVersion;this.deps.selectionService.select({type:"room",id:t}),this.emitter.emit("selectionChanged",{ref:{type:"room",id:t},info:this.deps.buildingIndex.info({type:"room",id:t})}),this.focusedRoom=t,this.emitter.emit("roomFocusChanged",{roomId:t}),(a=this.focusRestore)==null||a.call(this);const r=(c=this.deps.sceneIndex.room(t))==null?void 0:c.visual;if(r){const l=r.getOpacity();this.focusRestore=()=>{r.setOpacity(l)},r.setOpacity(.18)}const o=this.deps.sceneIndex.boxOf({type:"room",id:t});return this.deps.cameraDirector.enterRoom(o,{durationMs:i}).then(l=>(l==="superseded"&&s===this.focusVersion&&this.focusedRoom===t&&this.clearRoomFocus(),{outcome:l}))}),this.define("exitRoom","Fly back out of a room to the orbit view (no-op if not focused).",pe({durationMs:Ye().positive().max(2e4).optional()}),async({durationMs:t})=>this.focusedRoom?(++this.focusVersion,this.clearRoomFocus({abandonCamera:!1}),{outcome:await this.deps.cameraDirector.exitRoom({durationMs:t})}):{outcome:"noop"}),this.define("setControl","Command a room actuator: light (on/off), hvac (setpoint °C), or blind (0 open…1 closed).",oR,({roomId:t,kind:i,value:s})=>{if(!this.deps.controls.supports(t,i))throw this.reject("setControl","UNKNOWN_ENTITY",`Room '${t}' has no ${i} control.`,"Call getControls to see controllable rooms and their kinds.");return this.deps.actuation.execute({roomId:t,kind:i,value:s,actor:"operator"}).then(r=>(r.changed&&this.deps.timeline.refresh(),{state:r.entry.state,changed:r.changed,outcome:r.result.outcome,commandId:r.result.commandId,code:r.result.code,message:r.result.message}))}),this.define("setControls","Batch-command one actuator across rooms selected by floor and/or zone function. Optional force override metadata is logged for server authorization.",aR,({selector:t,kind:i,value:s,override:r})=>{t.floorId&&this.assertFloor(t.floorId,"setControls");const o=[],a=[];for(const c of this.deps.buildingIndex.roomsMatching(t)){const{id:l}=c.room;if(!this.deps.controls.supports(l,i))continue;o.push(l);const u=this.deps.controls.get(l);gR(u,i)!==s&&a.push({roomId:l,kind:i,value:s,actor:"operator",reason:r==null?void 0:r.reason,force:r==null?void 0:r.force,expiresAt:r==null?void 0:r.expiresAt})}return this.deps.actuation.executeBatch(a).then(c=>(c.changed>0&&this.deps.timeline.refresh(),{selector:{...t},kind:i,value:s,override:r,roomIds:o,changedRoomIds:c.changedRoomIds,changed:c.changed,rejected:c.rejected,results:c.results.map(({result:l})=>({...l}))}))}),this.define("getControls","Read actuator state for one room, or every controllable room when roomId is omitted.",pe({roomId:we().optional()}),({roomId:t})=>t?this.deps.controls.get(t)??null:this.deps.controls.list()),this.define("getPowerSummary","Summarize good-quality live kW by floor and zone, with unavailable meters and highest-draw rooms.",pe({floorId:we().optional()}),({floorId:t})=>(t&&this.assertFloor(t,"getPowerSummary"),this.deps.power.summary(this.deps.timeline.currentFrame(),t))),this.define("getOperationsSnapshot","Read one coherent manager snapshot: scoped room sensors/controls, global alarms, and scoped power.",pe({floorId:we().optional()}),({floorId:t})=>{t&&this.assertFloor(t,"getOperationsSnapshot");const i=this.deps.timeline.currentFrame(),s=this.deps.buildingIndex.roomsMatching({floorId:t}).map(r=>({roomId:r.room.id,roomName:r.room.name,floorId:r.floor.id,floorName:r.floor.name,zoneId:r.zone.id,zoneName:r.zone.name,zoneFunction:r.zone.function,readings:r.room.sensors.map(o=>zh(i,o)),controls:this.deps.controls.get(r.room.id)??null}));return{time:i.time,rooms:s,activeAlarms:this.deps.alarms.activeAlarms(),incidents:this.deps.incidents.summary({floorId:t}),power:this.deps.power.summary(i,t)}}),this.define("applyPowerAction","Apply a scoped confirmed power-management action: guest light trim, HVAC eco, solar shade, or restore comfort.",pe({action:QT,floorId:we().optional()}),({action:t,floorId:i})=>{i&&this.assertFloor(i,"applyPowerAction");const s=this.deps.power.plan(t,i);return this.deps.actuation.executeBatch(s.changes).then(r=>(r.changed>0&&this.deps.timeline.refresh(),{action:t,floorId:i,changedControls:r.changed,changedRooms:r.changedRoomIds,rejectedControls:r.rejected}))}),this.define("getFrontDeskSnapshot","Read today’s front-desk inventory and queues, or scope them to an explicit period.",cR,({from:t,to:i})=>t===void 0||i===void 0?this.deps.frontDesk.snapshot():this.deps.frontDesk.snapshot(sn(t),sn(i))),this.define("searchRoomAvailability","Find guest rooms available for an arrival/departure period and party size, including readiness and conflict reasons.",Oh,t=>this.deps.frontDesk.searchAvailability({arrivalAt:sn(t.arrivalAt),departureAt:sn(t.departureAt),guests:t.guests})),this.define("createReservation","Create a guest reservation, optionally assigning an available room immediately.",Oh.safeExtend({guestName:lR,roomId:we().optional(),notes:uR.optional()}),t=>this.runFrontDeskMutation("createReservation",()=>this.deps.frontDesk.createReservation({guestName:t.guestName,guests:t.guests,arrivalAt:sn(t.arrivalAt),departureAt:sn(t.departureAt),roomId:t.roomId,notes:t.notes}))),this.define("assignReservationRoom","Assign or move a reserved stay to an available guest room.",pe({reservationId:Zr,roomId:we()}),({reservationId:t,roomId:i})=>this.runFrontDeskMutation("assignReservationRoom",()=>this.deps.frontDesk.assignRoom(t,i))),this.define("checkInGuest","Check in a reserved guest to their inspected assigned room, or assign an available room as part of check-in.",pe({reservationId:Zr,roomId:we().optional()}),({reservationId:t,roomId:i})=>this.runFrontDeskMutation("checkInGuest",()=>this.deps.frontDesk.checkIn(t,i))),this.define("checkOutGuest","Check out an in-house guest and mark the vacated room dirty for housekeeping.",pe({reservationId:Zr}),({reservationId:t})=>this.runFrontDeskMutation("checkOutGuest",()=>this.deps.frontDesk.checkOut(t))),this.define("cancelReservation","Cancel a reserved stay; an in-house stay must be checked out instead.",pe({reservationId:Zr}),({reservationId:t})=>this.runFrontDeskMutation("cancelReservation",()=>this.deps.frontDesk.cancelReservation(t))),this.define("setRoomReadiness","Update housekeeping readiness for an unoccupied guest room: dirty, clean, inspected, or out of service.",pe({roomId:we(),readiness:hR}),({roomId:t,readiness:i})=>this.runFrontDeskMutation("setRoomReadiness",()=>this.deps.frontDesk.setRoomReadiness(t,i))),this.define("readRoom","Current sensor readings for a room at the displayed instant (channel, unit, value).",pe({roomId:we()}),({roomId:t})=>{this.assertRoom({type:"room",id:t},"readRoom");const i=this.deps.timeline.currentFrame();return this.deps.buildingIndex.info({type:"room",id:t}).sensors.map(s=>zh(i,s))}),this.define("queryRoom","History series (default 24 h) for each of a room’s sensors — for trends.",pe({roomId:we(),hours:Ye().positive().max(168).optional()}),({roomId:t,hours:i=24})=>{this.assertRoom({type:"room",id:t},"queryRoom");const s=this.deps.buildingIndex.info({type:"room",id:t}).sensors;return this.deps.timeline.history(i).then(r=>s.map(o=>({channel:o.channel,unit:o.unit,points:r.map(a=>fR(a,o.deviceId))})))}),this.define("listAlarms","Return the alarms currently firing and the configured alarm rules.",pe({}),()=>({active:this.deps.alarms.activeAlarms(),rules:this.deps.alarms.listRules()})),this.define("setAlarmRule","Add or replace an alarm rule (threshold on a sensor channel).",pe({id:we(),channel:yt(["temperature","humidity","lux","power","occupancy"]),op:yt([">","<"]),threshold:Ye().finite(),severity:yt(["warning","critical"]),label:we(),zoneFunction:yt(["guest","lobby","corridor","plant","amenity"]).optional()}),t=>(this.deps.alarms.setRule(t),{ruleId:t.id})),this.define("clearAlarmRule","Remove an alarm rule and clear any alarms it raised.",pe({id:we()}),({id:t})=>({removed:this.deps.alarms.clearRule(t)})),this.define("listIncidents","List retained operational incidents, optionally filtered by status, severity, floor, room, or source alarm key.",iR,t=>(t.floorId&&this.assertFloor(t.floorId,"listIncidents"),t.roomId&&this.assertRoom({type:"room",id:t.roomId},"listIncidents"),this.deps.incidents.list(t))),this.define("getIncident","Read one incident with its acknowledgement, assignment, escalation, notes, evidence, and audit timeline.",pe({incidentId:we()}),({incidentId:t})=>{const i=this.deps.incidents.get(t);if(!i)throw this.reject("getIncident","UNKNOWN_INCIDENT",`No incident '${t}' exists.`,"Call listIncidents to discover current incident ids.");return i}),this.define("listCameraCoverage","List privacy-safe shared-area camera coverage. Resident/guest zones are always excluded.",pe({floorId:we().optional()}),({floorId:t})=>(t&&this.assertFloor(t,"listCameraCoverage"),this.deps.incidents.listCameraCoverage(t))),this.define("acknowledgeIncident","Acknowledge an open incident and record the operator in its audit timeline.",pe({incidentId:we(),actor:li}),({incidentId:t,actor:i})=>this.runIncidentMutation("acknowledgeIncident",()=>this.deps.incidents.acknowledge(t,i))),this.define("assignIncident","Assign an unresolved incident to an operating team or named responder.",pe({incidentId:we(),assignee:li,actor:li}),({incidentId:t,assignee:i,actor:s})=>this.runIncidentMutation("assignIncident",()=>this.deps.incidents.assign(t,i,s))),this.define("escalateIncident","Raise an unresolved incident to supervisor or emergency level with a required reason.",pe({incidentId:we(),level:nR,actor:li,reason:Xr}),t=>this.runIncidentMutation("escalateIncident",()=>this.deps.incidents.escalate(t.incidentId,t.level,t.actor,t.reason))),this.define("addIncidentNote","Append an attributed note to an incident audit timeline.",pe({incidentId:we(),author:li,text:Xr}),({incidentId:t,author:i,text:s})=>this.runIncidentMutation("addIncidentNote",()=>this.deps.incidents.addNote(t,i,s))),this.define("captureIncidentCameraEvidence","Capture a synthetic showcase snapshot from a privacy-safe camera on the incident floor and attach it to the audit record.",pe({incidentId:we(),cameraId:we(),actor:li,note:Xr.optional()}),t=>this.runIncidentMutation("captureIncidentCameraEvidence",()=>this.deps.incidents.captureCameraEvidence(t.incidentId,t.cameraId,t.actor,t.note))),this.define("resolveIncident","Resolve an incident after its source alarm clears, recording the operator and resolution.",pe({incidentId:we(),actor:li,resolution:Xr}),({incidentId:t,actor:i,resolution:s})=>this.runIncidentMutation("resolveIncident",()=>this.deps.incidents.resolve(t,i,s))),this.define("setAudio","Toggle audio cues and/or set the cue volume (0–1).",pe({enabled:Ys().optional(),volume:Ye().min(0).max(1).optional()}),t=>{const i=this.deps.audio.setAudio(t);return this.emitter.emit("audioChanged",i),i}),this.define("listScenes","List the available lighting/HVAC scenes.",pe({}),()=>this.deps.scenes.list()),this.define("applyScene","Apply a named scene — a batch of actuator changes (see listScenes).",pe({scene:we()}),({scene:t})=>{if(!this.deps.scenes.has(t))throw this.reject("applyScene","UNKNOWN_SCENE",`No scene '${t}'.`,`Available: ${this.deps.scenes.list().map(i=>i.id).join(", ")}`);return this.deps.actuation.executeBatch(this.deps.scenes.plan(t)).then(i=>(i.changed>0&&this.deps.timeline.refresh(),{scene:t,changed:i.changed,rejected:i.rejected,results:i.results.map(({result:s})=>({...s}))}))}),this.define("startTour","Begin the choreographed attract-loop tour (any user input stops it).",pe({}),()=>(this.deps.tour.start(),{running:this.deps.tour.isRunning()})),this.define("stopTour","Stop the attract-loop tour.",pe({}),()=>(this.deps.tour.stop(),{running:this.deps.tour.isRunning()}))}setMode(e){return this.call("setMode",{mode:e})}getMode(){return this.deps.modeManager.getActiveId()??"none"}listModes(){return this.deps.modeManager.list()}setAutoRotate(e,t){return this.call("setAutoRotate",{on:e,speed:t})}orbitTo(e,t,i={}){return this.call("orbitTo",{azimuthDeg:e,elevationDeg:t,...i})}setView(e,t={}){return this.call("setView",{view:e,...t})}zoomTo(e,t={}){return this.call("zoomTo",{target:e,...t})}explode(e,t={}){return this.call("explode",{factor:e,...t})}isolateFloor(e,t={}){return this.call("isolateFloor",{floorId:e,...t})}flattenFloor(e,t,i={}){return this.call("flattenFloor",{floorId:e,style:t,...i})}sliceFloor(e,t={}){return this.call("sliceFloor",{direction:e,...t})}reassemble(e={}){return this.call("reassemble",{...e})}select(e){return this.call("select",e)}clearSelection(){return this.call("clearSelection",{})}inspect(e){return this.runCommand("inspect",{ref:e})}getView(){return this.runCommand("getView",{})}setTimeRange(e){return this.call("setTimeRange",{range:e})}setPlaybackSpeed(e){return this.call("setPlaybackSpeed",{x:e})}setQuality(e){return this.call("setQuality",{tier:e})}enterRoom(e,t={}){return this.call("enterRoom",{roomId:e,...t})}exitRoom(e={}){return this.call("exitRoom",e)}setControl(e,t,i){return this.call("setControl",{roomId:e,kind:t,value:i})}setControls(e,t,i,s={}){return this.call("setControls",{selector:e,kind:t,value:i,...s})}getControls(e){return this.runCommand("getControls",{roomId:e})}getPowerSummary(e){return this.runCommand("getPowerSummary",{floorId:e})}getOperationsSnapshot(e){return this.runCommand("getOperationsSnapshot",{floorId:e})}applyPowerAction(e,t){return this.call("applyPowerAction",{action:e,floorId:t})}getFrontDeskSnapshot(e=void 0){return this.runCommand("getFrontDeskSnapshot",e??{})}searchRoomAvailability(e,t,i){return this.runCommand("searchRoomAvailability",{arrivalAt:e,departureAt:t,guests:i})}createReservation(e){return this.call("createReservation",e)}assignReservationRoom(e,t){return this.call("assignReservationRoom",{reservationId:e,roomId:t})}checkInGuest(e,t){return this.call("checkInGuest",{reservationId:e,roomId:t})}checkOutGuest(e){return this.call("checkOutGuest",{reservationId:e})}cancelReservation(e){return this.call("cancelReservation",{reservationId:e})}setRoomReadiness(e,t){return this.call("setRoomReadiness",{roomId:e,readiness:t})}readRoom(e){return this.runCommand("readRoom",{roomId:e})}queryRoom(e,t){return this.runCommand("queryRoom",{roomId:e,hours:t})}listAlarms(){return this.runCommand("listAlarms",{})}setAlarmRule(e){return this.call("setAlarmRule",e)}clearAlarmRule(e){return this.call("clearAlarmRule",{id:e})}listIncidents(e={}){return this.runCommand("listIncidents",e)}getIncident(e){return this.runCommand("getIncident",{incidentId:e})}listCameraCoverage(e){return this.runCommand("listCameraCoverage",{floorId:e})}acknowledgeIncident(e,t){return this.call("acknowledgeIncident",{incidentId:e,actor:t})}assignIncident(e,t,i){return this.call("assignIncident",{incidentId:e,assignee:t,actor:i})}escalateIncident(e,t,i,s){return this.call("escalateIncident",{incidentId:e,level:t,actor:i,reason:s})}addIncidentNote(e,t,i){return this.call("addIncidentNote",{incidentId:e,author:t,text:i})}captureIncidentCameraEvidence(e,t,i,s){return this.call("captureIncidentCameraEvidence",{incidentId:e,cameraId:t,actor:i,note:s})}resolveIncident(e,t,i){return this.call("resolveIncident",{incidentId:e,actor:t,resolution:i})}setAudio(e){return this.call("setAudio",e)}applyScene(e){return this.call("applyScene",{scene:e})}listScenes(){return this.runCommand("listScenes",{})}startTour(){return this.call("startTour",{})}stopTour(){return this.call("stopTour",{})}dispose(){var e,t,i,s,r;this.disposed||(this.disposed=!0,++this.focusVersion,this.commandListeners.clear(),(e=this.offControlChange)==null||e.call(this),this.offControlChange=null,(t=this.offIncidentChange)==null||t.call(this),this.offIncidentChange=null,(i=this.offFrontDeskChange)==null||i.call(this),this.offFrontDeskChange=null,(s=this.offSourceStatus)==null||s.call(this),this.offSourceStatus=null,(r=this.offActuationProgress)==null||r.call(this),this.offActuationProgress=null,this.deps.alarms.onAlarm(Gi,Gi),this.deps.viewStateMachine.setViewChangedListener(Gi),this.deps.timeline.setChangeListener(Gi),this.clearRoomFocus())}getState(){const e=this.deps.timeline.getState();return{mode:this.getMode(),autoRotate:this.deps.cameraDirector.autoRotate,view:this.deps.viewStateMachine.getView(),selection:this.deps.selectionService.current,commandCount:this.log.length,time:e.time,timeMode:e.mode,playbackSpeed:e.playbackSpeed,quality:this.deps.quality.getQuality(),focusedRoom:this.focusedRoom,activeAlarms:this.deps.alarms.activeAlarms().length,openIncidents:this.deps.incidents.summary().unresolved,audio:this.deps.audio.getState(),touring:this.deps.tour.isRunning(),dataSource:this.deps.timeline.getSourceStatus(),pendingActuations:this.deps.actuation.pendingCount()}}describe(){return[...this.commands.entries()].map(([e,t])=>({name:e,description:t.description,params:pR(t.schema)}))}getCommandLog(){return this.log.entries()}on(e,t){return this.disposed?Gi:this.emitter.on(e,t)}async call(e,t={}){return this.runCommand(e,t)}onCommand(e){return this.disposed?Gi:(this.commandListeners.add(e),()=>this.commandListeners.delete(e))}runCommand(e,t){if(this.disposed)throw new Uh("DISPOSED","The interface controller has been disposed.");const i=this.commands.get(e);if(!i)throw this.reject(e,"UNKNOWN_COMMAND",`No command '${e}'.`,`Available: ${[...this.commands.keys()].join(", ")}`);const s=i.schema.safeParse(this.normalizeArgs(e,t));if(!s.success){const a=s.error.issues.map(c=>`${c.path.join(".")||"(args)"}: ${c.message}`).join("; ");throw this.reject(e,"INVALID_ARGS",`Invalid arguments for ${e} — ${a}`,"Call ui.describe() for command schemas.")}const r=yo(s.data),o=i.run(s.data);this.log.record(e,r);for(const a of this.commandListeners)a(e,yo(r));return o}normalizeArgs(e,t){return e!=="setTimeRange"?t:t==="live"||mR(t)?{range:t}:t}define(e,t,i,s){this.commands.set(e,{description:t,schema:i,run:s})}assertFloor(e,t){if(!this.deps.buildingIndex.floor(e))throw this.reject(t,"UNKNOWN_ENTITY",`No floor '${e}' in the building.`,`Valid floors: ${this.deps.buildingIndex.floorIds.join(", ")}`)}floorSliceAnchor(){var i,s;const e=this.deps.viewStateMachine.getView();if(e.kind==="ISOLATED"||e.kind==="FLATTENED")return e.floorId;if(this.focusedRoom)return(i=this.deps.buildingIndex.room(this.focusedRoom))==null?void 0:i.floor.id;const t=this.deps.selectionService.current;if((t==null?void 0:t.type)==="floor")return t.id;if((t==null?void 0:t.type)==="room")return(s=this.deps.buildingIndex.room(t.id))==null?void 0:s.floor.id}leaveRoomForNavigation(){++this.focusVersion,this.clearRoomFocus()}clearRoomFocus(e={}){var i;const t=this.focusedRoom!==null;return t&&(this.focusedRoom=null,this.emitter.emit("roomFocusChanged",{roomId:null})),(i=this.focusRestore)==null||i.call(this),this.focusRestore=null,e.abandonCamera!==!1&&this.deps.cameraDirector.abandonRoomFocus(),t}assertRoom(e,t){if(e.type!=="room"||!this.deps.buildingIndex.room(e.id))throw this.reject(t,"UNKNOWN_ENTITY",`No room '${e.id}' in the building.`,`Valid floors: ${this.deps.buildingIndex.floorIds.join(", ")}`)}assertEntity(e,t){if(!(e.type==="building"||e.type==="room"&&!!this.deps.buildingIndex.room(e.id)||e.type==="floor"&&!!this.deps.buildingIndex.floor(e.id)))throw this.reject(t,"UNKNOWN_ENTITY",`No ${e.type} '${e.id}' in the building.`,`Valid floors: ${this.deps.buildingIndex.floorIds.join(", ")}`)}runIncidentMutation(e,t){try{return t()}catch(i){throw i instanceof $i?this.reject(e,i.code,i.message,i.hint):i}}runFrontDeskMutation(e,t){try{return t()}catch(i){throw i instanceof Bt?this.reject(e,i.code,i.message,i.hint):i}}reject(e,t,i,s){const r=new Uh(t,i,s);return this.emitter.emit("commandRejected",{command:e,error:{code:t,message:i,hint:s}}),r}}function zh(n,e){const t=n.reading(e.deviceId);return{channel:e.channel,unit:e.unit,value:(t==null?void 0:t.value)??null,quality:(t==null?void 0:t.quality)??(t?"good":"unknown"),observedAt:(t==null?void 0:t.observedAt)??null,receivedAt:(t==null?void 0:t.receivedAt)??null}}function fR(n,e){const t=n.reading(e);return!t||t.quality!==void 0&&t.quality!=="good"?null:t.value}function pR(n){try{return xb(n)}catch{return}}function sn(n){return typeof n=="number"?n:Date.parse(n)}function mR(n){if(!n||typeof n!="object"||Array.isArray(n))return!1;const e=n;return!Object.hasOwn(e,"range")&&(Object.hasOwn(e,"from")||Object.hasOwn(e,"to"))}function gR(n,e){return e==="light"?n.state.light:e==="hvac"?n.state.hvacSetpoint:n.state.blind}function Gi(){}class vR{constructor(){E(this,"handlers",new Map)}on(e,t){let i=this.handlers.get(e);return i||(i=new Set,this.handlers.set(e,i)),i.add(t),()=>i.delete(t)}emit(e,t){var i;(i=this.handlers.get(e))==null||i.forEach(s=>s(t))}clear(){this.handlers.clear()}}function Vf(n){return n.map(e=>({name:e.name,description:e.description,input_schema:_R(e.params)?e.params:{type:"object",properties:{}}}))}function _R(n){return typeof n=="object"&&n!==null}async function yR(n,e,t={}){var s;const i=[];for(let r=0;r<e.length;r++){const o=e[r];try{await n.call(o.name,o.args)}catch(a){i.push({name:o.name,message:a instanceof Error?a.message:String(a)})}(s=t.onStep)==null||s.call(t,o,r)}return{steps:e.length,rejected:i}}const Bh=Date.UTC(2026,6,17,5,0,0),Vh=[{name:"setAutoRotate",args:{on:!1}},{name:"setTimeRange",args:{from:Bh,to:Bh}},{name:"setMode",args:{mode:"electricity"}},{name:"orbitTo",args:{azimuthDeg:120,elevationDeg:35,durationMs:1}},{name:"explode",args:{factor:1,durationMs:1}},{name:"setMode",args:{mode:"environment"}},{name:"isolateFloor",args:{floorId:"F4",durationMs:1}},{name:"setMode",args:{mode:"occupancy"}},{name:"flattenFloor",args:{floorId:"F4",style:"2d",durationMs:1}},{name:"reassemble",args:{durationMs:1}},{name:"select",args:{ref:{type:"room",id:"F4-R03"}}}];class cl{constructor(e,t,i=!1){E(this,"disposed",!1);E(this,"onMessage");this.ui=e,this.socket=t,this.closeSocketOnDispose=i,this.onMessage=s=>void this.handle(s.data),t.onmessage=this.onMessage}static connect(e,t){return new cl(e,new WebSocket(t),!0)}dispose(){var e,t;this.disposed||(this.disposed=!0,this.socket.onmessage===this.onMessage&&(this.socket.onmessage=null),this.closeSocketOnDispose&&((t=(e=this.socket).close)==null||t.call(e)))}async handle(e){if(this.disposed)return;let t;try{t=JSON.parse(e)}catch{return this.send({error:{code:"BAD_JSON",message:"payload was not valid JSON"}})}if(t.name==="__list_tools")return this.send({id:t.id,result:Vf(this.ui.describe())});try{const i=await this.ui.call(t.name,t.args??{});this.send({id:t.id,result:i??null})}catch(i){const s=i;this.send({id:t.id,error:{code:s.code??"ERROR",message:s.message??String(i),hint:s.hint}})}}send(e){this.disposed||this.socket.send(JSON.stringify(e))}}const xR=new Set(["inspect","getView","getControls","getPowerSummary","getOperationsSnapshot","readRoom","queryRoom","listAlarms","listIncidents","getIncident","listCameraCoverage","getFrontDeskSnapshot","searchRoomAvailability","listScenes"]);class SR{constructor(e,t="holo-bms",i=s=>new BroadcastChannel(s)){E(this,"ch");E(this,"applying",!1);E(this,"off");E(this,"source",bR());E(this,"peers",new Set);E(this,"leader",!0);E(this,"leadershipListeners",new Set);this.ui=e,this.ch=i(t),this.ch.onmessage=s=>this.receive(s.data),this.off=e.onCommand((s,r)=>{this.applying||xR.has(s)||this.ch.postMessage({type:"command",source:this.source,name:s,args:r})}),this.ch.postMessage({type:"hello",source:this.source})}isLeader(){return this.leader}onLeadershipChange(e){return this.leadershipListeners.add(e),e(this.leader),()=>this.leadershipListeners.delete(e)}dispose(){this.ch.postMessage({type:"goodbye",source:this.source}),this.off(),this.leadershipListeners.clear(),this.ch.close()}receive(e){if(!(!MR(e)||e.source===this.source))switch(e.type){case"hello":this.addPeer(e.source),this.ch.postMessage({type:"present",source:this.source});return;case"present":this.addPeer(e.source);return;case"goodbye":this.peers.delete(e.source)&&this.updateLeadership();return;case"command":this.applying=!0;let t;try{t=this.ui.call(e.name,e.args)}finally{this.applying=!1}t.catch(()=>{})}}addPeer(e){this.peers.has(e)||(this.peers.add(e),this.updateLeadership())}updateLeadership(){const e=this.source===[...this.peers,this.source].sort()[0];if(e!==this.leader){this.leader=e;for(const t of this.leadershipListeners)t(e)}}}function MR(n){if(!n||typeof n!="object")return!1;const e=n;return typeof e.source!="string"||typeof e.type!="string"?!1:e.type==="command"?typeof e.name=="string":e.type==="hello"||e.type==="present"||e.type==="goodbye"}function bR(){var e,t;return((t=(e=globalThis.crypto)==null?void 0:e.randomUUID)==null?void 0:t.call(e))??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}function wR(n){return typeof n.onFrame=="function"}function ER(n){return typeof n.sampleAsync=="function"}const TR={temperature:{unit:"°C",domain:[18,34],label:"Temperature"},humidity:{unit:"%RH",domain:[30,90],label:"Humidity"},lux:{unit:"lx",domain:[0,1e3],label:"Illuminance"},power:{unit:"kW",domain:[0,6],label:"Power"},occupancy:{unit:"ppl",domain:[0,4],label:"Occupancy"}};function Hf(n){return[...new Set(n)].map(e=>{const t=TR[e];return{channel:e,unit:t.unit,domain:[...t.domain],label:t.label}})}const RR=36e5;class AR{constructor(e,t){E(this,"sensors",[]);E(this,"lon");this.controls=t,this.lon=e.location.lon;for(const i of e.floors)for(const s of i.zones)for(const r of s.rooms)for(const o of r.sensors)this.sensors.push({deviceId:o.deviceId,channel:o.channel,unit:o.unit,roomId:r.id,zoneFn:s.function,seed:OR(o.deviceId)})}capabilities(){return Hf(this.sensors.map(e=>e.channel))}sample(e,t){const i=new Set(e),s=[];for(const r of this.sensors)i.has(r.channel)&&s.push({deviceId:r.deviceId,channel:r.channel,unit:r.unit,value:kR(this.valueFor(r,t))});return Kn(t,s)}async query(e,t,i=6e4,s){const r=[];for(let o=t.from;o<=t.to;o+=i)CR(s),r.push(this.sample(e,o));return r}solarHour(e){return((e/RR%24+this.lon/15)%24+24)%24}valueFor(e,t){var o;const i=this.solarHour(t),s=.5+.5*Math.sin(t/6e5+e.seed),r=(o=this.controls)==null?void 0:o.call(this,e.roomId);switch(e.channel){case"temperature":{const a=(r==null?void 0:r.blind)??0,c=xo(i)*FR(e.zoneFn)*(1-a*.75),l=qr(i)-IR(e.zoneFn)+c+(s-.5)*1.2;return r?l*.4+r.hvacSetpoint*.6:l}case"humidity":return Rc(78-(qr(i)-24)*3+(s-.5)*6,30,95);case"lux":{const a=xo(i)*PR(e.zoneFn)*(.85+.3*s),c=r?1-.85*r.blind:1,l=r!=null&&r.light?120:0;return Math.max(0,a*c+l)}case"occupancy":return Gf(e.zoneFn,i,e.seed);case"power":{const a=DR(e.zoneFn,i,qr(i),e.seed,s);return r?NR(a,r,e.zoneFn,i,qr(i)):a}}}}function CR(n){if(n!=null&&n.aborted)throw n.reason??new DOMException("History query was cancelled.","AbortError")}function qr(n){return 28+5*Math.sin(2*Math.PI*(n-9)/24)}function xo(n){return n<=6||n>=18?0:Math.sin(Math.PI*(n-6)/12)}function IR(n){switch(n){case"guest":return 4;case"lobby":case"amenity":return 5;case"corridor":return 2;case"plant":return-2}}function PR(n){switch(n){case"amenity":return 900;case"lobby":return 700;case"guest":return 500;case"corridor":return 300;case"plant":return 150}}function FR(n){switch(n){case"guest":return 1.4;case"lobby":return 1;case"amenity":return .9;case"corridor":return .35;case"plant":return .2}}function Gf(n,e,t){const i=.5+.5*Math.sin(t*12.9898);switch(n){case"guest":{const s=e<8||e>=22?1:e>=18?.6:.15;return i>.45?Yr(s*(1+i)):0}case"lobby":return Yr(Is(e,10,6)*4+Is(e,18,4)*2);case"amenity":return Yr(Is(e,8,3)*2+Is(e,19,4)*3);case"corridor":return Yr(Is(e,9,8)*1.5);case"plant":return 0}}function DR(n,e,t,i,s){const r=Math.max(0,t-24)*LR(n),o=Gf(n,e,i);switch(n){case"guest":return Xi(.15+r+o*.25+s*.1);case"lobby":return Xi(1.2+r+o*.15+s*.3);case"amenity":return Xi(.8+r+o*.3+s*.4);case"corridor":return Xi(.3+r*.3+s*.05);case"plant":return Xi(2.5+r*1.5+xo(e)*.5+s*.6)}}function LR(n){switch(n){case"guest":return .08;case"lobby":case"amenity":return .15;case"corridor":return .04;case"plant":return .4}}function NR(n,e,t,i,s){let r=n;if(e.light||(r*=1-UR(t)),t==="guest"||t==="lobby"||t==="amenity"){const o=Rc((s-24)/10,0,1.2),a=e.hvacSetpoint-24;r*=Rc(1-a*.055*o,.72,1.3)}return t==="guest"&&(r*=1-xo(i)*e.blind*.14),Xi(Math.max(.03,r))}function UR(n){switch(n){case"guest":return .32;case"lobby":return .25;case"amenity":return .28;case"corridor":return .22;case"plant":return 0}}function Is(n,e,t){const i=(n-e)/t;return Math.exp(-.5*i*i)}function OR(n){let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return(e>>>0)%1e3/1e3}function Rc(n,e,t){return n<e?e:n>t?t:n}const kR=n=>Math.round(n*100)/100,Yr=n=>Math.round(n*10)/10,Xi=n=>Math.round(n*100)/100;class zR{constructor(e,t,i,s=Bf){E(this,"fallback");E(this,"worker",null);E(this,"nextRequestId",1);E(this,"pending",new Map);E(this,"alarmSnapshots",new WeakMap);E(this,"alarmRulesRevision",0);E(this,"disposed",!1);E(this,"onWorkerMessage",e=>{const t=e.data,i=this.pending.get(t.requestId);if(!i)return;if(this.pending.delete(t.requestId),t.type==="error"){i.resolve(this.fallback.sample(i.channels,i.time)),this.disableWorker();return}const s=Kn(t.time,t.readings);if(t.alarmRulesRevision===this.alarmRulesRevision){const r=t.activeAlarms.map(o=>({...o}));this.alarmSnapshots.set(s,r)}i.resolve(s)});E(this,"onWorkerError",()=>{this.disableWorker()});if(this.fallback=new AR(e,t),!(typeof Worker>"u"))try{const r=new Worker(new URL("/ihapm-bms-showcase/assets/mockTelemetry.worker--MrDRGic.js",import.meta.url),{type:"module",name:"ihapm-telemetry"});this.worker=r,r.addEventListener("message",this.onWorkerMessage),r.addEventListener("error",this.onWorkerError),this.post({type:"init",building:e,controls:i.map(({roomId:o,state:a})=>({roomId:o,state:a})),alarmRules:s.map(o=>({...o}))})}catch{this.worker=null}}capabilities(){return this.fallback.capabilities()}sample(e,t){return this.fallback.sample(e,t)}query(e,t,i,s){return this.fallback.query(e,t,i,s)}sampleAsync(e,t){return!this.worker||this.disposed?Promise.resolve(this.fallback.sample(e,t)):new Promise(i=>{const s=this.nextRequestId++;this.pending.set(s,{channels:[...e],time:t,resolve:i});try{this.post({type:"sample",requestId:s,channels:[...e],time:t,alarmRulesRevision:this.alarmRulesRevision})}catch{const r=this.pending.get(s);this.pending.delete(s),this.disableWorker(),i(this.fallback.sample((r==null?void 0:r.channels)??e,(r==null?void 0:r.time)??t))}})}getExecutionMode(){return this.worker?"worker":"main"}executionMode(){return this.getExecutionMode()}updateControl(e){!this.worker||this.disposed||this.post({type:"control",roomId:e.roomId,state:{...e.state}})}setAlarmRules(e){!this.worker||this.disposed||(this.alarmRulesRevision+=1,this.post({type:"alarmRules",rules:e.map(t=>({...t}))}))}takeAlarmSnapshot(e){const t=this.alarmSnapshots.get(e);return t?(this.alarmSnapshots.delete(e),t.map(i=>({...i}))):null}dispose(){this.disposed||(this.disposed=!0,this.disableWorker())}post(e){var t;(t=this.worker)==null||t.postMessage(e)}disableWorker(){const e=this.worker;this.worker=null,e&&(e.removeEventListener("message",this.onWorkerMessage),e.removeEventListener("error",this.onWorkerError),e.terminate());for(const t of this.pending.values())t.resolve(this.fallback.sample(t.channels,t.time));this.pending.clear()}}const BR=pe({deviceId:we(),channel:il,unit:we(),value:Ye().finite(),observedAt:Ye().finite().optional(),receivedAt:Ye().finite().optional(),quality:yt(["good","uncertain","bad","stale","unknown"]).optional(),sourceId:we().optional(),sequence:Ye().finite().optional()}),VR=pe({time:Ye().finite(),readings:ei(BR)}),HR=pe({channel:il,unit:we(),domain:Cf([Ye().finite(),Ye().finite()]),label:we()}),GR=pe({sourceId:we(),kind:yt(["simulation","replay","websocket","mqtt","custom"]),state:yt(["idle","connecting","live","degraded","stale","offline","error"]),label:we(),lastMessageAt:Ye().finite().nullable(),stalePoints:Ye().int().nonnegative(),message:we().optional()}),WR=nl("type",[pe({type:bt("hello"),protocol:bt(1),capabilities:ei(HR)}),pe({type:bt("frame"),frame:VR}),pe({type:bt("status"),status:GR}),pe({type:bt("control"),id:we(),roomId:we(),kind:yt(["light","hvac","blind"]),value:wi([Ys(),Ye().finite()]),accepted:bt(!0)}),pe({type:bt("error"),code:we(),message:we(),id:we().optional()})]);class Wf{constructor(e){E(this,"value");E(this,"listeners",new Set);this.value=Aa(e)}status(){return Aa(this.value)}onStatus(e){return this.listeners.add(e),()=>this.listeners.delete(e)}update(e){const t={...this.value,...e};if(!$R(this.value,t)){this.value=t;for(const i of this.listeners)i(Aa(t))}}dispose(){this.listeners.clear()}}function Ra(n){if(typeof n!="object"||n===null)return!1;const e=n;return typeof e.status=="function"&&typeof e.onStatus=="function"}function $R(n,e){return n.sourceId===e.sourceId&&n.kind===e.kind&&n.state===e.state&&n.label===e.label&&n.lastMessageAt===e.lastMessageAt&&n.stalePoints===e.stalePoints&&n.message===e.message}function Aa(n){return{...n}}class XR{constructor(e,t,i={}){E(this,"socketFactory");E(this,"reconnectMs");E(this,"maxCachedFrames");E(this,"socket",null);E(this,"reconnectTimer");E(this,"disposed",!1);E(this,"connected",!1);E(this,"capabilitiesValue");E(this,"frames",[]);E(this,"frameListeners",new Set);E(this,"actuatorStateListeners",new Set);E(this,"pendingActuations",new Map);E(this,"controlTimeoutMs");E(this,"sourceStatus");this.url=e,this.capabilitiesValue=Hf(t.floors.flatMap(s=>s.zones.flatMap(r=>r.rooms.flatMap(o=>o.sensors.map(a=>a.channel))))),this.socketFactory=i.webSocketFactory??(s=>new WebSocket(s)),this.reconnectMs=i.reconnectMs??1500,this.maxCachedFrames=Math.max(2,i.maxCachedFrames??1440),this.controlTimeoutMs=Math.max(250,i.controlTimeoutMs??5e3),this.sourceStatus=new Wf({sourceId:e,kind:"websocket",state:"idle",label:"Realtime BMS",lastMessageAt:null,stalePoints:0})}capabilities(){return this.capabilitiesValue.map(e=>({...e,domain:[...e.domain]}))}connect(){if(this.disposed||this.socket)return;this.sourceStatus.update({state:"connecting",message:"Connecting to realtime BMS."});let e;try{e=this.socketFactory(this.url)}catch{this.sourceStatus.update({state:"error",message:"Could not open the realtime BMS socket."}),this.scheduleReconnect();return}this.socket=e,e.onopen=()=>{this.socket!==e||this.disposed||(this.connected=!0,this.sourceStatus.update({state:"connecting",message:"Socket connected; waiting for telemetry."}),this.sendNow({type:"hello",protocol:1}),this.sendNow({type:"subscribe"}))},e.onmessage=t=>this.receive(e,t.data),e.onerror=()=>{this.sourceStatus.update({state:"error",message:"Realtime BMS socket error."})},e.onclose=()=>{this.socket===e&&(this.socket=null,this.connected=!1,this.finishAllPending("offline","BMS_DISCONNECTED","Realtime BMS disconnected before confirmation."),this.sourceStatus.update({state:"offline",message:"Realtime BMS disconnected."}),this.scheduleReconnect())}}dispose(){if(this.disposed)return;this.disposed=!0,globalThis.clearTimeout(this.reconnectTimer),this.reconnectTimer=void 0;const e=this.socket;this.socket=null,this.connected=!1,e&&(e.onopen=null,e.onmessage=null,e.onerror=null,e.onclose=null,e.close()),this.frameListeners.clear(),this.actuatorStateListeners.clear(),this.finishAllPending("offline","BMS_DISPOSED","Realtime BMS connection was closed."),this.sourceStatus.update({state:"idle",message:"Realtime BMS connection closed."}),this.sourceStatus.dispose()}onFrame(e){return this.frameListeners.add(e),()=>this.frameListeners.delete(e)}onState(e){return this.actuatorStateListeners.add(e),()=>this.actuatorStateListeners.delete(e)}execute(e,t){return this.disposed||!this.connected||!this.socket||t!=null&&t.aborted?Promise.resolve(Zn(e,"offline","BMS_OFFLINE","Realtime BMS is not connected.")):this.pendingActuations.has(e.commandId)?Promise.resolve(Zn(e,"rejected","DUPLICATE_COMMAND_ID",`Actuation command '${e.commandId}' is already pending.`)):new Promise(i=>{const s=globalThis.setTimeout(()=>{this.finishPending(e.commandId,Zn(e,"timeout","BMS_TIMEOUT","Realtime BMS did not confirm the command in time."))},this.controlTimeoutMs),r={command:{...e},resolve:i,timeout:s,signal:t};t&&(r.abort=()=>this.finishPending(e.commandId,Zn(e,"timeout","COMMAND_ABORTED","The actuation request was cancelled.")),t.addEventListener("abort",r.abort,{once:!0})),this.pendingActuations.set(e.commandId,r),this.sendNow({type:"control",id:e.commandId,roomId:e.roomId,kind:e.kind,value:e.value,actor:e.actor,reason:e.reason,force:e.force,expiresAt:e.expiresAt})||this.finishPending(e.commandId,Zn(e,"offline","BMS_SEND_FAILED","Could not send the command to the realtime BMS."))})}status(){return this.sourceStatus.status()}onStatus(e){return this.sourceStatus.onStatus(e)}sample(e,t){const i=ZR(this.frames,t);return i?Hh(i,e,t):Kn(t,[])}query(e,t,i=6e4,s){if(s!=null&&s.aborted)return Promise.reject(s.reason??new DOMException("History query was cancelled.","AbortError"));const r=Math.max(1,i),o=new Map;for(const c of this.frames){if(c.time<t.from||c.time>t.to)continue;const l=Math.floor((c.time-t.from)/r),u=o.get(l);(!u||c.time>u.time)&&o.set(l,c)}const a=[...o.values()].sort((c,l)=>c.time-l.time).map(c=>Hh(c,e,c.time));return Promise.resolve(a)}receive(e,t){if(this.socket!==e||this.disposed||typeof t!="string")return;let i;try{i=JSON.parse(t)}catch{return}const s=WR.safeParse(i);if(s.success)switch(s.data.type){case"hello":this.capabilitiesValue=s.data.capabilities.map(r=>({...r,domain:[...r.domain]})),this.sourceStatus.update({state:"connecting",lastMessageAt:Date.now(),message:"Capabilities received; waiting for telemetry."});return;case"frame":{const r=Kn(s.data.frame.time,s.data.frame.readings.map(o=>({...o})));this.frames.push(r),this.frames.length>this.maxCachedFrames&&this.frames.splice(0,this.frames.length-this.maxCachedFrames),this.sourceStatus.update({state:"live",lastMessageAt:Date.now(),message:void 0});for(const o of this.frameListeners)o(qR(r));return}case"status":this.sourceStatus.update({...s.data.status});return;case"control":{const r={roomId:s.data.roomId,kind:s.data.kind,value:s.data.value,observedAt:Date.now(),commandId:s.data.id},o=this.pendingActuations.get(s.data.id);if(o){o.command.roomId!==s.data.roomId||o.command.kind!==s.data.kind?this.finishPending(s.data.id,Zn(o.command,"rejected","ACK_MISMATCH","Realtime BMS acknowledgement did not match the requested actuator.")):this.finishPending(s.data.id,{commandId:s.data.id,roomId:s.data.roomId,kind:s.data.kind,value:s.data.value,outcome:"confirmed",confirmedAt:Date.now()});return}for(const a of this.actuatorStateListeners)a({...r});return}case"error":{const r=s.data.id?this.pendingActuations.get(s.data.id):void 0;r&&this.finishPending(s.data.id,Zn(r.command,"rejected",s.data.code,s.data.message));return}}}sendNow(e){if(!this.socket||!this.connected)return!1;try{return this.socket.send(JSON.stringify(e)),!0}catch{return!1}}scheduleReconnect(){this.disposed||this.reconnectMs<=0||this.reconnectTimer!==void 0||(this.reconnectTimer=globalThis.setTimeout(()=>{this.reconnectTimer=void 0,this.connect()},this.reconnectMs))}finishPending(e,t){const i=this.pendingActuations.get(e);i&&(this.pendingActuations.delete(e),globalThis.clearTimeout(i.timeout),i.signal&&i.abort&&i.signal.removeEventListener("abort",i.abort),i.resolve({...t}))}finishAllPending(e,t,i){for(const s of[...this.pendingActuations.values()])this.finishPending(s.command.commandId,Zn(s.command,e,t,i))}}function Zn(n,e,t,i){return{commandId:n.commandId,roomId:n.roomId,kind:n.kind,value:n.value,outcome:e,confirmedAt:e==="confirmed"?Date.now():void 0,code:t,message:i}}function ZR(n,e){let t,i=1/0;for(const s of n){const r=Math.abs(s.time-e);r<i&&(t=s,i=r)}return t}function Hh(n,e,t){const i=new Set(e);return Kn(t,n.readings.filter(s=>i.has(s.channel)).map(s=>({...s})))}function qR(n){return Kn(n.time,n.readings.map(e=>({...e})))}function YR(n){return Ac(n,"updateControl")}function jR(n){return Ac(n,"setAlarmRules")&&Ac(n,"takeAlarmSnapshot")}function Ac(n,e){return typeof n=="object"&&n!==null&&typeof n[e]=="function"}const KR={id:"default",name:"Hologram",description:"Idle showroom hologram — slow rotation, ambient particles, no data overlay.",accent:"#36e6ff",channels:[]},JR={id:"electricity",name:"Electricity",description:"Live power draw — rooms tinted by kW, per-floor bars, pulsing risers.",accent:"#aef049",channels:["power"]},QR={id:"environment",name:"Environment",description:"Heat, humidity & sunlight — temperature tint, humidity fog, sun from real geo + time.",accent:"#ffb020",channels:["temperature","humidity","lux"]},e1={id:"occupancy",name:"Occupancy",description:"Live room occupancy — headcount tint, occupant dots, per-floor ring gauges.",accent:"#ff45c8",channels:["occupancy"]};class t1{constructor(){E(this,"disposed",!1)}execute(e,t){const i=this.disposed||(t==null?void 0:t.aborted);return Promise.resolve({commandId:e.commandId,roomId:e.roomId,kind:e.kind,value:e.value,outcome:i?"offline":"confirmed",confirmedAt:i?void 0:Date.now(),code:i?"LOCAL_ACTUATION_UNAVAILABLE":void 0,message:i?"The local simulation actuator is unavailable.":void 0})}onState(e){return()=>{}}dispose(){this.disposed=!0}}class n1{execute(e){return Promise.resolve({commandId:e.commandId,roomId:e.roomId,kind:e.kind,value:e.value,outcome:"offline",code:"ACTUATION_NOT_CONFIGURED",message:"No authoritative actuator adapter is configured for this data source."})}onState(e){return()=>{}}dispose(){}}function Ca(n){if(typeof n!="object"||n===null)return!1;const e=n;return typeof e.execute=="function"&&typeof e.onState=="function"&&typeof e.dispose=="function"}const i1=(n,e)=>{n?e.select({ref:n}):e.clearSelection()};function p1(n,e,t={}){const i=s1(Vw(e)),s=new Hw(i),r=new ST(i),o=new wT(i,r),a=new DT(i),c=new VT(i,r,i.location.lon),l=new SE(n,t.initialQuality??"high"),u=[],h=new Set,d=J=>{const V=l.registerUpdate(J);return u.push(V),V},{root:f,floorGroups:g}=RE(i,l.getHoloLuminanceUniform());l.scene.add(f);const v=new Xt().setFromObject(f).getSize(new I),m=Math.hypot(v.x,v.z)/2+3,p=new OE(m);l.scene.add(p.group),d((J,V)=>p.update(J,V));const T=new GE;d(()=>T.update(performance.now())),l.setActivityProbe(()=>T.hasActive||l.controls.autoRotate),l.controls.target.set(0,v.y*.45,0);const b=new fn(m*2.7,_t.degToRad(68),_t.degToRad(35));l.camera.position.setFromSpherical(b).add(l.controls.target),l.camera.lookAt(l.controls.target);const x=new XE(l.camera,l.controls,T),U=new mn;U.name="modeOverlay",Ht(U),l.scene.add(U);const C=new vR;if(t.telemetry&&(t.provider||t.realtimeUrl))throw new Error("Configure HoloOptions.telemetry, provider, or realtimeUrl—not more than one.");const A=t.telemetry?null:t.provider??(t.realtimeUrl?new XR(t.realtimeUrl,i):new zR(i,J=>{var V;return(V=r.get(J))==null?void 0:V.state},r.list())),F=t.telemetry??{snapshot:A,history:A,stream:A&&wR(A)?A:void 0,asyncSnapshot:A&&ER(A)?A:void 0,status:Ra(A)?A:void 0},M=A??F.snapshot,y=F.status??(Ra(F.stream)?F.stream:void 0)??(Ra(F.snapshot)?F.snapshot:void 0),P=!t.sourceStatus&&!y?new Wf({sourceId:t.provider||t.telemetry?"custom-provider":"seeded-simulation",kind:t.provider||t.telemetry?"custom":"simulation",state:"live",label:t.provider||t.telemetry?"Custom provider":"Seeded simulation",lastMessageAt:Date.now(),stalePoints:0}):null,q=t.sourceStatus??y??P,B=i.floors.flatMap(J=>J.zones.flatMap(V=>V.rooms.flatMap(ye=>ye.sensors.map(Ne=>({...Ne}))))),H=new _T({...F,status:q,asyncSnapshot:F.stream?void 0:F.asyncSnapshot},{points:B});P&&u.push(()=>P.dispose());const ee=Ca(A)?A:Ca(F.stream)?F.stream:Ca(F.snapshot)?F.snapshot:null,W=q.status().kind==="simulation"||q.status().kind==="replay",re=!t.actuation&&!ee?W?new t1:new n1:null,G=t.actuation??ee??re,he=new MT(r,G);if(u.push(()=>he.dispose()),re&&u.push(()=>re.dispose()),d(()=>H.tick()),F.stream)u.push(()=>F.stream.dispose());else if(YR(M)){u.push(r.onChange(V=>M.updateControl(V)));const J=M;typeof J.dispose=="function"&&u.push(()=>{var V;return(V=J.dispose)==null?void 0:V.call(J)})}const ue=new qE(g,f),Se=new QE(ue,x,T,f);ue.setLowDetail(l.getQuality()==="low"),Se.setRenderQuality(l.getQuality());const Be=Math.hypot(v.x,v.z),Je=Be*1.05,K=Be*1.25;d(()=>{const V=ue.getRoomLod()==="summary"?Je:K,ye=l.camera.position.distanceTo(l.controls.target),Ne=l.getQuality()==="low"&&Se.getView().kind==="ASSEMBLED"&&ye>V;ue.setRoomLod(Ne?"summary":"rooms")});const ae=new sT(ue),Ee=new kE(ue,r);l.scene.add(Ee.group),d(()=>Ee.update()),u.push(()=>Ee.dispose());const oe=new RT(i),Le=new CT(i);jR(M)?(M.setAlarmRules(oe.listRules()),u.push(oe.onRulesChanged(J=>M.setAlarmRules(J))),u.push(H.addFrameListener(J=>{const V=M.takeAlarmSnapshot(J);V?oe.reconcileSnapshot(V):oe.evaluate(J)}))):u.push(H.addFrameListener(J=>oe.evaluate(J)));const ke=new VE(ue,oe);l.scene.add(ke.group),d((J,V)=>ke.update(V));const Ue=new YT,Xe=new ZE({building:i,buildingIndex:s,sceneIndex:ue,overlay:U,cameraDirector:x,timeline:H,registerSceneUpdate:d,emitLegend:J=>C.emit("legendChanged",{spec:J}),setFog:J=>l.setFogDensity(J)});Xe.registerLazy(KR,async()=>{const{DefaultMode:J}=await nr(async()=>{const{DefaultMode:V}=await import("./DefaultMode-DTHROHi0.js");return{DefaultMode:V}},[]);return new J}),Xe.registerLazy(JR,async()=>{const{ElectricityMode:J}=await nr(async()=>{const{ElectricityMode:V}=await import("./ElectricityMode-CEIV2FgF.js");return{ElectricityMode:V}},__vite__mapDeps([0,1]));return new J}),Xe.registerLazy(QR,async()=>{const{EnvironmentMode:J}=await nr(async()=>{const{EnvironmentMode:V}=await import("./EnvironmentMode-C7FRhRHh.js");return{EnvironmentMode:V}},__vite__mapDeps([2,1]));return new J}),Xe.registerLazy(e1,async()=>{const{OccupancyMode:J}=await nr(async()=>{const{OccupancyMode:V}=await import("./OccupancyMode-DCpgCAeA.js");return{OccupancyMode:V}},__vite__mapDeps([3,1]));return new J});let X=null;const te=new dR({modeManager:Xe,cameraDirector:x,viewStateMachine:Se,selectionService:ae,sceneIndex:ue,buildingIndex:s,timeline:H,quality:{setQuality:J=>l.setQuality(J),getQuality:()=>l.getQuality()},audio:Ue,tour:{start:()=>X==null?void 0:X.start(),stop:()=>X==null?void 0:X.stop(),isRunning:()=>(X==null?void 0:X.isRunning())??!1},controls:r,actuation:he,power:o,alarms:oe,incidents:Le,frontDesk:a,scenes:c,emitter:C});l.onQualityChange((J,V)=>{ue.setLowDetail(J==="low"),J!=="low"&&ue.setRoomLod("rooms"),Se.setRenderQuality(J),C.emit("qualityChanged",{tier:J,auto:V})});let R=null,Ae=null;const ie=()=>{ue.setRoomLodExceptions([R,Ae].filter(J=>J!==null))};u.push(te.on("selectionChanged",({ref:J})=>{R=(J==null?void 0:J.type)==="room"?J.id:null,ie()})),u.push(te.on("roomFocusChanged",({roomId:J})=>{Ae=J,ie()}));const Me=["modeChanged","viewChanged","selectionChanged","controlsChanged","roomFocusChanged","alarmsChanged","incidentsChanged","tourChanged"];for(const J of Me)u.push(te.on(J,()=>l.requestRenderBurst()));const ce=t.multiScreenChannel?new SR(te,t.multiScreenChannel):null;if(t.autoScenes){let J=()=>{};const V=ye=>{J(),J=ye?H.addLiveFrameListener(Ne=>c.tickSchedule(Ne.time,ze=>void te.applyScene(ze))):()=>{}};ce?u.push(ce.onLeadershipChange(V)):V(!0),u.push(()=>J())}Ue.attach(te);let Oe=!1;const ge=()=>{Oe||Ue.getDiagnostics().contextState==="running"||(Oe=!0,Ue.unlock().then(()=>{Oe=!1},()=>{Oe=!1}))};window.addEventListener("pointerdown",ge),window.addEventListener("keydown",ge),u.push(()=>{window.removeEventListener("pointerdown",ge),window.removeEventListener("keydown",ge)}),X=new GT(te),X.onTourChanged(J=>C.emit("tourChanged",{running:J}));const w=["pointerdown","keydown","wheel"];let _;const O=()=>{l.requestRenderBurst(),X!=null&&X.isRunning()&&te.stopTour(),t.idleTourMs&&t.idleTourMs>0&&(window.clearTimeout(_),_=window.setTimeout(()=>void te.startTour(),t.idleTourMs))};for(const J of w)window.addEventListener(J,O,{passive:!0});u.push(()=>{window.clearTimeout(_);for(const J of w)window.removeEventListener(J,O)}),t.idleTourMs&&t.idleTourMs>0&&(_=window.setTimeout(()=>void te.startTour(),t.idleTourMs));const Y=t.onRoomPick??i1,ne=new oT(l.camera,l.domElement,f,J=>Y(J,te)),j=o1(te);let Te=!1;return{ui:te,building:i,start:()=>{Te||(l.start(),te.setMode(t.initialMode??"default"))},registerDisposer:J=>{if(Te)return J(),()=>{};h.add(J);let V=!0;return()=>{V&&(V=!1,h.delete(J))}},dispose:async()=>{if(Te)return;Te=!0,l.stop();for(const V of h)V();h.clear(),X==null||X.stop(),j.dispose(),ce==null||ce.dispose(),ne.dispose(),H.dispose();for(const V of u.splice(0))V();Se.dispose(),await Xe.dispose(),Ue.dispose(),te.dispose(),x.dispose(),T.cancelAll(),r1(l.scene),l.scene.clear(),l.dispose(),C.clear();const J=window;J.ui===te&&delete J.ui,J.agent===j.agent&&delete J.agent}}}function s1(n){const e=new Set,t=i=>{if(!(!i||typeof i!="object"||e.has(i))){e.add(i);for(const s of Object.values(i))t(s);Object.freeze(i)}};return t(n),n}function r1(n){const e=new Set,t=new Set;n.traverse(i=>{const s=i;s.geometry&&e.add(s.geometry);const r=s.material;Array.isArray(r)?r.forEach(o=>t.add(o)):r&&t.add(r)});for(const i of e)i.dispose();for(const i of t)i.dispose()}function o1(n,e){const t=new Set,i=a=>{const c=cl.connect(n,a);return t.add(c),c},s={toolDefinitions:()=>Vf(n.describe()),replay:(a=Vh)=>yR(n,a),DEMO_SCENARIO:Vh,connect:i};window.ui=n,window.agent=s;let r;const o=new URLSearchParams(location.search).get("remote");return o&&i(o),{agent:s,holo:r,dispose:()=>{for(const a of t)a.dispose();t.clear()}}}const $f=12;function m1(n,e,t){const i=u1(),s=a1(n,e),r=document.createElement("div");r.className="cmdk",r.hidden=!0,r.innerHTML=`
    <div class="cmdk-box" role="dialog" aria-modal="true" aria-label="Search rooms, floors and actions">
      <div class="cmdk-head"><input class="cmdk-input" type="text" role="combobox" aria-label="Search rooms, floors and actions"
        aria-autocomplete="list" aria-controls="cmdk-results" aria-expanded="true" placeholder="Search a room, floor, mode or action…" />
        <button class="cmdk-close" type="button" aria-label="Close search">×</button></div>
      <ul class="cmdk-list" id="cmdk-results" role="listbox" aria-label="Search results"></ul>
      <div class="cmdk-status" role="status"></div>
      <div class="cmdk-help">↑ ↓ Choose · Enter Open · Esc Close</div>
    </div>`,document.body.appendChild(r);const o=r.querySelector(".cmdk-input"),a=r.querySelector(".cmdk-list"),c=r.querySelector(".cmdk-close"),l=r.querySelector(".cmdk-status");let u=[],h=0,d=null,f=!1;const g=()=>{r.hidden&&(d=document.activeElement instanceof HTMLElement?document.activeElement:null,r.hidden=!1,t==null||t.setAttribute("aria-expanded","true"),o.value="",m(),o.focus())},v=()=>{r.hidden||(r.hidden=!0,t==null||t.setAttribute("aria-expanded","false"),d!=null&&d.isConnected&&d.focus({preventScroll:!0}))},m=()=>{u=c1(o.value,s).slice(0,$f),h=0,a.innerHTML=u.map((M,y)=>`<li id="cmdk-result-${y}" role="option" aria-selected="${y===h}" class="${y===h?"on":""}">${Gh(M.label)}${M.hint?`<span>${Gh(M.hint)}</span>`:""}</li>`).join(""),l.textContent=u.length?"":"No matching rooms or actions. Try a room number or floor ID.",u.length?o.setAttribute("aria-activedescendant","cmdk-result-0"):o.removeAttribute("aria-activedescendant")},p=M=>{var y;u.length!==0&&(h=(h+M+u.length)%u.length,[...a.children].forEach((P,q)=>{P.classList.toggle("on",q===h),P.setAttribute("aria-selected",String(q===h))}),o.setAttribute("aria-activedescendant",`cmdk-result-${h}`),(y=a.children[h])==null||y.scrollIntoView({block:"nearest"}))},T=()=>{const M=u[h];M&&(v(),Promise.resolve().then(()=>M.run()).catch(y=>{f||(g(),l.textContent=y instanceof Error?y.message:"The action could not be completed. Try again.")}))},b=()=>m(),x=M=>{const y=M.target.closest("li");y&&(h=[...a.children].indexOf(y),T())},U=M=>{M.key==="ArrowDown"?(M.preventDefault(),p(1)):M.key==="ArrowUp"?(M.preventDefault(),p(-1)):M.key==="Enter"&&(M.preventDefault(),T())},C=M=>{M.target===r&&v()},A=M=>{M.key==="Escape"&&(M.preventDefault(),M.stopPropagation(),v()),M.key==="Tab"&&(M.preventDefault(),(document.activeElement===o?c:o).focus())},F=M=>{(M.ctrlKey||M.metaKey)&&M.key.toLowerCase()==="k"&&(M.preventDefault(),r.hidden?g():v())};return o.addEventListener("input",b),a.addEventListener("click",x),o.addEventListener("keydown",U),r.addEventListener("click",C),r.addEventListener("keydown",A),c.addEventListener("click",v),t==null||t.addEventListener("click",g),t==null||t.setAttribute("aria-expanded","false"),window.addEventListener("keydown",F),()=>{f||(f=!0,v(),o.removeEventListener("input",b),a.removeEventListener("click",x),o.removeEventListener("keydown",U),r.removeEventListener("click",C),r.removeEventListener("keydown",A),c.removeEventListener("click",v),t==null||t.removeEventListener("click",g),t==null||t.removeAttribute("aria-expanded"),window.removeEventListener("keydown",F),r.remove(),i())}}function a1(n,e){const t=[];for(const i of n.listModes())t.push({label:`Mode · ${i.name}`,hint:i.id,run:()=>n.setMode(i.id)});for(const i of n.listScenes())t.push({label:`Scene · ${i.label}`,hint:i.hint,run:()=>n.applyScene(i.id)});for(const i of["orbit","front","top","isometric"])t.push({label:`View · ${i}`,run:()=>n.setView(i)});t.push({label:"Reassemble building",run:()=>n.reassemble()},{label:"Explode floors",run:()=>n.explode(1)},{label:"Fly out of room",run:()=>n.exitRoom()},{label:"Start attract tour",run:()=>n.startTour()},{label:"Stop attract tour",run:()=>n.stopTour()},{label:"Toggle audio cues",run:()=>n.setAudio({enabled:!n.getState().audio.enabled})},{label:"Quality · high",run:()=>n.setQuality("high")},{label:"Quality · medium",run:()=>n.setQuality("medium")},{label:"Quality · low",run:()=>n.setQuality("low")},{label:"Live data",run:()=>n.setTimeRange("live")});for(const i of e.floors){t.push({label:`Floor · ${i.name}`,hint:`${i.id} · live view`,run:()=>n.isolateFloor(i.id)},{label:`Floor plan · ${i.name}`,hint:`${i.id} · 2D`,run:()=>n.flattenFloor(i.id,"2d")});for(const s of i.zones)for(const r of s.rooms)t.push({label:r.name,hint:`${r.id} · ${i.name}`,run:()=>n.enterRoom(r.id)})}return t}function c1(n,e){return n.trim()?e.map(t=>({e:t,s:l1(n,`${t.label} ${t.hint??""}`)})).filter(t=>t.s>=0).sort((t,i)=>i.s-t.s).map(t=>t.e):e.slice(0,$f)}function l1(n,e){const t=n.toLowerCase().replace(/\s+/g,""),i=e.toLowerCase();let s=0,r=0,o=0;for(const a of t){const c=i.indexOf(a,s);if(c===-1)return-1;o=c===s?o+1:0,r+=2+o*2-Math.min(c-s,8)*.1,s=c+1}return r}function Gh(n){return n.replace(/[&<>]/g,e=>e==="&"?"&amp;":e==="<"?"&lt;":"&gt;")}let jr=null,Kr=0;function u1(){let n=document.getElementById("cmdk-styles");n||(n=document.createElement("style"),n.id="cmdk-styles",n.textContent=`
    .cmdk { position: fixed; inset: 0; z-index: 100; display: flex; justify-content: center;
      align-items: flex-start; padding-top: 14vh; background: rgba(2, 6, 12, 0.5);
      backdrop-filter: blur(2px); font-family: system-ui, 'Segoe UI', sans-serif; }
    .cmdk[hidden] { display: none; }
    .cmdk-box { width: min(560px, 92vw); background: rgba(6, 18, 27, 0.97);
      border: 1px solid rgba(54, 230, 255, 0.4); box-shadow: 0 20px 60px rgba(0,0,0,0.6); }
    .cmdk-head { display: flex; border-bottom: 1px solid rgba(54, 230, 255, 0.2); }
    .cmdk-close { flex: 0 0 44px; min-height: 44px; background: transparent; border: none; color: #bfe6f0; font-size: 24px; cursor: pointer; }
    .cmdk-input { width: 100%; box-sizing: border-box; padding: 15px 18px; background: transparent;
      border: none; min-width: 0; color: #eafcff;
      font-size: 15px; outline: none; letter-spacing: 0.02em; }
    .cmdk-input::placeholder { color: #4a6b78; }
    .cmdk-list { list-style: none; margin: 0; padding: 6px; max-height: 46vh; overflow-y: auto; }
    .cmdk-list li { display: flex; justify-content: space-between; align-items: baseline; gap: 12px;
      padding: 9px 12px; color: #bfe6f0; font-size: 13.5px; cursor: pointer; }
    .cmdk-list li span { color: #5f8494; font-size: 11px; font-family: ui-monospace, Consolas, monospace; }
    .cmdk-list li.on { background: rgba(54, 230, 255, 0.14); color: #eafcff; }
    .cmdk-status { padding: 12px 18px; color: #bfe6f0; font-size: 13px; }
    .cmdk-status:empty { display: none; }
    .cmdk-help { padding: 10px 18px; color: #8eaeb9; font-size: 12px; }
    .cmdk-close:focus-visible { outline: 2px solid #36e6ff; outline-offset: -3px; }
    @media (pointer: coarse) { .cmdk-list li { min-height: 44px; box-sizing: border-box; align-items: center; } }
    `,document.head.appendChild(n),jr=n),Kr+=1;let e=!1;return()=>{e||(e=!0,Kr=Math.max(0,Kr-1),Kr===0&&jr&&(jr.remove(),jr=null))}}export{Un as A,Ft as B,Ve as C,KR as D,JR as E,zs as H,bo as M,e1 as O,f1 as P,Zc as R,wt as S,I as V,nr as _,Pt as a,Gc as b,p1 as c,Ed as d,Js as e,Ht as f,It as g,kf as h,QR as i,ro as j,rn as k,m1 as m,d1 as r};
