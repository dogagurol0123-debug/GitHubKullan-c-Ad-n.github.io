document.querySelectorAll('img').forEach(img=>{img.addEventListener('error',()=>{img.style.visibility='hidden'});if(img.complete&&img.naturalWidth===0)img.style.visibility='hidden'});
const rotated=document.querySelector('.rotate-photo');
const sizeRotation=()=>{rotated.style.setProperty('--rot-width',`${rotated.clientHeight}px`);rotated.style.setProperty('--rot-height',`${rotated.clientWidth}px`)};
new ResizeObserver(sizeRotation).observe(rotated);sizeRotation();
