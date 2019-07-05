import _ from 'lodash';

// this does just load the whole file instead of specific images which kinda defeats the point
// tree shaking could probably fix this
var req = require.context("./images/", false, /.*\.(png|jpe?g|svg)$/);
req.keys().forEach(function(key){
  req(key);
});

// data and mostly from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
import data from './data.json'

// fill services with JSON data
for (var i = 0; i < data.services.length; i++) {

  var myArticle = document.createElement('article');
  myArticle.setAttribute("class", "service io-push");
  var myH3 = document.createElement('h3');
  var myPara1 = document.createElement('p');
  var myBackground = document.createElement('div');
  myBackground.setAttribute("class", "skewer");

  myH3.textContent = data.services[i].title;
  myPara1.textContent = data.services[i].excerpt;

  myArticle.appendChild(myH3);
  myArticle.appendChild(myPara1);
  myArticle.appendChild(myBackground);

  document.getElementById('services').appendChild(myArticle);
}

// fill testimonials with JSON data
for (var j = 0; j < data.testimonials.length; j++) {

  var myTestimonal = document.createElement('article');
  var myBackground = document.createElement('div');
  myBackground.setAttribute("class", "skewer");
  myTestimonal.setAttribute("class", "testimonial io-push");
  var myPara1 = document.createElement('p');
  var myH3 = document.createElement('quote');

  myPara1.textContent = data.testimonials[j].test;
  myH3.textContent = data.testimonials[j].author;

  myTestimonal.appendChild(myBackground);
  myTestimonal.appendChild(myPara1);
  myTestimonal.appendChild(myH3);

  document.getElementById('testimonials').appendChild(myTestimonal);
}



















// Large margins when IO comes into play
if ('IntersectionObserver' in window &&
'IntersectionObserverEntry' in window &&
'intersectionRatio' in window.IntersectionObserverEntry.prototype) {

  let iopush = document.querySelectorAll('.io-push');

  var numSteps = 20.0;

  var pusher; // naming choice is too close to push
  var prevRatio = 0.0;
  var mT = "ratioem";

  // Set things up.

  window.addEventListener("load", function(event) {
    pusher = document.querySelectorAll(".io-push");

    createObserver();
  }, false);

  function createObserver() {
    var observer;

    var options = {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList()
    };

    observer = new IntersectionObserver(handleIntersect, options);

    pusher.forEach(pushers => {
      observer.observe(pushers);
    });
  }

  function buildThresholdList() {
    var thresholds = [];
    var numSteps = 100;

    for (var i=1.0; i<=numSteps; i++) {
    var ratio = i/numSteps;
    thresholds.push(ratio);
    }

    thresholds.push(0);
    return thresholds;
  }

  function handleIntersect(entries, observer) {
    entries.forEach(function(entry) {
      entry.target.style.marginTop = mT.replace("ratio", (entry.intersectionRatio*5));
    prevRatio = entry.intersectionRatio;
    });
  }
}
