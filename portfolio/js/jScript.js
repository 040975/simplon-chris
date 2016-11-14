var timer = [0,0,0,0];
var iProgress = [0,0,0,0];

function progress(val,idx)
{
  if(iProgress[idx] >= val)
  {
    //alert(val);
    clearInterval(timer[idx]);
    return;
    iProgress[idx] = 0;
  }

  //for(var i = 0; i <= 3; i++)
  document.getElementsByTagName('progress')[idx].value = iProgress[idx];
  iProgress[idx]++;

  timer[idx] = setTimeout(progress, 200, val, idx);
}
