import { useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import "./Newscards.css";
import { GiBasket } from "react-icons/gi";

const Newscards = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setitemPerPage] = useState(4);
  const { totalProducts } = useLoaderData();
  console.log(totalProducts);

  const totalPages = Math.ceil(totalProducts / itemsPerPage);
  console.log(totalPages);

  const pageNumbers = [...Array(totalPages).keys()];

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:5000/products?page=${currentPage}&limit=${itemsPerPage}`
      );

      const data = await response.json();
      setProducts(data);
    }
    fetchData();
  }, [currentPage, itemsPerPage]);

  const options = [4, 8, 12];
  function handleSelectChange(event) {
    setitemPerPage(parseInt(event.target.value));
    setCurrentPage(0);
  }

  const [newSinger, setNewSinger] = useState([]);
  const handleCart = (product) => {
    const newCArt = [...newSinger, product];
    setNewSinger(newCArt);
  };
  // const { newSinger } = props;
  const total = newSinger.reduce(
    (previous, currenet) => previous + currenet.Net_Worth,
    0
  );

  return (
    <div className="">
      <div className="flex-container gap-12 max-w-[1600px] justify-center m-auto">
        <div className="w-full lg:w-[80%]">
          <div className="flex-card  py-12 ">
            {products.map((product) => {
              return (
                <>
                  <div className="card py-8 justify-center m-auto px-8 banner-text">
                    <div className="content">
                      <div className="">
                        <img className="round" src={product.img} alt="" />
                      </div>
                      <p className="text-2xl "> {product.title}</p>
                      <p className="para">{product.text}</p>
                      {/* <p className="para">{product.Net_Worth}</p> */}
                      <button
                        onClick={() => handleCart(product)}
                        className="btncard  "
                      >
                   <span className="font-medium flex gap-2"><GiBasket size={20} />    Add To Card</span> 
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          {/* Pagination */}
          <div className="pagination flex justify max-w-[400px] m-auto">
            {/* Important pagenation */}
            {/* <p>
              current page:{currentPage} and items per page:{itemsPerPage}
            </p> */}
            {pageNumbers.map((number) => (
              <button
                key={number}
                className={currentPage === number ? "selected" : ""}
                onClick={() => setCurrentPage(number)}
              >
                <div className=" icn banner-text">
                  <span className=""> {number + 1}</span>
                </div>
              </button>
            ))}

            <select
              className="selectors shadow-lg font-bold banner-text"
              value={itemsPerPage}
              onChange={handleSelectChange}
            >
              {options.map((option) => (
                <option className="px-4" key={option} value={option}>
                  Please choose {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="pt-24 bg-gray-100 banner-text px-8 w-full lg:w-[20%] ">
          <div className="text">
            <h2>Order Summary</h2>
            <h4>Total: {newSinger.length}</h4>
            <NavLink
              as={NavLink}
              to="/dashboard"
              className=" banner-text text-sm  textsignup"
            >
              <button className="btnsign lg:w-[220px] mt-5 sm:w-full md:w-full  text-center  text-grey-950 shadow-lg">
                Order Now
                <span></span>
              </button>
            </NavLink>
            {/* <h4>Net Worth: {total} Millon</h4> */}
            <ul>
              {newSinger.map((product) => (
                <li key={product.id}>{product.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newscards;
