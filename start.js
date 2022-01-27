import React,{useState} from 'react';
import Categories from "./Categories";
import items from "./data";
import logo from "./logo.jpg";
import Menu from './Menu';

function Start() {  const allCategories = ["all", ...new Set(items.map((item) => item.category))];
const [menuItems, setMenuItems] = useState(items);
const [activeCategory, setActiveCategory] = useState("");
const [categories, setCategories] = useState(allCategories);

const filterItems = (category) => {
  setActiveCategory(category);
  if (category === "all") {
    setMenuItems(items);
    return;
  }
  const newItems = items.filter((item) => item.category === category);
  setMenuItems(newItems);

};

    return(
    <div>
        <h1 style={{ textAlign: "center", fontSize: "50px" }}>Taste of the World</h1>
        <section className="menu section">
            <div className="title">
                <img src={logo} alt="logo" className="logo" />
                <h2>Menus</h2>
            </div>
            <Categories
                categories={categories}
                activeCategory={activeCategory}
                filterItems={filterItems}
            />
            <Menu items={menuItems} />
        </section>
    </div>
    );
}

export default Start;
