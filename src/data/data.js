const products = [
    {
        id: "ABD1",
        name: "saco rojo",
        description: "",
        stock: 10,
        price: 2000,
        image: "/img/Gato.jpg",
        category: "Hoddies"
    },
    {
        id: "ABF2",
        name: "Camiseya Slayer",
        description: "",
        stock: 5,
        price: 6000,
        image: "/img/Gato.jpg",
        category: "Shirts"
    },
    {
        id: "ABJ3",
        name: "Medias rojas",
        description: "",
        stock: 60,
        price: 3000,
        image: "/img/Gato.jpg",
        category: "Socks"
    },
]

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export { getProducts }