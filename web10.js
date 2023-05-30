const provider = "api.web10.app"
const wapi = wapiInit("https://auth.web10.app", "rtc.web10.app");
authButton.onclick = wapi.openAuthPortal;

function initApp() {
    authButton.innerHTML = "log out";
    authButton.onclick = () => {
        wapi.signOut();
        window.location.reload();
    };
    const t = wapi.readToken();
    message.innerHTML = `hello ${t["provider"]}/${t["username"]},<br>`;
}

if (wapi.isSignedIn()) initApp();
else wapi.authListen(initApp);