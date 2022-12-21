const App = () => {
    let number = 2;
    

    if (number % 2 == 0) {
      number = true ;
    } else {
      number = false;
    }

    return (
        <div>
            {number && <p>Broj je paran</p>}
            {!number && <p>Broj je neparan</p>}
        </div>
    );
};

export default App;
