import React, {useState} from 'react'
import '../component-styles/Sidebar.css'
interface Props {
  pages: string[];
  onSelectItem: (page:string) => void;
}
const Sidebar = ({pages,onSelectItem}: Props) => {
  const [active, setActive] = useState(-1);

  return (
  
    
    <div className='sidebar'>
      {pages.length === 0 && <p> No items in list</p>}
      <ul className='sidebar-list'>
        {pages.map((page,index) => (
          <li className= {active === index? 'sidebar-list-select': 'sidebar-list-item'} 
          key={page}
          onClick={()=> {
            setActive(index);
            onSelectItem(page);
          
          }}
          >
          {page}

          </li>
        ))
        }

      </ul>
    </div>
  )
}

export default Sidebar