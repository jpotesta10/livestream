// Accessing the webcam stream
navigator.mediaDevices.getUserMedia({ video: true })
    .then(function(stream) {
        var video = document.getElementById('videoElement');
        video.srcObject = stream;
    })
    .catch(function(error) {
        console.error('Error accessing webcam:', error);
    });
