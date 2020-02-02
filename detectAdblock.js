/**
 * Identificar se há adblock ativo
 *
 * @param {boolean} [message=false] Opcional, caso precise substituir o true por uma mensagem
 * @returns
 */
const detectAdblock = (message=false) => {
    const   doc = window.document;
    const   div = doc.createElement('div');
            div.setAttribute('class', 'text-ads advertising_banner small_ad marketing-ad banner300');
            div.style.cssText = 'height:0;width:0;display:block;opacity:0;position:absolute;right:0;bottom:0;';
            doc.body.appendChild(div);
            const styles = window.getComputedStyle(div,null);
            setTimeout(()=>{
                doc.body.removeChild(div);
            },300);
            const result = styles.display === 'none';
            if(message && result) return message;
            return result;
};

export default detectAdblock;