const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const email = urlParams.get("email");

const oneDayButton = document.getElementById("oneDayButton");
const oneMonthButton = document.getElementById("oneMonthButton");
const oneYearButton = document.getElementById("oneYearButton");

oneDayButton.addEventListener("click", async () => {
    trackBeginCheckout(1.0, "24hrs", "24 hrs pass");
    window.location.href = "https://monzo.me/martinlanda/1/billing?d=" + email;
});

oneMonthButton.addEventListener("click", async () => {
    trackBeginCheckout(7.77, "1mth", "1 mth subscription");
    window.location.href = "https://monzo.me/martinlanda/7.77/billing?d=" + email;
});

oneYearButton.addEventListener("click", async () => {
    trackBeginCheckout(7.77, "1yr", "1 yr subscription");
    window.location.href = "https://monzo.me/martinlanda/77.7/billing?d=" + email;
});

if (!email) {
    oneDayButton.disabled = "disabled";
    oneMonthButton.disabled = "disabled";
    oneYearButton.disabled = "disabled";
}

function trackBeginCheckout(value, itemId, itemName) {
    gtag("event", "begin_checkout", {
        currency: "GBP",
        value: value,
        items: [
            {
                item_id: itemId,
                item_name: itemName,
            }
        ]
    });
}