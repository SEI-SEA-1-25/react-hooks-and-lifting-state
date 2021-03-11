export default function FruitList(props) {
  // map the fruits into an array of list items
  const fruitListItems = props.fruits.map((fruit, index) => {
    return <li key={index}>{fruit}</li>
  })

  return (
    <div className='fruit-list'>
      <ul>
        {fruitListItems}
      </ul>
    </div>
  )
}