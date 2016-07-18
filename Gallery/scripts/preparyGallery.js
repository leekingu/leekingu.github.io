function preparyGallery(){
							if(!document.getElementById) return false ;
							if(!document.getElementsByTagName) return false ;
							if(!document.getElementById('ul')) return false ;
							function showPic(whichPic){
								var placeholder=document.getElementById('placeholder');
								var sourse=whichPic.getAttribute('href');
								var description=document.getElementById('description');
								var text=whichPic.getAttribute('title');
								placeholder.setAttribute('src',sourse);
								description.firstChild.nodeValue=text;
							}
							var oul=document.getElementById('ul');
							var oa=oul.getElementsByTagName('a');
							for(i=0;i<oa.length;i++){
								oa[i].onclick=function(){
									showPic(this);
									return false
								}
							}
						}
