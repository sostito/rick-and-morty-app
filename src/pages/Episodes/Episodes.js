import React, { Fragment } from "react";
import EpisodeCard from "../../components/card/episode/EpisodeCard";
import Pagination from "../../components/pagination/pagination";

function Episodes(props) {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState({});
  const [search, setSearch] = React.useState(null);

  if (props.search && search !== props.search) {
    setSearch(props.search);
  }

  React.useEffect(() => {
    hadleSearch();
  }, []);

  function hadleSearch(e) {
    try {
      setLoading(true);
      window
        .fetch(
          `https://rickandmortyapi.com/api/episode${
            e ? "?page=" + e.target.innerText : ""
          }`
        )
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
  }

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
                  <EpisodeCard {...item} />
                </div>
              ))
          ) : (
            data.results.map((item) => (
              <div className="col-4" key={item.id}>
                <EpisodeCard {...item} />
              </div>
            ))
          )}
        </div>
        {loading ? (
          <p>Cargando...</p>
        ) : (
          <Pagination
            nextPage={hadleSearch}
            numberPages={data.info.pages}
            activePage={props.match.params.page}
          />
        )}
      </div>
    </Fragment>
  );
}

export default Episodes;
