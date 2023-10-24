  import { Fragment, useState } from "react";
  import "../styles/ListGroup.css"
  interface Props {
      items: string[];
      listItemType?: "list-group-item-profile"|"list-group-item-feed";
      clickSelectItem: (item: string) => void;
  }

  function ListGroup({items, listItemType, clickSelectItem}: Props ) {

    
    return (
      <div className="list-group-container">
        {items.length === 0 && <p> No items in list</p>}
        <ul className="list-group">
          {items.map((item) => (
            <li className = {listItemType}
              key={item}
              onClick={() => {
                  clickSelectItem(item);
              }}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  export default ListGroup;
