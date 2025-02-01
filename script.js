const userStats = {
    water: 1500,
    land: 500,
    co2: 300,
    plastic: 200,
  };
  
  // Dynamically updates stats on load
  window.onload = () => {
    const waterElem = document.getElementById('water-saved');
    const landElem = document.getElementById('land-saved');
    const co2Elem = document.getElementById('co2-saved');
    const plasticElem = document.getElementById('plastic-saved');
  
    // Updates the values dynamically
    waterElem.textContent = userStats.water;
    landElem.textContent = userStats.land;
    co2Elem.textContent = userStats.co2;
    plasticElem.textContent = userStats.plastic;
  };
  
  // Login handler (if needed)
  function handleLogin() {
    alert("Login successful! Redirecting...");
    window.location.href = "index.html";
  }
  
  // Open Avatar Modal
function openAvatarModal() {
  document.getElementById('avatar-modal').classList.remove('hidden');
}

// Close Avatar Modal
function closeAvatarModal() {
  document.getElementById('avatar-modal').classList.add('hidden');
}

// Select Avatar
function selectAvatar(avatarPath) {
  const avatarImg = document.getElementById('user-avatar');
  avatarImg.src = avatarPath; // Update the avatar image
  localStorage.setItem('userAvatar', avatarPath); // Save to local storage
  closeAvatarModal();
}

// Load User Info on Page Load
window.onload = () => {
  const userName = localStorage.getItem('userName') || 'Guest';
  const userAvatar = localStorage.getItem('userAvatar') || 'default-avatar.png';
  
  document.getElementById('user-name').textContent = userName;
  document.getElementById('user-avatar').src = userAvatar;
};
