interface ArchitectureStep {
  number: string;
  title: string;
  description: string;
}

interface ComparisonData {
  problem: string[];
  solution: string[];
}

interface GuaranteeItem {
  title: string;
  items?: string[];
  description?: string;
  fullWidth?: boolean;
}

interface SectionProps {
  number: string;
  title: string;
  content?: React.ReactNode;
  quote?: string;
  additionalContent?: React.ReactNode;
  architecture?: ArchitectureStep[];
  comparison?: ComparisonData;
  guarantee?: GuaranteeItem[];
}

const Section: React.FC<SectionProps> = ({
  number,
  title,
  content,
  quote,
  additionalContent,
  architecture,
  comparison,
  guarantee
}) => {
  return (
    <section className="vogue-section">
      <div className="section-header">
        <div className="section-number fade-in">{number}</div>
        <h2 className="section-title fade-in">{title}</h2>
      </div>
      
      {content && (
        <div className="section-content fade-in">
          {content}
        </div>
      )}
      
      {architecture && (
        <div className="architecture-grid">
          {architecture.map((step, index) => (
            <div key={index} className="architecture-step fade-in">
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      )}
      
      {comparison && (
        <div className="comparison-grid">
          <div className="comparison-column problem fade-in">
            <h3 className="comparison-title problem">Проблема</h3>
            <ul className="comparison-list">
              {comparison.problem.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          
          <div className="comparison-column solution fade-in">
            <h3 className="comparison-title solution">Решение</h3>
            <ul className="comparison-list">
              {comparison.solution.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
      
      {quote && (
        <div className="vogue-quote fade-in">
          <div className="quote-text fade-in">
            {quote}
          </div>
        </div>
      )}
      
      {additionalContent && (
        <div className="section-content fade-in">
          {additionalContent}
        </div>
      )}
      
      {guarantee && (
        <div className="guarantee-grid">
          {guarantee.map((item, index) => (
            <div 
              key={index} 
              className={`guarantee-card fade-in ${item.fullWidth ? 'full-width' : ''}`}
            >
              <h3 className="guarantee-title">{item.title}</h3>
              {item.items && (
                <ul className="guarantee-list">
                  {item.items.map((listItem, idx) => (
                    <li key={idx}>{listItem}</li>
                  ))}
                </ul>
              )}
              {item.description && (
                <p style={{ marginTop: '20px', fontSize: '1.2rem', lineHeight: '1.8' }}>
                  <strong>{item.description}</strong>
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default Section
