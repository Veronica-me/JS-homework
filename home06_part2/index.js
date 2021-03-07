//В задании из пятого урока, взять массив со студентами и вывести их на страницу согласно сверстанной HTML-структуре, рядом с каждым студентом вывести крестик - по нажатию на который студент будет удален (удаляется как со страницы, так и с объекта), если был удален последний студент написать текстовое сообщение (“Студенты не найдены”)
//Вывести статистику средних оценок в разрезе курса и статистику по количеству неактивных студентов в разрезе каждого курса и общее количество неактивных студентов
//Добавить текстовое поле ввода - ввод имени студента, поле ввода для курса, оценки и checkbox для активности студента, по нажатии на кнопку “Добавить” - студент новый добавляется в список студентов
//При каждом действии удаления или добавления студентов нужно пересчитывать статистику средней оценки в разрезе каждого курса и подсчета количества неактивных студентов и изменять соответствующее содержимое.
//В ряде предыдущих заданий - выделять красным цветом тех студентов которые имеют оценку 3 и менее. которые от 3 до 4  - желтым и которые 4 и выше - зеленым.

function Student (selector) {
    this.students = [
        {name: "Ivan", estimate: 4, course: 1, active: true},
        {name: "Vasyl", estimate: 3, course: 1, active: true},
        {name: "Volodykyr", estimate: 2, course: 4, active: false},
        {name: "Petro", estimate: 5, course: 2, active: true},
        {name: "Alibaba", estimate: 2, course: 3, active: true},
        {name: "Elvis", estimate: 3, course: 4, active: true},
        {name: "Dmytro", estimate: 2, course: 4, active: true},
        {name: "Alex", estimate: 4, course: 3, active: false},
        {name: "Vasilisa", estimate: 5, course: 6, active: true},
        {name: "Vasilia", estimate: 4, course: 6, active: true},
    
    
    ] ;
    
    
    
    console.log(this);
    
    this.container = document.querySelector(selector);
    this.table = this.container.querySelector("table tbody");
    this.createButton = this.container.querySelector('form [type="submit"]');
    this.divStatistic = document.querySelector(".statistic");
    this.createButton.addEventListener("click", this.eventAddStudent.bind(this));
   
}

Student.prototype.studentsActivity = function(){
    this.objOfActivity = {}
    this.students.forEach((item) => {
        this.objOfActivity[item.course] = {active:0, notActive: 0};
     
    })
    this.students.forEach((item) => {
        
        if (item.active){
            this.objOfActivity[item.course].active++;           
         } else {
            this.objOfActivity[item.course].notActive++;
         }
    })
     
}

Student.prototype.getEstimate = function() {
    this.objOfEstimates = {}
    this.quantityObj = {};
    this.sumObj = {};
    
    this.students.forEach((item) => {
        this.objOfEstimates[item.course] = 0;
        this.quantityObj[item.course] = 0; 
        this.sumObj[item.course] = 0; 
    })

    this.students.forEach((item) => {
        
        if (item.active){          
            this.quantityObj[item.course]++;
            this.sumObj[item.course] += Number(item.estimate); 
            this.objOfEstimates[item.course] = this.sumObj[item.course] / this.quantityObj[item.course]
         }
    })


}

Student.prototype.render = function (){
    this.table.innerHTML = "";
    this.divStatistic.innerHTML = "";
    this.studentsActivity();
    this.getEstimate();

    if (this.students.length == 0) {
        console.log("Студенты не найдены");
       let pMessage = document.createElement("P");
       pMessage.innerHTML = "Студенты не найдены!!"
       this.divStatistic.appendChild(pMessage);

    }

    console.log(this.objOfActivity)
    this.students.forEach((item, index) => {
        
        let tr = document.createElement("TR");
        if (item.estimate <= 3) {
            tr.classList.add("bad")
        }else if (item.estimate <= 4){
            tr.classList.add("normal")
        }else if (item.estimate > 4){
            tr.classList.add("good")
        }
        tr.setAttribute("data-index", index);

        let tdFio = document.createElement("TD");
        tdFio.innerHTML = item.name;
        tr.appendChild(tdFio);
      
        let tdCourse = document.createElement("TD");
        tdCourse.innerHTML = item.course;
        tr.appendChild(tdCourse);
        
        let tdEstimate = document.createElement("TD");
        tdEstimate.innerHTML = item.estimate;
        tr.appendChild(tdEstimate);

        let tdActive = document.createElement("TD");
        let checkbox = document.createElement("INPUT");
        checkbox.type = "checkbox";
        checkbox.checked = item.active;
  
        tdActive.appendChild(checkbox);
        tr.appendChild(tdActive);
        
        let tdDelete = document.createElement("TD");
        tdDelete.innerHTML = "X";
        tdDelete.addEventListener("click", this.eventRemove.bind(this));
        tr.appendChild(tdDelete);

        this.table.appendChild(tr);  
        

         
        
    })
    
    
    let ulStatistic = document.createElement("UL");
    this.divStatistic.appendChild(ulStatistic);

    let sumNotActive = 0; 
    for (let sudentCourse in this.objOfActivity){
        let liStatistic = document.createElement("LI"); 
        liStatistic.innerHTML = sudentCourse+"   курс: неактивных - "+ this.objOfActivity[sudentCourse].notActive;
        sumNotActive += this.objOfActivity[sudentCourse].notActive;
        ulStatistic.appendChild(liStatistic);
    }
    let liTotal = document.createElement("LI"); 
    liTotal.innerHTML = "всего неактивных: "+sumNotActive;
    ulStatistic.appendChild(liTotal);
    
    let p = document.createElement("P");
    p.innerHTML = "Средний балл по активным студентам:"
    this.divStatistic.appendChild(p);
    let ulEstimate = document.createElement("UL");
    this.divStatistic.appendChild(ulEstimate);

    for (let sudentCourse in this.objOfEstimates){
        let liEstimate = document.createElement("LI"); 
        liEstimate.innerHTML = sudentCourse+"   курс: средний балл : "+ this.objOfEstimates[sudentCourse];
        
        ulEstimate.appendChild(liEstimate);
    }
}


Student.prototype.eventRemove = function(event){
    
    let tr = event.target.closest("tr");
    let studentIndex = parseInt(tr.getAttribute("data-index"));
    this.students.splice(studentIndex, 1);
    console.log(studentIndex);
    this.render();
};

Student.prototype.eventAddStudent = function(event) {
    event.preventDefault();

    let form = event.target.closest("form");
    let formData = new FormData(form);
    let newStudent = {
        name: formData.get("name"),
        course: formData.get("course"),
        estimate: formData.get("estimate"),
        active: formData.get("active") !== null,
    };
    console.log(newStudent);
    this.students.push(newStudent);
    this.render();
}


window.onload = function(){
    
    (new Student(".students")).render();

};