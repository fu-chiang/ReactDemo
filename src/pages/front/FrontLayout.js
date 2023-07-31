import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

function FrontLayout() {
  const [cartData, setCartData] = useState({});

  const getCart = async () => {
    try {
      const res = await axios.get(
        `/v2/api/${process.env.REACT_APP_API_PATH}/cart`,
      );
      console.log('購物車內容:', res);
      setCartData(res.data.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCart();
  }, [])

  return (
    <>
      <Navbar cartData={cartData}/>
      <Outlet context={{getCart,cartData}}></Outlet>
      <div className="bg-primary pt-6 pb-1">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between text-white fw-bold fs-3 mb-md-7 mb-3">
            <a className="text-white fs-3  fw-bold h4" href="./index.html">超強早餐店</a>
            {/* <ul className="d-flex list-unstyled mb-0 h4">
            <li><a href="#" className="text-white mx-3"><i className="fab fa-facebook"></i></a></li>
            <li><a href="#" className="text-white mx-3"><i className="fab fa-instagram"></i></a></li>
            <li><a href="#" className="text-white ms-3"><i className="fab fa-line"></i></a></li>
            </ul> */}          
            <div className="mb-md-0 mb-1">
            <p className="mb-0">fuchiang.work@gmail.com</p>
          </div>
          <p className="mb-0">© 2023 LOGO All Rights Reserved.</p>
          </div>
        {/* <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end align-items-start text-white">

        </div> */}
        </div>
      </div>
    </>
  );
}

export default FrontLayout;