import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import EpisodeCard from "../../components/card/episode/EpisodeCard";
import Pagination from "../../components/pagination/pagination";
import { useParams } from 'react-router-dom'
import { useSelector } from "react-redux";

function Episodes() {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState({});
  const { page } = useParams()

  const search = useSelector((state) => state.search);

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
          ) : search.searchText !== null && search.searchText !== "" ? (
            data.results
              .filter((filterItem) =>
                filterItem.name.toLowerCase().includes(search.searchText.toLowerCase())
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
