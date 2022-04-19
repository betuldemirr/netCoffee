import React from "react";
import { images, data } from "../../constants";
import MenuItem from "../MenuItem/MenuItem";
import "./Menu.css";

const Menu = () => (
  <div className="app__specialMenu flex__center " id="menu">
    <div className="app__specialMenu-title">
      <h1 className="headtext__cormorant">MENU</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <div className="app__specialMenu_menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
            />
          ))}
        </div>
      </div>

      <div className="menudiv" />

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem
              key={cocktail.title + index}
              title={cocktail.title}
              price={cocktail.price}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);
export default Menu;
