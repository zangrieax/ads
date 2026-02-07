import { useState, FormEvent } from 'react'
import { sendToTelegram } from '../utils/telegram'

const CTA = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [notification, setNotification] = useState<{show: boolean; message: string}>({show: false, message: ''})

  const maskPhone = (value: string): string => {
    let numbers = value.replace(/\D/g, '')
    let formattedValue = ''

    if (numbers.length === 0) return ''
    
    if (numbers[0] === '8') numbers = '7' + numbers.substring(1)
    if (numbers[0] !== '7') numbers = '7' + numbers

    formattedValue = '+7'
    if (numbers.length > 1) formattedValue += ' (' + numbers.substring(1, 4)
    if (numbers.length > 4) formattedValue += ') ' + numbers.substring(4, 7)
    if (numbers.length > 7) formattedValue += '-' + numbers.substring(7, 9)
    if (numbers.length > 9) formattedValue += '-' + numbers.substring(9, 11)

    return formattedValue
  }

  const handlePhoneInput = (e: React.FormEvent<HTMLInputElement>) => {
    const input = e.currentTarget
    input.value = maskPhone(input.value)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    const form = document.getElementById('mainForm') as HTMLFormElement
    if (!form) {
      return
    }
      const inputs = form.querySelectorAll('.form-input');
      const formData = {}
      inputs.forEach(input => {
          const label = input.closest('.form-group')?.querySelector('.form-label');
          const labelText = label ? label.textContent.trim() : 'Поле без названия';
          const value = input?.['value'].trim();
          if (value) {
            Object.assign(formData, { [labelText]: value })
          }
      });
      await sendToTelegram(formData)

    // Имитация отправки
    setTimeout(() => {
      setIsSubmitting(false)
      showNotification('ЗАЯВКА ОТПРАВЛЕНА')
      // Сброс формы через 3 секунды
      setTimeout(() => {
        form.reset()
      }, 3000)
    }, 1000)
  }

  const showNotification = (message: string) => {
    setNotification({show: true, message})
    
    setTimeout(() => {
      setNotification({show: false, message: ''})
    }, 5000)
  }

  return (
    <section className="vogue-cta">
      <div className="cta-container">
        <h2 className="cta-title fade-in">Станьте первым клиентом<br />На особых условиях</h2>
        
        <div className="cta-subtitle fade-in">
          Мы берём не более 2 клиентов в месяц. Если ваш район свободен —<br />
          вы получаете не услугу, а партнерство с полным выравниванием интересов.
        </div>

        <form className="vogue-form" id="mainForm" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group fade-in">
              <label className="form-label">Имя руководителя</label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="Введите имя" 
                required 
                name="name"
              />
            </div>
            
            <div className="form-group fade-in">
              <label className="form-label">Телефон для связи</label>
              <input 
                type="tel" 
                className="form-input" 
                placeholder="+7 (___) ___-__-__" 
                required 
                name="phone"
                onInput={handlePhoneInput}
              />
            </div>
          </div>
          
          <div className="form-group fade-in">
            <label className="form-label">Район для монополизации</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="Например: Рублевка, ЦАО, Барвиха..." 
              required 
              name="district"
            />
          </div>
          
          <div className="form-group fade-in">
            <label className="form-label">Ваш главный вопрос/возражение</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="Например: 'А как же кейсы?' или 'Как это технически работает?'"
              name="question"
            />
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', marginTop: '10px' }}>
              Мы подготовим подробный ответ перед встречей
            </p>
          </div>
          
          <button 
            type="submit" 
            className="vogue-button fade-in"
            disabled={isSubmitting}
            style={isSubmitting ? { opacity: 0.7 } : {}}
          >
            {isSubmitting ? 'ОТПРАВЛЯЕМ...' : 'НАЧАТЬ ПАРТНЕРСТВО'}
          </button>
          
          <p style={{ marginTop: '40px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', lineHeight: '1.6' }}>
            Отправляя заявку, вы соглашаетесь с политикой конфиденциальности.<br />
            Ваши данные не передаются третьим лицам.
          </p>
        </form>
      </div>

      {notification.show && (
        <div style={{
          position: 'fixed',
          top: '40px',
          right: '40px',
          background: 'var(--color-white)',
          padding: '25px 30px',
          borderLeft: '3px solid var(--color-gold)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          zIndex: 1000,
          transform: 'translateX(0)',
          transition: 'transform 0.4s cubic-bezier(0.19, 1, 0.22, 1)',
          maxWidth: '350px',
          fontFamily: 'var(--font-body)'
        }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', marginBottom: '10px', fontSize: '1.2rem', fontWeight: 300 }}>
            Заявка принята
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--color-dark-gray)', lineHeight: '1.6' }}>
            Мы свяжемся с вами в течение 2 часов
          </p>
        </div>
      )}
    </section>
  )
}

export default CTA
