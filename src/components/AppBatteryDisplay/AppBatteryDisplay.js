import { useBattery } from 'react-use';
import { Battery } from '@pxblue/react-progress-icons';


export const AppBatteryDisplay = () => {
    const batteryState = useBattery();
    const percent = (batteryState.level * 100).toFixed(0)
    const { charging, isSupported } = batteryState

    return (
        <div hidden={!isSupported} >
            <div className="App-battery">
                <Battery color={'teal'} percent={percent} size={36}  charging={charging} outlined={false} />
            </div>
            {percent}%
        </div>

    )
}
