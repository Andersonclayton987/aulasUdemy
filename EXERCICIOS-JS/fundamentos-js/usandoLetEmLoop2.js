var funcs = []
for (let i = 0; i < 20; i++) {
    funcs.push(function () {
        console.log(i)  
    })        
}
funcs[2]()
funcs[8]()