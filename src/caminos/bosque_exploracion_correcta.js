const bosque_exploracion_correcta = {
    name: 'bosque_exploracion_correcta',
    content: [
        {
            text: '- Ahora que han adivinado mi acertijo les diré como encontrar el arbol de palta: sigan el resplandor del brillo que no es del sol, guiense por la luz que ilumina hasta los lugares más oscuros y nunca pierdan el rastro de lo que los ha traido hasta aquí, si siguen estos consejos encontrarán el fruto del amor- concluyó el sabio entrandose a su casa y cerrando la puerta.',
            img: './src/images/bs4.jpg'
        },
        {
            text: 'Los conejitos no entendieron bien pero como el sabio observaba el norte mientras respondía, ellos eligieron esa dirección y se lanzaron a correr. Como en una carrera, buscaban un brillo que no sea del sol, hasta que de casualidad vieron un arbol muy peculiar. Se encontraba elevado en una meseta en el medio del bosque, los pájaros volaban y se asentaban sobre él, era inmenso y sus ramas estaban llenas de aves por encima y cargadas de paltas por debajo, paltas que parecian cubiertas de oro',
            img: './src/images/bec2.jpg'
        },
        {
            text: 'Al acercarse más divisaron que efectivamente se trataban de las paltas doradas.\n - ¡Las encontramos! - chilló Gazapo-\n - ¡Sí! - chillaba la Princesa.\n Se admiraban por la cantidad de aves que reposaban sobre sus ramas, tirandolas hacía abajo por el peso de la bandada, eso les dejaba las paltas más cerca del suelo ante lo cual felices dieron un brinquito y luego se abrazaban para finalmente ir a tomarlas',
            img: './src/images/bec3.jpg'
        }      
    ],
    options: [
        {
            text: 'Correr hacía ellas',
            answer: 'La Princesa, seguida por el Príncipe, corrieron hacía el arbol',
            next: 'bosque_correr',
            position: 0
        },
        {
            text: 'Avanzar abrazados',
            answer: 'Con mucho amor avanzaron despacito al arbol',
            next: 'bosque_despacito',
            position: 0
        }
    ]
}