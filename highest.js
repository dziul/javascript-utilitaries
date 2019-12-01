/**
     * [highest retornar o maior valor do Array]
     * @param  {[array]} arr [Array com os valores a ser calculado]
     * @return {[mixed]}     [description]
     */
     const highest = a => Math.max(...a)
    //or
    // const highest = (a) => a.reduce((a,c)=> Math.max(a,c))



    // console.log(highest([7,9,4])) //9
    // console.log(highest([13,9,4]))//13