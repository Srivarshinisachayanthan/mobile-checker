
    if ( $('#fileSelectBtnInput')[0].files.length === 0 ) {
        console.log('Message Only!...');
    }
    else {
    
        const ref = firebase.storage().ref();
        const file = document.querySelector('#fileSelectBtnInput').files[0];
        const name = new Date() + "-" + file.name;
    
        const metadata = {
            contentType : file.type
        }
        
        const task = ref.child(name).put(file, metadata);
        
        if(file.type == "image/jpeg" || file.type == "image/png" || file.type == "image/jpeg") {
            task
                .then(snapshot => snapshot.ref.getDownloadURL() )
                .then(url => {
                    console.log(url);
                    ConstImgUrl = url;
                    imageExist = 1;
                    alert("Image Upload Successful");
                });
        }else if( file.type == "audio/mpeg" ){
            task
                .then(snapshot => snapshot.ref.getDownloadURL() )
                .then(url => {
                    console.log(url);
                    ConstAudioUrl = url;
                    audioExist = 1;
                    alert("audio Upload Successful");
                });
        }else if( file.type =="video/webm" || file.type == "video/mp4" ) {
            task
                .then(snapshot => snapshot.ref.getDownloadURL() )
                .then(url => {
                    console.log(url);
                    ConstVideoUrl = url;
                    videoExist = 1;
                    alert("video Upload Successful");
                });
            
        }else {
            task
                .then(snapshot => snapshot.ref.getDownloadURL() )
                .then(url => {
                    console.log(url);
                    ConstFileUrl = url;
                    fileExist = 1;
                    ConstFileName = file.name;
                    alert("file Upload Successful");
                });
        }
        
    }
    
