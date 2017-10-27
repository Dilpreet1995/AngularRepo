

function complete(todo) {
    completetask(todo);
    DisplayActive();
    DisplayComplete();
    DisplayDelete();
}
function deleted(todo) {
    deletetask(todo);
    DisplayActive();
    DisplayComplete();
    DisplayDelete();
}
function edit(id)
{
    editid=id;

    editdiv.style.visibility="visible";
    document.getElementById('edit').value=document.getElementById(id).cells[1].innerText;
}



    var editdiv=document.getElementById('edittext');
    var input = document.getElementById('inp');
    var status = "active";
    var btn = document.getElementById('btn');
    var editid;
    var tableActive=document.createElement("table");
    var tableComplete=document.createElement("table");
    var tableDelete=document.createElement("table");

    btn.onclick = function () {
        var value = input.value;
        add(value, status);
        DisplayActive();
    };
    function update() {

        var val=document.getElementById('edit').value;
        editval(editid,val);
        DisplayActive();
        DisplayComplete();
        DisplayDelete();
    }

function  DisplayActive()
{
    editdiv.style.visibility="hidden";
    var box = document.getElementById("active");

    box.innerHTML = "";
    tableActive.innerHTML = "";

    box.setAttribute("overflow", "scroll");

    for (var p in list.todo) {


        if (list.status[p] == "active") {
            var row = tableActive.insertRow();
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            row.setAttribute('id',p);
            cell2.innerHTML = list.todo[p];
            cell1.innerHTML = '<input type ="checkbox"   onclick = complete('+p+') >';
            var cell3 = row.insertCell(2);
            var image= document.createElement('img');
            image.style.height="11px";
            image.style.width="20px";

            image.setAttribute('src','./images/images.png');
            image.setAttribute('onclick','deleted('+p+')');
            cell3.appendChild(image);
            var cell4=row.insertCell(3);
            var editimg=document.createElement('img');
            editimg.style.height="11px";
            editimg.style.width="20px";
            editimg.setAttribute('src','./images/imagesedit.png');
            editimg.setAttribute('onclick','edit('+p+')');
            cell4.appendChild(editimg)



        }

    }

    box.append(tableActive);



}

function DisplayComplete()
{
    var box = document.getElementById("complete");

    box.innerHTML = "";
    tableComplete.innerHTML = "";

    box.setAttribute("overflow", "scroll");

    for (var p in list.todo) {


        if (list.status[p] == "completed") {
            var row = tableComplete.insertRow();

            var cell1 = row.insertCell(0);

            cell1.innerHTML = list.todo[p];

            var cell2 = row.insertCell(1);





            var image= document.createElement('img');
            image.style.height="11px";
            image.style.width="20px";

            image.setAttribute('src','./images/images.png');
            image.setAttribute('onclick','deleted('+p+')');
            cell2.appendChild(image);

        }

    }

    box.append(tableComplete);

}


function DisplayDelete()
{
    var box = document.getElementById("delete");

    box.innerHTML = "";
    tableDelete.innerHTML = "";

    box.setAttribute("overflow", "scroll");

    for (var p in list.todo) {


        if (list.status[p] == "deleted") {
            var row = tableDelete.insertRow();
            var cell1 = row.insertCell(0);
            cell1.innerHTML = list.todo[p];
            cell1.style.textDecoration="line-through";
            cell1.style.textDecorationColor="red";
            cell1.style.color="red";


        }

    }

    box.append(tableDelete);




}