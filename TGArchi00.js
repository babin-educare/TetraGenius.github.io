var container,scene,scene2,backgroundScene,backgroundCamera,camera,cameraLeft,cameraRight,renderer,controls,controls1,currentFile,objectX,objectT,objectT1,particleLight,projector,raycaster,INTERSECTED,faceColorMaterial,light1,light2,light3,iR,i,iiL,xi,yi,zi,si,sy,sz,keyCode,KeyCodeUp,Xsym,Ysym,Zsym,Btable,object3,object4,object2,octa,octaX,octaY,octaZ,cubeColor,texture2,backgroundMesh,folder1,Tadd,playingNow,audio,loaded,retrievedObject,keyboard=new KeyboardState,targetList=[],targetListX=[],targetListY=[],targetListXY=[],savedFiles=[],userLocalName=[],userLocalPass=[],numSavedFiles=0,current=["NONE",""],activeFiles=[],numUserL=0,numUsers=1,possiX=[],possiY=[],possiZ=[],possiXX=[],possiYX=[],possiZX=[],possiXY=[],possiYY=[],possiZY=[],possiXXY=[],possiYXY=[],possiZXY=[],TFlagNum=[],TFlagNumX=[],TFlagNumY=[],TFlagNumXY=[],TColour=[],TColourX=[],TColourY=[],TColourXY=[],rotX=[],rotY=[],rotZ=[],rotXX=[],rotYX=[],rotZX=[],rotXY=[],rotYY=[],rotZY=[],rotXXY=[],rotYXY=[],rotZXY=[],DesT=[],vv0x=[],vv0y=[],vv0z=[],vv1x=[],vv1y=[],vv1z=[],vv2x=[],vv2y=[],vv2z=[],vv3x=[],vv3y=[],vv3z=[],count=0,mirX=[],mirY=[],mirXY=[],targetOBJ=[],objects=[],objectsL=[],objectXxx=[],lightsP=[],mouse={x:0,y:0},isShiftDown=!(activeFiles[0]=". "),separation=.1,selectedFaces=[],floorSide=1e3,baseColor=new THREE.Color(15654246),highlightedColor=new THREE.Color(14526976),selectedColor=new THREE.Color(4482781),mouseSphereCoords=null,mouseSphere=[],material=new THREE.MeshBasicMaterial({vertexColors:THREE.FaceColors,overdraw:.1}),li=2,ci=1,cii=1,ciiX=0,ciiY=0,ciiXY=0,materials=[],shininess=50,specular=3355443,bumpScale=1,shading=THREE.SmoothShading,xposi1=3.3003030003033005,yposi1=2.220020202002022,zposi1=5.500550500505505,Doption="OFF",Rainbow="Greys",BTab="XZ Table",xxpo=xposi1/(Math.PI/3)*Math.floor(xposi1/Math.floor(xposi1)+yposi1+zposi1-Math.floor(yposi1+zposi1))/Math.PI/Math.floor(xposi1/3),yypo=5*Math.PI*Math.floor(yposi1/Math.floor(yposi1)+xposi1+zposi1-Math.floor(xposi1+zposi1))/Math.PI/Math.floor(yposi1/10),zzpo=2*Math.PI*Math.floor(zposi1/Math.floor(zposi1)+xposi1+yposi1-Math.floor(yposi1+xposi1))/Math.PI/Math.floor(zposi1/2.5),rotSelect2=[],rotSelect=[],material111=new THREE.MeshLambertMaterial({color:3355443,transparent:!0,opacity:0}),material11=new THREE.MeshLambertMaterial({color:16777215,transparent:!0,opacity:0}),material999=new THREE.MeshLambertMaterial({color:65280,transparent:!0,opacity:.3}),material12=new THREE.MeshLambertMaterial({color:16776960,transparent:!0,opacity:1}),material13=new THREE.MeshLambertMaterial({color:15662848}),material14=new THREE.MeshLambertMaterial({color:15662848}),material15=new THREE.MeshLambertMaterial({color:16777215,transparent:!0,opacity:1}),material16=new THREE.MeshLambertMaterial({color:8396869,transparent:!0,opacity:1}),addTetraFlag=0,addTetraFlag2=0,Load2=0,addDesignFlag=0,TexFlag=0,designs=[],textures=[],xxx=texFlag=0,TransparentBlock="False",saveOBJ1="SavedOBJ",colcol="0x2222cc",colcol2="0x2222cc",musicC=[],retrievedObjectA=[],sentObjectA={},userObject=[],USERS={},tetrasL=[],angleObx=0,angleOby=0,angleObz=0,angleOb=Math.PI,ciiB=0,ciiA=0,tetNames=["Abstract","Platform","Geometric","SquareFlat","Slide","Modern"," ","Torus","Clipped","TetraFrame","TetraMag","ThickStar","ThinStar","Flower","Original"," ","Triangles","Magnet Ball","Pipes","Cubic","Spiral","Half-Pipe"," ","Flatpack","Dragon","Heart-shape","Heart-logo","Leaf","DNA segment","Oval"," ","Sphere0","Sphere1","Sphere2","Sphere3","Sphere4"," ","Organic1","Organic2","Organic3"," ","Globe1","Globe2","Globe3","Globe4","Globe5","Globe6"," "],tNames=tetNames.slice(0,6),tNames2=tetNames.slice(6,15),tNames3=tetNames.slice(15,22),tNames4=tetNames.slice(22,30),tNames5=tetNames.slice(30,36),tNames6=tetNames.slice(36,43),tetraName="Abstract",loadingF=0,texNames=["Gradient","Central Africa","Antartica","Eurasia","Australia","Canada","Americas","EsherStair","GoldCopper","BlueIce","Silver","Glass","Green","Sandstone","Leaf","Heart","Flowers"];textures=["textures/water.jpg","textures/hieroglyph1.jpg","textures/AntA.png","textures/Inspire6.jpg","textures/inspire.jpg","textures/tomb.jpg","textures/stars9.jpg","textures/curl.jpg","textures/rust.jpg","textures/hightech4.jpg","textures/silverMetal.jpg","textures/skyScr4.jpg","textures/greenMetal.jpg","textures/disturb.jpg","textures/leaf09.png","textures/heart.jpg","textures/sandstone2.jpg"],designs=["models/obj/Abstract.obj","models/obj/Platform.obj","models/obj/geometric.obj","models/obj/TetraSquare1.obj","models/obj/solid4.obj","models/obj/modern.obj"," ","models/obj/Tetratorus.obj","models/obj/snake.obj","models/obj/Tetraframe1.obj","models/obj/magnetic1.obj","models/obj/slivers2.obj","models/obj/thin.obj","models/obj/press.obj","models/obj/TetraSquare.obj"," ","models/obj/Triangle.obj","models/obj/magneticball.obj","models/obj/pipe2.obj","models/obj/dice.obj","models/obj/stair.obj","models/obj/halfpipe2.obj"," ","models/obj/Flatpacka.obj","models/obj/dragon2.obj","models/obj/heart.obj","models/obj/heart3.obj","models/obj/leaf.obj","models/obj/DNA3.obj","models/obj/pipe2018d.obj"," ","models/obj/spacebrickpline.obj","models/obj/sphere1.obj","models/obj/sphere2.obj","models/obj/sphere3.obj","models/obj/sphere4.obj"," ","models/obj/cubic.obj","models/obj/organic2.obj","models/obj/organic3.obj","models/obj/leaf.obj","models/obj/heart.obj","models/obj/spiral.obj"],musicC=["sounds/ogg//1.ogg","sounds/2.mp3","sounds/3.mp3","sounds/4.mp3","sounds/5.mp3","sounds/6.mp3","sounds/7.mp3","sounds/8.mp3","sounds/9.mp3","sounds/10.mp3"];