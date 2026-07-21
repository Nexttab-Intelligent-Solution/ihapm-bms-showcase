const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ElectricityMode-D9uOeN15.js","assets/colorScales-DfqtCqwL.js","assets/EnvironmentMode-Cd4uV1Lg.js","assets/OccupancyMode-XH61KpSF.js"])))=>i.map(i=>d[i]);
var Zd=Object.defineProperty;var $d=(n,e,t)=>e in n?Zd(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var O=(n,e,t)=>$d(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Yd="demo-hotel",qd="IHAPM Demo Hotel",jd={lat:13.7563,lon:100.5018,northAngleDeg:0},Kd=JSON.parse('[{"id":"F1","name":"Level 1 · Lobby","elevation":0,"height":5,"outline":[[0,0],[40,0],[40,20],[0,20]],"zones":[{"id":"F1-Z-LOBBY","name":"Lobby","function":"lobby","rooms":[{"id":"F1-LOBBY","name":"Grand Lobby","footprint":[[0,0],[26,0],[26,20],[0,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F1-LOBBY-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F1-LOBBY-occupancy"},{"channel":"lux","unit":"lx","deviceId":"dev-F1-LOBBY-lux"}]},{"id":"F1-RECEP","name":"Reception","footprint":[[26,0],[34,0],[34,8],[26,8]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F1-RECEP-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F1-RECEP-occupancy"}]}]},{"id":"F1-Z-AMEN","name":"Amenities","function":"amenity","rooms":[{"id":"F1-CAFE","name":"Café","footprint":[[26,12],[40,12],[40,20],[26,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F1-CAFE-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F1-CAFE-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F1-CAFE-power"}]}]},{"id":"F1-Z-BOH","name":"Back of house","function":"plant","rooms":[{"id":"F1-BOH","name":"Back of House","footprint":[[34,0],[40,0],[40,8],[34,8]],"sensors":[{"channel":"power","unit":"kW","deviceId":"dev-F1-BOH-power"}]}]},{"id":"F1-Z-CORR","name":"Corridor","function":"corridor","rooms":[{"id":"F1-CORR","name":"Service corridor","footprint":[[26,8],[40,8],[40,12],[26,12]],"sensors":[]}]}]},{"id":"F2","name":"Level 2 · Amenities","elevation":5,"height":4.5,"outline":[[0,0],[40,0],[40,20],[0,20]],"zones":[{"id":"F2-Z-AMEN","name":"Amenities","function":"amenity","rooms":[{"id":"F2-REST","name":"Restaurant","footprint":[[0,0],[18,0],[18,20],[0,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F2-REST-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F2-REST-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F2-REST-power"}]},{"id":"F2-GYM","name":"Gym","footprint":[[18,0],[30,0],[30,9],[18,9]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F2-GYM-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F2-GYM-occupancy"}]},{"id":"F2-MTGA","name":"Meeting Room A","footprint":[[30,0],[40,0],[40,9],[30,9]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F2-MTGA-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F2-MTGA-occupancy"}]},{"id":"F2-SPA","name":"Spa","footprint":[[18,11],[30,11],[30,20],[18,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F2-SPA-temperature"},{"channel":"humidity","unit":"pctRH","deviceId":"dev-F2-SPA-humidity"}]},{"id":"F2-MTGB","name":"Meeting Room B","footprint":[[30,11],[40,11],[40,20],[30,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F2-MTGB-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F2-MTGB-occupancy"}]}]},{"id":"F2-Z-CORR","name":"Corridor","function":"corridor","rooms":[{"id":"F2-CORR","name":"Corridor L2","footprint":[[18,9],[40,9],[40,11],[18,11]],"sensors":[]}]}]},{"id":"F3","name":"Level 3 · Guest","elevation":9.5,"height":3.5,"outline":[[0,0],[40,0],[40,20],[0,20]],"zones":[{"id":"F3-Z-GUEST","name":"Guest rooms","function":"guest","rooms":[{"id":"F3-R01","name":"Room 301","footprint":[[0,0],[4,0],[4,8.5],[0,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R01-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R01-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R01-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R01-lux"}]},{"id":"F3-R02","name":"Room 302","footprint":[[4,0],[8,0],[8,8.5],[4,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R02-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R02-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R02-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R02-lux"}]},{"id":"F3-R03","name":"Room 303","footprint":[[8,0],[12,0],[12,8.5],[8,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R03-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R03-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R03-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R03-lux"}]},{"id":"F3-R04","name":"Room 304","footprint":[[12,0],[16,0],[16,8.5],[12,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R04-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R04-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R04-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R04-lux"}]},{"id":"F3-R05","name":"Room 305","footprint":[[16,0],[20,0],[20,8.5],[16,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R05-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R05-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R05-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R05-lux"}]},{"id":"F3-R06","name":"Room 306","footprint":[[20,0],[24,0],[24,8.5],[20,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R06-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R06-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R06-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R06-lux"}]},{"id":"F3-R07","name":"Room 307","footprint":[[24,0],[28,0],[28,8.5],[24,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R07-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R07-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R07-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R07-lux"}]},{"id":"F3-R08","name":"Room 308","footprint":[[28,0],[32,0],[32,8.5],[28,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R08-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R08-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R08-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R08-lux"}]},{"id":"F3-R09","name":"Room 309","footprint":[[32,0],[36,0],[36,8.5],[32,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R09-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R09-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R09-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R09-lux"}]},{"id":"F3-R10","name":"Room 310","footprint":[[36,0],[40,0],[40,8.5],[36,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R10-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R10-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R10-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R10-lux"}]},{"id":"F3-R11","name":"Room 311","footprint":[[0,11.5],[4,11.5],[4,20],[0,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R11-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R11-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R11-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R11-lux"}]},{"id":"F3-R12","name":"Room 312","footprint":[[4,11.5],[8,11.5],[8,20],[4,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R12-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R12-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R12-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R12-lux"}]},{"id":"F3-R13","name":"Room 313","footprint":[[8,11.5],[12,11.5],[12,20],[8,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R13-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R13-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R13-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R13-lux"}]},{"id":"F3-R14","name":"Room 314","footprint":[[12,11.5],[16,11.5],[16,20],[12,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R14-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R14-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R14-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R14-lux"}]},{"id":"F3-R15","name":"Room 315","footprint":[[24,11.5],[28,11.5],[28,20],[24,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R15-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R15-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R15-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R15-lux"}]},{"id":"F3-R16","name":"Room 316","footprint":[[28,11.5],[32,11.5],[32,20],[28,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R16-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R16-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R16-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R16-lux"}]},{"id":"F3-R17","name":"Room 317","footprint":[[32,11.5],[36,11.5],[36,20],[32,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R17-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R17-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R17-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R17-lux"}]},{"id":"F3-R18","name":"Room 318","footprint":[[36,11.5],[40,11.5],[40,20],[36,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F3-R18-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F3-R18-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F3-R18-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F3-R18-lux"}]}]},{"id":"F3-Z-CORR","name":"Corridor","function":"corridor","rooms":[{"id":"F3-CORR","name":"Corridor L3","footprint":[[0,8.5],[40,8.5],[40,11.5],[0,11.5]],"sensors":[{"channel":"occupancy","unit":"people","deviceId":"dev-F3-CORR-occupancy"}]}]},{"id":"F3-Z-CORE","name":"Service core","function":"plant","rooms":[{"id":"F3-CORE","name":"Core L3 (lifts & stairs)","footprint":[[16,11.5],[24,11.5],[24,20],[16,20]],"sensors":[]}]}]},{"id":"F4","name":"Level 4 · Guest","elevation":13,"height":3.5,"outline":[[0,0],[40,0],[40,20],[0,20]],"zones":[{"id":"F4-Z-GUEST","name":"Guest rooms","function":"guest","rooms":[{"id":"F4-R01","name":"Room 401","footprint":[[0,0],[4,0],[4,8.5],[0,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R01-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R01-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R01-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R01-lux"}]},{"id":"F4-R02","name":"Room 402","footprint":[[4,0],[8,0],[8,8.5],[4,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R02-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R02-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R02-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R02-lux"}]},{"id":"F4-R03","name":"Room 403","footprint":[[8,0],[12,0],[12,8.5],[8,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R03-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R03-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R03-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R03-lux"}]},{"id":"F4-R04","name":"Room 404","footprint":[[12,0],[16,0],[16,8.5],[12,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R04-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R04-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R04-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R04-lux"}]},{"id":"F4-R05","name":"Room 405","footprint":[[16,0],[20,0],[20,8.5],[16,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R05-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R05-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R05-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R05-lux"}]},{"id":"F4-R06","name":"Room 406","footprint":[[20,0],[24,0],[24,8.5],[20,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R06-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R06-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R06-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R06-lux"}]},{"id":"F4-R07","name":"Room 407","footprint":[[24,0],[28,0],[28,8.5],[24,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R07-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R07-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R07-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R07-lux"}]},{"id":"F4-R08","name":"Room 408","footprint":[[28,0],[32,0],[32,8.5],[28,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R08-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R08-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R08-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R08-lux"}]},{"id":"F4-R09","name":"Room 409","footprint":[[32,0],[36,0],[36,8.5],[32,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R09-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R09-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R09-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R09-lux"}]},{"id":"F4-R10","name":"Room 410","footprint":[[36,0],[40,0],[40,8.5],[36,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R10-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R10-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R10-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R10-lux"}]},{"id":"F4-R11","name":"Room 411","footprint":[[0,11.5],[4,11.5],[4,20],[0,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R11-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R11-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R11-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R11-lux"}]},{"id":"F4-R12","name":"Room 412","footprint":[[4,11.5],[8,11.5],[8,20],[4,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R12-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R12-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R12-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R12-lux"}]},{"id":"F4-R13","name":"Room 413","footprint":[[8,11.5],[12,11.5],[12,20],[8,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R13-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R13-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R13-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R13-lux"}]},{"id":"F4-R14","name":"Room 414","footprint":[[12,11.5],[16,11.5],[16,20],[12,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R14-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R14-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R14-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R14-lux"}]},{"id":"F4-R15","name":"Room 415","footprint":[[24,11.5],[28,11.5],[28,20],[24,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R15-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R15-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R15-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R15-lux"}]},{"id":"F4-R16","name":"Room 416","footprint":[[28,11.5],[32,11.5],[32,20],[28,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R16-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R16-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R16-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R16-lux"}]},{"id":"F4-R17","name":"Room 417","footprint":[[32,11.5],[36,11.5],[36,20],[32,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R17-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R17-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R17-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R17-lux"}]},{"id":"F4-R18","name":"Room 418","footprint":[[36,11.5],[40,11.5],[40,20],[36,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F4-R18-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F4-R18-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F4-R18-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F4-R18-lux"}]}]},{"id":"F4-Z-CORR","name":"Corridor","function":"corridor","rooms":[{"id":"F4-CORR","name":"Corridor L4","footprint":[[0,8.5],[40,8.5],[40,11.5],[0,11.5]],"sensors":[{"channel":"occupancy","unit":"people","deviceId":"dev-F4-CORR-occupancy"}]}]},{"id":"F4-Z-CORE","name":"Service core","function":"plant","rooms":[{"id":"F4-CORE","name":"Core L4 (lifts & stairs)","footprint":[[16,11.5],[24,11.5],[24,20],[16,20]],"sensors":[]}]}]},{"id":"F5","name":"Level 5 · Guest","elevation":16.5,"height":3.5,"outline":[[0,0],[40,0],[40,20],[0,20]],"zones":[{"id":"F5-Z-GUEST","name":"Guest rooms","function":"guest","rooms":[{"id":"F5-R01","name":"Room 501","footprint":[[0,0],[4,0],[4,8.5],[0,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R01-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R01-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R01-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R01-lux"}]},{"id":"F5-R02","name":"Room 502","footprint":[[4,0],[8,0],[8,8.5],[4,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R02-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R02-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R02-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R02-lux"}]},{"id":"F5-R03","name":"Room 503","footprint":[[8,0],[12,0],[12,8.5],[8,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R03-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R03-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R03-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R03-lux"}]},{"id":"F5-R04","name":"Room 504","footprint":[[12,0],[16,0],[16,8.5],[12,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R04-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R04-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R04-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R04-lux"}]},{"id":"F5-R05","name":"Room 505","footprint":[[16,0],[20,0],[20,8.5],[16,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R05-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R05-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R05-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R05-lux"}]},{"id":"F5-R06","name":"Room 506","footprint":[[20,0],[24,0],[24,8.5],[20,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R06-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R06-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R06-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R06-lux"}]},{"id":"F5-R07","name":"Room 507","footprint":[[24,0],[28,0],[28,8.5],[24,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R07-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R07-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R07-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R07-lux"}]},{"id":"F5-R08","name":"Room 508","footprint":[[28,0],[32,0],[32,8.5],[28,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R08-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R08-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R08-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R08-lux"}]},{"id":"F5-R09","name":"Room 509","footprint":[[32,0],[36,0],[36,8.5],[32,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R09-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R09-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R09-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R09-lux"}]},{"id":"F5-R10","name":"Room 510","footprint":[[36,0],[40,0],[40,8.5],[36,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R10-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R10-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R10-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R10-lux"}]},{"id":"F5-R11","name":"Room 511","footprint":[[0,11.5],[4,11.5],[4,20],[0,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R11-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R11-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R11-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R11-lux"}]},{"id":"F5-R12","name":"Room 512","footprint":[[4,11.5],[8,11.5],[8,20],[4,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R12-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R12-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R12-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R12-lux"}]},{"id":"F5-R13","name":"Room 513","footprint":[[8,11.5],[12,11.5],[12,20],[8,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R13-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R13-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R13-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R13-lux"}]},{"id":"F5-R14","name":"Room 514","footprint":[[12,11.5],[16,11.5],[16,20],[12,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R14-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R14-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R14-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R14-lux"}]},{"id":"F5-R15","name":"Room 515","footprint":[[24,11.5],[28,11.5],[28,20],[24,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R15-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R15-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R15-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R15-lux"}]},{"id":"F5-R16","name":"Room 516","footprint":[[28,11.5],[32,11.5],[32,20],[28,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R16-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R16-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R16-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R16-lux"}]},{"id":"F5-R17","name":"Room 517","footprint":[[32,11.5],[36,11.5],[36,20],[32,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R17-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R17-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R17-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R17-lux"}]},{"id":"F5-R18","name":"Room 518","footprint":[[36,11.5],[40,11.5],[40,20],[36,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F5-R18-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F5-R18-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F5-R18-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F5-R18-lux"}]}]},{"id":"F5-Z-CORR","name":"Corridor","function":"corridor","rooms":[{"id":"F5-CORR","name":"Corridor L5","footprint":[[0,8.5],[40,8.5],[40,11.5],[0,11.5]],"sensors":[{"channel":"occupancy","unit":"people","deviceId":"dev-F5-CORR-occupancy"}]}]},{"id":"F5-Z-CORE","name":"Service core","function":"plant","rooms":[{"id":"F5-CORE","name":"Core L5 (lifts & stairs)","footprint":[[16,11.5],[24,11.5],[24,20],[16,20]],"sensors":[]}]}]},{"id":"F6","name":"Level 6 · Guest","elevation":20,"height":3.5,"outline":[[0,0],[40,0],[40,20],[0,20]],"zones":[{"id":"F6-Z-GUEST","name":"Guest rooms","function":"guest","rooms":[{"id":"F6-R01","name":"Room 601","footprint":[[0,0],[4,0],[4,8.5],[0,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R01-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R01-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R01-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R01-lux"}]},{"id":"F6-R02","name":"Room 602","footprint":[[4,0],[8,0],[8,8.5],[4,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R02-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R02-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R02-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R02-lux"}]},{"id":"F6-R03","name":"Room 603","footprint":[[8,0],[12,0],[12,8.5],[8,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R03-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R03-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R03-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R03-lux"}]},{"id":"F6-R04","name":"Room 604","footprint":[[12,0],[16,0],[16,8.5],[12,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R04-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R04-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R04-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R04-lux"}]},{"id":"F6-R05","name":"Room 605","footprint":[[16,0],[20,0],[20,8.5],[16,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R05-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R05-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R05-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R05-lux"}]},{"id":"F6-R06","name":"Room 606","footprint":[[20,0],[24,0],[24,8.5],[20,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R06-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R06-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R06-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R06-lux"}]},{"id":"F6-R07","name":"Room 607","footprint":[[24,0],[28,0],[28,8.5],[24,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R07-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R07-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R07-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R07-lux"}]},{"id":"F6-R08","name":"Room 608","footprint":[[28,0],[32,0],[32,8.5],[28,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R08-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R08-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R08-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R08-lux"}]},{"id":"F6-R09","name":"Room 609","footprint":[[32,0],[36,0],[36,8.5],[32,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R09-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R09-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R09-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R09-lux"}]},{"id":"F6-R10","name":"Room 610","footprint":[[36,0],[40,0],[40,8.5],[36,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R10-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R10-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R10-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R10-lux"}]},{"id":"F6-R11","name":"Room 611","footprint":[[0,11.5],[4,11.5],[4,20],[0,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R11-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R11-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R11-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R11-lux"}]},{"id":"F6-R12","name":"Room 612","footprint":[[4,11.5],[8,11.5],[8,20],[4,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R12-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R12-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R12-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R12-lux"}]},{"id":"F6-R13","name":"Room 613","footprint":[[8,11.5],[12,11.5],[12,20],[8,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R13-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R13-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R13-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R13-lux"}]},{"id":"F6-R14","name":"Room 614","footprint":[[12,11.5],[16,11.5],[16,20],[12,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R14-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R14-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R14-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R14-lux"}]},{"id":"F6-R15","name":"Room 615","footprint":[[24,11.5],[28,11.5],[28,20],[24,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R15-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R15-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R15-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R15-lux"}]},{"id":"F6-R16","name":"Room 616","footprint":[[28,11.5],[32,11.5],[32,20],[28,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R16-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R16-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R16-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R16-lux"}]},{"id":"F6-R17","name":"Room 617","footprint":[[32,11.5],[36,11.5],[36,20],[32,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R17-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R17-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R17-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R17-lux"}]},{"id":"F6-R18","name":"Room 618","footprint":[[36,11.5],[40,11.5],[40,20],[36,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F6-R18-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F6-R18-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F6-R18-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F6-R18-lux"}]}]},{"id":"F6-Z-CORR","name":"Corridor","function":"corridor","rooms":[{"id":"F6-CORR","name":"Corridor L6","footprint":[[0,8.5],[40,8.5],[40,11.5],[0,11.5]],"sensors":[{"channel":"occupancy","unit":"people","deviceId":"dev-F6-CORR-occupancy"}]}]},{"id":"F6-Z-CORE","name":"Service core","function":"plant","rooms":[{"id":"F6-CORE","name":"Core L6 (lifts & stairs)","footprint":[[16,11.5],[24,11.5],[24,20],[16,20]],"sensors":[]}]}]},{"id":"F7","name":"Level 7 · Guest","elevation":23.5,"height":3.5,"outline":[[0,0],[40,0],[40,20],[0,20]],"zones":[{"id":"F7-Z-GUEST","name":"Guest rooms","function":"guest","rooms":[{"id":"F7-R01","name":"Room 701","footprint":[[0,0],[4,0],[4,8.5],[0,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R01-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R01-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R01-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R01-lux"}]},{"id":"F7-R02","name":"Room 702","footprint":[[4,0],[8,0],[8,8.5],[4,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R02-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R02-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R02-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R02-lux"}]},{"id":"F7-R03","name":"Room 703","footprint":[[8,0],[12,0],[12,8.5],[8,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R03-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R03-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R03-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R03-lux"}]},{"id":"F7-R04","name":"Room 704","footprint":[[12,0],[16,0],[16,8.5],[12,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R04-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R04-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R04-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R04-lux"}]},{"id":"F7-R05","name":"Room 705","footprint":[[16,0],[20,0],[20,8.5],[16,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R05-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R05-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R05-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R05-lux"}]},{"id":"F7-R06","name":"Room 706","footprint":[[20,0],[24,0],[24,8.5],[20,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R06-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R06-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R06-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R06-lux"}]},{"id":"F7-R07","name":"Room 707","footprint":[[24,0],[28,0],[28,8.5],[24,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R07-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R07-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R07-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R07-lux"}]},{"id":"F7-R08","name":"Room 708","footprint":[[28,0],[32,0],[32,8.5],[28,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R08-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R08-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R08-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R08-lux"}]},{"id":"F7-R09","name":"Room 709","footprint":[[32,0],[36,0],[36,8.5],[32,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R09-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R09-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R09-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R09-lux"}]},{"id":"F7-R10","name":"Room 710","footprint":[[36,0],[40,0],[40,8.5],[36,8.5]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R10-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R10-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R10-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R10-lux"}]},{"id":"F7-R11","name":"Room 711","footprint":[[0,11.5],[4,11.5],[4,20],[0,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R11-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R11-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R11-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R11-lux"}]},{"id":"F7-R12","name":"Room 712","footprint":[[4,11.5],[8,11.5],[8,20],[4,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R12-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R12-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R12-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R12-lux"}]},{"id":"F7-R13","name":"Room 713","footprint":[[8,11.5],[12,11.5],[12,20],[8,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R13-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R13-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R13-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R13-lux"}]},{"id":"F7-R14","name":"Room 714","footprint":[[12,11.5],[16,11.5],[16,20],[12,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R14-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R14-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R14-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R14-lux"}]},{"id":"F7-R15","name":"Room 715","footprint":[[24,11.5],[28,11.5],[28,20],[24,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R15-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R15-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R15-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R15-lux"}]},{"id":"F7-R16","name":"Room 716","footprint":[[28,11.5],[32,11.5],[32,20],[28,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R16-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R16-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R16-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R16-lux"}]},{"id":"F7-R17","name":"Room 717","footprint":[[32,11.5],[36,11.5],[36,20],[32,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R17-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R17-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R17-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R17-lux"}]},{"id":"F7-R18","name":"Room 718","footprint":[[36,11.5],[40,11.5],[40,20],[36,20]],"sensors":[{"channel":"temperature","unit":"degC","deviceId":"dev-F7-R18-temperature"},{"channel":"occupancy","unit":"people","deviceId":"dev-F7-R18-occupancy"},{"channel":"power","unit":"kW","deviceId":"dev-F7-R18-power"},{"channel":"lux","unit":"lx","deviceId":"dev-F7-R18-lux"}]}]},{"id":"F7-Z-CORR","name":"Corridor","function":"corridor","rooms":[{"id":"F7-CORR","name":"Corridor L7","footprint":[[0,8.5],[40,8.5],[40,11.5],[0,11.5]],"sensors":[{"channel":"occupancy","unit":"people","deviceId":"dev-F7-CORR-occupancy"}]}]},{"id":"F7-Z-CORE","name":"Service core","function":"plant","rooms":[{"id":"F7-CORE","name":"Core L7 (lifts & stairs)","footprint":[[16,11.5],[24,11.5],[24,20],[16,20]],"sensors":[]}]}]},{"id":"F8","name":"Level 8 · Plant & Roof","elevation":27,"height":4,"outline":[[0,0],[40,0],[40,20],[0,20]],"zones":[{"id":"F8-Z-PLANT","name":"Plant","function":"plant","rooms":[{"id":"F8-PLANT","name":"Plant Room","footprint":[[0,0],[20,0],[20,20],[0,20]],"sensors":[{"channel":"power","unit":"kW","deviceId":"dev-F8-PLANT-power"},{"channel":"temperature","unit":"degC","deviceId":"dev-F8-PLANT-temperature"}]},{"id":"F8-LIFT","name":"Lift Machine Room","footprint":[[20,0],[28,0],[28,20],[20,20]],"sensors":[{"channel":"power","unit":"kW","deviceId":"dev-F8-LIFT-power"}]}]},{"id":"F8-Z-ROOF","name":"Roof","function":"amenity","rooms":[{"id":"F8-TERR","name":"Roof Terrace","footprint":[[28,0],[40,0],[40,20],[28,20]],"sensors":[{"channel":"lux","unit":"lx","deviceId":"dev-F8-TERR-lux"},{"channel":"occupancy","unit":"people","deviceId":"dev-F8-TERR-occupancy"}]}]}]}]'),oT={id:Yd,name:qd,location:jd,floors:Kd},Jd="modulepreload",Qd=function(n){return"/ihapm-bms-showcase/"+n},Pc={},zr=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){let o=function(l){return Promise.all(l.map(u=>Promise.resolve(u).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=o(t.map(l=>{if(l=Qd(l),l in Pc)return;Pc[l]=!0;const u=l.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":Jd,u||(d.as="script"),d.crossOrigin="",d.href=l,c&&d.setAttribute("nonce",c),document.head.appendChild(d),u)return new Promise((f,g)=>{d.addEventListener("load",f),d.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Za="170",Oi={ROTATE:0,DOLLY:1,PAN:2},Di={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ef=0,Fc=1,tf=2,Wu=1,nf=2,En=3,Wn=0,Ht=1,cn=2,Rn=0,zi=1,In=2,Dc=3,Lc=4,rf=5,ni=100,sf=101,of=102,af=103,cf=104,lf=200,uf=201,hf=202,df=203,Ko=204,Jo=205,ff=206,pf=207,mf=208,gf=209,vf=210,_f=211,xf=212,yf=213,Sf=214,Qo=0,ea=1,ta=2,Gi=3,na=4,ia=5,ra=6,sa=7,Xu=0,Mf=1,bf=2,Gn=0,Zu=1,$u=2,Yu=3,$a=4,Ef=5,qu=6,ju=7,Ku=300,Wi=301,Xi=302,oa=303,aa=304,Xs=306,ca=1e3,ri=1001,la=1002,hn=1003,wf=1004,kr=1005,mn=1006,so=1007,si=1008,Pn=1009,Ju=1010,Qu=1011,Mr=1012,Ya=1013,oi=1014,wn=1015,An=1016,qa=1017,ja=1018,Zi=1020,eh=35902,th=1021,nh=1022,ln=1023,ih=1024,rh=1025,ki=1026,$i=1027,sh=1028,Ka=1029,oh=1030,Ja=1031,Qa=1033,Ts=33776,Rs=33777,As=33778,Cs=33779,ua=35840,ha=35841,da=35842,fa=35843,pa=36196,ma=37492,ga=37496,va=37808,_a=37809,xa=37810,ya=37811,Sa=37812,Ma=37813,ba=37814,Ea=37815,wa=37816,Ta=37817,Ra=37818,Aa=37819,Ca=37820,Ia=37821,Is=36492,Pa=36494,Fa=36495,ah=36283,Da=36284,La=36285,Na=36286,Tf=3200,Rf=3201,Af=0,Cf=1,Hn="",Kt="srgb",Ji="srgb-linear",Zs="linear",it="srgb",mi=7680,Nc=519,If=512,Pf=513,Ff=514,ch=515,Df=516,Lf=517,Nf=518,Uf=519,Uc=35044,Oc="300 es",Tn=2e3,Fs=2001;class hi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zc=1234567;const Bi=Math.PI/180,br=180/Math.PI;function di(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]).toLowerCase()}function Tt(n,e,t){return Math.max(e,Math.min(t,n))}function ec(n,e){return(n%e+e)%e}function Of(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function zf(n,e,t){return n!==e?(t-n)/(e-n):0}function vr(n,e,t){return(1-t)*n+t*e}function kf(n,e,t,i){return vr(n,e,1-Math.exp(-t*i))}function Bf(n,e=1){return e-Math.abs(ec(n,e*2)-e)}function Vf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Hf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Gf(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Wf(n,e){return n+Math.random()*(e-n)}function Xf(n){return n*(.5-Math.random())}function Zf(n){n!==void 0&&(zc=n);let e=zc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $f(n){return n*Bi}function Yf(n){return n*br}function qf(n){return(n&n-1)===0&&n!==0}function jf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Kf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Jf(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),d=o((e-i)/2),f=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,c*h,c*d,a*l);break;case"YZY":n.set(c*d,a*u,c*h,a*l);break;case"ZXZ":n.set(c*h,c*d,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*f,a*l);break;case"YXY":n.set(c*f,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Pi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Dt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const _t={DEG2RAD:Bi,RAD2DEG:br,generateUUID:di,clamp:Tt,euclideanModulo:ec,mapLinear:Of,inverseLerp:zf,lerp:vr,damp:kf,pingpong:Bf,smoothstep:Vf,smootherstep:Hf,randInt:Gf,randFloat:Wf,randFloatSpread:Xf,seededRandom:Zf,degToRad:$f,radToDeg:Yf,isPowerOfTwo:qf,ceilPowerOfTwo:jf,floorPowerOfTwo:Kf,setQuaternionFromProperEuler:Jf,normalize:Dt,denormalize:Pi};class ne{constructor(e=0,t=0){ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,i,r,s,o,a,c,l){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],f=i[5],g=i[8],v=r[0],m=r[3],p=r[6],w=r[1],M=r[4],x=r[7],N=r[2],R=r[5],A=r[8];return s[0]=o*v+a*w+c*N,s[3]=o*m+a*M+c*R,s[6]=o*p+a*x+c*A,s[1]=l*v+u*w+h*N,s[4]=l*m+u*M+h*R,s[7]=l*p+u*x+h*A,s[2]=d*v+f*w+g*N,s[5]=d*m+f*M+g*R,s[8]=d*p+f*x+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*s,f=l*s-o*c,g=t*h+i*d+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(r*l-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(u*t-r*c)*v,e[5]=(r*s-a*t)*v,e[6]=f*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(oo.makeScale(e,t)),this}rotate(e){return this.premultiply(oo.makeRotation(-e)),this}translate(e,t){return this.premultiply(oo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const oo=new Ge;function lh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ds(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Qf(){const n=Ds("canvas");return n.style.display="block",n}const kc={};function pr(n){n in kc||(kc[n]=!0,console.warn(n))}function ep(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function tp(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function np(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const je={enabled:!0,workingColorSpace:Ji,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===it&&(n.r=Cn(n.r),n.g=Cn(n.g),n.b=Cn(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===it&&(n.r=Vi(n.r),n.g=Vi(n.g),n.b=Vi(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Hn?Zs:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Cn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Vi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Bc=[.64,.33,.3,.6,.15,.06],Vc=[.2126,.7152,.0722],Hc=[.3127,.329],Gc=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wc=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);je.define({[Ji]:{primaries:Bc,whitePoint:Hc,transfer:Zs,toXYZ:Gc,fromXYZ:Wc,luminanceCoefficients:Vc,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:Bc,whitePoint:Hc,transfer:it,toXYZ:Gc,fromXYZ:Wc,luminanceCoefficients:Vc,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}});let gi;class ip{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{gi===void 0&&(gi=Ds("canvas")),gi.width=e.width,gi.height=e.height;const i=gi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=gi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ds("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Cn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Cn(t[i]/255)*255):t[i]=Cn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rp=0;class uh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=di(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ao(r[o].image)):s.push(ao(r[o]))}else s=ao(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ao(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ip.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sp=0;class Ot extends hi{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,i=ri,r=ri,s=mn,o=si,a=ln,c=Pn,l=Ot.DEFAULT_ANISOTROPY,u=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=di(),this.name="",this.source=new uh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ku)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ca:e.x=e.x-Math.floor(e.x);break;case ri:e.x=e.x<0?0:1;break;case la:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ca:e.y=e.y-Math.floor(e.y);break;case ri:e.y=e.y<0?0:1;break;case la:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=Ku;Ot.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,i=0,r=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,x=(f+1)/2,N=(p+1)/2,R=(u+d)/4,A=(h+v)/4,F=(g+m)/4;return M>x&&M>N?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=R/i,s=A/i):x>N?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=R/r,s=F/r):N<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),i=A/s,r=F/s),this.set(i,r,s,t),this}let w=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(h-v)/w,this.z=(d-u)/w,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class op extends hi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ot(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new uh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dn extends op{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class hh extends Ot{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ap extends Ot{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ai{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3];const d=s[o+0],f=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(h!==v||c!==d||l!==f||u!==g){let m=1-a;const p=c*d+l*f+u*g+h*v,w=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const N=Math.sqrt(M),R=Math.atan2(N,p*w);m=Math.sin(m*R)/N,a=Math.sin(a*R)/N}const x=a*w;if(c=c*m+d*x,l=l*m+f*x,u=u*m+g*x,h=h*m+v*x,m===1-a){const N=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=N,l*=N,u*=N,h*=N}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-a*f,e[t+2]=l*g+u*f+a*d-c*h,e[t+3]=u*g-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),h=a(s/2),d=c(i/2),f=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(i>a&&i>h){const f=2*Math.sqrt(1+i-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-i-h);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-i-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,i=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+c*l+o*h-a*u,this.y=i+c*u+a*l-s*h,this.z=r+c*h+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return co.copy(this).projectOnVector(e),this.sub(co)}reflect(e){return this.sub(co.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const co=new C,Xc=new ai;class $t{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,rn):rn.fromBufferAttribute(s,o),rn.applyMatrix4(e.matrixWorld),this.expandByPoint(rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Br.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Br.copy(i.boundingBox)),Br.applyMatrix4(e.matrixWorld),this.union(Br)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,rn),rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(or),Vr.subVectors(this.max,or),vi.subVectors(e.a,or),_i.subVectors(e.b,or),xi.subVectors(e.c,or),Nn.subVectors(_i,vi),Un.subVectors(xi,_i),qn.subVectors(vi,xi);let t=[0,-Nn.z,Nn.y,0,-Un.z,Un.y,0,-qn.z,qn.y,Nn.z,0,-Nn.x,Un.z,0,-Un.x,qn.z,0,-qn.x,-Nn.y,Nn.x,0,-Un.y,Un.x,0,-qn.y,qn.x,0];return!lo(t,vi,_i,xi,Vr)||(t=[1,0,0,0,1,0,0,0,1],!lo(t,vi,_i,xi,Vr))?!1:(Hr.crossVectors(Nn,Un),t=[Hr.x,Hr.y,Hr.z],lo(t,vi,_i,xi,Vr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xn=[new C,new C,new C,new C,new C,new C,new C,new C],rn=new C,Br=new $t,vi=new C,_i=new C,xi=new C,Nn=new C,Un=new C,qn=new C,or=new C,Vr=new C,Hr=new C,jn=new C;function lo(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){jn.fromArray(n,s);const a=r.x*Math.abs(jn.x)+r.y*Math.abs(jn.y)+r.z*Math.abs(jn.z),c=e.dot(jn),l=t.dot(jn),u=i.dot(jn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const cp=new $t,ar=new C,uo=new C;class Fr{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):cp.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ar.subVectors(e,this.center);const t=ar.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ar,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ar.copy(e.center).add(uo)),this.expandByPoint(ar.copy(e.center).sub(uo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yn=new C,ho=new C,Gr=new C,On=new C,fo=new C,Wr=new C,po=new C;class Dr{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yn.copy(this.origin).addScaledVector(this.direction,t),yn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ho.copy(e).add(t).multiplyScalar(.5),Gr.copy(t).sub(e).normalize(),On.copy(this.origin).sub(ho);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Gr),a=On.dot(this.direction),c=-On.dot(Gr),l=On.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*c-a,d=o*a-c,g=s*u,h>=0)if(d>=-g)if(d<=g){const v=1/u;h*=v,d*=v,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ho).addScaledVector(Gr,d),f}intersectSphere(e,t){yn.subVectors(e.center,this.origin);const i=yn.dot(this.direction),r=yn.dot(yn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,yn)!==null}intersectTriangle(e,t,i,r,s){fo.subVectors(t,e),Wr.subVectors(i,e),po.crossVectors(fo,Wr);let o=this.direction.dot(po),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;On.subVectors(this.origin,e);const c=a*this.direction.dot(Wr.crossVectors(On,Wr));if(c<0)return null;const l=a*this.direction.dot(fo.cross(On));if(l<0||c+l>o)return null;const u=-a*On.dot(po);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,i,r,s,o,a,c,l,u,h,d,f,g,v,m){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,h,d,f,g,v,m)}set(e,t,i,r,s,o,a,c,l,u,h,d,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/yi.setFromMatrixColumn(e,0).length(),s=1/yi.setFromMatrixColumn(e,1).length(),o=1/yi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,f=o*h,g=a*u,v=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-v*l,t[9]=-a*c,t[2]=v-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,g=l*u,v=l*h;t[0]=d+v*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=v+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,g=l*u,v=l*h;t[0]=d-v*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=v-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,f=o*h,g=a*u,v=a*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+v,t[1]=c*h,t[5]=v*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=v-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-v*h}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+v,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lp,e,up)}lookAt(e,t,i){const r=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),zn.crossVectors(i,Xt),zn.lengthSq()===0&&(Math.abs(i.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),zn.crossVectors(i,Xt)),zn.normalize(),Xr.crossVectors(Xt,zn),r[0]=zn.x,r[4]=Xr.x,r[8]=Xt.x,r[1]=zn.y,r[5]=Xr.y,r[9]=Xt.y,r[2]=zn.z,r[6]=Xr.z,r[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],w=i[3],M=i[7],x=i[11],N=i[15],R=r[0],A=r[4],F=r[8],E=r[12],S=r[1],I=r[5],$=r[9],V=r[13],G=r[2],j=r[6],z=r[10],Q=r[14],H=r[3],ce=r[7],me=r[11],xe=r[15];return s[0]=o*R+a*S+c*G+l*H,s[4]=o*A+a*I+c*j+l*ce,s[8]=o*F+a*$+c*z+l*me,s[12]=o*E+a*V+c*Q+l*xe,s[1]=u*R+h*S+d*G+f*H,s[5]=u*A+h*I+d*j+f*ce,s[9]=u*F+h*$+d*z+f*me,s[13]=u*E+h*V+d*Q+f*xe,s[2]=g*R+v*S+m*G+p*H,s[6]=g*A+v*I+m*j+p*ce,s[10]=g*F+v*$+m*z+p*me,s[14]=g*E+v*V+m*Q+p*xe,s[3]=w*R+M*S+x*G+N*H,s[7]=w*A+M*I+x*j+N*ce,s[11]=w*F+M*$+x*z+N*me,s[15]=w*E+M*V+x*Q+N*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+s*c*h-r*l*h-s*a*d+i*l*d+r*a*f-i*c*f)+v*(+t*c*f-t*l*d+s*o*d-r*o*f+r*l*u-s*c*u)+m*(+t*l*h-t*a*f-s*o*h+i*o*f+s*a*u-i*l*u)+p*(-r*a*u-t*c*h+t*a*d+r*o*h-i*o*d+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],w=h*m*l-v*d*l+v*c*f-a*m*f-h*c*p+a*d*p,M=g*d*l-u*m*l-g*c*f+o*m*f+u*c*p-o*d*p,x=u*v*l-g*h*l+g*a*f-o*v*f-u*a*p+o*h*p,N=g*h*c-u*v*c-g*a*d+o*v*d+u*a*m-o*h*m,R=t*w+i*M+r*x+s*N;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=w*A,e[1]=(v*d*s-h*m*s-v*r*f+i*m*f+h*r*p-i*d*p)*A,e[2]=(a*m*s-v*c*s+v*r*l-i*m*l-a*r*p+i*c*p)*A,e[3]=(h*c*s-a*d*s-h*r*l+i*d*l+a*r*f-i*c*f)*A,e[4]=M*A,e[5]=(u*m*s-g*d*s+g*r*f-t*m*f-u*r*p+t*d*p)*A,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*p-t*c*p)*A,e[7]=(o*d*s-u*c*s+u*r*l-t*d*l-o*r*f+t*c*f)*A,e[8]=x*A,e[9]=(g*h*s-u*v*s-g*i*f+t*v*f+u*i*p-t*h*p)*A,e[10]=(o*v*s-g*a*s+g*i*l-t*v*l-o*i*p+t*a*p)*A,e[11]=(u*a*s-o*h*s-u*i*l+t*h*l+o*i*f-t*a*f)*A,e[12]=N*A,e[13]=(u*v*r-g*h*r+g*i*d-t*v*d-u*i*m+t*h*m)*A,e[14]=(g*a*r-o*v*r-g*i*c+t*v*c+o*i*m-t*a*m)*A,e[15]=(o*h*r-u*a*r+u*i*c-t*h*c-o*i*d+t*a*d)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,d=s*l,f=s*u,g=s*h,v=o*u,m=o*h,p=a*h,w=c*l,M=c*u,x=c*h,N=i.x,R=i.y,A=i.z;return r[0]=(1-(v+p))*N,r[1]=(f+x)*N,r[2]=(g-M)*N,r[3]=0,r[4]=(f-x)*R,r[5]=(1-(d+p))*R,r[6]=(m+w)*R,r[7]=0,r[8]=(g+M)*A,r[9]=(m-w)*A,r[10]=(1-(d+v))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=yi.set(r[0],r[1],r[2]).length();const o=yi.set(r[4],r[5],r[6]).length(),a=yi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],sn.copy(this);const l=1/s,u=1/o,h=1/a;return sn.elements[0]*=l,sn.elements[1]*=l,sn.elements[2]*=l,sn.elements[4]*=u,sn.elements[5]*=u,sn.elements[6]*=u,sn.elements[8]*=h,sn.elements[9]*=h,sn.elements[10]*=h,t.setFromRotationMatrix(sn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Tn){const c=this.elements,l=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let f,g;if(a===Tn)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Fs)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Tn){const c=this.elements,l=1/(t-e),u=1/(i-r),h=1/(o-s),d=(t+e)*l,f=(i+r)*u;let g,v;if(a===Tn)g=(o+s)*h,v=-2*h;else if(a===Fs)g=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const yi=new C,sn=new ht,lp=new C(0,0,0),up=new C(1,1,1),zn=new C,Xr=new C,Xt=new C,Zc=new ht,$c=new ai;class Fn{constructor(e=0,t=0,i=0,r=Fn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Tt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Zc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $c.setFromEuler(this),this.setFromQuaternion($c,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fn.DEFAULT_ORDER="XYZ";class tc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hp=0;const Yc=new C,Si=new ai,Sn=new ht,Zr=new C,cr=new C,dp=new C,fp=new ai,qc=new C(1,0,0),jc=new C(0,1,0),Kc=new C(0,0,1),Jc={type:"added"},pp={type:"removed"},Mi={type:"childadded",child:null},mo={type:"childremoved",child:null};class zt extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new C,t=new Fn,i=new ai,r=new C(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new Ge}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Si.setFromAxisAngle(e,t),this.quaternion.multiply(Si),this}rotateOnWorldAxis(e,t){return Si.setFromAxisAngle(e,t),this.quaternion.premultiply(Si),this}rotateX(e){return this.rotateOnAxis(qc,e)}rotateY(e){return this.rotateOnAxis(jc,e)}rotateZ(e){return this.rotateOnAxis(Kc,e)}translateOnAxis(e,t){return Yc.copy(e).applyQuaternion(this.quaternion),this.position.add(Yc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qc,e)}translateY(e){return this.translateOnAxis(jc,e)}translateZ(e){return this.translateOnAxis(Kc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Zr.copy(e):Zr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(cr,Zr,this.up):Sn.lookAt(Zr,cr,this.up),this.quaternion.setFromRotationMatrix(Sn),r&&(Sn.extractRotation(r.matrixWorld),Si.setFromRotationMatrix(Sn),this.quaternion.premultiply(Si.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jc),Mi.child=e,this.dispatchEvent(Mi),Mi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pp),mo.child=e,this.dispatchEvent(mo),mo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jc),Mi.child=e,this.dispatchEvent(Mi),Mi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,e,dp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,fp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}zt.DEFAULT_UP=new C(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new C,Mn=new C,go=new C,bn=new C,bi=new C,Ei=new C,Qc=new C,vo=new C,_o=new C,xo=new C,yo=new xt,So=new xt,Mo=new xt;class Qt{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),on.subVectors(e,t),r.cross(on);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){on.subVectors(r,t),Mn.subVectors(i,t),go.subVectors(e,t);const o=on.dot(on),a=on.dot(Mn),c=on.dot(go),l=Mn.dot(Mn),u=Mn.dot(go),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,g=(o*u-a*c)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,bn.x),c.addScaledVector(o,bn.y),c.addScaledVector(a,bn.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return yo.setScalar(0),So.setScalar(0),Mo.setScalar(0),yo.fromBufferAttribute(e,t),So.fromBufferAttribute(e,i),Mo.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(yo,s.x),o.addScaledVector(So,s.y),o.addScaledVector(Mo,s.z),o}static isFrontFacing(e,t,i,r){return on.subVectors(i,t),Mn.subVectors(e,t),on.cross(Mn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),on.cross(Mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Qt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;bi.subVectors(r,i),Ei.subVectors(s,i),vo.subVectors(e,i);const c=bi.dot(vo),l=Ei.dot(vo);if(c<=0&&l<=0)return t.copy(i);_o.subVectors(e,r);const u=bi.dot(_o),h=Ei.dot(_o);if(u>=0&&h<=u)return t.copy(r);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(bi,o);xo.subVectors(e,s);const f=bi.dot(xo),g=Ei.dot(xo);if(g>=0&&f<=g)return t.copy(s);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Ei,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Qc.subVectors(s,r),a=(h-u)/(h-u+(f-g)),t.copy(r).addScaledVector(Qc,a);const p=1/(m+v+d);return o=v*p,a=d*p,t.copy(i).addScaledVector(bi,o).addScaledVector(Ei,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const dh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},$r={h:0,s:0,l:0};function bo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Be{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=je.workingColorSpace){return this.r=e,this.g=t,this.b=i,je.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=je.workingColorSpace){if(e=ec(e,1),t=Tt(t,0,1),i=Tt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=bo(o,s,e+1/3),this.g=bo(o,s,e),this.b=bo(o,s,e-1/3)}return je.toWorkingColorSpace(this,r),this}setStyle(e,t=Kt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){const i=dh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cn(e.r),this.g=Cn(e.g),this.b=Cn(e.b),this}copyLinearToSRGB(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return je.fromWorkingColorSpace(Pt.copy(this),e),Math.round(Tt(Pt.r*255,0,255))*65536+Math.round(Tt(Pt.g*255,0,255))*256+Math.round(Tt(Pt.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(Pt.copy(this),t);const i=Pt.r,r=Pt.g,s=Pt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=Kt){je.fromWorkingColorSpace(Pt.copy(this),e);const t=Pt.r,i=Pt.g,r=Pt.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(kn),this.setHSL(kn.h+e,kn.s+t,kn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(kn),e.getHSL($r);const i=vr(kn.h,$r.h,t),r=vr(kn.s,$r.s,t),s=vr(kn.l,$r.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new Be;Be.NAMES=dh;let mp=0;class Qi extends hi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=di(),this.name="",this.blending=zi,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ko,this.blendDst=Jo,this.blendEquation=ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Gi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mi,this.stencilZFail=mi,this.stencilZPass=mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zi&&(i.blending=this.blending),this.side!==Wn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ko&&(i.blendSrc=this.blendSrc),this.blendDst!==Jo&&(i.blendDst=this.blendDst),this.blendEquation!==ni&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Gi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==mi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==mi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class $s extends Qi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=Xu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new C,Yr=new ne;class Yt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Uc,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Yr.fromBufferAttribute(this,t),Yr.applyMatrix3(e),this.setXY(t,Yr.x,Yr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Pi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Dt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array),r=Dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array),r=Dt(r,this.array),s=Dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Uc&&(e.usage=this.usage),e}}class fh extends Yt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ph extends Yt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Mt extends Yt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let gp=0;const jt=new ht,Eo=new zt,wi=new C,Zt=new $t,lr=new $t,wt=new C;class Ft extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lh(e)?ph:fh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,i){return jt.makeTranslation(e,t,i),this.applyMatrix4(jt),this}scale(e,t,i){return jt.makeScale(e,t,i),this.applyMatrix4(jt),this}lookAt(e){return Eo.lookAt(e),Eo.updateMatrix(),this.applyMatrix4(Eo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wi).negate(),this.translate(wi.x,wi.y,wi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Mt(i,3))}else{for(let i=0,r=t.count;i<r;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $t);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Zt.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const i=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];lr.setFromBufferAttribute(a),this.morphTargetsRelative?(wt.addVectors(Zt.min,lr.min),Zt.expandByPoint(wt),wt.addVectors(Zt.max,lr.max),Zt.expandByPoint(wt)):(Zt.expandByPoint(lr.min),Zt.expandByPoint(lr.max))}Zt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(wt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)wt.fromBufferAttribute(a,l),c&&(wi.fromBufferAttribute(e,l),wt.add(wi)),r=Math.max(r,i.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let F=0;F<i.count;F++)a[F]=new C,c[F]=new C;const l=new C,u=new C,h=new C,d=new ne,f=new ne,g=new ne,v=new C,m=new C;function p(F,E,S){l.fromBufferAttribute(i,F),u.fromBufferAttribute(i,E),h.fromBufferAttribute(i,S),d.fromBufferAttribute(s,F),f.fromBufferAttribute(s,E),g.fromBufferAttribute(s,S),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(I),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(I),a[F].add(v),a[E].add(v),a[S].add(v),c[F].add(m),c[E].add(m),c[S].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let F=0,E=w.length;F<E;++F){const S=w[F],I=S.start,$=S.count;for(let V=I,G=I+$;V<G;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const M=new C,x=new C,N=new C,R=new C;function A(F){N.fromBufferAttribute(r,F),R.copy(N);const E=a[F];M.copy(E),M.sub(N.multiplyScalar(N.dot(E))).normalize(),x.crossVectors(R,E);const I=x.dot(c[F])<0?-1:1;o.setXYZW(F,M.x,M.y,M.z,I)}for(let F=0,E=w.length;F<E;++F){const S=w[F],I=S.start,$=S.count;for(let V=I,G=I+$;V<G;V+=3)A(e.getX(V+0)),A(e.getX(V+1)),A(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const r=new C,s=new C,o=new C,a=new C,c=new C,l=new C,u=new C,h=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new Yt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ft,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const el=new ht,Kn=new Dr,qr=new Fr,tl=new C,jr=new C,Kr=new C,Jr=new C,wo=new C,Qr=new C,nl=new C,es=new C;class Ut extends zt{constructor(e=new Ft,t=new $s){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Qr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(wo.fromBufferAttribute(h,e),o?Qr.addScaledVector(wo,u):Qr.addScaledVector(wo.sub(t),u))}t.add(Qr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),qr.copy(i.boundingSphere),qr.applyMatrix4(s),Kn.copy(e.ray).recast(e.near),!(qr.containsPoint(Kn.origin)===!1&&(Kn.intersectSphere(qr,tl)===null||Kn.origin.distanceToSquared(tl)>(e.far-e.near)**2))&&(el.copy(s).invert(),Kn.copy(e.ray).applyMatrix4(el),!(i.boundingBox!==null&&Kn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Kn)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],w=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=w,N=M;x<N;x+=3){const R=a.getX(x),A=a.getX(x+1),F=a.getX(x+2);r=ts(this,p,e,i,l,u,h,R,A,F),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const w=a.getX(m),M=a.getX(m+1),x=a.getX(m+2);r=ts(this,o,e,i,l,u,h,w,M,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],w=Math.max(m.start,f.start),M=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=w,N=M;x<N;x+=3){const R=x,A=x+1,F=x+2;r=ts(this,p,e,i,l,u,h,R,A,F),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const w=m,M=m+1,x=m+2;r=ts(this,o,e,i,l,u,h,w,M,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function vp(n,e,t,i,r,s,o,a){let c;if(e.side===Ht?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Wn,a),c===null)return null;es.copy(a),es.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(es);return l<t.near||l>t.far?null:{distance:l,point:es.clone(),object:n}}function ts(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,jr),n.getVertexPosition(c,Kr),n.getVertexPosition(l,Jr);const u=vp(n,e,t,i,jr,Kr,Jr,nl);if(u){const h=new C;Qt.getBarycoord(nl,jr,Kr,Jr,h),r&&(u.uv=Qt.getInterpolatedAttribute(r,a,c,l,h,new ne)),s&&(u.uv1=Qt.getInterpolatedAttribute(s,a,c,l,h,new ne)),o&&(u.normal=Qt.getInterpolatedAttribute(o,a,c,l,h,new C),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new C,materialIndex:0};Qt.getNormal(jr,Kr,Jr,d.normal),u.face=d,u.barycoord=h}return u}class Lr extends Ft{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Mt(l,3)),this.setAttribute("normal",new Mt(u,3)),this.setAttribute("uv",new Mt(h,2));function g(v,m,p,w,M,x,N,R,A,F,E){const S=x/A,I=N/F,$=x/2,V=N/2,G=R/2,j=A+1,z=F+1;let Q=0,H=0;const ce=new C;for(let me=0;me<z;me++){const xe=me*I-V;for(let Oe=0;Oe<j;Oe++){const Ke=Oe*S-$;ce[v]=Ke*w,ce[m]=xe*M,ce[p]=G,l.push(ce.x,ce.y,ce.z),ce[v]=0,ce[m]=0,ce[p]=R>0?1:-1,u.push(ce.x,ce.y,ce.z),h.push(Oe/A),h.push(1-me/F),Q+=1}}for(let me=0;me<F;me++)for(let xe=0;xe<A;xe++){const Oe=d+xe+j*me,Ke=d+xe+j*(me+1),Y=d+(xe+1)+j*(me+1),se=d+(xe+1)+j*me;c.push(Oe,Ke,se),c.push(Ke,Y,se),H+=6}a.addGroup(f,H,E),f+=H,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Yi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Nt(n){const e={};for(let t=0;t<n.length;t++){const i=Yi(n[t]);for(const r in i)e[r]=i[r]}return e}function _p(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function mh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const Er={clone:Yi,merge:Nt};var xp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class At extends Qi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xp,this.fragmentShader=yp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yi(e.uniforms),this.uniformsGroups=_p(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class gh extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Tn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bn=new C,il=new ne,rl=new ne;class Jt extends gh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=br*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return br*2*Math.atan(Math.tan(Bi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bn.x,Bn.y).multiplyScalar(-e/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bn.x,Bn.y).multiplyScalar(-e/Bn.z)}getViewSize(e,t){return this.getViewBounds(e,il,rl),t.subVectors(rl,il)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Bi*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ti=-90,Ri=1;class Sp extends zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Jt(Ti,Ri,e,t);r.layers=this.layers,this.add(r);const s=new Jt(Ti,Ri,e,t);s.layers=this.layers,this.add(s);const o=new Jt(Ti,Ri,e,t);o.layers=this.layers,this.add(o);const a=new Jt(Ti,Ri,e,t);a.layers=this.layers,this.add(a);const c=new Jt(Ti,Ri,e,t);c.layers=this.layers,this.add(c);const l=new Jt(Ti,Ri,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===Tn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Fs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class vh extends Ot{constructor(e,t,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Wi,super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mp extends dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new vh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Lr(5,5,5),s=new At({name:"CubemapFromEquirect",uniforms:Yi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ht,blending:Rn});s.uniforms.tEquirect.value=t;const o=new Ut(r,s),a=t.minFilter;return t.minFilter===si&&(t.minFilter=mn),new Sp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const To=new C,bp=new C,Ep=new Ge;class Vn{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=To.subVectors(i,t).cross(bp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(To),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ep.getNormalMatrix(e),r=this.coplanarPoint(To).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Jn=new Fr,ns=new C;class _h{constructor(e=new Vn,t=new Vn,i=new Vn,r=new Vn,s=new Vn,o=new Vn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Tn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],h=r[6],d=r[7],f=r[8],g=r[9],v=r[10],m=r[11],p=r[12],w=r[13],M=r[14],x=r[15];if(i[0].setComponents(c-s,d-l,m-f,x-p).normalize(),i[1].setComponents(c+s,d+l,m+f,x+p).normalize(),i[2].setComponents(c+o,d+u,m+g,x+w).normalize(),i[3].setComponents(c-o,d-u,m-g,x-w).normalize(),i[4].setComponents(c-a,d-h,m-v,x-M).normalize(),t===Tn)i[5].setComponents(c+a,d+h,m+v,x+M).normalize();else if(t===Fs)i[5].setComponents(a,h,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Jn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jn)}intersectsSprite(e){return Jn.center.set(0,0,0),Jn.radius=.7071067811865476,Jn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ns.x=r.normal.x>0?e.max.x:e.min.x,ns.y=r.normal.y>0?e.max.y:e.min.y,ns.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ns)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xh(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function wp(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],v=h[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,h[d]=v)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const v=h[f];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}class Ys extends Ft{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,h=e/a,d=t/c,f=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const w=p*d-o;for(let M=0;M<l;M++){const x=M*h-s;g.push(x,-w,0),v.push(0,0,1),m.push(M/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<a;w++){const M=w+l*p,x=w+l*(p+1),N=w+1+l*(p+1),R=w+1+l*p;f.push(M,x,R),f.push(x,N,R)}this.setIndex(f),this.setAttribute("position",new Mt(g,3)),this.setAttribute("normal",new Mt(v,3)),this.setAttribute("uv",new Mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ys(e.width,e.height,e.widthSegments,e.heightSegments)}}var Tp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rp=`#ifdef USE_ALPHAHASH
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
#endif`,Ap=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ip=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fp=`#ifdef USE_AOMAP
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
#endif`,Dp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lp=`#ifdef USE_BATCHING
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
#endif`,Np=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Up=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Op=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kp=`#ifdef USE_IRIDESCENCE
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
#endif`,Bp=`#ifdef USE_BUMPMAP
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
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,qp=`#define PI 3.141592653589793
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
} // validated`,jp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kp=`vec3 transformedNormal = objectNormal;
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
#endif`,Jp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,em=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nm="gl_FragColor = linearToOutputTexel( gl_FragColor );",im=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rm=`#ifdef USE_ENVMAP
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
#endif`,sm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,om=`#ifdef USE_ENVMAP
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
#endif`,am=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cm=`#ifdef USE_ENVMAP
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
#endif`,lm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,um=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fm=`#ifdef USE_GRADIENTMAP
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
}`,pm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vm=`uniform bool receiveShadow;
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
#endif`,_m=`#ifdef USE_ENVMAP
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
#endif`,xm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bm=`PhysicalMaterial material;
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
#endif`,Em=`struct PhysicalMaterial {
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
}`,wm=`
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
#endif`,Tm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Am=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Im=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nm=`#if defined( USE_POINTS_UV )
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
#endif`,Um=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Om=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,km=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vm=`#ifdef USE_MORPHTARGETS
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
#endif`,Hm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$m=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ym=`#ifdef USE_NORMALMAP
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
#endif`,qm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Km=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ng=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ig=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,og=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ag=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ug=`float getShadowMask() {
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
}`,hg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dg=`#ifdef USE_SKINNING
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
#endif`,fg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pg=`#ifdef USE_SKINNING
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
#endif`,mg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_g=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xg=`#ifdef USE_TRANSMISSION
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
#endif`,yg=`#ifdef USE_TRANSMISSION
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
#endif`,Sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Eg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tg=`uniform sampler2D t2D;
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
}`,Rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ag=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ig=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pg=`#include <common>
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
}`,Fg=`#if DEPTH_PACKING == 3200
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
}`,Dg=`#define DISTANCE
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
}`,Lg=`#define DISTANCE
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
}`,Ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ug=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Og=`uniform float scale;
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
}`,zg=`uniform vec3 diffuse;
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
}`,kg=`#include <common>
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
}`,Bg=`uniform vec3 diffuse;
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
}`,Vg=`#define LAMBERT
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
}`,Hg=`#define LAMBERT
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
}`,Gg=`#define MATCAP
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
}`,Wg=`#define MATCAP
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
}`,Xg=`#define NORMAL
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
}`,Zg=`#define NORMAL
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
}`,$g=`#define PHONG
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
}`,Yg=`#define PHONG
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
}`,qg=`#define STANDARD
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
}`,jg=`#define STANDARD
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
}`,Kg=`#define TOON
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
}`,Jg=`#define TOON
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
}`,Qg=`uniform float size;
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
}`,ev=`uniform vec3 diffuse;
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
}`,tv=`#include <common>
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
}`,nv=`uniform vec3 color;
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
}`,iv=`uniform float rotation;
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
}`,rv=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Tp,alphahash_pars_fragment:Rp,alphamap_fragment:Ap,alphamap_pars_fragment:Cp,alphatest_fragment:Ip,alphatest_pars_fragment:Pp,aomap_fragment:Fp,aomap_pars_fragment:Dp,batching_pars_vertex:Lp,batching_vertex:Np,begin_vertex:Up,beginnormal_vertex:Op,bsdfs:zp,iridescence_fragment:kp,bumpmap_pars_fragment:Bp,clipping_planes_fragment:Vp,clipping_planes_pars_fragment:Hp,clipping_planes_pars_vertex:Gp,clipping_planes_vertex:Wp,color_fragment:Xp,color_pars_fragment:Zp,color_pars_vertex:$p,color_vertex:Yp,common:qp,cube_uv_reflection_fragment:jp,defaultnormal_vertex:Kp,displacementmap_pars_vertex:Jp,displacementmap_vertex:Qp,emissivemap_fragment:em,emissivemap_pars_fragment:tm,colorspace_fragment:nm,colorspace_pars_fragment:im,envmap_fragment:rm,envmap_common_pars_fragment:sm,envmap_pars_fragment:om,envmap_pars_vertex:am,envmap_physical_pars_fragment:_m,envmap_vertex:cm,fog_vertex:lm,fog_pars_vertex:um,fog_fragment:hm,fog_pars_fragment:dm,gradientmap_pars_fragment:fm,lightmap_pars_fragment:pm,lights_lambert_fragment:mm,lights_lambert_pars_fragment:gm,lights_pars_begin:vm,lights_toon_fragment:xm,lights_toon_pars_fragment:ym,lights_phong_fragment:Sm,lights_phong_pars_fragment:Mm,lights_physical_fragment:bm,lights_physical_pars_fragment:Em,lights_fragment_begin:wm,lights_fragment_maps:Tm,lights_fragment_end:Rm,logdepthbuf_fragment:Am,logdepthbuf_pars_fragment:Cm,logdepthbuf_pars_vertex:Im,logdepthbuf_vertex:Pm,map_fragment:Fm,map_pars_fragment:Dm,map_particle_fragment:Lm,map_particle_pars_fragment:Nm,metalnessmap_fragment:Um,metalnessmap_pars_fragment:Om,morphinstance_vertex:zm,morphcolor_vertex:km,morphnormal_vertex:Bm,morphtarget_pars_vertex:Vm,morphtarget_vertex:Hm,normal_fragment_begin:Gm,normal_fragment_maps:Wm,normal_pars_fragment:Xm,normal_pars_vertex:Zm,normal_vertex:$m,normalmap_pars_fragment:Ym,clearcoat_normal_fragment_begin:qm,clearcoat_normal_fragment_maps:jm,clearcoat_pars_fragment:Km,iridescence_pars_fragment:Jm,opaque_fragment:Qm,packing:eg,premultiplied_alpha_fragment:tg,project_vertex:ng,dithering_fragment:ig,dithering_pars_fragment:rg,roughnessmap_fragment:sg,roughnessmap_pars_fragment:og,shadowmap_pars_fragment:ag,shadowmap_pars_vertex:cg,shadowmap_vertex:lg,shadowmask_pars_fragment:ug,skinbase_vertex:hg,skinning_pars_vertex:dg,skinning_vertex:fg,skinnormal_vertex:pg,specularmap_fragment:mg,specularmap_pars_fragment:gg,tonemapping_fragment:vg,tonemapping_pars_fragment:_g,transmission_fragment:xg,transmission_pars_fragment:yg,uv_pars_fragment:Sg,uv_pars_vertex:Mg,uv_vertex:bg,worldpos_vertex:Eg,background_vert:wg,background_frag:Tg,backgroundCube_vert:Rg,backgroundCube_frag:Ag,cube_vert:Cg,cube_frag:Ig,depth_vert:Pg,depth_frag:Fg,distanceRGBA_vert:Dg,distanceRGBA_frag:Lg,equirect_vert:Ng,equirect_frag:Ug,linedashed_vert:Og,linedashed_frag:zg,meshbasic_vert:kg,meshbasic_frag:Bg,meshlambert_vert:Vg,meshlambert_frag:Hg,meshmatcap_vert:Gg,meshmatcap_frag:Wg,meshnormal_vert:Xg,meshnormal_frag:Zg,meshphong_vert:$g,meshphong_frag:Yg,meshphysical_vert:qg,meshphysical_frag:jg,meshtoon_vert:Kg,meshtoon_frag:Jg,points_vert:Qg,points_frag:ev,shadow_vert:tv,shadow_frag:nv,sprite_vert:iv,sprite_frag:rv},de={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},pn={basic:{uniforms:Nt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Nt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Be(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Nt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Nt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Nt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Be(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Nt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Nt([de.points,de.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Nt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Nt([de.common,de.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Nt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Nt([de.sprite,de.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Nt([de.common,de.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Nt([de.lights,de.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};pn.physical={uniforms:Nt([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const is={r:0,b:0,g:0},Qn=new Fn,sv=new ht;function ov(n,e,t,i,r,s,o){const a=new Be(0);let c=s===!0?0:1,l,u,h=null,d=0,f=null;function g(w){let M=w.isScene===!0?w.background:null;return M&&M.isTexture&&(M=(w.backgroundBlurriness>0?t:e).get(M)),M}function v(w){let M=!1;const x=g(w);x===null?p(a,c):x&&x.isColor&&(p(x,1),M=!0);const N=n.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(w,M){const x=g(M);x&&(x.isCubeTexture||x.mapping===Xs)?(u===void 0&&(u=new Ut(new Lr(1,1,1),new At({name:"BackgroundCubeMaterial",uniforms:Yi(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(N,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Qn.copy(M.backgroundRotation),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(sv.makeRotationFromEuler(Qn)),u.material.toneMapped=je.getTransfer(x.colorSpace)!==it,(h!==x||d!==x.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,f=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Ut(new Ys(2,2),new At({name:"BackgroundMaterial",uniforms:Yi(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=je.getTransfer(x.colorSpace)!==it,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,f=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function p(w,M){w.getRGB(is,mh(n)),i.buffers.color.setClear(is.r,is.g,is.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(w,M=1){a.set(w),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,p(a,c)},render:v,addToRenderList:m}}function av(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(S,I,$,V,G){let j=!1;const z=h(V,$,I);s!==z&&(s=z,l(s.object)),j=f(S,V,$,G),j&&g(S,V,$,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,x(S,I,$,V),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return n.createVertexArray()}function l(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function h(S,I,$){const V=$.wireframe===!0;let G=i[S.id];G===void 0&&(G={},i[S.id]=G);let j=G[I.id];j===void 0&&(j={},G[I.id]=j);let z=j[V];return z===void 0&&(z=d(c()),j[V]=z),z}function d(S){const I=[],$=[],V=[];for(let G=0;G<t;G++)I[G]=0,$[G]=0,V[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:$,attributeDivisors:V,object:S,attributes:{},index:null}}function f(S,I,$,V){const G=s.attributes,j=I.attributes;let z=0;const Q=$.getAttributes();for(const H in Q)if(Q[H].location>=0){const me=G[H];let xe=j[H];if(xe===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(xe=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(xe=S.instanceColor)),me===void 0||me.attribute!==xe||xe&&me.data!==xe.data)return!0;z++}return s.attributesNum!==z||s.index!==V}function g(S,I,$,V){const G={},j=I.attributes;let z=0;const Q=$.getAttributes();for(const H in Q)if(Q[H].location>=0){let me=j[H];me===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(me=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(me=S.instanceColor));const xe={};xe.attribute=me,me&&me.data&&(xe.data=me.data),G[H]=xe,z++}s.attributes=G,s.attributesNum=z,s.index=V}function v(){const S=s.newAttributes;for(let I=0,$=S.length;I<$;I++)S[I]=0}function m(S){p(S,0)}function p(S,I){const $=s.newAttributes,V=s.enabledAttributes,G=s.attributeDivisors;$[S]=1,V[S]===0&&(n.enableVertexAttribArray(S),V[S]=1),G[S]!==I&&(n.vertexAttribDivisor(S,I),G[S]=I)}function w(){const S=s.newAttributes,I=s.enabledAttributes;for(let $=0,V=I.length;$<V;$++)I[$]!==S[$]&&(n.disableVertexAttribArray($),I[$]=0)}function M(S,I,$,V,G,j,z){z===!0?n.vertexAttribIPointer(S,I,$,G,j):n.vertexAttribPointer(S,I,$,V,G,j)}function x(S,I,$,V){v();const G=V.attributes,j=$.getAttributes(),z=I.defaultAttributeValues;for(const Q in j){const H=j[Q];if(H.location>=0){let ce=G[Q];if(ce===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(ce=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(ce=S.instanceColor)),ce!==void 0){const me=ce.normalized,xe=ce.itemSize,Oe=e.get(ce);if(Oe===void 0)continue;const Ke=Oe.buffer,Y=Oe.type,se=Oe.bytesPerElement,Me=Y===n.INT||Y===n.UNSIGNED_INT||ce.gpuType===Ya;if(ce.isInterleavedBufferAttribute){const le=ce.data,Le=le.stride,te=ce.offset;if(le.isInstancedInterleavedBuffer){for(let ue=0;ue<H.locationSize;ue++)p(H.location+ue,le.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ue=0;ue<H.locationSize;ue++)m(H.location+ue);n.bindBuffer(n.ARRAY_BUFFER,Ke);for(let ue=0;ue<H.locationSize;ue++)M(H.location+ue,xe/H.locationSize,Y,me,Le*se,(te+xe/H.locationSize*ue)*se,Me)}else{if(ce.isInstancedBufferAttribute){for(let le=0;le<H.locationSize;le++)p(H.location+le,ce.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let le=0;le<H.locationSize;le++)m(H.location+le);n.bindBuffer(n.ARRAY_BUFFER,Ke);for(let le=0;le<H.locationSize;le++)M(H.location+le,xe/H.locationSize,Y,me,xe*se,xe/H.locationSize*le*se,Me)}}else if(z!==void 0){const me=z[Q];if(me!==void 0)switch(me.length){case 2:n.vertexAttrib2fv(H.location,me);break;case 3:n.vertexAttrib3fv(H.location,me);break;case 4:n.vertexAttrib4fv(H.location,me);break;default:n.vertexAttrib1fv(H.location,me)}}}}w()}function N(){F();for(const S in i){const I=i[S];for(const $ in I){const V=I[$];for(const G in V)u(V[G].object),delete V[G];delete I[$]}delete i[S]}}function R(S){if(i[S.id]===void 0)return;const I=i[S.id];for(const $ in I){const V=I[$];for(const G in V)u(V[G].object),delete V[G];delete I[$]}delete i[S.id]}function A(S){for(const I in i){const $=i[I];if($[S.id]===void 0)continue;const V=$[S.id];for(const G in V)u(V[G].object),delete V[G];delete $[S.id]}}function F(){E(),o=!0,s!==r&&(s=r,l(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:F,resetDefaultState:E,dispose:N,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:w}}function cv(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),t.update(u,i,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,i,1)}function c(l,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*d[v];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function lv(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==ln&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const F=A===An&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Pn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==wn&&!F)}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:N,maxSamples:R}}function uv(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Vn,a=new Ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||r;return r=d,i=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const w=s?0:i,M=w*4;let x=p.clippingState||null;c.value=x,x=u(g,d,M,f);for(let N=0;N!==M;++N)x[N]=t[N];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=f+v*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,x=f;M!==v;++M,x+=4)o.copy(h[M]).applyMatrix4(w,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function hv(n){let e=new WeakMap;function t(o,a){return a===oa?o.mapping=Wi:a===aa&&(o.mapping=Xi),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===oa||a===aa)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Mp(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class yh extends gh{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Li=4,sl=[.125,.215,.35,.446,.526,.582],ii=20,Ro=new yh,ol=new Be;let Ao=null,Co=0,Io=0,Po=!1;const ti=(1+Math.sqrt(5))/2,Ai=1/ti,al=[new C(-ti,Ai,0),new C(ti,Ai,0),new C(-Ai,0,ti),new C(Ai,0,ti),new C(0,ti,-Ai),new C(0,ti,Ai),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class cl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ao=this._renderer.getRenderTarget(),Co=this._renderer.getActiveCubeFace(),Io=this._renderer.getActiveMipmapLevel(),Po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ul(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ao,Co,Io),this._renderer.xr.enabled=Po,e.scissorTest=!1,rs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wi||e.mapping===Xi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ao=this._renderer.getRenderTarget(),Co=this._renderer.getActiveCubeFace(),Io=this._renderer.getActiveMipmapLevel(),Po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:An,format:ln,colorSpace:Ji,depthBuffer:!1},r=ll(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ll(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dv(s)),this._blurMaterial=fv(s,e,t)}return r}_compileMaterial(e){const t=new Ut(this._lodPlanes[0],e);this._renderer.compile(t,Ro)}_sceneToCubeUV(e,t,i,r){const a=new Jt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(ol),u.toneMapping=Gn,u.autoClear=!1;const f=new $s({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),g=new Ut(new Lr,f);let v=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(ol),v=!0);for(let p=0;p<6;p++){const w=p%3;w===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):w===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const M=this._cubeSize;rs(r,w*M,p>2?M:0,M,M),u.setRenderTarget(r),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Wi||e.mapping===Xi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=hl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ul());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ut(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;rs(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Ro)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=al[(r-s-1)%al.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ut(this._lodPlanes[r],l),d=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*ii-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):ii;m>ii&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ii}`);const p=[];let w=0;for(let A=0;A<ii;++A){const F=A/v,E=Math.exp(-F*F/2);p.push(E),A===0?w+=E:A<m&&(w+=2*E)}for(let A=0;A<p.length;A++)p[A]=p[A]/w;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-i;const x=this._sizeLods[r],N=3*x*(r>M-Li?r-M+Li:0),R=4*(this._cubeSize-x);rs(t,N,R,3*x,2*x),c.setRenderTarget(t),c.render(h,Ro)}}function dv(n){const e=[],t=[],i=[];let r=n;const s=n-Li+1+sl.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>n-Li?c=sl[o-n+Li-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,v=3,m=2,p=1,w=new Float32Array(v*g*f),M=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let R=0;R<f;R++){const A=R%3*2/3-1,F=R>2?0:-1,E=[A,F,0,A+2/3,F,0,A+2/3,F+1,0,A,F,0,A+2/3,F+1,0,A,F+1,0];w.set(E,v*g*R),M.set(d,m*g*R);const S=[R,R,R,R,R,R];x.set(S,p*g*R)}const N=new Ft;N.setAttribute("position",new Yt(w,v)),N.setAttribute("uv",new Yt(M,m)),N.setAttribute("faceIndex",new Yt(x,p)),e.push(N),r>Li&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ll(n,e,t){const i=new dn(n,e,t);return i.texture.mapping=Xs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function fv(n,e,t){const i=new Float32Array(ii),r=new C(0,1,0);return new At({name:"SphericalGaussianBlur",defines:{n:ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:nc(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function ul(){return new At({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nc(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function hl(){return new At({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function nc(){return`

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
	`}function pv(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===oa||c===aa,u=c===Wi||c===Xi;if(l||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new cl(n)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new cl(n)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function mv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&pr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function gv(n,e,t,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}d.removeEventListener("dispose",o),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],n.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,g=h.attributes.position;let v=0;if(f!==null){const w=f.array;v=f.version;for(let M=0,x=w.length;M<x;M+=3){const N=w[M+0],R=w[M+1],A=w[M+2];d.push(N,R,R,A,A,N)}}else if(g!==void 0){const w=g.array;v=g.version;for(let M=0,x=w.length/3-1;M<x;M+=3){const N=M+0,R=M+1,A=M+2;d.push(N,R,R,A,A,N)}}else return;const m=new(lh(d)?ph:fh)(d,1);m.version=v;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function vv(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,f){n.drawElements(i,f,s,d*o),t.update(f,i,1)}function l(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,s,d*o,g),t.update(f,i,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function h(d,f,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,v,0,g);let p=0;for(let w=0;w<g;w++)p+=f[w]*v[w];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function _v(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function xv(n,e,t){const i=new WeakMap,r=new xt;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let E=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let M=0;f===!0&&(M=1),g===!0&&(M=2),v===!0&&(M=3);let x=a.attributes.position.count*M,N=1;x>e.maxTextureSize&&(N=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const R=new Float32Array(x*N*4*h),A=new hh(R,x,N,h);A.type=wn,A.needsUpdate=!0;const F=M*4;for(let S=0;S<h;S++){const I=m[S],$=p[S],V=w[S],G=x*N*4*S;for(let j=0;j<I.count;j++){const z=j*F;f===!0&&(r.fromBufferAttribute(I,j),R[G+z+0]=r.x,R[G+z+1]=r.y,R[G+z+2]=r.z,R[G+z+3]=0),g===!0&&(r.fromBufferAttribute($,j),R[G+z+4]=r.x,R[G+z+5]=r.y,R[G+z+6]=r.z,R[G+z+7]=0),v===!0&&(r.fromBufferAttribute(V,j),R[G+z+8]=r.x,R[G+z+9]=r.y,R[G+z+10]=r.z,R[G+z+11]=V.itemSize===4?r.w:1)}}d={count:h,texture:A,size:new ne(x,N)},i.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];const g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function yv(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return h}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}class Sh extends Ot{constructor(e,t,i,r,s,o,a,c,l,u=ki){if(u!==ki&&u!==$i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ki&&(i=oi),i===void 0&&u===$i&&(i=Zi),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:hn,this.minFilter=c!==void 0?c:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Mh=new Ot,dl=new Sh(1,1),bh=new hh,Eh=new ap,wh=new vh,fl=[],pl=[],ml=new Float32Array(16),gl=new Float32Array(9),vl=new Float32Array(4);function er(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=fl[r];if(s===void 0&&(s=new Float32Array(r),fl[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Et(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function qs(n,e){let t=pl[e];t===void 0&&(t=new Int32Array(e),pl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Sv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Mv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2fv(this.addr,e),Et(t,e)}}function bv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;n.uniform3fv(this.addr,e),Et(t,e)}}function Ev(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4fv(this.addr,e),Et(t,e)}}function wv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(bt(t,i))return;vl.set(i),n.uniformMatrix2fv(this.addr,!1,vl),Et(t,i)}}function Tv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(bt(t,i))return;gl.set(i),n.uniformMatrix3fv(this.addr,!1,gl),Et(t,i)}}function Rv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(bt(t,i))return;ml.set(i),n.uniformMatrix4fv(this.addr,!1,ml),Et(t,i)}}function Av(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Cv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2iv(this.addr,e),Et(t,e)}}function Iv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3iv(this.addr,e),Et(t,e)}}function Pv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4iv(this.addr,e),Et(t,e)}}function Fv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Dv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2uiv(this.addr,e),Et(t,e)}}function Lv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3uiv(this.addr,e),Et(t,e)}}function Nv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4uiv(this.addr,e),Et(t,e)}}function Uv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(dl.compareFunction=ch,s=dl):s=Mh,t.setTexture2D(e||s,r)}function Ov(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Eh,r)}function zv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||wh,r)}function kv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||bh,r)}function Bv(n){switch(n){case 5126:return Sv;case 35664:return Mv;case 35665:return bv;case 35666:return Ev;case 35674:return wv;case 35675:return Tv;case 35676:return Rv;case 5124:case 35670:return Av;case 35667:case 35671:return Cv;case 35668:case 35672:return Iv;case 35669:case 35673:return Pv;case 5125:return Fv;case 36294:return Dv;case 36295:return Lv;case 36296:return Nv;case 35678:case 36198:case 36298:case 36306:case 35682:return Uv;case 35679:case 36299:case 36307:return Ov;case 35680:case 36300:case 36308:case 36293:return zv;case 36289:case 36303:case 36311:case 36292:return kv}}function Vv(n,e){n.uniform1fv(this.addr,e)}function Hv(n,e){const t=er(e,this.size,2);n.uniform2fv(this.addr,t)}function Gv(n,e){const t=er(e,this.size,3);n.uniform3fv(this.addr,t)}function Wv(n,e){const t=er(e,this.size,4);n.uniform4fv(this.addr,t)}function Xv(n,e){const t=er(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Zv(n,e){const t=er(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function $v(n,e){const t=er(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Yv(n,e){n.uniform1iv(this.addr,e)}function qv(n,e){n.uniform2iv(this.addr,e)}function jv(n,e){n.uniform3iv(this.addr,e)}function Kv(n,e){n.uniform4iv(this.addr,e)}function Jv(n,e){n.uniform1uiv(this.addr,e)}function Qv(n,e){n.uniform2uiv(this.addr,e)}function e_(n,e){n.uniform3uiv(this.addr,e)}function t_(n,e){n.uniform4uiv(this.addr,e)}function n_(n,e,t){const i=this.cache,r=e.length,s=qs(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Mh,s[o])}function i_(n,e,t){const i=this.cache,r=e.length,s=qs(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Eh,s[o])}function r_(n,e,t){const i=this.cache,r=e.length,s=qs(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||wh,s[o])}function s_(n,e,t){const i=this.cache,r=e.length,s=qs(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||bh,s[o])}function o_(n){switch(n){case 5126:return Vv;case 35664:return Hv;case 35665:return Gv;case 35666:return Wv;case 35674:return Xv;case 35675:return Zv;case 35676:return $v;case 5124:case 35670:return Yv;case 35667:case 35671:return qv;case 35668:case 35672:return jv;case 35669:case 35673:return Kv;case 5125:return Jv;case 36294:return Qv;case 36295:return e_;case 36296:return t_;case 35678:case 36198:case 36298:case 36306:case 35682:return n_;case 35679:case 36299:case 36307:return i_;case 35680:case 36300:case 36308:case 36293:return r_;case 36289:case 36303:case 36311:case 36292:return s_}}class a_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Bv(t.type)}}class c_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=o_(t.type)}}class l_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Fo=/(\w+)(\])?(\[|\.)?/g;function _l(n,e){n.seq.push(e),n.map[e.id]=e}function u_(n,e,t){const i=n.name,r=i.length;for(Fo.lastIndex=0;;){const s=Fo.exec(i),o=Fo.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){_l(t,l===void 0?new a_(a,n,e):new c_(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new l_(a),_l(t,h)),t=h}}}class Ps{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);u_(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function xl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const h_=37297;let d_=0;function f_(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const yl=new Ge;function p_(n){je._getMatrix(yl,je.workingColorSpace,n);const e=`mat3( ${yl.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(n)){case Zs:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Sl(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+f_(n.getShaderSource(e),o)}else return r}function m_(n,e){const t=p_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function g_(n,e){let t;switch(e){case Zu:t="Linear";break;case $u:t="Reinhard";break;case Yu:t="Cineon";break;case $a:t="ACESFilmic";break;case qu:t="AgX";break;case ju:t="Neutral";break;case Ef:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ss=new C;function v_(){je.getLuminanceCoefficients(ss);const n=ss.x.toFixed(4),e=ss.y.toFixed(4),t=ss.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function __(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mr).join(`
`)}function x_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function y_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function mr(n){return n!==""}function Ml(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const S_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ua(n){return n.replace(S_,b_)}const M_=new Map;function b_(n,e){let t=Xe[e];if(t===void 0){const i=M_.get(e);if(i!==void 0)t=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ua(t)}const E_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function El(n){return n.replace(E_,w_)}function w_(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function wl(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function T_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Wu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===nf?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===En&&(e="SHADOWMAP_TYPE_VSM"),e}function R_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Wi:case Xi:e="ENVMAP_TYPE_CUBE";break;case Xs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function A_(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Xi:e="ENVMAP_MODE_REFRACTION";break}return e}function C_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Xu:e="ENVMAP_BLENDING_MULTIPLY";break;case Mf:e="ENVMAP_BLENDING_MIX";break;case bf:e="ENVMAP_BLENDING_ADD";break}return e}function I_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function P_(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=T_(t),l=R_(t),u=A_(t),h=C_(t),d=I_(t),f=__(t),g=x_(s),v=r.createProgram();let m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(mr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(mr).join(`
`),p.length>0&&(p+=`
`)):(m=[wl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),p=[wl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gn?"#define TONE_MAPPING":"",t.toneMapping!==Gn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Gn?g_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,m_("linearToOutputTexel",t.outputColorSpace),v_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mr).join(`
`)),o=Ua(o),o=Ml(o,t),o=bl(o,t),a=Ua(a),a=Ml(a,t),a=bl(a,t),o=El(o),a=El(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=w+m+o,x=w+p+a,N=xl(r,r.VERTEX_SHADER,M),R=xl(r,r.FRAGMENT_SHADER,x);r.attachShader(v,N),r.attachShader(v,R),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function A(I){if(n.debug.checkShaderErrors){const $=r.getProgramInfoLog(v).trim(),V=r.getShaderInfoLog(N).trim(),G=r.getShaderInfoLog(R).trim();let j=!0,z=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,N,R);else{const Q=Sl(r,N,"vertex"),H=Sl(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+$+`
`+Q+`
`+H)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(V===""||G==="")&&(z=!1);z&&(I.diagnostics={runnable:j,programLog:$,vertexShader:{log:V,prefix:m},fragmentShader:{log:G,prefix:p}})}r.deleteShader(N),r.deleteShader(R),F=new Ps(r,v),E=y_(r,v)}let F;this.getUniforms=function(){return F===void 0&&A(this),F};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(v,h_)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=d_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=N,this.fragmentShader=R,this}let F_=0;class D_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new L_(e),t.set(e,i)),i}}class L_{constructor(e){this.id=F_++,this.code=e,this.usedTimes=0}}function N_(n,e,t,i,r,s,o){const a=new tc,c=new D_,l=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,S,I,$,V){const G=$.fog,j=V.geometry,z=E.isMeshStandardMaterial?$.environment:null,Q=(E.isMeshStandardMaterial?t:e).get(E.envMap||z),H=Q&&Q.mapping===Xs?Q.image.height:null,ce=g[E.type];E.precision!==null&&(f=r.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const me=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,xe=me!==void 0?me.length:0;let Oe=0;j.morphAttributes.position!==void 0&&(Oe=1),j.morphAttributes.normal!==void 0&&(Oe=2),j.morphAttributes.color!==void 0&&(Oe=3);let Ke,Y,se,Me;if(ce){const nt=pn[ce];Ke=nt.vertexShader,Y=nt.fragmentShader}else Ke=E.vertexShader,Y=E.fragmentShader,c.update(E),se=c.getVertexShaderID(E),Me=c.getFragmentShaderID(E);const le=n.getRenderTarget(),Le=n.state.buffers.depth.getReversed(),te=V.isInstancedMesh===!0,ue=V.isBatchedMesh===!0,Ye=!!E.map,K=!!E.matcap,oe=!!Q,T=!!E.aoMap,Ie=!!E.lightMap,ie=!!E.bumpMap,be=!!E.normalMap,he=!!E.displacementMap,Ne=!!E.emissiveMap,ye=!!E.metalnessMap,b=!!E.roughnessMap,_=E.anisotropy>0,U=E.clearcoat>0,Z=E.dispersion>0,ee=E.iridescence>0,q=E.sheen>0,Te=E.transmission>0,fe=_&&!!E.anisotropyMap,Se=U&&!!E.clearcoatMap,$e=U&&!!E.clearcoatNormalMap,re=U&&!!E.clearcoatRoughnessMap,Ee=ee&&!!E.iridescenceMap,Ue=ee&&!!E.iridescenceThicknessMap,ze=q&&!!E.sheenColorMap,we=q&&!!E.sheenRoughnessMap,qe=!!E.specularMap,We=!!E.specularColorMap,ot=!!E.specularIntensityMap,P=Te&&!!E.transmissionMap,pe=Te&&!!E.thicknessMap,W=!!E.gradientMap,J=!!E.alphaMap,_e=E.alphaTest>0,ge=!!E.alphaHash,Ve=!!E.extensions;let vt=Gn;E.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(vt=n.toneMapping);const Ct={shaderID:ce,shaderType:E.type,shaderName:E.name,vertexShader:Ke,fragmentShader:Y,defines:E.defines,customVertexShaderID:se,customFragmentShaderID:Me,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:ue,batchingColor:ue&&V._colorsTexture!==null,instancing:te,instancingColor:te&&V.instanceColor!==null,instancingMorph:te&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:le===null?n.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Ji,alphaToCoverage:!!E.alphaToCoverage,map:Ye,matcap:K,envMap:oe,envMapMode:oe&&Q.mapping,envMapCubeUVHeight:H,aoMap:T,lightMap:Ie,bumpMap:ie,normalMap:be,displacementMap:d&&he,emissiveMap:Ne,normalMapObjectSpace:be&&E.normalMapType===Cf,normalMapTangentSpace:be&&E.normalMapType===Af,metalnessMap:ye,roughnessMap:b,anisotropy:_,anisotropyMap:fe,clearcoat:U,clearcoatMap:Se,clearcoatNormalMap:$e,clearcoatRoughnessMap:re,dispersion:Z,iridescence:ee,iridescenceMap:Ee,iridescenceThicknessMap:Ue,sheen:q,sheenColorMap:ze,sheenRoughnessMap:we,specularMap:qe,specularColorMap:We,specularIntensityMap:ot,transmission:Te,transmissionMap:P,thicknessMap:pe,gradientMap:W,opaque:E.transparent===!1&&E.blending===zi&&E.alphaToCoverage===!1,alphaMap:J,alphaTest:_e,alphaHash:ge,combine:E.combine,mapUv:Ye&&v(E.map.channel),aoMapUv:T&&v(E.aoMap.channel),lightMapUv:Ie&&v(E.lightMap.channel),bumpMapUv:ie&&v(E.bumpMap.channel),normalMapUv:be&&v(E.normalMap.channel),displacementMapUv:he&&v(E.displacementMap.channel),emissiveMapUv:Ne&&v(E.emissiveMap.channel),metalnessMapUv:ye&&v(E.metalnessMap.channel),roughnessMapUv:b&&v(E.roughnessMap.channel),anisotropyMapUv:fe&&v(E.anisotropyMap.channel),clearcoatMapUv:Se&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:$e&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:we&&v(E.sheenRoughnessMap.channel),specularMapUv:qe&&v(E.specularMap.channel),specularColorMapUv:We&&v(E.specularColorMap.channel),specularIntensityMapUv:ot&&v(E.specularIntensityMap.channel),transmissionMapUv:P&&v(E.transmissionMap.channel),thicknessMapUv:pe&&v(E.thicknessMap.channel),alphaMapUv:J&&v(E.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(be||_),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!j.attributes.uv&&(Ye||J),fog:!!G,useFog:E.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Le,skinning:V.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Oe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:vt,decodeVideoTexture:Ye&&E.map.isVideoTexture===!0&&je.getTransfer(E.map.colorSpace)===it,decodeVideoTextureEmissive:Ne&&E.emissiveMap.isVideoTexture===!0&&je.getTransfer(E.emissiveMap.colorSpace)===it,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===cn,flipSided:E.side===Ht,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ve&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&E.extensions.multiDraw===!0||ue)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ct.vertexUv1s=l.has(1),Ct.vertexUv2s=l.has(2),Ct.vertexUv3s=l.has(3),l.clear(),Ct}function p(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const I in E.defines)S.push(I),S.push(E.defines[I]);return E.isRawShaderMaterial===!1&&(w(S,E),M(S,E),S.push(n.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function w(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function M(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){const S=g[E.type];let I;if(S){const $=pn[S];I=Er.clone($.uniforms)}else I=E.uniforms;return I}function N(E,S){let I;for(let $=0,V=u.length;$<V;$++){const G=u[$];if(G.cacheKey===S){I=G,++I.usedTimes;break}}return I===void 0&&(I=new P_(n,S,E,s),u.push(I)),I}function R(E){if(--E.usedTimes===0){const S=u.indexOf(E);u[S]=u[u.length-1],u.pop(),E.destroy()}}function A(E){c.remove(E)}function F(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:N,releaseProgram:R,releaseShaderCache:A,programs:u,dispose:F}}function U_(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function O_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Tl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Rl(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,d,f,g,v,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=v,p.group=m),e++,p}function a(h,d,f,g,v,m){const p=o(h,d,f,g,v,m);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):t.push(p)}function c(h,d,f,g,v,m){const p=o(h,d,f,g,v,m);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||O_),i.length>1&&i.sort(d||Tl),r.length>1&&r.sort(d||Tl)}function u(){for(let h=e,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function z_(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Rl,n.set(i,[o])):r>=s.length?(o=new Rl,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function k_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Be};break;case"SpotLight":t={position:new C,direction:new C,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new C,halfWidth:new C,halfHeight:new C};break}return n[e.id]=t,t}}}function B_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let V_=0;function H_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function G_(n){const e=new k_,t=B_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new C);const r=new C,s=new ht,o=new ht;function a(l){let u=0,h=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,w=0,M=0,x=0,N=0,R=0,A=0;l.sort(H_);for(let E=0,S=l.length;E<S;E++){const I=l[E],$=I.color,V=I.intensity,G=I.distance,j=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=$.r*V,h+=$.g*V,d+=$.b*V;else if(I.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(I.sh.coefficients[z],V);A++}else if(I.isDirectionalLight){const z=e.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Q=I.shadow,H=t.get(I);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,i.directionalShadow[f]=H,i.directionalShadowMap[f]=j,i.directionalShadowMatrix[f]=I.shadow.matrix,w++}i.directional[f]=z,f++}else if(I.isSpotLight){const z=e.get(I);z.position.setFromMatrixPosition(I.matrixWorld),z.color.copy($).multiplyScalar(V),z.distance=G,z.coneCos=Math.cos(I.angle),z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),z.decay=I.decay,i.spot[v]=z;const Q=I.shadow;if(I.map&&(i.spotLightMap[N]=I.map,N++,Q.updateMatrices(I),I.castShadow&&R++),i.spotLightMatrix[v]=Q.matrix,I.castShadow){const H=t.get(I);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,i.spotShadow[v]=H,i.spotShadowMap[v]=j,x++}v++}else if(I.isRectAreaLight){const z=e.get(I);z.color.copy($).multiplyScalar(V),z.halfWidth.set(I.width*.5,0,0),z.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=z,m++}else if(I.isPointLight){const z=e.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),z.distance=I.distance,z.decay=I.decay,I.castShadow){const Q=I.shadow,H=t.get(I);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,H.shadowCameraNear=Q.camera.near,H.shadowCameraFar=Q.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=j,i.pointShadowMatrix[g]=I.shadow.matrix,M++}i.point[g]=z,g++}else if(I.isHemisphereLight){const z=e.get(I);z.skyColor.copy(I.color).multiplyScalar(V),z.groundColor.copy(I.groundColor).multiplyScalar(V),i.hemi[p]=z,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const F=i.hash;(F.directionalLength!==f||F.pointLength!==g||F.spotLength!==v||F.rectAreaLength!==m||F.hemiLength!==p||F.numDirectionalShadows!==w||F.numPointShadows!==M||F.numSpotShadows!==x||F.numSpotMaps!==N||F.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=x+N-R,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=A,F.directionalLength=f,F.pointLength=g,F.spotLength=v,F.rectAreaLength=m,F.hemiLength=p,F.numDirectionalShadows=w,F.numPointShadows=M,F.numSpotShadows=x,F.numSpotMaps=N,F.numLightProbes=A,i.version=V_++)}function c(l,u){let h=0,d=0,f=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,w=l.length;p<w;p++){const M=l[p];if(M.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),h++}else if(M.isSpotLight){const x=i.spot[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:i}}function Al(n){const e=new G_(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function W_(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Al(n),e.set(r,[a])):s>=o.length?(a=new Al(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class X_ extends Qi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Tf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Z_ extends Qi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Y_=`uniform sampler2D shadow_pass;
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
}`;function q_(n,e,t){let i=new _h;const r=new ne,s=new ne,o=new xt,a=new X_({depthPacking:Rf}),c=new Z_,l={},u=t.maxTextureSize,h={[Wn]:Ht,[Ht]:Wn,[cn]:cn},d=new At({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:$_,fragmentShader:Y_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ft;g.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ut(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wu;let p=this.type;this.render=function(R,A,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const E=n.getRenderTarget(),S=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),$=n.state;$.setBlending(Rn),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const V=p!==En&&this.type===En,G=p===En&&this.type!==En;for(let j=0,z=R.length;j<z;j++){const Q=R[j],H=Q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const ce=H.getFrameExtents();if(r.multiply(ce),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ce.x),r.x=s.x*ce.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ce.y),r.y=s.y*ce.y,H.mapSize.y=s.y)),H.map===null||V===!0||G===!0){const xe=this.type!==En?{minFilter:hn,magFilter:hn}:{};H.map!==null&&H.map.dispose(),H.map=new dn(r.x,r.y,xe),H.map.texture.name=Q.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const me=H.getViewportCount();for(let xe=0;xe<me;xe++){const Oe=H.getViewport(xe);o.set(s.x*Oe.x,s.y*Oe.y,s.x*Oe.z,s.y*Oe.w),$.viewport(o),H.updateMatrices(Q,xe),i=H.getFrustum(),x(A,F,H.camera,Q,this.type)}H.isPointLightShadow!==!0&&this.type===En&&w(H,F),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(E,S,I)};function w(R,A){const F=e.update(v);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new dn(r.x,r.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(A,null,F,d,v,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(A,null,F,f,v,null)}function M(R,A,F,E){let S=null;const I=F.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(I!==void 0)S=I;else if(S=F.isPointLight===!0?c:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const $=S.uuid,V=A.uuid;let G=l[$];G===void 0&&(G={},l[$]=G);let j=G[V];j===void 0&&(j=S.clone(),G[V]=j,A.addEventListener("dispose",N)),S=j}if(S.visible=A.visible,S.wireframe=A.wireframe,E===En?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:h[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,F.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const $=n.properties.get(S);$.light=F}return S}function x(R,A,F,E,S){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===En)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,R.matrixWorld);const V=e.update(R),G=R.material;if(Array.isArray(G)){const j=V.groups;for(let z=0,Q=j.length;z<Q;z++){const H=j[z],ce=G[H.materialIndex];if(ce&&ce.visible){const me=M(R,ce,E,S);R.onBeforeShadow(n,R,A,F,V,me,H),n.renderBufferDirect(F,null,V,me,R,H),R.onAfterShadow(n,R,A,F,V,me,H)}}}else if(G.visible){const j=M(R,G,E,S);R.onBeforeShadow(n,R,A,F,V,j,null),n.renderBufferDirect(F,null,V,j,R,null),R.onAfterShadow(n,R,A,F,V,j,null)}}const $=R.children;for(let V=0,G=$.length;V<G;V++)x($[V],A,F,E,S)}function N(R){R.target.removeEventListener("dispose",N);for(const F in l){const E=l[F],S=R.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const j_={[Qo]:ea,[ta]:ra,[na]:sa,[Gi]:ia,[ea]:Qo,[ra]:ta,[sa]:na,[ia]:Gi};function K_(n,e){function t(){let P=!1;const pe=new xt;let W=null;const J=new xt(0,0,0,0);return{setMask:function(_e){W!==_e&&!P&&(n.colorMask(_e,_e,_e,_e),W=_e)},setLocked:function(_e){P=_e},setClear:function(_e,ge,Ve,vt,Ct){Ct===!0&&(_e*=vt,ge*=vt,Ve*=vt),pe.set(_e,ge,Ve,vt),J.equals(pe)===!1&&(n.clearColor(_e,ge,Ve,vt),J.copy(pe))},reset:function(){P=!1,W=null,J.set(-1,0,0,0)}}}function i(){let P=!1,pe=!1,W=null,J=null,_e=null;return{setReversed:function(ge){if(pe!==ge){const Ve=e.get("EXT_clip_control");pe?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT);const vt=_e;_e=null,this.setClear(vt)}pe=ge},getReversed:function(){return pe},setTest:function(ge){ge?le(n.DEPTH_TEST):Le(n.DEPTH_TEST)},setMask:function(ge){W!==ge&&!P&&(n.depthMask(ge),W=ge)},setFunc:function(ge){if(pe&&(ge=j_[ge]),J!==ge){switch(ge){case Qo:n.depthFunc(n.NEVER);break;case ea:n.depthFunc(n.ALWAYS);break;case ta:n.depthFunc(n.LESS);break;case Gi:n.depthFunc(n.LEQUAL);break;case na:n.depthFunc(n.EQUAL);break;case ia:n.depthFunc(n.GEQUAL);break;case ra:n.depthFunc(n.GREATER);break;case sa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=ge}},setLocked:function(ge){P=ge},setClear:function(ge){_e!==ge&&(pe&&(ge=1-ge),n.clearDepth(ge),_e=ge)},reset:function(){P=!1,W=null,J=null,_e=null,pe=!1}}}function r(){let P=!1,pe=null,W=null,J=null,_e=null,ge=null,Ve=null,vt=null,Ct=null;return{setTest:function(nt){P||(nt?le(n.STENCIL_TEST):Le(n.STENCIL_TEST))},setMask:function(nt){pe!==nt&&!P&&(n.stencilMask(nt),pe=nt)},setFunc:function(nt,tn,vn){(W!==nt||J!==tn||_e!==vn)&&(n.stencilFunc(nt,tn,vn),W=nt,J=tn,_e=vn)},setOp:function(nt,tn,vn){(ge!==nt||Ve!==tn||vt!==vn)&&(n.stencilOp(nt,tn,vn),ge=nt,Ve=tn,vt=vn)},setLocked:function(nt){P=nt},setClear:function(nt){Ct!==nt&&(n.clearStencil(nt),Ct=nt)},reset:function(){P=!1,pe=null,W=null,J=null,_e=null,ge=null,Ve=null,vt=null,Ct=null}}}const s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,w=null,M=null,x=null,N=null,R=null,A=new Be(0,0,0),F=0,E=!1,S=null,I=null,$=null,V=null,G=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,Q=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(H)[1]),z=Q>=1):H.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),z=Q>=2);let ce=null,me={};const xe=n.getParameter(n.SCISSOR_BOX),Oe=n.getParameter(n.VIEWPORT),Ke=new xt().fromArray(xe),Y=new xt().fromArray(Oe);function se(P,pe,W,J){const _e=new Uint8Array(4),ge=n.createTexture();n.bindTexture(P,ge),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ve=0;Ve<W;Ve++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(pe,0,n.RGBA,1,1,J,0,n.RGBA,n.UNSIGNED_BYTE,_e):n.texImage2D(pe+Ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_e);return ge}const Me={};Me[n.TEXTURE_2D]=se(n.TEXTURE_2D,n.TEXTURE_2D,1),Me[n.TEXTURE_CUBE_MAP]=se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[n.TEXTURE_2D_ARRAY]=se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Me[n.TEXTURE_3D]=se(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(n.DEPTH_TEST),o.setFunc(Gi),ie(!1),be(Fc),le(n.CULL_FACE),T(Rn);function le(P){u[P]!==!0&&(n.enable(P),u[P]=!0)}function Le(P){u[P]!==!1&&(n.disable(P),u[P]=!1)}function te(P,pe){return h[P]!==pe?(n.bindFramebuffer(P,pe),h[P]=pe,P===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=pe),P===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=pe),!0):!1}function ue(P,pe){let W=f,J=!1;if(P){W=d.get(pe),W===void 0&&(W=[],d.set(pe,W));const _e=P.textures;if(W.length!==_e.length||W[0]!==n.COLOR_ATTACHMENT0){for(let ge=0,Ve=_e.length;ge<Ve;ge++)W[ge]=n.COLOR_ATTACHMENT0+ge;W.length=_e.length,J=!0}}else W[0]!==n.BACK&&(W[0]=n.BACK,J=!0);J&&n.drawBuffers(W)}function Ye(P){return g!==P?(n.useProgram(P),g=P,!0):!1}const K={[ni]:n.FUNC_ADD,[sf]:n.FUNC_SUBTRACT,[of]:n.FUNC_REVERSE_SUBTRACT};K[af]=n.MIN,K[cf]=n.MAX;const oe={[lf]:n.ZERO,[uf]:n.ONE,[hf]:n.SRC_COLOR,[Ko]:n.SRC_ALPHA,[vf]:n.SRC_ALPHA_SATURATE,[mf]:n.DST_COLOR,[ff]:n.DST_ALPHA,[df]:n.ONE_MINUS_SRC_COLOR,[Jo]:n.ONE_MINUS_SRC_ALPHA,[gf]:n.ONE_MINUS_DST_COLOR,[pf]:n.ONE_MINUS_DST_ALPHA,[_f]:n.CONSTANT_COLOR,[xf]:n.ONE_MINUS_CONSTANT_COLOR,[yf]:n.CONSTANT_ALPHA,[Sf]:n.ONE_MINUS_CONSTANT_ALPHA};function T(P,pe,W,J,_e,ge,Ve,vt,Ct,nt){if(P===Rn){v===!0&&(Le(n.BLEND),v=!1);return}if(v===!1&&(le(n.BLEND),v=!0),P!==rf){if(P!==m||nt!==E){if((p!==ni||x!==ni)&&(n.blendEquation(n.FUNC_ADD),p=ni,x=ni),nt)switch(P){case zi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case In:n.blendFunc(n.ONE,n.ONE);break;case Dc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Lc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case zi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case In:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Dc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Lc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}w=null,M=null,N=null,R=null,A.set(0,0,0),F=0,m=P,E=nt}return}_e=_e||pe,ge=ge||W,Ve=Ve||J,(pe!==p||_e!==x)&&(n.blendEquationSeparate(K[pe],K[_e]),p=pe,x=_e),(W!==w||J!==M||ge!==N||Ve!==R)&&(n.blendFuncSeparate(oe[W],oe[J],oe[ge],oe[Ve]),w=W,M=J,N=ge,R=Ve),(vt.equals(A)===!1||Ct!==F)&&(n.blendColor(vt.r,vt.g,vt.b,Ct),A.copy(vt),F=Ct),m=P,E=!1}function Ie(P,pe){P.side===cn?Le(n.CULL_FACE):le(n.CULL_FACE);let W=P.side===Ht;pe&&(W=!W),ie(W),P.blending===zi&&P.transparent===!1?T(Rn):T(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),s.setMask(P.colorWrite);const J=P.stencilWrite;a.setTest(J),J&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ne(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?le(n.SAMPLE_ALPHA_TO_COVERAGE):Le(n.SAMPLE_ALPHA_TO_COVERAGE)}function ie(P){S!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),S=P)}function be(P){P!==ef?(le(n.CULL_FACE),P!==I&&(P===Fc?n.cullFace(n.BACK):P===tf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Le(n.CULL_FACE),I=P}function he(P){P!==$&&(z&&n.lineWidth(P),$=P)}function Ne(P,pe,W){P?(le(n.POLYGON_OFFSET_FILL),(V!==pe||G!==W)&&(n.polygonOffset(pe,W),V=pe,G=W)):Le(n.POLYGON_OFFSET_FILL)}function ye(P){P?le(n.SCISSOR_TEST):Le(n.SCISSOR_TEST)}function b(P){P===void 0&&(P=n.TEXTURE0+j-1),ce!==P&&(n.activeTexture(P),ce=P)}function _(P,pe,W){W===void 0&&(ce===null?W=n.TEXTURE0+j-1:W=ce);let J=me[W];J===void 0&&(J={type:void 0,texture:void 0},me[W]=J),(J.type!==P||J.texture!==pe)&&(ce!==W&&(n.activeTexture(W),ce=W),n.bindTexture(P,pe||Me[P]),J.type=P,J.texture=pe)}function U(){const P=me[ce];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function q(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Te(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Se(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $e(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ue(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ze(P){Ke.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),Ke.copy(P))}function we(P){Y.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),Y.copy(P))}function qe(P,pe){let W=l.get(pe);W===void 0&&(W=new WeakMap,l.set(pe,W));let J=W.get(P);J===void 0&&(J=n.getUniformBlockIndex(pe,P.name),W.set(P,J))}function We(P,pe){const J=l.get(pe).get(P);c.get(pe)!==J&&(n.uniformBlockBinding(pe,J,P.__bindingPointIndex),c.set(pe,J))}function ot(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ce=null,me={},h={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,w=null,M=null,x=null,N=null,R=null,A=new Be(0,0,0),F=0,E=!1,S=null,I=null,$=null,V=null,G=null,Ke.set(0,0,n.canvas.width,n.canvas.height),Y.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:le,disable:Le,bindFramebuffer:te,drawBuffers:ue,useProgram:Ye,setBlending:T,setMaterial:Ie,setFlipSided:ie,setCullFace:be,setLineWidth:he,setPolygonOffset:Ne,setScissorTest:ye,activeTexture:b,bindTexture:_,unbindTexture:U,compressedTexImage2D:Z,compressedTexImage3D:ee,texImage2D:Ee,texImage3D:Ue,updateUBOMapping:qe,uniformBlockBinding:We,texStorage2D:$e,texStorage3D:re,texSubImage2D:q,texSubImage3D:Te,compressedTexSubImage2D:fe,compressedTexSubImage3D:Se,scissor:ze,viewport:we,reset:ot}}function Cl(n,e,t,i){const r=J_(i);switch(t){case th:return n*e;case ih:return n*e;case rh:return n*e*2;case sh:return n*e/r.components*r.byteLength;case Ka:return n*e/r.components*r.byteLength;case oh:return n*e*2/r.components*r.byteLength;case Ja:return n*e*2/r.components*r.byteLength;case nh:return n*e*3/r.components*r.byteLength;case ln:return n*e*4/r.components*r.byteLength;case Qa:return n*e*4/r.components*r.byteLength;case Ts:case Rs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case As:case Cs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ha:case fa:return Math.max(n,16)*Math.max(e,8)/4;case ua:case da:return Math.max(n,8)*Math.max(e,8)/2;case pa:case ma:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ga:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case va:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case _a:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case xa:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ya:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Sa:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ma:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ba:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ea:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case wa:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ta:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ra:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Aa:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ca:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ia:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Is:case Pa:case Fa:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ah:case Da:return Math.ceil(n/4)*Math.ceil(e/4)*8;case La:case Na:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function J_(n){switch(n){case Pn:case Ju:return{byteLength:1,components:1};case Mr:case Qu:case An:return{byteLength:2,components:1};case qa:case ja:return{byteLength:2,components:4};case oi:case Ya:case wn:return{byteLength:4,components:1};case eh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Q_(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ne,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,_){return f?new OffscreenCanvas(b,_):Ds("canvas")}function v(b,_,U){let Z=1;const ee=ye(b);if((ee.width>U||ee.height>U)&&(Z=U/Math.max(ee.width,ee.height)),Z<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const q=Math.floor(Z*ee.width),Te=Math.floor(Z*ee.height);h===void 0&&(h=g(q,Te));const fe=_?g(q,Te):h;return fe.width=q,fe.height=Te,fe.getContext("2d").drawImage(b,0,0,q,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+q+"x"+Te+")."),fe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){n.generateMipmap(b)}function w(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(b,_,U,Z,ee=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let q=_;if(_===n.RED&&(U===n.FLOAT&&(q=n.R32F),U===n.HALF_FLOAT&&(q=n.R16F),U===n.UNSIGNED_BYTE&&(q=n.R8)),_===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(q=n.R8UI),U===n.UNSIGNED_SHORT&&(q=n.R16UI),U===n.UNSIGNED_INT&&(q=n.R32UI),U===n.BYTE&&(q=n.R8I),U===n.SHORT&&(q=n.R16I),U===n.INT&&(q=n.R32I)),_===n.RG&&(U===n.FLOAT&&(q=n.RG32F),U===n.HALF_FLOAT&&(q=n.RG16F),U===n.UNSIGNED_BYTE&&(q=n.RG8)),_===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(q=n.RG8UI),U===n.UNSIGNED_SHORT&&(q=n.RG16UI),U===n.UNSIGNED_INT&&(q=n.RG32UI),U===n.BYTE&&(q=n.RG8I),U===n.SHORT&&(q=n.RG16I),U===n.INT&&(q=n.RG32I)),_===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(q=n.RGB8UI),U===n.UNSIGNED_SHORT&&(q=n.RGB16UI),U===n.UNSIGNED_INT&&(q=n.RGB32UI),U===n.BYTE&&(q=n.RGB8I),U===n.SHORT&&(q=n.RGB16I),U===n.INT&&(q=n.RGB32I)),_===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),U===n.UNSIGNED_INT&&(q=n.RGBA32UI),U===n.BYTE&&(q=n.RGBA8I),U===n.SHORT&&(q=n.RGBA16I),U===n.INT&&(q=n.RGBA32I)),_===n.RGB&&U===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),_===n.RGBA){const Te=ee?Zs:je.getTransfer(Z);U===n.FLOAT&&(q=n.RGBA32F),U===n.HALF_FLOAT&&(q=n.RGBA16F),U===n.UNSIGNED_BYTE&&(q=Te===it?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function x(b,_){let U;return b?_===null||_===oi||_===Zi?U=n.DEPTH24_STENCIL8:_===wn?U=n.DEPTH32F_STENCIL8:_===Mr&&(U=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===oi||_===Zi?U=n.DEPTH_COMPONENT24:_===wn?U=n.DEPTH_COMPONENT32F:_===Mr&&(U=n.DEPTH_COMPONENT16),U}function N(b,_){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==hn&&b.minFilter!==mn?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function R(b){const _=b.target;_.removeEventListener("dispose",R),F(_),_.isVideoTexture&&u.delete(_)}function A(b){const _=b.target;_.removeEventListener("dispose",A),S(_)}function F(b){const _=i.get(b);if(_.__webglInit===void 0)return;const U=b.source,Z=d.get(U);if(Z){const ee=Z[_.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&E(b),Object.keys(Z).length===0&&d.delete(U)}i.remove(b)}function E(b){const _=i.get(b);n.deleteTexture(_.__webglTexture);const U=b.source,Z=d.get(U);delete Z[_.__cacheKey],o.memory.textures--}function S(b){const _=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(_.__webglFramebuffer[Z]))for(let ee=0;ee<_.__webglFramebuffer[Z].length;ee++)n.deleteFramebuffer(_.__webglFramebuffer[Z][ee]);else n.deleteFramebuffer(_.__webglFramebuffer[Z]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[Z])}else{if(Array.isArray(_.__webglFramebuffer))for(let Z=0;Z<_.__webglFramebuffer.length;Z++)n.deleteFramebuffer(_.__webglFramebuffer[Z]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Z=0;Z<_.__webglColorRenderbuffer.length;Z++)_.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[Z]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const U=b.textures;for(let Z=0,ee=U.length;Z<ee;Z++){const q=i.get(U[Z]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(U[Z])}i.remove(b)}let I=0;function $(){I=0}function V(){const b=I;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),I+=1,b}function G(b){const _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function j(b,_){const U=i.get(b);if(b.isVideoTexture&&he(b),b.isRenderTargetTexture===!1&&b.version>0&&U.__version!==b.version){const Z=b.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(U,b,_);return}}t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+_)}function z(b,_){const U=i.get(b);if(b.version>0&&U.__version!==b.version){Y(U,b,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+_)}function Q(b,_){const U=i.get(b);if(b.version>0&&U.__version!==b.version){Y(U,b,_);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+_)}function H(b,_){const U=i.get(b);if(b.version>0&&U.__version!==b.version){se(U,b,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+_)}const ce={[ca]:n.REPEAT,[ri]:n.CLAMP_TO_EDGE,[la]:n.MIRRORED_REPEAT},me={[hn]:n.NEAREST,[wf]:n.NEAREST_MIPMAP_NEAREST,[kr]:n.NEAREST_MIPMAP_LINEAR,[mn]:n.LINEAR,[so]:n.LINEAR_MIPMAP_NEAREST,[si]:n.LINEAR_MIPMAP_LINEAR},xe={[If]:n.NEVER,[Uf]:n.ALWAYS,[Pf]:n.LESS,[ch]:n.LEQUAL,[Ff]:n.EQUAL,[Nf]:n.GEQUAL,[Df]:n.GREATER,[Lf]:n.NOTEQUAL};function Oe(b,_){if(_.type===wn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===mn||_.magFilter===so||_.magFilter===kr||_.magFilter===si||_.minFilter===mn||_.minFilter===so||_.minFilter===kr||_.minFilter===si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,ce[_.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,ce[_.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,ce[_.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,me[_.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,me[_.minFilter]),_.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,xe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===hn||_.minFilter!==kr&&_.minFilter!==si||_.type===wn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Ke(b,_){let U=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",R));const Z=_.source;let ee=d.get(Z);ee===void 0&&(ee={},d.set(Z,ee));const q=G(_);if(q!==b.__cacheKey){ee[q]===void 0&&(ee[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,U=!0),ee[q].usedTimes++;const Te=ee[b.__cacheKey];Te!==void 0&&(ee[b.__cacheKey].usedTimes--,Te.usedTimes===0&&E(_)),b.__cacheKey=q,b.__webglTexture=ee[q].texture}return U}function Y(b,_,U){let Z=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Z=n.TEXTURE_3D);const ee=Ke(b,_),q=_.source;t.bindTexture(Z,b.__webglTexture,n.TEXTURE0+U);const Te=i.get(q);if(q.version!==Te.__version||ee===!0){t.activeTexture(n.TEXTURE0+U);const fe=je.getPrimaries(je.workingColorSpace),Se=_.colorSpace===Hn?null:je.getPrimaries(_.colorSpace),$e=_.colorSpace===Hn||fe===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let re=v(_.image,!1,r.maxTextureSize);re=Ne(_,re);const Ee=s.convert(_.format,_.colorSpace),Ue=s.convert(_.type);let ze=M(_.internalFormat,Ee,Ue,_.colorSpace,_.isVideoTexture);Oe(Z,_);let we;const qe=_.mipmaps,We=_.isVideoTexture!==!0,ot=Te.__version===void 0||ee===!0,P=q.dataReady,pe=N(_,re);if(_.isDepthTexture)ze=x(_.format===$i,_.type),ot&&(We?t.texStorage2D(n.TEXTURE_2D,1,ze,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,ze,re.width,re.height,0,Ee,Ue,null));else if(_.isDataTexture)if(qe.length>0){We&&ot&&t.texStorage2D(n.TEXTURE_2D,pe,ze,qe[0].width,qe[0].height);for(let W=0,J=qe.length;W<J;W++)we=qe[W],We?P&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,we.width,we.height,Ee,Ue,we.data):t.texImage2D(n.TEXTURE_2D,W,ze,we.width,we.height,0,Ee,Ue,we.data);_.generateMipmaps=!1}else We?(ot&&t.texStorage2D(n.TEXTURE_2D,pe,ze,re.width,re.height),P&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,re.width,re.height,Ee,Ue,re.data)):t.texImage2D(n.TEXTURE_2D,0,ze,re.width,re.height,0,Ee,Ue,re.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){We&&ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,ze,qe[0].width,qe[0].height,re.depth);for(let W=0,J=qe.length;W<J;W++)if(we=qe[W],_.format!==ln)if(Ee!==null)if(We){if(P)if(_.layerUpdates.size>0){const _e=Cl(we.width,we.height,_.format,_.type);for(const ge of _.layerUpdates){const Ve=we.data.subarray(ge*_e/we.data.BYTES_PER_ELEMENT,(ge+1)*_e/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,ge,we.width,we.height,1,Ee,Ve)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,we.width,we.height,re.depth,Ee,we.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,W,ze,we.width,we.height,re.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?P&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,we.width,we.height,re.depth,Ee,Ue,we.data):t.texImage3D(n.TEXTURE_2D_ARRAY,W,ze,we.width,we.height,re.depth,0,Ee,Ue,we.data)}else{We&&ot&&t.texStorage2D(n.TEXTURE_2D,pe,ze,qe[0].width,qe[0].height);for(let W=0,J=qe.length;W<J;W++)we=qe[W],_.format!==ln?Ee!==null?We?P&&t.compressedTexSubImage2D(n.TEXTURE_2D,W,0,0,we.width,we.height,Ee,we.data):t.compressedTexImage2D(n.TEXTURE_2D,W,ze,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?P&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,we.width,we.height,Ee,Ue,we.data):t.texImage2D(n.TEXTURE_2D,W,ze,we.width,we.height,0,Ee,Ue,we.data)}else if(_.isDataArrayTexture)if(We){if(ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,ze,re.width,re.height,re.depth),P)if(_.layerUpdates.size>0){const W=Cl(re.width,re.height,_.format,_.type);for(const J of _.layerUpdates){const _e=re.data.subarray(J*W/re.data.BYTES_PER_ELEMENT,(J+1)*W/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,re.width,re.height,1,Ee,Ue,_e)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Ee,Ue,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ze,re.width,re.height,re.depth,0,Ee,Ue,re.data);else if(_.isData3DTexture)We?(ot&&t.texStorage3D(n.TEXTURE_3D,pe,ze,re.width,re.height,re.depth),P&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Ee,Ue,re.data)):t.texImage3D(n.TEXTURE_3D,0,ze,re.width,re.height,re.depth,0,Ee,Ue,re.data);else if(_.isFramebufferTexture){if(ot)if(We)t.texStorage2D(n.TEXTURE_2D,pe,ze,re.width,re.height);else{let W=re.width,J=re.height;for(let _e=0;_e<pe;_e++)t.texImage2D(n.TEXTURE_2D,_e,ze,W,J,0,Ee,Ue,null),W>>=1,J>>=1}}else if(qe.length>0){if(We&&ot){const W=ye(qe[0]);t.texStorage2D(n.TEXTURE_2D,pe,ze,W.width,W.height)}for(let W=0,J=qe.length;W<J;W++)we=qe[W],We?P&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,Ee,Ue,we):t.texImage2D(n.TEXTURE_2D,W,ze,Ee,Ue,we);_.generateMipmaps=!1}else if(We){if(ot){const W=ye(re);t.texStorage2D(n.TEXTURE_2D,pe,ze,W.width,W.height)}P&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ee,Ue,re)}else t.texImage2D(n.TEXTURE_2D,0,ze,Ee,Ue,re);m(_)&&p(Z),Te.__version=q.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function se(b,_,U){if(_.image.length!==6)return;const Z=Ke(b,_),ee=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+U);const q=i.get(ee);if(ee.version!==q.__version||Z===!0){t.activeTexture(n.TEXTURE0+U);const Te=je.getPrimaries(je.workingColorSpace),fe=_.colorSpace===Hn?null:je.getPrimaries(_.colorSpace),Se=_.colorSpace===Hn||Te===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const $e=_.isCompressedTexture||_.image[0].isCompressedTexture,re=_.image[0]&&_.image[0].isDataTexture,Ee=[];for(let J=0;J<6;J++)!$e&&!re?Ee[J]=v(_.image[J],!0,r.maxCubemapSize):Ee[J]=re?_.image[J].image:_.image[J],Ee[J]=Ne(_,Ee[J]);const Ue=Ee[0],ze=s.convert(_.format,_.colorSpace),we=s.convert(_.type),qe=M(_.internalFormat,ze,we,_.colorSpace),We=_.isVideoTexture!==!0,ot=q.__version===void 0||Z===!0,P=ee.dataReady;let pe=N(_,Ue);Oe(n.TEXTURE_CUBE_MAP,_);let W;if($e){We&&ot&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,qe,Ue.width,Ue.height);for(let J=0;J<6;J++){W=Ee[J].mipmaps;for(let _e=0;_e<W.length;_e++){const ge=W[_e];_.format!==ln?ze!==null?We?P&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e,0,0,ge.width,ge.height,ze,ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e,qe,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e,0,0,ge.width,ge.height,ze,we,ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e,qe,ge.width,ge.height,0,ze,we,ge.data)}}}else{if(W=_.mipmaps,We&&ot){W.length>0&&pe++;const J=ye(Ee[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,qe,J.width,J.height)}for(let J=0;J<6;J++)if(re){We?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ee[J].width,Ee[J].height,ze,we,Ee[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,qe,Ee[J].width,Ee[J].height,0,ze,we,Ee[J].data);for(let _e=0;_e<W.length;_e++){const Ve=W[_e].image[J].image;We?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e+1,0,0,Ve.width,Ve.height,ze,we,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e+1,qe,Ve.width,Ve.height,0,ze,we,Ve.data)}}else{We?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ze,we,Ee[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,qe,ze,we,Ee[J]);for(let _e=0;_e<W.length;_e++){const ge=W[_e];We?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e+1,0,0,ze,we,ge.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e+1,qe,ze,we,ge.image[J])}}}m(_)&&p(n.TEXTURE_CUBE_MAP),q.__version=ee.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Me(b,_,U,Z,ee,q){const Te=s.convert(U.format,U.colorSpace),fe=s.convert(U.type),Se=M(U.internalFormat,Te,fe,U.colorSpace),$e=i.get(_),re=i.get(U);if(re.__renderTarget=_,!$e.__hasExternalTextures){const Ee=Math.max(1,_.width>>q),Ue=Math.max(1,_.height>>q);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,q,Se,Ee,Ue,_.depth,0,Te,fe,null):t.texImage2D(ee,q,Se,Ee,Ue,0,Te,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),be(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,ee,re.__webglTexture,0,ie(_)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,ee,re.__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function le(b,_,U){if(n.bindRenderbuffer(n.RENDERBUFFER,b),_.depthBuffer){const Z=_.depthTexture,ee=Z&&Z.isDepthTexture?Z.type:null,q=x(_.stencilBuffer,ee),Te=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=ie(_);be(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,q,_.width,_.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,q,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,q,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Te,n.RENDERBUFFER,b)}else{const Z=_.textures;for(let ee=0;ee<Z.length;ee++){const q=Z[ee],Te=s.convert(q.format,q.colorSpace),fe=s.convert(q.type),Se=M(q.internalFormat,Te,fe,q.colorSpace),$e=ie(_);U&&be(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,$e,Se,_.width,_.height):be(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$e,Se,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Se,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Le(b,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(_.depthTexture);Z.__renderTarget=_,(!Z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),j(_.depthTexture,0);const ee=Z.__webglTexture,q=ie(_);if(_.depthTexture.format===ki)be(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(_.depthTexture.format===$i)be(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function te(b){const _=i.get(b),U=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){const Z=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Z){const ee=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Z.removeEventListener("dispose",ee)};Z.addEventListener("dispose",ee),_.__depthDisposeCallback=ee}_.__boundDepthTexture=Z}if(b.depthTexture&&!_.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");Le(_.__webglFramebuffer,b)}else if(U){_.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[Z]),_.__webglDepthbuffer[Z]===void 0)_.__webglDepthbuffer[Z]=n.createRenderbuffer(),le(_.__webglDepthbuffer[Z],b,!1);else{const ee=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,q)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),le(_.__webglDepthbuffer,b,!1);else{const Z=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,ee)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ue(b,_,U){const Z=i.get(b);_!==void 0&&Me(Z.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&te(b)}function Ye(b){const _=b.texture,U=i.get(b),Z=i.get(_);b.addEventListener("dispose",A);const ee=b.textures,q=b.isWebGLCubeRenderTarget===!0,Te=ee.length>1;if(Te||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=_.version,o.memory.textures++),q){U.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer[fe]=[];for(let Se=0;Se<_.mipmaps.length;Se++)U.__webglFramebuffer[fe][Se]=n.createFramebuffer()}else U.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer=[];for(let fe=0;fe<_.mipmaps.length;fe++)U.__webglFramebuffer[fe]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(Te)for(let fe=0,Se=ee.length;fe<Se;fe++){const $e=i.get(ee[fe]);$e.__webglTexture===void 0&&($e.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&be(b)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let fe=0;fe<ee.length;fe++){const Se=ee[fe];U.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[fe]);const $e=s.convert(Se.format,Se.colorSpace),re=s.convert(Se.type),Ee=M(Se.internalFormat,$e,re,Se.colorSpace,b.isXRRenderTarget===!0),Ue=ie(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,Ee,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,U.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),le(U.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Oe(n.TEXTURE_CUBE_MAP,_);for(let fe=0;fe<6;fe++)if(_.mipmaps&&_.mipmaps.length>0)for(let Se=0;Se<_.mipmaps.length;Se++)Me(U.__webglFramebuffer[fe][Se],b,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Se);else Me(U.__webglFramebuffer[fe],b,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(_)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let fe=0,Se=ee.length;fe<Se;fe++){const $e=ee[fe],re=i.get($e);t.bindTexture(n.TEXTURE_2D,re.__webglTexture),Oe(n.TEXTURE_2D,$e),Me(U.__webglFramebuffer,b,$e,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),m($e)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(fe=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,Z.__webglTexture),Oe(fe,_),_.mipmaps&&_.mipmaps.length>0)for(let Se=0;Se<_.mipmaps.length;Se++)Me(U.__webglFramebuffer[Se],b,_,n.COLOR_ATTACHMENT0,fe,Se);else Me(U.__webglFramebuffer,b,_,n.COLOR_ATTACHMENT0,fe,0);m(_)&&p(fe),t.unbindTexture()}b.depthBuffer&&te(b)}function K(b){const _=b.textures;for(let U=0,Z=_.length;U<Z;U++){const ee=_[U];if(m(ee)){const q=w(b),Te=i.get(ee).__webglTexture;t.bindTexture(q,Te),p(q),t.unbindTexture()}}}const oe=[],T=[];function Ie(b){if(b.samples>0){if(be(b)===!1){const _=b.textures,U=b.width,Z=b.height;let ee=n.COLOR_BUFFER_BIT;const q=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(b),fe=_.length>1;if(fe)for(let Se=0;Se<_.length;Se++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Se=0;Se<_.length;Se++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[Se]);const $e=i.get(_[Se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,$e,0)}n.blitFramebuffer(0,0,U,Z,0,0,U,Z,ee,n.NEAREST),c===!0&&(oe.length=0,T.length=0,oe.push(n.COLOR_ATTACHMENT0+Se),b.depthBuffer&&b.resolveDepthBuffer===!1&&(oe.push(q),T.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,T)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,oe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let Se=0;Se<_.length;Se++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,Te.__webglColorRenderbuffer[Se]);const $e=i.get(_[Se]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,$e,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const _=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function ie(b){return Math.min(r.maxSamples,b.samples)}function be(b){const _=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function he(b){const _=o.render.frame;u.get(b)!==_&&(u.set(b,_),b.update())}function Ne(b,_){const U=b.colorSpace,Z=b.format,ee=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||U!==Ji&&U!==Hn&&(je.getTransfer(U)===it?(Z!==ln||ee!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),_}function ye(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=$,this.setTexture2D=j,this.setTexture2DArray=z,this.setTexture3D=Q,this.setTextureCube=H,this.rebindTextures=ue,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=be}function e0(n,e){function t(i,r=Hn){let s;const o=je.getTransfer(r);if(i===Pn)return n.UNSIGNED_BYTE;if(i===qa)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ja)return n.UNSIGNED_SHORT_5_5_5_1;if(i===eh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ju)return n.BYTE;if(i===Qu)return n.SHORT;if(i===Mr)return n.UNSIGNED_SHORT;if(i===Ya)return n.INT;if(i===oi)return n.UNSIGNED_INT;if(i===wn)return n.FLOAT;if(i===An)return n.HALF_FLOAT;if(i===th)return n.ALPHA;if(i===nh)return n.RGB;if(i===ln)return n.RGBA;if(i===ih)return n.LUMINANCE;if(i===rh)return n.LUMINANCE_ALPHA;if(i===ki)return n.DEPTH_COMPONENT;if(i===$i)return n.DEPTH_STENCIL;if(i===sh)return n.RED;if(i===Ka)return n.RED_INTEGER;if(i===oh)return n.RG;if(i===Ja)return n.RG_INTEGER;if(i===Qa)return n.RGBA_INTEGER;if(i===Ts||i===Rs||i===As||i===Cs)if(o===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ts)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Rs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===As)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Cs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ts)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Rs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===As)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Cs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ua||i===ha||i===da||i===fa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ua)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ha)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===da)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===fa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===pa||i===ma||i===ga)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===pa||i===ma)return o===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ga)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===va||i===_a||i===xa||i===ya||i===Sa||i===Ma||i===ba||i===Ea||i===wa||i===Ta||i===Ra||i===Aa||i===Ca||i===Ia)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===va)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===_a)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===xa)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ya)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Sa)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ma)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ba)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ea)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wa)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ta)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ra)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Aa)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ca)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ia)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Is||i===Pa||i===Fa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Is)return o===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Pa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ah||i===Da||i===La||i===Na)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Is)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Da)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===La)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Na)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class t0 extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class un extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const n0={type:"move"};class Do{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(n0)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new un;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const i0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,r0=`
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

}`;class s0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Ot,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new At({vertexShader:i0,fragmentShader:r0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ut(new Ys(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class o0 extends hi{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const v=new s0,m=t.getContextAttributes();let p=null,w=null;const M=[],x=[],N=new ne;let R=null;const A=new Jt;A.viewport=new xt;const F=new Jt;F.viewport=new xt;const E=[A,F],S=new t0;let I=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let se=M[Y];return se===void 0&&(se=new Do,M[Y]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Y){let se=M[Y];return se===void 0&&(se=new Do,M[Y]=se),se.getGripSpace()},this.getHand=function(Y){let se=M[Y];return se===void 0&&(se=new Do,M[Y]=se),se.getHandSpace()};function V(Y){const se=x.indexOf(Y.inputSource);if(se===-1)return;const Me=M[se];Me!==void 0&&(Me.update(Y.inputSource,Y.frame,l||o),Me.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",j);for(let Y=0;Y<M.length;Y++){const se=x[Y];se!==null&&(x[Y]=null,M[Y].disconnect(se))}I=null,$=null,v.reset(),e.setRenderTarget(p),f=null,d=null,h=null,r=null,w=null,Ke.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",G),r.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(N),r.renderState.layers===void 0){const se={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new dn(f.framebufferWidth,f.framebufferHeight,{format:ln,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let se=null,Me=null,le=null;m.depth&&(le=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=m.stencil?$i:ki,Me=m.stencil?Zi:oi);const Le={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(Le),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new dn(d.textureWidth,d.textureHeight,{format:ln,type:Pn,depthTexture:new Sh(d.textureWidth,d.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),Ke.setContext(r),Ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function j(Y){for(let se=0;se<Y.removed.length;se++){const Me=Y.removed[se],le=x.indexOf(Me);le>=0&&(x[le]=null,M[le].disconnect(Me))}for(let se=0;se<Y.added.length;se++){const Me=Y.added[se];let le=x.indexOf(Me);if(le===-1){for(let te=0;te<M.length;te++)if(te>=x.length){x.push(Me),le=te;break}else if(x[te]===null){x[te]=Me,le=te;break}if(le===-1)break}const Le=M[le];Le&&Le.connect(Me)}}const z=new C,Q=new C;function H(Y,se,Me){z.setFromMatrixPosition(se.matrixWorld),Q.setFromMatrixPosition(Me.matrixWorld);const le=z.distanceTo(Q),Le=se.projectionMatrix.elements,te=Me.projectionMatrix.elements,ue=Le[14]/(Le[10]-1),Ye=Le[14]/(Le[10]+1),K=(Le[9]+1)/Le[5],oe=(Le[9]-1)/Le[5],T=(Le[8]-1)/Le[0],Ie=(te[8]+1)/te[0],ie=ue*T,be=ue*Ie,he=le/(-T+Ie),Ne=he*-T;if(se.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ne),Y.translateZ(he),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Le[10]===-1)Y.projectionMatrix.copy(se.projectionMatrix),Y.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const ye=ue+he,b=Ye+he,_=ie-Ne,U=be+(le-Ne),Z=K*Ye/b*ye,ee=oe*Ye/b*ye;Y.projectionMatrix.makePerspective(_,U,Z,ee,ye,b),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ce(Y,se){se===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(se.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let se=Y.near,Me=Y.far;v.texture!==null&&(v.depthNear>0&&(se=v.depthNear),v.depthFar>0&&(Me=v.depthFar)),S.near=F.near=A.near=se,S.far=F.far=A.far=Me,(I!==S.near||$!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),I=S.near,$=S.far),A.layers.mask=Y.layers.mask|2,F.layers.mask=Y.layers.mask|4,S.layers.mask=A.layers.mask|F.layers.mask;const le=Y.parent,Le=S.cameras;ce(S,le);for(let te=0;te<Le.length;te++)ce(Le[te],le);Le.length===2?H(S,A,F):S.projectionMatrix.copy(A.projectionMatrix),me(Y,S,le)};function me(Y,se,Me){Me===null?Y.matrix.copy(se.matrixWorld):(Y.matrix.copy(Me.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(se.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(se.projectionMatrix),Y.projectionMatrixInverse.copy(se.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=br*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let xe=null;function Oe(Y,se){if(u=se.getViewerPose(l||o),g=se,u!==null){const Me=u.views;f!==null&&(e.setRenderTargetFramebuffer(w,f.framebuffer),e.setRenderTarget(w));let le=!1;Me.length!==S.cameras.length&&(S.cameras.length=0,le=!0);for(let te=0;te<Me.length;te++){const ue=Me[te];let Ye=null;if(f!==null)Ye=f.getViewport(ue);else{const oe=h.getViewSubImage(d,ue);Ye=oe.viewport,te===0&&(e.setRenderTargetTextures(w,oe.colorTexture,d.ignoreDepthValues?void 0:oe.depthStencilTexture),e.setRenderTarget(w))}let K=E[te];K===void 0&&(K=new Jt,K.layers.enable(te),K.viewport=new xt,E[te]=K),K.matrix.fromArray(ue.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(ue.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),te===0&&(S.matrix.copy(K.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),le===!0&&S.cameras.push(K)}const Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const te=h.getDepthInformation(Me[0]);te&&te.isValid&&te.texture&&v.init(e,te,r.renderState)}}for(let Me=0;Me<M.length;Me++){const le=x[Me],Le=M[Me];le!==null&&Le!==void 0&&Le.update(le,se,l||o)}xe&&xe(Y,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),g=null}const Ke=new xh;Ke.setAnimationLoop(Oe),this.setAnimationLoop=function(Y){xe=Y},this.dispose=function(){}}}const ei=new Fn,a0=new ht;function c0(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,mh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,w,M,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,w,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ht&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ht&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=e.get(p),M=w.envMap,x=w.envMapRotation;M&&(m.envMap.value=M,ei.copy(x),ei.x*=-1,ei.y*=-1,ei.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),m.envMapRotation.value.setFromMatrix4(a0.makeRotationFromEuler(ei)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,w,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ht&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function l0(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,M){const x=M.program;i.uniformBlockBinding(w,x)}function l(w,M){let x=r[w.id];x===void 0&&(g(w),x=u(w),r[w.id]=x,w.addEventListener("dispose",m));const N=M.program;i.updateUBOMapping(w,N);const R=e.render.frame;s[w.id]!==R&&(d(w),s[w.id]=R)}function u(w){const M=h();w.__bindingPointIndex=M;const x=n.createBuffer(),N=w.__size,R=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,N,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,x),x}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const M=r[w.id],x=w.uniforms,N=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let R=0,A=x.length;R<A;R++){const F=Array.isArray(x[R])?x[R]:[x[R]];for(let E=0,S=F.length;E<S;E++){const I=F[E];if(f(I,R,E,N)===!0){const $=I.__offset,V=Array.isArray(I.value)?I.value:[I.value];let G=0;for(let j=0;j<V.length;j++){const z=V[j],Q=v(z);typeof z=="number"||typeof z=="boolean"?(I.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,$+G,I.__data)):z.isMatrix3?(I.__data[0]=z.elements[0],I.__data[1]=z.elements[1],I.__data[2]=z.elements[2],I.__data[3]=0,I.__data[4]=z.elements[3],I.__data[5]=z.elements[4],I.__data[6]=z.elements[5],I.__data[7]=0,I.__data[8]=z.elements[6],I.__data[9]=z.elements[7],I.__data[10]=z.elements[8],I.__data[11]=0):(z.toArray(I.__data,G),G+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,$,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(w,M,x,N){const R=w.value,A=M+"_"+x;if(N[A]===void 0)return typeof R=="number"||typeof R=="boolean"?N[A]=R:N[A]=R.clone(),!0;{const F=N[A];if(typeof R=="number"||typeof R=="boolean"){if(F!==R)return N[A]=R,!0}else if(F.equals(R)===!1)return F.copy(R),!0}return!1}function g(w){const M=w.uniforms;let x=0;const N=16;for(let A=0,F=M.length;A<F;A++){const E=Array.isArray(M[A])?M[A]:[M[A]];for(let S=0,I=E.length;S<I;S++){const $=E[S],V=Array.isArray($.value)?$.value:[$.value];for(let G=0,j=V.length;G<j;G++){const z=V[G],Q=v(z),H=x%N,ce=H%Q.boundary,me=H+ce;x+=ce,me!==0&&N-me<Q.storage&&(x+=N-me),$.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=x,x+=Q.storage}}}const R=x%N;return R>0&&(x+=N-R),w.__size=x,w.__cache={},this}function v(w){const M={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(M.boundary=4,M.storage=4):w.isVector2?(M.boundary=8,M.storage=8):w.isVector3||w.isColor?(M.boundary=16,M.storage=12):w.isVector4?(M.boundary=16,M.storage=16):w.isMatrix3?(M.boundary=48,M.storage=48):w.isMatrix4?(M.boundary=64,M.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),M}function m(w){const M=w.target;M.removeEventListener("dispose",m);const x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function p(){for(const w in r)n.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}class u0{constructor(e={}){const{canvas:t=Qf(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const w=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kt,this.toneMapping=Gn,this.toneMappingExposure=1;const x=this;let N=!1,R=0,A=0,F=null,E=-1,S=null;const I=new xt,$=new xt;let V=null;const G=new Be(0);let j=0,z=t.width,Q=t.height,H=1,ce=null,me=null;const xe=new xt(0,0,z,Q),Oe=new xt(0,0,z,Q);let Ke=!1;const Y=new _h;let se=!1,Me=!1;const le=new ht,Le=new ht,te=new C,ue=new xt,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let K=!1;function oe(){return F===null?H:1}let T=i;function Ie(y,D){return t.getContext(y,D)}try{const y={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Za}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",ge,!1),T===null){const D="webgl2";if(T=Ie(D,y),T===null)throw Ie(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let ie,be,he,Ne,ye,b,_,U,Z,ee,q,Te,fe,Se,$e,re,Ee,Ue,ze,we,qe,We,ot,P;function pe(){ie=new mv(T),ie.init(),We=new e0(T,ie),be=new lv(T,ie,e,We),he=new K_(T,ie),be.reverseDepthBuffer&&d&&he.buffers.depth.setReversed(!0),Ne=new _v(T),ye=new U_,b=new Q_(T,ie,he,ye,be,We,Ne),_=new hv(x),U=new pv(x),Z=new wp(T),ot=new av(T,Z),ee=new gv(T,Z,Ne,ot),q=new yv(T,ee,Z,Ne),ze=new xv(T,be,b),re=new uv(ye),Te=new N_(x,_,U,ie,be,ot,re),fe=new c0(x,ye),Se=new z_,$e=new W_(ie),Ue=new ov(x,_,U,he,q,f,c),Ee=new q_(x,q,be),P=new l0(T,Ne,be,he),we=new cv(T,ie,Ne),qe=new vv(T,ie,Ne),Ne.programs=Te.programs,x.capabilities=be,x.extensions=ie,x.properties=ye,x.renderLists=Se,x.shadowMap=Ee,x.state=he,x.info=Ne}pe();const W=new o0(x,T);this.xr=W,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const y=ie.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=ie.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(y){y!==void 0&&(H=y,this.setSize(z,Q,!1))},this.getSize=function(y){return y.set(z,Q)},this.setSize=function(y,D,k=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=y,Q=D,t.width=Math.floor(y*H),t.height=Math.floor(D*H),k===!0&&(t.style.width=y+"px",t.style.height=D+"px"),this.setViewport(0,0,y,D)},this.getDrawingBufferSize=function(y){return y.set(z*H,Q*H).floor()},this.setDrawingBufferSize=function(y,D,k){z=y,Q=D,H=k,t.width=Math.floor(y*k),t.height=Math.floor(D*k),this.setViewport(0,0,y,D)},this.getCurrentViewport=function(y){return y.copy(I)},this.getViewport=function(y){return y.copy(xe)},this.setViewport=function(y,D,k,B){y.isVector4?xe.set(y.x,y.y,y.z,y.w):xe.set(y,D,k,B),he.viewport(I.copy(xe).multiplyScalar(H).round())},this.getScissor=function(y){return y.copy(Oe)},this.setScissor=function(y,D,k,B){y.isVector4?Oe.set(y.x,y.y,y.z,y.w):Oe.set(y,D,k,B),he.scissor($.copy(Oe).multiplyScalar(H).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(y){he.setScissorTest(Ke=y)},this.setOpaqueSort=function(y){ce=y},this.setTransparentSort=function(y){me=y},this.getClearColor=function(y){return y.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(y=!0,D=!0,k=!0){let B=0;if(y){let L=!1;if(F!==null){const ae=F.texture.format;L=ae===Qa||ae===Ja||ae===Ka}if(L){const ae=F.texture.type,ve=ae===Pn||ae===oi||ae===Mr||ae===Zi||ae===qa||ae===ja,Re=Ue.getClearColor(),Ae=Ue.getClearAlpha(),ke=Re.r,He=Re.g,Ce=Re.b;ve?(g[0]=ke,g[1]=He,g[2]=Ce,g[3]=Ae,T.clearBufferuiv(T.COLOR,0,g)):(v[0]=ke,v[1]=He,v[2]=Ce,v[3]=Ae,T.clearBufferiv(T.COLOR,0,v))}else B|=T.COLOR_BUFFER_BIT}D&&(B|=T.DEPTH_BUFFER_BIT),k&&(B|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),Se.dispose(),$e.dispose(),ye.dispose(),_.dispose(),U.dispose(),q.dispose(),ot.dispose(),P.dispose(),Te.dispose(),W.dispose(),W.removeEventListener("sessionstart",bc),W.removeEventListener("sessionend",Ec),Yn.stop()};function J(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const y=Ne.autoReset,D=Ee.enabled,k=Ee.autoUpdate,B=Ee.needsUpdate,L=Ee.type;pe(),Ne.autoReset=y,Ee.enabled=D,Ee.autoUpdate=k,Ee.needsUpdate=B,Ee.type=L}function ge(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ve(y){const D=y.target;D.removeEventListener("dispose",Ve),vt(D)}function vt(y){Ct(y),ye.remove(y)}function Ct(y){const D=ye.get(y).programs;D!==void 0&&(D.forEach(function(k){Te.releaseProgram(k)}),y.isShaderMaterial&&Te.releaseShaderCache(y))}this.renderBufferDirect=function(y,D,k,B,L,ae){D===null&&(D=Ye);const ve=L.isMesh&&L.matrixWorld.determinant()<0,Re=Gd(y,D,k,B,L);he.setMaterial(B,ve);let Ae=k.index,ke=1;if(B.wireframe===!0){if(Ae=ee.getWireframeAttribute(k),Ae===void 0)return;ke=2}const He=k.drawRange,Ce=k.attributes.position;let Je=He.start*ke,at=(He.start+He.count)*ke;ae!==null&&(Je=Math.max(Je,ae.start*ke),at=Math.min(at,(ae.start+ae.count)*ke)),Ae!==null?(Je=Math.max(Je,0),at=Math.min(at,Ae.count)):Ce!=null&&(Je=Math.max(Je,0),at=Math.min(at,Ce.count));const lt=at-Je;if(lt<0||lt===1/0)return;ot.setup(L,B,Re,k,Ae);let kt,et=we;if(Ae!==null&&(kt=Z.get(Ae),et=qe,et.setIndex(kt)),L.isMesh)B.wireframe===!0?(he.setLineWidth(B.wireframeLinewidth*oe()),et.setMode(T.LINES)):et.setMode(T.TRIANGLES);else if(L.isLine){let Fe=B.linewidth;Fe===void 0&&(Fe=1),he.setLineWidth(Fe*oe()),L.isLineSegments?et.setMode(T.LINES):L.isLineLoop?et.setMode(T.LINE_LOOP):et.setMode(T.LINE_STRIP)}else L.isPoints?et.setMode(T.POINTS):L.isSprite&&et.setMode(T.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)et.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))et.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{const Fe=L._multiDrawStarts,_n=L._multiDrawCounts,tt=L._multiDrawCount,nn=Ae?Z.get(Ae).bytesPerElement:1,pi=ye.get(B).currentProgram.getUniforms();for(let Wt=0;Wt<tt;Wt++)pi.setValue(T,"_gl_DrawID",Wt),et.render(Fe[Wt]/nn,_n[Wt])}else if(L.isInstancedMesh)et.renderInstances(Je,lt,L.count);else if(k.isInstancedBufferGeometry){const Fe=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,_n=Math.min(k.instanceCount,Fe);et.renderInstances(Je,lt,_n)}else et.render(Je,lt)};function nt(y,D,k){y.transparent===!0&&y.side===cn&&y.forceSinglePass===!1?(y.side=Ht,y.needsUpdate=!0,Or(y,D,k),y.side=Wn,y.needsUpdate=!0,Or(y,D,k),y.side=cn):Or(y,D,k)}this.compile=function(y,D,k=null){k===null&&(k=y),p=$e.get(k),p.init(D),M.push(p),k.traverseVisible(function(L){L.isLight&&L.layers.test(D.layers)&&(p.pushLight(L),L.castShadow&&p.pushShadow(L))}),y!==k&&y.traverseVisible(function(L){L.isLight&&L.layers.test(D.layers)&&(p.pushLight(L),L.castShadow&&p.pushShadow(L))}),p.setupLights();const B=new Set;return y.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;const ae=L.material;if(ae)if(Array.isArray(ae))for(let ve=0;ve<ae.length;ve++){const Re=ae[ve];nt(Re,k,L),B.add(Re)}else nt(ae,k,L),B.add(ae)}),M.pop(),p=null,B},this.compileAsync=function(y,D,k=null){const B=this.compile(y,D,k);return new Promise(L=>{function ae(){if(B.forEach(function(ve){ye.get(ve).currentProgram.isReady()&&B.delete(ve)}),B.size===0){L(y);return}setTimeout(ae,10)}ie.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let tn=null;function vn(y){tn&&tn(y)}function bc(){Yn.stop()}function Ec(){Yn.start()}const Yn=new xh;Yn.setAnimationLoop(vn),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(y){tn=y,W.setAnimationLoop(y),y===null?Yn.stop():Yn.start()},W.addEventListener("sessionstart",bc),W.addEventListener("sessionend",Ec),this.render=function(y,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(D),D=W.getCamera()),y.isScene===!0&&y.onBeforeRender(x,y,D,F),p=$e.get(y,M.length),p.init(D),M.push(p),Le.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Y.setFromProjectionMatrix(Le),Me=this.localClippingEnabled,se=re.init(this.clippingPlanes,Me),m=Se.get(y,w.length),m.init(),w.push(m),W.enabled===!0&&W.isPresenting===!0){const ae=x.xr.getDepthSensingMesh();ae!==null&&ro(ae,D,-1/0,x.sortObjects)}ro(y,D,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ce,me),K=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,K&&Ue.addToRenderList(m,y),this.info.render.frame++,se===!0&&re.beginShadows();const k=p.state.shadowsArray;Ee.render(k,y,D),se===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=m.opaque,L=m.transmissive;if(p.setupLights(),D.isArrayCamera){const ae=D.cameras;if(L.length>0)for(let ve=0,Re=ae.length;ve<Re;ve++){const Ae=ae[ve];Tc(B,L,y,Ae)}K&&Ue.render(y);for(let ve=0,Re=ae.length;ve<Re;ve++){const Ae=ae[ve];wc(m,y,Ae,Ae.viewport)}}else L.length>0&&Tc(B,L,y,D),K&&Ue.render(y),wc(m,y,D);F!==null&&(b.updateMultisampleRenderTarget(F),b.updateRenderTargetMipmap(F)),y.isScene===!0&&y.onAfterRender(x,y,D),ot.resetDefaultState(),E=-1,S=null,M.pop(),M.length>0?(p=M[M.length-1],se===!0&&re.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function ro(y,D,k,B){if(y.visible===!1)return;if(y.layers.test(D.layers)){if(y.isGroup)k=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(D);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Y.intersectsSprite(y)){B&&ue.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Le);const ve=q.update(y),Re=y.material;Re.visible&&m.push(y,ve,Re,k,ue.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Y.intersectsObject(y))){const ve=q.update(y),Re=y.material;if(B&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),ue.copy(y.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),ue.copy(ve.boundingSphere.center)),ue.applyMatrix4(y.matrixWorld).applyMatrix4(Le)),Array.isArray(Re)){const Ae=ve.groups;for(let ke=0,He=Ae.length;ke<He;ke++){const Ce=Ae[ke],Je=Re[Ce.materialIndex];Je&&Je.visible&&m.push(y,ve,Je,k,ue.z,Ce)}}else Re.visible&&m.push(y,ve,Re,k,ue.z,null)}}const ae=y.children;for(let ve=0,Re=ae.length;ve<Re;ve++)ro(ae[ve],D,k,B)}function wc(y,D,k,B){const L=y.opaque,ae=y.transmissive,ve=y.transparent;p.setupLightsView(k),se===!0&&re.setGlobalState(x.clippingPlanes,k),B&&he.viewport(I.copy(B)),L.length>0&&Ur(L,D,k),ae.length>0&&Ur(ae,D,k),ve.length>0&&Ur(ve,D,k),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Tc(y,D,k,B){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[B.id]===void 0&&(p.state.transmissionRenderTarget[B.id]=new dn(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?An:Pn,minFilter:si,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));const ae=p.state.transmissionRenderTarget[B.id],ve=B.viewport||I;ae.setSize(ve.z,ve.w);const Re=x.getRenderTarget();x.setRenderTarget(ae),x.getClearColor(G),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),x.clear(),K&&Ue.render(k);const Ae=x.toneMapping;x.toneMapping=Gn;const ke=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),p.setupLightsView(B),se===!0&&re.setGlobalState(x.clippingPlanes,B),Ur(y,k,B),b.updateMultisampleRenderTarget(ae),b.updateRenderTargetMipmap(ae),ie.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Ce=0,Je=D.length;Ce<Je;Ce++){const at=D[Ce],lt=at.object,kt=at.geometry,et=at.material,Fe=at.group;if(et.side===cn&&lt.layers.test(B.layers)){const _n=et.side;et.side=Ht,et.needsUpdate=!0,Rc(lt,k,B,kt,et,Fe),et.side=_n,et.needsUpdate=!0,He=!0}}He===!0&&(b.updateMultisampleRenderTarget(ae),b.updateRenderTargetMipmap(ae))}x.setRenderTarget(Re),x.setClearColor(G,j),ke!==void 0&&(B.viewport=ke),x.toneMapping=Ae}function Ur(y,D,k){const B=D.isScene===!0?D.overrideMaterial:null;for(let L=0,ae=y.length;L<ae;L++){const ve=y[L],Re=ve.object,Ae=ve.geometry,ke=B===null?ve.material:B,He=ve.group;Re.layers.test(k.layers)&&Rc(Re,D,k,Ae,ke,He)}}function Rc(y,D,k,B,L,ae){y.onBeforeRender(x,D,k,B,L,ae),y.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),L.onBeforeRender(x,D,k,B,y,ae),L.transparent===!0&&L.side===cn&&L.forceSinglePass===!1?(L.side=Ht,L.needsUpdate=!0,x.renderBufferDirect(k,D,B,L,y,ae),L.side=Wn,L.needsUpdate=!0,x.renderBufferDirect(k,D,B,L,y,ae),L.side=cn):x.renderBufferDirect(k,D,B,L,y,ae),y.onAfterRender(x,D,k,B,L,ae)}function Or(y,D,k){D.isScene!==!0&&(D=Ye);const B=ye.get(y),L=p.state.lights,ae=p.state.shadowsArray,ve=L.state.version,Re=Te.getParameters(y,L.state,ae,D,k),Ae=Te.getProgramCacheKey(Re);let ke=B.programs;B.environment=y.isMeshStandardMaterial?D.environment:null,B.fog=D.fog,B.envMap=(y.isMeshStandardMaterial?U:_).get(y.envMap||B.environment),B.envMapRotation=B.environment!==null&&y.envMap===null?D.environmentRotation:y.envMapRotation,ke===void 0&&(y.addEventListener("dispose",Ve),ke=new Map,B.programs=ke);let He=ke.get(Ae);if(He!==void 0){if(B.currentProgram===He&&B.lightsStateVersion===ve)return Cc(y,Re),He}else Re.uniforms=Te.getUniforms(y),y.onBeforeCompile(Re,x),He=Te.acquireProgram(Re,Ae),ke.set(Ae,He),B.uniforms=Re.uniforms;const Ce=B.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ce.clippingPlanes=re.uniform),Cc(y,Re),B.needsLights=Xd(y),B.lightsStateVersion=ve,B.needsLights&&(Ce.ambientLightColor.value=L.state.ambient,Ce.lightProbe.value=L.state.probe,Ce.directionalLights.value=L.state.directional,Ce.directionalLightShadows.value=L.state.directionalShadow,Ce.spotLights.value=L.state.spot,Ce.spotLightShadows.value=L.state.spotShadow,Ce.rectAreaLights.value=L.state.rectArea,Ce.ltc_1.value=L.state.rectAreaLTC1,Ce.ltc_2.value=L.state.rectAreaLTC2,Ce.pointLights.value=L.state.point,Ce.pointLightShadows.value=L.state.pointShadow,Ce.hemisphereLights.value=L.state.hemi,Ce.directionalShadowMap.value=L.state.directionalShadowMap,Ce.directionalShadowMatrix.value=L.state.directionalShadowMatrix,Ce.spotShadowMap.value=L.state.spotShadowMap,Ce.spotLightMatrix.value=L.state.spotLightMatrix,Ce.spotLightMap.value=L.state.spotLightMap,Ce.pointShadowMap.value=L.state.pointShadowMap,Ce.pointShadowMatrix.value=L.state.pointShadowMatrix),B.currentProgram=He,B.uniformsList=null,He}function Ac(y){if(y.uniformsList===null){const D=y.currentProgram.getUniforms();y.uniformsList=Ps.seqWithValue(D.seq,y.uniforms)}return y.uniformsList}function Cc(y,D){const k=ye.get(y);k.outputColorSpace=D.outputColorSpace,k.batching=D.batching,k.batchingColor=D.batchingColor,k.instancing=D.instancing,k.instancingColor=D.instancingColor,k.instancingMorph=D.instancingMorph,k.skinning=D.skinning,k.morphTargets=D.morphTargets,k.morphNormals=D.morphNormals,k.morphColors=D.morphColors,k.morphTargetsCount=D.morphTargetsCount,k.numClippingPlanes=D.numClippingPlanes,k.numIntersection=D.numClipIntersection,k.vertexAlphas=D.vertexAlphas,k.vertexTangents=D.vertexTangents,k.toneMapping=D.toneMapping}function Gd(y,D,k,B,L){D.isScene!==!0&&(D=Ye),b.resetTextureUnits();const ae=D.fog,ve=B.isMeshStandardMaterial?D.environment:null,Re=F===null?x.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Ji,Ae=(B.isMeshStandardMaterial?U:_).get(B.envMap||ve),ke=B.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,He=!!k.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ce=!!k.morphAttributes.position,Je=!!k.morphAttributes.normal,at=!!k.morphAttributes.color;let lt=Gn;B.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(lt=x.toneMapping);const kt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,et=kt!==void 0?kt.length:0,Fe=ye.get(B),_n=p.state.lights;if(se===!0&&(Me===!0||y!==S)){const qt=y===S&&B.id===E;re.setState(B,y,qt)}let tt=!1;B.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==_n.state.version||Fe.outputColorSpace!==Re||L.isBatchedMesh&&Fe.batching===!1||!L.isBatchedMesh&&Fe.batching===!0||L.isBatchedMesh&&Fe.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&Fe.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&Fe.instancing===!1||!L.isInstancedMesh&&Fe.instancing===!0||L.isSkinnedMesh&&Fe.skinning===!1||!L.isSkinnedMesh&&Fe.skinning===!0||L.isInstancedMesh&&Fe.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&Fe.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&Fe.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&Fe.instancingMorph===!1&&L.morphTexture!==null||Fe.envMap!==Ae||B.fog===!0&&Fe.fog!==ae||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==re.numPlanes||Fe.numIntersection!==re.numIntersection)||Fe.vertexAlphas!==ke||Fe.vertexTangents!==He||Fe.morphTargets!==Ce||Fe.morphNormals!==Je||Fe.morphColors!==at||Fe.toneMapping!==lt||Fe.morphTargetsCount!==et)&&(tt=!0):(tt=!0,Fe.__version=B.version);let nn=Fe.currentProgram;tt===!0&&(nn=Or(B,D,L));let pi=!1,Wt=!1,rr=!1;const ut=nn.getUniforms(),fn=Fe.uniforms;if(he.useProgram(nn.program)&&(pi=!0,Wt=!0,rr=!0),B.id!==E&&(E=B.id,Wt=!0),pi||S!==y){he.buffers.depth.getReversed()?(le.copy(y.projectionMatrix),tp(le),np(le),ut.setValue(T,"projectionMatrix",le)):ut.setValue(T,"projectionMatrix",y.projectionMatrix),ut.setValue(T,"viewMatrix",y.matrixWorldInverse);const Dn=ut.map.cameraPosition;Dn!==void 0&&Dn.setValue(T,te.setFromMatrixPosition(y.matrixWorld)),be.logarithmicDepthBuffer&&ut.setValue(T,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ut.setValue(T,"isOrthographic",y.isOrthographicCamera===!0),S!==y&&(S=y,Wt=!0,rr=!0)}if(L.isSkinnedMesh){ut.setOptional(T,L,"bindMatrix"),ut.setOptional(T,L,"bindMatrixInverse");const qt=L.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),ut.setValue(T,"boneTexture",qt.boneTexture,b))}L.isBatchedMesh&&(ut.setOptional(T,L,"batchingTexture"),ut.setValue(T,"batchingTexture",L._matricesTexture,b),ut.setOptional(T,L,"batchingIdTexture"),ut.setValue(T,"batchingIdTexture",L._indirectTexture,b),ut.setOptional(T,L,"batchingColorTexture"),L._colorsTexture!==null&&ut.setValue(T,"batchingColorTexture",L._colorsTexture,b));const sr=k.morphAttributes;if((sr.position!==void 0||sr.normal!==void 0||sr.color!==void 0)&&ze.update(L,k,nn),(Wt||Fe.receiveShadow!==L.receiveShadow)&&(Fe.receiveShadow=L.receiveShadow,ut.setValue(T,"receiveShadow",L.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(fn.envMap.value=Ae,fn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&D.environment!==null&&(fn.envMapIntensity.value=D.environmentIntensity),Wt&&(ut.setValue(T,"toneMappingExposure",x.toneMappingExposure),Fe.needsLights&&Wd(fn,rr),ae&&B.fog===!0&&fe.refreshFogUniforms(fn,ae),fe.refreshMaterialUniforms(fn,B,H,Q,p.state.transmissionRenderTarget[y.id]),Ps.upload(T,Ac(Fe),fn,b)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Ps.upload(T,Ac(Fe),fn,b),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ut.setValue(T,"center",L.center),ut.setValue(T,"modelViewMatrix",L.modelViewMatrix),ut.setValue(T,"normalMatrix",L.normalMatrix),ut.setValue(T,"modelMatrix",L.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const qt=B.uniformsGroups;for(let Dn=0,Ln=qt.length;Dn<Ln;Dn++){const Ic=qt[Dn];P.update(Ic,nn),P.bind(Ic,nn)}}return nn}function Wd(y,D){y.ambientLightColor.needsUpdate=D,y.lightProbe.needsUpdate=D,y.directionalLights.needsUpdate=D,y.directionalLightShadows.needsUpdate=D,y.pointLights.needsUpdate=D,y.pointLightShadows.needsUpdate=D,y.spotLights.needsUpdate=D,y.spotLightShadows.needsUpdate=D,y.rectAreaLights.needsUpdate=D,y.hemisphereLights.needsUpdate=D}function Xd(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(y,D,k){ye.get(y.texture).__webglTexture=D,ye.get(y.depthTexture).__webglTexture=k;const B=ye.get(y);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=k===void 0,B.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,D){const k=ye.get(y);k.__webglFramebuffer=D,k.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(y,D=0,k=0){F=y,R=D,A=k;let B=!0,L=null,ae=!1,ve=!1;if(y){const Ae=ye.get(y);if(Ae.__useDefaultFramebuffer!==void 0)he.bindFramebuffer(T.FRAMEBUFFER,null),B=!1;else if(Ae.__webglFramebuffer===void 0)b.setupRenderTarget(y);else if(Ae.__hasExternalTextures)b.rebindTextures(y,ye.get(y.texture).__webglTexture,ye.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ce=y.depthTexture;if(Ae.__boundDepthTexture!==Ce){if(Ce!==null&&ye.has(Ce)&&(y.width!==Ce.image.width||y.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(y)}}const ke=y.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(ve=!0);const He=ye.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(He[D])?L=He[D][k]:L=He[D],ae=!0):y.samples>0&&b.useMultisampledRTT(y)===!1?L=ye.get(y).__webglMultisampledFramebuffer:Array.isArray(He)?L=He[k]:L=He,I.copy(y.viewport),$.copy(y.scissor),V=y.scissorTest}else I.copy(xe).multiplyScalar(H).floor(),$.copy(Oe).multiplyScalar(H).floor(),V=Ke;if(he.bindFramebuffer(T.FRAMEBUFFER,L)&&B&&he.drawBuffers(y,L),he.viewport(I),he.scissor($),he.setScissorTest(V),ae){const Ae=ye.get(y.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+D,Ae.__webglTexture,k)}else if(ve){const Ae=ye.get(y.texture),ke=D||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,Ae.__webglTexture,k||0,ke)}E=-1},this.readRenderTargetPixels=function(y,D,k,B,L,ae,ve){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=ye.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ve!==void 0&&(Re=Re[ve]),Re){he.bindFramebuffer(T.FRAMEBUFFER,Re);try{const Ae=y.texture,ke=Ae.format,He=Ae.type;if(!be.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!be.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=y.width-B&&k>=0&&k<=y.height-L&&T.readPixels(D,k,B,L,We.convert(ke),We.convert(He),ae)}finally{const Ae=F!==null?ye.get(F).__webglFramebuffer:null;he.bindFramebuffer(T.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(y,D,k,B,L,ae,ve){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=ye.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ve!==void 0&&(Re=Re[ve]),Re){const Ae=y.texture,ke=Ae.format,He=Ae.type;if(!be.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!be.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=y.width-B&&k>=0&&k<=y.height-L){he.bindFramebuffer(T.FRAMEBUFFER,Re);const Ce=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Ce),T.bufferData(T.PIXEL_PACK_BUFFER,ae.byteLength,T.STREAM_READ),T.readPixels(D,k,B,L,We.convert(ke),We.convert(He),0);const Je=F!==null?ye.get(F).__webglFramebuffer:null;he.bindFramebuffer(T.FRAMEBUFFER,Je);const at=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await ep(T,at,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Ce),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,ae),T.deleteBuffer(Ce),T.deleteSync(at),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,D=null,k=0){y.isTexture!==!0&&(pr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,y=arguments[1]);const B=Math.pow(2,-k),L=Math.floor(y.image.width*B),ae=Math.floor(y.image.height*B),ve=D!==null?D.x:0,Re=D!==null?D.y:0;b.setTexture2D(y,0),T.copyTexSubImage2D(T.TEXTURE_2D,k,0,0,ve,Re,L,ae),he.unbindTexture()},this.copyTextureToTexture=function(y,D,k=null,B=null,L=0){y.isTexture!==!0&&(pr("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,y=arguments[1],D=arguments[2],L=arguments[3]||0,k=null);let ae,ve,Re,Ae,ke,He,Ce,Je,at;const lt=y.isCompressedTexture?y.mipmaps[L]:y.image;k!==null?(ae=k.max.x-k.min.x,ve=k.max.y-k.min.y,Re=k.isBox3?k.max.z-k.min.z:1,Ae=k.min.x,ke=k.min.y,He=k.isBox3?k.min.z:0):(ae=lt.width,ve=lt.height,Re=lt.depth||1,Ae=0,ke=0,He=0),B!==null?(Ce=B.x,Je=B.y,at=B.z):(Ce=0,Je=0,at=0);const kt=We.convert(D.format),et=We.convert(D.type);let Fe;D.isData3DTexture?(b.setTexture3D(D,0),Fe=T.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(b.setTexture2DArray(D,0),Fe=T.TEXTURE_2D_ARRAY):(b.setTexture2D(D,0),Fe=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,D.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,D.unpackAlignment);const _n=T.getParameter(T.UNPACK_ROW_LENGTH),tt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),nn=T.getParameter(T.UNPACK_SKIP_PIXELS),pi=T.getParameter(T.UNPACK_SKIP_ROWS),Wt=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,lt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,lt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ae),T.pixelStorei(T.UNPACK_SKIP_ROWS,ke),T.pixelStorei(T.UNPACK_SKIP_IMAGES,He);const rr=y.isDataArrayTexture||y.isData3DTexture,ut=D.isDataArrayTexture||D.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){const fn=ye.get(y),sr=ye.get(D),qt=ye.get(fn.__renderTarget),Dn=ye.get(sr.__renderTarget);he.bindFramebuffer(T.READ_FRAMEBUFFER,qt.__webglFramebuffer),he.bindFramebuffer(T.DRAW_FRAMEBUFFER,Dn.__webglFramebuffer);for(let Ln=0;Ln<Re;Ln++)rr&&T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ye.get(y).__webglTexture,L,He+Ln),y.isDepthTexture?(ut&&T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ye.get(D).__webglTexture,L,at+Ln),T.blitFramebuffer(Ae,ke,ae,ve,Ce,Je,ae,ve,T.DEPTH_BUFFER_BIT,T.NEAREST)):ut?T.copyTexSubImage3D(Fe,L,Ce,Je,at+Ln,Ae,ke,ae,ve):T.copyTexSubImage2D(Fe,L,Ce,Je,at+Ln,Ae,ke,ae,ve);he.bindFramebuffer(T.READ_FRAMEBUFFER,null),he.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else ut?y.isDataTexture||y.isData3DTexture?T.texSubImage3D(Fe,L,Ce,Je,at,ae,ve,Re,kt,et,lt.data):D.isCompressedArrayTexture?T.compressedTexSubImage3D(Fe,L,Ce,Je,at,ae,ve,Re,kt,lt.data):T.texSubImage3D(Fe,L,Ce,Je,at,ae,ve,Re,kt,et,lt):y.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,L,Ce,Je,ae,ve,kt,et,lt.data):y.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,L,Ce,Je,lt.width,lt.height,kt,lt.data):T.texSubImage2D(T.TEXTURE_2D,L,Ce,Je,ae,ve,kt,et,lt);T.pixelStorei(T.UNPACK_ROW_LENGTH,_n),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,tt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,nn),T.pixelStorei(T.UNPACK_SKIP_ROWS,pi),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Wt),L===0&&D.generateMipmaps&&T.generateMipmap(Fe),he.unbindTexture()},this.copyTextureToTexture3D=function(y,D,k=null,B=null,L=0){return y.isTexture!==!0&&(pr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,B=arguments[1]||null,y=arguments[2],D=arguments[3],L=arguments[4]||0),pr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,D,k,B,L)},this.initRenderTarget=function(y){ye.get(y).__webglFramebuffer===void 0&&b.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?b.setTextureCube(y,0):y.isData3DTexture?b.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?b.setTexture2DArray(y,0):b.setTexture2D(y,0),he.unbindTexture()},this.resetState=function(){R=0,A=0,F=null,he.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}class ic{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Be(e),this.density=t}clone(){return new ic(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class h0 extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class js extends Qi{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ls=new C,Ns=new C,Il=new ht,ur=new Dr,os=new Fr,Lo=new C,Pl=new C;class d0 extends zt{constructor(e=new Ft,t=new js){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Ls.fromBufferAttribute(t,r-1),Ns.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Ls.distanceTo(Ns);e.setAttribute("lineDistance",new Mt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),os.copy(i.boundingSphere),os.applyMatrix4(r),os.radius+=s,e.ray.intersectsSphere(os)===!1)return;Il.copy(r).invert(),ur.copy(e.ray).applyMatrix4(Il);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=l){const p=u.getX(v),w=u.getX(v+1),M=as(this,e,ur,c,p,w);M&&t.push(M)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(f),p=as(this,e,ur,c,v,m);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=l){const p=as(this,e,ur,c,v,v+1);p&&t.push(p)}if(this.isLineLoop){const v=as(this,e,ur,c,g-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function as(n,e,t,i,r,s){const o=n.geometry.attributes.position;if(Ls.fromBufferAttribute(o,r),Ns.fromBufferAttribute(o,s),t.distanceSqToSegment(Ls,Ns,Lo,Pl)>i)return;Lo.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Lo);if(!(c<e.near||c>e.far))return{distance:c,point:Pl.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}const Fl=new C,Dl=new C;class Us extends d0{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Fl.fromBufferAttribute(t,r),Dl.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Fl.distanceTo(Dl);e.setAttribute("lineDistance",new Mt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class rc extends Qi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ll=new ht,Oa=new Dr,cs=new Fr,ls=new C;class Th extends zt{constructor(e=new Ft,t=new rc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),cs.copy(i.boundingSphere),cs.applyMatrix4(r),cs.radius+=s,e.ray.intersectsSphere(cs)===!1)return;Ll.copy(r).invert(),Oa.copy(e.ray).applyMatrix4(Ll);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,h=i.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,v=f;g<v;g++){const m=l.getX(g);ls.fromBufferAttribute(h,m),Nl(ls,m,c,r,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,v=f;g<v;g++)ls.fromBufferAttribute(h,g),Nl(ls,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Nl(n,e,t,i,r,s,o){const a=Oa.distanceSqToPoint(n);if(a<t){const c=new C;Oa.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class f0 extends Ot{constructor(e,t,i,r,s,o,a,c,l){super(e,t,i,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class gn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=i[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===o)return r/(s-1);const u=i[r],d=i[r+1]-u,f=(o-u)/d;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new ne:new C);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new C,r=[],s=[],o=[],a=new C,c=new ht;for(let f=0;f<=e;f++){const g=f/e;r[f]=this.getTangentAt(g,new C)}s[0]=new C,o[0]=new C;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Tt(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(Tt(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],f*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class sc extends gn{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ne){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class p0 extends sc{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function oc(){let n=0,e=0,t=0,i=0;function r(s,o,a,c){n=s,e=a,t=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,h){let d=(o-s)/l-(a-s)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,r(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const us=new C,No=new oc,Uo=new oc,Oo=new oc;class m0 extends gn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new C){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:(us.subVectors(r[0],r[1]).add(r[0]),l=us);const h=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(us.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=us),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),f),v=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),No.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,v,m),Uo.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,v,m),Oo.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(No.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),Uo.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),Oo.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return i.set(No.calc(c),Uo.calc(c),Oo.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new C().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ul(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,c=n*a;return(2*t-2*i+s+o)*c+(-3*t+3*i-2*s-o)*a+s*n+t}function g0(n,e){const t=1-n;return t*t*e}function v0(n,e){return 2*(1-n)*n*e}function _0(n,e){return n*n*e}function _r(n,e,t,i){return g0(n,e)+v0(n,t)+_0(n,i)}function x0(n,e){const t=1-n;return t*t*t*e}function y0(n,e){const t=1-n;return 3*t*t*n*e}function S0(n,e){return 3*(1-n)*n*n*e}function M0(n,e){return n*n*n*e}function xr(n,e,t,i,r){return x0(n,e)+y0(n,t)+S0(n,i)+M0(n,r)}class Rh extends gn{constructor(e=new ne,t=new ne,i=new ne,r=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ne){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(xr(e,r.x,s.x,o.x,a.x),xr(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class b0 extends gn{constructor(e=new C,t=new C,i=new C,r=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new C){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(xr(e,r.x,s.x,o.x,a.x),xr(e,r.y,s.y,o.y,a.y),xr(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ah extends gn{constructor(e=new ne,t=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ne){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class E0 extends gn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ch extends gn{constructor(e=new ne,t=new ne,i=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ne){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(_r(e,r.x,s.x,o.x),_r(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class w0 extends gn{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(_r(e,r.x,s.x,o.x),_r(e,r.y,s.y,o.y),_r(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ih extends gn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ne){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(Ul(a,c.x,l.x,u.x,h.x),Ul(a,c.y,l.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new ne().fromArray(r))}return this}}var za=Object.freeze({__proto__:null,ArcCurve:p0,CatmullRomCurve3:m0,CubicBezierCurve:Rh,CubicBezierCurve3:b0,EllipseCurve:sc,LineCurve:Ah,LineCurve3:E0,QuadraticBezierCurve:Ch,QuadraticBezierCurve3:w0,SplineCurve:Ih});class T0 extends gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new za[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new za[r.type]().fromJSON(r))}return this}}class Ol extends T0{constructor(e){super(),this.type="Path",this.currentPoint=new ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Ah(this.currentPoint.clone(),new ne(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new Ch(this.currentPoint.clone(),new ne(e,t),new ne(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new Rh(this.currentPoint.clone(),new ne(e,t),new ne(i,r),new ne(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Ih(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,r,s,o,a,c),this}absellipse(e,t,i,r,s,o,a,c){const l=new sc(e,t,i,r,s,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}const hs=new C,ds=new C,zo=new C,fs=new Qt;class R0 extends Ft{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(Bi*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:v,b:m,c:p}=fs;if(v.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),fs.getNormal(zo),h[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,h[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,h[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let w=0;w<3;w++){const M=(w+1)%3,x=h[w],N=h[M],R=fs[u[w]],A=fs[u[M]],F=`${x}_${N}`,E=`${N}_${x}`;E in d&&d[E]?(zo.dot(d[E].normal)<=s&&(f.push(R.x,R.y,R.z),f.push(A.x,A.y,A.z)),d[E]=null):F in d||(d[F]={index0:l[w],index1:l[M],normal:zo.clone()})}}for(const g in d)if(d[g]){const{index0:v,index1:m}=d[g];hs.fromBufferAttribute(a,v),ds.fromBufferAttribute(a,m),f.push(hs.x,hs.y,hs.z),f.push(ds.x,ds.y,ds.z)}this.setAttribute("position",new Mt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ph extends Ol{constructor(e){super(e),this.uuid=di(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new Ol().fromJSON(r))}return this}}const A0={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=Fh(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l,u,h,d,f;if(i&&(s=D0(n,e,s,t)),n.length>80*t){a=l=n[0],c=u=n[1];for(let g=t;g<r;g+=t)h=n[g],d=n[g+1],h<a&&(a=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);f=Math.max(l-a,u-c),f=f!==0?32767/f:0}return wr(s,o,t,a,c,f,0),o}};function Fh(n,e,t,i,r){let s,o;if(r===W0(n,e,t,i)>0)for(s=e;s<t;s+=i)o=zl(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=zl(s,n[s],n[s+1],o);return o&&Ks(o,o.next)&&(Rr(o),o=o.next),o}function ci(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ks(t,t.next)||pt(t.prev,t,t.next)===0)){if(Rr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function wr(n,e,t,i,r,s,o){if(!n)return;!o&&s&&z0(n,i,r,s);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,s?I0(n,i,r,s):C0(n)){e.push(c.i/t|0),e.push(n.i/t|0),e.push(l.i/t|0),Rr(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=P0(ci(n),e,t),wr(n,e,t,i,r,s,2)):o===2&&F0(n,e,t,i,r,s):wr(ci(n),e,t,i,r,s,1);break}}}function C0(n){const e=n.prev,t=n,i=n.next;if(pt(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,c=t.y,l=i.y,u=r<s?r<o?r:o:s<o?s:o,h=a<c?a<l?a:l:c<l?c:l,d=r>s?r>o?r:o:s>o?s:o,f=a>c?a>l?a:l:c>l?c:l;let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&Ni(r,a,s,c,o,l,g.x,g.y)&&pt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function I0(n,e,t,i){const r=n.prev,s=n,o=n.next;if(pt(r,s,o)>=0)return!1;const a=r.x,c=s.x,l=o.x,u=r.y,h=s.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=u<h?u<d?u:d:h<d?h:d,v=a>c?a>l?a:l:c>l?c:l,m=u>h?u>d?u:d:h>d?h:d,p=ka(f,g,e,t,i),w=ka(v,m,e,t,i);let M=n.prevZ,x=n.nextZ;for(;M&&M.z>=p&&x&&x.z<=w;){if(M.x>=f&&M.x<=v&&M.y>=g&&M.y<=m&&M!==r&&M!==o&&Ni(a,u,c,h,l,d,M.x,M.y)&&pt(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&Ni(a,u,c,h,l,d,x.x,x.y)&&pt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=v&&M.y>=g&&M.y<=m&&M!==r&&M!==o&&Ni(a,u,c,h,l,d,M.x,M.y)&&pt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=w;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&Ni(a,u,c,h,l,d,x.x,x.y)&&pt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function P0(n,e,t){let i=n;do{const r=i.prev,s=i.next.next;!Ks(r,s)&&Dh(r,i,i.next,s)&&Tr(r,s)&&Tr(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),Rr(i),Rr(i.next),i=n=s),i=i.next}while(i!==n);return ci(i)}function F0(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&V0(o,a)){let c=Lh(o,a);o=ci(o,o.next),c=ci(c,c.next),wr(o,e,t,i,r,s,0),wr(c,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function D0(n,e,t,i){const r=[];let s,o,a,c,l;for(s=0,o=e.length;s<o;s++)a=e[s]*i,c=s<o-1?e[s+1]*i:n.length,l=Fh(n,a,c,i,!1),l===l.next&&(l.steiner=!0),r.push(B0(l));for(r.sort(L0),s=0;s<r.length;s++)t=N0(r[s],t);return t}function L0(n,e){return n.x-e.x}function N0(n,e){const t=U0(n,e);if(!t)return e;const i=Lh(t,n);return ci(i,i.next),ci(t,t.next)}function U0(n,e){let t=e,i=-1/0,r;const s=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>i&&(i=d,r=t.x<t.next.x?t:t.next,d===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,c=r.x,l=r.y;let u=1/0,h;t=r;do s>=t.x&&t.x>=c&&s!==t.x&&Ni(o<l?s:i,o,c,l,o<l?i:s,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(s-t.x),Tr(t,n)&&(h<u||h===u&&(t.x>r.x||t.x===r.x&&O0(r,t)))&&(r=t,u=h)),t=t.next;while(t!==a);return r}function O0(n,e){return pt(n.prev,n,e.prev)<0&&pt(e.next,n,n.next)<0}function z0(n,e,t,i){let r=n;do r.z===0&&(r.z=ka(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,k0(r)}function k0(n){let e,t,i,r,s,o,a,c,l=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<l&&(a++,i=i.nextZ,!!i);e++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,c--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,l*=2}while(o>1);return n}function ka(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function B0(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Ni(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function V0(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!H0(n,e)&&(Tr(n,e)&&Tr(e,n)&&G0(n,e)&&(pt(n.prev,n,e.prev)||pt(n,e.prev,e))||Ks(n,e)&&pt(n.prev,n,n.next)>0&&pt(e.prev,e,e.next)>0)}function pt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ks(n,e){return n.x===e.x&&n.y===e.y}function Dh(n,e,t,i){const r=ms(pt(n,e,t)),s=ms(pt(n,e,i)),o=ms(pt(t,i,n)),a=ms(pt(t,i,e));return!!(r!==s&&o!==a||r===0&&ps(n,t,e)||s===0&&ps(n,i,e)||o===0&&ps(t,n,i)||a===0&&ps(t,e,i))}function ps(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function ms(n){return n>0?1:n<0?-1:0}function H0(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Dh(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Tr(n,e){return pt(n.prev,n,n.next)<0?pt(n,e,n.next)>=0&&pt(n,n.prev,e)>=0:pt(n,e,n.prev)<0||pt(n,n.next,e)<0}function G0(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Lh(n,e){const t=new Ba(n.i,n.x,n.y),i=new Ba(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function zl(n,e,t,i){const r=new Ba(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Rr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ba(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function W0(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class yr{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return yr.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];kl(e),Bl(i,e);let o=e.length;t.forEach(kl);for(let c=0;c<t.length;c++)r.push(o),o+=t[c].length,Bl(i,t[c]);const a=A0.triangulate(i,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function kl(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Bl(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class ac extends Ft{constructor(e=new Ph([new ne(.5,.5),new ne(-.5,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new Mt(r,3)),this.setAttribute("uv",new Mt(s,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:X0;let M,x=!1,N,R,A,F;p&&(M=p.getSpacedPoints(u),x=!0,d=!1,N=p.computeFrenetFrames(u,!1),R=new C,A=new C,F=new C),d||(m=0,f=0,g=0,v=0);const E=a.extractPoints(l);let S=E.shape;const I=E.holes;if(!yr.isClockWise(S)){S=S.reverse();for(let K=0,oe=I.length;K<oe;K++){const T=I[K];yr.isClockWise(T)&&(I[K]=T.reverse())}}const V=yr.triangulateShape(S,I),G=S;for(let K=0,oe=I.length;K<oe;K++){const T=I[K];S=S.concat(T)}function j(K,oe,T){return oe||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(oe,T)}const z=S.length,Q=V.length;function H(K,oe,T){let Ie,ie,be;const he=K.x-oe.x,Ne=K.y-oe.y,ye=T.x-K.x,b=T.y-K.y,_=he*he+Ne*Ne,U=he*b-Ne*ye;if(Math.abs(U)>Number.EPSILON){const Z=Math.sqrt(_),ee=Math.sqrt(ye*ye+b*b),q=oe.x-Ne/Z,Te=oe.y+he/Z,fe=T.x-b/ee,Se=T.y+ye/ee,$e=((fe-q)*b-(Se-Te)*ye)/(he*b-Ne*ye);Ie=q+he*$e-K.x,ie=Te+Ne*$e-K.y;const re=Ie*Ie+ie*ie;if(re<=2)return new ne(Ie,ie);be=Math.sqrt(re/2)}else{let Z=!1;he>Number.EPSILON?ye>Number.EPSILON&&(Z=!0):he<-Number.EPSILON?ye<-Number.EPSILON&&(Z=!0):Math.sign(Ne)===Math.sign(b)&&(Z=!0),Z?(Ie=-Ne,ie=he,be=Math.sqrt(_)):(Ie=he,ie=Ne,be=Math.sqrt(_/2))}return new ne(Ie/be,ie/be)}const ce=[];for(let K=0,oe=G.length,T=oe-1,Ie=K+1;K<oe;K++,T++,Ie++)T===oe&&(T=0),Ie===oe&&(Ie=0),ce[K]=H(G[K],G[T],G[Ie]);const me=[];let xe,Oe=ce.concat();for(let K=0,oe=I.length;K<oe;K++){const T=I[K];xe=[];for(let Ie=0,ie=T.length,be=ie-1,he=Ie+1;Ie<ie;Ie++,be++,he++)be===ie&&(be=0),he===ie&&(he=0),xe[Ie]=H(T[Ie],T[be],T[he]);me.push(xe),Oe=Oe.concat(xe)}for(let K=0;K<m;K++){const oe=K/m,T=f*Math.cos(oe*Math.PI/2),Ie=g*Math.sin(oe*Math.PI/2)+v;for(let ie=0,be=G.length;ie<be;ie++){const he=j(G[ie],ce[ie],Ie);le(he.x,he.y,-T)}for(let ie=0,be=I.length;ie<be;ie++){const he=I[ie];xe=me[ie];for(let Ne=0,ye=he.length;Ne<ye;Ne++){const b=j(he[Ne],xe[Ne],Ie);le(b.x,b.y,-T)}}}const Ke=g+v;for(let K=0;K<z;K++){const oe=d?j(S[K],Oe[K],Ke):S[K];x?(A.copy(N.normals[0]).multiplyScalar(oe.x),R.copy(N.binormals[0]).multiplyScalar(oe.y),F.copy(M[0]).add(A).add(R),le(F.x,F.y,F.z)):le(oe.x,oe.y,0)}for(let K=1;K<=u;K++)for(let oe=0;oe<z;oe++){const T=d?j(S[oe],Oe[oe],Ke):S[oe];x?(A.copy(N.normals[K]).multiplyScalar(T.x),R.copy(N.binormals[K]).multiplyScalar(T.y),F.copy(M[K]).add(A).add(R),le(F.x,F.y,F.z)):le(T.x,T.y,h/u*K)}for(let K=m-1;K>=0;K--){const oe=K/m,T=f*Math.cos(oe*Math.PI/2),Ie=g*Math.sin(oe*Math.PI/2)+v;for(let ie=0,be=G.length;ie<be;ie++){const he=j(G[ie],ce[ie],Ie);le(he.x,he.y,h+T)}for(let ie=0,be=I.length;ie<be;ie++){const he=I[ie];xe=me[ie];for(let Ne=0,ye=he.length;Ne<ye;Ne++){const b=j(he[Ne],xe[Ne],Ie);x?le(b.x,b.y+M[u-1].y,M[u-1].x+T):le(b.x,b.y,h+T)}}}Y(),se();function Y(){const K=r.length/3;if(d){let oe=0,T=z*oe;for(let Ie=0;Ie<Q;Ie++){const ie=V[Ie];Le(ie[2]+T,ie[1]+T,ie[0]+T)}oe=u+m*2,T=z*oe;for(let Ie=0;Ie<Q;Ie++){const ie=V[Ie];Le(ie[0]+T,ie[1]+T,ie[2]+T)}}else{for(let oe=0;oe<Q;oe++){const T=V[oe];Le(T[2],T[1],T[0])}for(let oe=0;oe<Q;oe++){const T=V[oe];Le(T[0]+z*u,T[1]+z*u,T[2]+z*u)}}i.addGroup(K,r.length/3-K,0)}function se(){const K=r.length/3;let oe=0;Me(G,oe),oe+=G.length;for(let T=0,Ie=I.length;T<Ie;T++){const ie=I[T];Me(ie,oe),oe+=ie.length}i.addGroup(K,r.length/3-K,1)}function Me(K,oe){let T=K.length;for(;--T>=0;){const Ie=T;let ie=T-1;ie<0&&(ie=K.length-1);for(let be=0,he=u+m*2;be<he;be++){const Ne=z*be,ye=z*(be+1),b=oe+Ie+Ne,_=oe+ie+Ne,U=oe+ie+ye,Z=oe+Ie+ye;te(b,_,U,Z)}}}function le(K,oe,T){c.push(K),c.push(oe),c.push(T)}function Le(K,oe,T){ue(K),ue(oe),ue(T);const Ie=r.length/3,ie=w.generateTopUV(i,r,Ie-3,Ie-2,Ie-1);Ye(ie[0]),Ye(ie[1]),Ye(ie[2])}function te(K,oe,T,Ie){ue(K),ue(oe),ue(Ie),ue(oe),ue(T),ue(Ie);const ie=r.length/3,be=w.generateSideWallUV(i,r,ie-6,ie-3,ie-2,ie-1);Ye(be[0]),Ye(be[1]),Ye(be[3]),Ye(be[1]),Ye(be[2]),Ye(be[3])}function ue(K){r.push(c[K*3+0]),r.push(c[K*3+1]),r.push(c[K*3+2])}function Ye(K){s.push(K.x),s.push(K.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Z0(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new za[r.type]().fromJSON(r)),new ac(i,e.options)}}const X0={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[r*3],u=e[r*3+1];return[new ne(s,o),new ne(a,c),new ne(l,u)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],u=e[i*3+1],h=e[i*3+2],d=e[r*3],f=e[r*3+1],g=e[r*3+2],v=e[s*3],m=e[s*3+1],p=e[s*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new ne(o,1-c),new ne(l,1-h),new ne(d,1-g),new ne(v,1-p)]:[new ne(a,1-c),new ne(u,1-h),new ne(f,1-g),new ne(m,1-p)]}};function Z0(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class cc extends Ft{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],c=[],l=[],u=[];let h=e;const d=(t-e)/r,f=new C,g=new ne;for(let v=0;v<=r;v++){for(let m=0;m<=i;m++){const p=s+m/i*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let v=0;v<r;v++){const m=v*(i+1);for(let p=0;p<i;p++){const w=p+m,M=w,x=w+i+1,N=w+i+2,R=w+1;a.push(M,x,R),a.push(x,N,R)}}this.setIndex(a),this.setAttribute("position",new Mt(c,3)),this.setAttribute("normal",new Mt(l,3)),this.setAttribute("uv",new Mt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class $0 extends At{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class Nh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Vl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Vl(){return performance.now()}const Hl=new ht;class Y0{constructor(e,t,i=0,r=1/0){this.ray=new Dr(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new tc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Hl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hl),this}intersectObject(e,t=!0,i=[]){return Va(e,this,i,t),i.sort(Gl),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Va(e[r],this,i,t);return i.sort(Gl),i}}function Gl(n,e){return n.distance-e.distance}function Va(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)Va(s[o],e,t,!0)}}class an{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Tt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class q0 extends Us{constructor(e=10,t=16,i=8,r=64,s=4473924,o=8947848){s=new Be(s),o=new Be(o);const a=[],c=[];if(t>1)for(let h=0;h<t;h++){const d=h/t*(Math.PI*2),f=Math.sin(d)*e,g=Math.cos(d)*e;a.push(0,0,0),a.push(f,0,g);const v=h&1?s:o;c.push(v.r,v.g,v.b),c.push(v.r,v.g,v.b)}for(let h=0;h<i;h++){const d=h&1?s:o,f=e-e/i*h;for(let g=0;g<r;g++){let v=g/r*(Math.PI*2),m=Math.sin(v)*f,p=Math.cos(v)*f;a.push(m,0,p),c.push(d.r,d.g,d.b),v=(g+1)/r*(Math.PI*2),m=Math.sin(v)*f,p=Math.cos(v)*f,a.push(m,0,p),c.push(d.r,d.g,d.b)}}const l=new Ft;l.setAttribute("position",new Mt(a,3)),l.setAttribute("color",new Mt(c,3));const u=new js({vertexColors:!0,toneMapped:!1});super(l,u),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class j0 extends hi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Za}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Za);var Wl;function X(n,e,t){function i(a,c){if(a._zod||Object.defineProperty(a,"_zod",{value:{def:c,constr:o,traits:new Set},enumerable:!1}),a._zod.traits.has(n))return;a._zod.traits.add(n),e(a,c);const l=o.prototype,u=Object.keys(l);for(let h=0;h<u.length;h++){const d=u[h];d in a||(a[d]=l[d].bind(a))}}const r=(t==null?void 0:t.Parent)??Object;class s extends r{}Object.defineProperty(s,"name",{value:n});function o(a){var c;const l=t!=null&&t.Parent?new s:this;i(l,a),(c=l._zod).deferred??(c.deferred=[]);for(const u of l._zod.deferred)u();return l}return Object.defineProperty(o,"init",{value:i}),Object.defineProperty(o,Symbol.hasInstance,{value:a=>{var c,l;return t!=null&&t.Parent&&a instanceof t.Parent?!0:(l=(c=a==null?void 0:a._zod)==null?void 0:c.traits)==null?void 0:l.has(n)}}),Object.defineProperty(o,"name",{value:n}),o}class Hi extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}class Uh extends Error{constructor(e){super(`Encountered unidirectional transform during encode: ${e}`),this.name="ZodEncodeError"}}(Wl=globalThis).__zod_globalConfig??(Wl.__zod_globalConfig={});const lc=globalThis.__zod_globalConfig;function li(n){return lc}function Oh(n){const e=Object.values(n).filter(i=>typeof i=="number");return Object.entries(n).filter(([i,r])=>e.indexOf(+i)===-1).map(([i,r])=>r)}function Ha(n,e){return typeof e=="bigint"?e.toString():e}function Js(n){return{get value(){{const e=n();return Object.defineProperty(this,"value",{value:e}),e}}}}function uc(n){return n==null}function hc(n){const e=n.startsWith("^")?1:0,t=n.endsWith("$")?n.length-1:n.length;return n.slice(e,t)}function K0(n,e){const t=n/e,i=Math.round(t),r=Number.EPSILON*Math.max(Math.abs(t),1);return Math.abs(t-i)<r?0:t-i}const Xl=Symbol("evaluating");function rt(n,e,t){let i;Object.defineProperty(n,e,{get(){if(i!==Xl)return i===void 0&&(i=Xl,i=t()),i},set(r){Object.defineProperty(n,e,{value:r})},configurable:!0})}function fi(n,e,t){Object.defineProperty(n,e,{value:t,writable:!0,enumerable:!0,configurable:!0})}function Xn(...n){const e={};for(const t of n){const i=Object.getOwnPropertyDescriptors(t);Object.assign(e,i)}return Object.defineProperties({},e)}function Zl(n){return JSON.stringify(n)}function J0(n){return n.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"")}const zh="captureStackTrace"in Error?Error.captureStackTrace:(...n)=>{};function Ar(n){return typeof n=="object"&&n!==null&&!Array.isArray(n)}const Q0=Js(()=>{var n;if(lc.jitless||typeof navigator<"u"&&((n=navigator==null?void 0:navigator.userAgent)!=null&&n.includes("Cloudflare")))return!1;try{const e=Function;return new e(""),!0}catch{return!1}});function Cr(n){if(Ar(n)===!1)return!1;const e=n.constructor;if(e===void 0||typeof e!="function")return!0;const t=e.prototype;return!(Ar(t)===!1||Object.prototype.hasOwnProperty.call(t,"isPrototypeOf")===!1)}function kh(n){return Cr(n)?{...n}:Array.isArray(n)?[...n]:n instanceof Map?new Map(n):n instanceof Set?new Set(n):n}const ex=new Set(["string","number","symbol"]);function qi(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Zn(n,e,t){const i=new n._zod.constr(e??n._zod.def);return(!e||t!=null&&t.parent)&&(i._zod.parent=n),i}function Pe(n){const e=n;if(!e)return{};if(typeof e=="string")return{error:()=>e};if((e==null?void 0:e.message)!==void 0){if((e==null?void 0:e.error)!==void 0)throw new Error("Cannot specify both `message` and `error` params");e.error=e.message}return delete e.message,typeof e.error=="string"?{...e,error:()=>e.error}:e}function tx(n){return Object.keys(n).filter(e=>n[e]._zod.optin==="optional"&&n[e]._zod.optout==="optional")}const nx={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-34028234663852886e22,34028234663852886e22],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]};function ix(n,e){const t=n._zod.def,i=t.checks;if(i&&i.length>0)throw new Error(".pick() cannot be used on object schemas containing refinements");const s=Xn(n._zod.def,{get shape(){const o={};for(const a in e){if(!(a in t.shape))throw new Error(`Unrecognized key: "${a}"`);e[a]&&(o[a]=t.shape[a])}return fi(this,"shape",o),o},checks:[]});return Zn(n,s)}function rx(n,e){const t=n._zod.def,i=t.checks;if(i&&i.length>0)throw new Error(".omit() cannot be used on object schemas containing refinements");const s=Xn(n._zod.def,{get shape(){const o={...n._zod.def.shape};for(const a in e){if(!(a in t.shape))throw new Error(`Unrecognized key: "${a}"`);e[a]&&delete o[a]}return fi(this,"shape",o),o},checks:[]});return Zn(n,s)}function sx(n,e){if(!Cr(e))throw new Error("Invalid input to extend: expected a plain object");const t=n._zod.def.checks;if(t&&t.length>0){const s=n._zod.def.shape;for(const o in e)if(Object.getOwnPropertyDescriptor(s,o)!==void 0)throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}const r=Xn(n._zod.def,{get shape(){const s={...n._zod.def.shape,...e};return fi(this,"shape",s),s}});return Zn(n,r)}function ox(n,e){if(!Cr(e))throw new Error("Invalid input to safeExtend: expected a plain object");const t=Xn(n._zod.def,{get shape(){const i={...n._zod.def.shape,...e};return fi(this,"shape",i),i}});return Zn(n,t)}function ax(n,e){var i;if((i=n._zod.def.checks)!=null&&i.length)throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");const t=Xn(n._zod.def,{get shape(){const r={...n._zod.def.shape,...e._zod.def.shape};return fi(this,"shape",r),r},get catchall(){return e._zod.def.catchall},checks:e._zod.def.checks??[]});return Zn(n,t)}function cx(n,e,t){const r=e._zod.def.checks;if(r&&r.length>0)throw new Error(".partial() cannot be used on object schemas containing refinements");const o=Xn(e._zod.def,{get shape(){const a=e._zod.def.shape,c={...a};if(t)for(const l in t){if(!(l in a))throw new Error(`Unrecognized key: "${l}"`);t[l]&&(c[l]=n?new n({type:"optional",innerType:a[l]}):a[l])}else for(const l in a)c[l]=n?new n({type:"optional",innerType:a[l]}):a[l];return fi(this,"shape",c),c},checks:[]});return Zn(e,o)}function lx(n,e,t){const i=Xn(e._zod.def,{get shape(){const r=e._zod.def.shape,s={...r};if(t)for(const o in t){if(!(o in s))throw new Error(`Unrecognized key: "${o}"`);t[o]&&(s[o]=new n({type:"nonoptional",innerType:r[o]}))}else for(const o in r)s[o]=new n({type:"nonoptional",innerType:r[o]});return fi(this,"shape",s),s}});return Zn(e,i)}function Ui(n,e=0){var t;if(n.aborted===!0)return!0;for(let i=e;i<n.issues.length;i++)if(((t=n.issues[i])==null?void 0:t.continue)!==!0)return!0;return!1}function ux(n,e=0){var t;if(n.aborted===!0)return!0;for(let i=e;i<n.issues.length;i++)if(((t=n.issues[i])==null?void 0:t.continue)===!1)return!0;return!1}function Qs(n,e){return e.map(t=>{var i;return(i=t).path??(i.path=[]),t.path.unshift(n),t})}function gs(n){return typeof n=="string"?n:n==null?void 0:n.message}function ui(n,e,t){var c,l,u,h,d,f;const i=n.message?n.message:gs((u=(l=(c=n.inst)==null?void 0:c._zod.def)==null?void 0:l.error)==null?void 0:u.call(l,n))??gs((h=e==null?void 0:e.error)==null?void 0:h.call(e,n))??gs((d=t.customError)==null?void 0:d.call(t,n))??gs((f=t.localeError)==null?void 0:f.call(t,n))??"Invalid input",{inst:r,continue:s,input:o,...a}=n;return a.path??(a.path=[]),a.message=i,e!=null&&e.reportInput&&(a.input=o),a}function dc(n){return Array.isArray(n)?"array":typeof n=="string"?"string":"unknown"}function Ir(...n){const[e,t,i]=n;return typeof e=="string"?{message:e,code:"custom",input:t,inst:i}:{...e}}const Bh=(n,e)=>{n.name="$ZodError",Object.defineProperty(n,"_zod",{value:n._zod,enumerable:!1}),Object.defineProperty(n,"issues",{value:e,enumerable:!1}),n.message=JSON.stringify(e,Ha,2),Object.defineProperty(n,"toString",{value:()=>n.message,enumerable:!1})},Vh=X("$ZodError",Bh),Hh=X("$ZodError",Bh,{Parent:Error});function hx(n,e=t=>t.message){const t={},i=[];for(const r of n.issues)r.path.length>0?(t[r.path[0]]=t[r.path[0]]||[],t[r.path[0]].push(e(r))):i.push(e(r));return{formErrors:i,fieldErrors:t}}function dx(n,e=t=>t.message){const t={_errors:[]},i=(r,s=[])=>{for(const o of r.issues)if(o.code==="invalid_union"&&o.errors.length)o.errors.map(a=>i({issues:a},[...s,...o.path]));else if(o.code==="invalid_key")i({issues:o.issues},[...s,...o.path]);else if(o.code==="invalid_element")i({issues:o.issues},[...s,...o.path]);else{const a=[...s,...o.path];if(a.length===0)t._errors.push(e(o));else{let c=t,l=0;for(;l<a.length;){const u=a[l];l===a.length-1?(c[u]=c[u]||{_errors:[]},c[u]._errors.push(e(o))):c[u]=c[u]||{_errors:[]},c=c[u],l++}}}};return i(n),t}const fc=n=>(e,t,i,r)=>{const s=i?{...i,async:!1}:{async:!1},o=e._zod.run({value:t,issues:[]},s);if(o instanceof Promise)throw new Hi;if(o.issues.length){const a=new((r==null?void 0:r.Err)??n)(o.issues.map(c=>ui(c,s,li())));throw zh(a,r==null?void 0:r.callee),a}return o.value},pc=n=>async(e,t,i,r)=>{const s=i?{...i,async:!0}:{async:!0};let o=e._zod.run({value:t,issues:[]},s);if(o instanceof Promise&&(o=await o),o.issues.length){const a=new((r==null?void 0:r.Err)??n)(o.issues.map(c=>ui(c,s,li())));throw zh(a,r==null?void 0:r.callee),a}return o.value},eo=n=>(e,t,i)=>{const r=i?{...i,async:!1}:{async:!1},s=e._zod.run({value:t,issues:[]},r);if(s instanceof Promise)throw new Hi;return s.issues.length?{success:!1,error:new(n??Vh)(s.issues.map(o=>ui(o,r,li())))}:{success:!0,data:s.value}},fx=eo(Hh),to=n=>async(e,t,i)=>{const r=i?{...i,async:!0}:{async:!0};let s=e._zod.run({value:t,issues:[]},r);return s instanceof Promise&&(s=await s),s.issues.length?{success:!1,error:new n(s.issues.map(o=>ui(o,r,li())))}:{success:!0,data:s.value}},px=to(Hh),mx=n=>(e,t,i)=>{const r=i?{...i,direction:"backward"}:{direction:"backward"};return fc(n)(e,t,r)},gx=n=>(e,t,i)=>fc(n)(e,t,i),vx=n=>async(e,t,i)=>{const r=i?{...i,direction:"backward"}:{direction:"backward"};return pc(n)(e,t,r)},_x=n=>async(e,t,i)=>pc(n)(e,t,i),xx=n=>(e,t,i)=>{const r=i?{...i,direction:"backward"}:{direction:"backward"};return eo(n)(e,t,r)},yx=n=>(e,t,i)=>eo(n)(e,t,i),Sx=n=>async(e,t,i)=>{const r=i?{...i,direction:"backward"}:{direction:"backward"};return to(n)(e,t,r)},Mx=n=>async(e,t,i)=>to(n)(e,t,i),bx=/^[cC][0-9a-z]{6,}$/,Ex=/^[0-9a-z]+$/,wx=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,Tx=/^[0-9a-vA-V]{20}$/,Rx=/^[A-Za-z0-9]{27}$/,Ax=/^[a-zA-Z0-9_-]{21}$/,Cx=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,Ix=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,$l=n=>n?new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${n}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,Px=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,Fx="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";function Dx(){return new RegExp(Fx,"u")}const Lx=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,Nx=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,Ux=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,Ox=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,zx=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,Gh=/^[A-Za-z0-9_-]*$/,kx=/^https?$/,Bx=/^\+[1-9]\d{6,14}$/,Wh="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",Vx=new RegExp(`^${Wh}$`);function Xh(n){const e="(?:[01]\\d|2[0-3]):[0-5]\\d";return typeof n.precision=="number"?n.precision===-1?`${e}`:n.precision===0?`${e}:[0-5]\\d`:`${e}:[0-5]\\d\\.\\d{${n.precision}}`:`${e}(?::[0-5]\\d(?:\\.\\d+)?)?`}function Hx(n){return new RegExp(`^${Xh(n)}$`)}function Gx(n){const e=Xh({precision:n.precision}),t=["Z"];n.local&&t.push(""),n.offset&&t.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");const i=`${e}(?:${t.join("|")})`;return new RegExp(`^${Wh}T(?:${i})$`)}const Wx=n=>{const e=n?`[\\s\\S]{${(n==null?void 0:n.minimum)??0},${(n==null?void 0:n.maximum)??""}}`:"[\\s\\S]*";return new RegExp(`^${e}$`)},Xx=/^-?\d+$/,Zx=/^-?\d+(?:\.\d+)?$/,$x=/^(?:true|false)$/i,Yx=/^[^A-Z]*$/,qx=/^[^a-z]*$/,Gt=X("$ZodCheck",(n,e)=>{var t;n._zod??(n._zod={}),n._zod.def=e,(t=n._zod).onattach??(t.onattach=[])}),Zh={number:"number",bigint:"bigint",object:"date"},$h=X("$ZodCheckLessThan",(n,e)=>{Gt.init(n,e);const t=Zh[typeof e.value];n._zod.onattach.push(i=>{const r=i._zod.bag,s=(e.inclusive?r.maximum:r.exclusiveMaximum)??Number.POSITIVE_INFINITY;e.value<s&&(e.inclusive?r.maximum=e.value:r.exclusiveMaximum=e.value)}),n._zod.check=i=>{(e.inclusive?i.value<=e.value:i.value<e.value)||i.issues.push({origin:t,code:"too_big",maximum:typeof e.value=="object"?e.value.getTime():e.value,input:i.value,inclusive:e.inclusive,inst:n,continue:!e.abort})}}),Yh=X("$ZodCheckGreaterThan",(n,e)=>{Gt.init(n,e);const t=Zh[typeof e.value];n._zod.onattach.push(i=>{const r=i._zod.bag,s=(e.inclusive?r.minimum:r.exclusiveMinimum)??Number.NEGATIVE_INFINITY;e.value>s&&(e.inclusive?r.minimum=e.value:r.exclusiveMinimum=e.value)}),n._zod.check=i=>{(e.inclusive?i.value>=e.value:i.value>e.value)||i.issues.push({origin:t,code:"too_small",minimum:typeof e.value=="object"?e.value.getTime():e.value,input:i.value,inclusive:e.inclusive,inst:n,continue:!e.abort})}}),jx=X("$ZodCheckMultipleOf",(n,e)=>{Gt.init(n,e),n._zod.onattach.push(t=>{var i;(i=t._zod.bag).multipleOf??(i.multipleOf=e.value)}),n._zod.check=t=>{if(typeof t.value!=typeof e.value)throw new Error("Cannot mix number and bigint in multiple_of check.");(typeof t.value=="bigint"?t.value%e.value===BigInt(0):K0(t.value,e.value)===0)||t.issues.push({origin:typeof t.value,code:"not_multiple_of",divisor:e.value,input:t.value,inst:n,continue:!e.abort})}}),Kx=X("$ZodCheckNumberFormat",(n,e)=>{var o;Gt.init(n,e),e.format=e.format||"float64";const t=(o=e.format)==null?void 0:o.includes("int"),i=t?"int":"number",[r,s]=nx[e.format];n._zod.onattach.push(a=>{const c=a._zod.bag;c.format=e.format,c.minimum=r,c.maximum=s,t&&(c.pattern=Xx)}),n._zod.check=a=>{const c=a.value;if(t){if(!Number.isInteger(c)){a.issues.push({expected:i,format:e.format,code:"invalid_type",continue:!1,input:c,inst:n});return}if(!Number.isSafeInteger(c)){c>0?a.issues.push({input:c,code:"too_big",maximum:Number.MAX_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:n,origin:i,inclusive:!0,continue:!e.abort}):a.issues.push({input:c,code:"too_small",minimum:Number.MIN_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:n,origin:i,inclusive:!0,continue:!e.abort});return}}c<r&&a.issues.push({origin:"number",input:c,code:"too_small",minimum:r,inclusive:!0,inst:n,continue:!e.abort}),c>s&&a.issues.push({origin:"number",input:c,code:"too_big",maximum:s,inclusive:!0,inst:n,continue:!e.abort})}}),Jx=X("$ZodCheckMaxLength",(n,e)=>{var t;Gt.init(n,e),(t=n._zod.def).when??(t.when=i=>{const r=i.value;return!uc(r)&&r.length!==void 0}),n._zod.onattach.push(i=>{const r=i._zod.bag.maximum??Number.POSITIVE_INFINITY;e.maximum<r&&(i._zod.bag.maximum=e.maximum)}),n._zod.check=i=>{const r=i.value;if(r.length<=e.maximum)return;const o=dc(r);i.issues.push({origin:o,code:"too_big",maximum:e.maximum,inclusive:!0,input:r,inst:n,continue:!e.abort})}}),Qx=X("$ZodCheckMinLength",(n,e)=>{var t;Gt.init(n,e),(t=n._zod.def).when??(t.when=i=>{const r=i.value;return!uc(r)&&r.length!==void 0}),n._zod.onattach.push(i=>{const r=i._zod.bag.minimum??Number.NEGATIVE_INFINITY;e.minimum>r&&(i._zod.bag.minimum=e.minimum)}),n._zod.check=i=>{const r=i.value;if(r.length>=e.minimum)return;const o=dc(r);i.issues.push({origin:o,code:"too_small",minimum:e.minimum,inclusive:!0,input:r,inst:n,continue:!e.abort})}}),ey=X("$ZodCheckLengthEquals",(n,e)=>{var t;Gt.init(n,e),(t=n._zod.def).when??(t.when=i=>{const r=i.value;return!uc(r)&&r.length!==void 0}),n._zod.onattach.push(i=>{const r=i._zod.bag;r.minimum=e.length,r.maximum=e.length,r.length=e.length}),n._zod.check=i=>{const r=i.value,s=r.length;if(s===e.length)return;const o=dc(r),a=s>e.length;i.issues.push({origin:o,...a?{code:"too_big",maximum:e.length}:{code:"too_small",minimum:e.length},inclusive:!0,exact:!0,input:i.value,inst:n,continue:!e.abort})}}),no=X("$ZodCheckStringFormat",(n,e)=>{var t,i;Gt.init(n,e),n._zod.onattach.push(r=>{const s=r._zod.bag;s.format=e.format,e.pattern&&(s.patterns??(s.patterns=new Set),s.patterns.add(e.pattern))}),e.pattern?(t=n._zod).check??(t.check=r=>{e.pattern.lastIndex=0,!e.pattern.test(r.value)&&r.issues.push({origin:"string",code:"invalid_format",format:e.format,input:r.value,...e.pattern?{pattern:e.pattern.toString()}:{},inst:n,continue:!e.abort})}):(i=n._zod).check??(i.check=()=>{})}),ty=X("$ZodCheckRegex",(n,e)=>{no.init(n,e),n._zod.check=t=>{e.pattern.lastIndex=0,!e.pattern.test(t.value)&&t.issues.push({origin:"string",code:"invalid_format",format:"regex",input:t.value,pattern:e.pattern.toString(),inst:n,continue:!e.abort})}}),ny=X("$ZodCheckLowerCase",(n,e)=>{e.pattern??(e.pattern=Yx),no.init(n,e)}),iy=X("$ZodCheckUpperCase",(n,e)=>{e.pattern??(e.pattern=qx),no.init(n,e)}),ry=X("$ZodCheckIncludes",(n,e)=>{Gt.init(n,e);const t=qi(e.includes),i=new RegExp(typeof e.position=="number"?`^.{${e.position}}${t}`:t);e.pattern=i,n._zod.onattach.push(r=>{const s=r._zod.bag;s.patterns??(s.patterns=new Set),s.patterns.add(i)}),n._zod.check=r=>{r.value.includes(e.includes,e.position)||r.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:e.includes,input:r.value,inst:n,continue:!e.abort})}}),sy=X("$ZodCheckStartsWith",(n,e)=>{Gt.init(n,e);const t=new RegExp(`^${qi(e.prefix)}.*`);e.pattern??(e.pattern=t),n._zod.onattach.push(i=>{const r=i._zod.bag;r.patterns??(r.patterns=new Set),r.patterns.add(t)}),n._zod.check=i=>{i.value.startsWith(e.prefix)||i.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:e.prefix,input:i.value,inst:n,continue:!e.abort})}}),oy=X("$ZodCheckEndsWith",(n,e)=>{Gt.init(n,e);const t=new RegExp(`.*${qi(e.suffix)}$`);e.pattern??(e.pattern=t),n._zod.onattach.push(i=>{const r=i._zod.bag;r.patterns??(r.patterns=new Set),r.patterns.add(t)}),n._zod.check=i=>{i.value.endsWith(e.suffix)||i.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:e.suffix,input:i.value,inst:n,continue:!e.abort})}}),ay=X("$ZodCheckOverwrite",(n,e)=>{Gt.init(n,e),n._zod.check=t=>{t.value=e.tx(t.value)}});class cy{constructor(e=[]){this.content=[],this.indent=0,this&&(this.args=e)}indented(e){this.indent+=1,e(this),this.indent-=1}write(e){if(typeof e=="function"){e(this,{execution:"sync"}),e(this,{execution:"async"});return}const i=e.split(`
`).filter(o=>o),r=Math.min(...i.map(o=>o.length-o.trimStart().length)),s=i.map(o=>o.slice(r)).map(o=>" ".repeat(this.indent*2)+o);for(const o of s)this.content.push(o)}compile(){const e=Function,t=this==null?void 0:this.args,r=[...((this==null?void 0:this.content)??[""]).map(s=>`  ${s}`)];return new e(...t,r.join(`
`))}}const ly={major:4,minor:4,patch:3},dt=X("$ZodType",(n,e)=>{var r;var t;n??(n={}),n._zod.def=e,n._zod.bag=n._zod.bag||{},n._zod.version=ly;const i=[...n._zod.def.checks??[]];n._zod.traits.has("$ZodCheck")&&i.unshift(n);for(const s of i)for(const o of s._zod.onattach)o(n);if(i.length===0)(t=n._zod).deferred??(t.deferred=[]),(r=n._zod.deferred)==null||r.push(()=>{n._zod.run=n._zod.parse});else{const s=(a,c,l)=>{let u=Ui(a),h;for(const d of c){if(d._zod.def.when){if(ux(a)||!d._zod.def.when(a))continue}else if(u)continue;const f=a.issues.length,g=d._zod.check(a);if(g instanceof Promise&&(l==null?void 0:l.async)===!1)throw new Hi;if(h||g instanceof Promise)h=(h??Promise.resolve()).then(async()=>{await g,a.issues.length!==f&&(u||(u=Ui(a,f)))});else{if(a.issues.length===f)continue;u||(u=Ui(a,f))}}return h?h.then(()=>a):a},o=(a,c,l)=>{if(Ui(a))return a.aborted=!0,a;const u=s(c,i,l);if(u instanceof Promise){if(l.async===!1)throw new Hi;return u.then(h=>n._zod.parse(h,l))}return n._zod.parse(u,l)};n._zod.run=(a,c)=>{if(c.skipChecks)return n._zod.parse(a,c);if(c.direction==="backward"){const u=n._zod.parse({value:a.value,issues:[]},{...c,skipChecks:!0});return u instanceof Promise?u.then(h=>o(h,a,c)):o(u,a,c)}const l=n._zod.parse(a,c);if(l instanceof Promise){if(c.async===!1)throw new Hi;return l.then(u=>s(u,i,c))}return s(l,i,c)}}rt(n,"~standard",()=>({validate:s=>{var o;try{const a=fx(n,s);return a.success?{value:a.data}:{issues:(o=a.error)==null?void 0:o.issues}}catch{return px(n,s).then(c=>{var l;return c.success?{value:c.data}:{issues:(l=c.error)==null?void 0:l.issues}})}},vendor:"zod",version:1}))}),mc=X("$ZodString",(n,e)=>{var t;dt.init(n,e),n._zod.pattern=[...((t=n==null?void 0:n._zod.bag)==null?void 0:t.patterns)??[]].pop()??Wx(n._zod.bag),n._zod.parse=(i,r)=>{if(e.coerce)try{i.value=String(i.value)}catch{}return typeof i.value=="string"||i.issues.push({expected:"string",code:"invalid_type",input:i.value,inst:n}),i}}),ft=X("$ZodStringFormat",(n,e)=>{no.init(n,e),mc.init(n,e)}),uy=X("$ZodGUID",(n,e)=>{e.pattern??(e.pattern=Ix),ft.init(n,e)}),hy=X("$ZodUUID",(n,e)=>{if(e.version){const i={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[e.version];if(i===void 0)throw new Error(`Invalid UUID version: "${e.version}"`);e.pattern??(e.pattern=$l(i))}else e.pattern??(e.pattern=$l());ft.init(n,e)}),dy=X("$ZodEmail",(n,e)=>{e.pattern??(e.pattern=Px),ft.init(n,e)}),fy=X("$ZodURL",(n,e)=>{ft.init(n,e),n._zod.check=t=>{var i;try{const r=t.value.trim();if(!e.normalize&&((i=e.protocol)==null?void 0:i.source)===kx.source&&!/^https?:\/\//i.test(r)){t.issues.push({code:"invalid_format",format:"url",note:"Invalid URL format",input:t.value,inst:n,continue:!e.abort});return}const s=new URL(r);e.hostname&&(e.hostname.lastIndex=0,e.hostname.test(s.hostname)||t.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:e.hostname.source,input:t.value,inst:n,continue:!e.abort})),e.protocol&&(e.protocol.lastIndex=0,e.protocol.test(s.protocol.endsWith(":")?s.protocol.slice(0,-1):s.protocol)||t.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:e.protocol.source,input:t.value,inst:n,continue:!e.abort})),e.normalize?t.value=s.href:t.value=r;return}catch{t.issues.push({code:"invalid_format",format:"url",input:t.value,inst:n,continue:!e.abort})}}}),py=X("$ZodEmoji",(n,e)=>{e.pattern??(e.pattern=Dx()),ft.init(n,e)}),my=X("$ZodNanoID",(n,e)=>{e.pattern??(e.pattern=Ax),ft.init(n,e)}),gy=X("$ZodCUID",(n,e)=>{e.pattern??(e.pattern=bx),ft.init(n,e)}),vy=X("$ZodCUID2",(n,e)=>{e.pattern??(e.pattern=Ex),ft.init(n,e)}),_y=X("$ZodULID",(n,e)=>{e.pattern??(e.pattern=wx),ft.init(n,e)}),xy=X("$ZodXID",(n,e)=>{e.pattern??(e.pattern=Tx),ft.init(n,e)}),yy=X("$ZodKSUID",(n,e)=>{e.pattern??(e.pattern=Rx),ft.init(n,e)}),Sy=X("$ZodISODateTime",(n,e)=>{e.pattern??(e.pattern=Gx(e)),ft.init(n,e)}),My=X("$ZodISODate",(n,e)=>{e.pattern??(e.pattern=Vx),ft.init(n,e)}),by=X("$ZodISOTime",(n,e)=>{e.pattern??(e.pattern=Hx(e)),ft.init(n,e)}),Ey=X("$ZodISODuration",(n,e)=>{e.pattern??(e.pattern=Cx),ft.init(n,e)}),wy=X("$ZodIPv4",(n,e)=>{e.pattern??(e.pattern=Lx),ft.init(n,e),n._zod.bag.format="ipv4"}),Ty=X("$ZodIPv6",(n,e)=>{e.pattern??(e.pattern=Nx),ft.init(n,e),n._zod.bag.format="ipv6",n._zod.check=t=>{try{new URL(`http://[${t.value}]`)}catch{t.issues.push({code:"invalid_format",format:"ipv6",input:t.value,inst:n,continue:!e.abort})}}}),Ry=X("$ZodCIDRv4",(n,e)=>{e.pattern??(e.pattern=Ux),ft.init(n,e)}),Ay=X("$ZodCIDRv6",(n,e)=>{e.pattern??(e.pattern=Ox),ft.init(n,e),n._zod.check=t=>{const i=t.value.split("/");try{if(i.length!==2)throw new Error;const[r,s]=i;if(!s)throw new Error;const o=Number(s);if(`${o}`!==s)throw new Error;if(o<0||o>128)throw new Error;new URL(`http://[${r}]`)}catch{t.issues.push({code:"invalid_format",format:"cidrv6",input:t.value,inst:n,continue:!e.abort})}}});function qh(n){if(n==="")return!0;if(/\s/.test(n)||n.length%4!==0)return!1;try{return atob(n),!0}catch{return!1}}const Cy=X("$ZodBase64",(n,e)=>{e.pattern??(e.pattern=zx),ft.init(n,e),n._zod.bag.contentEncoding="base64",n._zod.check=t=>{qh(t.value)||t.issues.push({code:"invalid_format",format:"base64",input:t.value,inst:n,continue:!e.abort})}});function Iy(n){if(!Gh.test(n))return!1;const e=n.replace(/[-_]/g,i=>i==="-"?"+":"/"),t=e.padEnd(Math.ceil(e.length/4)*4,"=");return qh(t)}const Py=X("$ZodBase64URL",(n,e)=>{e.pattern??(e.pattern=Gh),ft.init(n,e),n._zod.bag.contentEncoding="base64url",n._zod.check=t=>{Iy(t.value)||t.issues.push({code:"invalid_format",format:"base64url",input:t.value,inst:n,continue:!e.abort})}}),Fy=X("$ZodE164",(n,e)=>{e.pattern??(e.pattern=Bx),ft.init(n,e)});function Dy(n,e=null){try{const t=n.split(".");if(t.length!==3)return!1;const[i]=t;if(!i)return!1;const r=JSON.parse(atob(i));return!("typ"in r&&(r==null?void 0:r.typ)!=="JWT"||!r.alg||e&&(!("alg"in r)||r.alg!==e))}catch{return!1}}const Ly=X("$ZodJWT",(n,e)=>{ft.init(n,e),n._zod.check=t=>{Dy(t.value,e.alg)||t.issues.push({code:"invalid_format",format:"jwt",input:t.value,inst:n,continue:!e.abort})}}),jh=X("$ZodNumber",(n,e)=>{dt.init(n,e),n._zod.pattern=n._zod.bag.pattern??Zx,n._zod.parse=(t,i)=>{if(e.coerce)try{t.value=Number(t.value)}catch{}const r=t.value;if(typeof r=="number"&&!Number.isNaN(r)&&Number.isFinite(r))return t;const s=typeof r=="number"?Number.isNaN(r)?"NaN":Number.isFinite(r)?void 0:"Infinity":void 0;return t.issues.push({expected:"number",code:"invalid_type",input:r,inst:n,...s?{received:s}:{}}),t}}),Ny=X("$ZodNumberFormat",(n,e)=>{Kx.init(n,e),jh.init(n,e)}),Uy=X("$ZodBoolean",(n,e)=>{dt.init(n,e),n._zod.pattern=$x,n._zod.parse=(t,i)=>{if(e.coerce)try{t.value=!!t.value}catch{}const r=t.value;return typeof r=="boolean"||t.issues.push({expected:"boolean",code:"invalid_type",input:r,inst:n}),t}}),Oy=X("$ZodUnknown",(n,e)=>{dt.init(n,e),n._zod.parse=t=>t}),zy=X("$ZodNever",(n,e)=>{dt.init(n,e),n._zod.parse=(t,i)=>(t.issues.push({expected:"never",code:"invalid_type",input:t.value,inst:n}),t)});function Yl(n,e,t){n.issues.length&&e.issues.push(...Qs(t,n.issues)),e.value[t]=n.value}const ky=X("$ZodArray",(n,e)=>{dt.init(n,e),n._zod.parse=(t,i)=>{const r=t.value;if(!Array.isArray(r))return t.issues.push({expected:"array",code:"invalid_type",input:r,inst:n}),t;t.value=Array(r.length);const s=[];for(let o=0;o<r.length;o++){const a=r[o],c=e.element._zod.run({value:a,issues:[]},i);c instanceof Promise?s.push(c.then(l=>Yl(l,t,o))):Yl(c,t,o)}return s.length?Promise.all(s).then(()=>t):t}});function Os(n,e,t,i,r,s){const o=t in i;if(n.issues.length){if(r&&s&&!o)return;e.issues.push(...Qs(t,n.issues))}if(!o&&!r){n.issues.length||e.issues.push({code:"invalid_type",expected:"nonoptional",input:void 0,path:[t]});return}n.value===void 0?o&&(e.value[t]=void 0):e.value[t]=n.value}function Kh(n){var i,r,s,o;const e=Object.keys(n.shape);for(const a of e)if(!((o=(s=(r=(i=n.shape)==null?void 0:i[a])==null?void 0:r._zod)==null?void 0:s.traits)!=null&&o.has("$ZodType")))throw new Error(`Invalid element at key "${a}": expected a Zod schema`);const t=tx(n.shape);return{...n,keys:e,keySet:new Set(e),numKeys:e.length,optionalKeys:new Set(t)}}function Jh(n,e,t,i,r,s){const o=[],a=r.keySet,c=r.catchall._zod,l=c.def.type,u=c.optin==="optional",h=c.optout==="optional";for(const d in e){if(d==="__proto__"||a.has(d))continue;if(l==="never"){o.push(d);continue}const f=c.run({value:e[d],issues:[]},i);f instanceof Promise?n.push(f.then(g=>Os(g,t,d,e,u,h))):Os(f,t,d,e,u,h)}return o.length&&t.issues.push({code:"unrecognized_keys",keys:o,input:e,inst:s}),n.length?Promise.all(n).then(()=>t):t}const By=X("$ZodObject",(n,e)=>{dt.init(n,e);const t=Object.getOwnPropertyDescriptor(e,"shape");if(!(t!=null&&t.get)){const a=e.shape;Object.defineProperty(e,"shape",{get:()=>{const c={...a};return Object.defineProperty(e,"shape",{value:c}),c}})}const i=Js(()=>Kh(e));rt(n._zod,"propValues",()=>{const a=e.shape,c={};for(const l in a){const u=a[l]._zod;if(u.values){c[l]??(c[l]=new Set);for(const h of u.values)c[l].add(h)}}return c});const r=Ar,s=e.catchall;let o;n._zod.parse=(a,c)=>{o??(o=i.value);const l=a.value;if(!r(l))return a.issues.push({expected:"object",code:"invalid_type",input:l,inst:n}),a;a.value={};const u=[],h=o.shape;for(const d of o.keys){const f=h[d],g=f._zod.optin==="optional",v=f._zod.optout==="optional",m=f._zod.run({value:l[d],issues:[]},c);m instanceof Promise?u.push(m.then(p=>Os(p,a,d,l,g,v))):Os(m,a,d,l,g,v)}return s?Jh(u,l,a,c,i.value,n):u.length?Promise.all(u).then(()=>a):a}}),Vy=X("$ZodObjectJIT",(n,e)=>{By.init(n,e);const t=n._zod.parse,i=Js(()=>Kh(e)),r=d=>{var M,x;const f=new cy(["shape","payload","ctx"]),g=i.value,v=N=>{const R=Zl(N);return`shape[${R}]._zod.run({ value: input[${R}], issues: [] }, ctx)`};f.write("const input = payload.value;");const m=Object.create(null);let p=0;for(const N of g.keys)m[N]=`key_${p++}`;f.write("const newResult = {};");for(const N of g.keys){const R=m[N],A=Zl(N),F=d[N],E=((M=F==null?void 0:F._zod)==null?void 0:M.optin)==="optional",S=((x=F==null?void 0:F._zod)==null?void 0:x.optout)==="optional";f.write(`const ${R} = ${v(N)};`),E&&S?f.write(`
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
        
      `):E?f.write(`
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

      `)}f.write("payload.value = newResult;"),f.write("return payload;");const w=f.compile();return(N,R)=>w(d,N,R)};let s;const o=Ar,a=!lc.jitless,l=a&&Q0.value,u=e.catchall;let h;n._zod.parse=(d,f)=>{h??(h=i.value);const g=d.value;return o(g)?a&&l&&(f==null?void 0:f.async)===!1&&f.jitless!==!0?(s||(s=r(e.shape)),d=s(d,f),u?Jh([],g,d,f,h,n):d):t(d,f):(d.issues.push({expected:"object",code:"invalid_type",input:g,inst:n}),d)}});function ql(n,e,t,i){for(const s of n)if(s.issues.length===0)return e.value=s.value,e;const r=n.filter(s=>!Ui(s));return r.length===1?(e.value=r[0].value,r[0]):(e.issues.push({code:"invalid_union",input:e.value,inst:t,errors:n.map(s=>s.issues.map(o=>ui(o,i,li())))}),e)}const Qh=X("$ZodUnion",(n,e)=>{dt.init(n,e),rt(n._zod,"optin",()=>e.options.some(i=>i._zod.optin==="optional")?"optional":void 0),rt(n._zod,"optout",()=>e.options.some(i=>i._zod.optout==="optional")?"optional":void 0),rt(n._zod,"values",()=>{if(e.options.every(i=>i._zod.values))return new Set(e.options.flatMap(i=>Array.from(i._zod.values)))}),rt(n._zod,"pattern",()=>{if(e.options.every(i=>i._zod.pattern)){const i=e.options.map(r=>r._zod.pattern);return new RegExp(`^(${i.map(r=>hc(r.source)).join("|")})$`)}});const t=e.options.length===1?e.options[0]._zod.run:null;n._zod.parse=(i,r)=>{if(t)return t(i,r);let s=!1;const o=[];for(const a of e.options){const c=a._zod.run({value:i.value,issues:[]},r);if(c instanceof Promise)o.push(c),s=!0;else{if(c.issues.length===0)return c;o.push(c)}}return s?Promise.all(o).then(a=>ql(a,i,n,r)):ql(o,i,n,r)}}),Hy=X("$ZodDiscriminatedUnion",(n,e)=>{e.inclusive=!1,Qh.init(n,e);const t=n._zod.parse;rt(n._zod,"propValues",()=>{const r={};for(const s of e.options){const o=s._zod.propValues;if(!o||Object.keys(o).length===0)throw new Error(`Invalid discriminated union option at index "${e.options.indexOf(s)}"`);for(const[a,c]of Object.entries(o)){r[a]||(r[a]=new Set);for(const l of c)r[a].add(l)}}return r});const i=Js(()=>{var o;const r=e.options,s=new Map;for(const a of r){const c=(o=a._zod.propValues)==null?void 0:o[e.discriminator];if(!c||c.size===0)throw new Error(`Invalid discriminated union option at index "${e.options.indexOf(a)}"`);for(const l of c){if(s.has(l))throw new Error(`Duplicate discriminator value "${String(l)}"`);s.set(l,a)}}return s});n._zod.parse=(r,s)=>{const o=r.value;if(!Ar(o))return r.issues.push({code:"invalid_type",expected:"object",input:o,inst:n}),r;const a=i.value.get(o==null?void 0:o[e.discriminator]);return a?a._zod.run(r,s):e.unionFallback||s.direction==="backward"?t(r,s):(r.issues.push({code:"invalid_union",errors:[],note:"No matching discriminator",discriminator:e.discriminator,options:Array.from(i.value.keys()),input:o,path:[e.discriminator],inst:n}),r)}}),Gy=X("$ZodIntersection",(n,e)=>{dt.init(n,e),n._zod.parse=(t,i)=>{const r=t.value,s=e.left._zod.run({value:r,issues:[]},i),o=e.right._zod.run({value:r,issues:[]},i);return s instanceof Promise||o instanceof Promise?Promise.all([s,o]).then(([c,l])=>jl(t,c,l)):jl(t,s,o)}});function Ga(n,e){if(n===e)return{valid:!0,data:n};if(n instanceof Date&&e instanceof Date&&+n==+e)return{valid:!0,data:n};if(Cr(n)&&Cr(e)){const t=Object.keys(e),i=Object.keys(n).filter(s=>t.indexOf(s)!==-1),r={...n,...e};for(const s of i){const o=Ga(n[s],e[s]);if(!o.valid)return{valid:!1,mergeErrorPath:[s,...o.mergeErrorPath]};r[s]=o.data}return{valid:!0,data:r}}if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return{valid:!1,mergeErrorPath:[]};const t=[];for(let i=0;i<n.length;i++){const r=n[i],s=e[i],o=Ga(r,s);if(!o.valid)return{valid:!1,mergeErrorPath:[i,...o.mergeErrorPath]};t.push(o.data)}return{valid:!0,data:t}}return{valid:!1,mergeErrorPath:[]}}function jl(n,e,t){const i=new Map;let r;for(const a of e.issues)if(a.code==="unrecognized_keys"){r??(r=a);for(const c of a.keys)i.has(c)||i.set(c,{}),i.get(c).l=!0}else n.issues.push(a);for(const a of t.issues)if(a.code==="unrecognized_keys")for(const c of a.keys)i.has(c)||i.set(c,{}),i.get(c).r=!0;else n.issues.push(a);const s=[...i].filter(([,a])=>a.l&&a.r).map(([a])=>a);if(s.length&&r&&n.issues.push({...r,keys:s}),Ui(n))return n;const o=Ga(e.value,t.value);if(!o.valid)throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(o.mergeErrorPath)}`);return n.value=o.data,n}const Wy=X("$ZodTuple",(n,e)=>{dt.init(n,e);const t=e.items;n._zod.parse=(i,r)=>{const s=i.value;if(!Array.isArray(s))return i.issues.push({input:s,inst:n,expected:"tuple",code:"invalid_type"}),i;i.value=[];const o=[],a=Kl(t,"optin"),c=Kl(t,"optout");if(!e.rest){if(s.length<a)return i.issues.push({code:"too_small",minimum:a,inclusive:!0,input:s,inst:n,origin:"array"}),i;s.length>t.length&&i.issues.push({code:"too_big",maximum:t.length,inclusive:!0,input:s,inst:n,origin:"array"})}const l=new Array(t.length);for(let u=0;u<t.length;u++){const h=t[u]._zod.run({value:s[u],issues:[]},r);h instanceof Promise?o.push(h.then(d=>{l[u]=d})):l[u]=h}if(e.rest){let u=t.length-1;const h=s.slice(t.length);for(const d of h){u++;const f=e.rest._zod.run({value:d,issues:[]},r);f instanceof Promise?o.push(f.then(g=>Jl(g,i,u))):Jl(f,i,u)}}return o.length?Promise.all(o).then(()=>Ql(l,i,t,s,c)):Ql(l,i,t,s,c)}});function Kl(n,e){for(let t=n.length-1;t>=0;t--)if(n[t]._zod[e]!=="optional")return t+1;return 0}function Jl(n,e,t){n.issues.length&&e.issues.push(...Qs(t,n.issues)),e.value[t]=n.value}function Ql(n,e,t,i,r){for(let s=0;s<t.length;s++){const o=n[s],a=s<i.length;if(o.issues.length){if(!a&&s>=r){e.value.length=s;break}e.issues.push(...Qs(s,o.issues))}e.value[s]=o.value}for(let s=e.value.length-1;s>=i.length&&(t[s]._zod.optout==="optional"&&e.value[s]===void 0);s--)e.value.length=s;return e}const Xy=X("$ZodEnum",(n,e)=>{dt.init(n,e);const t=Oh(e.entries),i=new Set(t);n._zod.values=i,n._zod.pattern=new RegExp(`^(${t.filter(r=>ex.has(typeof r)).map(r=>typeof r=="string"?qi(r):r.toString()).join("|")})$`),n._zod.parse=(r,s)=>{const o=r.value;return i.has(o)||r.issues.push({code:"invalid_value",values:t,input:o,inst:n}),r}}),Zy=X("$ZodLiteral",(n,e)=>{if(dt.init(n,e),e.values.length===0)throw new Error("Cannot create literal schema with no valid values");const t=new Set(e.values);n._zod.values=t,n._zod.pattern=new RegExp(`^(${e.values.map(i=>typeof i=="string"?qi(i):i?qi(i.toString()):String(i)).join("|")})$`),n._zod.parse=(i,r)=>{const s=i.value;return t.has(s)||i.issues.push({code:"invalid_value",values:e.values,input:s,inst:n}),i}}),$y=X("$ZodTransform",(n,e)=>{dt.init(n,e),n._zod.optin="optional",n._zod.parse=(t,i)=>{if(i.direction==="backward")throw new Uh(n.constructor.name);const r=e.transform(t.value,t);if(i.async)return(r instanceof Promise?r:Promise.resolve(r)).then(o=>(t.value=o,t.fallback=!0,t));if(r instanceof Promise)throw new Hi;return t.value=r,t.fallback=!0,t}});function eu(n,e){return e===void 0&&(n.issues.length||n.fallback)?{issues:[],value:void 0}:n}const ed=X("$ZodOptional",(n,e)=>{dt.init(n,e),n._zod.optin="optional",n._zod.optout="optional",rt(n._zod,"values",()=>e.innerType._zod.values?new Set([...e.innerType._zod.values,void 0]):void 0),rt(n._zod,"pattern",()=>{const t=e.innerType._zod.pattern;return t?new RegExp(`^(${hc(t.source)})?$`):void 0}),n._zod.parse=(t,i)=>{if(e.innerType._zod.optin==="optional"){const r=t.value,s=e.innerType._zod.run(t,i);return s instanceof Promise?s.then(o=>eu(o,r)):eu(s,r)}return t.value===void 0?t:e.innerType._zod.run(t,i)}}),Yy=X("$ZodExactOptional",(n,e)=>{ed.init(n,e),rt(n._zod,"values",()=>e.innerType._zod.values),rt(n._zod,"pattern",()=>e.innerType._zod.pattern),n._zod.parse=(t,i)=>e.innerType._zod.run(t,i)}),qy=X("$ZodNullable",(n,e)=>{dt.init(n,e),rt(n._zod,"optin",()=>e.innerType._zod.optin),rt(n._zod,"optout",()=>e.innerType._zod.optout),rt(n._zod,"pattern",()=>{const t=e.innerType._zod.pattern;return t?new RegExp(`^(${hc(t.source)}|null)$`):void 0}),rt(n._zod,"values",()=>e.innerType._zod.values?new Set([...e.innerType._zod.values,null]):void 0),n._zod.parse=(t,i)=>t.value===null?t:e.innerType._zod.run(t,i)}),jy=X("$ZodDefault",(n,e)=>{dt.init(n,e),n._zod.optin="optional",rt(n._zod,"values",()=>e.innerType._zod.values),n._zod.parse=(t,i)=>{if(i.direction==="backward")return e.innerType._zod.run(t,i);if(t.value===void 0)return t.value=e.defaultValue,t;const r=e.innerType._zod.run(t,i);return r instanceof Promise?r.then(s=>tu(s,e)):tu(r,e)}});function tu(n,e){return n.value===void 0&&(n.value=e.defaultValue),n}const Ky=X("$ZodPrefault",(n,e)=>{dt.init(n,e),n._zod.optin="optional",rt(n._zod,"values",()=>e.innerType._zod.values),n._zod.parse=(t,i)=>(i.direction==="backward"||t.value===void 0&&(t.value=e.defaultValue),e.innerType._zod.run(t,i))}),Jy=X("$ZodNonOptional",(n,e)=>{dt.init(n,e),rt(n._zod,"values",()=>{const t=e.innerType._zod.values;return t?new Set([...t].filter(i=>i!==void 0)):void 0}),n._zod.parse=(t,i)=>{const r=e.innerType._zod.run(t,i);return r instanceof Promise?r.then(s=>nu(s,n)):nu(r,n)}});function nu(n,e){return!n.issues.length&&n.value===void 0&&n.issues.push({code:"invalid_type",expected:"nonoptional",input:n.value,inst:e}),n}const Qy=X("$ZodCatch",(n,e)=>{dt.init(n,e),n._zod.optin="optional",rt(n._zod,"optout",()=>e.innerType._zod.optout),rt(n._zod,"values",()=>e.innerType._zod.values),n._zod.parse=(t,i)=>{if(i.direction==="backward")return e.innerType._zod.run(t,i);const r=e.innerType._zod.run(t,i);return r instanceof Promise?r.then(s=>(t.value=s.value,s.issues.length&&(t.value=e.catchValue({...t,error:{issues:s.issues.map(o=>ui(o,i,li()))},input:t.value}),t.issues=[],t.fallback=!0),t)):(t.value=r.value,r.issues.length&&(t.value=e.catchValue({...t,error:{issues:r.issues.map(s=>ui(s,i,li()))},input:t.value}),t.issues=[],t.fallback=!0),t)}}),eS=X("$ZodPipe",(n,e)=>{dt.init(n,e),rt(n._zod,"values",()=>e.in._zod.values),rt(n._zod,"optin",()=>e.in._zod.optin),rt(n._zod,"optout",()=>e.out._zod.optout),rt(n._zod,"propValues",()=>e.in._zod.propValues),n._zod.parse=(t,i)=>{if(i.direction==="backward"){const s=e.out._zod.run(t,i);return s instanceof Promise?s.then(o=>vs(o,e.in,i)):vs(s,e.in,i)}const r=e.in._zod.run(t,i);return r instanceof Promise?r.then(s=>vs(s,e.out,i)):vs(r,e.out,i)}});function vs(n,e,t){return n.issues.length?(n.aborted=!0,n):e._zod.run({value:n.value,issues:n.issues,fallback:n.fallback},t)}const tS=X("$ZodReadonly",(n,e)=>{dt.init(n,e),rt(n._zod,"propValues",()=>e.innerType._zod.propValues),rt(n._zod,"values",()=>e.innerType._zod.values),rt(n._zod,"optin",()=>{var t,i;return(i=(t=e.innerType)==null?void 0:t._zod)==null?void 0:i.optin}),rt(n._zod,"optout",()=>{var t,i;return(i=(t=e.innerType)==null?void 0:t._zod)==null?void 0:i.optout}),n._zod.parse=(t,i)=>{if(i.direction==="backward")return e.innerType._zod.run(t,i);const r=e.innerType._zod.run(t,i);return r instanceof Promise?r.then(iu):iu(r)}});function iu(n){return n.value=Object.freeze(n.value),n}const nS=X("$ZodCustom",(n,e)=>{Gt.init(n,e),dt.init(n,e),n._zod.parse=(t,i)=>t,n._zod.check=t=>{const i=t.value,r=e.fn(i);if(r instanceof Promise)return r.then(s=>ru(s,t,i,n));ru(r,t,i,n)}});function ru(n,e,t,i){if(!n){const r={code:"custom",input:t,inst:i,path:[...i._zod.def.path??[]],continue:!i._zod.def.abort};i._zod.def.params&&(r.params=i._zod.def.params),e.issues.push(Ir(r))}}var su;class iS{constructor(){this._map=new WeakMap,this._idmap=new Map}add(e,...t){const i=t[0];return this._map.set(e,i),i&&typeof i=="object"&&"id"in i&&this._idmap.set(i.id,e),this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(e){const t=this._map.get(e);return t&&typeof t=="object"&&"id"in t&&this._idmap.delete(t.id),this._map.delete(e),this}get(e){const t=e._zod.parent;if(t){const i={...this.get(t)??{}};delete i.id;const r={...i,...this._map.get(e)};return Object.keys(r).length?r:void 0}return this._map.get(e)}has(e){return this._map.has(e)}}function rS(){return new iS}(su=globalThis).__zod_globalRegistry??(su.__zod_globalRegistry=rS());const gr=globalThis.__zod_globalRegistry;function sS(n,e){return new n({type:"string",...Pe(e)})}function oS(n,e){return new n({type:"string",format:"email",check:"string_format",abort:!1,...Pe(e)})}function ou(n,e){return new n({type:"string",format:"guid",check:"string_format",abort:!1,...Pe(e)})}function aS(n,e){return new n({type:"string",format:"uuid",check:"string_format",abort:!1,...Pe(e)})}function cS(n,e){return new n({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",...Pe(e)})}function lS(n,e){return new n({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",...Pe(e)})}function uS(n,e){return new n({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",...Pe(e)})}function hS(n,e){return new n({type:"string",format:"url",check:"string_format",abort:!1,...Pe(e)})}function dS(n,e){return new n({type:"string",format:"emoji",check:"string_format",abort:!1,...Pe(e)})}function fS(n,e){return new n({type:"string",format:"nanoid",check:"string_format",abort:!1,...Pe(e)})}function pS(n,e){return new n({type:"string",format:"cuid",check:"string_format",abort:!1,...Pe(e)})}function mS(n,e){return new n({type:"string",format:"cuid2",check:"string_format",abort:!1,...Pe(e)})}function gS(n,e){return new n({type:"string",format:"ulid",check:"string_format",abort:!1,...Pe(e)})}function vS(n,e){return new n({type:"string",format:"xid",check:"string_format",abort:!1,...Pe(e)})}function _S(n,e){return new n({type:"string",format:"ksuid",check:"string_format",abort:!1,...Pe(e)})}function xS(n,e){return new n({type:"string",format:"ipv4",check:"string_format",abort:!1,...Pe(e)})}function yS(n,e){return new n({type:"string",format:"ipv6",check:"string_format",abort:!1,...Pe(e)})}function SS(n,e){return new n({type:"string",format:"cidrv4",check:"string_format",abort:!1,...Pe(e)})}function MS(n,e){return new n({type:"string",format:"cidrv6",check:"string_format",abort:!1,...Pe(e)})}function bS(n,e){return new n({type:"string",format:"base64",check:"string_format",abort:!1,...Pe(e)})}function ES(n,e){return new n({type:"string",format:"base64url",check:"string_format",abort:!1,...Pe(e)})}function wS(n,e){return new n({type:"string",format:"e164",check:"string_format",abort:!1,...Pe(e)})}function TS(n,e){return new n({type:"string",format:"jwt",check:"string_format",abort:!1,...Pe(e)})}function RS(n,e){return new n({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,...Pe(e)})}function AS(n,e){return new n({type:"string",format:"date",check:"string_format",...Pe(e)})}function CS(n,e){return new n({type:"string",format:"time",check:"string_format",precision:null,...Pe(e)})}function IS(n,e){return new n({type:"string",format:"duration",check:"string_format",...Pe(e)})}function PS(n,e){return new n({type:"number",checks:[],...Pe(e)})}function FS(n,e){return new n({type:"number",check:"number_format",abort:!1,format:"safeint",...Pe(e)})}function DS(n,e){return new n({type:"boolean",...Pe(e)})}function LS(n){return new n({type:"unknown"})}function NS(n,e){return new n({type:"never",...Pe(e)})}function au(n,e){return new $h({check:"less_than",...Pe(e),value:n,inclusive:!1})}function ko(n,e){return new $h({check:"less_than",...Pe(e),value:n,inclusive:!0})}function cu(n,e){return new Yh({check:"greater_than",...Pe(e),value:n,inclusive:!1})}function Bo(n,e){return new Yh({check:"greater_than",...Pe(e),value:n,inclusive:!0})}function lu(n,e){return new jx({check:"multiple_of",...Pe(e),value:n})}function td(n,e){return new Jx({check:"max_length",...Pe(e),maximum:n})}function zs(n,e){return new Qx({check:"min_length",...Pe(e),minimum:n})}function nd(n,e){return new ey({check:"length_equals",...Pe(e),length:n})}function US(n,e){return new ty({check:"string_format",format:"regex",...Pe(e),pattern:n})}function OS(n){return new ny({check:"string_format",format:"lowercase",...Pe(n)})}function zS(n){return new iy({check:"string_format",format:"uppercase",...Pe(n)})}function kS(n,e){return new ry({check:"string_format",format:"includes",...Pe(e),includes:n})}function BS(n,e){return new sy({check:"string_format",format:"starts_with",...Pe(e),prefix:n})}function VS(n,e){return new oy({check:"string_format",format:"ends_with",...Pe(e),suffix:n})}function tr(n){return new ay({check:"overwrite",tx:n})}function HS(n){return tr(e=>e.normalize(n))}function GS(){return tr(n=>n.trim())}function WS(){return tr(n=>n.toLowerCase())}function XS(){return tr(n=>n.toUpperCase())}function ZS(){return tr(n=>J0(n))}function $S(n,e,t){return new n({type:"array",element:e,...Pe(t)})}function YS(n,e,t){return new n({type:"custom",check:"custom",fn:e,...Pe(t)})}function qS(n,e){const t=jS(i=>(i.addIssue=r=>{if(typeof r=="string")i.issues.push(Ir(r,i.value,t._zod.def));else{const s=r;s.fatal&&(s.continue=!1),s.code??(s.code="custom"),s.input??(s.input=i.value),s.inst??(s.inst=t),s.continue??(s.continue=!t._zod.def.abort),i.issues.push(Ir(s))}},n(i.value,i)),e);return t}function jS(n,e){const t=new Gt({check:"custom",...Pe(e)});return t._zod.check=n,t}function ks(n){let e=(n==null?void 0:n.target)??"draft-2020-12";return e==="draft-4"&&(e="draft-04"),e==="draft-7"&&(e="draft-07"),{processors:n.processors??{},metadataRegistry:(n==null?void 0:n.metadata)??gr,target:e,unrepresentable:(n==null?void 0:n.unrepresentable)??"throw",override:(n==null?void 0:n.override)??(()=>{}),io:(n==null?void 0:n.io)??"output",counter:0,seen:new Map,cycles:(n==null?void 0:n.cycles)??"ref",reused:(n==null?void 0:n.reused)??"inline",external:(n==null?void 0:n.external)??void 0}}function ct(n,e,t={path:[],schemaPath:[]}){var u,h;var i;const r=n._zod.def,s=e.seen.get(n);if(s)return s.count++,t.schemaPath.includes(n)&&(s.cycle=t.path),s.schema;const o={schema:{},count:1,cycle:void 0,path:t.path};e.seen.set(n,o);const a=(h=(u=n._zod).toJSONSchema)==null?void 0:h.call(u);if(a)o.schema=a;else{const d={...t,schemaPath:[...t.schemaPath,n],path:t.path};if(n._zod.processJSONSchema)n._zod.processJSONSchema(e,o.schema,d);else{const g=o.schema,v=e.processors[r.type];if(!v)throw new Error(`[toJSONSchema]: Non-representable type encountered: ${r.type}`);v(n,e,g,d)}const f=n._zod.parent;f&&(o.ref||(o.ref=f),ct(f,e,d),e.seen.get(f).isParent=!0)}const c=e.metadataRegistry.get(n);return c&&Object.assign(o.schema,c),e.io==="input"&&Lt(n)&&(delete o.schema.examples,delete o.schema.default),e.io==="input"&&"_prefault"in o.schema&&((i=o.schema).default??(i.default=o.schema._prefault)),delete o.schema._prefault,e.seen.get(n).schema}function Bs(n,e){var o,a,c,l;const t=n.seen.get(e);if(!t)throw new Error("Unprocessed schema. This is a bug in Zod.");const i=new Map;for(const u of n.seen.entries()){const h=(o=n.metadataRegistry.get(u[0]))==null?void 0:o.id;if(h){const d=i.get(h);if(d&&d!==u[0])throw new Error(`Duplicate schema id "${h}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);i.set(h,u[0])}}const r=u=>{var v;const h=n.target==="draft-2020-12"?"$defs":"definitions";if(n.external){const m=(v=n.external.registry.get(u[0]))==null?void 0:v.id,p=n.external.uri??(M=>M);if(m)return{ref:p(m)};const w=u[1].defId??u[1].schema.id??`schema${n.counter++}`;return u[1].defId=w,{defId:w,ref:`${p("__shared")}#/${h}/${w}`}}if(u[1]===t)return{ref:"#"};const f=`#/${h}/`,g=u[1].schema.id??`__schema${n.counter++}`;return{defId:g,ref:f+g}},s=u=>{if(u[1].schema.$ref)return;const h=u[1],{ref:d,defId:f}=r(u);h.def={...h.schema},f&&(h.defId=f);const g=h.schema;for(const v in g)delete g[v];g.$ref=d};if(n.cycles==="throw")for(const u of n.seen.entries()){const h=u[1];if(h.cycle)throw new Error(`Cycle detected: #/${(a=h.cycle)==null?void 0:a.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(const u of n.seen.entries()){const h=u[1];if(e===u[0]){s(u);continue}if(n.external){const f=(c=n.external.registry.get(u[0]))==null?void 0:c.id;if(e!==u[0]&&f){s(u);continue}}if((l=n.metadataRegistry.get(u[0]))==null?void 0:l.id){s(u);continue}if(h.cycle){s(u);continue}if(h.count>1&&n.reused==="ref"){s(u);continue}}}function Vs(n,e){var a,c,l,u;const t=n.seen.get(e);if(!t)throw new Error("Unprocessed schema. This is a bug in Zod.");const i=h=>{const d=n.seen.get(h);if(d.ref===null)return;const f=d.def??d.schema,g={...f},v=d.ref;if(d.ref=null,v){i(v);const p=n.seen.get(v),w=p.schema;if(w.$ref&&(n.target==="draft-07"||n.target==="draft-04"||n.target==="openapi-3.0")?(f.allOf=f.allOf??[],f.allOf.push(w)):Object.assign(f,w),Object.assign(f,g),h._zod.parent===v)for(const x in f)x==="$ref"||x==="allOf"||x in g||delete f[x];if(w.$ref&&p.def)for(const x in f)x==="$ref"||x==="allOf"||x in p.def&&JSON.stringify(f[x])===JSON.stringify(p.def[x])&&delete f[x]}const m=h._zod.parent;if(m&&m!==v){i(m);const p=n.seen.get(m);if(p!=null&&p.schema.$ref&&(f.$ref=p.schema.$ref,p.def))for(const w in f)w==="$ref"||w==="allOf"||w in p.def&&JSON.stringify(f[w])===JSON.stringify(p.def[w])&&delete f[w]}n.override({zodSchema:h,jsonSchema:f,path:d.path??[]})};for(const h of[...n.seen.entries()].reverse())i(h[0]);const r={};if(n.target==="draft-2020-12"?r.$schema="https://json-schema.org/draft/2020-12/schema":n.target==="draft-07"?r.$schema="http://json-schema.org/draft-07/schema#":n.target==="draft-04"?r.$schema="http://json-schema.org/draft-04/schema#":n.target,(a=n.external)!=null&&a.uri){const h=(c=n.external.registry.get(e))==null?void 0:c.id;if(!h)throw new Error("Schema is missing an `id` property");r.$id=n.external.uri(h)}Object.assign(r,t.def??t.schema);const s=(l=n.metadataRegistry.get(e))==null?void 0:l.id;s!==void 0&&r.id===s&&delete r.id;const o=((u=n.external)==null?void 0:u.defs)??{};for(const h of n.seen.entries()){const d=h[1];d.def&&d.defId&&(d.def.id===d.defId&&delete d.def.id,o[d.defId]=d.def)}n.external||Object.keys(o).length>0&&(n.target==="draft-2020-12"?r.$defs=o:r.definitions=o);try{const h=JSON.parse(JSON.stringify(r));return Object.defineProperty(h,"~standard",{value:{...e["~standard"],jsonSchema:{input:Hs(e,"input",n.processors),output:Hs(e,"output",n.processors)}},enumerable:!1,writable:!1}),h}catch{throw new Error("Error converting schema to JSON.")}}function Lt(n,e){const t=e??{seen:new Set};if(t.seen.has(n))return!1;t.seen.add(n);const i=n._zod.def;if(i.type==="transform")return!0;if(i.type==="array")return Lt(i.element,t);if(i.type==="set")return Lt(i.valueType,t);if(i.type==="lazy")return Lt(i.getter(),t);if(i.type==="promise"||i.type==="optional"||i.type==="nonoptional"||i.type==="nullable"||i.type==="readonly"||i.type==="default"||i.type==="prefault")return Lt(i.innerType,t);if(i.type==="intersection")return Lt(i.left,t)||Lt(i.right,t);if(i.type==="record"||i.type==="map")return Lt(i.keyType,t)||Lt(i.valueType,t);if(i.type==="pipe")return n._zod.traits.has("$ZodCodec")?!0:Lt(i.in,t)||Lt(i.out,t);if(i.type==="object"){for(const r in i.shape)if(Lt(i.shape[r],t))return!0;return!1}if(i.type==="union"){for(const r of i.options)if(Lt(r,t))return!0;return!1}if(i.type==="tuple"){for(const r of i.items)if(Lt(r,t))return!0;return!!(i.rest&&Lt(i.rest,t))}return!1}const KS=(n,e={})=>t=>{const i=ks({...t,processors:e});return ct(n,i),Bs(i,n),Vs(i,n)},Hs=(n,e,t={})=>i=>{const{libraryOptions:r,target:s}=i??{},o=ks({...r??{},target:s,io:e,processors:t});return ct(n,o),Bs(o,n),Vs(o,n)},JS={guid:"uuid",url:"uri",datetime:"date-time",json_string:"json-string",regex:""},id=(n,e,t,i)=>{const r=t;r.type="string";const{minimum:s,maximum:o,format:a,patterns:c,contentEncoding:l}=n._zod.bag;if(typeof s=="number"&&(r.minLength=s),typeof o=="number"&&(r.maxLength=o),a&&(r.format=JS[a]??a,r.format===""&&delete r.format,a==="time"&&delete r.format),l&&(r.contentEncoding=l),c&&c.size>0){const u=[...c];u.length===1?r.pattern=u[0].source:u.length>1&&(r.allOf=[...u.map(h=>({...e.target==="draft-07"||e.target==="draft-04"||e.target==="openapi-3.0"?{type:"string"}:{},pattern:h.source}))])}},rd=(n,e,t,i)=>{const r=t,{minimum:s,maximum:o,format:a,multipleOf:c,exclusiveMaximum:l,exclusiveMinimum:u}=n._zod.bag;typeof a=="string"&&a.includes("int")?r.type="integer":r.type="number";const h=typeof u=="number"&&u>=(s??Number.NEGATIVE_INFINITY),d=typeof l=="number"&&l<=(o??Number.POSITIVE_INFINITY),f=e.target==="draft-04"||e.target==="openapi-3.0";h?f?(r.minimum=u,r.exclusiveMinimum=!0):r.exclusiveMinimum=u:typeof s=="number"&&(r.minimum=s),d?f?(r.maximum=l,r.exclusiveMaximum=!0):r.exclusiveMaximum=l:typeof o=="number"&&(r.maximum=o),typeof c=="number"&&(r.multipleOf=c)},sd=(n,e,t,i)=>{t.type="boolean"},QS=(n,e,t,i)=>{if(e.unrepresentable==="throw")throw new Error("BigInt cannot be represented in JSON Schema")},eM=(n,e,t,i)=>{if(e.unrepresentable==="throw")throw new Error("Symbols cannot be represented in JSON Schema")},tM=(n,e,t,i)=>{e.target==="openapi-3.0"?(t.type="string",t.nullable=!0,t.enum=[null]):t.type="null"},nM=(n,e,t,i)=>{if(e.unrepresentable==="throw")throw new Error("Undefined cannot be represented in JSON Schema")},iM=(n,e,t,i)=>{if(e.unrepresentable==="throw")throw new Error("Void cannot be represented in JSON Schema")},od=(n,e,t,i)=>{t.not={}},rM=(n,e,t,i)=>{},ad=(n,e,t,i)=>{},sM=(n,e,t,i)=>{if(e.unrepresentable==="throw")throw new Error("Date cannot be represented in JSON Schema")},cd=(n,e,t,i)=>{const r=n._zod.def,s=Oh(r.entries);s.every(o=>typeof o=="number")&&(t.type="number"),s.every(o=>typeof o=="string")&&(t.type="string"),t.enum=s},ld=(n,e,t,i)=>{const r=n._zod.def,s=[];for(const o of r.values)if(o===void 0){if(e.unrepresentable==="throw")throw new Error("Literal `undefined` cannot be represented in JSON Schema")}else if(typeof o=="bigint"){if(e.unrepresentable==="throw")throw new Error("BigInt literals cannot be represented in JSON Schema");s.push(Number(o))}else s.push(o);if(s.length!==0)if(s.length===1){const o=s[0];t.type=o===null?"null":typeof o,e.target==="draft-04"||e.target==="openapi-3.0"?t.enum=[o]:t.const=o}else s.every(o=>typeof o=="number")&&(t.type="number"),s.every(o=>typeof o=="string")&&(t.type="string"),s.every(o=>typeof o=="boolean")&&(t.type="boolean"),s.every(o=>o===null)&&(t.type="null"),t.enum=s},oM=(n,e,t,i)=>{if(e.unrepresentable==="throw")throw new Error("NaN cannot be represented in JSON Schema")},aM=(n,e,t,i)=>{const r=t,s=n._zod.pattern;if(!s)throw new Error("Pattern not found in template literal");r.type="string",r.pattern=s.source},cM=(n,e,t,i)=>{const r=t,s={type:"string",format:"binary",contentEncoding:"binary"},{minimum:o,maximum:a,mime:c}=n._zod.bag;o!==void 0&&(s.minLength=o),a!==void 0&&(s.maxLength=a),c?c.length===1?(s.contentMediaType=c[0],Object.assign(r,s)):(Object.assign(r,s),r.anyOf=c.map(l=>({contentMediaType:l}))):Object.assign(r,s)},lM=(n,e,t,i)=>{t.type="boolean"},ud=(n,e,t,i)=>{if(e.unrepresentable==="throw")throw new Error("Custom types cannot be represented in JSON Schema")},uM=(n,e,t,i)=>{if(e.unrepresentable==="throw")throw new Error("Function types cannot be represented in JSON Schema")},hd=(n,e,t,i)=>{if(e.unrepresentable==="throw")throw new Error("Transforms cannot be represented in JSON Schema")},hM=(n,e,t,i)=>{if(e.unrepresentable==="throw")throw new Error("Map cannot be represented in JSON Schema")},dM=(n,e,t,i)=>{if(e.unrepresentable==="throw")throw new Error("Set cannot be represented in JSON Schema")},dd=(n,e,t,i)=>{const r=t,s=n._zod.def,{minimum:o,maximum:a}=n._zod.bag;typeof o=="number"&&(r.minItems=o),typeof a=="number"&&(r.maxItems=a),r.type="array",r.items=ct(s.element,e,{...i,path:[...i.path,"items"]})},fd=(n,e,t,i)=>{var l;const r=t,s=n._zod.def;r.type="object",r.properties={};const o=s.shape;for(const u in o)r.properties[u]=ct(o[u],e,{...i,path:[...i.path,"properties",u]});const a=new Set(Object.keys(o)),c=new Set([...a].filter(u=>{const h=s.shape[u]._zod;return e.io==="input"?h.optin===void 0:h.optout===void 0}));c.size>0&&(r.required=Array.from(c)),((l=s.catchall)==null?void 0:l._zod.def.type)==="never"?r.additionalProperties=!1:s.catchall?s.catchall&&(r.additionalProperties=ct(s.catchall,e,{...i,path:[...i.path,"additionalProperties"]})):e.io==="output"&&(r.additionalProperties=!1)},pd=(n,e,t,i)=>{const r=n._zod.def,s=r.inclusive===!1,o=r.options.map((a,c)=>ct(a,e,{...i,path:[...i.path,s?"oneOf":"anyOf",c]}));s?t.oneOf=o:t.anyOf=o},md=(n,e,t,i)=>{const r=n._zod.def,s=ct(r.left,e,{...i,path:[...i.path,"allOf",0]}),o=ct(r.right,e,{...i,path:[...i.path,"allOf",1]}),a=l=>"allOf"in l&&Object.keys(l).length===1,c=[...a(s)?s.allOf:[s],...a(o)?o.allOf:[o]];t.allOf=c},gd=(n,e,t,i)=>{const r=t,s=n._zod.def;r.type="array";const o=e.target==="draft-2020-12"?"prefixItems":"items",a=e.target==="draft-2020-12"||e.target==="openapi-3.0"?"items":"additionalItems",c=s.items.map((d,f)=>ct(d,e,{...i,path:[...i.path,o,f]})),l=s.rest?ct(s.rest,e,{...i,path:[...i.path,a,...e.target==="openapi-3.0"?[s.items.length]:[]]}):null;e.target==="draft-2020-12"?(r.prefixItems=c,l&&(r.items=l)):e.target==="openapi-3.0"?(r.items={anyOf:c},l&&r.items.anyOf.push(l),r.minItems=c.length,l||(r.maxItems=c.length)):(r.items=c,l&&(r.additionalItems=l));const{minimum:u,maximum:h}=n._zod.bag;typeof u=="number"&&(r.minItems=u),typeof h=="number"&&(r.maxItems=h)},fM=(n,e,t,i)=>{const r=t,s=n._zod.def;r.type="object";const o=s.keyType,a=o._zod.bag,c=a==null?void 0:a.patterns;if(s.mode==="loose"&&c&&c.size>0){const u=ct(s.valueType,e,{...i,path:[...i.path,"patternProperties","*"]});r.patternProperties={};for(const h of c)r.patternProperties[h.source]=u}else(e.target==="draft-07"||e.target==="draft-2020-12")&&(r.propertyNames=ct(s.keyType,e,{...i,path:[...i.path,"propertyNames"]})),r.additionalProperties=ct(s.valueType,e,{...i,path:[...i.path,"additionalProperties"]});const l=o._zod.values;if(l){const u=[...l].filter(h=>typeof h=="string"||typeof h=="number");u.length>0&&(r.required=u)}},vd=(n,e,t,i)=>{const r=n._zod.def,s=ct(r.innerType,e,i),o=e.seen.get(n);e.target==="openapi-3.0"?(o.ref=r.innerType,t.nullable=!0):t.anyOf=[s,{type:"null"}]},_d=(n,e,t,i)=>{const r=n._zod.def;ct(r.innerType,e,i);const s=e.seen.get(n);s.ref=r.innerType},xd=(n,e,t,i)=>{const r=n._zod.def;ct(r.innerType,e,i);const s=e.seen.get(n);s.ref=r.innerType,t.default=JSON.parse(JSON.stringify(r.defaultValue))},yd=(n,e,t,i)=>{const r=n._zod.def;ct(r.innerType,e,i);const s=e.seen.get(n);s.ref=r.innerType,e.io==="input"&&(t._prefault=JSON.parse(JSON.stringify(r.defaultValue)))},Sd=(n,e,t,i)=>{const r=n._zod.def;ct(r.innerType,e,i);const s=e.seen.get(n);s.ref=r.innerType;let o;try{o=r.catchValue(void 0)}catch{throw new Error("Dynamic catch values are not supported in JSON Schema")}t.default=o},Md=(n,e,t,i)=>{const r=n._zod.def,s=r.in._zod.traits.has("$ZodTransform"),o=e.io==="input"?s?r.out:r.in:r.out;ct(o,e,i);const a=e.seen.get(n);a.ref=o},bd=(n,e,t,i)=>{const r=n._zod.def;ct(r.innerType,e,i);const s=e.seen.get(n);s.ref=r.innerType,t.readOnly=!0},pM=(n,e,t,i)=>{const r=n._zod.def;ct(r.innerType,e,i);const s=e.seen.get(n);s.ref=r.innerType},gc=(n,e,t,i)=>{const r=n._zod.def;ct(r.innerType,e,i);const s=e.seen.get(n);s.ref=r.innerType},mM=(n,e,t,i)=>{const r=n._zod.innerType;ct(r,e,i);const s=e.seen.get(n);s.ref=r},uu={string:id,number:rd,boolean:sd,bigint:QS,symbol:eM,null:tM,undefined:nM,void:iM,never:od,any:rM,unknown:ad,date:sM,enum:cd,literal:ld,nan:oM,template_literal:aM,file:cM,success:lM,custom:ud,function:uM,transform:hd,map:hM,set:dM,array:dd,object:fd,union:pd,intersection:md,tuple:gd,record:fM,nullable:vd,nonoptional:_d,default:xd,prefault:yd,catch:Sd,pipe:Md,readonly:bd,promise:pM,optional:gc,lazy:mM};function gM(n,e){if("_idmap"in n){const i=n,r=ks({...e,processors:uu}),s={};for(const c of i._idmap.entries()){const[l,u]=c;ct(u,r)}const o={},a={registry:i,uri:e==null?void 0:e.uri,defs:s};r.external=a;for(const c of i._idmap.entries()){const[l,u]=c;Bs(r,u),o[l]=Vs(r,u)}if(Object.keys(s).length>0){const c=r.target==="draft-2020-12"?"$defs":"definitions";o.__shared={[c]:s}}return{schemas:o}}const t=ks({...e,processors:uu});return ct(n,t),Bs(t,n),Vs(t,n)}const vM=X("ZodISODateTime",(n,e)=>{Sy.init(n,e),gt.init(n,e)});function Ed(n){return RS(vM,n)}const _M=X("ZodISODate",(n,e)=>{My.init(n,e),gt.init(n,e)});function wd(n){return AS(_M,n)}const xM=X("ZodISOTime",(n,e)=>{by.init(n,e),gt.init(n,e)});function yM(n){return CS(xM,n)}const SM=X("ZodISODuration",(n,e)=>{Ey.init(n,e),gt.init(n,e)});function MM(n){return IS(SM,n)}const bM=(n,e)=>{Vh.init(n,e),n.name="ZodError",Object.defineProperties(n,{format:{value:t=>dx(n,t)},flatten:{value:t=>hx(n,t)},addIssue:{value:t=>{n.issues.push(t),n.message=JSON.stringify(n.issues,Ha,2)}},addIssues:{value:t=>{n.issues.push(...t),n.message=JSON.stringify(n.issues,Ha,2)}},isEmpty:{get(){return n.issues.length===0}}})},en=X("ZodError",bM,{Parent:Error}),EM=fc(en),wM=pc(en),TM=eo(en),RM=to(en),AM=mx(en),CM=gx(en),IM=vx(en),PM=_x(en),FM=xx(en),DM=yx(en),LM=Sx(en),NM=Mx(en),hu=new WeakMap;function Nr(n,e,t){const i=Object.getPrototypeOf(n);let r=hu.get(i);if(r||(r=new Set,hu.set(i,r)),!r.has(e)){r.add(e);for(const s in t){const o=t[s];Object.defineProperty(i,s,{configurable:!0,enumerable:!1,get(){const a=o.bind(this);return Object.defineProperty(this,s,{configurable:!0,writable:!0,enumerable:!0,value:a}),a},set(a){Object.defineProperty(this,s,{configurable:!0,writable:!0,enumerable:!0,value:a})}})}}}const mt=X("ZodType",(n,e)=>(dt.init(n,e),Object.assign(n["~standard"],{jsonSchema:{input:Hs(n,"input"),output:Hs(n,"output")}}),n.toJSONSchema=KS(n,{}),n.def=e,n.type=e.type,Object.defineProperty(n,"_def",{value:e}),n.parse=(t,i)=>EM(n,t,i,{callee:n.parse}),n.safeParse=(t,i)=>TM(n,t,i),n.parseAsync=async(t,i)=>wM(n,t,i,{callee:n.parseAsync}),n.safeParseAsync=async(t,i)=>RM(n,t,i),n.spa=n.safeParseAsync,n.encode=(t,i)=>AM(n,t,i),n.decode=(t,i)=>CM(n,t,i),n.encodeAsync=async(t,i)=>IM(n,t,i),n.decodeAsync=async(t,i)=>PM(n,t,i),n.safeEncode=(t,i)=>FM(n,t,i),n.safeDecode=(t,i)=>DM(n,t,i),n.safeEncodeAsync=async(t,i)=>LM(n,t,i),n.safeDecodeAsync=async(t,i)=>NM(n,t,i),Nr(n,"ZodType",{check(...t){const i=this.def;return this.clone(Xn(i,{checks:[...i.checks??[],...t.map(r=>typeof r=="function"?{_zod:{check:r,def:{check:"custom"},onattach:[]}}:r)]}),{parent:!0})},with(...t){return this.check(...t)},clone(t,i){return Zn(this,t,i)},brand(){return this},register(t,i){return t.add(this,i),this},refine(t,i){return this.check(Ab(t,i))},superRefine(t,i){return this.check(Cb(t,i))},overwrite(t){return this.check(tr(t))},optional(){return mu(this)},exactOptional(){return mb(this)},nullable(){return gu(this)},nullish(){return mu(gu(this))},nonoptional(t){return Sb(this,t)},array(){return $n(this)},or(t){return nr([this,t])},and(t){return lb(this,t)},transform(t){return vu(this,fb(t))},default(t){return _b(this,t)},prefault(t){return yb(this,t)},catch(t){return bb(this,t)},pipe(t){return vu(this,t)},readonly(){return Tb(this)},describe(t){const i=this.clone();return gr.add(i,{description:t}),i},meta(...t){if(t.length===0)return gr.get(this);const i=this.clone();return gr.add(i,t[0]),i},isOptional(){return this.safeParse(void 0).success},isNullable(){return this.safeParse(null).success},apply(t){return t(this)}}),Object.defineProperty(n,"description",{get(){var t;return(t=gr.get(n))==null?void 0:t.description},configurable:!0}),n)),Td=X("_ZodString",(n,e)=>{mc.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(i,r,s)=>id(n,i,r);const t=n._zod.bag;n.format=t.format??null,n.minLength=t.minimum??null,n.maxLength=t.maximum??null,Nr(n,"_ZodString",{regex(...i){return this.check(US(...i))},includes(...i){return this.check(kS(...i))},startsWith(...i){return this.check(BS(...i))},endsWith(...i){return this.check(VS(...i))},min(...i){return this.check(zs(...i))},max(...i){return this.check(td(...i))},length(...i){return this.check(nd(...i))},nonempty(...i){return this.check(zs(1,...i))},lowercase(i){return this.check(OS(i))},uppercase(i){return this.check(zS(i))},trim(){return this.check(GS())},normalize(...i){return this.check(HS(...i))},toLowerCase(){return this.check(WS())},toUpperCase(){return this.check(XS())},slugify(){return this.check(ZS())}})}),UM=X("ZodString",(n,e)=>{mc.init(n,e),Td.init(n,e),n.email=t=>n.check(oS(OM,t)),n.url=t=>n.check(hS(zM,t)),n.jwt=t=>n.check(TS(QM,t)),n.emoji=t=>n.check(dS(kM,t)),n.guid=t=>n.check(ou(du,t)),n.uuid=t=>n.check(aS(_s,t)),n.uuidv4=t=>n.check(cS(_s,t)),n.uuidv6=t=>n.check(lS(_s,t)),n.uuidv7=t=>n.check(uS(_s,t)),n.nanoid=t=>n.check(fS(BM,t)),n.guid=t=>n.check(ou(du,t)),n.cuid=t=>n.check(pS(VM,t)),n.cuid2=t=>n.check(mS(HM,t)),n.ulid=t=>n.check(gS(GM,t)),n.base64=t=>n.check(bS(jM,t)),n.base64url=t=>n.check(ES(KM,t)),n.xid=t=>n.check(vS(WM,t)),n.ksuid=t=>n.check(_S(XM,t)),n.ipv4=t=>n.check(xS(ZM,t)),n.ipv6=t=>n.check(yS($M,t)),n.cidrv4=t=>n.check(SS(YM,t)),n.cidrv6=t=>n.check(MS(qM,t)),n.e164=t=>n.check(wS(JM,t)),n.datetime=t=>n.check(Ed(t)),n.date=t=>n.check(wd(t)),n.time=t=>n.check(yM(t)),n.duration=t=>n.check(MM(t))});function Ze(n){return sS(UM,n)}const gt=X("ZodStringFormat",(n,e)=>{ft.init(n,e),Td.init(n,e)}),OM=X("ZodEmail",(n,e)=>{dy.init(n,e),gt.init(n,e)}),du=X("ZodGUID",(n,e)=>{uy.init(n,e),gt.init(n,e)}),_s=X("ZodUUID",(n,e)=>{hy.init(n,e),gt.init(n,e)}),zM=X("ZodURL",(n,e)=>{fy.init(n,e),gt.init(n,e)}),kM=X("ZodEmoji",(n,e)=>{py.init(n,e),gt.init(n,e)}),BM=X("ZodNanoID",(n,e)=>{my.init(n,e),gt.init(n,e)}),VM=X("ZodCUID",(n,e)=>{gy.init(n,e),gt.init(n,e)}),HM=X("ZodCUID2",(n,e)=>{vy.init(n,e),gt.init(n,e)}),GM=X("ZodULID",(n,e)=>{_y.init(n,e),gt.init(n,e)}),WM=X("ZodXID",(n,e)=>{xy.init(n,e),gt.init(n,e)}),XM=X("ZodKSUID",(n,e)=>{yy.init(n,e),gt.init(n,e)}),ZM=X("ZodIPv4",(n,e)=>{wy.init(n,e),gt.init(n,e)}),$M=X("ZodIPv6",(n,e)=>{Ty.init(n,e),gt.init(n,e)}),YM=X("ZodCIDRv4",(n,e)=>{Ry.init(n,e),gt.init(n,e)}),qM=X("ZodCIDRv6",(n,e)=>{Ay.init(n,e),gt.init(n,e)}),jM=X("ZodBase64",(n,e)=>{Cy.init(n,e),gt.init(n,e)}),KM=X("ZodBase64URL",(n,e)=>{Py.init(n,e),gt.init(n,e)}),JM=X("ZodE164",(n,e)=>{Fy.init(n,e),gt.init(n,e)}),QM=X("ZodJWT",(n,e)=>{Ly.init(n,e),gt.init(n,e)}),Rd=X("ZodNumber",(n,e)=>{jh.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(i,r,s)=>rd(n,i,r),Nr(n,"ZodNumber",{gt(i,r){return this.check(cu(i,r))},gte(i,r){return this.check(Bo(i,r))},min(i,r){return this.check(Bo(i,r))},lt(i,r){return this.check(au(i,r))},lte(i,r){return this.check(ko(i,r))},max(i,r){return this.check(ko(i,r))},int(i){return this.check(fu(i))},safe(i){return this.check(fu(i))},positive(i){return this.check(cu(0,i))},nonnegative(i){return this.check(Bo(0,i))},negative(i){return this.check(au(0,i))},nonpositive(i){return this.check(ko(0,i))},multipleOf(i,r){return this.check(lu(i,r))},step(i,r){return this.check(lu(i,r))},finite(){return this}});const t=n._zod.bag;n.minValue=Math.max(t.minimum??Number.NEGATIVE_INFINITY,t.exclusiveMinimum??Number.NEGATIVE_INFINITY)??null,n.maxValue=Math.min(t.maximum??Number.POSITIVE_INFINITY,t.exclusiveMaximum??Number.POSITIVE_INFINITY)??null,n.isInt=(t.format??"").includes("int")||Number.isSafeInteger(t.multipleOf??.5),n.isFinite=!0,n.format=t.format??null});function Qe(n){return PS(Rd,n)}const eb=X("ZodNumberFormat",(n,e)=>{Ny.init(n,e),Rd.init(n,e)});function fu(n){return FS(eb,n)}const tb=X("ZodBoolean",(n,e)=>{Uy.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>sd(n,t,i)});function Pr(n){return DS(tb,n)}const nb=X("ZodUnknown",(n,e)=>{Oy.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>ad()});function pu(){return LS(nb)}const ib=X("ZodNever",(n,e)=>{zy.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>od(n,t,i)});function rb(n){return NS(ib,n)}const sb=X("ZodArray",(n,e)=>{ky.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>dd(n,t,i,r),n.element=e.element,Nr(n,"ZodArray",{min(t,i){return this.check(zs(t,i))},nonempty(t){return this.check(zs(1,t))},max(t,i){return this.check(td(t,i))},length(t,i){return this.check(nd(t,i))},unwrap(){return this.element}})});function $n(n,e){return $S(sb,n,e)}const ob=X("ZodObject",(n,e)=>{Vy.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>fd(n,t,i,r),rt(n,"shape",()=>e.shape),Nr(n,"ZodObject",{keyof(){return Vt(Object.keys(this._zod.def.shape))},catchall(t){return this.clone({...this._zod.def,catchall:t})},passthrough(){return this.clone({...this._zod.def,catchall:pu()})},loose(){return this.clone({...this._zod.def,catchall:pu()})},strict(){return this.clone({...this._zod.def,catchall:rb()})},strip(){return this.clone({...this._zod.def,catchall:void 0})},extend(t){return sx(this,t)},safeExtend(t){return ox(this,t)},merge(t){return ax(this,t)},pick(t){return ix(this,t)},omit(t){return rx(this,t)},partial(...t){return cx(Id,this,t[0])},required(...t){return lx(Pd,this,t[0])}})});function De(n,e){const t={type:"object",shape:n??{},...Pe(e)};return new ob(t)}const Ad=X("ZodUnion",(n,e)=>{Qh.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>pd(n,t,i,r),n.options=e.options});function nr(n,e){return new Ad({type:"union",options:n,...Pe(e)})}const ab=X("ZodDiscriminatedUnion",(n,e)=>{Ad.init(n,e),Hy.init(n,e)});function vc(n,e,t){return new ab({type:"union",options:e,discriminator:n,...Pe(t)})}const cb=X("ZodIntersection",(n,e)=>{Gy.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>md(n,t,i,r)});function lb(n,e){return new cb({type:"intersection",left:n,right:e})}const ub=X("ZodTuple",(n,e)=>{Wy.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>gd(n,t,i,r),n.rest=t=>n.clone({...n._zod.def,rest:t})});function Cd(n,e,t){const i=e instanceof dt,r=i?t:e,s=i?e:null;return new ub({type:"tuple",items:n,rest:s,...Pe(r)})}const Wa=X("ZodEnum",(n,e)=>{Xy.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(i,r,s)=>cd(n,i,r),n.enum=e.entries,n.options=Object.values(e.entries);const t=new Set(Object.keys(e.entries));n.extract=(i,r)=>{const s={};for(const o of i)if(t.has(o))s[o]=e.entries[o];else throw new Error(`Key ${o} not found in enum`);return new Wa({...e,checks:[],...Pe(r),entries:s})},n.exclude=(i,r)=>{const s={...e.entries};for(const o of i)if(t.has(o))delete s[o];else throw new Error(`Key ${o} not found in enum`);return new Wa({...e,checks:[],...Pe(r),entries:s})}});function Vt(n,e){const t=Array.isArray(n)?Object.fromEntries(n.map(i=>[i,i])):n;return new Wa({type:"enum",entries:t,...Pe(e)})}const hb=X("ZodLiteral",(n,e)=>{Zy.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>ld(n,t,i),n.values=new Set(e.values),Object.defineProperty(n,"value",{get(){if(e.values.length>1)throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");return e.values[0]}})});function Rt(n,e){return new hb({type:"literal",values:Array.isArray(n)?n:[n],...Pe(e)})}const db=X("ZodTransform",(n,e)=>{$y.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>hd(n,t),n._zod.parse=(t,i)=>{if(i.direction==="backward")throw new Uh(n.constructor.name);t.addIssue=s=>{if(typeof s=="string")t.issues.push(Ir(s,t.value,e));else{const o=s;o.fatal&&(o.continue=!1),o.code??(o.code="custom"),o.input??(o.input=t.value),o.inst??(o.inst=n),t.issues.push(Ir(o))}};const r=e.transform(t.value,t);return r instanceof Promise?r.then(s=>(t.value=s,t.fallback=!0,t)):(t.value=r,t.fallback=!0,t)}});function fb(n){return new db({type:"transform",transform:n})}const Id=X("ZodOptional",(n,e)=>{ed.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>gc(n,t,i,r),n.unwrap=()=>n._zod.def.innerType});function mu(n){return new Id({type:"optional",innerType:n})}const pb=X("ZodExactOptional",(n,e)=>{Yy.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>gc(n,t,i,r),n.unwrap=()=>n._zod.def.innerType});function mb(n){return new pb({type:"optional",innerType:n})}const gb=X("ZodNullable",(n,e)=>{qy.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>vd(n,t,i,r),n.unwrap=()=>n._zod.def.innerType});function gu(n){return new gb({type:"nullable",innerType:n})}const vb=X("ZodDefault",(n,e)=>{jy.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>xd(n,t,i,r),n.unwrap=()=>n._zod.def.innerType,n.removeDefault=n.unwrap});function _b(n,e){return new vb({type:"default",innerType:n,get defaultValue(){return typeof e=="function"?e():kh(e)}})}const xb=X("ZodPrefault",(n,e)=>{Ky.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>yd(n,t,i,r),n.unwrap=()=>n._zod.def.innerType});function yb(n,e){return new xb({type:"prefault",innerType:n,get defaultValue(){return typeof e=="function"?e():kh(e)}})}const Pd=X("ZodNonOptional",(n,e)=>{Jy.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>_d(n,t,i,r),n.unwrap=()=>n._zod.def.innerType});function Sb(n,e){return new Pd({type:"nonoptional",innerType:n,...Pe(e)})}const Mb=X("ZodCatch",(n,e)=>{Qy.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Sd(n,t,i,r),n.unwrap=()=>n._zod.def.innerType,n.removeCatch=n.unwrap});function bb(n,e){return new Mb({type:"catch",innerType:n,catchValue:typeof e=="function"?e:()=>e})}const Eb=X("ZodPipe",(n,e)=>{eS.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Md(n,t,i,r),n.in=e.in,n.out=e.out});function vu(n,e){return new Eb({type:"pipe",in:n,out:e})}const wb=X("ZodReadonly",(n,e)=>{tS.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>bd(n,t,i,r),n.unwrap=()=>n._zod.def.innerType});function Tb(n){return new wb({type:"readonly",innerType:n})}const Rb=X("ZodCustom",(n,e)=>{nS.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>ud(n,t)});function Ab(n,e={}){return YS(Rb,n,e)}function Cb(n,e){return qS(n,e)}const Ib={custom:"custom"},Pb=Cd([Qe(),Qe()]),Fd=$n(Pb).min(3),_c=Vt(["temperature","humidity","lux","power","occupancy"]),Fb=De({channel:_c,unit:Ze(),deviceId:Ze()}),Db=De({id:Ze(),name:Ze(),footprint:Fd,sensors:$n(Fb).default([])}),Lb=Vt(["guest","lobby","corridor","plant","amenity"]),Nb=De({id:Ze(),name:Ze(),function:Lb,rooms:$n(Db)}),Ub=De({id:Ze(),name:Ze(),elevation:Qe(),height:Qe().positive(),outline:Fd,zones:$n(Nb)}),Ob=De({id:Ze(),name:Ze(),location:De({lat:Qe(),lon:Qe(),northAngleDeg:Qe().default(0)}),floors:$n(Ub).min(1)});function zb(n){return Ob.parse(n)}class kb{constructor(e){O(this,"floorIds");O(this,"floorById",new Map);O(this,"roomById",new Map);this.building=e,this.floorIds=e.floors.map(t=>t.id);for(const t of e.floors){this.floorById.set(t.id,t);for(const i of t.zones)for(const r of i.rooms)this.roomById.set(r.id,{room:r,zone:i,floor:t})}}floor(e){return this.floorById.get(e)}room(e){return this.roomById.get(e)}roomsMatching(e){const t=[];for(const i of this.building.floors)if(!(e.floorId&&i.id!==e.floorId)){for(const r of i.zones)if(!(e.zoneFunction&&r.function!==e.zoneFunction))for(const s of r.rooms){const o=this.roomById.get(s.id);o&&t.push(o)}}return t}info(e){if(e.type==="room"){const t=this.roomById.get(e.id);if(t)return{ref:{...e},type:"room",name:t.room.name,floorId:t.floor.id,floorName:t.floor.name,zoneName:t.zone.name,zoneFunction:t.zone.function,sensors:_u(t.room.sensors)}}if(e.type==="floor"){const t=this.floorById.get(e.id);if(t){const i=t.zones.flatMap(r=>r.rooms.flatMap(s=>s.sensors));return{ref:{...e},type:"floor",name:t.name,floorId:t.id,floorName:t.name,sensors:_u(i)}}}return e.type==="building"?{ref:{...e},type:"building",name:this.building.name,sensors:[]}:{ref:{...e},type:e.type,name:e.id,sensors:[]}}}function _u(n){return n.map(e=>({...e}))}const xu={type:"change"},xc={type:"start"},Dd={type:"end"},xs=new Dr,yu=new Vn,Bb=Math.cos(70*_t.DEG2RAD),St=new C,Bt=2*Math.PI,st={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Vo=1e-6;class Vb extends j0{constructor(e,t=null){super(e,t),this.state=st.NONE,this.enabled=!0,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Oi.ROTATE,MIDDLE:Oi.DOLLY,RIGHT:Oi.PAN},this.touches={ONE:Di.ROTATE,TWO:Di.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new ai,this._lastTargetPosition=new C,this._quat=new ai().setFromUnitVectors(e.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new an,this._sphericalDelta=new an,this._scale=1,this._panOffset=new C,this._rotateStart=new ne,this._rotateEnd=new ne,this._rotateDelta=new ne,this._panStart=new ne,this._panEnd=new ne,this._panDelta=new ne,this._dollyStart=new ne,this._dollyEnd=new ne,this._dollyDelta=new ne,this._dollyDirection=new C,this._mouse=new ne,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Gb.bind(this),this._onPointerDown=Hb.bind(this),this._onPointerUp=Wb.bind(this),this._onContextMenu=Kb.bind(this),this._onMouseWheel=$b.bind(this),this._onKeyDown=Yb.bind(this),this._onTouchStart=qb.bind(this),this._onTouchMove=jb.bind(this),this._onMouseDown=Xb.bind(this),this._onMouseMove=Zb.bind(this),this._interceptControlDown=Jb.bind(this),this._interceptControlUp=Qb.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(xu),this.update(),this.state=st.NONE}update(e=null){const t=this.object.position;St.copy(t).sub(this.target),St.applyQuaternion(this._quat),this._spherical.setFromVector3(St),this.autoRotate&&this.state===st.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Bt:i>Math.PI&&(i-=Bt),r<-Math.PI?r+=Bt:r>Math.PI&&(r-=Bt),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(St.setFromSpherical(this._spherical),St.applyQuaternion(this._quatInverse),t.copy(this.target).add(St),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=St.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const a=new C(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new C(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=St.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(xs.origin.copy(this.object.position),xs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(xs.direction))<Bb?this.object.lookAt(this.target):(yu.setFromNormalAndCoplanarPoint(this.object.up,this.target),xs.intersectPlane(yu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Vo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Vo||this._lastTargetPosition.distanceToSquared(this.target)>Vo?(this.dispatchEvent(xu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Bt/60*this.autoRotateSpeed*e:Bt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){St.setFromMatrixColumn(t,0),St.multiplyScalar(-e),this._panOffset.add(St)}_panUp(e,t){this.screenSpacePanning===!0?St.setFromMatrixColumn(t,1):(St.setFromMatrixColumn(t,0),St.crossVectors(this.object.up,St)),St.multiplyScalar(e),this._panOffset.add(St)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;St.copy(r).sub(this.target);let s=St.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Bt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Bt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Bt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Bt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Bt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Bt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Bt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Bt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ne,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Hb(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Gb(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Wb(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Dd),this.state=st.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Xb(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Oi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=st.DOLLY;break;case Oi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=st.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=st.ROTATE}break;case Oi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=st.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=st.PAN}break;default:this.state=st.NONE}this.state!==st.NONE&&this.dispatchEvent(xc)}function Zb(n){switch(this.state){case st.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case st.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case st.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function $b(n){this.enabled===!1||this.enableZoom===!1||this.state!==st.NONE||(n.preventDefault(),this.dispatchEvent(xc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Dd))}function Yb(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function qb(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Di.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=st.TOUCH_ROTATE;break;case Di.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=st.TOUCH_PAN;break;default:this.state=st.NONE}break;case 2:switch(this.touches.TWO){case Di.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=st.TOUCH_DOLLY_PAN;break;case Di.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=st.TOUCH_DOLLY_ROTATE;break;default:this.state=st.NONE}break;default:this.state=st.NONE}this.state!==st.NONE&&this.dispatchEvent(xc)}function jb(n){switch(this._trackPointer(n),this.state){case st.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case st.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case st.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case st.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=st.NONE}}function Kb(n){this.enabled!==!1&&n.preventDefault()}function Jb(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Qb(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Ld={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ir{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const eE=new yh(-1,1,1,-1,0,1);class tE extends Ft{constructor(){super(),this.setAttribute("position",new Mt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Mt([0,2,0,0,2,0],2))}}const nE=new tE;class yc{constructor(e){this._mesh=new Ut(nE,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,eE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Nd extends ir{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof At?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Er.clone(e.uniforms),this.material=new At({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new yc(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Su extends ir{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class iE extends ir{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class rE{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new ne);this._width=i.width,this._height=i.height,t=new dn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:An}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Nd(Ld),this.copyPass.material.blending=Rn,this.clock=new Nh}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Su!==void 0&&(o instanceof Su?i=!0:o instanceof iE&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class sE extends ir{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Be}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const oE={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Be(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ji extends ir{constructor(e,t,i,r){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new ne(e.x,e.y):new ne(256,256),this.clearColor=new Be(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new dn(s,o,{type:An}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new dn(s,o,{type:An});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new dn(s,o,{type:An});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),o=Math.round(o/2)}const a=oE;this.highPassUniforms=Er.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new At({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ne(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Ld;this.copyUniforms=Er.clone(u.uniforms),this.blendMaterial=new At({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:In,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Be,this.oldClearAlpha=1,this.basic=new $s,this.fsQuad=new yc(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new ne(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=ji.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=ji.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new At({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ne(.5,.5)},direction:{value:new ne(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new At({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}ji.BlurDirectionX=new ne(1,0);ji.BlurDirectionY=new ne(0,1);const aE={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class cE extends ir{constructor(){super();const e=aE;this.uniforms=Er.clone(e.uniforms),this.material=new $0({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new yc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},je.getTransfer(this._outputColorSpace)===it&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Zu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===$u?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Yu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===$a?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===qu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ju&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const lE={uniforms:{tDiffuse:{value:null},uTime:{value:0},uResolution:{value:new ne(1,1)}},vertexShader:`
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
  `},Mu="#02040a",bu=.0025,uE={high:{bloom:.5,overlay:!0,dpr:2},medium:{bloom:.32,overlay:!1,dpr:1.5},low:{bloom:0,overlay:!1,dpr:1}},Eu=["high","medium","low"],hE=26,dE=90;class fE{constructor(e){O(this,"scene",new h0);O(this,"camera");O(this,"controls");O(this,"renderer");O(this,"composer");O(this,"overlayPass");O(this,"bloomPass");O(this,"updates",new Set);O(this,"clock",new Nh);O(this,"quality","high");O(this,"autoQuality",!0);O(this,"frameAccum",0);O(this,"frameCount",0);O(this,"onQuality",null);O(this,"resizeObserver",null);O(this,"disposed",!1);O(this,"onResize",()=>{if(this.disposed)return;const[e,t]=this.dims();this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.composer.setSize(e,t),this.overlayPass.uniforms.uResolution.value.set(e,t)});this.container=e;const[t,i]=this.dims();this.renderer=new u0({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(t,i),this.renderer.toneMapping=$a,e.appendChild(this.renderer.domElement),this.scene.background=new Be(Mu),this.scene.fog=new ic(Mu,bu),this.camera=new Jt(50,t/i,.1,2e3),this.controls=new Vb(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.maxPolarAngle=Math.PI/2-.02,this.controls.minDistance=8,this.controls.maxDistance=160,this.composer=new rE(this.renderer),this.composer.addPass(new sE(this.scene,this.camera)),this.bloomPass=new ji(new ne(t,i),.5,.45,.2),this.composer.addPass(this.bloomPass),this.overlayPass=new Nd(lE),this.composer.addPass(this.overlayPass),this.composer.addPass(new cE),window.addEventListener("resize",this.onResize),typeof ResizeObserver<"u"&&(this.resizeObserver=new ResizeObserver(this.onResize),this.resizeObserver.observe(e)),this.setQuality("high",!0),this.onResize()}setFogDensity(e){this.disposed||(this.scene.fog.density=e??bu)}getQuality(){return this.quality}onQualityChange(e){this.disposed||(this.onQuality=e)}setQuality(e,t=!1){var r;if(this.disposed)return;this.quality=e,t||(this.autoQuality=!1);const i=uE[e];this.bloomPass.enabled=i.bloom>0,this.bloomPass.strength=i.bloom,this.overlayPass.enabled=i.overlay,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,i.dpr)),this.onResize(),(r=this.onQuality)==null||r.call(this,e,this.autoQuality)}get domElement(){return this.renderer.domElement}registerUpdate(e){return this.disposed?()=>{}:(this.updates.add(e),()=>this.updates.delete(e))}start(){this.disposed||this.renderer.setAnimationLoop(()=>this.tick())}stop(){this.disposed||this.renderer.setAnimationLoop(null)}renderOnce(){this.disposed||this.tick()}dispose(){var e;if(!this.disposed){this.disposed=!0,window.removeEventListener("resize",this.onResize),(e=this.resizeObserver)==null||e.disconnect(),this.resizeObserver=null,this.stop(),this.clock.stop(),this.updates.clear(),this.controls.dispose();for(const t of this.composer.passes)t.dispose();this.composer.passes.length=0,this.composer.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.onQuality=null,this.frameAccum=0,this.frameCount=0}}tick(){if(this.disposed)return;const e=this.clock.getDelta(),t=this.clock.elapsedTime;for(const i of this.updates)i(e,t);this.controls.update(),this.overlayPass.uniforms.uTime.value=t,this.composer.render(),this.monitorFrame(e)}monitorFrame(e){if(!this.autoQuality||this.quality==="low"||(this.frameAccum+=e*1e3,++this.frameCount<dE))return;const t=this.frameAccum/this.frameCount;if(this.frameAccum=0,this.frameCount=0,t>hE){const i=Eu[Eu.indexOf(this.quality)+1];i&&this.setQuality(i,!0)}}dims(){return[this.container.clientWidth||window.innerWidth,this.container.clientHeight||window.innerHeight]}}const Sr=new Be("#36e6ff");function wu(n=Sr){return new At({transparent:!0,depthWrite:!1,blending:In,side:cn,uniforms:{uColor:{value:n.clone()},uBase:{value:.015},uFresnelPower:{value:2.6},uIntensity:{value:.35},uOpacity:{value:1},uTint:{value:n.clone()},uTintStrength:{value:0},uSunDir:{value:new C(0,1,0)},uSunStrength:{value:0}},vertexShader:`
      varying vec3 vNormal;
      varying vec3 vViewDir;
      void main() {
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vNormal = normalize(mat3(modelMatrix) * normal);
        vViewDir = normalize(cameraPosition - worldPos.xyz);
        gl_Position = projectionMatrix * viewMatrix * worldPos;
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
      void main() {
        float fresnel = pow(1.0 - abs(dot(normalize(vNormal), normalize(vViewDir))), uFresnelPower);
        // data tint lifts the fill glow so a hot room reads as a solid volume,
        // not just an edge; kept low so 100+ stacked volumes don't bloom out.
        float glow = uBase + fresnel * uIntensity + uTintStrength * 0.22;
        // sun-facing faces catch extra glow (environment mode)
        glow += uSunStrength * max(0.0, dot(normalize(vNormal), normalize(uSunDir)));
        vec3 col = mix(uColor, uTint, uTintStrength);
        gl_FragColor = vec4(col * glow, glow) * uOpacity;
      }
    `})}function pE(n=.4,e=Sr){return new js({color:e,transparent:!0,opacity:n,blending:In,depthWrite:!1})}const Ho=.18,mE=.18,gE=.45,vE=30;function _E(n){const e=new un;e.name=`building:${n.id}`;const t=new Map;for(const o of n.floors){const a=xE(o,n.id);e.add(a),t.set(o.id,a)}const r=new $t().setFromObject(e).getCenter(new C);e.position.set(-r.x,0,-r.z);const s=new un;return s.name="buildingRoot",s.userData.entityRef={type:"building",id:n.id},s.add(e),{root:s,floorGroups:t}}function xE(n,e){const t=new un;t.name=`floor:${n.id}`,t.position.y=n.elevation,t.userData.entityRef={type:"floor",id:n.id,buildingId:e},t.userData.baseElevation=n.elevation;const i=Tu(n.outline,Ho),r=new Ut(i,wu());r.userData.entityRef=t.userData.entityRef,t.add(r,Ru(i,.55));for(const s of n.zones)for(const o of s.rooms){const a=Math.max(.5,n.height-gE),c=Tu(SE(o.footprint,mE),a),l=new Ut(c,wu());l.position.y=Ho,l.userData.entityRef={type:"room",id:o.id,buildingId:e};const u=Ru(c,.28);u.position.y=Ho,u.userData.entityRef=l.userData.entityRef,t.add(l,u)}return t}function yE(n){const e=new Ph;e.moveTo(n[0][0],n[0][1]);for(let t=1;t<n.length;t++)e.lineTo(n[t][0],n[t][1]);return e.closePath(),e}function Tu(n,e){const t=new ac(yE(n),{depth:e,bevelEnabled:!1});return t.rotateX(-Math.PI/2),t}function SE(n,e){let t=0,i=0;for(const[r,s]of n)t+=r,i+=s;return t/=n.length,i/=n.length,n.map(([r,s])=>{const o=r-t,a=s-i,c=Math.hypot(o,a)||1,l=Math.min(e,c*.4);return[r-o/c*l,s-a/c*l]})}function Ru(n,e){return new Us(new R0(n,vE),pE(e))}class ME{constructor(e){O(this,"group",new un);O(this,"spinners",[]);this.group.name="pedestal";const t=[{inner:.985,outer:1,arc:Math.PI*2,speed:0,opacity:.3},{inner:1.1,outer:1.115,arc:Math.PI*1.4,speed:.25,opacity:.22},{inner:1.24,outer:1.25,arc:Math.PI*.5,speed:-.4,opacity:.2}];for(const s of t){const o=new cc(e*s.inner,e*s.outer,160,1,0,s.arc),a=new $s({color:Sr,transparent:!0,opacity:s.opacity,side:cn,blending:In,depthWrite:!1}),c=new Ut(o,a);c.rotation.x=-Math.PI/2,c.position.y=.03,this.group.add(c),this.spinners.push({mesh:c,speed:s.speed,baseOpacity:s.opacity})}const i=new q0(e*.95,12,5,128,Sr,Sr),r=i.material;r.transparent=!0,r.opacity=.06,r.blending=In,r.depthWrite=!1,i.position.y=.01,this.group.add(i)}update(e,t){for(const i of this.spinners)i.mesh.rotation.z+=i.speed*e,i.mesh.material.opacity=i.baseOpacity*(.75+.25*Math.sin(t*1.6+i.speed*10))}}function Ud(n=64){const e=document.createElement("canvas");e.width=e.height=n;const t=e.getContext("2d"),i=t.createRadialGradient(n/2,n/2,0,n/2,n/2,n/2);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.4,"rgba(255,255,255,0.5)"),i.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=i,t.fillRect(0,0,n,n);const r=new f0(e);return r.needsUpdate=!0,r}const Au=-9999;class bE{constructor(e,t){O(this,"group",new un);O(this,"rooms",[]);O(this,"points");O(this,"positions");O(this,"tmp",new C);this.controls=t,this.group.name="controlLayer";for(const s of t.list()){if(!s.kinds.includes("light"))continue;const o=e.room(s.roomId);if(!o)continue;const a=o.mesh.geometry;a.boundingBox||a.computeBoundingBox();const c=a.boundingBox,l=c.getCenter(new C);this.rooms.push({roomId:s.roomId,mesh:o.mesh,localTop:new C(l.x,c.max.y*.85,l.z)})}this.positions=new Float32Array(this.rooms.length*3).fill(Au);const i=new Ft;i.setAttribute("position",new Yt(this.positions,3));const r=new rc({size:2.6,map:Ud(),color:new Be("#ffd9a0"),transparent:!0,opacity:.85,blending:In,depthWrite:!1,sizeAttenuation:!0});this.points=new Th(i,r),this.points.frustumCulled=!1,this.group.add(this.points)}update(){var t;const e=this.points.geometry.attributes.position;for(let i=0;i<this.rooms.length;i++){const r=this.rooms[i];(t=this.controls.get(r.roomId))!=null&&t.state.light?(r.mesh.localToWorld(this.tmp.copy(r.localTop)),this.positions[i*3]=this.tmp.x,this.positions[i*3+1]=this.tmp.y,this.positions[i*3+2]=this.tmp.z):this.positions[i*3+1]=Au}e.needsUpdate=!0}}const Cu=-9999,EE=new Be("#ffb020"),wE=new Be("#ff2b3b");class TE{constructor(e,t){O(this,"group",new un);O(this,"rooms",[]);O(this,"points");O(this,"positions");O(this,"colors");O(this,"tmp",new C);this.alarms=t,this.group.name="alarmLayer";for(const s of e.rooms){const o=s.mesh.geometry;o.boundingBox||o.computeBoundingBox();const a=o.boundingBox,c=a.getCenter(new C);this.rooms.push({roomId:s.id,mesh:s.mesh,localTop:new C(c.x,a.max.y*1.15,c.z)})}this.positions=new Float32Array(this.rooms.length*3).fill(Cu),this.colors=new Float32Array(this.rooms.length*3);const i=new Ft;i.setAttribute("position",new Yt(this.positions,3)),i.setAttribute("color",new Yt(this.colors,3));const r=new rc({size:5,map:Ud(),vertexColors:!0,transparent:!0,opacity:.9,blending:In,depthWrite:!1,sizeAttenuation:!0});this.points=new Th(i,r),this.points.frustumCulled=!1,this.group.add(this.points)}update(e){const t=this.alarms.alarmingRooms(),i=this.points.geometry.attributes.position,r=this.points.geometry.attributes.color;let s=!1;for(let a=0;a<this.rooms.length;a++){const c=this.rooms[a],l=t.get(c.roomId);if(!l){this.positions[a*3+1]=Cu;continue}c.mesh.localToWorld(this.tmp.copy(c.localTop)),this.positions[a*3]=this.tmp.x,this.positions[a*3+1]=this.tmp.y,this.positions[a*3+2]=this.tmp.z;const u=l==="critical"?wE:EE;this.colors[a*3]=u.r,this.colors[a*3+1]=u.g,this.colors[a*3+2]=u.b,l==="critical"&&(s=!0)}i.needsUpdate=!0,r.needsUpdate=!0;const o=s?7:3.5;this.points.material.opacity=.45+.45*Math.abs(Math.sin(e*o))}}const RE={easeInOutCubic:n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2};class AE{constructor(){O(this,"active",new Set);O(this,"now",performance.now())}run(e,t,i=RE.easeInOutCubic){let r;const s=new Promise(a=>r=a),o={start:this.now,duration:e,easing:i,onUpdate:t,resolve:r};return this.active.add(o),{done:s,cancel:()=>{this.active.delete(o)&&r("cancelled")}}}update(e){this.now=e;for(const t of this.active){const i=Math.min(1,(e-t.start)/t.duration);t.onUpdate(t.easing(i)),i>=1&&(this.active.delete(t),t.resolve("completed"))}}cancelAll(){for(const e of this.active)this.active.delete(e),e.resolve("cancelled")}}const CE={orbit:{azimuthDeg:35,elevationDeg:22},front:{azimuthDeg:0,elevationDeg:10},top:{azimuthDeg:0,elevationDeg:85},isometric:{azimuthDeg:45,elevationDeg:32}},IE=1e4,Iu=1200;class PE{constructor(e,t,i){O(this,"currentFlight",null);O(this,"autoRotateWanted",!1);O(this,"resumeTimer");O(this,"savedPose",null);O(this,"savedMinDistance",0);O(this,"disposed",!1);O(this,"onControlsStart",()=>{this.disposed||(this.interruptFlight(),this.autoRotateWanted&&(this.controls.autoRotate=!1,this.clearResumeTimer(),this.resumeTimer=window.setTimeout(()=>{this.resumeTimer=void 0,!this.disposed&&this.autoRotateWanted&&(this.controls.autoRotate=!0)},IE)))});this.camera=e,this.controls=t,this.tween=i,this.controls.addEventListener("start",this.onControlsStart)}get autoRotate(){return this.autoRotateWanted}setAutoRotate(e,t=.6){this.disposed||(this.autoRotateWanted=e,this.controls.autoRotate=e,this.controls.autoRotateSpeed=t,this.clearResumeTimer())}setView(e,t){const i=CE[e];return this.orbitTo(i.azimuthDeg,i.elevationDeg,t)}async orbitTo(e,t,i={}){if(this.disposed)return"superseded";this.interruptFlight();const r=this.controls.target.clone(),s=new an().setFromVector3(this.camera.position.clone().sub(r)),o=new an(i.radius??s.radius,_t.degToRad(90-t),_t.degToRad(e)),a=_t.euclideanModulo(o.theta-s.theta+Math.PI,Math.PI*2)-Math.PI,c=this.autoRotateWanted;this.controls.autoRotate=!1;const l=new an,u=this.tween.run(i.durationMs??Iu,d=>{l.set(_t.lerp(s.radius,o.radius,d),_t.lerp(s.phi,o.phi,d),s.theta+a*d),l.makeSafe(),this.camera.position.setFromSpherical(l).add(r),this.camera.lookAt(r)});this.currentFlight=u;const h=await u.done;return this.currentFlight===u&&(this.currentFlight=null),h==="completed"&&c&&(this.controls.autoRotate=!0),h==="completed"?"completed":"superseded"}orbitSpherical(){const e=new an().setFromVector3(this.camera.position.clone().sub(this.controls.target));return{radius:e.radius,azimuthDeg:_t.radToDeg(e.theta),elevationDeg:90-_t.radToDeg(e.phi)}}async flyTo(e,t,i,r,s={}){if(this.disposed)return"superseded";this.interruptFlight();const o=this.controls.target.clone(),a=new an().setFromVector3(this.camera.position.clone().sub(o)),c=new an(r,_t.degToRad(90-i),_t.degToRad(t)),l=_t.euclideanModulo(c.theta-a.theta+Math.PI,Math.PI*2)-Math.PI,u=this.autoRotateWanted;this.controls.autoRotate=!1;const h=new C,d=new an,f=this.tween.run(s.durationMs??Iu,v=>{h.lerpVectors(o,e,v),d.set(_t.lerp(a.radius,c.radius,v),_t.lerp(a.phi,c.phi,v),a.theta+l*v),d.makeSafe(),this.controls.target.copy(h),this.camera.position.setFromSpherical(d).add(h),this.camera.lookAt(h)});this.currentFlight=f;const g=await f.done;return this.currentFlight===f&&(this.currentFlight=null),g==="completed"&&u&&(this.controls.autoRotate=!0),g==="completed"?"completed":"superseded"}zoomToBox(e,t={}){const i=e.getCenter(new C),r=.5*e.getSize(new C).length(),s=_t.degToRad(this.camera.fov),o=r/Math.sin(s/2)*1.3,a=this.orbitSpherical().azimuthDeg;return this.flyTo(i,a,26,Math.max(o,this.controls.minDistance+1),t)}get roomFocused(){return this.savedPose!==null}enterRoom(e,t={}){if(this.disposed)return Promise.resolve("superseded");this.savedPose||(this.savedPose={target:this.controls.target.clone(),position:this.camera.position.clone()},this.savedMinDistance=this.controls.minDistance);const i=e.getCenter(new C),r=e.getSize(new C),s=Math.max(2,Math.max(r.x,r.z)*.5+1.5);this.controls.minDistance=Math.min(this.savedMinDistance,s*.5);const o=this.orbitSpherical().azimuthDeg;return this.flyTo(i,o,4,s,{durationMs:t.durationMs??1900})}exitRoom(e={}){if(this.disposed)return Promise.resolve("superseded");if(!this.savedPose)return Promise.resolve("completed");const t=this.savedPose;this.savedPose=null,this.controls.minDistance=this.savedMinDistance,this.savedMinDistance=0;const i=new an().setFromVector3(t.position.clone().sub(t.target));return this.flyTo(t.target,_t.radToDeg(i.theta),90-_t.radToDeg(i.phi),i.radius,{durationMs:e.durationMs??1500})}abandonRoomFocus(){this.savedPose&&(this.savedPose=null,this.controls.minDistance=this.savedMinDistance,this.savedMinDistance=0)}dispose(){this.disposed||(this.disposed=!0,this.controls.removeEventListener("start",this.onControlsStart),this.clearResumeTimer(),this.interruptFlight(),this.controls.autoRotate=!1,this.controls.enabled=!1,this.abandonRoomFocus(),this.autoRotateWanted=!1)}clearResumeTimer(){window.clearTimeout(this.resumeTimer),this.resumeTimer=void 0}interruptFlight(){var e;(e=this.currentFlight)==null||e.cancel(),this.currentFlight=null}}class FE{constructor(e){O(this,"modes",new Map);O(this,"active",null);O(this,"activeId",null);O(this,"updateDisposers",[]);O(this,"queue",Promise.resolve());O(this,"disposed",!1);O(this,"rooms");O(this,"floors");this.deps=e,this.rooms=e.sceneIndex.rooms.map(t=>this.buildModeRoom(t)),this.floors=e.sceneIndex.floors.map(t=>this.buildModeFloor(t)),e.timeline.setSink(t=>{var i,r;return(r=(i=this.active)==null?void 0:i.onData)==null?void 0:r.call(i,t)})}register(e){this.modes.set(e.descriptor.id,{descriptor:Go(e.descriptor),instance:e})}registerLazy(e,t){this.modes.set(e.id,{descriptor:Go(e),loader:t})}list(){return[...this.modes.values()].map(e=>Go(e.descriptor))}getActiveId(){return this.activeId}getActiveMode(){return this.active??void 0}setMode(e){if(this.disposed)return Promise.reject(new Error("ModeManager has been disposed."));if(!this.modes.has(e))return Promise.reject(new Error(`Unknown mode '${e}'`));const t=this.queue.then(()=>this.switchTo(e));return this.queue=t.catch(()=>{}),t}async dispose(){if(this.disposed)return;this.disposed=!0,this.deps.timeline.setSink(()=>{}),await this.queue.catch(()=>{});const e=this.active;this.active=null,this.activeId=null;for(const t of this.updateDisposers)t();this.updateDisposers=[],this.deps.overlay.clear(),this.deps.emitLegend(null),this.setSun(null),this.deps.setFog(null),await(e==null?void 0:e.exit())}async switchTo(e){if(this.disposed||this.activeId===e)return;const t=this.modes.get(e);if(!t)throw new Error(`Unknown mode '${e}'`);const i=await this.resolveMode(t);if(this.disposed||this.activeId===e)return;this.active&&await this.active.exit();for(const s of this.updateDisposers)s();this.updateDisposers=[],this.deps.overlay.clear(),this.deps.emitLegend(null),this.setSun(null),this.deps.setFog(null),this.active=i,this.activeId=e;const r={building:this.deps.building,overlay:this.deps.overlay,cameraDirector:this.deps.cameraDirector,rooms:this.rooms,floors:this.floors,registerUpdate:s=>{this.disposed||this.updateDisposers.push(this.deps.registerSceneUpdate(s))},setLegend:s=>this.deps.emitLegend(s),setFog:s=>this.deps.setFog(s),setSun:(s,o=1)=>this.setSun(s,o)};if(await i.enter(r),this.disposed){await i.exit(),this.active===i&&(this.active=null,this.activeId=null);return}this.deps.timeline.refresh()}resolveMode(e){return e.instance?Promise.resolve(e.instance):e.loading?e.loading:e.loader?(e.loading=e.loader().then(t=>{if(t.descriptor.id!==e.descriptor.id)throw new Error(`Mode loader for '${e.descriptor.id}' returned '${t.descriptor.id}'.`);return e.instance=t,t}).catch(t=>{throw e.loading=void 0,t}),e.loading):Promise.reject(new Error(`Mode '${e.descriptor.id}' has no loader.`))}setSun(e,t=0){for(const i of this.deps.sceneIndex.holoMaterials())i.uniforms.uSunStrength.value=e?t:0,e&&i.uniforms.uSunDir.value.copy(e).normalize()}buildModeRoom(e){const t=this.deps.buildingIndex.info({type:"room",id:e.id}),i=e.mesh.geometry;i.boundingBox||i.computeBoundingBox();const r=i.boundingBox.getCenter(new C);return{id:e.id,ref:{type:"room",id:e.id},floorId:e.floorId,zoneFunction:t.zoneFunction??"guest",name:t.name,sensors:t.sensors,worldCenter:(s=new C)=>e.mesh.localToWorld(s.copy(r)),setTint:(s,o=s?.8:0)=>{e.holo.uniforms.uTintStrength.value=s?o:0,s&&e.holo.uniforms.uTint.value.copy(s)}}}buildModeFloor(e){const t=new $t().setFromObject(e.group);return{id:e.id,index:e.index,baseElevation:e.baseElevation,group:e.group,center:t.getCenter(new C),size:t.getSize(new C)}}}function Go(n){return{...n,channels:[...n.channels]}}class DE{constructor(e,t){O(this,"floors");O(this,"floorById",new Map);O(this,"roomById",new Map);this.buildingRoot=t,this.floors=[...e.entries()].map(([i,r])=>this.buildFloor(i,r)).sort((i,r)=>i.baseElevation-r.baseElevation).map((i,r)=>({...i,index:r}));for(const i of this.floors)this.floorById.set(i.id,i),this.indexRooms(i)}get rooms(){return[...this.roomById.values()]}holoMaterials(){const e=[];for(const t of this.floors)for(const i of t.ghosts)i.holo&&e.push(i.holo);return e}floor(e){return this.floorById.get(e)}room(e){return this.roomById.get(e)}boxOf(e){if(e==="building")return new $t().setFromObject(this.buildingRoot);if(e.type==="floor"){const t=this.floorById.get(e.id);if(t)return new $t().setFromObject(t.group)}if(e.type==="room"){const t=this.roomById.get(e.id);if(t)return new $t().setFromObject(t.mesh)}return new $t().setFromObject(this.buildingRoot)}buildFloor(e,t){const i=t.userData.baseElevation??t.position.y,r=[];return t.traverse(s=>{s instanceof Ut&&s.material instanceof At?r.push({holo:s.material,baseOpacity:1}):s instanceof Us&&s.material instanceof js&&r.push({line:s.material,baseOpacity:s.material.opacity})}),{id:e,group:t,index:0,baseElevation:i,ghosts:r}}indexRooms(e){const t=new Map,i=new Map;e.group.traverse(r=>{const s=r.userData.entityRef;(s==null?void 0:s.type)==="room"&&(r instanceof Ut?t.set(s.id,r):r instanceof Us&&i.set(s.id,r))});for(const[r,s]of t){const o=i.get(r);this.roomById.set(r,{id:r,floorId:e.id,mesh:s,holo:s.material,edges:o,edgeMat:o==null?void 0:o.material})}}}const hr={outcome:"noop"},Pu=5,LE=.07,NE={"2d":.02,"2.5d":.3},ys=1e3;class UE{constructor(e,t,i,r){O(this,"state",{kind:"ASSEMBLED"});O(this,"inFlight",null);O(this,"viewChanged",null);O(this,"disposed",!1);O(this,"floors");O(this,"rooms");O(this,"floorPosY");O(this,"floorOpacity");O(this,"roomScaleY");O(this,"H");O(this,"footprintDiag");O(this,"R0");this.sceneIndex=e,this.cameraDirector=t,this.tween=i,this.floors=e.floors,this.rooms=e.rooms,this.floorPosY=this.floors.map(o=>o.baseElevation),this.floorOpacity=this.floors.map(()=>1),this.roomScaleY=this.rooms.map(()=>1);const s=new $t().setFromObject(r).getSize(new C);this.H=s.y,this.footprintDiag=Math.hypot(s.x,s.z),this.R0=this.footprintDiag*1.5}setViewChangedListener(e){this.viewChanged=e}getView(){return{...this.state}}explode(e,t=ys){return this.state.kind==="ISOLATED"||this.state.kind==="FLATTENED"||this.state.kind==="EXPLODED"&&this.state.factor===e?Promise.resolve(hr):this.run({kind:"EXPLODED",factor:e},t)}isolate(e,t=ys){return this.state.kind==="ISOLATED"&&this.state.floorId===e?Promise.resolve(hr):this.run({kind:"ISOLATED",floorId:e},t)}flatten(e,t,i=ys){return this.state.kind==="FLATTENED"&&this.state.floorId===e&&this.state.style===t?Promise.resolve(hr):this.run({kind:"FLATTENED",floorId:e,style:t},i)}reassemble(e=ys){return this.state.kind==="ASSEMBLED"?Promise.resolve(hr):this.run({kind:"ASSEMBLED"},e)}dispose(){var e;this.disposed||(this.disposed=!0,(e=this.inFlight)==null||e.supersede(),this.inFlight=null,this.viewChanged=null)}run(e,t){var h,d;if(this.disposed)return Promise.resolve({outcome:"superseded"});(h=this.inFlight)==null||h.supersede();const i={posY:[...this.floorPosY],opacity:[...this.floorOpacity],scale:[...this.roomScaleY]},r=this.computeTargets(e);this.state=e,(d=this.viewChanged)==null||d.call(this,this.getView());let s=!1,o;const a=new Promise(f=>o=f),c=this.tween.run(t,f=>this.applyLerp(i,r,f)),l={supersede:()=>{}},u=f=>{s||(s=!0,this.inFlight===l&&(this.inFlight=null),o({outcome:f}))};return l.supersede=()=>{c.cancel(),u("superseded")},this.inFlight=l,c.done.then(f=>{f==="completed"&&u("completed")}),this.cameraDirector.flyTo(new C(0,r.camera.targetY,0),this.cameraDirector.orbitSpherical().azimuthDeg,r.camera.elevationDeg,r.camera.radius,{durationMs:t}),a}computeTargets(e){const t=this.floors.map(s=>s.baseElevation),i=this.floors.map(()=>1),r=this.rooms.map(()=>1);switch(e.kind){case"ASSEMBLED":break;case"EXPLODED":for(let s=0;s<this.floors.length;s++)t[s]=this.floors[s].baseElevation+s*Pu*e.factor;break;case"ISOLATED":this.ghostOthers(e.floorId,i);break;case"FLATTENED":this.ghostOthers(e.floorId,i);for(let s=0;s<this.rooms.length;s++)this.rooms[s].floorId===e.floorId&&(r[s]=NE[e.style]);break}return{posY:t,opacity:i,scale:r,camera:this.framingFor(e)}}ghostOthers(e,t){for(let i=0;i<this.floors.length;i++)this.floors[i].id!==e&&(t[i]=LE)}framingFor(e){const t=this.floors.length;switch(e.kind){case"ASSEMBLED":return{targetY:this.H*.45,elevationDeg:22,radius:this.R0};case"EXPLODED":return{targetY:(this.floors[t-1].baseElevation+(t-1)*Pu*e.factor)*.5+this.H*.1,elevationDeg:18,radius:this.R0*(1+.5*e.factor)};case"ISOLATED":{const i=this.sceneIndex.floor(e.floorId);return{targetY:i?i.baseElevation+2:this.H*.45,elevationDeg:30,radius:this.footprintDiag*1.35}}case"FLATTENED":{const i=this.sceneIndex.floor(e.floorId);return{targetY:i?i.baseElevation:0,elevationDeg:88,radius:this.footprintDiag*1.25}}}}applyLerp(e,t,i){for(let r=0;r<this.floors.length;r++){const s=_t.lerp(e.posY[r],t.posY[r],i);this.floorPosY[r]=s,this.floors[r].group.position.y=s;const o=_t.lerp(e.opacity[r],t.opacity[r],i);this.floorOpacity[r]=o,this.applyOpacity(this.floors[r],o)}for(let r=0;r<this.rooms.length;r++){const s=_t.lerp(e.scale[r],t.scale[r],i);this.roomScaleY[r]=s,this.rooms[r].mesh.scale.y=s,this.rooms[r].edges&&(this.rooms[r].edges.scale.y=s)}}applyOpacity(e,t){for(const i of e.ghosts)i.holo?i.holo.uniforms.uOpacity.value=t:i.line&&(i.line.opacity=i.baseOpacity*t)}}const OE=new Be("#ff9a3c"),zE=1.6,kE=.06,BE=.9;class VE{constructor(e){O(this,"selected",null);O(this,"restore",null);this.sceneIndex=e}get current(){return this.selected?{...this.selected}:null}select(e){var c;this.clearHighlight();const t=this.sceneIndex.room(e.id);if(!t)return!1;const i=t.holo,r=i.uniforms.uColor.value.clone(),s=i.uniforms.uIntensity.value,o=i.uniforms.uBase.value,a=(c=t.edgeMat)==null?void 0:c.opacity;return i.uniforms.uColor.value.copy(OE),i.uniforms.uIntensity.value=zE,i.uniforms.uBase.value=kE,t.edgeMat&&(t.edgeMat.opacity=BE),this.restore=()=>{i.uniforms.uColor.value.copy(r),i.uniforms.uIntensity.value=s,i.uniforms.uBase.value=o,t.edgeMat&&a!==void 0&&(t.edgeMat.opacity=a)},this.selected={...e},!0}clear(){const e=this.selected!==null;return this.clearHighlight(),this.selected=null,e}clearHighlight(){var e;(e=this.restore)==null||e.call(this),this.restore=null}}const HE=25;class GE{constructor(e,t,i,r){O(this,"raycaster",new Y0);O(this,"downX",0);O(this,"downY",0);O(this,"onPick");O(this,"disposed",!1);O(this,"onDown",e=>{this.disposed||(this.downX=e.clientX,this.downY=e.clientY)});O(this,"onUp",e=>{var r;if(this.disposed)return;const t=e.clientX-this.downX,i=e.clientY-this.downY;t*t+i*i>HE||(r=this.onPick)==null||r.call(this,this.pickAtNdc(this.ndcFor(e.clientX,e.clientY)))});this.camera=e,this.dom=t,this.root=i,this.onPick=r,this.dom.addEventListener("pointerdown",this.onDown),this.dom.addEventListener("pointerup",this.onUp)}dispose(){this.disposed||(this.disposed=!0,this.dom.removeEventListener("pointerdown",this.onDown),this.dom.removeEventListener("pointerup",this.onUp),this.onPick=null)}pickAtNdc(e){if(this.disposed)return null;this.raycaster.setFromCamera(e,this.camera);for(const t of this.raycaster.intersectObject(this.root,!0)){const i=WE(t.object);if(i)return i}return null}ndcFor(e,t){const i=this.dom.getBoundingClientRect();return new ne((e-i.left)/i.width*2-1,-((t-i.top)/i.height)*2+1)}}function WE(n){let e=n;for(;e;){const t=e.userData.entityRef;if(t&&t.type==="room")return t;e=e.parent}return null}function Od(n){return typeof n.onFrame=="function"}class XE{constructor(e){O(this,"frames",[]);this.capacity=e}push(e){this.frames.push(e),this.frames.length>this.capacity&&this.frames.shift()}get size(){return this.frames.length}span(){return this.frames.length===0?null:{from:this.frames[0].time,to:this.frames[this.frames.length-1].time}}nearest(e){if(this.frames.length===0)return null;let t=0,i=this.frames.length-1;for(;t<i;){const o=t+i>>1;this.frames[o].time<e?t=o+1:i=o}const r=this.frames[t],s=this.frames[t-1];return s&&Math.abs(s.time-e)<=Math.abs(r.time-e)?s:r}}const ZE=6e4,$E=1440,YE=6e4,Wo=["temperature","humidity","lux","power","occupancy"];class qE{constructor(e,t=Date.now()){O(this,"mode","live");O(this,"playbackSpeed",1);O(this,"buffer",new XE($E));O(this,"simTime");O(this,"lastRealMs",performance.now());O(this,"lastBufferedSim",0);O(this,"scrubTime",0);O(this,"sink",null);O(this,"frameListeners",new Set);O(this,"liveFrameListeners",new Set);O(this,"onChange",null);O(this,"pushProvider",null);O(this,"offPushFrame",null);this.provider=e,this.simTime=t,Od(e)&&(this.pushProvider=e,this.offPushFrame=e.onFrame(i=>this.receiveLiveFrame(i)),e.connect())}setSink(e){this.sink=e}addFrameListener(e){return this.frameListeners.add(e),()=>this.frameListeners.delete(e)}addLiveFrameListener(e){return this.liveFrameListeners.add(e),()=>this.liveFrameListeners.delete(e)}deliver(e){var t;(t=this.sink)==null||t.call(this,e);for(const i of this.frameListeners)i(e)}setChangeListener(e){this.onChange=e}getState(){return{mode:this.mode,time:this.currentTime(),playbackSpeed:this.playbackSpeed}}currentTime(){return this.mode==="scrub"?this.scrubTime:this.simTime}setPlaybackSpeed(e){this.playbackSpeed=e,this.emit()}setTimeRange(e){e==="live"?(this.mode="live",this.lastRealMs=performance.now()):(this.mode="scrub",this.scrubTime=jE(e.to)),this.emit()}tick(){if(this.mode==="live"){if(this.pushProvider)return;const e=performance.now(),t=e-this.lastRealMs;this.lastRealMs=e,this.simTime+=t/1e3*ZE*this.playbackSpeed;const i=this.provider.sample(Wo,this.simTime);this.bufferFrame(i),this.deliver(i);for(const r of this.liveFrameListeners)r(i)}}emit(){var t;const e=this.frameAt(this.currentTime());this.deliver(e),(t=this.onChange)==null||t.call(this,this.getState(),e)}frameAt(e){const t=this.buffer.span();if(this.mode==="scrub"&&t&&e>=t.from&&e<=t.to){const i=this.buffer.nearest(e);if(i)return i}return this.provider.sample(Wo,e)}refresh(){this.emit()}currentFrame(){return this.frameAt(this.currentTime())}history(e,t=48){const i=this.currentTime(),r=i-e*36e5,s=Math.max(6e4,(i-r)/t);return this.provider.query(Wo,{from:r,to:i},s)}bufferSpan(){return this.buffer.span()}dispose(){var e;(e=this.offPushFrame)==null||e.call(this),this.offPushFrame=null,this.pushProvider=null,this.frameListeners.clear(),this.liveFrameListeners.clear(),this.sink=null,this.onChange=null}receiveLiveFrame(e){var t;if(this.simTime=e.time,this.bufferFrame(e),this.mode==="live"){this.deliver(e);for(const i of this.liveFrameListeners)i(e);(t=this.onChange)==null||t.call(this,this.getState(),e)}}bufferFrame(e){e.time-this.lastBufferedSim<YE&&this.lastBufferedSim!==0||(this.buffer.push(e),this.lastBufferedSim=e.time)}}function jE(n){return typeof n=="number"?n:n instanceof Date?n.getTime():new Date(n).getTime()}const Ki=[18,28];function Sc(n){switch(n){case"guest":return["light","hvac","blind"];case"lobby":case"amenity":return["light","hvac"];case"corridor":return["light"];case"plant":return[]}}function zd(n){return{light:Sc(n).includes("light"),hvacSetpoint:24,blind:0}}class KE{constructor(e){O(this,"entries",new Map);O(this,"listeners",new Set);for(const t of e.floors)for(const i of t.zones){const r=Sc(i.function);if(r.length!==0)for(const s of i.rooms)this.entries.set(s.id,{roomId:s.id,kinds:r,state:zd(i.function)})}}onChange(e){return this.listeners.add(e),()=>this.listeners.delete(e)}has(e){return this.entries.has(e)}get(e){const t=this.entries.get(e);return t?dr(t):void 0}list(){return[...this.entries.values()].map(dr)}supports(e,t){var i;return((i=this.entries.get(e))==null?void 0:i.kinds.includes(t))??!1}set(e,t,i,r="local"){const s=this.entries.get(e),o=Xo(s,t);if(t==="light"?s.state.light=!!i:t==="hvac"?s.state.hvacSetpoint=Fu(Number(i),Ki[0],Ki[1]):s.state.blind=Fu(Number(i),0,1),Xo(s,t)===o)return dr(s);const a=Xo(s,t);for(const c of this.listeners)c(dr(s),{roomId:e,kind:t,value:a,origin:r});return dr(s)}}function dr(n){return{roomId:n.roomId,kinds:[...n.kinds],state:{...n.state}}}function Fu(n,e,t){return n<e?e:n>t?t:n}function Xo(n,e){return e==="light"?n.state.light:e==="hvac"?n.state.hvacSetpoint:n.state.blind}const aT=[{id:"guest-light-trim",label:"Guest light trim",hint:"Turn off guest-room lighting; public and corridor lights stay on."},{id:"hvac-eco",label:"HVAC eco +2°",hint:"Raise HVAC targets to 26°C where lower."},{id:"solar-shade",label:"Solar shade",hint:"Close guest-room blinds to reduce daytime cooling load."},{id:"restore-comfort",label:"Restore comfort",hint:"Return controllable rooms to their default light, HVAC, and blind settings."}];class JE{constructor(e,t){O(this,"rooms",[]);var i;this.controls=t;for(const r of e.floors)for(const s of r.zones)for(const o of s.rooms)this.rooms.push({roomId:o.id,roomName:o.name,floorId:r.id,floorName:r.name,zoneId:s.id,zoneName:s.name,zoneFunction:s.function,powerDeviceId:(i=o.sensors.find(a=>a.channel==="power"))==null?void 0:i.deviceId})}summary(e,t){const i=new Map,r=new Map,s=[];let o=0;for(const c of this.scopedRooms(t)){if(!c.powerDeviceId)continue;const l=Ss(e.value(c.powerDeviceId)??0);o+=l;const u=i.get(c.floorId)??{floorId:c.floorId,name:c.floorName,totalKw:0,meteredRooms:0};u.totalKw+=l,u.meteredRooms+=1,i.set(c.floorId,u);const h=r.get(c.zoneId)??{zoneId:c.zoneId,name:c.zoneName,function:c.zoneFunction,totalKw:0};h.totalKw+=l,r.set(c.zoneId,h),s.push({roomId:c.roomId,roomName:c.roomName,floorId:c.floorId,floorName:c.floorName,zoneName:c.zoneName,kw:l})}const a=this.scopedControls(t);return{time:e.time,totalKw:Ss(o),controllableRooms:a.length,activeLights:a.filter(c=>c.kinds.includes("light")&&c.state.light).length,byFloor:[...i.values()].map(c=>({...c,totalKw:Ss(c.totalKw)})).sort((c,l)=>c.floorId.localeCompare(l.floorId)),byZone:[...r.values()].map(c=>({...c,totalKw:Ss(c.totalKw)})).sort((c,l)=>l.totalKw-c.totalKw),topLoads:s.sort((c,l)=>l.kw-c.kw).slice(0,6)}}apply(e,t){const i=new Set;let r=0;const s=(o,a,c)=>{!o.kinds.includes(a)||QE(o,a,c)||(this.controls.set(o.roomId,a,c),i.add(o.roomId),r+=1)};for(const o of this.scopedControls(t)){const a=this.roomById(o.roomId);if(a)switch(e){case"guest-light-trim":a.zoneFunction==="guest"&&s(o,"light",!1);break;case"hvac-eco":a.zoneFunction!=="corridor"&&a.zoneFunction!=="plant"&&s(o,"hvac",Math.max(o.state.hvacSetpoint,26));break;case"solar-shade":a.zoneFunction==="guest"&&s(o,"blind",1);break;case"restore-comfort":{const c=zd(a.zoneFunction);s(o,"light",c.light),s(o,"hvac",c.hvacSetpoint),s(o,"blind",c.blind);break}}}return{action:e,floorId:t,changedControls:r,changedRooms:[...i]}}scopedRooms(e){return e?this.rooms.filter(t=>t.floorId===e):this.rooms}scopedControls(e){return this.controls.list().filter(t=>{var i;return!e||((i=this.roomById(t.roomId))==null?void 0:i.floorId)===e})}roomById(e){return this.rooms.find(t=>t.roomId===e)}}function QE(n,e,t){return e==="light"?n.state.light===!!t:e==="hvac"?n.state.hvacSetpoint===Number(t):n.state.blind===Number(t)}function Ss(n){return Math.round(n*100)/100}const ew=[{id:"temp-high",channel:"temperature",op:">",threshold:29,severity:"warning",label:"High temperature"},{id:"power-spike",channel:"power",op:">",threshold:5,severity:"critical",label:"Power spike"},{id:"crowding",channel:"occupancy",op:">",threshold:3,severity:"warning",label:"High occupancy"}],Du=.08;class tw{constructor(e){O(this,"rules",new Map);O(this,"active",new Map);O(this,"devices",[]);O(this,"onRaiseCb",null);O(this,"onClearCb",null);for(const t of e.floors)for(const i of t.zones)for(const r of i.rooms)for(const s of r.sensors)this.devices.push({deviceId:s.deviceId,channel:s.channel,unit:s.unit,roomId:r.id,roomName:r.name,zoneFn:i.function});for(const t of ew)this.rules.set(t.id,{...t})}onAlarm(e,t){this.onRaiseCb=e,this.onClearCb=t}setRule(e){this.rules.set(e.id,{...e})}clearRule(e){const t=this.rules.delete(e);for(const i of[...this.active.values()])i.ruleId===e&&this.retire(i.key);return t}listRules(){return[...this.rules.values()].map(e=>({...e}))}activeAlarms(){return[...this.active.values()].map(e=>({...e}))}alarmingRooms(){const e=new Map;for(const t of this.active.values())(t.severity==="critical"||!e.has(t.roomId))&&e.set(t.roomId,t.severity);return e}evaluate(e){var i;const t=new Set;for(const r of this.rules.values())for(const s of this.devices){if(s.channel!==r.channel||r.zoneFunction&&s.zoneFn!==r.zoneFunction)continue;const o=e.value(s.deviceId);if(o==null)continue;const a=`${r.id}|${s.roomId}`,c=this.active.has(a),l=c?r.threshold*(r.op===">"?1-Du:1+Du):r.threshold;if(r.op===">"?o>l:o<l)if(t.add(a),c)this.active.get(a).value=o;else{const h={key:a,ruleId:r.id,roomId:s.roomId,roomName:s.roomName,channel:s.channel,value:o,threshold:r.threshold,severity:r.severity,label:r.label,unit:s.unit,since:e.time};this.active.set(a,h),(i=this.onRaiseCb)==null||i.call(this,{...h})}}for(const r of[...this.active.keys()])t.has(r)||this.retire(r)}retire(e){var i;const t=this.active.get(e);t&&(this.active.delete(e),(i=this.onClearCb)==null||i.call(this,{...t}))}}const Lu=[{id:"morning",label:"Morning",hint:"lights up · blinds open · cool"},{id:"day",label:"Day",hint:"guest rooms dark · public lit"},{id:"evening",label:"Evening",hint:"warm · guest blinds drawn"},{id:"night",label:"Night",hint:"guest floors dark · corridors only"},{id:"away",label:"Away / Eco",hint:"everything off · setback"}];function nw(n,e){switch(n){case"morning":return{light:!0,blind:0,hvac:23};case"day":return{light:e!=="guest",blind:0,hvac:24};case"evening":return{light:!0,blind:e==="guest"?1:0,hvac:24};case"night":return{light:e==="corridor",blind:1,hvac:25};case"away":return{light:!1,blind:1,hvac:26};default:return{}}}function iw(n,e){const t=[];for(const i of e.floors)for(const r of i.zones){const s=Sc(r.function);if(s.length===0)continue;const o=nw(n,r.function);for(const a of r.rooms)s.includes("light")&&o.light!==void 0&&t.push({roomId:a.id,kind:"light",value:o.light}),s.includes("blind")&&o.blind!==void 0&&t.push({roomId:a.id,kind:"blind",value:o.blind}),s.includes("hvac")&&o.hvac!==void 0&&t.push({roomId:a.id,kind:"hvac",value:o.hvac})}return t}const rw=[{hour:6,scene:"morning"},{hour:10,scene:"day"},{hour:18,scene:"evening"},{hour:22,scene:"night"}];class sw{constructor(e,t,i){O(this,"lastScheduledSolarTime",null);this.building=e,this.controls=t,this.lon=i}list(){return Lu.map(e=>({...e}))}has(e){return Lu.some(t=>t.id===e)}apply(e){const t=iw(e,this.building);let i=0;for(const r of t){if(!this.controls.supports(r.roomId,r.kind))continue;const s=this.controls.get(r.roomId);!s||ow(s,r.kind)===r.value||(this.controls.set(r.roomId,r.kind,r.value),i+=1)}return i}tickSchedule(e,t){const i=e+this.lon/15*36e5;if(this.lastScheduledSolarTime===null){this.lastScheduledSolarTime=i;return}if(i<=this.lastScheduledSolarTime){this.lastScheduledSolarTime=i;return}const r=Math.floor(this.lastScheduledSolarTime/Zo),s=Math.floor(i/Zo);for(let o=r;o<=s;o+=1)for(const a of rw){const c=o*Zo+a.hour*36e5;c>this.lastScheduledSolarTime&&c<=i&&t(a.scene)}this.lastScheduledSolarTime=i}}const Zo=24*36e5;function ow(n,e){return e==="light"?n.state.light:e==="hvac"?n.state.hvacSetpoint:n.state.blind}const Nu=[{name:"reassemble",args:{durationMs:1200},hold:400},{name:"setMode",args:{mode:"default"},hold:2600},{name:"orbitTo",args:{azimuthDeg:210,elevationDeg:26},hold:900},{name:"setMode",args:{mode:"electricity"},hold:3200},{name:"explode",args:{factor:1},hold:2800},{name:"setMode",args:{mode:"environment"},hold:2800},{name:"reassemble",args:{},hold:400},{name:"setMode",args:{mode:"occupancy"},hold:2400},{name:"isolateFloor",args:{floorId:"F4"},hold:2600},{name:"enterRoom",args:{roomId:"F4-R03"},hold:3600},{name:"exitRoom",args:{},hold:1400},{name:"setMode",args:{mode:"default"},hold:400},{name:"reassemble",args:{},hold:2600}];class aw{constructor(e){O(this,"running",!1);O(this,"timer");O(this,"step",0);O(this,"onChange",null);this.ui=e}isRunning(){return this.running}onTourChanged(e){this.onChange=e}start(){var e;this.running||(this.running=!0,this.step=0,(e=this.onChange)==null||e.call(this,!0),this.advance())}stop(){var e;this.running&&(this.running=!1,window.clearTimeout(this.timer),(e=this.onChange)==null||e.call(this,!1))}async advance(){if(!this.running)return;const e=Nu[this.step%Nu.length];this.step++;try{await this.ui.call(e.name,e.args)}catch{}this.running&&(this.timer=window.setTimeout(()=>void this.advance(),e.hold))}}const $o=1e-4,cw={flyIn:.22,flyOut:.2,select:.09,mode:.12,layoutOpen:.18,layoutClose:.18,floor:.12,floorPlan:.14,control:.075,reject:.16,alarm:.6,alarmCritical:.45};class lw{constructor(){O(this,"ctx",null);O(this,"master",null);O(this,"spaceInput",null);O(this,"noiseTexture",null);O(this,"lastCueAt",new Map);O(this,"selectionTimer",null);O(this,"roomExitTimer",null);O(this,"lastView",{kind:"ASSEMBLED"});O(this,"enabled",!0);O(this,"volume",.5);O(this,"subscriptions",[]);O(this,"disposed",!1)}getState(){return{enabled:this.enabled,volume:this.volume}}setAudio(e){if(e.enabled!==void 0&&(this.enabled=e.enabled),e.volume!==void 0&&(this.volume=Math.max(0,Math.min(1,e.volume))),this.master&&this.ctx){const t=this.ctx.currentTime;this.master.gain.cancelScheduledValues(t),this.master.gain.setTargetAtTime(this.enabled?this.volume:0,t,.025)}return this.getState()}attach(e){this.disposed||(this.detach(),this.subscriptions.push(e.on("roomFocusChanged",({roomId:t})=>{t?(this.cancelSelection(),this.cancelRoomExit(),this.play("flyIn")):this.queueRoomExit()})),this.subscriptions.push(e.on("selectionChanged",({ref:t})=>{(t==null?void 0:t.type)==="room"?this.queueSelection():this.cancelSelection()})),this.subscriptions.push(e.on("modeChanged",()=>this.play("mode"))),this.subscriptions.push(e.on("viewChanged",({view:t})=>this.playViewChange(t))),this.subscriptions.push(e.on("controlChanged",()=>this.play("control"))),this.subscriptions.push(e.on("commandRejected",()=>this.play("reject"))),this.subscriptions.push(e.on("alarmRaised",({alarm:t})=>this.play(t.severity==="critical"?"alarmCritical":"alarm"))))}dispose(){var t,i;if(this.disposed)return;this.disposed=!0,this.detach(),this.cancelSelection(),this.cancelRoomExit(),this.lastCueAt.clear(),(t=this.master)==null||t.disconnect(),(i=this.spaceInput)==null||i.disconnect();const e=this.ctx;this.master=null,this.spaceInput=null,this.noiseTexture=null,this.ctx=null,e&&e.state!=="closed"&&e.close().catch(()=>{})}unlock(){var e;this.ensureContext(),((e=this.ctx)==null?void 0:e.state)==="suspended"&&this.ctx.resume()}ensureContext(){if(this.ctx)return;const e=window.AudioContext??window.webkitAudioContext;if(!e)return;const t=new e,i=t.createGain();i.gain.setValueAtTime(this.enabled?this.volume:0,t.currentTime);const r=t.createDynamicsCompressor();r.threshold.setValueAtTime(-20,t.currentTime),r.knee.setValueAtTime(18,t.currentTime),r.ratio.setValueAtTime(8,t.currentTime),r.attack.setValueAtTime(.004,t.currentTime),r.release.setValueAtTime(.16,t.currentTime),i.connect(r).connect(t.destination);const s=t.createDelay(.32);s.delayTime.setValueAtTime(.105,t.currentTime);const o=t.createGain();o.gain.setValueAtTime(.2,t.currentTime);const a=t.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(1800,t.currentTime);const c=t.createGain();c.gain.setValueAtTime(.16,t.currentTime),s.connect(o).connect(s),s.connect(a).connect(c).connect(i),this.ctx=t,this.master=i,this.spaceInput=s}play(e,t=4){if(!this.enabled||(this.ensureContext(),!this.ctx||this.ctx.state!=="running"))return;const i=this.ctx.currentTime,r=this.lastCueAt.get(e);if(!(r!==void 0&&i-r<cw[e]))switch(this.lastCueAt.set(e,i),e){case"flyIn":this.transition(i,"in");break;case"flyOut":this.transition(i,"out");break;case"select":this.selection(i);break;case"mode":this.modeChange(i);break;case"layoutOpen":this.layout(i,!0);break;case"layoutClose":this.layout(i,!1);break;case"floor":this.floorIndex(i,t);break;case"floorPlan":this.floorPlan(i,t);break;case"control":this.confirmation(i);break;case"reject":this.rejection(i);break;case"alarm":this.clinicalAlert(i,!1);break;case"alarmCritical":this.clinicalAlert(i,!0);break}}air(e,t,i,r,s,o=1.2){const a=this.ctx,c=a.createBufferSource();c.buffer=this.getNoiseTexture();const l=a.createBiquadFilter();l.type="bandpass",l.Q.setValueAtTime(o,e),l.frequency.setValueAtTime(r,e),l.frequency.exponentialRampToValueAtTime(s,e+t);const u=this.envelope(e,t,i,Math.min(.04,t*.2));c.connect(l).connect(u).connect(this.cueBus(.13)),c.start(e),c.stop(e+t+.04)}tone(e,t,i,r,s,o){const c=this.ctx.createBiquadFilter();c.type="bandpass",c.Q.setValueAtTime(.85,e),c.frequency.setValueAtTime(Math.max(180,o*.65),e),c.frequency.exponentialRampToValueAtTime(o,e+r);const l=this.envelope(e,r,s,Math.min(.018,r*.18));c.connect(l).connect(this.cueBus(.11)),this.partial(e,t,i,r,"sine",1,1,0,c),this.partial(e,t,i,r,"triangle",2.01,.19,7,c)}resonance(e,t,i,r,s,o){const c=this.ctx.createBiquadFilter();c.type="lowpass",c.Q.setValueAtTime(.72,e),c.frequency.setValueAtTime(Math.max(260,o*.42),e),c.frequency.exponentialRampToValueAtTime(o,e+r);const l=this.envelope(e,r,s,Math.min(.045,r*.22));c.connect(l).connect(this.cueBus(.085)),this.partial(e,t,i,r,"sine",1,.74,-4,c),this.partial(e,t,i,r,"sine",1.004,.27,5,c),this.partial(e,t,i,r,"triangle",1.5,.12,-3,c)}partial(e,t,i,r,s,o,a,c,l){const u=this.ctx,h=u.createOscillator();h.type=s,h.frequency.setValueAtTime(t*o,e),h.frequency.exponentialRampToValueAtTime(i*o,e+r),h.detune.setValueAtTime(c,e);const d=u.createGain();d.gain.setValueAtTime(a,e),h.connect(d).connect(l),h.start(e),h.stop(e+r+.05)}envelope(e,t,i,r){const o=this.ctx.createGain(),a=e+Math.max(.004,Math.min(r,t*.32)),c=Math.max(a+.004,e+t*.58);return o.gain.setValueAtTime($o,e),o.gain.exponentialRampToValueAtTime(i,a),o.gain.exponentialRampToValueAtTime(Math.max($o,i*.58),c),o.gain.exponentialRampToValueAtTime($o,e+t),o}cueBus(e){const t=this.ctx,i=t.createGain();if(i.gain.setValueAtTime(1,t.currentTime),i.connect(this.master),this.spaceInput){const r=t.createGain();r.gain.setValueAtTime(e,t.currentTime),i.connect(r).connect(this.spaceInput)}return i}getNoiseTexture(){if(this.noiseTexture)return this.noiseTexture;const e=this.ctx,t=e.createBuffer(1,Math.ceil(e.sampleRate*1.2),e.sampleRate),i=t.getChannelData(0);let r=1597463007,s=0;for(let o=0;o<i.length;o++){r^=r<<13,r^=r>>>17,r^=r<<5;const a=(r>>>0)/4294967295*2-1;s=s*.985+a*.015,i[o]=a*.42+s*.58}return this.noiseTexture=t,t}transition(e,t){t==="in"?(this.air(e,.56,.024,360,2900,.78),this.resonance(e,118,176,.54,.052,820),this.resonance(e+.075,260,420,.42,.029,1550),this.tone(e+.31,620,760,.18,.015,2200)):(this.resonance(e,180,120,.48,.046,760),this.resonance(e+.055,410,268,.35,.025,1350),this.air(e+.07,.42,.018,2500,380,.82))}selection(e){this.air(e,.16,.011,740,1750,1.4),this.resonance(e,320,445,.22,.027,1120),this.tone(e+.07,505,570,.14,.011,1650)}modeChange(e){this.tone(e,280,420,.18,.046,1500),this.tone(e+.095,420,630,.22,.052,2200)}layout(e,t){const i=t?74:132,r=t?132:76;this.air(e,.68,.02,t?280:2600,t?2450:360,.75),this.resonance(e,i,r,.68,.048,520),this.resonance(e+.12,t?190:350,t?338:205,.45,.024,1240),this.tone(e+.36,t?470:690,t?660:430,.22,.012,2050)}floorIndex(e,t){const i=150*Math.pow(2,(Math.max(1,Math.min(12,t))-1)/15);this.air(e,.24,.012,460,1450,1.05),this.resonance(e,i*.72,i,.29,.032,880),this.resonance(e+.105,i*1.28,i*1.5,.2,.018,1420)}floorPlan(e,t){const i=150*Math.pow(2,(Math.max(1,Math.min(12,t))-1)/15);this.air(e,.34,.014,1900,600,.88),this.resonance(e,i*1.5,i,.34,.03,980),this.tone(e+.14,i*2.1,i*1.82,.19,.013,1550)}confirmation(e){this.air(e,.075,.018,1200,3300,3.1),this.tone(e,600,860,.11,.04,2400)}rejection(e){this.air(e,.3,.024,900,300,1.8),this.tone(e,210,150,.14,.06,560),this.tone(e+.17,180,126,.16,.048,480)}clinicalAlert(e,t){const i=t?[430,610,455]:[520,660],r=t?.155:.2;this.air(e,t?.55:.4,t?.04:.028,780,2300,1.6),i.forEach((s,o)=>{const a=o%2===0?s:s*.9;this.tone(e+o*r,a,s*1.08,r*.82,t?.065:.05,t?2050:1750)})}playViewChange(e){this.cancelRoomExit();const t=this.lastView;switch(this.lastView=e,e.kind){case"ASSEMBLED":t.kind!=="ASSEMBLED"&&this.play("layoutClose");break;case"EXPLODED":this.play(e.factor<(t.kind==="EXPLODED"?t.factor:0)?"layoutClose":"layoutOpen");break;case"ISOLATED":this.play("floor",this.floorNumber(e.floorId));break;case"FLATTENED":this.play("floorPlan",this.floorNumber(e.floorId));break}}floorNumber(e){const t=/\d+$/.exec(e);return t?Number.parseInt(t[0],10):4}queueSelection(){this.cancelSelection(),this.selectionTimer=setTimeout(()=>{this.selectionTimer=null,this.play("select")},32)}cancelSelection(){this.selectionTimer!==null&&(clearTimeout(this.selectionTimer),this.selectionTimer=null)}queueRoomExit(){this.cancelRoomExit(),this.roomExitTimer=setTimeout(()=>{this.roomExitTimer=null,this.play("flyOut")},44)}cancelRoomExit(){this.roomExitTimer!==null&&(clearTimeout(this.roomExitTimer),this.roomExitTimer=null)}detach(){for(const e of this.subscriptions.splice(0))e()}}function Gs(n){return structuredClone(n)}class uw{constructor(){O(this,"records",[])}record(e,t){this.records.push({ts:Date.now(),name:e,args:Gs(t)})}entries(){return this.records.map(e=>({ts:e.ts,name:e.name,args:Gs(e.args)}))}toJSON(){return JSON.stringify(this.entries(),null,2)}}const Yo=De({type:Vt(["building","floor","zone","room","sensor"]),id:Ze(),buildingId:Ze().optional()});class Uu extends Error{constructor(e,t,i){super(t),this.code=e,this.hint=i,this.name="CommandRejection"}}const hw=Vt(["orbit","front","top","isometric"]),dw=Vt(["guest-light-trim","hvac-eco","solar-shade","restore-comfort"]),fw=nr([Rt(-1),Rt(1)]),Ou=nr([Qe().finite(),wd(),Ed({offset:!0,local:!0})]),pw=nr([Rt("live"),De({from:Ou,to:Ou}).superRefine((n,e)=>{ku(n.from)>ku(n.to)&&e.addIssue({code:Ib.custom,path:["from"],message:"Must be on or before to."})})]),mw=De({range:pw}),gw=vc("kind",[De({roomId:Ze(),kind:Rt("light"),value:Pr()}),De({roomId:Ze(),kind:Rt("hvac"),value:Qe().finite().min(Ki[0]).max(Ki[1])}),De({roomId:Ze(),kind:Rt("blind"),value:Qe().finite().min(0).max(1)})]),qo=De({floorId:Ze().optional(),zoneFunction:Vt(["guest","lobby","corridor","plant","amenity"]).optional()}).refine(n=>n.floorId!==void 0||n.zoneFunction!==void 0,{message:"Select at least one of floorId or zoneFunction."}),jo=De({force:Rt(!0),reason:Ze().trim().min(1).max(200),expiresAt:Qe().finite().optional()}),vw=vc("kind",[De({selector:qo,kind:Rt("light"),value:Pr(),override:jo.optional()}),De({selector:qo,kind:Rt("hvac"),value:Qe().finite().min(Ki[0]).max(Ki[1]),override:jo.optional()}),De({selector:qo,kind:Rt("blind"),value:Qe().finite().min(0).max(1),override:jo.optional()})]),zu={durationMs:Qe().positive().max(2e4).optional(),radius:Qe().positive().optional()},Ci={durationMs:Qe().positive().max(2e4).optional()};class _w{constructor(e){O(this,"log",new uw);O(this,"emitter");O(this,"commands",new Map);O(this,"commandListeners",new Set);O(this,"offControlChange",null);O(this,"disposed",!1);O(this,"focusedRoom",null);O(this,"focusRestore",null);O(this,"focusVersion",0);this.deps=e,this.emitter=e.emitter,this.offControlChange=this.deps.controls.onChange(t=>{this.emitter.emit("controlChanged",{entry:t})}),this.deps.alarms.onAlarm(t=>this.emitter.emit("alarmRaised",{alarm:t}),t=>this.emitter.emit("alarmCleared",{alarm:t})),this.deps.viewStateMachine.setViewChangedListener(t=>{var i,r;this.emitter.emit("viewChanged",{view:t}),(r=(i=this.deps.modeManager.getActiveMode())==null?void 0:i.onViewChanged)==null||r.call(i,t)}),this.deps.timeline.setChangeListener(t=>{this.emitter.emit("dataUpdated",{time:t.time,timeMode:t.mode,playbackSpeed:t.playbackSpeed})}),this.define("setMode","Switch the visualization mode (see listModes for available ids).",De({mode:Ze()}),({mode:t})=>{if(!this.deps.modeManager.list().some(s=>s.id===t))throw this.reject("setMode","UNKNOWN_MODE",`No mode '${t}'.`,`Available: ${this.deps.modeManager.list().map(s=>s.id).join(", ")}`);const r=this.deps.modeManager.getActiveId();return this.deps.modeManager.setMode(t).then(()=>{r!==t&&this.emitter.emit("modeChanged",{mode:t})})}),this.define("setAutoRotate","Enable or disable the idle showroom rotation of the building.",De({on:Pr(),speed:Qe().positive().max(10).optional()}),({on:t,speed:i})=>{this.deps.cameraDirector.setAutoRotate(t,i),this.emitter.emit("autoRotateChanged",{on:t,speed:i})}),this.define("orbitTo","Fly the camera to an orbit position around the building. Azimuth 0 faces north; elevation is degrees above the horizon.",De({azimuthDeg:Qe().min(-360).max(360),elevationDeg:Qe().min(0).max(89),...zu}),async t=>{this.leaveRoomForNavigation();const i=await this.deps.cameraDirector.orbitTo(t.azimuthDeg,t.elevationDeg,{durationMs:t.durationMs,radius:t.radius});return i==="completed"&&this.emitter.emit("cameraSettled",{command:"orbitTo"}),{outcome:i}}),this.define("setView","Fly the camera to a named preset view.",De({view:hw,...zu}),async t=>{this.leaveRoomForNavigation();const i=await this.deps.cameraDirector.setView(t.view,{durationMs:t.durationMs,radius:t.radius});return i==="completed"&&this.emitter.emit("cameraSettled",{command:"setView"}),{outcome:i}}),this.define("zoomTo","Cinematic flight framing an entity (or the whole building).",De({target:nr([Rt("building"),Yo]),...Ci}),t=>{t.target!=="building"&&this.assertEntity(t.target,"zoomTo"),this.leaveRoomForNavigation();const i=this.deps.sceneIndex.boxOf(t.target);return this.deps.cameraDirector.zoomToBox(i,{durationMs:t.durationMs}).then(r=>(r==="completed"&&this.emitter.emit("cameraSettled",{command:"zoomTo"}),{outcome:r}))}),this.define("explode","Separate the floors vertically (0 = assembled … 1 = fully exploded).",De({factor:Qe().min(0).max(1),...Ci}),({factor:t,durationMs:i})=>(this.leaveRoomForNavigation(),this.deps.viewStateMachine.explode(t,i))),this.define("isolateFloor","Focus a single floor; all other floors fade to ghost wireframe.",De({floorId:Ze(),...Ci}),({floorId:t,durationMs:i})=>(this.assertFloor(t,"isolateFloor"),this.leaveRoomForNavigation(),this.deps.viewStateMachine.isolate(t,i))),this.define("flattenFloor","Isolate a floor and squash its rooms into a 2D/2.5D floor plan (auto-isolates first).",De({floorId:Ze(),style:Vt(["2d","2.5d"]),...Ci}),({floorId:t,style:i,durationMs:r})=>(this.assertFloor(t,"flattenFloor"),this.leaveRoomForNavigation(),this.deps.viewStateMachine.flatten(t,i,r))),this.define("sliceFloor","Move the isolated (or flattened) floor focus one level up or down; preserves flatten style when active.",De({direction:fw,...Ci}),async({direction:t,durationMs:i})=>{const r=this.deps.buildingIndex.floorIds,s=this.floorSliceAnchor(),o=s?r.indexOf(s)+t:t>0?0:r.length-1,a=r[o];if(!a)return{outcome:"noop",floorId:s??null};this.leaveRoomForNavigation();const c=this.deps.viewStateMachine.getView();return{...c.kind==="FLATTENED"?await this.deps.viewStateMachine.flatten(a,c.style,i):await this.deps.viewStateMachine.isolate(a,i),floorId:a}}),this.define("reassemble","Return every floor to the assembled building and restore the orbit camera.",De({...Ci}),({durationMs:t})=>(this.leaveRoomForNavigation(),this.deps.viewStateMachine.reassemble(t))),this.define("select","Select a room and highlight it; the highlight survives view transitions.",De({ref:Yo}),({ref:t})=>{this.assertRoom(t,"select");const i=this.deps.selectionService.select(t);return this.emitter.emit("selectionChanged",{ref:t,info:this.deps.buildingIndex.info(t)}),{changed:i}}),this.define("clearSelection","Drop the current selection and its highlight.",De({}),()=>{const t=this.deps.selectionService.clear();return this.emitter.emit("selectionChanged",{ref:null,info:null}),{changed:t}}),this.define("inspect","Return an entity’s identity and sensor bindings from the domain model.",De({ref:Yo}),({ref:t})=>(this.assertEntity(t,"inspect"),this.deps.buildingIndex.info(t))),this.define("getView","Return the current decomposition view state (PLAN §4.7).",De({}),()=>this.deps.viewStateMachine.getView()),this.define("setTimeRange","Follow live data ('live') or scrub to a past instant (freezes on the range's `to` edge).",mw,({range:t})=>(this.deps.timeline.setTimeRange(t),{timeMode:this.deps.timeline.getState().mode})),this.define("setPlaybackSpeed","Multiplier on how fast simulated time advances in live mode.",De({x:Qe().positive().max(1e3)}),({x:t})=>(this.deps.timeline.setPlaybackSpeed(t),{playbackSpeed:t})),this.define("setQuality","Pin the render quality tier (high/medium/low); disables auto-downgrade (PLAN §5.1).",De({tier:Vt(["high","medium","low"])}),({tier:t})=>(this.deps.quality.setQuality(t),{quality:t})),this.define("enterRoom","Cinematic fly-through into a room; selects it and drops to an interior view.",De({roomId:Ze(),durationMs:Qe().positive().max(2e4).optional()}),({roomId:t,durationMs:i})=>{var a,c;this.assertRoom({type:"room",id:t},"enterRoom");const r=++this.focusVersion;this.deps.selectionService.select({type:"room",id:t}),this.emitter.emit("selectionChanged",{ref:{type:"room",id:t},info:this.deps.buildingIndex.info({type:"room",id:t})}),this.focusedRoom=t,this.emitter.emit("roomFocusChanged",{roomId:t}),(a=this.focusRestore)==null||a.call(this);const s=(c=this.deps.sceneIndex.room(t))==null?void 0:c.holo;if(s){const l=s.uniforms.uOpacity.value;this.focusRestore=()=>{s.uniforms.uOpacity.value=l},s.uniforms.uOpacity.value=.18}const o=this.deps.sceneIndex.boxOf({type:"room",id:t});return this.deps.cameraDirector.enterRoom(o,{durationMs:i}).then(l=>(l==="superseded"&&r===this.focusVersion&&this.focusedRoom===t&&this.clearRoomFocus(),{outcome:l}))}),this.define("exitRoom","Fly back out of a room to the orbit view (no-op if not focused).",De({durationMs:Qe().positive().max(2e4).optional()}),async({durationMs:t})=>this.focusedRoom?(++this.focusVersion,this.clearRoomFocus({abandonCamera:!1}),{outcome:await this.deps.cameraDirector.exitRoom({durationMs:t})}):{outcome:"noop"}),this.define("setControl","Command a room actuator: light (on/off), hvac (setpoint °C), or blind (0 open…1 closed).",gw,({roomId:t,kind:i,value:r})=>{if(!this.deps.controls.supports(t,i))throw this.reject("setControl","UNKNOWN_ENTITY",`Room '${t}' has no ${i} control.`,"Call getControls to see controllable rooms and their kinds.");const s=this.deps.controls.get(t),o=Bu(s,i)!==r,a=this.deps.controls.set(t,i,r).state;return o&&this.deps.timeline.refresh(),{state:a,changed:o}}),this.define("setControls","Batch-command one actuator across rooms selected by floor and/or zone function. Optional force override metadata is logged for server authorization.",vw,({selector:t,kind:i,value:r,override:s})=>{t.floorId&&this.assertFloor(t.floorId,"setControls");const o=[],a=[];for(const c of this.deps.buildingIndex.roomsMatching(t)){const{id:l}=c.room;if(!this.deps.controls.supports(l,i))continue;o.push(l);const u=this.deps.controls.get(l);Bu(u,i)!==r&&(this.deps.controls.set(l,i,r),a.push(l))}return a.length>0&&this.deps.timeline.refresh(),{selector:{...t},kind:i,value:r,override:s,roomIds:o,changedRoomIds:a,changed:a.length}}),this.define("getControls","Read actuator state for one room, or every controllable room when roomId is omitted.",De({roomId:Ze().optional()}),({roomId:t})=>t?this.deps.controls.get(t)??null:this.deps.controls.list()),this.define("getPowerSummary","Summarize live mock kW by floor and zone, with the highest-draw rooms.",De({floorId:Ze().optional()}),({floorId:t})=>(t&&this.assertFloor(t,"getPowerSummary"),this.deps.power.summary(this.deps.timeline.currentFrame(),t))),this.define("applyPowerAction","Apply a scoped mock power-management action: guest light trim, HVAC eco, solar shade, or restore comfort.",De({action:dw,floorId:Ze().optional()}),({action:t,floorId:i})=>{i&&this.assertFloor(i,"applyPowerAction");const r=this.deps.power.apply(t,i);return r.changedControls>0&&this.deps.timeline.refresh(),r}),this.define("readRoom","Current sensor readings for a room at the displayed instant (channel, unit, value).",De({roomId:Ze()}),({roomId:t})=>{this.assertRoom({type:"room",id:t},"readRoom");const i=this.deps.timeline.currentFrame();return this.deps.buildingIndex.info({type:"room",id:t}).sensors.map(r=>({channel:r.channel,unit:r.unit,value:i.value(r.deviceId)??null}))}),this.define("queryRoom","History series (default 24 h) for each of a room’s sensors — for trends.",De({roomId:Ze(),hours:Qe().positive().max(168).optional()}),({roomId:t,hours:i=24})=>{this.assertRoom({type:"room",id:t},"queryRoom");const r=this.deps.timeline.history(i);return this.deps.buildingIndex.info({type:"room",id:t}).sensors.map(s=>({channel:s.channel,unit:s.unit,points:r.map(o=>o.value(s.deviceId)??null)}))}),this.define("listAlarms","Return the alarms currently firing and the configured alarm rules.",De({}),()=>({active:this.deps.alarms.activeAlarms(),rules:this.deps.alarms.listRules()})),this.define("setAlarmRule","Add or replace an alarm rule (threshold on a sensor channel).",De({id:Ze(),channel:Vt(["temperature","humidity","lux","power","occupancy"]),op:Vt([">","<"]),threshold:Qe().finite(),severity:Vt(["warning","critical"]),label:Ze(),zoneFunction:Vt(["guest","lobby","corridor","plant","amenity"]).optional()}),t=>(this.deps.alarms.setRule(t),{ruleId:t.id})),this.define("clearAlarmRule","Remove an alarm rule and clear any alarms it raised.",De({id:Ze()}),({id:t})=>({removed:this.deps.alarms.clearRule(t)})),this.define("setAudio","Toggle audio cues and/or set the cue volume (0–1).",De({enabled:Pr().optional(),volume:Qe().min(0).max(1).optional()}),t=>{const i=this.deps.audio.setAudio(t);return this.emitter.emit("audioChanged",i),i}),this.define("listScenes","List the available lighting/HVAC scenes.",De({}),()=>this.deps.scenes.list()),this.define("applyScene","Apply a named scene — a batch of actuator changes (see listScenes).",De({scene:Ze()}),({scene:t})=>{if(!this.deps.scenes.has(t))throw this.reject("applyScene","UNKNOWN_SCENE",`No scene '${t}'.`,`Available: ${this.deps.scenes.list().map(r=>r.id).join(", ")}`);const i=this.deps.scenes.apply(t);return i>0&&this.deps.timeline.refresh(),{scene:t,changed:i}}),this.define("startTour","Begin the choreographed attract-loop tour (any user input stops it).",De({}),()=>(this.deps.tour.start(),{running:this.deps.tour.isRunning()})),this.define("stopTour","Stop the attract-loop tour.",De({}),()=>(this.deps.tour.stop(),{running:this.deps.tour.isRunning()}))}setMode(e){return this.call("setMode",{mode:e})}getMode(){return this.deps.modeManager.getActiveId()??"none"}listModes(){return this.deps.modeManager.list()}setAutoRotate(e,t){return this.call("setAutoRotate",{on:e,speed:t})}orbitTo(e,t,i={}){return this.call("orbitTo",{azimuthDeg:e,elevationDeg:t,...i})}setView(e,t={}){return this.call("setView",{view:e,...t})}zoomTo(e,t={}){return this.call("zoomTo",{target:e,...t})}explode(e,t={}){return this.call("explode",{factor:e,...t})}isolateFloor(e,t={}){return this.call("isolateFloor",{floorId:e,...t})}flattenFloor(e,t,i={}){return this.call("flattenFloor",{floorId:e,style:t,...i})}sliceFloor(e,t={}){return this.call("sliceFloor",{direction:e,...t})}reassemble(e={}){return this.call("reassemble",{...e})}select(e){return this.call("select",e)}clearSelection(){return this.call("clearSelection",{})}inspect(e){return this.runCommand("inspect",{ref:e})}getView(){return this.runCommand("getView",{})}setTimeRange(e){return this.call("setTimeRange",{range:e})}setPlaybackSpeed(e){return this.call("setPlaybackSpeed",{x:e})}setQuality(e){return this.call("setQuality",{tier:e})}enterRoom(e,t={}){return this.call("enterRoom",{roomId:e,...t})}exitRoom(e={}){return this.call("exitRoom",e)}setControl(e,t,i){return this.call("setControl",{roomId:e,kind:t,value:i})}setControls(e,t,i,r={}){return this.call("setControls",{selector:e,kind:t,value:i,...r})}getControls(e){return this.runCommand("getControls",{roomId:e})}getPowerSummary(e){return this.runCommand("getPowerSummary",{floorId:e})}applyPowerAction(e,t){return this.call("applyPowerAction",{action:e,floorId:t})}readRoom(e){return this.runCommand("readRoom",{roomId:e})}queryRoom(e,t){return this.runCommand("queryRoom",{roomId:e,hours:t})}listAlarms(){return this.runCommand("listAlarms",{})}setAlarmRule(e){return this.call("setAlarmRule",e)}clearAlarmRule(e){return this.call("clearAlarmRule",{id:e})}setAudio(e){return this.call("setAudio",e)}applyScene(e){return this.call("applyScene",{scene:e})}listScenes(){return this.runCommand("listScenes",{})}startTour(){return this.call("startTour",{})}stopTour(){return this.call("stopTour",{})}dispose(){var e;this.disposed||(this.disposed=!0,++this.focusVersion,this.commandListeners.clear(),(e=this.offControlChange)==null||e.call(this),this.offControlChange=null,this.deps.alarms.onAlarm(Ii,Ii),this.deps.viewStateMachine.setViewChangedListener(Ii),this.deps.timeline.setChangeListener(Ii),this.clearRoomFocus())}getState(){const e=this.deps.timeline.getState();return{mode:this.getMode(),autoRotate:this.deps.cameraDirector.autoRotate,view:this.deps.viewStateMachine.getView(),selection:this.deps.selectionService.current,commandCount:this.log.entries().length,time:e.time,timeMode:e.mode,playbackSpeed:e.playbackSpeed,quality:this.deps.quality.getQuality(),focusedRoom:this.focusedRoom,activeAlarms:this.deps.alarms.activeAlarms().length,audio:this.deps.audio.getState(),touring:this.deps.tour.isRunning()}}describe(){return[...this.commands.entries()].map(([e,t])=>({name:e,description:t.description,params:xw(t.schema)}))}getCommandLog(){return this.log.entries()}on(e,t){return this.disposed?Ii:this.emitter.on(e,t)}async call(e,t={}){return this.runCommand(e,t)}onCommand(e){return this.disposed?Ii:(this.commandListeners.add(e),()=>this.commandListeners.delete(e))}runCommand(e,t){if(this.disposed)throw new Uu("DISPOSED","The interface controller has been disposed.");const i=this.commands.get(e);if(!i)throw this.reject(e,"UNKNOWN_COMMAND",`No command '${e}'.`,`Available: ${[...this.commands.keys()].join(", ")}`);const r=i.schema.safeParse(this.normalizeArgs(e,t));if(!r.success){const a=r.error.issues.map(c=>`${c.path.join(".")||"(args)"}: ${c.message}`).join("; ");throw this.reject(e,"INVALID_ARGS",`Invalid arguments for ${e} — ${a}`,"Call ui.describe() for command schemas.")}const s=Gs(r.data),o=i.run(r.data);this.log.record(e,s);for(const a of this.commandListeners)a(e,Gs(s));return o}normalizeArgs(e,t){return e!=="setTimeRange"?t:t==="live"||yw(t)?{range:t}:t}define(e,t,i,r){this.commands.set(e,{description:t,schema:i,run:r})}assertFloor(e,t){if(!this.deps.buildingIndex.floor(e))throw this.reject(t,"UNKNOWN_ENTITY",`No floor '${e}' in the building.`,`Valid floors: ${this.deps.buildingIndex.floorIds.join(", ")}`)}floorSliceAnchor(){var i,r;const e=this.deps.viewStateMachine.getView();if(e.kind==="ISOLATED"||e.kind==="FLATTENED")return e.floorId;if(this.focusedRoom)return(i=this.deps.buildingIndex.room(this.focusedRoom))==null?void 0:i.floor.id;const t=this.deps.selectionService.current;if((t==null?void 0:t.type)==="floor")return t.id;if((t==null?void 0:t.type)==="room")return(r=this.deps.buildingIndex.room(t.id))==null?void 0:r.floor.id}leaveRoomForNavigation(){++this.focusVersion,this.clearRoomFocus()}clearRoomFocus(e={}){var i;const t=this.focusedRoom!==null;return t&&(this.focusedRoom=null,this.emitter.emit("roomFocusChanged",{roomId:null})),(i=this.focusRestore)==null||i.call(this),this.focusRestore=null,e.abandonCamera!==!1&&this.deps.cameraDirector.abandonRoomFocus(),t}assertRoom(e,t){if(e.type!=="room"||!this.deps.buildingIndex.room(e.id))throw this.reject(t,"UNKNOWN_ENTITY",`No room '${e.id}' in the building.`,`Valid floors: ${this.deps.buildingIndex.floorIds.join(", ")}`)}assertEntity(e,t){if(!(e.type==="building"||e.type==="room"&&!!this.deps.buildingIndex.room(e.id)||e.type==="floor"&&!!this.deps.buildingIndex.floor(e.id)))throw this.reject(t,"UNKNOWN_ENTITY",`No ${e.type} '${e.id}' in the building.`,`Valid floors: ${this.deps.buildingIndex.floorIds.join(", ")}`)}reject(e,t,i,r){const s=new Uu(t,i,r);return this.emitter.emit("commandRejected",{command:e,error:{code:t,message:i,hint:r}}),s}}function xw(n){try{return gM(n)}catch{return}}function ku(n){return typeof n=="number"?n:Date.parse(n)}function yw(n){if(!n||typeof n!="object"||Array.isArray(n))return!1;const e=n;return!Object.hasOwn(e,"range")&&(Object.hasOwn(e,"from")||Object.hasOwn(e,"to"))}function Bu(n,e){return e==="light"?n.state.light:e==="hvac"?n.state.hvacSetpoint:n.state.blind}function Ii(){}class Sw{constructor(){O(this,"handlers",new Map)}on(e,t){let i=this.handlers.get(e);return i||(i=new Set,this.handlers.set(e,i)),i.add(t),()=>i.delete(t)}emit(e,t){var i;(i=this.handlers.get(e))==null||i.forEach(r=>r(t))}clear(){this.handlers.clear()}}function kd(n){return n.map(e=>({name:e.name,description:e.description,input_schema:Mw(e.params)?e.params:{type:"object",properties:{}}}))}function Mw(n){return typeof n=="object"&&n!==null}async function bw(n,e,t={}){var r;const i=[];for(let s=0;s<e.length;s++){const o=e[s];try{await n.call(o.name,o.args)}catch(a){i.push({name:o.name,message:a instanceof Error?a.message:String(a)})}(r=t.onStep)==null||r.call(t,o,s)}return{steps:e.length,rejected:i}}const Vu=Date.UTC(2026,6,17,5,0,0),Hu=[{name:"setAutoRotate",args:{on:!1}},{name:"setTimeRange",args:{from:Vu,to:Vu}},{name:"setMode",args:{mode:"electricity"}},{name:"orbitTo",args:{azimuthDeg:120,elevationDeg:35,durationMs:1}},{name:"explode",args:{factor:1,durationMs:1}},{name:"setMode",args:{mode:"environment"}},{name:"isolateFloor",args:{floorId:"F4",durationMs:1}},{name:"setMode",args:{mode:"occupancy"}},{name:"flattenFloor",args:{floorId:"F4",style:"2d",durationMs:1}},{name:"reassemble",args:{durationMs:1}},{name:"select",args:{ref:{type:"room",id:"F4-R03"}}}];class Mc{constructor(e,t,i=!1){O(this,"disposed",!1);O(this,"onMessage");this.ui=e,this.socket=t,this.closeSocketOnDispose=i,this.onMessage=r=>void this.handle(r.data),t.onmessage=this.onMessage}static connect(e,t){return new Mc(e,new WebSocket(t),!0)}dispose(){var e,t;this.disposed||(this.disposed=!0,this.socket.onmessage===this.onMessage&&(this.socket.onmessage=null),this.closeSocketOnDispose&&((t=(e=this.socket).close)==null||t.call(e)))}async handle(e){if(this.disposed)return;let t;try{t=JSON.parse(e)}catch{return this.send({error:{code:"BAD_JSON",message:"payload was not valid JSON"}})}if(t.name==="__list_tools")return this.send({id:t.id,result:kd(this.ui.describe())});try{const i=await this.ui.call(t.name,t.args??{});this.send({id:t.id,result:i??null})}catch(i){const r=i;this.send({id:t.id,error:{code:r.code??"ERROR",message:r.message??String(i),hint:r.hint}})}}send(e){this.disposed||this.socket.send(JSON.stringify(e))}}const Ew=new Set(["inspect","getView","getControls","getPowerSummary","readRoom","queryRoom","listAlarms","listScenes"]);class ww{constructor(e,t="holo-bms",i=r=>new BroadcastChannel(r)){O(this,"ch");O(this,"applying",!1);O(this,"off");O(this,"source",Rw());O(this,"peers",new Set);O(this,"leader",!0);O(this,"leadershipListeners",new Set);this.ui=e,this.ch=i(t),this.ch.onmessage=r=>this.receive(r.data),this.off=e.onCommand((r,s)=>{this.applying||Ew.has(r)||this.ch.postMessage({type:"command",source:this.source,name:r,args:s})}),this.ch.postMessage({type:"hello",source:this.source})}isLeader(){return this.leader}onLeadershipChange(e){return this.leadershipListeners.add(e),e(this.leader),()=>this.leadershipListeners.delete(e)}dispose(){this.ch.postMessage({type:"goodbye",source:this.source}),this.off(),this.leadershipListeners.clear(),this.ch.close()}receive(e){if(!(!Tw(e)||e.source===this.source))switch(e.type){case"hello":this.addPeer(e.source),this.ch.postMessage({type:"present",source:this.source});return;case"present":this.addPeer(e.source);return;case"goodbye":this.peers.delete(e.source)&&this.updateLeadership();return;case"command":this.applying=!0;let t;try{t=this.ui.call(e.name,e.args)}finally{this.applying=!1}t.catch(()=>{})}}addPeer(e){this.peers.has(e)||(this.peers.add(e),this.updateLeadership())}updateLeadership(){const e=this.source===[...this.peers,this.source].sort()[0];if(e!==this.leader){this.leader=e;for(const t of this.leadershipListeners)t(e)}}}function Tw(n){if(!n||typeof n!="object")return!1;const e=n;return typeof e.source!="string"||typeof e.type!="string"?!1:e.type==="command"?typeof e.name=="string":e.type==="hello"||e.type==="present"||e.type==="goodbye"}function Rw(){var e,t;return((t=(e=globalThis.crypto)==null?void 0:e.randomUUID)==null?void 0:t.call(e))??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}function io(n,e){const t=new Map;for(const i of e)t.set(i.deviceId,i.value);return{time:n,readings:e,value:i=>t.get(i)}}const Aw=36e5,Cw={temperature:{unit:"°C",domain:[18,34],label:"Temperature"},humidity:{unit:"%RH",domain:[30,90],label:"Humidity"},lux:{unit:"lx",domain:[0,1e3],label:"Illuminance"},power:{unit:"kW",domain:[0,6],label:"Power"},occupancy:{unit:"ppl",domain:[0,4],label:"Occupancy"}};class Bd{constructor(e,t){O(this,"sensors",[]);O(this,"lon");this.controls=t,this.lon=e.location.lon;for(const i of e.floors)for(const r of i.zones)for(const s of r.rooms)for(const o of s.sensors)this.sensors.push({deviceId:o.deviceId,channel:o.channel,unit:o.unit,roomId:s.id,zoneFn:r.function,seed:Ow(o.deviceId)})}capabilities(){return[...new Set(this.sensors.map(t=>t.channel))].map(t=>({channel:t,...Cw[t]}))}sample(e,t){const i=new Set(e),r=[];for(const s of this.sensors)i.has(s.channel)&&r.push({deviceId:s.deviceId,channel:s.channel,unit:s.unit,value:zw(this.valueFor(s,t))});return io(t,r)}query(e,t,i=6e4){const r=[];for(let s=t.from;s<=t.to;s+=i)r.push(this.sample(e,s));return r}solarHour(e){return((e/Aw%24+this.lon/15)%24+24)%24}valueFor(e,t){var o;const i=this.solarHour(t),r=.5+.5*Math.sin(t/6e5+e.seed),s=(o=this.controls)==null?void 0:o.call(this,e.roomId);switch(e.channel){case"temperature":{const a=(s==null?void 0:s.blind)??0,c=Ws(i)*Fw(e.zoneFn)*(1-a*.75),l=Ms(i)-Iw(e.zoneFn)+c+(r-.5)*1.2;return s?l*.4+s.hvacSetpoint*.6:l}case"humidity":return Xa(78-(Ms(i)-24)*3+(r-.5)*6,30,95);case"lux":{const a=Ws(i)*Pw(e.zoneFn)*(.85+.3*r),c=s?1-.85*s.blind:1,l=s!=null&&s.light?120:0;return Math.max(0,a*c+l)}case"occupancy":return Vd(e.zoneFn,i,e.seed);case"power":{const a=Dw(e.zoneFn,i,Ms(i),e.seed,r);return s?Nw(a,s,e.zoneFn,i,Ms(i)):a}}}}function Ms(n){return 28+5*Math.sin(2*Math.PI*(n-9)/24)}function Ws(n){return n<=6||n>=18?0:Math.sin(Math.PI*(n-6)/12)}function Iw(n){switch(n){case"guest":return 4;case"lobby":case"amenity":return 5;case"corridor":return 2;case"plant":return-2}}function Pw(n){switch(n){case"amenity":return 900;case"lobby":return 700;case"guest":return 500;case"corridor":return 300;case"plant":return 150}}function Fw(n){switch(n){case"guest":return 1.4;case"lobby":return 1;case"amenity":return .9;case"corridor":return .35;case"plant":return .2}}function Vd(n,e,t){const i=.5+.5*Math.sin(t*12.9898);switch(n){case"guest":{const r=e<8||e>=22?1:e>=18?.6:.15;return i>.45?bs(r*(1+i)):0}case"lobby":return bs(fr(e,10,6)*4+fr(e,18,4)*2);case"amenity":return bs(fr(e,8,3)*2+fr(e,19,4)*3);case"corridor":return bs(fr(e,9,8)*1.5);case"plant":return 0}}function Dw(n,e,t,i,r){const s=Math.max(0,t-24)*Lw(n),o=Vd(n,e,i);switch(n){case"guest":return Fi(.15+s+o*.25+r*.1);case"lobby":return Fi(1.2+s+o*.15+r*.3);case"amenity":return Fi(.8+s+o*.3+r*.4);case"corridor":return Fi(.3+s*.3+r*.05);case"plant":return Fi(2.5+s*1.5+Ws(e)*.5+r*.6)}}function Lw(n){switch(n){case"guest":return .08;case"lobby":case"amenity":return .15;case"corridor":return .04;case"plant":return .4}}function Nw(n,e,t,i,r){let s=n;if(e.light||(s*=1-Uw(t)),t==="guest"||t==="lobby"||t==="amenity"){const o=Xa((r-24)/10,0,1.2),a=e.hvacSetpoint-24;s*=Xa(1-a*.055*o,.72,1.3)}return t==="guest"&&(s*=1-Ws(i)*e.blind*.14),Fi(Math.max(.03,s))}function Uw(n){switch(n){case"guest":return .32;case"lobby":return .25;case"amenity":return .28;case"corridor":return .22;case"plant":return 0}}function fr(n,e,t){const i=(n-e)/t;return Math.exp(-.5*i*i)}function Ow(n){let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return(e>>>0)%1e3/1e3}function Xa(n,e,t){return n<e?e:n>t?t:n}const zw=n=>Math.round(n*100)/100,bs=n=>Math.round(n*10)/10,Fi=n=>Math.round(n*100)/100,kw=De({deviceId:Ze(),channel:_c,unit:Ze(),value:Qe().finite()}),Bw=De({time:Qe().finite(),readings:$n(kw)}),Vw=De({channel:_c,unit:Ze(),domain:Cd([Qe().finite(),Qe().finite()]),label:Ze()}),Hw=vc("type",[De({type:Rt("hello"),protocol:Rt(1),capabilities:$n(Vw)}),De({type:Rt("frame"),frame:Bw}),De({type:Rt("control"),id:Ze(),roomId:Ze(),kind:Vt(["light","hvac","blind"]),value:nr([Pr(),Qe().finite()]),accepted:Rt(!0)}),De({type:Rt("error"),code:Ze(),message:Ze(),id:Ze().optional()})]);class Gw{constructor(e,t,i={}){O(this,"fallback");O(this,"socketFactory");O(this,"reconnectMs");O(this,"maxCachedFrames");O(this,"socket",null);O(this,"reconnectTimer");O(this,"disposed",!1);O(this,"connected",!1);O(this,"capabilitiesValue");O(this,"frames",[]);O(this,"frameListeners",new Set);O(this,"controlListeners",new Set);O(this,"outbox",[]);O(this,"sequence",0);this.url=e,this.fallback=new Bd(t),this.capabilitiesValue=this.fallback.capabilities(),this.socketFactory=i.webSocketFactory??(r=>new WebSocket(r)),this.reconnectMs=i.reconnectMs??1500,this.maxCachedFrames=Math.max(2,i.maxCachedFrames??1440)}capabilities(){return this.capabilitiesValue.map(e=>({...e,domain:[...e.domain]}))}connect(){if(this.disposed||this.socket)return;let e;try{e=this.socketFactory(this.url)}catch{this.scheduleReconnect();return}this.socket=e,e.onopen=()=>{if(!(this.socket!==e||this.disposed)){this.connected=!0,this.sendNow({type:"hello",protocol:1}),this.sendNow({type:"subscribe"});for(const t of this.outbox.splice(0))this.sendNow(t)}},e.onmessage=t=>this.receive(e,t.data),e.onerror=()=>{},e.onclose=()=>{this.socket===e&&(this.socket=null,this.connected=!1,this.scheduleReconnect())}}dispose(){if(this.disposed)return;this.disposed=!0,window.clearTimeout(this.reconnectTimer),this.reconnectTimer=void 0;const e=this.socket;this.socket=null,this.connected=!1,e&&(e.onopen=null,e.onmessage=null,e.onerror=null,e.onclose=null,e.close()),this.frameListeners.clear(),this.controlListeners.clear(),this.outbox=[]}onFrame(e){return this.frameListeners.add(e),()=>this.frameListeners.delete(e)}onControl(e){return this.controlListeners.add(e),()=>this.controlListeners.delete(e)}sendControl(e){const t={type:"control",id:`control-${++this.sequence}`,roomId:e.roomId,kind:e.kind,value:e.value};this.connected?this.sendNow(t):this.outbox.push(t)}sample(e,t){const i=Ww(this.frames,t);return i?Xw(i,e,t):this.fallback.sample(e,t)}query(e,t,i=6e4){const r=[];for(let s=t.from;s<=t.to;s+=i)r.push(this.sample(e,s));return r}receive(e,t){if(this.socket!==e||this.disposed||typeof t!="string")return;let i;try{i=JSON.parse(t)}catch{return}const r=Hw.safeParse(i);if(r.success)switch(r.data.type){case"hello":this.capabilitiesValue=r.data.capabilities.map(s=>({...s,domain:[...s.domain]}));return;case"frame":{const s=io(r.data.frame.time,r.data.frame.readings.map(o=>({...o})));this.frames.push(s),this.frames.length>this.maxCachedFrames&&this.frames.splice(0,this.frames.length-this.maxCachedFrames);for(const o of this.frameListeners)o(Zw(s));return}case"control":{const s={roomId:r.data.roomId,kind:r.data.kind,value:r.data.value};for(const o of this.controlListeners)o({...s});return}case"error":return}}sendNow(e){if(!(!this.socket||!this.connected))try{this.socket.send(JSON.stringify(e))}catch{e.type==="control"&&this.outbox.push(e)}}scheduleReconnect(){this.disposed||this.reconnectMs<=0||this.reconnectTimer!==void 0||(this.reconnectTimer=window.setTimeout(()=>{this.reconnectTimer=void 0,this.connect()},this.reconnectMs))}}function Ww(n,e){let t,i=1/0;for(const r of n){const s=Math.abs(r.time-e);s<i&&(t=r,i=s)}return t}function Xw(n,e,t){const i=new Set(e);return io(t,n.readings.filter(r=>i.has(r.channel)).map(r=>({...r})))}function Zw(n){return io(n.time,n.readings.map(e=>({...e})))}const $w={id:"default",name:"Hologram",description:"Idle showroom hologram — slow rotation, ambient particles, no data overlay.",accent:"#36e6ff",channels:[]},Yw={id:"electricity",name:"Electricity",description:"Live power draw — rooms tinted by kW, per-floor bars, pulsing risers.",accent:"#aef049",channels:["power"]},qw={id:"environment",name:"Environment",description:"Heat, humidity & sunlight — temperature tint, humidity fog, sun from real geo + time.",accent:"#ffb020",channels:["temperature","humidity","lux"]},jw={id:"occupancy",name:"Occupancy",description:"Live room occupancy — headcount tint, occupant dots, per-floor ring gauges.",accent:"#ff45c8",channels:["occupancy"]},Kw=(n,e)=>{n?e.select({ref:n}):e.clearSelection()};function cT(n,e,t={}){const i=Jw(zb(e)),r=new kb(i),s=new KE(i),o=new JE(i,s),a=new sw(i,s,i.location.lon),c=new fE(n),l=[],u=new Set,h=te=>{const ue=c.registerUpdate(te);return l.push(ue),ue},{root:d,floorGroups:f}=_E(i);c.scene.add(d);const g=new $t().setFromObject(d).getSize(new C),v=Math.hypot(g.x,g.z)/2+3,m=new ME(v);c.scene.add(m.group),h((te,ue)=>m.update(te,ue));const p=new AE;h(()=>p.update(performance.now())),c.controls.target.set(0,g.y*.45,0);const w=new an(v*2.7,_t.degToRad(68),_t.degToRad(35));c.camera.position.setFromSpherical(w).add(c.controls.target),c.camera.lookAt(c.controls.target);const M=new PE(c.camera,c.controls,p),x=new un;x.name="modeOverlay",c.scene.add(x);const N=new Sw,R=t.provider??(t.realtimeUrl?new Gw(t.realtimeUrl,i):new Bd(i,te=>{var ue;return(ue=s.get(te))==null?void 0:ue.state})),A=new qE(R);h(()=>A.tick()),Od(R)&&(l.push(R.onControl(te=>{s.supports(te.roomId,te.kind)&&(s.set(te.roomId,te.kind,te.value,"remote"),A.refresh())})),l.push(s.onChange((te,ue)=>{ue.origin==="local"&&R.sendControl(ue)})),l.push(()=>R.dispose()));const F=new DE(f,d),E=new UE(F,M,p,d),S=new VE(F),I=new bE(F,s);c.scene.add(I.group),h(()=>I.update());const $=new tw(i);l.push(A.addFrameListener(te=>$.evaluate(te)));const V=new TE(F,$);c.scene.add(V.group),h((te,ue)=>V.update(ue));const G=new lw,j=new FE({building:i,buildingIndex:r,sceneIndex:F,overlay:x,cameraDirector:M,timeline:A,registerSceneUpdate:h,emitLegend:te=>N.emit("legendChanged",{spec:te}),setFog:te=>c.setFogDensity(te)});j.registerLazy($w,async()=>{const{DefaultMode:te}=await zr(async()=>{const{DefaultMode:ue}=await import("./DefaultMode-6tHksXVs.js");return{DefaultMode:ue}},[]);return new te}),j.registerLazy(Yw,async()=>{const{ElectricityMode:te}=await zr(async()=>{const{ElectricityMode:ue}=await import("./ElectricityMode-D9uOeN15.js");return{ElectricityMode:ue}},__vite__mapDeps([0,1]));return new te}),j.registerLazy(qw,async()=>{const{EnvironmentMode:te}=await zr(async()=>{const{EnvironmentMode:ue}=await import("./EnvironmentMode-Cd4uV1Lg.js");return{EnvironmentMode:ue}},__vite__mapDeps([2,1]));return new te}),j.registerLazy(jw,async()=>{const{OccupancyMode:te}=await zr(async()=>{const{OccupancyMode:ue}=await import("./OccupancyMode-XH61KpSF.js");return{OccupancyMode:ue}},__vite__mapDeps([3,1]));return new te});let z=null;const Q=new _w({modeManager:j,cameraDirector:M,viewStateMachine:E,selectionService:S,sceneIndex:F,buildingIndex:r,timeline:A,quality:{setQuality:te=>c.setQuality(te),getQuality:()=>c.getQuality()},audio:G,tour:{start:()=>z==null?void 0:z.start(),stop:()=>z==null?void 0:z.stop(),isRunning:()=>(z==null?void 0:z.isRunning())??!1},controls:s,power:o,alarms:$,scenes:a,emitter:N});c.onQualityChange((te,ue)=>N.emit("qualityChanged",{tier:te,auto:ue}));const H=t.multiScreenChannel?new ww(Q,t.multiScreenChannel):null;if(t.autoScenes){let te=()=>{};const ue=Ye=>{te(),te=Ye?A.addLiveFrameListener(K=>a.tickSchedule(K.time,oe=>void Q.applyScene(oe))):()=>{}};H?l.push(H.onLeadershipChange(ue)):ue(!0),l.push(()=>te())}G.attach(Q);const ce=()=>{G.unlock(),window.removeEventListener("pointerdown",ce),window.removeEventListener("keydown",ce)};window.addEventListener("pointerdown",ce),window.addEventListener("keydown",ce),l.push(()=>{window.removeEventListener("pointerdown",ce),window.removeEventListener("keydown",ce)}),z=new aw(Q),z.onTourChanged(te=>N.emit("tourChanged",{running:te}));const me=["pointerdown","keydown","wheel"];let xe;const Oe=()=>{z!=null&&z.isRunning()&&Q.stopTour(),t.idleTourMs&&t.idleTourMs>0&&(window.clearTimeout(xe),xe=window.setTimeout(()=>void Q.startTour(),t.idleTourMs))};for(const te of me)window.addEventListener(te,Oe,{passive:!0});l.push(()=>{window.clearTimeout(xe);for(const te of me)window.removeEventListener(te,Oe)}),t.idleTourMs&&t.idleTourMs>0&&(xe=window.setTimeout(()=>void Q.startTour(),t.idleTourMs));const Ke=t.onRoomPick??Kw,Y=new GE(c.camera,c.domElement,d,te=>Ke(te,Q)),se=eT(Q);let Me=!1;return{ui:Q,building:i,start:()=>{Me||(c.start(),Q.setMode(t.initialMode??"default"))},registerDisposer:te=>{if(Me)return te(),()=>{};u.add(te);let ue=!0;return()=>{ue&&(ue=!1,u.delete(te))}},dispose:async()=>{if(Me)return;Me=!0,c.stop();for(const ue of u)ue();u.clear(),z==null||z.stop(),se.dispose(),H==null||H.dispose(),Y.dispose(),A.dispose();for(const ue of l.splice(0))ue();E.dispose(),await j.dispose(),G.dispose(),Q.dispose(),M.dispose(),p.cancelAll(),Qw(c.scene),c.scene.clear(),c.dispose(),N.clear();const te=window;te.ui===Q&&delete te.ui,te.agent===se.agent&&delete te.agent}}}function Jw(n){const e=new Set,t=i=>{if(!(!i||typeof i!="object"||e.has(i))){e.add(i);for(const r of Object.values(i))t(r);Object.freeze(i)}};return t(n),n}function Qw(n){const e=new Set,t=new Set;n.traverse(i=>{const r=i;r.geometry&&e.add(r.geometry);const s=r.material;Array.isArray(s)?s.forEach(o=>t.add(o)):s&&t.add(s)});for(const i of e)i.dispose();for(const i of t)i.dispose()}function eT(n,e){const t=new Set,i=a=>{const c=Mc.connect(n,a);return t.add(c),c},r={toolDefinitions:()=>kd(n.describe()),replay:(a=Hu)=>bw(n,a),DEMO_SCENARIO:Hu,connect:i};window.ui=n,window.agent=r;let s;const o=new URLSearchParams(location.search).get("remote");return o&&i(o),{agent:r,holo:s,dispose:()=>{for(const a of t)a.dispose();t.clear()}}}const Hd=12;function lT(n,e){const t=rT(),i=tT(n,e),r=document.createElement("div");r.className="cmdk",r.hidden=!0,r.innerHTML=`
    <div class="cmdk-box" role="dialog" aria-label="Command palette">
      <input class="cmdk-input" type="text" placeholder="Jump to a room, mode, or action…" />
      <ul class="cmdk-list"></ul>
    </div>`,document.body.appendChild(r);const s=r.querySelector(".cmdk-input"),o=r.querySelector(".cmdk-list");let a=[],c=0;const l=()=>{r.hidden=!1,s.value="",h(),s.focus()},u=()=>{r.hidden=!0},h=()=>{a=nT(s.value,i).slice(0,Hd),c=0,o.innerHTML=a.map((M,x)=>`<li class="${x===c?"on":""}">${Gu(M.label)}${M.hint?`<span>${Gu(M.hint)}</span>`:""}</li>`).join("")},d=M=>{var x;a.length!==0&&(c=(c+M+a.length)%a.length,[...o.children].forEach((N,R)=>N.classList.toggle("on",R===c)),(x=o.children[c])==null||x.scrollIntoView({block:"nearest"}))},f=()=>{const M=a[c];u(),M==null||M.run()},g=()=>h(),v=M=>{const x=M.target.closest("li");x&&(c=[...o.children].indexOf(x),f())},m=M=>{M.key==="ArrowDown"?(M.preventDefault(),d(1)):M.key==="ArrowUp"?(M.preventDefault(),d(-1)):M.key==="Enter"?(M.preventDefault(),f()):M.key==="Escape"&&(M.preventDefault(),u())},p=M=>{M.target===r&&u()},w=M=>{(M.ctrlKey||M.metaKey)&&M.key.toLowerCase()==="k"&&(M.preventDefault(),r.hidden?l():u())};return s.addEventListener("input",g),o.addEventListener("mousedown",v),s.addEventListener("keydown",m),r.addEventListener("mousedown",p),window.addEventListener("keydown",w),()=>{s.removeEventListener("input",g),o.removeEventListener("mousedown",v),s.removeEventListener("keydown",m),r.removeEventListener("mousedown",p),window.removeEventListener("keydown",w),r.remove(),t()}}function tT(n,e){const t=[];for(const i of n.listModes())t.push({label:`Mode · ${i.name}`,hint:i.id,run:()=>void n.setMode(i.id)});for(const i of n.listScenes())t.push({label:`Scene · ${i.label}`,hint:i.hint,run:()=>void n.applyScene(i.id)});for(const i of["orbit","front","top","isometric"])t.push({label:`View · ${i}`,run:()=>void n.setView(i)});t.push({label:"Reassemble building",run:()=>void n.reassemble()},{label:"Explode floors",run:()=>void n.explode(1)},{label:"Fly out of room",run:()=>void n.exitRoom()},{label:"Start attract tour",run:()=>void n.startTour()},{label:"Stop attract tour",run:()=>void n.stopTour()},{label:"Toggle audio cues",run:()=>void n.setAudio({enabled:!n.getState().audio.enabled})},{label:"Quality · high",run:()=>void n.setQuality("high")},{label:"Quality · medium",run:()=>void n.setQuality("medium")},{label:"Quality · low",run:()=>void n.setQuality("low")},{label:"Live data",run:()=>void n.setTimeRange("live")});for(const i of e.floors)for(const r of i.zones)for(const s of r.rooms)t.push({label:s.name,hint:`${s.id} · ${i.name}`,run:()=>void n.enterRoom(s.id)});return t}function nT(n,e){return n.trim()?e.map(t=>({e:t,s:iT(n,`${t.label} ${t.hint??""}`)})).filter(t=>t.s>=0).sort((t,i)=>i.s-t.s).map(t=>t.e):e.slice(0,Hd)}function iT(n,e){const t=n.toLowerCase().replace(/\s+/g,""),i=e.toLowerCase();let r=0,s=0,o=0;for(const a of t){const c=i.indexOf(a,r);if(c===-1)return-1;o=c===r?o+1:0,s+=2+o*2-Math.min(c-r,8)*.1,r=c+1}return s}function Gu(n){return n.replace(/[&<>]/g,e=>e==="&"?"&amp;":e==="<"?"&lt;":"&gt;")}let Es=null,ws=0;function rT(){let n=document.getElementById("cmdk-styles");n||(n=document.createElement("style"),n.id="cmdk-styles",n.textContent=`
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
    `,document.head.appendChild(n),Es=n),ws+=1;let e=!1;return()=>{e||(e=!0,ws=Math.max(0,ws-1),ws===0&&Es&&(Es.remove(),Es=null))}}export{In as A,Ft as B,Be as C,$w as D,Yw as E,Sr as H,$s as M,jw as O,aT as P,cc as R,At as S,C as V,Yt as a,rc as b,cT as c,Th as d,Lr as e,Ut as f,Ud as g,qw as h,cn as i,lT as m,oT as r};
