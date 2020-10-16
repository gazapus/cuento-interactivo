const inicio = {
    name: 'inicio',
    content: [
        {
            text: 'Al amanecer en el Reino los conejistos yacían bajo el arbol de cascabeles, luego de una larga celebración un maravilloso día les anunciaba el Señor Sol. La Princesa Cascabel aun estaba dormida mientras el Principe Gazapo la buscaba correteando por las praderas',
            img: './src/images/i1.jpg'
        },
        {
            text: 'Al encontrarla brinca de alegría, no puede contener su felicidad de estar con su Princesa, entre sus brincos la despierta y le da la bienvenida al nuevo día',
            img: './src/images/i2.jpg'
        },
        {
            text: '"Princesa Cascabel, mi amada Princesa, me es un honor presenciar tu dulce despertar. Así como el sol naciente despierta a los lagomorfos, la apertura de tus ojos despierta a mi corazón\nMe he venido con todo mi Amor para abrazarte, y algunas cerezas por si tenes hambre. Ayer hemos celebrado el florecimiento de los cascabeles y hoy todo el Reino resplandece de amor"',
            img: './src/images/i3.jpg'
        },
        {
            text: '"Concidero que es una excelente ocacasión para ayudarte con tu investigación sobre la magia del Amor, aquella que debes presentar a la Universidad del Gazapo Feliz.\nComo sabemos, existe la leyenda de que en aquellos lugares donde hubo mucho Amor crece un arbol de paltas doradas, y todo el Reino en este momento está que desborda de tan fortuito sentimiento\n¿Qué dices si vamos a buscar la palta dorada?"',
            img: './src/images/i4.jpg'
        }
    ],
    options: [
        {
            text: '¡Excelente idea, vamos!',
            answer: '"¡Dale!"',
            next: 'inicio_caminos',
            position: 0
        },
        {
            text: 'Voy a dormir un ratito más',
            answer: '"Está bien, dormir es saludable"',
            next: 'inicio_sueño',
            position: 0
        },
        {
            text: 'Primero vamos a desayunar',
            answer: '"Excelente idea"',
            next: 'inicio_desayuno',
            position: 0
        }
    ]
}