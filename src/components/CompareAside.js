
import React from "react";
import {Link} from 'react-router-dom';

class CompareAside extends React.Component {


  render() {
  return (
    <div className="compare-aside">
      <h2>Seguro de coche</h2>
      <button>COMPARA</button>
      <div>Seguros de furgonetas</div>
      <div>Seguros por días</div>
    </div>
  );
}
}
export default CompareAside;