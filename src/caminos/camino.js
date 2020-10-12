const c1 = {
    name: 'inicio',
    content: [
        {
            text: 'Al amanecer en el Reino los conejistos yacían bajo el arbol de cascabeles, luego de una larga celebración un maravilloso día les anunciaba el Señor Sol. La Princesa Cascabel aun estaba dormida mientras el Principe Gazapo la buscaba correteando por las praderas',
            img: './src/images/1.jpg'
        },
        {
            text: 'Que saltaba muy feliz',
            img: './src/images/1.jpg'
        },
        {
            text: 'Y comía perdiz...',
            img: './src/images/2.jpg'
        }
    ],
    options: [
        {
            text: 'Que interesante',
            answer: 'Y la historia continua...',
            next: 'segundo',
            position: 0
        },
        {
            text: 'No me interesa',
            answer: 'Bueno, chau',
            next: 'ultimo',
            position: 0
        },
        {
            text: 'No entendí lo ultimo',
            answer: 'Bueno, te cuento de vuelta',
            next: 'inicio',
            position: 1
        }
    ]
}