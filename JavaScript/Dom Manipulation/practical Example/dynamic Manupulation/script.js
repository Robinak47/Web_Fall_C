

const dataTF=document.getElementById("data");
const btn=document.getElementById("btn");
const table=document.getElementById("tbl");

btn.addEventListener('click', addNewRow);

function addNewRow()
{
    let dataValue=dataTF.value.trim();
    const row=document.createElement("tr");
    row.innerHTML="<td>"+dataValue +"</td>"
    table.append(row);
    dataTF.value="";
}