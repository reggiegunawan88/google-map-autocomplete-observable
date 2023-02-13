/* check if some script is already loaded or not */
const validateLoadedScript = ({ url }) => {
  var scripts = document.getElementsByTagName('script');
  for (var i = scripts.length; i--; ) {
    if (scripts[i].src === url) return true;
  }
  return false;
};

export default validateLoadedScript;
