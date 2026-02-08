const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX ?? ''

const Footer = () => {
  return (
    <footer className="vogue-footer">
      <div className="footer-container">
        <div className="footer-logo fade-in">NOOVERHEADS</div>
        <div className="footer-divider fade-in" style={{ transform: 'scaleX(1)', opacity: 1, transition: 'transform 0.8s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.8s' }}></div>
        <div className="footer-links fade-in">
          <a href={`${assetPrefix}/documents/confidentiality.pdf`} className="footer-link">Конфиденциальность</a>
          <a href={`${assetPrefix}/documents/agreement.pdf`} className="footer-link">Партнерское соглашение</a>
          <a href={`${assetPrefix}/documents/compliance-152fz.pdf`} className="footer-link">152-ФЗ Комплаенс</a>
          <a href={`${assetPrefix}/documents/contacts.pdf`} className="footer-link">Контакты</a>
        </div>
        <p className="footer-copyright fade-in">
          © 2026 NOOVERHEADS. Все права защищены.<br />
          Работаем в рамках законодательства РФ. Все методы соответствуют требованиям 152-ФЗ &quot;О персональных данных&quot;.<br />
          Используем только разрешенные рекламными системами способы таргетинга.
        </p>
      </div>
    </footer>
  )
}

export default Footer
