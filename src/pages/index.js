import style from '../styles/Style.module.scss'

export default function Home() {
  return (
    <section className={style['section-cover']}>
      <div className={style['title-cover']}>
        <h1>Training <span>Gym</span></h1>
        <div className={style['buttons']}>
          <a href='admin'>
            <button className={style['admin']}>Administrador</button>
          </a>
          <a href='client'>
            <button className={style['client']}>Cliente</button>
          </a>
        </div>
      </div>
    </section>
  )
}