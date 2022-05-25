"use strict";
const tableData = [];
const tableElement = document.getElementById("data");

for(let i=0; i<10000; i++){
    let date = new Date();
    tableData.push(
        "<tr >"+
            "<td>alpha"+ i +"</td>"+
            "<td>dutch"+ i +"</td>"+
            "<td>ref12"+ i +"</td>"+
            "<td>apple"+ i +"</td>"+
            "<td>wr"+ i +"</td>"+
            "<td>good thing"+ i +"</td>"+
            "<td>sr"+ i +"</td>"+
            "<td>complicated"+ i +"</td>"+
            "<td>"+ Math.round(Math.random()*1000) +" kg</td>"+
            "<td>"+ date.getDate() + "-" + date.getMonth() + "-" + (date.getFullYear() + i) +"</td>"+
            "<td>"+ date.getDate() + "-" + date.getMonth() + "-" + (date.getFullYear() - i) +"</td>"+
        "</tr>"
    );
}

const linesPerPage = 40;
let totalPages = tableData.length/linesPerPage;
document.getElementById('total-pages').value= parseInt(totalPages.toString()).toString();
let currentPage = document.getElementById('current-page');
let upKey = document.getElementById('upKey');
let downKey = document.getElementById('downKey');
currentPage.value = "1";
writeLines();

currentPage.addEventListener('change', writeLines);
upKey.addEventListener('click', updateCurrentPage);
downKey.addEventListener('click', updateCurrentPage);


function writeLines(){
    tableElement.innerHTML = "";
    for(let i = linesPerPage * (currentPage.value - 1) ; i < linesPerPage * currentPage.value ; i++) {
        const line = document.createElement('tr');
        line.innerHTML = tableData[i];
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

