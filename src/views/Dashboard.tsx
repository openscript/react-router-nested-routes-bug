import { Link } from "react-router-dom";

export default function Dashboard() {
  return <div>Dashboard <Link to="customer/users">Manage users</Link></div>
}