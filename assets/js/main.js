"use strict";
let tableData;
let tempData;
let totalPages
const linesPerPage = 40;

async function getJSON(path, callback) {
    return callback(await fetch(path).then(r => r.json()));
}
getJSON('assets/data.json', info => tableData = info).then(r => intiateRender());

const tableElement = document.getElementById("data");
let currentPage = document.getElementById('current-page');
let upKey = document.getElementById('upKey');
let downKey = document.getElementById('downKey');
let  sortLists = document.getElementsByClassName('sortList');
let  searchField = document.getElementsByClassName('search');

currentPage.addEventListener('change', writeLines);
upKey.addEventListener('click', updateCurrentPage);
downKey.addEventListener('click', updateCurrentPage);
for (let i = 0; i < searchField.length; i++) {
    searchField[i].addEventListener('change', search);
}
for (let i = 0; i < sortLists.length; i++) {
    sortLists[i].addEventListener('click', sortList);
}

function intiateRender(){
    tempData = tableData;
    totalPages = tableData.length/linesPerPage;
    document.getElementById('total-pages').value= parseInt(totalPages.toString()).toString();
    currentPage.value = "1";
    writeLines();
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

function sortList(event) {
    let field = event.target.id.slice(5);
    if(event.target.sort === "asc"){
        tableData.sort((a, b) => (a[field] < b[field]) ? 1 : -1)
        event.target.sort = "desc";
    } else {
        tableData.sort((a, b) => (a[field] > b[field]) ? 1 : -1)
        event.target.sort = "asc";
    }
    writeLines();
}

function search(event) {
    tableData = tempData.filter(function (obj) {
        let field = event.target.id;
        return obj[field]?.includes(event.target.value);
    });
    writeLines();
}