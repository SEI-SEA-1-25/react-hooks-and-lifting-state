import FilterForm from './Filterform'
import FruitList from './FruitList'

export default function FilterContainer() {
  // the shared state will live here

  return (
    <div className='filter-container'>
      <FilterForm />
      <FruitList />
    </div>
  )
}