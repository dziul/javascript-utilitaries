/**
     * [nextTen Próxima dezena]
     * @param  {[number]} n [número]
     * @param  {[number]} m [próximo maior múltiplo]
     * @return {[number]}   [retorna a próxima dezena]
     */
    const nextTen = (n=1, m=10) => Math.ceil(n / m) * m


//     console.log(nextTen(5))//(number)10
//     console.log(nextTen(18))//(number)20
//     console.log(nextTen(12,40))//(number)40
//     console.log(nextTen(41,40))//(number)80