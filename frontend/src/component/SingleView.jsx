/* eslint-disable react-hooks/exhaustive-deps */
import { Badge, Button, Card, Group, Text } from "@mantine/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { get_product } from "../redux/actions/ProductAction";

export const SingleView = () => {

  const {id} = useParams();
  const dispatch = useDispatch();
  const {  singleProduct , loader} = useSelector(state => state.Product);

useEffect(() => {
  dispatch(get_product(id))
}, [])
  
console.log(singleProduct , loader)

  
  return (
    <div className="single-view">
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <div className="header">
            <Link to="/">Back to see all products</Link>
        </div>
        <Group position="apart"  >
        <h2>{singleProduct && singleProduct?.productName}</h2>
       
        </Group>

        <Text size="sm" color="dimmed">
        </Text>
          {
            singleProduct && singleProduct?.productDetails
          } <br />
          <br />
          <Badge color="pink" variant="light">
          {
            singleProduct && singleProduct?.productSku
          }
          </Badge>
          <br />
          <Button variant="light" color="blue" fullWidth mt="md" radius="md">$ 
          {
             singleProduct && singleProduct?.productPrice
          } USD
      </Button>
      </Card>
    </div>
  );
};
