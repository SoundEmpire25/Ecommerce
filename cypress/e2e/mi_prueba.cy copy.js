describe('Prueba E-Commerce QA', () => {

  // PASO PREVIO: Se ejecuta antes de CADA prueba individual
  beforeEach(() => {
    // 1. Visitar la página
    cy.visit('http://localhost:3000/tienda.html');

    // 2. ESPERA INTELIGENTE: Esperar el semáforo verde (data-app-status="loaded")
    cy.get('body').should('have.attr', 'data-app-status', 'loaded');
  });

  // --- PRUEBA 1: CLIENTE ---
  it('Debe comprar unos Auriculares (Simulación Cliente)', () => {
    // Paso A: Navegar del Home a Productos
    cy.contains('Ver Productos Ahora').click();

    // Paso B: Buscar el botón del producto ID 2
    cy.get('[data-testid="view-detail-btn-2"]').should('be.visible').click();

    // Paso C: Validar que el modal se abrió
    cy.get('[data-testid="modal-detail"]').should('be.visible');

    // Paso D: Verificar el título del producto
    cy.get('[data-testid="detail-title"]')
      .should('contain.text', 'Auriculares Inalámbricos Pro');

    // Paso E: Verificar el enlace de WhatsApp
    cy.get('[data-testid="modal-whatsapp"]')
      .should('have.attr', 'href')
      .and('include', 'Auriculares');
  });

  // --- PRUEBA 2: ADMINISTRADOR (NUEVA) ---
  it('Debe permitir entrar al Admin y ver la lista de productos', () => {
    // 1. Buscar el botón flotante (la llave inglesa)
    cy.get('[data-testid="admin-fab"]').click();

    // 2. PRUEBA NEGATIVA: Intentar contraseña incorrecta
    cy.get('[data-testid="login-password"]').type('contraseña_mala');
    cy.get('[data-testid="login-submit"]').click();
    // Validar que sale el mensaje de error
    cy.get('[data-testid="login-error"]').should('be.visible');

    // 3. PRUEBA POSITIVA: Escribir la contraseña correcta
    // .clear() borra lo que escribimos antes
    cy.get('[data-testid="login-password"]').clear().type('admin123');
    cy.get('[data-testid="login-submit"]').click();

    // 4. VALIDACIÓN FINAL: 
    // El login debe desaparecer
    cy.get('#adminLogin').should('not.be.visible');
    // La interfaz de admin debe aparecer
    cy.get('#adminInterface').should('be.visible');
    
    // 5. Verificar que hay productos en la lista (al menos 1)
    // El símbolo '^=' significa "comienza con"
    cy.get('[data-testid^="admin-row-"]').should('have.length.at.least', 1);
  });

}); 