const ajax = obj => {
    return fetch(obj.url).then(response => response.text()).then(html => console.log(html)).catch( e => console.log(e));
};
document.addEventListener('click', e => {
    const element = e.target;
    const tag = element.tagName.toLowerCase();
    
    if (tag === "a"){
        e.preventDefault();
        loadPage(element);
    }
})

async function loadPage(element){
    const href = element.getAttribute("href");
    try{

    response  = await fetch(href)

    if (response.status != 200) throw new error("ERRO MEU");

    const html = await response.text();
    loadResult(html);
    } catch(e){
        console.error(e);
    }

    //sem await
    // fetch(href)
    // .then(response => {
    //     if (response.status != 200)
    //         throw new error("ERRO MEU");
    //     return response.text();
    // })
    // .then(html =>loadResult(html))
    // .catch( e => console.log(e));
}

function loadResult(response){
    const result = document.querySelector('.resultado');
    result.innerHTML = response;
}