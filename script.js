console.log("data checked");
let eninput=document.getElementById("input");
let searchbtn=document.getElementById("search");
let outerdiv=document.createElement("div");
outerdiv.classList.add("outer-div");
searchbtn.addEventListener("click",(event)=>{
event.preventDefault();
  outerdiv.innerHTML="";
  let entereddata=eninput.value;
  console.log(entereddata);
  //let api=`http://api.tvmaze.com/search/shows?q=${entereddata}`;
  let xx="https://api.tvmaze.com/search/shows?q=" + entereddata;
fetch(xx)
.then((resp) => resp.json())//data wil be fetched in unparsed format
.then((data)=>{
  console.log(data);
  data.forEach((item)=>{
  console.log(item);
  let innerdiv=document.createElement("div");
  innerdiv.classList.add("inner-div");
  let title=document.createElement("h2");
  title.innerText="Series Name:" +item.show.name;
  let img=document.createElement("img");
  img.src=item.show.image.medium;
  img.classList.add("img");
  let language=document.createElement("div");
  language.innerText="Language:" +item.show.language;
  let genres=document.createElement("div");
  genres.innerText="Genre is:" +item.show.genres[0];
  let schedule=document.createElement("div");
  if(item.show.schedule.days.length===0)
  {
  schedule.innerText="Airs on all days";
  }
  else
  {
    schedule.innerText="Airs on:" +item.show.schedule.days;
  }
  innerdiv.appendChild(title);
  innerdiv.appendChild(language);
  innerdiv.appendChild(schedule);
  innerdiv.appendChild(genres);
  innerdiv.appendChild(img);
  outerdiv.appendChild(innerdiv);
  document.body.appendChild(outerdiv);

});

});
});



