const video = document.getElementById('videoclipes');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  if (scrollY > 95) {
    video.style.width = '90%';
    video.style.height = 'auto';
    video.style.borderRadius = "100px"
    video.style.marginTop = "15vh"
  }
  else{
    video.style.width = '100%';
    video.style.borderRadius ="0px"
    video.style.marginTop = "0vh"
  }
}); 

