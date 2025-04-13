document.addEventListener("DOMContentLoaded", function () {
    let heading = document.createElement("h2");
    heading.innerText = "Dynamic Table and Interactive Elements";
    document.body.appendChild(heading);

    let tableButton = document.createElement("button");
    tableButton.innerText = "Click to generate table";
    tableButton.onclick = generateTable;
    document.body.appendChild(tableButton);

    let appendButton = document.createElement("button");
    appendButton.innerText = "Append a row";
    appendButton.onclick = appendRow;
    document.body.appendChild(appendButton);

    let table = document.createElement("table");
    table.setAttribute("border", "1");
    document.body.appendChild(table);
    let count = 0;

    function generateTable() {
        let n = parseInt(prompt("Enter number of rows"));
        for (let i = 0; i < n; i++) {
            appendRow();
        }
    }

    function appendRow() {
        let row = table.insertRow();
        for (let i = 0; i < 3; i++) {
            let cell = row.insertCell(i);
            cell.innerHTML = `cell ${count++}`;
        }
    }

    let colorButton = document.createElement("button");
    colorButton.innerText = "Hover over me";
    colorButton.style.backgroundColor = "red";
    colorButton.onmouseover = function () {
        colorButton.style.backgroundColor = "green";
    };
    document.body.appendChild(colorButton);

    let textBox = document.createElement("input");
    textBox.type = "text";
    textBox.style.backgroundColor = "green";
    textBox.onfocus = function () {
        textBox.style.backgroundColor = "yellow";
    };
    textBox.onchange = function () {
        alert("Hello, you changed the text!");
    };
    document.body.appendChild(textBox);

    let inputField = document.createElement("input");
    inputField.type = "text";
    let addButton = document.createElement("button");
    addButton.innerText = "Add to list";
    let ul = document.createElement("ul");
    document.body.appendChild(inputField);
    document.body.appendChild(addButton);
    document.body.appendChild(ul);
    addButton.ondblclick = function () {
        let li = document.createElement("li");
        li.innerText = inputField.value;
        ul.appendChild(li);
        inputField.value = "";
    };

    let keyInput = document.createElement("input");
    keyInput.type = "text";
    let keyCountDisplay = document.createElement("input");
    keyCountDisplay.type = "text";
    keyCountDisplay.readOnly = true;
    let keyCount = 0;
    keyInput.onkeydown = function () {
        keyCountDisplay.value = ++keyCount;
    };
    document.body.appendChild(document.createElement("br"));
    document.body.appendChild(keyInput);
    document.body.appendChild(keyCountDisplay);
});