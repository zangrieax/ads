export const sendToTelegram = async (formData: Record<string, string>): Promise<{success: boolean; message: string}> => {
  const TELEGRAM_CONFIG = {
    BOT_TOKEN: process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN || 'ВАШ_ТОКЕН_БОТА',
    CHAT_ID: process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID || 'ВАШ_ID_ЧАТА'
  }

  try {
    let message = '📋 Новая заявка с формы:\n\n'
    
    Object.entries(formData).forEach(([key, value]) => {
      if (value.trim()) {
        message += `<b>${key}:</b> ${value}\n`
      }
    })
    
    message += `\n<i>Отправлено: ${new Date().toLocaleString()}</i>`
    
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_CONFIG.BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CONFIG.CHAT_ID,
          text: message,
          parse_mode: 'HTML',
          disable_web_page_preview: true
        })
      }
    )
    
    const result = await response.json()
    
    if (!result.ok) {
      throw new Error(result.description || 'Ошибка отправки в Telegram')
    }
    
    return {
      success: true,
      message: 'Данные успешно отправлены'
    }
    
  } catch (error) {
    console.error('Ошибка отправки формы:', error)
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Произошла ошибка при отправке'
    }
  }
}
