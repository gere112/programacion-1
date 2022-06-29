const consumir_criptos= async() =>{

const criptos= await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')

const datos_criptos= await criptos.json()

let lista_criptos= []

datos_criptos.forEach(criptos => {
    
    let fila=`
    

    <tr>
    <td><img class="img-thumbnail" style="width:3rem" src="${criptos.image} " alt=""></td>
    <td>${criptos.name}</td>
    <td>${criptos.symbol}</td>
    <td>$${criptos.current_price}</td>
    <td>${criptos.price_change_percentage_24h}</td>
    <td>${criptos.total_volume}</td>
    </tr>
    
    `
    lista_criptos.push(fila)


});



document.getElementById("tbl_body").innerHTML =lista_criptos.join('')
}
consumir_criptos()