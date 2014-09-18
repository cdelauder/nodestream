$(document).ready(bindListeners)

function bindListeners () {
  $(.pic).one('click', gethtml)
}

function gethtml (e) {
  e.preventDefault()
  var ajax = $.ajax({
    url: e.target.href

  }).done(addToPage)
}

function addToPage (e) {
  $(.div).append(e)
}