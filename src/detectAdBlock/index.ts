/**
 * Identificar se há adblock ativo
 *
 * @returns
 */
const detectAdblock = () => {
  const listClass = ['text-ads', 'advertising_banner', 'banner-ads'];
  const querySelector = `.${listClass.join('.')}`;
  const doc = window.document;
  const div = doc.createElement('div');
  div.classList.add(...listClass);
  div.style.cssText = 'height:0;width:0;opacity:0;position:absolute;right:0;bottom:0;';
  doc.body.appendChild(div);
  const styles = window.getComputedStyle(div, null);
  const blocked = document.querySelector(querySelector) && styles.display === 'none';
  doc.body.removeChild(div);
  return blocked;
};

export default detectAdblock;
