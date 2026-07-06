(function () {
  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var script = document.createElement("script");
      script.src = src;
      script.onload = resolve;
      script.onerror = function () {
        reject(new Error("Failed to load " + src));
      };
      document.head.appendChild(script);
    });
  }

  function loadFragment(el) {
    var src = el.getAttribute("data-src");
    return fetch(src).then(function (res) {
      if (!res.ok) throw new Error(src + " returned " + res.status);
      return res.text();
    }).then(function (html) {
      el.outerHTML = html;
    });
  }

  function showBootError(error) {
    document.body.innerHTML = '<pre style="white-space:pre-wrap;font:12px ui-monospace,monospace;color:#f5150e;padding:16px;">CyberPath failed to load. ' + String(error && error.message || error) + "</pre>";
    throw error;
  }

  Promise.all(Array.prototype.map.call(
    document.querySelectorAll("module-fragment[data-src]"),
    loadFragment
  )).then(function () {
    var assembledPage = "<!DOCTYPE html>\n" + document.documentElement.outerHTML;
    var realFetch = window.fetch.bind(window);
    window.fetch = function (input, init) {
      var url = typeof input === "string" ? input : input && input.url;
      var absoluteUrl = url ? new URL(url, location.href).href : "";
      if (absoluteUrl === location.href) {
        return Promise.resolve(new Response(assembledPage, {
          status: 200,
          headers: { "Content-Type": "text/html; charset=utf-8" }
        }));
      }
      return realFetch(input, init);
    };

    return loadScript("./assets/js/support.js");
  }).catch(showBootError);
})();
