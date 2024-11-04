const products = [
    {
        id: "ABD1",
        name: "Black Serenade Tie Dye Hoodie",
        description: "Classic double goat head Slayer star design now available on a custom red-black dye hoodie.Custom dyed items will vary from the mock up ",
        stock: 10,
        price: 2000,
        image: ["/img/SLRH.webp", "/img/SLRH1.jpg"],
        category: "Hoddies"
    },
    {
        id: "ABF2",
        name: "Divine Intervention Tee",
        description: "The Divine Intervention Tee inspired artwork printed on a black tee offers a comfortable fit while keeping a durable edge, perfect for everyday wear or concerts. This tee is a must-have for true Slayer fans who want to wear their allegiance loud and proud. ",
        stock: 5,
        price: 6000,
        image: ["/img/SLA.webp", "/img/SLA1.webp"],
        category: "Shirts"
    },
    {
        id: "ABJ3",
        name: "Slayer Logo Heathered Socks",
        description: "Stand in what you stand for with these Slayer Heathered Socks! Complete with classic Slayer logo and stripe pattern on the sole. ",
        stock: 60,
        price: 3000,
        image: ["/img/SLR.webp", "/img/SLR1.jpg"],
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