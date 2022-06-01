function myFunction() {
    var x = document.getElementById("mytech");
    if (x.innerHTML === "JAVA") {
      x.style.color='red';
      insert("HTML");
    } 
     else if(x.innerHTML === "HTML") {
      x.style.color='blue';
      insert("CSS");
    } 
    else if(x.innerHTML==="CSS")  {
      x.style.color='green';
      insert("JAVASCRIPT");
    }
    else if(x.innerHTML==="JAVASCRIPT")  {
      x.style.color='cyan';
      insert("REACTJS");
    }
    else if(x.innerHTML==="REACTJS")  {
      x.style.color='black';
      insert("JAVA");
    }

  }

  function insert(skills){
    var x = document.getElementById("mytech");
    x.style.display="none";
    x.innerHTML = skills;
    x.style.display="block";
    setTimeout(myFunction,4000);
  }

