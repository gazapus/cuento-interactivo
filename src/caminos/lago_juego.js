const lago_juego = {
    name: 'lago_juego',
    content: [
        {
            text: 'Picarona y de sorpresa la Princesa se aventó hacía el Principe y con sus patitas lo empujó hacía el lago. El Príncipe ya en el agua, como era buen nadador, arrimó su cabecita sobre el agua y rieron juntos del hecho sucedido',
            img: './src/images/lj1.jpg'
        },
        {
            text: 'La Príncesa lo siguió y de un chapuzón se empapó junto a él. Los dos en el agua jugaron y rieron, tanto se diviertieron que casí quedan dormidos pero un pequeño pulpito los despertó de un tintazo así transcurrido un rato ambos salieron a secarse.',
            img: './src/images/lj2.jpg'
        },
        {
            text: 'Con su pelaje esponjoso reposaron bajo el sol, comiendo plantitas de su alrededor empezaron a sentirse más vivitos, se llenaron de ganas de jugar y de continuar su viaje así que sacudiendo su pelaje se pusieron a pensar como iban a continuar este gazaposo viaje.',
             img: './src/images/lj3.jpg'
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
            answer: '"¡Me encanta!"',
            next: 'lago_picnic',
            position: 0
        },
    ]
}