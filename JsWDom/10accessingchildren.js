//direct children - head and body child nodes of html
//siblings nodes - head and body of each other
//descendant nodes - head,meta,text,title of html(every node inside of specific)


console.log(document.body.firstChild) //=== elem.childnodes[0] //will get text cause thr's space after opening body tag
console.log(document.body.lastChild)
let arr = Array.from(document.body.childNodes)
console.log(arr)