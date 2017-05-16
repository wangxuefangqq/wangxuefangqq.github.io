;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-pingguo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M883.662253 350.691127C724.74587 453.608102 743.701594 676.243715 911.479809 752.542448c-7.397481 18.605753-14.240329 37.611619-22.399149 56.034201-26.343995 59.459207-61.572334 113.405863-105.184621 161.483858-49.260937 54.299697-100.763938 64.22986-168.597883 36.827767-24.365944-9.841136-49.704029-18.431791-75.405387-23.514553-35.075867-6.934946-69.496817 0.185218-102.480023 13.737886-13.837146 5.685489-27.630291 11.510148-41.661865 16.675798-47.611367 17.526165-90.51962 9.631358-128.346133-24.475438-41.580001-37.492916-73.5399-82.739423-100.983949-130.836861-57.851593-101.392248-90.00899-210.178907-84.288708-327.84991 4.311189-88.702228 33.871435-167.038364 105.397469-224.257553 50.262754-40.20877 108.026342-60.442604 172.751482-51.364855 25.098631 3.520173 49.26196 13.951757 73.728188 21.630646 9.498328 2.979868 18.820648 6.671956 27.935236 10.694573 26.839275 11.843746 53.002145 10.787694 80.409354 0.252757 33.215496-12.765745 66.791196-25.770943 101.353362-33.634028C731.377918 233.997382 836.310805 277.364075 883.662253 350.691127z"  ></path>' +
    '' +
    '<path d="M698.311825 4.744048c14.432711 112.555495-88.633666 241.689574-202.001667 233.157247C468.845643 144.646378 591.140966 2.964518 698.311825 4.744048z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-s" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M862.71671 1019.416612 193.694467 1019.416612c-27.101241 0-49.157583-22.056342-49.157583-49.157583L144.536884 320.885288c0-27.101241 22.056342-49.157583 49.157583-49.157583l669.022243 0c27.101241 0 49.157583 22.056342 49.157583 49.157583l0 649.372717C911.874293 997.36027 889.817951 1019.416612 862.71671 1019.416612zM193.694467 320.486198l-0.399089 649.77283 669.421332 0.399089c0.217964 0 0.399089-0.181125 0.399089-0.399089L863.115799 320.885288 193.694467 320.486198z"  ></path>' +
    '' +
    '<path d="M276.608875 299.04691l-49.339732-4.743024C243.191788 128.512932 374.670262 3.494591 533.10569 3.494591c153.426345 0 284.409538 120.589472 304.699654 280.501532l-49.169863 6.243191C771.491009 155.021679 661.632949 53.052287 533.10569 53.052287 400.332734 53.052287 290.063305 158.808936 276.608875 299.04691z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fangdajing1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M887.274524 795.33609 689.896154 597.957721c42.258453-50.723242 65.273632-114.013707 65.273632-180.849928 0-75.633584-29.453822-146.738016-82.935897-200.214974-53.484122-53.477982-124.599809-82.929758-200.246697-82.929758-75.626421 0-146.726759 29.451776-200.203718 82.930781-53.477982 53.479005-82.928734 124.582413-82.928734 200.212928 0 75.629491 29.451776 146.732899 82.928734 200.210881 53.476959 53.477982 124.577297 82.929758 200.203718 82.929758 67.206658 0 130.825604-23.26282 181.693132-65.951061l197.315948 197.315948c5.009084 5.009084 11.574616 7.513114 18.139126 7.513114s13.130042-2.50403 18.139126-7.513114C897.291668 821.59515 897.291668 805.354258 887.274524 795.33609zM308.062749 581.042469c-43.788296-43.789319-67.902506-102.008278-67.902506-163.934676 0-61.927421 24.115234-120.148427 67.902506-163.936723 43.787272-43.789319 102.004185-67.903529 163.925467-67.903529 61.944817 0 120.17708 24.115234 163.970492 67.904553 43.791365 43.787272 67.907623 102.007255 67.907623 163.9357 0 61.928445-24.116257 120.147404-67.907623 163.933653-43.793412 43.788296-102.025675 67.903529-163.970492 67.903529C410.065911 648.944975 351.848998 624.830765 308.062749 581.042469z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)