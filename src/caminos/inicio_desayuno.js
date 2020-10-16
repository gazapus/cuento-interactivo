const inicio_desayuno = {
    name: 'inicio_desayuno',
    content: [
        {
            text: 'El Principe y la Princesa fueron al salón comedor del Palacio, ya era algo tarde así que estaban solos en la mesa por lo se pusieron a comer y jugar sobre ella con risas contagiosas',
            img: './src/images/id1.jpg'
        },
        {
            text: 'El conejo mozo se acercó brincando elegantemente y les cantó el menu del día: tenían de opciónes: ',
            img: './src/images/id2.jpg'
        },
        {
            text: "La primera era alfalfá de los huertos de las tierras de Llama, acompañadas con hojas dulces y saladas y un coco de jugo de uva",
             img: './src/images/id3.jpg'
        },
        {
            text: "La segunda era zanahorias al vapor, la cual llevaba un término regional pues consistía en zanahorias hechas a parrilla acompañadas con pan y jugo de tomate",
             img: './src/images/id3.jpg'
        },
        {
            text: "El Príncipe Gazapo se había elegido una Mandioca con un té\n¿Qué elegirá la Princesa?",
            img: './src/images/id4.jpg'
        }
    ],
    options: [
        {
            text: 'Escuchar el menu de vuelta',
            answer: 'El mozo vuelve a recitar el menu',
            next: 'inicio_desayuno',
            position: 2
        },
        {
            text: 'Alfalfa de los huertos de Llama',
            answer: 'Los principes comieron hasta quedar bien gorditos',
            next: 'inicio_caminos',
            position: 0
        },
        {
            text: 'Zanahorias al vapor',
            answer: 'Los principes comieron hasta quedar bien gorditos',
            next: 'inicio_caminos',
            position: 0
        }
    ]
}