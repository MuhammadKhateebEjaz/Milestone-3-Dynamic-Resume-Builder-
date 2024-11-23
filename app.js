// Generate Resume Logic
document.getElementById('generate-resume').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const skills = document.getElementById('skills-input').value.split(',').map(skill => skill.trim());
    const education = document.getElementById('education-input').value;

    // Create a resume template
    const resume = `
        <h1>${name}</h1>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <h2>Skills</h2>
        <ul>${skills.map(skill => `<li>${skill}</li>`).join('')}</ul>
        <h2>Education</h2>
        <p>${education}</p>
    `;

    // Show resume in a new window
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`<html><body>${resume}</body></html>`);
    newWindow.document.close();
});

// Shareable Link Logic
document.getElementById('share-link').addEventListener('click', () => {
    alert('This feature is under development.');
});
