function gotoSection(id) {
  event.preventDefault()
  let section = document.getElementById(id);
  if(section){
      section.scrollIntoView({ behavior: 'smooth' });
  }else{
      console.log("section not found");
  }
}

