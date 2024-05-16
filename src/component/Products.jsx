import React from 'react';
import { ProductItem } from './ProductItem';

const products = [
  {
    img: 'https://img.freepik.com/free-photo/homemade-strawberry-waffle-breakfast-kids_53876-129298.jpg?t=st=1715691035~exp=1715694635~hmac=7c754560a3d3ccbc712056e1ca421e266be30f6aefe48b49973ae358e28f8bbf&w=740',
    name: 'Waffle',
    title:'Dessert',
    price: '20.0EGP',
    quantity: '10'
  },
  {
    img: 'https://img.freepik.com/free-photo/delicious-cake-with-fruits-cream_23-2148972058.jpg?t=st=1715694956~exp=1715698556~hmac=ccb5b992efdb02e985410bdd9fc6b91d6bb36cc64aa533b7a2c8a2abf2300173&w=900',
    name: 'Torte',
    title:'Dessert',
    price: '30.0EGP',
    quantity: '5'
  },
  {
    img: 'https://img.freepik.com/free-photo/high-view-tasty-cupcake-fork_23-2148718738.jpg?t=st=1715695004~exp=1715698604~hmac=7dabcea8441414a7abc3bcf31fed2cfb09700669047e224107c1800395865c58&w=826',
    name: 'Cup Cake',
    title:'Dessert',
    price: '10.0EGP',
    quantity: '15'
  },
  {
    img: 'https://img.freepik.com/free-photo/top-view-baklava-with-mimosa-flowers-round-plate_176474-3291.jpg?t=st=1715695038~exp=1715698638~hmac=9682de0f4fee01c72dbdd4d1edd003b2fb563712a76feca315136f21c9fb68b2&w=740',
    Name: 'Gatau',
    title:'Dessert',
    price: '50.0EGP',
    quantity: '5'
  }
];

export function Products() {
  return (
    <div className="container">
      <div className="row" style={{ display: 'flex', flexWrap: 'nowrap' }}>
        {products.map((product, index) => (
          <ProductItem
            key={index}
            img={product.img}
            title={product.title}
            price={product.price}
            quantity={product.quantity}
          />
        ))}
      </div>
    </div>
  );
}
