const initialState = {
    columns: [
      {
        id: 1,
        title: 'Books',
        icon: 'book',
      },
      {
        id: 2,
        title: 'Movies',
        icon: 'film',
      },
      {
        id: 3,
        title: 'Games',
        icon: 'gamepad',
      }
    ],
  
    cards: [
      { id: 1, columnId: 1, title: 'The Way of Kings' },
      { id: 2, columnId: 1, title: 'The Lord of the Rings' },
      { id: 3, columnId: 2, title: 'Harry Potter' },
      { id: 4, columnId: 2, title: 'Star Wars' },
      { id: 5, columnId: 3, title: 'Divinity Orginal Sin 2' },
      { id: 6, columnId: 3, title: 'Star Wars Fallen Order' }
    ]
  
  };
  
  export default initialState; 