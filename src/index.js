import React from 'react';
import ReactDom from 'react-dom'
import './index.css';

const books = [
{ id:1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL200_SR200,200_.jpg',
    title: 'A Promised Land',
    author: 'Barac Obama'
},

{ id:2,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81GeAcdMCsL._AC_UL200_SR200,200_.jpg',
    title: 'Humans',
    author: 'Brandon Stanton'
},

{ id:3,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81Kc8OsbDxL._AC_UL200_SR200,200_.jpg',
    title: 'Greenlights',
    author: 'Matthew McConaughey'
},

{ id:4,
    img: 'https://images-na.ssl-images-amazon.com/images/I/A1Ee%2BYjn92L._AC_UL200_SR200,200_.jpg',
    title: 'Polar Express 30th anniversary edition',
    author: 'Chris Van Allsburg'
},

{ id:5,
    img: 'https://images-na.ssl-images-amazon.com/images/I/71c1LRLBTBL._AC_UL200_SR200,200_.jpg',
    title: 'Dog Man',
    author: 'Dav Pilkey'
},
];


function BookList() {
return ( <section className='booklist'>{books.map((book)=>{
   return <Book key={book.id} {...book}></Book>;
   })}
   </section>
);
}

const Book = (props) => { 
    const { img, title, author }= props;
    
    return (
    <article className='book'>
        <img src={img} alts='' />
        <h1>{title}</h1>
        <h4>{author}</h4>
    </article>
    );
};



ReactDom.render(<BookList/>,document.getElementById('root'));
