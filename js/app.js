// // Legally Stolen from Travis
var forEach = function(arr, cb){
   for(var i = 0 ; i < arr.length; i+=1){
      cb(arr[i], i, arr)
   }
}
var containerSelector = document.querySelector('#app-container')


var userList = {
   matt: {username: "Matt", showIds: [170,169,175,318,76,270, 255]},
   ed: {username: "Ed", showIds: [5853,431,80,279,570,76,73,20540,83,17119]},
   michelle: {username: "Michelle", showIds: [83,576,735,73,749,170,112,80]},
   justin: {username: "Justin", showIds: [551,169,490,530,73,302, 547, 532]},
}
var homePage = function(){

var homeHtml = '<h3>Who\'s Watching?</h3><div class="row home-users"> '
   for(var prop in userList){
         homeHtml +=          '<a href="#' + prop  + '">'
         homeHtml +=                  '<div class="col-sm-3 col-md-3 ">'
         homeHtml +=                          ' <div class="thumbnail user-profile">'
         homeHtml +=        '                     <img class="usr-pic" src="https://flathash.com/' + prop
         homeHtml +=                                '" alt="...">'
         homeHtml +=                                '<div class="caption">'
         homeHtml +=              '                        <h3>'+ prop +'</h3>'
         homeHtml +=                             '</div>'
         homeHtml +=                           '</div>'
         homeHtml +=                         '</div>'
         homeHtml +=                       '</a>'


   }
   homeHtml += '</div>'
   containerSelector.innerHTML = homeHtml


}

// pass user hashName in function
var showUserPage = function(userInfo){
   var showContainer = '<h2 class="list-headline"><span>' + userInfo +"'s</span>" + ' list' + '</h2>'
      showContainer +='<div class="row shows-container"</div>'

      containerSelector.innerHTML = showContainer

   var listSelector = document.querySelector('.shows-container')
      var userShows = userList[userInfo].showIds

      console.log(userShows)
      var showBuilder = function(showInfo){

         var imageHolder = showInfo.image.medium
            var showStr = '         <div class="col-xs-4 col-sm-2 ">'
             showStr += '            <div class="thumbnail thumb">'
             showStr += '               <img src="'+ imageHolder + '"' + 'alt="">'
             showStr += '               <p>' + showInfo.name + '</p>'
             showStr += '            </div>'
             showStr += '         </div>'
             showStr += '      </div>'


         listSelector.innerHTML += showStr
      }

      var showSelector = function(showNum){

              $.getJSON('http://api.tvmaze.com/shows/' + showNum ).then(showBuilder)

      }


      forEach(userShows, showSelector)


   }

















var router = function(){


   console.log(window.location.hash)
   var hashHolder = window.location.hash



   var hashName = hashHolder.slice(1)
   console.log(hashHolder.length)
   if(hashHolder.length === 0){

      return homePage()
   }
   showUserPage(hashName)




}

window.addEventListener('hashchange', router)
router()
