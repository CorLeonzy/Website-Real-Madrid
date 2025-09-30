function handleKeyPress(event) {
  if (event.key === 'Enter') {
    search();
  }
}

function search() {
  const input = document.getElementById("searchInput").value.trim().toLowerCase();
  const resultsBox = document.getElementById("searchResults");

  if (input === "") return;

  // Simulasi hasil pencarian
  const database = {
    "soto ayam": [
      "Soto Ayam adalah makanan khas Indonesia berbahan dasar ayam dengan kuah kuning.",
      "Biasanya disajikan dengan nasi, telur, seledri, dan bawang goreng."
    ],
    "iphone 16": [
      "iPhone 16 diperkirakan rilis tahun 2025 dengan chip A19 Bionic.",
      "Fitur baru meliputi kamera 48MP dan teknologi AI yang lebih canggih.",
      "Desain lebih ramping dan ringan dibanding generasi sebelumnya."
    ]
  };

  const found = database[input];
  resultsBox.innerHTML = "<h3>Hasil Pencarian</h3>";

  if (found) {
    const ul = document.createElement("ul");
    found.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });
    resultsBox.appendChild(ul);
  } else {
    resultsBox.innerHTML += "<p>Tidak ditemukan hasil untuk kata kunci tersebut.</p>";
  }
}
