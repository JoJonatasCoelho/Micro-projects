// modo antigo:
/*
const ajax = obj => {
    const xhr = new XMLHttpRequest(); // xml http request
    // xhr.open("GET", "http://127.0.0.1:5500/index.html", true)
    xhr.open(obj.method, obj.url, true)
    xhr.send()
    // se fosse post:
    // xhr.send()

    xhr.addEventListener('load', () =>{
        console.log("evento");
        if(xhr.status >= 200 && xhr.status < 300 ){
            obj.sucess(xhr.responseText)
        } else {
            obj.error({ 
                code: xhr.code,
                msg: xhr.statusText
            });
        }
    }) 
}
*/

const ajax = obj => {
    return new Promise((resolve, reject) =>{
        const xhr = new XMLHttpRequest(); // xml http request
    // xhr.open("GET", "http://127.0.0.1:5500/index.html", true)
    xhr.open(obj.method, obj.url, true)
    xhr.send()

    xhr.addEventListener('load', () =>{
        if(xhr.status >= 200 && xhr.status < 300 ){
            resolve(xhr.responseText)
        } else {
            reject({ 
                code: xhr.code,
                msg: xhr.statusText
            });
        }
    }) 
    })
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
    console.log(href);

    obj = {
        method: "GET",
        url: href
        // caso fosse da forma antiga com call back
        // sucess(response){
        //     loadResult(response)
        // },
        // error(error){
        //     console.log(error.msg)
        // }
    };

    // sem async
    // ajax(obj).then( response =>{
    //     loadResult(response)
    // }).catch( e => {
    //     console.log(e.msg);
    // });

    //com
    try{
        const response = await ajax(obj);
        loadResult(response);
    } catch(e){
        console.log(e.msg)
    }

}

function loadResult(response){
    const result = document.querySelector('.resultado');
    result.innerHTML = response;
}