document.addEventListener('DOMContentLoaded', event => {

    const mailForm = document.getElementById("mail-form");
    mailForm.addEventListener("submit", event => {
        event.preventDefault();

        const formData = new FormData(mailForm);

        const subject = "Message from " + formData.get("name");
        const data = {
            Name: formData.get("name"),
            Email: formData.get("email"),
            subject: subject,
            Message: formData.get("message"),
        };

        try {
            const response = fetch("https://formspree.io/f/mnnznnnd", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                mailForm.reset();
            }
        } catch (error) {
        }
    });
});