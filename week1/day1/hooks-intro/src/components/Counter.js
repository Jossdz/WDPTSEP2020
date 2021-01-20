// rfc => react function component
// rafc => react arrow function component
// _rfc => un nuevo react component sin importar react

function Counter(props) {
  return (
    <div>
      <h1>Counter</h1>
      <h2>{props.initialCounter}</h2>
    </div>
  )
}

export default Counter
