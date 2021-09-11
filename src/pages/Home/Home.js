import React, { Fragment } from "react";
import CharacterCard from "../../components/card/character/CharacterCard";
import { Container, Row, Col } from "react-bootstrap";

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
      <Container>
        <Row className="justify-content-md-center">
          {loading ? (
            <p>Cargando...</p>
          ) : search !== null ? (
            data.results
              .filter((filterItem) =>
                filterItem.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((item) => (
                <Col xs={12} sm={6} md={4} key={item.id}>
                  <CharacterCard {...item} />
                </Col>
              ))
          ) : (
            data.results.map((item) => (
              <Col xs={12} sm={6} md={4} key={item.id}>
                <CharacterCard {...item} />
              </Col>
            ))
          )}
        </Row>
      </Container>
    </Fragment>
  );
}

export default Home;
