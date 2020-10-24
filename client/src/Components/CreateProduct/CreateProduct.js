import React from 'react';
import { Route, Link } from 'react-router-dom';

export const CreateProduct = () => {

    return (
        <>
            <label htmlFor="">Digite um produto
                <input type="text"/>
            </label>
            <label htmlFor="">Digite o preço do produto
                <input type="text"/>
            </label>
            <button>
                Adicionar
            </button>
        </>
    )

}

