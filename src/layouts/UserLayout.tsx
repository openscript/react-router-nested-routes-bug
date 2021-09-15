import { Outlet } from "react-router";

export default function UserLayout() {
  return <div>
    <h1>User management</h1>
    <Outlet />
  </div>
}