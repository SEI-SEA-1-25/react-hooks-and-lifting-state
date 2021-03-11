export default function FilterForm(props) {
  // inline styling in React
  // make an object of css styles
  const formStyles = {
    border: '.3em solid green',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
  
  return (
    <div style={formStyles}>
      <form onSubmit={props.handleFruitSubmit}>
        <label htmlFor='fruit-filter'>Enter A fruit!</label>

        <input 
          type='text'
          value={props.fruitInputValue}
          onChange={props.handleFruitChange}
          placeholder='enter a fruit! 🍉'
          id='fruit-filter'
        />

        <input
          type='submit'
          value='Submit to the FRUIT'
        />
      </form>
    </div>
  )
}