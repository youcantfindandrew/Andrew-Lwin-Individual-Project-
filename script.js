document.querySelectorAll('.player-img').forEach(img => {
    img.addEventListener('click', () => {
      const modal = document.getElementById('modal');
      const info = document.getElementById('playerInfo');
      info.textContent = `${img.dataset.name} is one of the greatest tennis players.`;
      modal.classList.remove('hidden');
    });
  });
  
  document.querySelector('.close')?.addEventListener('click', () => {
    document.getElementById('modal').classList.add('hidden');
  });
  
  document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (name && email && message) {
      document.getElementById('formMsg').textContent = "Thanks for your message!";
      this.reset();
    } else {
      document.getElementById('formMsg').textContent = "Please fill out all fields.";
    }
  });
const equipmentDetails = {
    racket: "A tennis racket is the primary tool for striking the ball. They come in various sizes, materials, and weights to suit different playing styles.",
    balls: "Tennis balls are pressurized and covered in felt. They wear out over time and are often replaced after several games.",
    shoes: "Tennis shoes offer support and traction on the court. Different surfaces may require different shoe types.",
    clothing: "Tennis clothing is designed to be lightweight and breathable. Moisture-wicking technology helps keep players cool."
  };
  
  function showEquipmentInfo(item) {
    const infoBox = document.getElementById('equipment-info');
    infoBox.textContent = equipmentDetails[item];
    infoBox.classList.add('highlight');
  }
  
  const funFacts = [
    "The fastest tennis serve ever recorded was 157.2 mph (Sam Groth).",
    "Wimbledon is the oldest tennis tournament in the world, founded in 1877.",
    "A single tennis match can last over 11 hours (like Isner vs Mahut in 2010).",
    "Tennis was originally played with the palm of the hand before rackets were invented."
  ];
  
  function displayFunFact() {
    const factBox = document.getElementById('fun-fact');
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    factBox.textContent = funFacts[randomIndex];
  }
  document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-info");
    const extraInfo = document.getElementById("extra-info");

    toggleButton.addEventListener("click", () => {
        if (extraInfo.style.display === "none") {
            extraInfo.style.display = "block";
            toggleButton.textContent = "Hide Info";
        } else {
            extraInfo.style.display = "none";
            toggleButton.textContent = "Show More Info";
        }
    });

    const submitButton = document.getElementById("submit-answer");
    const quizInputs = document.querySelectorAll(".quiz-input");
    const feedback = document.getElementById("quiz-feedback");

    submitButton.addEventListener("click", () => {
        let correctCount = 0;

        quizInputs.forEach(input => {
            const userAnswer = input.value.trim().toLowerCase();
            const correctAnswer = input.dataset.answer.toLowerCase();

            if (userAnswer === correctAnswer) {
                input.style.borderColor = "green";
                correctCount++;
            } else {
                input.style.borderColor = "red";
            }
        });

        if (correctCount === quizInputs.length) {
            feedback.textContent = "🎉 Great job! You got all the answers right!";
            feedback.style.color = "green";
        } else {
            feedback.textContent = `You got ${correctCount} out of ${quizInputs.length} correct. Try again!`;
            feedback.style.color = "orange";
        }
    });

    quizInputs.forEach(input => {
        input.addEventListener("focus", () => {
            input.style.borderColor = "#ccc";
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalContent = document.querySelector(".modal-content");
    const closeBtn = document.querySelector(".close");
    const playerInfo = document.getElementById("playerInfo");
    const playerImages = document.querySelectorAll(".player-img");
    const searchBar = document.getElementById("searchBar");
    const funFactBtn = document.getElementById("funFactBtn");
    const funFactDisplay = document.getElementById("funFactDisplay");
    let viewedPlayers = new Set();
  
    const playersData = {
      "Roger Federer": {
        bio: "Swiss legend with 20 Grand Slam titles. Known for his elegant style.",
        facts: ["Won 8 Wimbledons", "Nicknamed 'The Maestro'"]
      },
      "Serena Williams": {
        bio: "Dominated women's tennis with 23 Grand Slam titles.",
        facts: ["Powerful serve", "4 Olympic gold medals"]
      },
      "Rafael Nadal": {
        bio: "King of Clay with 14 French Open titles.",
        facts: ["Fierce topspin", "Olympic gold in singles and doubles"]
      },
      "Novak Djokovic": {
        bio: "Record-breaking Serb with most weeks at #1.",
        facts: ["Flexibility king", "Complete game on all surfaces"]
      },
      "Coco Gauff": {
        bio: "Young American star who made waves at Wimbledon at age 15.",
        facts: ["Youngest to qualify for Wimbledon", "US Open champ"]
      }
    };
  
    const funFacts = [
      "The longest tennis match lasted 11 hours and 5 minutes!",
      "Wimbledon uses over 50,000 tennis balls per tournament.",
      "The fastest serve ever was 263 km/h by Sam Groth.",
      "Tennis was originally played with bare hands!",
      "A match can legally last forever – there’s no time limit!"
    ];
  
    playerImages.forEach(img => {
      img.addEventListener("click", () => {
        const name = img.dataset.name;
        const player = playersData[name];
  
        if (player) {
          playerInfo.innerHTML = `
            <h2>${name}</h2>
            <p>${player.bio}</p>
            <ul>${player.facts.map(f => `<li>${f}</li>`).join("")}</ul>
          `;
          modal.classList.remove("hidden");
  
          viewedPlayers.add(name);
          console.log("Viewed players:", Array.from(viewedPlayers));
        }
      });
    });
  
    closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
    window.addEventListener("click", e => {
      if (e.target === modal) modal.classList.add("hidden");
    });
    document.addEventListener("keydown", e => {
      if (e.key === "Escape") modal.classList.add("hidden");
    });

    searchBar.addEventListener("input", e => {
      const query = e.target.value.toLowerCase();
      const cards = document.querySelectorAll(".player-card");
  
      cards.forEach(card => {
        const name = card.dataset.name.toLowerCase();
        card.style.display = name.includes(query) ? "block" : "none";
      });
    });
    
    funFactBtn.addEventListener("click", () => {
      const random = funFacts[Math.floor(Math.random() * funFacts.length)];
      funFactDisplay.textContent = random;
    });
  });
  