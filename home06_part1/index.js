//Посчитать количество ссылок на странице, вывести их содержимое
//Посчитать количество тегов “p” на странице которые имеют класс “phrase” - вывести их содержимое

function FirstPart (selector) {
   
    this.container = document.querySelector(selector);
    this.anchor = document.querySelectorAll("a");
    this.paragraf = document.querySelectorAll("p.phrase");
}

FirstPart.prototype.render = function(){
    
    let p = document.createElement("P");
    let p2 = document.createElement("P");
    let ul = document.createElement("UL");
    
    p.classList.add("green")
    p2.classList.add("green")
    p.innerHTML = "количество ссылок на странице - "+this.anchor.length;
    p2.innerHTML = "количество тегов “p” на странице которые имеют класс “phrase” - "+this.paragraf.length;
    this.paragraf.forEach((item) =>{
        let li = document.createElement("LI");
        li.innerHTML = item.innerHTML;
        ul.appendChild(li);
    })
    
    p2.appendChild(ul);
    
    this.container.appendChild(p);
    this.container.appendChild(p2);
}

window.onload = function(){
    
    (new FirstPart(".first-part")).render();

};



