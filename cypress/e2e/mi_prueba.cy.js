describe('Pruebas de Flujo Principal | SoundEmpire QA', () => {
  
  // Usamos el 'beforeEach' para visitar la página antes de cada prueba.
  // IMPORTANTE: Servidor debe estar activo en el puerto 5500 (Live Server)
  beforeEach(() => {
    cy.visit('http://localhost:5500/Prototipo.html'); 
  });

  // --- Caso de Prueba 1: Carga y elementos clave ---
  it('1. Debe cargar la página de inicio y mostrar el llamado a la acción (CTA)', () => {
    // 1. Verificamos que la sección principal esté visible
    cy.get('[data-testid="hero-section"]').should('be.visible');
    
    // 2. Verificamos el título principal
    cy.get('[data-testid="hero-title"]').should('contain', 'ELEVA TU SONIDO');
    
    // 3. Verificamos que el botón principal exista y esté habilitado
    cy.get('[data-testid="hero-cta-button"]').should('be.visible').and('not.be.disabled');
  });
  
  // --- Caso de Prueba 2: Navegación al Catálogo ---
  it('2. Debe navegar al Catálogo desde el botón principal', () => {
    // 1. Clic en el botón CTA usando el selector data-testid
    cy.get('[data-testid="hero-cta-button"]').click();
    
    // 2. Verificamos que la vista del catálogo se cargue
    cy.get('[data-testid="catalog-view"]').should('be.visible');
    
    // 3. Verificamos que los filtros existan (prueba de estabilidad)
    cy.get('[data-testid="catalog-filters"]').should('be.visible');
    
    // 4. Verificamos que al menos un producto se cargue (ejemplo: producto ID 1)
    cy.get('[data-testid="product-card-1"]').should('exist');
  });
  
  // --- Caso de Prueba 3: Filtrado de Productos ---
  it('3. Debe filtrar productos correctamente por la categoría "Micrófonos"', () => {
    cy.get('[data-testid="nav-item-catalog"]').click();
    
    // 1. Clic en el filtro de Micrófonos
    cy.get('[data-testid="filter-btn-micrófonos"]').click();
    
    // 2. Verificamos que el primer producto de esa categoría sea visible (ejemplo ID 1)
    cy.get('[data-testid="product-card-1"]').should('be.visible');
    
    // 3. Verificamos que la tarjeta del producto 2 (Consolas) NO sea visible
    cy.get('[data-testid="product-card-2"]').should('not.exist');
  });
  
  // --- Caso de Prueba 4: Vista de Detalle y Link de Compra (Estabilizado) ---
  it('4. Debe cargar el detalle del producto y verificar el link de WhatsApp', () => {
    // 1. Navegación al Catálogo y click en el primer producto (ID 1)
    cy.get('[data-testid="nav-item-catalog"]').click();
    cy.get('[data-testid="product-card-1"]').click();
    
    // 2. Verificamos que la vista de detalle esté activa y muestre el título
    cy.get('[data-testid="product-detail-view"]').should('be.visible');
    cy.get('[data-testid="detail-title"]').should('contain', 'Micrófono Dinámico Vocal Series X');
    
    // 3. Aserción: Verificamos que el link de WhatsApp sea estable.
    cy.get('[data-testid="whatsapp-button"]').should('have.attr', 'href')
      .and('include', 'Hola%20SoundEmpire') 
      .and('include', 'Vocal%20Series%20X'); 
  });

  // --- Caso de Prueba 5: Menú Responsivo (Móvil) ---
  it('5. Debe abrir y navegar por el Menú Móvil (Hamburguesa)', () => {
    // 1. Configurar la vista como un móvil (ej. iPhone 6)
    cy.viewport('iphone-6');
    cy.visit('http://localhost:5500/Prototipo.html'); 
    
    // 2. Verificar que el botón hamburguesa esté visible y el menú NO
    cy.get('[data-testid="mobile-menu-toggle"]').should('be.visible');

    // 3. Clic para abrir el menú
    cy.get('[data-testid="mobile-menu-toggle"]').click();
    
    // 4. Verificar que el menú se abrió
    cy.get('[data-testid="mobile-menu-dropdown"]').should('be.visible');
    
    // 5. Navegar a una página (ej. Contacto) y verificar que el menú se cierre y la página cambie
    cy.get('[data-testid="mobile-menu-dropdown"]').contains('Contacto').click();

    // 6. Verificar que el menú desaparezca y la página Contacto esté visible
    cy.get('[data-testid="mobile-menu-dropdown"]').should('not.exist');
    cy.get('[data-testid="contact-view"]').should('be.visible');
  });

});