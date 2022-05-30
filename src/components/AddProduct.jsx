import React,{useState ,useEffect} from "react";
import { Button, Modal ,ModalBody, Input, Select,RadioGroup,Radio,ModalOverlay, ModalContent, Text} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import axios from 'axios';

const AddProduct = ({postData}) => {
  // TODO: Remove below const and instead import them from chakra
   const { isOpen, onOpen, onClose } = useDisclosure();
   const[form,setForm]=useState({
     "gender":""
   });

    const handleChange=(e)=>{
        console.log(e.target.value);
        let {checked,name,value,type}=e.target;
        if(type==="radio"){
            setForm({...form,
            [name]:value,
            })
        }
        else{
             setForm({...form,
            [name]:value,
            })
        }
    }



   const handleSubmit=(e)=>{
     e.preventDefault();
        onClose(); 
        postData(form);
    }

  //  useEffect(()=>{
  //      console.log(form);
  //   });
  return (
    <>
    <div style={{margin:"auto"}}>
      <Button my={4} data-cy="add-product-button"
      onClick={onOpen}>ADD NEW Product</Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        width="500px">
        <ModalOverlay/>
        <ModalContent>
        <ModalBody pb={6}>
          <Text fontSize="25px" fontWeight="bold">Add New Product</Text>

          <form onSubmit={handleSubmit}>
          <p>Title</p>

          <Input 
          data-cy="add-product-title" 
          type="text"
          name="title" 
          onChange={handleChange}/>  
          <p>Category</p>


          <Select data-cy="add-product-category" onChange={handleChange} name="category">
            <option data-cy="add-product-category-shirt" value="shirt">Shirt</option>
            <option data-cy="add-product-category-pant" value="pant">Pant</option>
            <option data-cy="add-product-category-jeans" value="jeans">Jeans</option>
          </Select>


          <p>Gender</p>
          <RadioGroup data-cy="add-product-gender" display="flex">  
          
            <Radio
            data-cy="add-product-gender-male" 
            value="male" 
            name="gender"
            type="radio"
            onChange={handleChange}></Radio>
            <p>Male</p>
            
            <Radio 
            data-cy="add-product-gender-female" 
            value="female" 
            name="gender"
            type="radio"
            onChange={handleChange}></Radio>
            <p>Female</p>
            
            <Radio 
            data-cy="add-product-gender-unisex" 
            value="unisex" 
            name="gender"
            type="radio"
            
            onChange={handleChange}></Radio>
            <p>Unisex</p>
          </RadioGroup>

          <p>Price</p>
          <Input data-cy="add-product-price" name="price" onChange={handleChange}/>
          <Button data-cy="add-product-submit-button" type="submit">Add Product</Button>
          </form>
        </ModalBody>
        </ModalContent>
      </Modal>
      </div>
    </>
  );
};

export default AddProduct;
