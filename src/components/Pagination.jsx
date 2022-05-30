import React from "react";
import { ButtonGroup,Button,Select } from "@chakra-ui/react";

const Pagination = ({page,setPage,limit,setLimit,last}) => {
  // TODO: Remove below const and instead import them from chakra
  const handleChange=(e)=>{
   const x=e.target.value;
   setLimit(Number(x));
   console.log(limit);
  }

  return (
    <>
    <ButtonGroup margin="auto">
      <Button data-cy="pagination-first-button"
      disabled={page<=1}
      onClick={()=>{setPage(1)}}>First</Button>
      <Button data-cy="pagination-previous-button"
      disabled={page<=1}
      onClick={()=>{
      
        if(page>1){
          setPage(page-1);}}}>
      Previous</Button>
      <Select data-cy="pagination-limit-select" width="100px" onChange={handleChange}>
        <option data-cy="pagination-limit-3">3</option>
        <option data-cy="pagination-limit-6">6</option>
        <option data-cy="pagination-limit-9">9</option>
      </Select>
      <Button data-cy="pagination-next-button"
       onClick={()=>{setPage(page+1)}}
       disabled={last<page*limit || page==="last"}>Next</Button>
      <Button 
      data-cy="pagination-last-button"
       onClick={()=>{setPage("last")}}
       disabled={page==="last"}>Last</Button>
    </ButtonGroup>
    </>
  );
};

export default Pagination;
