const properties = [
    {
        id: 1,
        title: "Modern Family Home",
        location: "Karen, Nairobi",
        type: "House",
        price: 28000000,
        bedrooms: 4,
        bathrooms: 3,
        image: "assets/images/property-1.jpeg",
        description:
            "A spacious modern family home located in a quiet and secure neighbourhood in Karen."
    },
    {
        id: 2,
        title: "Luxury City Apartment",
        location: "Westlands, Nairobi",
        type: "Apartment",
        price: 14500000,
        bedrooms: 3,
        bathrooms: 2,
        image: "assets/images/property-2.jpeg",
        description:
            "A modern apartment with excellent city views and convenient access to shopping and business centres."
    },
    {
        id: 3,
        title: "Prime Residential Land",
        location: "Ruiru, Kiambu",
        type: "Land",
        price: 6500000,
        bedrooms: 0,
        bathrooms: 0,
        image: "assets/images/property-3.jpeg",
        description:
            "A prime residential plot suitable for building a family home or investment property."
    },
    {
        id: 4,
        title: "Commercial Office Space",
        location: "Upper Hill, Nairobi",
        type: "Commercial",
        price: 42000000,
        bedrooms: 0,
        bathrooms: 2,
        image: "assets/images/property-4.jpeg",
        description:
            "A well-located commercial office space suitable for a growing business."
    },
    {
        id: 5,
        title: "Coastal Holiday Villa",
        location: "Diani, Kwale",
        type: "House",
        price: 35000000,
        bedrooms: 5,
        bathrooms: 4,
        image: "assets/images/property-5.jpeg",
        description:
            "A beautiful coastal villa offering spacious living areas and easy access to the beach."
    },
    {
        id: 6,
        title: "Affordable Starter Apartment",
        location: "Kasarani, Nairobi",
        type: "Apartment",
        price: 7200000,
        bedrooms: 2,
        bathrooms: 1,
        image: "assets/images/property-6.jpeg",
        description:
            "An affordable apartment ideal for first-time homeowners or property investors."
    }
];

function formatPrice(price) {
    return new Intl.NumberFormat("en-KE", {
        style: "currency",
        currency: "KES",
        maximumFractionDigits: 0
    }).format(price);
}

function displayProperties(propertyList = properties) {
    const container = document.querySelector("#properties-container");
    const propertyCount = document.querySelector("#property-count");

    if (!container) {
        return;
    }

    container.innerHTML = propertyList.map(property => `
        <article class="property-card">

            <img
                src="${property.image}"
                alt="${property.title}"
                class="property-image"
            >

            <div class="property-content">

    <span class="property-type">
        ${property.type}
    </span>

    <h3>${property.title}</h3>

    <p class="property-location">
        📍 ${property.location}
    </p>

    <div class="property-details">
        <span>🛏 ${property.bedrooms} Beds</span>
        <span>🛁 ${property.bathrooms} Baths</span>
    </div>

    <p class="property-price">
        ${formatPrice(property.price)}
    </p>

    <a href="property-details.html?id=${property.id}" class="property-details-btn">
        View Details
    </a>

</div>

        </article>
    `).join("");

    if (propertyCount) {
        propertyCount.textContent = propertyList.length;
    }
}

displayProperties();
function displayPropertyDetails() {
    const container = document.querySelector(
        "#property-details-container"
    );

    if (!container) {
        return;
    }

    const params = new URLSearchParams(window.location.search);

    const propertyId = Number(params.get("id"));

    const property = properties.find(
        item => item.id === propertyId
    );

    if (!property) {
        container.innerHTML = `
            <div class="property-not-found">
                <h2>Property Not Found</h2>
                <p>
                    The property you are looking for does not exist.
                </p>
                <a href="properties.html" class="btn btn-primary">
                    Browse Properties
                </a>
            </div>
        `;

        return;
    }

    container.innerHTML = `
        <article class="property-details-layout">

            <div class="property-details-image">
                <img
                    src="${property.image}"
                    alt="${property.title}"
                >
            </div>

            <div class="property-details-info">

                <span class="property-type">
                    ${property.type}
                </span>

                <h1>${property.title}</h1>

                <p class="property-location">
                    📍 ${property.location}
                </p>

                <p class="details-price">
                    ${formatPrice(property.price)}
                </p>

                <div class="details-features">
                    <div>
                        <strong>${property.bedrooms}</strong>
                        <span>Bedrooms</span>
                    </div>

                    <div>
                        <strong>${property.bathrooms}</strong>
                        <span>Bathrooms</span>
                    </div>

                    <div>
                        <strong>${property.type}</strong>
                        <span>Property Type</span>
                    </div>
                </div>

                <div class="property-description">
                    <h2>About This Property</h2>

                    <p>
                        ${property.description}
                    </p>
                </div>

                <a href="properties.html" class="btn btn-primary">
                    Browse More Properties
                </a>

            </div>

        </article>
    `;
}

displayPropertyDetails();
function setupPropertySearch() {
    const searchInput = document.querySelector("#property-search");
    const noResults = document.querySelector("#no-results");

    if (!searchInput) {
        return;
    }

    searchInput.addEventListener("input", applyPropertyFilters);
}
function applyPropertyFilters() {
    const searchInput = document.querySelector("#property-search");
    const typeFilter = document.querySelector("#property-type");
    const priceFilter = document.querySelector("#max-price");
    const noResults = document.querySelector("#no-results");

    if (!searchInput || !typeFilter || !priceFilter) {
        return;
    }

    const searchTerm = searchInput.value
        .trim()
        .toLowerCase();

    const selectedType = typeFilter.value;

    const maximumPrice = Number(priceFilter.value);

    const filteredProperties = properties.filter(property => {
        const matchesSearch =
            property.title.toLowerCase().includes(searchTerm) ||
            property.location.toLowerCase().includes(searchTerm) ||
            property.type.toLowerCase().includes(searchTerm);

        const matchesType =
            selectedType === "" ||
            property.type === selectedType;

        const matchesPrice =
            maximumPrice === 0 ||
            property.price <= maximumPrice;

        return matchesSearch &&
            matchesType &&
            matchesPrice;
    });

    displayProperties(filteredProperties);

    if (noResults) {
        noResults.hidden = filteredProperties.length !== 0;
    }
}
function setupPropertyFilters() {
    const typeFilter = document.querySelector("#property-type");
    const priceFilter = document.querySelector("#max-price");

    if (typeFilter) {
        typeFilter.addEventListener(
            "change",
            applyPropertyFilters
        );
    }

    if (priceFilter) {
        priceFilter.addEventListener(
            "change",
            applyPropertyFilters
        );
    }
}
setupPropertySearch();
setupPropertyFilters();