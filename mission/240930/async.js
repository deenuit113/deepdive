// callback
function fetchData(callback) {
    let seconds = 0;
    const interval = setInterval(() => {
        seconds++;
        console.log(`${seconds}초 경과`);
    }, 1000);

    setTimeout(() => {
        clearInterval(interval);
        const data = { id: 1, name: "John Doe" };
        callback(data);
    }, 3000);
}

console.log("데이터 요청 시작");
fetchData((result) => {
    console.log("데이터 수신:", result);
});
console.log("요청 완료");

// Promise
function fetchData() {
    return new Promise((resolve, reject) => {
        let seconds = 0;
        const interval = setInterval(() => {
            seconds++;
            console.log(`${seconds}초 경과`);
        }, 1000);

        setTimeout(() => {
            clearInterval(interval);
            const data = { id: 2, name: "Jane Doe" };
            resolve(data);
        }, 3000);
    });
}

console.log("데이터 요청 시작");
fetchData()
    .then((result) => {
        console.log("데이터 수신:", result);
    })
    .catch((error) => {
        console.error("에러 발생:", error);
    });
console.log("요청 완료");

// async/await
function fetchData() {
    return new Promise((resolve, reject) => {
        let seconds = 0;
        const interval = setInterval(() => {
            seconds++;
            console.log(`${seconds}초 경과`);
        }, 1000);

        setTimeout(() => {
            clearInterval(interval);
            const data = { id: 3, name: "Bob Smith" };
            resolve(data);
        }, 3000);
    });
}

async function getData() {
    console.log("데이터 요청 시작");
    try {
        const result = await fetchData();
        console.log("데이터 수신:", result);
    } catch (error) {
        console.error("에러 발생:", error);
    }
    console.log("요청 완료");
}

getData();