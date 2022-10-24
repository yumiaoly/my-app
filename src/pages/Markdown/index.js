import React, { useState } from "react";
import './index.scss';
import { Input } from '@alifd/next';
import SingleLines from './singleLines';
import MultiLines from './multiLines';

const Markdown = () => {
  const [result, setResult] = useState([]);

  /**
   * 
   count  = 0;
  ```  {startIndex: 34,  count: 1, type: 'start'},
   
  ```  startIndex: 36,  count: 2, type: 'end'
  ### xxx
  ### xx
  
  ```
  ```
  
  ###
  
  
   */

  const onChangeTextArea = (value, e) => {
    // console.log(value, 'value');
    const valArr = value.split(/\n/);
    console.log({ valArr })
    const res = [];
    const newLineObjs = [];
    let count = 0;
    valArr && valArr.forEach((item, ii) => {
      // if()
      // 匹配#
      // const match1 = item.match(/#+\s/);
      // console.log({match1})
      // res.push({
      //   index: ii,
      //   value: item,
      //   component: match1 ? <SingleLines val={item} /> : generalTemplate(item)
      // })

      // 匹配 - 
      // type = 


      // 匹配多行
      const match2 = item.match(/^`{3}/);
      if (match2) {
        count++;
        const type = count % 2 === 0 ? 'end' : 'start';
        newLineObjs.push({ value: item, index: ii, count, type });
      } else {
        newLineObjs.push({ value: item, index: ii });
      }
    });
    console.log({ newLineObjs })
    let multiLines;
    let idx = null;
    let isEnd = true; // 跳出```块

    newLineObjs.forEach((lineObj, index) => {
      if (lineObj.type === 'start') {
        multiLines = [];
        idx = index;
        isEnd = false;
      }
      if (index >= idx && isEnd === false) {
        multiLines.push(lineObj.value);
      }
      if (lineObj.type === 'end') {
        res.push({ 
          value: multiLines, 
          startIndex: idx, 
          endIndex: index,
          component: <MultiLines valueArr={multiLines} />
        })
        multiLines = [];
        isEnd = true;
      }
      if (isEnd && lineObj.type !== 'end') {
        res.push({ 
          value: lineObj.value, 
          startIndex: index,
          component: <SingleLines val={lineObj.value} />
        })
      }
    });

    setResult(res);
    console.log({ res })
  }


  return (
    <div className="wrapper">
      <div className="module">
        <Input.TextArea
          placeholder="TextArea"
          aria-label="TextArea"
          style={{ width: '100%', height: '100%' }}
          onChange={onChangeTextArea}
          rows={20}
        />
      </div>
      <div className="module module-con">
        {
          result.length > 0 && result.map((item, ii) => {
            return <div key={ii}>{item.component}</div>
          })
        }
      </div>
    </div>
  )
}

export default Markdown;