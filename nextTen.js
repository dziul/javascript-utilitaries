/**
     * [nextTen Próxima dezena]
     * @param  {[number]} n [número]
     * @param  {[number]} m [próximo maior múltiplo]
     * @return {[number]}   [retorna a próxima dezena]
     */
    function nextTen(n, m) // essa função evita loops
    {
        var n = n || 1;
        var m = m || 10;
        return Math.ceil(n / m) * m;
    }