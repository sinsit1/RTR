import React from "react";
import NewsCard from './NewsCard';
import {Link} from 'react-router-dom';

class NewsList extends React.Component {
    render() {
        console.log('props',this.props.articles);
        const  {articles}=this.props;
        console.log('alex',articles);

        return (
            <ul className="news-list">
            
              {articles.map((article,index)=> {
                        return (
                          <li
                            key={article.id}
                            className="new"
                          >
                          <NewsCard article={article} />
                            <div><Link to={`/articulos/${article.id}`}>Seguir leyendo...</Link> </div>
                          </li>
                        );
                      })}
            </ul>
        );

        
    }//fin render
}//fin class

export default NewsList;