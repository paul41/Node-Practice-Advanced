//SEE- https://www.cloudflare.com/en-in/learning/dns/what-is-dns/

//The DNS resolver starts the sequence of queries that ultimately leads to a URL being translated into the necessary IP address.
const dns = require('dns');
dns.lookup('www.google.com',(err,address,family)=>{ //uses the operating system facilities to perform name resolution.
    if (err) throw err;
    console.log('address: %j family: IPv%s', address, family);
})

dns.resolve4('www.yahoo.com',(err,addr)=>{
    if (err) throw err;
    console.log(`addresses: ${JSON.stringify(addr)}`);
    addr.forEach((item)=>{
        dns.reverse(item,(err,hostnames)=>{
            if (err) throw err;
            console.log(`reverse for ${item}: ${JSON.stringify(hostnames)}`);
        })
    })
})

//GOOGLE public DNS
//TRY bom07s24-in-f4.1e100.net(equal to google ip)
dns.reverse('8.8.8.8',(err,hostnames)=>{
    if (err) throw err;
    console.log(hostnames)
})
