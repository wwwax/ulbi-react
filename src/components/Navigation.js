import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const navigationItems = [
  {
    id: uuidv4(),
    label: "Home",
    path: "/",
    exact: true,
  },
  {
    id: uuidv4(),
    label: "Posts",
    path: "/posts",
    exact: true,
  },
  {
    id: uuidv4(),
    label: "Albums",
    path: "/albums",
    exact: true,
  },
  {
    id: uuidv4(),
    label: "Photos",
    path: "/photos",
    exact: true,
  },
  {
    id: uuidv4(),
    label: "Todos",
    path: "/todos",
    exact: true,
  },
];

export default function Navigation() {
  return (
    <ul className="flex justify-center items-center uppercase">
      {navigationItems.map((item) => (
        <li className="mr-4 last:mr-0 text-white" key={item.id}>
          <NavLink className="font-fira_light" to={item.path}>{item.label}</NavLink>
        </li>
      ))}
    </ul>
  );
}
