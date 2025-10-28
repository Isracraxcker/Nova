// ============================================
// RIFA NOVA HALLOWEEN - JAVASCRIPT SIMPLIFICADO
// ============================================

// ============================================
// CONFIGURACIÓN
// ============================================
const TOTAL_TICKETS = 100;
const MAX_SELECTION = 2;
const TICKET_PRICE = 1;
const WHATSAPP_NUMBER = "593968485355";

// ============================================
// ⭐ AQUÍ AGREGAS LOS BOLETOS VENDIDOS ⭐
// Solo agrega los números separados por comas
// Ejemplo: [5, 12, 23, 45, 67]
// ============================================
const BOLETOS_VENDIDOS = [
    // Agrega aquí los números de boletos vendidos
    // Ejemplo cuando vendas:
    // [5, 12, 23, 45, 67]
    10,11,7,18,9,17,67
];
// ============================================

// Estado de la aplicación
let selectedTickets = [];
let soldTickets = [...BOLETOS_VENDIDOS]; // Copia los boletos vendidos

// ============================================
// INICIALIZACIÓN
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    generateTicketsGrid();
    updateProgressBar();
    setupEventListeners();
});

// ============================================
// GENERAR GRID DE BOLETOS (1-100)
// ============================================
function generateTicketsGrid() {
    const ticketsGrid = document.getElementById('ticketsGrid');
    ticketsGrid.innerHTML = '';

    for (let i = 1; i <= TOTAL_TICKETS; i++) {
        const ticket = document.createElement('div');
        ticket.className = 'ticket';
        ticket.textContent = i;
        ticket.dataset.number = i;

        // Si está en la lista de vendidos, marcarlo
        if (soldTickets.includes(i)) {
            ticket.classList.add('sold');
        }

        // Evento click
        ticket.addEventListener('click', function() {
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
        showNotification('Este boleto ya está vendido ❌', 'error');
        return;
    }

    // Si ya está seleccionado, deseleccionarlo
    if (selectedTickets.includes(ticketNumber)) {
        selectedTickets = selectedTickets.filter(num => num !== ticketNumber);
        ticketElement.classList.remove('selected');
        showNotification(`Boleto #${ticketNumber} removido`, 'info');
    } else {
        // Verificar límite de selección
        if (selectedTickets.length >= MAX_SELECTION) {
            showNotification(`Solo puedes seleccionar ${MAX_SELECTION} boletos máximo ⚠️`, 'warning');
            return;
        }

        // Agregar a selección
        selectedTickets.push(ticketNumber);
        ticketElement.classList.add('selected');
        showNotification(`Boleto #${ticketNumber} seleccionado ✓`, 'success');
    }

    updateSelectionPanel();
}

// ============================================
// ACTUALIZAR PANEL DE SELECCIÓN
// ============================================
function updateSelectionPanel() {
    const selectedCount = document.getElementById('selectedCount');
    const selectedNumbers = document.getElementById('selectedNumbers');
    const totalPrice = document.getElementById('totalPrice');
    const btnWhatsApp = document.getElementById('btnWhatsApp');

    selectedCount.textContent = selectedTickets.length;
    
    if (selectedTickets.length === 0) {
        selectedNumbers.textContent = 'Ninguno';
        totalPrice.textContent = '0';
        btnWhatsApp.disabled = true;
    } else {
        const sortedTickets = [...selectedTickets].sort((a, b) => a - b);
        selectedNumbers.textContent = sortedTickets.join(', ');
        totalPrice.textContent = (selectedTickets.length * TICKET_PRICE).toFixed(2);
        btnWhatsApp.disabled = false;
    }
}

// ============================================
// ACTUALIZAR BARRA DE PROGRESO
// ============================================
function updateProgressBar() {
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');

    const soldCount = soldTickets.length;
    const percentage = (soldCount / TOTAL_TICKETS) * 100;

    progressFill.style.width = percentage + '%';
    progressText.textContent = `${soldCount}/${TOTAL_TICKETS} vendidos (${percentage.toFixed(0)}%)`;
}

// ============================================
// ENVIAR A WHATSAPP
// ============================================
function sendToWhatsApp() {
    if (selectedTickets.length === 0) {
        showNotification('Por favor selecciona al menos un boleto', 'warning');
        return;
    }

    const sortedTickets = [...selectedTickets].sort((a, b) => a - b);
    const ticketsText = sortedTickets.join(', ');
    const total = (selectedTickets.length * TICKET_PRICE).toFixed(2);

    // Mensaje para WhatsApp
    const message = `Hola, quiero participar en el sorteo de NOVA con los números: ${ticketsText}. Valor total: $${total} USD.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Abrir WhatsApp
    window.open(whatsappURL, '_blank');
    
    showNotification('¡Mensaje enviado! Espera la confirmación del vendedor 📱', 'success');
}

// ============================================
// SISTEMA DE NOTIFICACIONES
// ============================================
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
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
        success: 'background: #4caf50; color: white;',
        error: 'background: #f44336; color: white;',
        warning: 'background: #ff9800; color: white;',
        info: 'background: #2196f3; color: white;'
    };

    notification.style.cssText += colors[type] || colors.info;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Animaciones CSS para notificaciones
const style = document.createElement('style');
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
    document.getElementById('btnWhatsApp').addEventListener('click', sendToWhatsApp);
}

// ============================================
// MENSAJE EN CONSOLA
// ============================================
console.log('%c🎃 RIFA NOVA HALLOWEEN 🎃', 'font-size: 20px; font-weight: bold; color: #8b5cf6;');
console.log('%cPara marcar boletos como vendidos, edita el array BOLETOS_VENDIDOS en script.js', 'color: #ff6b35;');