(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){return`
    <nav class="navbar">
        <a href="#" id="home-link">Home</a>
        <a href="#" id="profile-link">Profile</a>
    </nav>
    `}function t(){return`
        <div class="page">
            <h1>Welcome to Home Page</h1>
            <div style="height: 1500px;">
                <p>Scrollable shopping details or product description...</p>
                <p>This content can be replaced later.</p>
            </div>
        </div>
    `}function n(e){return`
        <div class="page">
            <h1>Your Profile</h1>
            <p>Name: ${e.name}</p>
            <p>Email: ${e.email}</p>
        </div>
    `}var r=document.querySelector(`#app`);async function i(i){let o=``;i===`home`&&(o=t()),i===`profile`&&(o=n(await(await fetch(`https://127.0.0.1:8000/api/profile/`)).json())),r.innerHTML=e()+o,a()}function a(){document.getElementById(`home-link`)?.addEventListener(`click`,e=>{e.preventDefault(),i(`home`)}),document.getElementById(`profile-link`)?.addEventListener(`click`,e=>{e.preventDefault(),i(`profile`)})}i(`home`);