export default function TikTak(props) {

    const degMin = 6  //360 градусов / 60 минут или секунд
    const h = props.time.slice(0,2) * 30
    const m = props.time.slice(3,5) * degMin
    const s = props.time.slice(6,8) * degMin

    return (
        <div className="analog-clock">
            <div className="hour">
                <div className="hr" id="hr" style={{transform: `rotateZ(${(h) + (m/12)}deg)` }}></div>
            </div>
            <div className="min">
                <div className="mn" id="mn"  style={{transform: `rotateZ(${m}deg)` }}></div>
            </div>
            <div className="sec">
                <div className="sc" id="sc" style={{transform: `rotateZ(${s}deg)` }}></div>
            </div>
        </div>
    )
}
