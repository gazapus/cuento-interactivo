const bosque_sabio = {
    name: 'bosque_sabio',
    content: [
        {
            text: 'Siguieron el camino hacía el gran sabio del bosque hasta que encontraron su morada, era una casita pequeña, con una puerta y dos ventanas, construida con madera y un cartel en la entrada donde aclaraba "Soy el gran sabio, no recibo vendedores".\nEl Príncipe se acercó a la puerta y tocando de ella se alejó rapidamente al ver que se abría',
            img: './src/images/bs1.jpg'
        },
        {
            text: ' - Tengan cuidado que salgo - comenzó diciendo el gran sabio - si han tocado mi puerta es que buscan que les rebele una verdad y la verdad es el resultado del reconocimiento de la realidad, la cual no es más que le expresión de la voluntad  por lo que el fruto de ésta ha de ser multiforme y cambiante como aquella',
            img: './src/images/bs2.jpg'
        },
        {
            text: ' - Permitame presentarnos - dijo Gazapo sacandose su sombrero a igual que Cascabel - hemos venido de muy lejos a buscar un gran tesoro, brilla como oro y de un sabor inigualable, y usted como todo lo sabe me sabrá responder donde encontrar este tesoro en este bosque tan gigante.',
             img: './src/images/bs3.jpg'
        },
        {
            text: ' - Les responderé sólo si pueden adivinar el acertijo que les presentaré, será un reto a sus mentes y marcarán precedente para su futuro intelectual como regidores de estas tierras: "Vengo de las tinieblas de la historia y me alejo galopando, soy un ser legendario, mi cabeza es de conejo aunque mi cuerpo es de conejo. ¿Qué soy?',
            img: './src/images/bs4.jpg'
        }
    ],
    options: [
        {
            text: 'Conejo',
            answer: '"Respuesta equivocada"',
            next: 'bosque_exploracion_incorrecta',
            position: 0
        },
        {
            text: 'Caballo',
            answer: '"Respuesta equivocada"',
            next: 'bosque_exploracion_incorrecta',
            position: 0
        },
        {
            text: 'Esquilax',
            answer: '"Sabia respuesta"',
            next: 'bosque_exploracion_correcta',
            position: 0
        }
    ]
}