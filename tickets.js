function checkAge() {
    var age = document.getElementById("ageInput").value;
    var message = document.getElementById("age-message");
    var overlay = document.getElementById("age-check-overlay");

    if (age >= 18) {
        overlay.style.display = "none";
    } else {
        message.textContent = "Access denied. You must be 18 or older.";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var ticketData = {
        'champions-league': { title: 'Champions League', price: 120.00 },
        'world-cup': { title: 'World Cup', price: 150.00 },
        'euro': { title: 'Euro', price: 100.00 },
        'copa-america': { title: 'Copa America', price: 90.00 },
        'nations-league': { title: 'Nations League', price: 80.00 }
    };

    var modalOverlay = document.getElementById('ticket-modal-overlay');
    var closeModalButton = document.getElementById('close-modal-button');
    var modalTicketTitle = document.getElementById('modal-ticket-title');
    var modalUnitPrice = document.getElementById('modal-unit-price');
    var modalQuantity = document.getElementById('modal-quantity');
    var modalTotalPrice = document.getElementById('modal-total-price');
    var decrementButton = document.getElementById('decrement-quantity');
    var incrementButton = document.getElementById('increment-quantity');
    var confirmBuyButton = document.getElementById('confirm-buy-button');

    var currentTicketId = null;

    function updateTotalPrice() {
        if (!currentTicketId) return;
        var quantity = parseInt(modalQuantity.textContent);
        var unitPrice = ticketData[currentTicketId].price;
        var total = (quantity * unitPrice).toFixed(2);
        modalTotalPrice.textContent = total;
    }

    var buyButtons = document.querySelectorAll('.buy-tickets-button');
    buyButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            currentTicketId = event.target.dataset.ticketId;
            var data = ticketData[currentTicketId];
            if (data) {
                modalTicketTitle.textContent = data.title;
                modalUnitPrice.textContent = data.price.toFixed(2);
                modalQuantity.textContent = 1;
                updateTotalPrice();
                modalOverlay.style.display = 'flex';
            }
        });
    });

    closeModalButton.addEventListener('click', function() {
        modalOverlay.style.display = 'none';
    });

    modalOverlay.addEventListener('click', function(event) {
        if (event.target === modalOverlay) {
            modalOverlay.style.display = 'none';
        }
    });

    decrementButton.addEventListener('click', function() {
        var quantity = parseInt(modalQuantity.textContent);
        if (quantity > 1) {
            quantity--;
            modalQuantity.textContent = quantity;
            updateTotalPrice();
        }
    });

    incrementButton.addEventListener('click', function() {
        var quantity = parseInt(modalQuantity.textContent);
        quantity++;
        modalQuantity.textContent = quantity;
        updateTotalPrice();
    });

    confirmBuyButton.addEventListener('click', function() {
        var quantity = parseInt(modalQuantity.textContent);
        var total = parseFloat(modalTotalPrice.textContent);
        var ticketName = modalTicketTitle.textContent;
        alert('You have successfully purchased ' + quantity + ' ticket(s) for ' + ticketName + ' for a total of $' + total + '!');
        modalOverlay.style.display = 'none';
    });
});
