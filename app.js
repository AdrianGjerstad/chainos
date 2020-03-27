const default_options = {

};

(function() {

})((function(telem) {

  let api = {};

  Terminal.applyAddon(fit);
  api.term = new Terminal(JSON.parse(localStorage.getItem("termoptions"))||default_options);
  api.term.open(telem);
  api.term.fit();
  window.onresize = function(){api.term.fit();};
  api.term.write('This is a test. \033[1;3;31mxterm.js\nnewline')

  return api;

})(document.getElementsByClassName('terminal')[0]));