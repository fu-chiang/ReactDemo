import { NavLink } from "react-router-dom";

function Navbar({ cartData }) {
  return (
    <div className="position-relative">
      <div className="position-absolute"  style={{top:'0',bottom:'0',left:'0',right:'0',backgroundImage:'url(https://images.unsplash.com/photo-1516953951091-5051d8bebb74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80)',
      backgroundPosition:' center center',opacity: '1',}}>
      </div>
      <div className="container d-flex flex-column" style={{minHeight: '100vh',}}>
        <nav className="navbar navbar-expand-lg  navbar-light ">
          <NavLink className="navbar-brand text-light " to='/'>超強早餐店</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav ">
              <NavLink className='nav-item nav-link me-4 active text-light navbar-link' style={({isActive})=>{
                return  {
                  fontWeight:isActive?'bold':'',
                  fontSize:isActive?'25px':''
                };}} to='/'><span className="sr-only">首頁</span></NavLink>
              <NavLink className='nav-item nav-link me-4 active text-light  navbar-link' style={({isActive})=>{
                return  {
                  fontWeight:isActive?'bold':'',
                  fontSize:isActive?'25px':''
                };}} to='/products'>超強餐點</NavLink>
              <NavLink className='nav-item nav-link me-4 active text-light navbar-link' style={({isActive})=>{
                return  {
                  fontWeight:isActive?'bold':'',
                  fontSize:isActive?'25px':''
                };}} to='/login'>登入後台</NavLink>
              <NavLink className="nav-item nav-link me-4 active text-light navbar-link" style={({isActive})=>{
                return  {
                  fontWeight:isActive?'bold':'',
                  fontSize:isActive?'25px':''
                };}} to='/cart'>
                <i className="bi bi-cart-plus position-relative">
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartData?.carts?.length}
                </span>
                </i>
              </NavLink>
            </div>
          </div>
        </nav>
        {/* <div className="row justify-content-center my-auto">
          <div className="col-md-4 text-center " >
            <h2>超強早餐店</h2>
            <p className="text-body mb-0">為您提供品質最優餐點</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Navbar;
