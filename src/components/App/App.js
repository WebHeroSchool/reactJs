import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

const toDoItem = 'Написать новое приложение';
const App = () => { 
     const items = [
         {
             value: 'Написать новое приложение'
         },
         {
             value: 'Прописать props-ы'
         },
         {
             value: 'Отправить pullrequest'
         }
     ];

return (<div>
    <h1>Важные дела:</h1> 
    <InputItem />
    <ItemList todoItem = {toDoItem} />
    <Footer count={3} />
</div>);
}

export default App;