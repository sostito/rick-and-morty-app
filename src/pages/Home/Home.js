import React, { Fragment } from "react";
import CharacterCard from "../../components/card/character/CharacterCard";

function Home(props) {
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
        .fetch("https://rickandmortyapi.com/api/character")
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
                  <CharacterCard {...item} />
                </div>
              ))
          ) : (
            data.results.map((item) => (
              <div className="col-4" key={item.id}>
                <CharacterCard {...item} />
              </div>
            ))
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
