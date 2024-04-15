
function cardcreate(thumbnail,timestamp,title,cname,views,months){
    let html =`<div class="card">
    <img class="thumbnail" src="${thumbnail}" alt="">
    <span class="timestamp">${timestamp}</span>
    <div class="card-body">
        <p class="heading">${title}</p>
        <div><span>${cname}</span>&bull;<span>${views} views</span>&bull;<span>${months} months ago</span></div>
    </div>
</div>`
document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML+html
}

cardcreate("https://i.ytimg.com/vi/BGeDBfCIqas/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBuhpUj-ErJicHq24jgB_3K2Chl_Q","08:56","Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1","creterr","1.5M","8")
let btnn=document.querySelector(".btn")
btnn.addEventListener("click",function(){
    let thumbnail =prompt("enter adress")
    let timestamp =prompt("enter timestammp")
    let title =prompt("enter title")
    let cname =prompt("enter cname")
    let views =prompt("enter views")
    let months =prompt("enter months")
    cardcreate(thumbnail,timestamp,title,cname,views,months)
})
