import React from 'react';
import items from "./data";
import { useHistory } from 'react-router-dom';


function Menu() {

  const history = useHistory()
  const passContent = (item) => {
    let x = [];
    x.push(item);
    console.log(x);
    history.push({ pathname: '/order', state: x });
  }

  const menu = items;
  return (
    <div className="section-center">
      {menu.map((item) => {
        const { id, title, img, desc, price } = item;
        return (
          <article key={id} className="menu-item">
            <img onClick={() => passContent(item)} src={img} alt={title} className="photo" />
            <div className="item-info" key={id} >
              <header>
                <h4 >{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Menu;
