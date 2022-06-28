//url
const baseUrl = "https://platzi-avo.vercel.app";
const url = "https://platzi-avo.vercel.app/api/avo";

const appNode = document.querySelector('#app')

/* const formatPrice = (price) =>{
    const newPrice = new window.Intl.NumberFormat("en-EN",{
        style:"curreyncy",
        currency: "USD",
    }).format(price)

    return newPrice
} */

//intl
//1 - formato a fecha
//2 - formato a monedas

//web api
const getData = async (url_api) =>{
    try{
        const respuesta = await window.fetch(`${url_api}/api/avo`) //esta es para la info
        const imagenesURL = await window.fetch(`${url_api}`)//esta es para las imagenes porque necesita ir sin /api/avo
        const data = await respuesta.json()
        const blockElements = []
        data.data.forEach(element => {
            

            //crear imagen
            const img = document.createElement('img');
            img.src = `${imagenesURL.url}${element.image}`//mandamos a llamar imagenes
            //crear titulo


            const title = document.createElement('h2')
            title.textContent = element.name
            /* title.className = "text-2xl text-red-600" */

            //crear precio
            const price = document.createElement('div')
            /* price.textContent = formatPrice(element.price) */
            price.textContent = `$${element.price}`

            //creamos un contenor que almacenara cada card
            const container = document.createElement('div')
            container.className = "card"
            /* container.appendChild(img)
            container.appendChild(title)
            container.appendChild(price) */
            container.append(img,title,price)//nos permite agregar a todos en orden
            //usar este:
            blockElements.push(container)

            //este no es el mejor:
            /* 
                document.body.appendChild(container)
            */
            console.log(img,title,price)

            
        });

        appNode.append(...blockElements)

    }catch(e){
        console.log(e)
    }
}

getData(baseUrl)