/**
     * [highest retornar o maior valor do Array]
     * @param  {[array]} arr [Array com os valores a ser calculado]
     * @return {[mixed]}     [description]
     */
    function highest(arr) {
        return arr.reduce(function(a, b) {
            return Math.max(a, b);
        });
    }