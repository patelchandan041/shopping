import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <Product
            id="1122"
            image="https://cdn.shopify.com/s/files/1/1132/3440/products/image_7ccfbe8b-32f0-4c16-9306-ca50e7b8b32c_large.jpg?v=1576200539"
            title="the sally curb"
            price={500} />
               <Product
            id="1133"
            image="https://cdn.shopify.com/s/files/1/1132/3440/products/85B7D9DE-9D22-4AE2-B58A-1D85A73D49DE_large.jpeg?v=1575354126"
            title="the vally curb"
            price={500} />
               <Product
            id="1144"
            image="https://cdn.shopify.com/s/files/1/1132/3440/products/EFC52E66-7F17-4BA9-8DF9-D7162238B722_large.jpeg?v=1575354116"
            title="the rally"
            price={500} />
               <Product
            id="1155"
            image="https://cdn.shopify.com/s/files/1/1132/3440/products/image_2873aee5-a897-4c3d-8810-53d002986834_large.jpg?v=1589841479"
            title="the bally"
            price={500} />
         
        </div>
    )
}

export default Home
