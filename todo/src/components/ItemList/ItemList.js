import React from 'react';
import Item from '../Item/Items';

const ItemList = ({ todoItem }) => (<ul>
   <li> <Item todoItem={todoItem} /> </li>
   <li> <Item todoItem={'прописать props-ы'} /> </li>
   <li> <Item todoItem={'отправить pullrequest'} /> </li>
</ul>);

export default ItemList; 