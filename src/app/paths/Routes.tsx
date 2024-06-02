import { Route, Routes } from "react-router-dom";
import { paths } from "./paths.tsx";
export const RoutePaths = () => {
  return (
    <Routes>
      {paths.map((path) => (
        <Route key={path.name} path={path.path} element={path.page} />
      ))}
    </Routes>
  );
};
