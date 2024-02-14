import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import HomePelanggan from "./Pages/Home/HomePelanggan";
import Login from "./Pages/LoginRegister/Login/Login";
import Register from "./Pages/LoginRegister/Register/Register";
import DestinationTravel from "./Pages/Destination/DestinationTravel";
import DetailDestination from "./Pages/Destination/DetailDestination";
import BookingOrder from "./Pages/Booking Pesanan/BookingOrder";
import Activity from "./Pages/Activity/Activity";
import DetailActivity from "./Pages/Activity/DetailActivity";
import TambahKendaraan from "./Pages/Kendaraan/TambahKendaraan";
import DetailInvoicePenyewa from "./Pages/Activity/DetailInvoicePenyewa";

function App() {
  const token = sessionStorage.getItem("token");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePelanggan />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />

        {token ? (
          <>
            <Route path="/destination" element={<DestinationTravel />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/tambah-kendaraan" element={<TambahKendaraan />} />
            <Route path="/activity/:id_sewa" element={<DetailActivity />} />
            <Route
              path="/history-kendaraan/:id_kendaraan"
              element={<DetailInvoicePenyewa />}
            />
            <Route
              path="/destination/:id_tujuan"
              element={<DetailDestination />}
            />
            <Route
              path="/Booking-order/:id_tujuan"
              element={<BookingOrder />}
            />
          </>
        ) : (
          <>
            <Route path="/destination" element={<Navigate to="/" />} />
            <Route path="/activity" element={<Navigate to="/" />} />
            <Route path="/tambah-kendaraan" element={<Navigate to="/" />} />
            <Route path="/activity/:id_sewa" element={<Navigate to="/" />} />
            <Route
              path="/destination/:id_tujuan"
              element={<Navigate to="/" />}
            />
            <Route
              path="/Booking-order/:id_tujuan"
              element={<Navigate to="/" />}
            />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
