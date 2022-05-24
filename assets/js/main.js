const tableData = [];
const tableElement = document.querySelector("#data");

for(let i=0; i<1000; i++){
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
            "<td>"+ (Math.random().toPrecision(2)*i) +"</td>"+
            "<td>"+ date.getDate() + "-" + date.getMonth() + "-" + (date.getFullYear() + i) +"</td>"+
            "<td>"+ date.getDate() + "-" + date.getMonth() + "-" + (date.getFullYear() - i) +"</td>"+
        "</tr>"
    );
}

tableData.forEach(data => {
    const line = document.createElement('tr');
    line.innerHTML = data
    tableElement.appendChild(line);
})