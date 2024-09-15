import './News.css'

const NewsList = ({ articles }) => {

    console.log(articles)



    return (

       

            <div className="container">
                <div className="row">

                    {


                        articles.map((article) => (

                            <div className="col-4">

                                <div className="car card mb-3">
                                    <img className='img' src={article.image} alt={article.title} />
                                    <div>
                                        <h2>{article.title}</h2>
                                        <p>{article.description}</p>
                                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                                            Read more
                                        </a>
                                    </div>
                                </div>

                            </div>
                        ))
                    }

                </div>
            </div>

       
    )
}

export default NewsList