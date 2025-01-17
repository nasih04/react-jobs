const App = () => {
  const name = "john";
  const x = 10;
  const y  = 20;
  const names = ["john", "jane", "joe"];
  const loggedIn = false;

  return (
   <>
    <h1>hello {name}</h1>
    <p>The sum of the values{x} and {y} is{x+y}</p>
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
    {loggedIn && <p>Hello Member</p>}
   </>
  )
}

export default App;