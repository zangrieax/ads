const PartnershipSection = () => {
  return (
    <section className="partnership-section">
      <div className="partnership-header fade-in">
        <div className="partnership-subtitle fade-in">СТРАТЕГИЯ ПАРТНЕРСТВА</div>
        <h2 className="partnership-title fade-in">Почему у нас нет кейсов<br />И почему это ваше преимущество</h2>
        <p className="partnership-description fade-in">
          Если бы у нас были кейсы, мы бы уже брали предоплату и наняли менеджеров. А так — вы становитесь не клиентом, а партнером.
        </p>
      </div>

      <div className="partnership-comparison">
        <div className="partnership-column agency fade-in">
          <h3 className="partnership-column-title">Обычное агентство</h3>
          <div className="partnership-price">300 000₽ предоплаты + 15%</div>
          <ul className="partnership-features">
            <li>У них 20 человек в штате, офис в центре</li>
            <li>Их KPI — отчитаться метриками, а не сделками</li>
            <li>Им выгодно растягивать сотрудничество</li>
            <li>Вы платите за их аренду и менеджеров</li>
            <li>Их кейсы часто &quot;притянуты за уши&quot;</li>
          </ul>
        </div>
        
        <div className="partnership-column strategist fade-in">
          <h3 className="partnership-column-title">Мы — стратегические партнеры</h3>
          <div className="partnership-price">0₽ предоплаты + 10%</div>
          <ul className="partnership-features">
            <li>У нас нет команды, офиса, менеджеров</li>
            <li>Наш KPI = ваши закрытые сделки</li>
            <li>Нам выгодно привести результат быстро</li>
            <li>Вы платите только за результат</li>
            <li>Мы создадим ваш кейс вместе — первый и настоящий</li>
          </ul>
        </div>
      </div>

      <div className="partnership-quote fade-in">
        <div className="partnership-quote-text fade-in">
          Если бы у нас были кейсы, мы бы брали предоплату 300 000₽ и 15%.<br />
          Но у нас их нет — поэтому мы работаем на ваших условиях.
        </div>
      </div>

      <div className="partnership-paradox fade-in">
        <div className="paradox-text">
          Финансовый парадокс партнерства:
          <span className="paradox-highlight">
            Чем меньше у нас накладных расходов — тем больше мы зарабатываем только тогда, когда зарабатываете вы.<br />
            Наши интересы выровнены на 100%.
          </span>
        </div>
      </div>
    </section>
  )
}

export default PartnershipSection
