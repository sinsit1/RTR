import React from "react";

class NewsCard extends React.Component {


  
    render() {
      
      const {article}= this.props;
        return (
            <div>
              
              <h3>{article.title}</h3>
              <p>{article.body}</p>
  
            </div>
      
        );
    }
  }
  
  export default NewsCard;