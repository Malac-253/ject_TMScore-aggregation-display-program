//https://chrome.google.com/webstore/detail/custom-page-zoom/jodiabicmogcbbiocceenmeflipeelle/related?hl=en

//main function for the success of malachi
var mainFunction = function(){
    var testing = true
    var fileinput = false
    
    //convert Data Promise - Gets Posts for thread
    var convertDataPromise = function(){
        var dateStart = document.getElementById('LinkGetter');// Grabbing button //random convert edit here 

        //Getting values        
        d3.select("#CONbutton1").on("click",
        function(){
            //https://boards.4channel.org
                var hardLink = dateStart.value.replace('https://boards.4channel.org/','').split('/thread/');
                    //console.log("(hardLink) ",hardLink)
                var BASELINK = "https://cors-anywhere.herokuapp.com/"
                var REALLINK = "https://a.4cdn.org/"+hardLink[0]+"/thread/"+hardLink[1]+".json"

                //Promise Main
                d3.select("#R-Holder").append("p").text("loading ...")
                var dataPromise = d3.json(hardLink[0]+hardLink[1]+"posts.json")

                if (!fileinput){var dataPromise = d3.json(BASELINK+REALLINK)}
                    //console.log("(dataPromise) ",BASELINK+REALLINK)
                dataPromise.then(
                    function(posts)
                    {
                        d3.selectAll("#heading-err *").remove()
                        var pData = postConverter(posts.posts,hardLink[1],hardLink[0])  //Get New data
                        putinreplyMainConvertPatch(pData,hardLink[1],hardLink[0]) //sets up system for video converting (patch to reply adder for converter)
                        putinreplyMain(pData,"#R-Holder",hardLink[1],hardLink[0]) //main Post adder function
                        //console.log("hardLink[0],hardLink[1]",hardLink[1],hardLink[0])
                        
                        if (testing){ //The Help notes
                            console.log("(OBJECT -- -) Data: ", posts)
                            console.log("(PATH TEST 1)",posts.posts)
                            console.log("(PATH TEST 2) ", pData)
                            //console.log("(UPDA TEST 1) ", )
                        }
                    },
                    function(err)
                    {
                        console.log("(ERR -M) Failure - Error : ", err)
                        d3.selectAll("#heading-err *").remove()
                        d3.select("#heading-err").append("p").attr("id","heading-errs").text("Load failed - Check Console")
                    }
                ) 
        })
    }       
    //Other fuctions
        //sets up system for video converting (patch to reply adder for converter)
        function putinreplyMainConvertPatch(pData,Datalink,Pastlink) {
            //clean house
            d3.select("#CONbutton2").remove()
            //Input
            d3.select("#R-Holder *").remove()
        
            d3.select("#C-Holder")
                .append("div")
                .attr("class","ConvertBUTT")
                .attr("id","CONbutton2")
                .text("Video it")
                .on("click",function(){
                    //Video Starter
                        addLinkCodeHead() //moves code linkes from body.
                    
                        d3.selectAll("body *").remove() //clean House
                   
                        var VidConfigs = videoPageInfoGetter(pData,Datalink,Pastlink) //Getting Video Configs
                        
                        if (testing){ //The Help notes
                            console.log(VidConfigs)
                        }
                //Starting main system
                TMSVidMain(VidConfigs)          
        })
    }                 
        //main Post adder function
        function putinreplyMain(pData,where,Datalink,Pastlink) {
            
                d3.selectAll((where+" *")).remove() 
            
            var BASELINK = "https://cors-anywhere.herokuapp.com/"
                
            d3.select(where)
                .append("div")
                .selectAll("span")
                .data(pData)
                .enter()
                .append("div")
                .attr("class","threads_icon post")
                .attr("id",function(aData){return "P" + aData.idnum + aData.chp})
                .html(function(aData){return aData.com})
            console.log("putinreplyMain",Datalink,Pastlink)
            putInreplysMedia(pData,Pastlink) //Add in media
            putInreplys(pData,Datalink,Pastlink) //Add in replys             
        }
        //main Post Media adder function
        function putInreplysMedia(pData,Pastlink) {
            var sizefix = 3
            pData.forEach(function(aData){
                if(aData.ext == ".jpg"){ 
                    d3.select("#P" + aData.idnum + aData.chp)
                    .append("p")
                    .append("img")
                    .attr("src",function(aData){return ("http://i.4cdn.org/"+ Pastlink +"/"+aData.tim+aData.ext)})
                    .attr("alt","test")
                    .attr("height",(aData.h)/sizefix)
                    .attr("width",(aData.w)/sizefix)     
                }
               if(aData.ext == ".png"){
                    d3.select("#P" + aData.idnum + aData.chp)
                    .append("p")
                    .append("img")
                    .attr("src",function(aData){return ("http://i.4cdn.org/"+ Pastlink +"/"+aData.tim+aData.ext)})
                    .attr("alt","test")
                    .attr("height",(aData.h)/sizefix)
                    .attr("width",(aData.w)/sizefix)  
                }
               if(aData.ext == ".gif"){
                    // 
                    d3.select("#P" + aData.idnum + aData.chp)
                    .append("p")
                    .append("img")
                    .attr("src",function(aData){return ("http://i.4cdn.org/"+ Pastlink +"/"+aData.tim+aData.ext)})
                    .attr("alt","test")
                    .attr("height",(aData.h)/sizefix)
                    .attr("width",(aData.w)/sizefix)  
                }
                if(aData.ext == ".webm"){
                    d3.select("#P" + aData.idnum + aData.chp)
                    .append("p")
                    .append("video")
                    .attr("height",(aData.h)/sizefix)
                    .attr("width",(aData.w)/sizefix)
                    .attr("autoplay","")
                    .text("Your browser does not support the video tag.")
                    .append("source")
                    .attr("src",function(aData){return ("http://i.4cdn.org/"+ Pastlink +"/"+aData.tim+aData.ext)})
                    .attr("type","video/webm")
                    
                } 
                
            }) 
            
            
            
         } 
        //main Post adder tool, used in main function
        function putInreplys(pData,Datalink,Pastlink) {      
            pData.forEach(function(element){
                if(!(element.replieCount == undefined)){
                    //element.replies = [] **********************************************************
                }
                if (element.replies.length > 0){  
                    d3.select("#P"+element.idnum + element.chp)
                        .append("div")
                        .selectAll("span")
                        .data(element.replies)
                        .enter()
                        .append("div")
                        .attr("class","threads_icon post reply")
                        .attr("id",function(element){return "P" + element.idnum + element.chp})
                        .html(function(aData){return aData.com})
                    putInreplysMedia(element.replies,Pastlink)
                    putInreplys(element.replies,Datalink,Pastlink)

                }
                if (!(element.filename == undefined)){ 
                    d3.select("#P"+element.idnum + element.chp)
                    .append("div")
                }
            });
        }       
        //adds thread intel to top of page, an in console
        function addconvertInfo(ProcessType,threadlink,postslink,REALLINK) {
            //('http://boards.4channel.org/','').split('/thread/');
            //console.log("---------------------------------- call remove")
            d3.selectAll("#heading-banner *").remove() 

            d3.select("#heading-banner")
                .append("h1")
                .attr("class","heading-banner_ConvertIntel")
                .attr("class","heading-banner_ConvertIntel_part")
                .text(ProcessType+" Data Promise (for: "+threadlink+"-"+postslink+")")

            //note
            console.log("----------------------------------")
            console.log("(PROCESS -) "+ProcessType+" Data Promise")

            //Server File Link
            var FILELink = ("(FILE - FR) *** FILELINK TO USE (for: "+threadlink+"-"+postslink+"): "+threadlink+postslink+"posts.json")
            console.log(FILELink)
            addconvertInfoHelper("FILELINK",(threadlink+postslink+"posts.json"))

            //JSON Link
            var JSONLink = ("(JSON - FR) *** JSONLINK TO USE (for: "+threadlink+"-"+postslink+"): " + REALLINK ) 
            console.log(JSONLink)
            addconvertInfoHelper("JSONLINK",(REALLINK))

            //Wed Link
            var WEDLLink = ("(LINK - FR) *** REALLINK TO USE (for: "+threadlink+"-"+postslink+"): http://boards.4channel.org/"+threadlink+"/thread/"+postslink)
            console.log(WEDLLink)
            addconvertInfoHelper("REALLINK",("http://boards.4channel.org/"+threadlink+"/thread/"+postslink))

            var NotConverter = ProcessType.localeCompare("Converter")

            //console.log(NotConverter)

            if (NotConverter == 1){
                d3.select("#heading-banner")
                    .append("p")
                    .attr("class","heading-banner_ConvertIntel_part")
                    .attr("id","Convert")
                    .text("Convert Here: ")
                    .append("a")
                    .attr("href","convert.html")
                    .attr("target","_blank")
                    .attr("rel","noopener noreferrer")
                    .text("Convert Page")
            }
        }
        //thread intel adding tool, used in main function 
        function addconvertInfoHelper(idt,LLink){
        d3.select("#heading-banner")
            .append("p")
            .attr("class","heading-banner_ConvertIntel_part")
            .attr("id",("Intel_part"+idt))
            .text(idt+" TO USE :")
            .append("a")
            .attr("href",LLink)
            .attr("target","_blank")
            .attr("rel","noopener noreferrer")
            .text(LLink)       
        }         
        //Gets post and puts them with thire replys
        var postConverter = function(data,Datalink,Pastlink) {
            console.log(data,Datalink,Pastlink)
            var mainholder = {}
            mainholder.mainindex = 0
            mainholder.mainwordc = 0
            var ans = []
            var Hnums = []
            var ccplayer = 0
            //console.log("************************", data)
      
            data.forEach(function(aPost) {
                ccplayer = ccplayer + 1
                var level = 0
                var currPost = {}
                    currPost.no = aPost.no
                    currPost.idnum = aPost.no
                    currPost.chp = "W"
                    currPost.now = aPost.now
                    currPost.name = aPost.name
                    currPost.replieCount = aPost.replies
                    currPost.com = aPost.com
                    currPost.sub = aPost.sub
                    currPost.level = level
                    currPost.replies = []
                    //image update
                    currPost.filename = aPost.filename
                    currPost.ext = aPost.ext
                    currPost.tim = aPost.tim
                    currPost.semantic_url = aPost.semantic_url
                    currPost.fsize = aPost.fsize
                    currPost.tn_w = aPost.tn_w
                    currPost.tn_h = aPost.tn_h
                    currPost.w = aPost.w
                    currPost.h = aPost.h
                    //video Update
                    currPost.Datalink = Datalink
                    currPost.Pastlink = Pastlink
                    currPost.olddata = null
                    currPost.oldi = null
                    currPost.used = false
                    currPost.verimage = false
                    currPost.totalL = data.length
                    currPost.playCC = ((ccplayer%5)==0)
                    //MassProduction Update
                    currPost.wordcount = countWords(aPost.com)
                    currPost.fullindex = mainholder.mainindex
                    currPost.fullwc = mainholder.mainwordc + countWords(aPost.com)
                    mainholder.mainindex = mainholder.mainindex + 1
                    mainholder.mainwordc = mainholder.mainwordc + countWords(aPost.com)
                
                var hi = true
               
                var getReplys = function(data,lookingFor,replyBox,level,oldcode,oldplace,ccplayer,mainholder) {
                   data.forEach(function(onePost,i){ 
                        ccplayer = ccplayer +1 
                        //console.log("--onePost.com", onePost.com)
                        if (onePost.com == undefined){
                            if (!(onePost.filename == undefined))
                            {onePost.com = ("TMS Console - 'UNPROTECTED IMAGE FILE' File Name:", onePost.filename)
                            }else{
                            onePost.com = ("TMS Console - 'UNPROTECTED IMAGE FILE' File Name: CAN NOT LOCATE") 
                            }
                        }
                        var check = onePost.com.includes('<a href') //this means it is a reply of some sort
                        //console.log(" -- is reply of some sort",check)
                        if(check){ //if it is a reply of some sort
                            var find = onePost.com.includes(lookingFor) //checks if it is a rely for curr post
                            //console.log(" -- //checks if it is a rely for curr post" , find)
                            if(find){
                                //onePost.com = onePost.com.replace('<a href="p'+aPost.no+'" class="quotelink">&gt;&gt;'+aPost.no+'</a>')
                                level = level + 1
                                //console.log(find,level,"REPLY TO:",lookingFor,"-------",onePost.no," - :",onePost.com);
                                var thePost = {}// create post OBject
                                    thePost.no = onePost.no
                                    thePost.idnum = onePost.no
                                    thePost.chp = oldcode
                                    if((occurrences(onePost.com,'<a href')) >= 2){
                                        //console.log(onePost.com)
                                        Hnums.push(onePost.no)
                                        //console.log("Hnums",Hnums)
                                        var codehelper = 0
                                        codehelper = countInArray(Hnums,onePost.no)
                                        if(codehelper > 0){
                                            thePost.idnum = (onePost.no + "CH" + codehelper)
                                            thePost.chp = ("CH" + codehelper)
                                            //console.log("CH" + codehelper)
                                        }
                                    } 
                                    //thePost.idnum = onePost.no
                                    //nums.push(thePost.no)
                                    thePost.now = onePost.now
                                    thePost.name = onePost.name
                                    thePost.replieCount = onePost.replies
                                    thePost.com = onePost.com
                                    thePost.sub = onePost.sub
                                    thePost.level = level
                                    thePost.replies = []
                                    //image update
                                    thePost.filename = onePost.filename
                                    thePost.ext = onePost.ext
                                    thePost.tim = onePost.tim
                                    thePost.semantic_url = onePost.semantic_url
                                    thePost.fsize = onePost.fsize
                                    thePost.tn_w = onePost.tn_w
                                    thePost.tn_h = onePost.tn_h
                                    thePost.w = onePost.w
                                    thePost.h = onePost.h
                                    //video Update
                                    thePost.Datalink = Datalink
                                    thePost.Pastlink = Pastlink
                                    thePost.olddata = oldplace
                                    thePost.oldi = i
                                    thePost.used = false
                                    thePost.verimage = false
                                    thePost.totalL = data.length
                                    thePost.playCC = ((ccplayer%5)==0)
                                    //MassProduction Update
                                    thePost.wordcount = countWords(aPost.com)
                                    thePost.fullindex = mainholder.mainindex
                                    thePost.fullwc = mainholder.mainwordc + countWords(onePost.com)
                                    mainholder.mainindex = mainholder.mainindex + 1
                                    mainholder.mainwordc = mainholder.mainwordc + countWords(onePost.com)
                                
                                var postnum = []
                                mainindex = getReplys(data,thePost.no,thePost.replies,(level),thePost.chp,replyBox,ccplayer,mainholder)//check for replys
                                level = level - 1
                                replyBox.push(thePost)
                                    
                            }
                            
                        }
   
                    })
                return mainholder     
                }
                
                //console.log("NOT <a href in it (IS A MAIN COM ? = -- > )", !aPost.com.includes('<a href'))
                //var postnum = []
                //console.log(aPost)
                if (aPost.com == undefined){
                    aPost.com = "Not Undefined"
                    if (!(aPost.filename == undefined))
                    {aPost.com = ("TMS Console - 'UNPROTECTED IMAGE FILE' File Name:", aPost.filename)
                    }else{
                    aPost.com = ("TMS Console - 'UNPROTECTED IMAGE FILE' File Name: CAN NOT LOCATE") 
                    }
   
                }
                if (!aPost.com.includes('<a href')){
                    mainholder = getReplys(data,currPost.no,currPost.replies,level,"W",ans,ccplayer,mainholder)
                    ans.push(currPost)
                }
            })   
            return ans;
        }   
    //helper fuctions
        //Get the Word Count
        function countWords(str) {
            if (str == undefined){
                str = ""
            }
            return str.trim().split(/\s+/).length;
        }
        //forces health sleep in code
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        //finds how many time a subString occurrences in string 
        function occurrences(string, subString, allowOverlapping) {

            string += "";
            subString += "";
            if (subString.length <= 0) return (string.length + 1);

            var n = 0,
                pos = 0,
                step = allowOverlapping ? 1 : subString.length;

            while (true) {
                pos = string.indexOf(subString, pos);
                if (pos >= 0) {
                    ++n;
                    pos += step;
                } else break;
            }
            return n;
        }
        //returns a count of how many times somethings comes up in an array
        function countInArray(array, what) {
        var count = 0;
        for (var i = 0; i < array.length; i++) {
            if (array[i] === what) {
                count++;
            }
        }
        return count;
        }
        function countInArraycom(array, what) {
        var count = 0;
        for (var i = 0; i < array.length; i++) {
            if (array[i].com === what) {
                count++;
            }
        }
        return count;
        }
        //returns seachs and retures if object is found in array, of how many times somethings comes up in an array
        function searchStringInArray (str, strArray) {
        for (var j=0; j<strArray.length; j++) {
            if (strArray[j].com.match(str)) return j;
        }
        return -1;
    }
    // All video final Stufff
        // All video Helper stuff
        //adds link to java code in head
        function addLinkCodeHead(){
            //Links to code
            d3.select("head").append("script").attr("src", "https://d3js.org/d3.v5.min.js")
            //d3.select("head").append("link").attr("href", "style.css").attr("rel","stylesheet").attr("type","text/css")
            d3.select("head").append("script").attr("type","text/javascript").attr("src","mcscript.js")
            d3.select("head").append("link").attr("href", "video.css").attr("rel","stylesheet").attr("type","text/css")
            d3.select("head").append("link").attr("href", "mcscript.css").attr("rel","stylesheet").attr("type","text/css")
            
            
            d3.select("head").append("script").attr("src", "/js/jquery-1.2.6.min.js").attr("language","JavaScript").attr("type","text/javascript")
            
            d3.select("head").append("script").attr("src","http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js")
            d3.select("head").append("script").attr("src","http://cdnjs.cloudflare.com/ajax/libs/materialize/0.95.1/js/materialize.min.js")
            
            
            d3.select("head").append("script").attr("src", "/js/jquery-ui-personalized-1.5.2.packed.js").attr("language","JavaScript").attr("type","text/javascript")
            d3.select("head").append("script").attr("src", "/js/sprinkle.js").attr("language","JavaScript").attr("type","text/javascript")
            
            d3.select("head").append("script").attr("src", "https://d3plus.org/js/d3.js")
            d3.select("head").append("script").attr("src", "https://d3plus.org/js/d3plus.js")
            
            
        }
        //adds link to java code in body, removes it from head
        function addLinkCodeBody(){
            //Links to code
            d3.selectAll("head *").remove()
            d3.select("body").append("script").attr("src", "https://d3js.org/d3.v5.min.js")
            d3.select("body").append("link").attr("href", "mcstyle.css").attr("rel","stylesheet").attr("type","text/css")
            d3.select("body").append("script").attr("type","text/javascript").attr("src","script.js")
        }
        //Gets configs for video
        function videoPageInfoGetter(pData,Datalink,Pastlink){
        
            //Adds Start button - in speak_button_holder
            d3.select("body")
            .append("div")
            .attr("id","speak_button_holder")
            .append("button")
            .attr("id","speak")
            .text("Start Button")
            
            //Adds text area - in Video_text_holder
            d3.select("body")
            .append("div")
            .attr("id","text_holder")
            .append("p")
            .text("Hit Submit then start")
            .attr("id","TEMPtext_holder")
            
            d3.select("#text_holder")
            .append("svg")
            .attr("id","svg_Video_holder")
            
            //Adds configs area - in configs_form_holder
            d3.select("body")
            .append("div")
            .attr("id","configs_form_holder")
            
            //Adds Configs Submit button
            d3.select("#configs_form_holder")
            .append("input")
            .attr("class","configs_form_question")
            .attr("type","submit")
            .attr("id","pGetSUBMIT")
            
            
            
            var configs = {}
            var configsNames = []
            //(name,low,high,stand,configsNames)
            
            
            newConfigHelperSetter("autoOrManuel",0,1,1,configsNames)
            newConfigHelperSetter("SVGwidth",0,4000,1920,configsNames)
            newConfigHelperSetter("SVGheight",0,4000,1080,configsNames)
            newConfigHelperSetter("SVGmulit",0,2,1.5,configsNames)
            newConfigHelperSetter("SVGBackgroundborder_stroke_width",0,200,50,configsNames)
            
            var theRAndOne = 0 + Math.floor(Math.random() * 6) 
            
            newConfigHelperSetter("BackGr",0,10,5,configsNames)
            newConfigHelperSetter("SpeakRate",0,2.1,0.97,configsNames)
            newConfigHelperSetter("SpeakType",0,10,5,configsNames)
            newConfigHelperSetter("BackgroundMusicLevel",0,1,0,configsNames)
            newConfigHelperSetter("vidLength",0,40,28,configsNames)
            newConfigHelperSetter("vidCCWspace",0,4000,280,configsNames)
            
             
            var imagelistresult;
            var imagelist = []
            imagelist = checkimages(pData,Datalink,Pastlink,imagelist)
            console.log(imagelist)
            imagelist.then(function(result) {
                
                if (pData[0].com == undefined){
                    pData[0].com = " MOD: no words IDK this post is probably just a pic, take a look"
                }
                
                imagelistresult = result
                //console.log(pData[0])
                //console.log(imagelistresult) 
                
                //<input type="text" id="fname" name="fname"><br>
                d3.select("#configs_form_holder")
                    .append("p")
                    .attr("class","configs_form_question_base")
                    .attr("id",("pGetpdata1"))
                    .text("Top Post Comment" + " Put it in ")
                    .append("input")
                    .attr("class","configs_form_box")
                    .attr("id",("inputGettextOne"))
                    .attr("type","text")
                    .attr("name",("ConfigtextOne"))
                    .attr("value",pData[0].com)
                
                
                
                
                
                for (i = 0; i < configsNames.length; i++){newConfigHelper("#configs_form_holder",configsNames[i].name,configsNames[i].min,configsNames[i].max,configsNames[i].fab)}
           
                //adds to configs
                d3.select("#pGetSUBMIT").on("click",function (e){
                    
                    for (i = 0; i < configsNames.length; i++) {configs[configsNames[i].name] = newConfigHelperGetter(configsNames[i].name)}

                    for (i = 0; i < imagelistresult.length; i++) {
                        //console.log("imagelistresult",result[i]);
                        var namedata = document.getElementById(("inputidforimage"+result[i]));
                        //console.log("namedata",namedata.value);
                        if(namedata.value == 0){checkimagesver(pData,result[i])}
                        
                       
                        
                    }
                    //Print to console
                    //console.log("configs",configs);
                    
                   pData[0].com = document.getElementById("inputGettextOne").value;
                    configs["ALLDATA"] = pData
                    
                })
            })
            
            
           
            //configs["ALLDATA"] = pData
            return configs 
        }
        //checked images are aloud to pase
        async function checkimagesver(pData,nums){
            await sleep(1)
            for (i = 0; i < pData.length; i++) {
                if(pData[i].replies.length > 0 ){
                    checkimagesver(pData[i].replies,nums)
                }
                if(pData[i].no == nums){
                pData[i].verimage = true
                pData[i].verimageLINK = "http://i.4cdn.org/"+ pData[i].Pastlink +"/"+pData[i].tim+pData[i].ext    
                //console.log("http://is2.4chan.org/"+ pData[i].Pastlink +"/"+pData[i].tim+pData[i].ext);   
                }
           }
        }    
        //adding the images to be checked
        async function checkimages(pData,Datalink,Pastlink,imagelist){
            //console.log(pData) 
            await sleep(1)
            for (i = 0; i < pData.length; i++) {
                if(pData[i].replies.length > 0 ){
                    //console.log(pData[i].replies) 
                    checkimages(pData[i].replies,Datalink,Pastlink,imagelist)
                }
                if (pData[i].filename != undefined){
                    
                    imagelist.push(pData[i].no)
                    
                    d3.select("#configs_form_holder")
                    .append("p")
                    .attr("class","configs_form_question image_ver")
                    .attr("id","idforimage"+pData[i].no)
                    .text("Confirm this image is ok : (0 = Yes || 1 = NO)")
                    .append("input")
                    .attr("class","configs_form_box")
                    .attr("id","inputidforimage"+pData[i].no)
                    .attr("type","number")
                    .attr("name","congifforimage"+pData[i].no)
                    .attr("max",1)
                    .attr("min",0)
                    .attr("value",0)
                    if(pData[i].ext != ".webm"){
                        d3.select("#idforimage"+pData[i].no)
                        .append("img")
                        .attr("src",mediaGetter(pData[i],Datalink,Pastlink))
                        .attr("height",pData[i].h/5)
                        .attr("width",pData[i].w/5)
                       //<img src="smiley.gif" alt="Smiley face" height="42" width="42"> 
                    }else{
                        d3.select("#idforimage"+pData[i].no)
                        .append("video")
                        .attr("height",pData[i].h/5)
                        .attr("width",pData[i].w/5)
                        .attr("autoplay","")
                        .text("Your browser does not support the video tag.")
                        .append("source")
                        .attr("src",function(aData){return ("http://i.4cdn.org/"+ pData[i].Pastlink +"/"+pData.tim+pData.ext)})
                        .attr("type","video/webm")
                    }
                }
            }
          return imagelist 
        }
        //Gets links for media
        function mediaGetter(aData,Datalink,Pastlink){
                //console.log(aData)
                var imageLink = "http://i.4cdn.org/"+ aData.Pastlink +"/"+aData.tim+aData.ext 
                aData.imageLink = imageLink 
        return imageLink
        }
        //configs Setter helper function
        function newConfigHelperSetter(name,min,max,fab,configsNames){ 
            var oneconfigs = {}
                oneconfigs.name = name
                oneconfigs.min = min
                oneconfigs.max = max
                oneconfigs.fab = fab
            configsNames.push(oneconfigs)
        }    
        //configs Getter helper function
        function newConfigHelperGetter(name){
            var namedata = document.getElementById(("inputGet"+name));
            //console.log(name,namedata.value);
            return Number(namedata.value)
        }                
        //Gets the config numbers
        function newConfigHelper(placeid,questid,max,min,fab){ 
            d3.select(placeid)
            .append("p")
            .attr("class","configs_form_question")
            .attr("id",("pGet"+questid))
            .text(questid + " - Quantity (between "+max+" and "+min+"): ")
            .append("input")
            .attr("class","configs_form_box")
            .attr("id",("inputGet"+questid))
            .attr("type","number")
            .attr("name",("Config"+questid))
            .attr("max",max)
            .attr("min",min)
            .attr("value",fab)
          }  
    
    //The End Game, the goal of this whole thing
    async function TMSVidMain(VidConfigs){
    //(top) - TMSVidMain(Data,VidConfigs)
        var pData = VidConfigs.ALLDATA
        //main if state
        if ('speechSynthesis' in window) {
        d3.select('#speak').on("click",async function (){
            //helpers
                //resume the speech
                function resumeInfinity() {
                            var timeoutResumeInfinity
                            //window.speechSynthesis.pause();
                            window.speechSynthesis.resume();
                            //console.log('resume')
                            clearTimeout(timeoutResumeInfinity);
                            clearTimeout(timeoutResumeInfinity);
                            clearTimeout(timeoutResumeInfinity);
                            clearTimeout(timeoutResumeInfinity);
                            timeoutResumeInfinity = setTimeout(resumeInfinity,6000);
                        //https://bugs.chromium.org/p/chromium/issues/detail?id=335907
                        setTimeout(function() {
                          speechSynthesis.pause();
                          speechSynthesis.resume();
                        }, 10000);
                    }
                //remove HTML from texts
                function strip(html){
                       var doc = new DOMParser().parseFromString(html, 'text/html');
                       return doc.body.textContent || "";
                }
            
            //tools    
                //Uses configs for video
                function videoPageSetUp() {
                    d3.selectAll("#speak_button_holder *").remove()
                    d3.selectAll("#configs_form_holder *").remove()
                }
                //fuction to fix spoken and seen text
                function textfixer(text){
                        if (text == undefined){
                            text = " MOD: no words IDK this post is probably just a pic, take a look"
                        }
                        
                        var Rtext = text.match('link">.*</a>')
                        if (Rtext != null){
                            text = text.replace(Rtext,'link"></a>')
                        }
                    
                        text = strip(text)
                        //text = text.replace(">>",'*Dead Link*')
                        text = text.replace(">",' Quote,: ')
                        text = text.replace("<",'(')
                    
                        text = text.split("<").join(" (");
                        text = text.split(">").join(") ");
                    
                        text = text.replace("alabama hot pocket",'*Colloquy Cancer*')
                        text = text.replace("alaskan pipeline",'*Colloquy Cancer*')
                        text = text.replace("blue waffle",'*Colloquy Cancer*')
                        text = text.replace("goldenshower",'*Colloquy Cancer*')
                        text = text.replace("golliwog",'*Colloquy Cancer*')
                        text = text.replace("2 girls 1 cup",'*Colloquy Cancer*')
                    
                        text = text.replace("4chan",'this place')
                        text = text.replace("weed",'that leafy green stuff')
                    
                        //text = text.replace("thread","colume")
                    
                        text = text.replace("goldenshower",'*Colloquy Cancer*')
                        text = text.replace("alabama hot pocket",'*Colloquy Cancer*')
                        text = text.replace("alaskan pipeline",'*Colloquy Cancer*')
                        text = text.replace("blue waffle",'*Colloquy Cancer*')
                        text = text.replace("goldenshower",'*Colloquy Cancer*')
                    
                        
                    

                        var badwords = ["2 girls 1 cup","ass"," a_s_s"," a55"," ahole"," anal"," anus"," arse"," azz"," bitch"," bastard"," blowjob"," c.o.c.k."," cock"," cum"," cunt"," dick"," douch", " dyke", " ejacul"," fag"," fack"," fagot"," fanny"," fcuk"," fuck",' fuk', ' fuker', ' fukker', ' fukkers', ' fukkin', ' fuks', ' fukwhit', ' fukwit', ' fuq', ' fux', ' fux0r', ' fvck', ' fxck',' gangbang', ' gang-bang', ' gangbang', ' gagbang', ' gash', " gassy ass"," jack"," japs"," kunt",' negro', ' neonazi', " nig nog", ' nigaboo', ' nigg3r', ' nigg4h', ' nigga', ' niggah', ' niggas', ' niggaz', ' nigger', ' niggers', ' niggle', ' niglet', " nig-nog", ' nimphomania', ' nimrod', ' ninny', ' ninnyhammer', ' nipple', ' nipples', ' nob', " nob jokey", ' nobhead', ' nobjocky', ' nobjokey', ' nonce'," pussy"," p.u.s.s.y."," retard"," scat"," queer"," shit"," tard"," twat"," wank"," whore"," fgot"];

                        for (var i = 0; i < badwords.length; i++) {
                            var pat = badwords[i].slice(0, -1).replace(/([a-z])/g, "$1[^a-z]*") + badwords[i].slice(-1);
                            var rxp = new RegExp(pat, "ig");
                            //console.log(badwords[i][0]) 
                            text = text.replace(rxp, " "+badwords[i][1]+"*");
                        }
                    
                        var fullcount = text.length
                        
                        var numcount = text.replace(/[^0-9]/g,"").length
                        
                        var per = numcount/fullcount
                        
                        //console.log(per)
                    
                        if (per > 0.80){
                            text = " MOD: this comment was " +((per*100).toFixed(2))+" percent numbers so i took that s*it out"
                        }
                    
                        
                    

                        return text  
                }
                //raw speaking tool
                function rawspeaktool(Stext,i,r){
                        var timeoutResumeInfinity
                        var deferred = $.Deferred();
                        
                        var allVoices = window.speechSynthesis.getVoices();
                        var tester = new SpeechSynthesisUtterance(); 
                            tester.voice = allVoices[5]
                            tester.rate = 1
                            tester.pitch = 1
                            tester.text = Stext;
                            tester.onstart = function(e) {
                                resumeInfinity();
                            }
                            tester.onend = function(e) {
                                //console.log(" --- Test "+(i)+ "."+(r)+" Finished in " + (event.elapsedTime) + " millseconds.");
                                //console.log(" --- Test "+(i)+ "."+(r)+" Finished")
                                clearTimeout(timeoutResumeInfinity);
                                deferred.resolve(i);   
                            };   

                        //console.log("Before") 
                        window.speechSynthesis.cancel();
                        window.speechSynthesis.speak(tester); 
                        //console.log("After") 
                        return deferred.promise();
                    }
           //Main tools
                //managing page event for genareal comment
                function pageEdittest(text,i,oldpData,oldi,VidConfigs){
                    
//                        if (testing){ //The Help notes
//                            console.log(text,i,oldpData,oldi,VidConfigs)
//                        }
                        
                    
                        //clean up
                        d3.select("#svg_Video_holder").remove()
                        d3.selectAll("#TEMPtext_holder").remove()
                        d3.selectAll("#submedHoler *").remove()
                        
                        //creates svg and gives it background
                        d3.select("#text_holder").html(videoBackgroundArtPicker(2,VidConfigs))
                        
                        SVGobject = d3.select("#svg_Video_holder")
                            videoPostArt(SVGobject,VidConfigs,text,i,oldpData,oldi)
                    
                        d3.select("#svg_Video_holder")
                        .append("p")
                        .attr("class","Tester_text")
                        .text("This is the Level :" + text[i].level)

                        d3.select("#svg_Video_holder")
                        .append("p")
                        .attr("class","Tester_text")
                        .text("This is the index :" + (i+1) +"/"+text.length)
                    }
            
                //managing page event for intro comment
                async function intropage(text,i,VidConfigs){
                    if (testing){ //The Help notes
                            // console.log(text,i,oldpData,oldi,VidConfigs)
                            console.log(text,i,[],[],VidConfigs)
                        }
                        
                    
                        //clean up
                        d3.select("#svg_Video_holder").remove()
                        d3.selectAll("#TEMPtext_holder").remove()
                        d3.selectAll("#myAudioholder").remove()
                        d3.selectAll("#configs_form_holder *").remove()
                        
                        //creates svg and gives it background
                        d3.select("#text_holder").html(videoBackgroundArtPicker(2,VidConfigs))
                        
                        SVGobject = d3.select("#svg_Video_holder")
                                videoPostArt(SVGobject,VidConfigs,text,i,null, null)
                    
                        d3.select("#svg_Video_holder")
                        .append("p")
                        .attr("class","Tester_text")
                        .text("This is the Level :" + text[i].level)

                        d3.select("#svg_Video_holder")
                        .append("p")
                        .attr("class","Tester_text")
                        .text("This is the index :" + (i+1) +"/"+text.length)
                    
                        


                        d3.select("body")
                            .append("div")
                            .attr("id","myAudioholder")


                        d3.select("#myAudioholder")
                            .append("div")
                            .append("audio")
                            .attr("autoplay","")
                            .attr("id","myAudio")
                            .attr("src",function(){
                                var theOne = 0 + Math.floor(Math.random() * 6) 
                                var ans = 'Poke&Chill.mp3'
                                if (theOne == 0){
                                    ans = "Poke&Chill.mp3"
                                }else if(theOne == 1){
                                    ans = "ChillBeatsLofiHipHopSC.mp3"
                                }else if(theOne == 2){
                                    ans = "themainbackv1.mp3"
                                }
                            return ans})
                            .attr("type","audio/mp3")
                    
                    document.getElementById("myAudio").volume = VidConfigs.BackgroundMusicLevel;
                    document.getElementById("myAudio").play
                    
                }
            
                async function intropageOFF(text,i,VidConfigs){
                    if (testing){ //The Help notes
                            //console.log("intro")
                        }
                        
                        //clean up
                        d3.select("#svg_Video_holder").remove()
                        d3.selectAll("#TEMPtext_holder").remove()
                        d3.selectAll("#configs_form_holder *").remove()
                        
                        //creates svg and gives it backgroun
                        //<svg id="svg_Video_holder" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin:auto;background:#222222;display:block;z-index:1;position:relative;margin-left: 0;" width="1920" height="1080" preserveAspectRatio="xMidYMid" viewBox="0 0 -1080 1920"></svg>
                        d3.select("#text_holder")
                            .append("svg")
                            .attr("id","svg_Video_holder")
                            .attr("style","margin:auto;background:rgb(255,255,255);display:block;z-index:1;position:relative;margin-left: 0;")
                            .attr("width",VidConfigs.SVGwidth)
                            .attr("height",VidConfigs.SVGheight)
                            .attr("preserveAspectRatio","xMidYMid")
                            .attr("viewBox","0 0 -1080 1920")
                        d3.select("#svg_Video_holder")
                            .append("g")
                            .attr("id","g_Video_holder_back")
                    
                    //<audio src="/music.mp4" autoplay>
                        d3.select("#configs_form_holder")
                        .append("div")
                        .append("audio")
                        .attr("autoplay","")
                        .attr("id","myAudio")
                        .attr("src","themainbackv1.mp3")
                        .attr("type","audio/mp3")
                    
                        var Mspaceer = 50
                        var xi;
                        for (xi = 0; xi < VidConfigs.SVGwidth; xi = xi + (VidConfigs.SVGwidth/Mspaceer)) {
                            var yi;
                            for (yi = 0; yi < VidConfigs.SVGheight; yi = yi + (VidConfigs.SVGheight/Mspaceer)) {
                            //<rect width="300" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
                            d3.select("#g_Video_holder_back")
                                .append("rect")
                                .attr("id",("grid"+xi+"A"+yi).replace(".", 'p').replace(".", 'p'))
                                .attr("width",(VidConfigs.SVGwidth/Mspaceer))
                                .attr("height",(VidConfigs.SVGheight/Mspaceer))
                                .attr("x",xi)
                                .attr("y",yi)
                                .attr("style",function (e){return "fill:rgb("+(50 + Math.floor(Math.random() * 51))+","+(0 + Math.floor(Math.random() * 10))+","+(105 + Math.floor(Math.random() * 51))+");stroke-width:1;stroke:rgb(0,0,0)"})
                                
                            d3.select(("#grid"+xi+"A"+yi).replace(".", 'p').replace(".", 'p'))    
                                .transition()
                                .duration(6000)
                                .style("fill", "#222222")
                                .style("stroke-width", "0")
                                //await sleep(00001)
                            }
                            await sleep(00001)
                        }
                        
                        //console.log(("#grid"+xm+"A"+ym).replace(".", 'p').replace(".", 'p'));
                        //await sleep(4000) //10 sec
                    
                    //{return "fill:rgb("+ Math.floor(Math.random() * 256)+","+ Math.floor(Math.random() * 256)+","+ Math.floor(Math.random() * 256)+");stroke-width:0;stroke:rgb(0,0,0)"})
                    
                        SVGobject = d3.select("#svg_Video_holder")
                            videoPostArt(SVGobject,VidConfigs,text,i,null,null)
                    
                        d3.select("#svg_Video_holder")
                        .append("p")
                        .attr("class","Tester_text")
                        .text("This is the Level :" + text[i].level)

                        d3.select("#svg_Video_holder")
                        .append("p")
                        .attr("class","Tester_text")
                        .text("This is the index :" + (i+1) +"/"+text.length)
                    
                        
                    
                    
                        
                        
                    document.getElementById("myAudio").volume = 0.45;
                    document.getElementById("myAudio").play
                    
                     
                        
                }
            
                async function endinfopage(tester,pData,i,oldpData,oldi,repeatRejecttion,updateVars,VidConfigs){
                        var deferred = $.Deferred();
                        //console.log('endinfopage _________________ S' )
                        await sleep(0001)
                        //console.log('endinfopage _________________ F' )
                        deferred.resolve(i);
                    return deferred.promise();

                }
                
                async function endinfocard(tester,pData,i,oldpData,oldi,repeatRejecttion,updateVars,VidConfigs){
                        var deferred = $.Deferred();
                        var Mspaceer = 50
                        d3.select("#svg_Video_holder")
                                .append("g")
                                .attr("id","Video_intro_back")
                        var xi;
                        for (xi = 0; xi < VidConfigs.SVGwidth; xi = xi + (VidConfigs.SVGwidth/Mspaceer)) {
                           var yi;
                        for (yi = 0; yi < VidConfigs.SVGheight; yi = yi + (VidConfigs.SVGheight/Mspaceer)) {
                            //<rect width="300" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
                            d3.select("#Video_intro_back")
                                .append("rect")
                                .attr("width",(VidConfigs.SVGwidth/Mspaceer))
                                .attr("height",(VidConfigs.SVGheight/Mspaceer))
                                .attr("x",xi)
                                .attr("y",yi)
                                .attr("style",function (e){return "fill:rgb("+ Math.floor(Math.random() * 256)+","+ Math.floor(Math.random() * 256)+","+ Math.floor(Math.random() * 256)+");stroke-width:0;stroke:rgb(0,0,0)"})
                                }
                            }  
                        
                        SVGobject = d3.select("#svg_Video_holder")
                    
                        var mainX = 50 + Math.floor(Math.random() * 101)
                        var mainY = 100 + Math.floor(Math.random() * 301)
                        
                        await sleep(1)
                        //console.log (mainX,mainY,50,100)
                        videoPostArt(SVGobject,VidConfigs,pData,0,null,null) 
                    
                        //console.log('endinfocard _________________ s' )
                        //await sleep(19000)
                        //console.log('endinfocard _________________ F' )
                        deferred.resolve(i);
                    return deferred.promise();
                }
                
                async function setLagpage(tester,pData,i,oldpData,oldi,repeatRejecttion,updateVars,VidConfigs){
                        var deferred = $.Deferred();
                        await sleep(1000)
                        d3.select("#text_holder")
                            .append("svg")
                            .attr("id","svg_Video_holder")
                            .attr("style","margin:auto;background:none;display:block;z-index:1;position:relative;margin-left: 0;stroke-width:4;stroke:rgb(0,0,0)")
                            .attr("width",VidConfigs.SVGwidth)
                            .attr("height",VidConfigs.SVGheight)
                            .attr("preserveAspectRatio","xMidYMid")
                            .attr("viewBox","0 0 -1080 1920")
                    d3.select("#TEMPtext_holder").remove()
                    
                   if (VidConfigs.autoOrManuel == 0) {
                            var i;
                            for (i = 0; i < 10; i++) {
                                //<text x="40" y="35" class="heavy">Big</text>font-size="16"
                                d3.select("#svg_Video_holder")
                                .attr("id","svg_Video_holder")
                                .attr("style","margin:auto;background:none;display:block;z-index:1;position:relative;margin-left: 0;stroke-width:4;stroke:rgb(0,0,0)")
                                .attr("width",VidConfigs.SVGwidth)
                                .attr("height",VidConfigs.SVGheight)
                                .attr("preserveAspectRatio","xMidYMid")
                                .attr("viewBox","0 0 -1080 1920")
                                .append("rect")
                                .attr("width",VidConfigs.SVGwidth)
                                .attr("height",VidConfigs.SVGheight)
                                .attr("style","fill:rgb(255,255,255);stroke-width:30;stroke:rgb(0,0,0)")
                                d3.select("#svg_Video_holder")
                                .append("text")
                                .attr("x",100)
                                .attr("y",605)
                                .attr("class","heavy")
                                .attr("font-size",600)
                                .text(function(){return i+"/10"})
                                await sleep(1000)
                                d3.selectAll("#svg_Video_holder *").remove()
                                deferred.resolve(i);
                        
                        }
                   }else{
                        d3.select("#svg_Video_holder")
                            .attr("id","svg_Video_holder")
                            .attr("style","margin:auto;background:none;display:block;z-index:1;position:relative;margin-left: 0;stroke-width:4;stroke:rgb(0,0,0)")
                            .attr("width",VidConfigs.SVGwidth)
                            .attr("height",VidConfigs.SVGheight)
                            .attr("preserveAspectRatio","xMidYMid")
                            .attr("viewBox","0 0 -1080 1920")
                            .append("rect")
                            .attr("width",VidConfigs.SVGwidth)
                            .attr("height",VidConfigs.SVGheight)
                            .attr("style","fill:rgb(255,255,255);stroke-width:30;stroke:rgb(0,0,0)")
                        d3.select("#configs_form_holder")
                                .append("div")
                                .append("button")
                                .attr("id","vidstra")
                                .style("font-size","44px")
                                .style("bottom","1040px")
                                .style("right","44px")
                                .text("Start vid")
                       
                        d3.select("#vidstra").on("click",
                        function(){
                            deferred.resolve(i);
                        })
                   }
                       
                        //console.log('setLagpage _________________ S' )
                        //await sleep(2000)
                        //console.log('setLagpage _________________ F' )
                        
                    return deferred.promise();
                }
                
            
                //the cut card
                async function pageCutCard(text,i,oldpData,oldi,VidConfigs){
                    var deferred = $.Deferred();
                        //console.log(text,i,oldpData,oldi,VidConfigs)
                        d3.selectAll("#svg_Video_holder *").remove()
                        d3.selectAll("#TEMPtext_holder").remove() 
                        
                        Vidoeobject = d3.select("#speak_button_holder")
                        
                        d3.select("#speak_button_holder")
                        .append("video")
                        .attr("height",VidConfigs.SVGheight)
                        .attr("width",VidConfigs.SVGwidth)
                        .attr("autoplay","")
                        .text("Your browser does not support the video tag.")
                        .append("source")
                        .attr("src","Cut_card_act.mp4")
                        .attr("type","video/mp4")
                    
                        await sleep(3000)
                        d3.selectAll("#speak_button_holder *").remove()
                        deferred.resolve(i);
                    
                    return deferred.promise();
                    }
            
            //video art
                //video art mains
                  
                //Sets up the post for the video
                    async function videoPostArt(SVGobject,VidConfigs,text,i,oldpData,oldi){ 
                        
                        //For Word art - https://maketext.io/
                        //console.log(VidConfigs)
                        //add to video
                        SVGobject
                            .append("g")
                            .attr("id","PostArtGroup")
                            .style("stroke-width", "0")
                        //Giveing it a namef
                        PostArtGroup = d3.select("#PostArtGroup");
                        
                        var mainX = 50 + Math.floor(Math.random() * 101)
                        var mainY = 100 + Math.floor(Math.random() * 301)
                        
                        //console.log (mainX,mainY,50,100)
                        videopostsetup(mainX,mainY,SVGobject,VidConfigs,text,i,oldpData,oldi)   
                        
                        //videoloadbar(50,100,SVGobject,VidConfigs,text,i,oldpData,oldi)
                        
                    }  
            //video art tools
                //videoBackgroundArtPicker
                function videoBackgroundArtPicker(theOne,VidConfigs){
                    //For Backgrounds - https://loading.io/pattern/
                    //https://www.browserling.com/tools/remove-all-whitespace
                    //https://www.textfixer.com/tools/remove-line-breaks.php
                    theOne = VidConfigs.BackGr
                    //theOne = 3
                    var ans = FireflyPatternA_Background(VidConfigs,'id="svg_Video_holder"',";margin-left: 0;")
                    if (theOne == 1){
                        ans = MaseLikePatternC_Background(VidConfigs,'id="svg_Video_holder"',";margin-left: 0;")
                    }else if(theOne == 2){
                        ans = FireflyPatternA_Background(VidConfigs,'id="svg_Video_holder"',";margin-left: 0;")
                    }else if(theOne == 3){
                        ans = FireflyPatternA_Background(VidConfigs,'id="svg_Video_holder"',";margin-left: 0;")
                    }else if(theOne == 4){
                        ans = RainPatternA_Background(VidConfigs,'id="svg_Video_holder"',";margin-left: 0;")
                    }else if(theOne == 5){
                        ans = custom_Background(VidConfigs,'id="svg_Video_holder"',";margin-left: 0;")
                    }
                    
                    return ans  
                }
            
                //videopostsetup
                function videopostsetup(mainX,mainY,SVGobject,VidConfigs,text,i,oldpData,oldi){
                    //console.log(VidConfigs)
                    var mainW = VidConfigs.SVGwidth
                    var mainH = VidConfigs.SVGheight
                    
                    //Comment Back Box
                    var boxW = (mainW * 0.885) - (mainX * 0.75) + Math.floor(Math.random() * (mainW * 0.026125))
                    
                    //console.log(boxW,(mainW * 0.885) - (mainX * 0.75))
                    var boxH = 365 // rewriten later
                    PostArtGroup.append("rect").attr("width",boxW).attr("height",boxH).attr("x",mainX).attr("y",mainY)
                    .attr("id","PostArtGroupCommentBox").attr("text-anchor","middle")
                    .attr("style","fill:#222222;stroke:none;stroke-width:1;font-family: Verdana;")
                    
                    //adds in comment area before adding wraped text
                    if (oldpData == null){
                        PostArtGroup.append("text").attr("x",(mainX +(mainW * 0.0652))).attr("y",(mainY +(mainH * 0.0556)))
                        .attr("id","PostArtGroupRectText").attr("fill","white")
                        .attr("style","font-size: 40px; font-weight: lighter; color: white;");
                        //adding warped text
                         d3plus.textwrap().container(d3.select("#PostArtGroupRectText")).shape('square')
                        .width(boxW +(mainW*0.0521)).height(750).resize(false) // hard coded number here
                        .text(textfixer(text[i].com)).draw(); 
                    }
                    else{
                        PostArtGroup.append("text").attr("x",(mainX +(mainW * 0.0652))).attr("y",(mainY +(mainH * 0.0556)))
                        .attr("id","PostArtGroupRectText").attr("fill","white")
                        .attr("style","font-size: 30px; font-weight: lighter;")
                        //adding warped text
                        d3plus.textwrap().container(d3.select("#PostArtGroupRectText")).shape('square')
                        .width(boxW +(mainW*0.0521)).height(750).resize(false) // hard coded number here
                        .text(textfixer(text[i].com)).draw(); 
                    }
                    
                    
                    
                    //add arrows and box
                    //Arrow up
                    var tri1X = (mainX +(mainW * 0.0261));var tri1Y = ((mainY +(mainH * 0.0556)))//100,360
                    PostArtGroup.append("polygon").attr("x",tri1X).attr("y",tri1Y)
                    .attr("points",(" "+tri1X+","+tri1Y+" "+(tri1X + (mainW * 0.0156))+","+(tri1Y + (mainH * 0.0555))+" "+(tri1X - (mainW * 0.0156))+","+(tri1Y + (mainH * 0.0556))+" "))
                    .attr("style","fill:#FF8b60;stroke:none;stroke-width:1")
                    
                    //Comment line
                    PostArtGroup.append("rect").attr("width",(mainW * 0.0026)).attr("height",285)// hard coded number here
                    .attr("x",(tri1X + (mainW * 0.0261))).attr("y",(tri1Y - (mainH * 0.0278)))
                    .attr("id","PostArtGroupReplytextLine").attr("text-anchor","middle")
                    .attr("style","fill:#545452;stroke:none;stroke-width:1;font-family: Verdana;")
                               
                    //Arrow down
                    PostArtGroup.append("polygon").attr("x",tri1X).attr("y",tri1Y)
                    .attr("points",(" "+tri1X+","+(tri1Y + (mainH * 0.1574))+" "+(tri1X + (mainW * 0.0156))+","+((tri1Y + (mainH * 0.1574)) - (mainH * 0.0555))+" "+(tri1X - (mainW * 0.0156))+","+((tri1Y + (mainH * 0.1574)) - (mainH * 0.0556))+" "))
                    .attr("style","fill:#C6C6C6;stroke:none;stroke-width:1")
                      
                    //comment heading area
                    PostArtGroup.append("text").attr("width",(mainW * 0.0026)).attr("height",200)// hard coded number here
                    .attr("x",(tri1X + (mainW * 0.0261) + (mainW * 0.0078))).attr("y",(tri1Y + (mainH * 0.0278) + (mainH * 0.0185)))
                    .attr("class","PostArtGroupPosttext").attr("id","PostArtGroupPosttextHolder")
                    PostArtGroupHeadText = d3.select("#PostArtGroupPosttextHolder");
                    //comment heading text
                    //Posted By                 // hard coded number here
                    ArtAdderTSPAN((mainW * 0.0026),200,(tri1X + (mainW * 0.0261) + (mainW * 0.0078)),(tri1Y - (mainH * 0.0278) + (mainH * 0.0185)), 
                    "PostArtGroupPosttext","PostArtGroupPosttext1","fill:#A5A4A4;stroke:none;stroke-width:1","Posted By:",PostArtGroupHeadText)
                            //SVGgroupArtAdderTE(width,height,x,y,classer,ider,style,text,Grouper)
                    //Name                      // hard coded number here
                    ArtAdderTSPAN((mainW * 0.0026),200,(tri1X + (mainW * 0.0261) + (mainW * 0.0078)),(tri1Y - (mainH * 0.0278) + (mainH * 0.0185)),
                    "PostArtGroupPosttext","PostArtGroupPosttext2","fill:#149EF0;stroke:none;stroke-width:1",text[i].name,PostArtGroupHeadText)
                            //SVGgroupArtAdderTE(width,height,x,y,classer,ider,style,text,Grouper)     
                    if (text[i].sub != undefined){
                    //Sub title lable           // hard coded number here
                    ArtAdderTSPAN((mainW * 0.0026),200,(tri1X + (mainW * 0.0261) + (mainW * 0.0078)),(tri1Y - (mainH * 0.0278) + (mainH * 0.0185)),
                    "PostArtGroupPosttext","PostArtGroupPosttext3","fill:#A5A4A4;stroke:none;stroke-width:1", "Sub:",PostArtGroupHeadText)
                            //SVGgroupArtAdderTE(width,height,x,y,classer,ider,style,text,Grouper)
                    //Sub title
                    ArtAdderTSPAN((mainW * 0.0026),200,(tri1X + (mainW * 0.0261) + (mainW * 0.0078)),(tri1Y - (mainH * 0.0278) + (mainH * 0.0185)),
                    "PostArtGroupPosttext","PostArtGroupPosttext4","fill:#3BCB56;stroke:none;stroke-width:1", text[i].sub,PostArtGroupHeadText)
                            //SVGgroupArtAdderTE(width,height,x,y,classer,ider,style,text,Grouper)
                    }else{
                        
                    //Comment numbers lable           // hard coded number here
                    ArtAdderTSPAN((mainW * 0.0026),200,(tri1X + (mainW * 0.0261) + (mainW * 0.0078)),(tri1Y - (mainH * 0.0278) + (mainH * 0.0185)),
                    "PostArtGroupPosttext","PostArtGroupPosttext3","fill:#A5A4A4;stroke:none;stroke-width:1", "No:",PostArtGroupHeadText)
                            //SVGgroupArtAdderTE(width,height,x,y,classer,ider,style,text,Grouper)
                    //Comment numbers           // hard coded number here
                    ArtAdderTSPAN((mainW * 0.0026),200,(tri1X + (mainW * 0.0261) + (mainW * 0.0078)),(tri1Y - (mainH * 0.0278) + (mainH * 0.0185)),
                    "PostArtGroupPosttext","PostArtGroupPosttext4","fill:#ED001C;stroke:none;stroke-width:1", text[i].no,PostArtGroupHeadText)
                            //SVGgroupArtAdderTE(width,height,x,y,classer,ider,style,text,Grouper)  
                    }   
                    //Countter lable
                    ArtAdderTSPAN((mainW * 0.0026),200,(tri1X + (mainW * 0.0261) + (mainW * 0.0078)),(tri1Y - (mainH * 0.0278) + (mainH * 0.0185)),
                    "PostArtGroupPosttext","PostArtGroupPosttext5","fill:#A5A4A4;stroke:none;stroke-width:1", "Comment:",PostArtGroupHeadText)
                            //SVGgroupArtAdderTE(width,height,x,y,classer,ider,style,text,Grouper)
                    //Countter number
                    ArtAdderTSPAN((mainW * 0.0026),200,(tri1X + (mainW * 0.0261) + (mainW * 0.0078)),(tri1Y - (mainH * 0.0278) + (mainH * 0.0185)),
                    "PostArtGroupPosttext","PostArtGroupPosttext6","fill:#FF8700;stroke:none;stroke-width:1",((i+1)+"/"+ text.length),PostArtGroupHeadText)
                            //SVGgroupArtAdderTE(width,height,x,y,classer,ider,style,text,Grouper)
                   
                    //Date and time
                    PostArtGroupRectText = d3.select("#PostArtGroupRectText");
                    PostArtGroupRectText .append("tspan").attr("x",(mainX +(mainW * 0.0652))).attr("dy",(mainH * 0.037037))
                    .attr("class","PostArtGroupPosttext").attr("id","PostArtGroupPosttext7")
                    .attr("style","fill:#A5A4A4;stroke:none;stroke-width:1").text(text[i].now)
                            
                    PostArtGroupRectText.append("tspan").attr("x",(mainX +(mainW * 0.0652))).attr("dy",(mainH * 0.037039))
                    .attr("class","PostArtGroupPosttext").attr("id","PostArtGroupPosttext8")
                    .attr("style","fill:#A5A4A4;stroke:none;stroke-width:1").text("Comment Reply Level:" + text[i].level)
                    
                    //Redo the font based in typ of comment
                    if(oldpData != null){
                        d3.select("#PostArtGroupPosttext7").attr("style","fill:#A5A4A4;stroke:none;stroke-width:1;font-size: 20px;")
                        .attr("dy",(mainH * 0.027037))
                        
                        d3.select("#PostArtGroupPosttext8").attr("style","fill:#A5A4A4;stroke:none;stroke-width:1;font-size: 20px;")
                        .attr("dy",(mainH * 0.027037))
                    }
                    
                    //Redo the height
                    var PostArtGroupRectText = document.getElementById('PostArtGroupRectText');
                    var bBox = PostArtGroupRectText.getBBox();
                    var NewHei = (bBox.height + (mainH * 0.037039 * 2.09))
                    var NawHei = (bBox.height+(mainH*0.037039*2.09)-((tri1Y-(mainH*0.0278))/2.1))
                    
                    if ((bBox.height + (mainH * 0.037039 * 2.09)) < 240 ){
                       NewHei = 240 
                    }
                    
                    //Setting Heights
                    //console.log("pass")
                    d3.select("#PostArtGroupCommentBox").attr("height",NewHei)
                    d3.select("#PostArtGroupReplytextLine").attr("height",(bBox.height+(mainH*0.037039*2.09)-((tri1Y-(mainH*0.0278))/2.1)))
                    
                    
                    
                    
                    if (text[i].verimage){
                        //aspect ratios: aspectRatio = ( oldWidth / oldHeight )
                        //newWidth = ( newHeight * aspectRatio ) 
                        //newHeight = ( newWidth / aspectRatio )
                        
                        var imageRatio = text[i].w/text[i].h
                        
                        var PostArtGroupRectText = document.getElementById('PostArtGroupCommentBox');
                        var TBox = PostArtGroupRectText.getBBox();
                        
                        
                        
                        var boundXLe = (mainW * 0.533889) 
                        var boundXRi = mainW - (mainW * 0.0533889)
                        var boundYup = TBox.y + TBox.height - (mainH * 0.1021) + (Math.floor(Math.random() * (mainH * 0.023221)))
                        var boundYdo = mainH - (mainH * 0.013221)
                        
                        //PostArtGroup.append("rect").attr("width",(boundXRi-boundXLe)).attr("height",(boundYdo-boundYup)).attr("x",boundXLe).attr("y",boundYup)
                        //.attr("id","PicBoundsTest").attr("text-anchor","middle")
                        //.attr("style","fill:white;stroke:none;stroke-width:1;font-family: Verdana;")
                        
                        
                        //console.log(boundXLe,boundXRi,boundYup,boundYdo)
                        
                        var locYim = boundYdo - boundYup + (Math.floor(Math.random() * (mainH * 0.032221)))
                            //boundYup + (Math.floor(Math.random() * (mainH * 0.032221)))
                        var locXim = boundXLe + (Math.floor(Math.random() * (mainW * 0.018221)))
                       
                        var locHim = boundYdo - (mainH - locYim) - (Math.floor(Math.random() * (mainH * 0.018221)))
                        var locWim = (locHim * imageRatio)
                        
                        //console.log(locHim,locWim)
                        
                        var runimage = true
                       
                        var i;
                        
                        for(i = 0; i < 0 ; i++){
                           if (((locXim + locWim) >boundXRi)||((locYim + locHim)>boundYdo)) {
                                locHim = locHim * 0.995
                                locWim = (locHim * imageRatio)
                                //console.log(locHim,locWim)
                            }else{
                                runimage = false
                                i = i + 1
                            }
                        }   
                            
                        
                        
                        //console.log(locXim, locYim);
                        
                        if(text[i].ext != ".webm"){
                            d3.select("#configs_form_holder")
                            .append("div")
                            .attr("id","submedHoler")
                            .append("img")
                            .attr("src",function(aData){return ("http://i.4cdn.org/"+text[i].Pastlink +"/"+text[i].tim+text[i].ext)})
                            .attr("height",locHim)//(mainH * 0.0278)
                            .attr("width",locWim)//(mainW * 0.0026)
                            .attr("style","position: relative;top: -"+locYim +"px;left: "+  locXim +"px; z-index:9;")
                            
                        }else{
                            
                            d3.select("#configs_form_holder")
                            .append("div")
                            .attr("id","submedHoler")
                            .append("video")
                            .attr("height",locHim)
                            .attr("width",locWim)
                            .attr("style","position: relative;top: -"+locYim +"px;left: "+  locXim +"px; z-index:9;")
                            .attr("autoplay","")
                            .text("Your browser does not support the video tag.")
                            .append("source")
                            .attr("src",function(aData){return ("http://i.4cdn.org/"+ text[i].Pastlink +"/"+text[i].tim+text[i].ext)})
                            .attr("type","video/webm")
                            
                    
                                }
                            }
                }
            
                //videoloadbar
                function videoloadbar(mainX,mainY,SVGobject,VidConfigs,text,i,oldpData,oldi){
                    var mainW = VidConfigs.SVGwidth
                    var mainH = VidConfigs.SVGheight
                    
                    //
                }
            //video art helpeer
                function ArtAdderTSPAN(width,height,x,y,classer,ider,style,text,Grouper){
                Grouper
                .append("tspan")
                .attr("width",width)
                .attr("height",height)
                .attr("dx",10)
                .attr("y",y)
                .attr("class",classer)
                .attr("id",ider)
                .attr("style",style)
                .text(text)
            }
            //video assets
                //video Background Art used videoBackgroundArtPicker function ; For Backgrounds - https://loading.io/pattern/ 
                function MaseLikePatternA_Background(VidConfigs,ider,adder){
                    //width="'+VidConfigs.SVGwidth+'" height="'+VidConfigs.SVGheight+'" preserveAspectRatio="xMidYMid" viewBox="0 0 -'+VidConfigs.SVGheight+' '+VidConfigs.SVGwidth+'">
                    return '<svg '+ider+' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin:auto;background:#222222;display:block;z-index:1;position:relative'+adder+'" width="'+VidConfigs.SVGwidth+'" height="'+VidConfigs.SVGheight+'" preserveAspectRatio="xMidYMid" viewBox="0 0 -'+VidConfigs.SVGheight+' '+VidConfigs.SVGwidth+'"><defs><pattern id="pid-0.5065629926574429" x="0" y="0" width="128" height="128" patternUnits="userSpaceOnUse"><g transform="scale(0.5)"><defs><g id="pat-0.9833584770815218"><polyline fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#a5a4a4" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points=" -3,-2 16.5,15.5 31.5,0.5 63.5,32.5 48.5,47.5 31.5,32.5 -0.5,64.5 16.5,79.5 31.5,64.5 47.5,79.5 95.5,32.5 80.5,15.5 95.5,0.5 127.5,32.5 48.5,111.5 31.5,96.5 -0.5,128.5 16.5,143.5 31.5,127.5 63.5,160.5 80.5,143.5 63.5,128.5 159.5,32.5 144.5,15.5 159.5,0.5 175.5,16.5 192,0 208,16 224,0 256,32 240,48 224,32 207.501,48.501 223.5,64.5 207.5,80.5 176.5,47.5 144.5,80.5 159.5,96.5 175.5,80.5 191.5,96.5 159.5,128.5 127.5,96.5 95.5,127.5 111.5,143.5 127.5,127.5 175.5,176.5 159.5,192.5 127.5,160.5 111.5,176.5 95.5,160.5 63.5,192.5 31.5,160.5 16.5,175.5 31.999,191.483 0,224 16,240 32,225 64,256 80,240 64,224 79.667,208.333 95.5,192.5 111.5,207.5 95.5,224.5 111.5,239.5 127.5,256.5 143.5,240.5 127.5,224.5 143.5,208.5 175.5,240.5 191.5,224.5 175.5,208.5 207.5,176.5 224,160 208,144 191.998,160.998 175.5,144.5 207.5,112.5 240,80 256,96 223.5,128.5 256,160 239.5,176.5 256,192 240,208 224,192 207.5,208.5 223.5,224.5 207.5,240.5 223.5,256.5 240,240 259,259" stroke-dasharray="70.3405269077846 31.60226571219308 70.3405269077846 31.60226571219308 70.3405269077846 31.60226571219308 70.3405269077846 31.60226571219308 70.3405269077846 31.60226571219308 70.3405269077846 31.60226571219308 70.3405269077846 31.60226571219308 70.3405269077846 31.60226571219308 70.3405269077846 31.60226571219308 70.3405269077846 31.60226571219308 70.3405269077846 31.60226571219308 70.3405269077846 31.60226571219308 70.3405269077846 31.60226571219308 70.3405269077846 31.60226571219308 70.3405269077846 31.60226571219308 70.3405269077846 31.60226571219308 70.3405269077846 31.60226571219308 70.3405269077846 31.60226571219308 70.3405269077846 31.60226571219308 70.3405269077846 31.60226571219308 70.3405269077846 31.60226571219308 70.3405269077846 31.60226571219308 70.3405269077846 31.60226571219308 70.3405269077846 31.60226571219308 70.3405269077846 31.60226571219308 70.3405269077846 31.60226571219308 70.3405269077846 31.60226571219308 70.3405269077846 31.60226571219308"><animate attributeName="stroke-dashoffset" keyTimes="0;1" values="0;101.94279261997768" repeatCount="indefinite" dur="1.5151515151515151s"></animate></polyline></g></defs><use xlink:href="#pat-0.9833584770815218" x="0" y="0"></use><use xlink:href="#pat-0.9833584770815218" x="-256" y="0"></use><use xlink:href="#pat-0.9833584770815218" x="256" y="0"></use><use xlink:href="#pat-0.9833584770815218" x="0" y="-256"></use><use xlink:href="#pat-0.9833584770815218" x="0" y="256"></use></g></pattern></defs><rect x="0" y="0" width="'+VidConfigs.SVGwidth+'" height="'+VidConfigs.SVGheight+'" fill="url(#pid-0.5065629926574429)"></rect></svg>'
                }
                function MaseLikePatternB_Background(VidConfigs,ider,adder){
                    //width="'+VidConfigs.SVGwidth+'" height="'+VidConfigs.SVGheight+'" preserveAspectRatio="xMidYMid" viewBox="0 0 -'+VidConfigs.SVGheight+' '+VidConfigs.SVGwidth+'">
                    return '<svg '+ider+' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin:auto;background:#222222;display:block;z-index:1;position:relative'+adder+'" width="'+VidConfigs.SVGwidth+'" height="'+VidConfigs.SVGheight+'" preserveAspectRatio="xMidYMid" viewBox="0 0 -'+VidConfigs.SVGheight+' '+VidConfigs.SVGwidth+'"><defs><pattern id="pid-0.8617823405425016" x="0" y="0" width="261.12" height="261.12" patternUnits="userSpaceOnUse"><g transform="scale(1.02)"><defs><g id="pat-0.9098463719290082"><polyline fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#515151" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points=" -3,-2 16.5,15.5 31.5,0.5 63.5,32.5 48.5,47.5 31.5,32.5 -0.5,64.5 16.5,79.5 31.5,64.5 47.5,79.5 95.5,32.5 80.5,15.5 95.5,0.5 127.5,32.5 48.5,111.5 31.5,96.5 -0.5,128.5 16.5,143.5 31.5,127.5 63.5,160.5 80.5,143.5 63.5,128.5 159.5,32.5 144.5,15.5 159.5,0.5 175.5,16.5 192,0 208,16 224,0 256,32 240,48 224,32 207.501,48.501 223.5,64.5 207.5,80.5 176.5,47.5 144.5,80.5 159.5,96.5 175.5,80.5 191.5,96.5 159.5,128.5 127.5,96.5 95.5,127.5 111.5,143.5 127.5,127.5 175.5,176.5 159.5,192.5 127.5,160.5 111.5,176.5 95.5,160.5 63.5,192.5 31.5,160.5 16.5,175.5 31.999,191.483 0,224 16,240 32,225 64,256 80,240 64,224 79.667,208.333 95.5,192.5 111.5,207.5 95.5,224.5 111.5,239.5 127.5,256.5 143.5,240.5 127.5,224.5 143.5,208.5 175.5,240.5 191.5,224.5 175.5,208.5 207.5,176.5 224,160 208,144 191.998,160.998 175.5,144.5 207.5,112.5 240,80 256,96 223.5,128.5 256,160 239.5,176.5 256,192 240,208 224,192 207.5,208.5 223.5,224.5 207.5,240.5 223.5,256.5 240,240 259,259" stroke-dasharray="74.21435302734375 20.93225341796875 74.21435302734375 20.93225341796875 74.21435302734375 20.93225341796875 74.21435302734375 20.93225341796875 74.21435302734375 20.93225341796875 74.21435302734375 20.93225341796875 74.21435302734375 20.93225341796875 74.21435302734375 20.93225341796875 74.21435302734375 20.93225341796875 74.21435302734375 20.93225341796875 74.21435302734375 20.93225341796875 74.21435302734375 20.93225341796875 74.21435302734375 20.93225341796875 74.21435302734375 20.93225341796875 74.21435302734375 20.93225341796875 74.21435302734375 20.93225341796875 74.21435302734375 20.93225341796875 74.21435302734375 20.93225341796875 74.21435302734375 20.93225341796875 74.21435302734375 20.93225341796875 74.21435302734375 20.93225341796875 74.21435302734375 20.93225341796875 74.21435302734375 20.93225341796875 74.21435302734375 20.93225341796875 74.21435302734375 20.93225341796875 74.21435302734375 20.93225341796875 74.21435302734375 20.93225341796875 74.21435302734375 20.93225341796875 74.21435302734375 20.93225341796875 74.21435302734375 20.93225341796875"><animate attributeName="stroke-dashoffset" keyTimes="0;1" values="0;95.1466064453125" repeatCount="indefinite" dur="1.5151515151515151s"></animate></polyline></g></defs><use xlink:href="#pat-0.9098463719290082" x="0" y="0"></use><use xlink:href="#pat-0.9098463719290082" x="-256" y="0"></use><use xlink:href="#pat-0.9098463719290082" x="256" y="0"></use><use xlink:href="#pat-0.9098463719290082" x="0" y="-256"></use><use xlink:href="#pat-0.9098463719290082" x="0" y="256"></use></g></pattern></defs><rect x="0" y="0" width="'+VidConfigs.SVGwidth+'" height="'+VidConfigs.SVGheight+'" fill="url(#pid-0.8617823405425016)"></rect></svg>'
                }
                function MaseLikePatternC_Background(VidConfigs,ider,adder){
                    //width="'+VidConfigs.SVGwidth+'" height="'+VidConfigs.SVGheight+'" preserveAspectRatio="xMidYMid" viewBox="0 0 -'+VidConfigs.SVGheight+' '+VidConfigs.SVGwidth+'">
                    return '<svg '+ider+' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin:auto;background:#222222;display:block;z-index:1;position:relative'+adder+'" width="'+VidConfigs.SVGwidth+'" height="'+VidConfigs.SVGheight+'" preserveAspectRatio="xMidYMid" viewBox="0 0 -'+VidConfigs.SVGheight+' '+VidConfigs.SVGwidth+'"><defs> <pattern id="pid-0.7861150321209958" x="0" y="0" width="360.96000000000004" height="360.96000000000004" patternUnits="userSpaceOnUse"> <g transform="scale(1.4100000000000001)"><defs><g id="pat-0.2321887380297638"><polyline fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#ffe200" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points=" -3,-2 16.5,15.5 31.5,0.5 63.5,32.5 48.5,47.5 31.5,32.5 -0.5,64.5 16.5,79.5 31.5,64.5 47.5,79.5 95.5,32.5 80.5,15.5 95.5,0.5 127.5,32.5 48.5,111.5 31.5,96.5 -0.5,128.5 16.5,143.5 31.5,127.5 63.5,160.5 80.5,143.5 63.5,128.5 159.5,32.5 144.5,15.5 159.5,0.5 175.5,16.5 192,0 208,16 224,0 256,32 240,48 224,32 207.501,48.501 223.5,64.5 207.5,80.5 176.5,47.5 144.5,80.5 159.5,96.5 175.5,80.5 191.5,96.5 159.5,128.5 127.5,96.5 95.5,127.5 111.5,143.5 127.5,127.5 175.5,176.5 159.5,192.5 127.5,160.5 111.5,176.5 95.5,160.5 63.5,192.5 31.5,160.5 16.5,175.5 31.999,191.483 0,224 16,240 32,225 64,256 80,240 64,224 79.667,208.333 95.5,192.5 111.5,207.5 95.5,224.5 111.5,239.5 127.5,256.5 143.5,240.5 127.5,224.5 143.5,208.5 175.5,240.5 191.5,224.5 175.5,208.5 207.5,176.5 224,160 208,144 191.998,160.998 175.5,144.5 207.5,112.5 240,80 256,96 223.5,128.5 256,160 239.5,176.5 256,192 240,208 224,192 207.5,208.5 223.5,224.5 207.5,240.5 223.5,256.5 240,240 259,259" stroke-dasharray="90.82176069779828 168.66898415305397 90.82176069779828 168.66898415305397 90.82176069779828 168.66898415305397 90.82176069779828 168.66898415305397 90.82176069779828 168.66898415305397 90.82176069779828 168.66898415305397 90.82176069779828 168.66898415305397 90.82176069779828 168.66898415305397 90.82176069779828 168.66898415305397 90.82176069779828 168.66898415305397 90.82176069779828 168.66898415305397"> <animate attributeName="stroke-dashoffset" keyTimes="0;1" values="0;259.49074485085225" repeatCount="indefinite" dur="20s"></animate> </polyline></g></defs><use xlink:href="#pat-0.2321887380297638" x="0" y="0"></use><use xlink:href="#pat-0.2321887380297638" x="-256" y="0"></use><use xlink:href="#pat-0.2321887380297638" x="256" y="0"></use><use xlink:href="#pat-0.2321887380297638" x="0" y="-256"></use><use xlink:href="#pat-0.2321887380297638" x="0" y="256"></use></g></pattern></defs><rect x="0" y="0" width="'+VidConfigs.SVGwidth+'" height="'+VidConfigs.SVGheight+'" fill="url(#pid-0.7861150321209958)"></rect></svg>'    
                }
                function FireflyPatternA_Background(VidConfigs,ider,adder){
                    return '<svg '+ider+' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin:auto;background:#130f40;display:block;z-index:1;position:relative'+adder+'" width="'+VidConfigs.SVGwidth+'" height="'+VidConfigs.SVGheight+'" preserveAspectRatio="xMidYMid" viewBox="0 0 -'+VidConfigs.SVGheight+' '+VidConfigs.SVGwidth+'"><defs><pattern id="pid-0.7933990336988894" x="0" y="0" width="488.96000000000004" height="488.96000000000004" patternUnits="userSpaceOnUse"><g transform="scale(1.9100000000000001)"><g style="isolation:isolate"> <path id="ldp-firefly-b0544e6229286-0" d="M23.309 231.586 Q 21.223 233.303 18.43 233.909 T10.522 235.945 T1.34 239.32500000000002 T-3.295 242.797 T-6.8660000000000005 247.544 T-9.825000000000001 252.28300000000002 T-14.483 258.185 T-18.132 262.342" fill="none" stroke="none"></path>  <path id="ldp-firefly-b0544e6229286-1" d="M97.196 194.711 Q 99.83800000000001 193.09 102.908 192.303 T110.24600000000001 190.552 T120.218 190.537 T129.84 190.85 T137.493 191.435 T145.639 193.894 T155.161 194.165 T160.555 195.347" fill="none" stroke="none"></path>  <path id="ldp-firefly-b0544e6229286-2" d="M47.229 254.954 Q 45.699 252.162 45.949 248.717 T42.335 240.918 T41.01 233.398 T40.274 224.85 T37.055 215.924 T34.505 210.406 T32.663000000000004 205.367 T31.568 200.15800000000002" fill="none" stroke="none"></path>  <path id="ldp-firefly-b0544e6229286-3" d="M221.844 233.848 Q 221.656 231.13400000000001 219.838 228.79 T217.222 223.20600000000002 T214.66 218.435 T208.936 210.872 T203.803 206.147 T195.94400000000002 201.821 T188.991 196.717 T182.452 189.376" fill="none" stroke="none"></path>  <path id="ldp-firefly-b0544e6229286-4" d="M234.097 42.648 Q 237.872 43.135 241.703 42.331 T249.357 39.67 T255.734 38.64 T264.856 35.631 T270.23 32.872 T278.299 28.999000000000002 T284.967 25.560000000000002 T292.527 24.261" fill="none" stroke="none"></path>  <path id="ldp-firefly-b0544e6229286-5" d="M98.54 115.336 Q 98.727 112.399 100.389 109.748 T100.944 100.787 T102.526 94.014 T103.989 85.652 T106.781 77.58800000000001 T111.394 69.371 T116.77 61.76 T119.27 54.748000000000005" fill="none" stroke="none"></path>  <path id="ldp-firefly-b0544e6229286-6" d="M244.096 8.633000000000001 Q 241.22400000000002 4.756 238.80700000000002 0.561 T235.51 -3.598 T229.471 -9.187 T223.838 -14.722 T218.725 -21.35 T213.576 -26.801000000000002 T210.965 -31.565 T208.38400000000001 -39.567" fill="none" stroke="none"></path>  <path id="ldp-firefly-b0544e6229286-7" d="M215.59300000000002 116.73400000000001 Q 217.374 114.446 218.227 111.568 T220.273 105.311 T222.156 95.648 T223.114 89.465 T222.439 84.07900000000001 T218.685 75.20100000000001 T214.782 70.047 T212.464 65.386" fill="none" stroke="none"></path>  <path id="ldp-firefly-b0544e6229286-8" d="M139.15800000000002 203.77 Q 137.873 201.463 137.232 198.851 T135.55700000000002 193.877 T132.898 185.989 T131.803 178.91400000000002 T131.15200000000002 173.097 T130.762 165.169 T131.748 155.272 T130.567 147.223" fill="none" stroke="none"></path>  <path id="ldp-firefly-b0544e6229286-9" d="M52.047000000000004 212.541 Q 48.509 210.98600000000002 46.178000000000004 207.512 T38.071 203.23600000000002 T30.39 197.06900000000002 T25.464000000000002 194.75900000000001 T18.493000000000002 191.975 T12.036 189.936 T4.881 188.455 T-2.977 187.693" fill="none" stroke="none"></path>  <path id="ldp-firefly-b0544e6229286-10" d="M143.35 82.159 Q 146.939 85.447 149.693 89.542 T154.745 96.827 T158.52 100.81 T164.871 104.507 T170.262 107.309 T177.1 110.367 T185.564 113.14 T191.648 115.409" fill="none" stroke="none"></path>  <path id="ldp-firefly-b0544e6229286-11" d="M28.575 131.481 Q 29.616 128.859 29.082 125.86200000000001 T27.341 117.675 T26.356 110.021 T26.012 103.374 T26.836000000000002 96.765 T27.59 88.401 T26.587 80.287 T27.19 70.781" fill="none" stroke="none"></path>  <path id="ldp-firefly-b0544e6229286-12" d="M51.905 98.279 Q 48.741 99.257 46.165 101.584 T41.347 105.876 T33.963 109.476 T28.891000000000002 112.122 T20.194 113.768 T12.621 112.97500000000001 T4.898 110.911 T-0.591 109.921" fill="none" stroke="none"></path>  <path id="ldp-firefly-b0544e6229286-13" d="M32.753 77.49 Q 35.375 79.58 37.277 82.44200000000001 T41.116 90.318 T42.53 95.544 T43.78 102.39 T46.072 106.983 T52.355000000000004 113.755 T57.562000000000005 121.75 T60.754 127.977" fill="none" stroke="none"></path>  <path id="ldp-firefly-b0544e6229286-14" d="M203.175 105.668 Q 204.964 101.42 205.031 96.639 T205.742 89.055 T206.03300000000002 82.227 T204.82 72.504 T204.514 64.44800000000001 T205.928 58.794000000000004 T206.18800000000002 53.384 T206.02100000000002 45.022" fill="none" stroke="none"></path>  <path id="ldp-firefly-b0544e6229286-15" d="M177.377 172.514 Q 180.065 175.566 181.964 179.23 T187.80100000000002 183.90800000000002 T193.823 187.296 T198.121 189.982 T206.398 192.751 T215.73600000000002 193.489 T221.329 192.859 T230.803 191.832" fill="none" stroke="none"></path>  <path id="ldp-firefly-b0544e6229286-16" d="M206.741 53.963 Q 204.041 54.369 201.677 56.004 T192.948 58.056000000000004 T187.197 58.84 T179.965 61.262 T172.64000000000001 61.642 T163.172 64.452 T155.553 66.991 T148.621 71.467" fill="none" stroke="none"></path> <g transform="translate(-256 -256)"><circle cx="18.43" cy="233.909" r="4.75709" fill="#6f1e51" style="mix-blend-mode:screen"><animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-15.749292285791539s"></animate><animate attributeName="r" values="0;5.557421325780403;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-15.749292285791539s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-15.749292285791539s"><mpath xlink:href="#ldp-firefly-b0544e6229286-0"></mpath></animateMotion></circle></g><g transform="translate(-256 -256)"><circle cx="102.908" cy="192.303" r="3.67641" fill="#341f97" style="mix-blend-mode:screen"><animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-18.369829449511492s"></animate><animate attributeName="r" values="0;5.17510177047596;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-18.369829449511492s"></animate><animateMotion dur="20s" repeatCount="indefinite" begin="-18.369829449511492s"><mpath xlink:href="#ldp-firefly-b0544e6229286-1"></mpath></animateMotion></circle></g><g transform="translate(-256 -256)"><circle cx="45.949" cy="248.717" r="0.475094" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-19.40145683987894s"></animate> <animate attributeName="r" values="0;0.7274537660588036;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-19.40145683987894s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-19.40145683987894s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-2"></mpath> </animateMotion> </circle> </g><g transform="translate(-256 -256)"> <circle cx="219.838" cy="228.79" r="0.459436" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-2.75509308299986s"></animate> <animate attributeName="r" values="0;0.9842704546308516;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-2.75509308299986s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-2.75509308299986s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-3"></mpath> </animateMotion> </circle> </g><g transform="translate(-256 -256)"> <circle cx="241.703" cy="42.331" r="1.32211" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="10s" repeatCount="indefinite" begin="-12.20190167506801s"></animate> <animate attributeName="r" values="0;1.3287189862834077;0" keyTimes="0;0.1;1" dur="10s" repeatCount="indefinite" begin="-12.20190167506801s"></animate> <animateMotion dur="10s" repeatCount="indefinite" begin="-12.20190167506801s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-4"></mpath> </animateMotion> </circle> </g><g transform="translate(-256 -256)"> <circle cx="100.389" cy="109.748" r="0.522416" fill="#6f1e51" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-3.955656457314478s"></animate> <animate attributeName="r" values="0;5.861416943956405;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-3.955656457314478s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-3.955656457314478s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-5"></mpath> </animateMotion> </circle> </g><g transform="translate(-256 -256)"> <circle cx="238.80700000000002" cy="0.561" r="1.13027" fill="#6f1e51" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-8.225951733151055s"></animate> <animate attributeName="r" values="0;2.3136408103211448;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-8.225951733151055s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-8.225951733151055s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-6"></mpath> </animateMotion> </circle> </g><g transform="translate(-256 -256)"> <circle cx="218.227" cy="111.568" r="0.303511" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-16.98520442297242s"></animate> <animate attributeName="r" values="0;2.1716783962862594;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-16.98520442297242s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-16.98520442297242s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-7"></mpath> </animateMotion> </circle> </g><g transform="translate(-256 -256)"> <circle cx="137.232" cy="198.851" r="2.89795" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-7.3764019531903635s"></animate> <animate attributeName="r" values="0;4.5990802836186555;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-7.3764019531903635s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-7.3764019531903635s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-8"></mpath> </animateMotion> </circle> </g><g transform="translate(-256 -256)"> <circle cx="46.178000000000004" cy="207.512" r="3.0178" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-12.57521619427882s"></animate> <animate attributeName="r" values="0;3.449872447653375;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-12.57521619427882s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-12.57521619427882s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-9"></mpath> </animateMotion> </circle> </g><g transform="translate(-256 -256)"> <circle cx="149.693" cy="89.542" r="0.574498" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="10s" repeatCount="indefinite" begin="-6.424978703606312s"></animate> <animate attributeName="r" values="0;1.0926347709384001;0" keyTimes="0;0.1;1" dur="10s" repeatCount="indefinite" begin="-6.424978703606312s"></animate> <animateMotion dur="10s" repeatCount="indefinite" begin="-6.424978703606312s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-10"></mpath> </animateMotion> </circle> </g><g transform="translate(-256 -256)"> <circle cx="29.082" cy="125.86200000000001" r="0.118275" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-9.153987649368561s"></animate> <animate attributeName="r" values="0;1.0628157621195617;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-9.153987649368561s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-9.153987649368561s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-11"></mpath> </animateMotion> </circle> </g><g transform="translate(-256 -256)"> <circle cx="46.165" cy="101.584" r="2.66138" fill="#6f1e51" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-13.53359282239451s"></animate> <animate attributeName="r" values="0;3.722070029338975;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-13.53359282239451s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-13.53359282239451s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-12"></mpath> </animateMotion> </circle> </g><g transform="translate(-256 -256)"> <circle cx="37.277" cy="82.44200000000001" r="3.16205" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-19.720214847269254s"></animate> <animate attributeName="r" values="0;4.976606836178478;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-19.720214847269254s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-19.720214847269254s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-13"></mpath> </animateMotion> </circle> </g><g transform="translate(-256 -256)"> <circle cx="205.031" cy="96.639" r="1.71386" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-7.652693087476732s"></animate> <animate attributeName="r" values="0;2.934359223522618;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-7.652693087476732s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-7.652693087476732s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-14"></mpath> </animateMotion> </circle> </g><g transform="translate(-256 -256)"> <circle cx="181.964" cy="179.23" r="0.727112" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-19.148287593281527s"></animate> <animate attributeName="r" values="0;0.8166534139592536;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-19.148287593281527s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-19.148287593281527s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-15"></mpath> </animateMotion> </circle> </g><g transform="translate(-256 -256)"> <circle cx="201.677" cy="56.004" r="3.69621" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-18.896522581634127s"></animate> <animate attributeName="r" values="0;5.426480570047746;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-18.896522581634127s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-18.896522581634127s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-16"></mpath> </animateMotion> </circle> </g><g transform="translate(-256 0)"> <circle cx="18.43" cy="233.909" r="4.75709" fill="#6f1e51" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-15.749292285791539s"></animate> <animate attributeName="r" values="0;5.557421325780403;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-15.749292285791539s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-15.749292285791539s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-0"></mpath> </animateMotion> </circle> </g><g transform="translate(-256 0)"> <circle cx="102.908" cy="192.303" r="3.67641" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-18.369829449511492s"></animate> <animate attributeName="r" values="0;5.17510177047596;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-18.369829449511492s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-18.369829449511492s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-1"></mpath> </animateMotion> </circle> </g><g transform="translate(-256 0)"> <circle cx="45.949" cy="248.717" r="0.475094" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-19.40145683987894s"></animate> <animate attributeName="r" values="0;0.7274537660588036;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-19.40145683987894s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-19.40145683987894s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-2"></mpath> </animateMotion> </circle> </g><g transform="translate(-256 0)"> <circle cx="219.838" cy="228.79" r="0.459436" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-2.75509308299986s"></animate> <animate attributeName="r" values="0;0.9842704546308516;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-2.75509308299986s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-2.75509308299986s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-3"></mpath> </animateMotion> </circle> </g><g transform="translate(-256 0)"> <circle cx="241.703" cy="42.331" r="1.32211" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="10s" repeatCount="indefinite" begin="-12.20190167506801s"></animate> <animate attributeName="r" values="0;1.3287189862834077;0" keyTimes="0;0.1;1" dur="10s" repeatCount="indefinite" begin="-12.20190167506801s"></animate> <animateMotion dur="10s" repeatCount="indefinite" begin="-12.20190167506801s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-4"></mpath> </animateMotion> </circle> </g><g transform="translate(-256 0)"> <circle cx="100.389" cy="109.748" r="0.522416" fill="#6f1e51" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-3.955656457314478s"></animate> <animate attributeName="r" values="0;5.861416943956405;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-3.955656457314478s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-3.955656457314478s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-5"></mpath> </animateMotion> </circle> </g><g transform="translate(-256 0)"> <circle cx="238.80700000000002" cy="0.561" r="1.13027" fill="#6f1e51" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-8.225951733151055s"></animate> <animate attributeName="r" values="0;2.3136408103211448;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-8.225951733151055s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-8.225951733151055s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-6"></mpath> </animateMotion> </circle> </g><g transform="translate(-256 0)"> <circle cx="218.227" cy="111.568" r="0.303511" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-16.98520442297242s"></animate> <animate attributeName="r" values="0;2.1716783962862594;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-16.98520442297242s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-16.98520442297242s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-7"></mpath> </animateMotion> </circle> </g><g transform="translate(-256 0)"> <circle cx="137.232" cy="198.851" r="2.89795" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-7.3764019531903635s"></animate> <animate attributeName="r" values="0;4.5990802836186555;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-7.3764019531903635s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-7.3764019531903635s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-8"></mpath> </animateMotion> </circle> </g><g transform="translate(-256 0)"> <circle cx="46.178000000000004" cy="207.512" r="3.0178" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-12.57521619427882s"></animate> <animate attributeName="r" values="0;3.449872447653375;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-12.57521619427882s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-12.57521619427882s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-9"></mpath> </animateMotion> </circle> </g><g transform="translate(-256 0)"> <circle cx="149.693" cy="89.542" r="0.574498" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="10s" repeatCount="indefinite" begin="-6.424978703606312s"></animate> <animate attributeName="r" values="0;1.0926347709384001;0" keyTimes="0;0.1;1" dur="10s" repeatCount="indefinite" begin="-6.424978703606312s"></animate> <animateMotion dur="10s" repeatCount="indefinite" begin="-6.424978703606312s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-10"></mpath> </animateMotion> </circle> </g><g transform="translate(-256 0)"> <circle cx="29.082" cy="125.86200000000001" r="0.118275" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-9.153987649368561s"></animate> <animate attributeName="r" values="0;1.0628157621195617;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-9.153987649368561s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-9.153987649368561s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-11"></mpath> </animateMotion> </circle> </g><g transform="translate(-256 0)"> <circle cx="46.165" cy="101.584" r="2.66138" fill="#6f1e51" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-13.53359282239451s"></animate> <animate attributeName="r" values="0;3.722070029338975;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-13.53359282239451s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-13.53359282239451s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-12"></mpath> </animateMotion> </circle> </g><g transform="translate(-256 0)"> <circle cx="37.277" cy="82.44200000000001" r="3.16205" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-19.720214847269254s"></animate> <animate attributeName="r" values="0;4.976606836178478;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-19.720214847269254s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-19.720214847269254s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-13"></mpath> </animateMotion> </circle> </g><g transform="translate(-256 0)"> <circle cx="205.031" cy="96.639" r="1.71386" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-7.652693087476732s"></animate> <animate attributeName="r" values="0;2.934359223522618;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-7.652693087476732s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-7.652693087476732s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-14"></mpath> </animateMotion> </circle> </g><g transform="translate(-256 0)"> <circle cx="181.964" cy="179.23" r="0.727112" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-19.148287593281527s"></animate> <animate attributeName="r" values="0;0.8166534139592536;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-19.148287593281527s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-19.148287593281527s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-15"></mpath> </animateMotion> </circle> </g><g transform="translate(-256 0)"> <circle cx="201.677" cy="56.004" r="3.69621" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-18.896522581634127s"></animate> <animate attributeName="r" values="0;5.426480570047746;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-18.896522581634127s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-18.896522581634127s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-16"></mpath> </animateMotion> </circle> </g><g transform="translate(-256 256)"> <circle cx="18.43" cy="233.909" r="4.75709" fill="#6f1e51" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-15.749292285791539s"></animate> <animate attributeName="r" values="0;5.557421325780403;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-15.749292285791539s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-15.749292285791539s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-0"></mpath> </animateMotion> </circle> </g><g transform="translate(-256 256)"> <circle cx="102.908" cy="192.303" r="3.67641" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-18.369829449511492s"></animate> <animate attributeName="r" values="0;5.17510177047596;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-18.369829449511492s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-18.369829449511492s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-1"></mpath> </animateMotion> </circle> </g><g transform="translate(-256 256)"> <circle cx="45.949" cy="248.717" r="0.475094" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-19.40145683987894s"></animate> <animate attributeName="r" values="0;0.7274537660588036;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-19.40145683987894s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-19.40145683987894s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-2"></mpath> </animateMotion> </circle> </g><g transform="translate(-256 256)"> <circle cx="219.838" cy="228.79" r="0.459436" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-2.75509308299986s"></animate> <animate attributeName="r" values="0;0.9842704546308516;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-2.75509308299986s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-2.75509308299986s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-3"></mpath> </animateMotion> </circle> </g><g transform="translate(-256 256)"> <circle cx="241.703" cy="42.331" r="1.32211" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="10s" repeatCount="indefinite" begin="-12.20190167506801s"></animate> <animate attributeName="r" values="0;1.3287189862834077;0" keyTimes="0;0.1;1" dur="10s" repeatCount="indefinite" begin="-12.20190167506801s"></animate> <animateMotion dur="10s" repeatCount="indefinite" begin="-12.20190167506801s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-4"></mpath> </animateMotion> </circle> </g><g transform="translate(-256 256)"> <circle cx="100.389" cy="109.748" r="0.522416" fill="#6f1e51" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-3.955656457314478s"></animate> <animate attributeName="r" values="0;5.861416943956405;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-3.955656457314478s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-3.955656457314478s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-5"></mpath> </animateMotion> </circle> </g><g transform="translate(-256 256)"> <circle cx="238.80700000000002" cy="0.561" r="1.13027" fill="#6f1e51" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-8.225951733151055s"></animate> <animate attributeName="r" values="0;2.3136408103211448;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-8.225951733151055s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-8.225951733151055s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-6"></mpath> </animateMotion> </circle> </g><g transform="translate(-256 256)"> <circle cx="218.227" cy="111.568" r="0.303511" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-16.98520442297242s"></animate> <animate attributeName="r" values="0;2.1716783962862594;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-16.98520442297242s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-16.98520442297242s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-7"></mpath> </animateMotion> </circle> </g><g transform="translate(-256 256)"> <circle cx="137.232" cy="198.851" r="2.89795" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-7.3764019531903635s"></animate> <animate attributeName="r" values="0;4.5990802836186555;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-7.3764019531903635s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-7.3764019531903635s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-8"></mpath> </animateMotion> </circle> </g><g transform="translate(-256 256)"> <circle cx="46.178000000000004" cy="207.512" r="3.0178" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-12.57521619427882s"></animate> <animate attributeName="r" values="0;3.449872447653375;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-12.57521619427882s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-12.57521619427882s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-9"></mpath> </animateMotion> </circle> </g><g transform="translate(-256 256)"> <circle cx="149.693" cy="89.542" r="0.574498" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="10s" repeatCount="indefinite" begin="-6.424978703606312s"></animate> <animate attributeName="r" values="0;1.0926347709384001;0" keyTimes="0;0.1;1" dur="10s" repeatCount="indefinite" begin="-6.424978703606312s"></animate> <animateMotion dur="10s" repeatCount="indefinite" begin="-6.424978703606312s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-10"></mpath> </animateMotion> </circle> </g><g transform="translate(-256 256)"> <circle cx="29.082" cy="125.86200000000001" r="0.118275" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-9.153987649368561s"></animate> <animate attributeName="r" values="0;1.0628157621195617;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-9.153987649368561s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-9.153987649368561s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-11"></mpath> </animateMotion> </circle> </g><g transform="translate(-256 256)"> <circle cx="46.165" cy="101.584" r="2.66138" fill="#6f1e51" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-13.53359282239451s"></animate> <animate attributeName="r" values="0;3.722070029338975;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-13.53359282239451s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-13.53359282239451s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-12"></mpath> </animateMotion> </circle> </g><g transform="translate(-256 256)"> <circle cx="37.277" cy="82.44200000000001" r="3.16205" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-19.720214847269254s"></animate> <animate attributeName="r" values="0;4.976606836178478;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-19.720214847269254s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-19.720214847269254s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-13"></mpath> </animateMotion> </circle> </g><g transform="translate(-256 256)"> <circle cx="205.031" cy="96.639" r="1.71386" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-7.652693087476732s"></animate> <animate attributeName="r" values="0;2.934359223522618;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-7.652693087476732s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-7.652693087476732s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-14"></mpath> </animateMotion> </circle> </g><g transform="translate(-256 256)"> <circle cx="181.964" cy="179.23" r="0.727112" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-19.148287593281527s"></animate> <animate attributeName="r" values="0;0.8166534139592536;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-19.148287593281527s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-19.148287593281527s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-15"></mpath> </animateMotion> </circle> </g><g transform="translate(-256 256)"> <circle cx="201.677" cy="56.004" r="3.69621" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-18.896522581634127s"></animate> <animate attributeName="r" values="0;5.426480570047746;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-18.896522581634127s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-18.896522581634127s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-16"></mpath> </animateMotion> </circle> </g><g transform="translate(0 -256)"> <circle cx="18.43" cy="233.909" r="4.75709" fill="#6f1e51" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-15.749292285791539s"></animate> <animate attributeName="r" values="0;5.557421325780403;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-15.749292285791539s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-15.749292285791539s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-0"></mpath> </animateMotion> </circle> </g><g transform="translate(0 -256)"> <circle cx="102.908" cy="192.303" r="3.67641" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-18.369829449511492s"></animate> <animate attributeName="r" values="0;5.17510177047596;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-18.369829449511492s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-18.369829449511492s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-1"></mpath> </animateMotion> </circle> </g><g transform="translate(0 -256)"> <circle cx="45.949" cy="248.717" r="0.475094" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-19.40145683987894s"></animate> <animate attributeName="r" values="0;0.7274537660588036;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-19.40145683987894s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-19.40145683987894s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-2"></mpath> </animateMotion> </circle> </g><g transform="translate(0 -256)"> <circle cx="219.838" cy="228.79" r="0.459436" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-2.75509308299986s"></animate> <animate attributeName="r" values="0;0.9842704546308516;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-2.75509308299986s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-2.75509308299986s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-3"></mpath> </animateMotion> </circle> </g><g transform="translate(0 -256)"> <circle cx="241.703" cy="42.331" r="1.32211" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="10s" repeatCount="indefinite" begin="-12.20190167506801s"></animate> <animate attributeName="r" values="0;1.3287189862834077;0" keyTimes="0;0.1;1" dur="10s" repeatCount="indefinite" begin="-12.20190167506801s"></animate> <animateMotion dur="10s" repeatCount="indefinite" begin="-12.20190167506801s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-4"></mpath> </animateMotion> </circle> </g><g transform="translate(0 -256)"> <circle cx="100.389" cy="109.748" r="0.522416" fill="#6f1e51" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-3.955656457314478s"></animate> <animate attributeName="r" values="0;5.861416943956405;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-3.955656457314478s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-3.955656457314478s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-5"></mpath> </animateMotion> </circle> </g><g transform="translate(0 -256)"> <circle cx="238.80700000000002" cy="0.561" r="1.13027" fill="#6f1e51" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-8.225951733151055s"></animate> <animate attributeName="r" values="0;2.3136408103211448;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-8.225951733151055s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-8.225951733151055s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-6"></mpath> </animateMotion> </circle> </g><g transform="translate(0 -256)"> <circle cx="218.227" cy="111.568" r="0.303511" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-16.98520442297242s"></animate> <animate attributeName="r" values="0;2.1716783962862594;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-16.98520442297242s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-16.98520442297242s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-7"></mpath> </animateMotion> </circle> </g><g transform="translate(0 -256)"> <circle cx="137.232" cy="198.851" r="2.89795" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-7.3764019531903635s"></animate> <animate attributeName="r" values="0;4.5990802836186555;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-7.3764019531903635s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-7.3764019531903635s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-8"></mpath> </animateMotion> </circle> </g><g transform="translate(0 -256)"> <circle cx="46.178000000000004" cy="207.512" r="3.0178" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-12.57521619427882s"></animate> <animate attributeName="r" values="0;3.449872447653375;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-12.57521619427882s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-12.57521619427882s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-9"></mpath> </animateMotion> </circle> </g><g transform="translate(0 -256)"> <circle cx="149.693" cy="89.542" r="0.574498" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="10s" repeatCount="indefinite" begin="-6.424978703606312s"></animate> <animate attributeName="r" values="0;1.0926347709384001;0" keyTimes="0;0.1;1" dur="10s" repeatCount="indefinite" begin="-6.424978703606312s"></animate> <animateMotion dur="10s" repeatCount="indefinite" begin="-6.424978703606312s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-10"></mpath> </animateMotion> </circle> </g><g transform="translate(0 -256)"> <circle cx="29.082" cy="125.86200000000001" r="0.118275" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-9.153987649368561s"></animate> <animate attributeName="r" values="0;1.0628157621195617;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-9.153987649368561s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-9.153987649368561s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-11"></mpath> </animateMotion> </circle> </g><g transform="translate(0 -256)"> <circle cx="46.165" cy="101.584" r="2.66138" fill="#6f1e51" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-13.53359282239451s"></animate> <animate attributeName="r" values="0;3.722070029338975;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-13.53359282239451s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-13.53359282239451s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-12"></mpath> </animateMotion> </circle> </g><g transform="translate(0 -256)"> <circle cx="37.277" cy="82.44200000000001" r="3.16205" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-19.720214847269254s"></animate> <animate attributeName="r" values="0;4.976606836178478;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-19.720214847269254s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-19.720214847269254s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-13"></mpath> </animateMotion> </circle> </g><g transform="translate(0 -256)"> <circle cx="205.031" cy="96.639" r="1.71386" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-7.652693087476732s"></animate> <animate attributeName="r" values="0;2.934359223522618;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-7.652693087476732s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-7.652693087476732s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-14"></mpath> </animateMotion> </circle> </g><g transform="translate(0 -256)"> <circle cx="181.964" cy="179.23" r="0.727112" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-19.148287593281527s"></animate> <animate attributeName="r" values="0;0.8166534139592536;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-19.148287593281527s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-19.148287593281527s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-15"></mpath> </animateMotion> </circle> </g><g transform="translate(0 -256)"> <circle cx="201.677" cy="56.004" r="3.69621" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-18.896522581634127s"></animate> <animate attributeName="r" values="0;5.426480570047746;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-18.896522581634127s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-18.896522581634127s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-16"></mpath> </animateMotion> </circle> </g><g transform="translate(0 0)"> <circle cx="18.43" cy="233.909" r="4.75709" fill="#6f1e51" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-15.749292285791539s"></animate> <animate attributeName="r" values="0;5.557421325780403;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-15.749292285791539s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-15.749292285791539s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-0"></mpath> </animateMotion> </circle> </g><g transform="translate(0 0)"> <circle cx="102.908" cy="192.303" r="3.67641" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-18.369829449511492s"></animate> <animate attributeName="r" values="0;5.17510177047596;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-18.369829449511492s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-18.369829449511492s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-1"></mpath> </animateMotion> </circle> </g><g transform="translate(0 0)"> <circle cx="45.949" cy="248.717" r="0.475094" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-19.40145683987894s"></animate> <animate attributeName="r" values="0;0.7274537660588036;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-19.40145683987894s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-19.40145683987894s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-2"></mpath> </animateMotion> </circle> </g><g transform="translate(0 0)"> <circle cx="219.838" cy="228.79" r="0.459436" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-2.75509308299986s"></animate> <animate attributeName="r" values="0;0.9842704546308516;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-2.75509308299986s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-2.75509308299986s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-3"></mpath> </animateMotion> </circle> </g><g transform="translate(0 0)"> <circle cx="241.703" cy="42.331" r="1.32211" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="10s" repeatCount="indefinite" begin="-12.20190167506801s"></animate> <animate attributeName="r" values="0;1.3287189862834077;0" keyTimes="0;0.1;1" dur="10s" repeatCount="indefinite" begin="-12.20190167506801s"></animate> <animateMotion dur="10s" repeatCount="indefinite" begin="-12.20190167506801s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-4"></mpath> </animateMotion> </circle> </g><g transform="translate(0 0)"> <circle cx="100.389" cy="109.748" r="0.522416" fill="#6f1e51" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-3.955656457314478s"></animate> <animate attributeName="r" values="0;5.861416943956405;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-3.955656457314478s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-3.955656457314478s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-5"></mpath> </animateMotion> </circle> </g><g transform="translate(0 0)"> <circle cx="238.80700000000002" cy="0.561" r="1.13027" fill="#6f1e51" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-8.225951733151055s"></animate> <animate attributeName="r" values="0;2.3136408103211448;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-8.225951733151055s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-8.225951733151055s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-6"></mpath> </animateMotion> </circle> </g><g transform="translate(0 0)"> <circle cx="218.227" cy="111.568" r="0.303511" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-16.98520442297242s"></animate> <animate attributeName="r" values="0;2.1716783962862594;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-16.98520442297242s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-16.98520442297242s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-7"></mpath> </animateMotion> </circle> </g><g transform="translate(0 0)"> <circle cx="137.232" cy="198.851" r="2.89795" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-7.3764019531903635s"></animate> <animate attributeName="r" values="0;4.5990802836186555;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-7.3764019531903635s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-7.3764019531903635s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-8"></mpath> </animateMotion> </circle> </g><g transform="translate(0 0)"> <circle cx="46.178000000000004" cy="207.512" r="3.0178" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-12.57521619427882s"></animate> <animate attributeName="r" values="0;3.449872447653375;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-12.57521619427882s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-12.57521619427882s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-9"></mpath> </animateMotion> </circle> </g><g transform="translate(0 0)"> <circle cx="149.693" cy="89.542" r="0.574498" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="10s" repeatCount="indefinite" begin="-6.424978703606312s"></animate> <animate attributeName="r" values="0;1.0926347709384001;0" keyTimes="0;0.1;1" dur="10s" repeatCount="indefinite" begin="-6.424978703606312s"></animate> <animateMotion dur="10s" repeatCount="indefinite" begin="-6.424978703606312s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-10"></mpath> </animateMotion> </circle> </g><g transform="translate(0 0)"> <circle cx="29.082" cy="125.86200000000001" r="0.118275" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-9.153987649368561s"></animate> <animate attributeName="r" values="0;1.0628157621195617;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-9.153987649368561s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-9.153987649368561s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-11"></mpath> </animateMotion> </circle> </g><g transform="translate(0 0)"> <circle cx="46.165" cy="101.584" r="2.66138" fill="#6f1e51" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-13.53359282239451s"></animate> <animate attributeName="r" values="0;3.722070029338975;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-13.53359282239451s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-13.53359282239451s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-12"></mpath> </animateMotion> </circle> </g><g transform="translate(0 0)"> <circle cx="37.277" cy="82.44200000000001" r="3.16205" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-19.720214847269254s"></animate> <animate attributeName="r" values="0;4.976606836178478;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-19.720214847269254s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-19.720214847269254s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-13"></mpath> </animateMotion> </circle> </g><g transform="translate(0 0)"> <circle cx="205.031" cy="96.639" r="1.71386" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-7.652693087476732s"></animate> <animate attributeName="r" values="0;2.934359223522618;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-7.652693087476732s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-7.652693087476732s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-14"></mpath> </animateMotion> </circle> </g><g transform="translate(0 0)"> <circle cx="181.964" cy="179.23" r="0.727112" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-19.148287593281527s"></animate> <animate attributeName="r" values="0;0.8166534139592536;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-19.148287593281527s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-19.148287593281527s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-15"></mpath> </animateMotion> </circle> </g><g transform="translate(0 0)"> <circle cx="201.677" cy="56.004" r="3.69621" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-18.896522581634127s"></animate> <animate attributeName="r" values="0;5.426480570047746;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-18.896522581634127s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-18.896522581634127s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-16"></mpath> </animateMotion> </circle> </g><g transform="translate(0 256)"> <circle cx="18.43" cy="233.909" r="4.75709" fill="#6f1e51" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-15.749292285791539s"></animate> <animate attributeName="r" values="0;5.557421325780403;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-15.749292285791539s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-15.749292285791539s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-0"></mpath> </animateMotion> </circle> </g><g transform="translate(0 256)"> <circle cx="102.908" cy="192.303" r="3.67641" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-18.369829449511492s"></animate> <animate attributeName="r" values="0;5.17510177047596;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-18.369829449511492s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-18.369829449511492s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-1"></mpath> </animateMotion> </circle> </g><g transform="translate(0 256)"> <circle cx="45.949" cy="248.717" r="0.475094" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-19.40145683987894s"></animate> <animate attributeName="r" values="0;0.7274537660588036;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-19.40145683987894s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-19.40145683987894s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-2"></mpath> </animateMotion> </circle> </g><g transform="translate(0 256)"> <circle cx="219.838" cy="228.79" r="0.459436" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-2.75509308299986s"></animate> <animate attributeName="r" values="0;0.9842704546308516;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-2.75509308299986s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-2.75509308299986s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-3"></mpath> </animateMotion> </circle> </g><g transform="translate(0 256)"> <circle cx="241.703" cy="42.331" r="1.32211" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="10s" repeatCount="indefinite" begin="-12.20190167506801s"></animate> <animate attributeName="r" values="0;1.3287189862834077;0" keyTimes="0;0.1;1" dur="10s" repeatCount="indefinite" begin="-12.20190167506801s"></animate> <animateMotion dur="10s" repeatCount="indefinite" begin="-12.20190167506801s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-4"></mpath> </animateMotion> </circle> </g><g transform="translate(0 256)"> <circle cx="100.389" cy="109.748" r="0.522416" fill="#6f1e51" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-3.955656457314478s"></animate> <animate attributeName="r" values="0;5.861416943956405;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-3.955656457314478s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-3.955656457314478s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-5"></mpath> </animateMotion> </circle> </g><g transform="translate(0 256)"> <circle cx="238.80700000000002" cy="0.561" r="1.13027" fill="#6f1e51" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-8.225951733151055s"></animate> <animate attributeName="r" values="0;2.3136408103211448;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-8.225951733151055s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-8.225951733151055s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-6"></mpath> </animateMotion> </circle> </g><g transform="translate(0 256)"> <circle cx="218.227" cy="111.568" r="0.303511" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-16.98520442297242s"></animate> <animate attributeName="r" values="0;2.1716783962862594;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-16.98520442297242s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-16.98520442297242s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-7"></mpath> </animateMotion> </circle> </g><g transform="translate(0 256)"> <circle cx="137.232" cy="198.851" r="2.89795" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-7.3764019531903635s"></animate> <animate attributeName="r" values="0;4.5990802836186555;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-7.3764019531903635s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-7.3764019531903635s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-8"></mpath> </animateMotion> </circle> </g><g transform="translate(0 256)"> <circle cx="46.178000000000004" cy="207.512" r="3.0178" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-12.57521619427882s"></animate> <animate attributeName="r" values="0;3.449872447653375;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-12.57521619427882s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-12.57521619427882s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-9"></mpath> </animateMotion> </circle> </g><g transform="translate(0 256)"> <circle cx="149.693" cy="89.542" r="0.574498" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="10s" repeatCount="indefinite" begin="-6.424978703606312s"></animate> <animate attributeName="r" values="0;1.0926347709384001;0" keyTimes="0;0.1;1" dur="10s" repeatCount="indefinite" begin="-6.424978703606312s"></animate> <animateMotion dur="10s" repeatCount="indefinite" begin="-6.424978703606312s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-10"></mpath> </animateMotion> </circle> </g><g transform="translate(0 256)"> <circle cx="29.082" cy="125.86200000000001" r="0.118275" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-9.153987649368561s"></animate> <animate attributeName="r" values="0;1.0628157621195617;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-9.153987649368561s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-9.153987649368561s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-11"></mpath> </animateMotion> </circle> </g><g transform="translate(0 256)"> <circle cx="46.165" cy="101.584" r="2.66138" fill="#6f1e51" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-13.53359282239451s"></animate> <animate attributeName="r" values="0;3.722070029338975;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-13.53359282239451s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-13.53359282239451s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-12"></mpath> </animateMotion> </circle> </g><g transform="translate(0 256)"> <circle cx="37.277" cy="82.44200000000001" r="3.16205" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-19.720214847269254s"></animate> <animate attributeName="r" values="0;4.976606836178478;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-19.720214847269254s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-19.720214847269254s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-13"></mpath> </animateMotion> </circle> </g><g transform="translate(0 256)"> <circle cx="205.031" cy="96.639" r="1.71386" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-7.652693087476732s"></animate> <animate attributeName="r" values="0;2.934359223522618;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-7.652693087476732s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-7.652693087476732s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-14"></mpath> </animateMotion> </circle> </g><g transform="translate(0 256)"> <circle cx="181.964" cy="179.23" r="0.727112" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-19.148287593281527s"></animate> <animate attributeName="r" values="0;0.8166534139592536;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-19.148287593281527s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-19.148287593281527s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-15"></mpath> </animateMotion> </circle> </g><g transform="translate(0 256)"> <circle cx="201.677" cy="56.004" r="3.69621" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-18.896522581634127s"></animate> <animate attributeName="r" values="0;5.426480570047746;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-18.896522581634127s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-18.896522581634127s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-16"></mpath> </animateMotion> </circle> </g><g transform="translate(256 -256)"> <circle cx="18.43" cy="233.909" r="4.75709" fill="#6f1e51" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-15.749292285791539s"></animate> <animate attributeName="r" values="0;5.557421325780403;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-15.749292285791539s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-15.749292285791539s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-0"></mpath> </animateMotion> </circle> </g><g transform="translate(256 -256)"> <circle cx="102.908" cy="192.303" r="3.67641" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-18.369829449511492s"></animate> <animate attributeName="r" values="0;5.17510177047596;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-18.369829449511492s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-18.369829449511492s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-1"></mpath> </animateMotion> </circle> </g><g transform="translate(256 -256)"> <circle cx="45.949" cy="248.717" r="0.475094" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-19.40145683987894s"></animate> <animate attributeName="r" values="0;0.7274537660588036;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-19.40145683987894s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-19.40145683987894s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-2"></mpath> </animateMotion> </circle> </g><g transform="translate(256 -256)"> <circle cx="219.838" cy="228.79" r="0.459436" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-2.75509308299986s"></animate> <animate attributeName="r" values="0;0.9842704546308516;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-2.75509308299986s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-2.75509308299986s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-3"></mpath> </animateMotion> </circle> </g><g transform="translate(256 -256)"> <circle cx="241.703" cy="42.331" r="1.32211" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="10s" repeatCount="indefinite" begin="-12.20190167506801s"></animate> <animate attributeName="r" values="0;1.3287189862834077;0" keyTimes="0;0.1;1" dur="10s" repeatCount="indefinite" begin="-12.20190167506801s"></animate> <animateMotion dur="10s" repeatCount="indefinite" begin="-12.20190167506801s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-4"></mpath> </animateMotion> </circle> </g><g transform="translate(256 -256)"> <circle cx="100.389" cy="109.748" r="0.522416" fill="#6f1e51" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-3.955656457314478s"></animate> <animate attributeName="r" values="0;5.861416943956405;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-3.955656457314478s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-3.955656457314478s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-5"></mpath> </animateMotion> </circle> </g><g transform="translate(256 -256)"> <circle cx="238.80700000000002" cy="0.561" r="1.13027" fill="#6f1e51" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-8.225951733151055s"></animate> <animate attributeName="r" values="0;2.3136408103211448;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-8.225951733151055s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-8.225951733151055s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-6"></mpath> </animateMotion> </circle> </g><g transform="translate(256 -256)"> <circle cx="218.227" cy="111.568" r="0.303511" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-16.98520442297242s"></animate> <animate attributeName="r" values="0;2.1716783962862594;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-16.98520442297242s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-16.98520442297242s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-7"></mpath> </animateMotion> </circle> </g><g transform="translate(256 -256)"> <circle cx="137.232" cy="198.851" r="2.89795" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-7.3764019531903635s"></animate> <animate attributeName="r" values="0;4.5990802836186555;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-7.3764019531903635s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-7.3764019531903635s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-8"></mpath> </animateMotion> </circle> </g><g transform="translate(256 -256)"> <circle cx="46.178000000000004" cy="207.512" r="3.0178" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-12.57521619427882s"></animate> <animate attributeName="r" values="0;3.449872447653375;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-12.57521619427882s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-12.57521619427882s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-9"></mpath> </animateMotion> </circle> </g><g transform="translate(256 -256)"> <circle cx="149.693" cy="89.542" r="0.574498" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="10s" repeatCount="indefinite" begin="-6.424978703606312s"></animate> <animate attributeName="r" values="0;1.0926347709384001;0" keyTimes="0;0.1;1" dur="10s" repeatCount="indefinite" begin="-6.424978703606312s"></animate> <animateMotion dur="10s" repeatCount="indefinite" begin="-6.424978703606312s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-10"></mpath> </animateMotion> </circle> </g><g transform="translate(256 -256)"> <circle cx="29.082" cy="125.86200000000001" r="0.118275" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-9.153987649368561s"></animate> <animate attributeName="r" values="0;1.0628157621195617;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-9.153987649368561s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-9.153987649368561s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-11"></mpath> </animateMotion> </circle> </g><g transform="translate(256 -256)"> <circle cx="46.165" cy="101.584" r="2.66138" fill="#6f1e51" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-13.53359282239451s"></animate> <animate attributeName="r" values="0;3.722070029338975;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-13.53359282239451s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-13.53359282239451s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-12"></mpath> </animateMotion> </circle> </g><g transform="translate(256 -256)"> <circle cx="37.277" cy="82.44200000000001" r="3.16205" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-19.720214847269254s"></animate> <animate attributeName="r" values="0;4.976606836178478;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-19.720214847269254s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-19.720214847269254s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-13"></mpath> </animateMotion> </circle> </g><g transform="translate(256 -256)"> <circle cx="205.031" cy="96.639" r="1.71386" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-7.652693087476732s"></animate> <animate attributeName="r" values="0;2.934359223522618;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-7.652693087476732s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-7.652693087476732s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-14"></mpath> </animateMotion> </circle> </g><g transform="translate(256 -256)"> <circle cx="181.964" cy="179.23" r="0.727112" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-19.148287593281527s"></animate> <animate attributeName="r" values="0;0.8166534139592536;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-19.148287593281527s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-19.148287593281527s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-15"></mpath> </animateMotion> </circle> </g><g transform="translate(256 -256)"> <circle cx="201.677" cy="56.004" r="3.69621" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-18.896522581634127s"></animate> <animate attributeName="r" values="0;5.426480570047746;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-18.896522581634127s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-18.896522581634127s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-16"></mpath> </animateMotion> </circle> </g><g transform="translate(256 0)"> <circle cx="18.43" cy="233.909" r="4.75709" fill="#6f1e51" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-15.749292285791539s"></animate> <animate attributeName="r" values="0;5.557421325780403;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-15.749292285791539s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-15.749292285791539s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-0"></mpath> </animateMotion> </circle> </g><g transform="translate(256 0)"> <circle cx="102.908" cy="192.303" r="3.67641" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-18.369829449511492s"></animate> <animate attributeName="r" values="0;5.17510177047596;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-18.369829449511492s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-18.369829449511492s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-1"></mpath> </animateMotion> </circle> </g><g transform="translate(256 0)"> <circle cx="45.949" cy="248.717" r="0.475094" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-19.40145683987894s"></animate> <animate attributeName="r" values="0;0.7274537660588036;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-19.40145683987894s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-19.40145683987894s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-2"></mpath> </animateMotion> </circle> </g><g transform="translate(256 0)"> <circle cx="219.838" cy="228.79" r="0.459436" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-2.75509308299986s"></animate> <animate attributeName="r" values="0;0.9842704546308516;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-2.75509308299986s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-2.75509308299986s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-3"></mpath> </animateMotion> </circle> </g><g transform="translate(256 0)"> <circle cx="241.703" cy="42.331" r="1.32211" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="10s" repeatCount="indefinite" begin="-12.20190167506801s"></animate> <animate attributeName="r" values="0;1.3287189862834077;0" keyTimes="0;0.1;1" dur="10s" repeatCount="indefinite" begin="-12.20190167506801s"></animate> <animateMotion dur="10s" repeatCount="indefinite" begin="-12.20190167506801s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-4"></mpath> </animateMotion> </circle> </g><g transform="translate(256 0)"> <circle cx="100.389" cy="109.748" r="0.522416" fill="#6f1e51" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-3.955656457314478s"></animate> <animate attributeName="r" values="0;5.861416943956405;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-3.955656457314478s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-3.955656457314478s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-5"></mpath> </animateMotion> </circle> </g><g transform="translate(256 0)"> <circle cx="238.80700000000002" cy="0.561" r="1.13027" fill="#6f1e51" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-8.225951733151055s"></animate> <animate attributeName="r" values="0;2.3136408103211448;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-8.225951733151055s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-8.225951733151055s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-6"></mpath> </animateMotion> </circle> </g><g transform="translate(256 0)"> <circle cx="218.227" cy="111.568" r="0.303511" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-16.98520442297242s"></animate> <animate attributeName="r" values="0;2.1716783962862594;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-16.98520442297242s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-16.98520442297242s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-7"></mpath> </animateMotion> </circle> </g><g transform="translate(256 0)"> <circle cx="137.232" cy="198.851" r="2.89795" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-7.3764019531903635s"></animate> <animate attributeName="r" values="0;4.5990802836186555;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-7.3764019531903635s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-7.3764019531903635s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-8"></mpath> </animateMotion> </circle> </g><g transform="translate(256 0)"> <circle cx="46.178000000000004" cy="207.512" r="3.0178" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-12.57521619427882s"></animate> <animate attributeName="r" values="0;3.449872447653375;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-12.57521619427882s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-12.57521619427882s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-9"></mpath> </animateMotion> </circle> </g><g transform="translate(256 0)"> <circle cx="149.693" cy="89.542" r="0.574498" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="10s" repeatCount="indefinite" begin="-6.424978703606312s"></animate> <animate attributeName="r" values="0;1.0926347709384001;0" keyTimes="0;0.1;1" dur="10s" repeatCount="indefinite" begin="-6.424978703606312s"></animate> <animateMotion dur="10s" repeatCount="indefinite" begin="-6.424978703606312s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-10"></mpath> </animateMotion> </circle> </g><g transform="translate(256 0)"> <circle cx="29.082" cy="125.86200000000001" r="0.118275" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-9.153987649368561s"></animate> <animate attributeName="r" values="0;1.0628157621195617;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-9.153987649368561s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-9.153987649368561s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-11"></mpath> </animateMotion> </circle> </g><g transform="translate(256 0)"> <circle cx="46.165" cy="101.584" r="2.66138" fill="#6f1e51" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-13.53359282239451s"></animate> <animate attributeName="r" values="0;3.722070029338975;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-13.53359282239451s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-13.53359282239451s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-12"></mpath> </animateMotion> </circle> </g><g transform="translate(256 0)"> <circle cx="37.277" cy="82.44200000000001" r="3.16205" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-19.720214847269254s"></animate> <animate attributeName="r" values="0;4.976606836178478;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-19.720214847269254s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-19.720214847269254s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-13"></mpath> </animateMotion> </circle> </g><g transform="translate(256 0)"> <circle cx="205.031" cy="96.639" r="1.71386" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-7.652693087476732s"></animate> <animate attributeName="r" values="0;2.934359223522618;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-7.652693087476732s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-7.652693087476732s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-14"></mpath> </animateMotion> </circle> </g><g transform="translate(256 0)"> <circle cx="181.964" cy="179.23" r="0.727112" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-19.148287593281527s"></animate> <animate attributeName="r" values="0;0.8166534139592536;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-19.148287593281527s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-19.148287593281527s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-15"></mpath> </animateMotion> </circle> </g><g transform="translate(256 0)"> <circle cx="201.677" cy="56.004" r="3.69621" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-18.896522581634127s"></animate> <animate attributeName="r" values="0;5.426480570047746;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-18.896522581634127s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-18.896522581634127s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-16"></mpath> </animateMotion> </circle> </g><g transform="translate(256 256)"> <circle cx="18.43" cy="233.909" r="4.75709" fill="#6f1e51" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-15.749292285791539s"></animate> <animate attributeName="r" values="0;5.557421325780403;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-15.749292285791539s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-15.749292285791539s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-0"></mpath> </animateMotion> </circle> </g><g transform="translate(256 256)"> <circle cx="102.908" cy="192.303" r="3.67641" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-18.369829449511492s"></animate> <animate attributeName="r" values="0;5.17510177047596;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-18.369829449511492s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-18.369829449511492s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-1"></mpath> </animateMotion> </circle> </g><g transform="translate(256 256)"> <circle cx="45.949" cy="248.717" r="0.475094" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-19.40145683987894s"></animate> <animate attributeName="r" values="0;0.7274537660588036;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-19.40145683987894s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-19.40145683987894s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-2"></mpath> </animateMotion> </circle> </g><g transform="translate(256 256)"> <circle cx="219.838" cy="228.79" r="0.459436" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-2.75509308299986s"></animate> <animate attributeName="r" values="0;0.9842704546308516;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-2.75509308299986s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-2.75509308299986s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-3"></mpath> </animateMotion> </circle> </g><g transform="translate(256 256)"> <circle cx="241.703" cy="42.331" r="1.32211" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="10s" repeatCount="indefinite" begin="-12.20190167506801s"></animate> <animate attributeName="r" values="0;1.3287189862834077;0" keyTimes="0;0.1;1" dur="10s" repeatCount="indefinite" begin="-12.20190167506801s"></animate> <animateMotion dur="10s" repeatCount="indefinite" begin="-12.20190167506801s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-4"></mpath> </animateMotion> </circle> </g><g transform="translate(256 256)"> <circle cx="100.389" cy="109.748" r="0.522416" fill="#6f1e51" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-3.955656457314478s"></animate> <animate attributeName="r" values="0;5.861416943956405;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-3.955656457314478s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-3.955656457314478s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-5"></mpath> </animateMotion> </circle> </g><g transform="translate(256 256)"> <circle cx="238.80700000000002" cy="0.561" r="1.13027" fill="#6f1e51" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-8.225951733151055s"></animate> <animate attributeName="r" values="0;2.3136408103211448;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-8.225951733151055s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-8.225951733151055s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-6"></mpath> </animateMotion> </circle> </g><g transform="translate(256 256)"> <circle cx="218.227" cy="111.568" r="0.303511" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-16.98520442297242s"></animate> <animate attributeName="r" values="0;2.1716783962862594;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-16.98520442297242s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-16.98520442297242s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-7"></mpath> </animateMotion> </circle> </g><g transform="translate(256 256)"> <circle cx="137.232" cy="198.851" r="2.89795" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-7.3764019531903635s"></animate> <animate attributeName="r" values="0;4.5990802836186555;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-7.3764019531903635s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-7.3764019531903635s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-8"></mpath> </animateMotion> </circle> </g><g transform="translate(256 256)"> <circle cx="46.178000000000004" cy="207.512" r="3.0178" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-12.57521619427882s"></animate> <animate attributeName="r" values="0;3.449872447653375;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-12.57521619427882s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-12.57521619427882s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-9"></mpath> </animateMotion> </circle> </g><g transform="translate(256 256)"> <circle cx="149.693" cy="89.542" r="0.574498" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="10s" repeatCount="indefinite" begin="-6.424978703606312s"></animate> <animate attributeName="r" values="0;1.0926347709384001;0" keyTimes="0;0.1;1" dur="10s" repeatCount="indefinite" begin="-6.424978703606312s"></animate> <animateMotion dur="10s" repeatCount="indefinite" begin="-6.424978703606312s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-10"></mpath> </animateMotion> </circle> </g><g transform="translate(256 256)"> <circle cx="29.082" cy="125.86200000000001" r="0.118275" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-9.153987649368561s"></animate> <animate attributeName="r" values="0;1.0628157621195617;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-9.153987649368561s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-9.153987649368561s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-11"></mpath> </animateMotion> </circle> </g><g transform="translate(256 256)"> <circle cx="46.165" cy="101.584" r="2.66138" fill="#6f1e51" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-13.53359282239451s"></animate> <animate attributeName="r" values="0;3.722070029338975;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-13.53359282239451s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-13.53359282239451s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-12"></mpath> </animateMotion> </circle> </g><g transform="translate(256 256)"> <circle cx="37.277" cy="82.44200000000001" r="3.16205" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-19.720214847269254s"></animate> <animate attributeName="r" values="0;4.976606836178478;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-19.720214847269254s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-19.720214847269254s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-13"></mpath> </animateMotion> </circle> </g><g transform="translate(256 256)"> <circle cx="205.031" cy="96.639" r="1.71386" fill="#341f97" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-7.652693087476732s"></animate> <animate attributeName="r" values="0;2.934359223522618;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-7.652693087476732s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-7.652693087476732s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-14"></mpath> </animateMotion> </circle> </g><g transform="translate(256 256)"> <circle cx="181.964" cy="179.23" r="0.727112" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-19.148287593281527s"></animate> <animate attributeName="r" values="0;0.8166534139592536;0" keyTimes="0;0.1;1" dur="6.666666666666666s" repeatCount="indefinite" begin="-19.148287593281527s"></animate> <animateMotion dur="6.666666666666666s" repeatCount="indefinite" begin="-19.148287593281527s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-15"></mpath> </animateMotion> </circle> </g><g transform="translate(256 256)"> <circle cx="201.677" cy="56.004" r="3.69621" fill="#2c2c54" style="mix-blend-mode:screen"> <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-18.896522581634127s"></animate> <animate attributeName="r" values="0;5.426480570047746;0" keyTimes="0;0.1;1" dur="20s" repeatCount="indefinite" begin="-18.896522581634127s"></animate> <animateMotion dur="20s" repeatCount="indefinite" begin="-18.896522581634127s"> <mpath xlink:href="#ldp-firefly-b0544e6229286-16"></mpath> </animateMotion> </circle> </g></g></g> </pattern> </defs> <rect x="0" y="0" width="'+VidConfigs.SVGwidth+'" height="'+VidConfigs.SVGheight+'" fill="url(#pid-0.7933990336988894)"></rect></svg>'
                    
                    
                }
                function RainPatternA_Background(VidConfigs,ider,adder){
                    return '<svg '+ider+' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin:auto;background:#1b1464;display:block;z-index:1;position:relative'+adder+'" width="'+VidConfigs.SVGwidth+'" height="'+VidConfigs.SVGheight+'" preserveAspectRatio="xMidYMid" viewBox="0 0 -'+VidConfigs.SVGheight+' '+VidConfigs.SVGwidth+'"><defs> <pattern id="pid-0.12878348310452736" x="0" y="0" width="719.36" height="719.36" patternUnits="userSpaceOnUse"> <g transform="scale(2.81)"><g transform="translate(-202.321 202.321)"> <line x1="208.55542039422363" x2="204.22892538791706" y1="138.77724567890056" y2="143.10374068520713" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="208.55542039422363" x2="204.22892538791706" y1="-373.22275432109944" y2="-368.89625931479287" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="464.55542039422363" x2="460.22892538791706" y1="-373.22275432109944" y2="-368.89625931479287" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="720.5554203942236" x2="716.2289253879171" y1="-373.22275432109944" y2="-368.89625931479287" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="208.55542039422363" x2="204.22892538791706" y1="-117.22275432109944" y2="-112.89625931479287" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="464.55542039422363" x2="460.22892538791706" y1="-117.22275432109944" y2="-112.89625931479287" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="720.5554203942236" x2="716.2289253879171" y1="-117.22275432109944" y2="-112.89625931479287" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="208.55542039422363" x2="204.22892538791706" y1="138.77724567890056" y2="143.10374068520713" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="464.55542039422363" x2="460.22892538791706" y1="138.77724567890056" y2="143.10374068520713" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="720.5554203942236" x2="716.2289253879171" y1="138.77724567890056" y2="143.10374068520713" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="80.06621136797501" x2="75.4436611198313" y1="51.21357477848972" y2="55.83612502663345" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="80.06621136797501" x2="75.4436611198313" y1="-460.7864252215103" y2="-456.16387497336655" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="336.06621136797503" x2="331.4436611198313" y1="-460.7864252215103" y2="-456.16387497336655" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="592.066211367975" x2="587.4436611198313" y1="-460.7864252215103" y2="-456.16387497336655" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="80.06621136797501" x2="75.4436611198313" y1="-204.78642522151029" y2="-200.16387497336655" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="336.06621136797503" x2="331.4436611198313" y1="-204.78642522151029" y2="-200.16387497336655" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="592.066211367975" x2="587.4436611198313" y1="-204.78642522151029" y2="-200.16387497336655" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="80.06621136797501" x2="75.4436611198313" y1="51.21357477848972" y2="55.83612502663345" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="336.06621136797503" x2="331.4436611198313" y1="51.21357477848972" y2="55.83612502663345" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="592.066211367975" x2="587.4436611198313" y1="51.21357477848972" y2="55.83612502663345" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="114.81208415162799" x2="110.3441309845313" y1="173.11919140647393" y2="177.58714457357058" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="114.81208415162799" x2="110.3441309845313" y1="-338.88080859352607" y2="-334.4128554264294" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="370.81208415162797" x2="366.3441309845313" y1="-338.88080859352607" y2="-334.4128554264294" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="626.812084151628" x2="622.3441309845313" y1="-338.88080859352607" y2="-334.4128554264294" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="114.81208415162799" x2="110.3441309845313" y1="-82.88080859352607" y2="-78.41285542642942" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="370.81208415162797" x2="366.3441309845313" y1="-82.88080859352607" y2="-78.41285542642942" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="626.812084151628" x2="622.3441309845313" y1="-82.88080859352607" y2="-78.41285542642942" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="114.81208415162799" x2="110.3441309845313" y1="173.11919140647393" y2="177.58714457357058" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="370.81208415162797" x2="366.3441309845313" y1="173.11919140647393" y2="177.58714457357058" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="626.812084151628" x2="622.3441309845313" y1="173.11919140647393" y2="177.58714457357058" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="86.39098923425485" x2="81.69942442481619" y1="54.46678764628421" y2="59.158352455722884" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="86.39098923425485" x2="81.69942442481619" y1="-457.5332123537158" y2="-452.8416475442771" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="342.39098923425485" x2="337.6994244248162" y1="-457.5332123537158" y2="-452.8416475442771" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="598.3909892342549" x2="593.6994244248162" y1="-457.5332123537158" y2="-452.8416475442771" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="86.39098923425485" x2="81.69942442481619" y1="-201.53321235371578" y2="-196.84164754427712" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="342.39098923425485" x2="337.6994244248162" y1="-201.53321235371578" y2="-196.84164754427712" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="598.3909892342549" x2="593.6994244248162" y1="-201.53321235371578" y2="-196.84164754427712" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="86.39098923425485" x2="81.69942442481619" y1="54.46678764628421" y2="59.158352455722884" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="342.39098923425485" x2="337.6994244248162" y1="54.46678764628421" y2="59.158352455722884" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="598.3909892342549" x2="593.6994244248162" y1="54.46678764628421" y2="59.158352455722884" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="132.49950905624397" x2="128.47317888161385" y1="66.24051926820081" y2="70.26684944283093" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="132.49950905624397" x2="128.47317888161385" y1="-445.75948073179916" y2="-441.7331505571691" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="388.49950905624394" x2="384.4731788816139" y1="-445.75948073179916" y2="-441.7331505571691" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="644.4995090562439" x2="640.4731788816139" y1="-445.75948073179916" y2="-441.7331505571691" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="132.49950905624397" x2="128.47317888161385" y1="-189.7594807317992" y2="-185.73315055716907" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="388.49950905624394" x2="384.4731788816139" y1="-189.7594807317992" y2="-185.73315055716907" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="644.4995090562439" x2="640.4731788816139" y1="-189.7594807317992" y2="-185.73315055716907" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="132.49950905624397" x2="128.47317888161385" y1="66.24051926820081" y2="70.26684944283093" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="388.49950905624394" x2="384.4731788816139" y1="66.24051926820081" y2="70.26684944283093" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="644.4995090562439" x2="640.4731788816139" y1="66.24051926820081" y2="70.26684944283093" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="183.70387043713893" x2="178.9560497795396" y1="225.24716703627794" y2="229.99498769387728" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="183.70387043713893" x2="178.9560497795396" y1="-286.7528329637221" y2="-282.0050123061227" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="439.7038704371389" x2="434.9560497795396" y1="-286.7528329637221" y2="-282.0050123061227" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="695.7038704371389" x2="690.9560497795396" y1="-286.7528329637221" y2="-282.0050123061227" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="183.70387043713893" x2="178.9560497795396" y1="-30.752832963722057" y2="-26.005012306122723" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="439.7038704371389" x2="434.9560497795396" y1="-30.752832963722057" y2="-26.005012306122723" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="695.7038704371389" x2="690.9560497795396" y1="-30.752832963722057" y2="-26.005012306122723" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="183.70387043713893" x2="178.9560497795396" y1="225.24716703627794" y2="229.99498769387728" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="439.7038704371389" x2="434.9560497795396" y1="225.24716703627794" y2="229.99498769387728" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="695.7038704371389" x2="690.9560497795396" y1="225.24716703627794" y2="229.99498769387728" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="243.3533676610056" x2="240.0508365165385" y1="41.3250530315852" y2="44.62758417605231" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="243.3533676610056" x2="240.0508365165385" y1="-470.6749469684148" y2="-467.3724158239477" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="499.35336766100556" x2="496.05083651653854" y1="-470.6749469684148" y2="-467.3724158239477" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="755.3533676610056" x2="752.0508365165385" y1="-470.6749469684148" y2="-467.3724158239477" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="243.3533676610056" x2="240.0508365165385" y1="-214.67494696841482" y2="-211.37241582394768" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="499.35336766100556" x2="496.05083651653854" y1="-214.67494696841482" y2="-211.37241582394768" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="755.3533676610056" x2="752.0508365165385" y1="-214.67494696841482" y2="-211.37241582394768" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="243.3533676610056" x2="240.0508365165385" y1="41.3250530315852" y2="44.62758417605231" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="499.35336766100556" x2="496.05083651653854" y1="41.3250530315852" y2="44.62758417605231" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="755.3533676610056" x2="752.0508365165385" y1="41.3250530315852" y2="44.62758417605231" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line> <animateTransform attributeName="transform" type="translate" values="0 0;-256 256" keyTimes="0;1" repeatCount="indefinite" dur="16.666666666666664s"></animateTransform> </g><g transform="translate(-148.643 148.643)"> <line x1="28.28144199496625" x2="23.3318581033949" y1="5.0383640183475285" y2="9.98794790991888" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="28.28144199496625" x2="23.3318581033949" y1="-506.9616359816525" y2="-502.0120520900811" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="284.28144199496626" x2="279.3318581033949" y1="-506.9616359816525" y2="-502.0120520900811" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="540.2814419949663" x2="535.3318581033949" y1="-506.9616359816525" y2="-502.0120520900811" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="28.28144199496625" x2="23.3318581033949" y1="-250.96163598165248" y2="-246.0120520900811" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="284.28144199496626" x2="279.3318581033949" y1="-250.96163598165248" y2="-246.0120520900811" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="540.2814419949663" x2="535.3318581033949" y1="-250.96163598165248" y2="-246.0120520900811" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="28.28144199496625" x2="23.3318581033949" y1="5.0383640183475285" y2="9.98794790991888" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="284.28144199496626" x2="279.3318581033949" y1="5.0383640183475285" y2="9.98794790991888" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="540.2814419949663" x2="535.3318581033949" y1="5.0383640183475285" y2="9.98794790991888" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="76.61275195063936" x2="73.57159950924708" y1="146.47491126932536" y2="149.51606371071765" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="76.61275195063936" x2="73.57159950924708" y1="-365.5250887306746" y2="-362.4839362892824" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="332.61275195063934" x2="329.5715995092471" y1="-365.5250887306746" y2="-362.4839362892824" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="588.6127519506393" x2="585.5715995092471" y1="-365.5250887306746" y2="-362.4839362892824" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="76.61275195063936" x2="73.57159950924708" y1="-109.52508873067464" y2="-106.48393628928235" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="332.61275195063934" x2="329.5715995092471" y1="-109.52508873067464" y2="-106.48393628928235" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="588.6127519506393" x2="585.5715995092471" y1="-109.52508873067464" y2="-106.48393628928235" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="76.61275195063936" x2="73.57159950924708" y1="146.47491126932536" y2="149.51606371071765" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="332.61275195063934" x2="329.5715995092471" y1="146.47491126932536" y2="149.51606371071765" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="588.6127519506393" x2="585.5715995092471" y1="146.47491126932536" y2="149.51606371071765" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="23.448303441192948" x2="19.62427998211352" y1="16.480003896748585" y2="20.304027355828012" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="23.448303441192948" x2="19.62427998211352" y1="-495.5199961032514" y2="-491.695972644172" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="279.44830344119293" x2="275.62427998211353" y1="-495.5199961032514" y2="-491.695972644172" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="535.4483034411929" x2="531.6242799821135" y1="-495.5199961032514" y2="-491.695972644172" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="23.448303441192948" x2="19.62427998211352" y1="-239.5199961032514" y2="-235.695972644172" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="279.44830344119293" x2="275.62427998211353" y1="-239.5199961032514" y2="-235.695972644172" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="535.4483034411929" x2="531.6242799821135" y1="-239.5199961032514" y2="-235.695972644172" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="23.448303441192948" x2="19.62427998211352" y1="16.480003896748585" y2="20.304027355828012" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="279.44830344119293" x2="275.62427998211353" y1="16.480003896748585" y2="20.304027355828012" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="535.4483034411929" x2="531.6242799821135" y1="16.480003896748585" y2="20.304027355828012" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="50.59021117394834" x2="46.43775831988942" y1="148.45541391997588" y2="152.60786677403482" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="50.59021117394834" x2="46.43775831988942" y1="-363.54458608002415" y2="-359.39213322596515" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="306.5902111739483" x2="302.43775831988944" y1="-363.54458608002415" y2="-359.39213322596515" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="562.5902111739483" x2="558.4377583198894" y1="-363.54458608002415" y2="-359.39213322596515" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="50.59021117394834" x2="46.43775831988942" y1="-107.54458608002412" y2="-103.39213322596518" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="306.5902111739483" x2="302.43775831988944" y1="-107.54458608002412" y2="-103.39213322596518" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="562.5902111739483" x2="558.4377583198894" y1="-107.54458608002412" y2="-103.39213322596518" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="50.59021117394834" x2="46.43775831988942" y1="148.45541391997588" y2="152.60786677403482" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="306.5902111739483" x2="302.43775831988944" y1="148.45541391997588" y2="152.60786677403482" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="562.5902111739483" x2="558.4377583198894" y1="148.45541391997588" y2="152.60786677403482" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="239.58713778581497" x2="234.94177488641859" y1="247.53026125415866" y2="252.17562415355505" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="239.58713778581497" x2="234.94177488641859" y1="-264.46973874584137" y2="-259.8243758464449" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="495.587137785815" x2="490.94177488641856" y1="-264.46973874584137" y2="-259.8243758464449" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="751.587137785815" x2="746.9417748864186" y1="-264.46973874584137" y2="-259.8243758464449" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="239.58713778581497" x2="234.94177488641859" y1="-8.46973874584134" y2="-3.8243758464449513" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="495.587137785815" x2="490.94177488641856" y1="-8.46973874584134" y2="-3.8243758464449513" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="751.587137785815" x2="746.9417748864186" y1="-8.46973874584134" y2="-3.8243758464449513" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="239.58713778581497" x2="234.94177488641859" y1="247.53026125415866" y2="252.17562415355505" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="495.587137785815" x2="490.94177488641856" y1="247.53026125415866" y2="252.17562415355505" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="751.587137785815" x2="746.9417748864186" y1="247.53026125415866" y2="252.17562415355505" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="155.18109659073752" x2="151.987176601123" y1="20.626013888816612" y2="23.81993387843112" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="155.18109659073752" x2="151.987176601123" y1="-491.3739861111834" y2="-488.18006612156887" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="411.1810965907375" x2="407.987176601123" y1="-491.3739861111834" y2="-488.18006612156887" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="667.1810965907375" x2="663.987176601123" y1="-491.3739861111834" y2="-488.18006612156887" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="155.18109659073752" x2="151.987176601123" y1="-235.3739861111834" y2="-232.18006612156887" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="411.1810965907375" x2="407.987176601123" y1="-235.3739861111834" y2="-232.18006612156887" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="667.1810965907375" x2="663.987176601123" y1="-235.3739861111834" y2="-232.18006612156887" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="155.18109659073752" x2="151.987176601123" y1="20.626013888816612" y2="23.81993387843112" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="411.1810965907375" x2="407.987176601123" y1="20.626013888816612" y2="23.81993387843112" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="667.1810965907375" x2="663.987176601123" y1="20.626013888816612" y2="23.81993387843112" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="168.90545315275276" x2="165.62504216622077" y1="206.72880293181092" y2="210.0092139183429" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="168.90545315275276" x2="165.62504216622077" y1="-305.27119706818905" y2="-301.9907860816571" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="424.9054531527528" x2="421.62504216622074" y1="-305.27119706818905" y2="-301.9907860816571" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="680.9054531527528" x2="677.6250421662207" y1="-305.27119706818905" y2="-301.9907860816571" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="168.90545315275276" x2="165.62504216622077" y1="-49.27119706818908" y2="-45.99078608165709" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="424.9054531527528" x2="421.62504216622074" y1="-49.27119706818908" y2="-45.99078608165709" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="680.9054531527528" x2="677.6250421662207" y1="-49.27119706818908" y2="-45.99078608165709" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="168.90545315275276" x2="165.62504216622077" y1="206.72880293181092" y2="210.0092139183429" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="424.9054531527528" x2="421.62504216622074" y1="206.72880293181092" y2="210.0092139183429" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="680.9054531527528" x2="677.6250421662207" y1="206.72880293181092" y2="210.0092139183429" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line> <animateTransform attributeName="transform" type="translate" values="0 0;-256 256" keyTimes="0;1" repeatCount="indefinite" dur="8.333333333333332s"></animateTransform> </g><g transform="translate(-94.9643 94.9643)"> <line x1="149.06644097875323" x2="144.88682143079245" y1="-0.12698089277006996" y2="4.052638655190726" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="149.06644097875323" x2="144.88682143079245" y1="-512.1269808927701" y2="-507.9473613448093" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="405.06644097875323" x2="400.88682143079245" y1="-512.1269808927701" y2="-507.9473613448093" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="661.0664409787532" x2="656.8868214307925" y1="-512.1269808927701" y2="-507.9473613448093" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="149.06644097875323" x2="144.88682143079245" y1="-256.12698089277006" y2="-251.94736134480928" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="405.06644097875323" x2="400.88682143079245" y1="-256.12698089277006" y2="-251.94736134480928" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="661.0664409787532" x2="656.8868214307925" y1="-256.12698089277006" y2="-251.94736134480928" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="149.06644097875323" x2="144.88682143079245" y1="-0.12698089277006996" y2="4.052638655190726" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="405.06644097875323" x2="400.88682143079245" y1="-0.12698089277006996" y2="4.052638655190726" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="661.0664409787532" x2="656.8868214307925" y1="-0.12698089277006996" y2="4.052638655190726" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="149.06644097875323" x2="144.88682143079245" y1="255.87301910722994" y2="260.0526386551907" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="203.64900165220678" x2="200.17188880784198" y1="94.75269784469828" y2="98.22981068906307" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="203.64900165220678" x2="200.17188880784198" y1="-417.2473021553017" y2="-413.7701893109369" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="459.6490016522068" x2="456.171888807842" y1="-417.2473021553017" y2="-413.7701893109369" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="715.6490016522068" x2="712.1718888078419" y1="-417.2473021553017" y2="-413.7701893109369" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="203.64900165220678" x2="200.17188880784198" y1="-161.24730215530172" y2="-157.77018931093693" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="459.6490016522068" x2="456.171888807842" y1="-161.24730215530172" y2="-157.77018931093693" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="715.6490016522068" x2="712.1718888078419" y1="-161.24730215530172" y2="-157.77018931093693" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="203.64900165220678" x2="200.17188880784198" y1="94.75269784469828" y2="98.22981068906307" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="459.6490016522068" x2="456.171888807842" y1="94.75269784469828" y2="98.22981068906307" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="715.6490016522068" x2="712.1718888078419" y1="94.75269784469828" y2="98.22981068906307" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="49.22666207439807" x2="44.80155064998893" y1="161.67348467200418" y2="166.0985960964133" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="49.22666207439807" x2="44.80155064998893" y1="-350.3265153279958" y2="-345.9014039035867" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="305.22666207439806" x2="300.80155064998894" y1="-350.3265153279958" y2="-345.9014039035867" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="561.2266620743981" x2="556.8015506499889" y1="-350.3265153279958" y2="-345.9014039035867" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="49.22666207439807" x2="44.80155064998893" y1="-94.32651532799582" y2="-89.9014039035867" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="305.22666207439806" x2="300.80155064998894" y1="-94.32651532799582" y2="-89.9014039035867" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="561.2266620743981" x2="556.8015506499889" y1="-94.32651532799582" y2="-89.9014039035867" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="49.22666207439807" x2="44.80155064998893" y1="161.67348467200418" y2="166.0985960964133" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="305.22666207439806" x2="300.80155064998894" y1="161.67348467200418" y2="166.0985960964133" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="561.2266620743981" x2="556.8015506499889" y1="161.67348467200418" y2="166.0985960964133" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="74.78053316329134" x2="71.69247832297835" y1="205.0464403985722" y2="208.13449523888522" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="74.78053316329134" x2="71.69247832297835" y1="-306.9535596014278" y2="-303.8655047611148" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="330.78053316329135" x2="327.69247832297833" y1="-306.9535596014278" y2="-303.8655047611148" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="586.7805331632914" x2="583.6924783229783" y1="-306.9535596014278" y2="-303.8655047611148" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="74.78053316329134" x2="71.69247832297835" y1="-50.9535596014278" y2="-47.86550476111478" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="330.78053316329135" x2="327.69247832297833" y1="-50.9535596014278" y2="-47.86550476111478" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="586.7805331632914" x2="583.6924783229783" y1="-50.9535596014278" y2="-47.86550476111478" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="74.78053316329134" x2="71.69247832297835" y1="205.0464403985722" y2="208.13449523888522" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="330.78053316329135" x2="327.69247832297833" y1="205.0464403985722" y2="208.13449523888522" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="586.7805331632914" x2="583.6924783229783" y1="205.0464403985722" y2="208.13449523888522" stroke-width="5" stroke="#38e0f5" stroke-linecap="round"></line><line x1="30.570621819457116" x2="25.65333439163153" y1="44.15394231781501" y2="49.07122974564059" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="30.570621819457116" x2="25.65333439163153" y1="-467.846057682185" y2="-462.9287702543594" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="286.57062181945713" x2="281.6533343916315" y1="-467.846057682185" y2="-462.9287702543594" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="542.5706218194571" x2="537.6533343916316" y1="-467.846057682185" y2="-462.9287702543594" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="30.570621819457116" x2="25.65333439163153" y1="-211.846057682185" y2="-206.9287702543594" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="286.57062181945713" x2="281.6533343916315" y1="-211.846057682185" y2="-206.9287702543594" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="542.5706218194571" x2="537.6533343916316" y1="-211.846057682185" y2="-206.9287702543594" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="30.570621819457116" x2="25.65333439163153" y1="44.15394231781501" y2="49.07122974564059" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="286.57062181945713" x2="281.6533343916315" y1="44.15394231781501" y2="49.07122974564059" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="542.5706218194571" x2="537.6533343916316" y1="44.15394231781501" y2="49.07122974564059" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="225.73423829423126" x2="222.4133721234021" y1="-1.363490529543862" y2="1.9573756412852907" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="225.73423829423126" x2="222.4133721234021" y1="-513.3634905295438" y2="-510.0426243587147" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="481.73423829423126" x2="478.4133721234021" y1="-513.3634905295438" y2="-510.0426243587147" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="737.7342382942313" x2="734.413372123402" y1="-513.3634905295438" y2="-510.0426243587147" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="225.73423829423126" x2="222.4133721234021" y1="-257.36349052954387" y2="-254.0426243587147" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="481.73423829423126" x2="478.4133721234021" y1="-257.36349052954387" y2="-254.0426243587147" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="737.7342382942313" x2="734.413372123402" y1="-257.36349052954387" y2="-254.0426243587147" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="225.73423829423126" x2="222.4133721234021" y1="-1.363490529543862" y2="1.9573756412852907" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="481.73423829423126" x2="478.4133721234021" y1="-1.363490529543862" y2="1.9573756412852907" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="737.7342382942313" x2="734.413372123402" y1="-1.363490529543862" y2="1.9573756412852907" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="225.73423829423126" x2="222.4133721234021" y1="254.63650947045613" y2="257.9573756412853" stroke-width="5" stroke="#d980fa" stroke-linecap="round"></line><line x1="141.74899344699236" x2="138.01403120616737" y1="216.76719112600944" y2="220.50215336683442" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="141.74899344699236" x2="138.01403120616737" y1="-295.23280887399056" y2="-291.4978466331656" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="397.74899344699236" x2="394.0140312061674" y1="-295.23280887399056" y2="-291.4978466331656" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="653.7489934469924" x2="650.0140312061674" y1="-295.23280887399056" y2="-291.4978466331656" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="141.74899344699236" x2="138.01403120616737" y1="-39.232808873990564" y2="-35.49784663316558" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="397.74899344699236" x2="394.0140312061674" y1="-39.232808873990564" y2="-35.49784663316558" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="653.7489934469924" x2="650.0140312061674" y1="-39.232808873990564" y2="-35.49784663316558" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="141.74899344699236" x2="138.01403120616737" y1="216.76719112600944" y2="220.50215336683442" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="397.74899344699236" x2="394.0140312061674" y1="216.76719112600944" y2="220.50215336683442" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line><line x1="653.7489934469924" x2="650.0140312061674" y1="216.76719112600944" y2="220.50215336683442" stroke-width="5" stroke="#ffc312" stroke-linecap="round"></line> <animateTransform attributeName="transform" type="translate" values="0 0;-256 256" keyTimes="0;1" repeatCount="indefinite" dur="5.5555555555555545s"></animateTransform> </g></g> </pattern> </defs> <rect x="0" y="0" width="'+VidConfigs.SVGwidth+'" height="'+VidConfigs.SVGheight+'" fill="url(#pid-0.12878348310452736)"></rect> </svg>'
                    
                }
                function custom_Background(VidConfigs,ider,adder){
                    return '<svg '+ider+' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin:auto;background:#100a01;display:block;z-index:1;position:relative'+adder+'" width="'+VidConfigs.SVGwidth+'" height="'+VidConfigs.SVGheight+'" preserveAspectRatio="xMidYMid" viewBox="0 0 -'+VidConfigs.SVGheight+' '+VidConfigs.SVGwidth+'"><g class="custom_Background"><defs><pattern id="pid-0.3645732756306683" x="0" y="0" width="215.04" height="215.04" patternUnits="userSpaceOnUse"><g transform="scale(0.84)"><g style="font-family:courier new;font-size:23.272727272727273"><g transform="translate(0 23.272727272727273)"><text fill="#d8a039" style="animation-delay:-3.3584158387298544s">E</text></g><g transform="translate(0 46.54545454545455)"><text fill="#d8a039" style="animation-delay:-3.055385535699551s">n</text></g><g transform="translate(0 69.81818181818181)"><text fill="#d8a039" style="animation-delay:-2.7523552326692484s">E</text></g><g transform="translate(0 93.0909090909091)"><text fill="#d8a039" style="animation-delay:-2.449324929638945s">v</text></g><g transform="translate(0 116.36363636363637)"><text fill="#d8a039" style="animation-delay:-2.146294626608642s">l</text></g><g transform="translate(0 139.63636363636363)"><text fill="#d8a039" style="animation-delay:-1.843264323578339s">e</text></g><g transform="translate(0 162.9090909090909)"><text fill="#d8a039" style="animation-delay:-1.540234020548036s">l</text></g><g transform="translate(0 186.1818181818182)"><text fill="#d8a039" style="animation-delay:-1.237203717517733s">e</text></g><g transform="translate(0 209.45454545454547)"><text fill="#d8a039" style="animation-delay:-0.93417341448743s">e</text></g><g transform="translate(0 232.72727272727275)"><text fill="#d8a039" style="animation-delay:-0.631143111457127s">e</text></g><g transform="translate(0 256)"><text fill="#d8a039" style="animation-delay:-0.32811280842682394s">E</text></g><g transform="translate(23.272727272727273 23.272727272727273)"><text fill="#d8a039" style="animation-delay:-5.771202383493394s">E</text></g><g transform="translate(23.272727272727273 46.54545454545455)"><text fill="#d8a039" style="animation-delay:-5.468172080463091s">E</text></g><g transform="translate(23.272727272727273 69.81818181818181)"><text fill="#d8a039" style="animation-delay:-5.165141777432789s">e</text></g><g transform="translate(23.272727272727273 93.0909090909091)"><text fill="#d8a039" style="animation-delay:-4.862111474402485s">l</text></g><g transform="translate(23.272727272727273 116.36363636363637)"><text fill="#d8a039" style="animation-delay:-4.559081171372181s">v</text></g><g transform="translate(23.272727272727273 139.63636363636363)"><text fill="#d8a039" style="animation-delay:-4.2560508683418785s">c</text></g><g transform="translate(23.272727272727273 162.9090909090909)"><text fill="#d8a039" style="animation-delay:-3.9530205653115758s">a</text></g><g transform="translate(23.272727272727273 186.1818181818182)"><text fill="#d8a039" style="animation-delay:-3.649990262281273s">e</text></g><g transform="translate(23.272727272727273 209.45454545454547)"><text fill="#d8a039" style="animation-delay:-3.34695995925097s">v</text></g><g transform="translate(23.272727272727273 232.72727272727275)"><text fill="#d8a039" style="animation-delay:-3.043929656220667s">e</text></g><g transform="translate(23.272727272727273 256)"><text fill="#d8a039" style="animation-delay:-2.740899353190364s">v</text></g><g transform="translate(46.54545454545455 23.272727272727273)"><text fill="#d8a039" style="animation-delay:-4.884293944661848s">v</text></g><g transform="translate(46.54545454545455 46.54545454545455)"><text fill="#d8a039" style="animation-delay:-4.581263641631545s">E</text></g><g transform="translate(46.54545454545455 69.81818181818181)"><text fill="#d8a039" style="animation-delay:-4.278233338601242s">l</text></g><g transform="translate(46.54545454545455 93.0909090909091)"><text fill="#d8a039" style="animation-delay:-3.9752030355709387s">E</text></g><g transform="translate(46.54545454545455 116.36363636363637)"><text fill="#d8a039" style="animation-delay:-3.672172732540635s">v</text></g><g transform="translate(46.54545454545455 139.63636363636363)"><text fill="#d8a039" style="animation-delay:-3.3691424295103323s">a</text></g><g transform="translate(46.54545454545455 162.9090909090909)"><text fill="#d8a039" style="animation-delay:-3.0661121264800295s">l</text></g><g transform="translate(46.54545454545455 186.1818181818182)"><text fill="#d8a039" style="animation-delay:-2.7630818234497263s">l</text></g><g transform="translate(46.54545454545455 209.45454545454547)"><text fill="#d8a039" style="animation-delay:-2.4600515204194235s">e</text></g><g transform="translate(46.54545454545455 232.72727272727275)"><text fill="#d8a039" style="animation-delay:-2.157021217389121s">e</text></g><g transform="translate(46.54545454545455 256)"><text fill="#d8a039" style="animation-delay:-1.8539909143588174s">E</text></g><g transform="translate(69.81818181818181 23.272727272727273)"><text fill="#d8a039" style="animation-delay:-5.439768397587579s">E</text></g><g transform="translate(69.81818181818181 46.54545454545455)"><text fill="#d8a039" style="animation-delay:-5.136738094557276s">E</text></g><g transform="translate(69.81818181818181 69.81818181818181)"><text fill="#d8a039" style="animation-delay:-4.833707791526973s">l</text></g><g transform="translate(69.81818181818181 93.0909090909091)"><text fill="#d8a039" style="animation-delay:-4.53067748849667s">a</text></g><g transform="translate(69.81818181818181 116.36363636363637)"><text fill="#d8a039" style="animation-delay:-4.227647185466367s">c</text></g><g transform="translate(69.81818181818181 139.63636363636363)"><text fill="#d8a039" style="animation-delay:-3.9246168824360637s">a</text></g><g transform="translate(69.81818181818181 162.9090909090909)"><text fill="#d8a039" style="animation-delay:-3.621586579405761s">e</text></g><g transform="translate(69.81818181818181 186.1818181818182)"><text fill="#d8a039" style="animation-delay:-3.3185562763754577s">c</text></g><g transform="translate(69.81818181818181 209.45454545454547)"><text fill="#d8a039" style="animation-delay:-3.0155259733451545s">e</text></g><g transform="translate(69.81818181818181 232.72727272727275)"><text fill="#d8a039" style="animation-delay:-2.7124956703148517s">c</text></g><g transform="translate(69.81818181818181 256)"><text fill="#d8a039" style="animation-delay:-2.4094653672845485s">a</text></g><g transform="translate(93.0909090909091 23.272727272727273)"><text fill="#d8a039" style="animation-delay:-5.144264476713167s">E</text></g><g transform="translate(93.0909090909091 46.54545454545455)"><text fill="#d8a039" style="animation-delay:-4.841234173682865s">l</text></g><g transform="translate(93.0909090909091 69.81818181818181)"><text fill="#d8a039" style="animation-delay:-4.538203870652562s">c</text></g><g transform="translate(93.0909090909091 93.0909090909091)"><text fill="#d8a039" style="animation-delay:-4.235173567622258s">a</text></g><g transform="translate(93.0909090909091 116.36363636363637)"><text fill="#d8a039" style="animation-delay:-3.932143264591955s">a</text></g><g transform="translate(93.0909090909091 139.63636363636363)"><text fill="#d8a039" style="animation-delay:-3.629112961561652s">E</text></g><g transform="translate(93.0909090909091 162.9090909090909)"><text fill="#d8a039" style="animation-delay:-3.3260826585313494s">a</text></g><g transform="translate(93.0909090909091 186.1818181818182)"><text fill="#d8a039" style="animation-delay:-3.0230523555010462s">e</text></g><g transform="translate(93.0909090909091 209.45454545454547)"><text fill="#d8a039" style="animation-delay:-2.720022052470743s">e</text></g><g transform="translate(93.0909090909091 232.72727272727275)"><text fill="#d8a039" style="animation-delay:-2.4169917494404403s">l</text></g><g transform="translate(93.0909090909091 256)"><text fill="#d8a039" style="animation-delay:-2.113961446410137s">v</text></g><g transform="translate(116.36363636363637 23.272727272727273)"><text fill="#d8a039" style="animation-delay:-6.487792192044246s">n</text></g><g transform="translate(116.36363636363637 46.54545454545455)"><text fill="#d8a039" style="animation-delay:-6.184761889013943s">e</text></g><g transform="translate(116.36363636363637 69.81818181818181)"><text fill="#d8a039" style="animation-delay:-5.8817315859836405s">v</text></g><g transform="translate(116.36363636363637 93.0909090909091)"><text fill="#d8a039" style="animation-delay:-5.578701282953337s">e</text></g><g transform="translate(116.36363636363637 116.36363636363637)"><text fill="#d8a039" style="animation-delay:-5.275670979923034s">E</text></g><g transform="translate(116.36363636363637 139.63636363636363)"><text fill="#d8a039" style="animation-delay:-4.972640676892731s">E</text></g><g transform="translate(116.36363636363637 162.9090909090909)"><text fill="#d8a039" style="animation-delay:-4.669610373862429s">a</text></g><g transform="translate(116.36363636363637 186.1818181818182)"><text fill="#d8a039" style="animation-delay:-4.366580070832126s">a</text></g><g transform="translate(116.36363636363637 209.45454545454547)"><text fill="#d8a039" style="animation-delay:-4.063549767801822s">n</text></g><g transform="translate(116.36363636363637 232.72727272727275)"><text fill="#d8a039" style="animation-delay:-3.760519464771519s">n</text></g><g transform="translate(116.36363636363637 256)"><text fill="#d8a039" style="animation-delay:-3.457489161741216s">a</text></g><g transform="translate(139.63636363636363 23.272727272727273)"><text fill="#d8a039" style="animation-delay:-5.801761313978838s">l</text></g><g transform="translate(139.63636363636363 46.54545454545455)"><text fill="#d8a039" style="animation-delay:-5.498731010948536s">v</text></g><g transform="translate(139.63636363636363 69.81818181818181)"><text fill="#d8a039" style="animation-delay:-5.195700707918233s">E</text></g><g transform="translate(139.63636363636363 93.0909090909091)"><text fill="#d8a039" style="animation-delay:-4.89267040488793s">l</text></g><g transform="translate(139.63636363636363 116.36363636363637)"><text fill="#d8a039" style="animation-delay:-4.589640101857627s">v</text></g><g transform="translate(139.63636363636363 139.63636363636363)"><text fill="#d8a039" style="animation-delay:-4.286609798827324s">a</text></g><g transform="translate(139.63636363636363 162.9090909090909)"><text fill="#d8a039" style="animation-delay:-3.9835794957970205s">n</text></g><g transform="translate(139.63636363636363 186.1818181818182)"><text fill="#d8a039" style="animation-delay:-3.6805491927667173s">n</text></g><g transform="translate(139.63636363636363 209.45454545454547)"><text fill="#d8a039" style="animation-delay:-3.3775188897364146s">e</text></g><g transform="translate(139.63636363636363 232.72727272727275)"><text fill="#d8a039" style="animation-delay:-3.074488586706112s">v</text></g><g transform="translate(139.63636363636363 256)"><text fill="#d8a039" style="animation-delay:-2.7714582836758086s">a</text></g><g transform="translate(162.9090909090909 23.272727272727273)"><text fill="#d8a039" style="animation-delay:-4.714370665442778s">v</text></g><g transform="translate(162.9090909090909 46.54545454545455)"><text fill="#d8a039" style="animation-delay:-4.411340362412474s">n</text></g><g transform="translate(162.9090909090909 69.81818181818181)"><text fill="#d8a039" style="animation-delay:-4.1083100593821715s">n</text></g><g transform="translate(162.9090909090909 93.0909090909091)"><text fill="#d8a039" style="animation-delay:-3.8052797563518688s">E</text></g><g transform="translate(162.9090909090909 116.36363636363637)"><text fill="#d8a039" style="animation-delay:-3.502249453321566s">c</text></g><g transform="translate(162.9090909090909 139.63636363636363)"><text fill="#d8a039" style="animation-delay:-3.1992191502912624s">a</text></g><g transform="translate(162.9090909090909 162.9090909090909)"><text fill="#d8a039" style="animation-delay:-2.8961888472609596s">E</text></g><g transform="translate(162.9090909090909 186.1818181818182)"><text fill="#d8a039" style="animation-delay:-2.5931585442306564s">n</text></g><g transform="translate(162.9090909090909 209.45454545454547)"><text fill="#d8a039" style="animation-delay:-2.290128241200353s">c</text></g><g transform="translate(162.9090909090909 232.72727272727275)"><text fill="#d8a039" style="animation-delay:-1.9870979381700504s">l</text></g><g transform="translate(162.9090909090909 256)"><text fill="#d8a039" style="animation-delay:-1.6840676351397474s">E</text></g><g transform="translate(186.1818181818182 23.272727272727273)"><text fill="#d8a039" style="animation-delay:-3.627458578867661s">c</text></g><g transform="translate(186.1818181818182 46.54545454545455)"><text fill="#d8a039" style="animation-delay:-3.324428275837358s">c</text></g><g transform="translate(186.1818181818182 69.81818181818181)"><text fill="#d8a039" style="animation-delay:-3.0213979728070552s">n</text></g><g transform="translate(186.1818181818182 93.0909090909091)"><text fill="#d8a039" style="animation-delay:-2.718367669776752s">c</text></g><g transform="translate(186.1818181818182 116.36363636363637)"><text fill="#d8a039" style="animation-delay:-2.415337366746449s">v</text></g><g transform="translate(186.1818181818182 139.63636363636363)"><text fill="#d8a039" style="animation-delay:-2.1123070637161456s">c</text></g><g transform="translate(186.1818181818182 162.9090909090909)"><text fill="#d8a039" style="animation-delay:-1.8092767606858429s">l</text></g><g transform="translate(186.1818181818182 186.1818181818182)"><text fill="#d8a039" style="animation-delay:-1.5062464576555399s">c</text></g><g transform="translate(186.1818181818182 209.45454545454547)"><text fill="#d8a039" style="animation-delay:-1.2032161546252367s">E</text></g><g transform="translate(186.1818181818182 232.72727272727275)"><text fill="#d8a039" style="animation-delay:-0.9001858515949337s">a</text></g><g transform="translate(186.1818181818182 256)"><text fill="#d8a039" style="animation-delay:-0.5971555485646306s">n</text></g><g transform="translate(209.45454545454547 23.272727272727273)"><text fill="#d8a039" style="animation-delay:-3.5189039810857303s">E</text></g><g transform="translate(209.45454545454547 46.54545454545455)"><text fill="#d8a039" style="animation-delay:-3.215873678055427s">v</text></g><g transform="translate(209.45454545454547 69.81818181818181)"><text fill="#d8a039" style="animation-delay:-2.9128433750251244s">a</text></g><g transform="translate(209.45454545454547 93.0909090909091)"><text fill="#d8a039" style="animation-delay:-2.6098130719948216s">n</text></g><g transform="translate(209.45454545454547 116.36363636363637)"><text fill="#d8a039" style="animation-delay:-2.3067827689645184s">E</text></g><g transform="translate(209.45454545454547 139.63636363636363)"><text fill="#d8a039" style="animation-delay:-2.003752465934215s">c</text></g><g transform="translate(209.45454545454547 162.9090909090909)"><text fill="#d8a039" style="animation-delay:-1.7007221629039124s">c</text></g><g transform="translate(209.45454545454547 186.1818181818182)"><text fill="#d8a039" style="animation-delay:-1.3976918598736092s">v</text></g><g transform="translate(209.45454545454547 209.45454545454547)"><text fill="#d8a039" style="animation-delay:-1.094661556843306s">a</text></g><g transform="translate(209.45454545454547 232.72727272727275)"><text fill="#d8a039" style="animation-delay:-0.7916312538130031s">e</text></g><g transform="translate(209.45454545454547 256)"><text fill="#d8a039" style="animation-delay:-0.48860095078270005s">a</text></g><g transform="translate(232.72727272727275 23.272727272727273)"><text fill="#d8a039" style="animation-delay:-5.053452223879286s">e</text></g><g transform="translate(232.72727272727275 46.54545454545455)"><text fill="#d8a039" style="animation-delay:-4.750421920848983s">c</text></g><g transform="translate(232.72727272727275 69.81818181818181)"><text fill="#d8a039" style="animation-delay:-4.44739161781868s">c</text></g><g transform="translate(232.72727272727275 93.0909090909091)"><text fill="#d8a039" style="animation-delay:-4.144361314788377s">v</text></g><g transform="translate(232.72727272727275 116.36363636363637)"><text fill="#d8a039" style="animation-delay:-3.841331011758073s">e</text></g><g transform="translate(232.72727272727275 139.63636363636363)"><text fill="#d8a039" style="animation-delay:-3.5383007087277702s">l</text></g><g transform="translate(232.72727272727275 162.9090909090909)"><text fill="#d8a039" style="animation-delay:-3.2352704056974675s">a</text></g><g transform="translate(232.72727272727275 186.1818181818182)"><text fill="#d8a039" style="animation-delay:-2.9322401026671643s">n</text></g><g transform="translate(232.72727272727275 209.45454545454547)"><text fill="#d8a039" style="animation-delay:-2.629209799636861s">e</text></g><g transform="translate(232.72727272727275 232.72727272727275)"><text fill="#d8a039" style="animation-delay:-2.3261794966065583s">l</text></g><g transform="translate(232.72727272727275 256)"><text fill="#d8a039" style="animation-delay:-2.023149193576255s">e</text></g><style type="text/css">@keyframes ldp-matrix {0% { opacity: 1; fill: #d9b36c;}10% { opacity: 1; fill: #d8a039; }50% { opacity: 0}100% { opacity: 0}} .custom_Background text{animation: ldp-matrix 3.3333333333333335s linear infinite;transform: scaleX(0.7);}</style></g></g></pattern></defs><rect x="0" y="0" width="'+VidConfigs.SVGwidth+'" height="'+VidConfigs.SVGheight+'" fill="url(#pid-0.3645732756306683)"></rect></g></svg>'       
                }
                
            
            //width="'+VidConfigs.SVGwidth+'" height="'+VidConfigs.SVGheight+'" 
            //mains - massSpeakingtool managers
                //Handles speaking
                //main manager (2) version 9 - mission ready -- //main manager (1) version 1-7 - failures
                async function massSpeakingtoolv9(tester,pData,i,oldpData,oldi,VidConfigs,repeatRejecttion,updateVars){
                    //Start of massSpeakingtoolv9
                        //console.log("Before each speak ?")
                        var timeoutResumeInfinity
                        clearTimeout(timeoutResumeInfinity);
                        var deferred = $.Deferred();
                        
                        window.speechSynthesis.cancel();
                        if(pData.length == i){
                            var promiseTEMP =  massSpeakingtoolv9(tester,oldpData,(oldi)+1,oldpData[0].olddata,oldpData[0].oldi,VidConfigs,repeatRejecttion,updateVars)
                            promiseTEMP.then(function(result) {
                                deferred.resolve(i);
                            }) 
                        }
                        else{
                            //console.log('NEW _________________' )
                            
                            if (pData[i].used){
                                console.log('repeet out of if' )
                                //console.log(pData[i].com)
                            }
                            
                            var allVoices = window.speechSynthesis.getVoices();
                            console.log(allVoices)
                            var BotVoicer = new SpeechSynthesisUtterance();
                            BotVoicer.voice = allVoices[VidConfigs.SpeakType]
                            BotVoicer.rate = VidConfigs.SpeakRate
                            BotVoicer.pitch = 1
                            BotVoicer.text = textfixer(pData[i].com)
                            //fakeonstart
                            var fakeonstart = async function(e) {
                                clearTimeout(timeoutResumeInfinity);
                                resumeInfinity(pData[i].com);
                                //pageEdittest(pData,i,oldpData,oldi,VidConfigs)
                                
                                if((i == 0)&&(oldpData == null)){
                                    intropage(pData,i,VidConfigs)
                                    console.log("what the fuck")
                                }else{
                                        if (occurrences(pData[i].com,"<a href") > 0){
                                            if (countInArraycom(repeatRejecttion, pData[i].com) >= occurrences(pData[i].com,"<a href")){
                                                //console.log("force Cancel ok repeat")
                                                window.speechSynthesis.cancel();
                                                updateVars.playcc = true
                                            }else{
                                                //console.log(countInArraycom(repeatRejecttion, pData[i].com),occurrences(pData[i].com,"<a href"))
                                                if (pData[i].com.includes("http")){
                                                    window.speechSynthesis.cancel();
                                                }else{
                                                    //video manger test
                                                    //console.log("Com used 1 in start",pData[i].used)
                                                    if (pData[i].used){
                                                        //console.log('repeated inside of if' )
                                                        //console.log(pData[i].com)
                                                        //console.log("force Cancel inbound")
                                                        window.speechSynthesis.cancel();
                                                    }else{
                                                        pageEdittest(pData,i,oldpData,oldi,VidConfigs)
                                                    }
                                                }
                                            }
                                        }else{
                                        if (pData[i].used){
                                                    //console.log('repeated inside of if' )
                                                    //console.log(pData[i].com)
                                                    //console.log("force Cancel inbound")
                                                    window.speechSynthesis.cancel();
                                        }else{
                                            pageEdittest(pData,i,oldpData,oldi,VidConfigs)
                                        }
                                        }    
                                }
                                
                                
                                
                                pData[i].used = true
                            }
                            //fakeonend
                            var fakeonend = function(e) {
                            //inside onend (top)
                                //Resets Speaker
                                //console.log('resume off' ,i)
                                //pData[i].used = true
                                //console.log("Com used 3 in end __ ",pData[i].used)
                                
                                var tempoj = {}
                                    tempoj.com = pData[i].com
                                    tempoj.run = occurrences(pData[i].com,"<a href")
                                
                                repeatRejecttion.push(tempoj) 
                                //console.log("repeatRejecttion",repeatRejecttion)
                                
                                clearTimeout(timeoutResumeInfinity);
                                clearTimeout(timeoutResumeInfinity);
                                window.speechSynthesis.cancel();

                                //This is to Play_cut_card at every 5 post - failed
                                function Play_cut_card(tester,pData,i,oldpData,oldi,repeatRejecttion,updateVars){
                                //inside Play_cut_card (top)
                                    var end = window.performance.now();
                                    var time = end - updateVars.startTime;
                                    //console.log("curr time",(end/1000)/60)
                                    //console.log("eleasp time",(time/1000)/60)
                                    //console.log("vidLength",VidConfigs.vidLength)
                                    
                                    if(((time/1000)/60) >= (VidConfigs.vidLength * 0.9)){
                                        updateVars.timecut = true
                                    }
                                    
                                    //console.log(updateVars.timecut,"updateVars.timecut") 
                                    //updateVars.timecut = false // for test iiiiiiiiiiii 
                                    
                                    if((updateVars.timecut) && (oldpData == null)){
                                        //console.log("vidcutter here")
                                        updateVars.timecut = false
                                        var promisecutp1 = endinfopage(tester,pData,0,oldpData,oldi,repeatRejecttion,updateVars,VidConfigs)
                                        promisecutp1.then(async function(result) {
                                            var promisecutp2 = endinfocard(tester,pData,0,oldpData,oldi,repeatRejecttion,updateVars,VidConfigs)
                                            promisecutp2.then(async function(result) {
                                                var promisecutp3 = setLagpage(tester,pData,0,oldpData,oldi,repeatRejecttion,updateVars,VidConfigs)
                                                promisecutp3.then(async function(result) {
                                                    var allVoices = window.speechSynthesis.getVoices();
                                                    var Backup = new SpeechSynthesisUtterance(); 
                                                        Backup.voice = allVoices[VidConfigs.SpeakType]
                                                        Backup.rate = VidConfigs.SpeakRate
                                                        Backup.pitch = 1
                                                        Backup.text = pData[0].com;
                                                        Backup.onstart = function(e){
                                                            intropage(pData,0,VidConfigs)
                                                            resumeInfinity();
                                                        }
                                                        Backup.onend = function(e) {
                                                            clearTimeout(timeoutResumeInfinity);
                                                            //console.log('on to next comment _________________ F' )
                                                            updateVars.timecut = false
                                                            updateVars.startTime = window.performance.now();
                                                            pData[i].used = false
                                                            massSpeakingtoolv9(tester,pData,i,oldpData,oldi,VidConfigs,repeatRejecttion,updateVars)
                                                        };
                                                    window.speechSynthesis.cancel();
                                                    window.speechSynthesis.speak(Backup); 
                                                    
                                                })     
                                            })
                                        })
                                        
                                        
                                        //intro (tester,pData,i,oldpData,oldi,repeatRejecttion,updateVars)
                                        
                                        
                                        //var promiseTEMP = pageCutCard(pData,i,oldpData,oldi,VidConfigs)
                                        //promiseTEMP.then(function(result) { 
                                            //This is to step in to a level of replys (Steps In) 
                                            //Steps_in_helper(tester,pData,i,oldpData,oldi,repeatRejecttion,updateVars)
                                        //})  
                                    }else{
                                        if((pData.length == i)&& (oldpData == null)){
                                            deferred.resolve(i);
                                        }else{
                                            if (!(updateVars.playcc)){
                                                if((pData[i].fullwc % VidConfigs.vidCCWspace) <= (VidConfigs.vidCCWspace*.20)){updateVars.playcc = true 
                                                }else{ updateVars.playcc = false}
                                                if((pData[i].fullindex%6)==0){updateVars.playcc = true }
                                                if(pData[i].fullwc <= VidConfigs.vidCCWspace){updateVars.playcc = false }
                                                if ((i == 0)&&(oldpData == null)){updateVars.playcc = true}
                                                if (pData[i].wordcount >= 190){updateVars.playcc = true}
}else{
                                              updateVars.playcc = false  
                                            }
                                            if (testing){ //The Help notes

                                                //console.log("wordcount",pData[i].wordcount)    
                                                //console.log("word%%",(pData[i].fullwc % VidConfigs.vidCCWspace))    
                                                //console.log("word%% t/f",(pData[i].fullwc % VidConfigs.vidCCWspace) <= (VidConfigs.vidCCWspace*.20)) 
                                                //console.log("forced",(pData[i].fullwc <= VidConfigs.vidCCWspace))
                                                //console.log("playcc",updateVars.playcc)
                                                //console.log("fullindex",(pData[i].fullindex%2)==0)
}

                                            if (updateVars.playcc) { //This is to Play_cut_card at every 5 post

                                                if (testing){ //The Help notes
                                                    //console.log(" ----- promiseTEMP type 0 - (Play cc)");
                                                }
                                                var promiseTEMP = pageCutCard(pData,i,oldpData,oldi,VidConfigs)
                                                promiseTEMP.then(function(result) { 
                                                    //This is to step in to a level of replys (Steps In) 
                                                    Steps_in_helper(tester,pData,i,oldpData,oldi,repeatRejecttion,updateVars)
                                                })
                                            }else{
                                                    //This is to step in to a level of replys (Steps In) 
                                                 Steps_in_helper(tester,pData,i,oldpData,oldi,repeatRejecttion,updateVars)  
                                            } 
                                        }
                                    }
                                    
                                    
                                //inside Play_cut_card (bottom)
                                } 
                                //This is to step in to a level of replys (Steps In)
                                function Steps_in_helper(tester,pData,i,oldpData,oldi,repeatRejecttion,updateVars){
                                //inside Steps In (top)   
                                    if (pData[i].replies.length != 0) { //This is to step in to a level of replys (Steps In)
                                    pData[i].replies[0].oldi = i
                                    pData[i].replies[0].olddata = pData
                                    //console.log(" ----- promiseTEMP type 1 - (Steps In)");
                                    var promiseTEMP = massSpeakingtoolv9(tester,pData[i].replies,0,pData,i,VidConfigs,repeatRejecttion,updateVars)
                                    promiseTEMP.then(function(result) { 
                                        //This is to step to the next replys (Steps Down)
                                        Steps_do_helper(tester,pData,i,oldpData,oldi,repeatRejecttion,updateVars)
                                    })
                                    }else{
                                        //This is to step to the next replys (Steps Down)
                                        Steps_do_helper(tester,pData,i,oldpData,oldi,repeatRejecttion,updateVars)  
                                    }
                                //inside Steps In (bottom)
                                }
                                //This is to step to the next replys (Steps Down)
                                function Steps_do_helper(tester,pData,i,oldpData,oldi,repeatRejecttion,updateVars){
                                //inside Steps Down (top)
                                    if((i+1)< pData.length){ //This is to step to the next replys (Steps Down)
                                        pData[i+1].oldi = pData[i].oldi

                                        if (pData[i].oldi != null){
                                            if (pData[i].oldi > pData[i].olddata.length){ 
                                                    pData[i+1].oldi = oldi;
                                                    pData[i].oldi = oldi;
                                            }
                                        }
                                        pData[i+1].olddata = pData[i].olddata
                                        var promiseTEMP =  massSpeakingtoolv9(tester,pData,(i+1),pData[i].olddata,pData[i].oldi,VidConfigs,repeatRejecttion,updateVars)
                                        promiseTEMP.then(function(result) { 
                                            //This is to step to the next lead (Steps Out)
                                            Steps_ou_helper(tester,pData,i,oldpData,oldi,repeatRejecttion,updateVars)
                                        })
                                    }else{
                                        //This is to step to the next lead (Steps Out)
                                        Steps_ou_helper(tester,pData,i,oldpData,oldi,repeatRejecttion,updateVars) 
                                    } 
                                //inside Steps Down (bottom)
                                }
                                //This is to step to the next lead (Steps Out)
                                function Steps_ou_helper(tester,pData,i,oldpData,oldi,repeatRejecttion,updateVars){
                                //inside Steps out (top)
                                    //pData[i].used = true
                                    if (((i+1) == pData.length)&&(oldpData != null)&&(oldi != null)&&(!(pData[i].used))){ //This is to step to the nextlead (Steps Out)
                                        pData[i].olddata = oldpData
                                        pData[i].oldi = oldi
                                        var promiseTEMP =  massSpeakingtoolv9(tester,oldpData,(oldi)+1,(pData[i].olddata[0].olddata),(pData[i].olddata[0].oldi),VidConfigs,repeatRejecttion,updateVars)
                                        promiseTEMP.then(function(result) { 
                                            //deferred.resolve(i);

                                            deferred.resolve(i);
                                        })
                                          
                                    }else{

                                        deferred.resolve(i);
                                    }      
                                //inside Steps out (bottom)    
                                }
                                
                                Play_cut_card(tester,pData,i,oldpData,oldi,repeatRejecttion,updateVars)
                                //This is to Play_cut_card at every incer of post
                                
                                
                            //inside onend (bottom)
                            }
                            //real time setters
                            BotVoicer.onstart = function(e) {fakeonstart(e)}
                            BotVoicer.onend = function(e) {fakeonend(e)}
                            BotVoicer.onerror = function(e){console.log(".speak(BotVoicer) - error")}
                            BotVoicer.onpause = function(e){console.log(".speak(BotVoicer) - pause")}
                            BotVoicer.onresume = function(e){console.log(".speak(BotVoicer) - resume")}
                            BotVoicer.onmark = function(e){console.log(".speak(BotVoicer) - mark")}
                            BotVoicer.onboundary = function(e){console.log(".speak(BotVoicer) - boundary")}
                            window.speechSynthesis.cancel();
                            //console.log("Com used before speak",pData[i].used)
                            if (!(pData[i].used)){
                                //pData[i].used = true
                                window.speechSynthesis.cancel();
                                clearTimeout(timeoutResumeInfinity);
                                window.speechSynthesis.speak(BotVoicer);
                                //console.log('resumeInfinity')
                                resumeInfinity()
                                //console.log("window.speechSynthesis.speak(BotVoicer) - Com:", BotVoicer.text);
                                //console.log("Step: " + i);
                            }  
                        }  
                    //reture sub end    
                    return deferred.promise();    
                    //end of massSpeakingtoolv8
                    }
            //Every else thing has to go in here
                videoPageSetUp() //New Page
                
                console.log(VidConfigs);    
            
                //intropage(VidConfigs.ALLDATA,0,VidConfigs)
            
            
            
                STARTpromise2 = setLagpage("null","null","null","null","null","null","null",VidConfigs)
                STARTpromise2.then(function(result) {
                    theRealCode(pData,VidConfigs)
                })
            
                //console.log("here");
                //console.log(VidConfigs);
                //console.log(VidConfigs.ALLDATA,0,null,null,VidConfigs);
                //pageEdittest(VidConfigs.ALLDATA,0,null,null,VidConfigs)
            
            
            
            
            async function theRealCode(pData,VidConfigs){
            //THE REAL CODE
                var repeatRejecttion = []    
                window.speechSynthesis.cancel();
                STARTpromise = rawspeaktool("MassSearcher",0)
                STARTpromise.then(function(result) {
                    var updateVars = {}
                    updateVars.playcc = false
                    updateVars.startTime = window.performance.now();
                    updateVars.timecut = false
                    var promise_massSpeakingtoolv9 = massSpeakingtoolv9(0,VidConfigs.ALLDATA,0,null,null,VidConfigs,repeatRejecttion,updateVars)
                    promise_massSpeakingtoolv9.then(function(result) {
                        //end stuff
                        //console.log("null",VidConfigs.ALLDATA,0,null,null,repeatRejecttion,updateVars,VidConfigs);
                        var promisecutp1 = endinfopage("null",VidConfigs.ALLDATA,0,null,null,repeatRejecttion,updateVars,VidConfigs)
                        promisecutp1.then(async function(result) {
                            //console.log("null",VidConfigs.ALLDATA,0,null,null,repeatRejecttion,updateVars,VidConfigs);
                            var promisecutp2 = endinfocard("null",VidConfigs.ALLDATA,0,null,null,repeatRejecttion,updateVars,VidConfigs)
                            promisecutp2.then(async function(result) {
                                    //clearTimeout(timeoutResumeInfinity);
                                    console.log("promise_massSpeakingtoolv9 - THE BIG DONE");
                                    console.log("promise_massSpeakingtoolv9 - Result: " + result);
                                    //clean House
                                    d3.selectAll("body *").remove()
                                    d3.select("body").append("p").text("promise_massSpeakingtoolv9 - THE BIG DONE")
                                    d3.select("body").append("p").text("promise_massSpeakingtoolv9 - Result: " + result)
                                    d3.select("body").append("div").html('<svg viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg"><style>.small { font: italic 13px sans-serif; }.heavy { font: bold 30px sans-serif; }/* Note that the color of the text is set with the    ** fill property, the color property is for HTML only */.Rrrrr { font: italic 40px serif; fill: red; }</style><text x="20" y="35" class="small">The</text><text x="40" y="35" class="heavy">Big</text><text x="55" y="55" class="small">Done</text><text x="65" y="55" class="Rrrrr">MAlACHI!</text></svg>') 
                            })
                        })
                   })                       
                })
            //THE REAL CODE
            }
            
            //theRealCode(pData,VidConfigs)
            
            //end of it
            })}else {$('#modal1').openModal();}
        //(bottom) - TMSVidMain(Data,VidConfigs)
        }
    //Starts
        convertDataPromise()
}

mainFunction()
