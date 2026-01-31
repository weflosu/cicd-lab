document.addEventListener('DOMContentLoaded', function() {
    const buildInfo = document.getElementById('build-info');
    const now = new Date();
    buildInfo.innerHTML = `
        <strong>Информация о сборке:</strong><br>
        Дата обновления: ${now.toLocaleDateString('ru-RU')}<br>
        Время: ${now.toLocaleTimeString('ru-RU')}
    `;
});

