const ArchitectureResultSection = () => {
  return (
    <section className="architecture-result-section">
      <div className="architecture-result-header fade-in">
        <div className="architecture-result-subtitle fade-in">АРХИТЕКТУРА РЕЗУЛЬТАТА</div>
        <h2 className="architecture-result-title fade-in">Три принципа системы<br />Которые заменят ваш инструмент</h2>
        <p className="architecture-result-description fade-in">
          Мы не продаём рекламу. Мы инженрим <span className="accent-text">поток квалифицированных клиентов</span>. Вот из каких элементов собран этот механизм.
        </p>
      </div>

      <div className="architecture-result-grid">
        <div className="architecture-result-card fade-in">
          <div className="result-card-number">1</div>
          <h3 className="result-card-title">Принцип Сингулярности</h3>
          <p className="result-card-description">
            В вашем районе работает только вы. Мы технически исключаем пересечения аудитории с конкурентами. Ваше сообщение — единственное, которое видит целевой клиент. Это не эксклюзивность «на бумаге», а математическая изоляция в цифровой среде.
          </p>
        </div>
        
        <div className="architecture-result-card fade-in">
          <div className="result-card-number">2</div>
          <h3 className="result-card-title">Принцип Отрицания</h3>
          <p className="result-card-description">
            95% рекламного бюджета уходит не на привлечение, а на <strong>отсев</strong>. Наша система сначала определяет, кто <em>точно не</em> ваш клиент, и исключает его. Оставшиеся 5% — это и есть ваша рынночная ёмкость. Вы платите только за них.
          </p>
        </div>
        
        <div className="architecture-result-card fade-in">
          <div className="result-card-number">3</div>
          <h3 className="result-card-title">Принцип Симбиоза</h3>
          <p className="result-card-description">
            Наш финансовый интерес привязан к вашей сделке, а не к вашему бюджету. Мы — не подрядчик, мы — <span className="accent-text">тактический партнёр</span>. Выигрываете вы — выигрываем мы. Эта связь делает невозможным для нас работу «для галочки».
          </p>
        </div>
      </div>

      <div className="result-benefits fade-in">
        <h3 className="benefits-title">→ Что вы получаете на практике</h3>
        
        <div className="benefits-grid">
          <div className="benefit-column">
            <h4>Финансовая анатомия</h4>
            <ul className="benefit-list">
              <li>Стоимость клика падает в 3-5 раз</li>
              <li>Время брокеров тратится только на готовых клиентов</li>
              <li>Вы платите 10% не с оборота, а с чистого результата</li>
            </ul>
          </div>
          
          <div className="benefit-column">
            <h4>Стратегическая геометрия</h4>
            <ul className="benefit-list">
              <li>Монополия на район без юридических сложностей</li>
              <li>Ваши конкуренты физически не видят «ваших» клиентов</li>
              <li>Система работает как актив, а не как статья расходов</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="result-conclusion fade-in">
        <div className="conclusion-text">
          Это не оптимизация текущего процесса. Это <strong>замена инструмента</strong>. Вы меняете молоток — на лазерный резак.
        </div>
      </div>
    </section>
  )
}

export default ArchitectureResultSection
