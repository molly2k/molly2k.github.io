function Login()
{
    let userEmail = document.getElementById("userName").value;
    let userPassword = document.getElementById("userPassword").value;
    if (userEmail == "" || userPassword == "")
    {
        alert("Pola nie mogą być puste!");
    }
    if (userEmail == "ROOT" && userPassword == "Molly290!")
    {
        window.location = 'Main/mainpage.html'
    }
    else
    {
        alert("Nieprawidłowy E-mail lub hasło!");
    }

}