import pizzaone from "./assets/images/pizzaone.jpg"
import pizzatwo from "./assets/images/pizzatwo.jpg"
import pizzathree from "./assets/images/pizzathree.png"
import pizzafour from "./assets/images/pizzafour.png"
import pizzafive from "./assets/images/pizzafive.jpg"
import pizzasix from "./assets/images/pizzasix.jpg"
import pizzaseven from "./assets/images/pizzaseven.jpg"
import pizzaeight from "./assets/images/pizzaeight.jpg"
import pizzanine from "./assets/images/pizzanine.png"
import pizzaten from "./assets/images/pizzaten.jpg"
import pizzaeleven from "./assets/images/pizzaeleven.jpg"
import pizzatwelve from "./assets/images/pizzatwelwe.png"

import drinkone from "./assets/images/cocacola.png"
import drinktwo from "./assets/images/cocacolashekersiz.png"
import drinkthree from "./assets/images/fanta.png"
import drinkfour from "./assets/images/bonaqua.png"
import drinkfive from "./assets/images/cappi.png"
import drinksix from "./assets/images/fusetea.png"
import drinkseven from "./assets/images/sprite.png"
import drinkeight from "./assets/images/milla.jpg"


type dataarraytype = [
    {
        id: number,
        name: string,
        description: string,
        imgUrl: string,
        price: number[]
    }[],
    {
        id: number,
        name: string,
        imgUrl: string
    }[]
]
const pizzaarray: dataarraytype = [
    [
        {
            id: 0,
            name: "Çiken Parmezan",
            description: "Pizza sousu, Çiken Poppersləri, Sarımsaqlı parmesan sousu, Göbələk, İtalyan Ədviyyatları, Mozzarella ",
            imgUrl: pizzaone,
            price: [11,17,21]
        },
        {
            id: 1,
            name: "Qril Parmezan",
            description: "Pizza sousu, Sarımsaqlı Parmezan sousu, Qril Toyuğu, Vetçina, Pomidor, Mozzarella, Halapeno Bibəri.",
            imgUrl: pizzatwo,
            price: [11,17,21]
        },
        {
            id: 2,
            name: "Amerikan Hot",
            description: "Pizza Sousu, Mozzarella, Pepperoni, Halapeno Bibəri",
            imgUrl: pizzathree,
            price: [9,14,19]
        },
        {
            id: 3,
            name: "Acılı Çiken Ranç",
            description: "Ranç Sousu, Qril Toyuğu, Göbələk,  Halapeno Bibəri, Pomidor, Mozzarella ",
            imgUrl: pizzafour,
            price: [11,16,22]
        },
        {
            id: 4,
            name: "Karnaval",
            description: "Pizza Sousu, Göbələk, Qara Zeytun, Pepperoni, Mozzarella",
            imgUrl: pizzafive,
            price: [9,14,19]
        },
        {
            id: 5,
            name: "Çiken Ranç",
            description: "Ranç sousu, Qril Toyuğu, Pomidor,  Mozzarella",
            imgUrl: pizzasix,
            price: [9,14,19]
        },
        {
            id: 6,
            name: "Cheddar Burger",
            description: "1000 ada sousu, Mal əti, Pomidor, Mozzarella, Cheddar",
            imgUrl: pizzaseven,
            price: [11,16,22]
        },
        {
            id: 7,
            name: "Acılı Vegetarian",
            description: "Pizza Sousu, Halapeno Bibəri, Pomidor, Göbələk, Qara Zeytun, Yaşıl Bibər, Mozzarella ",
            imgUrl: pizzaeight,
            price:  [10,16,20]
        },
        {
            id: 8,
            name: "Super Papa",
            description: "Pizza sousu, Pepperoni, İtalyan Sosisi, Vetçina, Göbələk, Yaşıl Bibər, Qara Zeytun, Mozzarella ",
            imgUrl: pizzanine,
            price: [18,22,25]
        },
        {
            id: 9,
            name: "Yunan",
            description: "Pizza sousu, Pomidor, Pepperonçini, Qara Zeytun, Feta Pendiri, Oreqano, Mozzarella Pendiri",
            imgUrl: pizzaten,
            price: [18,22,25]
        },
        {
            id: 10,
            name: "Hot and Spaysi",
            description: "İtalyan sosisi, Pepperoni, Göbələk, Mal əti, Pomidor, Mozzarella, Cheddar",
            imgUrl: pizzaeleven,
            price: [10,16,20]
        },
        {
            id: 11,
            name: "Rastik",
            description: "BBQ sousu, İtalyan sosisi, Pepperoni, Göbələk, Yaşıl bibər, Mozzarella",
            imgUrl: pizzatwelve,
            price: [11,16,22]
        }
    ],
    [
        {
            id: 0,
            name: "Coco Cola 500ml",
            imgUrl: drinkone
        },
        {
            id: 1,
            name: "Coco Cola 500ml",
            imgUrl: drinktwo
        },
        {
            id: 2,
            name: "Coco Cola 500ml",
            imgUrl: drinkthree
        },
        {
            id: 3,
            name: "Coco Cola 500ml",
            imgUrl: drinkfour
        },
        {
            id: 4,
            name: "Coco Cola 500ml",
            imgUrl: drinkfive
        },
        {
            id: 5,
            name: "Coco Cola 500ml",
            imgUrl: drinksix
        },
        {
            id: 6,
            name: "Coco Cola 500ml",
            imgUrl: drinkseven
        },
        {
            id: 7,
            name: "Coco Cola 500ml",
            imgUrl: drinkeight
        },
    ]]

export default pizzaarray;
