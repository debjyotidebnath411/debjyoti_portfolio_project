
function addRecommendation() {
    const recInput = document.getElementById("new-rec");
    const recList = document.getElementById("rec-list");
    if (recInput.value.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = recInput.value;
        recList.appendChild(li);
        alert("Recommendation submitted successfully!");
        recInput.value = "";
    }
}
