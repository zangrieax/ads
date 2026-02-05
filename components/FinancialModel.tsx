const FinancialModel = () => {
  return (
    <section className="vogue-financial">
      <div className="financial-container">
        <h2 className="financial-title fade-in">Честная модель работы</h2>
        
        <div className="financial-grid">
          <div className="financial-column agency fade-in">
            <h3 className="column-title agency">Ваше агентство</h3>
            <ul className="column-list">
              <li>Оплачиваете только рекламный бюджет в РСЯ</li>
              <li>Полный контроль над бюджетом и ставками</li>
              <li>Доступ ко всей статистике в реальном времени</li>
              <li>Платите 10% комиссии только с закрытых сделок</li>
              <li>Экономите +30% времени брокеров</li>
            </ul>
          </div>
          
          <div className="financial-column you fade-in">
            <h3 className="column-title you">Наша система</h3>
            <ul className="column-list">
              <li>Создаем эксклюзивные аудиторные модели</li>
              <li>Настраиваем и оптимизируем кампании</li>
              <li>Обеспечиваем юридическую чистоту (152-ФЗ)</li>
              <li>Гарантируем эксклюзив на район</li>
              <li>Работаем за процент от ваших сделок</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinancialModel
