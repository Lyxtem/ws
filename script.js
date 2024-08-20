document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('productModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalLinkButton = document.getElementById('modalLinkButton');
    const closeBtn = document.getElementsByClassName('close')[0];

    const products = {
        1: {
            title: 'Ensalada Caprese',
            description: 'Ensalada Caprese - Tomate, feta y albahaca en una deliciosa ensalada.',
            image: 'imagen1.jpg',
            link: 'https://ejemplo.com/ensalada-caprese'
        },
        2: {
            title: 'Pasta Carbonara',
            description: 'Espaguetis al dente con huevo, bacon y parmesano en una crema rica y suave.',
            image: 'imagen2.jpg',
            link: 'https://ejemplo.com/pasta-carbonara'
        },
        3: {
            title: 'Pollo a la Parrilla',
            description: 'Filete de pollo marinado al baño de salmuera y grillado hasta la perfección.',
            image: 'imagen3.jpg',
            link: 'https://ejemplo.com/pollo-parrilla'
        },
        4: {
            title: 'Pescado a la Plancha',
            description: 'Delicioso filete de pescado plano, servido con una salsa de limón y espinacas.',
            image: 'imagen4.jpg',
            link: 'https://ejemplo.com/pescado-plancha'
        },
        5: {
            title: 'Tarta de Chocolate',
            description: 'Un rico pastel de chocolate negro lleno de crema batida y servido en una base crujiente.',
            image: 'imagen5.jpg',
            link: 'https://ejemplo.com/tarta-chocolate'
        }
    };

    document.querySelectorAll('.product-item').forEach(function (item) {
        item.addEventListener('click', function () {
            const productId = this.getAttribute('data-product');
            const product = products[productId];
            modalImage.src = product.image;
            modalTitle.textContent = product.title;
            modalDescription.textContent = product.description;
            modalLinkButton.href = product.link; // Asignar el enlace al botón
            modal.style.display = 'block';
        });
    });

    closeBtn.onclick = function () {
        modal.style.display = 'none';
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});
