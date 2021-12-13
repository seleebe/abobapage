const anchors=document.querySelectorAll('a[href*="#"]')
for(let anchor of anchors){
    anchor.addEventListener("click",function(event){
        event.preventDefault();
        const blockID=anchor.getAttribute('href')
        document.querySelector(''+blockID).scrollintoView({
            behavior:"smooth",
            block:"start"
        })
    })
}