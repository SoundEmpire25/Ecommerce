/// <reference types="cypress" />

describe('E2E QA Suite for SoundEmpire (Versión Premium)', () => {
    
    beforeEach(() => {
        // 1. Visitar URL (Puerto 6500)
        cy.visit('http://localhost:6500/Prototipo.html'); 
        
        // 2. Verificaciones iniciales con DATA-QA
        cy.get('[data-qa="logo"]').should('be.visible');
        cy.get('[data-qa="cart-badge"]').should('not.exist');
    });

    // --- 1. NAVEGACIÓN ---
    it('1. Navegación: Debe cambiar de vistas correctamente', () => {
        cy.get('h2').should('contain.text', 'Destacados del Mes');
        
        cy.get('[data-qa="nav-catalogo"]').click();
        cy.get('[data-qa="catalog-main"] h2').should('contain.text', 'Catálogo Completo');
        cy.get('[data-qa="catalog-grid"]').children().should('have.length.at.least', 8);
        
        cy.get('[data-qa="nav-estudio"]').click();
        cy.get('[data-qa="catalog-main"] h2').should('contain.text', 'Equipamiento de Estudio');
    });

    // --- 2. DETALLE DE PRODUCTO ---
    it('2. Detalle de Producto: Debe abrir la vista de detalle', () => {
        const productId = 1;
        const productName = 'Neumann U87 Ai Studio Set';
        
        cy.get(`[data-qa="product-name-${productId}"]`).first().click();
        cy.get(`[data-qa="product-detail-${productId}"]`).should('be.visible');
        cy.get('h1').should('contain.text', productName);
        
        cy.get('[data-qa="detail-back"]').click();
        cy.get('[data-qa="catalog-main"] h2').should('contain.text', 'Catálogo Completo');
    });

    // --- 3. CARRITO ---
    it('3. Carrito: Debe agregar, modificar cantidades, y eliminar ítems', () => {
        const prodId1 = 4; // Universal Audio (Home)
        const prodId2 = 7; // Sennheiser (Catálogo)

        // A. Agregar desde Home
        cy.get(`[data-qa="add-to-cart-${prodId1}"]`).first().click();
        cy.get('[data-qa="cart-overlay"]').should('be.visible');
        cy.get('[data-qa="cart-badge"]').should('contain.text', '1');
        cy.get('[data-qa="cart-total"]').should('contain.text', '990.000');

        // B. Aumentar cantidad
        cy.get(`[data-qa="cart-increase-${prodId1}"]`).click();
        cy.get(`[data-qa="cart-qty-${prodId1}"]`).should('contain.text', '2');
        cy.get('[data-qa="cart-total"]').should('contain.text', '1.980.000');

        // C. Cerrar e ir a buscar el segundo
        cy.get('[data-qa="cart-close"]').click();
        cy.get('[data-qa="cart-overlay"]').should('not.be.visible');
        
        // FIX: Ir al Catálogo explícitamente
        cy.get('[data-qa="nav-catalogo"]').click();

        // D. Agregar segundo producto
        cy.get(`[data-qa="add-to-cart-${prodId2}"]`).first().click();
        cy.get('[data-qa="cart-badge"]').should('contain.text', '3');
        cy.get('[data-qa="cart-total"]').should('contain.text', '2.360.000');

        // E. Eliminar
        cy.get(`[data-qa="cart-remove-${prodId1}"]`).click();
        cy.get(`[data-qa="cart-item"][data-product-id="${prodId1}"]`).should('not.exist');
        cy.get('[data-qa="cart-badge"]').should('contain.text', '1');
        
        // F. Vaciar
        cy.get(`[data-qa="cart-remove-${prodId2}"]`).click(); 
        cy.contains('Tu carro está vacío').should('be.visible');
    });
    
    // --- 4. CHECKOUT ---
    it('4. Checkout: Debe completar el flujo de pago simulado exitosamente', () => {
        const prodId = 6; // Moog (Catálogo)

        // A. Ir al Catálogo
        cy.get('[data-qa="nav-catalogo"]').click();

        // B. Checkout
        cy.get(`[data-qa="add-to-cart-${prodId}"]`).first().click();
        cy.get('[data-qa="start-checkout"]').click();

        // C. Modal
        cy.get('[data-qa="payment-modal"]').should('be.visible');
        cy.get('[data-qa="btn-pay-now"]').should('be.disabled');

        // D. Flow
        cy.get('[data-qa="payment-flow"]').click();
        cy.get('[data-qa="btn-pay-now"]').should('not.be.disabled').click();

        // E. Éxito (Timeout extendido)
        cy.get('[data-qa="success-screen"]', { timeout: 6000 }).should('be.visible');
        cy.get('[data-qa="success-method"]').should('contain.text', 'flow');

        // F. Reset
        cy.get('[data-qa="btn-back-store"]').click();
        cy.get('[data-qa="success-screen"]').should('not.be.visible');
        cy.get('[data-qa="cart-badge"]').should('not.exist');
    });
});