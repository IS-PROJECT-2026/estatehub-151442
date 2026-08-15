function updateDashboardStatistics() {
    const totalProperties =
        document.querySelector("#total-properties");

    const totalHouses =
        document.querySelector("#total-houses");

    const totalApartments =
        document.querySelector("#total-apartments");

    const totalOther =
        document.querySelector("#total-other");

    if (!totalProperties) {
        return;
    }

    totalProperties.textContent = properties.length;

    const houses = properties.filter(property =>
        property.type.toLowerCase() === "house"
    );

    const apartments = properties.filter(property =>
        property.type.toLowerCase() === "apartment"
    );

    const otherProperties = properties.filter(property =>
        property.type.toLowerCase() !== "house" &&
        property.type.toLowerCase() !== "apartment"
    );

    totalHouses.textContent = houses.length;
    totalApartments.textContent = apartments.length;
    totalOther.textContent = otherProperties.length;
}


function displayAdminProperties() {
    const container =
        document.querySelector(
            "#admin-properties-container"
        );

    if (!container) {
        return;
    }

    container.innerHTML = properties.map(property => `
        <article class="admin-property-card">

            <img
                src="${property.image}"
                alt="${property.title}"
            >

            <div class="admin-property-content">

                <span class="property-type">
                    ${property.type}
                </span>

                <h3>${property.title}</h3>

                <p>${property.location}</p>

                <strong>
                    KSh ${property.price.toLocaleString()}
                </strong>

                <a
                    href="property-details.html?id=${property.id}"
                    class="btn property-btn"
                >
                    View Property
                </a>

            </div>

        </article>
    `).join("");
}


document.addEventListener("DOMContentLoaded", () => {
    updateDashboardStatistics();
    displayAdminProperties();
    setupPropertyForm();
});
function setupPropertyForm() {
    const propertyForm =
        document.querySelector("#property-form");

    if (!propertyForm) {
        return;
    }

    propertyForm.addEventListener("submit", event => {
        event.preventDefault();

        if (!propertyForm.checkValidity()) {
            propertyForm.reportValidity();
            return;
        }

        const newProperty = {
            id: Date.now(),

            title: document.querySelector(
                "#property-title"
            ).value.trim(),

            location: document.querySelector(
                "#property-location"
            ).value.trim(),

            type: document.querySelector(
                "#property-type-input"
            ).value,

            price: Number(
                document.querySelector(
                    "#property-price"
                ).value
            ),

            bedrooms: Number(
                document.querySelector(
                    "#property-bedrooms"
                ).value
            ),

            bathrooms: Number(
                document.querySelector(
                    "#property-bathrooms"
                ).value
            ),

            image: document.querySelector(
                "#property-image"
            ).value.trim(),

            description: document.querySelector(
                "#property-description"
            ).value.trim(),

            isCustom: true
        };

        properties.push(newProperty);

        saveCustomProperties();

        propertyForm.reset();

        displayAdminProperties();

        updateDashboardStatistics();

        alert("Property added successfully.");
    });
}