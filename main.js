// Load user details dynamically
window.onload = () => {
    const user = JSON.parse(localStorage.getItem('ecoaction-user')) || {
      name: 'Guest User',
      avatar: 'default-avatar.png',
    };

    const avatarEl = document.getElementById('avatar');
    const userNameEl = document.getElementById('user-name');

    // Update avatar and user name in header
    avatarEl.src = user.avatar;
    userNameEl.textContent = `Hello, ${user.name.toUpperCase()}`; // Capitalize username

    // Add functionality to update avatar on click
    avatarEl.addEventListener('click', () => {
      const newAvatar = prompt('Enter the path to your new avatar image:');
      if (newAvatar) {
        if (confirm('Are you sure you want to update your avatar?')) {
          avatarEl.src = newAvatar;
          user.avatar = newAvatar;
          localStorage.setItem('ecoaction-user', JSON.stringify(user));
        }
      }
    });
};

// Start Challenge (Hide the "Take Challenge" button and show "Completed")
function startChallenge(button) {
    button.style.display = "none"; // Hide the "Take Challenge" button
    const completeBtn = button.nextElementSibling;
    completeBtn.style.display = "inline-block"; // Show the "Completed" button
    alert("Challenge started! Good luck!");
}

// Complete Task (Update points and disable the "Completed" button)
function completeTask(button) {
    const totalPointsEl = document.getElementById("total-points");
    const currentPoints = parseInt(totalPointsEl.textContent, 10);
    const newPoints = currentPoints + 50; // Add points (customize value)

    // Update points in the UI
    totalPointsEl.textContent = newPoints;

    // Disable the button and change its text
    button.disabled = true;
    button.textContent = "Task Completed";

    // Provide feedback to the user
    alert(`Congratulations! You earned 50 points. Your new total is ${newPoints} points.`);
}
