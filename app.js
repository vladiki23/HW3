async function fetchCurrencies() {
    try {
        const response = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20240409&json');
        const currencies = await response.json();
        updateCurrenciesTable(currencies);

        // Добавляем прослушиватель событий к полю ввода для поиска
        document.querySelector('#searchInput').addEventListener('input', (event) => {
            const searchText = event.target.value.toLowerCase();
            const filteredCurrencies = currencies.filter(currency =>
                currency.txt.toLowerCase().includes(searchText) || currency.cc.toLowerCase().includes(searchText)
            );
            updateCurrenciesTable(filteredCurrencies);
        });
    } catch (error) {
        console.error('Ошибка при получении данных о валютах:', error);
    }
}

function updateCurrenciesTable(currencies) {
    let currenciesHtml = '';
    for (let currency of currencies) {
        currenciesHtml += `
            <tr>
                <td>${currency.txt}</td>
                <td>${currency.cc}</td>
                <td>${currency.rate}</td>
            </tr>`;
    }

    document.querySelector('#currencies-table tbody').innerHTML = currenciesHtml;
}

fetchCurrencies();