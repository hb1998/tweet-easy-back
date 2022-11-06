


const addListener = () => {
    setTimeout(() => { 
        document.querySelector('header').addEventListener('mousedown', (ev) => {
            const control = document.querySelector('header')?.children?.[0]?.children?.[0];
            if (!control?.contains?.(ev?.target)) {
                document.querySelector?.("[aria-label='Back']")?.click?.()
            }
        }, true)
    }, 1000);
}

addListener()

