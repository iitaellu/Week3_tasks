const info = document.getElementById("feched-data");
getInfo();

//Help from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
//And discussion with Viia Mäntymäki
async function getInfo() {
  const url =
    "https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff";
  const promis = await fetch(url);
  let data = await promis.json();

  Object.values(data).forEach((key) => {
    let size = Object.values(data.dataset.dimension.Alue.category.label).length;

    for (let r = 1; r < size; r++) {
      let tr = document.createElement("tr");
      let td1 = document.createElement("td");
      let td2 = document.createElement("td");

      td1.innerText = Object.values(data.dataset.dimension.Alue.category.label)[
        r
      ];
      td2.innerText = Object.values(data.dataset.value)[r];

      tr.appendChild(td1);
      tr.appendChild(td2);

      info.appendChild(tr);
    }
  });
}

async function getEmpInfo(){
  const newUrl = "https://statfin.stat.fi/PxWeb/sq/5e288b40-f8c8-4f1e-b3b0-61b86ce5c065";
  const newPromis = await fetch(newUrl);
  let EmpData = await newPromis.json();
}

