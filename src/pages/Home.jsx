import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { getAllCategories } from '../api';

import { Search } from '../components/Search/Search';
import { Loader } from '../layout/Loader/Loader';
import { CategoryList } from '../components/CategoryList/CategoryList';

export function Home() {
  const { pathname, search } = useLocation();
  let navigate = useNavigate();
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);

  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );
    
    navigate({
      pathname,
      search: `?search=${str}`,
    });
  };
  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
      setFilteredCatalog(search ? 
        data.categories.filter((item) =>
          item.strCategory
            .toLowerCase()
            .includes(search.split('=')[1].toLowerCase())
        ) : data.categories
      );
    });
  }, [search]);

  return (
    <>
      {<Search cb={handleSearch} />}
      {!catalog.length ? (
        <Loader />
      ) : (
        <CategoryList catalog={filteredCatalog} />
      )}
    </>
  );
}
