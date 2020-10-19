const lago_gazaposo = {
    name: 'lago_gazaposo',
    content: [
        {
            text: 'Los conejitos emprendieron el camino hacía el Lago Gazaposo. Correteaban y jugaban en el camino, comían algún que otro pastito y seguían su viaje. El Lago Gazaposo se encontraba colina abajo, por lo que cuando se encontraban ante un pasaje con mucho declive se tomaban de las patas y bajaban juntos corriendo. En la primera vez el Príncipe se tropezó pero luego ya aprendío de la Princesa y lo hizo bien.',
            img: './src/images/l1.jpg'
        },
        {
            text: 'Una vez en el lago, saltaron de un lado al otro alrededor de éste como imitando a los pecesitos saltarines que se encontraban en su interior\n - Juguemos una carrera alrededor del lago - dijo el Príncipe pero ni bien terminó de pronunciar esas palabras la Princesa salió corriendo como una liebre adelantandole posición. De inmediato el Príncipe corrió para alcanzarla.',
            img: './src/images/l2.jpg'
        },
        {
            text: 'No llegaron a bordear todo el lago cuando ya se encontraban lenguita afuera de tanto cansancio, era muy grande. Sentados en la orilla, con el viente acariciando sus rostros, se relajaban uno con el otro acurrucandose entre sí\nPasó el tiempo y un sonido de un pez chapoteando los despertó del estado de relajación al que habían llegado\n - Princesa mía - dijo el Príncipe parandose en la orilla del lago - debemos retomar nuestra misión y seguir buscando la Palta Dorada',
             img: './src/images/l3.jpg'
        }
    ],
    options: [
        {
            text: 'Estoy de acuerdo',
            answer: '"¡A por ella!"',
            next: 'lago_gazaposo2',
            position: 0
        },
        {
            text: 'Comamos primero',
            answer: '"¡Me encanta!¡Me encanta!"',
            next: 'lago_picnic',
            position: 0
        },
        {
            text: 'Empujar al Principe al agua',
            answer: 'bruuumm',
            next: 'lago_juego',
            position: 0
        }
    ]
}