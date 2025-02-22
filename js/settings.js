// Save Personal Information
document.getElementById('personalInfoForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  // Save to localStorage
  localStorage.setItem('personalInfo', JSON.stringify({ name, email, phone }));

  // Notify user
  alert('Personal information updated successfully!');
  console.log('Updated Personal Info:', { name, email, phone });
});

// Update Security Settings
document.getElementById('securityForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const currentPassword = document.getElementById('currentPassword').value;
  const newPassword = document.getElementById('newPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const twoFactorAuth = document.getElementById('twoFactorAuth').checked;

  // Validate passwords
  if (newPassword !== confirmPassword) {
    alert('New passwords do not match!');
    return;
  }

  // Save to localStorage
  localStorage.setItem('securitySettings', JSON.stringify({ currentPassword, newPassword, twoFactorAuth }));

  // Notify user
  alert('Security settings updated successfully!');
  console.log('Updated Security Settings:', { currentPassword, newPassword, twoFactorAuth });
});

// Save Preferences
document.getElementById('preferencesForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const language = document.getElementById('language').value;
  const emailNotifications = document.getElementById('emailNotifications').checked;
  const darkMode = document.getElementById('darkMode').checked;

  // Save to localStorage
  localStorage.setItem('preferences', JSON.stringify({ language, emailNotifications, darkMode }));

  // Notify user
  alert('Preferences saved successfully!');
  console.log('Updated Preferences:', { language, emailNotifications, darkMode });

  // Apply dark mode if enabled
  if (darkMode) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
});

// Load Saved Settings on Page Load
window.addEventListener('load', function () {
  const personalInfo = JSON.parse(localStorage.getItem('personalInfo'));
  if (personalInfo) {
    document.getElementById('name').value = personalInfo.name;
    document.getElementById('email').value = personalInfo.email;
    document.getElementById('phone').value = personalInfo.phone;
  }

  const securitySettings = JSON.parse(localStorage.getItem('securitySettings'));
  if (securitySettings) {
    document.getElementById('currentPassword').value = securitySettings.currentPassword;
    document.getElementById('newPassword').value = securitySettings.newPassword;
    document.getElementById('confirmPassword').value = securitySettings.newPassword;
    document.getElementById('twoFactorAuth').checked = securitySettings.twoFactorAuth;
  }

  const preferences = JSON.parse(localStorage.getItem('preferences'));
  if (preferences) {
    document.getElementById('language').value = preferences.language;
    document.getElementById('emailNotifications').checked = preferences.emailNotifications;
    document.getElementById('darkMode').checked = preferences.darkMode;

    // Apply dark mode if enabled
    if (preferences.darkMode) {
      document.body.classList.add('dark-mode');
    }
  }
});