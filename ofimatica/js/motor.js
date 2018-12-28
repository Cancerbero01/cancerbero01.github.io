window.addEvent("load", function() {
  for (var kk=1; kk<=11;kk++) 
  {
    if($$("#bt" + kk)) {
      $$("#bt" + kk).addEvent("click",function(ev){
        $$("article").setStyle("display","none");
        $$("#preg" + this.id.replace("bt",""))[0].setStyle("display","block");
      });
    }
  }
  $$("#bt1").fireEvent("click");
});
