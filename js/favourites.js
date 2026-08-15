function displayFavouriteProperties() {
    const container =
        document.querySelector("#favourites-container");

    const count =
        document.querySelector("#favourites-count");

    const emptyState =
        document.querySelector("#empty-favourites");

    if (!container) {
        return;
    }

    const favouriteProperties = properties.filter(property =>
        favourites.includes(property.id)
    );

    if (count) {
        count.textContent =
            `${favouriteProperties.length} ${
                favouriteProperties.length === 1
                    ? "property"
                    : "properties"
            } saved`;
    }

    if (favouriteProperties.length === 0) {
        container.innerHTML = "";
        emptyState.hidden = false;
        return;
    }

    emptyState.hidden = true;

    container.innerHTML = favouriteProperties.map(property => `
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
                    ${property.location}
                </p>

                <p class="property-price">
                    KSh ${property.price.toLocaleString()}
                </p>

                <a
                    href="property-details.html?id=${property.id}"
                    class="btn property-btn"
                >
                    View Details
                </a>

                <button
                    class="favourite-btn is-favourite"
                    data-id="${property.id}"
                >
                    ♥ Remove Favourite
                </button>
            </div>
        </article>
    `).join("");

    setupRemoveFavouriteButtons();
}


function setupRemoveFavouriteButtons() {
    const buttons =
        document.querySelectorAll(".favourite-btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const propertyId = Number(button.dataset.id);

            const propertyIndex =
                favourites.indexOf(propertyId);

            if (propertyIndex !== -1) {
                favourites.splice(propertyIndex, 1);

                saveFavourites();

                displayFavouriteProperties();
            }
        });
    });
}


document.addEventListener("DOMContentLoaded", () => {
    displayFavouriteProperties();
});