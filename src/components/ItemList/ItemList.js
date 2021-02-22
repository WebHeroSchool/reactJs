import React from 'react';
import Item from '../Item/Items';
import Checkbox from '@material-ui/icons/Checkbox';

const Check = () => <div>
    <Checkbox
        control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
        label="Custom icon"
      />
</div>

const ItemList = ({ items }) => (<ul>
   {items.map(item => <li key={item.value}><Item value={item.value} isDone={item.isDone} /></li>)}
</ul>);

export default ItemList;