const topText = document.querySelector('#top-text-input');
const bottomText = document.querySelector('#bottom-text-input');
const imgLink = document.querySelector('#image-input');
const dankMeme = document.getElementById('memes');
const createMeme = document.querySelector('#generate-meme');
createMeme.disabled = true;
const wastebasket = (String.fromCodePoint(0x0001F5D1));

document.addEventListener('submit', function(e) {
  e.preventDefault();
});

document.addEventListener('change', function (e) {
  if (topText.value.length != 0 && bottomText.value.length != 0 && imgLink.value.length != 0) {
    createMeme.disabled = false;
  }
});

createMeme.addEventListener('click', function (e) {
  const newMeme = document.createElement('div');
  newMeme.id = 'new-meme';
  const memeTopText = document.createElement('p');
  memeTopText.id = 'meme-top-text';
  memeTopText.textContent = topText.value;
  newMeme.appendChild(memeTopText);
  const memeBottomText = document.createElement('p');
  memeBottomText.id = 'meme-bottom-text';
  memeBottomText.textContent = bottomText.value;
  newMeme.appendChild(memeBottomText);
  const memeImg = document.createElement('img');
  memeImg.id = 'meme-img';
  memeImg.src = imgLink.value;
  newMeme.appendChild(memeImg);
  const memeRemove = document.createElement('button');
  memeRemove.id = 'meme-remove';
  memeRemove.innerText = `${wastebasket}`;
  newMeme.appendChild(memeRemove);
  dankMeme.appendChild(newMeme);
  document.forms[0].reset();
  document.forms[1].reset();
  document.forms[2].reset();
  createMeme.disabled = true;
});

dankMeme.addEventListener('click', function(e) {
  if (e.target.tagName === 'BUTTON') {
    const notDank = e.target.parentElement;
    notDank.remove();
  }
});
