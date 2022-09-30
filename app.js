// https://www.omnicalculator.com/other/download-time

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const downloadtimeRadio = document.getElementById('downloadtimeRadio');
const filesizeRadio = document.getElementById('filesizeRadio');
const downloadspeedRadio = document.getElementById('downloadspeedRadio');

let downloadtime;
let filesize = v1;
let downloadspeed = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

downloadtimeRadio.addEventListener('click', function() {
  variable1.textContent = 'File size';
  variable2.textContent = 'Download speed';
  filesize = v1;
  downloadspeed = v2;
  result.textContent = '';
});

filesizeRadio.addEventListener('click', function() {
  variable1.textContent = 'Download time';
  variable2.textContent = 'Download speed';
  downloadtime = v1;
  downloadspeed = v2;
  result.textContent = '';
});

downloadspeedRadio.addEventListener('click', function() {
  variable1.textContent = 'Download time';
  variable2.textContent = 'File size';
  downloadtime = v1;
  filesize = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(downloadtimeRadio.checked)
    result.textContent = `Download time = ${computedownloadtime().toFixed(2)}`;

  else if(filesizeRadio.checked)
    result.textContent = `File size = ${computefilesize().toFixed(2)}`;

  else if(downloadspeedRadio.checked)
    result.textContent = `Download speed = ${computedownloadspeed().toFixed(2)}`;
})

// calculation

function computedownloadtime() {
  return (Number(filesize.value) / Number(downloadspeed.value)) * 8;
}

function computefilesize() {
  return (Number(downloadtime.value) / 8) * Number(downloadspeed.value);
}

function computedownloadspeed() {
  return Number(filesize.value) / (Number(downloadtime.value) / 8);
}