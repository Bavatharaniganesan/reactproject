import React, { useState, useEffect } from 'react';
import "./Order.css";

function Order(props) {
    const [flag, setFlag] = useState(0);
    const [receiveditems, setReceivedItems] = useState([]);
  
    const submit = () => {
        alert("Ordered");
    }

    useEffect(() => {

        if (flag < 1) {
            setFlag(flag + 1);
            setReceivedItems(props.location.state)
        }

    })
    return (
        <div className='top'>
            {receiveditems && receiveditems.length >= 1 ? <div className="section-center">
                {receiveditems.map((item) => {
                    const { id, title, img, desc, price } = item;
                    return (
                        <article key={id} className="menu-item">
                            <img src={img} alt={title} className="photo" />
                            <div className="item-info" key={id} >
                                <header>
                                    <h4 >{title}</h4>
                                    <h4 className="price">${price}</h4>
                                </header>
                                <p className="item-text">{desc}</p>
                            </div>
                            <button onClick={submit} className='submit'>Place Order</button>
                        </article>

                    );
                })}
            </div> : <p>No data found</p>}
        </div>
    );
}

export default Order;
