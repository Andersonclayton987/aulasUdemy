function pessoa() {
    this.idade = 0

    setInterval(() => {  // O this não irá variar dentro de uma arrow
        this.idade++
        console.log(this.idade)
    }, 1000);
}
new pessoa