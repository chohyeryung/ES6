function print(){
    let list=document.querySelectorAll("li");
    let listArray=Array.from(list);
    let eArray=listArray.filter(function(v){
        return v.innerText.includes("e");
    });
    console.log(eArray.length);
}
print();