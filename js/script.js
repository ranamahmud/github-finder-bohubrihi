let searchBtn = document.querySelector('#searchBtn');
let searchUser = document.querySelector('#searchUser');
let ui = new UI();
searchBtn.addEventListener('click', function (e) {
    console.log("button cliced");
    let userText = searchUser.value;
    if (userText !== '') {
        // Fetch API
        const url = `http://api.github.com/users/${userText}`;
        fetch(url)
            .then(result => result.json())
            .then(data => {
                if (data.message == 'Not Found') {
                    // Show Alert
                    ui.showAlert("User not Found!", "alert alert-danger");
                } else {
                    // Show Profile
                    ui.showProfile(data);
                }
            })

    } else {
        // Clear Profile
        ui.clearProfile();
    }
})