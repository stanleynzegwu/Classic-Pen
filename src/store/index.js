import { proxy } from 'valtio'

export const store = proxy({
    start_Experience: false,
    contols_Enabled: false,
    scroll_Enabled: true,
    customizer_Enabled: false
});