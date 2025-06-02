fetch('data/itinerary.json')
  .then(response => response.json())
  .then(data => {
    const tabs = document.getElementById('day-tabs');
    const content = document.getElementById('day-content');

    data.forEach((dayData, index) => {
      const tab = document.createElement('li');
      tab.textContent = dayData.day;
      tab.addEventListener('click', () => showDay(index));
      tabs.appendChild(tab);
    });

    function showDay(index) {
      const day = data[index];
      content.innerHTML = `<h2>${day.day} - ${day.date}</h2>` +
        day.activities.map(act => `
          <div class="activity">
            <p><strong>${act.time}</strong>: ${act.event}</p>
            <p>Location: ${act.location}</p>
            <a href="${act.map}" target="_blank">Directions</a>
          </div>
        `).join('');
    }

    // Load first day by default
    showDay(0);
  });
