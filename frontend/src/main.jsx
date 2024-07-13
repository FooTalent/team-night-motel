import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import  Nosotros  from "./componets/nosotros/Nosotros.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { themeCustom } from "./assets/theme/themeCustom.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Consulta } from "./componets/consulta/Consulta.jsx";
import { Admin } from "./componets/admin/Admin.jsx";
import { Interes } from "./componets/sitioInteres/Interes.jsx";
import { Global, css } from "@emotion/react";
import { Bienvenida } from "./componets/admin/Bienvenida.jsx";
import { Service } from "./componets/service/Service.jsx";
import { Admin1 } from "./componets/admin/Admin1.jsx";
import { Admin2 } from "./componets/admin/Admin2.jsx";
import { Reservaciones } from "./componets/admin/Reservaciones.jsx";
import { ModalConfirm } from "./componets/admin/ModalConfirm.jsx";
import { ModalCancel } from "./componets/admin/ModalCancel.jsx";

const router=createBrowserRouter([
  { 
    path:"/",
    element:<App/>,
    errorElement:<h1>Error</h1>
  },
  {
    path:'/consulta',
    element:<Consulta/>,
  },
   
  {
    path:'/nosotros',
    element:<Nosotros/>,
  },
 
  
  {
    path:'/interes',
    element:<Interes/>,
  },
  {
    path:'/admin',
    element:<Admin/>,
  },

  {
    path:'/admin1',
    element:<Admin1/>,
  },
  {
    path:'/admin2',
    element:<Admin2/>,
  },
  {
    path:'/reservaciones',
    element:<Reservaciones/>,
  },
  {
    path:'/confirmacion',
    element:<ModalConfirm/>,
  },
  {
    path:'/cancelar',
    element:<ModalCancel/>,
  },
  {
    path:'/admin/home',
    element:<Bienvenida/>,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={themeCustom}>
    <Global
    styles={css`
      @font-face{
      font-family:'MiFuente';
      src:url('/fonts/poppins/Poppins-Regular.ttf);
      font-weight:normal;
      font-style:normal;
      
      }
      `}/>
    <React.StrictMode>
      
     <RouterProvider router={router}/>
     
    </React.StrictMode>
  </ChakraProvider>
);
