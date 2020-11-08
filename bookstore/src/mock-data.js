let mock = [
    {
        id: 10,
        title: "Assasin's Blade",
        series: "Throne of Glass",
        price: "$9.99",
        range: "low",
        author: "Sarah J. Mass",
        image: 'tog3.jpg'
    },
    {
        id: 2,
        title: "Chamber of Secrets",
        series: "Harry Potter",
        price: "$7.99",
        range: "low",
        author: "J.K. Rowling",
        image: 'hp2.jpg'
    },
    {
        id: 9,
        title: "Crown of Midnight",
        series: "Throne of Glass",
        price: "$12.99",
        range: "medium",
        author: "Sarah J. Mass",
        image: 'tog2.jpg'

    },
    {
        id: 7,
        title: "Deathly Hallows",
        series: "Harry Potter",
        price: "$9.99",
        range: "low",
        author: "J.K. Rowling",
        image: 'hp7.jpg'
    },
    {
        id: 27,
        title: "Erak's Ransom",
        series: "Rangers Apprentice",
        price: "$12.99",
        range: "medium",
        author: "Jon Flanagan",
        image: 'ra7.jpg'

    },
    {
        id: 13,
        title: "Empire of Storms",
        series: "Throne of Glass",
        price: "$15.99",
        range: "high",
        author: "Sarah J. Mass",
        image: 'tog6.jpg'
    },
    {
        id: 4,
        title: "Goblet of Fire",
        series: "Harry Potter",
        price: "$8.99",
        range: "low",
        author: "J.K. Rowling",
        image: 'hp4.jpg'
    },
    {
        id: 29,
        title: "Halt's Peril",
        series: "Rangers Apprentice",
        price: "$9.99",
        range: "low",
        author: "Jon Flanagan",
        image: 'ra9.jpg'
    },
    {
        id: 6,
        title: "Half-blood Prince",
        series: "Harry Potter",
        price: "$9.99",
        range: "low",
        author: "J.K. Rowling",
        image: 'hp6.jpg'
    },
    {
        id: 11,
        title: "Heir of Fire",
        series: "Throne of Glass",
        price: "$14.99",
        range: "medium",
        author: "Sarah J. Mass",
        image: 'tog4.jpg'
    },
    {
        id: 15,
        title: "Kingdom of Ash",
        series: "Throne of Glass",
        price: "$21.99",
        range: "high",
        author: "Sarah J. Mass",
        image: 'tog8.jpg'
    },

    {
        id: 24,
        title: "Oakleaf Bearers",
        series: "Rangers Apprentice",
        price: "$12.99",
        range: "medium",
        author: "Jon Flanagan",
        image: 'ra4.jpg'
    },
    {
        id: 5,
        title: "Order of the Phoenix",
        series: "Harry Potter",
        price: "$9.99",
        range: "low",
        author: "J.K. Rowling",
        image: 'hp5.jpg'

    },
    {
        id: 3,
        title: "Prisoner of Askaban",
        series: "Harry Potter",
        price: "$7.99",
        range: "low",
        author: "J.K. Rowling",
        image: 'hp3.jpg'
    },
    {
        id: 12,
        title: "Queen of Shadows",
        series: "Throne of Glass",
        price: "$15.99",
        range: "high",
        author: "Sarah J. Mass",
        image: 'tog5.jpg'
    },
    {
        id: 1,
        title: "Sorcerer's Stone",
        series: "Harry Potter",
        price: "$7.99",
        range: "low",
        author: "J.K. Rowling",
        image: 'hp1.jpg'
    },
    {
        id: 17,
        title: "Sea of Monsters",
        series: "Percy Jackson",
        price: "$6.79",
        range: "low",
        author: "Rick Riordan",
        image: 'pj2.jpg'
    },

    {
        id: 8,
        title: "Throne of Glass",
        series: "Throne of Glass",
        price: "$12.99",
        range: "medium",
        author: "Sarah J. Mass",
        image: 'tog1.jpg'
    },

    {
        id: 14,
        title: "Tower of Dawn",
        series: "Throne of Glass",
        price: "$9.99",
        range: "low",
        author: "Sarah J. Mass",
        image: 'tog7.jpg'
    },

    {
        id: 16,
        title: "The Lightning Theft",
        series: "Percy Jackson",
        price: "$6.79",
        range: "low",
        author: "Rick Riordan",
        image: 'pj1.jpg'
    },

    {
        id: 18,
        title: "Titan's Curse",
        series: "Percy Jackson",
        price: "$6.79",
        range: "low",
        author: "Rick Riordan",
        image: 'pj3.jpg'
    },
    {
        id: 19,
        title: "The Battle of the Labyrnth",
        series: "Percy Jackson",
        price: "$6.79",
        range: "low",
        author: "Rick Riordan",
        image: 'pj4.jpg'
    },
    {
        id: 20,
        title: "The Last Olympian",
        series: "Percy Jackson",
        price: "$6.79",
        range: "low",
        author: "Rick Riordan",
        image: 'pj5.jpg'
    },
    {
        id: 21,
        title: "The Ruins of Gorlan",
        series: "Rangers Apprentice",
        price: "$9.99",
        range: "low",
        author: "Jon Flanagan",
        image: 'ra1.jpg'
    },
    {
        id: 22,
        title: "The Burning Bridge",
        series: "Rangers Apprentice",
        price: "$9.99",
        range: "low",
        author: "Jon Flanagan",
        image: 'ra2.jpg'
    },
    {
        id: 23,
        title: "The Icebound Land",
        series: "Rangers Apprentice",
        price: "$9.99",
        range: "low",
        author: "Jon Flanagan",
        image: 'ra3.jpg'
    },

    {
        id: 25,
        title: "The Sorcerer in the North",
        series: "Rangers Apprentice",
        price: "$4.99",
        range: "lowest",
        author: "Jon Flanagan",
        image: 'ra6.jpg'
    },
    {
        id: 26,
        title: "The Siege of Macindaw",
        series: "Rangers Apprentice",
        price: "$4.99",
        range: "lowest",
        author: "Jon Flanagan",
        image: 'ra5.jpg'
    },

    {
        id: 28,
        title: "The Kings of Clonmel",
        series: "Rangers Apprentice",
        price: "$10.99",
        range: "medium",
        author: "Jon Flanagan",
        image: 'ra8.jpg'
    },

    {
        id: 30,
        title: "The Emporer of Nihon-ja",
        series: "Rangers Apprentice",
        price: "$12.99",
        range: "medium",
        author: "Jon Flanagan",
        image: 'ra10.jpg'

    }

]

export default mock;
