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
            is_popular: true
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
            }
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
            }
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
    
   
    const pizzaContainer = document.getElementById('pizza-container');

    pizza_info.forEach(pizza => {
        const pizzaDiv = document.createElement('div');
        pizzaDiv.className = 'pizza';
        const textContentClass = 'textContent'; 
        const pizzaHeaderClass = 'pizzaTypeName';
        const pizzaTitleClass = 'pizzaTitleClass';
        const badgeClass = 'badge';

        const pizzaContent = `
            <img src="${pizza.icon}" alt="${pizza.title}" class="pizza-img">
            <h3 class="${pizzaTitleClass}">${pizza.title}</h3>
            <section class="${textContentClass}">  
                <p class="${pizzaHeaderClass}">${pizza.type}</p>
                <section>
                    ${pizza.content.meat ? `<p> ${pizza.content.meat.join(', ')}</p>` : ''}
                    ${pizza.content.chicken ? `<p> ${pizza.content.chicken.join(', ')}</p>` : ''}
                    ${pizza.content.cheese ? `<p>${pizza.content.cheese.join(', ')}</p>` : ''}
                    ${pizza.content.pineapple ? `<p> ${pizza.content.pineapple.join(', ')}</p>` : ''}
                    ${pizza.content.additional ? `<p> ${pizza.content.additional.join(', ')}</p>` : ''}
                </section>
                <section>
                    ${pizza.small_size ? `<p>Small - Weight: ${pizza.small_size.weight}g, Size: ${pizza.small_size.size}cm, Price: $${pizza.small_size.price}</p>` : ''}
                    ${pizza.big_size ? `<p>Big - Weight: ${pizza.big_size.weight}g, Size: ${pizza.big_size.size}cm, Price: $${pizza.big_size.price}</p>` : ''}
                </section>
                <section>  
                    ${pizza.is_new ? `<p class="${badgeClass} badge-new">New!</p>` : ''}
                    ${pizza.is_popular ? `<p class="${badgeClass} badge-popular">Popular!</p>` : ''}
                </section>
            </section>
        `;

        pizzaDiv.innerHTML = pizzaContent;
        pizzaContainer.appendChild(pizzaDiv);
    });
});
