import Homepage from "./Routes/Homepage/Homepage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Nextpage from "./Routes/Nextpage/Nextpage";
import Payout from "./Routes/Payout/Payout";
import Onepage from "./Routes/Onepage/Onepage";
  function App() {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Payout/>,
        children:[
          {
          path:"/",
          element:<Homepage/>
        },
      {
        path: "/Next",
        element: < Nextpage/>,
      },
      {
        path: "/Single",
        element: < Onepage/>,
      }
    ]
  }
    ]);
  
    return (
 
    <RouterProvider router={router} />
    );
}

export default App;