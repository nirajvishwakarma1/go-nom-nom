import { Container } from "react-bootstrap";
import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <Container className="py-4 text-center">
      <h2>Oops!!!</h2>
      <p>Something went wrong.</p>
      <p>
        <strong>{err.status}</strong>: {err.statusText}
      </p>
    </Container>
  );
};

export default Error;
