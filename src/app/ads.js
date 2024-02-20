'use client'

export function ads() {
  var e=document.createElement('div');
  e.id='neARYMwOyKtT';
  e.innerText='I AM TEXT'
  e.classList.add('ads')
  e.style.display='none';
  document.body.appendChild(e);
  console.log({e})

  if(document.getElementById('neARYMwOyKtT')){
    console.log('Blocking Ads: No');
  } else {
    console.log('Blocking Ads: Yes');
  }
}