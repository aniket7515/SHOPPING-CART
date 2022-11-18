import { createContext } from "react"
// import faker from "faker"

const Cart=createContext();


const Context = ({children}) => {

    const products=[
        {
            "id":"1",
            "name" :"DSA",
            "price":"10000",
            "image":"http://dummyimage.com/111x100.png/dddddd/000000",
            "inStock":4,
            "fastDelivery": true,
            "rating":4
        },
        {
            "id":"2",
            "name" :"JAva",
            "price":"10000",
            "image":"http://dummyimage.com/114x100.png/dddddd/000000",
            "inStock":3,
            "fastDelivery": true,
            "rating":3
        },
        {
            "id":"3",
            "name" :"Leetcode",
            "price":"10000",
            "image":"http://dummyimage.com/183x100.png/dddddd/000000",
            "inStock":12,
            "fastDelivery": true,
            "rating":5
        },
        {
            "id":"4",
            "name" :"React",
            "price":"10000",
            "image":"http://dummyimage.com/247x100.png/5fa2dd/ffffff",
            "inStock":10,
            "fastDelivery": true,
            "rating":5
        },
        {
            "id":"5",
            "name" :"Node",
            "price":"10000",
            "image":"http://dummyimage.com/220x100.png/5fa2dd/ffffff",
            "inStock":4,
            "fastDelivery": true,
            "rating":2
        },
        {
            "id":"6",
            "name" :"Express",
            "price":"10000",
            "image":"http://dummyimage.com/111x100.png/dddddd/000000",
            "inStock":7,
            "fastDelivery": true,
            "rating":4
        },
        

    ]
    // const products=[...Array(20)].map(()=>({
    //     id: faker.datatype.uuid(),
    //     name: faker.commerce.productName(),
    //     price: faker.commerce.price(),
    //     image: faker.random.image(),
    //     inStock: faker.random.arrayElement([0,3,5,6,7]),
    //     fastDelivery: faker.datatype.boolean(),
    //     ratings: faker.random.arrayElement([1,2,3,4,5]),

    // }))

    // console.log(products);









  return <Cart.Provider>{children}</Cart.Provider>
}

export default Context