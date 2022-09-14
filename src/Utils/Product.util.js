// export const getProducts = async() =>{
//     const products  = await fetch('https://run.mocky.io/v3/850151fa-7e70-4fa5-9e7d-230194549178')
//     console.log(products.json())
//     // return products.json()
// }

export const getProducts = () => {
  return  fetch('https://run.mocky.io/v3/850151fa-7e70-4fa5-9e7d-230194549178')
    // .then(response => response.json())
    // .then(result => {console.log(result,'--'); return result})
}