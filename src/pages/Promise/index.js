/**
 * 
 * function fetch(opts, cb){
     cb && cb(data)
 * }
 * 
 * fetch({url:'a'}, ()=>{
 *  fetch({url:'b'}, ()=>{
 *      fetch({url:'c'}, ()=>{
 * 
 *      })
 *  })
 * })
 * function fetchPromise(opts, cb){
 * *  return new Promise((resolve, reject)=>{
 *      // 具体干一件事情
 *         resolve({xx})
 * })
 * }
 * 
 * fetchPromise(a)
 * .then((data)=>{  return fetch(b) })
 * .then(fetch(c))
 * .then(fetch(c))
 * .then(fetch(c))
 * 
 * 
 * 
 * 
 * const fn = function (resolve, reject) {
 *  
 * }
 * const p1 = new Promise(fn); // 
 * p1.then();
 * 
 * 
 * 实例方法
 * new Promise()
 * .then()
 * .catch()
 * .finally()
 * 
 * 静态方法
 * Promise.resolve
 * Promise.reject
 * Promise.all
 * 
 * asnc await  es7的
 * 
 */

/**
 * 如何实现链式调用
 * 
// class Mth extends Component{
//     constructor(initValue){
//         this.value = initValue;
//     }
//     add = (n)=>{
//         this.setState();
//         this.toValue();
//         return this;
//     }

//     minus = ()=>{
//         return this;
//     }
//     toValue = ()=>{

//     }

//     static version = '1.0.1';
// }

// const math = new Mth(0);
// math.add();
// Mth.version
 *
 * const math2 = new Mth(0);
 * const a = "123"; // 隐式构建
 * const a = new String("123"); // 显式构建
 * 
 * const b = [2];
 * const b = new Array(2)
 * 
 *  const math = new Mth(0);
 * math.add(1).minus(2).add(1).toValue() = 0;
 * 
 */



// class Promise {
//     then = ()=>{

//     }
//     // all
// }

// .all([])

/**
 * 
 * 
 * 
const fetchData = ()=> {
    return new Promise((resolve, reject)=>{
        $.axios({
                onSuccess: (data)=> {
                    resolve(data);
                },
                onError: (err)=>{
                    reject(err)
                }
            });
    });
}

const data = await fetchData();


fetchData()
.then(data=>{
    return fetchCities({province: data[0]})
})
.catch()
.then(cities=>{
     return fetchAreas({city: cities[0]})
})


try{
const privinces = await fetchData();
}catch(err=>{

})
const cities = await fetchCities({province: privinces[0]})
const areas = await fetchAreas(cities[]);


Promise.all([fetchData({}), fetchData({})]).then((res1, res2)=>{

})

const delay = () => {

}


const delay = (time) => {
    return new Promise((resolve, reject) => {
        try{
            setTimeout(() => {
                resolve()
            }, time)
        }catch(err){
            reject(err);
        }
    })
}
delay(1000).then(()=>{
    console.log(123)
}).catch(err=>{

})

 * 
 */ 




/********************************************************** *******************************************************************/



// ES6 class 类的创建 
// class Component {
//     setState(){

//     }
//     componentDidMount(){

//     }
//     render(){

//     }
// }


//  ES5构建一个类, 大写开头
// function Component(name){
    //  this.prototype.constructor
    // this.name = name;  // 定义属性
// }
// 定义 类原型上的方法或属性
// Component.prototype.setState = function() {

// }
// Component.prototype.render = function() {

// }

// es5和es6使用都一样 new 实例化，开辟一块内存，this指向这块内存
// const c1 =  new Component()  // ci === this
// const c2 =  new Component()
// c1.setState();

// const a = '123';
// const b = new String('123');




/************************************************** ******************************************************************************/


/**
 *  ES6: class(类), extends(继承), static(静态)
 *  类： 人
 * class People {
 *   constructor(options){
 *      this.name = options.name;
 *      this.age = options.age;
 *      this.sex = options.sex;
 *  }
 *  say(){
 *      console.log('Hello, im ', this.name)
 *  }
 * }
 * 
 * var yumiao = new People({age:10, name: 'yu miao'});
 * yumiao.say();
 * 
 * var bocai = new People({age:12, name: 'bocai '});
 * bocai.say();
 * 
 * 继承
 * class Man extends People{
 * 
 *      static sex = 'man';     
 * 
 *      constructor(options){
 *           super(options);
 * 
 *           this.hasHuxu = true;
*       }
        xxxx() {

        }
        say() {
            // super.say();
            console.log('Hello, im Mr ', this.name)

        }
 * }
 * 
 * const bocai = new Man({age:12, name: 'bocai '})
 * bocai.say();
 */


/**
 *  ES5 类
 * function People (options) {
 *      this.name = options.name;
 *      this.age = options.age;
 * }
 * People.prototype.say = function () {
 *      console.log('Hello')
 * }
 * // 静态
 * People.sex = 'women';
 * // 实例化
 * const peo = new People({age:12, name: 'bocai '})
 * peo.say()
 * 
 * // 继承 - Man继承People
 * function Man (options) {
 *      People.call(this, options) // 继承
 * }
 * 
 * 
 */





