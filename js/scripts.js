const info = document.getElementById("feched-data");
getInfo();

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
