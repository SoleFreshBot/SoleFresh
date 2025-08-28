// config.js - Конфигурационные настройки
const CONFIG = {
    APP_NAME: "Sole Fresh",
    APP_DESCRIPTION: "Профессиональная химчистка обуви",
    PRICES: {
        BUDGET: 2990,
        PREMIUM: 3990,
        EXPRESS_MULTIPLIER: 1.5
    },
    PROCESSING_TIME: {
        STANDARD: "5-7 дней",
        EXPRESS: "2 дня"
    },
    CONTACTS: {
        PHONE: "+7 (999) 123-45-67",
        TELEGRAM: "@solefreshvdk",
        WEBSITE: "https://solefresh.ru/vld/"
    },
    API_SETTINGS: {
        TIMEOUT: 10000,
        RETRY_ATTEMPTS: 3
    }
};

// Примеры брендов для подсказок
const BRAND_EXAMPLES = {
    BUDGET: ["Nike", "Adidas", "Puma", "Reebok", "New Balance"],
    PREMIUM: ["Gucci", "Prada", "Louis Vuitton", "Dior", "Balenciaga"]
};
