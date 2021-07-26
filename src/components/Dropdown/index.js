import React from 'react';
import { DropdownContainer, DropdownButton, DropdownList } from "components/Dropdown/Dropdown.styles";

const REGION = [
  { value: "", title: "All" },
  { value: "Africa", title: "Africa" },
  { value: "America", title: "America" },
  { value: "Asia", title: "Asia" },
  { value: "Europe", title: "Europe" },
  { value: "Oceania", title: "Oceania" },
]
 
function Dropdown({ setFilter }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <DropdownContainer>
      <DropdownButton onClick={() => setIsOpen(!isOpen)}>
        <span>
          Filter by Region
        </span>
        <i className={`fas ${isOpen ? "fa-angle-up" : "fa-angle-down"}`}></i>
      </DropdownButton>

      {
        isOpen && (
          <DropdownList>
            {
              REGION.map((item, index) => (
                <li key={index} onClick={() => {
                  setFilter(item.value);
                  setIsOpen(false);
                }}>{item.title}</li>
              ))
            }
          </DropdownList>
        )
      }
    </DropdownContainer>
  )
}

export default Dropdown;
