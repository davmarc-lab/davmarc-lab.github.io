function openDiscordModal() {
    let modal = document.getElementById("discord-modal");
    modal.classList.remove("d-none");

    let copy = document.getElementById("discord-copy");
    copy.addEventListener('click', () => {
        let username = document.getElementById("discord-username");
        navigator.clipboard.writeText(username.innerHTML);
    })
}

document.addEventListener('DOMContentLoaded', () => {
    // enables popovers
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

    let discord = document.getElementById("discord-link");

    discord.addEventListener('click', () => {
        openDiscordModal();
    });
});