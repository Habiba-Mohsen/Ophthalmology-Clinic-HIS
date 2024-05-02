
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-circle-08",
    component: <Index />,
    layout: "/admin",
  },
  {
    path: "/Patients",
    name: "Patients",
    icon: "ni ni-ambulance",
    component: <Tables />,
    layout: "/admin",
  },
  {
    path: "/Doctors",
    name: "Doctors",
    icon: "ni ni-badge",
    component: <Profile />,
    layout: "/admin",
   
  },
  {
    path: "/Appointments",
    name: "Appointment",
    icon: "ni ni-calendar-grid-58",
    component: <Tables />,
    layout: "/admin",
  },
  {
    path: "/Prescription",
    name: "Prescription",
    icon: "ni ni-single-copy-04",
    component: <Tables />,
    layout: "/admin",
  },
  {
    path: "/Payment",
    name: "Payment",
    icon: "ni ni-money-coins",
    component: <Tables/>,
    layout: "/auth",
  },
  {
    path: "/login",
    name: "",
    icon: "",
    component: <Login/>,
    layout: "/auth",
  },
 
];
export default routes;
