import React from "react";
import './index.scss';

const MultiLines = (props) => {
  const { valueArr } = props;
  console.log({valueArr})

  const dotTemplate = (data) => {
    data.shift();
    data.pop();
    return data && data.map((item, ii) => {
      return <div>{item}</div>
    })
  }

  return (
    <div className="multi-box">
      {dotTemplate(valueArr)}
    </div>
  )
}

export default MultiLines;