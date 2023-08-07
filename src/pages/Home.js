import React from 'react';
import { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product'

const Home = () => {
  // fetch data product from products context
  const { products } = useContext(ProductContext);
  console.log(products)
  const filteredProducts = products.filter(item => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
      );
  });
  console.log(filteredProducts)
  return <div>
    <section className='py-16'>
      <div className="container mx-auto">
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-sm mx-auto md:max-w-none md:mx-0'>
        {filteredProducts.map(products => {
          return <Product Product={products} key={products.id}/>
          })}
      </div>
   </div>
    </section>
  </div>;
};

export default Home;
