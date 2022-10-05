import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router } from "./Router";
import { RouterProvider } from "react-router-dom";
const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
