import ProductCard from 'components/ProductCard';
import { Product } from 'types/product';
import Pagination from 'components/Pagination';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { SpringPage } from 'types/vendor/spring';
import { AxiosParams } from 'types/vendor/axios';
import { BASE_URL } from 'util/requests';
import axios from 'axios';

import './styles.css';

const Catalog = () => {

  const [page, setPage] = useState<SpringPage<Product>>();

  useEffect(() => {
    const params: AxiosParams = {
      method: 'GET',
      url: `${BASE_URL}/products`,
      params: {
        page: 0,
        size: 12
      },
    }

    axios(params)
      .then(response => {
        setPage(response.data);
        console.log(page);
      });
  }, []);

  return (
    <div className="container my-4 catalog-container">

      <div className="row catalog-title-container">
        <h1>Catálogo de produtos</h1>
      </div>

      <div className="row">
        {page?.content.map((product) => (

          <div className="col-sm-6 col-lg-4 col-xl-3" key={product.id}>
            <Link to="/products/1">
              <ProductCard product={product} />
            </Link>
          </div>
        ))}
      </div>

      <div className="row">
        <Pagination />
      </div>
    </div>
  );
};

export default Catalog;
