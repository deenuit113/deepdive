function fetchData() {
    return new Promise((resolve,reject)=> {
        const success = true;
        if(success){
            resolve('Data fetched successfully');
        } else {
            reject('Failed to fetch data');
        }
    })
}

fetchData()
    .then(function(result){
        console.log(result);
    })
    .catch(function(error){
        console.error(error);        
    })
    .finally(()=>{
        console.log('모든 작업 끝');
    })

fetch('http://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json=> console.log(json))
    .then(() => fetch('http://jsonplaceholder.typicode.com/todos/2'))
    .then(response1 => response1.json())
    .then(json => console.log(json))
    .catch(error => console.log(error))


// Promise.all()

// const promise1 = Promise.resolve(3);
// const promise2 = Promise.reject('실패');
// const promise3 = new Promise((resolve,reject)=> {
//     setTimeout(resolve, 3000, 'foo');
// })

// Promise.all([promise1, promise2, promise3])
//     .then(values => console.log(values));

// Promise.race()

const promise1 = new Promise((resolve,reject)=> {
    setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve,reject)=> {
    setTimeout(resolve, 100, 'two');
});

const promise3 = new Promise((resolve,reject)=> {
    setTimeout(resolve, 300, 'three');
});

Promise.race([promise1, promise2, promise3])
    .then((value) => {console.log(value)});

async function makeRequests() {
    try {
        const response1 =  await fetch('http://jsonplaceholder.typicode.com/todos/1')
        const json1 = await response1.json();
        console.log(json1);

        const response2 =  await fetch('http://jsonplaceholder.typicode.com/todos/2')
        const json2 = await response2.json();
        console.log(json2);

    } catch (error) {
        console.log(error);
    }

    finally {
        console.log('done');
    }
}