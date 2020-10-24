import React from 'react';

export const CreateProduct = () => {

    function handleAddProduct() {

    }


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

