/**
 * [pad2 Formatar numero para dois digitos]
 * @param  {[number]} number [numero a ser formatado]
 * @return {[string]}        [retorna STRING formatado]
 */
function pad2(number)
{
     return (number < 10 ? '0' : '') + number;
}