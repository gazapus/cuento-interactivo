const explicacion = {
    name: 'explicacion_de_caminos',
    content: [
        {
            text: 'El principe y la princesa se encaminaron a la plaza real, allí hicieron una pausa para jugar y seguir mariposas. Una vez cansados se recostaron cabeza a cabeza mirando las nubes y encontrando formas graciosas en ellas. El sol brillaba sobre ellos dandole su cálida bendición',
            img: './src/images/1.jpg'
        },
        {
            text: 'Tras un corto descansito, ambos se levantaron de un brinco, como suelen hacer los conejitos cuando están traviesos. Mirando a su alrededor y contemplando la grandeza del Reino pensaron un momento y reflexionaron sobre que dirección tomar',
            img: './src/images/1.jpg'
        },
        {
            text: `Concluyeron que había tres lugares posibles donde encontrar la palta dorada:
             - La Montaña del Platano, rica de las más exoticas frutas y verduras, un espacio díficil para los conejitos que tratan de hacer dieta.
             - El Bosque Colibrí, cubierto de misterios y magía pero demasiado espeso y profundo, no suele ser recomendable para gazapos tan pequeños por si se pierden.
             - Lago Gazaposo, un lugar donde los conejitos suelen ir a refrescarse y donde se han encontrado muchos tesoros
             ¿A donde ir?'
            `,
             img: './src/images/2.jpg'
        }
    ],
    options: [
        {
            text: 'A la Montaña del Platano',
            answer: '"¡Allá vamos!"',
            next: 'monte_platano',
            position: 0
        },
        {
            text: 'El Bosque Colibrí',
            answer: '"¡Toda una aventura!"',
            next: 'bosque_colibri',
            position: 0
        },
        {
            text: 'Lago Gazaposo',
            answer: '"¡A chapotear!"',
            next: 'lago_gazaposo',
            position: 0
        }
    ]
}