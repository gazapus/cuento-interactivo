const c1 = {
    name: 'inicio',
    content: [
        {
            text: 'Había una vez un conejin...',
            img: './src/images/cone.jpg'
        },
        {
            text: 'Que saltaba muy feliz',
            img: './src/images/cone.jpg'
        },
        {
            text: 'Y comía perdiz...',
            img: './src/images/con2.jpg'
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
            position: 2
        }
    ]
}