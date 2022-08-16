import { Loader } from "@mantine/core";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import '../App.css';
import Footer from "../component/Footer";
import { FormContainer } from '../component/Form';
import ProductCard from '../component/ProductCard';
import Pagination from '../more/Pagination';
import { get_products } from '../redux/actions/ProductAction';
const Home = () => {
  const {allProduct ,  perPage , productCounts} = useSelector(state => state.Product);

  const dispatch = useDispatch();
  const { currentPage } = useParams();
  console.log(currentPage);
  
  useEffect(() => {
    dispatch(get_products(currentPage ? currentPage.split("-")[1] : 1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);




  
    return (
      <>
        <div className="App">
        <div className='form-area-container'>
        <FormContainer/>
        </div>
        <div className='card-area-container'>
        
          {
            allProduct.length > 0 ? allProduct.map((p , i) =>  <ProductCard p={p} i={i}/>) :  
            <h1>There is no product</h1>
             }

            {
              !allProduct &&  <div className='loader'>
              <Loader/>
            </div>
            }
       
        <div className="pagination-container-area">
       {
        allProduct.length > 0 ? <Pagination
        pageNumber={currentPage ? currentPage.split("-")[1] : 1}
        perPage={perPage}
        itemCount={productCounts}
        path="/home"
        /> :  null
       }
      
      </div>
        </div>
        
      </div>
       <Footer/>
      </>
    );
};

export default Home;