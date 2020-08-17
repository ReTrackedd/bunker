const parentElement = document.getElementById("list")
for (let el of jobsData) {
  const newEl = document.createElement("div")
  newEl.innerHTML = el.name
  parentElement.appendChild(newEl)
}
