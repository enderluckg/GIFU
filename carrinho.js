// Função para adicionar item ao carrinho
function addToCart(productId, productName, productPrice, productImage) {
    // Recupera o carrinho do localStorage ou cria um novo
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Verifica se o produto já está no carrinho
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        // Adiciona o novo produto
        cart.push({
            id: productId,
            name: productName,
            price: productPrice,
            image: productImage,
            quantity: 1
        });
    }
    
    // Salva no localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Redireciona para a página do carrinho
    window.location.href = 'carrinho.html';
}

// Função para carregar os itens do carrinho
function loadCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsDiv = document.getElementById('carrinho-itens');
    const emptyCartDiv = document.getElementById('carrinho-vazio');
    const subtotalDiv = document.querySelector('.subtotal');
    const numProductsDiv = document.querySelector('.numerop');
    
    if (cart.length === 0) {
        cartItemsDiv.style.display = 'none';
        emptyCartDiv.style.display = 'block';
        subtotalDiv.textContent = 'Subtotal: R$0,00';
        numProductsDiv.textContent = 'Número de Produtos: 0';
        return;
    }
    
    let html = '';
    let subtotal = 0;
    let totalItems = 0;
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        totalItems += item.quantity;
        
        html += `
            <div class="jogo">
                <div class="org4"><img class="img1" src="${item.image}" alt="${item.name}"></div>
                <div class="org5">
                    <div class="Tituloproduto">${item.name}</div>
                    <div class="precoproduto">Preço: R$${item.price.toFixed(2).replace('.', ',')}</div>
                    <div class="categoriaproduto">Quantidade: ${item.quantity}</div>
                    <div class="excluirproduto" onclick="removeFromCart('${item.id}')">Excluir</div>
                </div>
            </div>
        `;
    });
    
    cartItemsDiv.innerHTML = html;
    subtotalDiv.textContent = `Subtotal: R$${subtotal.toFixed(2).replace('.', ',')}`;
    numProductsDiv.textContent = `Número de Produtos: ${totalItems}`;
}

// Função para remover item do carrinho
function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCartItems();
}

// Carrega os itens quando a página do carrinho é aberta
if (document.getElementById('carrinho-itens')) {
    document.addEventListener('DOMContentLoaded', loadCartItems);
}

// Atualiza o contador do carrinho no menu
function updateCartCounter() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    
    // Você pode adicionar um contador visual no ícone do carrinho se quiser
    console.log(`Itens no carrinho: ${totalItems}`);
}

// Atualiza o contador quando a página carrega
document.addEventListener('DOMContentLoaded', updateCartCounter);