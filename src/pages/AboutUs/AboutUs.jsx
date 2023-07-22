import { BackButton } from "@components/BackButton/BackButton"
import { Social } from "@components/Social/Social"
import "./about-as.scss"

export const AboutUs = () => {
  return (
    <>
      <main>
        <div className="about">
          <div className="container">
            <div className="mt-3">
              <BackButton />
            </div>
            <h2 className="about__title">Biz haqimizda</h2>
            <div className="about__text">
              <p>
                Друзья, наш сайт был специально создан для розничной и оптовой
                продажи интерьерного освещения на территории России. Мы
                сотрудничаем с ведущими производителями светотехнического
                оборудования, которые зарекомендовали себя на мировом рынке.
                Поэтому не стоит сомневаться в надёжном качестве продукции,
                представленной на страницах сайта. Интернет-магазин - это
                полноценный online-shop. Мы работаем без выходных, 24 часа в
                сутки и непрерывно расширяем и обновляем ассортимент товаров,
                чтобы каждый покупатель мог подобрать светотехнику,
                соответствующую его нуждам и желаниям. Наш магазин работает с
                большим количеством производителей, что позволяет найти
                светильник на самый утонченный .{" "}
              </p>
            </div>
            <Social />
            <div className="about__text bottom-text">
              <p>
                Интернет-магазин «Ваша Лампа» - это полноценный online-shop. Мы
                работаем без выходных, 24 часа в сутки и непрерывно расширяем и
                обновляем ассортимент товаров, чтобы каждый покупатель мог
                подобрать светотехнику, соответствующую его нуждам и желаниям.
                Друзья, наш сайт был специально создан для розничной и оптовой
                продажи интерьерного освещения на территории России. Мы
                сотрудничаем с ведущими производителями светотехнического
                оборудования, которые зарекомендовали себя на мировом рынке.
                Поэтому не стоит сомневаться в надёжном качестве продукции,
                представленной на страницах сайта. Интернет-магазин это
                полноценный online-shop. Мы работаем без выходных, 24 часа в
                сутки и непрерывно расширяем и обновляем ассортимент товаров,
                чтобы каждый покупатель мог подобрать светотехнику,
                соответствующую его нуждам и желаниям
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
