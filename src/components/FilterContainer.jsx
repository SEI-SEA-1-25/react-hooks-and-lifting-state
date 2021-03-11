import { useState } from 'react'

import FilterForm from './FilterForm'
import FruitList from './FruitList'

export default function FilterContainer() {
  // the shared state will live here
  const [fruits, setFruits] = useState([
    'pineapple',
    'mango',
    'banana',
    'apple',
    'kiwi',
    'pear',
    'strawberry'
  ])

  return (
    <div className='filter-container'>
      <FilterForm />
      <FruitList fruits={fruits}/>
    </div>
  )
}