
import React, {createElement} from 'react';
import ReactDOM from 'react-dom';
// import '@alifd/theme-2/dist/next.min.css';
// import '@alifd/next/dist/next.css';
// import '@alifd/next/dist/next.min.css';
import './index.scss';
import App from './app';

{/* <div>
    <a>111</a>
    
</div> */}

// createElement(elNAME, props,children)

// ReactDOM.render(createElement('div', {}, 
//     createElement('a', {href: '//xxx.com'}, '111')), document.body);



ReactDOM.render(<App/>, document.getElementById('root'));

// console.log(React);