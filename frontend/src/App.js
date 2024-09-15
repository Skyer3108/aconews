
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios'
import SearchBar from './Components/SearchBar';
import Filter from './Components/Filter';
import NewsList from './Components/NewsList';

function App() {


  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({});

 

  const fetchNews = async () => {


    try {
      console.log('hii')
      const response = await axios.get(`https://aconews-backend-euip.onrender.com`, {
        params: {
          q: searchTerm,
          category: filters.category,
          country: filters.country,
          language: filters.language,
        },
      });

      if(response.errors){
        console.log('Error')
      }


      console.log(response.data.data.articles, 'ff')
      setArticles(response.data.data.articles);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  }

  useEffect(() => {
    fetchNews();
  }, [searchTerm, filters]);




  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilter = (filterOptions) => {
    setFilters(filterOptions);
  };

  return (
    <div className="App">

      <div className='nav'>

        <SearchBar onSearch={handleSearch} />

        <Filter onFilter={handleFilter} />

      </div>


      <NewsList articles={articles} />


    </div>
  );
}

export default App;
