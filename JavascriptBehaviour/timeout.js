console.log(1);

//Non-blocking feature of Javascript, which provides the single-threaded enviornment
/**
 * First up, this code will pop out of the call stack as it uses the setTimeout web api.
 * Then, in the API, it will get ready to be executed after a predefined period of time, and also be sent to the callback queue.
 * As it has popped out of the call stack, next code will be executed in the JS engine.
 * Once, other API, Event Loop finds the callstack empty, it loads the function in the callback queue into the call stack
 * Finally, the callstack will execute console.log(2)
 * 
 */
setTimeout(()=>console.log(2),2000);


console.log(3);
