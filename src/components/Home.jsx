import React from 'react'
import { CartState } from '../context/Context'
import Filters from './Filters';
import SingleProducts from './SingleProducts';
import "./styles.css"

const Home = () => {
  const {
    state:{products},
  }
     = CartState();

  // console.log(state);


  return (
    <div className='home'>
      <Filters/>

          <div className="productContainer">
            {
                  products.map((prod)=>{
                    return <SingleProducts prod={prod} key={prod.id}/>
                    // <span>{prod.name}</span>
                  })
            }
          </div>
    </div>
  )
}

export default Home