// 1. add a event listner to know when to perform action
// 2. add/remove class to detect when to show/hide
// 3. write css accordingly
// 4. manage the state of the menu, if it's opened or closed


function myFunction() {
   document.getElementById("menu").classList.toggle("icon");
   document.getElementById("nav").classList.toggle("change");
}


jQuery(document).ready(function(){
   
   jQuery(".skill-box").click(function(event){
      event.preventDefault();
      const targetContainer = jQuery(this).data("skill")

      $(".skill-box").removeClass("activeTab")
      $(this).addClass("activeTab")
      
      $(".skillDetails").removeClass("active")
      $("."+targetContainer).addClass("active")
   }); 

});

      

  















