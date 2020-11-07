function onMenu() {
  let icon = document.querySelector('.menu i');
  let iconClasses = [...icon.classList];
  iconClasses = iconClasses.map((a) =>
    a == 'fa-bars' ? 'fa-close' : a == 'fa-close' ? 'fa-bars' : a
  );

  let nav = document.querySelector('nav ul');
  if (iconClasses.some((a) => a === 'fa-bars')) {
    nav.style.display = 'none';
  } else if (iconClasses.some((a) => a === 'fa-close')) {
    nav.style.display = 'flex';
  }
  icon.className = String(iconClasses).replace(',', ' ');
}
