import MSidebarMenu from './MSidebarMenu.vue'


export default {
  title: 'Sidebar Menu',
  component: MSidebarMenu,
}

const Template = (args) => ({
  components: { 
    MSidebarMenu,
  },
  setup() {
    return { args }
  },
  template: `<m-sidebar-menu @newPath="args.newPath" v-bind="args"></m-sidebar-menu>`,
})

export const Default = Template.bind({})
Default.args = {
  maxWidth: 306,
  items: [
    {
      "type": "button",
      "title": "Главная",
      "path": "/",
      "icon_url": "https://adm.meet-market.ru/assets/admin/menu/home.svg",
      "fast_action": null,
      "options": null,
      "active": true,
      "current": true,
    },
    {
      "type": "section",
      "title": "Управление товарами",
      "icon_url": "https://adm.meet-market.ru/assets/admin/menu/products.svg",
      "items": [
        {
          "type": "sub_menu",
          "title": "Товары",
          "icon_url": "https://adm.meet-market.ru/assets/admin/menu/products.svg",
          "fast_action": {
            "type": "fast_action",
            "path": "/products/create",
            "icon_url": "https://adm.meet-market.ru/assets/admin/menu/plus.svg",
            "options": null,
            "active": false,
            "current": false,
          },
          "items": [
            {
              "type": "button",
              "title": "Все товары",
              "path": "/products",
              "icon_url": null,
              "fast_action": null,
              "options": null,
              "active": false,
              "current": false,
            },
            {
              "type": "button",
              "title": "Создание товара",
              "path": "/products/create",
              "icon_url": null,
              "fast_action": null,
              "options": null,
              "active": false,
              "current": false,
            },
          ],
          "options": null,
          "active": false,
          "current": false,
        },
        {
          "type": "sub_menu",
          "title": "Настройки",
          "icon_url": "https://adm.meet-market.ru/assets/admin/menu/settings.svg",
          "fast_action": null,
          "items": [
            {
              "type": "button",
              "title": "SEO теги страниц",
              "path": "/settings/seo/pages",
              "icon_url": null,
              "fast_action": null,
              "options": null,
              "active": false,
              "current": false,
            },
            {
              "type": "button",
              "title": "SEO теги изображений",
              "path": "/settings/seo/images",
              "icon_url": null,
              "fast_action": null,
              "options": null,
              "active": false,
              "current": false,
            },
          ],
          "options": null,
          "active": false,
          "current": false,
        },
        {
          "type": "button",
          "title": "Бренды",
          "path": "/brands",
          "icon_url": "https://adm.meet-market.ru/assets/admin/menu/bookmark.svg",
          "fast_action": null,
          "options": null,
          "active": false,
          "current": false,
        },
        {
          "type": "button",
          "title": "Категории",
          "path": "/categories",
          "icon_url": "https://adm.meet-market.ru/assets/admin/menu/list.svg",
          "fast_action": null,
          "options": null,
          "active": false,
          "current": false,
        },
      ],
      "options": null,
      "active": true,
      "current": false,
    },
    {
      "type": "section",
      "title": "Маркетинг",
      "icon_url": "https://adm.meet-market.ru/assets/admin/menu/tag.svg",
      "items": [
        {
          "type": "sub_menu",
          "title": "Пользователи",
          "icon_url": "https://adm.meet-market.ru/assets/admin/menu/users.svg",
          "fast_action": null,
          "items": [
            {
              "type": "button",
              "title": "Все пользователи",
              "path": "/users",
              "icon_url": null,
              "fast_action": null,
              "options": null,
              "active": false,
              "current": false,
            },
            {
              "type": "button",
              "title": "Создание пользователя",
              "path": "/users/create",
              "icon_url": null,
              "fast_action": null,
              "options": null,
              "active": false,
              "current": false,
            },
          ],
          "options": null,
          "active": false,
          "current": false,
        },
        {
          "type": "sub_menu",
          "title": "Заказы",
          "icon_url": "https://adm.meet-market.ru/assets/admin/menu/cart.svg",
          "fast_action": null,
          "items": [
            {
              "type": "button",
              "title": "Все заказы",
              "path": "/orders",
              "icon_url": null,
              "fast_action": null,
              "options": null,
              "active": false,
              "current": false,
            },
            {
              "type": "button",
              "title": "Создание заказа",
              "path": "/orders/create",
              "icon_url": null,
              "fast_action": null,
              "options": null,
              "active": false,
              "current": false,
            },
          ],
          "options": null,
          "active": false,
          "current": false,
        },
        {
          "type": "button",
          "title": "Отзывы",
          "path": "/reviews",
          "icon_url": "https://adm.meet-market.ru/assets/admin/menu/comment.svg",
          "fast_action": null,
          "options": null,
          "active": false,
          "current": false,
        },
        {
          "type": "sub_menu",
          "title": "Блог",
          "icon_url": "https://adm.meet-market.ru/assets/admin/menu/pencil.svg",
          "fast_action": {
            "type": "fast_action",
            "path": "/blogs/create",
            "icon_url": "https://adm.meet-market.ru/assets/admin/menu/plus.svg",
            "options": null,
            "active": false,
            "current": false,
          },
          "items": [
            {
              "type": "button",
              "title": "Все посты",
              "path": "/blogs",
              "icon_url": null,
              "fast_action": null,
              "options": null,
              "active": false,
              "current": false,
            },
            {
              "type": "button",
              "title": "Создание поста",
              "path": "/blogs/create",
              "icon_url": null,
              "fast_action": null,
              "options": null,
              "active": false,
              "current": false,
            },
          ],
          "options": null,
          "active": false,
          "current": false,
        },
        {
          "type": "button",
          "title": "Отчеты",
          "path": "/reports",
          "icon_url": "https://adm.meet-market.ru/assets/admin/menu/blank.svg",
          "fast_action": null,
          "options": null,
          "active": false,
          "current": false,
        },
        {
          "type": "button",
          "title": "График работы",
          "path": "/work_times",
          "icon_url": "https://adm.meet-market.ru/assets/admin/menu/calendar.svg",
          "fast_action": null,
          "options": null,
          "active": false,
          "current": false,
        },
      ],
      "options": null,
      "active": false,
      "current": false,
    },
    {
      "type": "section",
      "title": "Управление сайтом",
      "icon_url": "https://adm.meet-market.ru/assets/admin/menu/settings.svg",
      "items": [
        {
          "type": "sub_menu",
          "title": "Виджет слайдер",
          "icon_url": "https://adm.meet-market.ru/assets/admin/menu/list-dots.svg",
          "fast_action": null,
          "items": [
            {
              "type": "button",
              "title": "Главная. Обувь",
              "path": "/widget_sliders/shoes",
              "icon_url": null,
              "fast_action": null,
              "options": null,
              "active": false,
              "current": false,
            },
            {
              "type": "button",
              "title": "Главная. Одежда",
              "path": "/widget_sliders/clothes",
              "icon_url": null,
              "fast_action": null,
              "options": null,
              "active": false,
              "current": false,
            },
            {
              "type": "button",
              "title": "Главная. Аксессуары",
              "path": "/widget_sliders/accessories",
              "icon_url": null,
              "fast_action": null,
              "options": null,
              "active": false,
              "current": false,
            },
          ],
          "options": null,
          "active": false,
          "current": false,
        },
        {
          "type": "button",
          "title": "Промокоды",
          "path": "/promo_codes",
          "icon_url": "https://adm.meet-market.ru/assets/admin/menu/tag.svg",
          "fast_action": {
            "type": "fast_action",
            "path": "/promo_codes/create",
            "icon_url": "https://adm.meet-market.ru/assets/admin/menu/plus.svg",
            "options": null,
            "active": false,
            "current": false,
          },
          "options": null,
          "active": false,
          "current": false,
        },
        {
          "type": "button",
          "title": "Уведомления",
          "path": "/notifications",
          "icon_url": "https://adm.meet-market.ru/assets/admin/menu/notification.svg",
          "fast_action": null,
          "options": null,
          "active": false,
          "current": false,
        },
        {
          "type": "button",
          "title": "Баннеры",
          "path": "/banners",
          "icon_url": "https://adm.meet-market.ru/assets/admin/menu/image.svg",
          "fast_action": null,
          "options": null,
          "active": false,
          "current": false,
        },
      ],
      "options": null,
      "active": false,
      "current": false,
    },
  ],
  newPath: (e) => {
    console.log('new path = ', e)
  },
}
