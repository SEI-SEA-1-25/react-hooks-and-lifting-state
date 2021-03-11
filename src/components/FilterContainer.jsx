import { useState, useEffect } from 'react'

import FilterForm from './FilterForm'
import FruitList from './FruitList'

export default function FilterContainer() {
  // the shared state will live here
  const [fruits /* current value of fruits in state*/, setFruits /* a function that changes the value of fruits in state */] = useState([
    'pineapple',
    'mango',
    'banana',
    'apple',
    'kiwi',
    'pear',
    'strawberry'
  ])
  // add state value for input
  const [fruitInputValue, setFruitInputValue] = useState('')
  
  // debug to check that state is updating 
  useEffect(() => {
    console.log(fruitInputValue)
    setFruitInputValue('')
  }, [fruits])
  
  // const [stateValue, functionToSetStateValue] = useState()
  // function useState() {
  //   // blah blah blah function stuff

  //   function functionSetsTheValue() {
  //     value = new value
  //   }

  //   return [value, functionSetsTheValue]
  // }

  // add submit event handler
  const handleFruitSubmit = e => {
    e.preventDefault()
    // only let fruits pass that do not equal the input value
    // from the form
    const filteredFruit = fruits.filter(fruit => {
      return fruit != fruitInputValue
    })

    setFruits(filteredFruit)
  }

  // add on change handler
  const handleFruitChange = e => setFruitInputValue(e.target.value) 

  return (
    <div className='filter-container'>
      {/* pass them as props! */}
      <FilterForm
        handleFruitChange={handleFruitChange}
        fruitInputValue={fruitInputValue}
        handleFruitSubmit={handleFruitSubmit}
      />
      <FruitList fruits={fruits}/>
    </div>
  )
}