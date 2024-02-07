
var addyKey = "1ba2608ea9eb429f81746af1b7c93471";
function initAddy() {
  var addyComplete = new AddyComplete(document.getElementById('full_address'));
  addyComplete.options.excludePostBox = false;
  addyComplete.fields = {
    address1: document.getElementById('full_address'),
    address2: document.getElementById('address_line_2'),
    city: document.getElementById('city_region'),
    postcode: document.getElementById('post_zip'),
    suburb: document.getElementById('suburb_town')
  }
}

(function (d, w) {
  // Add the address autocomplete JavaScript
  var s = d.createElement('script');
  var addyUrl = 'https://www.addysolutions.com/address-lookup/1.6.2/js/addy.min.js';
  s.src = addyUrl + '?loadcss=true&enableLocation=false&country=nz&nzKey=' + addyKey;
  s.type = 'text/javascript';
  s.async = 1;
  s.onload=initAddy;
  d.body.appendChild(s);
})(document, window);