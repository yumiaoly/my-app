import React from "react";

const SingleLines = (props) => {
  const { val } = props;
  const match1 = val.match(/#+\s/);

  const generalTemplate = (val) => {
    return <div className="general">{val}</div>
  }

  const titleTemplate = (val) => {
    const matchTit = val.match(/#/g) || [];
    // console.log({ matchTit })
    let content;
    switch (matchTit.length) {
      case 1:
        content = <h1>{val.replace(/#+\s/, '')}</h1>
        break;
      case 2:
        content = <h2>{val.replace(/#+\s/, '')}</h2>
        break;
      default:
        content = <h3>{val.replace(/#+\s/, '')}</h3>
    }

    return content
  }

  return (
    match1 ? titleTemplate(val) : generalTemplate(val)
  )

}

export default SingleLines;