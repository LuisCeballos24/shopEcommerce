export const optionsProducts = {
    colors: [
        {class: 'bg-white', selectedClass: 'ring-gray-400'},
        {class: 'bg-blue-500', selectedClass: 'ring-gray-400'},
        {class: 'bg-black', selectedClass: 'ring-gray-400'},
        {class: 'bg-yellow-500', selectedClass: 'ring-gray-400'}
    ],
    sizes: [
        {content: 'xs', selectedClass: 'ring-indigo-600'},
        {content: 's', selectedClass: 'ring-indigo-600'},
        {content: 'm', selectedClass: 'ring-indigo-600'},
        {content: 'l', selectedClass: 'ring-indigo-600'},
        {content: 'xl', selectedClass: 'ring-indigo-600'},
        {content: '2xl', selectedClass: 'ring-indigo-600'}
    ],
    brands: [
        {content: 'samsung', selectedClass: 'ring-indigo-600'},
        {content: 'asus', selectedClass: 'ring-indigo-600'},
        {content: 'lg', selectedClass: 'ring-indigo-600'},
        {content: 'apple', selectedClass: 'ring-indigo-600'},
        {content: 'xiaomi', selectedClass: 'ring-indigo-600'},
        {content: 'lenovo', selectedClass: 'ring-indigo-600'}
    ]
}

 
export const ubications = [
  {
    "provinces": [
      {
        "name": "Panamá",
        "districts": [
          {
            "name": "Panamá",
            "metroStations": [
              "Albrook", "5 de Mayo", "Loteria", "Santo Tomas", "Iglesia del carmen","Via Argentina", "Fernandez de Cordoba", "El Ingenio","12 de octubre","Pueblo Nuevo", "San Miguelito", "Pan de Azucar", "Los Andes", "San Isidro","Villa Zaita"
            ]
          },
              {
                "name": "San Miguelito",
                "metroStations": [
                  "San Miguelito", "Paraiso", "Cincuentenario", "Villa Lucre", "El Crisol","Brisas del Golf","Cerro Viento","San Antonio","Pedregal","Don Bosco","Corredor Sur","Las Mañanitas","Hospital del Este","Altos de Tocumen","24 de Diciembre","Nuevo Tocumen"
                ]
              }
            ]
          }
        ]
      }
      
    ];


export const inputsCategory = [
    {id: "Men's clothing", textContext: "Men's clothing"},
    {id: "Home", textContext: "Home"},
    {id: "Men Perfum", textContext: "Men Perfum"},
    {id: "Accesories", textContext: "Accesories"},
    {id: "Women's clothing", textContext: "Women's clothing"},
    {id: "Jewelery", textContext: "Jewelery"},
    {id: "Electronics", textContext: "Electronics"},
]

export const inputsRating = [
    {
        type: 'checkbox',
        id: 'above',
        classInput: 'w-[15px]',
        classDiv: 'flex',
        classLabel: 'pl-1 cursor-pointer',
        textContent: 'Above average'
    },
    {
        type: 'checkbox',
        id: 'below',
        classInput: 'w-[15px]',
        classDiv: 'flex mt-2',
        classLabel: 'pl-1 cursor-pointer',
        textContent: 'Below average'
    }
]
