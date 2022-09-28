function App({ domElement }: any) {
  const subreddit = domElement.getAttribute("data-subreddit");

  return (
    <div className="App">
      <header className="App-header">
        <p>My favorite subreddit is /r/{subreddit}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
