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
      },
    },
    {
      text: 'Cancel',
      type: 'danger',
      handler() {
        console.log('Danger btn clicked');
      },
    },
  ],
});
