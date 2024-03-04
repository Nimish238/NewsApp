import React,{useState, useEffect} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import TopLoadingBar from 'react-top-loading-bar';

const NewsComponent = ({searchQuery}) => {
const [newsData, setNewsData] = useState(null);
const [loading,setLoading] = useState(true);
const [currentPage,setNextPage]= useState(1);
const [topLoading, setTopLoading] = useState(0);

const pageSize=6;
const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

useEffect(() => {
    const fetchData = async () => {
    try {
        setTopLoading(10);
        setLoading(true);
        //about everything

        const apiUrl = `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=263be47d9d224f76889c711b79abfd09`;
        const response = await fetch(apiUrl);
        const result = await response.json();
        setNewsData(result.articles);
        // set the title to search query
        document.title =`NewsApp - ${capitalizeFirstLetter(searchQuery)}`;
        } catch (error) {
        console.error('Error fetching data:', error);
        }finally{
            setTopLoading(100);
            setLoading(false);
        }
    };
    fetchData();
    }, [currentPage,pageSize,searchQuery]);
    
   
    const handleNextPage = () =>{
       
        const isLastPage = endIndex >= (newsData ? newsData.length : 0);
        if(!isLastPage){
            setNextPage(currentPage+1);
        }
        
    }

    const handlePrevPage = () =>{
        if(currentPage>=1){
            setNextPage(currentPage-1);
        }        
    }

    const startIndex = (currentPage-1)*pageSize;
    const endIndex = startIndex+pageSize;
    
    const displayedNews= newsData?(newsData.slice(startIndex,endIndex)):[];
    return (
        
        <div className="container my-3 mx-3">
            <TopLoadingBar
                progress={topLoading}
                color="#f11946"
                height={3}
            />
            <h2>NewsApp - {capitalizeFirstLetter(searchQuery)} News</h2>
            {/*  loading is used for gif (loading && means if its true spinner will show) */}
             {loading && <Spinner/>} 
            {/* ternary operator */}
            {displayedNews.length>0 ? (
                
                <div className="row">
                    {!loading && displayedNews.map((article,index) => (
                        <div className="col-md-4" key={index}>                           
                                <NewsItem imageUrl={article.urlToImage} title={article.title} description={article.description} href={article.url} author={article.author} date={article.publishedAt} source={article.source.name}>
                                </NewsItem>                           
                        </div>
                    ))}
                </div>
            ) : (
            <p>loading..</p>
            )}

            
            <div className="d-flex justify-content-between" >
            <button disabled={currentPage===1} type="button" className="btn btn-dark" onClick={handlePrevPage}>Previous</button>
            <button type="button" className="btn btn-dark" onClick={handleNextPage} disabled ={endIndex>= (newsData?newsData.length:0)}>Next</button>
            </div>
        </div>           
        );
        };
          
 export default NewsComponent;

