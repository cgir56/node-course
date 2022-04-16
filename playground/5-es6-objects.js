const name = 'Christian'
const userAge = 65

const user = {
    name,
    age: userAge,
    location: 'Carignan'
}

console.log(user)

// object destructuring

const product = {
    label: 'red notebook',
    price: 3,
    stock : 201,
    salePrice: undefined
}

// const label = product.label
// const stock = product.stock

// destructuring 
// const { label:productLabel, stock, rating = 4.3} = product

// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, {label, stock}) => {     // label and stock are destructured from product
    console.log(type, label, stock)
}

transaction('order', product)