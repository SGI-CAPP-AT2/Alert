$make=(str)=>{return document.createElement(str);};allfunc={};$=(str)=>{return document.querySelector(str);};if($("meta[name=ted-globalmode]")){metaMode=$("meta[name=ted-globalmode]");}else{metaMode={content:'light',};};var div = 'div';var global_of_ted_alerts_here_on_line_4_TED={};txt=(str,is,elem)=>{if(is==true||is=="true"){elem.innerHTML=str;}else{elem.innerText=str;};};function Ted(){return {alert:function (data){var data=data;var fls = $make(div);fls.dataset.tedType="fscn-jammer";var alert = $make(div);	alert.dataset.tedType="cent-alert";alert.classList.add(data.mode||global_of_ted_alerts_here_on_line_4_TED.mode||metaMode.content||"light");				alert.classList.add(data.theme||'primary');var head=$make(div),body=$make(div),foot=$make(div);				head.dataset.tedType="head";body.dataset.tedType="body";foot.dataset.tedType="foot";txt(data.content,data.html||global_of_ted_alerts_here_on_line_4_TED.html||false,body);txt(data.title||global_of_ted_alerts_here_on_line_4_TED.title,false,head);if(!data.btns||data.btns.length<=2){if(!data.btns){data.btns=[];}if(data.closeBtn!=false&&data.closeBtn!="false"){				data.btns.push({val:'close',fun:function(e){del(e);}});}};if(data.btns){for(bNum=0;bNum<3;bNum++){if(data.btns[bNum]){var btn=data.btns[bNum];var render = $make("button");if(btn.fun){render.dataset.tedName='bNum'+bNum;allfunc['bNum'+bNum]={};allfunc['bNum'+bNum].fun=btn.fun;render.addEventListener('click', function (){allfunc[this.dataset.tedName].fun(fls)})}	;				txt(btn.val,false,render);foot.append(render);if(bNum==2){render.dataset.tedLeft=true;}else{render.dataset.tedRight=true;}}}}	document.body.append(fls);fls.append(alert);alert.append(head,body,foot);},globalSet:(data)=>{for(ky in Object.keys(data)){global_of_ted_alerts_here_on_line_4_TED[Object.keys(data)[ky]]=Object.values(data)[ky];}	}}};del=(e)=>{e.style.animation="removal .2s linear";setTimeout(function (){										if(e.dataset.tedType=="fscn-jammer"){e.remove();}},200);}
/* created by BOOSTED(gh@NotableApp) > SGI(gh@SGI-CAPP-AT2)*/
/* GitHub repo https://github.com/notableapp/BOSTED&alerts/*/
