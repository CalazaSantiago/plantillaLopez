fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))


//promesa sincronica async /await//

const endpoint = '/data/datos.json'
const obtenerProd = async() => {
    response = await fetch (endpoint)
    response = await response.json()
    console.log(response) 
}

obtenerProd ();
