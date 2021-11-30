//main function for the success of malachi
var mainFunction = function(){
        var test = false
 
    
    //drawing to pages
        //draws main page
        var drawBroadpage = function(){
        //Remove
        d3.selectAll("body *").remove()
        //Heading
        d3.select("body").append("div").attr("id","heading")

            //Box 1 - TMS
            d3.select("#heading").append("div").attr("id","heading-tms").attr("class","heading-box")
                d3.select("#heading-tms").append("p").attr("id","p-tms").attr("class","heading-text").text("TMS")

            //Box 2 - "Choose a Broad"
            d3.select("#heading").append("div").attr("id","heading-banner").attr("class","heading-box")
                d3.select("#heading-banner").append("p").attr("id","p-banner").attr("class","heading-text").text("Choose a Broad")

            //Box 3 - "4 Chan Safe Display/Converter"
            d3.select("#heading").append("div").attr("id","heading-title").attr("class","heading-box")
                d3.select("#heading-title").append("p").attr("id","p-title").attr("class","heading-text").text("4 Chan Safe Display")

            //Box 4 - "Featured Broads"
            d3.select("#heading").append("div").attr("id","heading-featured").attr("class","heading-box")
                d3.select("#heading-featured").append("p").attr("id","p-featured").attr("class","heading-text").text("Featured Broads")
                //Button 1 - Advice
                    d3.select("#heading-featured").append("div").attr("id","one-featured").attr("class","featured-but")
                        d3.select("#one-featured").append("p").attr("id","adv-featured").attr("class","featured-text heading-text").text("Advice")
                //Button 2 - Quest
                    d3.select("#heading-featured").append("div").attr("id","two-featured").attr("class","featured-but")
                        d3.select("#two-featured").append("p").attr("id","que-featured").attr("class","featured-text heading-text").text("Quest")
                //Button 3 - Home
                    d3.select("#heading-featured").append("div").attr("id","thr-featured").attr("class","featured-but")
                        d3.select("#thr-featured").append("p").attr("id","hom-featured").attr("class","featured-text heading-text").text("Home")
                //Button 4 - Back
                    d3.select("#heading-featured").append("div").attr("id","fou-featured").attr("class","featured-but")
                        d3.select("#fou-featured").append("p").attr("id","pur-featured").attr("class","featured-text heading-text").text("Back")

            //Box 5 - "Olny if err"
            d3.select("#heading").append("div").attr("id","heading-err").attr("class","heading-box")

        //Aside
        d3.select("body").append("div").attr("id","aside")

            d3.select("#aside").append("div").attr("id","aside-warning").attr("class","aside-box")
                d3.select("#aside-warning").append("p").attr("id","p-warning").attr("class","aside-text").text("Click Here for Warning")

            d3.select("#aside").append("div").attr("id","aside-description").attr("class","aside-box")
                d3.select("#aside-description").append("p").attr("id","p-description").attr("class","aside-text").text("Description")

            d3.select("#aside").append("div").attr("id","aside-info").attr("class","aside-box")
                d3.select("#aside-info").append("p").attr("id","p-info").attr("class","aside-text").text("Info")
            
            d3.select("#aside").append("div").attr("id","aside-Con").attr("class","aside-box")
                d3.select("#aside-Con").append("p").attr("id","p-Con").attr("class","aside-text")
                    d3.select("#p-Con").append("a").attr("href","convert.html").text("Convert Link")
            

        //B Boxes 
        d3.select("body").append("div").attr("id","B-Holder")
        d3.select("body").append("div").attr("id","bottom")

        //Links to code
        d3.select("body").append("script").attr("src", "https://d3js.org/d3.v5.min.js")
        d3.select("body").append("link").attr("href", "style.css").attr("rel","stylesheet").attr("type","text/css")
        d3.select("body").append("script").attr("type","text/javascript").attr("src","script.js")
 }
        //draws sec page
        var drawthreadpage = function(page){
        //Remove
        d3.selectAll("body *").remove()
        //Heading
        d3.select("body").append("div").attr("id","heading")

            //Box 1 - TMS
            d3.select("#heading").append("div").attr("id","heading-tms").attr("class","heading-box")
                d3.select("#heading-tms").append("p").attr("id","p-tms").attr("class","heading-text").text("TMS")

            //Box 2 - "Choose a Broad"
            d3.select("#heading").append("div").attr("id","heading-banner").attr("class","heading-box")
                d3.select("#heading-banner").append("p").attr("id","p-banner").attr("class","heading-text").text("Choose a Broad")

            //Box 3 - "4 Chan Safe Display/Converter"
            d3.select("#heading").append("div").attr("id","heading-title").attr("class","heading-box")
                d3.select("#heading-title").append("p").attr("id","p-title").attr("class","heading-text").text("4 Chan Safe Display")

            //Box 4 - "Featured Broads"
            d3.select("#heading").append("div").attr("id","heading-featured").attr("class","heading-box")
                d3.select("#heading-featured").append("p").attr("id","p-featured").attr("class","heading-text").text("Featured Broads")
                //Button 1 - Advice
                    d3.select("#heading-featured").append("div").attr("id","one-featured").attr("class","featured-but")
                        d3.select("#one-featured").append("p").attr("id","adv-featured").attr("class","featured-text heading-text").text("Advice")
                //Button 2 - Quest
                    d3.select("#heading-featured").append("div").attr("id","two-featured").attr("class","featured-but")
                        d3.select("#two-featured").append("p").attr("id","que-featured").attr("class","featured-text heading-text").text("Quest")
                //Button 3 - Home
                    d3.select("#heading-featured").append("div").attr("id","thr-featured").attr("class","featured-but")
                        d3.select("#thr-featured").append("p").attr("id","hom-featured").attr("class","featured-text heading-text").text("Home")
                //Button 4 - Back
                    d3.select("#heading-featured").append("div").attr("id","fou-featured").attr("class","featured-but")
                        d3.select("#fou-featured").append("p").attr("id","pur-featured").attr("class","featured-text heading-text").text("Back")

            //Box 5 - "Olny if err"
            d3.select("#heading").append("div").attr("id","heading-err").attr("class","heading-box")

        //T boxes
        d3.select("body").append("div").attr("id","T-Holder")
        d3.select("body").append("div").attr("id","T-info")
        d3.select("body").append("div").attr("id","bottom")

        //Page Nav
        d3.select("#bottom").append("div").attr("class","pagebutton").attr("id","pagebutton1").text("<<< page")
        d3.select("#bottom").append("div").attr("class","pagebutton").attr("id","pagebutton2").text("Curr page: " +(page+1))
        d3.select("#bottom").append("div").attr("class","pagebutton").attr("id","pagebutton3").text("page >>>")

        //Links to code
        d3.select("body").append("script").attr("src", "https://d3js.org/d3.v5.min.js")
        d3.select("body").append("link").attr("href", "style.css").attr("rel","stylesheet").attr("type","text/css")
        d3.select("body").append("script").attr("type","text/javascript").attr("src","script.js")
}
        //draws post page
        var drawpostpage = function(page){
            //Remove
            d3.selectAll("body *").remove()
            //Heading
            d3.select("body").append("div").attr("id","heading")

                //Box 1 - TMS
                d3.select("#heading").append("div").attr("id","heading-tms").attr("class","heading-box")
                    d3.select("#heading-tms").append("p").attr("id","p-tms").attr("class","heading-text").text("TMS")

                //Box 2 - "Choose a Broad"
                d3.select("#heading").append("div").attr("id","heading-banner").attr("class","heading-box")
                    d3.select("#heading-banner").append("p").attr("id","p-banner").attr("class","heading-text").text("Choose a Broad")

                //Box 3 - "4 Chan Safe Display/Converter"
                d3.select("#heading").append("div").attr("id","heading-title").attr("class","heading-box")
                    d3.select("#heading-title").append("p").attr("id","p-title").attr("class","heading-text").text("4 Chan Safe Display")

                //Box 4 - "Featured Broads"
                d3.select("#heading").append("div").attr("id","heading-featured").attr("class","heading-box")
                    d3.select("#heading-featured").append("p").attr("id","p-featured").attr("class","heading-text").text("Featured Broads")
                    //Button 1 - Advice
                        d3.select("#heading-featured").append("div").attr("id","one-featured").attr("class","featured-but")
                            d3.select("#one-featured").append("p").attr("id","adv-featured").attr("class","featured-text heading-text").text("Advice")
                    //Button 2 - Quest
                        d3.select("#heading-featured").append("div").attr("id","two-featured").attr("class","featured-but")
                            d3.select("#two-featured").append("p").attr("id","que-featured").attr("class","featured-text heading-text").text("Quest")
                    //Button 3 - Home
                        d3.select("#heading-featured").append("div").attr("id","thr-featured").attr("class","featured-but")
                            d3.select("#thr-featured").append("p").attr("id","hom-featured").attr("class","featured-text heading-text").text("Home")
                    //Button 4 - Back
                        d3.select("#heading-featured").append("div").attr("id","fou-featured").attr("class","featured-but")
                            d3.select("#fou-featured").append("p").attr("id","pur-featured").attr("class","featured-text heading-text").text("Back")

                //Box 5 - "Olny if err"
                d3.select("#heading").append("div").attr("id","heading-err").attr("class","heading-box")

            //P boxes
            d3.select("body").append("div").attr("id","P-Holder")

            //Page Nav
            d3.select("#bottom").append("div").attr("class","pagebutton").attr("id","pagebutton1").text("<<< page")
            d3.select("#bottom").append("div").attr("class","pagebutton").attr("id","pagebutton2").text("Curr page: " +(page+1))
            d3.select("#bottom").append("div").attr("class","pagebutton").attr("id","pagebutton3").text("page >>>")

            //Links to code
            d3.select("body").append("script").attr("src", "https://d3js.org/d3.v5.min.js")
            d3.select("body").append("link").attr("href", "style.css").attr("rel","stylesheet").attr("type","text/css")
            d3.select("body").append("script").attr("type","text/javascript").attr("src","script.js")
        } 
    //Web events
        //Web page event for the Boards pages
        var boardWebEvent = function(boards){
            primaryAddToPageData(boards.boards)
} 
        //Web page event for the threads pages
        var threadWebEvent = function(threads,threadlink,page){
            secondaryAddToPageData(threads,threadlink,page)
}
        //Web page event for the post pages
        var postsWebEvent = function(posts,postslink,threadlink,page){
        tertiaryAddToPageData(posts,postslink,threadlink,page)
        
        return "Home"}
        //Web page event for the Convert pages
        var convertWebEvent = function(posts,postslink,threadlink){
        convertAddToPageData(posts,postslink,threadlink)
        }
    //Promises
        //convert Data Promise - Gets Posts for thread
        var convertDataPromise = function(){
            // Grabbing button
            var dateStart = document.getElementById('LinkGetter');
            
            //Getting values        
            d3.select("#CONbutton1").on("click",function(){
                var hardLink = dateStart.value.replace('http://boards.4channel.org/','').split('/thread/');
                var BASELINK = "https://cors-anywhere.herokuapp.com/"
                var REALLINK = "https://a.4cdn.org/"+hardLink[0]+"/thread/"+hardLink[1]+".json"
            //Promise Main
                
            d3.select("#R-Holder").append("p").text("loading ...")
                
            var dataPromise = d3.json(hardLink[0]+hardLink[1]+"posts.json")
            if (!test){var dataPromise = d3.json(BASELINK+REALLINK)}
            dataPromise.then(
                function(posts)
                {
                    console.log("(OBJECT --) Posts: ", posts)
                    //console.log("(OBJECT EX) ^- EX: posts.posts[1].com: ", posts.posts[1].com)
                    convertWebEvent(posts,hardLink[1],hardLink[0])
                    //note
                    addconvertInfo("Converter",hardLink[0],hardLink[1],REALLINK) 
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
        //Tertiary Data Promise - Gets Posts for thread
        var tertiaryDataPromise = function(threadData,postslink,threadlink,page){
            //Promise Prep
            var BASELINK = "https://cors-anywhere.herokuapp.com/"
            var REALLINK = "https://a.4cdn.org/"+threadlink+"/thread/"+postslink+".json"
            //Promise Main
            var dataPromise = d3.json(threadlink+postslink+"posts.json")
            if (!test){var dataPromise = d3.json(BASELINK+REALLINK)}
            dataPromise.then(
                function(posts)
                {
                    console.log("(OBJECT --) Posts: ", posts)
                    //console.log("(OBJECT EX) ^- EX: posts.posts[1].com: ", posts.posts[1].com)
                    postsWebEvent(posts,postslink,threadlink,page)
                    //note
                    addconvertInfo("Tertiary",threadlink,postslink,REALLINK)
                },
                function(err)
                {
                    console.log("(ERR -M) Failure - Error : ", err)
                    d3.selectAll("#heading-err *").remove()
                    d3.select("#heading-err").append("p").attr("id","heading-errs").text("Load failed - Check Console")
                }
            )     
}
        //Secondary Data Promise - Gets Threads for broad
        var secondaryDataPromise = function(threadlink,page){
            //note
            console.log("----------------------------------")
            console.log("(PROCESS -) Secondary Data Promise")
            //Promise Prep
            var BASELINK = "https://cors-anywhere.herokuapp.com/"
            var REALLINK = "https://a.4cdn.org/"+threadlink+"/threads.json"
            console.log("(LINK - FR) *** REALLINK TO USE (for: "+threadlink+"):",REALLINK )
            console.log("(FILE - FR) *** FILELINK TO USE (for: "+threadlink+"): "+threadlink+"threads.json")
            //Promise Main
            //var dataPromise = d3.json(BASELINK+REALLINK)
            var dataPromise = d3.json(threadlink+"threads.json")
            if (!test){var dataPromise = d3.json(BASELINK+REALLINK)}
            dataPromise.then(
                function(threads)
                {
                    //console.log("(OBJECT --) threads: ", threads)
                    //console.log("(OBJECT EX) ^- EX: threads[0].threads[0].no: ", threads[0].threads[0].no)

                    threadWebEvent(threads,threadlink,page) 
                },
                function(err)
                {
                    console.log("(ERR -M) Failure - Error : ", err)
                    d3.selectAll("#heading-err *").remove()
                    d3.select("#heading-err").append("p").attr("id","heading-errs").text("Load failed - Check Console")
                }
            ) 
}  
        //Primary Data Promise - Gets broads
        var primaryDataPromise = function(){
        //note
        //console.log("----------------------------------")
        //console.log("(PROCESS -) Primary Data Promise")
        //Promise Prep
        var BASELINK = "https://cors-anywhere.herokuapp.com/" 
        var REALLINK = "https://a.4cdn.org/boards.json"
        //var dataPromise = d3.json(BASELINK+"https://a.4cdn.org/boards.json")
        var dataPromise = d3.json("boards.json")
        if (!test){var dataPromise = d3.json(BASELINK+REALLINK)}
        //console.log("(LINK - FR) *** REALLINK TO USE (for: boards):",REALLINK )
        //console.log("(FILE - FR) *** FILELINK TO USE (for: boards): boards.json")  
        //Promise Main
        dataPromise.then(
            function(boards)
            {
                //console.log("(OBJECT --) boards: ", boards)
                //drawBroadpage()
                //console.log("(OBJECT EX) ^- EX: boards.boards[3].board: ", boards.boards[3].board)
                boardWebEvent(boards)
            },
            function(err)
            {
                console.log("(ERR -M) Failure - Error : ", err)
                d3.selectAll("#heading-err *").remove()
                d3.select("#heading-err").append("p").attr("id","heading-errs").text("Load failed - Check Console")
            
            })
    }
    //add to pages   
        //Adds Primary Data from Promise to a page
        var primaryAddToPageData = function(Data){     
            d3.selectAll("#B-Holder *").remove()
            
            d3.select("#B-Holder")
            .append("div")
            .selectAll("span")
            .data(Data)
            .enter()
            .append("div")
            .attr("class","threads_icon")
            .attr("id",function(Data){return "id_" + Data.board})
            .text(function(Data){return Data.title})
            .on("click",function(aData){
                //console.log("(PATH TEST)",aData)
                secondaryDataPromise(aData.board,0)
                    }   )
            .on("mouseover",function(aFilmData){
                    d3.selectAll("#aside-description *").remove()

                    d3.select("#aside-description").append("p").attr("id","p-description").attr("class","aside-text").text("Description :")

                    d3.select("#aside-description")
                        .append("p")
                        .attr("class","thread_description")
                        .text(function(){return aFilmData.meta_description})


                    d3.selectAll("#aside-info *").remove()

                    d3.select("#aside-info").append("p").attr("id","p-description").attr("class","aside-text").text("Info :")

                    d3.select("#aside-info")
                        .append("p")
                        .attr("class","thread_description")
                        .text(function(){return "Title: "+aFilmData.title})

                    d3.select("#aside-info")
                        .append("p")
                        .attr("class","thread_description")
                        .text(function(){return "Pages: "+aFilmData.pages})
            })
            topNavButtons("home","null",0)
            warningbutton()
}
        //Adds Secondary Data from Promise to a page
        var secondaryAddToPageData = function(Data,datalink,page){ 
            drawthreadpage(page)
            //console.log("*******(PATH TEST)",Data)
            //console.log("*******(PATH TEST)",Data[0].threads)
            d3.select("#T-Holder")
            .append("div")
            .selectAll("span")
            .data(Data[page].threads)
            .enter()
            .append("div")
            .attr("class","threads_icon threadSingle_icon")
            .attr("id",function(aData){return "id_" + aData.no})
            .text(function(aData){return aData.no})
            .on("click",function(aData){
                //console.log("(PATH TEST)",aData)
                //console.log("(PATH TEST)",datalink)
                //console.log("(PATH TEST)",aData.no)
                tertiaryDataPromise(Data,aData.no,datalink,page)
                    }   )
            .on("mouseover",function(aFilmData){
                    d3.selectAll("#T-Info *").remove()

                    d3.select("#aside-description").append("p").attr("id","p-description").attr("class","aside-text").text("Description :")

                    d3.select("#aside-description")
                        .append("p")
                        .attr("class","thread_description")
                        .text(function(){return aFilmData.meta_description})


                    d3.selectAll("#T-info *").remove()

                    d3.select("#T-info").append("p").attr("id","p-description").attr("class","aside-text").text("Info :",datalink)

                    d3.select("#T-info")
                        .append("p")
                        .attr("class","thread_description")
                        .text(function(){return "last_modified: "+aFilmData.last_modified})

                    d3.select("#T-info")
                        .append("p")
                        .attr("class","thread_description")
                        .text(function(){return "replies: "+aFilmData.replies})
            })
            //page nav 
            d3.select("#pagebutton1").on("click",function(){
                if(page > 0){
                    secondaryAddToPageData(Data,datalink,page-1)}
                else{console.log((page > 1)+" -Not able:"+ page)}
            })
            d3.select("#pagebutton2").on("click",function(){
                console.log("Page:"+ page)  
                    })
            d3.select("#pagebutton3").on("click",function(){
                if(page < 5){secondaryAddToPageData(Data,datalink,page+1)}  
                    else{console.log((page > 5)+" +Not able:"+ page)}
            })

            //Top nav
            topNavButtons("home","null",0)

            //console.log("********S*****(PATH TEST) done",)            
}
        //Adds Tertiary Data from Promise to a page
        var tertiaryAddToPageData = function(Data,Datalink,Pastlink,oldpage){ 
        drawpostpage()
        //console.log("*******(PATH TEST)",Data)
        //console.log("*******(PATH TEST)",Data.posts)
        
        //addconvertInfo()
        putinreplyMain(Data,"#P-Holder",Datalink,Pastlink)
        
                //d3.select("#T-info")
                    //.append("p")
                    //.attr("class","thread_description")
                    //.text(function(){return "replies: "+aFilmData.replies})
                    
        
        
        //Top nav
            //console.log(Pastlink)
            //console.log(oldpage)
            topNavButtons("thre",Pastlink,oldpage)           
    }       
        //Adds Convert Data from Promise to a page
        var convertAddToPageData = function(Data,Datalink,Pastlink){ 
        //drawpostpage()
        //console.log("*******(PATH TEST)",Data)
        //console.log("*******(PATH TEST)",Data.posts)
            
            //addconvertInfo()
            putinreplyMainConvertPatch(Data,Datalink,Pastlink)
            putinreplyMain(Data,"#R-Holder",Datalink,Pastlink)
            //putinreplyMainConvertPatch()
                //d3.select("#T-info")
                    //.append("p")
                    //.attr("class","thread_description")
                    //.text(function(){return "replies: "+aFilmData.replies})
        //Top nav
            //console.log(Pastlink)
            //console.log(oldpage)
            topNavButtons("thre",Pastlink,0)           
    }       
    //Other fuctions
        //patch to reply adder for converter
        function putinreplyMainConvertPatch(Data,Datalink,Pastlink) {
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
                    //window.open('convert.html', '_blank');
                    videotype(Data,Datalink,Pastlink);
                })
        }   
        //main Post adder function
        function putinreplyMain(Data,where,Datalink,Pastlink) {
            var pData = postConverter(Data.posts,Datalink,Pastlink)
            
            
            
            //console.log("pData",pData)
            d3.selectAll((where+" *")).remove() 
            
            //console.log("where",where)
        
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
            
            
            putInreplysMedia(pData,Pastlink)
            putInreplys(pData,Datalink,Pastlink)              
        }
        //main Post Media adder function
        function putInreplysMedia(pData,Pastlink) {
            var sizefix = 3
            
            
            
            pData.forEach(function(aData){
                console.log("http://is2.4chan.org/"+ Pastlink +"/"+aData.tim+aData.ext)
                
                if(aData.ext == ".jpg"){
                    
                    d3.select("#P" + aData.idnum + aData.chp)
                    .append("p")
                    .append("img")
                    .attr("src",function(aData){return ("http://is2.4chan.org/"+ Pastlink +"/"+aData.tim+aData.ext)})
                    .attr("alt","test")
                    .attr("height",(aData.h)/sizefix)
                    .attr("width",(aData.w)/sizefix)  
                }
               if(aData.ext == ".png"){
                    // 
                    d3.select("#P" + aData.idnum + aData.chp)
                    .append("p")
                    .append("img")
                    .attr("src",function(aData){return ("http://is2.4chan.org/"+ Pastlink +"/"+aData.tim+aData.ext)})
                    .attr("alt","test")
                    .attr("height",(aData.h)/sizefix)
                    .attr("width",(aData.w)/sizefix)  
                }
               if(aData.ext == ".gif"){
                    // 
                    d3.select("#P" + aData.idnum + aData.chp)
                    .append("p")
                    .append("img")
                    .attr("src",function(aData){return ("http://is2.4chan.org/"+ Pastlink +"/"+aData.tim+aData.ext)})
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
                    .attr("src",function(aData){return ("http://is2.4chan.org/"+ Pastlink +"/"+aData.tim+aData.ext)})
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
                                //.append("p")
                                //.append("video")
                                //.attr("src",function(aData){return ("http://is2.4chan.org/"+ Pastlink +"/"+aData.tim+aData.ext)})
                                //.attr("height",function(aData){return (aData.h/4)})
                                //.attr("width",function(aData){return (aData.w/4)})
                            //console.log(element.replies)
                            putInreplysMedia(element.replies,Pastlink)
                            putInreplys(element.replies,Datalink,Pastlink)
                            
                        }
                        if (!(element.filename == undefined)){ 
                            d3.select("#P"+element.idnum + element.chp)
                            .append("div")
                            console.log("http://is2.4chan.org/"+ Pastlink +"/"+element.tim+element.ext)
                        
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
        
        console.log(NotConverter)
        
        if (NotConverter == 1){
            d3.select("#heading-banner")
                .append("p")
                .attr("class","heading-banner_ConvertIntel_part")
                .attr("id","Convert")
                .text("Convert Here: ")
                .append("a")
                .attr("href","massconvert.html")
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
        //top Nav Buttons
        var topNavButtons = function(back,link,page){        
            d3.select("#one-featured").on("click",function(){drawthreadpage();secondaryDataPromise("adv",0)})
            d3.select("#two-featured").on("click",function(){drawthreadpage();secondaryDataPromise("qst",0)})
            d3.select("#thr-featured").on("click",function(){drawBroadpage();primaryDataPromise();})
            d3.select("#fou-featured").on("click",function(){
                if(back == "home"){drawBroadpage();primaryDataPromise();}
                if(back == "thre"){drawthreadpage();;secondaryDataPromise(link,page)}
        })}     
        // warningbutton text    
        var warningbutton = function() {
             d3.select("#aside-warning").on("click",function(){
                 d3.select("#aside-warning")
                    .style("height","")
                 
                 d3.select("#aside-warning")
                    .append("p")
                    .text("4chan can be bad - Like the code for this text")})
        
             }   
        //Gets post and puts them with thire replys
        var postConverter = function(data,Datalink,Pastlink) {
            console.log(data,Datalink,Pastlink)
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
            
            
            
                var hi = true
                //console.log(hi,"POST - ",currPost.no," - :",currPost.com);
                
                
    
                var getReplys = function(data,lookingFor,replyBox,level,oldcode,oldplace,ccplayer) {
                   
                    //console.log("-- Looking Relpys For :",lookingFor);
                    
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
                                    currPost.playCC = ((ccplayer%5)==0)
                                
                                var postnum = []
                                getReplys(data,thePost.no,thePost.replies,(level),thePost.chp,replyBox,ccplayer)//check for replys
                                level = level - 1
                                replyBox.push(thePost)
                                    
                            }
                            
                        }
   
                    })
                //console.log("nums",nums)    
                // return      
                }
                
                //console.log("NOT <a href in it (IS A MAIN COM ? = -- > )", !aPost.com.includes('<a href'))
                //var postnum = []
                //console.log(aPost)
                if (aPost.com == undefined){
                    aPost.com = "undefined"
                    if (!(aPost.filename == undefined))
                    {aPost.com = ("TMS Console - 'UNPROTECTED IMAGE FILE' File Name:", aPost.filename)
                    }else{
                    aPost.com = ("TMS Console - 'UNPROTECTED IMAGE FILE' File Name: CAN NOT LOCATE") 
                    }
   
                }
                //console.log(!aPost.com.includes('<a href'))
                if (!aPost.com.includes('<a href')){
                    
                    getReplys(data,currPost.no,currPost.replies,level,"W",ans,ccplayer)
                    //console.log("postnum",postnum)
                    ans.push(currPost)
                }
                
                //ans.push(currPost)
            })  
            //console.log(ans)    
            return ans;
        }   
    //helper fuctions
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
            d3.select("head").append("script").attr("type","text/javascript").attr("src","script.js")
            d3.select("head").append("link").attr("href", "video.css").attr("rel","stylesheet").attr("type","text/css")
            
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
            d3.select("body").append("link").attr("href", "style.css").attr("rel","stylesheet").attr("type","text/css")
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
            newConfigHelperSetter("SVGwidth",0,2000,1920,configsNames)
            newConfigHelperSetter("SVGheight",0,2000,1080,configsNames)
            newConfigHelperSetter("SVGBackgroundborder_stroke_width",0,200,50,configsNames)
            
            var imagelistresult;
            var imagelist = []
            imagelist = checkimages(pData,Datalink,Pastlink,imagelist)
            console.log(imagelist)
            imagelist.then(function(result) {
                
                configs["ALLDATA"] = pData
                
                imagelistresult = result
                console.log(result[0])
                console.log(imagelistresult) 
                
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
                pData[i].verimageLINK = "http://i.4cdn.org.org/"+ pData[i].Pastlink +"/"+pData[i].tim+pData[i].ext    
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
                        .attr("src",function(aData){return ("http://is2.4chan.org/"+ Pastlink +"/"+aData.tim+aData.ext)})
                        .attr("type","video/webm")
                    }
                }
            }
          return imagelist 
        }
        //Gets links for media
        function mediaGetter(aData,Datalink,Pastlink){
                //console.log(aData)
                var imageLink = "http://is2.4chan.org/"+ aData.Pastlink +"/"+aData.tim+aData.ext 
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
    //video Main stuff
        async function videotype(Data,Datalink,Pastlink) {  
            
            var pData = postConverter(Data.posts,Datalink,Pastlink)
            //moves code linkes from body.
                addLinkCodeHead()
            
            //clean House
                d3.selectAll("body *").remove()
                    //addLinkCodeBody()
            
            //Getting Video Configs
                var VidConfigs = videoPageInfoGetter(pData)
            
                console.log(VidConfigs)
            
            //Starting main system
                TMSVidMain(VidConfigs.ALLDATA,VidConfigs)          
        }
    //The End Game, the goal of this whold thing
    async function TMSVidMain(pData,VidConfigs){
    //(top) - TMSVidMain(Data,VidConfigs)
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

                        return text  
                }
            
                //raw speaking tool
                function rawspeaktool(Stext,i,r){
                        var deferred = $.Deferred();
                        var allVoices = window.speechSynthesis.getVoices();
                        var tester = new SpeechSynthesisUtterance(); 
                            tester.voice = allVoices[5]
                            tester.rate = 1
                            tester.pitch = 1
                            tester.text = Stext;
                            tester.onend = function(e) {
                                //console.log(" --- Test "+(i)+ "."+(r)+" Finished in " + (event.elapsedTime) + " millseconds.");
                                //console.log(" --- Test "+(i)+ "."+(r)+" Finished")
                                deferred.resolve(i);
                            };   

                        //console.log("Before") 
                        window.speechSynthesis.cancel();
                        window.speechSynthesis.speak(tester); 
                        //console.log("After") 
                        return deferred.promise();
                    }
            
                //managing page event
                function pageEdittest(text,i,oldpData,oldi,VidConfigs){
                        //console.log(text,i,oldpData,oldi,VidConfigs)
                        
                        //clean up
                        d3.select("#svg_Video_holder").remove()
                        d3.selectAll("#TEMPtext_holder").remove() 
                        
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
                            .attr("id","PostArtGroup");
                        
                        //Giveing it a namef
                        PostArtGroup = d3.select("#PostArtGroup");
                        
                        var mainX = 50 + Math.floor(Math.random() * 101)
                        var mainY = 100 + Math.floor(Math.random() * 301)
                        
                        //console.log (mainX,mainY,50,100)
                        videopostsetup(mainX,mainY,SVGobject,VidConfigs,text,i,oldpData,oldi)   
                        
                        
                    }  
            //video art tools
                //videoBackgroundArtPicker
                function videoBackgroundArtPicker(theOne,VidConfigs){
                    //For Backgrounds - https://loading.io/pattern/ 
                    var ans = ''
                    if (theOne == 0){
                        ans = MaseLikePatternA_Background(VidConfigs,'id="svg_Video_holder"',";margin-left: 0;")
                    }else if(theOne == 1){
                        ans = MaseLikePatternB_Background(VidConfigs,'id="svg_Video_holder"',";margin-left: 0;")
                    }else if(theOne == 2){
                        ans = MaseLikePatternC_Background(VidConfigs,'id="svg_Video_holder"',";margin-left: 0;")
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
                        .attr("style","font-size: 40px; font-weight: lighter;");
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
                    
                    
                    d3.selectAll("#configs_form_holder *").remove()
                    
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
                                console.log(locHim,locWim)
                            }else{
                                runimage = false
                                i = i + 1
                            }
                        }   
                            
                        
                        
                        //console.log(locXim, locYim);
                        
                        if(text[i].ext != ".webm"){
                            
                            
                            
                            d3.select("#configs_form_holder")
                            .append("img")
                            .attr("src",function(aData){return ("http://is2.4chan.org/"+text[i].Pastlink +"/"+text[i].tim+text[i].ext)})
                            .attr("height",locHim)//(mainH * 0.0278)
                            .attr("width",locWim)//(mainW * 0.0026)
                            .attr("style","position: relative;top: -"+locYim +"px;left: "+  locXim +"px; z-index:9;")
                            
                        }else{
                            
                            d3.select("#configs_form_holder")
                            .append("video")
                            .attr("height",locHim)
                            .attr("width",locWim)
                            .attr("style","position: relative;top: -"+locYim +"px;left: "+  locXim +"px; z-index:9;")
                            .attr("autoplay","")
                            .text("Your browser does not support the video tag.")
                            .append("source")
                            .attr("src",function(aData){return ("http://is2.4chan.org/"+ text[i].Pastlink +"/"+text[i].tim+text[i].ext)})
                            .attr("type","video/webm")
                            
                    
                                }
                            }
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
            
            //mains - massSpeakingtool managers
                //Handles speaking
                //main manager (2) version 9 - mission ready -- //main manager (1) version 1-7 - failures
                async function massSpeakingtoolv9(tester,pData,i,oldpData,oldi,VidConfigs,repeatRejecttion){
                    //Start of massSpeakingtoolv9
                        //console.log("Before each speak ?")
                        var timeoutResumeInfinity
                        clearTimeout(timeoutResumeInfinity);
                        var deferred = $.Deferred();
                        
                        window.speechSynthesis.cancel();
                        if(pData.length == i ){
                            var promiseTEMP =  massSpeakingtoolv9(tester,oldpData,(oldi)+1,oldpData[0].olddata,oldpData[0].oldi,VidConfigs,repeatRejecttion)
                            promiseTEMP.then(function(result) {
                                deferred.resolve(i);
                            }) 
                        }
                        else{
                            //console.log('NEW _________________' )
                            
                            
                            
                            
                            if (pData[i].used){
                                console.log('repeet out of if' )
                                console.log(pData[i].com)
                            }
                            
                            var allVoices = window.speechSynthesis.getVoices();
                            var BotVoicer = new SpeechSynthesisUtterance();
                            BotVoicer.voice = allVoices[5]
                            BotVoicer.rate = 1.90
                            BotVoicer.pitch = 1
                            BotVoicer.text = textfixer(pData[i].com)
                            //fakeonstart
                            var fakeonstart = async function(e) {
                                clearTimeout(timeoutResumeInfinity);
                                //console.log('resume on', i )
                                
                                resumeInfinity(pData[i].com);
                                //pData[i].used = true
                                
                                if (occurrences(pData[i].com,"<a href") > 0){
                                    if (countInArraycom(repeatRejecttion, pData[i].com) >= occurrences(pData[i].com,"<a href")){
                                        console.log("force Cancel ok repeat")
                                    }else{
                                        console.log(countInArraycom(repeatRejecttion, pData[i].com),occurrences(pData[i].com,"<a href"))
                                        if (pData[i].com.includes("http")){
                                            window.speechSynthesis.cancel();
                                        }else{
                                            //video manger test
                                            //console.log("Com used 1 in start",pData[i].used)
                                            if (pData[i].used){
                                                //console.log('repeated inside of if' )
                                                //console.log(pData[i].com)
                                                console.log("force Cancel inbound")
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
                                                console.log("force Cancel inbound")
                                                window.speechSynthesis.cancel();
                                    }else{
                                        pageEdittest(pData,i,oldpData,oldi,VidConfigs)
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
                                function Play_cut_card(tester,pData,i,oldpData,oldi){
                                console.log(pData[i].playCC);
                                //inside Play_cut_card (top)
                                if (pData[i].playCC) { //This is to Play_cut_card at every 5 post
                                    
                                    console.log(" ----- promiseTEMP type 0 - (Play cc)");
                                    var promiseTEMP = pageCutCard(pData,i,oldpData,oldi,VidConfigs)
                                    promiseTEMP.then(function(result) { 
                                        //This is to step in to a level of replys (Steps In) 
                                        Steps_in_helper(tester,pData,i,oldpData,oldi)
                                    })
                                    }else{
                                        //This is to step in to a level of replys (Steps In) 
                                        Steps_in_helper(tester,pData,i,oldpData,oldi)  
                                    }
                                //inside Play_cut_card (bottom)
                                }
                                
                                
                                //This is to step in to a level of replys (Steps In)
                                function Steps_in_helper(tester,pData,i,oldpData,oldi,repeatRejecttion){
                                //inside Steps In (top)   
                                    if (pData[i].replies.length != 0) { //This is to step in to a level of replys (Steps In)
                                    pData[i].replies[0].oldi = i
                                    pData[i].replies[0].olddata = pData
                                    //console.log(" ----- promiseTEMP type 1 - (Steps In)");
                                    var promiseTEMP = massSpeakingtoolv9(tester,pData[i].replies,0,pData,i,VidConfigs,repeatRejecttion)
                                    promiseTEMP.then(function(result) { 
                                        //This is to step to the next replys (Steps Down)
                                        Steps_do_helper(tester,pData,i,oldpData,oldi,repeatRejecttion)
                                    })
                                    }else{
                                        //This is to step to the next replys (Steps Down)
                                        Steps_do_helper(tester,pData,i,oldpData,oldi,repeatRejecttion)  
                                    }
                                //inside Steps In (bottom)
                                }
                                //This is to step to the next replys (Steps Down)
                                function Steps_do_helper(tester,pData,i,oldpData,oldi,repeatRejecttion){
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
                                        var promiseTEMP =  massSpeakingtoolv9(tester,pData,(i+1),pData[i].olddata,pData[i].oldi,VidConfigs,repeatRejecttion)
                                        promiseTEMP.then(function(result) { 
                                            //This is to step to the next lead (Steps Out)
                                            Steps_ou_helper(tester,pData,i,oldpData,oldi,repeatRejecttion)
                                        })
                                    }else{
                                        //This is to step to the next lead (Steps Out)
                                        Steps_ou_helper(tester,pData,i,oldpData,oldi,repeatRejecttion) 
                                    } 
                                //inside Steps Down (bottom)
                                }
                                //This is to step to the next lead (Steps Out)
                                function Steps_ou_helper(tester,pData,i,oldpData,oldi,repeatRejecttion){
                                //inside Steps out (top)
                                    //pData[i].used = true
                                    if (((i+1) == pData.length)&&(oldpData != null)&&(oldi != null)&&(!(pData[i].used))){ //This is to step to the nextlead (Steps Out)
                                        pData[i].olddata = oldpData
                                        pData[i].oldi = oldi
                                        var promiseTEMP =  massSpeakingtoolv9(tester,oldpData,(oldi)+1,(pData[i].olddata[0].olddata),(pData[i].olddata[0].oldi),VidConfigs,repeatRejecttion)
                                        promiseTEMP.then(function(result) { 
                                            //deferred.resolve(i);

                                            deferred.resolve(i);
                                        })
                                          
                                    }else{

                                        deferred.resolve(i);
                                    }      
                                //inside Steps out (bottom)    
                                }
                                
                                
                                Steps_in_helper(tester,pData,i,oldpData,oldi,repeatRejecttion) 
                                //  This is to step in to a level of replys (Steps In) 
                                
                            
                                    
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
            
            
            //THE REAL CODE
                var repeatRejecttion = []    
                window.speechSynthesis.cancel();
                STARTpromise = rawspeaktool("MassSearcher",0)
                STARTpromise.then(function(result) {
                    var promise_massSpeakingtoolv9 = massSpeakingtoolv9(0,VidConfigs.ALLDATA,0,null,null,VidConfigs,repeatRejecttion)
                    promise_massSpeakingtoolv9.then(function(result) {
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
            //THE REAL CODE
            //end of it
            })}else {$('#modal1').openModal();}
        //(bottom) - TMSVidMain(Data,VidConfigs)
        }
    //Starts
        primaryDataPromise()
        convertDataPromise()
}

mainFunction()
