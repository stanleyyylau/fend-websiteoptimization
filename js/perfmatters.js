function logCRP(){var a=window.performance.timing,b=a.domContentLoadedEventStart-a.domLoading,c=a.domComplete-a.domLoading,d=document.getElementById("crp-stats");d.textContent="DCL: "+b+"ms, onload: "+c+"ms"}function loadjscssfile(a,b){if("js"==b){var c=document.createElement("script");c.setAttribute("type","text/javascript"),c.setAttribute("src",a)}else if("css"==b){var c=document.createElement("link");c.setAttribute("rel","stylesheet"),c.setAttribute("type","text/css"),c.setAttribute("href",a)}"undefined"!=typeof c&&document.getElementsByTagName("head")[0].appendChild(c)}window.addEventListener("load",function(a){logCRP()}),loadjscssfile("https://fonts.googleapis.com/css?family=Open+Sans:400,700","css");