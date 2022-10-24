/*
 问题：实现一个简单的模板渲染

给定一个模板和一个对象，利用对象中的数据渲染模板，并返回最终结果。

例如：

```javascript
let template = '你好，我们公司是{{company}}，我们属于{{group.name}}业务线，我们在招聘各种方向的人才，包括{{group.jobs[0]}}、{{group["jobs"][1]}}等。'

let obj = {
	group: {
		name: “阿里云”,
		jobs: ["前端", "后端", "产品"]
	},
	company: '阿里巴巴'
}

function render(template, obj){
	// 代码实现
}
// 最终返回结果为 你好，我们公司是阿里巴巴，我们属于阿里云业务线，我们在招聘各种方向的人才，包括前端、后端等。
```
*/


// // 方法一：react
// let template = '你好，我们公司是{{company}}，我们属于{{group.name}}业务线，我们在招聘各种方向的人才，包括{{group.jobs[0]}}、{{group["jobs"][1]}}等。'

// let obj = {
// 	group: {
// 		name: "阿里云",
// 		jobs: ["前端", "后端", "产品"]
// 	},
// 	company: '阿里巴巴'
// }
// import React, { useEffect, useState } from 'react';

// const Test = () => {
// 	const [tem, setTem] = useState(template);

// 	useEffect(() => {
// 		render(template, obj);
// 	}, [])

// 	function render(template, obj) {
// 		const result = template.replace(/\{\{.*?\}\}/g, ($1,$2)=>{
// 			return getValue(obj, $1.replace(/\{|\}/g, ''))
// 		});
// 		setTem(result);
// 	}

// 	const _getValue = (obj, key) => {
// 		console.log(obj, key, 44)
// 		const typeArr = key.split('.');
// 		if(typeArr.length === 1){
// 			return obj[key];
// 		}
// 		const firstKey = typeArr.shift();
// 		return _getValue(obj[firstKey], typeArr.join('.'));
// 	}

// 	function getValue (obj, key) {
// 		const dotKey = key.replace(/\[.*?\]/g, ($1,$2)=> {  return $1.replace(/^\[/g,'.').replace(/\]|\"|\'/g, '')  });
// 		return _getValue(obj, dotKey);
// 	}
// 	// const v = getValue(obj, 'a.b.c.d');
// 	// const v = getValue(obj, `a["b"]['c'].d`);
// 	// const v = getValue(obj, `a["b"]['c'].d`);
// 	// console.log({v})

// 	return (
// 		<div>{tem}</div>
// 	)
// }
// export default Test;




// // 方法二： 用node打印
// let template = '你好，我们公司是{{company}}，我们属于{{group.name}}业务线，我们在招聘各种方向的人才，包括{{group.jobs[0]}}、{{group["jobs"][1]}}等。'

// let obj = {
// 	group: {
// 		name: "阿里云",
// 		jobs: ["前端", "后端", "产品"]
// 	},
// 	a: { b: { c: { d: 2 } } },
// 	company: '阿里巴巴'
// }

// function render(template, obj) {
// 	return template.replace(/\{\{.*?\}\}/g, ($1,$2)=>{
// 		return getValue(obj, $1.replace(/\{|\}/g, ''))
// 	});
// }

// const _getValue = (obj, key) => {
// 	console.log(obj, key, 44)
// 	const typeArr = key.split('.');
// 	if(typeArr.length === 1){
// 		return obj[key];
// 	}
// 	const firstKey = typeArr.shift();
// 	return _getValue(obj[firstKey], typeArr.join('.'));
// }

// function getValue (obj, key) {
// 	const dotKey = key.replace(/\[.*?\]/g, ($1,$2)=> {  return $1.replace(/^\[/g,'.').replace(/\]|\"|\'/g, '')  });
// 	return _getValue(obj, dotKey);
// }

// // console.log(render(template, obj))
// // console.log(getValue(obj, `a["b"]['c'].d`))
// console.log(getValue(obj, `group["jobs"][1]`))
// console.log(1)

// // 用node来打印
// // node src/test/template.js



let template = '你好，我们公司是{{company}}，我们属于{{group.name}}业务线，我们在招聘各种方向的人才，包括{{group.jobs[0]}}、{{group["jobs"][1]}}等。'

let obj = {
	group: {
		name: "阿里云",
		jobs: ["前端", "后端", "产品"]
	},
	a: { b: { c: { d: 2 } } },
	company: '阿里巴巴'
}

function getResult (template, obj) {
	return template.replace(/\{\{.*?\}\}/g, ($1, $2) => {
		const newKey = $1.replace(/\{|\}/g, '');
		return getValue (obj, newKey)
	})
}
function getValue (obj, key) {
	const dotKey = key.replace(/\[/g, '.').replace(/\]|'|"/g, '');
	return _getValue(obj, dotKey);
}
function _getValue(obj, key) {
	// console.log(obj, key, 55)
	const keyArr = key.split('.');
	if (keyArr.length === 1) {
		return obj[key]
	}
	const firstKey = keyArr.shift();
	return _getValue(obj[firstKey], keyArr.join('.'));
}
// console.log(getResult(template, obj))