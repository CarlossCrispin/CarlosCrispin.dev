import PropTypes from 'prop-types'

export default function Carlos({ showNav }) {
  return (
    <>
      {!showNav && (
        <div className="container p-6">
          <div className="w-full text-2xl md:text-5xl text-violet-700 bg-violet-100 p-2">
            Hey hola ! soy Carlos, Desarrollador de software enfocado en el
            Frontend, consumiendo datos para transformarlos y generar colores,
            formas, tamaños, emociones y experiencias que dejen satisfecho al
            usuario, autodidacta por supervivencia desde 1988, apasionado por el
            adquirir y compartir el conocimiento que se recolecta en el entorno
            a diario, fiel creyente de la programación comunitaria y por lo
            tanto vocero de la idea de que el desarrollo de software es para
            todas y todos. Experimento con la natación, las artes marciales y
            los paseos en bici de forma amateur como medio de terapia para
            mejorar el yo(Carlos), aprecio música de todos los géneros sin
            prejuicios y lector constante de la generación beat como punto de
            fuga en momentos de confusión para obtener inspiración, consumidor
            visual de arte popular, de masas o de galerías por igual y amante
            del suadero en todas sus presentaciones.
          </div>
        </div>
      )}
    </>
  )
}

Carlos.propTypes = {
  showNav: PropTypes.bool
}
