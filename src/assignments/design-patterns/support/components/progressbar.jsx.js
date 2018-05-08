import React from 'react'

const Progress = ({value,extraClass}) =>

<progress value={`${value}`} className={`progress ${extraClass}`} max="100"> </progress>

export default Progress