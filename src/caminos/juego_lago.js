const juego_lago = {
    name: 'juego_lago',
    content: [
        {
            text: 'Picarona y de sorpresa la Princesa se aventó hacía el Principe y con sus manitas lo empujó hacía el lago. El Príncipe, como era buen nadador, arrimó su cabecita sobre el agua y rieron juntos del hecho sucedido',
            img: './src/images/1.jpg'
        },
        {
            text: 'La Príncesa lo siguió y de un chapuzón se empapó junto a él. Los dos en el agua jugaron y rieron, tanto se diviertieron que casí quedan dormidos pero un pequeño pulpito los despertó de un tintazo así transcurrido un rato ambos salieron a secarse.',
            img: './src/images/1.jpg'
        },
        {
            text: 'Con su pelaje esponjoso ambos reposaron bajo el sol, comiendo plantitas de su alrededor empezaron a sentirse más vivitos, se llenaron de ganas de jugar y de continuar su viaje así que sacudiendo su pelaje se pusieron a pensar como iban a continuar este gazaposo viaje.',
             img: './src/images/2.jpg'
        }
    ],
    options: [
        {
            text: 'Seguir viaje',
            answer: '',
            next: 'lago_gazaposo2',
            position: 0
        },
        {
            text: 'Comamos primero',
            answer: '"¡Me encanta!¡Me encanta!"',
            next: 'ultimo',
            position: 0
        },
    ]
}