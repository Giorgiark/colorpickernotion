const swatches = document.querySelectorAll('.color-swatch');

swatches.forEach(swatch => {
    const toggleMode = swatch.querySelector('.toggle-mode');
    const lightCode = swatch.querySelector('.light-mode');
    const darkCode = swatch.querySelector('.dark-mode');
    const copyButton = swatch.querySelector('.copy-button');

    let isDarkMode = false;

    toggleMode.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        toggleMode.classList.toggle('fa-moon', !isDarkMode);
        toggleMode.classList.toggle('fa-sun', isDarkMode);

        const currentColor = isDarkMode ? darkCode.textContent : lightCode.textContent;
        swatch.style.setProperty('--color-light', currentColor);
        swatch.style.setProperty('--color-dark', isDarkMode ? lightCode.textContent : darkCode.textContent);
    });

    copyButton.addEventListener('click', () => {
        const currentCode = isDarkMode ? darkCode.textContent : lightCode.textContent;
        copyToClipboard(currentCode);
        showCopiedModal();
    });
});

function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

function showCopiedModal() {
    const modal = document.getElementById('copiedModal');
    modal.style.display = 'block';
    setTimeout(() => {
        modal.style.display = 'none';
    }, 1000);
}