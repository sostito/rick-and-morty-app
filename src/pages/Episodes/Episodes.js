import React, { Fragment } from "react";

function Episodes(props) {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState({});
  const [search, setSearch] = React.useState(null);

  if (props.search && search !== props.search) {
    setSearch(props.search);
  }

  React.useEffect(() => {
    try {
      setLoading(true);
      window
        .fetch("https://rickandmortyapi.com/api/episode")
        .then((res) => res.json())
        .then((response) => {
          setData(response);
          setLoading(false);
        });
    } catch (error) {
      console.log(
        "Se produjo un error realizando la peticion al api. " + error
      );
    }
  }, []);

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          {loading ? (
            <p>Cargando...</p>
          ) : search !== null ? (
            data.results
              .filter((filterItem) =>
                filterItem.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((item) => (
                <div className="col-4" key={item.id}>
                  <div className="card mb-4">
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <div className="card-text">
                        <p className="mb-0">Lanzamiento: {item.air_date}</p>
                        <p className="mb-0">Identificador: {item.episode}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
          ) : (
            data.results.map((item) => (
              <div className="col-4" key={item.id}>
                <div className="col-4" key={item.id}>
                  <div className="card mb-4">
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <div className="card-text">
                        <p className="mb-0">Lanzamiento: {item.air_date}</p>
                        <p className="mb-0">Identificador: {item.episode}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default Episodes;
