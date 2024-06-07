document.addEventListener("DOMContentLoaded", (event) => {
    let pizza_info = [
        {
            id: 1,
            icon: 'images/pizza_7.jpg',
            title: "Імпреза",
            type: 'М’ясна піца',
            content: {
                meat: ['балик', 'салямі'],
                chicken: ['куриця'],
                cheese: ['сир моцарелла', 'сир рокфорд'],
                pineapple: ['ананаси'],
                additional: ['томатна паста', 'петрушка']
            },
            small_size: {
                weight: 370,
                size: 30,
                price: 99
            },
            big_size: {
                weight: 660,
                size: 40,
                price: 169
            },
            is_new: true,
            is_popular: false,
        },
        {
            id: 2,
            icon: 'images/pizza_2.jpg',
            title: "BBQ",
            type: 'М’ясна піца',
            content: {
                meat: ['мисливські ковбаски', 'ковбаски папероні', 'шинка'],
                cheese: ['сир домашній'],
                mushroom: ['шампінйони'],
                additional: ['петрушка', 'оливки']
            },
            small_size: {
                weight: 460,
                size: 30,
                price: 139
            },
            big_size: {
                weight: 840,
                size: 40,
                price: 199
            },
            is_popular: true
        },
        {
            id: 3,
            icon: 'images/pizza_1.jpg',
            title: "Міксовий поло",
            type: 'М’ясна піца',
            content: {
                meat: ['вітчина', 'куриця копчена'],
                cheese: ['сир моцарелла'],
                pineapple: ['ананаси'],
                additional: ['кукурудза', 'петрушка', 'соус томатний']
            },
            small_size: {
                weight: 430,
                size: 30,
                price: 115
            },
            big_size: {
                weight: 780,
                size: 40,
                price: 179
            },
            is_popular: true
        },
        {
            id: 4,
            icon: 'images/pizza_5.jpg',
            title: "Сициліано",
            type: 'М’ясна піца',
            content: {
                meat: ['вітчина', 'салямі'],
                cheese: ['сир моцарелла'],
                mushroom: ['шампінйони'],
                additional: ['перець болгарський', 'соус томатний']
            },
            small_size: {
                weight: 450,
                size: 30,
                price: 111
            },
            big_size: {
                weight: 790,
                size: 40,
                price: 169
            },
            is_popular: true
        },
        {
            id: 17,
            icon: 'images/pizza_3.jpg',
            title: "Маргарита",
            type: 'Вега піца',
            content: {
                cheese: ['сир моцарелла', 'сир домашній'],
                tomato: ['помідори'],
                additional: ['базилік', 'оливкова олія', 'соус томатний']
            },
            small_size: {
                weight: 370,
                size: 30,
                price: 89
            }
        },
        {
            id: 43,
            icon: 'images/pizza_6.jpg',
            title: "Мікс смаків",
            type: 'М’ясна піца',
            content: {
                meat: ['ковбаски'],
                cheese: ['сир моцарелла'],
                mushroom: ['шампінйони'],
                pineapple: ['ананаси'],
                additional: ['цибуля кримська', 'огірки квашені', 'соус гірчичний']
            },
            small_size: {
                weight: 470,
                size: 30,
                price: 115
            },
            big_size: {
                weight: 780,
                size: 40,
                price: 180
            }
        },
        {
            id: 90,
            icon: 'images/pizza_8.jpg',
            title: "Дольче Маре",
            type: 'Морська піца',
            content: {
                ocean: ['криветки тигрові', 'мідії', 'ікра червона', 'філе червоної риби'],
                cheese: ['сир моцарелла'],
                additional: ['оливкова олія', 'вершки']
            },
            big_size: {
                weight: 845,
                size: 40,
                price: 399
            }
        },
        {
            id: 6,
            icon: 'images/pizza_4.jpg',
            title: "Россо Густо",
            type: 'Морська піца',
            content: {
                ocean: ['ікра червона', 'лосось копчений'],
                cheese: ['сир моцарелла'],
                additional: ['оливкова олія', 'вершки']
            },
            small_size: {
                weight: 400,
                size: 30,
                price: 189
            },
            big_size: {
                weight: 700,
                size: 40,
                price: 299
            }
        }
    ];
    const pizzaContainer = document.querySelector('#pizza-container');

    pizza_info.forEach(pizza => {
        const pizzaDiv = document.createElement('div');

        pizzaDiv.className = 'pizza';
        const textContentClass = 'textContent';
        const pizzaHeaderClass = 'pizzaTypeName';
        const pizzaTitleClass = 'pizzaTitleClass';
        const buyText ='Купити';

        const ingredientsClass = 'ingredientsClass';

        const badgeNew = pizza.is_new ? `<p class="badge badge-new">Нова</p>` : '';
        const popularBadge = pizza.is_popular ? `<p class="badge badge-popular ${pizza.id >= 3 ? 'specialPizza' : ''}">Популярна</p>` : '';

        const smallSize = pizza.small_size ? `
            <div  id="smallSize">  
               <p> <img src="images/size-icon.svg" class="imgSize"/>${pizza.small_size.size}</p>
                <p> <img src="images/weight.svg" class="imgWeight"/>${pizza.small_size.weight}</p>
                <p id="price"> ${pizza.small_size.price} </p>
                <button class="buyButton"> ${buyText} </button>
             
            </div>` : '';

        const bigSize = pizza.big_size ? `
            <div id="bigSize">
          
                <p> <img src="images/size-icon.svg" class="imgSize"/>${pizza.big_size.size}</p>
                <p> <img src="images/weight.svg" class="imgWeight"/>${pizza.big_size.weight}</p>
                <p id="price">${pizza.big_size.price} </p>
                <button class="buyButton buyButton2"> ${buyText}</button>
            </div>` : '';

       // Helper function to capitalize the first letter of the first word
function capitalizeFirstWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Combine ingredients into a single string
const combinedIngredients = [
    ...pizza.content.meat || [],
    ...pizza.content.chicken || [],
    ...pizza.content.cheese || [],
    ...pizza.content.pineapple || [],
    ...pizza.content.additional || []
].join(', ');


const formattedIngredients = capitalizeFirstWord(combinedIngredients);

const pizzaContent = `
    ${badgeNew}
    ${popularBadge}
    <div class="pizzaContentAll">
        <img src="${pizza.icon}" alt="${pizza.title}" class="pizza-img">
        <h3 class="${pizzaTitleClass}">${pizza.title}</h3>
        <section class="${textContentClass}">
            <p class="${pizzaHeaderClass}">${pizza.type}</p>
            <section class="${ingredientsClass}">
                ${formattedIngredients}
            </section>

            <section class="size">
                ${smallSize}
                ${bigSize}
            </section>
        </section>
    </div>`;


        pizzaDiv.innerHTML = pizzaContent;
        pizzaContainer.appendChild(pizzaDiv);
    });
});
