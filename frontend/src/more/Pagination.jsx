import React from "react";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./pagination.css";
const Pagination = ({ pageNumber, perPage, itemCount, path }) => {
  let totalPage = Math.ceil(itemCount/perPage);
  let starLink = pageNumber;
  let difference = totalPage - pageNumber;
  if(difference <= 4){
    starLink = parseInt(totalPage) - 4
  }
  let endLink =  parseInt(starLink) + 4; 
  if(starLink <= 0) {
    starLink = 1
  }
  const createLink =()=> {
    const storeLink = [];
    for(var i = starLink ; i < endLink ; i ++){
      storeLink.push(
        <li key={i} className={parseInt(pageNumber) === i ? "active" : ""}>
          <Link to={`${path}/page-${i}`}> {i}</Link>
        </li>
      )
    }
    return storeLink
  }

const nextPage = () => {
  if(pageNumber< totalPage){
    return <li><Link to={`${path}/page-${parseInt(pageNumber) + 1}`}><BsChevronDoubleRight /></Link></li>
  }
  else{
   return <button className="not-hover " disabled> <span><BsChevronDoubleRight/></span></button>
  }

}
const prevPage = () => {
  if(pageNumber>1){
    return <li><Link to={`${path}/page-${parseInt(pageNumber) - 1}`}><BsChevronDoubleLeft /></Link></li>
  }
  else{
   return <button className="not-hover " disabled> <span><BsChevronDoubleLeft/></span></button>
  }

}


  return (
    <div className="pagination">
      <ul>{prevPage()}
          {createLink()}
          {nextPage()}
      </ul>
    </div>
  );
};

export default Pagination;