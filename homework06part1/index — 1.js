function Student(selector){
    this.students = [];
    this.container = document.querySelector(selector);
    this.table = this.container.querySelector("table tbody");
    this.createButton = this.container.querySelector('form [type="submit"]');
}

Student.prototype.init = function(){
    this.getStudents();
    this.createButton.addEventListener("click", this.eventAddStudent.bind(this));
}

Student.prototype.eventAddStudent = function(event){
    event.preventDefault();

    let form = event.target.closest("form");
    let formData = new FormData(form);
    
    let student = {
        first_name: formData.get("firstname"),
        course: formData.get("course"),
        estimate: formData.get("estimate"),
        is_active: formData.get("is_active") !== null,
    };

    var self = this;
    self.sendAjax({
        url: "https://evgeniychvertkov.com/api/student/",
        method: "POST",
        body: student,
        success: function(response){
            if(response.is_success){
                self.students.push(response.student);
                self.render();
            }
        }
    });
};

Student.prototype.eventRemove = function(event){
    var self = this;
    let tr = event.target.closest("tr");
    let index = parseInt(tr.getAttribute("data-index"));
    self.sendAjax({
        url: "https://evgeniychvertkov.com/api/student/" + this.students[index].id + "/",
        method: "DELETE",
        success: function(response){
            if(response.is_success){
                self.students.splice(index, 1);
                self.render();
            }
        }
    });
};

Student.prototype.eventChangeStatus = function(event){
    var self = this;
    let tr = event.target.closest("tr");
    let index = parseInt(tr.getAttribute("data-index"));
    self.sendAjax({
        url: "https://evgeniychvertkov.com/api/student/",
        method: "PUT",
        body: self.students[index],
        success: function(response){
            if(!response.is_success){
                
            }
        }
    });
};

Student.prototype.eventChangeFirstname = function(event){
    var self = this;
    let td = event.target;
    tr = td.closest("tr");
    let index = parseInt(tr.getAttribute("data-index"));

    td.innerHTML = "";
    let input = document.createElement("INPUT");
    input.type = "text";
    input.addEventListener("keyup", this.eventNewFirstname.bind(this));
    input.addEventListener("blur", this.eventBlurNewFirstname.bind(this));

    td.appendChild(input);
    input.focus();
};

Student.prototype.eventNewFirstname = function(event){
    event.preventDefault();

    let self = this;
    if(event.keyCode === 13){
        event.target.removeEventListener("blur", this.eventBlurNewFirstname.bind(this));
        let firstname = event.target.value;

        let tr = event.target.closest("tr");
        let index = tr.getAttribute("data-index");

        let student = {
            id: self.students[index].id,
            first_name: firstname,
            course: self.students[index].course,
            estimate: self.students[index].estimate,
            is_active: self.students[index].is_active,
        };

        self.sendAjax({
            url: "https://evgeniychvertkov.com/api/student/",
            method: "PUT",
            body: student,
            success: function(response){
                if(response.is_success){
                    event.target.closest("td").innerHTML = firstname;
                    self.students[index].first_name = firstname;
                }
            }
        });
    }
};

Student.prototype.eventBlurNewFirstname = function(event){
    event.preventDefault();

    let tr = event.target.closest("tr");
    let td = event.target.closest("td");
    let index = tr.getAttribute("data-index");
    
    td.innerHTML = this.students[index].first_name;
};

Student.prototype.render = function(){
    this.table.innerHTML = "";
    for(let i = 0; i < this.students.length; i++){
        let tr = document.createElement("TR");
        tr.setAttribute("data-index", i);

        let tdFio = document.createElement("TD");
        tdFio.innerHTML = this.students[i].first_name;
        tdFio.addEventListener("click", this.eventChangeFirstname.bind(this));
        tr.appendChild(tdFio);

        let tdCourse = document.createElement("TD");
        tdCourse.innerHTML = this.students[i].course;
        tr.appendChild(tdCourse);

        let tdEstimate = document.createElement("TD");
        tdEstimate.innerHTML = this.students[i].estimate;
        tr.appendChild(tdEstimate);

        let tdActive = document.createElement("TD");
        let checkbox = document.createElement("INPUT");
        checkbox.type = "checkbox";
        checkbox.checked = this.students[i].is_active;
        checkbox.addEventListener("change", this.eventChangeStatus.bind(this));
        tdActive.appendChild(checkbox);
        tr.appendChild(tdActive);

        let tdAction = document.createElement("TD");
        tdAction.innerHTML = "Удалить";
        tdAction.addEventListener("click", this.eventRemove.bind(this));
        tr.appendChild(tdAction);

        this.table.appendChild(tr);
    }
};

Student.prototype.addStudent = function(student){
    var self = this;
    self.sendAjax({
        url: "https://evgeniychvertkov.com/api/student/",
        method: "POST",
        body: student,
        success: function(response){
            if(response.is_success){
                self.students.push(student);
                self.render();
            }
        }
    });
};

Student.prototype.getStudents = function(){
    var self = this;
    self.sendAjax({
        url: "https://evgeniychvertkov.com/api/student/",
        method: "GET",
        success: function(response){
            if(response.is_success){
                self.students = response.students;
                self.render();
            }
        }
    });
};

/*
Student.prototype.sendAjax = function(data){
    var self = this;
    var xhr = new XMLHttpRequest();

    xhr.open(data.method, data.url, true);

    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xhr.setRequestHeader("X-Authorization-Token", "170c5197-72a1-11eb-b8cf-001b21474ee8");

    if(data.body !== undefined){
        xhr.send(JSON.stringify(data.body));
    }else{
        xhr.send();
    }

    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;
        if (xhr.status == 200) {
            let response = JSON.parse(xhr.response);
            data.success(response);
        }
    }
} */

window.onload = function(){
    (new Student(".students")).init();
}