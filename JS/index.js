var userId = 'svs23';
var fromId = 'svs23';
var toId   = 'ssv23';


$( document ).ready(function() {

    console.log( "Website is ready for proper functioning!..." );


    $('#DeleteMessage').on('click', ()=> {
    
        console.log('Button clicked!...');

        $('#chatPage').empty();

        firebase.database().ref('23users/svs23').child('23Messages').remove();
        // firebase.database().ref('23users/ssv23').child('23Messages').remove();

        let fullDate = new Date()           ;
        let date     = fullDate.getDate()   ;
        let day      = fullDate.getDay()    ;
        let month = "";
    
        switch(fullDate.getMonth()){
            
            case 0: month = "Jan" ;
            case 1: month = "Feb" ;
            case 2: month = "Mar" ;
            case 3: month = "Apr" ;
            case 4: month = "May" ;
            case 5: month = "Jun" ;
            case 6: month = "Jul" ;
            case 7: month = "Aug" ;
            case 8: month = "Sep" ;
            case 9: month = "Oct" ;
            case 10: month = "Nov" ;
            case 11: month = "Dec" ;
    
        }
    
    
        let year     = fullDate.getFullYear();
        let Hours    = fullDate.getHours()  ;
        let minutes  = fullDate.getMinutes();
        let AMorPM   = ( (Hours >= 12 ) ? ('PM') : ('AM') );
            Hours    = Hours % 12 ;
            Hours    = Hours ? Hours : 12;
        let time     = ""+Hours+":"+minutes+" "+AMorPM;
        let seconds  = '' + fullDate.getSeconds() + ' ' + fullDate.getMilliseconds();
    

        firebase.database().ref('23users/svs23/').child('23Messages').child('0').set({
            
            From            : 'Admin',
            To              : "svs23",
            Time            : '8.30pm',
            Date            : "6",
            Day             : "Fri",
            Month           : "Sep",
            Year            : "2019",
            Message_Type    : "notify",
            Text_Message    : "Welcome to 23",
            Image_Url       : "NULL",
            File_Url        : "NULL",
            Video           : "NULL",
            Audio           : "NULL",
            Reply_Message   : "NULL",
            Bolder          : 0,
            Italic          : 0,
            Highlight       : 0,
            Underline       : 0 

        });

        let backup = "svs23" + year + " " + month + "  " + date + " " + time + '-' + seconds;
        firebase.database().ref('23users/ssv23/').child('23Messages').child(backup).set({
            
            From            : 'Admin',
            To              : "ssv23",
            Time            : '8.30pm',
            Date            : "6",
            Day             : "Fri",
            Month           : "Sep",
            Year            : "2019",
            Message_Type    : "notify",
            Text_Message    : "Message deleted by darling",
            Image_Url       : "NULL",
            File_Url        : "NULL",
            Video           : "NULL",
            Audio           : "NULL",
            Reply_Message   : "NULL",
            Bolder          : 0,
            Italic          : 0,
            Highlight       : 0,
            Underline       : 0 

        });
        console.log("Process finished!...");
    });

    $('#sendBtn').on('click', (e)=> { 
        
        e.preventDefault();

        let textBoldId      = $('#textBold').is(':checked');
        let textItalicId    = $('#textItalic').is(':checked');
        let textUnderlineId = $('#textUnderline').is(':checked');
        let textHighlightId = $('#textHighlight').is(':checked');
        let messageContent  = $('#messageInput').val();

        let fullDate = new Date()           ;
        let date     = fullDate.getDate()   ;
        let day      = fullDate.getDay()    ;
        let month = "";

        switch(fullDate.getMonth()){
            
            case 0: month = "Jan" ;
            case 1: month = "Feb" ;
            case 2: month = "Mar" ;
            case 3: month = "Apr" ;
            case 4: month = "May" ;
            case 5: month = "Jun" ;
            case 6: month = "Jul" ;
            case 7: month = "Aug" ;
            case 8: month = "Sep" ;
            case 9: month = "Oct" ;
            case 10: month = "Nov" ;
            case 11: month = "Dec" ;

        }

        let year     = fullDate.getFullYear();
        let Hours    = fullDate.getHours()  ;
        let minutes  = fullDate.getMinutes();
        let AMorPM   = ( (Hours >= 12 ) ? ('PM') : ('AM') );
            Hours    = Hours % 12 ;
            Hours    = Hours ? Hours : 12;
        let time     = "" + Hours + ":" + minutes + " " + AMorPM;
        let seconds  = '' + fullDate.getSeconds() + ' ' + fullDate.getMilliseconds();


        if(messageContent == "" ) {
        
            alert("Message content is NULL...\n please type some message or select files or photos before send");
        
        }else{            
            
            $('#chatPage').append(
                ProperGreenContainer("Me",date,month,year,day,time,
                1,messageContent,textBoldId,textItalicId,
                textHighlightId,textUnderlineId,0,"","",0,""
                ,0,"",0,""));

            let UniqueMessageId = "svs23" + year + " " + month + "  " + date + " " + time + '-' + seconds;
            firebase.database().ref('23users/svs23/23Messages/' + UniqueMessageId + "/").set({
                
                From            : fromId,
                To              : toId,
                Time            : time,
                Date            : date,
                Day             : day,
                Month           : month,
                Year            : year,
                Message_Type    : "message" ,
                Text_Message    : messageContent ,
                Image_Url       : "" ,
                File_Url        : "" ,
                Video           : "" ,
                Audio           : "" , 
                Reply_Message   : "" ,
                Bolder          : textBoldId,
                Italic          : textItalicId,
                Highlight       : textHighlightId,
                Underline       : textUnderlineId 
            
            });

            firebase.database().ref('23users/ssv23/23Messages/' + UniqueMessageId + "/").set({
                
                From            : toId,
                To              : fromId,
                Time            : time,
                Date            : date,
                Day             : day,
                Month           : month,
                Year            : year,
                Message_Type    : "message" ,
                Text_Message    : messageContent ,
                Image_Url       : "" ,
                File_Url        : "" ,
                Video           : "" ,
                Audio           : "" , 
                Reply_Message   : "" ,
                Bolder          : textBoldId,
                Italic          : textItalicId,
                Highlight       : textHighlightId,
                Underline       : textUnderlineId 
            
            });


            $('#textBold')     .prop('checked', false);
            $('#textItalic')   .prop('checked', false);
            $('#textUnderline').prop('checked', false);
            $('#textHighlight').prop('checked', false);
            $('#messageInput,textarea').val('');
        
            $('#chatPage').animate({scrollTop : 100000000}, 1000);
    
        }

    });

});

function properDate(date, month, year, day, time) {
    return ( '' + date + '-' + month + '-' + year + ' '+'<span>'+  day + '</span> '+ '<span style="color:palegreen;">' + time + '</span>' );  
}

function properMessageInfo(date, month, year, day, time, user) {
    return ('<h5 style="opacity:0.5;"><span> ' + user + '</span> ' + properDate(date, month, year, day, time) + '</h5>' );
}

function properMessage(message, bold, italic, mark, underline) {
    let bolderstart = "", bolderend = "", italicstart = "", italicend = "", markstart = "", markend = "", underlinestart = "", underlineend = "";
    if(bold==1) {
        bolderstart = '<b>';
        bolderend   = '</b>';
    }
    if(italic==1){
        italicstart = '<i>';
        italicend = '</i>';
    }
    if(mark==1) {
        markstart = '<mark>';
        markend   = '</mark>';
    }
    if(underline==1) {
        underlinestart = '<u>';
        underlineend   = '</u>';
    }
    return ( '<p style="opacity:0.8;">' +''+ 
                bolderstart    +''+ 
                italicstart    +''+ 
                underlinestart +''+ 
                markstart      +''+ 
                message        +''+ 
                markend        +''+ 
                underlineend   +''+ 
                italicend      +''+ 
                bolderend      +''+
            '</p>');
}

function properImage(imgUrl) {
    return ( '<img src="'+ imgUrl + '" alt="" >' );
}

function properSpace() {
    return ( '<div class="space"></div>' );
}

function properAtag(fileUrl,fileName) {
    return ( '<a style="display: flex; flex-direction: column;" target="_blank"  href="' + fileUrl + '" > <img style="background-color: #232323;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABjUExURUdwTMHL08HK0JafqLjCycPL0pScpKSutq62vpagqbfCyZ2mrqmzu7S/x5+mraSrsq+2vamxuJqhqLa9w5Sbor3EysTL0lhmc4yUm8vS2XOAimZzftLZ4IKKk01aZTQ/Sd7l6omK3/gAAAAOdFJOUwCY4bNev5ktEUl+ytLaAMOUqwAABFhJREFUWMPt2Nl6mzAQBlAv2Bg71g6I1bz/U1ajdQQ4aZpe9at8mxz/MyMRkcPh/1qtW1ndj8Xtp0hxPz4ZF7r8+mfN912O5Z5xvDyfnCo99X1fffF9x8upa5qa3bc5TowKPQHS98NQfZLZGF1TSw4rQmUBuGREecMgsKp3OZqmayTjYV1DkcaAID1CWljr2iuXwwQBhHFLUUofELB2xaQkrVc20O0+jmD45QxCiBCC22KmfgpB2mi07Ty3JfTtHjZB9Ww84ZNYRCmtdd6RARnzPPSank61lPxaBkimKMiIs8GENdphIqyGuXL7rX4o1Ye0zAYZ+m2QdugVr207wbALQ8BYJARZ5UiG2xw0LIAeRYQsozVC2mFVjKayGzs7WAofq8DHQFWCiN+u28nYIKwZx7GrXQv83gh5CDmHZn/43bYTxBqLTSIlS0OJicyi11uEzG7pU0vmMBnZLYvZY01d1zJIKFBodjhJBoJAAy5GcxNkgSiWAQlWlsh3iIgiQubJMg1+sxqjtsYIhwacJjiBiZVZhogqQUrbQLOGYgAxil1RkpHypYU8hKhyDc3UKwCNnvGl5YlSp4WZPoagRbMOimO6xlL7gWIeQR63NVQHJ0pZIJkHcozYg5pl5cQWueFvAwmgzvGx9kHN9M3EOtyf6HwWCBKJa4QeFKafoChlHdoNZBxVYAgqm0cHocnjkUm0iVIekkHEtGh+tRbqNg3am30KJFS1gZZYVObkhwNNzDoi7kcHtfNrWFIeXFiNC/MtQk6cvoEE9BqgEGjVn3dbyEJx+ofyIaDXr37Z6XNqEM8kERNd05/Hh7LQtCDFME2WZxXIM+Y5f0WJFPTaQU0+LjR5lh5DyEHTP5RnB6klDCs/qbFB+MEoIpQuEpWBTGUvMTZNs5pWqIvljzPht5CpLE3fJNIWouNnzH6HjHTDEPT6xcYdZz2wrEHgPLaQ7PKZhzjO2e2PWectVHdh6K7PLI2L44n5Q++lK4bsxp5XcbL+0J1AbqVtZCETKEKyzpg0MJ8n1OWoYgt1OA7L7l78TYPM/aXKIGjR0OGqUF00NBpNLDgK39kjlPcm7p7tkVdBMVehLdR3MYzEdfFNnJAHHLSNAjR1m6LWF6FNHK3PGWRPiG5YqspPC1+ERFaXY/SEpn8orxZScEmWoSa22T0ki+PXHkTqVW+ye1k+c6+YVeXQbCBe45rS0NfN8Yi7/07lCnqZwy9TTe+dlMUok8aVhUQSM/uzSgoglLNLedgkmtPrFUUnPbY4jAmWVlTKy7Eo83daD9U4S2oxqsghgrIdxEFwZts6NYbSbUUO4YDcy/236wDtIiogSnD5JkkO9XJnSE7RinB2+hyxb5AeWp1uH0UR9jtISqSZWEcxSZj8TcQlgn0kKEImDeV8B3F/auH9gZKkfKOcvDZzO+55KIdCOfdvI7a2MzG/D+VQ/seIXQU3+zU09kf/yLkz+fxJklRc8ReQf3b9AqCnC1FzipjyAAAAAElFTkSuQmCC" alt=""> ' + fileName + '</a>' );
}

function properVideoTag(videoUrl) {
    return ('<video src="'+ videoUrl +'" style="margin: 0; width: 200px; height: 200px;" controls></video>');
}

function properAudioTag(audioUrl) {
    return ('<audio src="'+ audioUrl +'" style="margin: 0; width: 250px;" controls></audio>');
}

function ProperWhiteContainer(user, date, month, year, day, time, 
                paraContains, paraMessage, bold, italic, mark, underline,
                AtagContains, fileUrl, fileName, imageContains, imageUrl,
                VideoContains, VideoUrl, AudioContains, AudioUrl) {

    
    let step1 = '<div class="whiteContainer"><div class="whiteMessage">';
    let step2 = ''+properMessageInfo(date,month,year,day,time,user);
    let value = ( step1 + '' +step2);
    
    if(AtagContains==1){
        value += ( '' + properAtag(fileUrl,fileName));
    }
    if(imageContains==1) {
        value += ('' + properImage(imageUrl) );
    }
    if(VideoContains==1) {
        value += ('' + properVideoTag(VideoUrl) );
    }
    if(AudioContains==1) {
        value += ('' + properAudioTag(AudioUrl) );
    }
    if(paraContains==1) {
        value += ('' + properMessage(paraMessage,bold, italic, mark, underline) );
    }
    
    value += '</div>';
    value += properSpace();
    value += '</div>';

    return value;

}

function ProperGreenContainer(user, date, month, year, day, time, 
         paraContains, paraMessage, bold, italic, mark, underline,
         AtagContains, fileUrl, fileName, imageContains, imageUrl,
         VideoContains, VideoUrl, AudioContains, AudioUrl) {

    let value = '<div class="greenContainer">' + properSpace() + '<div class="greenMessage">' + '' + properMessageInfo(date,month,year,day,time,user);
    
    if(AtagContains==1){
    value += ( '' + properAtag(fileUrl,fileName));
    }
    if(imageContains==1) {
    value += ('' + properImage(imageUrl) );
    }
    if(VideoContains==1) {
        value += ('' + properVideoTag(VideoUrl) );
    }
    if(AudioContains==1) {
        value += ('' + properAudioTag(AudioUrl) );
    }
    if(paraContains==1) {
    value += ('' + properMessage(paraMessage,bold, italic, mark, underline) );
    }

    value += '</div>';
    value += '</div>';

    return value;

}

document.getElementById('messageInput').addEventListener("keyup", function(event) {
    if(event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("sendBtn").click();
    }
});

