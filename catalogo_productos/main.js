async function obtener_producto(category){


    const productos = await fetch('https://fakestoreapi.com/products/category/'+category)

    const datos_productos = await productos.json()

    let lista_productos = []

    datos_productos.forEach(productos => {

        let columna = `


        <div class="col-lg-3">
        <div class="card">
            <img style="height: 20rem;" src="${productos.image}" alt="">
            <div class="card-body">
                <h5 class="card-title">${productos.title}</h5>
                <p class="card-text">$${productos.price}</p>
                <p class="card-text">available: ${productos.rating.count}</p>

                    <button type="button" class="btn btn-primary" data-bs-target="#collapse" aria-controls="collapse" aria-expanded="false">Description</button>

                    <p class="card-text collapse" id="collapse">Description: ${productos.description}</p>
            </div>
        </div>
    </div>

`
        lista_productos.push(columna)

    });

    document.getElementById("cards_fake_store").innerHTML = lista_productos.join('')
}

obtener_productos()

