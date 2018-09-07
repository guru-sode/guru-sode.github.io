$(document).ready(function () {
  var trelloCards = [];
  var Cardurl="https://api.trello.com/1/boards/5b8e1d2cd80f433972547169/cards/?limit=2&fields=name&members=true&member_fields=fullName&";
  var key = "key=5ebb2e3505df87a317f75b76d08add31&";
  var token = "token=4a18f0fc020cd3aee8d60deacfd95be1b6bfcfe10bd6f7cd58a7139f9a2eefb3";
  var getCardURL=Cardurl+key+token;
  fetch(getCardURL)
  .then((res)=>res.json())
  .then((data)=>{
    data.forEach(cardIDs=>{
      trelloCards.push(cardIDs["id"]);
    });
    for(var i=0;i<trelloCards.length;i++){
      console.log(trelloCards[i]);
      var url = `https://api.trello.com/1/cards/${trelloCards[i]}/checklists?`;
      var key = "key=5ebb2e3505df87a317f75b76d08add31&";
      var token = "token=4a18f0fc020cd3aee8d60deacfd95be1b6bfcfe10bd6f7cd58a7139f9a2eefb3";
      var getURL = url + key + token;
      console.log(getURL);
      
      var names = [];
              fetch(getURL)
              .then((res)=>res.json())
              .then((data)=>{
                data.forEach(checklists => {
                  checklists["checkItems"].forEach(checklistNames=>{
                    console.log(checklistNames["name"]);
                    if(checklistNames["state"]=="incomplete")
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
      
    }
  });
});

