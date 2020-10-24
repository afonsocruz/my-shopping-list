import React, { useEffect, useState } from 'react';
import { listProductEntries } from '../../api/api';
import { StyledDiv } from './ProductStyle';
import { CreateProduct } from '../CreateProduct/CreateProduct';
import { Link, Route } from 'react-router-dom'

function Product() {

    const [productEntry, setProductEntry] = useState([]);


    useEffect(()=> {

        (async () => {
            const productEntry = await listProductEntries();
            setProductEntry(productEntry)
        })()

    },[setProductEntry])


    return (
        <>
        <StyledDiv>
            {
                productEntry.map(entry => (
                    <label key={entry._id} htmlFor=""> {entry.product}
                        <input  type="checkbox"/>
                    </label>
                ))
            }
        </StyledDiv>
        </>
    )
}

export default Product;

