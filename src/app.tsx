import { QueryClient, QueryClientProvider } from "react-query";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import { ReactQueryDevtools } from "react-query/devtools";
import { getClient } from "./queryClient";
import "./scss/index.scss";
import Gnb from "./components/Gnb";

const App = () => {
  const elem = useRoutes(routes);
  const queryClient = getClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Gnb />
      {elem}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
