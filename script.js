function fecthdata(range1,range2){
    var xhr=new XMLHttpRequest();
    xhr.open("GET","https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json");
    xhr.onload=function(){
        var data=JSON.parse(this.response);
        for(var i=range1;i<range2;i++){
            element(data[i])
        }
    }
    xhr.onerror=function(){
        console.log("Error",this.statusText);
    }
    xhr.send();
}

let outer=document.createElement('div')
outer.setAttribute("class","outer");
document.body.append(outer);


function element(range){
    let division=document.createElement('div');
    division.setAttribute('class','design')
    division.innerHTML=`<p><span class="bold">ID: </span>${range.id}</p>
    <p><span class="bold">Name:  </span>${range.name}</p> 
    <p><span class="bold">Email-ID: </span>${range.email}</p> `;
    outer.append(division);
}

function one(){
    fecthdata(0,10);
}
function two(){
    fecthdata(10,20)
}
function three(){
    fecthdata(20,30)
}
function four(){
    fecthdata(30,40)
}
function five(){
    fecthdata(40,50)
}
function six(){
    fecthdata(50,60)
}
function seven(){
    fecthdata(60,70)
}
function eight(){
    fecthdata(70,80)
}
function nine(){
    fecthdata(80,90)
}
function ten(){
    fecthdata(90,100)
}
document.onload(one());