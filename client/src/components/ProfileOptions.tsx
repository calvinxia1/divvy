  import { Fragment, useState } from "react";
  import "../styles/ProfileOptions.css"
  interface Props {
      items: string[];
      clickSelectItem: (item: string) => void;
  }

  function ProfileOptions({items, clickSelectItem}: Props ) {

    
    return (
      <>
        {items.length === 0 && <p> No items in list</p>}
        <ul className="list-group">
          {items.map((item) => (
            <li className = "list-group-item-profile"
              key={item}
              onClick={() => {
                  clickSelectItem(item);
              }}>
              {item}
            </li>
          ))}
        </ul>
      </>
    );
  }

  export default ProfileOptions;
