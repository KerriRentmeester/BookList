function App(){
    const [data, setData] = React.useState(null);
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        async function getData() {
            const response = await fetch('./books.json');
            const json     = await response.json();
            setData(json);
            setLoaded(true);
        }
        getData();
    },[])
    console.log('loaded:', loaded, 'data:', data);

    return (<>
        <div id="top" className="container">
            <h1>Learning JavaScript: a list of books</h1>
            {loaded && data.books.map((book,i) => 
                <mit-book 
                    skey={i}
                    title={book.title} 
                    subtitle={book.subtitle}
                    author={book.author}
                    publisher={book.publisher}
                    description={book.description}
                />
            )}

            <div class="center">
                <a href="#top" class="styled-link">Return to the top of the page</a><br />
            </div>
        </div>        
    </>);   
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);