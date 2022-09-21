const info = document.getElementById("feched-data");
getInfo();
check();

//Help from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
//And discussion with Viia Mäntymäki
async function getInfo() {
  const url =
    "https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff";
  const promis = await fetch(url);
  let data = await promis.json();

  const newUrl =
    "https://statfin.stat.fi/PxWeb/sq/5e288b40-f8c8-4f1e-b3b0-61b86ce5c065";
  const newPromis = await fetch(newUrl);
  let empData = await newPromis.json();

  Object.values(data).forEach((key) => {
    let size = Object.values(data.dataset.dimension.Alue.category.label).length;

    for (let r = 0; r < size; r++) {
      let tr = document.createElement("tr");
      let td1 = document.createElement("td");
      let td2 = document.createElement("td");
      let td3 = document.createElement("td");
      let td4 = document.createElement("td");

      let pros =
        (Object.values(empData.dataset.value)[r] /
          Object.values(data.dataset.value)[r]) *
        100;

      if (pros > 45) {
        //help from https://roytuts.com/html-table-conditional-cell-color/
        tr.style.background = "#abffbd";
      } else if (pros < 25) {
        //console.log(pros);
        tr.style.backgroundColor = "#ff9e9e";
      }
      td1.innerText = Object.values(data.dataset.dimension.Alue.category.label)[
        r
      ];
      td2.innerText = Object.values(data.dataset.value)[r];
      td3.innerText = Object.values(empData.dataset.value)[r];
      td4.innerText = pros.toFixed(2); //help from https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_tofixed

      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      info.appendChild(tr);
    }
  });
}
