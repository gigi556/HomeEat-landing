
import { Button } from "@/components/ui/button";

export default function HomeEatLanding() {
  return (
    <div className="min-h-screen bg-amber-50 text-brown-900 font-sans">
      <section className="py-20 px-4 text-center bg-amber-100">
        <h1 className="text-4xl font-bold mb-4">Готовь дома — зарабатывай с HomeEat!</h1>
        <p className="text-xl mb-6">Без опыта, без вложений. Просто вкусно готовь — остальное мы берём на себя.</p>
        <Button className="text-lg px-6 py-3">Хочу зарабатывать на готовке</Button>
      </section>

      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">Как это работает</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">1. Готовь дома</h3>
            <p>Выбирай любимые рецепты и готовь, как для себя.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">2. Мы доставим</h3>
            <p>Забираем, доставляем и обрабатываем оплату.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">3. Получай деньги</h3>
            <p>Ты получаешь оплату за каждую порцию напрямую.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-amber-50">
        <h2 className="text-3xl font-bold text-center mb-10">Почему это удобно</h2>
        <ul className="grid md:grid-cols-2 gap-4 text-lg list-disc list-inside">
          <li>Готовишь дома, когда удобно</li>
          <li>Получаешь деньги за каждую порцию</li>
          <li>Не тратишься на упаковку и доставку</li>
          <li>Можно совмещать с детьми, работой и учёбой</li>
        </ul>
      </section>

      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">Сколько можно заработать?</h2>
        <div className="text-center text-xl">
          <p>🔸 В среднем — 300₽ с одной порции</p>
          <p>🔸 10 порций в день — это уже 3 000₽</p>
          <p>🔸 Всё зависит от твоих блюд и желания работать</p>
        </div>
      </section>

      <section className="py-16 px-6 bg-amber-50">
        <h2 className="text-3xl font-bold text-center mb-6">Частые вопросы</h2>
        <ul className="max-w-2xl mx-auto text-lg space-y-4">
          <li><strong>Нужно ли ИП или самозанятость?</strong> — Нет, не обязательно.</li>
          <li><strong>Кто покупает продукты?</strong> — Ты, но расходы быстро окупаются.</li>
          <li><strong>Как происходит оплата?</strong> — Мы переводим деньги в Telegram.</li>
          <li><strong>Можно готовить одно блюдо?</strong> — Да, если оно вкусное.</li>
        </ul>
      </section>

      <section className="py-20 px-4 text-center bg-amber-100">
        <h2 className="text-3xl font-bold mb-4">Готовишь вкусно?</h2>
        <p className="text-xl mb-6">Пора зарабатывать на этом. Присоединяйся к HomeEat — наш район ждёт твоё блюдо!</p>
        <Button className="text-lg px-6 py-3">Начать в Telegram</Button>
      </section>
    </div>
  );
}
