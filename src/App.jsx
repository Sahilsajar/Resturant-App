import { useState } from 'react'
import './App.css'
import MenuCard from './Components/MenuCard'
import Menu from './Components/Menu'
import Navbar from './Components/Navbar'

const uniqueList= [...new Set(Menu.map((food)=>{
  return food.category;
})),"All"]

console.log(uniqueList)


function App() {
 const [menuData, setMenuData]=useState(Menu);
 const [categoryList, setCategoryList]=useState(uniqueList);

 function filterItem(category){
  if(category==="All")
  {
    setMenuData(Menu)
  }
  else {
    const updateMenu = Menu.filter((food) => {
      return food.category === category;
    })
    setMenuData(updateMenu);
  }
 }

  return (
    <>
     <Navbar filterItem={filterItem} categoryList={categoryList}/>
     <MenuCard Menu={menuData}/>
    </>
  )
}

export default App
