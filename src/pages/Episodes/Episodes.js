import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import EpisodeCard from "../../components/card/episode/EpisodeCard";
import Pagination from "../../components/pagination/pagination";
import { useParams } from 'react-router-dom'

function Episodes(props) {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState({});
  const [search, setSearch] = React.useState("");
  const { page } = useParams()

  if (search !== props.search) {
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
          `https://rickandmortyapi.com/api/episode?page= + ${page}`
        )
        .then((res) => res.json())
        .then((response) => {
          setData(response);
          setLoading(false);
          console.log('termina')
        });
    } catch (error) {
      console.log(
        "Se produjo un error realizando la peticion al api. " + error
      );
    }
  }

  return (
    <Fragment>
      <Container>
        <Row className="animated fadeIn slow">
          {loading ? (
            <p>Cargando...</p>
          ) : search !== null && search !== "" ? (
            data.results
              .filter((filterItem) =>
                filterItem.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((item) => (
                <Col xs={6} sm={6} lg={4} key={item.id}>
                  <EpisodeCard {...item} />
                </Col>
              ))
          ) : (
            data.results.map((item) => (
              <Col xs={12} sm={6} lg={4} key={item.id}>
                <EpisodeCard {...item} />
              </Col>
            ))
          )}
        </Row>
        {loading ? (
          <p>Cargando...</p>
        ) : (
          <Pagination
            nextPage={hadleSearch}
            numberPages={data.info.pages}
            activePage={page}
          />
        )}
      </Container>
    </Fragment>
  );
}

export default Episodes;
