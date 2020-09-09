let searchBtn = document.querySelector('#searchBtn');
let searchUser = document.querySelector('#searchUser');
let ui = New UI();
searchBtn.addEventListener('click', function (e) {
    let userText = searchUser.value;
    if (userText !== '') {
        // Fetch API 
        fetch(`http://api.github.com/users/${userText}`)
            .then(result => result.json())
            .then(data => {
                if (data.message == 'Not Found') {
                    // Show Alert
                } else {
                    // Show Profile
                    ui.showProfile(data);
                }
            })
           
    } else {
        // Clear Profile
    }
})