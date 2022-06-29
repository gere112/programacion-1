const consumir_anime = async () => {

    const anime = await fetch('https://api.jikan.moe/v4/anime?q=dragon%20ball')

    const datos_anime = await anime.json()

    const datos_anime_2 = datos_anime.data

    let lista_anime = []

    datos_anime_2.forEach(anime => {

        let columna = `

<div class="col-lg-4">
    <div class="card">
        <img src="${anime.images.jpg.image_url}" alt="">
            <div class="card-body">
                <h5 class="card-title">${anime.title}</h5>
                <p class="card-text">${anime.title_synonyms}</p>
            </div>
    </div>
</div>

`
        lista_anime.push(columna)

    });
    document.getElementById("cards_anime").innerHTML = lista_anime.join('')
}
consumir_anime()