import { proxy } from 'valtio'

export const store = proxy({
    start_Experience: false,
    controls_Enabled: false,
    scroll_Enabled: true,
    customizer_Enabled: false,
    penRef: null,
    modelConfigurator: {
        clipType: 'branded',
        barrelColor: {
            r: 0.9046609401702881,
            g: 0.5583400726318359,
            b: 0.21586063504219055,
        },
        otherColor: {
            r:0.5271145105361938,
            g:0.5271146893501282,
            b:0.5271151661872864,
        },
        ballPointColor: {
            r: 0.5271145105361938,
            g: 0.5271146893501282,
            b: 0.5271151661872864,
        },
    }
});