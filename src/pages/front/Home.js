import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { useEffect, useState } from 'react';

function Home() {
  // const [products, setProducts] = useState([]);

  // const getProducts = async () => {
  //   const productRes = await axios.get(
  //     `/v2/api/${process.env.REACT_APP_API_PATH}/products/?category=`,
  //   );
  //   console.log(productRes);
  //   setProducts(productRes.data.products);

  // };

  // useEffect(() => {
  //   getProducts();
  // }, []);

  return (
    <>

      <div className="bg-light mt-7">
        <div className="container">
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row justify-content-center py-7">
                  <div className="col-md-9 text-center">
                    <h3>超強理念</h3>
                    <p className="my-4 lh-lg">來自法國的三星主廚說：生活必須是一件愉快的事情，這一切應該從你的早餐開始。<br></br>超強早餐SuperBreakfast持著「買得起也要吃的飽」的經營理念，除了要給消費者一個"專屬於您"的感覺外，也要在消費者的心中建立起"元氣的早餐是專屬為我現做的"。<br></br>於是，我們堅持，是必須從拒絕開始，捨去過度奢華的裝潢，回歸最原本的初衷，保留原粹食材的真實性，希望從你第一口咬的那一刻起，就會知道擁有真實的感受。<br></br>歷經的這些日子，超強早餐店也逐漸的烙印在消費者心中，並陪伴著無數的早晨，努力打造一份活力早餐，成就一個事業。</p>
                    <p><small>—超強早餐店—</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container my-7">
        <div className="row">
          <div className="col-md-6 ">
            <img src="https://images.unsplash.com/photo-1620148639493-5a7cc139813d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" className="img-fluid rounded-3"/>
          </div>
          <div className="col-md-4 m-auto text-center">
            <h4 className="mb-4 ">友善毛孩</h4>
            <p className="">除了提供特色餐點外，還提供友善寵物及小孩的環境。</p>
          </div>
        </div>
        <div className="row flex-row-reverse justify-content-between mt-4">
          <div className="col-md-6">
            <img src="https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" className="img-fluid rounded-3"/>
          </div>
          <div className="col-md-4 m-auto text-center">
            <h4 className="mb-4">新鮮食材</h4>
            <p className="">保留原粹食材的真實性，一直是本店的理念之一。因此，提供最新鮮的食材給顧客是我們的堅持！</p>
          </div>
        </div>
      </div>
      </div>      
        {/* <div className="row mt-4">
        {products?.map((product) => {
            return (
              <div className='col-md-4 mt-md-2' key={product.id}>
                <div className='card border-0 mb-4 position-relative '>
                  <img
                    src={product.imageUrl}
                    className='card-img-top rounded-3 object-cover'
                    alt='...'
                    height={300}
                  />
                  <div className='card-body p-0'>
                    <h4 className='mb-0 mt-2'>{product.title}</h4>
                    <Link
                      to={`/product/${product.id}`}
                      className='btn btn-outline-dark rounded-0 text-nowrap mt-2'
                    >
                      查看料理
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}                  
        </div> */}
          <div className='row mt-1'>
     
            <h4 className="text-center ">餐點分類</h4>

          <div className='col-md-4 mt-md-2' >
              <div className='card border-0 mb-4 position-relative   '>
                <div className='card-body p-0'>
                  <Link to='Products' className='btn  rounded-0 text-nowrap mt-2'>
                    <img
                    src='https://plus.unsplash.com/premium_photo-1688157059578-8116a6534f8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
                    className='card-img-top rounded-3 object-cover'
                    alt='...'
                    height={300}
                    />  
                    <h4 className='mb-0 mt-2'>飲料</h4>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-md-4 mt-md-2' >
              <div className='card border-0 mb-4  position-relative  '>
                <div className='card-body p-0'>
                  <Link to='Products' className='btn  rounded-0 text-nowrap mt-2'>
                    <img
                    src='https://images.unsplash.com/photo-1534938665420-4193effeacc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fGZyaWVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
                    className='card-img-top rounded-3 object-cover'
                    alt='...'
                    height={300}
                    />  
                    <h4 className='mb-0 mt-2'>炸物</h4>
                  </Link>
                </div>
              </div>
            </div> 
            <div className='col-md-4 mt-md-2' >
              <div className='card border-0 mb-4  position-relative '>
                <div className='card-body p-0'>
                  <Link to='Products' className='btn  rounded-0 text-nowrap mt-2'>
                    <img
                    src='https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGFtYnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
                    className='card-img-top rounded-3 object-cover'
                    alt='...'
                    height={300}
                    />  
                    <h4 className='mb-0 mt-2'>漢堡</h4>
                  </Link>
                </div>
              </div>
            </div> 
            <div className='col-md-4 mt-md-2' >
              <div className='card border-0 mb-4  position-relative '>
                <div className='card-body p-0'>
                  <Link to='Products' className='btn  rounded-0 text-nowrap mt-2'>
                    <img
                    src='https://images.unsplash.com/photo-1584776296944-ab6fb57b0bdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dG9hc3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
                    className='card-img-top rounded-3 object-cover'
                    alt='...'
                    height={300}
                    />  
                    <h4 className='mb-0 mt-2'>吐司</h4>
                  </Link>
                </div>
              </div>
            </div> 
            <div className='col-md-4 mt-md-2' >
              <div className='card border-0 mb-4  position-relative '>
                <div className='card-body p-0'>
                  <Link to='Products' className='btn  rounded-0 text-nowrap mt-2'>
                    <img
                    src='https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
                    className='card-img-top rounded-3 object-cover'
                    alt='...'
                    height={300}
                    />  
                    <h4 className='mb-0 mt-2'>麵食</h4>
                  </Link>
                </div>
              </div>
            </div> 
            <div className='col-md-4 mt-md-2' >
              <div className='card border-0 mb-4 position-relative '>
                <div className='card-body p-0'>
                  <Link to='Products' className='btn  rounded-0 text-nowrap mt-2'>
                    <img
                    src='https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
                    className='card-img-top rounded-3 object-cover'
                    alt='...'
                    height={300}
                    />  
                    <h4 className='mb-0 mt-2'>沙拉</h4>
                  </Link>
                </div>
              </div>
            </div>          
          </div>                
      


    </>
  );
}

export default Home;
