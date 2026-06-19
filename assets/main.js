
// Fetch works AND categories at the same time
Promise.all([
  fetch("http://localhost:5678/api/works").then(response => response.json()),
  fetch("http://localhost:5678/api/categories").then(response => response.json())
])
.then(([works, categories]) => {
  displayWorks(works)
  displayFilters(works, categories)
})
.catch(error => console.error('Error: ', error))

// Display works in the gallery
function displayWorks(works) {
  const gallery = document.querySelector(".gallery")
  gallery.innerHTML = ""

  works.forEach(work => {
    const figure = document.createElement("figure")
    const img = document.createElement("img")
    img.src = work.imageUrl
    img.alt = work.title
    const figcaption = document.createElement("figcaption")
    figcaption.textContent = work.title
    figure.appendChild(img)
    figure.appendChild(figcaption)
    gallery.appendChild(figure)
  })
}

// Remove active class from all buttons
function removeActive() {
  document.querySelectorAll(".filters button")
    .forEach(btn => btn.classList.remove("active"))
}

// Generate filter buttons
function displayFilters(works, categories) {
  const filters = document.querySelector(".filters")

  // All button — active by default
  const btnAll = document.createElement("button")
  btnAll.textContent = "Tous"
  btnAll.classList.add("active")
  btnAll.addEventListener("click", () => {
    removeActive()
    btnAll.classList.add("active")
    displayWorks(works)
  })
  filters.appendChild(btnAll)

  // One button per category
  categories.forEach(category => {
    const btn = document.createElement("button")
    btn.textContent = category.name
    btn.addEventListener("click", () => {
      removeActive()
      btn.classList.add("active")
      const filteredWorks = works.filter(work => work.categoryId === category.id)
      displayWorks(filteredWorks)
    })
    filters.appendChild(btn)
  })
}