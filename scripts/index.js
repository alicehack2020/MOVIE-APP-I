

var list=["https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6237/1296237-h-5662015305e4",
"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2248/1282248-h-a077d5bb2cd1",
"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3190/1263190-h-0bfaeb08a06e"
]

 

var i=0
setInterval(()=>{
slideshow.innerText=""
if(i==list.length)
{
    i=0
}
var image=document.createElement("img")
image.src=list[i]
image.className="image"
i++
slideshow.append(image)

},2000)