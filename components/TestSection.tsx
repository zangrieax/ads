const TestSection = () => {
  return (
    <section className="test-section">
      <div className="test-header fade-in">
        <div className="test-subtitle fade-in">ЭКСПЕРИМЕНТ ПОД ВАШИМ КОНТРОЛЕМ</div>
        <h2 className="test-title fade-in">90 Дней • 3 Этапа • 0 Обязательств</h2>
        <p className="test-description fade-in">
          Ваша внутренняя разведывательно-исследовательская операция. Мы — стратегические технологи, обеспечивающие результат. Вы — верховное командование.
        </p>
      </div>

      <div className="test-timeline">
        <div className="timeline-phase fade-in">
          <div className="phase-number">30</div>
          <h3 className="phase-title">Калибровка</h3>
          <div className="phase-budget">60 000₽</div>
          <ul className="phase-features">
            <li>Ваш личный кабинет Яндекс.Директ</li>
            <li>Прогрев системы и аудитории</li>
            <li>Отчёт о цифровых следах клиентов</li>
            <li>Вы видите каждый рубль в реальном времени</li>
          </ul>
        </div>
        
        <div className="timeline-phase fade-in">
          <div className="phase-number">60</div>
          <h3 className="phase-title">Генерация</h3>
          <div className="phase-budget">90 000₽</div>
          <ul className="phase-features">
            <li>Масштабирование рабочих связок</li>
            <li>Система отслеживания в вашей CRM</li>
            <li>Еженедельные отчёты по качеству лидов</li>
            <li>Вы в любой момент можете остановить тест</li>
          </ul>
        </div>
        
        <div className="timeline-phase fade-in">
          <div className="phase-number">90</div>
          <h3 className="phase-title">Оценка</h3>
          <div className="phase-budget">ROI</div>
          <ul className="phase-features">
            <li>Вы отмечаете сделки в CRM</li>
            <li>Сами рассчитываете ROI</li>
            <li>Комиссия 10% только с отмеченных сделок</li>
            <li>Решение о масштабировании — полностью ваше</li>
          </ul>
        </div>
      </div>

      <div className="control-grid">
        <div className="control-item fade-in">
          <div className="control-number">1</div>
          <h4 className="control-title">Бюджет в вашем кабинете</h4>
          <p className="control-description">Деньги только в вашем личном кабинете Яндекс.Директ под вашим контролем</p>
        </div>
        
        <div className="control-item fade-in">
          <div className="control-number">2</div>
          <h4 className="control-title">Доступ по вашему решению</h4>
          <p className="control-description">Выдаёте и отзываете нам доступ как «Менеджер» в любой момент</p>
        </div>
        
        <div className="control-item fade-in">
          <div className="control-number">3</div>
          <h4 className="control-title">Креативы по вашему вкусу</h4>
          <p className="control-description">Без вашего утверждения — ни одного баннера, ни одного текста</p>
        </div>
        
        <div className="control-item fade-in">
          <div className="control-number">4</div>
          <h4 className="control-title">Остановка в один клик</h4>
          <p className="control-description">В любой момент можете остановить все кампании одной кнопкой</p>
        </div>
        
        <div className="control-item fade-in">
          <div className="control-number">5</div>
          <h4 className="control-title">Ваша аналитика</h4>
          <p className="control-description">Весь поток данных идёт в ваши системы (CRM, Яндекс.Метрика)</p>
        </div>
        
        <div className="control-item fade-in">
          <div className="control-number">6</div>
          <h4 className="control-title">Оплата за результат</h4>
          <p className="control-description">10% комиссии только после закрытия сделок, которые вы сами идентифицировали</p>
        </div>
      </div>

      <div className="test-quote fade-in">
        <div className="test-quote-text fade-in">
          После 30 дней — факт присутствия. После 60 дней — стоимость лида. После 90 дней — ROI.<br />
          <span style={{ color: 'var(--color-gold)', display: 'block', marginTop: '20px' }}>
            Три независимых решения с нулевым давлением.
          </span>
        </div>
      </div>
    </section>
  )
}

export default TestSection
