const timeout = setTimeout(() => {
    console.log('1.5초 후 실행')
},1500);

const interval = setInterval(() => {
    console.log('1초마다 입력');
},1000);

const immediate =setImmediate(()=>{
    console.log('즉시실행');
})