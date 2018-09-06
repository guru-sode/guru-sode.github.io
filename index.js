$(document).ready(function () {
  var trelloObj = {};
  var url = "https://api.trello.com/1/cards/5b8e46ee21b5d55294f625d5/checklists?";
  var key = "key=5ebb2e3505df87a317f75b76d08add31&";
  var token = "token=4a18f0fc020cd3aee8d60deacfd95be1b6bfcfe10bd6f7cd58a7139f9a2eefb3";
  var getURL = url + key + token;
  var names = [];
          fetch(getURL)
          .then((res)=>res.json())
          .then((data)=>{
            data.forEach(checklists => {
              checklists["checkItems"].forEach(checklistNames=>{
                console.log(checklistNames["name"]);
                $("#form-undone-tasks").append(`<label><input value="" data-id="${checklistNames["name"]}" class="cb pristine" type="checkbox"> <span>${checklistNames["name"]}</span></label>`);
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
              });
              
            });
            
          });  
});

