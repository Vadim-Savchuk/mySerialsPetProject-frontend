
export function hello() {

    const date = new Date();
    const hours = date.getHours();

    let time;

    if (hours >= 5 && hours < 12) {
        time = 'Good morning,';
    } else if (hours >= 12 && hours < 18) {
        time = 'Good afternoon,';
    } else if (hours >= 18 || hours < 5) {
        time = 'Good evening,';
    }

    return time;
}

export function searching(arr, value) {
    const searchSerials = arr.filter(serial => {
        if (serial.title.toLowerCase().includes(value.toLowerCase())) {
            return true;
        }

        return false;
    });

    return searchSerials;
}

export function validationRegister(data) {
    const { username, password, useremail } = data;

    if (!username) {
        throw new Error("Enter your name");
    }

    if (!useremail.includes('@')) {
        throw new Error("Incorrect email");
    }

    if (useremail.length < 4) {
        throw new Error("Email must be at least 4 characters long");
    }

    if (!password) {
        throw new Error("Enter a password");
    }

    if (password.length < 4) {
        throw new Error("The password must be at least 4 characters long");
    }
}

export function validationLogin(data) {
    const { password, useremail } = data;

    if (useremail.length < 4) {
        throw new Error("Please enter your email");
    }

    if (useremail.length < 4) {
        throw new Error("Your email is too short");
    }

    if (!useremail.includes('@')) {
        throw new Error("Incorrect email");
    }

    if (!password) {
        throw new Error("Enter your password");
    }

    if (password.length < 4) {
        throw new Error("Your password is too short");
    }
}

export function validationSerial(data) {
    const { title } = data;

    if (title.length <= 0) {
        throw new Error("Enter a name");
    }
}

export function validationEditName(data) {
    const { username } = data;

    if (username.length < 3) {
        throw new Error("Enter a name");
    }
}