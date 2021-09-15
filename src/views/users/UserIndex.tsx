import { Link, Route, Routes, useParams } from "react-router-dom";
import UserCreation from "./UserCreation";

function DefaultUserIndex() {
  const params = useParams();
  return (
    <div>
      <Link to="new">Create new user here</Link>
      <p>All users are listed here. You are on {params.page || "1"} with {params.limit || "10"} items per page.</p>
      <Link to={`10/${(parseInt(params.page || "1")) + 1}`}>Next page (relative)</Link>
      <br />
      <Link to={`/10/${parseInt(params.page || "1") + 1}`}>Next page (absolute)</Link>
    </div>
  );
}

export default function UserIndex() {
  return <Routes>
    <Route path="" element={<DefaultUserIndex />} />
    <Route path=":limit/:page" element={<DefaultUserIndex />} />
    <Route path="new" element={<UserCreation />} />
  </Routes>
}