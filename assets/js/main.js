"use strict";
let tableData = [];
const tableElement = document.getElementById("data");

for(let i=0; i<10000; i++){
    let date = new Date();
    tableData.push({
            subsidiary : "alpha"+ i ,
            warehouse : "dutch"+ i,
            oruRef : "ref12"+ i,
            product : "apple"+ i,
            warehouseRef : "wr"+ i,
            remarks : "good thing"+ i,
            supRef : "sr"+ i,
            relation : "complicated"+ i,
            quantity : Math.round(Math.random()*1000) +" kg",
            expiry : date.getDate() + "-" + date.getMonth() + "-" + (date.getFullYear() + i),
            purchase : date.getDate() + "-" + date.getMonth() + "-" + (date.getFullYear() - i)
        }
    );
}

let tempData = tableData;
const linesPerPage = 40;
let totalPages = tableData.length/linesPerPage;
document.getElementById('total-pages').value= parseInt(totalPages.toString()).toString();
let currentPage = document.getElementById('current-page');
let upKey = document.getElementById('upKey');
let downKey = document.getElementById('downKey');
let  sortSubsidiary = document.getElementById('sortSubsidiary');
let  searchField = document.getElementsByClassName('search');

currentPage.value = "1";
writeLines();

currentPage.addEventListener('change', writeLines);
upKey.addEventListener('click', updateCurrentPage);
downKey.addEventListener('click', updateCurrentPage);
sortSubsidiary.addEventListener('click', sort);
for (let i = 0; i < searchField.length; i++) {
    searchField[i].addEventListener('change', search);
}


function writeLines(){
    totalPages = Math.ceil(tableData.length/linesPerPage);
    document.getElementById('total-pages').value= parseInt(totalPages.toString()).toString();
    tableElement.innerHTML = "";
    for(let i = linesPerPage * (currentPage.value - 1) ; i < linesPerPage * currentPage.value ; i++) {
        const line = document.createElement('tr');
        let lineData = '';
        for (let tableDatumKey in tableData[i]) {
            lineData += "<td>" + tableData[i][tableDatumKey] + "</td>" ;
        }
        line.innerHTML = lineData;
        tableElement.appendChild(line);
    }
}

function updateCurrentPage(event) {
    if(event.target.alt === 'down')
        currentPage.value--;
    else
        currentPage.value++;
    writeLines();
}

function sort() {
    tableData.reverse();
    writeLines();
}

function search(event) {
    tableData = tempData.filter(function (key) {
        let field = event.target.id;
        return key[field].includes(event.target.value);
    });
    writeLines();
}
