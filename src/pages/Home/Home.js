import React, { Fragment } from "react";
import Card from "../../components/card/card";

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
      //this.setState({ loading: false, error: error });
    }
  }, []);

  React.useEffect(() => {
    if (search) {
      console.log(search);
    }
  }, [search]);

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          {loading ? (
            <p>Cargando...</p>
          ) : (
            data.results.map((item) => (
              <div className="col-4" key={item.id}>
                <Card {...item} />
              </div>
            ))
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
