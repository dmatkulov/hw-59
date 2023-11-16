import MovieApp from '../../components/MovieApp/MovieApp';
import MemeApp from '../../components/MemeApp/MemeApp';

function App() {
  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <MovieApp/>
          </div>
          <div className="col-4">
            <MemeApp/>
          </div>
      </div>
      </div>
    </>
  );
}

export default App;
