import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAHYNHRuRKcpRtksRqx6OId-ODBGtyjVwI",
    authDomain: "login-9e6a3.firebaseapp.com",
    projectId: "login-9e6a3",
    storageBucket: "login-9e6a3.firebasestorage.app",
    messagingSenderId: "976105222256",
    appId: "1:976105222256:web:8b217080e4ad367fec04b5",
    measurementId: "G-PY1MNJFPS4"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
    const currentPage = window.location.pathname;

    if (user) {
        sessionStorage.setItem("user", JSON.stringify(user));

        if (currentPage === "http://localhost:3000/main.html ") {
            window.open("http://localhost:3000", "_blank"); 
        }
        } 
        else if (currentPage === "http://localhost:3000 ") {
            window.open("http://localhost:3000/main.html", "_blank");
        }

});

function googleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log("User Info:", result.user);

            sessionStorage.setItem("user", JSON.stringify(result.user));

            window.open("http://localhost:3000", "_blank"); 
        })
        .catch((error) => {
            console.error("Login Error:", error);
            alert(error.message);
        });
}

function logout() {
    signOut(auth)
        .then(() => {
            console.log("User logged out");

            sessionStorage.removeItem("user");

            window.open("http://localhost:3000/main.html", "_blank");
        })
        .catch((error) => {
            console.error("Logout Error:", error);
        });
}

window.googleLogin = googleLogin;
window.logout = logout;



