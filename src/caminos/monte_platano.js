const monte_platano = {
    name: 'monte_platano',
    content: [
        {
            text: 'Corrienda, brincando, descansando y comiendo yuyos fueron avanzando los principes hacía el Monte Platano. Era una montaña alta, cubierta de todos colores posibles por la variedad de plantas que la cubrían, rodeada de aves pequeñas que comían sus frutos y pequeñas abejas que visitaban sus flores',
            img: './src/images/1.jpg'
        },
        {
            text: 'Las horas pasaban y Cascabel y Gazapo se encontraban cada vez más cerca de la sima, dando vueltas a la montaña para verificar cada rincón donde podría estar la palta dorada. A la vez habían quedados manchados de todos colores por la cantidad de frutas que se cruzaban en su camino',
            img: './src/images/1.jpg'
        },
        {
            text: 'Poco antes de llegar a la cima se detuvieron, emocionados de tantos colores, sabores y fragancias quedaron echados lado a lado en un espacio rodeado de pequeños cactus y platanos de apariencias muy tentadoras. Tras un breve instante de silencio el Principe dijo:',
            img: './src/images/2.jpg'
        },
        {
            text: '"Mi amada Princesa, aquí rodeado de tanta naturaleza, habiendo probado tantos sabores y habiendo tenido tantas experiencias puedo afirmar cada vez más que tu compañía es lo más hermoso que tengo en este mundo. Me atrevería a retar a los dioses a que traten de crear algo más perfecto que usted.\n Podemos comer y seguir avanzando ¿Le parece?"',
            img: './src/images/2.jpg'
        }
    ],
    options: [
        {
            text: 'Probemos estos cactus',
            answer: '"Veamos qué tal son"',
            next: 'alucinacion_cactus',
            position: 0
        },
        {
            text: 'Hagamos un picnic',
            answer: '"Es usted un amor"',
            next: 'picnic_monte',
            position: 0
        },
        {
            text: 'Hagamos cosas de gazapos adultos',
            answer: '"Usted tiene el brillo y el fuego del sol ❤"',
            next: 'gazapos_adultos',
            position: 0
        }
    ]
}