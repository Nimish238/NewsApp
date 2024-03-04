import React from 'react'

export default function About() {
  return (
    <div style={{ textAlign: 'left', lineHeight: '2' }}>
        
        <br></br><h2>News Application Overview:</h2>

           <p style={{ fontSize: '18px' }}>
            The News Application is a web-based platform designed to provide users with real-time news updates. The application leverages the News API from news.org, offering a default view of news related to India upon initial load. It boasts a user-friendly interface with key features such as search functionality, navigation between pages, and an aesthetically pleasing design.<br></br>

            <b>Key Features:</b><br></br>

            <b>1.Default News Display:</b>

            The application presents users with default news articles related to India upon the initial launch.<br></br>
            
            <b>2.Search Functionality:</b>

            Users can dynamically search for specific news articles by entering their queries in the search bar. The application updates the displayed news in real-time based on the user's search input.<br></br>
            
            <b>3.Pagination:</b>

            The app includes convenient next and previous buttons for seamless navigation between different pages of news articles. These buttons intelligently disable when the user reaches the first or last page.<br></br>
            
            <b>4.Rich Article Information:</b>

            Each news article is accompanied by essential details, including an image, title, author name, source, description, published date, and a URL link to the full news article.<br></br>
            
            <b>5.Source Badge:</b>

            For added credibility, the application displays a small badge indicating the source of each news article.<br></br>
            
            <b>6.Loading Indicators:</b>

            The application ensures a smooth user experience with loading indicators. A spinner GIF is presented during data retrieval, providing visual feedback to users. Additionally, a top-loading progress bar indicates the progress while fetching data from the API.<br></br> </p>
        
    </div>
  )
}

