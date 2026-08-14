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

function displayProperties() {
    const container = document.querySelector("#properties-container");
    const propertyCount = document.querySelector("#property-count");

    if (!container) {
        return;
    }

    container.innerHTML = properties.map(property => `
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

            </div>

        </article>
    `).join("");

    if (propertyCount) {
        propertyCount.textContent = properties.length;
    }
}

displayProperties();