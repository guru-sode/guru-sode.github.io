$(document).ready(function () {
  var trelloObj = {};
  var url = "https://api.trello.com/1/members/me/boards?";
  var key = "key=5ebb2e3505df87a317f75b76d08add31&";
  var token = "token=4a18f0fc020cd3aee8d60deacfd95be1b6bfcfe10bd6f7cd58a7139f9a2eefb3";
  var getURL = url + key + token;
  var names = [];
  fetch(getURL)
    .then((res) => res.json())
    .then((data) => {
      data.forEach(userInfo => {
        names.push(userInfo["name"]);
      });
      for (var i = 0; i < names.length; i++) {
        $("#form-undone-tasks").append(`<label><input value="" data-id="${names[i]}" class="cb pristine" type="checkbox"> <span>${names[i]}</span></label>`);
      }
      var q = document.querySelectorAll(".cb");
      for (var i in q) {
        if (+i < q.length) {
          q[i].addEventListener("click", function () {
            let c = this.classList,
              p = "pristine";
            if (c.contains(p)) {
              c.remove(p);
            }
          });
        }
      }
      var checkboxes=$('input[type="checkbox"]');
      checkboxes.change(function(){
        if(this.checked){
          fetch('https://api.trello.com/1/boards/5b8e1d2cd80f433972547169/cards/?limit=2&fields=name&members=true&member_fields=fullName&key=5ebb2e3505df87a317f75b76d08add31&token=4a18f0fc020cd3aee8d60deacfd95be1b6bfcfe10bd6f7cd58a7139f9a2eefb3')     
          .then((res)=>res.json())
          .then((data)=>{
            data.forEach(cardNames=>{
              console.log(cardNames["name"]);
              
            });
          });
        }
      });
    });    
});

