function Navbar({filterItem, categoryList}) {
    return <>
        <nav className="navbar">
            <div className="btn-group">
                {categoryList.map((currentCategory) => {
                    return <button className='btn-group__item' onClick={()=> filterItem(currentCategory)}>{currentCategory}</button>
                })}
            </div>
        </nav>
    </>
}

export default Navbar;

{/* <button className='btn-group__item' onClick={()=> filterItem("breakfast")}>BREAKFAST</button>
                <button className='btn-group__item' onClick={()=> filterItem("evening")}>EVENING</button>
                <button className='btn-group__item' onClick={()=> filterItem("lunch")}>LUNCH</button>
                <button className='btn-group__item' onClick={()=> filterItem("dinner")}>DINNER</button>
                <button className='btn-group__item' onClick={()=> filterItem("ALL")}>ALL</button> */}