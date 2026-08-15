function updateDashboardStatistics() {
    const totalProperties =
        document.querySelector("#total-properties");

    const totalHouses =
        document.querySelector("#total-houses");

    const totalApartments =
        document.querySelector("#total-apartments");

    const totalLand =
        document.querySelector("#total-land");

    const totalCommercial =
        document.querySelector("#total-commercial");

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

    const land = properties.filter(property =>
        property.type.toLowerCase() === "land"
    );

    const commercial = properties.filter(property =>
        property.type.toLowerCase() === "commercial"
    );

    totalHouses.textContent = houses.length;
    totalApartments.textContent = apartments.length;
    totalLand.textContent = land.length;
    totalCommercial.textContent = commercial.length;
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

                <div class="admin-property-actions">
    <a
        href="property-details.html?id=${property.id}"
        class="btn property-btn"
    >
        View Property
    </a>

     ${
        property.isCustom
            ? `
                <button
                    class="delete-property-btn"
                    data-id="${property.id}"
                >
                    Delete
                </button>
            `
            : ""
    }
</div>

            </div>

        </article>
    `).join("");
    setupDeleteButtons();
}

function setupDeleteButtons() {
    const deleteButtons =
        document.querySelectorAll(".delete-property-btn");

    deleteButtons.forEach(button => {
        button.addEventListener("click", () => {
            const propertyId =
                Number(button.dataset.id);

            const property = properties.find(
                property => property.id === propertyId
            );

            if (!property) {
                return;
            }

            const confirmed = confirm(
                `Are you sure you want to delete "${property.title}"?`
            );

            if (!confirmed) {
                return;
            }

            const propertyIndex = properties.findIndex(
                property => property.id === propertyId
            );

            properties.splice(propertyIndex, 1);

            saveCustomProperties();

            displayAdminProperties();
            updateDashboardStatistics();

            alert("Property deleted successfully.");
        });
    });
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