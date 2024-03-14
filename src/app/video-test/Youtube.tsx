import playIcon from './img/play-icon.svg'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import s from './styles.module.css'
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

interface IProps {
  data: {
    src: string
    header: string
    text: string
  }
}

export default function Youtube() {


  return <section className={s.section}>

    <div className={s.wrapper}>

      <div className={s.div}>

        <ReactPlayer
          url='https://www.youtube.com/watch?v=njDDtuH3074'
          light='/images/pages/platforms/vyos-on-zededa/zededa-vyos-video-cover.jpg'
          playIcon={
            <Image
              src={playIcon}
              width={64}
              height={64}
              alt='Youtube'
            />
          }
          playing={true}
          controls
          height={406}
          width='100%'
          config={{
            youtube: {
              playerVars: {
                modestbranding: 1, // disable youtube logo
                fs: 0 // disables fullscreen
              },
            },
          }}
        />

        <p>I am video-test page</p>

      </div>

    </div>

  </section>
}