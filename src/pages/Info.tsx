import { useSearchParams } from "react-router-dom";
import useGetPost from "../hooks/useGetPost";
import { Row, Col } from "react-bootstrap";
const Info = () => {
  const [searchParams] = useSearchParams();

  const id = searchParams.get("id") as string;
  const paramType = searchParams.get("type") as string;
  const paramKey = searchParams.get("key") as string;

  const { data, isLoading, error, isError } = useGetPost(
    id,
    paramType,
    paramKey
  );

  if (isLoading) {
    return <p>loading please wait</p>;
  }

  if (isError) {
    return <div>error: {error.message}</div>;
  }

  return (
    <Row>
      <Col xs={6}>
        <div>
          <h4>Title: {data?.title}</h4>
          <p>Status: {data?.status}</p>
          <p>Top Rate: {data?.topRate ? "true" : "false"}</p>
          <p>Body: {data?.body}</p>
          <hr />
          <h4 className="mb-2">Comments:</h4>
          <p>Comment 1</p>
          <p>Comment 2</p>
        </div>
      </Col>
    </Row>
  );
};

export default Info;
