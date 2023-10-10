import { proxy } from 'valtio'

export const store = proxy({
    start_Experience: false,
    controls_Enabled: false,
    scroll_Enabled: true,
    customizer_Enabled: false,
    playCustomizeAnimation:false,
    playExitAnimation:false
});