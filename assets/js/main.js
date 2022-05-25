"use strict";
const tableData = [];
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
        let lineData = '';
        for (let tableDatumKey in tableData[i]) {
            lineData += "<td>" + tableData[i][tableDatumKey] + "</td>" ;
        }
        line.innerHTML = lineData;
        console.log(tableData[i]);
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

