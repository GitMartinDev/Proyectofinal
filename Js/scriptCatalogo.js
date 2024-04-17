document.addEventListener("DOMContentLoaded", function () {
    const dropdownBtn = document.querySelector(".dropdown-btn");
    const dropdownContent = document.querySelector(".dropdown-content");
    const productContainer = document.querySelector(".contenedor-items"); // Corrección en la selección del contenedor de productos

    dropdownBtn.addEventListener("click", function () {
        dropdownContent.classList.toggle("show");
    });

    dropdownContent.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            const sortType = event.target.getAttribute("data-sort");
            sortProducts(sortType);
            dropdownContent.classList.remove("show");
        }
    });

    function sortProducts(sortType) {
        const products = Array.from(productContainer.querySelectorAll(".item")); // Corrección en la selección de elementos de productos
        switch (sortType) {
            case "price-low-to-high":
                products.sort((a, b) => {
                    const priceA = parseFloat(a.querySelector(".precio-item").getAttribute("data-price").replace(",", ""));
                    const priceB = parseFloat(b.querySelector(".precio-item").getAttribute("data-price").replace(",", ""));
                    return priceA - priceB;
                });
                break;
            case "price-high-to-low":
                products.sort((a, b) => {
                    const priceA = parseFloat(a.querySelector(".precio-item").getAttribute("data-price").replace(",", ""));
                    const priceB = parseFloat(b.querySelector(".precio-item").getAttribute("data-price").replace(",", ""));
                    return priceB - priceA;
                });
                break;
            case "name-a-to-z":
                products.sort((a, b) => {
                    const nameA = a.querySelector(".nombre-item").textContent.trim().toLowerCase();
                    const nameB = b.querySelector(".nombre-item").textContent.trim().toLowerCase();
                    return nameA.localeCompare(nameB);
                });
                break;
            case "name-z-to-a":
                products.sort((a, b) => {
                    const nameA = a.querySelector(".nombre-item").textContent.trim().toLowerCase();
                    const nameB = b.querySelector(".nombre-item").textContent.trim().toLowerCase();
                    return nameB.localeCompare(nameA);
                });
                break;
            default:
                break;
        }

        // Eliminar productos del contenedor
        while (productContainer.firstChild) {
            productContainer.removeChild(productContainer.firstChild);
        }

        // Recorrer y agregar productos ordenados al contenedor
        products.forEach((product) => {
            productContainer.appendChild(product);
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const precioInput = document.getElementById('precio');
    const precioValor = document.getElementById('precio-valor');
    const items = document.querySelectorAll('.item'); // Cambio de 'productBoxes' a 'items'

    precioValor.textContent = precioInput.value;

    precioInput.addEventListener('input', function() {
        precioValor.textContent = precioInput.value;
        const precioMaximo = parseFloat(precioInput.value); // Obtener el valor del input

        // Recorrer cada producto y mostrar/ocultar según el precio
        items.forEach(function(item) { // Cambio de 'productBox' a 'item'
            const precioProducto = parseFloat(item.querySelector('.precio-item').getAttribute('data-price').replace(',', ''));

            if (precioProducto > precioMaximo) {
                item.style.display = 'none'; // Ocultar producto si excede el precio máximo
            } else {
                item.style.display = 'block'; // Mostrar producto si está dentro del rango de precios
            }
        });
    });
});
function alternarPrecio() {
  var contenidoPrecio = document.getElementById("contenidoPrecio");
  var iconoPrecio = document.getElementById("iconoPrecio");

  if (contenidoPrecio.style.display === "none") {
    contenidoPrecio.style.display = "block";
    iconoPrecio.textContent = "-";
  } else {
    contenidoPrecio.style.display = "none";
    iconoPrecio.textContent = "+";
  }
}
function alternarCategoria() {
  var contenidoCategoria = document.getElementById("contenidoCategoria");
  var iconoCategoria = document.getElementById("iconoCategoria");

  if (contenidoCategoria.style.display === "none") {
    contenidoCategoria.style.display = "block";
    iconoCategoria.textContent = "-";
  } else {
    contenidoCategoria.style.display = "none";
    iconoCategoria.textContent = "+";
  }
}



