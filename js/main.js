 const Home = { template: `<div class="main_item home shake">
<h1>  Эксперты в разработке сайтов
и мобильных приложений </h1>
<div class="home_content">
<p>
Создаём проекты эффективные для бизнеса и полезные для клиента.
Решаем задачи любой сложности.
Соблюдаем договоренности по срокам, бюджету и качеству кода
</p>
</div>

    </div>` }
const Services = { template: `<div class="main_item services shake">
    <h1>Услуги</h1>
    <div class="services_content">
    <div class="services_item">       
    <h3>Разработка мобильных приложений</h3>
    <p>Создаем уникальные приложения для крупного и среднего бизнеса, интегрированные с вашими IT-системами. iOS/Android/Кроссплатформа</p>  
    </div>
    <div class="services_item">
<h3>Поддержка и развитие мобильных приложений</h3>
    <p>Оптимизируем мобильные продукты под обновления iOS и Android и новые устройства. Развиваем функционал приложения согласно требованиям заказчика, отвечаем на вопросы пользователей</p>         
    </div>
    <div class="services_item">
<h3>Веб-приложения и сайты</h3>
    <p>Разрабатываем Web-приложения и сайты с широким функционалом и сложными интеграциями.</p>         
    </div>
    <div class="services_item">
  <h3>Дизайн и проектирование</h3>
    <p>UI/UX дизайн. Создаем и улучшаем дизайн мобильных и web – приложений, сайтов, сервисов.</p>      
    </div>
<div class="services_item">
   <h3>Консультации</h3>
    <p>Мы проводим аудит программной архитектуры и кода; консалтинг по организации процесса разработки.</p>     
</div>

<div class="services_item">
    <p>Мы создаем уникальные приложения для крупного и среднего бизнеса, интегрированные с вашими IT-системами. iOS/Android/Кроссплатформа. Отправьте нам заявку, если вам нужна консультация или расчет стоимости вашего проекта.</p>
</div>
</div>
    </div>` }
const Projects = { template: `<div class="main_item projects shake">
    <h1>Проекты</h1>
    <div class="projects_content">
        <div class="projects_content_item"><a href="https://abdulloev19.github.io/facemash.tj/"><h1>Facemash.tj</h1></a></div>
        <div class="projects_content_item"><a href="https://abdulloev19.github.io/onlineshop/"><h1>Online-Shop</h1></a></div>
        <div class="projects_content_item"></div>
        <div class="projects_content_item"></div>
        <div class="projects_content_item"></div>
        <div class="projects_content_item"></div>
        <div class="projects_content_item"></div>
        <div class="projects_content_item"></div>
    </div>
    
    </div>` }
const Technology = { template: `<div class="main_item technology shake">Technology Page</div>` }
const Integrations = { template: `<div class="main_item integrations shake">Integrations Page</div>` }
  
const routes = [
  { path: '/', component: Home },
  { path: '/services', component: Services },
  { path: '/projects', component: Projects },
  { path: '/technology', component: Technology },
  { path: '/integrations', component: Integrations }
];
 
const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});
 
const app = Vue.createApp({
    data() {
        return {
            noActivated: false
        }
    },
});
app.use(router);    
app.mount('#app');
