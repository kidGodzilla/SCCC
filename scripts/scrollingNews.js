	function findObj(n, d) { //v4.01
	  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
		d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
	  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
	  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=findObj(n,d.layers[i].document);
	  if(!x && d.getElementById) x=d.getElementById(n); return x;
	}

var V4LvlA="newsContent",V4LvlT;

	function newsScroll(d,s,o,n){ //v1.0 4LevelWebs
	 var q,x,p="",r=parseInt(n),u=parseInt(o),k=document.layers;if(!k){p="px"}if((x=findObj(V4LvlA))!=null){q=(document.layers)?x:x.style}
	 var c=clearTimeout(V4LvlT),j=d==5&&!k?u:0,h=k?parseInt(x.clip.height):parseInt(x.offsetHeight);
	 var v=parseInt(s),f=10,y=q.top?parseInt(q.top):j;if(d==6){if(y<o){q.top=y+u+p;if(-y<o||y>=0){q.top=0}}}else
	 if(d==7){if(-y<h){q.top=y-n+p;if(-y+r>h-n){q.top=-h+r+p}}}else{if(d==1&&y<r){q.top=y+v+p}if(d==2&&y>-h+u){q.top=y-v+p}
	 if(d==3){q.top=0}if(d==4){q.top=-h+u+p}if(d==5){f=15;if(y>-h){q.top=y-v+p}if(y==-h){q.top=o+p}}
	 if(d==8){q.top=y<0?y+v+p:y>v?y-v+p:0}if(d==10&&y>-h+u){q.top=y-v+p}
	 V4LvlT=setTimeout("newsScroll('"+d+"','"+s+"','"+o+"','"+n+"')",f)}
	}

	function newsStop(){
	clearTimeout(V4LvlT);
	}