const fruits = [
  {
    id: 1,
    titl: 'Яюлоки',
    price: 20,
    img:
      'https://previews.123rf.com/images/utima/utima1512/utima151200003/50416914-red-apple-and-a-half-with-drops-isolated-on-white.jpg',
  },
  {
    id: 2,
    titl: 'Апельсины',
    price: 30,
    img:
      'https://static9.depositphotos.com/1642482/1148/i/950/depositphotos_11489401-stock-photo-orange-fruit.jpg',
  },
  {
    id: 3,
    titl: 'Манго',
    price: 40,
    img:
      'https://cdn.pixabay.com/photo/2016/02/23/17/36/mango-1218147_1280.png',
  },
];

const modal = $.modal({
  title: 'Sergey Modal',
  closable: true,
  content: `
  <p>Lorem ipsum dolor sit. </p>
  <p>Lorem ipsum dolor sit. </p>
  `,
  width: '400px',
  footerButtons: [
    {
      text: 'ok',
      type: 'primary',
      handler() {
        console.log('Primary btn clicked');
        modal.close();
      },
    },
    {
      text: 'Cancel',
      type: 'danger',
      handler() {
        console.log('Danger btn clicked');
        modal.close();
      },
    },
  ],
});
