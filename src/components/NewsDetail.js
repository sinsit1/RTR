
import React from "react";
import {Link} from 'react-router-dom';
import articleImage from '../assets/image-contenido.jpg';
import CompareAside from "./CompareAside";

class NewsDetail extends React.Component {

  isUndefined(){
    const {newsRoute}= this.props;

    if (newsRoute===undefined){
      return(<Link className="link" to="/" >Volver al listado</Link>)
    }else {
      console.log('Detail', this.props);
      return (
        <div>
        <div  className= "new-detail">
        <div className="new-detail-container">
        <h1>{newsRoute.title}</h1>
        <img src={articleImage} alt="article"></img>
        <p>{newsRoute.body}</p>
        <Link className="text" to="/" >Volver al listado</Link>
        </div>
        <CompareAside />
        </div>
        </div>
      );
    }
  }
  render() {
  return this.isUndefined();
  }
}
export default NewsDetail;