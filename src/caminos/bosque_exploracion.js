const bosque_exploracion = {
    name: 'bosque_exploracion',
    content: [
        {
            text: 'Se adentraron en la espesura del bosque buscando la palta tan deseada. Encontraron un camino de migajas de pan al que siguieron sin dudar, a una aventura tan bien guiada no se podían negar. Tras finalizar el camino, estaban frente a una pequeña casita, cubierta de chocolate y caramelos, con aroma de pastel que emanaba del interior, así que sin prisa ni razón ambos se la comieron.',
            img: './src/images/be1.jpg'
        },
        {
            text: 'Los conejitos quedaron gorditos y contentos con tanto dulce disfrutado, se pusieron sus sombreros y continuaron el viaje. Trepandose a los arboles en busca de alguna señal no lograron encontrar más que aves pequeñas durmiendo. Tras un breve momento de una inocente reflexión decidieron que era mejor tomar otra decisión.',
            img: './src/images/be2.jpg'
        }      
    ],
    options: [
        {
            text: 'Preguntar al sabio',
            answer: '"Excelente Princesa"',
            next: 'bosque_sabio',
            position: 0
        },
        {
            text: 'Mejor ir al Lago Gazaposo',
            answer: 'Se levantaron y emprendieron el viaje al lago',
            next: 'lago_gazaposo',
            position: 0
        },
        {
            text: 'Mejor ir al Monte Platano',
            answer: 'Se levantaron y emprendieron el viaje el monte',
            next: 'monte_platano',
            position: 0
        }
    ]
}