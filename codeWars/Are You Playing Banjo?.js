function areYouPlayingBanjo(name) {
  if(name.substring(0,1).toUpperCase() === "R"){
    name = name + " plays banjo"
  }else{
    name = name + " does not play banjo"
  }
   
  
  return name;
}
