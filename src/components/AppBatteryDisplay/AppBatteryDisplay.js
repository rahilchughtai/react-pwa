import { useBattery } from 'react-use';
import { Battery } from '@pxblue/react-progress-icons';


export const AppBatteryDisplay = () => {
    const batteryState = useBattery();
    const batteryPercent = (batteryState.level * 100).toFixed(0)


    return (
        <div hidden={!batteryState.isSupported} >
            <div className="App-battery">
                <Battery backgroundColor={'white'} percent={batteryPercent} size={30} color={'teal'} charging={batteryState.charging} outlined={false} />
            </div>
            {batteryPercent}%
        </div>

    )
}
