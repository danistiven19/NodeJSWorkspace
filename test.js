
const nameExt = process.env.NAME || 'No Name';

function startProcess() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Process has started');
            resolve();
        }, 1000);
    })
}

function endProcess() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Process has finished');
            resolve();
        }, 1000);
    });
}

function talk(name) {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            console.log('bla bla bla with ', name);
        }, 100);
        resolve(name);
    });
}

function greet(name) {
    return new Promise( (resolve, reject)=> {
        setTimeout(()=> {
            console.log('Hola ', name);
            resolve(name);
        }, 1000);
    });
}

function sayBye(name) {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            console.log('Bye ', name);
            resolve(name);
        }, 500);
    });
}

function conversation(name) {
    startProcess()
        .then(() => greet(name))
        .then(talk)
        .then(talk)
        .then(sayBye);
}

conversation(nameExt, function() {console.log('Process has finished');});


