/* eslint-disable */

function download(link) {
  let anchor = document.createElement('a');
  anchor.target = '_blank';
  anchor.download = link;
  anchor.click();
}
