// ============================================
// AGREGAR ESTILOS DEL MODAL Y SORTEO
// ============================================
function addRaffleStyles() {
  if (document.getElementById("raffleStyles")) return;

  const style = document.createElement("style");
  style.id = "raffleStyles";
  style.textContent = `
        .raffle-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: fadeIn 0.5s ease;
            backdrop-filter: blur(10px);
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
        
        .raffle-content {
            background: linear-gradient(135deg, #1a1a1a 0%, #2d1b4e 100%);
            padding: 50px;
            border-radius: 25px;
            text-align: center;
            max-width: 600px;
            width: 90%;
            border: 3px solid #8b5cf6;
            box-shadow: 0 0 50px rgba(139, 92, 246, 0.5);
            position: relative;
        }
        
        .raffle-content h2 {
            font-size: 2.5rem;
            color: #8b5cf6;
            margin-bottom: 10px;
            text-shadow: 0 0 20px rgba(139, 92, 246, 0.8);
        }
        
        .raffle-subtitle {
            color: #a0a0a0;
            font-size: 1.2rem;
            margin-bottom: 30px;
        }
        
        .raffle-animation {
            margin: 40px 0;
            transition: all 0.3s ease;
        }
        
        .raffle-number {
            font-size: 8rem;
            font-weight: 900;
            color: #ff6b35;
            text-shadow: 0 0 30px rgba(255, 107, 53, 0.8);
            animation: pulse 1s ease infinite;
        }
        
        .raffle-animation.spinning .raffle-number {
            animation: spin 0.1s linear infinite;
            color: #8b5cf6;
        }
        
        .raffle-animation.winner .raffle-number {
            animation: winnerPulse 0.5s ease;
            color: #ffd700;
            text-shadow: 0 0 50px rgba(255, 215, 0, 1);
            font-size: 10rem;
        }
        
        @keyframes spin {
            0% { transform: rotateY(0deg) scale(1); }
            50% { transform: rotateY(180deg) scale(1.2); }
            100% { transform: rotateY(360deg) scale(1); }
        }
        
        @keyframes winnerPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.3); }
        }
        
        .btn-raffle {
            background: linear-gradient(135deg, #8b5cf6, #ff6b35);
            color: white;
            border: none;
            padding: 20px 50px;
            font-size: 1.3rem;
            font-weight: 700;
            border-radius: 15px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 5px 25px rgba(139, 92, 246, 0.5);
        }
        
        .btn-raffle:hover:not(:disabled) {
            transform: translateY(-5px);
            box-shadow: 0 10px 40px rgba(139, 92, 246, 0.8);
        }
        
        .btn-raffle:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
        
        .raffle-note {
            margin-top: 20px;
            color: #a0a0a0;
            font-size: 0.9rem;
        }
        
        .winner-message {
            margin-top: 30px;
            animation: slideUp 0.5s ease;
        }
        
        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .winner-message h3 {
            color: #ffd700;
            font-size: 2rem;
            margin-bottom: 20px;
            text-shadow: 0 0 20px rgba(255, 215, 0, 0.8);
        }
        
        .winner-number-text {
            color: #a0a0a0;
            font-size: 1.2rem;
            margin-bottom: 10px;
        }
        
        .winner-number-big {
            font-size: 5rem;
            font-weight: 900;
            color: #ffd700;
            text-shadow: 0 0 40px rgba(255, 215, 0, 1);
            margin: 20px 0;
        }
        
        .winner-congrats {
            color: #ff6b35;
            font-size: 1.5rem;
            margin: 20px 0;
            font-weight: 600;
        }
        
        .btn-close-raffle {
            background: #1a1a1a;
            color: white;
            border: 2px solid #8b5cf6;
            padding: 15px 40px;
            font-size: 1.1rem;
            font-weight: 600;
            border-radius: 10px;
            cursor: pointer;
            margin-top: 20px;
            transition: all 0.3s ease;
        }
        
        .btn-close-raffle:hover {
            background: #8b5cf6;
            transform: translateY(-2px);
        }
        
        .confetti {
            position: absolute;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            animation: confettiFall linear;
            pointer-events: none;
        }
        
        @keyframes confettiFall {
            0% {
                top: -10%;
                transform: translateX(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                top: 110%;
                transform: translateX(100px) rotate(720deg);
                opacity: 0;
            }
        }
        
        .winner-ticket {
            animation: winnerGlow 1s ease infinite !important;
            background: linear-gradient(135deg, #ffd700, #ff6b35) !important;
            box-shadow: 0 0 30px rgba(255, 215, 0, 0.8) !important;
            transform: scale(1.2) !important;
            z-index: 100 !important;
        }
        
        @keyframes winnerGlow {
            0%, 100% {
                box-shadow: 0 0 30px rgba(255, 215, 0, 0.8);
            }
            50% {
                box-shadow: 0 0 50px rgba(255, 215, 0, 1);
            }
        }
        
        @media (max-width: 768px) {
            .raffle-content {
                padding: 30px 20px;
            }
            
            .raffle-content h2 {
                font-size: 1.8rem;
            }
            
            .raffle-number {
                font-size: 5rem;
            }
            
            .raffle-animation.winner .raffle-number {
                font-size: 6rem;
            }
            
            .winner-number-big {
                font-size: 3rem;
            }
        }
    `;

  document.head.appendChild(style);
}

// ============================================
// ESTILOS PARA BANNER DE "TODOS VENDIDOS"
// ============================================
function addAllSoldStyles() {
  if (document.getElementById("allSoldStyles")) return;

  const style = document.createElement("style");
  style.id = "allSoldStyles";
  style.textContent = `
        .all-sold-banner {
            background: linear-gradient(135deg, #8b5cf6, #ff6b35);
            padding: 30px;
            text-align: center;
            box-shadow: 0 4px 20px rgba(139, 92, 246, 0.5);
            animation: bannerSlide 0.5s ease;
        }
        
        @keyframes bannerSlide {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .banner-content h3 {
            color: white;
            font-size: 2rem;
            margin-bottom: 10px;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }
        
        .banner-content p {
            color: white;
            font-size: 1.2rem;
            margin: 5px 0;
        }
        
        .banner-subtitle {
            font-size: 1.5rem !important;
            font-weight: 700;
            margin-top: 10px !important;
        }
        
        @media (max-width: 768px) {
            .all-sold-banner {
                padding: 20px 10px;
            }
            
            .banner-content h3 {
                font-size: 1.5rem;
            }
            
            .banner-content p {
                font-size: 1rem;
            }
        }
    `;

  document.head.appendChild(style);
} // ============================================
// RIFA NOVA HALLOWEEN - JAVASCRIPT SIMPLIFICADO
// ============================================

// ============================================
// CONFIGURACIÓN
// ============================================
const TOTAL_TICKETS = 100;
const MAX_SELECTION = 2;
const TICKET_PRICE = 1;
const WHATSAPP_NUMBER = "593968485355";

// ⭐ CONTRASEÑA SECRETA PARA REALIZAR EL SORTEO ⭐
// Cámbiala por la que quieras (solo tú la sabrás)
const PASSWORD_SORTEO = "NOVA2024";

// ============================================
// ⭐ AQUÍ AGREGAS LOS BOLETOS VENDIDOS ⭐
// Solo agrega los números separados por comas
// Ejemplo: [5, 12, 23, 45, 67]
// ============================================
const BOLETOS_VENDIDOS = [
  10, 11, 7, 18, 9, 17, 67, 77, 14, 16, 100, 23, 75, 12, 66, 86, 98, 20, 41, 25,
  40,
];
// ============================================

// Estado de la aplicación
let selectedTickets = [];
let soldTickets = [...BOLETOS_VENDIDOS]; // Copia los boletos vendidos

// ============================================
// INICIALIZACIÓN
// ============================================
document.addEventListener("DOMContentLoaded", function () {
  generateTicketsGrid();
  updateProgressBar();
  setupEventListeners();
  checkIfAllSold(); // Verificar si ya se vendieron todos
  setupSecretAccess(); // Configurar acceso secreto para admin
});

// ============================================
// GENERAR GRID DE BOLETOS (1-100)
// ============================================
function generateTicketsGrid() {
  const ticketsGrid = document.getElementById("ticketsGrid");
  ticketsGrid.innerHTML = "";

  for (let i = 1; i <= TOTAL_TICKETS; i++) {
    const ticket = document.createElement("div");
    ticket.className = "ticket";
    ticket.textContent = i;
    ticket.dataset.number = i;

    // Si está en la lista de vendidos, marcarlo
    if (soldTickets.includes(i)) {
      ticket.classList.add("sold");
    }

    // Evento click
    ticket.addEventListener("click", function () {
      handleTicketClick(i, ticket);
    });

    ticketsGrid.appendChild(ticket);
  }
}

// ============================================
// MANEJAR CLICK EN BOLETO
// ============================================
function handleTicketClick(ticketNumber, ticketElement) {
  // Si ya está vendido, no hacer nada
  if (soldTickets.includes(ticketNumber)) {
    showNotification("Este boleto ya está vendido ❌", "error");
    return;
  }

  // Si ya está seleccionado, deseleccionarlo
  if (selectedTickets.includes(ticketNumber)) {
    selectedTickets = selectedTickets.filter((num) => num !== ticketNumber);
    ticketElement.classList.remove("selected");
    showNotification(`Boleto #${ticketNumber} removido`, "info");
  } else {
    // Verificar límite de selección
    if (selectedTickets.length >= MAX_SELECTION) {
      showNotification(
        `Solo puedes seleccionar ${MAX_SELECTION} boletos máximo ⚠️`,
        "warning"
      );
      return;
    }

    // Agregar a selección
    selectedTickets.push(ticketNumber);
    ticketElement.classList.add("selected");
    showNotification(`Boleto #${ticketNumber} seleccionado ✓`, "success");
  }

  updateSelectionPanel();
}

// ============================================
// ACTUALIZAR PANEL DE SELECCIÓN
// ============================================
function updateSelectionPanel() {
  const selectedCount = document.getElementById("selectedCount");
  const selectedNumbers = document.getElementById("selectedNumbers");
  const totalPrice = document.getElementById("totalPrice");
  const btnWhatsApp = document.getElementById("btnWhatsApp");

  selectedCount.textContent = selectedTickets.length;

  if (selectedTickets.length === 0) {
    selectedNumbers.textContent = "Ninguno";
    totalPrice.textContent = "0";
    btnWhatsApp.disabled = true;
  } else {
    const sortedTickets = [...selectedTickets].sort((a, b) => a - b);
    selectedNumbers.textContent = sortedTickets.join(", ");
    totalPrice.textContent = (selectedTickets.length * TICKET_PRICE).toFixed(2);
    btnWhatsApp.disabled = false;
  }
}

// ============================================
// ACTUALIZAR BARRA DE PROGRESO
// ============================================
function updateProgressBar() {
  const progressFill = document.getElementById("progressFill");
  const progressText = document.getElementById("progressText");

  const soldCount = soldTickets.length;
  const percentage = (soldCount / TOTAL_TICKETS) * 100;

  progressFill.style.width = percentage + "%";
  progressText.textContent = `${soldCount}/${TOTAL_TICKETS} vendidos (${percentage.toFixed(
    0
  )}%)`;
}

// ============================================
// ENVIAR A WHATSAPP
// ============================================
function sendToWhatsApp() {
  if (selectedTickets.length === 0) {
    showNotification("Por favor selecciona al menos un boleto", "warning");
    return;
  }

  const sortedTickets = [...selectedTickets].sort((a, b) => a - b);
  const ticketsText = sortedTickets.join(", ");
  const total = (selectedTickets.length * TICKET_PRICE).toFixed(2);

  // Mensaje para WhatsApp
  const message = `Hola, quiero participar en el sorteo de NOVA con los números: ${ticketsText}. Valor total: $${total} USD.`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  // Abrir WhatsApp
  window.open(whatsappURL, "_blank");

  showNotification(
    "¡Mensaje enviado! Espera la confirmación del vendedor 📱",
    "success"
  );
}

// ============================================
// SISTEMA DE NOTIFICACIONES
// ============================================
function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.textContent = message;

  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        border-radius: 10px;
        font-weight: 600;
        z-index: 9999;
        animation: slideIn 0.3s ease;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.4);
        max-width: 350px;
        font-size: 0.95rem;
    `;

  const colors = {
    success: "background: #4caf50; color: white;",
    error: "background: #f44336; color: white;",
    warning: "background: #ff9800; color: white;",
    info: "background: #2196f3; color: white;",
  };

  notification.style.cssText += colors[type] || colors.info;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = "slideOut 0.3s ease";
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Animaciones CSS para notificaciones
const style = document.createElement("style");
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ============================================
// CONFIGURAR EVENTOS
// ============================================
function setupEventListeners() {
  document
    .getElementById("btnWhatsApp")
    .addEventListener("click", sendToWhatsApp);
}

// ============================================
// VERIFICAR SI TODOS LOS BOLETOS ESTÁN VENDIDOS
// ============================================
function checkIfAllSold() {
  if (soldTickets.length === TOTAL_TICKETS) {
    // Mostrar mensaje de que todos están vendidos (SIN BOTÓN DE SORTEO)
    showAllSoldMessage();
  }
}

// ============================================
// MOSTRAR MENSAJE DE TODOS VENDIDOS (SIN SORTEO)
// ============================================
function showAllSoldMessage() {
  // Crear banner informativo
  const banner = document.createElement("div");
  banner.className = "all-sold-banner";
  banner.innerHTML = `
        <div class="banner-content">
            <h3>🎉 ¡TODOS LOS BOLETOS VENDIDOS! 🎉</h3>
           
            <p class="banner-subtitle">¡Gracias por participar! 🍀</p>
        </div>
    `;

  // Insertar después del header
  const header = document.querySelector(".header");
  header.after(banner);

  addAllSoldStyles();
}

// ============================================
// CONFIGURAR ACCESO SECRETO PARA ADMIN
// ============================================
function setupSecretAccess() {
  // Combinación de teclas: Ctrl + Shift + S
  document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && e.shiftKey && e.key === "S") {
      e.preventDefault();
      openAdminRaffleAccess();
    }
  });
}

// ============================================
// ABRIR ACCESO DE ADMIN PARA SORTEO
// ============================================
function openAdminRaffleAccess() {
  // Verificar que todos los boletos estén vendidos
  if (soldTickets.length !== TOTAL_TICKETS) {
    alert(
      "⚠️ Aún no se han vendido todos los boletos.\n\nVendidos: " +
        soldTickets.length +
        "/100"
    );
    return;
  }

  // Pedir contraseña
  const password = prompt("🔒 Ingresa la contraseña para realizar el sorteo:");

  if (password === PASSWORD_SORTEO) {
    showRaffleModal();
  } else if (password !== null) {
    alert("❌ Contraseña incorrecta");
  }
}

// ============================================
// MOSTRAR MODAL DE SORTEO
// ============================================
function showRaffleModal() {
  // Crear modal
  const modal = document.createElement("div");
  modal.className = "raffle-modal";
  modal.innerHTML = `
        <div class="raffle-content">
            <h2>🎃 ¡TODOS LOS BOLETOS VENDIDOS! 🎃</h2>
            <p class="raffle-subtitle">Es momento de realizar el sorteo</p>
            
            <div class="raffle-animation" id="raffleAnimation">
                <div class="raffle-number" id="raffleNumber">?</div>
            </div>
            
            <button class="btn-raffle" id="btnStartRaffle">
                🎲 REALIZAR SORTEO AHORA
            </button>
            
            <p class="raffle-note">El número ganador se seleccionará de forma aleatoria</p>
        </div>
    `;

  document.body.appendChild(modal);

  // Agregar estilos del modal
  addRaffleStyles();

  // Evento para iniciar sorteo
  document
    .getElementById("btnStartRaffle")
    .addEventListener("click", startRaffle);
}

// ============================================
// INICIAR SORTEO ALEATORIO
// ============================================
function startRaffle() {
  const raffleNumber = document.getElementById("raffleNumber");
  const btnStartRaffle = document.getElementById("btnStartRaffle");
  const raffleAnimation = document.getElementById("raffleAnimation");

  btnStartRaffle.disabled = true;
  btnStartRaffle.textContent = "🎲 Sorteando...";

  // Animación de números aleatorios
  let counter = 0;
  const maxIterations = 30;

  const interval = setInterval(() => {
    // Mostrar número aleatorio
    const randomNum = Math.floor(Math.random() * TOTAL_TICKETS) + 1;
    raffleNumber.textContent = randomNum;
    raffleAnimation.classList.add("spinning");

    counter++;

    if (counter >= maxIterations) {
      clearInterval(interval);
      // Seleccionar ganador final
      selectWinner();
    }
  }, 100);
}

// ============================================
// SELECCIONAR GANADOR FINAL
// ============================================
function selectWinner() {
  const raffleNumber = document.getElementById("raffleNumber");
  const raffleAnimation = document.getElementById("raffleAnimation");
  const raffleContent = document.querySelector(".raffle-content");

  // Número ganador aleatorio de los vendidos
  const winnerNumber =
    soldTickets[Math.floor(Math.random() * soldTickets.length)];

  // Mostrar número ganador con animación épica
  setTimeout(() => {
    raffleAnimation.classList.remove("spinning");
    raffleAnimation.classList.add("winner");
    raffleNumber.textContent = winnerNumber;

    // Agregar confetti y mensaje
    setTimeout(() => {
      const winnerMessage = document.createElement("div");
      winnerMessage.className = "winner-message";
      winnerMessage.innerHTML = `
                <h3>🎉 ¡TENEMOS GANADOR! 🎉</h3>
                <p class="winner-number-text">Boleto número</p>
                <p class="winner-number-big">${winnerNumber}</p>
                <p class="winner-congrats">¡Felicitaciones al ganador! 🎊</p>
                <button class="btn-close-raffle" onclick="closeRaffleModal()">
                    Cerrar
                </button>
            `;

      raffleContent.appendChild(winnerMessage);

      // Efecto de confetti
      createConfetti();

      // Resaltar boleto ganador en el grid
      highlightWinnerTicket(winnerNumber);
    }, 500);
  }, 1000);
}

// ============================================
// CERRAR MODAL DE SORTEO
// ============================================
function closeRaffleModal() {
  const modal = document.querySelector(".raffle-modal");
  if (modal) {
    modal.style.animation = "fadeOut 0.3s ease";
    setTimeout(() => modal.remove(), 300);
  }
}

// Hacer función global
window.closeRaffleModal = closeRaffleModal;

// ============================================
// RESALTAR BOLETO GANADOR EN EL GRID
// ============================================
function highlightWinnerTicket(winnerNumber) {
  const tickets = document.querySelectorAll(".ticket");
  tickets.forEach((ticket) => {
    if (parseInt(ticket.dataset.number) === winnerNumber) {
      ticket.classList.add("winner-ticket");
    }
  });
}

// ============================================
// CREAR EFECTO CONFETTI
// ============================================
function createConfetti() {
  const colors = ["#8b5cf6", "#ff6b35", "#ffd700", "#ff1493", "#00ff00"];
  const confettiCount = 50;

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "%";
    confetti.style.background =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDelay = Math.random() * 3 + "s";
    confetti.style.animationDuration = Math.random() * 3 + 2 + "s";

    document.querySelector(".raffle-modal").appendChild(confetti);

    // Remover después de la animación
    setTimeout(() => confetti.remove(), 5000);
  }
}

// ============================================
// AGREGAR ESTILOS DEL MODAL Y SORTEO
// ============================================
function addRaffleStyles() {
  if (document.getElementById("raffleStyles")) return;

  const style = document.createElement("style");
  style.id = "raffleStyles";
  style.textContent = `
        .raffle-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: fadeIn 0.5s ease;
            backdrop-filter: blur(10px);
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
        
        .raffle-content {
            background: linear-gradient(135deg, #1a1a1a 0%, #2d1b4e 100%);
            padding: 50px;
            border-radius: 25px;
            text-align: center;
            max-width: 600px;
            width: 90%;
            border: 3px solid #8b5cf6;
            box-shadow: 0 0 50px rgba(139, 92, 246, 0.5);
            position: relative;
        }
        
        .raffle-content h2 {
            font-size: 2.5rem;
            color: #8b5cf6;
            margin-bottom: 10px;
            text-shadow: 0 0 20px rgba(139, 92, 246, 0.8);
        }
        
        .raffle-subtitle {
            color: #a0a0a0;
            font-size: 1.2rem;
            margin-bottom: 30px;
        }
        
        .raffle-animation {
            margin: 40px 0;
            transition: all 0.3s ease;
        }
        
        .raffle-number {
            font-size: 8rem;
            font-weight: 900;
            color: #ff6b35;
            text-shadow: 0 0 30px rgba(255, 107, 53, 0.8);
            animation: pulse 1s ease infinite;
        }
        
        .raffle-animation.spinning .raffle-number {
            animation: spin 0.1s linear infinite;
            color: #8b5cf6;
        }
        
        .raffle-animation.winner .raffle-number {
            animation: winnerPulse 0.5s ease;
            color: #ffd700;
            text-shadow: 0 0 50px rgba(255, 215, 0, 1);
            font-size: 10rem;
        }
        
        @keyframes spin {
            0% { transform: rotateY(0deg) scale(1); }
            50% { transform: rotateY(180deg) scale(1.2); }
            100% { transform: rotateY(360deg) scale(1); }
        }
        
        @keyframes winnerPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.3); }
        }
        
        .btn-raffle {
            background: linear-gradient(135deg, #8b5cf6, #ff6b35);
            color: white;
            border: none;
            padding: 20px 50px;
            font-size: 1.3rem;
            font-weight: 700;
            border-radius: 15px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 5px 25px rgba(139, 92, 246, 0.5);
        }
        
        .btn-raffle:hover:not(:disabled) {
            transform: translateY(-5px);
            box-shadow: 0 10px 40px rgba(139, 92, 246, 0.8);
        }
        
        .btn-raffle:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
        
        .raffle-note {
            margin-top: 20px;
            color: #a0a0a0;
            font-size: 0.9rem;
        }
        
        .winner-message {
            margin-top: 30px;
            animation: slideUp 0.5s ease;
        }
        
        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .winner-message h3 {
            color: #ffd700;
            font-size: 2rem;
            margin-bottom: 20px;
            text-shadow: 0 0 20px rgba(255, 215, 0, 0.8);
        }
        
        .winner-number-text {
            color: #a0a0a0;
            font-size: 1.2rem;
            margin-bottom: 10px;
        }
        
        .winner-number-big {
            font-size: 5rem;
            font-weight: 900;
            color: #ffd700;
            text-shadow: 0 0 40px rgba(255, 215, 0, 1);
            margin: 20px 0;
        }
        
        .winner-congrats {
            color: #ff6b35;
            font-size: 1.5rem;
            margin: 20px 0;
            font-weight: 600;
        }
        
        .btn-close-raffle {
            background: #1a1a1a;
            color: white;
            border: 2px solid #8b5cf6;
            padding: 15px 40px;
            font-size: 1.1rem;
            font-weight: 600;
            border-radius: 10px;
            cursor: pointer;
            margin-top: 20px;
            transition: all 0.3s ease;
        }
        
        .btn-close-raffle:hover {
            background: #8b5cf6;
            transform: translateY(-2px);
        }
        
        .confetti {
            position: absolute;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            animation: confettiFall linear;
            pointer-events: none;
        }
        
        @keyframes confettiFall {
            0% {
                top: -10%;
                transform: translateX(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                top: 110%;
                transform: translateX(100px) rotate(720deg);
                opacity: 0;
            }
        }
        
        .winner-ticket {
            animation: winnerGlow 1s ease infinite !important;
            background: linear-gradient(135deg, #ffd700, #ff6b35) !important;
            box-shadow: 0 0 30px rgba(255, 215, 0, 0.8) !important;
            transform: scale(1.2) !important;
            z-index: 100 !important;
        }
        
        @keyframes winnerGlow {
            0%, 100% {
                box-shadow: 0 0 30px rgba(255, 215, 0, 0.8);
            }
            50% {
                box-shadow: 0 0 50px rgba(255, 215, 0, 1);
            }
        }
        
        @media (max-width: 768px) {
            .raffle-content {
                padding: 30px 20px;
            }
            
            .raffle-content h2 {
                font-size: 1.8rem;
            }
            
            .raffle-number {
                font-size: 5rem;
            }
            
            .raffle-animation.winner .raffle-number {
                font-size: 6rem;
            }
            
            .winner-number-big {
                font-size: 3rem;
            }
        }
    `;

  document.head.appendChild(style);
}

// ============================================
// MENSAJE EN CONSOLA
// ============================================
console.log(
  "%c🎃 RIFA NOVA HALLOWEEN 🎃",
  "font-size: 20px; font-weight: bold; color: #8b5cf6;"
);
console.log(
  "%cPara marcar boletos como vendidos, edita el array BOLETOS_VENDIDOS en script.js",
  "color: #ff6b35;"
);
