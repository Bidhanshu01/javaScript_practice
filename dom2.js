console.log("hello world")

 // phele hi clear kr du phele text then elemnt(box) then text then element(box) then text then element(box) then text then element(box) then text then element(box) then text

    //document.body i get the body of the document
    // document.body.childNodes gives the child nodes of the body       NodeList(5) [text, div.container, text, script, text]
    // document.body.childNodes[1] gives the first child node of the body which is div.container.  // div.container
    // document.body.childNodes[1].childNodes gives the child nodes of the div.container.   // NodeList(5) [text, div.box, text, div.box, text]
    // document.body.childNodes[1].childNodes[1] gives the first child node of the div.container which is div.box.  // div.box
    // document.body.childNodes[1].childNodes[1].childNodes gives the child nodes of the div.box.
    // document.body.childNodes[1].childNodes[1].childNodes[1] gives the first child node of the div.box which is text.  // text
    
    //text nodes are the spaces between the elements. So, if you want to get the first element of the div.container, you can use firstElementChild and lastElementChild properties.

    // let cont = document.body.childNodes[1]  // div.container
    // cont.firstChild  // text
    // cont.lastChild  // text
     
    // cont.firstElementChild  // div.box
    // cont.lastElementChild  // div.box

    // cont.lastElememntChild.style.color = "red"  // changing the color of the last child of the div.container to red
    // cont.firstElementChild.style.color = "blue"  // changing the color of the
    
    // cont.lastElementChild.parentElement  // div.container
    // cont.lastElementChild.parentElement.parentElement  // body
    
    // document.body.firstElementChild  // div.container
    // document.body.firstElementChild.childNodes  // NodeList(5) [text, div.box, text, div.box, text]
    // document.body.firstElementChild.childNodes[1]  // div.box
    // document.body.firstElementChild.childNodes[1].childNodes  // NodeList(3) [text, text, text]
    // 
    // document.body.firstElementChild.children // HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box].   // gets the child elements of the div.container(only the elements, not the text nodes)


    // document.body.firstElementChild.children[0]  // div.box
    // document.body.firstElementChild.children[1]  // div.box
    // document.body.firstElementChild.children[3]  // div.box
    // document.body.firstElementChild.children[3].nextElementSibling  // div.box //box5
    // document.body.firstElementChild.children[3].previousElementSibling  // div.box //box3

    // document.body.firstElementChild.children[3].nextSibling  // text
    // document.body.firstElementChild.children[3].previousSibling  // text



    
    // document.body.children  // HTMLCollection(5) [div.container, table, text]
    // doument.body.children[1] // table
    // document.body.children[1].rows  // HTMLCollection(3) [tr, tr, tr]
    // doument.body.children[1].rows[0]  // tr