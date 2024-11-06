class CarList {
    constructor(dataUrl) {
        this.dataUrl = dataUrl;
        this.cars = [];
        this.init();
    }

    async init() {
        await this.fetchData();
        this.renderCarList(this.cars);
        this.bindSearchEvent();
    }

    async fetchData() {
        try {
            const response = await fetch(this.dataUrl);
            if (!response.ok) throw new Error('Network response was not ok');
            this.cars = await response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    renderCarList(cars) {
        const carListContainer = document.getElementById('carList');
        carListContainer.innerHTML = cars.map(car => `
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${car.image_url}" class="img-fluid rounded-start" alt="${car.car_name}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${car.car_name}</h5>
                            <p class="card-text">
                                Manufacturer: ${car.manufacturer}<br>
                                Top Speed: ${car.top_speed}<br>
                                Release Year: ${car.release_year}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    bindSearchEvent() {
        const searchBar = document.getElementById('carSearchBar');
        searchBar.addEventListener('input', () => this.filterCars(searchBar.value));
    }

    filterCars(query) {
        const filtered = this.cars.filter(car =>
            `${car.car_name} ${car.manufacturer}`.toLowerCase().includes(query.toLowerCase())
        );

        this.renderCarList(filtered);
    }
}

const carList = new CarList('applet4.json');
