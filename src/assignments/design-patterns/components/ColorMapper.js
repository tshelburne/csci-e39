import React from 'react'

const ColorMapper = ({colors, children, ...props}) => {
    const colorList = colors.split(' ')
    return (
        <section {...props} className="color-mapper">
            {React.Children.map(children, (child, idx) => {
                let col = idx
                while (col >= colorList.length) col -= colorList.length
                return (
                    <div
                        key={`multiple-${idx}`}
                        className="color-mapper-item"
                        style={{
                            '--mult-effect': colorList[col]
                        }}
                    >
                        {child}
                    </div>
                )
            })}
        </section>
    )
}

export default ColorMapper
