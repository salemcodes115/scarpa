/**
 * PricingCard Component
 * A reusable, flexible pricing card class for displaying pricing plans
 */
class PricingCard {
    constructor(config) {
        this.title = config.title;
        this.price = config.price;
        this.period = config.period || '';
        this.features = config.features || [];
        this.buttonText = config.buttonText || 'Get Started';
        this.buttonColor = config.buttonColor || 'primary';
        this.onClick = config.onClick || (() => console.log(`${this.title} button clicked`));
    }

    /**
     * Render the card into a DOM element
     * @param {HTMLElement} container - The element to render into
     */
    render(container) {
        const card = document.createElement('div');
        card.className = 'pricing-card';
        card.innerHTML = `
            <h2 class="pricing-card__title">${this.escapeHtml(this.title)}</h2>
            <div class="pricing-card__price">${this.escapeHtml(this.price)}</div>
            <div class="pricing-card__period">${this.escapeHtml(this.period)}</div>
            <ul class="pricing-card__features">
                ${this.features.map(feature => `<li>${this.escapeHtml(feature)}</li>`).join('')}
            </ul>
            <button class="pricing-card__button pricing-card__button--${this.buttonColor}">
                ${this.escapeHtml(this.buttonText)}
            </button>
        `;

        const button = card.querySelector('.pricing-card__button');
        button.addEventListener('click', this.onClick.bind(this));

        container.innerHTML = '';
        container.appendChild(card);
    }

    /**
     * Escape HTML entities to prevent XSS
     */
    escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    }

    /**
     * Update card properties
     */
    update(config) {
        Object.assign(this, config);
    }
}
