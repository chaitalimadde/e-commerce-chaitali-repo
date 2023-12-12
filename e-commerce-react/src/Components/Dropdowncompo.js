import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Dropdowncompo =(props) =>{
    

        props && props?.categories.data.map((item)=>{
         return <DropdownButton id="dropdown-basic-button" title="Dropdown button" key={item.id}>
          <Dropdown.Item href="#/action-1">{item.category_name}</Dropdown.Item>
          <Dropdown.Item href="#/action-2">{item.createdAt}</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
        })
        
  
   
    }
    
export default Dropdowncompo;
