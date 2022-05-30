import {Button,Modal,ModalBody,ModalOverlay,ModalContent,ModalCloseButton,ModalFooter,FormControl,useDisclosure,ModalHeader,FormLabel,Input,Select,RadioGroup,Radio} from '@chakra-ui/react';
import React from 'react';


function InitialFocus() {
  const { isOpen, onOpen, onClose } = useDisclosure()

//   const initialRef = React.useRef()
//   const finalRef = React.useRef()

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={onClose}>

        <ModalOverlay />

        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />


          <ModalBody pb={6}>
          <p>Title</p>
          <Input data-cy="add-product-title" type="text" />
          <p>Category</p>
          <Select data-cy="add-product-category">
            <option data-cy="add-product-category-shirt">Shirt</option>
            <option data-cy="add-product-category-pant">Pant</option>
            <option data-cy="add-product-category-jeans">Jeans</option>
          </Select>
          <p>Gender</p>
          <RadioGroup data-cy="add-product-gender">
            
            <Radio data-cy="add-product-gender-male"></Radio>
            <Radio data-cy="add-product-gender-female"></Radio>
            <Radio data-cy="add-product-gender-unisex"></Radio>
          </RadioGroup>

          <p>Price</p>
          <Input data-cy="add-product-price" />
          <Button data-cy="add-product-submit-button">Add Product</Button>
          </ModalBody>

        </ModalContent>
      </Modal>
    </>
  )
};
export default InitialFocus;