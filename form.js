let selectedRow = null;
let userName = document.getElementById("username");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let city = document.getElementById("city");

//a function to fetch  data
function fetchData() {
    let studentData = {};
    studentData.userName = userName.value;
    studentData.email = email.value;
    studentData.phone = phone.value;
    studentData.city = city.value;
    return studentData;
}

//when user click on submit button
function enterData() {
    let studentData = fetchData();
    if (selectedRow == null) {
        addData(studentData);
    } else {
        updateData(studentData);
    }
    clearForm();
}

//function to add data inside the table
function addData(data) {
    let table = document.getElementById("studentList").getElementsByTagName("tbody")[0];
    let newRow = table.insertRow(0);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.userName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.phone;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = '<button id="tb-btn1" onclick="editData(this)">EDIT</button> <button id="tb-btn2" onclick = "deleteData(this)" > DELECT</button  >';
}

//update function
function updateData(data) {
    selectedRow.cells[0].innerHTML = data.userName;
    selectedRow.cells[1].innerHTML = data.email;
    selectedRow.cells[2].innerHTML = data.phone;
    selectedRow.cells[3].innerHTML = data.city;
}

//delete function
function deleteData(btn) {
    if (confirm("Are You Sure")) {
        row = btn.parentElement.parentElement;
        document.getElementById("studentList").deleteRow(row.rowIndex);
    }
}

//edit functionality
function editData(btn) {
    selectedRow = btn.parentElement.parentElement;
    userName.value = selectedRow.cells[0].innerHTML;
    email.value = selectedRow.cells[1].innerHTML;
    phone.value = selectedRow.cells[2].innerHTML;
    city.value = selectedRow.cells[3].innerHTML;
}

//function to clear form
function clearForm() {
    userName.value = "";
    email.value = "";
    phone.value = "";
    city.value = "";
    selectedRow = null;
}