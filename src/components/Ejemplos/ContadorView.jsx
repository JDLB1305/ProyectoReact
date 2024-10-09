const ContadorView = ( { contador, aumentar } ) => {
  return (
    <div>
      <p>Contador: {contador} </p>
      <button onClick={ aumentar }>+</button>
    </div>
  )
}

export default ContadorView
