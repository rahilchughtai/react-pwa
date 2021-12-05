import { Battery } from '@pxblue/react-progress-icons';
import { useBattery } from 'react-use';

export const AppBatteryDisplay = () => {
    const batteryState = useBattery();
    const percent = (batteryState.level * 100).toFixed(0)
    const { charging, isSupported } = batteryState

    return (
        <div className="App-battery" hidden={!isSupported} >
            <div >
                <Battery color={'teal'}
                    percent={percent}
                    size={26}
                    charging={charging}
                    outlined={false} />
            </div>
            {percent}%
        </div>
    )
}
