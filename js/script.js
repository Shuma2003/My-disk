document.getElementById('uploadForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0];

    if (!file) {
        document.getElementById('message').textContent = 'Please select a file.';
        return;
    }

    var formData = new FormData();
    formData.append('file', file);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/upload', true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            document.getElementById('message').textContent = 'File uploaded successfully.';
        } else {
            document.getElementById('message').textContent = 'Error uploading file.';
        }
    };

    xhr.send(formData);
});