import React from "react";
import {Text,Image,Box,Stack,Tag,TagLabel,Heading,Flex} from '@chakra-ui/react';
import styles from './Product.module.css';

const Product = ({item}) => {
  // TODO: Remove below const and instead import them from chakra


  return (
    <Stack data-cy="product" className={styles.Item}>
      <Image data-cy="product-image" src={item.imageSrc}/>
      <Flex justifyContent="space-between" fontSize="20px">
      <Text data-cy="product-category">{item.category}</Text>
      <Tag>
        <TagLabel data-cy="product-gender">{item.gender}</TagLabel>
      </Tag>

      </Flex>

      <Heading data-cy="product-title" className={styles.title}>{item.title}</Heading>
      <Box data-cy="product-price" className={styles.price}>Rs.{item.price}/unit</Box>
    </Stack>
  );
};

export default Product;
