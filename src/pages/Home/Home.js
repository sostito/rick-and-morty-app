import React, { Fragment } from "react";
import CharacterCard from "../../components/card/character/CharacterCard";
import { Container, Row, Col } from "react-bootstrap";

function Home(props) {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState({});
  const [search, setSearch] = React.useState("");

  if (search !== props.search) {
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
        <Row className="justify-content-md-center animated fadeIn slow">
          {loading ? (
            <p>Cargando...</p>
          ) : search !== null && search !== "" ? (
            data.results
              .filter((filterItem) =>
                filterItem.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((item) => (
                <Col xs={6} sm={4} md={3} key={item.id}>
                  <CharacterCard {...item} />
                </Col>
              ))
          ) : (
            data.results.map((item) => (
              <Col xs={6} sm={4} md={3} key={item.id}>
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
