(function () {
  // https://wangchujiang.com/hotkeys/
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var hotkeys = global.hotkeys || require('hotkeys-js');
  var defaults = { keys: [], selector: 'input[data-hotkey-focus]', callback: nx.noop };

  nx.hotkeyFocus = function (inOptions) {
    var options = nx.mix(null, defaults, inOptions);
    var keys = options.keys.join();
    var els = nx.slice(document.querySelectorAll(options.selector));
    hotkeys(keys, function (event, handler) {
      els.forEach(function (el) {
        el.focus();
        options.callback({ event: event, handler: handler });
      });
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.hotkeyFocus;
  }
})();
