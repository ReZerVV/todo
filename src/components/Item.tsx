import React from 'react';
import './Item.css';

export interface IItemProps {
    description: string
}

export function Item(props: IItemProps) {
    return (
        <div className='item'>
            <p className='item-description'>{ props.description }</p>
        </div>
    );
}
