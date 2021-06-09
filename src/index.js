(function () {
  // https://wangchujiang.com/hotkeys/
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var hotkeys = global.hotkeys || require('hotkeys-js').default;
  var defaults = { keys: [], selectors: ['input[data-hotkey-focus]'], callback: nx.noop };

  var getElement = function (inSelectors) {
    var elements = inSelectors.reduce(function (res, selector) {
      var els = nx.slice(document.querySelectorAll(selector));
      return res.concat(els);
    }, []);
    return elements.find(Boolean);
  };

  nx.hotkeyFocus = function (inOptions) {
    var options = nx.mix(null, defaults, inOptions);
    var keys = options.keys.join();
    hotkeys(keys, function (event, handler) {
      var el = getElement(options.selectors);
      el && el.focus();
      options.callback({ event: event, handler: handler });
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.hotkeyFocus;
  }
})();
