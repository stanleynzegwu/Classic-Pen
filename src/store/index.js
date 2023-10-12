import { proxy } from 'valtio'

export const store = proxy({
    mediaScreen: null,
    start_Experience: false,
    controls_Enabled: false,
    scroll_Enabled: true,
    customizer_Enabled: false, //will be true if you are in configurator
    penRef: null,
    modelConfigurator: {
        selectedPart: null, //default null but will turn to the part selected in configurator
        clipType: 'branded',
        barrelColor: {
            name: 'gold',
            color: {
                r: 0.9046609401702881,
                g: 0.5583400726318359,
                b: 0.21586063504219055,
            }
        },
        otherColor: {
            name: 'silver',
            color: {
                r:0.5271145105361938,
                g:0.5271146893501282,
                b:0.5271151661872864,
            }
        },
        ballPointColor: {
            name: 'silver',
            color: {
                r: 0.5271145105361938,
                g: 0.5271146893501282,
                b: 0.5271151661872864,
            }
        },
    }
});