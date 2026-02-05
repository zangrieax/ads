import { useEffect } from 'react'
import Hero from '../components/Hero'
import Metrics from '../components/Metrics'
import FinancialModel from '../components/FinancialModel'
import Section from '../components/Section'
import PartnershipSection from '../components/PartnershipSection'
import ArchitectureResultSection from '../components/ArchitectureResultSection'
import TestSection from '../components/TestSection'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Home() {
  useScrollAnimation()

  useEffect(() => {
    // Анимация для чисел в метриках
    const metricNumbers = document.querySelectorAll('.metric-number')
    metricNumbers.forEach((number, index) => {
      const text = (number as HTMLElement).textContent
      if (text && (text.includes('₽') || text.includes('%'))) {
        ;(number as HTMLElement).style.opacity = '0'
        ;(number as HTMLElement).style.transform = 'translateY(20px)'
        
        setTimeout(() => {
          ;(number as HTMLElement).style.transition = 'all 1s cubic-bezier(0.19, 1, 0.22, 1)'
          ;(number as HTMLElement).style.opacity = '1'
          ;(number as HTMLElement).style.transform = 'translateY(0)'
        }, 2000 + (index * 200))
      }
    })

    // Плавный скролл для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault()
        const targetId = this.getAttribute('href')
        if (targetId === '#') return
        
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
          })
        }
      })
    })
  }, [])

  return (
    <>
      <Hero />
      <Metrics />
      <FinancialModel />
      
      {/* Section 1: Принцип Разделения */}
      <Section
        number="01"
        title="Принцип Разделения"
        content={
          <>
            <p>Мы НЕ работаем с персональными данными. Мы работаем с <span className="accent-text">паттернами цифрового поведения</span>.</p>
            <p>Разница фундаментальна: мы не знаем, кто конкретный человек, но знаем, что он ведет себя как ваш идеальный клиент. Представьте: вы хотите найти людей, которые летают бизнес-классом. Вам не нужно знать их имена — достаточно знать аэропорты и рейсы, где летает бизнес-класс.</p>
          </>
        }
        quote="Мы используем только данные, которые пользователи добровольно оставляют в публичном цифровом пространстве"
        additionalContent={
          <p><strong>Ваш юрист спросит:</strong> &quot;Как это законно?&quot;<br />
          <strong>Ответ:</strong> &quot;Мы используем только данные, которые пользователи добровольно оставляют в публичном цифровом пространстве и которые рекламные системы разрешают использовать для таргетинга. Никаких баз данных, никаких персональных сведений.&quot;</p>
        }
      />
      
      <div className="section-divider fade-in" style={{ transform: 'scaleX(0)', opacity: 0 }}></div>

      {/* Section 2: Исключающая Логика */}
      <Section
        number="02"
        title="Исключающая Логика"
        content={
          <p>Обычный маркетинг: показывать рекламу тем, кто может быть вашим клиентом.<br />
          <strong>Наша система:</strong> НЕ показывать рекламу тем, кто НЕ является вашим клиентом.</p>
        }
        comparison={{
          problem: [
            '90% бюджета на "туристов"',
            'Брокеры тратят время на фильтрацию',
            'Конкуренты видят тех же клиентов',
            'Высокая стоимость клика',
            'Нет эксклюзивности'
          ],
          solution: [
            '95% бюджета на целевую аудиторию',
            'Брокеры получают готовых клиентов',
            'Конкуренты не видят ваших клиентов',
            'Стоимость клика в 5 раз ниже',
            'Эксклюзив на район'
          ]
        }}
        quote="Ваш рекламный бюджет работает в 5 раз эффективнее. Финансовый парадокс: чем больше мы зарабатываем для вас, тем больше зарабатываем сами"
      />

      <div className="section-divider fade-in" style={{ transform: 'scaleX(0)', opacity: 0 }}></div>

      <PartnershipSection />
      
      {/* Section 3: Механика Без Магии */}
      <Section
        number="03"
        title="Механика Без Магии"
        architecture={[
          {
            number: 'I',
            title: 'Географическая изоляция',
            description: 'Картируем "цифровые следы" целевой аудитории в локации. Не данные о людях, а данные о поведении.'
          },
          {
            number: 'II',
            title: 'Цифровые маркеры',
            description: 'Определяем не доход, а цифровое поведение. Какие сервисы использует человек, какие сайты посещает, какие приложения устанавливает.'
          },
          {
            number: 'III',
            title: 'Исключающая логика',
            description: 'Создаем фильтры "кто точно НЕ наш клиент". Исключаем из показа 95% аудитории, оставляя 5% самых перспективных.'
          }
        ]}
        quote="Представьте, что вы нанимаете шеф-повара Мишлен. Вам не нужен его рецепт — вам нужен ужин."
      />

      <div className="section-divider fade-in" style={{ transform: 'scaleX(0)', opacity: 0 }}></div>

      {/* Section 4: Доказательство без кейсов */}
      <Section
        number="04"
        title="Доказательство без кейсов: Показываем вашу аудиторию до оплаты"
        architecture={[
          {
            number: '1',
            title: 'Бесплатный анализ',
            description: 'Мы анализируем ваш район бесплатно — на основе открытых данных. Показываем, сколько потенциальных клиентов там есть, как они выглядят в цифровом пространстве.'
          },
          {
            number: '2',
            title: 'Конкретные цифры',
            description: 'Не обещания, а цифры: "В районе X 850 человек соответствуют портрету. Средняя стоимость клика к ним — 650₽ через нашу систему."'
          },
          {
            number: '3',
            title: 'Решение за вами',
            description: 'Вы смотрите анализ. Если цифры убедительны — запускаем тест с вашим бюджетом. Если нет — расстаемся. Вы ничем не рискуете.'
          }
        ]}
        quote="Мы не работаем бесплатно. Мы анализируем бесплатно. Разница критична: вы видите потенциал до того, как заплатите рубль."
        additionalContent={
          <>
            <p><strong>Честная схема:</strong></p>
            <div style={{ background: 'var(--color-light-gray)', padding: '40px', margin: '40px 0', borderLeft: '3px solid var(--color-gold)' }}>
              <ol style={{ listStyle: 'none', marginLeft: 0, paddingLeft: 0 }}>
                <li style={{ marginBottom: '20px', paddingLeft: '40px', position: 'relative' }}>
                  <strong style={{ position: 'absolute', left: 0 }}>1.</strong>
                  <strong>Бесплатный анализ</strong> (наша работа) → Мы показываем потенциал вашего района
                </li>
                <li style={{ marginBottom: '20px', paddingLeft: '40px', position: 'relative' }}>
                  <strong style={{ position: 'absolute', left: 0 }}>2.</strong>
                  <strong>Ваше решение</strong> → Если потенциал есть, вы вносите рекламный бюджет в Яндекс.Директ
                </li>
                <li style={{ marginBottom: '20px', paddingLeft: '40px', position: 'relative' }}>
                  <strong style={{ position: 'absolute', left: 0 }}>3.</strong>
                  <strong>Наша работа за %</strong> → Мы настраиваем и оптимизируем кампании за 10% от ваших сделок
                </li>
              </ol>
            </div>
            <p><strong>Вы не платите за анализ.</strong> Вы платите только когда:</p>
            <ul style={{ margin: '20px 0 20px 40px' }}>
              <li style={{ marginBottom: '10px' }}>Вносите рекламный бюджет в свой Яндекс.Директ (контролируете его сами)</li>
              <li>Закрываете сделку и платите 10% от неё</li>
            </ul>
          </>
        }
      />

      <ArchitectureResultSection />
      
      {/* Section 5: Гарантии и Верификация */}
      <Section
        number="05"
        title="Гарантии и Верификация"
        guarantee={[
          {
            title: 'Гарантии прозрачности',
            items: [
              'Полный доступ к статистике кампаний',
              'Еженедельные отчеты с метриками качества лидов',
              'Сквозная аналитика от клика до сделки',
              'Личный кабинет с онлайн-отслеживанием'
            ]
          },
          {
            title: 'Принцип верификации',
            items: [
              'Вы платите 10% ТОЛЬКО за закрытые сделки',
              'Каждый лид помечается UTM-метками',
              'Подтверждение источника в вашей CRM',
              'Прозрачный расчет комиссии'
            ]
          },
          {
            title: 'Тестовый период 90 дней',
            description: 'Честные условия: За 90 дней вы видите работу системы и качество лидов. Если система не работает — вы не платите нам комиссию. Рекламный бюджет, который вы контролируете, остается вашей инвестицией в привлечение клиентов.',
            fullWidth: true
          }
        ]}
        quote="Тестовый период 90 дней без обязательств. Если система не приведет качественных лидов — вы просто не платите комиссию."
      />

      <TestSection />
      <CTA />
      <Footer />
    </>
  )
}