function dos(){
  var name=document.getElementById('primary').value;
  var a=document.getElementById('activity').value;
  var r=document.getElementById('range').value;
  var s=document.getElementById('dose').value;
  if (a!=""&&r!=""&&s!=""){
    if (name=="Co-60"){
      var t=2.56e-18;
      var m=0.674;}
    else if (name=="Cs-137"){
      var t=6.39e-19;
      var m=1.213;}
    if (r<0)
      var d="NaN";
    else
      d=-Math.log((s*r*r)/(33.85*t*a*3.7e10*3.6e6))/m;
    if (d<0)
      d="不需要屏蔽！！！";}
  else
    d="";
  document.getElementById('thick').value=d;}