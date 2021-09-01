const geoip = require("geoip-lite");
var ip = "203.212.247.251";
var geo = geoip.lookup(ip);
console.log('--> ', geo);