console.log('localphi.js loaded')

// lets try to use HL7 FHIR data model as closely as possibly to make hings easier later if a backed is engage

localphi=function(x){
    this.x=x
    // ---- ini ---
    // look for a URL to load if this is localphi.html
    var m = document.location.href.match(/localphi.html\?(http:\/\/.*)/)
    if(m.length==2){$.getScript(m[1])}
}

// start
new localphi

