function print(){
    let list=document.querySelectorAll("li");
    let listArray=Array.from(list);//li노드로 구성된 배열
    let eArray=listArray.filter(function(v){
      return v.innerText.includes("e");
    });
    console.log(eArray.length);
  }
  
  print();