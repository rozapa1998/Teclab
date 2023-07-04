const divContainer = document.querySelector('div.container')

const armarCardDinamica = (producto)=> {
    return `<div class="card">
                <!-- <div class="card-image">${producto.imagen}</div> -->
                <div class="card-name">${producto.nombre}</div>
                <div class="card-price">$ ${producto.importe}</div>
                <div class="card-button">
                    <button class="button button-outline button-add" id="${producto.id}" title="Clic para agregar a favoritos">💛</button>
                </div>
            </div>`
}



const cargarProductos = (array)=> {
    divContainer.innerHTML = ""
    if (array.length > 0) {
        array.forEach((producto)=> {
            divContainer.innerHTML += armarCardDinamica(producto)
        })
        
    }
}
cargarProductos(productosElectronicos)