const copyBtn = document.querySelector('.copy-btn')
const clearBtn = document.querySelector('.clear-btn')
const downloadBtn = document.querySelector('.download-btn')
const howItWorksBtn = document.querySelector('.how-it-works')

copyBtn.addEventListener('click', copyToClipboard)
clearBtn.addEventListener('click', clearDiv)
howItWorksBtn.addEventListener('click', showHowItWorks)

function textPresent(){
    const internalButtons = document.querySelector('.internal-buttons')
    internalButtons.classList.add('text-present')
    document.querySelector('.copy-btn').textContent = 'Copy to Clipboard'

}

function copyToClipboard(){
    let copiedCodes = ''
    const paras = document.querySelectorAll('.word-style')
    paras.forEach( para => {
        copiedCodes += `${para.textContent},`
    })
    // clipboard
    navigator.clipboard.writeText(copiedCodes)

    // renaming button text
    document.querySelector('.copy-btn').textContent = 'Copied 🎉'

}

function clearDiv(){
    const paras = document.querySelectorAll('.word-style')
    paras.forEach( para => {
        para.remove()
        document.querySelector('.internal-buttons').classList.remove('text-present')
    })
}

function showHowItWorks(){

}