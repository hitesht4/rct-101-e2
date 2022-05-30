import React,{useState,useEffect} from "react";
import axios from 'axios';
import{Flex,Grid, GridItem, StylesProvider} from '@chakra-ui/react';
import AddProduct from "./AddProduct";
import Product from "./Product";
import Pagination from "./Pagination";
import styles from './Products.module.css';


const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  const[products,setProducts]=useState([]);
  const[page,setPage]=useState(1);
  const[limit,setLimit]=useState(3);
  const[last,setLast]=useState(0);

      const getData=async()=>{
        let r= await axios.get(`http://localhost:8080/products?_page=${page}&_limit=${limit}`);
        setLast(Number(r.headers["x-total-count"]));
        setProducts(r.data);
    }
    const postData=async(form)=>{
      let r=await fetch("http://localhost:8080/products",{
        method:"POST",
        headers:{"Content-Type":"Application/json"},
        body:JSON.stringify(form)
      })

      let data=await r.json();
       setProducts([...products,data]);
    }
    useEffect(()=>{
        getData();
    },[page,limit]);

  return (
    <Flex flexDirection="column">
      {/*  AddProduct */}
      <AddProduct postData={postData}/>
      <Grid className={styles.grid}>
        {/* List of Products */}
        {products.map(item=>
       
          <Product key={item.id} item={item}/> 
       
        )}
        
      </Grid>
      {/* Pagination */}
      <Pagination page={page} setPage={setPage} limit={limit} setLimit={setLimit}last={last}/>
    </Flex>
  );
};

export default Products;
