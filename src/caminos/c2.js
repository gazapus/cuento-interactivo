const c2 = {
    name: 'segundo',
    content: [
        {
            text: 'El conejito quería ser presidente pero necesitaba un partido donde afiliarse',
            img: './src/images/1.jpg'
        },
        {
            text: 'Así que se le ocurrió meterse al partido libera conservador',
            img: './src/images/1.jpg'
        },
        {
            text: 'Y se candidateó como alcalde de Villa Gazapa',
            img: './src/images/2.jpg'
        }
    ],
    options: [
        {
            text: 'Cuentame, y qué pasó?',
            answer: '',
            next: 'tercero',
            position: 0
        },
        {
            text: 'Ya me aburrió',
            answer: 'Bueno, chau',
            next: 'ultimo',
            position: 0
        }
    ]
}