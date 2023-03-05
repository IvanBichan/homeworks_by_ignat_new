import s from './Loader.module.css'
import p4 from './s3.svg'

export const Loader = () => <div className={s.loader}>
    <img src={p4} alt={'Loading'} className={s.ellipse}/>
</div>
