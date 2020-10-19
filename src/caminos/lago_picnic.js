const lago_picnic = {
    name: 'lago_picnic',
    content: [
        {
            text: 'Con una manta sobre el cesped, un termito de agua fresca, vasos y platos se dispusieron a tomarse un almuerzo a gusto con la naturaleza',
            img: './src/images/lp1.jpg'
        },
        {
            text: 'El Principe Gazapo tenía preparada su vianda que compartió dichoso con la Princesa. Se componía de una milanesa de zanahoria, acompañada con pizza conejil y té helado de limón. Compartieron y vieron que era bueno.',
            img: './src/images/lp2.jpg'
        },
        {
            text: 'La vianda de la Princesa Cascabel estaba formada por una sopita de repe para conejos, atún artificial de alverjas con arroz y un poco de café con queso de nueces. Se la compartió al Principe, se deleitaron juntos y vieron que era bueno.\nUna vez terminada la comida se alistaron para seguir',
            img: './src/images/lp3.jpg'
        }
    ],
    options: [
        {
            text: 'Busquemos la palta',
            answer: '"¡Vamos!"',
            next: 'lago_gazaposo2',
            position: 0
        },
        {
            text: 'Ahora me da mucho sueño',
            answer: '"Me parece bien"',
            next: 'lago_sueño',
            position: 0
        }
    ]
}