const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ElectricityMode-BJvowrom.js","assets/colorScales-C4eYgLx1.js","assets/EnvironmentMode-DwZY3w4N.js","assets/OccupancyMode-DbNhQhZb.js"])))=>i.map(i=>d[i]);
var Uf=Object.defineProperty;var Of=(n,e,t)=>e in n?Uf(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var C=(n,e,t)=>Of(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const zf="demo-hotel",kf="IHAPM Demo Hotel",Bf={lat:13.7563,lon:100.5018,northAngleDeg:0},Vf=JSON.parse('[{"id":"F1","name":"Level 1 · Lobby","elevation":0,"height":5,"outline":[[0,0],[40,0],[40,20],[0,20]],"zones":[{"id":"F1-Z-LOBBY","name":"Lobby","function":"lobby","rooms":[{"id":"F1-LOBBY","name":"Grand Lobby","footprint":[[0,0],[26,0],[26,20],[0,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F1-LOBBY-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F1-LOBBY-occupancy"},{"channel":"lux","unit":"lx","deviceId":"dev-F1-LOBBY-lux"}]},{"id":"F1-RECEP","name":"Reception","footprint":[[26,0],[34,0],[34,8],[26,8]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F1-RECEP-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F1-RECEP-occupancy"}]}]},{"id":"F1-Z-AMEN","name":"Amenities","function":"amenity","rooms":[{"id":"F1-CAFE","name":"Café","footprint":[[26,12],[40,12],[40,20],[26,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F1-CAFE-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F1-CAFE-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F1-CAFE-power"}]}]},{"id":"F1-Z-BOH","name":"Back of house","function":"plant","rooms":[{"id":"F1-BOH","name":"Back of House","footprint":[[34,0],[40,0],[40,8],[34,8]],"sensors":[{"channel":"power","unit":"kW","deviceId":"dev-F1-BOH-power"}]}]},{"id":"F1-Z-CORR","name":"Corridor","function":"corridor","rooms":[{"id":"F1-CORR","name":"Service corridor","footprint":[[26,8],[40,8],[40,12],[26,12]],"sensors":[]}]}]},{"id":"F2","name":"Level 2 · Amenities","elevation":5,"height":4.5,"outline":[[0,0],[40,0],[40,20],[0,20]],"zones":[{"id":"F2-Z-AMEN","name":"Amenities","function":"amenity","rooms":[{"id":"F2-REST","name":"Restaurant","footprint":[[0,0],[18,0],[18,20],[0,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F2-REST-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F2-REST-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F2-REST-power"}]},{"id":"F2-GYM","name":"Gym","footprint":[[18,0],[30,0],[30,9],[18,9]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F2-GYM-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F2-GYM-occupancy"}]},{"id":"F2-MTGA","name":"Meeting Room A","footprint":[[30,0],[40,0],[40,9],[30,9]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F2-MTGA-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F2-MTGA-occupancy"}]},{"id":"F2-SPA","name":"Spa","footprint":[[18,11],[30,11],[30,20],[18,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F2-SPA-temperature"},{"channel":"humidity","unit":"pctRH","deviceId":"dev-F2-SPA-humidity"}]},{"id":"F2-MTGB","name":"Meeting Room B","footprint":[[30,11],[40,11],[40,20],[30,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F2-MTGB-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F2-MTGB-occupancy"}]}]},{"id":"F2-Z-CORR","name":"Corridor","function":"corridor","rooms":[{"id":"F2-CORR","name":"Corridor L2","footprint":[[18,9],[40,9],[40,11],[18,11]],"sensors":[]}]}]},{"id":"F3","name":"Level 3 · Guest","elevation":9.5,"height":3.5,"outline":[[0,0],[40,0],[40,20],[0,20]],"zones":[{"id":"F3-Z-GUEST","name":"Guest rooms","function":"guest","rooms":[{"id":"F3-R01","name":"Room 301","footprint":[[0,0],[4,0],[4,8.5],[0,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R01-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R01-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R01-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R01-lux"}]},{"id":"F3-R02","name":"Room 302","footprint":[[4,0],[8,0],[8,8.5],[4,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R02-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R02-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R02-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R02-lux"}]},{"id":"F3-R03","name":"Room 303","footprint":[[8,0],[12,0],[12,8.5],[8,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R03-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R03-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R03-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R03-lux"}]},{"id":"F3-R04","name":"Room 304","footprint":[[12,0],[16,0],[16,8.5],[12,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R04-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R04-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R04-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R04-lux"}]},{"id":"F3-R05","name":"Room 305","footprint":[[16,0],[20,0],[20,8.5],[16,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R05-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R05-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R05-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R05-lux"}]},{"id":"F3-R06","name":"Room 306","footprint":[[20,0],[24,0],[24,8.5],[20,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R06-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R06-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R06-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R06-lux"}]},{"id":"F3-R07","name":"Room 307","footprint":[[24,0],[28,0],[28,8.5],[24,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R07-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R07-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R07-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R07-lux"}]},{"id":"F3-R08","name":"Room 308","footprint":[[28,0],[32,0],[32,8.5],[28,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R08-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R08-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R08-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R08-lux"}]},{"id":"F3-R09","name":"Room 309","footprint":[[32,0],[36,0],[36,8.5],[32,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R09-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R09-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R09-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R09-lux"}]},{"id":"F3-R10","name":"Room 310","footprint":[[36,0],[40,0],[40,8.5],[36,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R10-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R10-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R10-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R10-lux"}]},{"id":"F3-R11","name":"Room 311","footprint":[[0,11.5],[4,11.5],[4,20],[0,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R11-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R11-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R11-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R11-lux"}]},{"id":"F3-R12","name":"Room 312","footprint":[[4,11.5],[8,11.5],[8,20],[4,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R12-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R12-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R12-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R12-lux"}]},{"id":"F3-R13","name":"Room 313","footprint":[[8,11.5],[12,11.5],[12,20],[8,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R13-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R13-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R13-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R13-lux"}]},{"id":"F3-R14","name":"Room 314","footprint":[[12,11.5],[16,11.5],[16,20],[12,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R14-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R14-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R14-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R14-lux"}]},{"id":"F3-R15","name":"Room 315","footprint":[[24,11.5],[28,11.5],[28,20],[24,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R15-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R15-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R15-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R15-lux"}]},{"id":"F3-R16","name":"Room 316","footprint":[[28,11.5],[32,11.5],[32,20],[28,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R16-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R16-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R16-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R16-lux"}]},{"id":"F3-R17","name":"Room 317","footprint":[[32,11.5],[36,11.5],[36,20],[32,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R17-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R17-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R17-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R17-lux"}]},{"id":"F3-R18","name":"Room 318","footprint":[[36,11.5],[40,11.5],[40,20],[36,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R18-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R18-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R18-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R18-lux"}]}]},{"id":"F3-Z-CORR","name":"Corridor","function":"corridor","rooms":[{"id":"F3-CORR","name":"Corridor L3","footprint":[[0,8.5],[40,8.5],[40,11.5],[0,11.5]],"sensors":[{"channel":"occupancy","unit":"people","deviceId":"dev-F3-CORR-occupancy"}]}]},{"id":"F3-Z-CORE","name":"Service core","function":"plant","rooms":[{"id":"F3-CORE","name":"Core L3 (lifts & stairs)","footprint":[[16,11.5],[24,11.5],[24,20],[16,20]],"sensors":[]}]}]},{"id":"F4","name":"Level 4 · Guest","elevation":13,"height":3.5,"outline":[[0,0],[40,0],[40,20],[0,20]],"zones":[{"id":"F4-Z-GUEST","name":"Guest rooms","function":"guest","rooms":[{"id":"F4-R01","name":"Room 401","footprint":[[0,0],[4,0],[4,8.5],[0,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R01-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R01-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R01-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R01-lux"}]},{"id":"F4-R02","name":"Room 402","footprint":[[4,0],[8,0],[8,8.5],[4,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R02-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R02-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R02-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R02-lux"}]},{"id":"F4-R03","name":"Room 403","footprint":[[8,0],[12,0],[12,8.5],[8,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R03-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R03-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R03-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R03-lux"}]},{"id":"F4-R04","name":"Room 404","footprint":[[12,0],[16,0],[16,8.5],[12,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R04-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R04-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R04-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R04-lux"}]},{"id":"F4-R05","name":"Room 405","footprint":[[16,0],[20,0],[20,8.5],[16,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R05-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R05-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R05-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R05-lux"}]},{"id":"F4-R06","name":"Room 406","footprint":[[20,0],[24,0],[24,8.5],[20,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R06-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R06-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R06-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R06-lux"}]},{"id":"F4-R07","name":"Room 407","footprint":[[24,0],[28,0],[28,8.5],[24,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R07-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R07-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R07-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R07-lux"}]},{"id":"F4-R08","name":"Room 408","footprint":[[28,0],[32,0],[32,8.5],[28,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R08-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R08-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R08-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R08-lux"}]},{"id":"F4-R09","name":"Room 409","footprint":[[32,0],[36,0],[36,8.5],[32,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R09-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R09-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R09-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R09-lux"}]},{"id":"F4-R10","name":"Room 410","footprint":[[36,0],[40,0],[40,8.5],[36,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R10-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R10-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R10-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R10-lux"}]},{"id":"F4-R11","name":"Room 411","footprint":[[0,11.5],[4,11.5],[4,20],[0,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R11-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R11-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R11-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R11-lux"}]},{"id":"F4-R12","name":"Room 412","footprint":[[4,11.5],[8,11.5],[8,20],[4,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R12-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R12-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R12-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R12-lux"}]},{"id":"F4-R13","name":"Room 413","footprint":[[8,11.5],[12,11.5],[12,20],[8,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R13-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R13-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R13-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R13-lux"}]},{"id":"F4-R14","name":"Room 414","footprint":[[12,11.5],[16,11.5],[16,20],[12,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R14-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R14-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R14-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R14-lux"}]},{"id":"F4-R15","name":"Room 415","footprint":[[24,11.5],[28,11.5],[28,20],[24,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R15-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R15-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R15-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R15-lux"}]},{"id":"F4-R16","name":"Room 416","footprint":[[28,11.5],[32,11.5],[32,20],[28,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R16-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R16-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R16-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R16-lux"}]},{"id":"F4-R17","name":"Room 417","footprint":[[32,11.5],[36,11.5],[36,20],[32,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R17-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R17-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R17-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R17-lux"}]},{"id":"F4-R18","name":"Room 418","footprint":[[36,11.5],[40,11.5],[40,20],[36,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R18-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R18-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R18-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R18-lux"}]}]},{"id":"F4-Z-CORR","name":"Corridor","function":"corridor","rooms":[{"id":"F4-CORR","name":"Corridor L4","footprint":[[0,8.5],[40,8.5],[40,11.5],[0,11.5]],"sensors":[{"channel":"occupancy","unit":"people","deviceId":"dev-F4-CORR-occupancy"}]}]},{"id":"F4-Z-CORE","name":"Service core","function":"plant","rooms":[{"id":"F4-CORE","name":"Core L4 (lifts & stairs)","footprint":[[16,11.5],[24,11.5],[24,20],[16,20]],"sensors":[]}]}]},{"id":"F5","name":"Level 5 · Guest","elevation":16.5,"height":3.5,"outline":[[0,0],[40,0],[40,20],[0,20]],"zones":[{"id":"F5-Z-GUEST","name":"Guest rooms","function":"guest","rooms":[{"id":"F5-R01","name":"Room 501","footprint":[[0,0],[4,0],[4,8.5],[0,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R01-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R01-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R01-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R01-lux"}]},{"id":"F5-R02","name":"Room 502","footprint":[[4,0],[8,0],[8,8.5],[4,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R02-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R02-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R02-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R02-lux"}]},{"id":"F5-R03","name":"Room 503","footprint":[[8,0],[12,0],[12,8.5],[8,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R03-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R03-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R03-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R03-lux"}]},{"id":"F5-R04","name":"Room 504","footprint":[[12,0],[16,0],[16,8.5],[12,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R04-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R04-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R04-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R04-lux"}]},{"id":"F5-R05","name":"Room 505","footprint":[[16,0],[20,0],[20,8.5],[16,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R05-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R05-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R05-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R05-lux"}]},{"id":"F5-R06","name":"Room 506","footprint":[[20,0],[24,0],[24,8.5],[20,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R06-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R06-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R06-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R06-lux"}]},{"id":"F5-R07","name":"Room 507","footprint":[[24,0],[28,0],[28,8.5],[24,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R07-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R07-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R07-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R07-lux"}]},{"id":"F5-R08","name":"Room 508","footprint":[[28,0],[32,0],[32,8.5],[28,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R08-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R08-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R08-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R08-lux"}]},{"id":"F5-R09","name":"Room 509","footprint":[[32,0],[36,0],[36,8.5],[32,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R09-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R09-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R09-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R09-lux"}]},{"id":"F5-R10","name":"Room 510","footprint":[[36,0],[40,0],[40,8.5],[36,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R10-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R10-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R10-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R10-lux"}]},{"id":"F5-R11","name":"Room 511","footprint":[[0,11.5],[4,11.5],[4,20],[0,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R11-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R11-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R11-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R11-lux"}]},{"id":"F5-R12","name":"Room 512","footprint":[[4,11.5],[8,11.5],[8,20],[4,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R12-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R12-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R12-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R12-lux"}]},{"id":"F5-R13","name":"Room 513","footprint":[[8,11.5],[12,11.5],[12,20],[8,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R13-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R13-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R13-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R13-lux"}]},{"id":"F5-R14","name":"Room 514","footprint":[[12,11.5],[16,11.5],[16,20],[12,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R14-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R14-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R14-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R14-lux"}]},{"id":"F5-R15","name":"Room 515","footprint":[[24,11.5],[28,11.5],[28,20],[24,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R15-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R15-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R15-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R15-lux"}]},{"id":"F5-R16","name":"Room 516","footprint":[[28,11.5],[32,11.5],[32,20],[28,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R16-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R16-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R16-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R16-lux"}]},{"id":"F5-R17","name":"Room 517","footprint":[[32,11.5],[36,11.5],[36,20],[32,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R17-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R17-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R17-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R17-lux"}]},{"id":"F5-R18","name":"Room 518","footprint":[[36,11.5],[40,11.5],[40,20],[36,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R18-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R18-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R18-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R18-lux"}]}]},{"id":"F5-Z-CORR","name":"Corridor","function":"corridor","rooms":[{"id":"F5-CORR","name":"Corridor L5","footprint":[[0,8.5],[40,8.5],[40,11.5],[0,11.5]],"sensors":[{"channel":"occupancy","unit":"people","deviceId":"dev-F5-CORR-occupancy"}]}]},{"id":"F5-Z-CORE","name":"Service core","function":"plant","rooms":[{"id":"F5-CORE","name":"Core L5 (lifts & stairs)","footprint":[[16,11.5],[24,11.5],[24,20],[16,20]],"sensors":[]}]}]},{"id":"F6","name":"Level 6 · Guest","elevation":20,"height":3.5,"outline":[[0,0],[40,0],[40,20],[0,20]],"zones":[{"id":"F6-Z-GUEST","name":"Guest rooms","function":"guest","rooms":[{"id":"F6-R01","name":"Room 601","footprint":[[0,0],[4,0],[4,8.5],[0,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R01-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R01-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R01-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R01-lux"}]},{"id":"F6-R02","name":"Room 602","footprint":[[4,0],[8,0],[8,8.5],[4,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R02-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R02-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R02-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R02-lux"}]},{"id":"F6-R03","name":"Room 603","footprint":[[8,0],[12,0],[12,8.5],[8,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R03-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R03-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R03-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R03-lux"}]},{"id":"F6-R04","name":"Room 604","footprint":[[12,0],[16,0],[16,8.5],[12,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R04-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R04-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R04-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R04-lux"}]},{"id":"F6-R05","name":"Room 605","footprint":[[16,0],[20,0],[20,8.5],[16,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R05-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R05-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R05-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R05-lux"}]},{"id":"F6-R06","name":"Room 606","footprint":[[20,0],[24,0],[24,8.5],[20,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R06-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R06-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R06-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R06-lux"}]},{"id":"F6-R07","name":"Room 607","footprint":[[24,0],[28,0],[28,8.5],[24,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R07-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R07-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R07-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R07-lux"}]},{"id":"F6-R08","name":"Room 608","footprint":[[28,0],[32,0],[32,8.5],[28,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R08-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R08-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R08-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R08-lux"}]},{"id":"F6-R09","name":"Room 609","footprint":[[32,0],[36,0],[36,8.5],[32,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R09-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R09-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R09-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R09-lux"}]},{"id":"F6-R10","name":"Room 610","footprint":[[36,0],[40,0],[40,8.5],[36,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R10-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R10-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R10-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R10-lux"}]},{"id":"F6-R11","name":"Room 611","footprint":[[0,11.5],[4,11.5],[4,20],[0,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R11-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R11-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R11-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R11-lux"}]},{"id":"F6-R12","name":"Room 612","footprint":[[4,11.5],[8,11.5],[8,20],[4,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R12-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R12-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R12-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R12-lux"}]},{"id":"F6-R13","name":"Room 613","footprint":[[8,11.5],[12,11.5],[12,20],[8,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R13-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R13-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R13-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R13-lux"}]},{"id":"F6-R14","name":"Room 614","footprint":[[12,11.5],[16,11.5],[16,20],[12,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R14-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R14-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R14-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R14-lux"}]},{"id":"F6-R15","name":"Room 615","footprint":[[24,11.5],[28,11.5],[28,20],[24,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R15-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R15-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R15-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R15-lux"}]},{"id":"F6-R16","name":"Room 616","footprint":[[28,11.5],[32,11.5],[32,20],[28,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R16-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R16-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R16-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R16-lux"}]},{"id":"F6-R17","name":"Room 617","footprint":[[32,11.5],[36,11.5],[36,20],[32,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R17-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R17-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R17-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R17-lux"}]},{"id":"F6-R18","name":"Room 618","footprint":[[36,11.5],[40,11.5],[40,20],[36,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R18-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R18-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R18-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R18-lux"}]}]},{"id":"F6-Z-CORR","name":"Corridor","function":"corridor","rooms":[{"id":"F6-CORR","name":"Corridor L6","footprint":[[0,8.5],[40,8.5],[40,11.5],[0,11.5]],"sensors":[{"channel":"occupancy","unit":"people","deviceId":"dev-F6-CORR-occupancy"}]}]},{"id":"F6-Z-CORE","name":"Service core","function":"plant","rooms":[{"id":"F6-CORE","name":"Core L6 (lifts & stairs)","footprint":[[16,11.5],[24,11.5],[24,20],[16,20]],"sensors":[]}]}]},{"id":"F7","name":"Level 7 · Guest","elevation":23.5,"height":3.5,"outline":[[0,0],[40,0],[40,20],[0,20]],"zones":[{"id":"F7-Z-GUEST","name":"Guest rooms","function":"guest","rooms":[{"id":"F7-R01","name":"Room 701","footprint":[[0,0],[4,0],[4,8.5],[0,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R01-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R01-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R01-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R01-lux"}]},{"id":"F7-R02","name":"Room 702","footprint":[[4,0],[8,0],[8,8.5],[4,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R02-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R02-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R02-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R02-lux"}]},{"id":"F7-R03","name":"Room 703","footprint":[[8,0],[12,0],[12,8.5],[8,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R03-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R03-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R03-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R03-lux"}]},{"id":"F7-R04","name":"Room 704","footprint":[[12,0],[16,0],[16,8.5],[12,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R04-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R04-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R04-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R04-lux"}]},{"id":"F7-R05","name":"Room 705","footprint":[[16,0],[20,0],[20,8.5],[16,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R05-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R05-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R05-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R05-lux"}]},{"id":"F7-R06","name":"Room 706","footprint":[[20,0],[24,0],[24,8.5],[20,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R06-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R06-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R06-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R06-lux"}]},{"id":"F7-R07","name":"Room 707","footprint":[[24,0],[28,0],[28,8.5],[24,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R07-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R07-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R07-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R07-lux"}]},{"id":"F7-R08","name":"Room 708","footprint":[[28,0],[32,0],[32,8.5],[28,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R08-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R08-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R08-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R08-lux"}]},{"id":"F7-R09","name":"Room 709","footprint":[[32,0],[36,0],[36,8.5],[32,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R09-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R09-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R09-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R09-lux"}]},{"id":"F7-R10","name":"Room 710","footprint":[[36,0],[40,0],[40,8.5],[36,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R10-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R10-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R10-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R10-lux"}]},{"id":"F7-R11","name":"Room 711","footprint":[[0,11.5],[4,11.5],[4,20],[0,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R11-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R11-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R11-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R11-lux"}]},{"id":"F7-R12","name":"Room 712","footprint":[[4,11.5],[8,11.5],[8,20],[4,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R12-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R12-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R12-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R12-lux"}]},{"id":"F7-R13","name":"Room 713","footprint":[[8,11.5],[12,11.5],[12,20],[8,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R13-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R13-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R13-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R13-lux"}]},{"id":"F7-R14","name":"Room 714","footprint":[[12,11.5],[16,11.5],[16,20],[12,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R14-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R14-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R14-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R14-lux"}]},{"id":"F7-R15","name":"Room 715","footprint":[[24,11.5],[28,11.5],[28,20],[24,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R15-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R15-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R15-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R15-lux"}]},{"id":"F7-R16","name":"Room 716","footprint":[[28,11.5],[32,11.5],[32,20],[28,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R16-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R16-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R16-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R16-lux"}]},{"id":"F7-R17","name":"Room 717","footprint":[[32,11.5],[36,11.5],[36,20],[32,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R17-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R17-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R17-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R17-lux"}]},{"id":"F7-R18","name":"Room 718","footprint":[[36,11.5],[40,11.5],[40,20],[36,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R18-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R18-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R18-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R18-lux"}]}]},{"id":"F7-Z-CORR","name":"Corridor","function":"corridor","rooms":[{"id":"F7-CORR","name":"Corridor L7","footprint":[[0,8.5],[40,8.5],[40,11.5],[0,11.5]],"sensors":[{"channel":"occupancy","unit":"people","deviceId":"dev-F7-CORR-occupancy"}]}]},{"id":"F7-Z-CORE","name":"Service core","function":"plant","rooms":[{"id":"F7-CORE","name":"Core L7 (lifts & stairs)","footprint":[[16,11.5],[24,11.5],[24,20],[16,20]],"sensors":[]}]}]},{"id":"F8","name":"Level 8 · Plant & Roof","elevation":27,"height":4,"outline":[[0,0],[40,0],[40,20],[0,20]],"zones":[{"id":"F8-Z-PLANT","name":"Plant","function":"plant","rooms":[{"id":"F8-PLANT","name":"Plant Room","footprint":[[0,0],[20,0],[20,20],[0,20]],"sensors":[{"channel":"power","unit":"kW","deviceId":"dev-F8-PLANT-power"},{"channel":"temperature","unit":"degC","deviceId":"dev-F8-PLANT-temperature"}]},{"id":"F8-LIFT","name":"Lift Machine Room","footprint":[[20,0],[28,0],[28,20],[20,20]],"sensors":[{"channel":"power","unit":"kW","deviceId":"dev-F8-LIFT-power"}]}]},{"id":"F8-Z-ROOF","name":"Roof","function":"amenity","rooms":[{"id":"F8-TERR","name":"Roof Terrace","footprint":[[28,0],[40,0],[40,20],[28,20]],"sensors":[{"channel":"lux","unit":"lx","deviceId":"dev-F8-TERR-lux"},{"channel":"occupancy","unit":"people","deviceId":"dev-F8-TERR-occupancy"}]}]}]}]'),RR={id:zf,name:kf,location:Bf,floors:Vf},Hf="modulepreload",Gf=function(n){return"/ihapm-bms-showcase/"+n},ul={},Qs=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let o=function(l){return Promise.all(l.map(u=>Promise.resolve(u).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=o(t.map(l=>{if(l=Gf(l),l in ul)return;ul[l]=!0;const u=l.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":Hf,u||(d.as="script"),d.crossOrigin="",d.href=l,c&&d.setAttribute("nonce",c),document.head.appendChild(d),u)return new Promise((f,g)=>{d.addEventListener("load",f),d.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mc="170",Zi={ROTATE:0,DOLLY:1,PAN:2},Gi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Wf=0,hl=1,$f=2,Fh=1,Xf=2,An=3,Ln=0,$t=1,sn=2,Pn=0,Yi=1,Nn=2,dl=3,fl=4,Zf=5,ci=100,Yf=101,qf=102,jf=103,Kf=104,Jf=200,Qf=201,ep=202,tp=203,wa=204,Ta=205,np=206,ip=207,sp=208,rp=209,op=210,ap=211,cp=212,lp=213,up=214,Ra=0,Aa=1,Ca=2,Qi=3,Ia=4,Pa=5,Fa=6,Da=7,Dh=0,hp=1,dp=2,Yn=0,Lh=1,Nh=2,Uh=3,bc=4,fp=5,Oh=6,zh=7,kh=300,es=301,ts=302,La=303,Na=304,vo=306,Ua=1e3,ui=1001,Oa=1002,Kt=1003,pp=1004,er=1005,_n=1006,Co=1007,hi=1008,Un=1009,Bh=1010,Vh=1011,Us=1012,Ec=1013,di=1014,xn=1015,Fn=1016,wc=1017,Tc=1018,ns=1020,Hh=35902,Gh=1021,Wh=1022,fn=1023,$h=1024,Xh=1025,qi=1026,is=1027,Rc=1028,Ac=1029,Zh=1030,Cc=1031,Ic=1033,Yr=33776,qr=33777,jr=33778,Kr=33779,za=35840,ka=35841,Ba=35842,Va=35843,Ha=36196,Ga=37492,Wa=37496,$a=37808,Xa=37809,Za=37810,Ya=37811,qa=37812,ja=37813,Ka=37814,Ja=37815,Qa=37816,ec=37817,tc=37818,nc=37819,ic=37820,sc=37821,Jr=36492,rc=36494,oc=36495,Yh=36283,ac=36284,cc=36285,lc=36286,mp=3200,gp=3201,vp=0,_p=1,Zn="",en="srgb",ls="srgb-linear",_o="linear",it="srgb",bi=7680,pl=519,xp=512,yp=513,Sp=514,qh=515,Mp=516,bp=517,Ep=518,wp=519,ml=35044,to=35048,gl="300 es",In=2e3,no=2001;class vi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vl=1234567;const ji=Math.PI/180,Os=180/Math.PI;function _i(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]).toLowerCase()}function Rt(n,e,t){return Math.max(e,Math.min(t,n))}function Pc(n,e){return(n%e+e)%e}function Tp(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Rp(n,e,t){return n!==e?(t-n)/(e-n):0}function Is(n,e,t){return(1-t)*n+t*e}function Ap(n,e,t,i){return Is(n,e,1-Math.exp(-t*i))}function Cp(n,e=1){return e-Math.abs(Pc(n,e*2)-e)}function Ip(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Pp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Fp(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Dp(n,e){return n+Math.random()*(e-n)}function Lp(n){return n*(.5-Math.random())}function Np(n){n!==void 0&&(vl=n);let e=vl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Up(n){return n*ji}function Op(n){return n*Os}function zp(n){return(n&n-1)===0&&n!==0}function kp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Bp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Vp(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),d=o((e-i)/2),f=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,c*h,c*d,a*l);break;case"YZY":n.set(c*d,a*u,c*h,a*l);break;case"ZXZ":n.set(c*h,c*d,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*f,a*l);break;case"YXY":n.set(c*f,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Bi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function zt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const _t={DEG2RAD:ji,RAD2DEG:Os,generateUUID:_i,clamp:Rt,euclideanModulo:Pc,mapLinear:Tp,inverseLerp:Rp,lerp:Is,damp:Ap,pingpong:Cp,smoothstep:Ip,smootherstep:Pp,randInt:Fp,randFloat:Dp,randFloatSpread:Lp,seededRandom:Np,degToRad:Up,radToDeg:Op,isPowerOfTwo:zp,ceilPowerOfTwo:kp,floorPowerOfTwo:Bp,setQuaternionFromProperEuler:Vp,normalize:zt,denormalize:Bi};class te{constructor(e=0,t=0){te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,i,s,r,o,a,c,l){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],f=i[5],g=i[8],v=s[0],m=s[3],p=s[6],w=s[1],M=s[4],x=s[7],U=s[2],R=s[5],A=s[8];return r[0]=o*v+a*w+c*U,r[3]=o*m+a*M+c*R,r[6]=o*p+a*x+c*A,r[1]=l*v+u*w+h*U,r[4]=l*m+u*M+h*R,r[7]=l*p+u*x+h*A,r[2]=d*v+f*w+g*U,r[5]=d*m+f*M+g*R,r[8]=d*p+f*x+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,g=t*h+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(s*l-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=d*v,e[4]=(u*t-s*c)*v,e[5]=(s*r-a*t)*v,e[6]=f*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Io.makeScale(e,t)),this}rotate(e){return this.premultiply(Io.makeRotation(-e)),this}translate(e,t){return this.premultiply(Io.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Io=new We;function jh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function io(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Hp(){const n=io("canvas");return n.style.display="block",n}const _l={};function Rs(n){n in _l||(_l[n]=!0,console.warn(n))}function Gp(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Wp(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function $p(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const je={enabled:!0,workingColorSpace:ls,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===it&&(n.r=Dn(n.r),n.g=Dn(n.g),n.b=Dn(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===it&&(n.r=Ki(n.r),n.g=Ki(n.g),n.b=Ki(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Zn?_o:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Dn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ki(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const xl=[.64,.33,.3,.6,.15,.06],yl=[.2126,.7152,.0722],Sl=[.3127,.329],Ml=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bl=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);je.define({[ls]:{primaries:xl,whitePoint:Sl,transfer:_o,toXYZ:Ml,fromXYZ:bl,luminanceCoefficients:yl,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:xl,whitePoint:Sl,transfer:it,toXYZ:Ml,fromXYZ:bl,luminanceCoefficients:yl,outputColorSpaceConfig:{drawingBufferColorSpace:en}}});let Ei;class Xp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ei===void 0&&(Ei=io("canvas")),Ei.width=e.width,Ei.height=e.height;const i=Ei.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ei}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=io("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Dn(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Dn(t[i]/255)*255):t[i]=Dn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zp=0;class Kh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=_i(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Po(s[o].image)):r.push(Po(s[o]))}else r=Po(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Po(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Xp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yp=0;class Ut extends vi{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,i=ui,s=ui,r=_n,o=hi,a=fn,c=Un,l=Ut.DEFAULT_ANISOTROPY,u=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=_i(),this.name="",this.source=new Kh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ua:e.x=e.x-Math.floor(e.x);break;case ui:e.x=e.x<0?0:1;break;case Oa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ua:e.y=e.y-Math.floor(e.y);break;case ui:e.y=e.y<0?0:1;break;case Oa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=kh;Ut.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,i=0,s=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,x=(f+1)/2,U=(p+1)/2,R=(u+d)/4,A=(h+v)/4,D=(g+m)/4;return M>x&&M>U?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=R/i,r=A/i):x>U?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=R/s,r=D/s):U<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),i=A/r,s=D/r),this.set(i,s,r,t),this}let w=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(h-v)/w,this.z=(d-u)/w,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qp extends vi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Ut(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Kh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mn extends qp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Jh extends Ut{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jp extends Ut{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(h!==v||c!==d||l!==f||u!==g){let m=1-a;const p=c*d+l*f+u*g+h*v,w=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const U=Math.sqrt(M),R=Math.atan2(U,p*w);m=Math.sin(m*R)/U,a=Math.sin(a*R)/U}const x=a*w;if(c=c*m+d*x,l=l*m+f*x,u=u*m+g*x,h=h*m+v*x,m===1-a){const U=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=U,l*=U,u*=U,h*=U}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-a*f,e[t+2]=l*g+u*f+a*d-c*h,e[t+3]=u*g-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),h=a(r/2),d=c(i/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(i>a&&i>h){const f=2*Math.sqrt(1+i-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-i-h);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-i-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(El.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(El.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+c*l+o*h-a*u,this.y=i+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Fo.copy(this).projectOnVector(e),this.sub(Fo)}reflect(e){return this.sub(Fo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fo=new I,El=new fi;class Xt{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ln):ln.fromBufferAttribute(r,o),ln.applyMatrix4(e.matrixWorld),this.expandByPoint(ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),tr.copy(i.boundingBox)),tr.applyMatrix4(e.matrixWorld),this.union(tr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vs),nr.subVectors(this.max,vs),wi.subVectors(e.a,vs),Ti.subVectors(e.b,vs),Ri.subVectors(e.c,vs),Bn.subVectors(Ti,wi),Vn.subVectors(Ri,Ti),Qn.subVectors(wi,Ri);let t=[0,-Bn.z,Bn.y,0,-Vn.z,Vn.y,0,-Qn.z,Qn.y,Bn.z,0,-Bn.x,Vn.z,0,-Vn.x,Qn.z,0,-Qn.x,-Bn.y,Bn.x,0,-Vn.y,Vn.x,0,-Qn.y,Qn.x,0];return!Do(t,wi,Ti,Ri,nr)||(t=[1,0,0,0,1,0,0,0,1],!Do(t,wi,Ti,Ri,nr))?!1:(ir.crossVectors(Bn,Vn),t=[ir.x,ir.y,ir.z],Do(t,wi,Ti,Ri,nr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const bn=[new I,new I,new I,new I,new I,new I,new I,new I],ln=new I,tr=new Xt,wi=new I,Ti=new I,Ri=new I,Bn=new I,Vn=new I,Qn=new I,vs=new I,nr=new I,ir=new I,ei=new I;function Do(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ei.fromArray(n,r);const a=s.x*Math.abs(ei.x)+s.y*Math.abs(ei.y)+s.z*Math.abs(ei.z),c=e.dot(ei),l=t.dot(ei),u=i.dot(ei);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Kp=new Xt,_s=new I,Lo=new I;class xi{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Kp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_s.subVectors(e,this.center);const t=_s.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(_s,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_s.copy(e.center).add(Lo)),this.expandByPoint(_s.copy(e.center).sub(Lo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const En=new I,No=new I,sr=new I,Hn=new I,Uo=new I,rr=new I,Oo=new I;class Zs{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,En)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=En.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(En.copy(this.origin).addScaledVector(this.direction,t),En.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){No.copy(e).add(t).multiplyScalar(.5),sr.copy(t).sub(e).normalize(),Hn.copy(this.origin).sub(No);const r=e.distanceTo(t)*.5,o=-this.direction.dot(sr),a=Hn.dot(this.direction),c=-Hn.dot(sr),l=Hn.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const v=1/u;h*=v,d*=v,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(No).addScaledVector(sr,d),f}intersectSphere(e,t){En.subVectors(e.center,this.origin);const i=En.dot(this.direction),s=En.dot(En)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,En)!==null}intersectTriangle(e,t,i,s,r){Uo.subVectors(t,e),rr.subVectors(i,e),Oo.crossVectors(Uo,rr);let o=this.direction.dot(Oo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hn.subVectors(this.origin,e);const c=a*this.direction.dot(rr.crossVectors(Hn,rr));if(c<0)return null;const l=a*this.direction.dot(Uo.cross(Hn));if(l<0||c+l>o)return null;const u=-a*Hn.dot(Oo);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,i,s,r,o,a,c,l,u,h,d,f,g,v,m){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,u,h,d,f,g,v,m)}set(e,t,i,s,r,o,a,c,l,u,h,d,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Ai.setFromMatrixColumn(e,0).length(),r=1/Ai.setFromMatrixColumn(e,1).length(),o=1/Ai.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,g=a*u,v=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-v*l,t[9]=-a*c,t[2]=v-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,g=l*u,v=l*h;t[0]=d+v*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=v+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,g=l*u,v=l*h;t[0]=d-v*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=v-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,f=o*h,g=a*u,v=a*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+v,t[1]=c*h,t[5]=v*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=v-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-v*h}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+v,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jp,e,Qp)}lookAt(e,t,i){const s=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),Gn.crossVectors(i,qt),Gn.lengthSq()===0&&(Math.abs(i.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),Gn.crossVectors(i,qt)),Gn.normalize(),or.crossVectors(qt,Gn),s[0]=Gn.x,s[4]=or.x,s[8]=qt.x,s[1]=Gn.y,s[5]=or.y,s[9]=qt.y,s[2]=Gn.z,s[6]=or.z,s[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],w=i[3],M=i[7],x=i[11],U=i[15],R=s[0],A=s[4],D=s[8],b=s[12],S=s[1],P=s[5],j=s[9],V=s[13],$=s[2],Q=s[6],H=s[10],ie=s[14],G=s[3],ue=s[7],de=s[11],he=s[15];return r[0]=o*R+a*S+c*$+l*G,r[4]=o*A+a*P+c*Q+l*ue,r[8]=o*D+a*j+c*H+l*de,r[12]=o*b+a*V+c*ie+l*he,r[1]=u*R+h*S+d*$+f*G,r[5]=u*A+h*P+d*Q+f*ue,r[9]=u*D+h*j+d*H+f*de,r[13]=u*b+h*V+d*ie+f*he,r[2]=g*R+v*S+m*$+p*G,r[6]=g*A+v*P+m*Q+p*ue,r[10]=g*D+v*j+m*H+p*de,r[14]=g*b+v*V+m*ie+p*he,r[3]=w*R+M*S+x*$+U*G,r[7]=w*A+M*P+x*Q+U*ue,r[11]=w*D+M*j+x*H+U*de,r[15]=w*b+M*V+x*ie+U*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*c*h-s*l*h-r*a*d+i*l*d+s*a*f-i*c*f)+v*(+t*c*f-t*l*d+r*o*d-s*o*f+s*l*u-r*c*u)+m*(+t*l*h-t*a*f-r*o*h+i*o*f+r*a*u-i*l*u)+p*(-s*a*u-t*c*h+t*a*d+s*o*h-i*o*d+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],w=h*m*l-v*d*l+v*c*f-a*m*f-h*c*p+a*d*p,M=g*d*l-u*m*l-g*c*f+o*m*f+u*c*p-o*d*p,x=u*v*l-g*h*l+g*a*f-o*v*f-u*a*p+o*h*p,U=g*h*c-u*v*c-g*a*d+o*v*d+u*a*m-o*h*m,R=t*w+i*M+s*x+r*U;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=w*A,e[1]=(v*d*r-h*m*r-v*s*f+i*m*f+h*s*p-i*d*p)*A,e[2]=(a*m*r-v*c*r+v*s*l-i*m*l-a*s*p+i*c*p)*A,e[3]=(h*c*r-a*d*r-h*s*l+i*d*l+a*s*f-i*c*f)*A,e[4]=M*A,e[5]=(u*m*r-g*d*r+g*s*f-t*m*f-u*s*p+t*d*p)*A,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*p-t*c*p)*A,e[7]=(o*d*r-u*c*r+u*s*l-t*d*l-o*s*f+t*c*f)*A,e[8]=x*A,e[9]=(g*h*r-u*v*r-g*i*f+t*v*f+u*i*p-t*h*p)*A,e[10]=(o*v*r-g*a*r+g*i*l-t*v*l-o*i*p+t*a*p)*A,e[11]=(u*a*r-o*h*r-u*i*l+t*h*l+o*i*f-t*a*f)*A,e[12]=U*A,e[13]=(u*v*s-g*h*s+g*i*d-t*v*d-u*i*m+t*h*m)*A,e[14]=(g*a*s-o*v*s-g*i*c+t*v*c+o*i*m-t*a*m)*A,e[15]=(o*h*s-u*a*s+u*i*c-t*h*c-o*i*d+t*a*d)*A,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,g=r*h,v=o*u,m=o*h,p=a*h,w=c*l,M=c*u,x=c*h,U=i.x,R=i.y,A=i.z;return s[0]=(1-(v+p))*U,s[1]=(f+x)*U,s[2]=(g-M)*U,s[3]=0,s[4]=(f-x)*R,s[5]=(1-(d+p))*R,s[6]=(m+w)*R,s[7]=0,s[8]=(g+M)*A,s[9]=(m-w)*A,s[10]=(1-(d+v))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Ai.set(s[0],s[1],s[2]).length();const o=Ai.set(s[4],s[5],s[6]).length(),a=Ai.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],un.copy(this);const l=1/r,u=1/o,h=1/a;return un.elements[0]*=l,un.elements[1]*=l,un.elements[2]*=l,un.elements[4]*=u,un.elements[5]*=u,un.elements[6]*=u,un.elements[8]*=h,un.elements[9]*=h,un.elements[10]*=h,t.setFromRotationMatrix(un),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=In){const c=this.elements,l=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s);let f,g;if(a===In)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===no)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=In){const c=this.elements,l=1/(t-e),u=1/(i-s),h=1/(o-r),d=(t+e)*l,f=(i+s)*u;let g,v;if(a===In)g=(o+r)*h,v=-2*h;else if(a===no)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ai=new I,un=new ot,Jp=new I(0,0,0),Qp=new I(1,1,1),Gn=new I,or=new I,qt=new I,wl=new ot,Tl=new fi;class On{constructor(e=0,t=0,i=0,s=On.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return wl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tl.setFromEuler(this),this.setFromQuaternion(Tl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}On.DEFAULT_ORDER="XYZ";class Fc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let em=0;const Rl=new I,Ci=new fi,wn=new ot,ar=new I,xs=new I,tm=new I,nm=new fi,Al=new I(1,0,0),Cl=new I(0,1,0),Il=new I(0,0,1),Pl={type:"added"},im={type:"removed"},Ii={type:"childadded",child:null},zo={type:"childremoved",child:null};class Ot extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new I,t=new On,i=new fi,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ot},normalMatrix:{value:new We}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.premultiply(Ci),this}rotateX(e){return this.rotateOnAxis(Al,e)}rotateY(e){return this.rotateOnAxis(Cl,e)}rotateZ(e){return this.rotateOnAxis(Il,e)}translateOnAxis(e,t){return Rl.copy(e).applyQuaternion(this.quaternion),this.position.add(Rl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Al,e)}translateY(e){return this.translateOnAxis(Cl,e)}translateZ(e){return this.translateOnAxis(Il,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ar.copy(e):ar.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(xs,ar,this.up):wn.lookAt(ar,xs,this.up),this.quaternion.setFromRotationMatrix(wn),s&&(wn.extractRotation(s.matrixWorld),Ci.setFromRotationMatrix(wn),this.quaternion.premultiply(Ci.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pl),Ii.child=e,this.dispatchEvent(Ii),Ii.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(im),zo.child=e,this.dispatchEvent(zo),zo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pl),Ii.child=e,this.dispatchEvent(Ii),Ii.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,e,tm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,nm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Ot.DEFAULT_UP=new I(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new I,Tn=new I,ko=new I,Rn=new I,Pi=new I,Fi=new I,Fl=new I,Bo=new I,Vo=new I,Ho=new I,Go=new xt,Wo=new xt,$o=new xt;class rn{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),hn.subVectors(e,t),s.cross(hn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){hn.subVectors(s,t),Tn.subVectors(i,t),ko.subVectors(e,t);const o=hn.dot(hn),a=hn.dot(Tn),c=hn.dot(ko),l=Tn.dot(Tn),u=Tn.dot(ko),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,Rn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Rn.x),c.addScaledVector(o,Rn.y),c.addScaledVector(a,Rn.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return Go.setScalar(0),Wo.setScalar(0),$o.setScalar(0),Go.fromBufferAttribute(e,t),Wo.fromBufferAttribute(e,i),$o.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Go,r.x),o.addScaledVector(Wo,r.y),o.addScaledVector($o,r.z),o}static isFrontFacing(e,t,i,s){return hn.subVectors(i,t),Tn.subVectors(e,t),hn.cross(Tn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),hn.cross(Tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return rn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Pi.subVectors(s,i),Fi.subVectors(r,i),Bo.subVectors(e,i);const c=Pi.dot(Bo),l=Fi.dot(Bo);if(c<=0&&l<=0)return t.copy(i);Vo.subVectors(e,s);const u=Pi.dot(Vo),h=Fi.dot(Vo);if(u>=0&&h<=u)return t.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Pi,o);Ho.subVectors(e,r);const f=Pi.dot(Ho),g=Fi.dot(Ho);if(g>=0&&f<=g)return t.copy(r);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Fi,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Fl.subVectors(r,s),a=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(Fl,a);const p=1/(m+v+d);return o=v*p,a=d*p,t.copy(i).addScaledVector(Pi,o).addScaledVector(Fi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Qh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},cr={h:0,s:0,l:0};function Xo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Be{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=en){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=je.workingColorSpace){return this.r=e,this.g=t,this.b=i,je.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=je.workingColorSpace){if(e=Pc(e,1),t=Rt(t,0,1),i=Rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Xo(o,r,e+1/3),this.g=Xo(o,r,e),this.b=Xo(o,r,e-1/3)}return je.toWorkingColorSpace(this,s),this}setStyle(e,t=en){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=en){const i=Qh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Dn(e.r),this.g=Dn(e.g),this.b=Dn(e.b),this}copyLinearToSRGB(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=en){return je.fromWorkingColorSpace(Nt.copy(this),e),Math.round(Rt(Nt.r*255,0,255))*65536+Math.round(Rt(Nt.g*255,0,255))*256+Math.round(Rt(Nt.b*255,0,255))}getHexString(e=en){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(Nt.copy(this),t);const i=Nt.r,s=Nt.g,r=Nt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=en){je.fromWorkingColorSpace(Nt.copy(this),e);const t=Nt.r,i=Nt.g,s=Nt.b;return e!==en?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Wn),this.setHSL(Wn.h+e,Wn.s+t,Wn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wn),e.getHSL(cr);const i=Is(Wn.h,cr.h,t),s=Is(Wn.s,cr.s,t),r=Is(Wn.l,cr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new Be;Be.NAMES=Qh;let sm=0;class us extends vi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=_i(),this.name="",this.blending=Yi,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wa,this.blendDst=Ta,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bi,this.stencilZFail=bi,this.stencilZPass=bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Yi&&(i.blending=this.blending),this.side!==Ln&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==wa&&(i.blendSrc=this.blendSrc),this.blendDst!==Ta&&(i.blendDst=this.blendDst),this.blendEquation!==ci&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Qi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==bi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==bi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class xo extends us{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=Dh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new I,lr=new te;class Pt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ml,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)lr.fromBufferAttribute(this,t),lr.applyMatrix3(e),this.setXY(t,lr.x,lr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Bi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=zt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),s=zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),s=zt(s,this.array),r=zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ml&&(e.usage=this.usage),e}}class ed extends Pt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class td extends Pt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class bt extends Pt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let rm=0;const Qt=new ot,Zo=new Ot,Di=new I,jt=new Xt,ys=new Xt,Tt=new I;class Ft extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jh(e)?td:ed)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new We().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,i){return Qt.makeTranslation(e,t,i),this.applyMatrix4(Qt),this}scale(e,t,i){return Qt.makeScale(e,t,i),this.applyMatrix4(Qt),this}lookAt(e){return Zo.lookAt(e),Zo.updateMatrix(),this.applyMatrix4(Zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Di).negate(),this.translate(Di.x,Di.y,Di.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new bt(i,3))}else{for(let i=0,s=t.count;i<s;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];jt.setFromBufferAttribute(r),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ys.setFromBufferAttribute(a),this.morphTargetsRelative?(Tt.addVectors(jt.min,ys.min),jt.expandByPoint(Tt),Tt.addVectors(jt.max,ys.max),jt.expandByPoint(Tt)):(jt.expandByPoint(ys.min),jt.expandByPoint(ys.max))}jt.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Tt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Tt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Tt.fromBufferAttribute(a,l),c&&(Di.fromBufferAttribute(e,l),Tt.add(Di)),s=Math.max(s,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<i.count;D++)a[D]=new I,c[D]=new I;const l=new I,u=new I,h=new I,d=new te,f=new te,g=new te,v=new I,m=new I;function p(D,b,S){l.fromBufferAttribute(i,D),u.fromBufferAttribute(i,b),h.fromBufferAttribute(i,S),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,S),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(P),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(P),a[D].add(v),a[b].add(v),a[S].add(v),c[D].add(m),c[b].add(m),c[S].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let D=0,b=w.length;D<b;++D){const S=w[D],P=S.start,j=S.count;for(let V=P,$=P+j;V<$;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const M=new I,x=new I,U=new I,R=new I;function A(D){U.fromBufferAttribute(s,D),R.copy(U);const b=a[D];M.copy(b),M.sub(U.multiplyScalar(U.dot(b))).normalize(),x.crossVectors(R,b);const P=x.dot(c[D])<0?-1:1;o.setXYZW(D,M.x,M.y,M.z,P)}for(let D=0,b=w.length;D<b;++D){const S=w[D],P=S.start,j=S.count;for(let V=P,$=P+j;V<$;V+=3)A(e.getX(V+0)),A(e.getX(V+1)),A(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,u=new I,h=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new Pt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ft,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dl=new ot,ti=new Zs,ur=new xi,Ll=new I,hr=new I,dr=new I,fr=new I,Yo=new I,pr=new I,Nl=new I,mr=new I;class It extends Ot{constructor(e=new Ft,t=new xo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){pr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(Yo.fromBufferAttribute(h,e),o?pr.addScaledVector(Yo,u):pr.addScaledVector(Yo.sub(t),u))}t.add(pr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ur.copy(i.boundingSphere),ur.applyMatrix4(r),ti.copy(e.ray).recast(e.near),!(ur.containsPoint(ti.origin)===!1&&(ti.intersectSphere(ur,Ll)===null||ti.origin.distanceToSquared(Ll)>(e.far-e.near)**2))&&(Dl.copy(r).invert(),ti.copy(e.ray).applyMatrix4(Dl),!(i.boundingBox!==null&&ti.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ti)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],w=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=w,U=M;x<U;x+=3){const R=a.getX(x),A=a.getX(x+1),D=a.getX(x+2);s=gr(this,p,e,i,l,u,h,R,A,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const w=a.getX(m),M=a.getX(m+1),x=a.getX(m+2);s=gr(this,o,e,i,l,u,h,w,M,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],w=Math.max(m.start,f.start),M=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=w,U=M;x<U;x+=3){const R=x,A=x+1,D=x+2;s=gr(this,p,e,i,l,u,h,R,A,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const w=m,M=m+1,x=m+2;s=gr(this,o,e,i,l,u,h,w,M,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function om(n,e,t,i,s,r,o,a){let c;if(e.side===$t?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===Ln,a),c===null)return null;mr.copy(a),mr.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(mr);return l<t.near||l>t.far?null:{distance:l,point:mr.clone(),object:n}}function gr(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,hr),n.getVertexPosition(c,dr),n.getVertexPosition(l,fr);const u=om(n,e,t,i,hr,dr,fr,Nl);if(u){const h=new I;rn.getBarycoord(Nl,hr,dr,fr,h),s&&(u.uv=rn.getInterpolatedAttribute(s,a,c,l,h,new te)),r&&(u.uv1=rn.getInterpolatedAttribute(r,a,c,l,h,new te)),o&&(u.normal=rn.getInterpolatedAttribute(o,a,c,l,h,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new I,materialIndex:0};rn.getNormal(hr,dr,fr,d.normal),u.face=d,u.barycoord=h}return u}class Ys extends Ft{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new bt(l,3)),this.setAttribute("normal",new bt(u,3)),this.setAttribute("uv",new bt(h,2));function g(v,m,p,w,M,x,U,R,A,D,b){const S=x/A,P=U/D,j=x/2,V=U/2,$=R/2,Q=A+1,H=D+1;let ie=0,G=0;const ue=new I;for(let de=0;de<H;de++){const he=de*P-V;for(let Ae=0;Ae<Q;Ae++){const Ke=Ae*S-j;ue[v]=Ke*w,ue[m]=he*M,ue[p]=$,l.push(ue.x,ue.y,ue.z),ue[v]=0,ue[m]=0,ue[p]=R>0?1:-1,u.push(ue.x,ue.y,ue.z),h.push(Ae/A),h.push(1-de/D),ie+=1}}for(let de=0;de<D;de++)for(let he=0;he<A;he++){const Ae=d+he+Q*de,Ke=d+he+Q*(de+1),Z=d+(he+1)+Q*(de+1),re=d+(he+1)+Q*de;c.push(Ae,Ke,re),c.push(Ke,Z,re),G+=6}a.addGroup(f,G,b),f+=G,d+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ys(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ss(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Vt(n){const e={};for(let t=0;t<n.length;t++){const i=ss(n[t]);for(const s in i)e[s]=i[s]}return e}function am(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function nd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const zs={clone:ss,merge:Vt};var cm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mt extends us{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cm,this.fragmentShader=lm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ss(e.uniforms),this.uniformsGroups=am(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class id extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=In}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $n=new I,Ul=new te,Ol=new te;class tn extends id{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Os*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ji*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Os*2*Math.atan(Math.tan(ji*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($n.x,$n.y).multiplyScalar(-e/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($n.x,$n.y).multiplyScalar(-e/$n.z)}getViewSize(e,t){return this.getViewBounds(e,Ul,Ol),t.subVectors(Ol,Ul)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ji*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Li=-90,Ni=1;class um extends Ot{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new tn(Li,Ni,e,t);s.layers=this.layers,this.add(s);const r=new tn(Li,Ni,e,t);r.layers=this.layers,this.add(r);const o=new tn(Li,Ni,e,t);o.layers=this.layers,this.add(o);const a=new tn(Li,Ni,e,t);a.layers=this.layers,this.add(a);const c=new tn(Li,Ni,e,t);c.layers=this.layers,this.add(c);const l=new tn(Li,Ni,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===In)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===no)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class sd extends Ut{constructor(e,t,i,s,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:es,super(e,t,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hm extends mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new sd(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:_n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ys(5,5,5),r=new Mt({name:"CubemapFromEquirect",uniforms:ss(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$t,blending:Pn});r.uniforms.tEquirect.value=t;const o=new It(s,r),a=t.minFilter;return t.minFilter===hi&&(t.minFilter=_n),new um(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const qo=new I,dm=new I,fm=new We;class Xn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=qo.subVectors(i,t).cross(dm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(qo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||fm.getNormalMatrix(e),s=this.coplanarPoint(qo).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ni=new xi,vr=new I;class rd{constructor(e=new Xn,t=new Xn,i=new Xn,s=new Xn,r=new Xn,o=new Xn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=In){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],w=s[13],M=s[14],x=s[15];if(i[0].setComponents(c-r,d-l,m-f,x-p).normalize(),i[1].setComponents(c+r,d+l,m+f,x+p).normalize(),i[2].setComponents(c+o,d+u,m+g,x+w).normalize(),i[3].setComponents(c-o,d-u,m-g,x-w).normalize(),i[4].setComponents(c-a,d-h,m-v,x-M).normalize(),t===In)i[5].setComponents(c+a,d+h,m+v,x+M).normalize();else if(t===no)i[5].setComponents(a,h,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(e){return ni.center.set(0,0,0),ni.radius=.7071067811865476,ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(vr.x=s.normal.x>0?e.max.x:e.min.x,vr.y=s.normal.y>0?e.max.y:e.min.y,vr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(vr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function od(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function pm(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],v=h[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,h[d]=v)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const v=h[f];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class yo extends Ft{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,h=e/a,d=t/c,f=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const w=p*d-o;for(let M=0;M<l;M++){const x=M*h-r;g.push(x,-w,0),v.push(0,0,1),m.push(M/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<a;w++){const M=w+l*p,x=w+l*(p+1),U=w+1+l*(p+1),R=w+1+l*p;f.push(M,x,R),f.push(x,U,R)}this.setIndex(f),this.setAttribute("position",new bt(g,3)),this.setAttribute("normal",new bt(v,3)),this.setAttribute("uv",new bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yo(e.width,e.height,e.widthSegments,e.heightSegments)}}var mm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gm=`#ifdef USE_ALPHAHASH
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
#endif`,vm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_m=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ym=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sm=`#ifdef USE_AOMAP
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
#endif`,Mm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bm=`#ifdef USE_BATCHING
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
#endif`,Em=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Am=`#ifdef USE_IRIDESCENCE
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
#endif`,Cm=`#ifdef USE_BUMPMAP
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
#endif`,Im=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Um=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Om=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zm=`#define PI 3.141592653589793
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
} // validated`,km=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bm=`vec3 transformedNormal = objectNormal;
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
#endif`,Vm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$m="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zm=`#ifdef USE_ENVMAP
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
#endif`,Ym=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qm=`#ifdef USE_ENVMAP
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
#endif`,jm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Km=`#ifdef USE_ENVMAP
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
#endif`,Jm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ng=`#ifdef USE_GRADIENTMAP
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
}`,ig=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,og=`uniform bool receiveShadow;
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
#endif`,ag=`#ifdef USE_ENVMAP
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
#endif`,cg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ug=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dg=`PhysicalMaterial material;
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
#endif`,fg=`struct PhysicalMaterial {
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
}`,pg=`
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
#endif`,mg=`#if defined( RE_IndirectDiffuse )
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
#endif`,gg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_g=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Eg=`#if defined( USE_POINTS_UV )
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
#endif`,wg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ag=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ig=`#ifdef USE_MORPHTARGETS
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
#endif`,Pg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ug=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Og=`#ifdef USE_NORMALMAP
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
#endif`,zg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$g=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qg=`float getShadowMask() {
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
}`,ev=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tv=`#ifdef USE_SKINNING
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
#endif`,nv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iv=`#ifdef USE_SKINNING
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
#endif`,sv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ov=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,av=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cv=`#ifdef USE_TRANSMISSION
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
#endif`,lv=`#ifdef USE_TRANSMISSION
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
#endif`,uv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mv=`uniform sampler2D t2D;
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
}`,gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_v=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yv=`#include <common>
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
}`,Sv=`#if DEPTH_PACKING == 3200
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
}`,Mv=`#define DISTANCE
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
}`,bv=`#define DISTANCE
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
}`,Ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tv=`uniform float scale;
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
}`,Rv=`uniform vec3 diffuse;
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
}`,Av=`#include <common>
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
}`,Cv=`uniform vec3 diffuse;
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
}`,Iv=`#define LAMBERT
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
}`,Pv=`#define LAMBERT
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
}`,Fv=`#define MATCAP
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
}`,Dv=`#define MATCAP
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
}`,Lv=`#define NORMAL
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
}`,Nv=`#define NORMAL
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
}`,Uv=`#define PHONG
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
}`,Ov=`#define PHONG
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
}`,zv=`#define STANDARD
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
}`,kv=`#define STANDARD
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
}`,Bv=`#define TOON
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
}`,Vv=`#define TOON
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
}`,Hv=`uniform float size;
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
}`,Gv=`uniform vec3 diffuse;
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
}`,Wv=`#include <common>
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
}`,$v=`uniform vec3 color;
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
}`,Xv=`uniform float rotation;
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
}`,Zv=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:mm,alphahash_pars_fragment:gm,alphamap_fragment:vm,alphamap_pars_fragment:_m,alphatest_fragment:xm,alphatest_pars_fragment:ym,aomap_fragment:Sm,aomap_pars_fragment:Mm,batching_pars_vertex:bm,batching_vertex:Em,begin_vertex:wm,beginnormal_vertex:Tm,bsdfs:Rm,iridescence_fragment:Am,bumpmap_pars_fragment:Cm,clipping_planes_fragment:Im,clipping_planes_pars_fragment:Pm,clipping_planes_pars_vertex:Fm,clipping_planes_vertex:Dm,color_fragment:Lm,color_pars_fragment:Nm,color_pars_vertex:Um,color_vertex:Om,common:zm,cube_uv_reflection_fragment:km,defaultnormal_vertex:Bm,displacementmap_pars_vertex:Vm,displacementmap_vertex:Hm,emissivemap_fragment:Gm,emissivemap_pars_fragment:Wm,colorspace_fragment:$m,colorspace_pars_fragment:Xm,envmap_fragment:Zm,envmap_common_pars_fragment:Ym,envmap_pars_fragment:qm,envmap_pars_vertex:jm,envmap_physical_pars_fragment:ag,envmap_vertex:Km,fog_vertex:Jm,fog_pars_vertex:Qm,fog_fragment:eg,fog_pars_fragment:tg,gradientmap_pars_fragment:ng,lightmap_pars_fragment:ig,lights_lambert_fragment:sg,lights_lambert_pars_fragment:rg,lights_pars_begin:og,lights_toon_fragment:cg,lights_toon_pars_fragment:lg,lights_phong_fragment:ug,lights_phong_pars_fragment:hg,lights_physical_fragment:dg,lights_physical_pars_fragment:fg,lights_fragment_begin:pg,lights_fragment_maps:mg,lights_fragment_end:gg,logdepthbuf_fragment:vg,logdepthbuf_pars_fragment:_g,logdepthbuf_pars_vertex:xg,logdepthbuf_vertex:yg,map_fragment:Sg,map_pars_fragment:Mg,map_particle_fragment:bg,map_particle_pars_fragment:Eg,metalnessmap_fragment:wg,metalnessmap_pars_fragment:Tg,morphinstance_vertex:Rg,morphcolor_vertex:Ag,morphnormal_vertex:Cg,morphtarget_pars_vertex:Ig,morphtarget_vertex:Pg,normal_fragment_begin:Fg,normal_fragment_maps:Dg,normal_pars_fragment:Lg,normal_pars_vertex:Ng,normal_vertex:Ug,normalmap_pars_fragment:Og,clearcoat_normal_fragment_begin:zg,clearcoat_normal_fragment_maps:kg,clearcoat_pars_fragment:Bg,iridescence_pars_fragment:Vg,opaque_fragment:Hg,packing:Gg,premultiplied_alpha_fragment:Wg,project_vertex:$g,dithering_fragment:Xg,dithering_pars_fragment:Zg,roughnessmap_fragment:Yg,roughnessmap_pars_fragment:qg,shadowmap_pars_fragment:jg,shadowmap_pars_vertex:Kg,shadowmap_vertex:Jg,shadowmask_pars_fragment:Qg,skinbase_vertex:ev,skinning_pars_vertex:tv,skinning_vertex:nv,skinnormal_vertex:iv,specularmap_fragment:sv,specularmap_pars_fragment:rv,tonemapping_fragment:ov,tonemapping_pars_fragment:av,transmission_fragment:cv,transmission_pars_fragment:lv,uv_pars_fragment:uv,uv_pars_vertex:hv,uv_vertex:dv,worldpos_vertex:fv,background_vert:pv,background_frag:mv,backgroundCube_vert:gv,backgroundCube_frag:vv,cube_vert:_v,cube_frag:xv,depth_vert:yv,depth_frag:Sv,distanceRGBA_vert:Mv,distanceRGBA_frag:bv,equirect_vert:Ev,equirect_frag:wv,linedashed_vert:Tv,linedashed_frag:Rv,meshbasic_vert:Av,meshbasic_frag:Cv,meshlambert_vert:Iv,meshlambert_frag:Pv,meshmatcap_vert:Fv,meshmatcap_frag:Dv,meshnormal_vert:Lv,meshnormal_frag:Nv,meshphong_vert:Uv,meshphong_frag:Ov,meshphysical_vert:zv,meshphysical_frag:kv,meshtoon_vert:Bv,meshtoon_frag:Vv,points_vert:Hv,points_frag:Gv,shadow_vert:Wv,shadow_frag:$v,sprite_vert:Xv,sprite_frag:Zv},fe={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},vn={basic:{uniforms:Vt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Vt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Be(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Vt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Vt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Vt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Be(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Vt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Vt([fe.points,fe.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Vt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Vt([fe.common,fe.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Vt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Vt([fe.sprite,fe.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Vt([fe.common,fe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Vt([fe.lights,fe.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};vn.physical={uniforms:Vt([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const _r={r:0,b:0,g:0},ii=new On,Yv=new ot;function qv(n,e,t,i,s,r,o){const a=new Be(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function g(w){let M=w.isScene===!0?w.background:null;return M&&M.isTexture&&(M=(w.backgroundBlurriness>0?t:e).get(M)),M}function v(w){let M=!1;const x=g(w);x===null?p(a,c):x&&x.isColor&&(p(x,1),M=!0);const U=n.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(w,M){const x=g(M);x&&(x.isCubeTexture||x.mapping===vo)?(u===void 0&&(u=new It(new Ys(1,1,1),new Mt({name:"BackgroundCubeMaterial",uniforms:ss(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ii.copy(M.backgroundRotation),ii.x*=-1,ii.y*=-1,ii.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Yv.makeRotationFromEuler(ii)),u.material.toneMapped=je.getTransfer(x.colorSpace)!==it,(h!==x||d!==x.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,f=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new It(new yo(2,2),new Mt({name:"BackgroundMaterial",uniforms:ss(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=je.getTransfer(x.colorSpace)!==it,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,f=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function p(w,M){w.getRGB(_r,nd(n)),i.buffers.color.setClear(_r.r,_r.g,_r.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(w,M=1){a.set(w),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,p(a,c)},render:v,addToRenderList:m}}function jv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(S,P,j,V,$){let Q=!1;const H=h(V,j,P);r!==H&&(r=H,l(r.object)),Q=f(S,V,j,$),Q&&g(S,V,j,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,x(S,P,j,V),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function c(){return n.createVertexArray()}function l(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function h(S,P,j){const V=j.wireframe===!0;let $=i[S.id];$===void 0&&($={},i[S.id]=$);let Q=$[P.id];Q===void 0&&(Q={},$[P.id]=Q);let H=Q[V];return H===void 0&&(H=d(c()),Q[V]=H),H}function d(S){const P=[],j=[],V=[];for(let $=0;$<t;$++)P[$]=0,j[$]=0,V[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:j,attributeDivisors:V,object:S,attributes:{},index:null}}function f(S,P,j,V){const $=r.attributes,Q=P.attributes;let H=0;const ie=j.getAttributes();for(const G in ie)if(ie[G].location>=0){const de=$[G];let he=Q[G];if(he===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(he=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(he=S.instanceColor)),de===void 0||de.attribute!==he||he&&de.data!==he.data)return!0;H++}return r.attributesNum!==H||r.index!==V}function g(S,P,j,V){const $={},Q=P.attributes;let H=0;const ie=j.getAttributes();for(const G in ie)if(ie[G].location>=0){let de=Q[G];de===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(de=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(de=S.instanceColor));const he={};he.attribute=de,de&&de.data&&(he.data=de.data),$[G]=he,H++}r.attributes=$,r.attributesNum=H,r.index=V}function v(){const S=r.newAttributes;for(let P=0,j=S.length;P<j;P++)S[P]=0}function m(S){p(S,0)}function p(S,P){const j=r.newAttributes,V=r.enabledAttributes,$=r.attributeDivisors;j[S]=1,V[S]===0&&(n.enableVertexAttribArray(S),V[S]=1),$[S]!==P&&(n.vertexAttribDivisor(S,P),$[S]=P)}function w(){const S=r.newAttributes,P=r.enabledAttributes;for(let j=0,V=P.length;j<V;j++)P[j]!==S[j]&&(n.disableVertexAttribArray(j),P[j]=0)}function M(S,P,j,V,$,Q,H){H===!0?n.vertexAttribIPointer(S,P,j,$,Q):n.vertexAttribPointer(S,P,j,V,$,Q)}function x(S,P,j,V){v();const $=V.attributes,Q=j.getAttributes(),H=P.defaultAttributeValues;for(const ie in Q){const G=Q[ie];if(G.location>=0){let ue=$[ie];if(ue===void 0&&(ie==="instanceMatrix"&&S.instanceMatrix&&(ue=S.instanceMatrix),ie==="instanceColor"&&S.instanceColor&&(ue=S.instanceColor)),ue!==void 0){const de=ue.normalized,he=ue.itemSize,Ae=e.get(ue);if(Ae===void 0)continue;const Ke=Ae.buffer,Z=Ae.type,re=Ae.bytesPerElement,we=Z===n.INT||Z===n.UNSIGNED_INT||ue.gpuType===Ec;if(ue.isInterleavedBufferAttribute){const ae=ue.data,Ce=ae.stride,ze=ue.offset;if(ae.isInstancedInterleavedBuffer){for(let Ue=0;Ue<G.locationSize;Ue++)p(G.location+Ue,ae.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ue=0;Ue<G.locationSize;Ue++)m(G.location+Ue);n.bindBuffer(n.ARRAY_BUFFER,Ke);for(let Ue=0;Ue<G.locationSize;Ue++)M(G.location+Ue,he/G.locationSize,Z,de,Ce*re,(ze+he/G.locationSize*Ue)*re,we)}else{if(ue.isInstancedBufferAttribute){for(let ae=0;ae<G.locationSize;ae++)p(G.location+ae,ue.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ae=0;ae<G.locationSize;ae++)m(G.location+ae);n.bindBuffer(n.ARRAY_BUFFER,Ke);for(let ae=0;ae<G.locationSize;ae++)M(G.location+ae,he/G.locationSize,Z,de,he*re,he/G.locationSize*ae*re,we)}}else if(H!==void 0){const de=H[ie];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(G.location,de);break;case 3:n.vertexAttrib3fv(G.location,de);break;case 4:n.vertexAttrib4fv(G.location,de);break;default:n.vertexAttrib1fv(G.location,de)}}}}w()}function U(){D();for(const S in i){const P=i[S];for(const j in P){const V=P[j];for(const $ in V)u(V[$].object),delete V[$];delete P[j]}delete i[S]}}function R(S){if(i[S.id]===void 0)return;const P=i[S.id];for(const j in P){const V=P[j];for(const $ in V)u(V[$].object),delete V[$];delete P[j]}delete i[S.id]}function A(S){for(const P in i){const j=i[P];if(j[S.id]===void 0)continue;const V=j[S.id];for(const $ in V)u(V[$].object),delete V[$];delete j[S.id]}}function D(){b(),o=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:b,dispose:U,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:w}}function Kv(n,e,t){let i;function s(l){i=l}function r(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),t.update(u,i,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,i,1)}function c(l,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*d[v];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Jv(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==fn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const D=A===Fn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Un&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==xn&&!D)}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:U,maxSamples:R}}function Qv(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Xn,a=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const w=r?0:i,M=w*4;let x=p.clippingState||null;c.value=x,x=u(g,d,M,f);for(let U=0;U!==M;++U)x[U]=t[U];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=f+v*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,x=f;M!==v;++M,x+=4)o.copy(h[M]).applyMatrix4(w,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function e_(n){let e=new WeakMap;function t(o,a){return a===La?o.mapping=es:a===Na&&(o.mapping=ts),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===La||a===Na)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new hm(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class ad extends id{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Wi=4,zl=[.125,.215,.35,.446,.526,.582],li=20,jo=new ad,kl=new Be;let Ko=null,Jo=0,Qo=0,ea=!1;const ai=(1+Math.sqrt(5))/2,Ui=1/ai,Bl=[new I(-ai,Ui,0),new I(ai,Ui,0),new I(-Ui,0,ai),new I(Ui,0,ai),new I(0,ai,-Ui),new I(0,ai,Ui),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Vl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Ko=this._renderer.getRenderTarget(),Jo=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ko,Jo,Qo),this._renderer.xr.enabled=ea,e.scissorTest=!1,xr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===es||e.mapping===ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ko=this._renderer.getRenderTarget(),Jo=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:Fn,format:fn,colorSpace:ls,depthBuffer:!1},s=Hl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hl(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=t_(r)),this._blurMaterial=n_(r,e,t)}return s}_compileMaterial(e){const t=new It(this._lodPlanes[0],e);this._renderer.compile(t,jo)}_sceneToCubeUV(e,t,i,s){const a=new tn(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(kl),u.toneMapping=Yn,u.autoClear=!1;const f=new xo({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),g=new It(new Ys,f);let v=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(kl),v=!0);for(let p=0;p<6;p++){const w=p%3;w===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):w===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const M=this._cubeSize;xr(s,w*M,p>2?M:0,M,M),u.setRenderTarget(s),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===es||e.mapping===ts;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new It(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;xr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,jo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Bl[(s-r-1)%Bl.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new It(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*li-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):li;m>li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${li}`);const p=[];let w=0;for(let A=0;A<li;++A){const D=A/v,b=Math.exp(-D*D/2);p.push(b),A===0?w+=b:A<m&&(w+=2*b)}for(let A=0;A<p.length;A++)p[A]=p[A]/w;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-i;const x=this._sizeLods[s],U=3*x*(s>M-Wi?s-M+Wi:0),R=4*(this._cubeSize-x);xr(t,U,R,3*x,2*x),c.setRenderTarget(t),c.render(h,jo)}}function t_(n){const e=[],t=[],i=[];let s=n;const r=n-Wi+1+zl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>n-Wi?c=zl[o-n+Wi-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,v=3,m=2,p=1,w=new Float32Array(v*g*f),M=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let R=0;R<f;R++){const A=R%3*2/3-1,D=R>2?0:-1,b=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];w.set(b,v*g*R),M.set(d,m*g*R);const S=[R,R,R,R,R,R];x.set(S,p*g*R)}const U=new Ft;U.setAttribute("position",new Pt(w,v)),U.setAttribute("uv",new Pt(M,m)),U.setAttribute("faceIndex",new Pt(x,p)),e.push(U),s>Wi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Hl(n,e,t){const i=new mn(n,e,t);return i.texture.mapping=vo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function n_(n,e,t){const i=new Float32Array(li),s=new I(0,1,0);return new Mt({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Dc(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Gl(){return new Mt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dc(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Wl(){return new Mt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Dc(){return`

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
	`}function i_(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===La||c===Na,u=c===es||c===ts;if(l||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Vl(n)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Vl(n)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function s_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Rs("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function r_(n,e,t,i){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],n.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,g=h.attributes.position;let v=0;if(f!==null){const w=f.array;v=f.version;for(let M=0,x=w.length;M<x;M+=3){const U=w[M+0],R=w[M+1],A=w[M+2];d.push(U,R,R,A,A,U)}}else if(g!==void 0){const w=g.array;v=g.version;for(let M=0,x=w.length/3-1;M<x;M+=3){const U=M+0,R=M+1,A=M+2;d.push(U,R,R,A,A,U)}}else return;const m=new(jh(d)?td:ed)(d,1);m.version=v;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function o_(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){n.drawElements(i,f,r,d*o),t.update(f,i,1)}function l(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,d*o,g),t.update(f,i,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function h(d,f,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,v,0,g);let p=0;for(let w=0;w<g;w++)p+=f[w]*v[w];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function a_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function c_(n,e,t){const i=new WeakMap,s=new xt;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let b=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let M=0;f===!0&&(M=1),g===!0&&(M=2),v===!0&&(M=3);let x=a.attributes.position.count*M,U=1;x>e.maxTextureSize&&(U=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const R=new Float32Array(x*U*4*h),A=new Jh(R,x,U,h);A.type=xn,A.needsUpdate=!0;const D=M*4;for(let S=0;S<h;S++){const P=m[S],j=p[S],V=w[S],$=x*U*4*S;for(let Q=0;Q<P.count;Q++){const H=Q*D;f===!0&&(s.fromBufferAttribute(P,Q),R[$+H+0]=s.x,R[$+H+1]=s.y,R[$+H+2]=s.z,R[$+H+3]=0),g===!0&&(s.fromBufferAttribute(j,Q),R[$+H+4]=s.x,R[$+H+5]=s.y,R[$+H+6]=s.z,R[$+H+7]=0),v===!0&&(s.fromBufferAttribute(V,Q),R[$+H+8]=s.x,R[$+H+9]=s.y,R[$+H+10]=s.z,R[$+H+11]=V.itemSize===4?s.w:1)}}d={count:h,texture:A,size:new te(x,U)},i.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];const g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function l_(n,e,t,i){let s=new WeakMap;function r(c){const l=i.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class cd extends Ut{constructor(e,t,i,s,r,o,a,c,l,u=qi){if(u!==qi&&u!==is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===qi&&(i=di),i===void 0&&u===is&&(i=ns),super(null,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Kt,this.minFilter=c!==void 0?c:Kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ld=new Ut,$l=new cd(1,1),ud=new Jh,hd=new jp,dd=new sd,Xl=[],Zl=[],Yl=new Float32Array(16),ql=new Float32Array(9),jl=new Float32Array(4);function hs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Xl[s];if(r===void 0&&(r=new Float32Array(s),Xl[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Et(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function So(n,e){let t=Zl[e];t===void 0&&(t=new Int32Array(e),Zl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function u_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function h_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2fv(this.addr,e),wt(t,e)}}function d_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;n.uniform3fv(this.addr,e),wt(t,e)}}function f_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4fv(this.addr,e),wt(t,e)}}function p_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,i))return;jl.set(i),n.uniformMatrix2fv(this.addr,!1,jl),wt(t,i)}}function m_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,i))return;ql.set(i),n.uniformMatrix3fv(this.addr,!1,ql),wt(t,i)}}function g_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,i))return;Yl.set(i),n.uniformMatrix4fv(this.addr,!1,Yl),wt(t,i)}}function v_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function __(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2iv(this.addr,e),wt(t,e)}}function x_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3iv(this.addr,e),wt(t,e)}}function y_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4iv(this.addr,e),wt(t,e)}}function S_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function M_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2uiv(this.addr,e),wt(t,e)}}function b_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3uiv(this.addr,e),wt(t,e)}}function E_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4uiv(this.addr,e),wt(t,e)}}function w_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?($l.compareFunction=qh,r=$l):r=ld,t.setTexture2D(e||r,s)}function T_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||hd,s)}function R_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||dd,s)}function A_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||ud,s)}function C_(n){switch(n){case 5126:return u_;case 35664:return h_;case 35665:return d_;case 35666:return f_;case 35674:return p_;case 35675:return m_;case 35676:return g_;case 5124:case 35670:return v_;case 35667:case 35671:return __;case 35668:case 35672:return x_;case 35669:case 35673:return y_;case 5125:return S_;case 36294:return M_;case 36295:return b_;case 36296:return E_;case 35678:case 36198:case 36298:case 36306:case 35682:return w_;case 35679:case 36299:case 36307:return T_;case 35680:case 36300:case 36308:case 36293:return R_;case 36289:case 36303:case 36311:case 36292:return A_}}function I_(n,e){n.uniform1fv(this.addr,e)}function P_(n,e){const t=hs(e,this.size,2);n.uniform2fv(this.addr,t)}function F_(n,e){const t=hs(e,this.size,3);n.uniform3fv(this.addr,t)}function D_(n,e){const t=hs(e,this.size,4);n.uniform4fv(this.addr,t)}function L_(n,e){const t=hs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function N_(n,e){const t=hs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function U_(n,e){const t=hs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function O_(n,e){n.uniform1iv(this.addr,e)}function z_(n,e){n.uniform2iv(this.addr,e)}function k_(n,e){n.uniform3iv(this.addr,e)}function B_(n,e){n.uniform4iv(this.addr,e)}function V_(n,e){n.uniform1uiv(this.addr,e)}function H_(n,e){n.uniform2uiv(this.addr,e)}function G_(n,e){n.uniform3uiv(this.addr,e)}function W_(n,e){n.uniform4uiv(this.addr,e)}function $_(n,e,t){const i=this.cache,s=e.length,r=So(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),wt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||ld,r[o])}function X_(n,e,t){const i=this.cache,s=e.length,r=So(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),wt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||hd,r[o])}function Z_(n,e,t){const i=this.cache,s=e.length,r=So(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),wt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||dd,r[o])}function Y_(n,e,t){const i=this.cache,s=e.length,r=So(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),wt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||ud,r[o])}function q_(n){switch(n){case 5126:return I_;case 35664:return P_;case 35665:return F_;case 35666:return D_;case 35674:return L_;case 35675:return N_;case 35676:return U_;case 5124:case 35670:return O_;case 35667:case 35671:return z_;case 35668:case 35672:return k_;case 35669:case 35673:return B_;case 5125:return V_;case 36294:return H_;case 36295:return G_;case 36296:return W_;case 35678:case 36198:case 36298:case 36306:case 35682:return $_;case 35679:case 36299:case 36307:return X_;case 35680:case 36300:case 36308:case 36293:return Z_;case 36289:case 36303:case 36311:case 36292:return Y_}}class j_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=C_(t.type)}}class K_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=q_(t.type)}}class J_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const ta=/(\w+)(\])?(\[|\.)?/g;function Kl(n,e){n.seq.push(e),n.map[e.id]=e}function Q_(n,e,t){const i=n.name,s=i.length;for(ta.lastIndex=0;;){const r=ta.exec(i),o=ta.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Kl(t,l===void 0?new j_(a,n,e):new K_(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new J_(a),Kl(t,h)),t=h}}}class Qr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Q_(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Jl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const e0=37297;let t0=0;function n0(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Ql=new We;function i0(n){je._getMatrix(Ql,je.workingColorSpace,n);const e=`mat3( ${Ql.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(n)){case _o:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function eu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+n0(n.getShaderSource(e),o)}else return s}function s0(n,e){const t=i0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function r0(n,e){let t;switch(e){case Lh:t="Linear";break;case Nh:t="Reinhard";break;case Uh:t="Cineon";break;case bc:t="ACESFilmic";break;case Oh:t="AgX";break;case zh:t="Neutral";break;case fp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const yr=new I;function o0(){je.getLuminanceCoefficients(yr);const n=yr.x.toFixed(4),e=yr.y.toFixed(4),t=yr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function a0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(As).join(`
`)}function c0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function l0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function As(n){return n!==""}function tu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const u0=/^[ \t]*#include +<([\w\d./]+)>/gm;function uc(n){return n.replace(u0,d0)}const h0=new Map;function d0(n,e){let t=Xe[e];if(t===void 0){const i=h0.get(e);if(i!==void 0)t=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return uc(t)}const f0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function iu(n){return n.replace(f0,p0)}function p0(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function su(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function m0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Fh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Xf?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===An&&(e="SHADOWMAP_TYPE_VSM"),e}function g0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case es:case ts:e="ENVMAP_TYPE_CUBE";break;case vo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function v0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ts:e="ENVMAP_MODE_REFRACTION";break}return e}function _0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Dh:e="ENVMAP_BLENDING_MULTIPLY";break;case hp:e="ENVMAP_BLENDING_MIX";break;case dp:e="ENVMAP_BLENDING_ADD";break}return e}function x0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function y0(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=m0(t),l=g0(t),u=v0(t),h=_0(t),d=x0(t),f=a0(t),g=c0(r),v=s.createProgram();let m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(As).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(As).join(`
`),p.length>0&&(p+=`
`)):(m=[su(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),p=[su(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yn?"#define TONE_MAPPING":"",t.toneMapping!==Yn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Yn?r0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,s0("linearToOutputTexel",t.outputColorSpace),o0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(As).join(`
`)),o=uc(o),o=tu(o,t),o=nu(o,t),a=uc(a),a=tu(a,t),a=nu(a,t),o=iu(o),a=iu(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===gl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=w+m+o,x=w+p+a,U=Jl(s,s.VERTEX_SHADER,M),R=Jl(s,s.FRAGMENT_SHADER,x);s.attachShader(v,U),s.attachShader(v,R),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(P){if(n.debug.checkShaderErrors){const j=s.getProgramInfoLog(v).trim(),V=s.getShaderInfoLog(U).trim(),$=s.getShaderInfoLog(R).trim();let Q=!0,H=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,U,R);else{const ie=eu(s,U,"vertex"),G=eu(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+j+`
`+ie+`
`+G)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(V===""||$==="")&&(H=!1);H&&(P.diagnostics={runnable:Q,programLog:j,vertexShader:{log:V,prefix:m},fragmentShader:{log:$,prefix:p}})}s.deleteShader(U),s.deleteShader(R),D=new Qr(s,v),b=l0(s,v)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(v,e0)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=t0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=U,this.fragmentShader=R,this}let S0=0;class M0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new b0(e),t.set(e,i)),i}}class b0{constructor(e){this.id=S0++,this.code=e,this.usedTimes=0}}function E0(n,e,t,i,s,r,o){const a=new Fc,c=new M0,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,S,P,j,V){const $=j.fog,Q=V.geometry,H=b.isMeshStandardMaterial?j.environment:null,ie=(b.isMeshStandardMaterial?t:e).get(b.envMap||H),G=ie&&ie.mapping===vo?ie.image.height:null,ue=g[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const de=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,he=de!==void 0?de.length:0;let Ae=0;Q.morphAttributes.position!==void 0&&(Ae=1),Q.morphAttributes.normal!==void 0&&(Ae=2),Q.morphAttributes.color!==void 0&&(Ae=3);let Ke,Z,re,we;if(ue){const nt=vn[ue];Ke=nt.vertexShader,Z=nt.fragmentShader}else Ke=b.vertexShader,Z=b.fragmentShader,c.update(b),re=c.getVertexShaderID(b),we=c.getFragmentShaderID(b);const ae=n.getRenderTarget(),Ce=n.state.buffers.depth.getReversed(),ze=V.isInstancedMesh===!0,Ue=V.isBatchedMesh===!0,Ze=!!b.map,K=!!b.matcap,oe=!!ie,T=!!b.aoMap,Te=!!b.lightMap,ne=!!b.bumpMap,Se=!!b.normalMap,O=!!b.displacementMap,ce=!!b.emissiveMap,ve=!!b.metalnessMap,E=!!b.roughnessMap,_=b.anisotropy>0,z=b.clearcoat>0,Y=b.dispersion>0,ee=b.iridescence>0,q=b.sheen>0,Ie=b.transmission>0,pe=_&&!!b.anisotropyMap,Me=z&&!!b.clearcoatMap,Ye=z&&!!b.clearcoatNormalMap,se=z&&!!b.clearcoatRoughnessMap,be=ee&&!!b.iridescenceMap,Oe=ee&&!!b.iridescenceThicknessMap,ke=q&&!!b.sheenColorMap,Ee=q&&!!b.sheenRoughnessMap,qe=!!b.specularMap,$e=!!b.specularColorMap,at=!!b.specularIntensityMap,F=Ie&&!!b.transmissionMap,me=Ie&&!!b.thicknessMap,W=!!b.gradientMap,J=!!b.alphaMap,ye=b.alphaTest>0,_e=!!b.alphaHash,He=!!b.extensions;let vt=Yn;b.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(vt=n.toneMapping);const Dt={shaderID:ue,shaderType:b.type,shaderName:b.name,vertexShader:Ke,fragmentShader:Z,defines:b.defines,customVertexShaderID:re,customFragmentShaderID:we,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Ue,batchingColor:Ue&&V._colorsTexture!==null,instancing:ze,instancingColor:ze&&V.instanceColor!==null,instancingMorph:ze&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ae===null?n.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:ls,alphaToCoverage:!!b.alphaToCoverage,map:Ze,matcap:K,envMap:oe,envMapMode:oe&&ie.mapping,envMapCubeUVHeight:G,aoMap:T,lightMap:Te,bumpMap:ne,normalMap:Se,displacementMap:d&&O,emissiveMap:ce,normalMapObjectSpace:Se&&b.normalMapType===_p,normalMapTangentSpace:Se&&b.normalMapType===vp,metalnessMap:ve,roughnessMap:E,anisotropy:_,anisotropyMap:pe,clearcoat:z,clearcoatMap:Me,clearcoatNormalMap:Ye,clearcoatRoughnessMap:se,dispersion:Y,iridescence:ee,iridescenceMap:be,iridescenceThicknessMap:Oe,sheen:q,sheenColorMap:ke,sheenRoughnessMap:Ee,specularMap:qe,specularColorMap:$e,specularIntensityMap:at,transmission:Ie,transmissionMap:F,thicknessMap:me,gradientMap:W,opaque:b.transparent===!1&&b.blending===Yi&&b.alphaToCoverage===!1,alphaMap:J,alphaTest:ye,alphaHash:_e,combine:b.combine,mapUv:Ze&&v(b.map.channel),aoMapUv:T&&v(b.aoMap.channel),lightMapUv:Te&&v(b.lightMap.channel),bumpMapUv:ne&&v(b.bumpMap.channel),normalMapUv:Se&&v(b.normalMap.channel),displacementMapUv:O&&v(b.displacementMap.channel),emissiveMapUv:ce&&v(b.emissiveMap.channel),metalnessMapUv:ve&&v(b.metalnessMap.channel),roughnessMapUv:E&&v(b.roughnessMap.channel),anisotropyMapUv:pe&&v(b.anisotropyMap.channel),clearcoatMapUv:Me&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Ye&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&v(b.sheenRoughnessMap.channel),specularMapUv:qe&&v(b.specularMap.channel),specularColorMapUv:$e&&v(b.specularColorMap.channel),specularIntensityMapUv:at&&v(b.specularIntensityMap.channel),transmissionMapUv:F&&v(b.transmissionMap.channel),thicknessMapUv:me&&v(b.thicknessMap.channel),alphaMapUv:J&&v(b.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Se||_),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!Q.attributes.uv&&(Ze||J),fog:!!$,useFog:b.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ce,skinning:V.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Ae,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:vt,decodeVideoTexture:Ze&&b.map.isVideoTexture===!0&&je.getTransfer(b.map.colorSpace)===it,decodeVideoTextureEmissive:ce&&b.emissiveMap.isVideoTexture===!0&&je.getTransfer(b.emissiveMap.colorSpace)===it,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===sn,flipSided:b.side===$t,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:He&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&b.extensions.multiDraw===!0||Ue)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Dt.vertexUv1s=l.has(1),Dt.vertexUv2s=l.has(2),Dt.vertexUv3s=l.has(3),l.clear(),Dt}function p(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)S.push(P),S.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(w(S,b),M(S,b),S.push(n.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function w(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function M(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),b.push(a.mask)}function x(b){const S=g[b.type];let P;if(S){const j=vn[S];P=zs.clone(j.uniforms)}else P=b.uniforms;return P}function U(b,S){let P;for(let j=0,V=u.length;j<V;j++){const $=u[j];if($.cacheKey===S){P=$,++P.usedTimes;break}}return P===void 0&&(P=new y0(n,S,b,r),u.push(P)),P}function R(b){if(--b.usedTimes===0){const S=u.indexOf(b);u[S]=u[u.length-1],u.pop(),b.destroy()}}function A(b){c.remove(b)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:U,releaseProgram:R,releaseShaderCache:A,programs:u,dispose:D}}function w0(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function T0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ru(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ou(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,d,f,g,v,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=v,p.group=m),e++,p}function a(h,d,f,g,v,m){const p=o(h,d,f,g,v,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(h,d,f,g,v,m){const p=o(h,d,f,g,v,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||T0),i.length>1&&i.sort(d||ru),s.length>1&&s.sort(d||ru)}function u(){for(let h=e,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function R0(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new ou,n.set(i,[o])):s>=r.length?(o=new ou,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function A0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Be};break;case"SpotLight":t={position:new I,direction:new I,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function C0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let I0=0;function P0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function F0(n){const e=new A0,t=C0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new I);const s=new I,r=new ot,o=new ot;function a(l){let u=0,h=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,w=0,M=0,x=0,U=0,R=0,A=0;l.sort(P0);for(let b=0,S=l.length;b<S;b++){const P=l[b],j=P.color,V=P.intensity,$=P.distance,Q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=j.r*V,h+=j.g*V,d+=j.b*V;else if(P.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(P.sh.coefficients[H],V);A++}else if(P.isDirectionalLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const ie=P.shadow,G=t.get(P);G.shadowIntensity=ie.intensity,G.shadowBias=ie.bias,G.shadowNormalBias=ie.normalBias,G.shadowRadius=ie.radius,G.shadowMapSize=ie.mapSize,i.directionalShadow[f]=G,i.directionalShadowMap[f]=Q,i.directionalShadowMatrix[f]=P.shadow.matrix,w++}i.directional[f]=H,f++}else if(P.isSpotLight){const H=e.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(j).multiplyScalar(V),H.distance=$,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,i.spot[v]=H;const ie=P.shadow;if(P.map&&(i.spotLightMap[U]=P.map,U++,ie.updateMatrices(P),P.castShadow&&R++),i.spotLightMatrix[v]=ie.matrix,P.castShadow){const G=t.get(P);G.shadowIntensity=ie.intensity,G.shadowBias=ie.bias,G.shadowNormalBias=ie.normalBias,G.shadowRadius=ie.radius,G.shadowMapSize=ie.mapSize,i.spotShadow[v]=G,i.spotShadowMap[v]=Q,x++}v++}else if(P.isRectAreaLight){const H=e.get(P);H.color.copy(j).multiplyScalar(V),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=H,m++}else if(P.isPointLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){const ie=P.shadow,G=t.get(P);G.shadowIntensity=ie.intensity,G.shadowBias=ie.bias,G.shadowNormalBias=ie.normalBias,G.shadowRadius=ie.radius,G.shadowMapSize=ie.mapSize,G.shadowCameraNear=ie.camera.near,G.shadowCameraFar=ie.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=Q,i.pointShadowMatrix[g]=P.shadow.matrix,M++}i.point[g]=H,g++}else if(P.isHemisphereLight){const H=e.get(P);H.skyColor.copy(P.color).multiplyScalar(V),H.groundColor.copy(P.groundColor).multiplyScalar(V),i.hemi[p]=H,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const D=i.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==w||D.numPointShadows!==M||D.numSpotShadows!==x||D.numSpotMaps!==U||D.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=x+U-R,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=A,D.directionalLength=f,D.pointLength=g,D.spotLength=v,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=w,D.numPointShadows=M,D.numSpotShadows=x,D.numSpotMaps=U,D.numLightProbes=A,i.version=I0++)}function c(l,u){let h=0,d=0,f=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,w=l.length;p<w;p++){const M=l[p];if(M.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),h++}else if(M.isSpotLight){const x=i.spot[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:i}}function au(n){const e=new F0(n),t=[],i=[];function s(u){l.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function D0(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new au(n),e.set(s,[a])):r>=o.length?(a=new au(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class L0 extends us{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=mp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class N0 extends us{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const U0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,O0=`uniform sampler2D shadow_pass;
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
}`;function z0(n,e,t){let i=new rd;const s=new te,r=new te,o=new xt,a=new L0({depthPacking:gp}),c=new N0,l={},u=t.maxTextureSize,h={[Ln]:$t,[$t]:Ln,[sn]:sn},d=new Mt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:U0,fragmentShader:O0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ft;g.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new It(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fh;let p=this.type;this.render=function(R,A,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const b=n.getRenderTarget(),S=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),j=n.state;j.setBlending(Pn),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const V=p!==An&&this.type===An,$=p===An&&this.type!==An;for(let Q=0,H=R.length;Q<H;Q++){const ie=R[Q],G=ie.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const ue=G.getFrameExtents();if(s.multiply(ue),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ue.x),s.x=r.x*ue.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ue.y),s.y=r.y*ue.y,G.mapSize.y=r.y)),G.map===null||V===!0||$===!0){const he=this.type!==An?{minFilter:Kt,magFilter:Kt}:{};G.map!==null&&G.map.dispose(),G.map=new mn(s.x,s.y,he),G.map.texture.name=ie.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const de=G.getViewportCount();for(let he=0;he<de;he++){const Ae=G.getViewport(he);o.set(r.x*Ae.x,r.y*Ae.y,r.x*Ae.z,r.y*Ae.w),j.viewport(o),G.updateMatrices(ie,he),i=G.getFrustum(),x(A,D,G.camera,ie,this.type)}G.isPointLightShadow!==!0&&this.type===An&&w(G,D),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(b,S,P)};function w(R,A){const D=e.update(v);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new mn(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(A,null,D,d,v,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(A,null,D,f,v,null)}function M(R,A,D,b){let S=null;const P=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)S=P;else if(S=D.isPointLight===!0?c:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const j=S.uuid,V=A.uuid;let $=l[j];$===void 0&&($={},l[j]=$);let Q=$[V];Q===void 0&&(Q=S.clone(),$[V]=Q,A.addEventListener("dispose",U)),S=Q}if(S.visible=A.visible,S.wireframe=A.wireframe,b===An?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:h[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const j=n.properties.get(S);j.light=D}return S}function x(R,A,D,b,S){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===An)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const V=e.update(R),$=R.material;if(Array.isArray($)){const Q=V.groups;for(let H=0,ie=Q.length;H<ie;H++){const G=Q[H],ue=$[G.materialIndex];if(ue&&ue.visible){const de=M(R,ue,b,S);R.onBeforeShadow(n,R,A,D,V,de,G),n.renderBufferDirect(D,null,V,de,R,G),R.onAfterShadow(n,R,A,D,V,de,G)}}}else if($.visible){const Q=M(R,$,b,S);R.onBeforeShadow(n,R,A,D,V,Q,null),n.renderBufferDirect(D,null,V,Q,R,null),R.onAfterShadow(n,R,A,D,V,Q,null)}}const j=R.children;for(let V=0,$=j.length;V<$;V++)x(j[V],A,D,b,S)}function U(R){R.target.removeEventListener("dispose",U);for(const D in l){const b=l[D],S=R.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const k0={[Ra]:Aa,[Ca]:Fa,[Ia]:Da,[Qi]:Pa,[Aa]:Ra,[Fa]:Ca,[Da]:Ia,[Pa]:Qi};function B0(n,e){function t(){let F=!1;const me=new xt;let W=null;const J=new xt(0,0,0,0);return{setMask:function(ye){W!==ye&&!F&&(n.colorMask(ye,ye,ye,ye),W=ye)},setLocked:function(ye){F=ye},setClear:function(ye,_e,He,vt,Dt){Dt===!0&&(ye*=vt,_e*=vt,He*=vt),me.set(ye,_e,He,vt),J.equals(me)===!1&&(n.clearColor(ye,_e,He,vt),J.copy(me))},reset:function(){F=!1,W=null,J.set(-1,0,0,0)}}}function i(){let F=!1,me=!1,W=null,J=null,ye=null;return{setReversed:function(_e){if(me!==_e){const He=e.get("EXT_clip_control");me?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT);const vt=ye;ye=null,this.setClear(vt)}me=_e},getReversed:function(){return me},setTest:function(_e){_e?ae(n.DEPTH_TEST):Ce(n.DEPTH_TEST)},setMask:function(_e){W!==_e&&!F&&(n.depthMask(_e),W=_e)},setFunc:function(_e){if(me&&(_e=k0[_e]),J!==_e){switch(_e){case Ra:n.depthFunc(n.NEVER);break;case Aa:n.depthFunc(n.ALWAYS);break;case Ca:n.depthFunc(n.LESS);break;case Qi:n.depthFunc(n.LEQUAL);break;case Ia:n.depthFunc(n.EQUAL);break;case Pa:n.depthFunc(n.GEQUAL);break;case Fa:n.depthFunc(n.GREATER);break;case Da:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=_e}},setLocked:function(_e){F=_e},setClear:function(_e){ye!==_e&&(me&&(_e=1-_e),n.clearDepth(_e),ye=_e)},reset:function(){F=!1,W=null,J=null,ye=null,me=!1}}}function s(){let F=!1,me=null,W=null,J=null,ye=null,_e=null,He=null,vt=null,Dt=null;return{setTest:function(nt){F||(nt?ae(n.STENCIL_TEST):Ce(n.STENCIL_TEST))},setMask:function(nt){me!==nt&&!F&&(n.stencilMask(nt),me=nt)},setFunc:function(nt,an,Sn){(W!==nt||J!==an||ye!==Sn)&&(n.stencilFunc(nt,an,Sn),W=nt,J=an,ye=Sn)},setOp:function(nt,an,Sn){(_e!==nt||He!==an||vt!==Sn)&&(n.stencilOp(nt,an,Sn),_e=nt,He=an,vt=Sn)},setLocked:function(nt){F=nt},setClear:function(nt){Dt!==nt&&(n.clearStencil(nt),Dt=nt)},reset:function(){F=!1,me=null,W=null,J=null,ye=null,_e=null,He=null,vt=null,Dt=null}}}const r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,w=null,M=null,x=null,U=null,R=null,A=new Be(0,0,0),D=0,b=!1,S=null,P=null,j=null,V=null,$=null;const Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,ie=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(G)[1]),H=ie>=1):G.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),H=ie>=2);let ue=null,de={};const he=n.getParameter(n.SCISSOR_BOX),Ae=n.getParameter(n.VIEWPORT),Ke=new xt().fromArray(he),Z=new xt().fromArray(Ae);function re(F,me,W,J){const ye=new Uint8Array(4),_e=n.createTexture();n.bindTexture(F,_e),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let He=0;He<W;He++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(me,0,n.RGBA,1,1,J,0,n.RGBA,n.UNSIGNED_BYTE,ye):n.texImage2D(me+He,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ye);return _e}const we={};we[n.TEXTURE_2D]=re(n.TEXTURE_2D,n.TEXTURE_2D,1),we[n.TEXTURE_CUBE_MAP]=re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[n.TEXTURE_2D_ARRAY]=re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),we[n.TEXTURE_3D]=re(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(n.DEPTH_TEST),o.setFunc(Qi),ne(!1),Se(hl),ae(n.CULL_FACE),T(Pn);function ae(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function Ce(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function ze(F,me){return h[F]!==me?(n.bindFramebuffer(F,me),h[F]=me,F===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=me),F===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=me),!0):!1}function Ue(F,me){let W=f,J=!1;if(F){W=d.get(me),W===void 0&&(W=[],d.set(me,W));const ye=F.textures;if(W.length!==ye.length||W[0]!==n.COLOR_ATTACHMENT0){for(let _e=0,He=ye.length;_e<He;_e++)W[_e]=n.COLOR_ATTACHMENT0+_e;W.length=ye.length,J=!0}}else W[0]!==n.BACK&&(W[0]=n.BACK,J=!0);J&&n.drawBuffers(W)}function Ze(F){return g!==F?(n.useProgram(F),g=F,!0):!1}const K={[ci]:n.FUNC_ADD,[Yf]:n.FUNC_SUBTRACT,[qf]:n.FUNC_REVERSE_SUBTRACT};K[jf]=n.MIN,K[Kf]=n.MAX;const oe={[Jf]:n.ZERO,[Qf]:n.ONE,[ep]:n.SRC_COLOR,[wa]:n.SRC_ALPHA,[op]:n.SRC_ALPHA_SATURATE,[sp]:n.DST_COLOR,[np]:n.DST_ALPHA,[tp]:n.ONE_MINUS_SRC_COLOR,[Ta]:n.ONE_MINUS_SRC_ALPHA,[rp]:n.ONE_MINUS_DST_COLOR,[ip]:n.ONE_MINUS_DST_ALPHA,[ap]:n.CONSTANT_COLOR,[cp]:n.ONE_MINUS_CONSTANT_COLOR,[lp]:n.CONSTANT_ALPHA,[up]:n.ONE_MINUS_CONSTANT_ALPHA};function T(F,me,W,J,ye,_e,He,vt,Dt,nt){if(F===Pn){v===!0&&(Ce(n.BLEND),v=!1);return}if(v===!1&&(ae(n.BLEND),v=!0),F!==Zf){if(F!==m||nt!==b){if((p!==ci||x!==ci)&&(n.blendEquation(n.FUNC_ADD),p=ci,x=ci),nt)switch(F){case Yi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nn:n.blendFunc(n.ONE,n.ONE);break;case dl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Yi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nn:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case dl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}w=null,M=null,U=null,R=null,A.set(0,0,0),D=0,m=F,b=nt}return}ye=ye||me,_e=_e||W,He=He||J,(me!==p||ye!==x)&&(n.blendEquationSeparate(K[me],K[ye]),p=me,x=ye),(W!==w||J!==M||_e!==U||He!==R)&&(n.blendFuncSeparate(oe[W],oe[J],oe[_e],oe[He]),w=W,M=J,U=_e,R=He),(vt.equals(A)===!1||Dt!==D)&&(n.blendColor(vt.r,vt.g,vt.b,Dt),A.copy(vt),D=Dt),m=F,b=!1}function Te(F,me){F.side===sn?Ce(n.CULL_FACE):ae(n.CULL_FACE);let W=F.side===$t;me&&(W=!W),ne(W),F.blending===Yi&&F.transparent===!1?T(Pn):T(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const J=F.stencilWrite;a.setTest(J),J&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ce(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ae(n.SAMPLE_ALPHA_TO_COVERAGE):Ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function ne(F){S!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),S=F)}function Se(F){F!==Wf?(ae(n.CULL_FACE),F!==P&&(F===hl?n.cullFace(n.BACK):F===$f?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ce(n.CULL_FACE),P=F}function O(F){F!==j&&(H&&n.lineWidth(F),j=F)}function ce(F,me,W){F?(ae(n.POLYGON_OFFSET_FILL),(V!==me||$!==W)&&(n.polygonOffset(me,W),V=me,$=W)):Ce(n.POLYGON_OFFSET_FILL)}function ve(F){F?ae(n.SCISSOR_TEST):Ce(n.SCISSOR_TEST)}function E(F){F===void 0&&(F=n.TEXTURE0+Q-1),ue!==F&&(n.activeTexture(F),ue=F)}function _(F,me,W){W===void 0&&(ue===null?W=n.TEXTURE0+Q-1:W=ue);let J=de[W];J===void 0&&(J={type:void 0,texture:void 0},de[W]=J),(J.type!==F||J.texture!==me)&&(ue!==W&&(n.activeTexture(W),ue=W),n.bindTexture(F,me||we[F]),J.type=F,J.texture=me)}function z(){const F=de[ue];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Y(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ee(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function q(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ie(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Me(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ye(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function be(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Oe(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ke(F){Ke.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),Ke.copy(F))}function Ee(F){Z.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Z.copy(F))}function qe(F,me){let W=l.get(me);W===void 0&&(W=new WeakMap,l.set(me,W));let J=W.get(F);J===void 0&&(J=n.getUniformBlockIndex(me,F.name),W.set(F,J))}function $e(F,me){const J=l.get(me).get(F);c.get(me)!==J&&(n.uniformBlockBinding(me,J,F.__bindingPointIndex),c.set(me,J))}function at(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ue=null,de={},h={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,w=null,M=null,x=null,U=null,R=null,A=new Be(0,0,0),D=0,b=!1,S=null,P=null,j=null,V=null,$=null,Ke.set(0,0,n.canvas.width,n.canvas.height),Z.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ae,disable:Ce,bindFramebuffer:ze,drawBuffers:Ue,useProgram:Ze,setBlending:T,setMaterial:Te,setFlipSided:ne,setCullFace:Se,setLineWidth:O,setPolygonOffset:ce,setScissorTest:ve,activeTexture:E,bindTexture:_,unbindTexture:z,compressedTexImage2D:Y,compressedTexImage3D:ee,texImage2D:be,texImage3D:Oe,updateUBOMapping:qe,uniformBlockBinding:$e,texStorage2D:Ye,texStorage3D:se,texSubImage2D:q,texSubImage3D:Ie,compressedTexSubImage2D:pe,compressedTexSubImage3D:Me,scissor:ke,viewport:Ee,reset:at}}function cu(n,e,t,i){const s=V0(i);switch(t){case Gh:return n*e;case $h:return n*e;case Xh:return n*e*2;case Rc:return n*e/s.components*s.byteLength;case Ac:return n*e/s.components*s.byteLength;case Zh:return n*e*2/s.components*s.byteLength;case Cc:return n*e*2/s.components*s.byteLength;case Wh:return n*e*3/s.components*s.byteLength;case fn:return n*e*4/s.components*s.byteLength;case Ic:return n*e*4/s.components*s.byteLength;case Yr:case qr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case jr:case Kr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ka:case Va:return Math.max(n,16)*Math.max(e,8)/4;case za:case Ba:return Math.max(n,8)*Math.max(e,8)/2;case Ha:case Ga:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Wa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $a:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xa:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Za:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ya:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case qa:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ja:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ka:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ja:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Qa:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ec:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case tc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case nc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ic:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case sc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Jr:case rc:case oc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Yh:case ac:return Math.ceil(n/4)*Math.ceil(e/4)*8;case cc:case lc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function V0(n){switch(n){case Un:case Bh:return{byteLength:1,components:1};case Us:case Vh:case Fn:return{byteLength:2,components:1};case wc:case Tc:return{byteLength:2,components:4};case di:case Ec:case xn:return{byteLength:4,components:1};case Hh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function H0(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new te,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,_){return f?new OffscreenCanvas(E,_):io("canvas")}function v(E,_,z){let Y=1;const ee=ve(E);if((ee.width>z||ee.height>z)&&(Y=z/Math.max(ee.width,ee.height)),Y<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const q=Math.floor(Y*ee.width),Ie=Math.floor(Y*ee.height);h===void 0&&(h=g(q,Ie));const pe=_?g(q,Ie):h;return pe.width=q,pe.height=Ie,pe.getContext("2d").drawImage(E,0,0,q,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+q+"x"+Ie+")."),pe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){n.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(E,_,z,Y,ee=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let q=_;if(_===n.RED&&(z===n.FLOAT&&(q=n.R32F),z===n.HALF_FLOAT&&(q=n.R16F),z===n.UNSIGNED_BYTE&&(q=n.R8)),_===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(q=n.R8UI),z===n.UNSIGNED_SHORT&&(q=n.R16UI),z===n.UNSIGNED_INT&&(q=n.R32UI),z===n.BYTE&&(q=n.R8I),z===n.SHORT&&(q=n.R16I),z===n.INT&&(q=n.R32I)),_===n.RG&&(z===n.FLOAT&&(q=n.RG32F),z===n.HALF_FLOAT&&(q=n.RG16F),z===n.UNSIGNED_BYTE&&(q=n.RG8)),_===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(q=n.RG8UI),z===n.UNSIGNED_SHORT&&(q=n.RG16UI),z===n.UNSIGNED_INT&&(q=n.RG32UI),z===n.BYTE&&(q=n.RG8I),z===n.SHORT&&(q=n.RG16I),z===n.INT&&(q=n.RG32I)),_===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(q=n.RGB8UI),z===n.UNSIGNED_SHORT&&(q=n.RGB16UI),z===n.UNSIGNED_INT&&(q=n.RGB32UI),z===n.BYTE&&(q=n.RGB8I),z===n.SHORT&&(q=n.RGB16I),z===n.INT&&(q=n.RGB32I)),_===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),z===n.UNSIGNED_INT&&(q=n.RGBA32UI),z===n.BYTE&&(q=n.RGBA8I),z===n.SHORT&&(q=n.RGBA16I),z===n.INT&&(q=n.RGBA32I)),_===n.RGB&&z===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),_===n.RGBA){const Ie=ee?_o:je.getTransfer(Y);z===n.FLOAT&&(q=n.RGBA32F),z===n.HALF_FLOAT&&(q=n.RGBA16F),z===n.UNSIGNED_BYTE&&(q=Ie===it?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function x(E,_){let z;return E?_===null||_===di||_===ns?z=n.DEPTH24_STENCIL8:_===xn?z=n.DEPTH32F_STENCIL8:_===Us&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===di||_===ns?z=n.DEPTH_COMPONENT24:_===xn?z=n.DEPTH_COMPONENT32F:_===Us&&(z=n.DEPTH_COMPONENT16),z}function U(E,_){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Kt&&E.minFilter!==_n?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function R(E){const _=E.target;_.removeEventListener("dispose",R),D(_),_.isVideoTexture&&u.delete(_)}function A(E){const _=E.target;_.removeEventListener("dispose",A),S(_)}function D(E){const _=i.get(E);if(_.__webglInit===void 0)return;const z=E.source,Y=d.get(z);if(Y){const ee=Y[_.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&b(E),Object.keys(Y).length===0&&d.delete(z)}i.remove(E)}function b(E){const _=i.get(E);n.deleteTexture(_.__webglTexture);const z=E.source,Y=d.get(z);delete Y[_.__cacheKey],o.memory.textures--}function S(E){const _=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let ee=0;ee<_.__webglFramebuffer[Y].length;ee++)n.deleteFramebuffer(_.__webglFramebuffer[Y][ee]);else n.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)n.deleteFramebuffer(_.__webglFramebuffer[Y]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const z=E.textures;for(let Y=0,ee=z.length;Y<ee;Y++){const q=i.get(z[Y]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(z[Y])}i.remove(E)}let P=0;function j(){P=0}function V(){const E=P;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),P+=1,E}function $(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function Q(E,_){const z=i.get(E);if(E.isVideoTexture&&O(E),E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){const Y=E.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(z,E,_);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+_)}function H(E,_){const z=i.get(E);if(E.version>0&&z.__version!==E.version){Z(z,E,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+_)}function ie(E,_){const z=i.get(E);if(E.version>0&&z.__version!==E.version){Z(z,E,_);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+_)}function G(E,_){const z=i.get(E);if(E.version>0&&z.__version!==E.version){re(z,E,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+_)}const ue={[Ua]:n.REPEAT,[ui]:n.CLAMP_TO_EDGE,[Oa]:n.MIRRORED_REPEAT},de={[Kt]:n.NEAREST,[pp]:n.NEAREST_MIPMAP_NEAREST,[er]:n.NEAREST_MIPMAP_LINEAR,[_n]:n.LINEAR,[Co]:n.LINEAR_MIPMAP_NEAREST,[hi]:n.LINEAR_MIPMAP_LINEAR},he={[xp]:n.NEVER,[wp]:n.ALWAYS,[yp]:n.LESS,[qh]:n.LEQUAL,[Sp]:n.EQUAL,[Ep]:n.GEQUAL,[Mp]:n.GREATER,[bp]:n.NOTEQUAL};function Ae(E,_){if(_.type===xn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===_n||_.magFilter===Co||_.magFilter===er||_.magFilter===hi||_.minFilter===_n||_.minFilter===Co||_.minFilter===er||_.minFilter===hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,ue[_.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,ue[_.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,ue[_.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,de[_.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,de[_.minFilter]),_.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,he[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Kt||_.minFilter!==er&&_.minFilter!==hi||_.type===xn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Ke(E,_){let z=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",R));const Y=_.source;let ee=d.get(Y);ee===void 0&&(ee={},d.set(Y,ee));const q=$(_);if(q!==E.__cacheKey){ee[q]===void 0&&(ee[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ee[q].usedTimes++;const Ie=ee[E.__cacheKey];Ie!==void 0&&(ee[E.__cacheKey].usedTimes--,Ie.usedTimes===0&&b(_)),E.__cacheKey=q,E.__webglTexture=ee[q].texture}return z}function Z(E,_,z){let Y=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=n.TEXTURE_3D);const ee=Ke(E,_),q=_.source;t.bindTexture(Y,E.__webglTexture,n.TEXTURE0+z);const Ie=i.get(q);if(q.version!==Ie.__version||ee===!0){t.activeTexture(n.TEXTURE0+z);const pe=je.getPrimaries(je.workingColorSpace),Me=_.colorSpace===Zn?null:je.getPrimaries(_.colorSpace),Ye=_.colorSpace===Zn||pe===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let se=v(_.image,!1,s.maxTextureSize);se=ce(_,se);const be=r.convert(_.format,_.colorSpace),Oe=r.convert(_.type);let ke=M(_.internalFormat,be,Oe,_.colorSpace,_.isVideoTexture);Ae(Y,_);let Ee;const qe=_.mipmaps,$e=_.isVideoTexture!==!0,at=Ie.__version===void 0||ee===!0,F=q.dataReady,me=U(_,se);if(_.isDepthTexture)ke=x(_.format===is,_.type),at&&($e?t.texStorage2D(n.TEXTURE_2D,1,ke,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,ke,se.width,se.height,0,be,Oe,null));else if(_.isDataTexture)if(qe.length>0){$e&&at&&t.texStorage2D(n.TEXTURE_2D,me,ke,qe[0].width,qe[0].height);for(let W=0,J=qe.length;W<J;W++)Ee=qe[W],$e?F&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,Ee.width,Ee.height,be,Oe,Ee.data):t.texImage2D(n.TEXTURE_2D,W,ke,Ee.width,Ee.height,0,be,Oe,Ee.data);_.generateMipmaps=!1}else $e?(at&&t.texStorage2D(n.TEXTURE_2D,me,ke,se.width,se.height),F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,se.width,se.height,be,Oe,se.data)):t.texImage2D(n.TEXTURE_2D,0,ke,se.width,se.height,0,be,Oe,se.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){$e&&at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,ke,qe[0].width,qe[0].height,se.depth);for(let W=0,J=qe.length;W<J;W++)if(Ee=qe[W],_.format!==fn)if(be!==null)if($e){if(F)if(_.layerUpdates.size>0){const ye=cu(Ee.width,Ee.height,_.format,_.type);for(const _e of _.layerUpdates){const He=Ee.data.subarray(_e*ye/Ee.data.BYTES_PER_ELEMENT,(_e+1)*ye/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,_e,Ee.width,Ee.height,1,be,He)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,Ee.width,Ee.height,se.depth,be,Ee.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,W,ke,Ee.width,Ee.height,se.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,Ee.width,Ee.height,se.depth,be,Oe,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,W,ke,Ee.width,Ee.height,se.depth,0,be,Oe,Ee.data)}else{$e&&at&&t.texStorage2D(n.TEXTURE_2D,me,ke,qe[0].width,qe[0].height);for(let W=0,J=qe.length;W<J;W++)Ee=qe[W],_.format!==fn?be!==null?$e?F&&t.compressedTexSubImage2D(n.TEXTURE_2D,W,0,0,Ee.width,Ee.height,be,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,W,ke,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?F&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,Ee.width,Ee.height,be,Oe,Ee.data):t.texImage2D(n.TEXTURE_2D,W,ke,Ee.width,Ee.height,0,be,Oe,Ee.data)}else if(_.isDataArrayTexture)if($e){if(at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,ke,se.width,se.height,se.depth),F)if(_.layerUpdates.size>0){const W=cu(se.width,se.height,_.format,_.type);for(const J of _.layerUpdates){const ye=se.data.subarray(J*W/se.data.BYTES_PER_ELEMENT,(J+1)*W/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,se.width,se.height,1,be,Oe,ye)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,be,Oe,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ke,se.width,se.height,se.depth,0,be,Oe,se.data);else if(_.isData3DTexture)$e?(at&&t.texStorage3D(n.TEXTURE_3D,me,ke,se.width,se.height,se.depth),F&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,be,Oe,se.data)):t.texImage3D(n.TEXTURE_3D,0,ke,se.width,se.height,se.depth,0,be,Oe,se.data);else if(_.isFramebufferTexture){if(at)if($e)t.texStorage2D(n.TEXTURE_2D,me,ke,se.width,se.height);else{let W=se.width,J=se.height;for(let ye=0;ye<me;ye++)t.texImage2D(n.TEXTURE_2D,ye,ke,W,J,0,be,Oe,null),W>>=1,J>>=1}}else if(qe.length>0){if($e&&at){const W=ve(qe[0]);t.texStorage2D(n.TEXTURE_2D,me,ke,W.width,W.height)}for(let W=0,J=qe.length;W<J;W++)Ee=qe[W],$e?F&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,be,Oe,Ee):t.texImage2D(n.TEXTURE_2D,W,ke,be,Oe,Ee);_.generateMipmaps=!1}else if($e){if(at){const W=ve(se);t.texStorage2D(n.TEXTURE_2D,me,ke,W.width,W.height)}F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,Oe,se)}else t.texImage2D(n.TEXTURE_2D,0,ke,be,Oe,se);m(_)&&p(Y),Ie.__version=q.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function re(E,_,z){if(_.image.length!==6)return;const Y=Ke(E,_),ee=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+z);const q=i.get(ee);if(ee.version!==q.__version||Y===!0){t.activeTexture(n.TEXTURE0+z);const Ie=je.getPrimaries(je.workingColorSpace),pe=_.colorSpace===Zn?null:je.getPrimaries(_.colorSpace),Me=_.colorSpace===Zn||Ie===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Ye=_.isCompressedTexture||_.image[0].isCompressedTexture,se=_.image[0]&&_.image[0].isDataTexture,be=[];for(let J=0;J<6;J++)!Ye&&!se?be[J]=v(_.image[J],!0,s.maxCubemapSize):be[J]=se?_.image[J].image:_.image[J],be[J]=ce(_,be[J]);const Oe=be[0],ke=r.convert(_.format,_.colorSpace),Ee=r.convert(_.type),qe=M(_.internalFormat,ke,Ee,_.colorSpace),$e=_.isVideoTexture!==!0,at=q.__version===void 0||Y===!0,F=ee.dataReady;let me=U(_,Oe);Ae(n.TEXTURE_CUBE_MAP,_);let W;if(Ye){$e&&at&&t.texStorage2D(n.TEXTURE_CUBE_MAP,me,qe,Oe.width,Oe.height);for(let J=0;J<6;J++){W=be[J].mipmaps;for(let ye=0;ye<W.length;ye++){const _e=W[ye];_.format!==fn?ke!==null?$e?F&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye,0,0,_e.width,_e.height,ke,_e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye,qe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye,0,0,_e.width,_e.height,ke,Ee,_e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye,qe,_e.width,_e.height,0,ke,Ee,_e.data)}}}else{if(W=_.mipmaps,$e&&at){W.length>0&&me++;const J=ve(be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,me,qe,J.width,J.height)}for(let J=0;J<6;J++)if(se){$e?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,be[J].width,be[J].height,ke,Ee,be[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,qe,be[J].width,be[J].height,0,ke,Ee,be[J].data);for(let ye=0;ye<W.length;ye++){const He=W[ye].image[J].image;$e?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye+1,0,0,He.width,He.height,ke,Ee,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye+1,qe,He.width,He.height,0,ke,Ee,He.data)}}else{$e?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ke,Ee,be[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,qe,ke,Ee,be[J]);for(let ye=0;ye<W.length;ye++){const _e=W[ye];$e?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye+1,0,0,ke,Ee,_e.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye+1,qe,ke,Ee,_e.image[J])}}}m(_)&&p(n.TEXTURE_CUBE_MAP),q.__version=ee.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function we(E,_,z,Y,ee,q){const Ie=r.convert(z.format,z.colorSpace),pe=r.convert(z.type),Me=M(z.internalFormat,Ie,pe,z.colorSpace),Ye=i.get(_),se=i.get(z);if(se.__renderTarget=_,!Ye.__hasExternalTextures){const be=Math.max(1,_.width>>q),Oe=Math.max(1,_.height>>q);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,q,Me,be,Oe,_.depth,0,Ie,pe,null):t.texImage2D(ee,q,Me,be,Oe,0,Ie,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),Se(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,ee,se.__webglTexture,0,ne(_)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,ee,se.__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(E,_,z){if(n.bindRenderbuffer(n.RENDERBUFFER,E),_.depthBuffer){const Y=_.depthTexture,ee=Y&&Y.isDepthTexture?Y.type:null,q=x(_.stencilBuffer,ee),Ie=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=ne(_);Se(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,q,_.width,_.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,q,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,q,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ie,n.RENDERBUFFER,E)}else{const Y=_.textures;for(let ee=0;ee<Y.length;ee++){const q=Y[ee],Ie=r.convert(q.format,q.colorSpace),pe=r.convert(q.type),Me=M(q.internalFormat,Ie,pe,q.colorSpace),Ye=ne(_);z&&Se(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye,Me,_.width,_.height):Se(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ye,Me,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Me,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ce(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(_.depthTexture);Y.__renderTarget=_,(!Y.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Q(_.depthTexture,0);const ee=Y.__webglTexture,q=ne(_);if(_.depthTexture.format===qi)Se(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(_.depthTexture.format===is)Se(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function ze(E){const _=i.get(E),z=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const Y=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){const ee=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",ee)};Y.addEventListener("dispose",ee),_.__depthDisposeCallback=ee}_.__boundDepthTexture=Y}if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Ce(_.__webglFramebuffer,E)}else if(z){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=n.createRenderbuffer(),ae(_.__webglDepthbuffer[Y],E,!1);else{const ee=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,q)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),ae(_.__webglDepthbuffer,E,!1);else{const Y=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,ee)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(E,_,z){const Y=i.get(E);_!==void 0&&we(Y.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&ze(E)}function Ze(E){const _=E.texture,z=i.get(E),Y=i.get(_);E.addEventListener("dispose",A);const ee=E.textures,q=E.isWebGLCubeRenderTarget===!0,Ie=ee.length>1;if(Ie||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=_.version,o.memory.textures++),q){z.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[pe]=[];for(let Me=0;Me<_.mipmaps.length;Me++)z.__webglFramebuffer[pe][Me]=n.createFramebuffer()}else z.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let pe=0;pe<_.mipmaps.length;pe++)z.__webglFramebuffer[pe]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(Ie)for(let pe=0,Me=ee.length;pe<Me;pe++){const Ye=i.get(ee[pe]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&Se(E)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let pe=0;pe<ee.length;pe++){const Me=ee[pe];z.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[pe]);const Ye=r.convert(Me.format,Me.colorSpace),se=r.convert(Me.type),be=M(Me.internalFormat,Ye,se,Me.colorSpace,E.isXRRenderTarget===!0),Oe=ne(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,be,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,z.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),ae(z.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Ae(n.TEXTURE_CUBE_MAP,_);for(let pe=0;pe<6;pe++)if(_.mipmaps&&_.mipmaps.length>0)for(let Me=0;Me<_.mipmaps.length;Me++)we(z.__webglFramebuffer[pe][Me],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Me);else we(z.__webglFramebuffer[pe],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(_)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let pe=0,Me=ee.length;pe<Me;pe++){const Ye=ee[pe],se=i.get(Ye);t.bindTexture(n.TEXTURE_2D,se.__webglTexture),Ae(n.TEXTURE_2D,Ye),we(z.__webglFramebuffer,E,Ye,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,0),m(Ye)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(pe=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,Y.__webglTexture),Ae(pe,_),_.mipmaps&&_.mipmaps.length>0)for(let Me=0;Me<_.mipmaps.length;Me++)we(z.__webglFramebuffer[Me],E,_,n.COLOR_ATTACHMENT0,pe,Me);else we(z.__webglFramebuffer,E,_,n.COLOR_ATTACHMENT0,pe,0);m(_)&&p(pe),t.unbindTexture()}E.depthBuffer&&ze(E)}function K(E){const _=E.textures;for(let z=0,Y=_.length;z<Y;z++){const ee=_[z];if(m(ee)){const q=w(E),Ie=i.get(ee).__webglTexture;t.bindTexture(q,Ie),p(q),t.unbindTexture()}}}const oe=[],T=[];function Te(E){if(E.samples>0){if(Se(E)===!1){const _=E.textures,z=E.width,Y=E.height;let ee=n.COLOR_BUFFER_BIT;const q=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ie=i.get(E),pe=_.length>1;if(pe)for(let Me=0;Me<_.length;Me++)t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Me=0;Me<_.length;Me++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ie.__webglColorRenderbuffer[Me]);const Ye=i.get(_[Me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ye,0)}n.blitFramebuffer(0,0,z,Y,0,0,z,Y,ee,n.NEAREST),c===!0&&(oe.length=0,T.length=0,oe.push(n.COLOR_ATTACHMENT0+Me),E.depthBuffer&&E.resolveDepthBuffer===!1&&(oe.push(q),T.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,T)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,oe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let Me=0;Me<_.length;Me++){t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,Ie.__webglColorRenderbuffer[Me]);const Ye=i.get(_[Me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,Ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const _=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function ne(E){return Math.min(s.maxSamples,E.samples)}function Se(E){const _=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function O(E){const _=o.render.frame;u.get(E)!==_&&(u.set(E,_),E.update())}function ce(E,_){const z=E.colorSpace,Y=E.format,ee=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||z!==ls&&z!==Zn&&(je.getTransfer(z)===it?(Y!==fn||ee!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),_}function ve(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=j,this.setTexture2D=Q,this.setTexture2DArray=H,this.setTexture3D=ie,this.setTextureCube=G,this.rebindTextures=Ue,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Se}function G0(n,e){function t(i,s=Zn){let r;const o=je.getTransfer(s);if(i===Un)return n.UNSIGNED_BYTE;if(i===wc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Tc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Hh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Bh)return n.BYTE;if(i===Vh)return n.SHORT;if(i===Us)return n.UNSIGNED_SHORT;if(i===Ec)return n.INT;if(i===di)return n.UNSIGNED_INT;if(i===xn)return n.FLOAT;if(i===Fn)return n.HALF_FLOAT;if(i===Gh)return n.ALPHA;if(i===Wh)return n.RGB;if(i===fn)return n.RGBA;if(i===$h)return n.LUMINANCE;if(i===Xh)return n.LUMINANCE_ALPHA;if(i===qi)return n.DEPTH_COMPONENT;if(i===is)return n.DEPTH_STENCIL;if(i===Rc)return n.RED;if(i===Ac)return n.RED_INTEGER;if(i===Zh)return n.RG;if(i===Cc)return n.RG_INTEGER;if(i===Ic)return n.RGBA_INTEGER;if(i===Yr||i===qr||i===jr||i===Kr)if(o===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Yr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Yr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===qr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===jr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Kr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===za||i===ka||i===Ba||i===Va)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===za)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ka)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ba)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Va)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ha||i===Ga||i===Wa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ha||i===Ga)return o===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Wa)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===$a||i===Xa||i===Za||i===Ya||i===qa||i===ja||i===Ka||i===Ja||i===Qa||i===ec||i===tc||i===nc||i===ic||i===sc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===$a)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xa)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Za)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ya)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qa)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ja)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ka)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ja)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Qa)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ec)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===tc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===nc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ic)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===sc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Jr||i===rc||i===oc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Jr)return o===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===rc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===oc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Yh||i===ac||i===cc||i===lc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Jr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ac)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===cc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===lc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ns?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class W0 extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class pn extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $0={type:"move"};class na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($0)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new pn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const X0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Z0=`
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

}`;class Y0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Ut,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Mt({vertexShader:X0,fragmentShader:Z0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new It(new yo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class q0 extends vi{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const v=new Y0,m=t.getContextAttributes();let p=null,w=null;const M=[],x=[],U=new te;let R=null;const A=new tn;A.viewport=new xt;const D=new tn;D.viewport=new xt;const b=[A,D],S=new W0;let P=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let re=M[Z];return re===void 0&&(re=new na,M[Z]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Z){let re=M[Z];return re===void 0&&(re=new na,M[Z]=re),re.getGripSpace()},this.getHand=function(Z){let re=M[Z];return re===void 0&&(re=new na,M[Z]=re),re.getHandSpace()};function V(Z){const re=x.indexOf(Z.inputSource);if(re===-1)return;const we=M[re];we!==void 0&&(we.update(Z.inputSource,Z.frame,l||o),we.dispatchEvent({type:Z.type,data:Z.inputSource}))}function $(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",Q);for(let Z=0;Z<M.length;Z++){const re=x[Z];re!==null&&(x[Z]=null,M[Z].disconnect(re))}P=null,j=null,v.reset(),e.setRenderTarget(p),f=null,d=null,h=null,s=null,w=null,Ke.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",$),s.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(U),s.renderState.layers===void 0){const re={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,re),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new mn(f.framebufferWidth,f.framebufferHeight,{format:fn,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let re=null,we=null,ae=null;m.depth&&(ae=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=m.stencil?is:qi,we=m.stencil?ns:di);const Ce={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(Ce),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new mn(d.textureWidth,d.textureHeight,{format:fn,type:Un,depthTexture:new cd(d.textureWidth,d.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ke.setContext(s),Ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Q(Z){for(let re=0;re<Z.removed.length;re++){const we=Z.removed[re],ae=x.indexOf(we);ae>=0&&(x[ae]=null,M[ae].disconnect(we))}for(let re=0;re<Z.added.length;re++){const we=Z.added[re];let ae=x.indexOf(we);if(ae===-1){for(let ze=0;ze<M.length;ze++)if(ze>=x.length){x.push(we),ae=ze;break}else if(x[ze]===null){x[ze]=we,ae=ze;break}if(ae===-1)break}const Ce=M[ae];Ce&&Ce.connect(we)}}const H=new I,ie=new I;function G(Z,re,we){H.setFromMatrixPosition(re.matrixWorld),ie.setFromMatrixPosition(we.matrixWorld);const ae=H.distanceTo(ie),Ce=re.projectionMatrix.elements,ze=we.projectionMatrix.elements,Ue=Ce[14]/(Ce[10]-1),Ze=Ce[14]/(Ce[10]+1),K=(Ce[9]+1)/Ce[5],oe=(Ce[9]-1)/Ce[5],T=(Ce[8]-1)/Ce[0],Te=(ze[8]+1)/ze[0],ne=Ue*T,Se=Ue*Te,O=ae/(-T+Te),ce=O*-T;if(re.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ce),Z.translateZ(O),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ce[10]===-1)Z.projectionMatrix.copy(re.projectionMatrix),Z.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const ve=Ue+O,E=Ze+O,_=ne-ce,z=Se+(ae-ce),Y=K*Ze/E*ve,ee=oe*Ze/E*ve;Z.projectionMatrix.makePerspective(_,z,Y,ee,ve,E),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ue(Z,re){re===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(re.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let re=Z.near,we=Z.far;v.texture!==null&&(v.depthNear>0&&(re=v.depthNear),v.depthFar>0&&(we=v.depthFar)),S.near=D.near=A.near=re,S.far=D.far=A.far=we,(P!==S.near||j!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,j=S.far),A.layers.mask=Z.layers.mask|2,D.layers.mask=Z.layers.mask|4,S.layers.mask=A.layers.mask|D.layers.mask;const ae=Z.parent,Ce=S.cameras;ue(S,ae);for(let ze=0;ze<Ce.length;ze++)ue(Ce[ze],ae);Ce.length===2?G(S,A,D):S.projectionMatrix.copy(A.projectionMatrix),de(Z,S,ae)};function de(Z,re,we){we===null?Z.matrix.copy(re.matrixWorld):(Z.matrix.copy(we.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(re.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(re.projectionMatrix),Z.projectionMatrixInverse.copy(re.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Os*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let he=null;function Ae(Z,re){if(u=re.getViewerPose(l||o),g=re,u!==null){const we=u.views;f!==null&&(e.setRenderTargetFramebuffer(w,f.framebuffer),e.setRenderTarget(w));let ae=!1;we.length!==S.cameras.length&&(S.cameras.length=0,ae=!0);for(let ze=0;ze<we.length;ze++){const Ue=we[ze];let Ze=null;if(f!==null)Ze=f.getViewport(Ue);else{const oe=h.getViewSubImage(d,Ue);Ze=oe.viewport,ze===0&&(e.setRenderTargetTextures(w,oe.colorTexture,d.ignoreDepthValues?void 0:oe.depthStencilTexture),e.setRenderTarget(w))}let K=b[ze];K===void 0&&(K=new tn,K.layers.enable(ze),K.viewport=new xt,b[ze]=K),K.matrix.fromArray(Ue.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(Ue.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),ze===0&&(S.matrix.copy(K.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ae===!0&&S.cameras.push(K)}const Ce=s.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const ze=h.getDepthInformation(we[0]);ze&&ze.isValid&&ze.texture&&v.init(e,ze,s.renderState)}}for(let we=0;we<M.length;we++){const ae=x[we],Ce=M[we];ae!==null&&Ce!==void 0&&Ce.update(ae,re,l||o)}he&&he(Z,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),g=null}const Ke=new od;Ke.setAnimationLoop(Ae),this.setAnimationLoop=function(Z){he=Z},this.dispose=function(){}}}const si=new On,j0=new ot;function K0(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,nd(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,M,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,w,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===$t&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===$t&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=e.get(p),M=w.envMap,x=w.envMapRotation;M&&(m.envMap.value=M,si.copy(x),si.x*=-1,si.y*=-1,si.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),m.envMapRotation.value.setFromMatrix4(j0.makeRotationFromEuler(si)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,w,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$t&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function J0(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,M){const x=M.program;i.uniformBlockBinding(w,x)}function l(w,M){let x=s[w.id];x===void 0&&(g(w),x=u(w),s[w.id]=x,w.addEventListener("dispose",m));const U=M.program;i.updateUBOMapping(w,U);const R=e.render.frame;r[w.id]!==R&&(d(w),r[w.id]=R)}function u(w){const M=h();w.__bindingPointIndex=M;const x=n.createBuffer(),U=w.__size,R=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,U,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,x),x}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const M=s[w.id],x=w.uniforms,U=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let R=0,A=x.length;R<A;R++){const D=Array.isArray(x[R])?x[R]:[x[R]];for(let b=0,S=D.length;b<S;b++){const P=D[b];if(f(P,R,b,U)===!0){const j=P.__offset,V=Array.isArray(P.value)?P.value:[P.value];let $=0;for(let Q=0;Q<V.length;Q++){const H=V[Q],ie=v(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,j+$,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,$),$+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,j,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(w,M,x,U){const R=w.value,A=M+"_"+x;if(U[A]===void 0)return typeof R=="number"||typeof R=="boolean"?U[A]=R:U[A]=R.clone(),!0;{const D=U[A];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return U[A]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function g(w){const M=w.uniforms;let x=0;const U=16;for(let A=0,D=M.length;A<D;A++){const b=Array.isArray(M[A])?M[A]:[M[A]];for(let S=0,P=b.length;S<P;S++){const j=b[S],V=Array.isArray(j.value)?j.value:[j.value];for(let $=0,Q=V.length;$<Q;$++){const H=V[$],ie=v(H),G=x%U,ue=G%ie.boundary,de=G+ue;x+=ue,de!==0&&U-de<ie.storage&&(x+=U-de),j.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=x,x+=ie.storage}}}const R=x%U;return R>0&&(x+=U-R),w.__size=x,w.__cache={},this}function v(w){const M={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(M.boundary=4,M.storage=4):w.isVector2?(M.boundary=8,M.storage=8):w.isVector3||w.isColor?(M.boundary=16,M.storage=12):w.isVector4?(M.boundary=16,M.storage=16):w.isMatrix3?(M.boundary=48,M.storage=48):w.isMatrix4?(M.boundary=64,M.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),M}function m(w){const M=w.target;M.removeEventListener("dispose",m);const x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const w in s)n.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class Q0{constructor(e={}){const{canvas:t=Hp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const w=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=en,this.toneMapping=Yn,this.toneMappingExposure=1;const x=this;let U=!1,R=0,A=0,D=null,b=-1,S=null;const P=new xt,j=new xt;let V=null;const $=new Be(0);let Q=0,H=t.width,ie=t.height,G=1,ue=null,de=null;const he=new xt(0,0,H,ie),Ae=new xt(0,0,H,ie);let Ke=!1;const Z=new rd;let re=!1,we=!1;const ae=new ot,Ce=new ot,ze=new I,Ue=new xt,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let K=!1;function oe(){return D===null?G:1}let T=i;function Te(y,L){return t.getContext(y,L)}try{const y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mc}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",_e,!1),T===null){const L="webgl2";if(T=Te(L,y),T===null)throw Te(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let ne,Se,O,ce,ve,E,_,z,Y,ee,q,Ie,pe,Me,Ye,se,be,Oe,ke,Ee,qe,$e,at,F;function me(){ne=new s_(T),ne.init(),$e=new G0(T,ne),Se=new Jv(T,ne,e,$e),O=new B0(T,ne),Se.reverseDepthBuffer&&d&&O.buffers.depth.setReversed(!0),ce=new a_(T),ve=new w0,E=new H0(T,ne,O,ve,Se,$e,ce),_=new e_(x),z=new i_(x),Y=new pm(T),at=new jv(T,Y),ee=new r_(T,Y,ce,at),q=new l_(T,ee,Y,ce),ke=new c_(T,Se,E),se=new Qv(ve),Ie=new E0(x,_,z,ne,Se,at,se),pe=new K0(x,ve),Me=new R0,Ye=new D0(ne),Oe=new qv(x,_,z,O,q,f,c),be=new z0(x,q,Se),F=new J0(T,ce,Se,O),Ee=new Kv(T,ne,ce),qe=new o_(T,ne,ce),ce.programs=Ie.programs,x.capabilities=Se,x.extensions=ne,x.properties=ve,x.renderLists=Me,x.shadowMap=be,x.state=O,x.info=ce}me();const W=new q0(x,T);this.xr=W,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const y=ne.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=ne.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(y){y!==void 0&&(G=y,this.setSize(H,ie,!1))},this.getSize=function(y){return y.set(H,ie)},this.setSize=function(y,L,k=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=y,ie=L,t.width=Math.floor(y*G),t.height=Math.floor(L*G),k===!0&&(t.style.width=y+"px",t.style.height=L+"px"),this.setViewport(0,0,y,L)},this.getDrawingBufferSize=function(y){return y.set(H*G,ie*G).floor()},this.setDrawingBufferSize=function(y,L,k){H=y,ie=L,G=k,t.width=Math.floor(y*k),t.height=Math.floor(L*k),this.setViewport(0,0,y,L)},this.getCurrentViewport=function(y){return y.copy(P)},this.getViewport=function(y){return y.copy(he)},this.setViewport=function(y,L,k,B){y.isVector4?he.set(y.x,y.y,y.z,y.w):he.set(y,L,k,B),O.viewport(P.copy(he).multiplyScalar(G).round())},this.getScissor=function(y){return y.copy(Ae)},this.setScissor=function(y,L,k,B){y.isVector4?Ae.set(y.x,y.y,y.z,y.w):Ae.set(y,L,k,B),O.scissor(j.copy(Ae).multiplyScalar(G).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(y){O.setScissorTest(Ke=y)},this.setOpaqueSort=function(y){ue=y},this.setTransparentSort=function(y){de=y},this.getClearColor=function(y){return y.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(y=!0,L=!0,k=!0){let B=0;if(y){let N=!1;if(D!==null){const le=D.texture.format;N=le===Ic||le===Cc||le===Ac}if(N){const le=D.texture.type,xe=le===Un||le===di||le===Us||le===ns||le===wc||le===Tc,Pe=Oe.getClearColor(),Fe=Oe.getClearAlpha(),Ve=Pe.r,Ge=Pe.g,De=Pe.b;xe?(g[0]=Ve,g[1]=Ge,g[2]=De,g[3]=Fe,T.clearBufferuiv(T.COLOR,0,g)):(v[0]=Ve,v[1]=Ge,v[2]=De,v[3]=Fe,T.clearBufferiv(T.COLOR,0,v))}else B|=T.COLOR_BUFFER_BIT}L&&(B|=T.DEPTH_BUFFER_BIT),k&&(B|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),Me.dispose(),Ye.dispose(),ve.dispose(),_.dispose(),z.dispose(),q.dispose(),at.dispose(),F.dispose(),Ie.dispose(),W.dispose(),W.removeEventListener("sessionstart",nl),W.removeEventListener("sessionend",il),Jn.stop()};function J(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const y=ce.autoReset,L=be.enabled,k=be.autoUpdate,B=be.needsUpdate,N=be.type;me(),ce.autoReset=y,be.enabled=L,be.autoUpdate=k,be.needsUpdate=B,be.type=N}function _e(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function He(y){const L=y.target;L.removeEventListener("dispose",He),vt(L)}function vt(y){Dt(y),ve.remove(y)}function Dt(y){const L=ve.get(y).programs;L!==void 0&&(L.forEach(function(k){Ie.releaseProgram(k)}),y.isShaderMaterial&&Ie.releaseShaderCache(y))}this.renderBufferDirect=function(y,L,k,B,N,le){L===null&&(L=Ze);const xe=N.isMesh&&N.matrixWorld.determinant()<0,Pe=Df(y,L,k,B,N);O.setMaterial(B,xe);let Fe=k.index,Ve=1;if(B.wireframe===!0){if(Fe=ee.getWireframeAttribute(k),Fe===void 0)return;Ve=2}const Ge=k.drawRange,De=k.attributes.position;let Je=Ge.start*Ve,ct=(Ge.start+Ge.count)*Ve;le!==null&&(Je=Math.max(Je,le.start*Ve),ct=Math.min(ct,(le.start+le.count)*Ve)),Fe!==null?(Je=Math.max(Je,0),ct=Math.min(ct,Fe.count)):De!=null&&(Je=Math.max(Je,0),ct=Math.min(ct,De.count));const ut=ct-Je;if(ut<0||ut===1/0)return;at.setup(N,B,Pe,k,Fe);let Gt,et=Ee;if(Fe!==null&&(Gt=Y.get(Fe),et=qe,et.setIndex(Gt)),N.isMesh)B.wireframe===!0?(O.setLineWidth(B.wireframeLinewidth*oe()),et.setMode(T.LINES)):et.setMode(T.TRIANGLES);else if(N.isLine){let Ne=B.linewidth;Ne===void 0&&(Ne=1),O.setLineWidth(Ne*oe()),N.isLineSegments?et.setMode(T.LINES):N.isLineLoop?et.setMode(T.LINE_LOOP):et.setMode(T.LINE_STRIP)}else N.isPoints?et.setMode(T.POINTS):N.isSprite&&et.setMode(T.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)et.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))et.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ne=N._multiDrawStarts,Mn=N._multiDrawCounts,tt=N._multiDrawCount,cn=Fe?Y.get(Fe).bytesPerElement:1,Mi=ve.get(B).currentProgram.getUniforms();for(let Yt=0;Yt<tt;Yt++)Mi.setValue(T,"_gl_DrawID",Yt),et.render(Ne[Yt]/cn,Mn[Yt])}else if(N.isInstancedMesh)et.renderInstances(Je,ut,N.count);else if(k.isInstancedBufferGeometry){const Ne=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Mn=Math.min(k.instanceCount,Ne);et.renderInstances(Je,ut,Mn)}else et.render(Je,ut)};function nt(y,L,k){y.transparent===!0&&y.side===sn&&y.forceSinglePass===!1?(y.side=$t,y.needsUpdate=!0,Js(y,L,k),y.side=Ln,y.needsUpdate=!0,Js(y,L,k),y.side=sn):Js(y,L,k)}this.compile=function(y,L,k=null){k===null&&(k=y),p=Ye.get(k),p.init(L),M.push(p),k.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),y!==k&&y.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const B=new Set;return y.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const le=N.material;if(le)if(Array.isArray(le))for(let xe=0;xe<le.length;xe++){const Pe=le[xe];nt(Pe,k,N),B.add(Pe)}else nt(le,k,N),B.add(le)}),M.pop(),p=null,B},this.compileAsync=function(y,L,k=null){const B=this.compile(y,L,k);return new Promise(N=>{function le(){if(B.forEach(function(xe){ve.get(xe).currentProgram.isReady()&&B.delete(xe)}),B.size===0){N(y);return}setTimeout(le,10)}ne.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let an=null;function Sn(y){an&&an(y)}function nl(){Jn.stop()}function il(){Jn.start()}const Jn=new od;Jn.setAnimationLoop(Sn),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(y){an=y,W.setAnimationLoop(y),y===null?Jn.stop():Jn.start()},W.addEventListener("sessionstart",nl),W.addEventListener("sessionend",il),this.render=function(y,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(L),L=W.getCamera()),y.isScene===!0&&y.onBeforeRender(x,y,L,D),p=Ye.get(y,M.length),p.init(L),M.push(p),Ce.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Z.setFromProjectionMatrix(Ce),we=this.localClippingEnabled,re=se.init(this.clippingPlanes,we),m=Me.get(y,w.length),m.init(),w.push(m),W.enabled===!0&&W.isPresenting===!0){const le=x.xr.getDepthSensingMesh();le!==null&&Ao(le,L,-1/0,x.sortObjects)}Ao(y,L,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ue,de),K=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,K&&Oe.addToRenderList(m,y),this.info.render.frame++,re===!0&&se.beginShadows();const k=p.state.shadowsArray;be.render(k,y,L),re===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=m.opaque,N=m.transmissive;if(p.setupLights(),L.isArrayCamera){const le=L.cameras;if(N.length>0)for(let xe=0,Pe=le.length;xe<Pe;xe++){const Fe=le[xe];rl(B,N,y,Fe)}K&&Oe.render(y);for(let xe=0,Pe=le.length;xe<Pe;xe++){const Fe=le[xe];sl(m,y,Fe,Fe.viewport)}}else N.length>0&&rl(B,N,y,L),K&&Oe.render(y),sl(m,y,L);D!==null&&(E.updateMultisampleRenderTarget(D),E.updateRenderTargetMipmap(D)),y.isScene===!0&&y.onAfterRender(x,y,L),at.resetDefaultState(),b=-1,S=null,M.pop(),M.length>0?(p=M[M.length-1],re===!0&&se.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Ao(y,L,k,B){if(y.visible===!1)return;if(y.layers.test(L.layers)){if(y.isGroup)k=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(L);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Z.intersectsSprite(y)){B&&Ue.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ce);const xe=q.update(y),Pe=y.material;Pe.visible&&m.push(y,xe,Pe,k,Ue.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Z.intersectsObject(y))){const xe=q.update(y),Pe=y.material;if(B&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ue.copy(y.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Ue.copy(xe.boundingSphere.center)),Ue.applyMatrix4(y.matrixWorld).applyMatrix4(Ce)),Array.isArray(Pe)){const Fe=xe.groups;for(let Ve=0,Ge=Fe.length;Ve<Ge;Ve++){const De=Fe[Ve],Je=Pe[De.materialIndex];Je&&Je.visible&&m.push(y,xe,Je,k,Ue.z,De)}}else Pe.visible&&m.push(y,xe,Pe,k,Ue.z,null)}}const le=y.children;for(let xe=0,Pe=le.length;xe<Pe;xe++)Ao(le[xe],L,k,B)}function sl(y,L,k,B){const N=y.opaque,le=y.transmissive,xe=y.transparent;p.setupLightsView(k),re===!0&&se.setGlobalState(x.clippingPlanes,k),B&&O.viewport(P.copy(B)),N.length>0&&Ks(N,L,k),le.length>0&&Ks(le,L,k),xe.length>0&&Ks(xe,L,k),O.buffers.depth.setTest(!0),O.buffers.depth.setMask(!0),O.buffers.color.setMask(!0),O.setPolygonOffset(!1)}function rl(y,L,k,B){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[B.id]===void 0&&(p.state.transmissionRenderTarget[B.id]=new mn(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?Fn:Un,minFilter:hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));const le=p.state.transmissionRenderTarget[B.id],xe=B.viewport||P;le.setSize(xe.z,xe.w);const Pe=x.getRenderTarget();x.setRenderTarget(le),x.getClearColor($),Q=x.getClearAlpha(),Q<1&&x.setClearColor(16777215,.5),x.clear(),K&&Oe.render(k);const Fe=x.toneMapping;x.toneMapping=Yn;const Ve=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),p.setupLightsView(B),re===!0&&se.setGlobalState(x.clippingPlanes,B),Ks(y,k,B),E.updateMultisampleRenderTarget(le),E.updateRenderTargetMipmap(le),ne.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let De=0,Je=L.length;De<Je;De++){const ct=L[De],ut=ct.object,Gt=ct.geometry,et=ct.material,Ne=ct.group;if(et.side===sn&&ut.layers.test(B.layers)){const Mn=et.side;et.side=$t,et.needsUpdate=!0,ol(ut,k,B,Gt,et,Ne),et.side=Mn,et.needsUpdate=!0,Ge=!0}}Ge===!0&&(E.updateMultisampleRenderTarget(le),E.updateRenderTargetMipmap(le))}x.setRenderTarget(Pe),x.setClearColor($,Q),Ve!==void 0&&(B.viewport=Ve),x.toneMapping=Fe}function Ks(y,L,k){const B=L.isScene===!0?L.overrideMaterial:null;for(let N=0,le=y.length;N<le;N++){const xe=y[N],Pe=xe.object,Fe=xe.geometry,Ve=B===null?xe.material:B,Ge=xe.group;Pe.layers.test(k.layers)&&ol(Pe,L,k,Fe,Ve,Ge)}}function ol(y,L,k,B,N,le){y.onBeforeRender(x,L,k,B,N,le),y.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),N.onBeforeRender(x,L,k,B,y,le),N.transparent===!0&&N.side===sn&&N.forceSinglePass===!1?(N.side=$t,N.needsUpdate=!0,x.renderBufferDirect(k,L,B,N,y,le),N.side=Ln,N.needsUpdate=!0,x.renderBufferDirect(k,L,B,N,y,le),N.side=sn):x.renderBufferDirect(k,L,B,N,y,le),y.onAfterRender(x,L,k,B,N,le)}function Js(y,L,k){L.isScene!==!0&&(L=Ze);const B=ve.get(y),N=p.state.lights,le=p.state.shadowsArray,xe=N.state.version,Pe=Ie.getParameters(y,N.state,le,L,k),Fe=Ie.getProgramCacheKey(Pe);let Ve=B.programs;B.environment=y.isMeshStandardMaterial?L.environment:null,B.fog=L.fog,B.envMap=(y.isMeshStandardMaterial?z:_).get(y.envMap||B.environment),B.envMapRotation=B.environment!==null&&y.envMap===null?L.environmentRotation:y.envMapRotation,Ve===void 0&&(y.addEventListener("dispose",He),Ve=new Map,B.programs=Ve);let Ge=Ve.get(Fe);if(Ge!==void 0){if(B.currentProgram===Ge&&B.lightsStateVersion===xe)return cl(y,Pe),Ge}else Pe.uniforms=Ie.getUniforms(y),y.onBeforeCompile(Pe,x),Ge=Ie.acquireProgram(Pe,Fe),Ve.set(Fe,Ge),B.uniforms=Pe.uniforms;const De=B.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(De.clippingPlanes=se.uniform),cl(y,Pe),B.needsLights=Nf(y),B.lightsStateVersion=xe,B.needsLights&&(De.ambientLightColor.value=N.state.ambient,De.lightProbe.value=N.state.probe,De.directionalLights.value=N.state.directional,De.directionalLightShadows.value=N.state.directionalShadow,De.spotLights.value=N.state.spot,De.spotLightShadows.value=N.state.spotShadow,De.rectAreaLights.value=N.state.rectArea,De.ltc_1.value=N.state.rectAreaLTC1,De.ltc_2.value=N.state.rectAreaLTC2,De.pointLights.value=N.state.point,De.pointLightShadows.value=N.state.pointShadow,De.hemisphereLights.value=N.state.hemi,De.directionalShadowMap.value=N.state.directionalShadowMap,De.directionalShadowMatrix.value=N.state.directionalShadowMatrix,De.spotShadowMap.value=N.state.spotShadowMap,De.spotLightMatrix.value=N.state.spotLightMatrix,De.spotLightMap.value=N.state.spotLightMap,De.pointShadowMap.value=N.state.pointShadowMap,De.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=Ge,B.uniformsList=null,Ge}function al(y){if(y.uniformsList===null){const L=y.currentProgram.getUniforms();y.uniformsList=Qr.seqWithValue(L.seq,y.uniforms)}return y.uniformsList}function cl(y,L){const k=ve.get(y);k.outputColorSpace=L.outputColorSpace,k.batching=L.batching,k.batchingColor=L.batchingColor,k.instancing=L.instancing,k.instancingColor=L.instancingColor,k.instancingMorph=L.instancingMorph,k.skinning=L.skinning,k.morphTargets=L.morphTargets,k.morphNormals=L.morphNormals,k.morphColors=L.morphColors,k.morphTargetsCount=L.morphTargetsCount,k.numClippingPlanes=L.numClippingPlanes,k.numIntersection=L.numClipIntersection,k.vertexAlphas=L.vertexAlphas,k.vertexTangents=L.vertexTangents,k.toneMapping=L.toneMapping}function Df(y,L,k,B,N){L.isScene!==!0&&(L=Ze),E.resetTextureUnits();const le=L.fog,xe=B.isMeshStandardMaterial?L.environment:null,Pe=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ls,Fe=(B.isMeshStandardMaterial?z:_).get(B.envMap||xe),Ve=B.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ge=!!k.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),De=!!k.morphAttributes.position,Je=!!k.morphAttributes.normal,ct=!!k.morphAttributes.color;let ut=Yn;B.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(ut=x.toneMapping);const Gt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,et=Gt!==void 0?Gt.length:0,Ne=ve.get(B),Mn=p.state.lights;if(re===!0&&(we===!0||y!==S)){const Jt=y===S&&B.id===b;se.setState(B,y,Jt)}let tt=!1;B.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Mn.state.version||Ne.outputColorSpace!==Pe||N.isBatchedMesh&&Ne.batching===!1||!N.isBatchedMesh&&Ne.batching===!0||N.isBatchedMesh&&Ne.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ne.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ne.instancing===!1||!N.isInstancedMesh&&Ne.instancing===!0||N.isSkinnedMesh&&Ne.skinning===!1||!N.isSkinnedMesh&&Ne.skinning===!0||N.isInstancedMesh&&Ne.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ne.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ne.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ne.instancingMorph===!1&&N.morphTexture!==null||Ne.envMap!==Fe||B.fog===!0&&Ne.fog!==le||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==se.numPlanes||Ne.numIntersection!==se.numIntersection)||Ne.vertexAlphas!==Ve||Ne.vertexTangents!==Ge||Ne.morphTargets!==De||Ne.morphNormals!==Je||Ne.morphColors!==ct||Ne.toneMapping!==ut||Ne.morphTargetsCount!==et)&&(tt=!0):(tt=!0,Ne.__version=B.version);let cn=Ne.currentProgram;tt===!0&&(cn=Js(B,L,N));let Mi=!1,Yt=!1,ms=!1;const ht=cn.getUniforms(),gn=Ne.uniforms;if(O.useProgram(cn.program)&&(Mi=!0,Yt=!0,ms=!0),B.id!==b&&(b=B.id,Yt=!0),Mi||S!==y){O.buffers.depth.getReversed()?(ae.copy(y.projectionMatrix),Wp(ae),$p(ae),ht.setValue(T,"projectionMatrix",ae)):ht.setValue(T,"projectionMatrix",y.projectionMatrix),ht.setValue(T,"viewMatrix",y.matrixWorldInverse);const zn=ht.map.cameraPosition;zn!==void 0&&zn.setValue(T,ze.setFromMatrixPosition(y.matrixWorld)),Se.logarithmicDepthBuffer&&ht.setValue(T,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ht.setValue(T,"isOrthographic",y.isOrthographicCamera===!0),S!==y&&(S=y,Yt=!0,ms=!0)}if(N.isSkinnedMesh){ht.setOptional(T,N,"bindMatrix"),ht.setOptional(T,N,"bindMatrixInverse");const Jt=N.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),ht.setValue(T,"boneTexture",Jt.boneTexture,E))}N.isBatchedMesh&&(ht.setOptional(T,N,"batchingTexture"),ht.setValue(T,"batchingTexture",N._matricesTexture,E),ht.setOptional(T,N,"batchingIdTexture"),ht.setValue(T,"batchingIdTexture",N._indirectTexture,E),ht.setOptional(T,N,"batchingColorTexture"),N._colorsTexture!==null&&ht.setValue(T,"batchingColorTexture",N._colorsTexture,E));const gs=k.morphAttributes;if((gs.position!==void 0||gs.normal!==void 0||gs.color!==void 0)&&ke.update(N,k,cn),(Yt||Ne.receiveShadow!==N.receiveShadow)&&(Ne.receiveShadow=N.receiveShadow,ht.setValue(T,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(gn.envMap.value=Fe,gn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&L.environment!==null&&(gn.envMapIntensity.value=L.environmentIntensity),Yt&&(ht.setValue(T,"toneMappingExposure",x.toneMappingExposure),Ne.needsLights&&Lf(gn,ms),le&&B.fog===!0&&pe.refreshFogUniforms(gn,le),pe.refreshMaterialUniforms(gn,B,G,ie,p.state.transmissionRenderTarget[y.id]),Qr.upload(T,al(Ne),gn,E)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Qr.upload(T,al(Ne),gn,E),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ht.setValue(T,"center",N.center),ht.setValue(T,"modelViewMatrix",N.modelViewMatrix),ht.setValue(T,"normalMatrix",N.normalMatrix),ht.setValue(T,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Jt=B.uniformsGroups;for(let zn=0,kn=Jt.length;zn<kn;zn++){const ll=Jt[zn];F.update(ll,cn),F.bind(ll,cn)}}return cn}function Lf(y,L){y.ambientLightColor.needsUpdate=L,y.lightProbe.needsUpdate=L,y.directionalLights.needsUpdate=L,y.directionalLightShadows.needsUpdate=L,y.pointLights.needsUpdate=L,y.pointLightShadows.needsUpdate=L,y.spotLights.needsUpdate=L,y.spotLightShadows.needsUpdate=L,y.rectAreaLights.needsUpdate=L,y.hemisphereLights.needsUpdate=L}function Nf(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(y,L,k){ve.get(y.texture).__webglTexture=L,ve.get(y.depthTexture).__webglTexture=k;const B=ve.get(y);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=k===void 0,B.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,L){const k=ve.get(y);k.__webglFramebuffer=L,k.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(y,L=0,k=0){D=y,R=L,A=k;let B=!0,N=null,le=!1,xe=!1;if(y){const Fe=ve.get(y);if(Fe.__useDefaultFramebuffer!==void 0)O.bindFramebuffer(T.FRAMEBUFFER,null),B=!1;else if(Fe.__webglFramebuffer===void 0)E.setupRenderTarget(y);else if(Fe.__hasExternalTextures)E.rebindTextures(y,ve.get(y.texture).__webglTexture,ve.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const De=y.depthTexture;if(Fe.__boundDepthTexture!==De){if(De!==null&&ve.has(De)&&(y.width!==De.image.width||y.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(y)}}const Ve=y.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(xe=!0);const Ge=ve.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ge[L])?N=Ge[L][k]:N=Ge[L],le=!0):y.samples>0&&E.useMultisampledRTT(y)===!1?N=ve.get(y).__webglMultisampledFramebuffer:Array.isArray(Ge)?N=Ge[k]:N=Ge,P.copy(y.viewport),j.copy(y.scissor),V=y.scissorTest}else P.copy(he).multiplyScalar(G).floor(),j.copy(Ae).multiplyScalar(G).floor(),V=Ke;if(O.bindFramebuffer(T.FRAMEBUFFER,N)&&B&&O.drawBuffers(y,N),O.viewport(P),O.scissor(j),O.setScissorTest(V),le){const Fe=ve.get(y.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+L,Fe.__webglTexture,k)}else if(xe){const Fe=ve.get(y.texture),Ve=L||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,Fe.__webglTexture,k||0,Ve)}b=-1},this.readRenderTargetPixels=function(y,L,k,B,N,le,xe){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=ve.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&xe!==void 0&&(Pe=Pe[xe]),Pe){O.bindFramebuffer(T.FRAMEBUFFER,Pe);try{const Fe=y.texture,Ve=Fe.format,Ge=Fe.type;if(!Se.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Se.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=y.width-B&&k>=0&&k<=y.height-N&&T.readPixels(L,k,B,N,$e.convert(Ve),$e.convert(Ge),le)}finally{const Fe=D!==null?ve.get(D).__webglFramebuffer:null;O.bindFramebuffer(T.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(y,L,k,B,N,le,xe){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=ve.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&xe!==void 0&&(Pe=Pe[xe]),Pe){const Fe=y.texture,Ve=Fe.format,Ge=Fe.type;if(!Se.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Se.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=y.width-B&&k>=0&&k<=y.height-N){O.bindFramebuffer(T.FRAMEBUFFER,Pe);const De=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,De),T.bufferData(T.PIXEL_PACK_BUFFER,le.byteLength,T.STREAM_READ),T.readPixels(L,k,B,N,$e.convert(Ve),$e.convert(Ge),0);const Je=D!==null?ve.get(D).__webglFramebuffer:null;O.bindFramebuffer(T.FRAMEBUFFER,Je);const ct=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await Gp(T,ct,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,De),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,le),T.deleteBuffer(De),T.deleteSync(ct),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,L=null,k=0){y.isTexture!==!0&&(Rs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,y=arguments[1]);const B=Math.pow(2,-k),N=Math.floor(y.image.width*B),le=Math.floor(y.image.height*B),xe=L!==null?L.x:0,Pe=L!==null?L.y:0;E.setTexture2D(y,0),T.copyTexSubImage2D(T.TEXTURE_2D,k,0,0,xe,Pe,N,le),O.unbindTexture()},this.copyTextureToTexture=function(y,L,k=null,B=null,N=0){y.isTexture!==!0&&(Rs("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,y=arguments[1],L=arguments[2],N=arguments[3]||0,k=null);let le,xe,Pe,Fe,Ve,Ge,De,Je,ct;const ut=y.isCompressedTexture?y.mipmaps[N]:y.image;k!==null?(le=k.max.x-k.min.x,xe=k.max.y-k.min.y,Pe=k.isBox3?k.max.z-k.min.z:1,Fe=k.min.x,Ve=k.min.y,Ge=k.isBox3?k.min.z:0):(le=ut.width,xe=ut.height,Pe=ut.depth||1,Fe=0,Ve=0,Ge=0),B!==null?(De=B.x,Je=B.y,ct=B.z):(De=0,Je=0,ct=0);const Gt=$e.convert(L.format),et=$e.convert(L.type);let Ne;L.isData3DTexture?(E.setTexture3D(L,0),Ne=T.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(E.setTexture2DArray(L,0),Ne=T.TEXTURE_2D_ARRAY):(E.setTexture2D(L,0),Ne=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,L.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,L.unpackAlignment);const Mn=T.getParameter(T.UNPACK_ROW_LENGTH),tt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),cn=T.getParameter(T.UNPACK_SKIP_PIXELS),Mi=T.getParameter(T.UNPACK_SKIP_ROWS),Yt=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,ut.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ut.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Fe),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ve),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ge);const ms=y.isDataArrayTexture||y.isData3DTexture,ht=L.isDataArrayTexture||L.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){const gn=ve.get(y),gs=ve.get(L),Jt=ve.get(gn.__renderTarget),zn=ve.get(gs.__renderTarget);O.bindFramebuffer(T.READ_FRAMEBUFFER,Jt.__webglFramebuffer),O.bindFramebuffer(T.DRAW_FRAMEBUFFER,zn.__webglFramebuffer);for(let kn=0;kn<Pe;kn++)ms&&T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ve.get(y).__webglTexture,N,Ge+kn),y.isDepthTexture?(ht&&T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ve.get(L).__webglTexture,N,ct+kn),T.blitFramebuffer(Fe,Ve,le,xe,De,Je,le,xe,T.DEPTH_BUFFER_BIT,T.NEAREST)):ht?T.copyTexSubImage3D(Ne,N,De,Je,ct+kn,Fe,Ve,le,xe):T.copyTexSubImage2D(Ne,N,De,Je,ct+kn,Fe,Ve,le,xe);O.bindFramebuffer(T.READ_FRAMEBUFFER,null),O.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else ht?y.isDataTexture||y.isData3DTexture?T.texSubImage3D(Ne,N,De,Je,ct,le,xe,Pe,Gt,et,ut.data):L.isCompressedArrayTexture?T.compressedTexSubImage3D(Ne,N,De,Je,ct,le,xe,Pe,Gt,ut.data):T.texSubImage3D(Ne,N,De,Je,ct,le,xe,Pe,Gt,et,ut):y.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,N,De,Je,le,xe,Gt,et,ut.data):y.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,N,De,Je,ut.width,ut.height,Gt,ut.data):T.texSubImage2D(T.TEXTURE_2D,N,De,Je,le,xe,Gt,et,ut);T.pixelStorei(T.UNPACK_ROW_LENGTH,Mn),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,tt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,cn),T.pixelStorei(T.UNPACK_SKIP_ROWS,Mi),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Yt),N===0&&L.generateMipmaps&&T.generateMipmap(Ne),O.unbindTexture()},this.copyTextureToTexture3D=function(y,L,k=null,B=null,N=0){return y.isTexture!==!0&&(Rs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,B=arguments[1]||null,y=arguments[2],L=arguments[3],N=arguments[4]||0),Rs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,L,k,B,N)},this.initRenderTarget=function(y){ve.get(y).__webglFramebuffer===void 0&&E.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?E.setTextureCube(y,0):y.isData3DTexture?E.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?E.setTexture2DArray(y,0):E.setTexture2D(y,0),O.unbindTexture()},this.resetState=function(){R=0,A=0,D=null,O.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}class Lc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Be(e),this.density=t}clone(){return new Lc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ex extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class tx extends Ut{constructor(e=null,t=1,i=1,s,r,o,a,c,l=Kt,u=Kt,h,d){super(null,o,a,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cn extends Pt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Oi=new ot,lu=new ot,Sr=[],uu=new Xt,nx=new ot,Ss=new It,Ms=new xi;class ix extends It{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Cn(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,nx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Xt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Oi),uu.copy(e.boundingBox).applyMatrix4(Oi),this.boundingBox.union(uu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new xi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Oi),Ms.copy(e.boundingSphere).applyMatrix4(Oi),this.boundingSphere.union(Ms)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Ss.geometry=this.geometry,Ss.material=this.material,Ss.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ms.copy(this.boundingSphere),Ms.applyMatrix4(i),e.ray.intersectsSphere(Ms)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Oi),lu.multiplyMatrices(i,Oi),Ss.matrixWorld=lu,Ss.raycast(e,Sr);for(let o=0,a=Sr.length;o<a;o++){const c=Sr[o];c.instanceId=r,c.object=this,t.push(c)}Sr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Cn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new tx(new Float32Array(s*this.count),s,this.count,Rc,xn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Nc extends us{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const so=new I,ro=new I,hu=new ot,bs=new Zs,Mr=new xi,ia=new I,du=new I;class sx extends Ot{constructor(e=new Ft,t=new Nc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)so.fromBufferAttribute(t,s-1),ro.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=so.distanceTo(ro);e.setAttribute("lineDistance",new bt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Mr.copy(i.boundingSphere),Mr.applyMatrix4(s),Mr.radius+=r,e.ray.intersectsSphere(Mr)===!1)return;hu.copy(s).invert(),bs.copy(e.ray).applyMatrix4(hu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=l){const p=u.getX(v),w=u.getX(v+1),M=br(this,e,bs,c,p,w);M&&t.push(M)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(f),p=br(this,e,bs,c,v,m);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=l){const p=br(this,e,bs,c,v,v+1);p&&t.push(p)}if(this.isLineLoop){const v=br(this,e,bs,c,g-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function br(n,e,t,i,s,r){const o=n.geometry.attributes.position;if(so.fromBufferAttribute(o,s),ro.fromBufferAttribute(o,r),t.distanceSqToSegment(so,ro,ia,du)>i)return;ia.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(ia);if(!(c<e.near||c>e.far))return{distance:c,point:du.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const fu=new I,pu=new I;class Ps extends sx{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)fu.fromBufferAttribute(t,s),pu.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+fu.distanceTo(pu);e.setAttribute("lineDistance",new bt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Uc extends us{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const mu=new ot,hc=new Zs,Er=new xi,wr=new I;class fd extends Ot{constructor(e=new Ft,t=new Uc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Er.copy(i.boundingSphere),Er.applyMatrix4(s),Er.radius+=r,e.ray.intersectsSphere(Er)===!1)return;mu.copy(s).invert(),hc.copy(e.ray).applyMatrix4(mu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,h=i.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,v=f;g<v;g++){const m=l.getX(g);wr.fromBufferAttribute(h,m),gu(wr,m,c,s,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,v=f;g<v;g++)wr.fromBufferAttribute(h,g),gu(wr,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function gu(n,e,t,i,s,r,o){const a=hc.distanceSqToPoint(n);if(a<t){const c=new I;hc.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class rx extends Ut{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);const u=i[s],d=i[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new te:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new I,s=[],r=[],o=[],a=new I,c=new ot;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Rt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Rt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Oc extends yn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new te){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ox extends Oc{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function zc(){let n=0,e=0,t=0,i=0;function s(r,o,a,c){n=r,e=a,t=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let d=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const Tr=new I,sa=new zc,ra=new zc,oa=new zc;class ax extends yn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new I){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Tr.subVectors(s[0],s[1]).add(s[0]),l=Tr);const h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Tr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Tr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),f),v=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),sa.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,v,m),ra.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,v,m),oa.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(sa.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),ra.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),oa.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return i.set(sa.calc(c),ra.calc(c),oa.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function vu(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+r+o)*c+(-3*t+3*i-2*r-o)*a+r*n+t}function cx(n,e){const t=1-n;return t*t*e}function lx(n,e){return 2*(1-n)*n*e}function ux(n,e){return n*n*e}function Fs(n,e,t,i){return cx(n,e)+lx(n,t)+ux(n,i)}function hx(n,e){const t=1-n;return t*t*t*e}function dx(n,e){const t=1-n;return 3*t*t*n*e}function fx(n,e){return 3*(1-n)*n*n*e}function px(n,e){return n*n*n*e}function Ds(n,e,t,i,s){return hx(n,e)+dx(n,t)+fx(n,i)+px(n,s)}class pd extends yn{constructor(e=new te,t=new te,i=new te,s=new te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new te){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ds(e,s.x,r.x,o.x,a.x),Ds(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class mx extends yn{constructor(e=new I,t=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new I){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ds(e,s.x,r.x,o.x,a.x),Ds(e,s.y,r.y,o.y,a.y),Ds(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class md extends yn{constructor(e=new te,t=new te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new te){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gx extends yn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gd extends yn{constructor(e=new te,t=new te,i=new te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new te){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Fs(e,s.x,r.x,o.x),Fs(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vx extends yn{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Fs(e,s.x,r.x,o.x),Fs(e,s.y,r.y,o.y),Fs(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vd extends yn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new te){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(vu(a,c.x,l.x,u.x,h.x),vu(a,c.y,l.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new te().fromArray(s))}return this}}var dc=Object.freeze({__proto__:null,ArcCurve:ox,CatmullRomCurve3:ax,CubicBezierCurve:pd,CubicBezierCurve3:mx,EllipseCurve:Oc,LineCurve:md,LineCurve3:gx,QuadraticBezierCurve:gd,QuadraticBezierCurve3:vx,SplineCurve:vd});class _x extends yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new dc[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new dc[s.type]().fromJSON(s))}return this}}class _u extends _x{constructor(e){super(),this.type="Path",this.currentPoint=new te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new md(this.currentPoint.clone(),new te(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new gd(this.currentPoint.clone(),new te(e,t),new te(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new pd(this.currentPoint.clone(),new te(e,t),new te(i,s),new te(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new vd(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,s,r,o,a,c),this}absellipse(e,t,i,s,r,o,a,c){const l=new Oc(e,t,i,s,r,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}const Rr=new I,Ar=new I,aa=new I,Cr=new rn;class xu extends Ft{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(ji*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:v,b:m,c:p}=Cr;if(v.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),Cr.getNormal(aa),h[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,h[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let w=0;w<3;w++){const M=(w+1)%3,x=h[w],U=h[M],R=Cr[u[w]],A=Cr[u[M]],D=`${x}_${U}`,b=`${U}_${x}`;b in d&&d[b]?(aa.dot(d[b].normal)<=r&&(f.push(R.x,R.y,R.z),f.push(A.x,A.y,A.z)),d[b]=null):D in d||(d[D]={index0:l[w],index1:l[M],normal:aa.clone()})}}for(const g in d)if(d[g]){const{index0:v,index1:m}=d[g];Rr.fromBufferAttribute(a,v),Ar.fromBufferAttribute(a,m),f.push(Rr.x,Rr.y,Rr.z),f.push(Ar.x,Ar.y,Ar.z)}this.setAttribute("position",new bt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class _d extends _u{constructor(e){super(e),this.uuid=_i(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new _u().fromJSON(s))}return this}}const xx={triangulate:function(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=xd(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,h,d,f;if(i&&(r=Ex(n,e,r,t)),n.length>80*t){a=l=n[0],c=u=n[1];for(let g=t;g<s;g+=t)h=n[g],d=n[g+1],h<a&&(a=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);f=Math.max(l-a,u-c),f=f!==0?32767/f:0}return ks(r,o,t,a,c,f,0),o}};function xd(n,e,t,i,s){let r,o;if(s===Nx(n,e,t,i)>0)for(r=e;r<t;r+=i)o=yu(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=yu(r,n[r],n[r+1],o);return o&&Mo(o,o.next)&&(Vs(o),o=o.next),o}function pi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Mo(t,t.next)||pt(t.prev,t,t.next)===0)){if(Vs(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ks(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Cx(n,i,s,r);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,r?Sx(n,i,s,r):yx(n)){e.push(c.i/t|0),e.push(n.i/t|0),e.push(l.i/t|0),Vs(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=Mx(pi(n),e,t),ks(n,e,t,i,s,r,2)):o===2&&bx(n,e,t,i,s,r):ks(pi(n),e,t,i,s,r,1);break}}}function yx(n){const e=n.prev,t=n,i=n.next;if(pt(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,c=t.y,l=i.y,u=s<r?s<o?s:o:r<o?r:o,h=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&$i(s,a,r,c,o,l,g.x,g.y)&&pt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Sx(n,e,t,i){const s=n.prev,r=n,o=n.next;if(pt(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=u<h?u<d?u:d:h<d?h:d,v=a>c?a>l?a:l:c>l?c:l,m=u>h?u>d?u:d:h>d?h:d,p=fc(f,g,e,t,i),w=fc(v,m,e,t,i);let M=n.prevZ,x=n.nextZ;for(;M&&M.z>=p&&x&&x.z<=w;){if(M.x>=f&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&$i(a,u,c,h,l,d,M.x,M.y)&&pt(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&$i(a,u,c,h,l,d,x.x,x.y)&&pt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&$i(a,u,c,h,l,d,M.x,M.y)&&pt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=w;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&$i(a,u,c,h,l,d,x.x,x.y)&&pt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Mx(n,e,t){let i=n;do{const s=i.prev,r=i.next.next;!Mo(s,r)&&yd(s,i,i.next,r)&&Bs(s,r)&&Bs(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),Vs(i),Vs(i.next),i=n=r),i=i.next}while(i!==n);return pi(i)}function bx(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Fx(o,a)){let c=Sd(o,a);o=pi(o,o.next),c=pi(c,c.next),ks(o,e,t,i,s,r,0),ks(c,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Ex(n,e,t,i){const s=[];let r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*i,c=r<o-1?e[r+1]*i:n.length,l=xd(n,a,c,i,!1),l===l.next&&(l.steiner=!0),s.push(Px(l));for(s.sort(wx),r=0;r<s.length;r++)t=Tx(s[r],t);return t}function wx(n,e){return n.x-e.x}function Tx(n,e){const t=Rx(n,e);if(!t)return e;const i=Sd(t,n);return pi(i,i.next),pi(t,t.next)}function Rx(n,e){let t=e,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>i&&(i=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0,h;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&$i(o<l?r:i,o,c,l,o<l?i:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),Bs(t,n)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&Ax(s,t)))&&(s=t,u=h)),t=t.next;while(t!==a);return s}function Ax(n,e){return pt(n.prev,n,e.prev)<0&&pt(e.next,n,n.next)<0}function Cx(n,e,t,i){let s=n;do s.z===0&&(s.z=fc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Ix(s)}function Ix(n){let e,t,i,s,r,o,a,c,l=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<l&&(a++,i=i.nextZ,!!i);e++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,l*=2}while(o>1);return n}function fc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Px(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function $i(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Fx(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Dx(n,e)&&(Bs(n,e)&&Bs(e,n)&&Lx(n,e)&&(pt(n.prev,n,e.prev)||pt(n,e.prev,e))||Mo(n,e)&&pt(n.prev,n,n.next)>0&&pt(e.prev,e,e.next)>0)}function pt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Mo(n,e){return n.x===e.x&&n.y===e.y}function yd(n,e,t,i){const s=Pr(pt(n,e,t)),r=Pr(pt(n,e,i)),o=Pr(pt(t,i,n)),a=Pr(pt(t,i,e));return!!(s!==r&&o!==a||s===0&&Ir(n,t,e)||r===0&&Ir(n,i,e)||o===0&&Ir(t,n,i)||a===0&&Ir(t,e,i))}function Ir(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Pr(n){return n>0?1:n<0?-1:0}function Dx(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&yd(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Bs(n,e){return pt(n.prev,n,n.next)<0?pt(n,e,n.next)>=0&&pt(n,n.prev,e)>=0:pt(n,e,n.prev)<0||pt(n,n.next,e)<0}function Lx(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Sd(n,e){const t=new pc(n.i,n.x,n.y),i=new pc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function yu(n,e,t,i){const s=new pc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Vs(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function pc(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Nx(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Ls{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return Ls.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];Su(e),Mu(i,e);let o=e.length;t.forEach(Su);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Mu(i,t[c]);const a=xx.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Su(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Mu(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class kc extends Ft{constructor(e=new _d([new te(.5,.5),new te(-.5,.5),new te(-.5,-.5),new te(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new bt(s,3)),this.setAttribute("uv",new bt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:Ux;let M,x=!1,U,R,A,D;p&&(M=p.getSpacedPoints(u),x=!0,d=!1,U=p.computeFrenetFrames(u,!1),R=new I,A=new I,D=new I),d||(m=0,f=0,g=0,v=0);const b=a.extractPoints(l);let S=b.shape;const P=b.holes;if(!Ls.isClockWise(S)){S=S.reverse();for(let K=0,oe=P.length;K<oe;K++){const T=P[K];Ls.isClockWise(T)&&(P[K]=T.reverse())}}const V=Ls.triangulateShape(S,P),$=S;for(let K=0,oe=P.length;K<oe;K++){const T=P[K];S=S.concat(T)}function Q(K,oe,T){return oe||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(oe,T)}const H=S.length,ie=V.length;function G(K,oe,T){let Te,ne,Se;const O=K.x-oe.x,ce=K.y-oe.y,ve=T.x-K.x,E=T.y-K.y,_=O*O+ce*ce,z=O*E-ce*ve;if(Math.abs(z)>Number.EPSILON){const Y=Math.sqrt(_),ee=Math.sqrt(ve*ve+E*E),q=oe.x-ce/Y,Ie=oe.y+O/Y,pe=T.x-E/ee,Me=T.y+ve/ee,Ye=((pe-q)*E-(Me-Ie)*ve)/(O*E-ce*ve);Te=q+O*Ye-K.x,ne=Ie+ce*Ye-K.y;const se=Te*Te+ne*ne;if(se<=2)return new te(Te,ne);Se=Math.sqrt(se/2)}else{let Y=!1;O>Number.EPSILON?ve>Number.EPSILON&&(Y=!0):O<-Number.EPSILON?ve<-Number.EPSILON&&(Y=!0):Math.sign(ce)===Math.sign(E)&&(Y=!0),Y?(Te=-ce,ne=O,Se=Math.sqrt(_)):(Te=O,ne=ce,Se=Math.sqrt(_/2))}return new te(Te/Se,ne/Se)}const ue=[];for(let K=0,oe=$.length,T=oe-1,Te=K+1;K<oe;K++,T++,Te++)T===oe&&(T=0),Te===oe&&(Te=0),ue[K]=G($[K],$[T],$[Te]);const de=[];let he,Ae=ue.concat();for(let K=0,oe=P.length;K<oe;K++){const T=P[K];he=[];for(let Te=0,ne=T.length,Se=ne-1,O=Te+1;Te<ne;Te++,Se++,O++)Se===ne&&(Se=0),O===ne&&(O=0),he[Te]=G(T[Te],T[Se],T[O]);de.push(he),Ae=Ae.concat(he)}for(let K=0;K<m;K++){const oe=K/m,T=f*Math.cos(oe*Math.PI/2),Te=g*Math.sin(oe*Math.PI/2)+v;for(let ne=0,Se=$.length;ne<Se;ne++){const O=Q($[ne],ue[ne],Te);ae(O.x,O.y,-T)}for(let ne=0,Se=P.length;ne<Se;ne++){const O=P[ne];he=de[ne];for(let ce=0,ve=O.length;ce<ve;ce++){const E=Q(O[ce],he[ce],Te);ae(E.x,E.y,-T)}}}const Ke=g+v;for(let K=0;K<H;K++){const oe=d?Q(S[K],Ae[K],Ke):S[K];x?(A.copy(U.normals[0]).multiplyScalar(oe.x),R.copy(U.binormals[0]).multiplyScalar(oe.y),D.copy(M[0]).add(A).add(R),ae(D.x,D.y,D.z)):ae(oe.x,oe.y,0)}for(let K=1;K<=u;K++)for(let oe=0;oe<H;oe++){const T=d?Q(S[oe],Ae[oe],Ke):S[oe];x?(A.copy(U.normals[K]).multiplyScalar(T.x),R.copy(U.binormals[K]).multiplyScalar(T.y),D.copy(M[K]).add(A).add(R),ae(D.x,D.y,D.z)):ae(T.x,T.y,h/u*K)}for(let K=m-1;K>=0;K--){const oe=K/m,T=f*Math.cos(oe*Math.PI/2),Te=g*Math.sin(oe*Math.PI/2)+v;for(let ne=0,Se=$.length;ne<Se;ne++){const O=Q($[ne],ue[ne],Te);ae(O.x,O.y,h+T)}for(let ne=0,Se=P.length;ne<Se;ne++){const O=P[ne];he=de[ne];for(let ce=0,ve=O.length;ce<ve;ce++){const E=Q(O[ce],he[ce],Te);x?ae(E.x,E.y+M[u-1].y,M[u-1].x+T):ae(E.x,E.y,h+T)}}}Z(),re();function Z(){const K=s.length/3;if(d){let oe=0,T=H*oe;for(let Te=0;Te<ie;Te++){const ne=V[Te];Ce(ne[2]+T,ne[1]+T,ne[0]+T)}oe=u+m*2,T=H*oe;for(let Te=0;Te<ie;Te++){const ne=V[Te];Ce(ne[0]+T,ne[1]+T,ne[2]+T)}}else{for(let oe=0;oe<ie;oe++){const T=V[oe];Ce(T[2],T[1],T[0])}for(let oe=0;oe<ie;oe++){const T=V[oe];Ce(T[0]+H*u,T[1]+H*u,T[2]+H*u)}}i.addGroup(K,s.length/3-K,0)}function re(){const K=s.length/3;let oe=0;we($,oe),oe+=$.length;for(let T=0,Te=P.length;T<Te;T++){const ne=P[T];we(ne,oe),oe+=ne.length}i.addGroup(K,s.length/3-K,1)}function we(K,oe){let T=K.length;for(;--T>=0;){const Te=T;let ne=T-1;ne<0&&(ne=K.length-1);for(let Se=0,O=u+m*2;Se<O;Se++){const ce=H*Se,ve=H*(Se+1),E=oe+Te+ce,_=oe+ne+ce,z=oe+ne+ve,Y=oe+Te+ve;ze(E,_,z,Y)}}}function ae(K,oe,T){c.push(K),c.push(oe),c.push(T)}function Ce(K,oe,T){Ue(K),Ue(oe),Ue(T);const Te=s.length/3,ne=w.generateTopUV(i,s,Te-3,Te-2,Te-1);Ze(ne[0]),Ze(ne[1]),Ze(ne[2])}function ze(K,oe,T,Te){Ue(K),Ue(oe),Ue(Te),Ue(oe),Ue(T),Ue(Te);const ne=s.length/3,Se=w.generateSideWallUV(i,s,ne-6,ne-3,ne-2,ne-1);Ze(Se[0]),Ze(Se[1]),Ze(Se[3]),Ze(Se[1]),Ze(Se[2]),Ze(Se[3])}function Ue(K){s.push(c[K*3+0]),s.push(c[K*3+1]),s.push(c[K*3+2])}function Ze(K){r.push(K.x),r.push(K.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Ox(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new dc[s.type]().fromJSON(s)),new kc(i,e.options)}}const Ux={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[s*3],u=e[s*3+1];return[new te(r,o),new te(a,c),new te(l,u)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],u=e[i*3+1],h=e[i*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],v=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new te(o,1-c),new te(l,1-h),new te(d,1-g),new te(v,1-p)]:[new te(a,1-c),new te(u,1-h),new te(f,1-g),new te(m,1-p)]}};function Ox(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Bc extends Ft{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let h=e;const d=(t-e)/s,f=new I,g=new te;for(let v=0;v<=s;v++){for(let m=0;m<=i;m++){const p=r+m/i*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let v=0;v<s;v++){const m=v*(i+1);for(let p=0;p<i;p++){const w=p+m,M=w,x=w+i+1,U=w+i+2,R=w+1;a.push(M,x,R),a.push(x,U,R)}}this.setIndex(a),this.setAttribute("position",new bt(c,3)),this.setAttribute("normal",new bt(l,3)),this.setAttribute("uv",new bt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class zx extends Mt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class Md{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=bu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=bu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function bu(){return performance.now()}class ds{constructor(e){this.value=e}clone(){return new ds(this.value.clone===void 0?this.value:this.value.clone())}}const Eu=new ot;class kx{constructor(e,t,i=0,s=1/0){this.ray=new Zs(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Fc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Eu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Eu),this}intersectObject(e,t=!0,i=[]){return mc(e,this,i,t),i.sort(wu),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)mc(e[s],this,i,t);return i.sort(wu),i}}function wu(n,e){return n.distance-e.distance}function mc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)mc(r[o],e,t,!0)}}class dn{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Bx extends Ps{constructor(e=10,t=16,i=8,s=64,r=4473924,o=8947848){r=new Be(r),o=new Be(o);const a=[],c=[];if(t>1)for(let h=0;h<t;h++){const d=h/t*(Math.PI*2),f=Math.sin(d)*e,g=Math.cos(d)*e;a.push(0,0,0),a.push(f,0,g);const v=h&1?r:o;c.push(v.r,v.g,v.b),c.push(v.r,v.g,v.b)}for(let h=0;h<i;h++){const d=h&1?r:o,f=e-e/i*h;for(let g=0;g<s;g++){let v=g/s*(Math.PI*2),m=Math.sin(v)*f,p=Math.cos(v)*f;a.push(m,0,p),c.push(d.r,d.g,d.b),v=(g+1)/s*(Math.PI*2),m=Math.sin(v)*f,p=Math.cos(v)*f,a.push(m,0,p),c.push(d.r,d.g,d.b)}}const l=new Ft;l.setAttribute("position",new bt(a,3)),l.setAttribute("color",new bt(c,3));const u=new Nc({vertexColors:!0,toneMapped:!1});super(l,u),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Vx extends vi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mc);var Tu;function X(n,e,t){function i(a,c){if(a._zod||Object.defineProperty(a,"_zod",{value:{def:c,constr:o,traits:new Set},enumerable:!1}),a._zod.traits.has(n))return;a._zod.traits.add(n),e(a,c);const l=o.prototype,u=Object.keys(l);for(let h=0;h<u.length;h++){const d=u[h];d in a||(a[d]=l[d].bind(a))}}const s=(t==null?void 0:t.Parent)??Object;class r extends s{}Object.defineProperty(r,"name",{value:n});function o(a){var c;const l=t!=null&&t.Parent?new r:this;i(l,a),(c=l._zod).deferred??(c.deferred=[]);for(const u of l._zod.deferred)u();return l}return Object.defineProperty(o,"init",{value:i}),Object.defineProperty(o,Symbol.hasInstance,{value:a=>{var c,l;return t!=null&&t.Parent&&a instanceof t.Parent?!0:(l=(c=a==null?void 0:a._zod)==null?void 0:c.traits)==null?void 0:l.has(n)}}),Object.defineProperty(o,"name",{value:n}),o}class Ji extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}class bd extends Error{constructor(e){super(`Encountered unidirectional transform during encode: ${e}`),this.name="ZodEncodeError"}}(Tu=globalThis).__zod_globalConfig??(Tu.__zod_globalConfig={});const Vc=globalThis.__zod_globalConfig;function mi(n){return Vc}function Ed(n){const e=Object.values(n).filter(i=>typeof i=="number");return Object.entries(n).filter(([i,s])=>e.indexOf(+i)===-1).map(([i,s])=>s)}function gc(n,e){return typeof e=="bigint"?e.toString():e}function bo(n){return{get value(){{const e=n();return Object.defineProperty(this,"value",{value:e}),e}}}}function Hc(n){return n==null}function Gc(n){const e=n.startsWith("^")?1:0,t=n.endsWith("$")?n.length-1:n.length;return n.slice(e,t)}function Hx(n,e){const t=n/e,i=Math.round(t),s=Number.EPSILON*Math.max(Math.abs(t),1);return Math.abs(t-i)<s?0:t-i}const Ru=Symbol("evaluating");function st(n,e,t){let i;Object.defineProperty(n,e,{get(){if(i!==Ru)return i===void 0&&(i=Ru,i=t()),i},set(s){Object.defineProperty(n,e,{value:s})},configurable:!0})}function yi(n,e,t){Object.defineProperty(n,e,{value:t,writable:!0,enumerable:!0,configurable:!0})}function qn(...n){const e={};for(const t of n){const i=Object.getOwnPropertyDescriptors(t);Object.assign(e,i)}return Object.defineProperties({},e)}function Au(n){return JSON.stringify(n)}function Gx(n){return n.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"")}const wd="captureStackTrace"in Error?Error.captureStackTrace:(...n)=>{};function Hs(n){return typeof n=="object"&&n!==null&&!Array.isArray(n)}const Wx=bo(()=>{var n;if(Vc.jitless||typeof navigator<"u"&&((n=navigator==null?void 0:navigator.userAgent)!=null&&n.includes("Cloudflare")))return!1;try{const e=Function;return new e(""),!0}catch{return!1}});function Gs(n){if(Hs(n)===!1)return!1;const e=n.constructor;if(e===void 0||typeof e!="function")return!0;const t=e.prototype;return!(Hs(t)===!1||Object.prototype.hasOwnProperty.call(t,"isPrototypeOf")===!1)}function Td(n){return Gs(n)?{...n}:Array.isArray(n)?[...n]:n instanceof Map?new Map(n):n instanceof Set?new Set(n):n}const $x=new Set(["string","number","symbol"]);function rs(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function jn(n,e,t){const i=new n._zod.constr(e??n._zod.def);return(!e||t!=null&&t.parent)&&(i._zod.parent=n),i}function Le(n){const e=n;if(!e)return{};if(typeof e=="string")return{error:()=>e};if((e==null?void 0:e.message)!==void 0){if((e==null?void 0:e.error)!==void 0)throw new Error("Cannot specify both `message` and `error` params");e.error=e.message}return delete e.message,typeof e.error=="string"?{...e,error:()=>e.error}:e}function Xx(n){return Object.keys(n).filter(e=>n[e]._zod.optin==="optional"&&n[e]._zod.optout==="optional")}const Zx={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-34028234663852886e22,34028234663852886e22],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]};function Yx(n,e){const t=n._zod.def,i=t.checks;if(i&&i.length>0)throw new Error(".pick() cannot be used on object schemas containing refinements");const r=qn(n._zod.def,{get shape(){const o={};for(const a in e){if(!(a in t.shape))throw new Error(`Unrecognized key: "${a}"`);e[a]&&(o[a]=t.shape[a])}return yi(this,"shape",o),o},checks:[]});return jn(n,r)}function qx(n,e){const t=n._zod.def,i=t.checks;if(i&&i.length>0)throw new Error(".omit() cannot be used on object schemas containing refinements");const r=qn(n._zod.def,{get shape(){const o={...n._zod.def.shape};for(const a in e){if(!(a in t.shape))throw new Error(`Unrecognized key: "${a}"`);e[a]&&delete o[a]}return yi(this,"shape",o),o},checks:[]});return jn(n,r)}function jx(n,e){if(!Gs(e))throw new Error("Invalid input to extend: expected a plain object");const t=n._zod.def.checks;if(t&&t.length>0){const r=n._zod.def.shape;for(const o in e)if(Object.getOwnPropertyDescriptor(r,o)!==void 0)throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}const s=qn(n._zod.def,{get shape(){const r={...n._zod.def.shape,...e};return yi(this,"shape",r),r}});return jn(n,s)}function Kx(n,e){if(!Gs(e))throw new Error("Invalid input to safeExtend: expected a plain object");const t=qn(n._zod.def,{get shape(){const i={...n._zod.def.shape,...e};return yi(this,"shape",i),i}});return jn(n,t)}function Jx(n,e){var i;if((i=n._zod.def.checks)!=null&&i.length)throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");const t=qn(n._zod.def,{get shape(){const s={...n._zod.def.shape,...e._zod.def.shape};return yi(this,"shape",s),s},get catchall(){return e._zod.def.catchall},checks:e._zod.def.checks??[]});return jn(n,t)}function Qx(n,e,t){const s=e._zod.def.checks;if(s&&s.length>0)throw new Error(".partial() cannot be used on object schemas containing refinements");const o=qn(e._zod.def,{get shape(){const a=e._zod.def.shape,c={...a};if(t)for(const l in t){if(!(l in a))throw new Error(`Unrecognized key: "${l}"`);t[l]&&(c[l]=n?new n({type:"optional",innerType:a[l]}):a[l])}else for(const l in a)c[l]=n?new n({type:"optional",innerType:a[l]}):a[l];return yi(this,"shape",c),c},checks:[]});return jn(e,o)}function ey(n,e,t){const i=qn(e._zod.def,{get shape(){const s=e._zod.def.shape,r={...s};if(t)for(const o in t){if(!(o in r))throw new Error(`Unrecognized key: "${o}"`);t[o]&&(r[o]=new n({type:"nonoptional",innerType:s[o]}))}else for(const o in s)r[o]=new n({type:"nonoptional",innerType:s[o]});return yi(this,"shape",r),r}});return jn(e,i)}function Xi(n,e=0){var t;if(n.aborted===!0)return!0;for(let i=e;i<n.issues.length;i++)if(((t=n.issues[i])==null?void 0:t.continue)!==!0)return!0;return!1}function ty(n,e=0){var t;if(n.aborted===!0)return!0;for(let i=e;i<n.issues.length;i++)if(((t=n.issues[i])==null?void 0:t.continue)===!1)return!0;return!1}function Eo(n,e){return e.map(t=>{var i;return(i=t).path??(i.path=[]),t.path.unshift(n),t})}function Fr(n){return typeof n=="string"?n:n==null?void 0:n.message}function gi(n,e,t){var c,l,u,h,d,f;const i=n.message?n.message:Fr((u=(l=(c=n.inst)==null?void 0:c._zod.def)==null?void 0:l.error)==null?void 0:u.call(l,n))??Fr((h=e==null?void 0:e.error)==null?void 0:h.call(e,n))??Fr((d=t.customError)==null?void 0:d.call(t,n))??Fr((f=t.localeError)==null?void 0:f.call(t,n))??"Invalid input",{inst:s,continue:r,input:o,...a}=n;return a.path??(a.path=[]),a.message=i,e!=null&&e.reportInput&&(a.input=o),a}function Wc(n){return Array.isArray(n)?"array":typeof n=="string"?"string":"unknown"}function Ws(...n){const[e,t,i]=n;return typeof e=="string"?{message:e,code:"custom",input:t,inst:i}:{...e}}const Rd=(n,e)=>{n.name="$ZodError",Object.defineProperty(n,"_zod",{value:n._zod,enumerable:!1}),Object.defineProperty(n,"issues",{value:e,enumerable:!1}),n.message=JSON.stringify(e,gc,2),Object.defineProperty(n,"toString",{value:()=>n.message,enumerable:!1})},Ad=X("$ZodError",Rd),Cd=X("$ZodError",Rd,{Parent:Error});function ny(n,e=t=>t.message){const t={},i=[];for(const s of n.issues)s.path.length>0?(t[s.path[0]]=t[s.path[0]]||[],t[s.path[0]].push(e(s))):i.push(e(s));return{formErrors:i,fieldErrors:t}}function iy(n,e=t=>t.message){const t={_errors:[]},i=(s,r=[])=>{for(const o of s.issues)if(o.code==="invalid_union"&&o.errors.length)o.errors.map(a=>i({issues:a},[...r,...o.path]));else if(o.code==="invalid_key")i({issues:o.issues},[...r,...o.path]);else if(o.code==="invalid_element")i({issues:o.issues},[...r,...o.path]);else{const a=[...r,...o.path];if(a.length===0)t._errors.push(e(o));else{let c=t,l=0;for(;l<a.length;){const u=a[l];l===a.length-1?(c[u]=c[u]||{_errors:[]},c[u]._errors.push(e(o))):c[u]=c[u]||{_errors:[]},c=c[u],l++}}}};return i(n),t}const $c=n=>(e,t,i,s)=>{const r=i?{...i,async:!1}:{async:!1},o=e._zod.run({value:t,issues:[]},r);if(o instanceof Promise)throw new Ji;if(o.issues.length){const a=new((s==null?void 0:s.Err)??n)(o.issues.map(c=>gi(c,r,mi())));throw wd(a,s==null?void 0:s.callee),a}return o.value},Xc=n=>async(e,t,i,s)=>{const r=i?{...i,async:!0}:{async:!0};let o=e._zod.run({value:t,issues:[]},r);if(o instanceof Promise&&(o=await o),o.issues.length){const a=new((s==null?void 0:s.Err)??n)(o.issues.map(c=>gi(c,r,mi())));throw wd(a,s==null?void 0:s.callee),a}return o.value},wo=n=>(e,t,i)=>{const s=i?{...i,async:!1}:{async:!1},r=e._zod.run({value:t,issues:[]},s);if(r instanceof Promise)throw new Ji;return r.issues.length?{success:!1,error:new(n??Ad)(r.issues.map(o=>gi(o,s,mi())))}:{success:!0,data:r.value}},sy=wo(Cd),To=n=>async(e,t,i)=>{const s=i?{...i,async:!0}:{async:!0};let r=e._zod.run({value:t,issues:[]},s);return r instanceof Promise&&(r=await r),r.issues.length?{success:!1,error:new n(r.issues.map(o=>gi(o,s,mi())))}:{success:!0,data:r.value}},ry=To(Cd),oy=n=>(e,t,i)=>{const s=i?{...i,direction:"backward"}:{direction:"backward"};return $c(n)(e,t,s)},ay=n=>(e,t,i)=>$c(n)(e,t,i),cy=n=>async(e,t,i)=>{const s=i?{...i,direction:"backward"}:{direction:"backward"};return Xc(n)(e,t,s)},ly=n=>async(e,t,i)=>Xc(n)(e,t,i),uy=n=>(e,t,i)=>{const s=i?{...i,direction:"backward"}:{direction:"backward"};return wo(n)(e,t,s)},hy=n=>(e,t,i)=>wo(n)(e,t,i),dy=n=>async(e,t,i)=>{const s=i?{...i,direction:"backward"}:{direction:"backward"};return To(n)(e,t,s)},fy=n=>async(e,t,i)=>To(n)(e,t,i),py=/^[cC][0-9a-z]{6,}$/,my=/^[0-9a-z]+$/,gy=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,vy=/^[0-9a-vA-V]{20}$/,_y=/^[A-Za-z0-9]{27}$/,xy=/^[a-zA-Z0-9_-]{21}$/,yy=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,Sy=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,Cu=n=>n?new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${n}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,My=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,by="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";function Ey(){return new RegExp(by,"u")}const wy=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,Ty=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,Ry=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,Ay=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,Cy=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,Id=/^[A-Za-z0-9_-]*$/,Iy=/^https?$/,Py=/^\+[1-9]\d{6,14}$/,Pd="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",Fy=new RegExp(`^${Pd}$`);function Fd(n){const e="(?:[01]\\d|2[0-3]):[0-5]\\d";return typeof n.precision=="number"?n.precision===-1?`${e}`:n.precision===0?`${e}:[0-5]\\d`:`${e}:[0-5]\\d\\.\\d{${n.precision}}`:`${e}(?::[0-5]\\d(?:\\.\\d+)?)?`}function Dy(n){return new RegExp(`^${Fd(n)}$`)}function Ly(n){const e=Fd({precision:n.precision}),t=["Z"];n.local&&t.push(""),n.offset&&t.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");const i=`${e}(?:${t.join("|")})`;return new RegExp(`^${Pd}T(?:${i})$`)}const Ny=n=>{const e=n?`[\\s\\S]{${(n==null?void 0:n.minimum)??0},${(n==null?void 0:n.maximum)??""}}`:"[\\s\\S]*";return new RegExp(`^${e}$`)},Uy=/^-?\d+$/,Oy=/^-?\d+(?:\.\d+)?$/,zy=/^(?:true|false)$/i,ky=/^[^A-Z]*$/,By=/^[^a-z]*$/,Zt=X("$ZodCheck",(n,e)=>{var t;n._zod??(n._zod={}),n._zod.def=e,(t=n._zod).onattach??(t.onattach=[])}),Dd={number:"number",bigint:"bigint",object:"date"},Ld=X("$ZodCheckLessThan",(n,e)=>{Zt.init(n,e);const t=Dd[typeof e.value];n._zod.onattach.push(i=>{const s=i._zod.bag,r=(e.inclusive?s.maximum:s.exclusiveMaximum)??Number.POSITIVE_INFINITY;e.value<r&&(e.inclusive?s.maximum=e.value:s.exclusiveMaximum=e.value)}),n._zod.check=i=>{(e.inclusive?i.value<=e.value:i.value<e.value)||i.issues.push({origin:t,code:"too_big",maximum:typeof e.value=="object"?e.value.getTime():e.value,input:i.value,inclusive:e.inclusive,inst:n,continue:!e.abort})}}),Nd=X("$ZodCheckGreaterThan",(n,e)=>{Zt.init(n,e);const t=Dd[typeof e.value];n._zod.onattach.push(i=>{const s=i._zod.bag,r=(e.inclusive?s.minimum:s.exclusiveMinimum)??Number.NEGATIVE_INFINITY;e.value>r&&(e.inclusive?s.minimum=e.value:s.exclusiveMinimum=e.value)}),n._zod.check=i=>{(e.inclusive?i.value>=e.value:i.value>e.value)||i.issues.push({origin:t,code:"too_small",minimum:typeof e.value=="object"?e.value.getTime():e.value,input:i.value,inclusive:e.inclusive,inst:n,continue:!e.abort})}}),Vy=X("$ZodCheckMultipleOf",(n,e)=>{Zt.init(n,e),n._zod.onattach.push(t=>{var i;(i=t._zod.bag).multipleOf??(i.multipleOf=e.value)}),n._zod.check=t=>{if(typeof t.value!=typeof e.value)throw new Error("Cannot mix number and bigint in multiple_of check.");(typeof t.value=="bigint"?t.value%e.value===BigInt(0):Hx(t.value,e.value)===0)||t.issues.push({origin:typeof t.value,code:"not_multiple_of",divisor:e.value,input:t.value,inst:n,continue:!e.abort})}}),Hy=X("$ZodCheckNumberFormat",(n,e)=>{var o;Zt.init(n,e),e.format=e.format||"float64";const t=(o=e.format)==null?void 0:o.includes("int"),i=t?"int":"number",[s,r]=Zx[e.format];n._zod.onattach.push(a=>{const c=a._zod.bag;c.format=e.format,c.minimum=s,c.maximum=r,t&&(c.pattern=Uy)}),n._zod.check=a=>{const c=a.value;if(t){if(!Number.isInteger(c)){a.issues.push({expected:i,format:e.format,code:"invalid_type",continue:!1,input:c,inst:n});return}if(!Number.isSafeInteger(c)){c>0?a.issues.push({input:c,code:"too_big",maximum:Number.MAX_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:n,origin:i,inclusive:!0,continue:!e.abort}):a.issues.push({input:c,code:"too_small",minimum:Number.MIN_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:n,origin:i,inclusive:!0,continue:!e.abort});return}}c<s&&a.issues.push({origin:"number",input:c,code:"too_small",minimum:s,inclusive:!0,inst:n,continue:!e.abort}),c>r&&a.issues.push({origin:"number",input:c,code:"too_big",maximum:r,inclusive:!0,inst:n,continue:!e.abort})}}),Gy=X("$ZodCheckMaxLength",(n,e)=>{var t;Zt.init(n,e),(t=n._zod.def).when??(t.when=i=>{const s=i.value;return!Hc(s)&&s.length!==void 0}),n._zod.onattach.push(i=>{const s=i._zod.bag.maximum??Number.POSITIVE_INFINITY;e.maximum<s&&(i._zod.bag.maximum=e.maximum)}),n._zod.check=i=>{const s=i.value;if(s.length<=e.maximum)return;const o=Wc(s);i.issues.push({origin:o,code:"too_big",maximum:e.maximum,inclusive:!0,input:s,inst:n,continue:!e.abort})}}),Wy=X("$ZodCheckMinLength",(n,e)=>{var t;Zt.init(n,e),(t=n._zod.def).when??(t.when=i=>{const s=i.value;return!Hc(s)&&s.length!==void 0}),n._zod.onattach.push(i=>{const s=i._zod.bag.minimum??Number.NEGATIVE_INFINITY;e.minimum>s&&(i._zod.bag.minimum=e.minimum)}),n._zod.check=i=>{const s=i.value;if(s.length>=e.minimum)return;const o=Wc(s);i.issues.push({origin:o,code:"too_small",minimum:e.minimum,inclusive:!0,input:s,inst:n,continue:!e.abort})}}),$y=X("$ZodCheckLengthEquals",(n,e)=>{var t;Zt.init(n,e),(t=n._zod.def).when??(t.when=i=>{const s=i.value;return!Hc(s)&&s.length!==void 0}),n._zod.onattach.push(i=>{const s=i._zod.bag;s.minimum=e.length,s.maximum=e.length,s.length=e.length}),n._zod.check=i=>{const s=i.value,r=s.length;if(r===e.length)return;const o=Wc(s),a=r>e.length;i.issues.push({origin:o,...a?{code:"too_big",maximum:e.length}:{code:"too_small",minimum:e.length},inclusive:!0,exact:!0,input:i.value,inst:n,continue:!e.abort})}}),Ro=X("$ZodCheckStringFormat",(n,e)=>{var t,i;Zt.init(n,e),n._zod.onattach.push(s=>{const r=s._zod.bag;r.format=e.format,e.pattern&&(r.patterns??(r.patterns=new Set),r.patterns.add(e.pattern))}),e.pattern?(t=n._zod).check??(t.check=s=>{e.pattern.lastIndex=0,!e.pattern.test(s.value)&&s.issues.push({origin:"string",code:"invalid_format",format:e.format,input:s.value,...e.pattern?{pattern:e.pattern.toString()}:{},inst:n,continue:!e.abort})}):(i=n._zod).check??(i.check=()=>{})}),Xy=X("$ZodCheckRegex",(n,e)=>{Ro.init(n,e),n._zod.check=t=>{e.pattern.lastIndex=0,!e.pattern.test(t.value)&&t.issues.push({origin:"string",code:"invalid_format",format:"regex",input:t.value,pattern:e.pattern.toString(),inst:n,continue:!e.abort})}}),Zy=X("$ZodCheckLowerCase",(n,e)=>{e.pattern??(e.pattern=ky),Ro.init(n,e)}),Yy=X("$ZodCheckUpperCase",(n,e)=>{e.pattern??(e.pattern=By),Ro.init(n,e)}),qy=X("$ZodCheckIncludes",(n,e)=>{Zt.init(n,e);const t=rs(e.includes),i=new RegExp(typeof e.position=="number"?`^.{${e.position}}${t}`:t);e.pattern=i,n._zod.onattach.push(s=>{const r=s._zod.bag;r.patterns??(r.patterns=new Set),r.patterns.add(i)}),n._zod.check=s=>{s.value.includes(e.includes,e.position)||s.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:e.includes,input:s.value,inst:n,continue:!e.abort})}}),jy=X("$ZodCheckStartsWith",(n,e)=>{Zt.init(n,e);const t=new RegExp(`^${rs(e.prefix)}.*`);e.pattern??(e.pattern=t),n._zod.onattach.push(i=>{const s=i._zod.bag;s.patterns??(s.patterns=new Set),s.patterns.add(t)}),n._zod.check=i=>{i.value.startsWith(e.prefix)||i.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:e.prefix,input:i.value,inst:n,continue:!e.abort})}}),Ky=X("$ZodCheckEndsWith",(n,e)=>{Zt.init(n,e);const t=new RegExp(`.*${rs(e.suffix)}$`);e.pattern??(e.pattern=t),n._zod.onattach.push(i=>{const s=i._zod.bag;s.patterns??(s.patterns=new Set),s.patterns.add(t)}),n._zod.check=i=>{i.value.endsWith(e.suffix)||i.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:e.suffix,input:i.value,inst:n,continue:!e.abort})}}),Jy=X("$ZodCheckOverwrite",(n,e)=>{Zt.init(n,e),n._zod.check=t=>{t.value=e.tx(t.value)}});class Qy{constructor(e=[]){this.content=[],this.indent=0,this&&(this.args=e)}indented(e){this.indent+=1,e(this),this.indent-=1}write(e){if(typeof e=="function"){e(this,{execution:"sync"}),e(this,{execution:"async"});return}const i=e.split(`
`).filter(o=>o),s=Math.min(...i.map(o=>o.length-o.trimStart().length)),r=i.map(o=>o.slice(s)).map(o=>" ".repeat(this.indent*2)+o);for(const o of r)this.content.push(o)}compile(){const e=Function,t=this==null?void 0:this.args,s=[...((this==null?void 0:this.content)??[""]).map(r=>`  ${r}`)];return new e(...t,s.join(`
`))}}const eS={major:4,minor:4,patch:3},dt=X("$ZodType",(n,e)=>{var s;var t;n??(n={}),n._zod.def=e,n._zod.bag=n._zod.bag||{},n._zod.version=eS;const i=[...n._zod.def.checks??[]];n._zod.traits.has("$ZodCheck")&&i.unshift(n);for(const r of i)for(const o of r._zod.onattach)o(n);if(i.length===0)(t=n._zod).deferred??(t.deferred=[]),(s=n._zod.deferred)==null||s.push(()=>{n._zod.run=n._zod.parse});else{const r=(a,c,l)=>{let u=Xi(a),h;for(const d of c){if(d._zod.def.when){if(ty(a)||!d._zod.def.when(a))continue}else if(u)continue;const f=a.issues.length,g=d._zod.check(a);if(g instanceof Promise&&(l==null?void 0:l.async)===!1)throw new Ji;if(h||g instanceof Promise)h=(h??Promise.resolve()).then(async()=>{await g,a.issues.length!==f&&(u||(u=Xi(a,f)))});else{if(a.issues.length===f)continue;u||(u=Xi(a,f))}}return h?h.then(()=>a):a},o=(a,c,l)=>{if(Xi(a))return a.aborted=!0,a;const u=r(c,i,l);if(u instanceof Promise){if(l.async===!1)throw new Ji;return u.then(h=>n._zod.parse(h,l))}return n._zod.parse(u,l)};n._zod.run=(a,c)=>{if(c.skipChecks)return n._zod.parse(a,c);if(c.direction==="backward"){const u=n._zod.parse({value:a.value,issues:[]},{...c,skipChecks:!0});return u instanceof Promise?u.then(h=>o(h,a,c)):o(u,a,c)}const l=n._zod.parse(a,c);if(l instanceof Promise){if(c.async===!1)throw new Ji;return l.then(u=>r(u,i,c))}return r(l,i,c)}}st(n,"~standard",()=>({validate:r=>{var o;try{const a=sy(n,r);return a.success?{value:a.data}:{issues:(o=a.error)==null?void 0:o.issues}}catch{return ry(n,r).then(c=>{var l;return c.success?{value:c.data}:{issues:(l=c.error)==null?void 0:l.issues}})}},vendor:"zod",version:1}))}),Zc=X("$ZodString",(n,e)=>{var t;dt.init(n,e),n._zod.pattern=[...((t=n==null?void 0:n._zod.bag)==null?void 0:t.patterns)??[]].pop()??Ny(n._zod.bag),n._zod.parse=(i,s)=>{if(e.coerce)try{i.value=String(i.value)}catch{}return typeof i.value=="string"||i.issues.push({expected:"string",code:"invalid_type",input:i.value,inst:n}),i}}),ft=X("$ZodStringFormat",(n,e)=>{Ro.init(n,e),Zc.init(n,e)}),tS=X("$ZodGUID",(n,e)=>{e.pattern??(e.pattern=Sy),ft.init(n,e)}),nS=X("$ZodUUID",(n,e)=>{if(e.version){const i={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[e.version];if(i===void 0)throw new Error(`Invalid UUID version: "${e.version}"`);e.pattern??(e.pattern=Cu(i))}else e.pattern??(e.pattern=Cu());ft.init(n,e)}),iS=X("$ZodEmail",(n,e)=>{e.pattern??(e.pattern=My),ft.init(n,e)}),sS=X("$ZodURL",(n,e)=>{ft.init(n,e),n._zod.check=t=>{var i;try{const s=t.value.trim();if(!e.normalize&&((i=e.protocol)==null?void 0:i.source)===Iy.source&&!/^https?:\/\//i.test(s)){t.issues.push({code:"invalid_format",format:"url",note:"Invalid URL format",input:t.value,inst:n,continue:!e.abort});return}const r=new URL(s);e.hostname&&(e.hostname.lastIndex=0,e.hostname.test(r.hostname)||t.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:e.hostname.source,input:t.value,inst:n,continue:!e.abort})),e.protocol&&(e.protocol.lastIndex=0,e.protocol.test(r.protocol.endsWith(":")?r.protocol.slice(0,-1):r.protocol)||t.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:e.protocol.source,input:t.value,inst:n,continue:!e.abort})),e.normalize?t.value=r.href:t.value=s;return}catch{t.issues.push({code:"invalid_format",format:"url",input:t.value,inst:n,continue:!e.abort})}}}),rS=X("$ZodEmoji",(n,e)=>{e.pattern??(e.pattern=Ey()),ft.init(n,e)}),oS=X("$ZodNanoID",(n,e)=>{e.pattern??(e.pattern=xy),ft.init(n,e)}),aS=X("$ZodCUID",(n,e)=>{e.pattern??(e.pattern=py),ft.init(n,e)}),cS=X("$ZodCUID2",(n,e)=>{e.pattern??(e.pattern=my),ft.init(n,e)}),lS=X("$ZodULID",(n,e)=>{e.pattern??(e.pattern=gy),ft.init(n,e)}),uS=X("$ZodXID",(n,e)=>{e.pattern??(e.pattern=vy),ft.init(n,e)}),hS=X("$ZodKSUID",(n,e)=>{e.pattern??(e.pattern=_y),ft.init(n,e)}),dS=X("$ZodISODateTime",(n,e)=>{e.pattern??(e.pattern=Ly(e)),ft.init(n,e)}),fS=X("$ZodISODate",(n,e)=>{e.pattern??(e.pattern=Fy),ft.init(n,e)}),pS=X("$ZodISOTime",(n,e)=>{e.pattern??(e.pattern=Dy(e)),ft.init(n,e)}),mS=X("$ZodISODuration",(n,e)=>{e.pattern??(e.pattern=yy),ft.init(n,e)}),gS=X("$ZodIPv4",(n,e)=>{e.pattern??(e.pattern=wy),ft.init(n,e),n._zod.bag.format="ipv4"}),vS=X("$ZodIPv6",(n,e)=>{e.pattern??(e.pattern=Ty),ft.init(n,e),n._zod.bag.format="ipv6",n._zod.check=t=>{try{new URL(`http://[${t.value}]`)}catch{t.issues.push({code:"invalid_format",format:"ipv6",input:t.value,inst:n,continue:!e.abort})}}}),_S=X("$ZodCIDRv4",(n,e)=>{e.pattern??(e.pattern=Ry),ft.init(n,e)}),xS=X("$ZodCIDRv6",(n,e)=>{e.pattern??(e.pattern=Ay),ft.init(n,e),n._zod.check=t=>{const i=t.value.split("/");try{if(i.length!==2)throw new Error;const[s,r]=i;if(!r)throw new Error;const o=Number(r);if(`${o}`!==r)throw new Error;if(o<0||o>128)throw new Error;new URL(`http://[${s}]`)}catch{t.issues.push({code:"invalid_format",format:"cidrv6",input:t.value,inst:n,continue:!e.abort})}}});function Ud(n){if(n==="")return!0;if(/\s/.test(n)||n.length%4!==0)return!1;try{return atob(n),!0}catch{return!1}}const yS=X("$ZodBase64",(n,e)=>{e.pattern??(e.pattern=Cy),ft.init(n,e),n._zod.bag.contentEncoding="base64",n._zod.check=t=>{Ud(t.value)||t.issues.push({code:"invalid_format",format:"base64",input:t.value,inst:n,continue:!e.abort})}});function SS(n){if(!Id.test(n))return!1;const e=n.replace(/[-_]/g,i=>i==="-"?"+":"/"),t=e.padEnd(Math.ceil(e.length/4)*4,"=");return Ud(t)}const MS=X("$ZodBase64URL",(n,e)=>{e.pattern??(e.pattern=Id),ft.init(n,e),n._zod.bag.contentEncoding="base64url",n._zod.check=t=>{SS(t.value)||t.issues.push({code:"invalid_format",format:"base64url",input:t.value,inst:n,continue:!e.abort})}}),bS=X("$ZodE164",(n,e)=>{e.pattern??(e.pattern=Py),ft.init(n,e)});function ES(n,e=null){try{const t=n.split(".");if(t.length!==3)return!1;const[i]=t;if(!i)return!1;const s=JSON.parse(atob(i));return!("typ"in s&&(s==null?void 0:s.typ)!=="JWT"||!s.alg||e&&(!("alg"in s)||s.alg!==e))}catch{return!1}}const wS=X("$ZodJWT",(n,e)=>{ft.init(n,e),n._zod.check=t=>{ES(t.value,e.alg)||t.issues.push({code:"invalid_format",format:"jwt",input:t.value,inst:n,continue:!e.abort})}}),Od=X("$ZodNumber",(n,e)=>{dt.init(n,e),n._zod.pattern=n._zod.bag.pattern??Oy,n._zod.parse=(t,i)=>{if(e.coerce)try{t.value=Number(t.value)}catch{}const s=t.value;if(typeof s=="number"&&!Number.isNaN(s)&&Number.isFinite(s))return t;const r=typeof s=="number"?Number.isNaN(s)?"NaN":Number.isFinite(s)?void 0:"Infinity":void 0;return t.issues.push({expected:"number",code:"invalid_type",input:s,inst:n,...r?{received:r}:{}}),t}}),TS=X("$ZodNumberFormat",(n,e)=>{Hy.init(n,e),Od.init(n,e)}),RS=X("$ZodBoolean",(n,e)=>{dt.init(n,e),n._zod.pattern=zy,n._zod.parse=(t,i)=>{if(e.coerce)try{t.value=!!t.value}catch{}const s=t.value;return typeof s=="boolean"||t.issues.push({expected:"boolean",code:"invalid_type",input:s,inst:n}),t}}),AS=X("$ZodUnknown",(n,e)=>{dt.init(n,e),n._zod.parse=t=>t}),CS=X("$ZodNever",(n,e)=>{dt.init(n,e),n._zod.parse=(t,i)=>(t.issues.push({expected:"never",code:"invalid_type",input:t.value,inst:n}),t)});function Iu(n,e,t){n.issues.length&&e.issues.push(...Eo(t,n.issues)),e.value[t]=n.value}const IS=X("$ZodArray",(n,e)=>{dt.init(n,e),n._zod.parse=(t,i)=>{const s=t.value;if(!Array.isArray(s))return t.issues.push({expected:"array",code:"invalid_type",input:s,inst:n}),t;t.value=Array(s.length);const r=[];for(let o=0;o<s.length;o++){const a=s[o],c=e.element._zod.run({value:a,issues:[]},i);c instanceof Promise?r.push(c.then(l=>Iu(l,t,o))):Iu(c,t,o)}return r.length?Promise.all(r).then(()=>t):t}});function oo(n,e,t,i,s,r){const o=t in i;if(n.issues.length){if(s&&r&&!o)return;e.issues.push(...Eo(t,n.issues))}if(!o&&!s){n.issues.length||e.issues.push({code:"invalid_type",expected:"nonoptional",input:void 0,path:[t]});return}n.value===void 0?o&&(e.value[t]=void 0):e.value[t]=n.value}function zd(n){var i,s,r,o;const e=Object.keys(n.shape);for(const a of e)if(!((o=(r=(s=(i=n.shape)==null?void 0:i[a])==null?void 0:s._zod)==null?void 0:r.traits)!=null&&o.has("$ZodType")))throw new Error(`Invalid element at key "${a}": expected a Zod schema`);const t=Xx(n.shape);return{...n,keys:e,keySet:new Set(e),numKeys:e.length,optionalKeys:new Set(t)}}function kd(n,e,t,i,s,r){const o=[],a=s.keySet,c=s.catchall._zod,l=c.def.type,u=c.optin==="optional",h=c.optout==="optional";for(const d in e){if(d==="__proto__"||a.has(d))continue;if(l==="never"){o.push(d);continue}const f=c.run({value:e[d],issues:[]},i);f instanceof Promise?n.push(f.then(g=>oo(g,t,d,e,u,h))):oo(f,t,d,e,u,h)}return o.length&&t.issues.push({code:"unrecognized_keys",keys:o,input:e,inst:r}),n.length?Promise.all(n).then(()=>t):t}const PS=X("$ZodObject",(n,e)=>{dt.init(n,e);const t=Object.getOwnPropertyDescriptor(e,"shape");if(!(t!=null&&t.get)){const a=e.shape;Object.defineProperty(e,"shape",{get:()=>{const c={...a};return Object.defineProperty(e,"shape",{value:c}),c}})}const i=bo(()=>zd(e));st(n._zod,"propValues",()=>{const a=e.shape,c={};for(const l in a){const u=a[l]._zod;if(u.values){c[l]??(c[l]=new Set);for(const h of u.values)c[l].add(h)}}return c});const s=Hs,r=e.catchall;let o;n._zod.parse=(a,c)=>{o??(o=i.value);const l=a.value;if(!s(l))return a.issues.push({expected:"object",code:"invalid_type",input:l,inst:n}),a;a.value={};const u=[],h=o.shape;for(const d of o.keys){const f=h[d],g=f._zod.optin==="optional",v=f._zod.optout==="optional",m=f._zod.run({value:l[d],issues:[]},c);m instanceof Promise?u.push(m.then(p=>oo(p,a,d,l,g,v))):oo(m,a,d,l,g,v)}return r?kd(u,l,a,c,i.value,n):u.length?Promise.all(u).then(()=>a):a}}),FS=X("$ZodObjectJIT",(n,e)=>{PS.init(n,e);const t=n._zod.parse,i=bo(()=>zd(e)),s=d=>{var M,x;const f=new Qy(["shape","payload","ctx"]),g=i.value,v=U=>{const R=Au(U);return`shape[${R}]._zod.run({ value: input[${R}], issues: [] }, ctx)`};f.write("const input = payload.value;");const m=Object.create(null);let p=0;for(const U of g.keys)m[U]=`key_${p++}`;f.write("const newResult = {};");for(const U of g.keys){const R=m[U],A=Au(U),D=d[U],b=((M=D==null?void 0:D._zod)==null?void 0:M.optin)==="optional",S=((x=D==null?void 0:D._zod)==null?void 0:x.optout)==="optional";f.write(`const ${R} = ${v(U)};`),b&&S?f.write(`
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

      `)}f.write("payload.value = newResult;"),f.write("return payload;");const w=f.compile();return(U,R)=>w(d,U,R)};let r;const o=Hs,a=!Vc.jitless,l=a&&Wx.value,u=e.catchall;let h;n._zod.parse=(d,f)=>{h??(h=i.value);const g=d.value;return o(g)?a&&l&&(f==null?void 0:f.async)===!1&&f.jitless!==!0?(r||(r=s(e.shape)),d=r(d,f),u?kd([],g,d,f,h,n):d):t(d,f):(d.issues.push({expected:"object",code:"invalid_type",input:g,inst:n}),d)}});function Pu(n,e,t,i){for(const r of n)if(r.issues.length===0)return e.value=r.value,e;const s=n.filter(r=>!Xi(r));return s.length===1?(e.value=s[0].value,s[0]):(e.issues.push({code:"invalid_union",input:e.value,inst:t,errors:n.map(r=>r.issues.map(o=>gi(o,i,mi())))}),e)}const Bd=X("$ZodUnion",(n,e)=>{dt.init(n,e),st(n._zod,"optin",()=>e.options.some(i=>i._zod.optin==="optional")?"optional":void 0),st(n._zod,"optout",()=>e.options.some(i=>i._zod.optout==="optional")?"optional":void 0),st(n._zod,"values",()=>{if(e.options.every(i=>i._zod.values))return new Set(e.options.flatMap(i=>Array.from(i._zod.values)))}),st(n._zod,"pattern",()=>{if(e.options.every(i=>i._zod.pattern)){const i=e.options.map(s=>s._zod.pattern);return new RegExp(`^(${i.map(s=>Gc(s.source)).join("|")})$`)}});const t=e.options.length===1?e.options[0]._zod.run:null;n._zod.parse=(i,s)=>{if(t)return t(i,s);let r=!1;const o=[];for(const a of e.options){const c=a._zod.run({value:i.value,issues:[]},s);if(c instanceof Promise)o.push(c),r=!0;else{if(c.issues.length===0)return c;o.push(c)}}return r?Promise.all(o).then(a=>Pu(a,i,n,s)):Pu(o,i,n,s)}}),DS=X("$ZodDiscriminatedUnion",(n,e)=>{e.inclusive=!1,Bd.init(n,e);const t=n._zod.parse;st(n._zod,"propValues",()=>{const s={};for(const r of e.options){const o=r._zod.propValues;if(!o||Object.keys(o).length===0)throw new Error(`Invalid discriminated union option at index "${e.options.indexOf(r)}"`);for(const[a,c]of Object.entries(o)){s[a]||(s[a]=new Set);for(const l of c)s[a].add(l)}}return s});const i=bo(()=>{var o;const s=e.options,r=new Map;for(const a of s){const c=(o=a._zod.propValues)==null?void 0:o[e.discriminator];if(!c||c.size===0)throw new Error(`Invalid discriminated union option at index "${e.options.indexOf(a)}"`);for(const l of c){if(r.has(l))throw new Error(`Duplicate discriminator value "${String(l)}"`);r.set(l,a)}}return r});n._zod.parse=(s,r)=>{const o=s.value;if(!Hs(o))return s.issues.push({code:"invalid_type",expected:"object",input:o,inst:n}),s;const a=i.value.get(o==null?void 0:o[e.discriminator]);return a?a._zod.run(s,r):e.unionFallback||r.direction==="backward"?t(s,r):(s.issues.push({code:"invalid_union",errors:[],note:"No matching discriminator",discriminator:e.discriminator,options:Array.from(i.value.keys()),input:o,path:[e.discriminator],inst:n}),s)}}),LS=X("$ZodIntersection",(n,e)=>{dt.init(n,e),n._zod.parse=(t,i)=>{const s=t.value,r=e.left._zod.run({value:s,issues:[]},i),o=e.right._zod.run({value:s,issues:[]},i);return r instanceof Promise||o instanceof Promise?Promise.all([r,o]).then(([c,l])=>Fu(t,c,l)):Fu(t,r,o)}});function vc(n,e){if(n===e)return{valid:!0,data:n};if(n instanceof Date&&e instanceof Date&&+n==+e)return{valid:!0,data:n};if(Gs(n)&&Gs(e)){const t=Object.keys(e),i=Object.keys(n).filter(r=>t.indexOf(r)!==-1),s={...n,...e};for(const r of i){const o=vc(n[r],e[r]);if(!o.valid)return{valid:!1,mergeErrorPath:[r,...o.mergeErrorPath]};s[r]=o.data}return{valid:!0,data:s}}if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return{valid:!1,mergeErrorPath:[]};const t=[];for(let i=0;i<n.length;i++){const s=n[i],r=e[i],o=vc(s,r);if(!o.valid)return{valid:!1,mergeErrorPath:[i,...o.mergeErrorPath]};t.push(o.data)}return{valid:!0,data:t}}return{valid:!1,mergeErrorPath:[]}}function Fu(n,e,t){const i=new Map;let s;for(const a of e.issues)if(a.code==="unrecognized_keys"){s??(s=a);for(const c of a.keys)i.has(c)||i.set(c,{}),i.get(c).l=!0}else n.issues.push(a);for(const a of t.issues)if(a.code==="unrecognized_keys")for(const c of a.keys)i.has(c)||i.set(c,{}),i.get(c).r=!0;else n.issues.push(a);const r=[...i].filter(([,a])=>a.l&&a.r).map(([a])=>a);if(r.length&&s&&n.issues.push({...s,keys:r}),Xi(n))return n;const o=vc(e.value,t.value);if(!o.valid)throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(o.mergeErrorPath)}`);return n.value=o.data,n}const NS=X("$ZodTuple",(n,e)=>{dt.init(n,e);const t=e.items;n._zod.parse=(i,s)=>{const r=i.value;if(!Array.isArray(r))return i.issues.push({input:r,inst:n,expected:"tuple",code:"invalid_type"}),i;i.value=[];const o=[],a=Du(t,"optin"),c=Du(t,"optout");if(!e.rest){if(r.length<a)return i.issues.push({code:"too_small",minimum:a,inclusive:!0,input:r,inst:n,origin:"array"}),i;r.length>t.length&&i.issues.push({code:"too_big",maximum:t.length,inclusive:!0,input:r,inst:n,origin:"array"})}const l=new Array(t.length);for(let u=0;u<t.length;u++){const h=t[u]._zod.run({value:r[u],issues:[]},s);h instanceof Promise?o.push(h.then(d=>{l[u]=d})):l[u]=h}if(e.rest){let u=t.length-1;const h=r.slice(t.length);for(const d of h){u++;const f=e.rest._zod.run({value:d,issues:[]},s);f instanceof Promise?o.push(f.then(g=>Lu(g,i,u))):Lu(f,i,u)}}return o.length?Promise.all(o).then(()=>Nu(l,i,t,r,c)):Nu(l,i,t,r,c)}});function Du(n,e){for(let t=n.length-1;t>=0;t--)if(n[t]._zod[e]!=="optional")return t+1;return 0}function Lu(n,e,t){n.issues.length&&e.issues.push(...Eo(t,n.issues)),e.value[t]=n.value}function Nu(n,e,t,i,s){for(let r=0;r<t.length;r++){const o=n[r],a=r<i.length;if(o.issues.length){if(!a&&r>=s){e.value.length=r;break}e.issues.push(...Eo(r,o.issues))}e.value[r]=o.value}for(let r=e.value.length-1;r>=i.length&&(t[r]._zod.optout==="optional"&&e.value[r]===void 0);r--)e.value.length=r;return e}const US=X("$ZodEnum",(n,e)=>{dt.init(n,e);const t=Ed(e.entries),i=new Set(t);n._zod.values=i,n._zod.pattern=new RegExp(`^(${t.filter(s=>$x.has(typeof s)).map(s=>typeof s=="string"?rs(s):s.toString()).join("|")})$`),n._zod.parse=(s,r)=>{const o=s.value;return i.has(o)||s.issues.push({code:"invalid_value",values:t,input:o,inst:n}),s}}),OS=X("$ZodLiteral",(n,e)=>{if(dt.init(n,e),e.values.length===0)throw new Error("Cannot create literal schema with no valid values");const t=new Set(e.values);n._zod.values=t,n._zod.pattern=new RegExp(`^(${e.values.map(i=>typeof i=="string"?rs(i):i?rs(i.toString()):String(i)).join("|")})$`),n._zod.parse=(i,s)=>{const r=i.value;return t.has(r)||i.issues.push({code:"invalid_value",values:e.values,input:r,inst:n}),i}}),zS=X("$ZodTransform",(n,e)=>{dt.init(n,e),n._zod.optin="optional",n._zod.parse=(t,i)=>{if(i.direction==="backward")throw new bd(n.constructor.name);const s=e.transform(t.value,t);if(i.async)return(s instanceof Promise?s:Promise.resolve(s)).then(o=>(t.value=o,t.fallback=!0,t));if(s instanceof Promise)throw new Ji;return t.value=s,t.fallback=!0,t}});function Uu(n,e){return e===void 0&&(n.issues.length||n.fallback)?{issues:[],value:void 0}:n}const Vd=X("$ZodOptional",(n,e)=>{dt.init(n,e),n._zod.optin="optional",n._zod.optout="optional",st(n._zod,"values",()=>e.innerType._zod.values?new Set([...e.innerType._zod.values,void 0]):void 0),st(n._zod,"pattern",()=>{const t=e.innerType._zod.pattern;return t?new RegExp(`^(${Gc(t.source)})?$`):void 0}),n._zod.parse=(t,i)=>{if(e.innerType._zod.optin==="optional"){const s=t.value,r=e.innerType._zod.run(t,i);return r instanceof Promise?r.then(o=>Uu(o,s)):Uu(r,s)}return t.value===void 0?t:e.innerType._zod.run(t,i)}}),kS=X("$ZodExactOptional",(n,e)=>{Vd.init(n,e),st(n._zod,"values",()=>e.innerType._zod.values),st(n._zod,"pattern",()=>e.innerType._zod.pattern),n._zod.parse=(t,i)=>e.innerType._zod.run(t,i)}),BS=X("$ZodNullable",(n,e)=>{dt.init(n,e),st(n._zod,"optin",()=>e.innerType._zod.optin),st(n._zod,"optout",()=>e.innerType._zod.optout),st(n._zod,"pattern",()=>{const t=e.innerType._zod.pattern;return t?new RegExp(`^(${Gc(t.source)}|null)$`):void 0}),st(n._zod,"values",()=>e.innerType._zod.values?new Set([...e.innerType._zod.values,null]):void 0),n._zod.parse=(t,i)=>t.value===null?t:e.innerType._zod.run(t,i)}),VS=X("$ZodDefault",(n,e)=>{dt.init(n,e),n._zod.optin="optional",st(n._zod,"values",()=>e.innerType._zod.values),n._zod.parse=(t,i)=>{if(i.direction==="backward")return e.innerType._zod.run(t,i);if(t.value===void 0)return t.value=e.defaultValue,t;const s=e.innerType._zod.run(t,i);return s instanceof Promise?s.then(r=>Ou(r,e)):Ou(s,e)}});function Ou(n,e){return n.value===void 0&&(n.value=e.defaultValue),n}const HS=X("$ZodPrefault",(n,e)=>{dt.init(n,e),n._zod.optin="optional",st(n._zod,"values",()=>e.innerType._zod.values),n._zod.parse=(t,i)=>(i.direction==="backward"||t.value===void 0&&(t.value=e.defaultValue),e.innerType._zod.run(t,i))}),GS=X("$ZodNonOptional",(n,e)=>{dt.init(n,e),st(n._zod,"values",()=>{const t=e.innerType._zod.values;return t?new Set([...t].filter(i=>i!==void 0)):void 0}),n._zod.parse=(t,i)=>{const s=e.innerType._zod.run(t,i);return s instanceof Promise?s.then(r=>zu(r,n)):zu(s,n)}});function zu(n,e){return!n.issues.length&&n.value===void 0&&n.issues.push({code:"invalid_type",expected:"nonoptional",input:n.value,inst:e}),n}const WS=X("$ZodCatch",(n,e)=>{dt.init(n,e),n._zod.optin="optional",st(n._zod,"optout",()=>e.innerType._zod.optout),st(n._zod,"values",()=>e.innerType._zod.values),n._zod.parse=(t,i)=>{if(i.direction==="backward")return e.innerType._zod.run(t,i);const s=e.innerType._zod.run(t,i);return s instanceof Promise?s.then(r=>(t.value=r.value,r.issues.length&&(t.value=e.catchValue({...t,error:{issues:r.issues.map(o=>gi(o,i,mi()))},input:t.value}),t.issues=[],t.fallback=!0),t)):(t.value=s.value,s.issues.length&&(t.value=e.catchValue({...t,error:{issues:s.issues.map(r=>gi(r,i,mi()))},input:t.value}),t.issues=[],t.fallback=!0),t)}}),$S=X("$ZodPipe",(n,e)=>{dt.init(n,e),st(n._zod,"values",()=>e.in._zod.values),st(n._zod,"optin",()=>e.in._zod.optin),st(n._zod,"optout",()=>e.out._zod.optout),st(n._zod,"propValues",()=>e.in._zod.propValues),n._zod.parse=(t,i)=>{if(i.direction==="backward"){const r=e.out._zod.run(t,i);return r instanceof Promise?r.then(o=>Dr(o,e.in,i)):Dr(r,e.in,i)}const s=e.in._zod.run(t,i);return s instanceof Promise?s.then(r=>Dr(r,e.out,i)):Dr(s,e.out,i)}});function Dr(n,e,t){return n.issues.length?(n.aborted=!0,n):e._zod.run({value:n.value,issues:n.issues,fallback:n.fallback},t)}const XS=X("$ZodReadonly",(n,e)=>{dt.init(n,e),st(n._zod,"propValues",()=>e.innerType._zod.propValues),st(n._zod,"values",()=>e.innerType._zod.values),st(n._zod,"optin",()=>{var t,i;return(i=(t=e.innerType)==null?void 0:t._zod)==null?void 0:i.optin}),st(n._zod,"optout",()=>{var t,i;return(i=(t=e.innerType)==null?void 0:t._zod)==null?void 0:i.optout}),n._zod.parse=(t,i)=>{if(i.direction==="backward")return e.innerType._zod.run(t,i);const s=e.innerType._zod.run(t,i);return s instanceof Promise?s.then(ku):ku(s)}});function ku(n){return n.value=Object.freeze(n.value),n}const ZS=X("$ZodCustom",(n,e)=>{Zt.init(n,e),dt.init(n,e),n._zod.parse=(t,i)=>t,n._zod.check=t=>{const i=t.value,s=e.fn(i);if(s instanceof Promise)return s.then(r=>Bu(r,t,i,n));Bu(s,t,i,n)}});function Bu(n,e,t,i){if(!n){const s={code:"custom",input:t,inst:i,path:[...i._zod.def.path??[]],continue:!i._zod.def.abort};i._zod.def.params&&(s.params=i._zod.def.params),e.issues.push(Ws(s))}}var Vu;class YS{constructor(){this._map=new WeakMap,this._idmap=new Map}add(e,...t){const i=t[0];return this._map.set(e,i),i&&typeof i=="object"&&"id"in i&&this._idmap.set(i.id,e),this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(e){const t=this._map.get(e);return t&&typeof t=="object"&&"id"in t&&this._idmap.delete(t.id),this._map.delete(e),this}get(e){const t=e._zod.parent;if(t){const i={...this.get(t)??{}};delete i.id;const s={...i,...this._map.get(e)};return Object.keys(s).length?s:void 0}return this._map.get(e)}has(e){return this._map.has(e)}}function qS(){return new YS}(Vu=globalThis).__zod_globalRegistry??(Vu.__zod_globalRegistry=qS());const Cs=globalThis.__zod_globalRegistry;function jS(n,e){return new n({type:"string",...Le(e)})}function KS(n,e){return new n({type:"string",format:"email",check:"string_format",abort:!1,...Le(e)})}function Hu(n,e){return new n({type:"string",format:"guid",check:"string_format",abort:!1,...Le(e)})}function JS(n,e){return new n({type:"string",format:"uuid",check:"string_format",abort:!1,...Le(e)})}function QS(n,e){return new n({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",...Le(e)})}function eM(n,e){return new n({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",...Le(e)})}function tM(n,e){return new n({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",...Le(e)})}function nM(n,e){return new n({type:"string",format:"url",check:"string_format",abort:!1,...Le(e)})}function iM(n,e){return new n({type:"string",format:"emoji",check:"string_format",abort:!1,...Le(e)})}function sM(n,e){return new n({type:"string",format:"nanoid",check:"string_format",abort:!1,...Le(e)})}function rM(n,e){return new n({type:"string",format:"cuid",check:"string_format",abort:!1,...Le(e)})}function oM(n,e){return new n({type:"string",format:"cuid2",check:"string_format",abort:!1,...Le(e)})}function aM(n,e){return new n({type:"string",format:"ulid",check:"string_format",abort:!1,...Le(e)})}function cM(n,e){return new n({type:"string",format:"xid",check:"string_format",abort:!1,...Le(e)})}function lM(n,e){return new n({type:"string",format:"ksuid",check:"string_format",abort:!1,...Le(e)})}function uM(n,e){return new n({type:"string",format:"ipv4",check:"string_format",abort:!1,...Le(e)})}function hM(n,e){return new n({type:"string",format:"ipv6",check:"string_format",abort:!1,...Le(e)})}function dM(n,e){return new n({type:"string",format:"cidrv4",check:"string_format",abort:!1,...Le(e)})}function fM(n,e){return new n({type:"string",format:"cidrv6",check:"string_format",abort:!1,...Le(e)})}function pM(n,e){return new n({type:"string",format:"base64",check:"string_format",abort:!1,...Le(e)})}function mM(n,e){return new n({type:"string",format:"base64url",check:"string_format",abort:!1,...Le(e)})}function gM(n,e){return new n({type:"string",format:"e164",check:"string_format",abort:!1,...Le(e)})}function vM(n,e){return new n({type:"string",format:"jwt",check:"string_format",abort:!1,...Le(e)})}function _M(n,e){return new n({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,...Le(e)})}function xM(n,e){return new n({type:"string",format:"date",check:"string_format",...Le(e)})}function yM(n,e){return new n({type:"string",format:"time",check:"string_format",precision:null,...Le(e)})}function SM(n,e){return new n({type:"string",format:"duration",check:"string_format",...Le(e)})}function MM(n,e){return new n({type:"number",checks:[],...Le(e)})}function bM(n,e){return new n({type:"number",check:"number_format",abort:!1,format:"safeint",...Le(e)})}function EM(n,e){return new n({type:"boolean",...Le(e)})}function wM(n){return new n({type:"unknown"})}function TM(n,e){return new n({type:"never",...Le(e)})}function Gu(n,e){return new Ld({check:"less_than",...Le(e),value:n,inclusive:!1})}function ca(n,e){return new Ld({check:"less_than",...Le(e),value:n,inclusive:!0})}function Wu(n,e){return new Nd({check:"greater_than",...Le(e),value:n,inclusive:!1})}function la(n,e){return new Nd({check:"greater_than",...Le(e),value:n,inclusive:!0})}function $u(n,e){return new Vy({check:"multiple_of",...Le(e),value:n})}function Hd(n,e){return new Gy({check:"max_length",...Le(e),maximum:n})}function ao(n,e){return new Wy({check:"min_length",...Le(e),minimum:n})}function Gd(n,e){return new $y({check:"length_equals",...Le(e),length:n})}function RM(n,e){return new Xy({check:"string_format",format:"regex",...Le(e),pattern:n})}function AM(n){return new Zy({check:"string_format",format:"lowercase",...Le(n)})}function CM(n){return new Yy({check:"string_format",format:"uppercase",...Le(n)})}function IM(n,e){return new qy({check:"string_format",format:"includes",...Le(e),includes:n})}function PM(n,e){return new jy({check:"string_format",format:"starts_with",...Le(e),prefix:n})}function FM(n,e){return new Ky({check:"string_format",format:"ends_with",...Le(e),suffix:n})}function fs(n){return new Jy({check:"overwrite",tx:n})}function DM(n){return fs(e=>e.normalize(n))}function LM(){return fs(n=>n.trim())}function NM(){return fs(n=>n.toLowerCase())}function UM(){return fs(n=>n.toUpperCase())}function OM(){return fs(n=>Gx(n))}function zM(n,e,t){return new n({type:"array",element:e,...Le(t)})}function kM(n,e,t){return new n({type:"custom",check:"custom",fn:e,...Le(t)})}function BM(n,e){const t=VM(i=>(i.addIssue=s=>{if(typeof s=="string")i.issues.push(Ws(s,i.value,t._zod.def));else{const r=s;r.fatal&&(r.continue=!1),r.code??(r.code="custom"),r.input??(r.input=i.value),r.inst??(r.inst=t),r.continue??(r.continue=!t._zod.def.abort),i.issues.push(Ws(r))}},n(i.value,i)),e);return t}function VM(n,e){const t=new Zt({check:"custom",...Le(e)});return t._zod.check=n,t}function co(n){let e=(n==null?void 0:n.target)??"draft-2020-12";return e==="draft-4"&&(e="draft-04"),e==="draft-7"&&(e="draft-07"),{processors:n.processors??{},metadataRegistry:(n==null?void 0:n.metadata)??Cs,target:e,unrepresentable:(n==null?void 0:n.unrepresentable)??"throw",override:(n==null?void 0:n.override)??(()=>{}),io:(n==null?void 0:n.io)??"output",counter:0,seen:new Map,cycles:(n==null?void 0:n.cycles)??"ref",reused:(n==null?void 0:n.reused)??"inline",external:(n==null?void 0:n.external)??void 0}}function lt(n,e,t={path:[],schemaPath:[]}){var u,h;var i;const s=n._zod.def,r=e.seen.get(n);if(r)return r.count++,t.schemaPath.includes(n)&&(r.cycle=t.path),r.schema;const o={schema:{},count:1,cycle:void 0,path:t.path};e.seen.set(n,o);const a=(h=(u=n._zod).toJSONSchema)==null?void 0:h.call(u);if(a)o.schema=a;else{const d={...t,schemaPath:[...t.schemaPath,n],path:t.path};if(n._zod.processJSONSchema)n._zod.processJSONSchema(e,o.schema,d);else{const g=o.schema,v=e.processors[s.type];if(!v)throw new Error(`[toJSONSchema]: Non-representable type encountered: ${s.type}`);v(n,e,g,d)}const f=n._zod.parent;f&&(o.ref||(o.ref=f),lt(f,e,d),e.seen.get(f).isParent=!0)}const c=e.metadataRegistry.get(n);return c&&Object.assign(o.schema,c),e.io==="input"&&kt(n)&&(delete o.schema.examples,delete o.schema.default),e.io==="input"&&"_prefault"in o.schema&&((i=o.schema).default??(i.default=o.schema._prefault)),delete o.schema._prefault,e.seen.get(n).schema}function lo(n,e){var o,a,c,l;const t=n.seen.get(e);if(!t)throw new Error("Unprocessed schema. This is a bug in Zod.");const i=new Map;for(const u of n.seen.entries()){const h=(o=n.metadataRegistry.get(u[0]))==null?void 0:o.id;if(h){const d=i.get(h);if(d&&d!==u[0])throw new Error(`Duplicate schema id "${h}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);i.set(h,u[0])}}const s=u=>{var v;const h=n.target==="draft-2020-12"?"$defs":"definitions";if(n.external){const m=(v=n.external.registry.get(u[0]))==null?void 0:v.id,p=n.external.uri??(M=>M);if(m)return{ref:p(m)};const w=u[1].defId??u[1].schema.id??`schema${n.counter++}`;return u[1].defId=w,{defId:w,ref:`${p("__shared")}#/${h}/${w}`}}if(u[1]===t)return{ref:"#"};const f=`#/${h}/`,g=u[1].schema.id??`__schema${n.counter++}`;return{defId:g,ref:f+g}},r=u=>{if(u[1].schema.$ref)return;const h=u[1],{ref:d,defId:f}=s(u);h.def={...h.schema},f&&(h.defId=f);const g=h.schema;for(const v in g)delete g[v];g.$ref=d};if(n.cycles==="throw")for(const u of n.seen.entries()){const h=u[1];if(h.cycle)throw new Error(`Cycle detected: #/${(a=h.cycle)==null?void 0:a.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(const u of n.seen.entries()){const h=u[1];if(e===u[0]){r(u);continue}if(n.external){const f=(c=n.external.registry.get(u[0]))==null?void 0:c.id;if(e!==u[0]&&f){r(u);continue}}if((l=n.metadataRegistry.get(u[0]))==null?void 0:l.id){r(u);continue}if(h.cycle){r(u);continue}if(h.count>1&&n.reused==="ref"){r(u);continue}}}function uo(n,e){var a,c,l,u;const t=n.seen.get(e);if(!t)throw new Error("Unprocessed schema. This is a bug in Zod.");const i=h=>{const d=n.seen.get(h);if(d.ref===null)return;const f=d.def??d.schema,g={...f},v=d.ref;if(d.ref=null,v){i(v);const p=n.seen.get(v),w=p.schema;if(w.$ref&&(n.target==="draft-07"||n.target==="draft-04"||n.target==="openapi-3.0")?(f.allOf=f.allOf??[],f.allOf.push(w)):Object.assign(f,w),Object.assign(f,g),h._zod.parent===v)for(const x in f)x==="$ref"||x==="allOf"||x in g||delete f[x];if(w.$ref&&p.def)for(const x in f)x==="$ref"||x==="allOf"||x in p.def&&JSON.stringify(f[x])===JSON.stringify(p.def[x])&&delete f[x]}const m=h._zod.parent;if(m&&m!==v){i(m);const p=n.seen.get(m);if(p!=null&&p.schema.$ref&&(f.$ref=p.schema.$ref,p.def))for(const w in f)w==="$ref"||w==="allOf"||w in p.def&&JSON.stringify(f[w])===JSON.stringify(p.def[w])&&delete f[w]}n.override({zodSchema:h,jsonSchema:f,path:d.path??[]})};for(const h of[...n.seen.entries()].reverse())i(h[0]);const s={};if(n.target==="draft-2020-12"?s.$schema="https://json-schema.org/draft/2020-12/schema":n.target==="draft-07"?s.$schema="http://json-schema.org/draft-07/schema#":n.target==="draft-04"?s.$schema="http://json-schema.org/draft-04/schema#":n.target,(a=n.external)!=null&&a.uri){const h=(c=n.external.registry.get(e))==null?void 0:c.id;if(!h)throw new Error("Schema is missing an `id` property");s.$id=n.external.uri(h)}Object.assign(s,t.def??t.schema);const r=(l=n.metadataRegistry.get(e))==null?void 0:l.id;r!==void 0&&s.id===r&&delete s.id;const o=((u=n.external)==null?void 0:u.defs)??{};for(const h of n.seen.entries()){const d=h[1];d.def&&d.defId&&(d.def.id===d.defId&&delete d.def.id,o[d.defId]=d.def)}n.external||Object.keys(o).length>0&&(n.target==="draft-2020-12"?s.$defs=o:s.definitions=o);try{const h=JSON.parse(JSON.stringify(s));return Object.defineProperty(h,"~standard",{value:{...e["~standard"],jsonSchema:{input:ho(e,"input",n.processors),output:ho(e,"output",n.processors)}},enumerable:!1,writable:!1}),h}catch{throw new Error("Error converting schema to JSON.")}}function kt(n,e){const t=e??{seen:new Set};if(t.seen.has(n))return!1;t.seen.add(n);const i=n._zod.def;if(i.type==="transform")return!0;if(i.type==="array")return kt(i.element,t);if(i.type==="set")return kt(i.valueType,t);if(i.type==="lazy")return kt(i.getter(),t);if(i.type==="promise"||i.type==="optional"||i.type==="nonoptional"||i.type==="nullable"||i.type==="readonly"||i.type==="default"||i.type==="prefault")return kt(i.innerType,t);if(i.type==="intersection")return kt(i.left,t)||kt(i.right,t);if(i.type==="record"||i.type==="map")return kt(i.keyType,t)||kt(i.valueType,t);if(i.type==="pipe")return n._zod.traits.has("$ZodCodec")?!0:kt(i.in,t)||kt(i.out,t);if(i.type==="object"){for(const s in i.shape)if(kt(i.shape[s],t))return!0;return!1}if(i.type==="union"){for(const s of i.options)if(kt(s,t))return!0;return!1}if(i.type==="tuple"){for(const s of i.items)if(kt(s,t))return!0;return!!(i.rest&&kt(i.rest,t))}return!1}const HM=(n,e={})=>t=>{const i=co({...t,processors:e});return lt(n,i),lo(i,n),uo(i,n)},ho=(n,e,t={})=>i=>{const{libraryOptions:s,target:r}=i??{},o=co({...s??{},target:r,io:e,processors:t});return lt(n,o),lo(o,n),uo(o,n)},GM={guid:"uuid",url:"uri",datetime:"date-time",json_string:"json-string",regex:""},Wd=(n,e,t,i)=>{const s=t;s.type="string";const{minimum:r,maximum:o,format:a,patterns:c,contentEncoding:l}=n._zod.bag;if(typeof r=="number"&&(s.minLength=r),typeof o=="number"&&(s.maxLength=o),a&&(s.format=GM[a]??a,s.format===""&&delete s.format,a==="time"&&delete s.format),l&&(s.contentEncoding=l),c&&c.size>0){const u=[...c];u.length===1?s.pattern=u[0].source:u.length>1&&(s.allOf=[...u.map(h=>({...e.target==="draft-07"||e.target==="draft-04"||e.target==="openapi-3.0"?{type:"string"}:{},pattern:h.source}))])}},$d=(n,e,t,i)=>{const s=t,{minimum:r,maximum:o,format:a,multipleOf:c,exclusiveMaximum:l,exclusiveMinimum:u}=n._zod.bag;typeof a=="string"&&a.includes("int")?s.type="integer":s.type="number";const h=typeof u=="number"&&u>=(r??Number.NEGATIVE_INFINITY),d=typeof l=="number"&&l<=(o??Number.POSITIVE_INFINITY),f=e.target==="draft-04"||e.target==="openapi-3.0";h?f?(s.minimum=u,s.exclusiveMinimum=!0):s.exclusiveMinimum=u:typeof r=="number"&&(s.minimum=r),d?f?(s.maximum=l,s.exclusiveMaximum=!0):s.exclusiveMaximum=l:typeof o=="number"&&(s.maximum=o),typeof c=="number"&&(s.multipleOf=c)},Xd=(n,e,t,i)=>{t.type="boolean"},WM=(n,e,t,i)=>{if(e.unrepresentable==="throw")throw new Error("BigInt cannot be represented in JSON Schema")},$M=(n,e,t,i)=>{if(e.unrepresentable==="throw")throw new Error("Symbols cannot be represented in JSON Schema")},XM=(n,e,t,i)=>{e.target==="openapi-3.0"?(t.type="string",t.nullable=!0,t.enum=[null]):t.type="null"},ZM=(n,e,t,i)=>{if(e.unrepresentable==="throw")throw new Error("Undefined cannot be represented in JSON Schema")},YM=(n,e,t,i)=>{if(e.unrepresentable==="throw")throw new Error("Void cannot be represented in JSON Schema")},Zd=(n,e,t,i)=>{t.not={}},qM=(n,e,t,i)=>{},Yd=(n,e,t,i)=>{},jM=(n,e,t,i)=>{if(e.unrepresentable==="throw")throw new Error("Date cannot be represented in JSON Schema")},qd=(n,e,t,i)=>{const s=n._zod.def,r=Ed(s.entries);r.every(o=>typeof o=="number")&&(t.type="number"),r.every(o=>typeof o=="string")&&(t.type="string"),t.enum=r},jd=(n,e,t,i)=>{const s=n._zod.def,r=[];for(const o of s.values)if(o===void 0){if(e.unrepresentable==="throw")throw new Error("Literal `undefined` cannot be represented in JSON Schema")}else if(typeof o=="bigint"){if(e.unrepresentable==="throw")throw new Error("BigInt literals cannot be represented in JSON Schema");r.push(Number(o))}else r.push(o);if(r.length!==0)if(r.length===1){const o=r[0];t.type=o===null?"null":typeof o,e.target==="draft-04"||e.target==="openapi-3.0"?t.enum=[o]:t.const=o}else r.every(o=>typeof o=="number")&&(t.type="number"),r.every(o=>typeof o=="string")&&(t.type="string"),r.every(o=>typeof o=="boolean")&&(t.type="boolean"),r.every(o=>o===null)&&(t.type="null"),t.enum=r},KM=(n,e,t,i)=>{if(e.unrepresentable==="throw")throw new Error("NaN cannot be represented in JSON Schema")},JM=(n,e,t,i)=>{const s=t,r=n._zod.pattern;if(!r)throw new Error("Pattern not found in template literal");s.type="string",s.pattern=r.source},QM=(n,e,t,i)=>{const s=t,r={type:"string",format:"binary",contentEncoding:"binary"},{minimum:o,maximum:a,mime:c}=n._zod.bag;o!==void 0&&(r.minLength=o),a!==void 0&&(r.maxLength=a),c?c.length===1?(r.contentMediaType=c[0],Object.assign(s,r)):(Object.assign(s,r),s.anyOf=c.map(l=>({contentMediaType:l}))):Object.assign(s,r)},eb=(n,e,t,i)=>{t.type="boolean"},Kd=(n,e,t,i)=>{if(e.unrepresentable==="throw")throw new Error("Custom types cannot be represented in JSON Schema")},tb=(n,e,t,i)=>{if(e.unrepresentable==="throw")throw new Error("Function types cannot be represented in JSON Schema")},Jd=(n,e,t,i)=>{if(e.unrepresentable==="throw")throw new Error("Transforms cannot be represented in JSON Schema")},nb=(n,e,t,i)=>{if(e.unrepresentable==="throw")throw new Error("Map cannot be represented in JSON Schema")},ib=(n,e,t,i)=>{if(e.unrepresentable==="throw")throw new Error("Set cannot be represented in JSON Schema")},Qd=(n,e,t,i)=>{const s=t,r=n._zod.def,{minimum:o,maximum:a}=n._zod.bag;typeof o=="number"&&(s.minItems=o),typeof a=="number"&&(s.maxItems=a),s.type="array",s.items=lt(r.element,e,{...i,path:[...i.path,"items"]})},ef=(n,e,t,i)=>{var l;const s=t,r=n._zod.def;s.type="object",s.properties={};const o=r.shape;for(const u in o)s.properties[u]=lt(o[u],e,{...i,path:[...i.path,"properties",u]});const a=new Set(Object.keys(o)),c=new Set([...a].filter(u=>{const h=r.shape[u]._zod;return e.io==="input"?h.optin===void 0:h.optout===void 0}));c.size>0&&(s.required=Array.from(c)),((l=r.catchall)==null?void 0:l._zod.def.type)==="never"?s.additionalProperties=!1:r.catchall?r.catchall&&(s.additionalProperties=lt(r.catchall,e,{...i,path:[...i.path,"additionalProperties"]})):e.io==="output"&&(s.additionalProperties=!1)},tf=(n,e,t,i)=>{const s=n._zod.def,r=s.inclusive===!1,o=s.options.map((a,c)=>lt(a,e,{...i,path:[...i.path,r?"oneOf":"anyOf",c]}));r?t.oneOf=o:t.anyOf=o},nf=(n,e,t,i)=>{const s=n._zod.def,r=lt(s.left,e,{...i,path:[...i.path,"allOf",0]}),o=lt(s.right,e,{...i,path:[...i.path,"allOf",1]}),a=l=>"allOf"in l&&Object.keys(l).length===1,c=[...a(r)?r.allOf:[r],...a(o)?o.allOf:[o]];t.allOf=c},sf=(n,e,t,i)=>{const s=t,r=n._zod.def;s.type="array";const o=e.target==="draft-2020-12"?"prefixItems":"items",a=e.target==="draft-2020-12"||e.target==="openapi-3.0"?"items":"additionalItems",c=r.items.map((d,f)=>lt(d,e,{...i,path:[...i.path,o,f]})),l=r.rest?lt(r.rest,e,{...i,path:[...i.path,a,...e.target==="openapi-3.0"?[r.items.length]:[]]}):null;e.target==="draft-2020-12"?(s.prefixItems=c,l&&(s.items=l)):e.target==="openapi-3.0"?(s.items={anyOf:c},l&&s.items.anyOf.push(l),s.minItems=c.length,l||(s.maxItems=c.length)):(s.items=c,l&&(s.additionalItems=l));const{minimum:u,maximum:h}=n._zod.bag;typeof u=="number"&&(s.minItems=u),typeof h=="number"&&(s.maxItems=h)},sb=(n,e,t,i)=>{const s=t,r=n._zod.def;s.type="object";const o=r.keyType,a=o._zod.bag,c=a==null?void 0:a.patterns;if(r.mode==="loose"&&c&&c.size>0){const u=lt(r.valueType,e,{...i,path:[...i.path,"patternProperties","*"]});s.patternProperties={};for(const h of c)s.patternProperties[h.source]=u}else(e.target==="draft-07"||e.target==="draft-2020-12")&&(s.propertyNames=lt(r.keyType,e,{...i,path:[...i.path,"propertyNames"]})),s.additionalProperties=lt(r.valueType,e,{...i,path:[...i.path,"additionalProperties"]});const l=o._zod.values;if(l){const u=[...l].filter(h=>typeof h=="string"||typeof h=="number");u.length>0&&(s.required=u)}},rf=(n,e,t,i)=>{const s=n._zod.def,r=lt(s.innerType,e,i),o=e.seen.get(n);e.target==="openapi-3.0"?(o.ref=s.innerType,t.nullable=!0):t.anyOf=[r,{type:"null"}]},of=(n,e,t,i)=>{const s=n._zod.def;lt(s.innerType,e,i);const r=e.seen.get(n);r.ref=s.innerType},af=(n,e,t,i)=>{const s=n._zod.def;lt(s.innerType,e,i);const r=e.seen.get(n);r.ref=s.innerType,t.default=JSON.parse(JSON.stringify(s.defaultValue))},cf=(n,e,t,i)=>{const s=n._zod.def;lt(s.innerType,e,i);const r=e.seen.get(n);r.ref=s.innerType,e.io==="input"&&(t._prefault=JSON.parse(JSON.stringify(s.defaultValue)))},lf=(n,e,t,i)=>{const s=n._zod.def;lt(s.innerType,e,i);const r=e.seen.get(n);r.ref=s.innerType;let o;try{o=s.catchValue(void 0)}catch{throw new Error("Dynamic catch values are not supported in JSON Schema")}t.default=o},uf=(n,e,t,i)=>{const s=n._zod.def,r=s.in._zod.traits.has("$ZodTransform"),o=e.io==="input"?r?s.out:s.in:s.out;lt(o,e,i);const a=e.seen.get(n);a.ref=o},hf=(n,e,t,i)=>{const s=n._zod.def;lt(s.innerType,e,i);const r=e.seen.get(n);r.ref=s.innerType,t.readOnly=!0},rb=(n,e,t,i)=>{const s=n._zod.def;lt(s.innerType,e,i);const r=e.seen.get(n);r.ref=s.innerType},Yc=(n,e,t,i)=>{const s=n._zod.def;lt(s.innerType,e,i);const r=e.seen.get(n);r.ref=s.innerType},ob=(n,e,t,i)=>{const s=n._zod.innerType;lt(s,e,i);const r=e.seen.get(n);r.ref=s},Xu={string:Wd,number:$d,boolean:Xd,bigint:WM,symbol:$M,null:XM,undefined:ZM,void:YM,never:Zd,any:qM,unknown:Yd,date:jM,enum:qd,literal:jd,nan:KM,template_literal:JM,file:QM,success:eb,custom:Kd,function:tb,transform:Jd,map:nb,set:ib,array:Qd,object:ef,union:tf,intersection:nf,tuple:sf,record:sb,nullable:rf,nonoptional:of,default:af,prefault:cf,catch:lf,pipe:uf,readonly:hf,promise:rb,optional:Yc,lazy:ob};function ab(n,e){if("_idmap"in n){const i=n,s=co({...e,processors:Xu}),r={};for(const c of i._idmap.entries()){const[l,u]=c;lt(u,s)}const o={},a={registry:i,uri:e==null?void 0:e.uri,defs:r};s.external=a;for(const c of i._idmap.entries()){const[l,u]=c;lo(s,u),o[l]=uo(s,u)}if(Object.keys(r).length>0){const c=s.target==="draft-2020-12"?"$defs":"definitions";o.__shared={[c]:r}}return{schemas:o}}const t=co({...e,processors:Xu});return lt(n,t),lo(t,n),uo(t,n)}const cb=X("ZodISODateTime",(n,e)=>{dS.init(n,e),gt.init(n,e)});function df(n){return _M(cb,n)}const lb=X("ZodISODate",(n,e)=>{fS.init(n,e),gt.init(n,e)});function ff(n){return xM(lb,n)}const ub=X("ZodISOTime",(n,e)=>{pS.init(n,e),gt.init(n,e)});function hb(n){return yM(ub,n)}const db=X("ZodISODuration",(n,e)=>{mS.init(n,e),gt.init(n,e)});function fb(n){return SM(db,n)}const pb=(n,e)=>{Ad.init(n,e),n.name="ZodError",Object.defineProperties(n,{format:{value:t=>iy(n,t)},flatten:{value:t=>ny(n,t)},addIssue:{value:t=>{n.issues.push(t),n.message=JSON.stringify(n.issues,gc,2)}},addIssues:{value:t=>{n.issues.push(...t),n.message=JSON.stringify(n.issues,gc,2)}},isEmpty:{get(){return n.issues.length===0}}})},on=X("ZodError",pb,{Parent:Error}),mb=$c(on),gb=Xc(on),vb=wo(on),_b=To(on),xb=oy(on),yb=ay(on),Sb=cy(on),Mb=ly(on),bb=uy(on),Eb=hy(on),wb=dy(on),Tb=fy(on),Zu=new WeakMap;function qs(n,e,t){const i=Object.getPrototypeOf(n);let s=Zu.get(i);if(s||(s=new Set,Zu.set(i,s)),!s.has(e)){s.add(e);for(const r in t){const o=t[r];Object.defineProperty(i,r,{configurable:!0,enumerable:!1,get(){const a=o.bind(this);return Object.defineProperty(this,r,{configurable:!0,writable:!0,enumerable:!0,value:a}),a},set(a){Object.defineProperty(this,r,{configurable:!0,writable:!0,enumerable:!0,value:a})}})}}}const mt=X("ZodType",(n,e)=>(dt.init(n,e),Object.assign(n["~standard"],{jsonSchema:{input:ho(n,"input"),output:ho(n,"output")}}),n.toJSONSchema=HM(n,{}),n.def=e,n.type=e.type,Object.defineProperty(n,"_def",{value:e}),n.parse=(t,i)=>mb(n,t,i,{callee:n.parse}),n.safeParse=(t,i)=>vb(n,t,i),n.parseAsync=async(t,i)=>gb(n,t,i,{callee:n.parseAsync}),n.safeParseAsync=async(t,i)=>_b(n,t,i),n.spa=n.safeParseAsync,n.encode=(t,i)=>xb(n,t,i),n.decode=(t,i)=>yb(n,t,i),n.encodeAsync=async(t,i)=>Sb(n,t,i),n.decodeAsync=async(t,i)=>Mb(n,t,i),n.safeEncode=(t,i)=>bb(n,t,i),n.safeDecode=(t,i)=>Eb(n,t,i),n.safeEncodeAsync=async(t,i)=>wb(n,t,i),n.safeDecodeAsync=async(t,i)=>Tb(n,t,i),qs(n,"ZodType",{check(...t){const i=this.def;return this.clone(qn(i,{checks:[...i.checks??[],...t.map(s=>typeof s=="function"?{_zod:{check:s,def:{check:"custom"},onattach:[]}}:s)]}),{parent:!0})},with(...t){return this.check(...t)},clone(t,i){return jn(this,t,i)},brand(){return this},register(t,i){return t.add(this,i),this},refine(t,i){return this.check(xE(t,i))},superRefine(t,i){return this.check(yE(t,i))},overwrite(t){return this.check(fs(t))},optional(){return Ku(this)},exactOptional(){return oE(this)},nullable(){return Ju(this)},nullish(){return Ku(Ju(this))},nonoptional(t){return dE(this,t)},array(){return Kn(this)},or(t){return Si([this,t])},and(t){return eE(this,t)},transform(t){return Qu(this,sE(t))},default(t){return lE(this,t)},prefault(t){return hE(this,t)},catch(t){return pE(this,t)},pipe(t){return Qu(this,t)},readonly(){return vE(this)},describe(t){const i=this.clone();return Cs.add(i,{description:t}),i},meta(...t){if(t.length===0)return Cs.get(this);const i=this.clone();return Cs.add(i,t[0]),i},isOptional(){return this.safeParse(void 0).success},isNullable(){return this.safeParse(null).success},apply(t){return t(this)}}),Object.defineProperty(n,"description",{get(){var t;return(t=Cs.get(n))==null?void 0:t.description},configurable:!0}),n)),pf=X("_ZodString",(n,e)=>{Zc.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(i,s,r)=>Wd(n,i,s);const t=n._zod.bag;n.format=t.format??null,n.minLength=t.minimum??null,n.maxLength=t.maximum??null,qs(n,"_ZodString",{regex(...i){return this.check(RM(...i))},includes(...i){return this.check(IM(...i))},startsWith(...i){return this.check(PM(...i))},endsWith(...i){return this.check(FM(...i))},min(...i){return this.check(ao(...i))},max(...i){return this.check(Hd(...i))},length(...i){return this.check(Gd(...i))},nonempty(...i){return this.check(ao(1,...i))},lowercase(i){return this.check(AM(i))},uppercase(i){return this.check(CM(i))},trim(){return this.check(LM())},normalize(...i){return this.check(DM(...i))},toLowerCase(){return this.check(NM())},toUpperCase(){return this.check(UM())},slugify(){return this.check(OM())}})}),Rb=X("ZodString",(n,e)=>{Zc.init(n,e),pf.init(n,e),n.email=t=>n.check(KS(Ab,t)),n.url=t=>n.check(nM(Cb,t)),n.jwt=t=>n.check(vM(Wb,t)),n.emoji=t=>n.check(iM(Ib,t)),n.guid=t=>n.check(Hu(Yu,t)),n.uuid=t=>n.check(JS(Lr,t)),n.uuidv4=t=>n.check(QS(Lr,t)),n.uuidv6=t=>n.check(eM(Lr,t)),n.uuidv7=t=>n.check(tM(Lr,t)),n.nanoid=t=>n.check(sM(Pb,t)),n.guid=t=>n.check(Hu(Yu,t)),n.cuid=t=>n.check(rM(Fb,t)),n.cuid2=t=>n.check(oM(Db,t)),n.ulid=t=>n.check(aM(Lb,t)),n.base64=t=>n.check(pM(Vb,t)),n.base64url=t=>n.check(mM(Hb,t)),n.xid=t=>n.check(cM(Nb,t)),n.ksuid=t=>n.check(lM(Ub,t)),n.ipv4=t=>n.check(uM(Ob,t)),n.ipv6=t=>n.check(hM(zb,t)),n.cidrv4=t=>n.check(dM(kb,t)),n.cidrv6=t=>n.check(fM(Bb,t)),n.e164=t=>n.check(gM(Gb,t)),n.datetime=t=>n.check(df(t)),n.date=t=>n.check(ff(t)),n.time=t=>n.check(hb(t)),n.duration=t=>n.check(fb(t))});function Re(n){return jS(Rb,n)}const gt=X("ZodStringFormat",(n,e)=>{ft.init(n,e),pf.init(n,e)}),Ab=X("ZodEmail",(n,e)=>{iS.init(n,e),gt.init(n,e)}),Yu=X("ZodGUID",(n,e)=>{tS.init(n,e),gt.init(n,e)}),Lr=X("ZodUUID",(n,e)=>{nS.init(n,e),gt.init(n,e)}),Cb=X("ZodURL",(n,e)=>{sS.init(n,e),gt.init(n,e)}),Ib=X("ZodEmoji",(n,e)=>{rS.init(n,e),gt.init(n,e)}),Pb=X("ZodNanoID",(n,e)=>{oS.init(n,e),gt.init(n,e)}),Fb=X("ZodCUID",(n,e)=>{aS.init(n,e),gt.init(n,e)}),Db=X("ZodCUID2",(n,e)=>{cS.init(n,e),gt.init(n,e)}),Lb=X("ZodULID",(n,e)=>{lS.init(n,e),gt.init(n,e)}),Nb=X("ZodXID",(n,e)=>{uS.init(n,e),gt.init(n,e)}),Ub=X("ZodKSUID",(n,e)=>{hS.init(n,e),gt.init(n,e)}),Ob=X("ZodIPv4",(n,e)=>{gS.init(n,e),gt.init(n,e)}),zb=X("ZodIPv6",(n,e)=>{vS.init(n,e),gt.init(n,e)}),kb=X("ZodCIDRv4",(n,e)=>{_S.init(n,e),gt.init(n,e)}),Bb=X("ZodCIDRv6",(n,e)=>{xS.init(n,e),gt.init(n,e)}),Vb=X("ZodBase64",(n,e)=>{yS.init(n,e),gt.init(n,e)}),Hb=X("ZodBase64URL",(n,e)=>{MS.init(n,e),gt.init(n,e)}),Gb=X("ZodE164",(n,e)=>{bS.init(n,e),gt.init(n,e)}),Wb=X("ZodJWT",(n,e)=>{wS.init(n,e),gt.init(n,e)}),mf=X("ZodNumber",(n,e)=>{Od.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(i,s,r)=>$d(n,i,s),qs(n,"ZodNumber",{gt(i,s){return this.check(Wu(i,s))},gte(i,s){return this.check(la(i,s))},min(i,s){return this.check(la(i,s))},lt(i,s){return this.check(Gu(i,s))},lte(i,s){return this.check(ca(i,s))},max(i,s){return this.check(ca(i,s))},int(i){return this.check(qu(i))},safe(i){return this.check(qu(i))},positive(i){return this.check(Wu(0,i))},nonnegative(i){return this.check(la(0,i))},negative(i){return this.check(Gu(0,i))},nonpositive(i){return this.check(ca(0,i))},multipleOf(i,s){return this.check($u(i,s))},step(i,s){return this.check($u(i,s))},finite(){return this}});const t=n._zod.bag;n.minValue=Math.max(t.minimum??Number.NEGATIVE_INFINITY,t.exclusiveMinimum??Number.NEGATIVE_INFINITY)??null,n.maxValue=Math.min(t.maximum??Number.POSITIVE_INFINITY,t.exclusiveMaximum??Number.POSITIVE_INFINITY)??null,n.isInt=(t.format??"").includes("int")||Number.isSafeInteger(t.multipleOf??.5),n.isFinite=!0,n.format=t.format??null});function Qe(n){return MM(mf,n)}const $b=X("ZodNumberFormat",(n,e)=>{TS.init(n,e),mf.init(n,e)});function qu(n){return bM($b,n)}const Xb=X("ZodBoolean",(n,e)=>{RS.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,s)=>Xd(n,t,i)});function $s(n){return EM(Xb,n)}const Zb=X("ZodUnknown",(n,e)=>{AS.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,s)=>Yd()});function ju(){return wM(Zb)}const Yb=X("ZodNever",(n,e)=>{CS.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,s)=>Zd(n,t,i)});function qb(n){return TM(Yb,n)}const jb=X("ZodArray",(n,e)=>{IS.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,s)=>Qd(n,t,i,s),n.element=e.element,qs(n,"ZodArray",{min(t,i){return this.check(ao(t,i))},nonempty(t){return this.check(ao(1,t))},max(t,i){return this.check(Hd(t,i))},length(t,i){return this.check(Gd(t,i))},unwrap(){return this.element}})});function Kn(n,e){return zM(jb,n,e)}const Kb=X("ZodObject",(n,e)=>{FS.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,s)=>ef(n,t,i,s),st(n,"shape",()=>e.shape),qs(n,"ZodObject",{keyof(){return At(Object.keys(this._zod.def.shape))},catchall(t){return this.clone({...this._zod.def,catchall:t})},passthrough(){return this.clone({...this._zod.def,catchall:ju()})},loose(){return this.clone({...this._zod.def,catchall:ju()})},strict(){return this.clone({...this._zod.def,catchall:qb()})},strip(){return this.clone({...this._zod.def,catchall:void 0})},extend(t){return jx(this,t)},safeExtend(t){return Kx(this,t)},merge(t){return Jx(this,t)},pick(t){return Yx(this,t)},omit(t){return qx(this,t)},partial(...t){return Qx(_f,this,t[0])},required(...t){return ey(xf,this,t[0])}})});function ge(n,e){const t={type:"object",shape:n??{},...Le(e)};return new Kb(t)}const gf=X("ZodUnion",(n,e)=>{Bd.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,s)=>tf(n,t,i,s),n.options=e.options});function Si(n,e){return new gf({type:"union",options:n,...Le(e)})}const Jb=X("ZodDiscriminatedUnion",(n,e)=>{gf.init(n,e),DS.init(n,e)});function qc(n,e,t){return new Jb({type:"union",options:e,discriminator:n,...Le(t)})}const Qb=X("ZodIntersection",(n,e)=>{LS.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,s)=>nf(n,t,i,s)});function eE(n,e){return new Qb({type:"intersection",left:n,right:e})}const tE=X("ZodTuple",(n,e)=>{NS.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,s)=>sf(n,t,i,s),n.rest=t=>n.clone({...n._zod.def,rest:t})});function vf(n,e,t){const i=e instanceof dt,s=i?t:e,r=i?e:null;return new tE({type:"tuple",items:n,rest:r,...Le(s)})}const _c=X("ZodEnum",(n,e)=>{US.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(i,s,r)=>qd(n,i,s),n.enum=e.entries,n.options=Object.values(e.entries);const t=new Set(Object.keys(e.entries));n.extract=(i,s)=>{const r={};for(const o of i)if(t.has(o))r[o]=e.entries[o];else throw new Error(`Key ${o} not found in enum`);return new _c({...e,checks:[],...Le(s),entries:r})},n.exclude=(i,s)=>{const r={...e.entries};for(const o of i)if(t.has(o))delete r[o];else throw new Error(`Key ${o} not found in enum`);return new _c({...e,checks:[],...Le(s),entries:r})}});function At(n,e){const t=Array.isArray(n)?Object.fromEntries(n.map(i=>[i,i])):n;return new _c({type:"enum",entries:t,...Le(e)})}const nE=X("ZodLiteral",(n,e)=>{OS.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,s)=>jd(n,t,i),n.values=new Set(e.values),Object.defineProperty(n,"value",{get(){if(e.values.length>1)throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");return e.values[0]}})});function Ct(n,e){return new nE({type:"literal",values:Array.isArray(n)?n:[n],...Le(e)})}const iE=X("ZodTransform",(n,e)=>{zS.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,s)=>Jd(n,t),n._zod.parse=(t,i)=>{if(i.direction==="backward")throw new bd(n.constructor.name);t.addIssue=r=>{if(typeof r=="string")t.issues.push(Ws(r,t.value,e));else{const o=r;o.fatal&&(o.continue=!1),o.code??(o.code="custom"),o.input??(o.input=t.value),o.inst??(o.inst=n),t.issues.push(Ws(o))}};const s=e.transform(t.value,t);return s instanceof Promise?s.then(r=>(t.value=r,t.fallback=!0,t)):(t.value=s,t.fallback=!0,t)}});function sE(n){return new iE({type:"transform",transform:n})}const _f=X("ZodOptional",(n,e)=>{Vd.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,s)=>Yc(n,t,i,s),n.unwrap=()=>n._zod.def.innerType});function Ku(n){return new _f({type:"optional",innerType:n})}const rE=X("ZodExactOptional",(n,e)=>{kS.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,s)=>Yc(n,t,i,s),n.unwrap=()=>n._zod.def.innerType});function oE(n){return new rE({type:"optional",innerType:n})}const aE=X("ZodNullable",(n,e)=>{BS.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,s)=>rf(n,t,i,s),n.unwrap=()=>n._zod.def.innerType});function Ju(n){return new aE({type:"nullable",innerType:n})}const cE=X("ZodDefault",(n,e)=>{VS.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,s)=>af(n,t,i,s),n.unwrap=()=>n._zod.def.innerType,n.removeDefault=n.unwrap});function lE(n,e){return new cE({type:"default",innerType:n,get defaultValue(){return typeof e=="function"?e():Td(e)}})}const uE=X("ZodPrefault",(n,e)=>{HS.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,s)=>cf(n,t,i,s),n.unwrap=()=>n._zod.def.innerType});function hE(n,e){return new uE({type:"prefault",innerType:n,get defaultValue(){return typeof e=="function"?e():Td(e)}})}const xf=X("ZodNonOptional",(n,e)=>{GS.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,s)=>of(n,t,i,s),n.unwrap=()=>n._zod.def.innerType});function dE(n,e){return new xf({type:"nonoptional",innerType:n,...Le(e)})}const fE=X("ZodCatch",(n,e)=>{WS.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,s)=>lf(n,t,i,s),n.unwrap=()=>n._zod.def.innerType,n.removeCatch=n.unwrap});function pE(n,e){return new fE({type:"catch",innerType:n,catchValue:typeof e=="function"?e:()=>e})}const mE=X("ZodPipe",(n,e)=>{$S.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,s)=>uf(n,t,i,s),n.in=e.in,n.out=e.out});function Qu(n,e){return new mE({type:"pipe",in:n,out:e})}const gE=X("ZodReadonly",(n,e)=>{XS.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,s)=>hf(n,t,i,s),n.unwrap=()=>n._zod.def.innerType});function vE(n){return new gE({type:"readonly",innerType:n})}const _E=X("ZodCustom",(n,e)=>{ZS.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,s)=>Kd(n,t)});function xE(n,e={}){return kM(_E,n,e)}function yE(n,e){return BM(n,e)}const fo={custom:"custom"},SE=vf([Qe(),Qe()]),yf=Kn(SE).min(3),jc=At(["temperature","humidity","lux","power","occupancy"]),ME=ge({channel:jc,unit:Re(),deviceId:Re()}),bE=ge({id:Re(),name:Re(),footprint:yf,sensors:Kn(ME).default([])}),EE=At(["guest","lobby","corridor","plant","amenity"]),wE=ge({id:Re(),name:Re(),function:EE,rooms:Kn(bE)}),TE=ge({id:Re(),name:Re(),elevation:Qe(),height:Qe().positive(),outline:yf,zones:Kn(wE)}),RE=ge({id:Re(),name:Re(),location:ge({lat:Qe(),lon:Qe(),northAngleDeg:Qe().default(0)}),floors:Kn(TE).min(1)});function AE(n){return RE.parse(n)}class CE{constructor(e){C(this,"floorIds");C(this,"floorById",new Map);C(this,"roomById",new Map);this.building=e,this.floorIds=e.floors.map(t=>t.id);for(const t of e.floors){this.floorById.set(t.id,t);for(const i of t.zones)for(const s of i.rooms)this.roomById.set(s.id,{room:s,zone:i,floor:t})}}floor(e){return this.floorById.get(e)}room(e){return this.roomById.get(e)}roomsMatching(e){const t=[];for(const i of this.building.floors)if(!(e.floorId&&i.id!==e.floorId)){for(const s of i.zones)if(!(e.zoneFunction&&s.function!==e.zoneFunction))for(const r of s.rooms){const o=this.roomById.get(r.id);o&&t.push(o)}}return t}info(e){if(e.type==="room"){const t=this.roomById.get(e.id);if(t)return{ref:{...e},type:"room",name:t.room.name,floorId:t.floor.id,floorName:t.floor.name,zoneName:t.zone.name,zoneFunction:t.zone.function,sensors:eh(t.room.sensors)}}if(e.type==="floor"){const t=this.floorById.get(e.id);if(t){const i=t.zones.flatMap(s=>s.rooms.flatMap(r=>r.sensors));return{ref:{...e},type:"floor",name:t.name,floorId:t.id,floorName:t.name,sensors:eh(i)}}}return e.type==="building"?{ref:{...e},type:"building",name:this.building.name,sensors:[]}:{ref:{...e},type:e.type,name:e.id,sensors:[]}}}function eh(n){return n.map(e=>({...e}))}const th={type:"change"},Kc={type:"start"},Sf={type:"end"},Nr=new Zs,nh=new Xn,IE=Math.cos(70*_t.DEG2RAD),St=new I,Wt=2*Math.PI,rt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ua=1e-6;class PE extends Vx{constructor(e,t=null){super(e,t),this.state=rt.NONE,this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zi.ROTATE,MIDDLE:Zi.DOLLY,RIGHT:Zi.PAN},this.touches={ONE:Gi.ROTATE,TWO:Gi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new fi,this._lastTargetPosition=new I,this._quat=new fi().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new dn,this._sphericalDelta=new dn,this._scale=1,this._panOffset=new I,this._rotateStart=new te,this._rotateEnd=new te,this._rotateDelta=new te,this._panStart=new te,this._panEnd=new te,this._panDelta=new te,this._dollyStart=new te,this._dollyEnd=new te,this._dollyDelta=new te,this._dollyDirection=new I,this._mouse=new te,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=DE.bind(this),this._onPointerDown=FE.bind(this),this._onPointerUp=LE.bind(this),this._onContextMenu=VE.bind(this),this._onMouseWheel=OE.bind(this),this._onKeyDown=zE.bind(this),this._onTouchStart=kE.bind(this),this._onTouchMove=BE.bind(this),this._onMouseDown=NE.bind(this),this._onMouseMove=UE.bind(this),this._interceptControlDown=HE.bind(this),this._interceptControlUp=GE.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(th),this.update(),this.state=rt.NONE}update(e=null){const t=this.object.position;St.copy(t).sub(this.target),St.applyQuaternion(this._quat),this._spherical.setFromVector3(St),this.autoRotate&&this.state===rt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Wt:i>Math.PI&&(i-=Wt),s<-Math.PI?s+=Wt:s>Math.PI&&(s-=Wt),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(St.setFromSpherical(this._spherical),St.applyQuaternion(this._quatInverse),t.copy(this.target).add(St),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=St.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new I(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=St.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Nr.origin.copy(this.object.position),Nr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Nr.direction))<IE?this.object.lookAt(this.target):(nh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Nr.intersectPlane(nh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ua||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ua||this._lastTargetPosition.distanceToSquared(this.target)>ua?(this.dispatchEvent(th),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Wt/60*this.autoRotateSpeed*e:Wt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){St.setFromMatrixColumn(t,0),St.multiplyScalar(-e),this._panOffset.add(St)}_panUp(e,t){this.screenSpacePanning===!0?St.setFromMatrixColumn(t,1):(St.setFromMatrixColumn(t,0),St.crossVectors(this.object.up,St)),St.multiplyScalar(e),this._panOffset.add(St)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;St.copy(s).sub(this.target);let r=St.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Wt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Wt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Wt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Wt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Wt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Wt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Wt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Wt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new te,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function FE(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function DE(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function LE(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Sf),this.state=rt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function NE(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Zi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=rt.DOLLY;break;case Zi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=rt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=rt.ROTATE}break;case Zi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=rt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=rt.PAN}break;default:this.state=rt.NONE}this.state!==rt.NONE&&this.dispatchEvent(Kc)}function UE(n){switch(this.state){case rt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case rt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case rt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function OE(n){this.enabled===!1||this.enableZoom===!1||this.state!==rt.NONE||(n.preventDefault(),this.dispatchEvent(Kc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Sf))}function zE(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function kE(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Gi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=rt.TOUCH_ROTATE;break;case Gi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=rt.TOUCH_PAN;break;default:this.state=rt.NONE}break;case 2:switch(this.touches.TWO){case Gi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=rt.TOUCH_DOLLY_PAN;break;case Gi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=rt.TOUCH_DOLLY_ROTATE;break;default:this.state=rt.NONE}break;default:this.state=rt.NONE}this.state!==rt.NONE&&this.dispatchEvent(Kc)}function BE(n){switch(this._trackPointer(n),this.state){case rt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case rt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case rt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case rt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=rt.NONE}}function VE(n){this.enabled!==!1&&n.preventDefault()}function HE(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function GE(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Mf={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ps{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const WE=new ad(-1,1,1,-1,0,1);class $E extends Ft{constructor(){super(),this.setAttribute("position",new bt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new bt([0,2,0,0,2,0],2))}}const XE=new $E;class Jc{constructor(e){this._mesh=new It(XE,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,WE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class bf extends ps{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Mt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=zs.clone(e.uniforms),this.material=new Mt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Jc(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class ih extends ps{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class ZE extends ps{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class YE{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new te);this._width=i.width,this._height=i.height,t=new mn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Fn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new bf(Mf),this.copyPass.material.blending=Pn,this.clock=new Md}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ih!==void 0&&(o instanceof ih?i=!0:o instanceof ZE&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new te);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class qE extends ps{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Be}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const jE={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class KE extends ps{constructor(){super();const e=jE;this.uniforms=zs.clone(e.uniforms),this.material=new zx({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Jc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},je.getTransfer(this._outputColorSpace)===it&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Lh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Nh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Uh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===bc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Oh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===zh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const JE={uniforms:{tDiffuse:{value:null},uTime:{value:0},uResolution:{value:new te(1,1)}},vertexShader:`
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
  `},QE={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Be(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class os extends ps{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new te(e.x,e.y):new te(256,256),this.clearColor=new Be(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new mn(r,o,{type:Fn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new mn(r,o,{type:Fn});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new mn(r,o,{type:Fn});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=QE;this.highPassUniforms=zs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Mt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new te(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Mf;this.copyUniforms=zs.clone(u.uniforms),this.blendMaterial=new Mt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Nn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Be,this.oldClearAlpha=1,this.basic=new xo,this.fsQuad=new Jc(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new te(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=os.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=os.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Mt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new te(.5,.5)},direction:{value:new te(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}}os.BlurDirectionX=new te(1,0);os.BlurDirectionY=new te(0,1);class ew extends os{constructor(e,t,i,s,r){super(e.clone().multiplyScalar(t),i,s,r),this.resolutionScale=t}setSize(e,t){super.setSize(Math.max(1,Math.round(e*this.resolutionScale)),Math.max(1,Math.round(t*this.resolutionScale)))}get brightBufferSize(){return{width:this.renderTargetBright.width,height:this.renderTargetBright.height}}}const sh="#02040a",ha=.0025,rh={high:{bloom:.5,overlay:!0,dpr:2,holoGain:1},medium:{bloom:.32,overlay:!1,dpr:1.5,holoGain:1},low:{bloom:0,overlay:!1,dpr:1,holoGain:6}},oh=["high","medium","low"],tw=26,nw=90,iw=1e3/30,sw=100,ah=1500,rw=.5;class ow{constructor(e,t="high"){C(this,"scene",new ex);C(this,"camera");C(this,"controls");C(this,"renderer");C(this,"holoLuminance",new ds(1));C(this,"composer",null);C(this,"overlayPass",null);C(this,"bloomPass",null);C(this,"updates",new Set);C(this,"clock",new Md);C(this,"frameIntervals",[]);C(this,"cpuFrameTimes",[]);C(this,"gpuFrameTimes",[]);C(this,"drawingBufferSize",new te);C(this,"gpuTimer",null);C(this,"quality","high");C(this,"autoQuality",!0);C(this,"frameAccum",0);C(this,"frameCount",0);C(this,"lastAnimationFrameAt",Number.NEGATIVE_INFINITY);C(this,"burstUntil",performance.now()+ah);C(this,"activityProbe",null);C(this,"requestedFogDensity",ha);C(this,"onQuality",null);C(this,"resizeObserver",null);C(this,"intersectionObserver",null);C(this,"containerVisible",!0);C(this,"disposed",!1);C(this,"onResize",()=>{var i,s;if(this.disposed)return;const[e,t]=this.dims();this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),(i=this.composer)==null||i.setSize(e,t),(s=this.overlayPass)==null||s.uniforms.uResolution.value.set(e,t),this.requestRenderBurst()});C(this,"onInteraction",()=>{this.requestRenderBurst()});C(this,"onVisibilityChange",()=>{document.hidden||this.resetFrameClock()});this.container=e;const[i,s]=this.dims();this.renderer=new Q0({antialias:!0,powerPreference:"high-performance"}),this.renderer.info.autoReset=!1,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,rh[t].dpr)),this.renderer.setSize(i,s),this.renderer.toneMapping=bc,this.initializeGpuTimer(),e.appendChild(this.renderer.domElement),this.scene.background=new Be(sh),this.scene.fog=new Lc(sh,ha),this.camera=new tn(50,i/s,.1,2e3),this.controls=new PE(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.maxPolarAngle=Math.PI/2-.02,this.controls.minDistance=8,this.controls.maxDistance=160,this.controls.addEventListener("start",this.onInteraction),this.renderer.domElement.addEventListener("pointerdown",this.onInteraction,{passive:!0}),this.renderer.domElement.addEventListener("wheel",this.onInteraction,{passive:!0}),window.addEventListener("resize",this.onResize),typeof ResizeObserver<"u"&&(this.resizeObserver=new ResizeObserver(this.onResize),this.resizeObserver.observe(e)),typeof IntersectionObserver<"u"&&(this.intersectionObserver=new IntersectionObserver(r=>{var a;const o=((a=r[0])==null?void 0:a.isIntersecting)??!0;o&&!this.containerVisible&&this.resetFrameClock(),this.containerVisible=o}),this.intersectionObserver.observe(e)),document.addEventListener("visibilitychange",this.onVisibilityChange),this.setQuality(t,!0),this.onResize()}setFogDensity(e){this.disposed||(this.requestedFogDensity=e??ha,this.applyFogDensity())}getQuality(){return this.quality}getPerformanceStats(){var a,c;this.pollGpuTimers();const e=fa(this.frameIntervals),t=fa(this.cpuFrameTimes),i=fa(this.gpuFrameTimes),s=this.renderer.info.render,r=this.isBursting(performance.now())?"burst":"idle",o=(a=this.bloomPass)==null?void 0:a.brightBufferSize;return this.renderer.getDrawingBufferSize(this.drawingBufferSize),{quality:this.quality,renderCadence:r,targetFps:r==="idle"?10:this.quality==="low"?30:60,fps:e.average>0?1e3/e.average:0,frameMs:t.average,p95FrameMs:t.p95,frameIntervalMs:e.average,p95FrameIntervalMs:e.p95,gpuFrameMs:i.count?i.average:null,p95GpuFrameMs:i.count?i.p95:null,gpuTimingSupported:this.gpuTimer!==null,drawCalls:s.calls,triangles:s.triangles,points:s.points,lines:s.lines,geometries:this.renderer.info.memory.geometries,textures:this.renderer.info.memory.textures,drawingBufferWidth:this.drawingBufferSize.x,drawingBufferHeight:this.drawingBufferSize.y,pixelRatio:this.renderer.getPixelRatio(),holoLuminanceGain:this.holoLuminance.value,postProcessing:this.composer!==null,bloomResolutionScale:((c=this.bloomPass)==null?void 0:c.resolutionScale)??null,bloomBufferWidth:(o==null?void 0:o.width)??0,bloomBufferHeight:(o==null?void 0:o.height)??0}}onQualityChange(e){this.disposed||(this.onQuality=e)}requestRenderBurst(e=ah){this.disposed||(this.burstUntil=Math.max(this.burstUntil,performance.now()+Math.max(0,e)),this.lastAnimationFrameAt=Number.NEGATIVE_INFINITY)}setActivityProbe(e){this.disposed||(this.activityProbe=e,e!=null&&e()&&this.requestRenderBurst())}setQuality(e,t=!1){var s;if(this.disposed)return;this.quality=e,t||(this.autoQuality=!1);const i=rh[e];this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,i.dpr)),this.holoLuminance.value=i.holoGain,e==="low"?this.disposeComposer():(this.ensureComposer(),this.composer.setPixelRatio(this.renderer.getPixelRatio()),this.bloomPass.enabled=i.bloom>0,this.bloomPass.strength=i.bloom,this.overlayPass.enabled=i.overlay),this.lastAnimationFrameAt=Number.NEGATIVE_INFINITY,this.requestRenderBurst(),this.applyFogDensity(),this.onResize(),(s=this.onQuality)==null||s.call(this,e,this.autoQuality)}get domElement(){return this.renderer.domElement}getHoloLuminanceUniform(){return this.holoLuminance}registerUpdate(e){return this.disposed?()=>{}:(this.updates.add(e),()=>this.updates.delete(e))}start(){this.disposed||this.renderer.setAnimationLoop(e=>{if(!this.shouldRender())return;const t=this.isBursting(e)?this.quality==="low"?iw:0:sw;e-this.lastAnimationFrameAt<t||(this.lastAnimationFrameAt=e,this.tick())})}stop(){this.disposed||(this.renderer.setAnimationLoop(null),this.lastAnimationFrameAt=Number.NEGATIVE_INFINITY)}renderOnce(){this.disposed||this.tick(!0)}dispose(){var e,t;this.disposed||(this.stop(),this.disposed=!0,window.removeEventListener("resize",this.onResize),(e=this.resizeObserver)==null||e.disconnect(),this.resizeObserver=null,(t=this.intersectionObserver)==null||t.disconnect(),this.intersectionObserver=null,document.removeEventListener("visibilitychange",this.onVisibilityChange),this.controls.removeEventListener("start",this.onInteraction),this.renderer.domElement.removeEventListener("pointerdown",this.onInteraction),this.renderer.domElement.removeEventListener("wheel",this.onInteraction),this.clock.stop(),this.updates.clear(),this.controls.dispose(),this.disposeComposer(),this.disposeGpuTimer(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.onQuality=null,this.frameAccum=0,this.frameCount=0,this.frameIntervals=[],this.cpuFrameTimes=[],this.gpuFrameTimes=[],this.lastAnimationFrameAt=Number.NEGATIVE_INFINITY,this.activityProbe=null)}tick(e=!1){var o;if(this.disposed||!e&&!this.shouldRender())return;const t=performance.now(),i=this.clock.getDelta(),s=this.clock.elapsedTime;for(const a of this.updates)a(i,s);this.controls.update(i),this.renderer.info.reset(),this.beginGpuTimer(),(o=this.overlayPass)!=null&&o.enabled&&(this.overlayPass.uniforms.uTime.value=s),this.composer?this.composer.render():(this.renderer.setRenderTarget(null),this.renderer.render(this.scene,this.camera)),this.endGpuTimer(),this.pollGpuTimers();const r=performance.now()-t;this.monitorFrame(r),this.recordFrameMetrics(i,r)}monitorFrame(e){if(!this.autoQuality||this.quality==="low"||(this.frameAccum+=e,++this.frameCount<nw))return;const t=this.frameAccum/this.frameCount;if(this.frameAccum=0,this.frameCount=0,t>tw){const i=oh[oh.indexOf(this.quality)+1];i&&this.setQuality(i,!0)}}dims(){return[this.container.clientWidth||window.innerWidth,this.container.clientHeight||window.innerHeight]}shouldRender(){return!document.hidden&&this.containerVisible}resetFrameClock(){this.disposed||(this.clock.stop(),this.clock.start(),this.lastAnimationFrameAt=Number.NEGATIVE_INFINITY,this.requestRenderBurst())}isBursting(e){var t;return e<this.burstUntil||(((t=this.activityProbe)==null?void 0:t.call(this))??!1)}ensureComposer(){if(this.composer)return;const[e,t]=this.dims(),i=new YE(this.renderer);i.setPixelRatio(this.renderer.getPixelRatio()),i.addPass(new qE(this.scene,this.camera));const s=new ew(new te(e,t),rw,.5,.45,.2);i.addPass(s);const r=new bf(JE);i.addPass(r),i.addPass(new KE),this.composer=i,this.bloomPass=s,this.overlayPass=r}disposeComposer(){if(this.composer){for(const e of this.composer.passes)e.dispose();this.composer.passes.length=0,this.composer.dispose(),this.composer=null,this.bloomPass=null,this.overlayPass=null}}applyFogDensity(){this.scene.fog.density=this.quality==="low"?0:this.requestedFogDensity}initializeGpuTimer(){const e=this.renderer.getContext();if(!(e instanceof WebGL2RenderingContext))return;const t=e.getExtension("EXT_disjoint_timer_query_webgl2");t&&(this.gpuTimer={gl:e,extension:t,active:null,pending:[]})}beginGpuTimer(){const e=this.gpuTimer;if(!e||e.active||e.pending.length>=4)return;const t=e.gl.createQuery();if(t)try{e.gl.beginQuery(e.extension.TIME_ELAPSED_EXT,t),e.active=t}catch{e.gl.deleteQuery(t),this.disposeGpuTimer()}}endGpuTimer(){const e=this.gpuTimer;if(e!=null&&e.active)try{e.gl.endQuery(e.extension.TIME_ELAPSED_EXT),e.pending.push(e.active),e.active=null}catch{this.disposeGpuTimer()}}pollGpuTimers(){const e=this.gpuTimer;if(!(!e||e.active)){if(e.gl.getParameter(e.extension.GPU_DISJOINT_EXT)){for(const t of e.pending.splice(0))e.gl.deleteQuery(t);return}for(;e.pending.length;){const t=e.pending[0];if(!e.gl.getQueryParameter(t,e.gl.QUERY_RESULT_AVAILABLE))break;const i=e.gl.getQueryParameter(t,e.gl.QUERY_RESULT);e.pending.shift(),e.gl.deleteQuery(t);const s=i/1e6;Number.isFinite(s)&&s>=0&&s<1e3&&da(this.gpuFrameTimes,s)}}}disposeGpuTimer(){const e=this.gpuTimer;if(e){if(e.active){try{e.gl.endQuery(e.extension.TIME_ELAPSED_EXT)}catch{}e.gl.deleteQuery(e.active)}for(const t of e.pending)e.gl.deleteQuery(t);this.gpuTimer=null}}recordFrameMetrics(e,t){const i=e*1e3;Number.isFinite(i)&&i>0&&i<1e3&&da(this.frameIntervals,i),Number.isFinite(t)&&t>=0&&t<1e3&&da(this.cpuFrameTimes,t)}}function da(n,e){n.push(e),n.length>240&&n.shift()}function fa(n){if(!n.length)return{average:0,p95:0,count:0};const e=n.reduce((i,s)=>i+s,0)/n.length,t=[...n].sort((i,s)=>i-s);return{average:e,p95:t[Math.min(t.length-1,Math.floor(t.length*.95))],count:n.length}}const Ns=new Be("#36e6ff");function Qc(n=Ns,e=new ds(1)){return new Mt({transparent:!0,depthWrite:!1,blending:Nn,side:sn,uniforms:{uColor:{value:n.clone()},uBase:{value:.015},uFresnelPower:{value:2.6},uIntensity:{value:.35},uOpacity:{value:1},uLodVisible:{value:1},uTint:{value:n.clone()},uTintStrength:{value:0},uSunDir:{value:new I(0,1,0)},uSunStrength:{value:0},uLuminance:e},vertexShader:`
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
    `})}function aw(n,e=Ns,t=new ds(1)){return new Mt({transparent:!0,depthWrite:!1,blending:Nn,uniforms:{uColor:{value:e.clone()},uOpacity:{value:1},uScaleY:{value:1},uBaseY:{value:n},uLuminance:t},vertexShader:`
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
    `})}function Ht(n){n.updateMatrix(),n.matrixAutoUpdate=!1}const Xs=.18,cw=.18,lw=.45,ch=30;function uw(n,e=new ds(1)){const t=new pn;t.name=`building:${n.id}`;const i=new Map,s=new Map;for(const c of n.floors){const l=dw(c,n.id,s,e);t.add(l),i.set(c.id,l)}const o=new Xt().setFromObject(t).getCenter(new I);t.position.set(-o.x,0,-o.z),Ht(t);const a=new pn;return a.name="buildingRoot",a.userData.entityRef={type:"building",id:n.id},a.add(t),Ht(a),{root:a,floorGroups:i}}class hw{constructor(e,t,i,s){this.mesh=e,this.instanceId=t,this.anchor=i,this.attributes=s}getColor(){return new Be(this.attributes.color.getX(this.instanceId),this.attributes.color.getY(this.instanceId),this.attributes.color.getZ(this.instanceId))}setColor(e){this.attributes.color.setXYZ(this.instanceId,e.r,e.g,e.b),this.attributes.color.needsUpdate=!0}getIntensity(){return this.attributes.intensity.getX(this.instanceId)}setIntensity(e){this.setScalar(this.attributes.intensity,e)}getBase(){return this.attributes.base.getX(this.instanceId)}setBase(e){this.setScalar(this.attributes.base,e)}getOpacity(){return this.attributes.opacity.getX(this.instanceId)}setOpacity(e){this.setScalar(this.attributes.opacity,e)}setTint(e,t=e?.8:0){this.setScalar(this.attributes.tintStrength,e?t:0),e&&(this.attributes.tint.setXYZ(this.instanceId,e.r,e.g,e.b),this.attributes.tint.needsUpdate=!0)}setScaleY(e){this.anchor.scale.y=e,this.anchor.updateMatrix(),this.mesh.setMatrixAt(this.instanceId,this.anchor.matrix),this.mesh.instanceMatrix.needsUpdate=!0}getLodVisible(){return this.attributes.lodVisible.getX(this.instanceId)>.5}setLodVisible(e){this.setScalar(this.attributes.lodVisible,e?1:0)}setScalar(e,t){e.setX(this.instanceId,t),e.needsUpdate=!0}}class Ef{constructor(e,t){this.edge=e,this.roomId=t}getOpacity(){const e=this.edge.ranges.get(this.roomId);return e?this.edge.opacity.getX(e.start):0}setOpacity(e){const t=this.edge.ranges.get(this.roomId);if(t){for(let i=t.start;i<t.start+t.count;i++)this.edge.opacity.setX(i,e);this.edge.opacity.needsUpdate=!0}}setScaleY(e){this.edge.lines.material.uniforms.uScaleY.value=e}setVisible(e){this.edge.lines.visible=e}}function dw(n,e,t,i){const s=new pn;s.name=`floor:${n.id}`,s.position.y=n.elevation,s.userData.entityRef={type:"floor",id:n.id,buildingId:e},s.userData.baseElevation=n.elevation;const r=lh(n.outline,Xs),o=new It(r,Qc(void 0,i));o.userData.entityRef=s.userData.entityRef,Ht(o),s.add(o);const a=new Map;for(const u of n.zones)for(const h of u.rooms){const d=Math.max(.5,n.height-lw),[f,g]=h.footprint[0],v=h.footprint.map(([M,x])=>[M-f,x-g]),m=`${d}|${vw(v)}`;let p=t.get(m);if(!p){const M=lh(xw(v,cw),d);M.computeBoundingBox(),p={volume:M,edges:new xu(M,ch)},t.set(m,p)}const w=a.get(m)??[];w.push({room:h,originX:f,originY:g,cached:p,lodEligible:u.function==="guest"}),a.set(m,w)}const c=[...a.values()].flat(),l=mw(new xu(r,ch),c,i);Ht(l.lines),s.add(l.lines);for(const u of a.values())u.length===1?fw(s,u[0],e,l,i):pw(s,u,e,l,i);return s}function fw(n,e,t,i,s){const r=new It(e.cached.volume,Qc(void 0,s));r.position.set(e.originX,Xs,-e.originY),r.userData.entityRef=xc(e.room.id,t),r.userData.roomLodEligible=e.lodEligible,r.userData.roomEdges=i.lines,r.userData.roomEdgeVisual=new Ef(i,e.room.id),Ht(r),n.add(r)}function pw(n,e,t,i,s){const r=e[0].cached.volume.clone(),o=gw(r,e.length),a=new ix(r,Qc(void 0,s),e.length);a.name=`instancedRooms:${e.length}`,a.userData.instanceRoomRefs=e.map(c=>xc(c.room.id,t)),a.frustumCulled=!0,Ht(a),n.add(a);for(let c=0;c<e.length;c++){const l=e[c],u=new Ot;u.name=`room:${l.room.id}`,u.position.set(l.originX,Xs,-l.originY),u.userData.entityRef=xc(l.room.id,t),u.userData.roomLodEligible=l.lodEligible,u.userData.roomLocalBounds=l.cached.volume.boundingBox.clone(),u.userData.roomVisual=new hw(a,c,u,o),u.userData.roomEdges=i.lines,u.userData.roomEdgeVisual=new Ef(i,l.room.id),Ht(u),a.setMatrixAt(c,u.matrix),n.add(u)}a.instanceMatrix.needsUpdate=!0,a.computeBoundingSphere()}function mw(n,e,t){const i=n.attributes.position,s=e.reduce((g,v)=>g+v.cached.edges.attributes.position.count,0),r=i.count+s,o=new Float32Array(r*3),a=new Float32Array(r),c=new Float32Array(r),l=new Map;let u=0;for(let g=0;g<i.count;g++,u++)o[u*3]=i.getX(g),o[u*3+1]=i.getY(g),o[u*3+2]=i.getZ(g),a[u]=.55;for(const g of e){const v=g.cached.edges.attributes.position,m=u;for(let p=0;p<v.count;p++,u++)o[u*3]=v.getX(p)+g.originX,o[u*3+1]=v.getY(p)+Xs,o[u*3+2]=v.getZ(p)-g.originY,a[u]=.28,c[u]=1;l.set(g.room.id,{start:m,count:v.count})}const h=new Ft;h.setAttribute("position",new Pt(o,3));const d=new Pt(a,1);d.setUsage(to),h.setAttribute("edgeOpacity",d),h.setAttribute("edgeScalable",new Pt(c,1));const f=new Ps(h,aw(Xs,void 0,t));return f.name=`batchedFloorEdges:${e.length}`,{lines:f,opacity:d,ranges:l}}function gw(n,e){const t=new Cn(new Float32Array(e*3),3),i=new Cn(new Float32Array(e),1),s=new Cn(new Float32Array(e),1),r=new Cn(new Float32Array(e*3),3),o=new Cn(new Float32Array(e),1),a=new Cn(new Float32Array(e),1),c=new Cn(new Float32Array(e),1),l=new Be("#36e6ff");for(let u=0;u<e;u++)t.setXYZ(u,l.r,l.g,l.b),i.setX(u,.015),s.setX(u,.35),r.setXYZ(u,l.r,l.g,l.b),o.setX(u,0),a.setX(u,1),c.setX(u,1);return n.setAttribute("instanceHoloColor",t),n.setAttribute("instanceHoloBase",i),n.setAttribute("instanceHoloIntensity",s),n.setAttribute("instanceHoloTint",r),n.setAttribute("instanceHoloTintStrength",o),n.setAttribute("instanceHoloOpacity",a),n.setAttribute("instanceHoloLodVisible",c),{color:t,base:i,intensity:s,tint:r,tintStrength:o,opacity:a,lodVisible:c}}function xc(n,e){return{type:"room",id:n,buildingId:e}}function vw(n){return n.map(([e,t])=>`${e},${t}`).join(";")}function _w(n){const e=new _d;e.moveTo(n[0][0],n[0][1]);for(let t=1;t<n.length;t++)e.lineTo(n[t][0],n[t][1]);return e.closePath(),e}function lh(n,e){const t=new kc(_w(n),{depth:e,bevelEnabled:!1});return t.rotateX(-Math.PI/2),t}function xw(n,e){let t=0,i=0;for(const[s,r]of n)t+=s,i+=r;return t/=n.length,i/=n.length,n.map(([s,r])=>{const o=s-t,a=r-i,c=Math.hypot(o,a)||1,l=Math.min(e,c*.4);return[s-o/c*l,r-a/c*l]})}class yw{constructor(e){C(this,"group",new pn);C(this,"spinners",[]);this.group.name="pedestal",Ht(this.group);const t=[{inner:.985,outer:1,arc:Math.PI*2,speed:0,opacity:.3},{inner:1.1,outer:1.115,arc:Math.PI*1.4,speed:.25,opacity:.22},{inner:1.24,outer:1.25,arc:Math.PI*.5,speed:-.4,opacity:.2}];for(const r of t){const o=new Bc(e*r.inner,e*r.outer,160,1,0,r.arc),a=new xo({color:Ns,transparent:!0,opacity:r.opacity,side:sn,blending:Nn,depthWrite:!1}),c=new It(o,a);c.rotation.x=-Math.PI/2,c.position.y=.03,r.speed===0&&Ht(c),this.group.add(c),this.spinners.push({mesh:c,speed:r.speed,baseOpacity:r.opacity})}const i=new Bx(e*.95,12,5,128,Ns,Ns),s=i.material;s.transparent=!0,s.opacity=.06,s.blending=Nn,s.depthWrite=!1,i.position.y=.01,Ht(i),this.group.add(i)}update(e,t){for(const i of this.spinners)i.mesh.rotation.z+=i.speed*e,i.mesh.material.opacity=i.baseOpacity*(.75+.25*Math.sin(t*1.6+i.speed*10))}}function wf(n=64){const e=document.createElement("canvas");e.width=e.height=n;const t=e.getContext("2d"),i=t.createRadialGradient(n/2,n/2,0,n/2,n/2,n/2);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.4,"rgba(255,255,255,0.5)"),i.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=i,t.fillRect(0,0,n,n);const s=new rx(e);return s.needsUpdate=!0,s}const uh=-9999;class Sw{constructor(e,t){C(this,"group",new pn);C(this,"rooms",[]);C(this,"points");C(this,"positions");C(this,"tmp",new I);C(this,"dirty",!0);C(this,"transformRevision",-1);C(this,"offControlChange");this.sceneIndex=e,this.controls=t,this.group.name="controlLayer",Ht(this.group);for(const o of t.list()){if(!o.kinds.includes("light"))continue;const a=e.room(o.roomId);if(!a)continue;const c=a.localBounds,l=c.getCenter(new I);this.rooms.push({roomId:o.roomId,mesh:a.mesh,localTop:new I(l.x,c.max.y*.85,l.z)})}this.positions=new Float32Array(this.rooms.length*3).fill(uh);const i=new Ft,s=new Pt(this.positions,3);s.setUsage(to),i.setAttribute("position",s);const r=new Uc({size:2.6,map:wf(),color:new Be("#ffd9a0"),transparent:!0,opacity:.85,blending:Nn,depthWrite:!1,sizeAttenuation:!0});this.points=new fd(i,r),this.points.frustumCulled=!1,Ht(this.points),this.group.add(this.points),this.offControlChange=t.onChange(()=>{this.dirty=!0})}update(){var i;const e=this.transformRevision!==this.sceneIndex.transformRevision;if(!this.dirty&&!e)return;const t=this.points.geometry.attributes.position;for(let s=0;s<this.rooms.length;s++){const r=this.rooms[s];(i=this.controls.get(r.roomId))!=null&&i.state.light?(r.mesh.localToWorld(this.tmp.copy(r.localTop)),this.positions[s*3]=this.tmp.x,this.positions[s*3+1]=this.tmp.y,this.positions[s*3+2]=this.tmp.z):this.positions[s*3+1]=uh}t.needsUpdate=!0,this.dirty=!1,this.transformRevision=this.sceneIndex.transformRevision}dispose(){this.offControlChange()}}const hh=-9999,Mw=new Be("#ffb020"),bw=new Be("#ff2b3b");class Ew{constructor(e,t){C(this,"group",new pn);C(this,"rooms",[]);C(this,"points");C(this,"positions");C(this,"colors");C(this,"tmp",new I);C(this,"transformRevision",-1);C(this,"alarmRevision",-1);C(this,"hasCritical",!1);this.sceneIndex=e,this.alarms=t,this.group.name="alarmLayer",Ht(this.group);for(const a of e.rooms){const c=a.localBounds,l=c.getCenter(new I);this.rooms.push({roomId:a.id,mesh:a.mesh,localTop:new I(l.x,c.max.y*1.15,l.z)})}this.positions=new Float32Array(this.rooms.length*3).fill(hh),this.colors=new Float32Array(this.rooms.length*3);const i=new Ft,s=new Pt(this.positions,3),r=new Pt(this.colors,3);s.setUsage(to),r.setUsage(to),i.setAttribute("position",s),i.setAttribute("color",r);const o=new Uc({size:5,map:wf(),vertexColors:!0,transparent:!0,opacity:.9,blending:Nn,depthWrite:!1,sizeAttenuation:!0});this.points=new fd(i,o),this.points.frustumCulled=!1,Ht(this.points),this.group.add(this.points)}update(e){const t=this.transformRevision!==this.sceneIndex.transformRevision,i=this.alarmRevision!==this.alarms.revision;if(!t&&!i){this.pulse(e);return}const s=this.alarms.alarmingRooms(),r=this.points.geometry.attributes.position,o=this.points.geometry.attributes.color;let a=!1;for(let c=0;c<this.rooms.length;c++){const l=this.rooms[c],u=s.get(l.roomId);if(!u){this.positions[c*3+1]=hh;continue}l.mesh.localToWorld(this.tmp.copy(l.localTop)),this.positions[c*3]=this.tmp.x,this.positions[c*3+1]=this.tmp.y,this.positions[c*3+2]=this.tmp.z;const h=u==="critical"?bw:Mw;this.colors[c*3]=h.r,this.colors[c*3+1]=h.g,this.colors[c*3+2]=h.b,u==="critical"&&(a=!0)}r.needsUpdate=!0,o.needsUpdate=!0,this.transformRevision=this.sceneIndex.transformRevision,this.alarmRevision=this.alarms.revision,this.hasCritical=a,this.pulse(e)}pulse(e){const t=this.hasCritical?7:3.5;this.points.material.opacity=.45+.45*Math.abs(Math.sin(e*t))}}const ww={easeInOutCubic:n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2};class Tw{constructor(){C(this,"active",new Set);C(this,"now",performance.now())}get hasActive(){return this.active.size>0}run(e,t,i=ww.easeInOutCubic){let s;const r=new Promise(a=>s=a),o={start:this.now,duration:e,easing:i,onUpdate:t,resolve:s};return this.active.add(o),{done:r,cancel:()=>{this.active.delete(o)&&s("cancelled")}}}update(e){this.now=e;for(const t of this.active){const i=Math.min(1,(e-t.start)/t.duration);t.onUpdate(t.easing(i)),i>=1&&(this.active.delete(t),t.resolve("completed"))}}cancelAll(){for(const e of this.active)this.active.delete(e),e.resolve("cancelled")}}const Rw={orbit:{azimuthDeg:35,elevationDeg:22},front:{azimuthDeg:0,elevationDeg:10},top:{azimuthDeg:0,elevationDeg:85},isometric:{azimuthDeg:45,elevationDeg:32}},Aw=1e4,dh=1200;class Cw{constructor(e,t,i){C(this,"currentFlight",null);C(this,"autoRotateWanted",!1);C(this,"resumeTimer");C(this,"savedPose",null);C(this,"savedMinDistance",0);C(this,"disposed",!1);C(this,"onControlsStart",()=>{this.disposed||(this.interruptFlight(),this.autoRotateWanted&&(this.controls.autoRotate=!1,this.clearResumeTimer(),this.resumeTimer=window.setTimeout(()=>{this.resumeTimer=void 0,!this.disposed&&this.autoRotateWanted&&(this.controls.autoRotate=!0)},Aw)))});this.camera=e,this.controls=t,this.tween=i,this.controls.addEventListener("start",this.onControlsStart)}get autoRotate(){return this.autoRotateWanted}setAutoRotate(e,t=.6){this.disposed||(this.autoRotateWanted=e,this.controls.autoRotate=e,this.controls.autoRotateSpeed=t,this.clearResumeTimer())}setView(e,t){const i=Rw[e];return this.orbitTo(i.azimuthDeg,i.elevationDeg,t)}async orbitTo(e,t,i={}){if(this.disposed)return"superseded";this.interruptFlight();const s=this.controls.target.clone(),r=new dn().setFromVector3(this.camera.position.clone().sub(s)),o=new dn(i.radius??r.radius,_t.degToRad(90-t),_t.degToRad(e)),a=_t.euclideanModulo(o.theta-r.theta+Math.PI,Math.PI*2)-Math.PI,c=this.autoRotateWanted;this.controls.autoRotate=!1;const l=new dn,u=this.tween.run(i.durationMs??dh,d=>{l.set(_t.lerp(r.radius,o.radius,d),_t.lerp(r.phi,o.phi,d),r.theta+a*d),l.makeSafe(),this.camera.position.setFromSpherical(l).add(s),this.camera.lookAt(s)});this.currentFlight=u;const h=await u.done;return this.currentFlight===u&&(this.currentFlight=null),h==="completed"&&c&&(this.controls.autoRotate=!0),h==="completed"?"completed":"superseded"}orbitSpherical(){const e=new dn().setFromVector3(this.camera.position.clone().sub(this.controls.target));return{radius:e.radius,azimuthDeg:_t.radToDeg(e.theta),elevationDeg:90-_t.radToDeg(e.phi)}}async flyTo(e,t,i,s,r={}){if(this.disposed)return"superseded";this.interruptFlight();const o=this.controls.target.clone(),a=new dn().setFromVector3(this.camera.position.clone().sub(o)),c=new dn(s,_t.degToRad(90-i),_t.degToRad(t)),l=_t.euclideanModulo(c.theta-a.theta+Math.PI,Math.PI*2)-Math.PI,u=this.autoRotateWanted;this.controls.autoRotate=!1;const h=new I,d=new dn,f=this.tween.run(r.durationMs??dh,v=>{h.lerpVectors(o,e,v),d.set(_t.lerp(a.radius,c.radius,v),_t.lerp(a.phi,c.phi,v),a.theta+l*v),d.makeSafe(),this.controls.target.copy(h),this.camera.position.setFromSpherical(d).add(h),this.camera.lookAt(h)});this.currentFlight=f;const g=await f.done;return this.currentFlight===f&&(this.currentFlight=null),g==="completed"&&u&&(this.controls.autoRotate=!0),g==="completed"?"completed":"superseded"}zoomToBox(e,t={}){const i=e.getCenter(new I),s=.5*e.getSize(new I).length(),r=_t.degToRad(this.camera.fov),o=s/Math.sin(r/2)*1.3,a=this.orbitSpherical().azimuthDeg;return this.flyTo(i,a,26,Math.max(o,this.controls.minDistance+1),t)}get roomFocused(){return this.savedPose!==null}enterRoom(e,t={}){if(this.disposed)return Promise.resolve("superseded");this.savedPose||(this.savedPose={target:this.controls.target.clone(),position:this.camera.position.clone()},this.savedMinDistance=this.controls.minDistance);const i=e.getCenter(new I),s=e.getSize(new I),r=Math.max(2,Math.max(s.x,s.z)*.5+1.5);this.controls.minDistance=Math.min(this.savedMinDistance,r*.5);const o=this.orbitSpherical().azimuthDeg;return this.flyTo(i,o,4,r,{durationMs:t.durationMs??1900})}exitRoom(e={}){if(this.disposed)return Promise.resolve("superseded");if(!this.savedPose)return Promise.resolve("completed");const t=this.savedPose;this.savedPose=null,this.controls.minDistance=this.savedMinDistance,this.savedMinDistance=0;const i=new dn().setFromVector3(t.position.clone().sub(t.target));return this.flyTo(t.target,_t.radToDeg(i.theta),90-_t.radToDeg(i.phi),i.radius,{durationMs:e.durationMs??1500})}abandonRoomFocus(){this.savedPose&&(this.savedPose=null,this.controls.minDistance=this.savedMinDistance,this.savedMinDistance=0)}dispose(){this.disposed||(this.disposed=!0,this.controls.removeEventListener("start",this.onControlsStart),this.clearResumeTimer(),this.interruptFlight(),this.controls.autoRotate=!1,this.controls.enabled=!1,this.abandonRoomFocus(),this.autoRotateWanted=!1)}clearResumeTimer(){window.clearTimeout(this.resumeTimer),this.resumeTimer=void 0}interruptFlight(){var e;(e=this.currentFlight)==null||e.cancel(),this.currentFlight=null}}class Iw{constructor(e){C(this,"modes",new Map);C(this,"active",null);C(this,"activeId",null);C(this,"updateDisposers",[]);C(this,"queue",Promise.resolve());C(this,"disposed",!1);C(this,"rooms");C(this,"floors");this.deps=e,this.rooms=e.sceneIndex.rooms.map(t=>this.buildModeRoom(t)),this.floors=e.sceneIndex.floors.map(t=>this.buildModeFloor(t)),e.timeline.setSink(t=>{var i,s;return(s=(i=this.active)==null?void 0:i.onData)==null?void 0:s.call(i,t)})}register(e){this.modes.set(e.descriptor.id,{descriptor:pa(e.descriptor),instance:e})}registerLazy(e,t){this.modes.set(e.id,{descriptor:pa(e),loader:t})}list(){return[...this.modes.values()].map(e=>pa(e.descriptor))}getActiveId(){return this.activeId}getActiveMode(){return this.active??void 0}setMode(e){if(this.disposed)return Promise.reject(new Error("ModeManager has been disposed."));if(!this.modes.has(e))return Promise.reject(new Error(`Unknown mode '${e}'`));const t=this.queue.then(()=>this.switchTo(e));return this.queue=t.catch(()=>{}),t}async dispose(){if(this.disposed)return;this.disposed=!0,this.deps.timeline.setSink(()=>{}),await this.queue.catch(()=>{});const e=this.active;this.active=null,this.activeId=null;for(const t of this.updateDisposers)t();this.updateDisposers=[],this.deps.overlay.clear(),this.deps.emitLegend(null),this.setSun(null),this.deps.setFog(null),await(e==null?void 0:e.exit())}async switchTo(e){if(this.disposed||this.activeId===e)return;const t=this.modes.get(e);if(!t)throw new Error(`Unknown mode '${e}'`);const i=await this.resolveMode(t);if(this.disposed||this.activeId===e)return;this.active&&await this.active.exit();for(const r of this.updateDisposers)r();this.updateDisposers=[],this.deps.overlay.clear(),this.deps.emitLegend(null),this.setSun(null),this.deps.setFog(null),this.active=i,this.activeId=e;const s={building:this.deps.building,overlay:this.deps.overlay,cameraDirector:this.deps.cameraDirector,rooms:this.rooms,floors:this.floors,registerUpdate:r=>{this.disposed||this.updateDisposers.push(this.deps.registerSceneUpdate(r))},getTransformRevision:()=>this.deps.sceneIndex.transformRevision,setLegend:r=>this.deps.emitLegend(r),setFog:r=>this.deps.setFog(r),setSun:(r,o=1)=>this.setSun(r,o)};if(await i.enter(s),this.disposed){await i.exit(),this.active===i&&(this.active=null,this.activeId=null);return}this.deps.timeline.refresh()}resolveMode(e){return e.instance?Promise.resolve(e.instance):e.loading?e.loading:e.loader?(e.loading=e.loader().then(t=>{if(t.descriptor.id!==e.descriptor.id)throw new Error(`Mode loader for '${e.descriptor.id}' returned '${t.descriptor.id}'.`);return e.instance=t,t}).catch(t=>{throw e.loading=void 0,t}),e.loading):Promise.reject(new Error(`Mode '${e.descriptor.id}' has no loader.`))}setSun(e,t=0){for(const i of this.deps.sceneIndex.holoMaterials())i.uniforms.uSunStrength.value=e?t:0,e&&i.uniforms.uSunDir.value.copy(e).normalize()}buildModeRoom(e){const t=this.deps.buildingIndex.info({type:"room",id:e.id}),i=e.localBounds.getCenter(new I);return{id:e.id,ref:{type:"room",id:e.id},floorId:e.floorId,zoneFunction:t.zoneFunction??"guest",name:t.name,sensors:t.sensors,worldCenter:(s=new I)=>e.mesh.localToWorld(s.copy(i)),setTint:(s,r=s?.8:0)=>{e.visual.setTint(s,r)}}}buildModeFloor(e){const t=new Xt().setFromObject(e.group);return{id:e.id,index:e.index,baseElevation:e.baseElevation,group:e.group,center:t.getCenter(new I),size:t.getSize(new I)}}}function pa(n){return{...n,channels:[...n.channels]}}class Pw{constructor(e,t){C(this,"floors");C(this,"floorById",new Map);C(this,"roomById",new Map);C(this,"transformRevision_",0);C(this,"roomLod","rooms");C(this,"roomLodExceptions",new Set);this.buildingRoot=t,this.floors=[...e.entries()].map(([i,s])=>this.buildFloor(i,s)).sort((i,s)=>i.baseElevation-s.baseElevation).map((i,s)=>({...i,index:s}));for(const i of this.floors)this.floorById.set(i.id,i),this.indexRooms(i)}get rooms(){return[...this.roomById.values()]}get transformRevision(){return this.transformRevision_}markTransformsChanged(){this.transformRevision_+=1}setLowDetail(e){var t;for(const i of this.roomById.values())(t=i.edgeVisual)==null||t.setVisible(!e);for(const i of this.holoMaterials()){const s=e?Ln:sn;i.side!==s&&(i.side=s,i.needsUpdate=!0)}}setRoomLod(e){e!==this.roomLod&&(this.roomLod=e,this.applyRoomLod())}getRoomLod(){return this.roomLod}setRoomLodExceptions(e){const t=new Set(e);Lw(t,this.roomLodExceptions)||(this.roomLodExceptions=t,this.applyRoomLod())}getRoomLodStats(){let e=0,t=0;for(const i of this.roomById.values())i.lodEligible&&(e+=1,i.visual.getLodVisible()||(t+=1));return{mode:this.roomLod,eligibleRooms:e,hiddenRooms:t}}getTransformStats(){let e=0,t=0;return this.buildingRoot.traverse(i=>{e+=1,i.matrixAutoUpdate||(t+=1)}),{total:e,frozen:t,dynamic:e-t}}holoMaterials(){const e=[];for(const t of this.floors)for(const i of t.ghosts)i.holo&&e.push(i.holo);return e}floor(e){return this.floorById.get(e)}room(e){return this.roomById.get(e)}boxOf(e){if(e==="building")return new Xt().setFromObject(this.buildingRoot);if(e.type==="floor"){const t=this.floorById.get(e.id);if(t)return new Xt().setFromObject(t.group)}if(e.type==="room"){const t=this.roomById.get(e.id);if(t)return t.mesh.updateWorldMatrix(!0,!1),t.localBounds.clone().applyMatrix4(t.mesh.matrixWorld)}return new Xt().setFromObject(this.buildingRoot)}buildFloor(e,t){const i=t.userData.baseElevation??t.position.y,s=[];return t.traverse(r=>{r instanceof It&&r.material instanceof Mt?s.push({holo:r.material,baseOpacity:1}):r instanceof Ps&&r.material instanceof Nc?s.push({line:r.material,baseOpacity:r.material.opacity}):r instanceof Ps&&r.material instanceof Mt&&s.push({opacityShader:r.material,baseOpacity:1})}),{id:e,group:t,index:0,baseElevation:i,ghosts:s}}indexRooms(e){const t=new Map,i=new Map;e.group.traverse(s=>{const r=s.userData.entityRef;if((r==null?void 0:r.type)!=="room")return;const o=s.userData.roomVisual,a=s.userData.roomLocalBounds;if(o&&a)t.set(r.id,{id:r.id,floorId:e.id,mesh:s,localBounds:a,visual:o,lodEligible:!!s.userData.roomLodEligible,edges:s.userData.roomEdges,edgeVisual:s.userData.roomEdgeVisual});else if(s instanceof It){const c=s.geometry;c.boundingBox||c.computeBoundingBox(),t.set(r.id,{id:r.id,floorId:e.id,mesh:s,localBounds:c.boundingBox.clone(),visual:Dw(s),lodEligible:!!s.userData.roomLodEligible,edges:s.userData.roomEdges,edgeVisual:s.userData.roomEdgeVisual})}else s instanceof Ps&&i.set(r.id,s)});for(const[s,r]of t){const o=i.get(s);o&&(r.edges=o,r.edgeVisual=Fw(o)),this.roomById.set(s,r)}}applyRoomLod(){for(const e of this.roomById.values()){const t=this.roomLod==="rooms"||!e.lodEligible||this.roomLodExceptions.has(e.id);e.visual.setLodVisible(t)}}}function Fw(n){const e=n.material;return{getOpacity:()=>e.opacity,setOpacity:t=>{e.opacity=t},setScaleY:t=>{n.scale.y=t,n.matrixAutoUpdate||n.updateMatrix()},setVisible:t=>{n.visible=t}}}function Dw(n){const e=n.material;return{getColor:()=>e.uniforms.uColor.value.clone(),setColor:t=>e.uniforms.uColor.value.copy(t),getIntensity:()=>e.uniforms.uIntensity.value,setIntensity:t=>{e.uniforms.uIntensity.value=t},getBase:()=>e.uniforms.uBase.value,setBase:t=>{e.uniforms.uBase.value=t},getOpacity:()=>e.uniforms.uOpacity.value,setOpacity:t=>{e.uniforms.uOpacity.value=t},setTint:(t,i=t?.8:0)=>{e.uniforms.uTintStrength.value=t?i:0,t&&e.uniforms.uTint.value.copy(t)},setScaleY:t=>{n.scale.y=t,n.matrixAutoUpdate||n.updateMatrix()},getLodVisible:()=>e.uniforms.uLodVisible.value>.5,setLodVisible:t=>{e.uniforms.uLodVisible.value=t?1:0}}}function Lw(n,e){if(n.size!==e.size)return!1;for(const t of n)if(!e.has(t))return!1;return!0}const Es={outcome:"noop"},fh=5,ph=.07,Nw={"2d":.02,"2.5d":.3},Ur=1e3;class Uw{constructor(e,t,i,s){C(this,"state",{kind:"ASSEMBLED"});C(this,"inFlight",null);C(this,"viewChanged",null);C(this,"disposed",!1);C(this,"renderQuality","high");C(this,"floors");C(this,"rooms");C(this,"floorPosY");C(this,"floorOpacity");C(this,"roomScaleY");C(this,"H");C(this,"footprintDiag");C(this,"R0");this.sceneIndex=e,this.cameraDirector=t,this.tween=i,this.floors=e.floors,this.rooms=e.rooms,this.floorPosY=this.floors.map(o=>o.baseElevation),this.floorOpacity=this.floors.map(()=>1),this.roomScaleY=this.rooms.map(()=>1);const r=new Xt().setFromObject(s).getSize(new I);this.H=r.y,this.footprintDiag=Math.hypot(r.x,r.z),this.R0=this.footprintDiag*1.5}setViewChangedListener(e){this.viewChanged=e}getView(){return{...this.state}}setRenderQuality(e){this.renderQuality=e;for(let t=0;t<this.floors.length;t++)this.applyVisibility(this.floors[t],this.floorOpacity[t])}explode(e,t=Ur){return this.state.kind==="ISOLATED"||this.state.kind==="FLATTENED"||this.state.kind==="EXPLODED"&&this.state.factor===e?Promise.resolve(Es):this.run({kind:"EXPLODED",factor:e},t)}isolate(e,t=Ur){return this.state.kind==="ISOLATED"&&this.state.floorId===e?Promise.resolve(Es):this.run({kind:"ISOLATED",floorId:e},t)}flatten(e,t,i=Ur){return this.state.kind==="FLATTENED"&&this.state.floorId===e&&this.state.style===t?Promise.resolve(Es):this.run({kind:"FLATTENED",floorId:e,style:t},i)}reassemble(e=Ur){return this.state.kind==="ASSEMBLED"?Promise.resolve(Es):this.run({kind:"ASSEMBLED"},e)}dispose(){var e;this.disposed||(this.disposed=!0,(e=this.inFlight)==null||e.supersede(),this.inFlight=null,this.viewChanged=null)}run(e,t){var h,d;if(this.disposed)return Promise.resolve({outcome:"superseded"});(h=this.inFlight)==null||h.supersede();const i={posY:[...this.floorPosY],opacity:[...this.floorOpacity],scale:[...this.roomScaleY]},s=this.computeTargets(e);this.state=e,(d=this.viewChanged)==null||d.call(this,this.getView());let r=!1,o;const a=new Promise(f=>o=f),c=this.tween.run(t,f=>this.applyLerp(i,s,f)),l={supersede:()=>{}},u=f=>{r||(r=!0,this.inFlight===l&&(this.inFlight=null),o({outcome:f}))};return l.supersede=()=>{c.cancel(),u("superseded")},this.inFlight=l,c.done.then(f=>{f==="completed"&&u("completed")}),this.cameraDirector.flyTo(new I(0,s.camera.targetY,0),this.cameraDirector.orbitSpherical().azimuthDeg,s.camera.elevationDeg,s.camera.radius,{durationMs:t}),a}computeTargets(e){const t=this.floors.map(r=>r.baseElevation),i=this.floors.map(()=>1),s=this.rooms.map(()=>1);switch(e.kind){case"ASSEMBLED":break;case"EXPLODED":for(let r=0;r<this.floors.length;r++)t[r]=this.floors[r].baseElevation+r*fh*e.factor;break;case"ISOLATED":this.ghostOthers(e.floorId,i);break;case"FLATTENED":this.ghostOthers(e.floorId,i);for(let r=0;r<this.rooms.length;r++)this.rooms[r].floorId===e.floorId&&(s[r]=Nw[e.style]);break}return{posY:t,opacity:i,scale:s,camera:this.framingFor(e)}}ghostOthers(e,t){for(let i=0;i<this.floors.length;i++)this.floors[i].id!==e&&(t[i]=ph)}framingFor(e){const t=this.floors.length;switch(e.kind){case"ASSEMBLED":return{targetY:this.H*.45,elevationDeg:22,radius:this.R0};case"EXPLODED":return{targetY:(this.floors[t-1].baseElevation+(t-1)*fh*e.factor)*.5+this.H*.1,elevationDeg:18,radius:this.R0*(1+.5*e.factor)};case"ISOLATED":{const i=this.sceneIndex.floor(e.floorId);return{targetY:i?i.baseElevation+2:this.H*.45,elevationDeg:30,radius:this.footprintDiag*1.35}}case"FLATTENED":{const i=this.sceneIndex.floor(e.floorId);return{targetY:i?i.baseElevation:0,elevationDeg:88,radius:this.footprintDiag*1.25}}}}applyLerp(e,t,i){var s;for(let r=0;r<this.floors.length;r++){const o=_t.lerp(e.posY[r],t.posY[r],i);this.floorPosY[r]=o,this.floors[r].group.position.y=o;const a=_t.lerp(e.opacity[r],t.opacity[r],i);this.floorOpacity[r]=a,this.applyOpacity(this.floors[r],a)}for(let r=0;r<this.rooms.length;r++){const o=_t.lerp(e.scale[r],t.scale[r],i);this.roomScaleY[r]=o,this.rooms[r].visual.setScaleY(o),(s=this.rooms[r].edgeVisual)==null||s.setScaleY(o)}this.sceneIndex.markTransformsChanged()}applyOpacity(e,t){this.applyVisibility(e,t);for(const i of e.ghosts)i.holo?i.holo.uniforms.uOpacity.value=t:i.line?i.line.opacity=i.baseOpacity*t:i.opacityShader&&(i.opacityShader.uniforms.uOpacity.value=t)}applyVisibility(e,t){e.group.visible=!(this.renderQuality==="low"&&t<=ph)}}const Ow=new Be("#ff9a3c"),zw=1.6,kw=.06,Bw=.9;class Vw{constructor(e){C(this,"selected",null);C(this,"restore",null);this.sceneIndex=e}get current(){return this.selected?{...this.selected}:null}select(e){var c,l;this.clearHighlight();const t=this.sceneIndex.room(e.id);if(!t)return!1;const i=t.visual,s=i.getColor(),r=i.getIntensity(),o=i.getBase(),a=(c=t.edgeVisual)==null?void 0:c.getOpacity();return i.setColor(Ow),i.setIntensity(zw),i.setBase(kw),(l=t.edgeVisual)==null||l.setOpacity(Bw),this.restore=()=>{var u;i.setColor(s),i.setIntensity(r),i.setBase(o),a!==void 0&&((u=t.edgeVisual)==null||u.setOpacity(a))},this.selected={...e},!0}clear(){const e=this.selected!==null;return this.clearHighlight(),this.selected=null,e}clearHighlight(){var e;(e=this.restore)==null||e.call(this),this.restore=null}}const Hw=25;class Gw{constructor(e,t,i,s){C(this,"raycaster",new kx);C(this,"downX",0);C(this,"downY",0);C(this,"onPick");C(this,"disposed",!1);C(this,"onDown",e=>{this.disposed||(this.downX=e.clientX,this.downY=e.clientY)});C(this,"onUp",e=>{var s;if(this.disposed)return;const t=e.clientX-this.downX,i=e.clientY-this.downY;t*t+i*i>Hw||(s=this.onPick)==null||s.call(this,this.pickAtNdc(this.ndcFor(e.clientX,e.clientY)))});this.camera=e,this.dom=t,this.root=i,this.onPick=s,this.dom.addEventListener("pointerdown",this.onDown),this.dom.addEventListener("pointerup",this.onUp)}dispose(){this.disposed||(this.disposed=!0,this.dom.removeEventListener("pointerdown",this.onDown),this.dom.removeEventListener("pointerup",this.onUp),this.onPick=null)}pickAtNdc(e){if(this.disposed)return null;this.raycaster.setFromCamera(e,this.camera);for(const t of this.raycaster.intersectObject(this.root,!0)){const i=Ww(t.object,t.instanceId);if(i)return i}return null}ndcFor(e,t){const i=this.dom.getBoundingClientRect();return new te((e-i.left)/i.width*2-1,-((t-i.top)/i.height)*2+1)}}function Ww(n,e){if(e!==void 0){const i=n.userData.instanceRoomRefs,s=i==null?void 0:i[e];if((s==null?void 0:s.type)==="room")return{...s}}let t=n;for(;t;){const i=t.userData.entityRef;if(i&&i.type==="room")return i;t=t.parent}return null}function Tf(n){return typeof n.onFrame=="function"}function $w(n){return typeof n.sampleAsync=="function"}class Xw{constructor(e){C(this,"frames",[]);this.capacity=e}push(e){this.frames.push(e),this.frames.length>this.capacity&&this.frames.shift()}get size(){return this.frames.length}span(){return this.frames.length===0?null:{from:this.frames[0].time,to:this.frames[this.frames.length-1].time}}nearest(e){if(this.frames.length===0)return null;let t=0,i=this.frames.length-1;for(;t<i;){const o=t+i>>1;this.frames[o].time<e?t=o+1:i=o}const s=this.frames[t],r=this.frames[t-1];return r&&Math.abs(r.time-e)<=Math.abs(s.time-e)?r:s}}const Zw=6e4,Yw=1440,qw=6e4,Or=["temperature","humidity","lux","power","occupancy"],ma=250,jw=1e-6,Kw=250;class Jw{constructor(e,t=Date.now()){C(this,"mode","live");C(this,"playbackSpeed",1);C(this,"buffer",new Xw(Yw));C(this,"simTime");C(this,"lastRealMs",performance.now());C(this,"lastSampleRealMs",Number.NEGATIVE_INFINITY);C(this,"lastBufferedSim",0);C(this,"scrubTime",0);C(this,"sink",null);C(this,"frameListeners",new Set);C(this,"liveFrameListeners",new Set);C(this,"onChange",null);C(this,"pushProvider",null);C(this,"asyncProvider",null);C(this,"offPushFrame",null);C(this,"performanceSamples",[]);C(this,"pullInFlight",!1);C(this,"liveGeneration",0);C(this,"requestSerial",0);C(this,"disposed",!1);this.provider=e,this.simTime=t,Tf(e)?(this.pushProvider=e,this.offPushFrame=e.onFrame(i=>this.receiveLiveFrame(i)),e.connect()):$w(e)&&(this.asyncProvider=e)}setSink(e){this.sink=e}addFrameListener(e){return this.frameListeners.add(e),()=>this.frameListeners.delete(e)}addLiveFrameListener(e){return this.liveFrameListeners.add(e),()=>this.liveFrameListeners.delete(e)}deliver(e){var t;(t=this.sink)==null||t.call(this,e);for(const i of this.frameListeners)i(e)}setChangeListener(e){this.onChange=e}getState(){return{mode:this.mode,time:this.currentTime(),playbackSpeed:this.playbackSpeed}}getPerformanceStats(){var l,u;const e=performance.now();this.trimPerformanceSamples(e);const t=this.performanceSamples,i=t.length>1?Math.max(1e3,e-t[0].at):1e3,s=t.filter(h=>h.source!=="push").length,r=t.filter(h=>h.source==="worker").length,o=t.filter(h=>h.source==="push").length,a=t.reduce((h,d)=>h+d.readings,0),c=t.filter(h=>h.source!=="push");return{pullFrames:s,workerFrames:r,pushFrames:o,samplingMode:this.pushProvider?"push":((l=this.asyncProvider)==null?void 0:l.getExecutionMode())??"main",sampleInFlight:this.pullInFlight,samplesPerSecond:t.length*1e3/i,readingsPerSecond:a*1e3/i,averageSampleMs:c.length?c.reduce((h,d)=>h+d.sampleMs,0)/c.length:0,lastFrameReadings:((u=t.at(-1))==null?void 0:u.readings)??0}}currentTime(){return this.mode==="scrub"?this.scrubTime:this.simTime}setPlaybackSpeed(e){this.playbackSpeed=e,this.emit()}setTimeRange(e){this.liveGeneration+=1,e==="live"?(this.mode="live",this.lastRealMs=performance.now(),this.lastSampleRealMs=Number.NEGATIVE_INFINITY):(this.mode="scrub",this.scrubTime=Qw(e.to)),this.emit()}tick(e=performance.now()){if(this.mode==="live"){if(this.pushProvider)return;const t=Math.min(Math.max(0,e-this.lastRealMs),Kw);if(this.lastRealMs=e,this.simTime+=t/1e3*Zw*this.playbackSpeed,e-this.lastSampleRealMs<ma-jw||this.asyncProvider&&this.pullInFlight)return;this.advanceSampleDeadline(e);const i=performance.now();if(this.asyncProvider)this.sampleLiveAsync(this.asyncProvider,this.simTime,i);else{const s=this.provider.sample(Or,this.simTime);this.acceptLivePullFrame(s,"pull",performance.now()-i)}}}emit(){var t;const e=this.frameAt(this.currentTime());this.deliver(e),(t=this.onChange)==null||t.call(this,this.getState(),e)}frameAt(e){const t=this.buffer.span();if(this.mode==="scrub"&&t&&e>=t.from&&e<=t.to){const i=this.buffer.nearest(e);if(i)return i}return this.provider.sample(Or,e)}refresh(){this.emit()}currentFrame(){return this.frameAt(this.currentTime())}history(e,t=48){const i=this.currentTime(),s=i-e*36e5,r=Math.max(6e4,(i-s)/t);return this.provider.query(Or,{from:s,to:i},r)}bufferSpan(){return this.buffer.span()}dispose(){var e;this.disposed=!0,this.liveGeneration+=1,(e=this.offPushFrame)==null||e.call(this),this.offPushFrame=null,this.pushProvider=null,this.asyncProvider=null,this.pullInFlight=!1,this.performanceSamples=[],this.frameListeners.clear(),this.liveFrameListeners.clear(),this.sink=null,this.onChange=null}receiveLiveFrame(e){var t;if(this.recordPerformanceSample(e,"push",0),this.simTime=e.time,this.bufferFrame(e),this.mode==="live"){this.deliver(e);for(const i of this.liveFrameListeners)i(e);(t=this.onChange)==null||t.call(this,this.getState(),e)}}sampleLiveAsync(e,t,i){const s=this.liveGeneration,r=++this.requestSerial;this.pullInFlight=!0,e.sampleAsync(Or,t).then(o=>{if(this.disposed||s!==this.liveGeneration||this.mode!=="live")return;const a=e.getExecutionMode()==="worker"?"worker":"pull";this.acceptLivePullFrame(o,a,performance.now()-i)}).catch(()=>{this.lastSampleRealMs=Number.NEGATIVE_INFINITY}).finally(()=>{r===this.requestSerial&&(this.pullInFlight=!1)})}acceptLivePullFrame(e,t,i){this.recordPerformanceSample(e,t,i),this.bufferFrame(e),this.deliver(e);for(const s of this.liveFrameListeners)s(e)}advanceSampleDeadline(e){if(!Number.isFinite(this.lastSampleRealMs)){this.lastSampleRealMs=e;return}this.lastSampleRealMs+=ma,e-this.lastSampleRealMs>ma*2&&(this.lastSampleRealMs=e)}bufferFrame(e){e.time-this.lastBufferedSim<qw&&this.lastBufferedSim!==0||(this.buffer.push(e),this.lastBufferedSim=e.time)}recordPerformanceSample(e,t,i){const s=performance.now();this.performanceSamples.push({at:s,readings:e.readings.length,sampleMs:i,source:t}),this.trimPerformanceSamples(s)}trimPerformanceSamples(e){var i;const t=e-5e3;for(;((i=this.performanceSamples[0])==null?void 0:i.at)<t;)this.performanceSamples.shift()}}function Qw(n){return typeof n=="number"?n:n instanceof Date?n.getTime():new Date(n).getTime()}const as=[18,28];function el(n){switch(n){case"guest":return["light","hvac","blind"];case"lobby":case"amenity":return["light","hvac"];case"corridor":return["light"];case"plant":return[]}}function Rf(n){return{light:el(n).includes("light"),hvacSetpoint:24,blind:0}}class eT{constructor(e){C(this,"entries",new Map);C(this,"listeners",new Set);C(this,"batchListeners",new Set);C(this,"batchDepth",0);C(this,"pendingChanges",[]);for(const t of e.floors)for(const i of t.zones){const s=el(i.function);if(s.length!==0)for(const r of i.rooms)this.entries.set(r.id,{roomId:r.id,kinds:s,state:Rf(i.function)})}}onChange(e){return this.listeners.add(e),()=>this.listeners.delete(e)}onBatch(e){return this.batchListeners.add(e),()=>this.batchListeners.delete(e)}batch(e){this.batchDepth+=1;try{return e()}finally{if(this.batchDepth-=1,this.batchDepth===0&&this.pendingChanges.length>0){const t=this.pendingChanges.splice(0);this.emitBatch(t)}}}has(e){return this.entries.has(e)}get(e){const t=this.entries.get(e);return t?ri(t):void 0}list(){return[...this.entries.values()].map(ri)}supports(e,t){var i;return((i=this.entries.get(e))==null?void 0:i.kinds.includes(t))??!1}set(e,t,i,s="local"){const r=this.entries.get(e),o=ga(r,t);if(t==="light"?r.state.light=!!i:t==="hvac"?r.state.hvacSetpoint=mh(Number(i),as[0],as[1]):r.state.blind=mh(Number(i),0,1),ga(r,t)===o)return ri(r);const a=ga(r,t),c={roomId:e,kind:t,value:a,origin:s};for(const l of this.listeners)l(ri(r),{...c});return this.batchDepth>0?this.pendingChanges.push(c):this.emitBatch([c]),ri(r)}emitBatch(e){if(e.length===0)return;const i=[...new Set(e.map(s=>s.roomId))].map(s=>this.entries.get(s)).filter(s=>s!==void 0).map(ri);for(const s of this.batchListeners)s({entries:i.map(ri),changes:e.map(r=>({...r}))})}}function ri(n){return{roomId:n.roomId,kinds:[...n.kinds],state:{...n.state}}}function mh(n,e,t){return n<e?e:n>t?t:n}function ga(n,e){return e==="light"?n.state.light:e==="hvac"?n.state.hvacSetpoint:n.state.blind}const AR=[{id:"guest-light-trim",label:"Guest light trim",hint:"Turn off guest-room lighting; public and corridor lights stay on."},{id:"hvac-eco",label:"HVAC eco +2°",hint:"Raise HVAC targets to 26°C where lower."},{id:"solar-shade",label:"Solar shade",hint:"Close guest-room blinds to reduce daytime cooling load."},{id:"restore-comfort",label:"Restore comfort",hint:"Return controllable rooms to their default light, HVAC, and blind settings."}];class tT{constructor(e,t){C(this,"rooms",[]);var i;this.controls=t;for(const s of e.floors)for(const r of s.zones)for(const o of r.rooms)this.rooms.push({roomId:o.id,roomName:o.name,floorId:s.id,floorName:s.name,zoneId:r.id,zoneName:r.name,zoneFunction:r.function,powerDeviceId:(i=o.sensors.find(a=>a.channel==="power"))==null?void 0:i.deviceId})}summary(e,t){const i=new Map,s=new Map,r=[];let o=0;for(const c of this.scopedRooms(t)){if(!c.powerDeviceId)continue;const l=zr(e.value(c.powerDeviceId)??0);o+=l;const u=i.get(c.floorId)??{floorId:c.floorId,name:c.floorName,totalKw:0,meteredRooms:0};u.totalKw+=l,u.meteredRooms+=1,i.set(c.floorId,u);const h=s.get(c.zoneId)??{zoneId:c.zoneId,name:c.zoneName,function:c.zoneFunction,totalKw:0};h.totalKw+=l,s.set(c.zoneId,h),r.push({roomId:c.roomId,roomName:c.roomName,floorId:c.floorId,floorName:c.floorName,zoneName:c.zoneName,kw:l})}const a=this.scopedControls(t);return{time:e.time,totalKw:zr(o),controllableRooms:a.length,activeLights:a.filter(c=>c.kinds.includes("light")&&c.state.light).length,byFloor:[...i.values()].map(c=>({...c,totalKw:zr(c.totalKw)})).sort((c,l)=>c.floorId.localeCompare(l.floorId)),byZone:[...s.values()].map(c=>({...c,totalKw:zr(c.totalKw)})).sort((c,l)=>l.totalKw-c.totalKw),topLoads:r.sort((c,l)=>l.kw-c.kw).slice(0,6)}}apply(e,t){const i=new Set;let s=0;const r=(o,a,c)=>{!o.kinds.includes(a)||nT(o,a,c)||(this.controls.set(o.roomId,a,c),i.add(o.roomId),s+=1)};return this.controls.batch(()=>{for(const o of this.scopedControls(t)){const a=this.roomById(o.roomId);if(a)switch(e){case"guest-light-trim":a.zoneFunction==="guest"&&r(o,"light",!1);break;case"hvac-eco":a.zoneFunction!=="corridor"&&a.zoneFunction!=="plant"&&r(o,"hvac",Math.max(o.state.hvacSetpoint,26));break;case"solar-shade":a.zoneFunction==="guest"&&r(o,"blind",1);break;case"restore-comfort":{const c=Rf(a.zoneFunction);r(o,"light",c.light),r(o,"hvac",c.hvacSetpoint),r(o,"blind",c.blind);break}}}}),{action:e,floorId:t,changedControls:s,changedRooms:[...i]}}scopedRooms(e){return e?this.rooms.filter(t=>t.floorId===e):this.rooms}scopedControls(e){return this.controls.list().filter(t=>{var i;return!e||((i=this.roomById(t.roomId))==null?void 0:i.floorId)===e})}roomById(e){return this.rooms.find(t=>t.roomId===e)}}function nT(n,e,t){return e==="light"?n.state.light===!!t:e==="hvac"?n.state.hvacSetpoint===Number(t):n.state.blind===Number(t)}function zr(n){return Math.round(n*100)/100}const Af=[{id:"temp-high",channel:"temperature",op:">",threshold:29,severity:"warning",label:"High temperature"},{id:"power-spike",channel:"power",op:">",threshold:5,severity:"critical",label:"Power spike"},{id:"crowding",channel:"occupancy",op:">",threshold:3,severity:"warning",label:"High occupancy"}],gh=.08;class iT{constructor(e,t=Af){C(this,"rules",new Map);C(this,"active",new Map);C(this,"devices",[]);for(const i of e.floors)for(const s of i.zones)for(const r of s.rooms)for(const o of r.sensors)this.devices.push({deviceId:o.deviceId,channel:o.channel,unit:o.unit,roomId:r.id,roomName:r.name,zoneFn:s.function});for(const i of t)this.rules.set(i.id,{...i})}setRule(e){this.rules.set(e.id,{...e})}clearRule(e){const t=this.rules.delete(e),i=[];for(const s of[...this.active.values()])s.ruleId===e&&(this.active.delete(s.key),i.push({...s}));return{removed:t,cleared:i}}replaceRules(e){const t=new Map(e.map(s=>[s.id,{...s}])),i=[];for(const s of[...this.active.values()])t.has(s.ruleId)||(this.active.delete(s.key),i.push({...s}));return this.rules=t,i}listRules(){return[...this.rules.values()].map(e=>({...e}))}activeAlarms(){return[...this.active.values()].map(e=>({...e}))}alarmingRooms(){const e=new Map;for(const t of this.active.values())(t.severity==="critical"||!e.has(t.roomId))&&e.set(t.roomId,t.severity);return e}evaluate(e){const t=[],i=[],s=new Set;for(const r of this.rules.values())for(const o of this.devices){if(o.channel!==r.channel||r.zoneFunction&&o.zoneFn!==r.zoneFunction)continue;const a=e.value(o.deviceId);if(a==null)continue;const c=`${r.id}|${o.roomId}`,l=this.active.get(c),u=l?r.threshold*(r.op===">"?1-gh:1+gh):r.threshold;if(!(r.op===">"?a>u:a<u))continue;if(s.add(c),l){l.value=a;continue}const d={key:c,ruleId:r.id,roomId:o.roomId,roomName:o.roomName,channel:o.channel,value:a,threshold:r.threshold,severity:r.severity,label:r.label,unit:o.unit,since:e.time};this.active.set(c,d),t.push({...d})}for(const[r,o]of[...this.active])s.has(r)||(this.active.delete(r),i.push({...o}));return{raised:t,cleared:i}}reconcile(e){const t=new Map(e.map(r=>[r.key,{...r}])),i=[],s=[];for(const r of t.values())this.active.has(r.key)||i.push({...r});for(const r of this.active.values())t.has(r.key)||s.push({...r});return this.active=t,{raised:i,cleared:s}}}class sT{constructor(e){C(this,"evaluator");C(this,"onRaiseCb",null);C(this,"onClearCb",null);C(this,"onBatchCb",null);C(this,"ruleListeners",new Set);C(this,"revision_",0);this.evaluator=new iT(e)}onAlarm(e,t,i){this.onRaiseCb=e,this.onClearCb=t,this.onBatchCb=i??null}onRulesChanged(e){return this.ruleListeners.add(e),()=>this.ruleListeners.delete(e)}setRule(e){this.evaluator.setRule(e),this.emitRules()}clearRule(e){const t=this.evaluator.clearRule(e);return this.applyTransitions({raised:[],cleared:t.cleared}),t.removed&&this.emitRules(),t.removed}listRules(){return this.evaluator.listRules()}activeAlarms(){return this.evaluator.activeAlarms()}get revision(){return this.revision_}alarmingRooms(){return this.evaluator.alarmingRooms()}evaluate(e){this.applyTransitions(this.evaluator.evaluate(e))}reconcileSnapshot(e){this.applyTransitions(this.evaluator.reconcile(e))}applyTransitions(e){var t,i,s;for(const r of e.raised)this.revision_+=1,(t=this.onRaiseCb)==null||t.call(this,{...r});for(const r of e.cleared)this.revision_+=1,(i=this.onClearCb)==null||i.call(this,{...r});(e.raised.length>0||e.cleared.length>0)&&((s=this.onBatchCb)==null||s.call(this,{raised:e.raised.map(r=>({...r})),cleared:e.cleared.map(r=>({...r}))}))}emitRules(){const e=this.listRules();for(const t of this.ruleListeners)t(e)}}const rT=1440*60*1e3,va=30*rT,vh={none:0,supervisor:1,emergency:2};class Vi extends Error{constructor(e,t,i){super(t),this.code=e,this.hint=i,this.name="IncidentServiceError"}}class oT{constructor(e,t=Date.now){C(this,"incidents",new Map);C(this,"unresolvedByAlarm",new Map);C(this,"coverage",new Map);C(this,"listeners",new Set);C(this,"incidentSequence",0);C(this,"activitySequence",0);C(this,"noteSequence",0);C(this,"evidenceSequence",0);C(this,"roomLocations",new Map);this.now=t,this.initializeRoomLocations(e);for(const i of e.floors)for(const s of i.zones){if(s.function==="guest")continue;const r=`CAM-${i.id}-${s.id}`;this.coverage.set(r,{cameraId:r,floorId:i.id,floorName:i.name,zoneId:s.id,zoneName:s.name,zoneFunction:s.function,provider:"synthetic-showcase",status:"online",privacy:"shared-area-only"})}}onChanged(e){return this.listeners.add(e),()=>this.listeners.delete(e)}ingestAlarmBatch(e,t){const i=new Set;for(const r of e){const o=this.unresolvedByAlarm.get(r.key),a=o?this.incidents.get(o):void 0;if(a&&a.status!=="resolved"){if(a.source.state==="cleared"){const l=this.now();a.source.state="active",a.source.value=r.value,a.source.lastChangedAt=l,a.updatedAt=l,a.timeline.push(this.activity("source-raised",l,"BMS","Alarm source raised again.")),i.add(a.id)}continue}const c=this.createFromAlarm(r);this.incidents.set(c.id,c),this.unresolvedByAlarm.set(r.key,c.id),i.add(c.id)}for(const r of t){const o=this.unresolvedByAlarm.get(r.key),a=o?this.incidents.get(o):void 0;if(!a||a.status==="resolved"||a.source.state==="cleared")continue;const c=this.now();a.source.state="cleared",a.source.value=r.value,a.source.lastChangedAt=c,a.updatedAt=c,a.timeline.push(this.activity("source-cleared",c,"BMS","Alarm source returned within its rule threshold.")),i.add(a.id)}if(i.size===0)return null;const s={reason:"alarm-sync",changedIds:[...i]};return this.emit(s),s}list(e={}){return this.purgeExpired(),[...this.incidents.values()].filter(t=>aT(t,e)).sort(cT).map(eo)}get(e){this.purgeExpired();const t=this.incidents.get(e);return t?eo(t):null}summary(e={}){const t=this.list({status:"unresolved",...e});return{unresolved:t.length,unacknowledged:t.filter(i=>i.status==="open").length,critical:t.filter(i=>i.severity==="critical").length,assigned:t.filter(i=>i.assignee!==null).length}}listCameraCoverage(e){return[...this.coverage.values()].filter(t=>e===void 0||t.floorId===e).sort((t,i)=>t.floorId.localeCompare(i.floorId)||t.zoneName.localeCompare(i.zoneName)).map(t=>({...t}))}acknowledge(e,t){const i=this.requireIncident(e);if(i.status!=="open")return kr(i);const s=this.now();return i.status="acknowledged",i.acknowledgedAt=s,i.acknowledgedBy=t,i.updatedAt=s,i.timeline.push(this.activity("acknowledged",s,t,"Incident acknowledged.")),this.complete("acknowledged",i)}assign(e,t,i){const s=this.requireIncident(e);if(s.status==="resolved"||s.assignee===t)return kr(s);const r=this.now();return s.assignee=t,s.updatedAt=r,s.timeline.push(this.activity("assigned",r,i,`Assigned to ${t}.`)),this.complete("assigned",s)}escalate(e,t,i,s){const r=this.requireIncident(e);if(r.status==="resolved"||vh[t]<=vh[r.escalation])return kr(r);const o=this.now();return r.escalation=t,r.updatedAt=o,r.timeline.push(this.activity("escalated",o,i,`${lT(t)}: ${s}`)),this.complete("escalated",r)}addNote(e,t,i){const s=this.requireIncident(e),r=this.now(),o={id:this.nextId("NOTE",++this.noteSequence),author:t,text:i,createdAt:r};return s.notes.push(o),s.updatedAt=r,s.timeline.push(this.activity("note-added",r,t,i)),this.complete("note-added",s)}captureCameraEvidence(e,t,i,s){const r=this.requireIncident(e),o=this.coverage.get(t);if(!o)throw new Vi("UNKNOWN_CAMERA",`No camera coverage '${t}' is authored.`,"Call listCameraCoverage for privacy-safe shared-area cameras.");if(o.floorId!==r.floorId)throw new Vi("CAMERA_SCOPE_MISMATCH",`${o.zoneName} is not on ${r.floorName}.`,"Evidence must come from a shared or plant area on the incident floor.");const a=this.now(),c=this.nextId("EVID",++this.evidenceSequence),l={id:c,cameraId:t,floorId:o.floorId,zoneId:o.zoneId,zoneName:o.zoneName,capturedAt:a,capturedBy:i,note:s,mediaType:"synthetic-snapshot",snapshotToken:`${t}:${a}:${c}`,retentionPolicy:"showcase-30-days",retainUntil:a+va};return r.evidence.push(l),r.updatedAt=a,r.timeline.push(this.activity("camera-evidence-captured",a,i,`Captured privacy-safe evidence from ${o.zoneName}.`)),this.complete("camera-evidence-captured",r)}resolve(e,t,i){const s=this.requireIncident(e);if(s.status==="resolved")return kr(s);if(s.source.state==="active")throw new Vi("SOURCE_ACTIVE","The originating alarm is still active.","Correct the condition or wait for the BMS to clear it before resolving the incident.");const r=this.now();return s.status="resolved",s.resolvedAt=r,s.resolvedBy=t,s.resolution=i,s.updatedAt=r,s.retainUntil=r+va,s.timeline.push(this.activity("resolved",r,t,i)),this.unresolvedByAlarm.delete(s.source.alarmKey),this.complete("resolved",s)}createFromAlarm(e){const t=this.now(),i=this.findAlarmLocation(e),s={id:this.nextId("INC",++this.incidentSequence),title:e.label,severity:e.severity,status:"open",source:{kind:"alarm",alarmKey:e.key,ruleId:e.ruleId,channel:e.channel,value:e.value,threshold:e.threshold,unit:e.unit,state:"active",alarmSince:e.since,lastChangedAt:t},roomId:e.roomId,roomName:e.roomName,floorId:i.floorId,floorName:i.floorName,zoneId:i.zoneId,zoneName:i.zoneName,zoneFunction:i.zoneFunction,assignee:null,acknowledgedAt:null,acknowledgedBy:null,escalation:"none",createdAt:t,updatedAt:t,resolvedAt:null,resolvedBy:null,resolution:null,retentionPolicy:"showcase-30-days",retainUntil:t+va,notes:[],evidence:[],timeline:[]};return s.timeline.push(this.activity("created",t,"BMS",`Created from ${e.label} in ${e.roomName}.`)),s}findAlarmLocation(e){const t=this.roomLocations.get(e.roomId);if(!t)throw new Vi("UNKNOWN_ENTITY",`Alarm room '${e.roomId}' is not in the building.`);return t}requireIncident(e){const t=this.incidents.get(e);if(!t)throw new Vi("UNKNOWN_INCIDENT",`No incident '${e}' exists.`,"Call listIncidents to discover current incident ids.");return t}complete(e,t){return this.emit({reason:e,changedIds:[t.id]}),{outcome:"completed",incident:eo(t)}}activity(e,t,i,s){return{id:this.nextId("EVT",++this.activitySequence),type:e,at:t,actor:i,detail:s}}nextId(e,t){return`${e}-${String(t).padStart(4,"0")}`}emit(e){const t={reason:e.reason,changedIds:[...e.changedIds]};for(const i of this.listeners)i(t)}purgeExpired(){const e=this.now();for(const[t,i]of this.incidents)i.status!=="resolved"||i.retainUntil>e||this.incidents.delete(t)}initializeRoomLocations(e){for(const t of e.floors)for(const i of t.zones)for(const s of i.rooms)this.roomLocations.set(s.id,{floorId:t.id,floorName:t.name,zoneId:i.id,zoneName:i.name,zoneFunction:i.function})}}function aT(n,e){return!(e.status==="unresolved"&&n.status==="resolved"||e.status&&e.status!=="unresolved"&&n.status!==e.status||e.severity&&n.severity!==e.severity||e.floorId&&n.floorId!==e.floorId||e.roomId&&n.roomId!==e.roomId||e.sourceAlarmKey&&n.source.alarmKey!==e.sourceAlarmKey)}function cT(n,e){const t=+(n.status==="resolved")-+(e.status==="resolved");if(t!==0)return t;const i=+(e.severity==="critical")-+(n.severity==="critical");return i!==0?i:e.updatedAt-n.updatedAt||n.id.localeCompare(e.id)}function kr(n){return{outcome:"noop",incident:eo(n)}}function eo(n){return{...n,source:{...n.source},notes:n.notes.map(e=>({...e})),evidence:n.evidence.map(e=>({...e})),timeline:n.timeline.map(e=>({...e}))}}function lT(n){return n==="emergency"?"Emergency escalation":"Supervisor escalation"}const _h=1440*60*1e3;class Bt extends Error{constructor(e,t,i){super(t),this.code=e,this.hint=i,this.name="FrontDeskServiceError"}}class uT{constructor(e,t={}){C(this,"rooms",new Map);C(this,"reservations",new Map);C(this,"listeners",new Set);C(this,"sequence",0);C(this,"now");this.now=t.now??Date.now;let i=0;for(const s of e.floors)for(const r of s.zones)if(r.function==="guest")for(const o of r.rooms){const a=fT(o.name,i);this.rooms.set(o.id,{roomId:o.id,roomName:o.name,floorId:s.id,floorName:s.name,type:a,capacity:a==="suite"?4:2,readiness:"inspected"}),i+=1}t.seed!==!1&&this.seedShowcase()}onChanged(e){return this.listeners.add(e),()=>this.listeners.delete(e)}searchAvailability(e){return this.assertQuery(e),[...this.rooms.values()].map(t=>this.availabilityFor(t,e)).sort(hT)}snapshot(e=Mh(this.now()),t=e+_h){this.assertQuery({arrivalAt:e,departureAt:t,guests:1});const i=this.searchAvailability({arrivalAt:e,departureAt:t,guests:1}),s=[...this.reservations.values()].sort(dT).map(po),r=s.filter(l=>l.status==="reserved"&&Sh(l.arrivalAt,e,t)),o=s.filter(l=>l.status==="checked-in"&&Sh(l.departureAt,e,t)),a=s.filter(l=>l.status==="checked-in"),c=s.filter(l=>xh(l)&&yh(e,t,l.arrivalAt,l.departureAt));return{asOf:this.now(),range:{from:e,to:t},inventory:{total:i.length,available:i.filter(l=>l.available).length,ready:i.filter(l=>l.available&&l.readyForCheckIn).length,reserved:c.filter(l=>l.status==="reserved").length,inHouse:a.length,dirty:i.filter(l=>l.readiness==="dirty").length,outOfService:i.filter(l=>l.readiness==="out-of-service").length},rooms:i,arrivals:r,departures:o,inHouse:a,unassigned:r.filter(l=>l.roomId===null),reservations:s}}getReservation(e){const t=this.reservations.get(e);return t?po(t):null}createReservation(e){var o;this.assertGuest(e.guestName,e.guests),this.assertQuery(e);const t=e.roomId?this.requireRoom(e.roomId):void 0;t&&this.assertAvailable(t,e);const i=this.now(),s=++this.sequence,r={id:_a(s),confirmationCode:`HOLO-${String(s).padStart(4,"0")}`,guestName:e.guestName.trim(),guests:e.guests,arrivalAt:e.arrivalAt,departureAt:e.departureAt,roomId:(t==null?void 0:t.roomId)??null,status:"reserved",notes:((o=e.notes)==null?void 0:o.trim())||void 0,source:"operator",createdAt:i,updatedAt:i,checkedInAt:null,checkedOutAt:null};return this.reservations.set(r.id,r),this.emit("reservation-created",[r.id],t?[t.roomId]:[]),ws(r)}assignRoom(e,t){const i=this.requireReservation(e);if(this.assertReserved(i,"assign a room"),i.roomId===t)return Vr(i);const s=this.requireRoom(t);this.assertAvailable(s,i,i.id);const r=i.roomId;return i.roomId=t,i.updatedAt=this.now(),this.emit("room-assigned",[i.id],[r,t].filter(o=>o!==null)),ws(i)}checkIn(e,t){const i=this.requireReservation(e);if(i.status==="checked-in")return Vr(i);this.assertReserved(i,"check in");const s=t??i.roomId;if(!s)throw new Bt("ROOM_REQUIRED",`${i.guestName} does not have an assigned room.`,"Assign one of the available rooms before checking the guest in.");const r=this.requireRoom(s);if(this.assertAvailable(r,i,i.id),r.readiness!=="inspected")throw new Bt("ROOM_NOT_READY",`${r.roomName} is ${pT(r.readiness)} and cannot be checked into.`,"Housekeeping must mark the room inspected before check-in.");const o=i.roomId,a=this.now();return i.roomId=r.roomId,i.status="checked-in",i.checkedInAt=a,i.updatedAt=a,this.emit("guest-checked-in",[i.id],[o,r.roomId].filter((c,l,u)=>c!==null&&u.indexOf(c)===l)),ws(i)}checkOut(e){const t=this.requireReservation(e);if(t.status==="checked-out")return Vr(t);if(t.status!=="checked-in")throw new Bt("INVALID_TRANSITION",`${t.guestName} is ${t.status.replace("-"," ")} and cannot be checked out.`,"Only an in-house stay can be checked out.");const i=this.now();t.status="checked-out",t.checkedOutAt=i,t.updatedAt=i;const s=t.roomId?this.rooms.get(t.roomId):void 0;return s&&(s.readiness="dirty"),this.emit("guest-checked-out",[t.id],s?[s.roomId]:[]),ws(t)}cancelReservation(e){const t=this.requireReservation(e);if(t.status==="cancelled")return Vr(t);if(t.status!=="reserved")throw new Bt("INVALID_TRANSITION",`${t.guestName} is ${t.status.replace("-"," ")} and cannot be cancelled.`,"Check out an in-house stay instead.");return t.status="cancelled",t.updatedAt=this.now(),this.emit("reservation-cancelled",[t.id],t.roomId?[t.roomId]:[]),ws(t)}setRoomReadiness(e,t){const i=this.requireRoom(e);if(i.readiness===t)return{outcome:"noop",room:yc(i)};if([...this.reservations.values()].some(r=>r.status==="checked-in"&&r.roomId===e))throw new Bt("ROOM_OCCUPIED",`${i.roomName} is occupied; its housekeeping state cannot be changed.`,"Check the guest out before changing room readiness.");return i.readiness=t,this.emit("room-readiness-changed",[],[e]),{outcome:"completed",room:yc(i)}}availabilityFor(e,t,i){if(t.guests>e.capacity)return Br(e,!1,"capacity",null);if(e.readiness==="out-of-service")return Br(e,!1,"out-of-service",null);const s=[...this.reservations.values()].find(r=>r.id!==i&&r.roomId===e.roomId&&xh(r)&&(r.status==="checked-in"||yh(t.arrivalAt,t.departureAt,r.arrivalAt,r.departureAt)));return s?Br(e,!1,s.status==="checked-in"?"in-house":"reserved",s.id):Br(e,!0,"available",null)}assertAvailable(e,t,i){const s=this.availabilityFor(e,t,i);if(s.available)return;const r=s.reason==="capacity"?`only accommodates ${e.capacity} guest${e.capacity===1?"":"s"}`:s.reason==="out-of-service"?"is out of service":`is already ${s.reason} for that stay`;throw new Bt("ROOM_UNAVAILABLE",`${e.roomName} ${r}.`,"Search availability again or choose another room.")}assertQuery(e){if(!Number.isFinite(e.arrivalAt)||!Number.isFinite(e.departureAt)||e.arrivalAt>=e.departureAt)throw new Bt("INVALID_STAY_RANGE","Departure must be after arrival.","Choose a valid arrival and departure date.");if(!Number.isInteger(e.guests)||e.guests<1||e.guests>6)throw new Bt("INVALID_PARTY_SIZE","Guest count must be between 1 and 6.")}assertGuest(e,t){if(!e.trim())throw new Bt("GUEST_REQUIRED","Guest name is required.");if(e.trim().length>120)throw new Bt("GUEST_NAME_TOO_LONG","Guest name is too long.");if(!Number.isInteger(t)||t<1||t>6)throw new Bt("INVALID_PARTY_SIZE","Guest count must be between 1 and 6.")}assertReserved(e,t){if(e.status!=="reserved")throw new Bt("INVALID_TRANSITION",`${e.guestName} is ${e.status.replace("-"," ")} and cannot ${t}.`,"Refresh the front desk queue to see the current stay status.")}requireRoom(e){const t=this.rooms.get(e);if(!t)throw new Bt("UNKNOWN_GUEST_ROOM",`No guest room '${e}' exists.`,"Search room availability to discover guest-room ids.");return t}requireReservation(e){const t=this.reservations.get(e);if(!t)throw new Bt("UNKNOWN_RESERVATION",`No reservation '${e}' exists.`,"Read the front desk snapshot to discover current reservation ids.");return t}emit(e,t,i){const s={reason:e,reservationIds:[...t],roomIds:[...new Set(i)]};for(const r of this.listeners)r(s)}seedShowcase(){const e=[...this.rooms.values()];if(e.length<5)return;const t=Mh(this.now()),i=(o,a)=>t+o*_h+a*60*60*1e3,s=e.find((o,a)=>a>4&&o.capacity>=3)??e[4],r=[{guestName:"Maya Chen",guests:2,arrivalAt:i(-1,15),departureAt:i(1,11),roomId:e[0].roomId,status:"checked-in"},{guestName:"Arun Patel",guests:1,arrivalAt:i(-2,15),departureAt:i(0,11),roomId:e[1].roomId,status:"checked-in"},{guestName:"Noah Williams",guests:2,arrivalAt:i(0,15),departureAt:i(2,11),roomId:e[2].roomId,status:"reserved"},{guestName:"Sofia Rossi",guests:1,arrivalAt:i(0,17),departureAt:i(1,11),roomId:e[3].roomId,status:"reserved"},{guestName:"Lina Rahman",guests:2,arrivalAt:i(0,16),departureAt:i(2,11),roomId:null,status:"reserved"},{guestName:"Diego Silva",guests:Math.min(3,s.capacity),arrivalAt:i(1,15),departureAt:i(4,11),roomId:s.roomId,status:"reserved"}];e[3].readiness="dirty",e[e.length-1].readiness="out-of-service";for(const o of r){const a=i(-4,9)+this.sequence,c=++this.sequence;this.reservations.set(_a(c),{id:_a(c),confirmationCode:`HOLO-${String(c).padStart(4,"0")}`,guestName:o.guestName,guests:o.guests,arrivalAt:o.arrivalAt,departureAt:o.departureAt,roomId:o.roomId,status:o.status,source:"seeded-showcase",createdAt:a,updatedAt:a,checkedInAt:o.status==="checked-in"?o.arrivalAt:null,checkedOutAt:null})}}}function Br(n,e,t,i){return{...yc(n),available:e,readyForCheckIn:e&&n.readiness==="inspected",reason:t,conflictingReservationId:i}}function ws(n){return{outcome:"completed",reservation:po(n)}}function Vr(n){return{outcome:"noop",reservation:po(n)}}function po(n){return{...n}}function yc(n){return{...n}}function hT(n,e){return n.available!==e.available?n.available?-1:1:n.readyForCheckIn!==e.readyForCheckIn?n.readyForCheckIn?-1:1:n.floorId.localeCompare(e.floorId)||n.roomName.localeCompare(e.roomName,void 0,{numeric:!0})}function dT(n,e){return n.arrivalAt-e.arrivalAt||n.guestName.localeCompare(e.guestName)}function fT(n,e){var s;const t=Number((s=n.match(/\d+/))==null?void 0:s[0]),i=Number.isFinite(t)?t%100:e+1;return i===1||i===18?"suite":"standard"}function xh(n){return n.status==="reserved"||n.status==="checked-in"}function yh(n,e,t,i){return n<i&&t<e}function Sh(n,e,t){return n>=e&&n<t}function pT(n){return n.replaceAll("-"," ")}function _a(n){return`RES-${String(n).padStart(4,"0")}`}function Mh(n){const e=new Date(n);return Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate())}const bh=[{id:"morning",label:"Morning",hint:"lights up · blinds open · cool"},{id:"day",label:"Day",hint:"guest rooms dark · public lit"},{id:"evening",label:"Evening",hint:"warm · guest blinds drawn"},{id:"night",label:"Night",hint:"guest floors dark · corridors only"},{id:"away",label:"Away / Eco",hint:"everything off · setback"}];function mT(n,e){switch(n){case"morning":return{light:!0,blind:0,hvac:23};case"day":return{light:e!=="guest",blind:0,hvac:24};case"evening":return{light:!0,blind:e==="guest"?1:0,hvac:24};case"night":return{light:e==="corridor",blind:1,hvac:25};case"away":return{light:!1,blind:1,hvac:26};default:return{}}}function gT(n,e){const t=[];for(const i of e.floors)for(const s of i.zones){const r=el(s.function);if(r.length===0)continue;const o=mT(n,s.function);for(const a of s.rooms)r.includes("light")&&o.light!==void 0&&t.push({roomId:a.id,kind:"light",value:o.light}),r.includes("blind")&&o.blind!==void 0&&t.push({roomId:a.id,kind:"blind",value:o.blind}),r.includes("hvac")&&o.hvac!==void 0&&t.push({roomId:a.id,kind:"hvac",value:o.hvac})}return t}const vT=[{hour:6,scene:"morning"},{hour:10,scene:"day"},{hour:18,scene:"evening"},{hour:22,scene:"night"}];class _T{constructor(e,t,i){C(this,"lastScheduledSolarTime",null);this.building=e,this.controls=t,this.lon=i}list(){return bh.map(e=>({...e}))}has(e){return bh.some(t=>t.id===e)}apply(e){const t=gT(e,this.building);let i=0;return this.controls.batch(()=>{for(const s of t){if(!this.controls.supports(s.roomId,s.kind))continue;const r=this.controls.get(s.roomId);!r||xT(r,s.kind)===s.value||(this.controls.set(s.roomId,s.kind,s.value),i+=1)}}),i}tickSchedule(e,t){const i=e+this.lon/15*36e5;if(this.lastScheduledSolarTime===null){this.lastScheduledSolarTime=i;return}if(i<=this.lastScheduledSolarTime){this.lastScheduledSolarTime=i;return}const s=Math.floor(this.lastScheduledSolarTime/xa),r=Math.floor(i/xa);for(let o=s;o<=r;o+=1)for(const a of vT){const c=o*xa+a.hour*36e5;c>this.lastScheduledSolarTime&&c<=i&&t(a.scene)}this.lastScheduledSolarTime=i}}const xa=24*36e5;function xT(n,e){return e==="light"?n.state.light:e==="hvac"?n.state.hvacSetpoint:n.state.blind}const Eh=[{name:"reassemble",args:{durationMs:1200},hold:400},{name:"setMode",args:{mode:"default"},hold:2600},{name:"orbitTo",args:{azimuthDeg:210,elevationDeg:26},hold:900},{name:"setMode",args:{mode:"electricity"},hold:3200},{name:"explode",args:{factor:1},hold:2800},{name:"setMode",args:{mode:"environment"},hold:2800},{name:"reassemble",args:{},hold:400},{name:"setMode",args:{mode:"occupancy"},hold:2400},{name:"isolateFloor",args:{floorId:"F4"},hold:2600},{name:"enterRoom",args:{roomId:"F4-R03"},hold:3600},{name:"exitRoom",args:{},hold:1400},{name:"setMode",args:{mode:"default"},hold:400},{name:"reassemble",args:{},hold:2600}];class yT{constructor(e){C(this,"running",!1);C(this,"timer");C(this,"step",0);C(this,"onChange",null);this.ui=e}isRunning(){return this.running}onTourChanged(e){this.onChange=e}start(){var e;this.running||(this.running=!0,this.step=0,(e=this.onChange)==null||e.call(this,!0),this.advance())}stop(){var e;this.running&&(this.running=!1,window.clearTimeout(this.timer),(e=this.onChange)==null||e.call(this,!1))}async advance(){if(!this.running)return;const e=Eh[this.step%Eh.length];this.step++;try{await this.ui.call(e.name,e.args)}catch{}this.running&&(this.timer=window.setTimeout(()=>void this.advance(),e.hold))}}const ya=1e-4,ST={flyIn:.22,flyOut:.2,select:.09,mode:.12,layoutOpen:.18,layoutClose:.18,floor:.12,floorPlan:.14,control:.075,reject:.16,alarm:.6,alarmCritical:.45};class MT{constructor(){C(this,"ctx",null);C(this,"master",null);C(this,"spaceInput",null);C(this,"noiseTexture",null);C(this,"lastCueAt",new Map);C(this,"selectionTimer",null);C(this,"roomExitTimer",null);C(this,"lastView",{kind:"ASSEMBLED"});C(this,"enabled",!0);C(this,"volume",.5);C(this,"subscriptions",[]);C(this,"transientNodes",new Set);C(this,"disposed",!1)}getState(){return{enabled:this.enabled,volume:this.volume}}setAudio(e){if(e.enabled!==void 0&&(this.enabled=e.enabled),e.volume!==void 0&&(this.volume=Math.max(0,Math.min(1,e.volume))),this.master&&this.ctx){const t=this.ctx.currentTime;this.master.gain.cancelScheduledValues(t),this.master.gain.setTargetAtTime(this.enabled?this.volume:0,t,.025)}return this.getState()}attach(e){this.disposed||(this.detach(),this.subscriptions.push(e.on("roomFocusChanged",({roomId:t})=>{t?(this.cancelSelection(),this.cancelRoomExit(),this.play("flyIn")):this.queueRoomExit()})),this.subscriptions.push(e.on("selectionChanged",({ref:t})=>{(t==null?void 0:t.type)==="room"?this.queueSelection():this.cancelSelection()})),this.subscriptions.push(e.on("modeChanged",()=>this.play("mode"))),this.subscriptions.push(e.on("viewChanged",({view:t})=>this.playViewChange(t))),this.subscriptions.push(e.on("controlsChanged",()=>this.play("control"))),this.subscriptions.push(e.on("commandRejected",()=>this.play("reject"))),this.subscriptions.push(e.on("alarmsChanged",({raised:t})=>{t.length!==0&&this.play(t.some(i=>i.severity==="critical")?"alarmCritical":"alarm")})))}dispose(){var t,i;if(this.disposed)return;this.disposed=!0,this.detach(),this.cancelSelection(),this.cancelRoomExit(),this.lastCueAt.clear(),this.releaseTransient([...this.transientNodes]),(t=this.master)==null||t.disconnect(),(i=this.spaceInput)==null||i.disconnect();const e=this.ctx;this.master=null,this.spaceInput=null,this.noiseTexture=null,this.ctx=null,e&&e.state!=="closed"&&e.close().catch(()=>{})}unlock(){var e;this.ensureContext(),((e=this.ctx)==null?void 0:e.state)==="suspended"&&this.ctx.resume()}ensureContext(){if(this.ctx)return;const e=window.AudioContext??window.webkitAudioContext;if(!e)return;const t=new e,i=t.createGain();i.gain.setValueAtTime(this.enabled?this.volume:0,t.currentTime);const s=t.createDynamicsCompressor();s.threshold.setValueAtTime(-20,t.currentTime),s.knee.setValueAtTime(18,t.currentTime),s.ratio.setValueAtTime(8,t.currentTime),s.attack.setValueAtTime(.004,t.currentTime),s.release.setValueAtTime(.16,t.currentTime),i.connect(s).connect(t.destination);const r=t.createDelay(.32);r.delayTime.setValueAtTime(.105,t.currentTime);const o=t.createGain();o.gain.setValueAtTime(.2,t.currentTime);const a=t.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(1800,t.currentTime);const c=t.createGain();c.gain.setValueAtTime(.16,t.currentTime),r.connect(o).connect(r),r.connect(a).connect(c).connect(i),this.ctx=t,this.master=i,this.spaceInput=r}play(e,t=4){if(!this.enabled||(this.ensureContext(),!this.ctx||this.ctx.state!=="running"))return;const i=this.ctx.currentTime,s=this.lastCueAt.get(e);if(!(s!==void 0&&i-s<ST[e]))switch(this.lastCueAt.set(e,i),e){case"flyIn":this.transition(i,"in");break;case"flyOut":this.transition(i,"out");break;case"select":this.selection(i);break;case"mode":this.modeChange(i);break;case"layoutOpen":this.layout(i,!0);break;case"layoutClose":this.layout(i,!1);break;case"floor":this.floorIndex(i,t);break;case"floorPlan":this.floorPlan(i,t);break;case"control":this.confirmation(i);break;case"reject":this.rejection(i);break;case"alarm":this.clinicalAlert(i,!1);break;case"alarmCritical":this.clinicalAlert(i,!0);break}}air(e,t,i,s,r,o=1.2){const a=this.ctx,c=a.createBufferSource();c.buffer=this.getNoiseTexture();const l=a.createBiquadFilter();l.type="bandpass",l.Q.setValueAtTime(o,e),l.frequency.setValueAtTime(s,e),l.frequency.exponentialRampToValueAtTime(r,e+t);const u=this.envelope(e,t,i,Math.min(.04,t*.2)),h=this.cueBus(.13);c.connect(l).connect(u).connect(h.input),this.trackTransient(c,[c,l,u,...h.nodes]),c.start(e),c.stop(e+t+.04)}tone(e,t,i,s,r,o){const c=this.ctx.createBiquadFilter();c.type="bandpass",c.Q.setValueAtTime(.85,e),c.frequency.setValueAtTime(Math.max(180,o*.65),e),c.frequency.exponentialRampToValueAtTime(o,e+s);const l=this.envelope(e,s,r,Math.min(.018,s*.18)),u=this.cueBus(.11);c.connect(l).connect(u.input);const h=this.partial(e,t,i,s,"sine",1,1,0,c),d=this.partial(e,t,i,s,"triangle",2.01,.19,7,c);this.trackTransient(d.source,[c,l,...u.nodes,...h.nodes,...d.nodes])}resonance(e,t,i,s,r,o){const c=this.ctx.createBiquadFilter();c.type="lowpass",c.Q.setValueAtTime(.72,e),c.frequency.setValueAtTime(Math.max(260,o*.42),e),c.frequency.exponentialRampToValueAtTime(o,e+s);const l=this.envelope(e,s,r,Math.min(.045,s*.22)),u=this.cueBus(.085);c.connect(l).connect(u.input);const h=this.partial(e,t,i,s,"sine",1,.74,-4,c),d=this.partial(e,t,i,s,"sine",1.004,.27,5,c),f=this.partial(e,t,i,s,"triangle",1.5,.12,-3,c);this.trackTransient(f.source,[c,l,...u.nodes,...h.nodes,...d.nodes,...f.nodes])}partial(e,t,i,s,r,o,a,c,l){const u=this.ctx,h=u.createOscillator();h.type=r,h.frequency.setValueAtTime(t*o,e),h.frequency.exponentialRampToValueAtTime(i*o,e+s),h.detune.setValueAtTime(c,e);const d=u.createGain();return d.gain.setValueAtTime(a,e),h.connect(d).connect(l),h.start(e),h.stop(e+s+.05),{source:h,nodes:[h,d]}}envelope(e,t,i,s){const o=this.ctx.createGain(),a=e+Math.max(.004,Math.min(s,t*.32)),c=Math.max(a+.004,e+t*.58);return o.gain.setValueAtTime(ya,e),o.gain.exponentialRampToValueAtTime(i,a),o.gain.exponentialRampToValueAtTime(Math.max(ya,i*.58),c),o.gain.exponentialRampToValueAtTime(ya,e+t),o}cueBus(e){const t=this.ctx,i=t.createGain(),s=[i];if(i.gain.setValueAtTime(1,t.currentTime),i.connect(this.master),this.spaceInput){const r=t.createGain();s.push(r),r.gain.setValueAtTime(e,t.currentTime),i.connect(r).connect(this.spaceInput)}return{input:i,nodes:s}}trackTransient(e,t){for(const i of t)this.transientNodes.add(i);e.addEventListener("ended",()=>this.releaseTransient(t),{once:!0})}releaseTransient(e){for(const t of e){try{t.disconnect()}catch{}this.transientNodes.delete(t)}}getNoiseTexture(){if(this.noiseTexture)return this.noiseTexture;const e=this.ctx,t=e.createBuffer(1,Math.ceil(e.sampleRate*1.2),e.sampleRate),i=t.getChannelData(0);let s=1597463007,r=0;for(let o=0;o<i.length;o++){s^=s<<13,s^=s>>>17,s^=s<<5;const a=(s>>>0)/4294967295*2-1;r=r*.985+a*.015,i[o]=a*.42+r*.58}return this.noiseTexture=t,t}transition(e,t){t==="in"?(this.air(e,.56,.024,360,2900,.78),this.resonance(e,118,176,.54,.052,820),this.resonance(e+.075,260,420,.42,.029,1550),this.tone(e+.31,620,760,.18,.015,2200)):(this.resonance(e,180,120,.48,.046,760),this.resonance(e+.055,410,268,.35,.025,1350),this.air(e+.07,.42,.018,2500,380,.82))}selection(e){this.air(e,.16,.011,740,1750,1.4),this.resonance(e,320,445,.22,.027,1120),this.tone(e+.07,505,570,.14,.011,1650)}modeChange(e){this.tone(e,280,420,.18,.046,1500),this.tone(e+.095,420,630,.22,.052,2200)}layout(e,t){const i=t?74:132,s=t?132:76;this.air(e,.68,.02,t?280:2600,t?2450:360,.75),this.resonance(e,i,s,.68,.048,520),this.resonance(e+.12,t?190:350,t?338:205,.45,.024,1240),this.tone(e+.36,t?470:690,t?660:430,.22,.012,2050)}floorIndex(e,t){const i=150*Math.pow(2,(Math.max(1,Math.min(12,t))-1)/15);this.air(e,.24,.012,460,1450,1.05),this.resonance(e,i*.72,i,.29,.032,880),this.resonance(e+.105,i*1.28,i*1.5,.2,.018,1420)}floorPlan(e,t){const i=150*Math.pow(2,(Math.max(1,Math.min(12,t))-1)/15);this.air(e,.34,.014,1900,600,.88),this.resonance(e,i*1.5,i,.34,.03,980),this.tone(e+.14,i*2.1,i*1.82,.19,.013,1550)}confirmation(e){this.air(e,.075,.018,1200,3300,3.1),this.tone(e,600,860,.11,.04,2400)}rejection(e){this.air(e,.3,.024,900,300,1.8),this.tone(e,210,150,.14,.06,560),this.tone(e+.17,180,126,.16,.048,480)}clinicalAlert(e,t){const i=t?[430,610,455]:[520,660],s=t?.155:.2;this.air(e,t?.55:.4,t?.04:.028,780,2300,1.6),i.forEach((r,o)=>{const a=o%2===0?r:r*.9;this.tone(e+o*s,a,r*1.08,s*.82,t?.065:.05,t?2050:1750)})}playViewChange(e){this.cancelRoomExit();const t=this.lastView;switch(this.lastView=e,e.kind){case"ASSEMBLED":t.kind!=="ASSEMBLED"&&this.play("layoutClose");break;case"EXPLODED":this.play(e.factor<(t.kind==="EXPLODED"?t.factor:0)?"layoutClose":"layoutOpen");break;case"ISOLATED":this.play("floor",this.floorNumber(e.floorId));break;case"FLATTENED":this.play("floorPlan",this.floorNumber(e.floorId));break}}floorNumber(e){const t=/\d+$/.exec(e);return t?Number.parseInt(t[0],10):4}queueSelection(){this.cancelSelection(),this.selectionTimer=setTimeout(()=>{this.selectionTimer=null,this.play("select")},32)}cancelSelection(){this.selectionTimer!==null&&(clearTimeout(this.selectionTimer),this.selectionTimer=null)}queueRoomExit(){this.cancelRoomExit(),this.roomExitTimer=setTimeout(()=>{this.roomExitTimer=null,this.play("flyOut")},44)}cancelRoomExit(){this.roomExitTimer!==null&&(clearTimeout(this.roomExitTimer),this.roomExitTimer=null)}detach(){for(const e of this.subscriptions.splice(0))e()}}const bT=5e3;function mo(n){return structuredClone(n)}class ET{constructor(e=bT){C(this,"records",[]);C(this,"start",0);if(this.capacity=e,!Number.isSafeInteger(e)||e<1)throw new Error("CommandLog capacity must be a positive safe integer.")}get length(){return this.records.length}record(e,t){const i={ts:Date.now(),name:e,args:mo(t)};if(this.records.length<this.capacity){this.records.push(i);return}this.records[this.start]=i,this.start=(this.start+1)%this.capacity}entries(){return(this.start===0?this.records:[...this.records.slice(this.start),...this.records.slice(0,this.start)]).map(t=>({ts:t.ts,name:t.name,args:mo(t.args)}))}toJSON(){return JSON.stringify(this.entries(),null,2)}}const Sa=ge({type:At(["building","floor","zone","room","sensor"]),id:Re(),buildingId:Re().optional()});class wh extends Error{constructor(e,t,i){super(t),this.code=e,this.hint=i,this.name="CommandRejection"}}const wT=At(["orbit","front","top","isometric"]),TT=At(["guest-light-trim","hvac-eco","solar-shade","restore-comfort"]),RT=Si([Ct(-1),Ct(1)]),AT=At(["open","acknowledged","resolved"]),CT=At(["supervisor","emergency"]),oi=Re().trim().min(1).max(100),Hr=Re().trim().min(1).max(1e3),IT=ge({status:Si([AT,Ct("unresolved")]).optional(),severity:At(["warning","critical"]).optional(),floorId:Re().optional(),roomId:Re().optional(),sourceAlarmKey:Re().optional()}),cs=Si([Qe().finite(),ff(),df({offset:!0,local:!0})]),PT=Si([Ct("live"),ge({from:cs,to:cs}).superRefine((n,e)=>{nn(n.from)>nn(n.to)&&e.addIssue({code:fo.custom,path:["from"],message:"Must be on or before to."})})]),FT=ge({range:PT}),DT=qc("kind",[ge({roomId:Re(),kind:Ct("light"),value:$s()}),ge({roomId:Re(),kind:Ct("hvac"),value:Qe().finite().min(as[0]).max(as[1])}),ge({roomId:Re(),kind:Ct("blind"),value:Qe().finite().min(0).max(1)})]),Ma=ge({floorId:Re().optional(),zoneFunction:At(["guest","lobby","corridor","plant","amenity"]).optional()}).refine(n=>n.floorId!==void 0||n.zoneFunction!==void 0,{message:"Select at least one of floorId or zoneFunction."}),ba=ge({force:Ct(!0),reason:Re().trim().min(1).max(200),expiresAt:Qe().finite().optional()}),LT=qc("kind",[ge({selector:Ma,kind:Ct("light"),value:$s(),override:ba.optional()}),ge({selector:Ma,kind:Ct("hvac"),value:Qe().finite().min(as[0]).max(as[1]),override:ba.optional()}),ge({selector:Ma,kind:Ct("blind"),value:Qe().finite().min(0).max(1),override:ba.optional()})]),Th=ge({arrivalAt:cs,departureAt:cs,guests:Qe().int().min(1).max(6)}).superRefine((n,e)=>{nn(n.arrivalAt)>=nn(n.departureAt)&&e.addIssue({code:fo.custom,path:["departureAt"],message:"Must be after arrivalAt."})}),NT=ge({from:cs.optional(),to:cs.optional()}).superRefine((n,e)=>{n.from===void 0!=(n.to===void 0)?e.addIssue({code:fo.custom,message:"Provide both from and to, or omit both for today."}):n.from!==void 0&&n.to!==void 0&&nn(n.from)>=nn(n.to)&&e.addIssue({code:fo.custom,path:["to"],message:"Must be after from."})}),Gr=Re().trim().min(1),UT=Re().trim().min(1).max(120),OT=Re().trim().max(500),zT=At(["dirty","clean","inspected","out-of-service"]),Rh={durationMs:Qe().positive().max(2e4).optional(),radius:Qe().positive().optional()},zi={durationMs:Qe().positive().max(2e4).optional()};class kT{constructor(e){C(this,"log",new ET);C(this,"emitter");C(this,"commands",new Map);C(this,"commandListeners",new Set);C(this,"offControlChange",null);C(this,"offIncidentChange",null);C(this,"offFrontDeskChange",null);C(this,"disposed",!1);C(this,"focusedRoom",null);C(this,"focusRestore",null);C(this,"focusVersion",0);this.deps=e,this.emitter=e.emitter,this.offControlChange=this.deps.controls.onBatch(t=>{for(const i of t.entries)this.emitter.emit("controlChanged",{entry:i});this.emitter.emit("controlsChanged",t)}),this.offIncidentChange=this.deps.incidents.onChanged(t=>{this.emitter.emit("incidentsChanged",t)}),this.offFrontDeskChange=this.deps.frontDesk.onChanged(t=>{this.emitter.emit("frontDeskChanged",t)}),this.deps.alarms.onAlarm(t=>this.emitter.emit("alarmRaised",{alarm:t}),t=>this.emitter.emit("alarmCleared",{alarm:t}),t=>{this.deps.incidents.ingestAlarmBatch(t.raised,t.cleared),this.emitter.emit("alarmsChanged",t)}),this.deps.viewStateMachine.setViewChangedListener(t=>{var i,s;this.emitter.emit("viewChanged",{view:t}),(s=(i=this.deps.modeManager.getActiveMode())==null?void 0:i.onViewChanged)==null||s.call(i,t)}),this.deps.timeline.setChangeListener(t=>{this.emitter.emit("dataUpdated",{time:t.time,timeMode:t.mode,playbackSpeed:t.playbackSpeed})}),this.define("setMode","Switch the visualization mode (see listModes for available ids).",ge({mode:Re()}),({mode:t})=>{if(!this.deps.modeManager.list().some(r=>r.id===t))throw this.reject("setMode","UNKNOWN_MODE",`No mode '${t}'.`,`Available: ${this.deps.modeManager.list().map(r=>r.id).join(", ")}`);const s=this.deps.modeManager.getActiveId();return this.deps.modeManager.setMode(t).then(()=>{s!==t&&this.emitter.emit("modeChanged",{mode:t})})}),this.define("setAutoRotate","Enable or disable the idle showroom rotation of the building.",ge({on:$s(),speed:Qe().positive().max(10).optional()}),({on:t,speed:i})=>{this.deps.cameraDirector.setAutoRotate(t,i),this.emitter.emit("autoRotateChanged",{on:t,speed:i})}),this.define("orbitTo","Fly the camera to an orbit position around the building. Azimuth 0 faces north; elevation is degrees above the horizon.",ge({azimuthDeg:Qe().min(-360).max(360),elevationDeg:Qe().min(0).max(89),...Rh}),async t=>{this.leaveRoomForNavigation();const i=await this.deps.cameraDirector.orbitTo(t.azimuthDeg,t.elevationDeg,{durationMs:t.durationMs,radius:t.radius});return i==="completed"&&this.emitter.emit("cameraSettled",{command:"orbitTo"}),{outcome:i}}),this.define("setView","Fly the camera to a named preset view.",ge({view:wT,...Rh}),async t=>{this.leaveRoomForNavigation();const i=await this.deps.cameraDirector.setView(t.view,{durationMs:t.durationMs,radius:t.radius});return i==="completed"&&this.emitter.emit("cameraSettled",{command:"setView"}),{outcome:i}}),this.define("zoomTo","Cinematic flight framing an entity (or the whole building).",ge({target:Si([Ct("building"),Sa]),...zi}),t=>{t.target!=="building"&&this.assertEntity(t.target,"zoomTo"),this.leaveRoomForNavigation();const i=this.deps.sceneIndex.boxOf(t.target);return this.deps.cameraDirector.zoomToBox(i,{durationMs:t.durationMs}).then(s=>(s==="completed"&&this.emitter.emit("cameraSettled",{command:"zoomTo"}),{outcome:s}))}),this.define("explode","Separate the floors vertically (0 = assembled … 1 = fully exploded).",ge({factor:Qe().min(0).max(1),...zi}),({factor:t,durationMs:i})=>(this.leaveRoomForNavigation(),this.deps.viewStateMachine.explode(t,i))),this.define("isolateFloor","Focus a single floor; all other floors fade to ghost wireframe.",ge({floorId:Re(),...zi}),({floorId:t,durationMs:i})=>(this.assertFloor(t,"isolateFloor"),this.leaveRoomForNavigation(),this.deps.viewStateMachine.isolate(t,i))),this.define("flattenFloor","Isolate a floor and squash its rooms into a 2D/2.5D floor plan (auto-isolates first).",ge({floorId:Re(),style:At(["2d","2.5d"]),...zi}),({floorId:t,style:i,durationMs:s})=>(this.assertFloor(t,"flattenFloor"),this.leaveRoomForNavigation(),this.deps.viewStateMachine.flatten(t,i,s))),this.define("sliceFloor","Move the isolated (or flattened) floor focus one level up or down; preserves flatten style when active.",ge({direction:RT,...zi}),async({direction:t,durationMs:i})=>{const s=this.deps.buildingIndex.floorIds,r=this.floorSliceAnchor(),o=r?s.indexOf(r)+t:t>0?0:s.length-1,a=s[o];if(!a)return{outcome:"noop",floorId:r??null};this.leaveRoomForNavigation();const c=this.deps.viewStateMachine.getView();return{...c.kind==="FLATTENED"?await this.deps.viewStateMachine.flatten(a,c.style,i):await this.deps.viewStateMachine.isolate(a,i),floorId:a}}),this.define("reassemble","Return every floor to the assembled building and restore the orbit camera.",ge({...zi}),({durationMs:t})=>(this.leaveRoomForNavigation(),this.deps.viewStateMachine.reassemble(t))),this.define("select","Select a room and highlight it; the highlight survives view transitions.",ge({ref:Sa}),({ref:t})=>{this.assertRoom(t,"select");const i=this.deps.selectionService.select(t);return this.emitter.emit("selectionChanged",{ref:t,info:this.deps.buildingIndex.info(t)}),{changed:i}}),this.define("clearSelection","Drop the current selection and its highlight.",ge({}),()=>{const t=this.deps.selectionService.clear();return this.emitter.emit("selectionChanged",{ref:null,info:null}),{changed:t}}),this.define("inspect","Return an entity’s identity and sensor bindings from the domain model.",ge({ref:Sa}),({ref:t})=>(this.assertEntity(t,"inspect"),this.deps.buildingIndex.info(t))),this.define("getView","Return the current decomposition view state (PLAN §4.7).",ge({}),()=>this.deps.viewStateMachine.getView()),this.define("setTimeRange","Follow live data ('live') or scrub to a past instant (freezes on the range's `to` edge).",FT,({range:t})=>(this.deps.timeline.setTimeRange(t),{timeMode:this.deps.timeline.getState().mode})),this.define("setPlaybackSpeed","Multiplier on how fast simulated time advances in live mode.",ge({x:Qe().positive().max(1e3)}),({x:t})=>(this.deps.timeline.setPlaybackSpeed(t),{playbackSpeed:t})),this.define("setQuality","Pin the render quality tier (high/medium/low); disables auto-downgrade (PLAN §5.1).",ge({tier:At(["high","medium","low"])}),({tier:t})=>(this.deps.quality.setQuality(t),{quality:t})),this.define("enterRoom","Cinematic fly-through into a room; selects it and drops to an interior view.",ge({roomId:Re(),durationMs:Qe().positive().max(2e4).optional()}),({roomId:t,durationMs:i})=>{var a,c;this.assertRoom({type:"room",id:t},"enterRoom");const s=++this.focusVersion;this.deps.selectionService.select({type:"room",id:t}),this.emitter.emit("selectionChanged",{ref:{type:"room",id:t},info:this.deps.buildingIndex.info({type:"room",id:t})}),this.focusedRoom=t,this.emitter.emit("roomFocusChanged",{roomId:t}),(a=this.focusRestore)==null||a.call(this);const r=(c=this.deps.sceneIndex.room(t))==null?void 0:c.visual;if(r){const l=r.getOpacity();this.focusRestore=()=>{r.setOpacity(l)},r.setOpacity(.18)}const o=this.deps.sceneIndex.boxOf({type:"room",id:t});return this.deps.cameraDirector.enterRoom(o,{durationMs:i}).then(l=>(l==="superseded"&&s===this.focusVersion&&this.focusedRoom===t&&this.clearRoomFocus(),{outcome:l}))}),this.define("exitRoom","Fly back out of a room to the orbit view (no-op if not focused).",ge({durationMs:Qe().positive().max(2e4).optional()}),async({durationMs:t})=>this.focusedRoom?(++this.focusVersion,this.clearRoomFocus({abandonCamera:!1}),{outcome:await this.deps.cameraDirector.exitRoom({durationMs:t})}):{outcome:"noop"}),this.define("setControl","Command a room actuator: light (on/off), hvac (setpoint °C), or blind (0 open…1 closed).",DT,({roomId:t,kind:i,value:s})=>{if(!this.deps.controls.supports(t,i))throw this.reject("setControl","UNKNOWN_ENTITY",`Room '${t}' has no ${i} control.`,"Call getControls to see controllable rooms and their kinds.");const r=this.deps.controls.get(t),o=Ah(r,i)!==s,a=this.deps.controls.set(t,i,s).state;return o&&this.deps.timeline.refresh(),{state:a,changed:o}}),this.define("setControls","Batch-command one actuator across rooms selected by floor and/or zone function. Optional force override metadata is logged for server authorization.",LT,({selector:t,kind:i,value:s,override:r})=>{t.floorId&&this.assertFloor(t.floorId,"setControls");const o=[],a=[];return this.deps.controls.batch(()=>{for(const c of this.deps.buildingIndex.roomsMatching(t)){const{id:l}=c.room;if(!this.deps.controls.supports(l,i))continue;o.push(l);const u=this.deps.controls.get(l);Ah(u,i)!==s&&(this.deps.controls.set(l,i,s),a.push(l))}}),a.length>0&&this.deps.timeline.refresh(),{selector:{...t},kind:i,value:s,override:r,roomIds:o,changedRoomIds:a,changed:a.length}}),this.define("getControls","Read actuator state for one room, or every controllable room when roomId is omitted.",ge({roomId:Re().optional()}),({roomId:t})=>t?this.deps.controls.get(t)??null:this.deps.controls.list()),this.define("getPowerSummary","Summarize live mock kW by floor and zone, with the highest-draw rooms.",ge({floorId:Re().optional()}),({floorId:t})=>(t&&this.assertFloor(t,"getPowerSummary"),this.deps.power.summary(this.deps.timeline.currentFrame(),t))),this.define("getOperationsSnapshot","Read one coherent manager snapshot: scoped room sensors/controls, global alarms, and scoped power.",ge({floorId:Re().optional()}),({floorId:t})=>{t&&this.assertFloor(t,"getOperationsSnapshot");const i=this.deps.timeline.currentFrame(),s=this.deps.buildingIndex.roomsMatching({floorId:t}).map(r=>({roomId:r.room.id,roomName:r.room.name,floorId:r.floor.id,floorName:r.floor.name,zoneId:r.zone.id,zoneName:r.zone.name,zoneFunction:r.zone.function,readings:r.room.sensors.map(o=>({channel:o.channel,unit:o.unit,value:i.value(o.deviceId)??null})),controls:this.deps.controls.get(r.room.id)??null}));return{time:i.time,rooms:s,activeAlarms:this.deps.alarms.activeAlarms(),incidents:this.deps.incidents.summary({floorId:t}),power:this.deps.power.summary(i,t)}}),this.define("applyPowerAction","Apply a scoped mock power-management action: guest light trim, HVAC eco, solar shade, or restore comfort.",ge({action:TT,floorId:Re().optional()}),({action:t,floorId:i})=>{i&&this.assertFloor(i,"applyPowerAction");const s=this.deps.power.apply(t,i);return s.changedControls>0&&this.deps.timeline.refresh(),s}),this.define("getFrontDeskSnapshot","Read today’s front-desk inventory and queues, or scope them to an explicit period.",NT,({from:t,to:i})=>t===void 0||i===void 0?this.deps.frontDesk.snapshot():this.deps.frontDesk.snapshot(nn(t),nn(i))),this.define("searchRoomAvailability","Find guest rooms available for an arrival/departure period and party size, including readiness and conflict reasons.",Th,t=>this.deps.frontDesk.searchAvailability({arrivalAt:nn(t.arrivalAt),departureAt:nn(t.departureAt),guests:t.guests})),this.define("createReservation","Create a guest reservation, optionally assigning an available room immediately.",Th.safeExtend({guestName:UT,roomId:Re().optional(),notes:OT.optional()}),t=>this.runFrontDeskMutation("createReservation",()=>this.deps.frontDesk.createReservation({guestName:t.guestName,guests:t.guests,arrivalAt:nn(t.arrivalAt),departureAt:nn(t.departureAt),roomId:t.roomId,notes:t.notes}))),this.define("assignReservationRoom","Assign or move a reserved stay to an available guest room.",ge({reservationId:Gr,roomId:Re()}),({reservationId:t,roomId:i})=>this.runFrontDeskMutation("assignReservationRoom",()=>this.deps.frontDesk.assignRoom(t,i))),this.define("checkInGuest","Check in a reserved guest to their inspected assigned room, or assign an available room as part of check-in.",ge({reservationId:Gr,roomId:Re().optional()}),({reservationId:t,roomId:i})=>this.runFrontDeskMutation("checkInGuest",()=>this.deps.frontDesk.checkIn(t,i))),this.define("checkOutGuest","Check out an in-house guest and mark the vacated room dirty for housekeeping.",ge({reservationId:Gr}),({reservationId:t})=>this.runFrontDeskMutation("checkOutGuest",()=>this.deps.frontDesk.checkOut(t))),this.define("cancelReservation","Cancel a reserved stay; an in-house stay must be checked out instead.",ge({reservationId:Gr}),({reservationId:t})=>this.runFrontDeskMutation("cancelReservation",()=>this.deps.frontDesk.cancelReservation(t))),this.define("setRoomReadiness","Update housekeeping readiness for an unoccupied guest room: dirty, clean, inspected, or out of service.",ge({roomId:Re(),readiness:zT}),({roomId:t,readiness:i})=>this.runFrontDeskMutation("setRoomReadiness",()=>this.deps.frontDesk.setRoomReadiness(t,i))),this.define("readRoom","Current sensor readings for a room at the displayed instant (channel, unit, value).",ge({roomId:Re()}),({roomId:t})=>{this.assertRoom({type:"room",id:t},"readRoom");const i=this.deps.timeline.currentFrame();return this.deps.buildingIndex.info({type:"room",id:t}).sensors.map(s=>({channel:s.channel,unit:s.unit,value:i.value(s.deviceId)??null}))}),this.define("queryRoom","History series (default 24 h) for each of a room’s sensors — for trends.",ge({roomId:Re(),hours:Qe().positive().max(168).optional()}),({roomId:t,hours:i=24})=>{this.assertRoom({type:"room",id:t},"queryRoom");const s=this.deps.timeline.history(i);return this.deps.buildingIndex.info({type:"room",id:t}).sensors.map(r=>({channel:r.channel,unit:r.unit,points:s.map(o=>o.value(r.deviceId)??null)}))}),this.define("listAlarms","Return the alarms currently firing and the configured alarm rules.",ge({}),()=>({active:this.deps.alarms.activeAlarms(),rules:this.deps.alarms.listRules()})),this.define("setAlarmRule","Add or replace an alarm rule (threshold on a sensor channel).",ge({id:Re(),channel:At(["temperature","humidity","lux","power","occupancy"]),op:At([">","<"]),threshold:Qe().finite(),severity:At(["warning","critical"]),label:Re(),zoneFunction:At(["guest","lobby","corridor","plant","amenity"]).optional()}),t=>(this.deps.alarms.setRule(t),{ruleId:t.id})),this.define("clearAlarmRule","Remove an alarm rule and clear any alarms it raised.",ge({id:Re()}),({id:t})=>({removed:this.deps.alarms.clearRule(t)})),this.define("listIncidents","List retained operational incidents, optionally filtered by status, severity, floor, room, or source alarm key.",IT,t=>(t.floorId&&this.assertFloor(t.floorId,"listIncidents"),t.roomId&&this.assertRoom({type:"room",id:t.roomId},"listIncidents"),this.deps.incidents.list(t))),this.define("getIncident","Read one incident with its acknowledgement, assignment, escalation, notes, evidence, and audit timeline.",ge({incidentId:Re()}),({incidentId:t})=>{const i=this.deps.incidents.get(t);if(!i)throw this.reject("getIncident","UNKNOWN_INCIDENT",`No incident '${t}' exists.`,"Call listIncidents to discover current incident ids.");return i}),this.define("listCameraCoverage","List privacy-safe shared-area camera coverage. Resident/guest zones are always excluded.",ge({floorId:Re().optional()}),({floorId:t})=>(t&&this.assertFloor(t,"listCameraCoverage"),this.deps.incidents.listCameraCoverage(t))),this.define("acknowledgeIncident","Acknowledge an open incident and record the operator in its audit timeline.",ge({incidentId:Re(),actor:oi}),({incidentId:t,actor:i})=>this.runIncidentMutation("acknowledgeIncident",()=>this.deps.incidents.acknowledge(t,i))),this.define("assignIncident","Assign an unresolved incident to an operating team or named responder.",ge({incidentId:Re(),assignee:oi,actor:oi}),({incidentId:t,assignee:i,actor:s})=>this.runIncidentMutation("assignIncident",()=>this.deps.incidents.assign(t,i,s))),this.define("escalateIncident","Raise an unresolved incident to supervisor or emergency level with a required reason.",ge({incidentId:Re(),level:CT,actor:oi,reason:Hr}),t=>this.runIncidentMutation("escalateIncident",()=>this.deps.incidents.escalate(t.incidentId,t.level,t.actor,t.reason))),this.define("addIncidentNote","Append an attributed note to an incident audit timeline.",ge({incidentId:Re(),author:oi,text:Hr}),({incidentId:t,author:i,text:s})=>this.runIncidentMutation("addIncidentNote",()=>this.deps.incidents.addNote(t,i,s))),this.define("captureIncidentCameraEvidence","Capture a synthetic showcase snapshot from a privacy-safe camera on the incident floor and attach it to the audit record.",ge({incidentId:Re(),cameraId:Re(),actor:oi,note:Hr.optional()}),t=>this.runIncidentMutation("captureIncidentCameraEvidence",()=>this.deps.incidents.captureCameraEvidence(t.incidentId,t.cameraId,t.actor,t.note))),this.define("resolveIncident","Resolve an incident after its source alarm clears, recording the operator and resolution.",ge({incidentId:Re(),actor:oi,resolution:Hr}),({incidentId:t,actor:i,resolution:s})=>this.runIncidentMutation("resolveIncident",()=>this.deps.incidents.resolve(t,i,s))),this.define("setAudio","Toggle audio cues and/or set the cue volume (0–1).",ge({enabled:$s().optional(),volume:Qe().min(0).max(1).optional()}),t=>{const i=this.deps.audio.setAudio(t);return this.emitter.emit("audioChanged",i),i}),this.define("listScenes","List the available lighting/HVAC scenes.",ge({}),()=>this.deps.scenes.list()),this.define("applyScene","Apply a named scene — a batch of actuator changes (see listScenes).",ge({scene:Re()}),({scene:t})=>{if(!this.deps.scenes.has(t))throw this.reject("applyScene","UNKNOWN_SCENE",`No scene '${t}'.`,`Available: ${this.deps.scenes.list().map(s=>s.id).join(", ")}`);const i=this.deps.scenes.apply(t);return i>0&&this.deps.timeline.refresh(),{scene:t,changed:i}}),this.define("startTour","Begin the choreographed attract-loop tour (any user input stops it).",ge({}),()=>(this.deps.tour.start(),{running:this.deps.tour.isRunning()})),this.define("stopTour","Stop the attract-loop tour.",ge({}),()=>(this.deps.tour.stop(),{running:this.deps.tour.isRunning()}))}setMode(e){return this.call("setMode",{mode:e})}getMode(){return this.deps.modeManager.getActiveId()??"none"}listModes(){return this.deps.modeManager.list()}setAutoRotate(e,t){return this.call("setAutoRotate",{on:e,speed:t})}orbitTo(e,t,i={}){return this.call("orbitTo",{azimuthDeg:e,elevationDeg:t,...i})}setView(e,t={}){return this.call("setView",{view:e,...t})}zoomTo(e,t={}){return this.call("zoomTo",{target:e,...t})}explode(e,t={}){return this.call("explode",{factor:e,...t})}isolateFloor(e,t={}){return this.call("isolateFloor",{floorId:e,...t})}flattenFloor(e,t,i={}){return this.call("flattenFloor",{floorId:e,style:t,...i})}sliceFloor(e,t={}){return this.call("sliceFloor",{direction:e,...t})}reassemble(e={}){return this.call("reassemble",{...e})}select(e){return this.call("select",e)}clearSelection(){return this.call("clearSelection",{})}inspect(e){return this.runCommand("inspect",{ref:e})}getView(){return this.runCommand("getView",{})}setTimeRange(e){return this.call("setTimeRange",{range:e})}setPlaybackSpeed(e){return this.call("setPlaybackSpeed",{x:e})}setQuality(e){return this.call("setQuality",{tier:e})}enterRoom(e,t={}){return this.call("enterRoom",{roomId:e,...t})}exitRoom(e={}){return this.call("exitRoom",e)}setControl(e,t,i){return this.call("setControl",{roomId:e,kind:t,value:i})}setControls(e,t,i,s={}){return this.call("setControls",{selector:e,kind:t,value:i,...s})}getControls(e){return this.runCommand("getControls",{roomId:e})}getPowerSummary(e){return this.runCommand("getPowerSummary",{floorId:e})}getOperationsSnapshot(e){return this.runCommand("getOperationsSnapshot",{floorId:e})}applyPowerAction(e,t){return this.call("applyPowerAction",{action:e,floorId:t})}getFrontDeskSnapshot(e=void 0){return this.runCommand("getFrontDeskSnapshot",e??{})}searchRoomAvailability(e,t,i){return this.runCommand("searchRoomAvailability",{arrivalAt:e,departureAt:t,guests:i})}createReservation(e){return this.call("createReservation",e)}assignReservationRoom(e,t){return this.call("assignReservationRoom",{reservationId:e,roomId:t})}checkInGuest(e,t){return this.call("checkInGuest",{reservationId:e,roomId:t})}checkOutGuest(e){return this.call("checkOutGuest",{reservationId:e})}cancelReservation(e){return this.call("cancelReservation",{reservationId:e})}setRoomReadiness(e,t){return this.call("setRoomReadiness",{roomId:e,readiness:t})}readRoom(e){return this.runCommand("readRoom",{roomId:e})}queryRoom(e,t){return this.runCommand("queryRoom",{roomId:e,hours:t})}listAlarms(){return this.runCommand("listAlarms",{})}setAlarmRule(e){return this.call("setAlarmRule",e)}clearAlarmRule(e){return this.call("clearAlarmRule",{id:e})}listIncidents(e={}){return this.runCommand("listIncidents",e)}getIncident(e){return this.runCommand("getIncident",{incidentId:e})}listCameraCoverage(e){return this.runCommand("listCameraCoverage",{floorId:e})}acknowledgeIncident(e,t){return this.call("acknowledgeIncident",{incidentId:e,actor:t})}assignIncident(e,t,i){return this.call("assignIncident",{incidentId:e,assignee:t,actor:i})}escalateIncident(e,t,i,s){return this.call("escalateIncident",{incidentId:e,level:t,actor:i,reason:s})}addIncidentNote(e,t,i){return this.call("addIncidentNote",{incidentId:e,author:t,text:i})}captureIncidentCameraEvidence(e,t,i,s){return this.call("captureIncidentCameraEvidence",{incidentId:e,cameraId:t,actor:i,note:s})}resolveIncident(e,t,i){return this.call("resolveIncident",{incidentId:e,actor:t,resolution:i})}setAudio(e){return this.call("setAudio",e)}applyScene(e){return this.call("applyScene",{scene:e})}listScenes(){return this.runCommand("listScenes",{})}startTour(){return this.call("startTour",{})}stopTour(){return this.call("stopTour",{})}dispose(){var e,t,i;this.disposed||(this.disposed=!0,++this.focusVersion,this.commandListeners.clear(),(e=this.offControlChange)==null||e.call(this),this.offControlChange=null,(t=this.offIncidentChange)==null||t.call(this),this.offIncidentChange=null,(i=this.offFrontDeskChange)==null||i.call(this),this.offFrontDeskChange=null,this.deps.alarms.onAlarm(ki,ki),this.deps.viewStateMachine.setViewChangedListener(ki),this.deps.timeline.setChangeListener(ki),this.clearRoomFocus())}getState(){const e=this.deps.timeline.getState();return{mode:this.getMode(),autoRotate:this.deps.cameraDirector.autoRotate,view:this.deps.viewStateMachine.getView(),selection:this.deps.selectionService.current,commandCount:this.log.length,time:e.time,timeMode:e.mode,playbackSpeed:e.playbackSpeed,quality:this.deps.quality.getQuality(),focusedRoom:this.focusedRoom,activeAlarms:this.deps.alarms.activeAlarms().length,openIncidents:this.deps.incidents.summary().unresolved,audio:this.deps.audio.getState(),touring:this.deps.tour.isRunning()}}describe(){return[...this.commands.entries()].map(([e,t])=>({name:e,description:t.description,params:BT(t.schema)}))}getCommandLog(){return this.log.entries()}on(e,t){return this.disposed?ki:this.emitter.on(e,t)}async call(e,t={}){return this.runCommand(e,t)}onCommand(e){return this.disposed?ki:(this.commandListeners.add(e),()=>this.commandListeners.delete(e))}runCommand(e,t){if(this.disposed)throw new wh("DISPOSED","The interface controller has been disposed.");const i=this.commands.get(e);if(!i)throw this.reject(e,"UNKNOWN_COMMAND",`No command '${e}'.`,`Available: ${[...this.commands.keys()].join(", ")}`);const s=i.schema.safeParse(this.normalizeArgs(e,t));if(!s.success){const a=s.error.issues.map(c=>`${c.path.join(".")||"(args)"}: ${c.message}`).join("; ");throw this.reject(e,"INVALID_ARGS",`Invalid arguments for ${e} — ${a}`,"Call ui.describe() for command schemas.")}const r=mo(s.data),o=i.run(s.data);this.log.record(e,r);for(const a of this.commandListeners)a(e,mo(r));return o}normalizeArgs(e,t){return e!=="setTimeRange"?t:t==="live"||VT(t)?{range:t}:t}define(e,t,i,s){this.commands.set(e,{description:t,schema:i,run:s})}assertFloor(e,t){if(!this.deps.buildingIndex.floor(e))throw this.reject(t,"UNKNOWN_ENTITY",`No floor '${e}' in the building.`,`Valid floors: ${this.deps.buildingIndex.floorIds.join(", ")}`)}floorSliceAnchor(){var i,s;const e=this.deps.viewStateMachine.getView();if(e.kind==="ISOLATED"||e.kind==="FLATTENED")return e.floorId;if(this.focusedRoom)return(i=this.deps.buildingIndex.room(this.focusedRoom))==null?void 0:i.floor.id;const t=this.deps.selectionService.current;if((t==null?void 0:t.type)==="floor")return t.id;if((t==null?void 0:t.type)==="room")return(s=this.deps.buildingIndex.room(t.id))==null?void 0:s.floor.id}leaveRoomForNavigation(){++this.focusVersion,this.clearRoomFocus()}clearRoomFocus(e={}){var i;const t=this.focusedRoom!==null;return t&&(this.focusedRoom=null,this.emitter.emit("roomFocusChanged",{roomId:null})),(i=this.focusRestore)==null||i.call(this),this.focusRestore=null,e.abandonCamera!==!1&&this.deps.cameraDirector.abandonRoomFocus(),t}assertRoom(e,t){if(e.type!=="room"||!this.deps.buildingIndex.room(e.id))throw this.reject(t,"UNKNOWN_ENTITY",`No room '${e.id}' in the building.`,`Valid floors: ${this.deps.buildingIndex.floorIds.join(", ")}`)}assertEntity(e,t){if(!(e.type==="building"||e.type==="room"&&!!this.deps.buildingIndex.room(e.id)||e.type==="floor"&&!!this.deps.buildingIndex.floor(e.id)))throw this.reject(t,"UNKNOWN_ENTITY",`No ${e.type} '${e.id}' in the building.`,`Valid floors: ${this.deps.buildingIndex.floorIds.join(", ")}`)}runIncidentMutation(e,t){try{return t()}catch(i){throw i instanceof Vi?this.reject(e,i.code,i.message,i.hint):i}}runFrontDeskMutation(e,t){try{return t()}catch(i){throw i instanceof Bt?this.reject(e,i.code,i.message,i.hint):i}}reject(e,t,i,s){const r=new wh(t,i,s);return this.emitter.emit("commandRejected",{command:e,error:{code:t,message:i,hint:s}}),r}}function BT(n){try{return ab(n)}catch{return}}function nn(n){return typeof n=="number"?n:Date.parse(n)}function VT(n){if(!n||typeof n!="object"||Array.isArray(n))return!1;const e=n;return!Object.hasOwn(e,"range")&&(Object.hasOwn(e,"from")||Object.hasOwn(e,"to"))}function Ah(n,e){return e==="light"?n.state.light:e==="hvac"?n.state.hvacSetpoint:n.state.blind}function ki(){}class HT{constructor(){C(this,"handlers",new Map)}on(e,t){let i=this.handlers.get(e);return i||(i=new Set,this.handlers.set(e,i)),i.add(t),()=>i.delete(t)}emit(e,t){var i;(i=this.handlers.get(e))==null||i.forEach(s=>s(t))}clear(){this.handlers.clear()}}function Cf(n){return n.map(e=>({name:e.name,description:e.description,input_schema:GT(e.params)?e.params:{type:"object",properties:{}}}))}function GT(n){return typeof n=="object"&&n!==null}async function WT(n,e,t={}){var s;const i=[];for(let r=0;r<e.length;r++){const o=e[r];try{await n.call(o.name,o.args)}catch(a){i.push({name:o.name,message:a instanceof Error?a.message:String(a)})}(s=t.onStep)==null||s.call(t,o,r)}return{steps:e.length,rejected:i}}const Ch=Date.UTC(2026,6,17,5,0,0),Ih=[{name:"setAutoRotate",args:{on:!1}},{name:"setTimeRange",args:{from:Ch,to:Ch}},{name:"setMode",args:{mode:"electricity"}},{name:"orbitTo",args:{azimuthDeg:120,elevationDeg:35,durationMs:1}},{name:"explode",args:{factor:1,durationMs:1}},{name:"setMode",args:{mode:"environment"}},{name:"isolateFloor",args:{floorId:"F4",durationMs:1}},{name:"setMode",args:{mode:"occupancy"}},{name:"flattenFloor",args:{floorId:"F4",style:"2d",durationMs:1}},{name:"reassemble",args:{durationMs:1}},{name:"select",args:{ref:{type:"room",id:"F4-R03"}}}];class tl{constructor(e,t,i=!1){C(this,"disposed",!1);C(this,"onMessage");this.ui=e,this.socket=t,this.closeSocketOnDispose=i,this.onMessage=s=>void this.handle(s.data),t.onmessage=this.onMessage}static connect(e,t){return new tl(e,new WebSocket(t),!0)}dispose(){var e,t;this.disposed||(this.disposed=!0,this.socket.onmessage===this.onMessage&&(this.socket.onmessage=null),this.closeSocketOnDispose&&((t=(e=this.socket).close)==null||t.call(e)))}async handle(e){if(this.disposed)return;let t;try{t=JSON.parse(e)}catch{return this.send({error:{code:"BAD_JSON",message:"payload was not valid JSON"}})}if(t.name==="__list_tools")return this.send({id:t.id,result:Cf(this.ui.describe())});try{const i=await this.ui.call(t.name,t.args??{});this.send({id:t.id,result:i??null})}catch(i){const s=i;this.send({id:t.id,error:{code:s.code??"ERROR",message:s.message??String(i),hint:s.hint}})}}send(e){this.disposed||this.socket.send(JSON.stringify(e))}}const $T=new Set(["inspect","getView","getControls","getPowerSummary","getOperationsSnapshot","readRoom","queryRoom","listAlarms","listIncidents","getIncident","listCameraCoverage","getFrontDeskSnapshot","searchRoomAvailability","listScenes"]);class XT{constructor(e,t="holo-bms",i=s=>new BroadcastChannel(s)){C(this,"ch");C(this,"applying",!1);C(this,"off");C(this,"source",YT());C(this,"peers",new Set);C(this,"leader",!0);C(this,"leadershipListeners",new Set);this.ui=e,this.ch=i(t),this.ch.onmessage=s=>this.receive(s.data),this.off=e.onCommand((s,r)=>{this.applying||$T.has(s)||this.ch.postMessage({type:"command",source:this.source,name:s,args:r})}),this.ch.postMessage({type:"hello",source:this.source})}isLeader(){return this.leader}onLeadershipChange(e){return this.leadershipListeners.add(e),e(this.leader),()=>this.leadershipListeners.delete(e)}dispose(){this.ch.postMessage({type:"goodbye",source:this.source}),this.off(),this.leadershipListeners.clear(),this.ch.close()}receive(e){if(!(!ZT(e)||e.source===this.source))switch(e.type){case"hello":this.addPeer(e.source),this.ch.postMessage({type:"present",source:this.source});return;case"present":this.addPeer(e.source);return;case"goodbye":this.peers.delete(e.source)&&this.updateLeadership();return;case"command":this.applying=!0;let t;try{t=this.ui.call(e.name,e.args)}finally{this.applying=!1}t.catch(()=>{})}}addPeer(e){this.peers.has(e)||(this.peers.add(e),this.updateLeadership())}updateLeadership(){const e=this.source===[...this.peers,this.source].sort()[0];if(e!==this.leader){this.leader=e;for(const t of this.leadershipListeners)t(e)}}}function ZT(n){if(!n||typeof n!="object")return!1;const e=n;return typeof e.source!="string"||typeof e.type!="string"?!1:e.type==="command"?typeof e.name=="string":e.type==="hello"||e.type==="present"||e.type==="goodbye"}function YT(){var e,t;return((t=(e=globalThis.crypto)==null?void 0:e.randomUUID)==null?void 0:t.call(e))??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}function js(n,e){const t=new Map;for(const i of e)t.set(i.deviceId,i.value);return{time:n,readings:e,value:i=>t.get(i)}}const qT=36e5,jT={temperature:{unit:"°C",domain:[18,34],label:"Temperature"},humidity:{unit:"%RH",domain:[30,90],label:"Humidity"},lux:{unit:"lx",domain:[0,1e3],label:"Illuminance"},power:{unit:"kW",domain:[0,6],label:"Power"},occupancy:{unit:"ppl",domain:[0,4],label:"Occupancy"}};class If{constructor(e,t){C(this,"sensors",[]);C(this,"lon");this.controls=t,this.lon=e.location.lon;for(const i of e.floors)for(const s of i.zones)for(const r of s.rooms)for(const o of r.sensors)this.sensors.push({deviceId:o.deviceId,channel:o.channel,unit:o.unit,roomId:r.id,zoneFn:s.function,seed:sR(o.deviceId)})}capabilities(){return[...new Set(this.sensors.map(t=>t.channel))].map(t=>({channel:t,...jT[t]}))}sample(e,t){const i=new Set(e),s=[];for(const r of this.sensors)i.has(r.channel)&&s.push({deviceId:r.deviceId,channel:r.channel,unit:r.unit,value:rR(this.valueFor(r,t))});return js(t,s)}query(e,t,i=6e4){const s=[];for(let r=t.from;r<=t.to;r+=i)s.push(this.sample(e,r));return s}solarHour(e){return((e/qT%24+this.lon/15)%24+24)%24}valueFor(e,t){var o;const i=this.solarHour(t),s=.5+.5*Math.sin(t/6e5+e.seed),r=(o=this.controls)==null?void 0:o.call(this,e.roomId);switch(e.channel){case"temperature":{const a=(r==null?void 0:r.blind)??0,c=go(i)*QT(e.zoneFn)*(1-a*.75),l=Wr(i)-KT(e.zoneFn)+c+(s-.5)*1.2;return r?l*.4+r.hvacSetpoint*.6:l}case"humidity":return Sc(78-(Wr(i)-24)*3+(s-.5)*6,30,95);case"lux":{const a=go(i)*JT(e.zoneFn)*(.85+.3*s),c=r?1-.85*r.blind:1,l=r!=null&&r.light?120:0;return Math.max(0,a*c+l)}case"occupancy":return Pf(e.zoneFn,i,e.seed);case"power":{const a=eR(e.zoneFn,i,Wr(i),e.seed,s);return r?nR(a,r,e.zoneFn,i,Wr(i)):a}}}}function Wr(n){return 28+5*Math.sin(2*Math.PI*(n-9)/24)}function go(n){return n<=6||n>=18?0:Math.sin(Math.PI*(n-6)/12)}function KT(n){switch(n){case"guest":return 4;case"lobby":case"amenity":return 5;case"corridor":return 2;case"plant":return-2}}function JT(n){switch(n){case"amenity":return 900;case"lobby":return 700;case"guest":return 500;case"corridor":return 300;case"plant":return 150}}function QT(n){switch(n){case"guest":return 1.4;case"lobby":return 1;case"amenity":return .9;case"corridor":return .35;case"plant":return .2}}function Pf(n,e,t){const i=.5+.5*Math.sin(t*12.9898);switch(n){case"guest":{const s=e<8||e>=22?1:e>=18?.6:.15;return i>.45?$r(s*(1+i)):0}case"lobby":return $r(Ts(e,10,6)*4+Ts(e,18,4)*2);case"amenity":return $r(Ts(e,8,3)*2+Ts(e,19,4)*3);case"corridor":return $r(Ts(e,9,8)*1.5);case"plant":return 0}}function eR(n,e,t,i,s){const r=Math.max(0,t-24)*tR(n),o=Pf(n,e,i);switch(n){case"guest":return Hi(.15+r+o*.25+s*.1);case"lobby":return Hi(1.2+r+o*.15+s*.3);case"amenity":return Hi(.8+r+o*.3+s*.4);case"corridor":return Hi(.3+r*.3+s*.05);case"plant":return Hi(2.5+r*1.5+go(e)*.5+s*.6)}}function tR(n){switch(n){case"guest":return .08;case"lobby":case"amenity":return .15;case"corridor":return .04;case"plant":return .4}}function nR(n,e,t,i,s){let r=n;if(e.light||(r*=1-iR(t)),t==="guest"||t==="lobby"||t==="amenity"){const o=Sc((s-24)/10,0,1.2),a=e.hvacSetpoint-24;r*=Sc(1-a*.055*o,.72,1.3)}return t==="guest"&&(r*=1-go(i)*e.blind*.14),Hi(Math.max(.03,r))}function iR(n){switch(n){case"guest":return .32;case"lobby":return .25;case"amenity":return .28;case"corridor":return .22;case"plant":return 0}}function Ts(n,e,t){const i=(n-e)/t;return Math.exp(-.5*i*i)}function sR(n){let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return(e>>>0)%1e3/1e3}function Sc(n,e,t){return n<e?e:n>t?t:n}const rR=n=>Math.round(n*100)/100,$r=n=>Math.round(n*10)/10,Hi=n=>Math.round(n*100)/100;class Ea{constructor(e,t,i,s=Af){C(this,"fallback");C(this,"worker",null);C(this,"nextRequestId",1);C(this,"pending",new Map);C(this,"alarmSnapshots",new WeakMap);C(this,"alarmRulesRevision",0);C(this,"disposed",!1);C(this,"onWorkerMessage",e=>{const t=e.data,i=this.pending.get(t.requestId);if(!i)return;if(this.pending.delete(t.requestId),t.type==="error"){i.resolve(this.fallback.sample(i.channels,i.time)),this.disableWorker();return}const s=js(t.time,t.readings);if(t.alarmRulesRevision===this.alarmRulesRevision){const r=t.activeAlarms.map(o=>({...o}));this.alarmSnapshots.set(s,r)}i.resolve(s)});C(this,"onWorkerError",()=>{this.disableWorker()});if(this.fallback=new If(e,t),!(typeof Worker>"u"))try{const r=new Worker(new URL("/ihapm-bms-showcase/assets/mockTelemetry.worker-BgN0WQmu.js",import.meta.url),{type:"module",name:"ihapm-telemetry"});this.worker=r,r.addEventListener("message",this.onWorkerMessage),r.addEventListener("error",this.onWorkerError),this.post({type:"init",building:e,controls:i.map(({roomId:o,state:a})=>({roomId:o,state:a})),alarmRules:s.map(o=>({...o}))})}catch{this.worker=null}}capabilities(){return this.fallback.capabilities()}sample(e,t){return this.fallback.sample(e,t)}query(e,t,i){return this.fallback.query(e,t,i)}sampleAsync(e,t){return!this.worker||this.disposed?Promise.resolve(this.fallback.sample(e,t)):new Promise(i=>{const s=this.nextRequestId++;this.pending.set(s,{channels:[...e],time:t,resolve:i});try{this.post({type:"sample",requestId:s,channels:[...e],time:t,alarmRulesRevision:this.alarmRulesRevision})}catch{const r=this.pending.get(s);this.pending.delete(s),this.disableWorker(),i(this.fallback.sample((r==null?void 0:r.channels)??e,(r==null?void 0:r.time)??t))}})}getExecutionMode(){return this.worker?"worker":"main"}updateControl(e){!this.worker||this.disposed||this.post({type:"control",roomId:e.roomId,state:{...e.state}})}setAlarmRules(e){!this.worker||this.disposed||(this.alarmRulesRevision+=1,this.post({type:"alarmRules",rules:e.map(t=>({...t}))}))}takeAlarmSnapshot(e){const t=this.alarmSnapshots.get(e);return t?(this.alarmSnapshots.delete(e),t.map(i=>({...i}))):null}dispose(){this.disposed||(this.disposed=!0,this.disableWorker())}post(e){var t;(t=this.worker)==null||t.postMessage(e)}disableWorker(){const e=this.worker;this.worker=null,e&&(e.removeEventListener("message",this.onWorkerMessage),e.removeEventListener("error",this.onWorkerError),e.terminate());for(const t of this.pending.values())t.resolve(this.fallback.sample(t.channels,t.time));this.pending.clear()}}const oR=ge({deviceId:Re(),channel:jc,unit:Re(),value:Qe().finite()}),aR=ge({time:Qe().finite(),readings:Kn(oR)}),cR=ge({channel:jc,unit:Re(),domain:vf([Qe().finite(),Qe().finite()]),label:Re()}),lR=qc("type",[ge({type:Ct("hello"),protocol:Ct(1),capabilities:Kn(cR)}),ge({type:Ct("frame"),frame:aR}),ge({type:Ct("control"),id:Re(),roomId:Re(),kind:At(["light","hvac","blind"]),value:Si([$s(),Qe().finite()]),accepted:Ct(!0)}),ge({type:Ct("error"),code:Re(),message:Re(),id:Re().optional()})]);class uR{constructor(e,t,i={}){C(this,"fallback");C(this,"socketFactory");C(this,"reconnectMs");C(this,"maxCachedFrames");C(this,"socket",null);C(this,"reconnectTimer");C(this,"disposed",!1);C(this,"connected",!1);C(this,"capabilitiesValue");C(this,"frames",[]);C(this,"frameListeners",new Set);C(this,"controlListeners",new Set);C(this,"outbox",[]);C(this,"sequence",0);this.url=e,this.fallback=new If(t),this.capabilitiesValue=this.fallback.capabilities(),this.socketFactory=i.webSocketFactory??(s=>new WebSocket(s)),this.reconnectMs=i.reconnectMs??1500,this.maxCachedFrames=Math.max(2,i.maxCachedFrames??1440)}capabilities(){return this.capabilitiesValue.map(e=>({...e,domain:[...e.domain]}))}connect(){if(this.disposed||this.socket)return;let e;try{e=this.socketFactory(this.url)}catch{this.scheduleReconnect();return}this.socket=e,e.onopen=()=>{if(!(this.socket!==e||this.disposed)){this.connected=!0,this.sendNow({type:"hello",protocol:1}),this.sendNow({type:"subscribe"});for(const t of this.outbox.splice(0))this.sendNow(t)}},e.onmessage=t=>this.receive(e,t.data),e.onerror=()=>{},e.onclose=()=>{this.socket===e&&(this.socket=null,this.connected=!1,this.scheduleReconnect())}}dispose(){if(this.disposed)return;this.disposed=!0,window.clearTimeout(this.reconnectTimer),this.reconnectTimer=void 0;const e=this.socket;this.socket=null,this.connected=!1,e&&(e.onopen=null,e.onmessage=null,e.onerror=null,e.onclose=null,e.close()),this.frameListeners.clear(),this.controlListeners.clear(),this.outbox=[]}onFrame(e){return this.frameListeners.add(e),()=>this.frameListeners.delete(e)}onControl(e){return this.controlListeners.add(e),()=>this.controlListeners.delete(e)}sendControl(e){const t={type:"control",id:`control-${++this.sequence}`,roomId:e.roomId,kind:e.kind,value:e.value};this.connected?this.sendNow(t):this.outbox.push(t)}sample(e,t){const i=hR(this.frames,t);return i?dR(i,e,t):this.fallback.sample(e,t)}query(e,t,i=6e4){const s=[];for(let r=t.from;r<=t.to;r+=i)s.push(this.sample(e,r));return s}receive(e,t){if(this.socket!==e||this.disposed||typeof t!="string")return;let i;try{i=JSON.parse(t)}catch{return}const s=lR.safeParse(i);if(s.success)switch(s.data.type){case"hello":this.capabilitiesValue=s.data.capabilities.map(r=>({...r,domain:[...r.domain]}));return;case"frame":{const r=js(s.data.frame.time,s.data.frame.readings.map(o=>({...o})));this.frames.push(r),this.frames.length>this.maxCachedFrames&&this.frames.splice(0,this.frames.length-this.maxCachedFrames);for(const o of this.frameListeners)o(fR(r));return}case"control":{const r={roomId:s.data.roomId,kind:s.data.kind,value:s.data.value};for(const o of this.controlListeners)o({...r});return}case"error":return}}sendNow(e){if(!(!this.socket||!this.connected))try{this.socket.send(JSON.stringify(e))}catch{e.type==="control"&&this.outbox.push(e)}}scheduleReconnect(){this.disposed||this.reconnectMs<=0||this.reconnectTimer!==void 0||(this.reconnectTimer=window.setTimeout(()=>{this.reconnectTimer=void 0,this.connect()},this.reconnectMs))}}function hR(n,e){let t,i=1/0;for(const s of n){const r=Math.abs(s.time-e);r<i&&(t=s,i=r)}return t}function dR(n,e,t){const i=new Set(e);return js(t,n.readings.filter(s=>i.has(s.channel)).map(s=>({...s})))}function fR(n){return js(n.time,n.readings.map(e=>({...e})))}const pR={id:"default",name:"Hologram",description:"Idle showroom hologram — slow rotation, ambient particles, no data overlay.",accent:"#36e6ff",channels:[]},mR={id:"electricity",name:"Electricity",description:"Live power draw — rooms tinted by kW, per-floor bars, pulsing risers.",accent:"#aef049",channels:["power"]},gR={id:"environment",name:"Environment",description:"Heat, humidity & sunlight — temperature tint, humidity fog, sun from real geo + time.",accent:"#ffb020",channels:["temperature","humidity","lux"]},vR={id:"occupancy",name:"Occupancy",description:"Live room occupancy — headcount tint, occupant dots, per-floor ring gauges.",accent:"#ff45c8",channels:["occupancy"]},_R=(n,e)=>{n?e.select({ref:n}):e.clearSelection()};function CR(n,e,t={}){const i=xR(AE(e)),s=new CE(i),r=new eT(i),o=new tT(i,r),a=new uT(i),c=new _T(i,r,i.location.lon),l=new ow(n,t.initialQuality??"high"),u=[],h=new Set,d=O=>{const ce=l.registerUpdate(O);return u.push(ce),ce},{root:f,floorGroups:g}=uw(i,l.getHoloLuminanceUniform());l.scene.add(f);const v=new Xt().setFromObject(f).getSize(new I),m=Math.hypot(v.x,v.z)/2+3,p=new yw(m);l.scene.add(p.group),d((O,ce)=>p.update(O,ce));const w=new Tw;d(()=>w.update(performance.now())),l.setActivityProbe(()=>w.hasActive||l.controls.autoRotate),l.controls.target.set(0,v.y*.45,0);const M=new dn(m*2.7,_t.degToRad(68),_t.degToRad(35));l.camera.position.setFromSpherical(M).add(l.controls.target),l.camera.lookAt(l.controls.target);const x=new Cw(l.camera,l.controls,w),U=new pn;U.name="modeOverlay",Ht(U),l.scene.add(U);const R=new HT,A=t.provider??(t.realtimeUrl?new uR(t.realtimeUrl,i):new Ea(i,O=>{var ce;return(ce=r.get(O))==null?void 0:ce.state},r.list())),D=new Jw(A);d(()=>D.tick()),Tf(A)?(u.push(A.onControl(O=>{r.supports(O.roomId,O.kind)&&(r.set(O.roomId,O.kind,O.value,"remote"),D.refresh())})),u.push(r.onChange((O,ce)=>{ce.origin==="local"&&A.sendControl(ce)})),u.push(()=>A.dispose())):A instanceof Ea&&(u.push(r.onChange(O=>A.updateControl(O))),u.push(()=>A.dispose()));const b=new Pw(g,f),S=new Uw(b,x,w,f);b.setLowDetail(l.getQuality()==="low"),S.setRenderQuality(l.getQuality());const P=Math.hypot(v.x,v.z),j=P*1.05,V=P*1.25;d(()=>{const ce=b.getRoomLod()==="summary"?j:V,ve=l.camera.position.distanceTo(l.controls.target),E=l.getQuality()==="low"&&S.getView().kind==="ASSEMBLED"&&ve>ce;b.setRoomLod(E?"summary":"rooms")});const $=new Vw(b),Q=new Sw(b,r);l.scene.add(Q.group),d(()=>Q.update()),u.push(()=>Q.dispose());const H=new sT(i),ie=new oT(i);A instanceof Ea?(A.setAlarmRules(H.listRules()),u.push(H.onRulesChanged(O=>A.setAlarmRules(O))),u.push(D.addFrameListener(O=>{const ce=A.takeAlarmSnapshot(O);ce?H.reconcileSnapshot(ce):H.evaluate(O)}))):u.push(D.addFrameListener(O=>H.evaluate(O)));const G=new Ew(b,H);l.scene.add(G.group),d((O,ce)=>G.update(ce));const ue=new MT,de=new Iw({building:i,buildingIndex:s,sceneIndex:b,overlay:U,cameraDirector:x,timeline:D,registerSceneUpdate:d,emitLegend:O=>R.emit("legendChanged",{spec:O}),setFog:O=>l.setFogDensity(O)});de.registerLazy(pR,async()=>{const{DefaultMode:O}=await Qs(async()=>{const{DefaultMode:ce}=await import("./DefaultMode-CEXpPCpu.js");return{DefaultMode:ce}},[]);return new O}),de.registerLazy(mR,async()=>{const{ElectricityMode:O}=await Qs(async()=>{const{ElectricityMode:ce}=await import("./ElectricityMode-BJvowrom.js");return{ElectricityMode:ce}},__vite__mapDeps([0,1]));return new O}),de.registerLazy(gR,async()=>{const{EnvironmentMode:O}=await Qs(async()=>{const{EnvironmentMode:ce}=await import("./EnvironmentMode-DwZY3w4N.js");return{EnvironmentMode:ce}},__vite__mapDeps([2,1]));return new O}),de.registerLazy(vR,async()=>{const{OccupancyMode:O}=await Qs(async()=>{const{OccupancyMode:ce}=await import("./OccupancyMode-DbNhQhZb.js");return{OccupancyMode:ce}},__vite__mapDeps([3,1]));return new O});let he=null;const Ae=new kT({modeManager:de,cameraDirector:x,viewStateMachine:S,selectionService:$,sceneIndex:b,buildingIndex:s,timeline:D,quality:{setQuality:O=>l.setQuality(O),getQuality:()=>l.getQuality()},audio:ue,tour:{start:()=>he==null?void 0:he.start(),stop:()=>he==null?void 0:he.stop(),isRunning:()=>(he==null?void 0:he.isRunning())??!1},controls:r,power:o,alarms:H,incidents:ie,frontDesk:a,scenes:c,emitter:R});l.onQualityChange((O,ce)=>{b.setLowDetail(O==="low"),O!=="low"&&b.setRoomLod("rooms"),S.setRenderQuality(O),R.emit("qualityChanged",{tier:O,auto:ce})});let Ke=null,Z=null;const re=()=>{b.setRoomLodExceptions([Ke,Z].filter(O=>O!==null))};u.push(Ae.on("selectionChanged",({ref:O})=>{Ke=(O==null?void 0:O.type)==="room"?O.id:null,re()})),u.push(Ae.on("roomFocusChanged",({roomId:O})=>{Z=O,re()}));const we=["modeChanged","viewChanged","selectionChanged","controlsChanged","roomFocusChanged","alarmsChanged","incidentsChanged","tourChanged"];for(const O of we)u.push(Ae.on(O,()=>l.requestRenderBurst()));const ae=t.multiScreenChannel?new XT(Ae,t.multiScreenChannel):null;if(t.autoScenes){let O=()=>{};const ce=ve=>{O(),O=ve?D.addLiveFrameListener(E=>c.tickSchedule(E.time,_=>void Ae.applyScene(_))):()=>{}};ae?u.push(ae.onLeadershipChange(ce)):ce(!0),u.push(()=>O())}ue.attach(Ae);const Ce=()=>{ue.unlock(),window.removeEventListener("pointerdown",Ce),window.removeEventListener("keydown",Ce)};window.addEventListener("pointerdown",Ce),window.addEventListener("keydown",Ce),u.push(()=>{window.removeEventListener("pointerdown",Ce),window.removeEventListener("keydown",Ce)}),he=new yT(Ae),he.onTourChanged(O=>R.emit("tourChanged",{running:O}));const ze=["pointerdown","keydown","wheel"];let Ue;const Ze=()=>{l.requestRenderBurst(),he!=null&&he.isRunning()&&Ae.stopTour(),t.idleTourMs&&t.idleTourMs>0&&(window.clearTimeout(Ue),Ue=window.setTimeout(()=>void Ae.startTour(),t.idleTourMs))};for(const O of ze)window.addEventListener(O,Ze,{passive:!0});u.push(()=>{window.clearTimeout(Ue);for(const O of ze)window.removeEventListener(O,Ze)}),t.idleTourMs&&t.idleTourMs>0&&(Ue=window.setTimeout(()=>void Ae.startTour(),t.idleTourMs));const K=t.onRoomPick??_R,oe=new Gw(l.camera,l.domElement,f,O=>K(O,Ae)),T=SR(Ae);let Te=!1;return{ui:Ae,building:i,start:()=>{Te||(l.start(),Ae.setMode(t.initialMode??"default"))},registerDisposer:O=>{if(Te)return O(),()=>{};h.add(O);let ce=!0;return()=>{ce&&(ce=!1,h.delete(O))}},dispose:async()=>{if(Te)return;Te=!0,l.stop();for(const ce of h)ce();h.clear(),he==null||he.stop(),T.dispose(),ae==null||ae.dispose(),oe.dispose(),D.dispose();for(const ce of u.splice(0))ce();S.dispose(),await de.dispose(),ue.dispose(),Ae.dispose(),x.dispose(),w.cancelAll(),yR(l.scene),l.scene.clear(),l.dispose(),R.clear();const O=window;O.ui===Ae&&delete O.ui,O.agent===T.agent&&delete O.agent}}}function xR(n){const e=new Set,t=i=>{if(!(!i||typeof i!="object"||e.has(i))){e.add(i);for(const s of Object.values(i))t(s);Object.freeze(i)}};return t(n),n}function yR(n){const e=new Set,t=new Set;n.traverse(i=>{const s=i;s.geometry&&e.add(s.geometry);const r=s.material;Array.isArray(r)?r.forEach(o=>t.add(o)):r&&t.add(r)});for(const i of e)i.dispose();for(const i of t)i.dispose()}function SR(n,e){const t=new Set,i=a=>{const c=tl.connect(n,a);return t.add(c),c},s={toolDefinitions:()=>Cf(n.describe()),replay:(a=Ih)=>WT(n,a),DEMO_SCENARIO:Ih,connect:i};window.ui=n,window.agent=s;let r;const o=new URLSearchParams(location.search).get("remote");return o&&i(o),{agent:s,holo:r,dispose:()=>{for(const a of t)a.dispose();t.clear()}}}const Ff=12;function IR(n,e){const t=wR(),i=MR(n,e),s=document.createElement("div");s.className="cmdk",s.hidden=!0,s.innerHTML=`
    <div class="cmdk-box" role="dialog" aria-label="Command palette">
      <input class="cmdk-input" type="text" placeholder="Jump to a room, mode, or action…" />
      <ul class="cmdk-list"></ul>
    </div>`,document.body.appendChild(s);const r=s.querySelector(".cmdk-input"),o=s.querySelector(".cmdk-list");let a=[],c=0;const l=()=>{s.hidden=!1,r.value="",h(),r.focus()},u=()=>{s.hidden=!0},h=()=>{a=bR(r.value,i).slice(0,Ff),c=0,o.innerHTML=a.map((M,x)=>`<li class="${x===c?"on":""}">${Ph(M.label)}${M.hint?`<span>${Ph(M.hint)}</span>`:""}</li>`).join("")},d=M=>{var x;a.length!==0&&(c=(c+M+a.length)%a.length,[...o.children].forEach((U,R)=>U.classList.toggle("on",R===c)),(x=o.children[c])==null||x.scrollIntoView({block:"nearest"}))},f=()=>{const M=a[c];u(),M==null||M.run()},g=()=>h(),v=M=>{const x=M.target.closest("li");x&&(c=[...o.children].indexOf(x),f())},m=M=>{M.key==="ArrowDown"?(M.preventDefault(),d(1)):M.key==="ArrowUp"?(M.preventDefault(),d(-1)):M.key==="Enter"?(M.preventDefault(),f()):M.key==="Escape"&&(M.preventDefault(),u())},p=M=>{M.target===s&&u()},w=M=>{(M.ctrlKey||M.metaKey)&&M.key.toLowerCase()==="k"&&(M.preventDefault(),s.hidden?l():u())};return r.addEventListener("input",g),o.addEventListener("mousedown",v),r.addEventListener("keydown",m),s.addEventListener("mousedown",p),window.addEventListener("keydown",w),()=>{r.removeEventListener("input",g),o.removeEventListener("mousedown",v),r.removeEventListener("keydown",m),s.removeEventListener("mousedown",p),window.removeEventListener("keydown",w),s.remove(),t()}}function MR(n,e){const t=[];for(const i of n.listModes())t.push({label:`Mode · ${i.name}`,hint:i.id,run:()=>void n.setMode(i.id)});for(const i of n.listScenes())t.push({label:`Scene · ${i.label}`,hint:i.hint,run:()=>void n.applyScene(i.id)});for(const i of["orbit","front","top","isometric"])t.push({label:`View · ${i}`,run:()=>void n.setView(i)});t.push({label:"Reassemble building",run:()=>void n.reassemble()},{label:"Explode floors",run:()=>void n.explode(1)},{label:"Fly out of room",run:()=>void n.exitRoom()},{label:"Start attract tour",run:()=>void n.startTour()},{label:"Stop attract tour",run:()=>void n.stopTour()},{label:"Toggle audio cues",run:()=>void n.setAudio({enabled:!n.getState().audio.enabled})},{label:"Quality · high",run:()=>void n.setQuality("high")},{label:"Quality · medium",run:()=>void n.setQuality("medium")},{label:"Quality · low",run:()=>void n.setQuality("low")},{label:"Live data",run:()=>void n.setTimeRange("live")});for(const i of e.floors)for(const s of i.zones)for(const r of s.rooms)t.push({label:r.name,hint:`${r.id} · ${i.name}`,run:()=>void n.enterRoom(r.id)});return t}function bR(n,e){return n.trim()?e.map(t=>({e:t,s:ER(n,`${t.label} ${t.hint??""}`)})).filter(t=>t.s>=0).sort((t,i)=>i.s-t.s).map(t=>t.e):e.slice(0,Ff)}function ER(n,e){const t=n.toLowerCase().replace(/\s+/g,""),i=e.toLowerCase();let s=0,r=0,o=0;for(const a of t){const c=i.indexOf(a,s);if(c===-1)return-1;o=c===s?o+1:0,r+=2+o*2-Math.min(c-s,8)*.1,s=c+1}return r}function Ph(n){return n.replace(/[&<>]/g,e=>e==="&"?"&amp;":e==="<"?"&lt;":"&gt;")}let Xr=null,Zr=0;function wR(){let n=document.getElementById("cmdk-styles");n||(n=document.createElement("style"),n.id="cmdk-styles",n.textContent=`
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
    `,document.head.appendChild(n),Xr=n),Zr+=1;let e=!1;return()=>{e||(e=!0,Zr=Math.max(0,Zr-1),Zr===0&&Xr&&(Xr.remove(),Xr=null))}}export{Nn as A,Ft as B,Be as C,pR as D,mR as E,Ns as H,xo as M,vR as O,AR as P,Bc as R,Mt as S,I as V,Qs as _,Pt as a,Uc as b,CR as c,fd as d,Ys as e,Ht as f,It as g,wf as h,gR as i,to as j,sn as k,IR as m,RR as r};
